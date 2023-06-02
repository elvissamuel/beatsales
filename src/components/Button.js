import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <div className="Button">
      <button
        key={props.key}
        className={`mybtn ${props.style}`}
        onClick={props.onclick}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
