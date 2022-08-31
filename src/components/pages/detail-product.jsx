import Header from "../molecules/header";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CoffeeData from "../molecules/coffe-data";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailProduct() {
  const id = useParams();
  const [DetailProduct] = useState(CoffeeData);
  const index = id.id - 1;
  const getDataCoffee = DetailProduct[index];

  return (
    <>
      <Header />
      <div className="detail-product-section">
        <div className="picture-detail-menu">
          <img
            className="picture-detail"
            src={getDataCoffee?.pict}
            alt="drink"
          ></img>
        </div>
        <div className="right-detail-product">
          <div className="flavour-price-detail">
            <div className="flavour-detail">
              <h6>{getDataCoffee?.title}</h6>
            </div>
            <div className="price-detail">
              <h6>Stock:{getDataCoffee?.stock}</h6>
            </div>
          </div>
          <div className="description-detail">
            <article>{getDataCoffee?.description}</article>
          </div>
          <div className="total-cart-detail">
            <div className="total-detail">
              <div>
                <h6>Total</h6>
              </div>
              <div>
                <h6>Rp {getDataCoffee?.price}</h6>
              </div>
            </div>
            <Button variant="danger" className="add-cart">
              Add Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailProduct;
