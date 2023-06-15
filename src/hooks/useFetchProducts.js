import { useState, useEffect } from "react";

const useFetchProducts = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem('products');

    if (cachedData && cachedData !== "undefined") {
      try {
        const parsedData = JSON.parse(cachedData);
        setData(parsedData);
        setIsLoading(false);
      } catch (e) {
        console.error("Failed to parse cached data:", e);
      }
    } else {
      fetch(`${url}/api/cotizacion/`)
        .then((res) => res.json())
        .then((json) => {
          setIsLoading(false);
          setData(json);
          localStorage.setItem('products', JSON.stringify(json));
        })
        .catch((error) => {
          console.error("Failed to fetch data:", error);
          setIsLoading(false);
        });
    }
  }, [url]);

  return { data, isLoading };
};

export default useFetchProducts;
