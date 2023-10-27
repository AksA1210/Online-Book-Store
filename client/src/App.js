
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Book from "./pages/Users/Book";
import { books } from './pages/Users/data/books';
import BookList from "./pages/Users/index";
// import Products from "./components/Products/Products/Products";
// import Navbar from "./components/Products/Navbar/Navbar";
// import Cart from "./components/Products/Cart/Cart";
// import Checkout from "./components/CheckoutForm/Checkout/Checkout";
// import ProductView from "./components/Products/ProductView/ProductView";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/home" element={<Book />} />
        <Route path="/book" element={<BookList />} />
        <Route path="*" element={<Pagenotfound />} />
        {/* <Route path="/home" element={< Products />} />
        <Route path="/products-view" element={< ProductView />} />
        <Route path="/cart" element={<Cart />} /> */}

      </Routes>
    </>
  );
}

export default App;
