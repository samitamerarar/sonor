import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Services } from "./components/Pages/Services";
import { Realisations } from "./components/Pages/Realisations";
import { Contact } from "./components/Pages/Contact";
import { Feedback } from "./components/Pages/Feedback";
import { FAQ } from "./components/Pages/FAQ";
import { Covid19 } from "./components/Pages/Covid19";
import { Footer } from "./components/Pages/Footer";
import { NotFound } from "./components/Pages/NotFound";
import { Nouveautes } from "./components/Pages/Nouveautes";
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
          <Route path="/nouveautes" element={<Nouveautes />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/faq" element={<FAQ />} /> */}
          <Route path="/commentaires" element={<Feedback />} />
          <Route path="/covid19" element={<Covid19 />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
