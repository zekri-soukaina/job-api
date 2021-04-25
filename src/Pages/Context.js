import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = React.createContext();
export function useDataContext() {
  return useContext(DataContext);
}
export function ContextProvider({ children }) {
  const [state, setState] = useState([]);
  const [seeMore, setSeeMore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await axios.get(
        "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=69a4c772&app_key=5d5c954da8aab4859aa2c8bfc2a0622e&&content-type=application/json"
      );
      const response2 = await axios.get(
        "https://api.adzuna.com/v1/api/jobs/gb/search/2?app_id=69a4c772&app_key=5d5c954da8aab4859aa2c8bfc2a0622e&&content-type=application/json"
      );
      console.log(response1.data.results);
      console.log(response2.data.results);
      // const response = { ...response1, ...response2 };
      // console.log(response);
      setState(response1.data.results);
      setSeeMore(response2.data.results);
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, setState, seeMore }}>
      {children}
    </DataContext.Provider>
  );
}
