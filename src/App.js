import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Blogs from "./Pages/Home/Blogs/Blogs";
import Contact from "./Pages/Home/Contact";
import Home from "./Pages/Home/Home";
import Project from "./Pages/ProjectDetail/Project";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <Contact />
      <Footer></Footer>
    </div>
  );
}

export default App;
