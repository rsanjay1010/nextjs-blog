import React, { Component } from "react";
import { withRouter } from "next/router";
import styles from "./FullPost.module.scss";

import axios from "../../axios";
import { getPost } from "../../lib/posts";
import Layout from "../../components/layout";

class FullPost extends Component {
  deletePostHandler = () => {
    axios
      .delete(`/posts/${this.props.loadedPost.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.props.loadedPost) {
      post = (
        <div className={styles.FullPost}>
          <h1>{this.props.loadedPost.title}</h1>
          <p>{this.props.loadedPost.body}</p>
          <div className={styles.Edit}>
            <button className={styles.Delete} onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return <Layout>{post}</Layout>;
  }
}

export async function getServerSideProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: {
      loadedPost: post,
    },
  };
}
export default FullPost;
