import React, { useEffect } from "react";
import axios from "axios";

export default function List() {
  useEffect(() => {
    axios
      .get(
        "http://118.24.129.173:3000/api/4/news/9753289?target=https%3A%2F%2Fnews-at.zhihu.com%2F"
      )
      .then((res) => console.log(res))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <div>List</div>;
}
