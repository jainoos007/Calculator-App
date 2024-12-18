import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import bgImg from "./images/img.jpg";

// Orbitron font
import "@fontsource/orbitron/400.css"; // Normal weight
import "@fontsource/orbitron/700.css"; // Bold weight
import "@fontsource/orbitron/900.css"; // Black/Extra bold weight

function App() {
  const [calculation, setCalculation] = useState("");

  // classes
  const blackButton =
    "p-2 h-10 w-10 bg-gray-800 rounded-md shadow-md font-mono hover:bg-opacity-80 active:bg-opacity-90 transition ease-in-out";

  const whiteButton =
    "p-2 h-10 w-10 bg-white rounded-md shadow-md text-black font-semibold hover:bg-opacity-80 active:bg-opacity-90 transition ease-in-out";

  const greenButton =
    "p-2 h-10 w-10 bg-teal-600 rounded-md shadow-md font-mono hover:bg-opacity-80 active:bg-opacity-90 transition ease-in-out";

  const handleClick = (value) => {
    switch (value) {
      case "0":
        setCalculation(calculation + "0");
        break;
      case "1":
        setCalculation(calculation + "1");
        break;
      case "2":
        setCalculation(calculation + "2");
        break;
      case "3":
        setCalculation(calculation + "3");
        break;
      case "4":
        setCalculation(calculation + "4");
        break;
      case "5":
        setCalculation(calculation + "5");
        break;
      case "6":
        setCalculation(calculation + "6");
        break;
      case "7":
        setCalculation(calculation + "7");
        break;
      case "8":
        setCalculation(calculation + "8");
        break;
      case "9":
        setCalculation(calculation + "9");
        break;
      case "+":
        setCalculation(calculation + "+");

        break;
      case "-":
        setCalculation(calculation + "-");

        break;
      case "x":
        setCalculation(calculation + "*");
        break;
      case "/":
        setCalculation(calculation + "/");
        break;
      case "(":
        setCalculation(calculation + "(");
        break;
      case ")":
        setCalculation(calculation + ")");
        break;
      case ".":
        setCalculation(calculation + ".");
        break;
      case "AC":
        setCalculation("");
        setCalculation("");
        break;
      case "DEL":
        setCalculation(calculation.slice(0, -1));
        break;
    }
  };

  const getResult = () => {
    setCalculation(eval(calculation));
  };

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="bg-slate-600 text-white px-3 py-5 rounded-lg shadow-lg">
        <div
          className="flex p-3 justify-end items-center h-16 bg-teal-600 "
          style={{ fontFamily: "orbitron, sans-serif", fontWeight: 400 }}
        >
          {calculation}
        </div>
        <div className="flex flex-col p-2 gap-2 bg-teal-700 ">
          <div className="flex gap-2">
            <button
              className={`${blackButton}`}
              onClick={() => handleClick("AC")}
            >
              AC
            </button>
            <button
              className={`${blackButton}`}
              onClick={() => handleClick("(")}
            >
              (
            </button>
            <button
              className={`${blackButton}`}
              onClick={() => handleClick(")")}
            >
              )
            </button>
            <button
              className={`${blackButton}`}
              onClick={() => handleClick("DEL")}
            >
              DEL
            </button>
          </div>
          <div className="flex gap-2">
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("9")}
            >
              9
            </button>
            <button
              className={`${greenButton}`}
              onClick={() => handleClick("/")}
            >
              /
            </button>
          </div>
          <div className="flex gap-2">
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("6")}
            >
              6
            </button>
            <button
              className={`flex justify-center items-center ${greenButton}`}
              onClick={() => handleClick("x")}
            >
              <RxCross2 />
            </button>
          </div>
          <div className="flex gap-2">
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("3")}
            >
              3
            </button>
            <button
              className={`${greenButton}`}
              onClick={() => handleClick("-")}
            >
              -
            </button>
          </div>
          <div className="flex gap-2">
            <button
              className={`${whiteButton}`}
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button
              className="p-2 h-10 w-10 bg-teal-600 rounded-md shadow-md font-mono"
              onClick={() => handleClick(".")}
            >
              .
            </button>
            <button className={`${greenButton}`} onClick={() => getResult()}>
              =
            </button>
            <button
              className={`${greenButton}`}
              onClick={() => handleClick("+")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
