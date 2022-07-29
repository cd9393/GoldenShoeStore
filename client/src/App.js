import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import Brands from "./pages/Brands";
import Account from "./pages/Account";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/UI/Header/Navbar";
import Footer from "./components/UI/Footer/Footer";
import AuthPage from "./pages/AuthPage";
import RegisterAccount from "./pages/RegisterAccount";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/products/:productCode" element={<ProductPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/login" element={<AuthPage />} />
          <Route path="/account/register" element={<RegisterAccount />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
