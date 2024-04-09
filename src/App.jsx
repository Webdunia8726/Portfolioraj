
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';






function App() {

  return (
    <>


      <Router>

     
      <Navbar />

        <Routes>
          
          <Route path="/" element={ <Home

imageSrc="images/header2.png"
paragraphText="
I design visually stunning and user-friendly websites that seamlessly blend creativity with functionality, creating a compelling online presence tailored to your brand and audience. With a keen eye for aesthetics and a focus on user experience, I bring ideas to life in the digital space."

/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
