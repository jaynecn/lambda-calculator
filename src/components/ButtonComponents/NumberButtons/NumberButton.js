import React, { useState } from "react";
import Numbers from './Numbers';

const NumberButton = (props) => {
  return (
    <>
    <button onClick={(info) => setNumberState(props.name)}>{props.name}</button>
    </>
  );
};

export default NumberButton