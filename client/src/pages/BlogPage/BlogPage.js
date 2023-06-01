import React from "react";
import { UserState } from "../../context/LoggedInUserProvider";

export default function BlogPage() {
  const { loggedInUser } = UserState();
  return <div></div>;
}
