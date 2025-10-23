import React from 'react'
import "../../styles/Hero.css"
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (

    <div className='hero'>

      <div className='all_left'>
      <div className='left_1'>
      <h1 className='find_anything'>Find anything.
      Protect everything.</h1>
      
      <p className='paragraph'>Find, organize, and protect your work with Dropbox Dash. Now with advanced search for video, images, and team members—plus generative AI capabilities across even more connected apps.
      </p></div>
      
      <div className='left_2'>
        <button className='whats' >What's new with Dash <FaArrowRight className='f_arrow'/></button>
        <a href='#' className='free'>Try Dropbox free</a><img src='/public/images/drop-box-assetes/heroes/arrow_right.svg'/>
      </div>
      </div>

      <div className='vid_1'>
        <video autoPlay muted loop src='/public/images/drop-box-assetes/heroes/Dropbox.webm'></video>
      </div>

    </div>
  )
}

export default Hero