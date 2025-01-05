import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.user.token);
  const API_URL = 'https://backend-scoreorganizer-08671ae228b7.herokuapp.com';
  const API_TEST = 'http://localhost:3000'
console.log(`${API_TEST}${url}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL+url, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(null);
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
