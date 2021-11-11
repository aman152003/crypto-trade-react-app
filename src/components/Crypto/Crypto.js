import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Crypto.scss";
import { AppContext } from "../AppContext";
import Button from "../Button/Button";

function Crypto(props) {
  const { setID, setSearchTerm } = useContext(AppContext);
  const imageURL = props.image.replace("large", "small");
  return (
    <Link to="/transaction" style={{ textDecoration: "none" }}>
      <div
        onClick={() => {
          setID(props.id);
          setSearchTerm("");
        }}
        className="crypto"
      >
        <div className="crypto-left">
          <img className="left" src={imageURL} alt="crypto" />
          <p className="left symbol">{props.symbol.toUpperCase()}</p>
          <p className="left price">${props.price.toLocaleString()}</p>
        </div>
        <div className="crypto-right">
          <p
            className="right change"
            style={
              props.change > 0
                ? { color: "var(--Lime-Green)" }
                : { color: "var(--Bright-Red)" }
            }
          >
            {props.change}%
          </p>
          <p className="right">${props.high.toLocaleString()}</p>
          <p className="right">${props.low.toLocaleString()}</p>
          <p className="rank">{props.rank}</p>
          <Button name="Details" />
        </div>
      </div>
    </Link>
  );
}

export default Crypto;
