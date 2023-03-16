import React from "react";
import loading from "../../assets/images/spinner.svg";
const Loading = () => {
  return (
    <div>
      <img src={loading} alt="loading" className="loadingImg" />
    </div>
  );
};
export default Loading;
