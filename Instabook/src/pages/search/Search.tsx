import Avatar from "../../components/ui/avatar/Avatar";
import Input from "../../components/ui/input/Input";
import classes from "./search.module.css";
function Search() {
  return (
    <div className={classes.container}>
      <div>
        <Input
          styles={{ height: "40px", width: "400px" }}
          type="text"
          placeholder="Search..."
        />
        <div className={classes.friends}>
          <div className={classes.friend}>
            <Avatar size="sm" />
            <p>Arun</p>
          </div>
          <div className={classes.friend}>
            <Avatar size="sm" />
            <p>Arun</p>
          </div>
          <div className={classes.friend}>
            <Avatar size="sm" />
            <p>Arun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
