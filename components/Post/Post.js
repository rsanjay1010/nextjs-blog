import styles from "./Post.module.scss";
import Link from "next/link";

const Post = (props) => (
  <Link href={`posts/${props.id}`}>
    <article className={styles.Post}>
      <h1>{props.title}</h1>

      <div className={styles.Info}>
        <div className={styles.Author}>{props.author}</div>
      </div>
    </article>
  </Link>
);

export default Post;
