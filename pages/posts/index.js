import { Component } from "react";
import Layout from "../../components/layout";

import { getPosts } from "../../lib/posts";
import Post from "../../components/Post/Post";
import styles from "./Posts.module.scss";
class Posts extends Component {
  state = {
    selectedPostId: null,
  };

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    const posts = this.props.posts.map((post) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });
    return (
      <Layout>
        <section className={styles.Posts}>{posts}</section>
      </Layout>
    );
  }
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts: posts,
    },
  };
}

export default Posts;
