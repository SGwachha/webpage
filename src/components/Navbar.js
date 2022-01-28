import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closemobilemenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="Navbar-logo" onClick={closemobilemenu}>
                        TRVL <i className="fab fa-accusoft" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to = '/' className="nav-links" onClick={closemobilemenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/services' className="nav-links" onClick={closemobilemenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/Products' className="nav-links" onClick={closemobilemenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/sign-up' className="nav-links-mobile" onClick={closemobilemenu}>
                                sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar