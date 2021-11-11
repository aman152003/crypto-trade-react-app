import React, { useEffect, useContext, useState } from "react";

import "./Home.scss";
import { AppContext } from "../../components/AppContext";
import leftArrowIcon from "../../assets/images/left.svg";
import rightArrowIcon from "../../assets/images/right.svg";
import Crypto from "../../components/Crypto/Crypto";
import Search from "../../components/Search/Search";
import Loading from "../../components/Loading/Loading";

function CryptoList() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const { cryptoData, setCryptoData, searchTerm } = useContext(AppContext);

  const fetchCryptoData = async () => {
    try {
      const result = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false&price_change_percentage=24h"
      );
      const data = await result.json();
      setCryptoData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      alert("Something bad happened! Please try again...");
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const prevPage = () => {
    if (start === 0 && end === 10) {
      return;
    } else {
      setStart(start - 10);
      setEnd(end - 10);
    }
  };

  const nextPage = () => {
    if (start === 240 && end === 250) {
      return;
    } else {
      setStart(start + 10);
      setEnd(end + 10);
    }
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="home">
        <div className="home-search">
          <Search />
        </div>
        <div className="crypto-heading">
          <div className="crypto-heading-left">
            <p className="left">Symbol</p>
            <p className="left">Acronym</p>
            <p className="left">Price</p>
          </div>
          <div className="crypto-heading-right">
            <p className="right change">24H Change</p>
            <p className="right">24H High</p>
            <p className="right">24H Low</p>
            <p className="right">Rank</p>
            <p className="empty"></p>
          </div>
        </div>
        <div className="crypto-list">
          {cryptoData
            .filter((c) => {
              if (searchTerm === "") {
                return c;
              } else if (
                c.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return c;
              }
            })
            .slice(start, end)
            .map((data) => {
              return (
                <div key={data.id}>
                  <Crypto
                    id={data.id}
                    image={data.image}
                    symbol={data.symbol}
                    price={data.current_price}
                    high={data.high_24h}
                    low={data.low_24h}
                    change={data.price_change_percentage_24h}
                    rank={data.market_cap_rank}
                  />
                </div>
              );
            })}
        </div>
        <div
          style={searchTerm ? { display: "none" } : { display: "flex" }}
          className="pagination-btns"
        >
          <button onClick={prevPage}>
            <img src={leftArrowIcon} alt="left" />
          </button>
          <button style={{ marginLeft: "0.5rem" }} onClick={nextPage}>
            <img src={rightArrowIcon} alt="right" />
          </button>
        </div>
      </div>
    );
  }
}

export default CryptoList;
