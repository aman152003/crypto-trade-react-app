import React, { useState, useEffect } from "react";
import "./Trending.scss";

import TrendingCrypto from "../../components/TrendingCrypto/TrendingCrypto";
import Loading from "../../components/Loading/Loading";
import { AppContext } from "../../components/AppContext";

function Trending() {
  const [trendingList, setTrendingList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrendingList = async () => {
    try {
      const result = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await result.json();
      setTrendingList(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      alert("Something bad happened! Please try again...");
    }
  };

  useEffect(() => {
    fetchTrendingList();
  }, []);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="trending">
        {trendingList.coins.map((data) => {
          return (
            <div key={data.item.id}>
              <TrendingCrypto
                id={data.item.id}
                name={data.item.name}
                symbol={data.item.symbol}
                image={data.item.large}
                rank={data.item.market_cap_rank}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Trending;
