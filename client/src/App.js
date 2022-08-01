import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AuthContext from "./store/auth-context";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import Brands from "./pages/Brands";
import Account from "./pages/Account";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/UI/Header/Navbar";
import Footer from "./components/UI/Footer/Footer";
import AuthPage from "./pages/AuthPage";
import RegisterAccount from "./pages/RegisterAccount";
import PrivateRoutes from "./components/PrivateRoutes";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import CreateReturn from "./pages/CreateReturn";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/products/:productCode" element={<ProductPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/account" element={<Account />} />
            <Route path="/account/orders" element={<Orders />} />
            <Route path="/account/orders/:orderId" element={<OrderDetails />} />
            <Route
              path="/account/orders/:orderId/create-return"
              element={<CreateReturn />}
            />
          </Route>
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
