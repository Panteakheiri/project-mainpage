import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import ProductInfo from "./Pages/ProductInfo";
import Register from "./Pages/Register";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";

const routes = [
  { path: "/", element: <MainPage/> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/order", element: <Order/>},
  { path: "/about", element: <AboutUs/> },
];

export default routes;
