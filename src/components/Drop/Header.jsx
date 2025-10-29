import React from 'react';
import "../../styles/Header.css"


const Header = () => {
  return (
    <nav className='navbar'>
      <div className='first'>
        <img className='box' src="/images/drop-box-assetes/heade/box.ico"/>
        <h2>Dropbox</h2>
        <ul>
          <li><a href="">Products</a><img src='/images/drop-box-assetes/heade/drop_down.svg'/></li>
          <li><a href="#">Solutions</a><img src='/images/drop-box-assetes/heade/drop_down.svg'/></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Products</a></li>
        </ul>
        
        </div>

        <div className='second'>
          <img className='get' src="/images/drop-box-assetes/heade/globe.svg"/>
          <ul>
            <li><a href='#'>Contact sales</a></li>
            <li><a href='#'>Get app</a></li><img src='/images/drop-box-assetes/heade/drop_down.svg'/>
            <li><a href='#'>Sign up</a></li>
            <li><a href='#'>Log in</a></li>
          </ul>
          
          <button className='start'>Get started</button>

        </div>
    </nav>
  );
}

export default Header;