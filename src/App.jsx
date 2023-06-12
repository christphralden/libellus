import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
// import Footer from "./components/footer/Footer";
import About from "./pages/About";
// import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/home" element={<Home />} />
        <Route exact path="/details/:category/:id" element={<About/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
