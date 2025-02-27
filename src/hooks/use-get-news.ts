import axios from "axios";
import { kebabCase } from "change-case";
import React, { useEffect, useState } from "react";
import { GUARDIAN_API_KEY, NEWS_API_KEY, NYT_API_KEY } from "src/config";
import { GuardianArticle } from "src/types/guardian-article";
import { NewsArticle } from "src/types/news-article";
import { NyTimesProps } from "src/types/ny-times-types";

// interface Article {
//   title: string;
//   url: string;
//   source: { name: string };
//   publishedAt: string;
//   description: string;
//   urlToImage: string;
//   content: string;
//   author:string
// }
interface FetchNewsParams {
  query: string;
  date?: string | null;
}
// https://newsapi.org/v2/top-headlines?sources=bbc-news,cnn,the-verge&apiKey=YOUR_API_KEY
const getSource = () => {
  const savedSources = localStorage.getItem("sources");
  const parseData = savedSources ? JSON.parse(savedSources) : [];
  

  return parseData.join(",");
};
const useGetNews = ({ query, date }: FetchNewsParams) => {
  const source = getSource();
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [guardian, setGuardian] = useState<GuardianArticle[]>([]);
  const [nyTimes, setNyTimes] = useState<NyTimesProps[]>([]);
  const [load, setLoad] = useState(false);

  const fetchData = async () => {
    setLoad(true);
    try {
      const newsApi = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: query,
          from: date,
          sortBy: "publishedAt",
          sources: source,
          apiKey: NEWS_API_KEY,
        },
      });
      const guardian = await axios.get(
        "https://content.guardianapis.com/search",
        {
          params: {
            q: query,
            sources: source,
            "api-key": GUARDIAN_API_KEY,
          },
        }
      );

      const nyTimes = await axios.get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        {
          params: {
            q: query,
            sources: source,
            "api-key": NYT_API_KEY,
          },
        }
      );

      console.log(newsApi);
      setLoad(false);
      setNews(newsApi.data.articles);
      setGuardian(guardian.data.response.results);
      setNyTimes(nyTimes.data.response.docs);
    } catch (err) {
      setLoad(false);
      console.log(err);
      alert(err ? (err as Error).message : "Error");
    }
  };
  useEffect(() => {
    fetchData();
  }, [query, date]);

  return { news, guardian, nyTimes, load };
};

export default useGetNews;
