import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import ProductUpdate from "./components/ProductUpdate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} exact />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/product/:id" element={<ProductUpdate />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
