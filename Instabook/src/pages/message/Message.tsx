import classNames from "classnames";
import Avatar from "../../components/ui/avatar/Avatar";
import Input from "../../components/ui/input/Input";
import classes from "./message.module.css";

function Message() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <ul className={classes.friends}>
          <li className={classes.friend}>
            <Avatar size="sm" />
            <span>Aravind</span>
          </li>
          <li className={classes.friend}>
            <Avatar size="sm" />
            <span>Aravind</span>
          </li>
          <li className={classes.friend}>
            <Avatar size="sm" />
            <span>Aravind</span>
          </li>
        </ul>
      </div>
      <div className={classes.right}>
        <div className={classes.rightTop}>
          <Avatar size="sm" />
          <p className={classes.name}>Arun</p>
        </div>
        <hr />
        <div className={classes.rightMiddle}>
          <div className={classNames(classes.chatcontainer)}>
            <Avatar size="xs" />
            <div className={classes.msg}>Hiii</div>
          </div>
          <div className={classNames(classes.chatcontainer, classes.friendMsg)}>
            <Avatar size="xs" />
            <div className={classes.msg}>Hiii</div>
          </div>
          <div className={classNames(classes.chatcontainer)}>
            <Avatar size="xs" />
            <div className={classes.msg}>Hiii</div>
          </div>
        </div>
        <div className={classes.rightBottom}>
          <Input
            placeholder="Message"
            styles={{ width: "100%", height: "50px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Message;
