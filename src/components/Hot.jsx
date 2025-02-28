import RedBox from "./RedBox";
import BlackBox from "./BlackBox";
import React from "react";

const Hot = ({ data }) => {
  const [description1, description2] = data.description.split("...");

  return (
    <div className="hot">
      <h2>Hot</h2>
      <div className="description1">
        <RedBox description={description1} />
      </div>
      <div className="description2">
        <RedBox description={description2} />
      </div>
      <BlackBox
        className="black-box"
        names={data.items.map((item) => (
          <React.Fragment key={item.name}>
            <span className={item.className}>{item.name}</span>
            <span className="price"> € {item.price}</span>
          </React.Fragment>
        ))}
      />
    </div>
  );
};

export default Hot;
