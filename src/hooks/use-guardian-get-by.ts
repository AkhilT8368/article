import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GUARDIAN_API_KEY } from "src/config";
import { GuardianArticle } from "src/types/guardian-article";

const useGuardianGetBy = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [data, setData] = useState<GuardianArticle | null>(null);

  
  const fetchData = async () => {
    try {
      const guardian = await axios.get(
        `https://content.guardianapis.com/${id}`,
        {
          params: {
            "api-key": GUARDIAN_API_KEY,
          },
        }
      );
      console.log(guardian)
      setData(guardian.data.response.content);
    } catch (err) {
      console.log(err);
      alert(err ? (err as Error).message : "Error");
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return data;
};

export default useGuardianGetBy;
