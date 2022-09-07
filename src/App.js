import React from "react"
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from"./pages/home"
import DetailProduct from"./pages/detail-product"
import Cart from "./pages/cart"
import Profile from "./pages/profile"
import IncomeTransaction from "./pages/income-transaction"
import AddProduct from "./pages/product"
import UpdateProduct from './pages/update-product';
import { API, setAuthToken } from './config/api'
import ProductsList from './pages/product-list';
import { UserContext } from "./context/userContext"


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

export default function App() {
  const navigate = useNavigate()
  const [state, dispatch] = React.useContext(UserContext)
  
  React.useEffect(() => {
    if (state.isLogin === false) {
      navigate('/')
    } else {
      if (state.user.status === "admin") {
        navigate('/income')
      } else {
        navigate('/')
      }
    }
  }, [state])

  const checkUser = async () => {
    try {
      const res = await API.get('/check-auth')
      
      if (res.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR'
        })
      }

      let payload = res.data.data
      payload.token = localStorage.token

      dispatch({
        type: 'USER_SUCCESS',
        payload,
      })
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    checkUser()
  }, [])

  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/detail-product/:id' element={<DetailProduct/>} />
    <Route path='/cart' element={<Cart />}/>
    <Route path='/profile' element={<Profile />} />
    <Route path='/income' element={<IncomeTransaction />} />
    <Route path='/add-product' element={<AddProduct />} />
    <Route path='/update-product/:id' element={<UpdateProduct />} />
    <Route path='/products-list' element={<ProductsList />} />
    
  </Routes>
  )
}
