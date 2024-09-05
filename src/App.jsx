import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

//pages
import Home from "./pages/Home";
import Error from "./pages/Error";

import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";


const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/signIn" element={<SignIn />} />
            <Route exact path="/*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
