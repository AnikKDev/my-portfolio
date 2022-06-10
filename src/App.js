import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Project from './Pages/ProjectDetail/Project';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Contact />
      <Footer></Footer>
    </div>
  );
}

export default App;
