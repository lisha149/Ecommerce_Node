import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <h1>Ecommerce-CRUD Operations</h1>;
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
