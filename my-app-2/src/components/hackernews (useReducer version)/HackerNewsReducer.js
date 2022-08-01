import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  url: `https://hn.algolia.com/api/v1/search?query=''`,
};
const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_HITS": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }

    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};

const HackerNewsReducer = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
  //   const [hits, setHits] = useState([]);
  //   const [query, setQuery] = useState("react");
  //   const [loading, setLoading] = useState(true);
  //   const [url, setUrl] = useState(
  //     `https://hn.algolia.com/api/v1/search?query=${query}`
  //   );
  const handleFetchHits = useRef({});
  handleFetchHits.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    //   setLoading(true);
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_HITS",
        payload: response.data?.hits,
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      // console.log(response);
      // setHits(response.data?.hits || []);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      // console.log(error);
    }
  };
  useEffect(() => {
    handleFetchHits.current();
  }, [state.url]);
  return (
    <div className="w-[600px] mx-auto my-5 p-5 bg-white shadow-md rounded-md">
      <div className="flex gap-x-3">
        <div className="flex items-center gap-5 w-full border border-gray-200 rounded-lg py-3 px-5">
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
            placeholder="Enter your keyword"
            defaultValue={state.query}
            onChange={(e) =>
              dispatch({
                type: "SET_QUERY",
                payload: e.target.value,
              })
            }
          />
        </div>
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
        >
          Search
        </button>
      </div>
      <div className="my-3 flex gap-4 flex-wrap">
        {state.loading && (
          <div className="loading w-8 h-8 rounded-full border-4 border-r-4 border-blue-400 border-r-transparent animate-spin mx-auto my-10"></div>
        )}
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item) => (
            <h3 className="bg-gray-300 p-4 rounded-md" key={item.title}>
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNewsReducer;
