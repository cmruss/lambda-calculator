import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button  onClick={props.handleClick} className="number_button" value={props.button}>
        {props.button}
      </button>
    </>
  );
};


export default NumberButton;