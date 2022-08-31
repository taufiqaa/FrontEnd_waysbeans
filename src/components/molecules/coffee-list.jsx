import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coffeeData from "./coffe-data";

export default function CoffeeList() {
  const [coffeeDatas] = useState(coffeeData);
  const navigate = useNavigate();
  const sendToDetail = (id) => {
    navigate("/detail-product/" + id);
  };

  return (
    <section>
      <div className="drink-list">
        {coffeeDatas?.map((data, index) => (
          <div className="list-coffee">
            <div className="coffeImage">
              <img
                alt="data"
                src={data.pict}
                id="mainImage"
                onClick={() => sendToDetail(data?.id)}
              />
            </div>
            <div className="CoffeDetail">
              <div className="CoffeeTitle">
                <h6>{data.title}</h6>
              </div>
              <h2>{data.price}</h2>
              <h2>Stock : {data.stock}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
