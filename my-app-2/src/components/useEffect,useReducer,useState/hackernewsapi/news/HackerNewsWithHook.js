import React, { useState } from "react";
import useHackerNewsAPI from "../../../../hooks/useHackerNewsAPI";
// import lodash from "lodash";
//https://hn.algolia.com/api/v1/search?query=react
// Những vấn đề cần chú ý:
/*
 * Loading khi api chưa trả về data
 * Nếu api bị lỗi thì cần phải hiện ra lỗi
 * Nên đợi một lúc rồi mới bắt đầu query (sử dụng debounce)
 */
const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("react");
  const { data, loading, setUrl, errorMsg } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );
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
          data.hits.length > 0 &&
          data.hits.map((item) => (
            <h3 className="p-2 bg-gray-200 rounded-md" key={item.title}>
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
