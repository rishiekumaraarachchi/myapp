import React from "react";
import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const [massage, setMassage] = useState("Lets count");

  // const changeCount = (value) => {
  //   if (value === "add") {
  //     if (count < 10) {
  //       setCount(count + 1);
  //       if (count >= 4 && count <= 7) {
  //         setMassage("Now its avarage");
  //       }
  //       if (count > 7) {
  //         setMassage("Its over rpm");
  //       }
  //     } else {
  //       alert("Max");
  //     }
  //   } else {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     } else {
  //       alert("Min");
  //     }
  //   }
  // };

  const changeCount = (value) => {
    if (value === "add") {
      if (count < 10) {
        setCount((prevCount) => {
          const newCount = prevCount + 1;

          if (newCount >= 4 && newCount <= 7) {
            setMassage("Now it's average");
          } else if (newCount > 7) {
            setMassage("It's over rpm");
          }

          return newCount;
        });
      } else {
        alert("Max");
      }
    } else if (value === "subtract") {
      if (count > 0) {
        setCount((prevCount) => {
          const newCount = prevCount - 1;

          if (newCount >= 4 && newCount <= 7) {
            setMassage("Now it's average");
          } else if (newCount > 7) {
            setMassage("It's over rpm");
          }

          return newCount;
        });
      } else {
        alert("Min");
      }
    } else {
      alert("Invalid value");
    }
  };

  const renderBars = () => {
    const bars = [];
    for (let i = 0; i < count; i++) {
      bars.push(
        <div
          key={i}
          style={{
            backgroundColor: "red",
            height: "100%",
            width: "10%",
          }}
        ></div>
      );
    }
    return bars;
  };

  console.log("count", count);

  return (
    <div>
      <h1>{massage}</h1>
      <div
        style={{
          border: "1px solid black",
          height: "100px",
          width: "80%",
          margin: "auto",
          display: "flex",
        }}
      >
        {renderBars()}
      </div>
      <button onClick={() => changeCount("add")}>Add</button>
      <button onClick={() => changeCount("subtract")}>Remove</button>
    </div>
  );
}

export default Test;
