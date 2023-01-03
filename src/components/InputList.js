import React from "react";
import classes from "./InputList.module.css";
// import Button from "../UI/Button";

export default function InputList({ list, SerialNumber, Coursecode }) {
  const [calcgp, setCalcGp] = React.useState("");
  const [point, setPoint] = React.useState("");
  const [unit, setUnit] = React.useState("");
  function calc() {
    let totalUnit = 0;
    let totalPoint = 0;

    list.forEach((itel) => {
      totalPoint += itel.Point;
      totalUnit += parseInt(itel.Unit);
      setPoint(totalPoint);
      setUnit(totalUnit);
      setCalcGp(Math.round((totalPoint / totalUnit) * 100) / 100);
    });
  }

  return (
    <div className={classes.table}>
      <div>
        {list.map((item) => (
          <div key={item.SerialNumber}>
            <table>
              <tbody>
                <tr>
                  <td>{item.SerialNumber}</td>
                  <td className={classes.coursecode}>{item.CourseCode}</td>
                  <td>{item.Unit}</td>
                  <td>{item.Score}</td>
                  <td>{item.Grade}</td>
                  <td>{item.Point}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <button onClick={calc}>Calc gp</button>
        <div className={classes.calcgp}>{`YOUR GP IS: ${calcgp}`}</div>
        <div className={classes.point}>{`YOUR TOTAL POINT IS: ${point}`}</div>
        <div className={classes.unit}>{`YOUR TOTAL UNIT IS: ${unit}`}</div>
      </div>
    </div>
  );
}
