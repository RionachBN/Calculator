// Can use {useState} to declare variables. Create variable 'num' (the entered value), 
// 'sign' (the selected sign) and 'res' (the calculated value)

import React, {useState} from "react";

import './App.css';
import "./Wrapper";
import "./Screen";
import "./Buttonbox";
import "./Button";



const btnValues = [
["C", "+=", "%", "/"],
[7, 8, 9, "X"],
[4, 5, 6, "-"],
[1, 2, 3, "="],
];



const App = () => {
  let [calc, setCalc] = useState({
      sign: "" ,
      num: 0 ,
      res: 0

  });

// Edit button (btn) component so it can detect diferent button types 
// ? and : is a shortcut for if statements
  return (
    <Wrapper>
    <Screen value={calc.num ? calc.num : calc.res} />
    <Buttonbox>
      {btnValues.flat().map((btn, i) => {
          return(
          <Button
      key = {i}
     className={btn === "=" ? "equals" : ""}
    value={btn}
    onClick={
      btn === "C"
      ? resetClickHandler
      :btn ==="+-"
      ? invertClickHandler
      :btn === "%"
      ? percentClickHandler
      :btn === "="
      ? equalsClickhandler
      :btn === "/" || btn ==="X" || btn === "-"
      ? signClickHandler
      :btn === "."
      ? commaClickHandler
      : numClickHandler
    }
  
    />
    );
  })}   

</Buttonbox>
    </Wrapper>   
)
}

// The next step would be to write out the each of the ClickHandler functions in the code above
// e.g. const numClickHandler, const signClickHandler etc.





    

export default App;
