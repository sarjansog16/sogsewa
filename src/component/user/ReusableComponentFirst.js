import { Card } from "antd";

import React from "react";

const ReusableComponentFirst = ({ datas, title }) => {
  return (
    <div>
      <div> {title}</div>

      <div className="grid grid-cols-4  gap-4 grid-flow-row ">
        {datas?.map((item) => (
          <div key={item.id}>
            <Card cover={<img className="h-[234px] " src={item.image} />}>
              <div className="text-[blue]">Name: {item.name}</div>
              <div>Description: {item.discription}</div>
              <div>Price: {item.price}</div>
              <div>Brand: {item.brand}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReusableComponentFirst;
