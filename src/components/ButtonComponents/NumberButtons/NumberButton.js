import React from "react";
import '../../../App.css';

const NumberButton = (props) => {
  return (
    <>
    { props.name === "0" ? <button className="button" id="zero">{props.name}</button>
      : <button className="button" id="number">{props.name}</button>
    }
    {/* <button className="button" id="number">{props.name}</button> */}
    </>
  );
};

export default NumberButton;