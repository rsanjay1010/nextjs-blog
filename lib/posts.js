import axios from "../axios";

export async function getPosts() {
  const res = await axios.get("/posts");
  const posts = await res.data.slice(0, 4);

  return posts;
}

export async function getPost(id) {
  const res = await axios.get(`/posts/${id}`);

  return res.data;
}
