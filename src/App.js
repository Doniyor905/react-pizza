import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">

        <Routes>
          <Route path="/" element={<Home searchValue={searchValue}/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </div>

    </div>
  );
}

export default App;
