import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <strong>Example: </strong>
        <em>
          <span>"</span>
          {props.example}
         <span>"</span></em>
        
      </div>
    );
  } else {
    return null;
  }
}
