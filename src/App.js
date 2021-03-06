import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Services } from "./components/Pages/Services";
import { Realisations } from "./components/Pages/Realisations";
import { Contact } from "./components/Pages/Contact";
import { Feedback } from "./components/Pages/Feedback";
import { Covid19 } from "./components/Pages/Covid19";
import { Footer } from "./components/Pages/Footer";
import { NotFound } from "./components/Pages/NotFound";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router basename="/">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid19" element={<Covid19 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commentaires" element={<Feedback />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
