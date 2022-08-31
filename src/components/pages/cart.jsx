import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Header from "../molecules/header";
import Ethiopia from "../../assets/Ethiopia-beans.png";
import bin from "../../assets/bin.svg";

export default function Cart() {


  return (
    <>
      <Header />
      <div className="cart-section">
        <div className="cart-title">
          <h6>My Cart</h6>
        </div>
        <div className="cart-container">
          <div className="left-cart-container">
            <h6>Review Your Order</h6>
            <div className="line-cart">
              <div className="main-cart">
                <div className="picture-menu-cart">
                  <img
                    className="picture-cartPaid"
                    src={Ethiopia}
                    alt="cartPaid"
                  ></img>
                </div>
                <div className="data-cart">
                  <div className="data-flavour-cart">
                    <div className="menu-title-cart">
                      <h6>Ethiopia</h6>
                    </div>
                    <div className="data-price-cart">
                      <h6>Rp 27000</h6>
                    </div>
                  </div>

                  <div className="data-topping-cart">
                    <div>
                      <h6>counter</h6>
                    </div>
                    <div className="trash-cart">
                      <img src={bin} alt="bin" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-cart-container">
            <div className="line-cart">
              <div className="data-payment">
                <div className="detail-payment-cart">
                  <div className="subTotal-title-cart">
                    <h6>Sub Total</h6>
                  </div>
                  <div className="subTotal-payment-cart">
                    <h6>Rp 27000 </h6>
                  </div>
                </div>
                <div className="quantity-title-cart">
                  <div>
                    <h6>Quantity</h6>
                  </div>
                  <div className="quantity-cart">
                    <h6>4</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="total-cart-detail">
              <div className="total-detail">
                <div>
                  <h6>Total</h6>
                </div>
                <div>
                  <h6>Rp 108000</h6>
                </div>
              </div>
              <Button variant="danger" type="submit" className="add-cart">
                Pay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
