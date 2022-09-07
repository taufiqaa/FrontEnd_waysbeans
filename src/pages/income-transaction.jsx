import Header from "../components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { API } from '../config/api';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import React from 'react'
import dateFormat from 'dateformat';
import waysbeansLogo from "../assets/NavBarIcon.svg";


export default function IncomeTransaction(){

  const navigate = useNavigate()
  const [state, dispatch] = React.useContext(UserContext)
  const [transaction, setTransaction] = React.useState([])
  const [transactionPopUp, setTransactionPopUp] = React.useState(false);

 
  const getTransaction = async () => {
    try {
      const res = await API.get(`/transactions`);
      setTransaction(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };


  React.useEffect(() => {
    if (state.isLogin === false || state.user.status === "customer") {
      navigate('/')
    } else {
      getTransaction() 
    }
  },[])

    return(
    <>
        <Header />
        <section className="table">
        <h1>Income Transaction</h1>
        <Table bordered hover size="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Post Code</th>
          <th>Products Order</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map((data, index)=>(
        <tr onClick={()=>setTransactionPopUp(data.id )}>
          <td>{index+1}</td>
          <td>{data.user.name}</td>
          <td>{data.user.address}</td>
          <td>{data.user.post_code}</td>
          <td>{data.cart.map((data,index)=>(
            <h6 className="productIncome" key={index}>
            {data.product.title}, </h6>
          ))}</td>
          <td>{data.status}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </section>
    
    
    { transactionPopUp && 
    <section className="modalSection"
    onClick={ () => setTransactionPopUp(false) }
    >
    {transaction.map((data,index)=>(
        <div className="detail-transaction">
            {data.cart.map((item, index)=>(
          <div className="box-order">
          <div className="left-container">
            <div className="main-order">
              <div className="picture-menu">
                <img
                  className="picture-menuPurchased"
                  src={"http://localhost:2500/uploads/"+item?.product?.image}
                  alt=""
                />
              </div>
              <div className="data-order">
                <div className="data-flavour">
                  <h6>{item?.product?.title}</h6>
                </div>
                <div className="orderTime">
                  <h6>{dateFormat(item?.updated_at, 'dddd, ')}{dateFormat(item?.updated_at, 'd mmmm yyyy')}</h6>
                </div>
                <div className="data-price">
                  <h6>{item?.product?.price}</h6>
                </div>
                <div className="data-quantity">
                  <h6>Qty : {item?.qty}</h6>
                </div>
                <div className="subTotal">
              <h6>Sub Total : {item?.sub_amount}</h6>
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
              <h6>{data.status}</h6>
            </div>
          </div>
        </div>
        ))}
        </div>
        ))}
       </section>
}
  </>
    );
}