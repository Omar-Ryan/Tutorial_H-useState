import { React, useState, useEffect } from "react";
import axios from "axios";

const UseEffOne = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
    //   Test
    console.log(`id = ${id}`);
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h2> {post.title}</h2>
    </div>
  );
};

export default UseEffOne;
