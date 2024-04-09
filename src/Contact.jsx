import React from 'react'
const Contact = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
        <img src="images/computer.png" class="img-fluid" alt="..."/>
        </div>
        <div className="col-md-6 "style={{ backgroundColor:"#FFC248"}} >
        <div class="container">
    <div class="contact-form">
      <h2 class="text-center mb-4">Contact Us</h2>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Your Name"/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Your Email"/>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" class="btn1" >Submit</button>
      </form>
    </div>
  </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
