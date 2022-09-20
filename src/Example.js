import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <span>"</span>
        {props.example}
        <span>"</span>
      </div>
    );
  } else {
    return null;
  }
}
