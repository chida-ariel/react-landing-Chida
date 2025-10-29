import React from 'react'
import { IoMdFolderOpen } from "react-icons/io";
import "../../styles/Content.css"

const Content = () => {
  return (
    <div className='content_all' > 
    
      <p className='c_management' ><IoMdFolderOpen className='content_folder' />Content management</p>
      <h2>Organize your work, stay the course</h2>
      <p>Find and organize your work easily thanks to Dropbox cloud storage: organization and smart suggestions, natural language research and simplified integrations.Your team can focus on the essentials.</p>
      
      <div className='content_btns'>
        <button className='learn_more_btn' >Learn more <img src= '/images/drop-box-assetes/content/arrow_right.svg'/> </button>
        <div className='learn_try_button'>
        <a href='#' className='content_try' >Try for free</a><img src='/images/drop-box-assetes/content/arrow_right.svg'/>
        </div>
      </div>
      <div className='content_images'>
        <img className='content_f1' src='/images/drop-box-assetes/content/f1.png'/>
        <img className='content_texts' src='/images/drop-box-assetes/content/messages.png'/>
      </div>
    </div>
  );
}

export default Content;