import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

axios.defaults.baseURL = BASE_URL;

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);
  return { response, error, loading };
};

export default useAxios;
