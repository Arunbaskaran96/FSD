import classes from "./post.module.css";
interface PostProps {
  profile?: boolean;
}
function Post(props: PostProps) {
  const { profile } = props;
  return (
    <div>
      <img
        className={profile ? classes.profile : classes.post}
        src="https://cdn.punchng.com/wp-content/uploads/2023/09/01133700/Ronaldo.jpeg"
        alt="post"
      />
    </div>
  );
}

export default Post;
