import React from 'react'
import { IoMdLock } from "react-icons/io";
import "../../styles/Permission.css"

const Permission = () => {
  return (

    <div className='permission'>
      <div className='up_1'>
      <p className='permiss'><IoMdLock className='lock_1' />Permissions</p>
      <h2>Protect all your content</h2>
      <p>Dash makes it easy to find files across apps and safeguard sensitive content. With AI-powered search and universal access controls, your team stays connected, efficient, and secure.</p>
      <button className='btn_1'>Learn more<img src='/images/drop-box-assetes/permissions/arrow_right.svg'/></button>
      </div>

      <div className='permission_image'>
      <img className='think' src='/images/drop-box-assetes/permissions/thinking.png'/>
      <video className='list' autoPlay src="/images/drop-box-assetes/permissions/Dropbox.webm"></video>
      </div>

    </div>
  )
}

export default Permission