import classes from "./button.module.css";
interface StyleProps {
  width?: React.CSSProperties["width"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
}
interface ButtonProps {
  value: string;
  styles?: StyleProps;
}
function Button(props: ButtonProps) {
  const { value, styles } = props;
  return (
    <div>
      <button style={styles} className={classes.btn}>
        {value}
      </button>
    </div>
  );
}

export default Button;
