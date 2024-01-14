import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";
import classes from "./signin.module.css";
import instalogo from "/instabook-logo.png";
import React, { useRef } from "react";

function Signin() {
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const nav = useNavigate();

  const formHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(email.current?.value, password.current?.value);
    nav("/layout/home");
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.top}>
          <img className={classes.logo} src={instalogo} />
          <div>
            <p className={classes.companyName}>Instabook</p>
            <p className={classes.slogan}>Connecting People</p>
          </div>
        </div>
        <div className={classes.middle}>
          <h1>Login to Your Account</h1>
          <p>Login using gmail</p>
          <div className={classes.google}>GMail</div>
          <div className={classes.seperation}>
            or
            <hr style={{ marginTop: "20px" }} />
          </div>
        </div>
        <div className={classes.bottom}>
          <form onSubmit={formHandler}>
            <Input
              styles={{ width: "300px", height: "40px" }}
              placeholder="Email"
              ref={email}
              type="email"
            />
            <Input
              styles={{ width: "300px", height: "40px" }}
              placeholder="Password"
              ref={password}
              type="password"
            />
            <div style={{ marginTop: "5px", marginBottom: "30px" }}>
              <Button styles={{ width: "150px" }} value="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className={classes.right}>
        <div>
          <h1>New Here</h1>
          <p>Sign up and explore the world in your hand</p>
          <Link to="/register">
            <Button styles={{ backgroundColor: "red" }} value="Sign up" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
