import React, { useState } from "react";
import styled from "styled-components";

const App = styled.div`
  height: 100vh;
`;

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 20px;
  background-color: #ff6347;
  width: fit-content;
  border-radius: 10px;
  font-family: "Digital Numbers", sans-serif;
  position: relative;
  top: 25%;
  overflow: hidden;
`;

const Display = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  width: 220px;
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  background-color: #000;
  color: #00ff41;
  overflow-x: auto;
  white-space: nowrap;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setCurrentValue(currentValue + number);
    setDisplayValue(displayValue + number);
  };

  const handleOperatorClick = (op) => {
    if (currentValue) {
      setCurrentValue("");
      setOperator(op);
      setDisplayValue(displayValue + " " + op + " ");
    }
  };

  const handleClear = () => {
    setCurrentValue("");
    setOperator(null);
    setDisplayValue("");
  };

  const handleCalculate = () => {
    if (currentValue && operator) {
      const num1 = parseFloat(displayValue);
      const num2 = parseFloat(currentValue);
      let result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          break;
      }
      setDisplayValue(result.toString());
      setCurrentValue(result.toString());
      setOperator(null);
    }
  };

  return (
    <App>
      <CalculatorWrapper>
        <Display>{displayValue}</Display>
        <Buttons>
          <Button onClick={() => handleNumberClick("7")}>7</Button>
          <Button onClick={() => handleNumberClick("8")}>8</Button>
          <Button onClick={() => handleNumberClick("9")}>9</Button>
          <Button onClick={() => handleOperatorClick("+")}>+</Button>
          <Button onClick={() => handleNumberClick("4")}>4</Button>
          <Button onClick={() => handleNumberClick("5")}>5</Button>
          <Button onClick={() => handleNumberClick("6")}>6</Button>
          <Button onClick={() => handleOperatorClick("-")}>-</Button>
          <Button onClick={() => handleNumberClick("1")}>1</Button>
          <Button onClick={() => handleNumberClick("2")}>2</Button>
          <Button onClick={() => handleNumberClick("3")}>3</Button>
          <Button onClick={() => handleOperatorClick("*")}>*</Button>
          <Button onClick={() => handleNumberClick("0")}>0</Button>
          <Button onClick={handleClear}>C</Button>
          <Button onClick={handleCalculate}>=</Button>
          <Button onClick={() => handleOperatorClick("/")}>/</Button>
        </Buttons>
      </CalculatorWrapper>
    </App>
  );
};

export default Calculator;
