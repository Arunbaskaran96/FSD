import Event from "../../components/event/Event";
import Post from "../../components/postcontainer/PostContainer";

import classes from "./home.module.css";

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.postContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className={classes.eventContainer}>
        <Event />
      </div>
    </div>
  );
}

export default Home;
