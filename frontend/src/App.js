import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";

function App() {
  return (
    <div className="App">
      <h3>Ecommerce-CRUD Operations</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} exact />
          <Route path="/products/create" element={<ProductCreate />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
