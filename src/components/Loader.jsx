import React from 'react';
import "../components/Loader.css"

function Loader() {
  return (
    // <!-- loader start-->
	<div className="page-loader">
		<div className="wrapper">
	        <div className="circle"></div>
	        <div className="circle"></div>
	        <div className="circle"></div>
	        <div className="shadow"></div>
	        <div className="shadow"></div>
	        <div className="shadow"></div>
	        <span>Loading</span>
	    </div>
	</div>
	// <!-- loader end-->
  )
}

export default Loader