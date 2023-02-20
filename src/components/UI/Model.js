import { Fragment } from "react";
import classes from "./Model.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onhideCart}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlay = document.getElementById("overlay");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onhideCart={props.onhideCart} />,
        overlay
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        overlay
      )}
    </Fragment>
  );
};

export default Model;
