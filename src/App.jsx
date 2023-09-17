import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Login } from "./Pages/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from "./Pages/Contact/Contact";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Services } from "./Pages/Services/Services";
import { SiteContextProvider } from "./Context/Context";
import { AnimatePresence } from "framer-motion";
AnimatePresence;
function App() {
  return (
    <SiteContextProvider>
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </Router>
    </SiteContextProvider>
  );
}

export default App;
