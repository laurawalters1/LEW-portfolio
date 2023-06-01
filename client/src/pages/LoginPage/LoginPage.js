import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
// TODO - import auth here
import Auth from "../../utils/auth";
// mutations/queries
import { LOGIN_ADMIN_USER } from "../../utils/mutations";

import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

export default function LoginPage() {
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  const [loginUser, { error }] = useMutation(LOGIN_ADMIN_USER);

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userInput },
      });
      console.log(data);

      Auth.login(data.loginAdminUser.token);
      console.log("Logged in!");
    } catch (err) {
      alert(err);
    }

    setUserInput({
      username: "",
      password: "",
    });
  };

  return (
    <div className=" p-5 d-flex flex-column justify-content-center align-items-center">
      <form
        className=" d-flex flex-column justify-content-around align-items-center"
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder="username"
          value={userInput.username}
          name="username"
          className="form-control my-2"
          onChange={handleUserInput}
        ></input>
        <input
          placeholder="password"
          value={userInput.password}
          name="password"
          className="form-control mt-1 mb-3"
          onChange={handleUserInput}
          type="password"
        ></input>
        <button className="btn btn-light">Submit</button>
      </form>
    </div>
  );
}
