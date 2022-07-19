import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";
import ProductFeed from "./components/ProductFeed";


function App() {

  const[products, setProducts] = useState([]);

  const getProducts = async () => {
    let fetchData = await fetch("https://fakestoreapi.com/products/");
    let response = await fetchData.json();

    setProducts(response)

  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto bg-gray-200">
        <Banner />
        <ProductFeed products = {products}/>
      </main>
    </div>
  );
}

export default App;
