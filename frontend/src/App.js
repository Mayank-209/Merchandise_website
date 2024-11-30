import "./App.css";
import Cart from "./customer/components/Cart.jsx/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Nav from "./customer/components/Navigation/Navigation/Nav";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import HomePage from "./customer/Pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Nav/>
      <div>
       <HomePage/> 
        <Product/>
        {/* <ProductDetails></ProductDetails> */}
        {/* <Cart/> */}
        {/* <Checkout/>7 */}
      </div>
      <Footer/>
    </div>

  );
}

export default App;
