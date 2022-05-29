import React from 'react'
import Image from "../img/main.jpg"

function About() {
  return (
    <div>
        <section class="about">
		<div class="main">
			<img src={Image} alt="" />
			<div class="about-text">
				<h3>About Me</h3>
				<h2>Anand Biniya</h2>
				<h5>front-end <span>Developer</span></h5>
				<p>My Name is Anand Biniya.I am from Bengalore I am very passionate about coding.I love cooking and gardening.In my free time I love to write stories.</p>
				<button><a href="https://drive.google.com/file/d/1G71Ux_d2brJen8qL8HhL2_LX8zJnb3xR/view?usp=sharing">Resume</a></button>
			</div>
		</div>
	</section>
    </div>
  )
}

export default About