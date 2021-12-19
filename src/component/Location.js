import React, { useState } from "react";

export const Location = ({ country, region, time }) => {
  const [click, setClick] = useState(false);
  const show = () => {
    setClick(true);
  };
  const hide = () => {
    setClick(false);
  };
  return (
    <div>
      <button type="submit" onClick={show} onDoubleClick={hide} className="btn">
        More
      </button>
      <div className={click ? "show-cont" : "hide-cont"}>
        <h3 className="loc">country: {country}</h3>
        <h3 className="loc">region: {region}</h3>
        <h3 className="loc">Local-Time: {time}</h3>
      </div>
    </div>
  );
};
