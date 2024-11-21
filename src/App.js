import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import '../node_modules/boxicons/css/boxicons.min.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Loader from './components/Loader';
import RestaurantDetails from './pages/RestaurantDetails';
import NotFound from './components/NotFound';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading delay
    return () => clearTimeout(timer); // Cleanup the timer
  }, [location]);

  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
        offset: 50, // Offset value for triggering animations
    });
}, []);

  return (
      <>
      {loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/restaurants" element={<RestaurantDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </>
  );
}

// export default App;

export default function MainApp() {
  return (
    <Router>
      <Navbar/>
      <App />
      <Footer/>
    </Router>
  );
}
