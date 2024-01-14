import { useNavigate } from "react-router-dom";
import classes from "./topbar.module.css";
import instalogo from "/insta-top-log.svg";
// import logout from "./logout.png";

function Topbar() {
  const nav = useNavigate();
  const logoutHandler = () => {
    nav("/");
  };
  return (
    <div className={classes.container}>
      <div className={classes.topLeft}>
        <img className={classes.image} src={instalogo} alt="" />
      </div>
      <div className={classes.topRight}>
        <p className={classes.name}>Arun</p>
        <img
          onClick={logoutHandler}
          className={classes.logout}
          src="/logout.png"
        />
      </div>
    </div>
  );
}

export default Topbar;
