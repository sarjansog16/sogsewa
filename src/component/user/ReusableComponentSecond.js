import React from "react";
import { Card } from "antd";

const ReusableComponentSecond = ({ datas, title }) => {
  return (
    <div>
      <div> {title}</div>

      <div className="grid grid-cols-4  gap-4 grid-flow-row ">
        {datas?.map((item) => (
          <div key={item.id}>
            <Card>
              <div className="grid">
                <div className=" flex justify-start gap-2">
                  <div>
                    <img alt="example" src={item.image} className="w-12 h-12" />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-[red]">
                      {item.name}
                    </div>
                    <div className="font-bold">{item.price}</div>
                  </div>

                </div>
                
                <div>{item.discription}</div>
                <div className="bold">
                  <button
                    type="primary"
                    htmlType="submit"
                    className="bg-[black] text-white w-full"
                  >
                    Add to the cart
                  </button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReusableComponentSecond;
