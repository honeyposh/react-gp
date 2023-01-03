import React from "react";
// import Button from "../UI/Button";
import classes from "./Input.module.css";

function Input(props) {
  const [input, setInput] = React.useState({
    SerialNumber: "",
    CourseCode: "",
    Unit: "",
    Score: "",
    Grade: "",
    Point: "",
  });
  const [close, setClose] = React.useState(true);

  function handleChange(event) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleClose() {
    setClose(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(input);
    props.addList(input);
    setInput({
      SerialNumber: "",
      CourseCode: "",
      Unit: "",
      Score: "",
      Grade: "",
      Point: "",
    });
  }
  let gradePoint;
  if (input.Score) {
    if (input.Score < 40) {
      input.Grade = "F";
      gradePoint = 0;
    } else if (input.Score < 45) {
      input.Grade = "E";
      gradePoint = 1;
    } else if (input.Score < 50) {
      input.Grade = "D";
      gradePoint = 2;
    } else if (input.Score < 60) {
      input.Grade = "C";
      gradePoint = 3;
    } else if (input.Score < 70) {
      input.Grade = "B";
      gradePoint = 4;
    } else if (input.Score <= 100) {
      input.Grade = "A";
      gradePoint = 5;
    }
    input.Point = gradePoint * input.Unit;
  }

  return (
    <div>
      {close && (
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <div className={classes.container}>
              <input
                type="text"
                placeholder="Serial-Number"
                disabled="disabled"
                name="serialNumber"
              />
              <input
                type="text"
                placeholder="Course-Code"
                disabled="disabled"
              />
              <input type="number" placeholder="Unit" disabled="disabled" />
              <input type="number" placeholder="Score" disabled="disabled" />
              <input type="text" placeholder="Grade" disabled="disabled" />
              <input type="number" placeholder="Point" disabled="disabled" />

              <input
                type="text"
                name="SerialNumber"
                value={input.SerialNumber}
                onChange={handleChange}
              />
              <input
                type="text"
                name="CourseCode"
                value={input.CourseCode}
                onChange={handleChange}
              />
              <input
                type="number"
                name="Unit"
                onChange={handleChange}
                value={input.Unit}
              />
              <input
                type="text"
                name="Score"
                onChange={handleChange}
                value={input.Score}
              />
              <input
                type="text"
                name="Grade"
                onChange={handleChange}
                value={input.Grade}
              />
              <input
                type="number"
                name="Point"
                onChange={handleChange}
                value={input.Point}
              />
            </div>
            <button type="submit">ADD</button>
            <button onClick={handleClose} className={classes.close}>
              CLOSE
            </button>
          </form>
        </React.Fragment>
      )}
    </div>
  );
}
export default Input;
