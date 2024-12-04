import React from 'react'
import { NavLink } from 'react-router-dom'

import RotatingText from '../components/RotatingText'


const Home = () => {
  return (
    <>
        <div className='homepage'>
            <h1 className='home-title'>Yazzamuffiny</h1>
            <RotatingText/>
            <div className='home-buttons'>
                <div className='works-button'>
                    <NavLink to='/works' className='home-button'>View Work</NavLink>
                </div>
                <div className='contact-button'>
                    <NavLink to='/contact' className='home-button'>Contact</NavLink>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Home
