import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";
import axios from "axios";

const HackerNews = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const handleFetchData = useRef({});
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      // unmounted component
      isMounted.current = false;
    };
  });
  handleFetchData.current = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8386/api/v1/product/search/query=${query}`
      );
      setProducts(response.data);
      console.log(response);
      return response;
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    handleFetchData.current(query);
  }, [query]);
  return (
    <div className="bg-white w-[600px] mx-auto mt-5 p-7 rounded-lg shadow-md">
      <div className="flex gap-x-5">
        <div className="flex items-center w-full gap-5 px-5 py-3 border border-gray-200 rounded-lg focus:border-blue-300">
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
            className="w-full bg-transparent outline-none"
            placeholder="Enter your content"
            onChange={lodash.debounce((e) => setQuery(e.target.value), 1000)}
          />
        </div>
      </div>

      {/* {loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-400 rounded-full loading border-r-transparent animate-spin"></div>
      )} */}
      {/* {!loading && errorMsg && <p className="text-red-500">{errorMsg}</p>} */}
    </div>
  );
};

export default HackerNews;
