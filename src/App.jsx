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
// import { AnimatePresence } from "framer-motion";
import { Content } from "./Pages/Content/Content";
import { Project } from "./Pages/Project/Project";
import ScrollToTop from "./Components/Scroll/Scroll";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorPage } from "./Pages/Error/Error";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <SiteContextProvider>
        <Router>
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
              <Route path="*" element={<ErrorPage />} />
              <Route path="/portfolio/:project" element={<Project />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </Router>
      </SiteContextProvider>
    </QueryClientProvider>
  );
}

export default App;
