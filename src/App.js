import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import CartState from "./context/CartState";
import Cart from "./components/Cart";
import SearchList from "./components/SearchList";
import {data} from "./healthyLivingPVCalculator";

function App() {
  const [result, setResult] = useState([])
  const handleSearch = (query) => { 
    const filtered = data.filter((item) => {
      return item.pDescription.toLowerCase().includes(query.toLowerCase()) || item.pCode.toLowerCase().includes(query.toLowerCase())
    })
    console.log(filtered)
    setResult(filtered)
  }
  return (
    <>
      <CartState>
        <Router>
          <Navbar handleSearch={handleSearch}/>
          <hr className="border border-primary border-5 opacity-100" />
          <Routes>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/home" element={<Home category={"all"} result={result}/>} />
            <Route path="/" element={<Home category={"all"}/>} />
            <Route
              path="/health-care"
              element={<Home category={"health-care"} />}
            />
            <Route
              path="/consumables"
              element={<Home category={"consumables"} />}
            />
            <Route
              path="/personal-care"
              element={<Home category={"personal-care"} />}
            />
            <Route
              path="/home-hygiene"
              element={<Home category={"home-hygiene"} />}
            />
            <Route
              path="/oral-care"
              element={<Home category={"oral-care"} />}
            />
            <Route
              path="/mens-range"
              element={<Home category={"mens-range"} />}
            />
            <Route
              path="/business-tools"
              element={<Home category={"business-tools"} />}
            />
            <Route path="/uniform" element={<Home category={"uniform"} />} />
            <Route
              path="/mom-lipstick"
              element={<Home category={"mom-lipstick"} />}
            />
            <Route path="/eye-care" element={<Home category={"eye-care"} />} />
            <Route
              path="/face-care"
              element={<Home category={"face-care"} />}
            />
            <Route
              path="/skin-formula-9"
              element={<Home category={"skin-formula-9"} />}
            />
            <Route path="/vellion" element={<Home category={"vellion"} />} />
            
          </Routes>
          <Footer />
        </Router>
      </CartState>
    </>
  );
}

export default App;
