import { Link } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";
import classes from "./signup.module.css";

function Signup() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label className={classes.label}>Name</label>
        <Input styles={{ width: "280px" }} placeholder="Name" type="text" />
        <label>Email</label>
        <Input styles={{ width: "280px" }} placeholder="Email" type="email" />
        <label>Password</label>
        <Input
          styles={{ width: "280px" }}
          placeholder="Password"
          type="password"
        />
        <label>DOB</label>
        <Input styles={{ width: "280px" }} placeholder="Dob" type="date" />
        <label>Profile picture</label>
        <Input
          styles={{ width: "280px" }}
          placeholder="profilepic"
          type="file"
        />
        <div style={{ marginTop: "10px" }}>
          <Button value="Register" styles={{ width: "280px" }} />
        </div>
      </form>
      <div className={classes.bottom}>
        Already Have an account?
        <Link className={classes.link} to="/">
          Signin
        </Link>
      </div>
    </div>
  );
}

export default Signup;
