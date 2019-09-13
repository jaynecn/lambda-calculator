import React from "react";
import '../../../App.css';


const OperatorButton = (props) => {
  console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button" id="operator">{props.name.char}</button>
    </>
  );
};

export default OperatorButton;