import React from 'react'
import "../../styles/Collaboration.css"
import { MdOutlineSupervisorAccount } from "react-icons/md";

const Collaboration = () => {
  return (
    <div className='collaboration_all'>
      <p className='collaboration_para'> <MdOutlineSupervisorAccount className='collaboration_accounts' /> Collaboration</p>
      <h2>Real-time sharing ensures continuity of work</h2>
      <p>Secure links, instant sync, and large file transfer maintain the connection between your team and your partners for simplified collaboration.</p>

      <div className='collaboration_btns'>
      <button className='collaboration_learn_more'>Learn more <img src='/images/drop-box-assetes/collaboration/arrow_right.svg'/> </button>
      <div className='collaboration_try'_>
      <a href='#'>Try for free</a><img src='/images/drop-box-assetes/collaboration/arrow_right.svg'/>
      </div>
      </div>
    </div>
  )
};

export default Collaboration;