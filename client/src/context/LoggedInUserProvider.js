import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useQuery,
} from "react";
// get user information
import { CONTEXT, GET_ME } from "../utils/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import travelly from "../images/travelly.png";

// create chat context
const UserContext = createContext();

// create chat provider
const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [getMe] = useLazyQuery(GET_ME);
  const [focusedProject, setFocusedProject] = useState({
    title: "Travelly",
    description:
      "Travelly is a travel-based social media application, which aims to safely connect solo-travellers with like-minded people. The application currently functions as a concept demonstration, and supports two types of user - a travel-provider (who is permitted to advertise trips on the application) and a traveller (who can join trips via the application and converse with others who are travelling to the same destination via a live chat that is created for each trip on the app. We also were keen to implement an element of gamification for the travel experience, and have implemented 'badges' that a traveller can achieve. Each badge has a list of countries required for the traveller to visit by booking themselves on trips through Travelly, once the user has attended all of the countries on the list, they earn the badge and it is displayed on their profile.",
    technologies:
      "Technologies used in this application include JavaScript, React, Mongoose, MongoDb, GraphQL, Express, node.js,  Amazon Web Services S3 Bucket, Socket IO and Chakra UI.",
    repoLink: "https://github.com/laurawalters1/travelly-app",
    deployedLink: "https://gentle-lowlands-70428.herokuapp.com/#/dashboard",
    imgSource: travelly,
  });

  // get information regarding the logged in user
  const getUserDataFunc = async () => {
    const { loading, data } = await getMe();
    if (!loading) {
      setLoggedInUser(data?.getMe);
    }
  };

  useEffect(() => {
    getUserDataFunc();
  }, []);
  // console.log("provider", loggedInUser);
  return (
    // return chat provider
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        focusedProject,
        setFocusedProject,
        test: "test",
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// export chat context
export const UserState = () => {
  return useContext(UserContext);
};
export default UserProvider;
