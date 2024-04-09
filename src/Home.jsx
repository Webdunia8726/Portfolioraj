import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Myskill from './Myskill';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

const Home = ({ imageSrc, altText, paragraphText }) => {
  return (
   <>
      
    

   {/* Section header */}
   <div className="container-fluid p-4  insidecontainer"  >

      <div className="row">
        {/* Left Side: Paragraph */}
        <div className="col-md-6 mt-5">
          <h1 >Hello I' am  <span className='prof'> Raj Patel</span></h1>
          <h1><span className='web'>Frontend Developer</span></h1>
          <h1>Based in India.</h1>
          <p className='fw-5 mt-5 '>{paragraphText}</p>
          <Link  to="/about">
          <button type="button" class="btn1 fs-5">More Explore</button>
              </Link>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6">
          <img src={imageSrc} alt={altText} className="img-fluid animated-image mt-3" />
        </div>
      </div>
    </div>
    {/* SYG WAVE */}

{/* Services */}

<div className="conatiner-fluid p-3" style={{   backgroundImage: "url(" + "images/bluradope.png" + ")",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
 }}>
  <Myskill/>
</div>
{/* Projects */}
<div className="container-fluid pt-4 pb-5 " style={{ backgroundColor:"black" }} >
  <Projects/>
</div>
  {/* Contact US */}
  <div className="container-fluid" >
    <Contact/>
  </div>

  {/* ABout US */}

  <div className="container-fluid">
<About/>
  </div>
{/* Foooter */}
{/* testmonial */}
<div className="container mt-5">
  <h1 className='text-center pb-5'>My <span>Testmonial</span></h1>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
</div>

<div class="container-fluid" >
    <div class="row mt-5">
      <div class="col-12">
        <footer class="bg-dark text-light text-center py-3">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>

   </>
  )
}

export default Home;
