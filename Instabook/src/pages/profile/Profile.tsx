import Post from "../../components/post/Post";
import Avatar from "../../components/ui/avatar/Avatar";
import Button from "../../components/ui/button/Button";
import classes from "./profile.module.css";
function Profile() {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <Avatar size="lg" />
        </div>
        <div className={classes.topRight}>
          <p className={classes.name}>Arun</p>
          <Button value="Edit" />
          <div className={classes.stats}>
            <p>0 posts</p>
            <p>0 followers</p>
            <p>0 followings</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.bottom}>
        <Post profile />
        <Post profile />
        <Post profile />
        <Post profile />
        <Post profile />
      </div>
    </div>
  );
}

export default Profile;
