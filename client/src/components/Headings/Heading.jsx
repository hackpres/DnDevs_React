import React from "react";
import "../../assets/css/Heading.css";

function Heading(props) {
  function getHeadingElement() {switch (props.h) {
    case "h1":
      return <h1>{props.title}</h1>;
    case "h3":
      return <h3>{props.title}</h3>;
    case "h4":
      return <h4>{props.title}</h4>;
    case "h5":
      return <h5>{props.title}</h5>;
    default:
      return <h2>{props.title}</h2>;
  }}
  return (
    getHeadingElement(props)
  )
}

export default Heading;
