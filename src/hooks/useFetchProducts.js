import { useState, useEffect } from "react";

const useFetchProducts = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/api/cotizacion/`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setData(json);
      });
  }, [url]);

  return { data, isLoading };
};

export default useFetchProducts