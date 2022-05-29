import React from 'react'
import  "./navbar.css"
import Imgg from "../img/1_3za1DBiLHq_xvpMW5qIqLg.png"
import cosc from  "../img/cosche.png"
import Apple from "../img/Apple.png"



function Projects() {
  return (
    <div className='service'>
      <div>
      <h2>MY Projects</h2>
      </div>
      <div className="box">
			<div className="card">
				<i className="fas fa-bars"></i>
				<h5>Bath && Body Works</h5>
				<div className="pra">
					<img src={Imgg} alt="" />
					<p>We created this website with the help of react and bootstrap.We have inspired from official website bath and body works</p>


			
						<a className="button" href="https://github.com/rushig777/bathandbodyworks-clone">Readmore</a>
				
				</div>
			</div>

			<div className="card">
				<i className="far fa-user"></i>
				<h5>Co-Schedule</h5>
				<div className="pra">
					<img src={cosc} alt=''/>
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

      
						<a className="button" href="https://github.com/mohan-palleti/CoSchedule-clone/">Read More</a>
			
				</div>
			</div>

			<div className="card">
				<i className="far fa-user"></i>
				<h5>Apple-Tv</h5>
				<div className="pra">
					<img src={Apple} alt="" />
					<p>Created Apple Tv  website Inspiration from Apple Tv.The Apple TV app is a line of media player software programs developed by Apple Inc.</p>

      
						<a className="button" href="https://github.com/RaviRanjan02/AppleTv/&&https://lucid-ritchie-187c42.netlify.app/">Read More</a>
			
				</div>
			</div>

			</div>
		</div>



   
  )
}

export default Projects