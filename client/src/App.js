
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
import Cart from './components/Cart';
// import Products from "./components/Products/Products/Products";
// import Navbar from "./components/Products/Navbar/Navbar";
// import Cart from "./components/Products/Cart/Cart";
// import Checkout from "./components/CheckoutForm/Checkout/Checkout";
// import ProductView from "./components/Products/ProductView/ProductView";
import MainPage from './pages/MainPage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/home" element={<Book />} />
        <Route path="/homepage" element={<Popular />} />
        <Route path="/homepage/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item" element={<Shop />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Pagenotfound />} />
        {/* <Route path="/home" element={< Products />} />
        <Route path="/products-view" element={< ProductView />} />
        <Route path="/cart" element={<Cart />} /> */}

      </Routes>
    </>
  );
}

export default App;
