import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ news }) => {
  console.log(news);
  return (
    <div>
      {/* {news.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  );
};

export default withLoading(FetchingData, `https://hn.algolia.com/api/v1/search?query=react`);
