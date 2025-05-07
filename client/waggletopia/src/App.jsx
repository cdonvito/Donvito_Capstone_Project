import './App.css'
import { Route, Routes } from "react-router-dom";
import About from './Components/About';
import AccountPage from './Components/AccountPage';
import AdminPage from './Components/AdminPage';
import Cart from './Components/Cart';
import CategoryHome from './Components/CategoryHome';
import FooterBar from './Components/FooterBar';
import HeaderBar from './Components/HeaderBar';
import Home from './Components/Home';
import Login from './Components/Login'; 
import OrdersPage from './Components/OrdersPage';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ProductHome from './Components/ProductHome';
import ProductPage from './Components/ProductPage';
import Register from './Components/Register';
import TermsOfUse from './Components/TermsOfUse';

function App() {

  return (
    <>
      <HeaderBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Category/Home' element={<CategoryHome />} />
        <Route path='/Product-Page' element={<ProductPage />} />
        <Route path='/Account-Page' element={<AccountPage />} />
        <Route path='/Orders' element={<OrdersPage />} />
        <Route path='/Admin-Page' element={<AdminPage />} />
        <Route path='/Checkout' element={<Cart />} />
        <Route path='/About' element={<About />} />
        <Route path='/Privacy-Policy' element={<PrivacyPolicy />} />
        <Route path='/Product-Home' element={<ProductHome />} />
        <Route path='/Terms-Of-Use' element={<TermsOfUse />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Product/:id' element={<ProductPage />} />
      </Routes>

      <FooterBar />
    </>
  )
}

export default App
