import React, { HTMLInputTypeAttribute, forwardRef } from "react";
import classes from "./input.module.css";

interface styleProps {
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
}

interface InputProps {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  styles?: styleProps;
}
const Input = forwardRef(function (props: InputProps, ref: any) {
  const { placeholder, styles, type } = props;
  return (
    <div>
      <input
        ref={ref}
        style={styles}
        className={classes.input}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
});

export default Input;
