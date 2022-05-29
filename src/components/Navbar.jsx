import React from 'react'
import  "./navbar.css"

function Navbar() {
  return (
    
    <nav>
	<h2 class="logo">Portfo<span>lio</span></h2>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About </a></li>
				<li><a href="#">Projects</a></li>
				<li><a href="#">Skills</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		
    </nav>
  )
}

export default Navbar