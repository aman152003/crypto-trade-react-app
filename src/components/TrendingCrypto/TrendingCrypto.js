import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./TrendingCrypto.scss";
import { AppContext } from "../AppContext";

function TrendingCrypto(props) {
  const { setID } = useContext(AppContext);
  return (
    <Link style={{ textDecoration: "none" }} to="/transaction">
      <div
        onClick={() => {
          setID(props.id);
        }}
      >
        <div className="trending-crypto">
          <div className="trending-crypto-left">
            <img src={props.image} alt="crypto" />
            <p className="name">{props.name}</p>
          </div>
          <div className="trending-crypto-right">
            <p className="symbol">{props.symbol}</p>
            <p className="market-cap-rank">{props.rank}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TrendingCrypto;
