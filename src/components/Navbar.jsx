import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import logo2 from '../img/logo2.svg'

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () =>{
    if (window.scrollY > 50){
      setScrolled(true);
    }else{
      setScrolled(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  })


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
   <header>
      <nav className={scrolled ? "navbar navbar-expand-lg fixed-top scrolled" : "navbar navbar-expand-lg bg-transparent fixed-top"}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={scrolled ? logo2 : logo} alt="logo" />
          </a>
          
              {/* Hamburger icon for mobile */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebar}
              >
                {scrolled ? <span className="navbar-toggler-icon2"></span>:<span className="navbar-toggler-icon"></span>}
              </button>
          {/* Desktop Menu */}
          <div className="collapse navbar-collapse ps-5">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <Dropdown
                  title="Restaurants"
                  items={["Restaurants", "Restaurant Card", "Marketing"]}
                />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <div className=''>
              <Link className="button button-2" to="/menu">Order Now</Link>
            </div>
          </div>
        </div>
      </nav>
    
      {/* Mobile Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        menuItems={[
          { title: "Home", link: "/" }, 
          { title: "About Us", link: "/about" }, 
          {
            title: "Restaurants",
            subItems: ["Restaurants", "Restaurant Card", "Marketing"],
          },
          { title: "Contact", link: "/contact" },
        ]}
      />
    </header>
        
    </>
  )
}

export default Navbar
 