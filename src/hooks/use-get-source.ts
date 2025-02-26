import axios from "axios";
import React, { useEffect, useState } from "react";
import { NEWS_API_KEY } from "src/config";

interface SourceProp {
  name: string;
  description: string;
}
const useGetSource = () => {
  const [data, setData] = useState<SourceProp[]>([]);
  const [error,setError] =useState("")
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines/sources",
        { params: { apiKey: NEWS_API_KEY } }
      );
      setData(response.data.sources);
    } catch (err) {
      console.log(err);
      alert(err ? (err as Error).message : "Error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useGetSource;
