import React from "react";
import Loader from "react-loader-spinner";

import "./Loading.scss";

function Loading() {
  return (
    <div className="loading">
      <Loader type="Puff" color="#1199fa" height={70} width={70} />
    </div>
  );
}

export default Loading;
