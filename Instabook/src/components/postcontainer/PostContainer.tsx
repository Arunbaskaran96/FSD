import Post from "../post/Post";
import classes from "./postcontainer.module.css";

function PostContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <img
          src="https://cdn.punchng.com/wp-content/uploads/2023/09/01133700/Ronaldo.jpeg"
          alt="pic"
          className={classes.image}
        />
        <p>Arun</p>
      </div>
      <div className={classes.middle}>
        <Post />
      </div>
      <div className={classes.bottom}>
        <img className={classes.action} src="/like.png" />
        <img className={classes.action} src="/comment.png" />
      </div>
    </div>
  );
}

export default PostContainer;
