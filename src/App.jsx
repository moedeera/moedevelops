import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Login } from "./Pages/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from "./Pages/Contact/Contact";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Services } from "./Pages/Services/Services";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
