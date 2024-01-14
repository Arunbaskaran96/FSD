import { Link } from "react-router-dom";
import classes from "./sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <Link className={classes.sidebarItem} to="/layout/home">
            <img className={classes.image} src="/home-icon.png" />
            <span className={classes.text}>Home</span>
          </Link>
        </li>
        <li>
          <Link className={classes.sidebarItem} to="/layout/search">
            <img className={classes.image} src="/search.png" />
            <span className={classes.text}>Search</span>
          </Link>
        </li>
        <li>
          <Link to="/layout/message" className={classes.sidebarItem}>
            <img className={classes.image} src="/message.png" />
            <span className={classes.text}>Message</span>
          </Link>
        </li>
        <li>
          <Link to="/layout/create" className={classes.sidebarItem}>
            <img className={classes.image} src="/create.png" />
            <span className={classes.text}>Create</span>
          </Link>
        </li>
        <li>
          <Link className={classes.sidebarItem} to="/layout/profile">
            <img className={classes.image} src="/profile.png" />
            <span className={classes.text}>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
