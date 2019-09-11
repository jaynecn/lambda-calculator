import React, { useState } from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';


//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {

const [numberState, setNumberState] = useState(numbers);

  // STEP 2 - add the imported data to state
  return (
    <div>
       {
        numberState.map(
          (info) => (
            <NumberButton
              key={info}
              name={info}
              setNumberState={setNumberState}
            />
          ))
      }
    </div>
  );
};

export default Numbers;