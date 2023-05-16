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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="username"
          value={userInput.username}
          name="username"
          onChange={handleUserInput}
        ></input>
        <input
          placeholder="password"
          value={userInput.password}
          name="password"
          onChange={handleUserInput}
          type="password"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
