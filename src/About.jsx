import React from 'react'
import Navbar from './Navbar'

const About = () => {

  return (
    <>
    
    <div className="container-fluid">
    <h1 class="text-center mb-4 fs-1 pt-5 ">About Us</h1>

      <div className="row">
        <div className="col-md-6 ">


        <table class="table table-bordered fs-5  ">
     
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Welcome to FastxMarketing</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Established in 2020, we're dedicated to digital innovation.</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Our mission is to empower businesses with seamless web development solutions.</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>We specialize in creating cutting-edge websites and powerful applications.</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Collaboration is key; we work closely with clients to bring visions to life.</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Our expertise spans various technologies to ensure project success.</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>From e-commerce to mobile apps, we deliver tailored solutions for every need.</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Meet our talented team committed to excellence and project success.</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Ready to elevate your digital presence? Contact us for innovative solutions.</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>Thank you for considering FastxMarketing. Let's build something extraordinary together!</td>
        </tr>
      </tbody>
    </table>
  
        </div>
        <div className="col-md-6">
        <img src="images/About.png" class="img-fluid animated-image" alt="..."/>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
