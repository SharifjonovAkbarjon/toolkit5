import "./App.css";
import Footer from "./components/Footer/Footer";
import BlogCreate from "./components/blogcreate/blog-create";
import Cart from "./components/cart/cart";
import Carusel from "./components/carusel/carusel";
import Counter from "./components/counter/counter";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import "swiper/css";
import "swiper/css/pagination";
function App() {
  return (
    <>
      <Header/>
      <Carusel />
      <Counter />
      <Hero />
      <Cart />
      <BlogCreate />
    </>
  );
}

export default App;
