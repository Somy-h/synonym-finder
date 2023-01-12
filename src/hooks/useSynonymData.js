import { useQuery } from "react-query";
import axios from "axios";

const API_URL = "https://api.datamuse.com/";
const fetchSData = (queryString) => {
  return axios.get(`${API_URL}${queryString}`);
};

export const useFetchData = (queryString) => {
  return useQuery(
    ["synonym-finder", queryString],
    () => fetchSData(queryString),
    { refetchOnWindowFocus: false, enabled: false }
  );
};
