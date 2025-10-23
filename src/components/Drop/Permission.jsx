import React from 'react'
import { IoMdLock } from "react-icons/io";
import "../../styles/Permission.css"

const Permission = () => {
  return (
    <div>
      <p className='permiss'><IoMdLock className='lock_1' />Permissions</p>
      <h2>Protect all your content</h2>
      <p>Dash makes it easy to find files across apps and safeguard sensitive content. With AI-powered search and universal access controls, your team stays connected, efficient, and secure.</p>
      <button>Learn more<img src='/public/images/drop-box-assetes/permissions/arrow_right.svg'/></button>

    </div>
  )
}

export default Permission