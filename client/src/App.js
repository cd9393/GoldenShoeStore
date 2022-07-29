import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import Brands from "./pages/Brands";
import Account from "./pages/Account";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/UI/Header/Navbar";
import Footer from "./components/UI/Footer/Footer";
import AuthPage from "./pages/AuthPage";
import RegisterAccount from "./pages/RegisterAccount";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/products/:productCode" element={<ProductPage />} />
          <Route
            path="/account"
            element={
              authCtx.isLoggedIn ? (
                <Account />
              ) : (
                <Navigate to="/account/login" />
              )
            }
          />
          <Route
            path="/account/login"
            element={
              authCtx.isLoggedIn ? <Navigate to="/account" /> : <AuthPage />
            }
          />
          <Route
            path="/account/register"
            element={
              authCtx.isLoggedIn ? (
                <Navigate to="/account" />
              ) : (
                <RegisterAccount />
              )
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
