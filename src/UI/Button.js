import classes from "./Button.module.css";
function Button(props) {
  return (
    <div className={classes.btn}>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
}
export default Button;
