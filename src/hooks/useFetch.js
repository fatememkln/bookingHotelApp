import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function useFetch(url, query = "") {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}?${query}`);
        setdata(data);
      } catch (err) {
        setdata([]);
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url, query]);

  return { data, isLoading };
}
