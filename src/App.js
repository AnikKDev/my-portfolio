import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home/Home';
import Project from './Pages/ProjectDetail/Project';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
      </Routes>

    </div>
  );
}

export default App;
