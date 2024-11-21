import React from 'react'

function Dropdown({title, items}) {
 
  
  return (
    <div className="nav-item dropdown">
      <button
        className="nav-link dropdown-toggle btn"
        style={{ background: "none", border: "none" }}
      >
        {title}
      </button>
      <div className="dropdown-menu">
        <ul>
            {items.map((item, index) => (
            <li key={index}>
                <a className="dropdown-item" href="/">
                {item}
                </a>
            </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown