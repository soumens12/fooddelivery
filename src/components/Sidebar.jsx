import React from 'react';
import logo from '../img/logo.svg';

function Sidebar({isOpen, toggleSidebar, menuItems}) {
  return (
    <div className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`} style={{ visibility: isOpen ? "visible" : "hidden" }}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">
          <img src={logo} alt="" />
        </h5>
        <button type="button" className="btn-close" onClick={toggleSidebar}></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled">
          {menuItems.map((item, index) =>
            item.subItems ? (
              <li key={index}>
                {item.title}
                <ul className="ps-3">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href="/">{subItem}</a>
                    </li>
                  ))}
                </ul>
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