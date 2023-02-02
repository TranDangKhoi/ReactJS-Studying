import { useEffect } from "react";
import { useState } from "react";

function withLoading(Component, url) {
  return (props) => {
    const [news, setNews] = useState();
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(url);
        const data = await res.json();
        setNews(data.hits || []);
        console.log(data);
      }
      fetchData();
    }, []);
    if (!news || news.length === 0) return <div>Loading...</div>;
    return (
      <Component
        news={news}
        {...props}
      ></Component>
    );
  };
}

export default withLoading;
// High order function: map, filter, some, every, reduce, ...
// [1,2,3].map((item, array) => {})
// Bên trong map.() là 1 function, function đó được truyền vào 2 args là item và array
// Tương tự với hocs ->  1 component này chứa 1 component khác
