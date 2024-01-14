import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import classes from "./layout.module.css";

function Layout() {
  return (
    <div className={classes.container}>
      <div>
        <Topbar />
      </div>
      <div className={classes.section}>
        <Sidebar />
        <div className={classes.outletContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
