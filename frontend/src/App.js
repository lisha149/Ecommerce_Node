import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import ProductUpdate from "./components/ProductUpdate";

function App() {
  return (
    <div className="App">
      <h1>Ecommerce-Add, List, Update, Delete and Search Products</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} exact />
          <Route path="/products/create" element={<ProductCreate />} exact />
          <Route path="/product/:id" element={<ProductUpdate />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
