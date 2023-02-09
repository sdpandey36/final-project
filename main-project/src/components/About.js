import React from 'react'
import Navbar from './Navbar';
import person1 from "./person1.jpg";


const About = () => {
  return (
    <>
    <Navbar/>
    <div class="about-sec">
		<div class="about-img">
			<img src={person1} alt=""/>
		</div>
		<div class="about-intro">
			<h3>About Us</h3>
			<p>A website called "Quick Blood Finder" might be a resource for people in need of blood donations or for individuals interested in finding local blood donation opportunities. The purpose of such a website would be to help connect blood donors with blood recipient organizations or individuals in need of blood transfusions. This could potentially help save lives by making it easier for people to find and donate blood, and for blood recipient organizations to find suitable blood donors..</p>
		</div>
	</div>
    </>
  )
}

export default About
