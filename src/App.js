import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Grandpa from "./components/Grandpa/Grandpa";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/orderreview" element={<OrderReview></OrderReview>} />
        <Route path="/grandpa" element={<Grandpa />} />
      </Routes>
    </div>
  );
}

export default App;
