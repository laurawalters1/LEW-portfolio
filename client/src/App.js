import logo from "./logo.svg";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "./utils/auth";
import LoggedInUserProvider from "./context/LoggedInUserProvider";
import HomePage from "./pages/HomePage/HomePage";
import "react-bootstrap";
// router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./pages/BlogPage/BlogPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Sidebar from "./components/Sidebar/Sidebar";
import LoginPage from "./pages/LoginPage/LoginPage";

// http link
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

// auth link
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // we are setting the header on every network request that we make to have the auth token that is available
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// new apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <LoggedInUserProvider>
        <ChakraProvider>
          <Router>
            <div className="content position-absolute top-0 h-100 w-100">
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/blog" element={<BlogPage />}></Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
                <Route path="/admin" element={<LoginPage />}></Route>
              </Routes>
              {/* <Sidebar></Sidebar> */}
            </div>
          </Router>
        </ChakraProvider>
      </LoggedInUserProvider>
    </ApolloProvider>
  );
}

export default App;
