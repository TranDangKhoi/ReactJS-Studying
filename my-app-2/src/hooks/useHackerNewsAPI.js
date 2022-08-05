import { useEffect, useRef, useState } from "react";
import axios from "axios";
export default function useHackerNewsAPI() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const handleFetchData = useRef({});
  const isMounted = useRef(true);
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  useEffect(() => {
    isMounted.current = true;
    return () => {
      // unmounted component
      isMounted.current = false;
    };
  });
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setHits(response.data?.hits || []);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg(`Oops! Something went wrong please try again later ${err}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    hits,
    query,
    setQuery,
    setUrl,
    loading,
    errorMsg,
  };
}
