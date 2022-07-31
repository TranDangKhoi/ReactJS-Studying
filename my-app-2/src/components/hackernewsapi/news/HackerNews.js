import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import lodash from "lodash";
//https://hn.algolia.com/api/v1/search?query=react
// Những vấn đề cần chú ý:
/*
 * Loading khi api chưa trả về data
 * Nếu api bị lỗi thì cần phải hiện ra lỗi
 * Nên đợi một lúc rồi mới bắt đầu query (sử dụng debounce)
 */
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const handleFetchData = useRef({});
  handleFetchData.current = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMsg(`Oops! Something went wrong please try again later ${err}`);
    }
  };
  useEffect(() => {
    handleFetchData.current(query);
  }, [url]);
  return (
    <div className="bg-white w-[600px] mx-auto mt-5 p-7 rounded-lg shadow-md">
      <div className="flex gap-x-5">
        <div className="flex items-center gap-5 w-full border border-gray-200 rounded-lg py-3 px-5 focus:border-blue-300">
          <span className="flex-shrink-0 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full outline-none bg-transparent"
            defaultValue={query}
            placeholder="Enter your content"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-md p-5"
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="loading w-8 h-8 rounded-full border-4 border-r-4 border-blue-400 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMsg && <p className="text-red-500">{errorMsg}</p>}

      <div className="mt-5 mb-5 flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => (
            <h3 className="p-2 bg-gray-200 rounded-md" key={item.title}>
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
