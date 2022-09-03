import { useState,useEffect  } from "react";
import Header from "../molecules/header";
import waysbeansLogo from "../../assets/NavBarIcon.svg";
import {API} from '../config/api'
// import dateFormat from "../../dateFormat";

export default function Profile() {

  const [transaction, setTransaction] = useState([])
  const getTransaction = async()=>{
    try{
      const response = await API.get("/transactions")
      setTransaction(response.data.data)
    }catch(error){
      console.error(error)
    }
  }
  
  useEffect(()=>{
    getTransaction()
  })

  return(
  <>
    <Header />
    <div className="transaction-section ">
      <div className="profile-container">
        <div className="profile-title">
          <h6>My Profile</h6>
        </div>
        <div className="detail-profile">
          <div className="picture-profile">
            <img
              className="picture-user"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="identity-profile">
            <div className="identity-name">
              <h6>Full Name</h6>
            </div>
            <div className="userName">
              <h6>Ardiansyah</h6>
            </div>
            <div className="identity-email">
              <h6>Email</h6>
            </div>
            <div className="userEmail">
              <h6>@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="transaction-container">
        <div className="transaction-title">
          <h6>My Transaction</h6>
        </div>
        {transaction.map((data,index)=>(
        <div className="detail-transaction">
          <div className="left-container">
            
            <div className="main-order">
              <div className="picture-menu">
                <img
                  className="picture-menuPurchased"
                  src="https://www.pngitem.com/pimgs/m/129-1296068_caramel-macchiato-vanilla-bean-macchiato-starbucks-hd-png.png"
                  alt=""
                />
              </div>
              <div className="data-order">
                <div className="data-flavour">
                  <h6>title</h6>
                </div>
                <div className="orderTime">
                  <h6>{data.updated_at}</h6>
                </div>
                <div className="data-price">
                  <h6>{data.user.name}</h6>
                </div>
                <div className="data-quantity">
                  <h6>Qty: 2</h6>
                </div>
                <div className="subTotal">
              <h6>Sub Total : Rp 69.000</h6>
              </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="logo-transaction">
              <img className="logo-detail" src={waysbeansLogo} alt="logo" />
            </div>
            <div className="qr-transaction">
              <img
                className="qr-code"
                src="https://i.stack.imgur.com/XHWnX.png"
                alt=""
              />
            </div>
            <div className="status-order">
              <h6>On the way</h6>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </>
  );
}
