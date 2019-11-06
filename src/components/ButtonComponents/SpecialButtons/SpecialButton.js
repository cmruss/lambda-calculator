import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special_button" value={props.button} onClick={() => {
        if (props.button === "C"){props.clearDisplay();}; }}>
        {props.button}
      </button>
    </>
  );
};

export default SpecialButton;