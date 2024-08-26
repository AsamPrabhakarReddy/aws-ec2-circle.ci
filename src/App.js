
import './App.css';
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Footer from "./components/Footer.jsx"
import Carousel from './components/Carousel.jsx';
import FAQ from './components/FAQ.jsx';
import Final from './components/Final.jsx';


function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Carousel/>
    <FAQ/>
    <Final/>
    <Footer/>
   </div>
  );
}

export default App;
