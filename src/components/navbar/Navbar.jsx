import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../resources/logo.svg'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu = () => {

        return (
            <>
                <p><a href="#home">Home</a></p>
                <p><a href="#wencryp">What is Encrypzion?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case studies</a></p>
                <p><a href="#blog">Library</a></p>
            </>)
    }
    // Made a menu component here, it can be reused.

    return (
        <div className="encrypzion__navbar">
            <div className="encrypzion__navbar-links">
                <div className="encrypzion__navbar-links_logo">

                    <img src={logo} alt="" />
                </div>
                <div className="encrypzion__navbar-links_container">

                    {/* Using our Menu component */}

                    <Menu />
                </div>
            </div>
            <div className="encrypzion__navbar-sign">

                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className="encrypzion__navbar-menu">
                {
                    toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className="encrypzion__navbar-menu_container scale-up-center">
                            <div className="encrypzion__navbar-menu_container-links">

                                {/* Using our Menu component */}

                                <Menu />

                                <div className="encrypzion__navbar-menu_container-links-sign">

                                    <p>Sign in</p>
                                    <button type='button'>Sign up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Navbar