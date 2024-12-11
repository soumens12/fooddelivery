import React, { useState } from 'react';
import logo from '../img/logo.svg';

function Sidebar({isOpen, toggleSidebar, menuItems}) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`} style={{ visibility: isOpen ? "visible" : "hidden" }} id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">
          <img src={logo} alt="" />
        </h5>
        <button type="button" className="btn-close" onClick={toggleSidebar} ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled sidebar">
          {menuItems.map((item, index) =>
            item.subItems ? (
              <li key={index} onClick={toggleDropdown}>
                {item.title}
                <span>
                {isDropdownOpen ? (
                  <i className="bx bx-chevron-up"></i>
                ) : (
                  <i className="bx bx-chevron-down"></i>
                )}
                </span>

                {isDropdownOpen && (
                <ul className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href="/">{subItem}</a>
                    </li>
                  ))}
                </ul>
                )}
              </li>
            ) : (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar