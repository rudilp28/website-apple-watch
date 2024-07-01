import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  
  const apple = document.querySelectorAll("#apple path");
  
  for(let i= 0; i<apple.length; i++){
    console.log(`icon ${i} is ${apple[i].getTotalLength()}`);
  }


  

  return (
    
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div to='/' className='navbar-logo' onClick={closeMobileMenu}>

            <div className="logo">
            {/* <img src="https://i.ibb.co/mJjtp75/logo-Apple.png" alt=""/> */}

            <svg id="apple" width="362" height="362" viewBox="0 0 362 362" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M259.72 303.403L259.697 303.424L259.673 303.445C252.124 310.376 244.186 313.807 235.814 314.009C229.748 314.003 222.221 312.266 213.234 308.57L213.228 308.568C203.802 304.72 195.032 302.787 186.898 302.787C178.416 302.787 169.41 304.714 159.868 308.564L159.863 308.566C150.673 312.296 143.484 314.144 138.175 314.312L138.16 314.312L138.146 314.313C130.321 314.652 122.239 311.236 113.878 303.456L113.848 303.429L113.818 303.402C108.514 298.778 101.73 290.682 93.4453 278.984L93.4419 278.98C84.7 266.697 77.4873 252.361 71.8225 236.009C65.7621 218.333 62.7429 201.293 62.7429 184.831C62.7429 165.995 66.8091 149.881 74.8465 136.461L74.8571 136.444L74.8674 136.426C80.9388 125.9 89.6188 117.114 100.071 110.916L100.082 110.91C110.368 104.74 122.111 101.417 134.105 101.281C140.596 101.284 149.354 103.304 160.514 107.487C166.174 109.609 170.864 111.223 174.559 112.311C178.168 113.373 181.077 114.011 183.051 114.011C183.969 114.011 185.168 113.787 186.481 113.469C187.855 113.137 189.564 112.649 191.593 112.013C195.652 110.743 201.104 108.85 207.931 106.35C220.616 101.785 231.091 99.9866 239.493 100.699L239.504 100.7C261.992 102.513 278.863 111.006 290.398 126.099C269.677 139.498 259.271 158.09 259.483 181.671L259.483 181.673C259.67 200.63 266.593 216.506 280.134 229.066C285.544 234.241 291.771 238.48 298.557 241.616C297.205 245.409 295.79 249.058 294.312 252.59C290.203 262.167 285.127 271.298 279.164 279.843C271.09 291.374 264.58 299.161 259.72 303.403ZM183.455 92.4829V92.4759C183.455 79.4052 189.141 65.2553 199.464 53.5886L199.47 53.5815L199.477 53.5742C204.542 47.7608 211.021 42.8714 218.949 38.9577C225.969 35.5392 232.554 33.5152 238.72 32.8438C238.776 33.8652 238.803 34.8834 238.803 35.8984C238.803 49.5564 233.819 62.392 223.726 74.3866C211.98 88.0961 198.215 95.9409 183.557 95.5281C183.486 94.5149 183.452 93.4991 183.455 92.4829Z" stroke="#e8e8e8" stroke-width="5"/>
            </svg>
            </div>

          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <div to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </div>
            </li>
            <li className='nav-item'>
              <div
                to='/story'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </div>
            </li>
            <li className='nav-item'>
              <div
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </div>
            </li>
            <li className='nav-item'>
              <div
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Price
              </div>
            </li>

            {/* <li className='nav-item'>
              <div className="logo2">
                <img src="https://i.ibb.co/2tVDFZY/lupa.png" alt=""/>
              </div>

              <div className="logo3">
                <img src="https://i.ibb.co/n1rLbtf/cesta.png" alt=""/>
              </div>
            </li> */}
          </ul>
          {button && <div to='/sign-up'><div className="logo2"><div className="lupa"> <img src="https://i.ibb.co/2tVDFZY/lupa.png" alt=""/></div> <div className="carinho"> <img src="https://i.ibb.co/n1rLbtf/cesta.png" alt=""/></div></div> </div>}


        </div>
      </nav>
    </>
  );
}

export default Navbar;
