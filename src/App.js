import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Volume from './pages/BlogDetails/Volume';
import Energy from './pages/BlogDetails/Energy';
import Calories from './pages/BlogDetails/Calories';

function App() {
  return (
    <div>
      <Router basename='/Fitness-World'>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blog/volume" element={<Volume />}/>
          <Route path="/blog/energy" element={<Energy />}/>
          <Route path="/blog/calories" element={<Calories />}/>
          <Route path="*" element={<Home to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
