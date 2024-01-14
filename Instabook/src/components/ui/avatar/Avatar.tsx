import classes from "./avatar.module.css";
import classNames from "classnames";

interface AvatarProps {
  size: "sm" | "lg" | "xs";
}
function Avatar(props: AvatarProps) {
  const { size } = props;
  return (
    <div>
      <img
        className={classNames(
          size == "sm" && classes.sm,
          size === "lg" && classes.lg,
          size === "xs" && classes.xs
        )}
        src="https://cdn.punchng.com/wp-content/uploads/2023/09/01133700/Ronaldo.jpeg"
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
