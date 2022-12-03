import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import ProductUpdate from "./components/ProductUpdate";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";

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
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
