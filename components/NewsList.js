import { useState, useEffect } from "react";
import axios from "axios";
import NewBox from "./NewBox";

function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    axios.get("api/news").then((response) => {
      setNews(response.data.reverse());
      setIsLoading(false);
    });
  }

  const groupNewsByYear = () => {
    const groupedNews = {};

    news.forEach((n) => {
      const year = new Date(n.createdAt).getFullYear();

      if (!groupedNews[year]) {
        groupedNews[year] = [];
      }

      groupedNews[year].push(n);
    });

    return groupedNews;
  };

  const groupedNews = groupNewsByYear();

  return (
    <div className="flex flex-col w-full xl:w-3/4 lg:mx-auto pb-6">
      {Object.keys(groupedNews).map((year) => (
        <div key={year}>
          <h3 className="md:w-2/6 xl:w-1/6 text-center text-3xl md:text-4xl text-gray-700 font-normal my-5 ml-5">
            {year}
          </h3>
          <div className="flexContainer">
            {groupedNews[year].map((n) => (
              <NewBox key={n._id} oneNew={n} isLoading={isLoading} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
