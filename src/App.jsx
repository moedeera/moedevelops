import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "photoswipe/dist/photoswipe.css";
import HomePage from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Login } from "./Pages/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from "./Pages/Contact/Contact";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Services } from "./Pages/Services/Services";
import { SiteContextProvider } from "./Context/Context";
// import { AnimatePresence } from "framer-motion";
import { Content } from "./Pages/Content/Content";
import { Project } from "./Pages/Project/Project";
import ScrollToTop from "./Components/Scroll/Scroll";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorPage } from "./Pages/Error/Error";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { TestPage } from "./Pages/TestingPage/TestPage";
import Modal from "./Components/Modal/Modal";
import Sample from "./Pages/Sample/Sample";
import { useState } from "react";

const client = new QueryClient();

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <QueryClientProvider client={client}>
      <SiteContextProvider>
        <Router>
          <div className="main-app relative">
            <Navbar />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/admin" element={<Content />} />
                <Route path="/admin2" element={<TestPage />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/portfolio/:project" element={<Project />} />
              </Routes>
            </ScrollToTop>
            <Footer />
            {showModal && <Modal />}
          </div>
        </Router>
      </SiteContextProvider>
    </QueryClientProvider>
  );
}

export default App;
