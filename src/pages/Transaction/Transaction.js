import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";

import "./Transaction.scss";
import { AppContext } from "../../components/AppContext";
import Loading from "../../components/Loading/Loading";

function Transaction() {
  const [chartData, setChartData] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useContext(AppContext);

  const fetchData = async () => {
    const result = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`
    );
    const data = await result.json();
    setChartData(data);

    const result1 = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&sparkline=false`
    );
    const response = await result1.json();
    setCryptoData(response[0]);
    setTimeout(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getValue = (value, noValue) => {
    if (value === null || value === undefined) {
      return noValue;
    } else {
      return value.toLocaleString();
    }
  };

  const getDate = (date, noDate) => {
    if (date === null || date === undefined) {
      return noDate;
    } else {
      return date.slice(0, 10);
    }
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="transaction">
        <div className="chart">
          <Line
            data={{
              labels: [
                "Day 1",
                "Day 2",
                "Day 3",
                "Day 4",
                "Day 5",
                "Day 6",
                "Day 7",
                "Current Price",
              ],
              datasets: [
                {
                  label: "Last 7 Days Record",
                  data: [
                    chartData.prices[0][1],
                    chartData.prices[1][1],
                    chartData.prices[2][1],
                    chartData.prices[3][1],
                    chartData.prices[4][1],
                    chartData.prices[5][1],
                    chartData.prices[6][1],
                    chartData.prices[7][1],
                  ],
                  backgroundColor: "#0A0C1C",
                  borderColor: "#1db489",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="crypto-data">
          <div className="name">
            <img src={cryptoData.image} alt="bitcoin" />
            <h2>
              {cryptoData.name} ({cryptoData.symbol.toUpperCase()})
            </h2>
          </div>
          <div className="extra-data">
            <div className="row">
              <div className="price">
                <h3>Price</h3>
                <p>
                  <span className="left">24h High :</span>{" "}
                  {getValue(cryptoData.high_24h, "no data")}
                </p>
                <p>
                  <span className="left">24h low :</span>{" "}
                  {getValue(cryptoData.low_24h, "no data")}
                </p>
                <p>
                  <span className="left">Current Price :</span>{" "}
                  {getValue(cryptoData.current_price, "no data")}
                </p>
                <p>
                  <span className="left">24h Price Change :</span>{" "}
                  {getValue(cryptoData.price_change_24h, "no data")}
                </p>
                <p>
                  <span className="left">24h Price Change % :</span>{" "}
                  {cryptoData.price_change_percentage_24h || "no data"}
                </p>
              </div>
              <div className="market-cap">
                <h3>Market Cap</h3>
                <p>
                  <span className="left">Market Cap :</span>{" "}
                  {getValue(cryptoData.market_cap, "no data")}
                </p>
                <p>
                  <span className="left">Total Volume :</span>{" "}
                  {getValue(cryptoData.total_volume, "no data")}
                </p>
                <p>
                  <span className="left">Market Cap Rank :</span>{" "}
                  {cryptoData.market_cap_rank || "no data"}
                </p>
                <p>
                  <span className="left">Fully Diluted Valuation :</span>{" "}
                  {getValue(cryptoData.fully_diluted_valuation, "no data")}
                </p>
                <p>
                  <span className="left">24h Market Cap Change :</span>{" "}
                  {getValue(cryptoData.market_cap_change, "no data")}
                </p>
                <p>
                  <span className="left">24h Market Cap Change % :</span>{" "}
                  {cryptoData.market_cap_change_percentage_24h || "no data"}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="supply">
                <h3>Supply</h3>
                <p>
                  <span className="left">Max Supply :</span>{" "}
                  {getValue(cryptoData.max_supply, "no data")}
                </p>
                <p>
                  <span className="left">Total Supply :</span>{" "}
                  {getValue(cryptoData.total_supply, "no data")}
                </p>
                <p>
                  <span className="left">Circulating Supply :</span>{" "}
                  {getValue(cryptoData.circulating_supply, "no data")}
                </p>
              </div>
              <div className="all-time-change">
                <h3>All Time Change</h3>
                <p>
                  <span className="left">ATH :</span>{" "}
                  {getValue(cryptoData.ath, "no data")}
                </p>
                <p>
                  <span className="left">ATL :</span>{" "}
                  {getValue(cryptoData.atl, "no data")}
                </p>
                <p>
                  <span className="left">ATH Date :</span>{" "}
                  {getDate(cryptoData.ath_date, "no data")}
                </p>
                <p>
                  <span className="left">ATL Date :</span>{" "}
                  {getDate(cryptoData.atl_date, "no data")}
                </p>
                <p>
                  <span className="left">ATH Change % :</span>{" "}
                  {cryptoData.ath_change_percentage || "no data"}
                </p>
                <p>
                  <span className="left">ATL Change % :</span>{" "}
                  {cryptoData.atl_change_percentage || "no data"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;
