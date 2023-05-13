import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="div">
      <navbar className="nav">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
      </navbar>
    </div>
  );
}
