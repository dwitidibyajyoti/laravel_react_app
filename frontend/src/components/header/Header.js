import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <h1>{props.Header}</h1>
      <p>{props.title}</p>
    </header>
  );
}
