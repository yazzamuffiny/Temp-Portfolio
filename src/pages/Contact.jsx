import React from 'react'
import { useNavigate } from "react-router-dom"; 



// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {

    const navigate = useNavigate();
  return (
    <>
      
      <div className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">Back</button> 
        <h1 className="page-title">Contact</h1>
        <div className="placeholder"></div>
      </div>
      <div className='contact-page'>
        <div className='about-me'>
          <h2 className='contact-header'>About Me</h2>
          <br />
          <p className='info'>Hiya, My name is Yaz!
            <br />
          
          I'm a creative web developer and graphic designer with a passion for crafting visually stunning and highly functional digital experiences. With a strong foundation in both design and development, I bridge the gap between aesthetics and performance, ensuring every project is not only beautiful but also intuitive and user-friendly.
          <br />
         
          My skill set includes front-end and back-end development <i>(HTML, CSS, JavaScript, React, Node.js)</i> as well as graphic design expertise in Adobe Creative Suite<i>(Photoshop, Illustrator, InDesign).</i>
          <br /> 
        
          Whether it's designing a sleek brand identity, developing a dynamic website, or optimizing user experiences, I thrive on bringing ideas to life.
          Let's create something impactful together!
          </p>
        </div>

        <div className='contact-details'>
          <div className='contact-links'>
            <a href="https://github.com/yazzamuffiny" target="_blank" className='contact-link'> <FaGithub className='contact-icon' /> Github </a>
            <a href="https://www.linkedin.com/in/yasmin-feisst-84200a2aa/" target="_blank" className='contact-link'> <FaLinkedin className='contact-icon' /> LinkedIn </a>
            <a href="https://www.instagram.com/yazzamuffinyart/" target="_blank" className='contact-link'> <AiFillInstagram className='contact-icon'/> Instagram </a>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
