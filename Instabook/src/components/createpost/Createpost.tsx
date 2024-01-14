import { useState } from "react";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import classes from "./createpost.module.css";

function Createpost() {
  const [post, setPost] = useState<any>(null);

  const postHandler = (e: any) => {
    setPost(e.target.files[0]);
  };
  console.log(post);
  return (
    <div className={classes.container}>
      <form className={classes.left}>
        <input
          className={classes.input}
          placeholder="please select file"
          type="file"
          onChange={(e: any) => postHandler(e)}
        />
        <Input
          placeholder="Description"
          styles={{ height: "50px", width: "400px" }}
        />
        <Button value="Post" />
      </form>
      <div className={classes.right}>
        <img
          className={classes.post}
          src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
          alt="preview"
        />
      </div>
    </div>
  );
}

export default Createpost;
