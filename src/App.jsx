import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login.jsx";
import SingleProduct from "./pages/singleProduct";
import About from "./pages/about";
import Products from "./pages/products";
import ProductsList from "./pages/productLists";
import NavBar from "./components/navBar.jsx";

function App() {
  return (
    <BrowserRouter>
   <NavBar/>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductsList/>}/>
          <Route path=":id" element={<SingleProduct/>}/>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
