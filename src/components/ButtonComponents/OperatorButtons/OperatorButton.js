import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick ={props.handleClick} className="operator_button" value={props.button.char}>
        {props.button.char}
      </button>
    </>
  );
};

export default OperatorButton;