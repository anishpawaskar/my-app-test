import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./cart";
import { About } from "./about";
import { Navbar } from "./Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <h1>Welcome to Home</h1>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
