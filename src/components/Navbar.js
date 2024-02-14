import React from 'react'
import "../styles/nav.css"
// import logo from "../data/data.json"
// "logo": "https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg",

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">

                <a href="/">
                    <img id="logoImage" src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="not" />
                </a>
            </div>
            <a className='navlinks' to="/miphones">MI Phones</a>
            <a className='navlinks' to="/redmiphones">Redmi Phones</a>
            <a className='navlinks' to="/tv">TV</a>
            <a className='navlinks' to="/laptops">Laptops</a>
            <a className='navlinks' to="/lifestyle">Fitness & lifestyle</a>
            <a className='navlinks' to="/home">Home</a>
            <a className='navlinks' to="/audio">Radio</a>
            <a className='navlinks' to="/accessories">Accessories</a>

            <div className='searchbox'>
                <input type="text" name='search' placeholder='Search Products' />
                {searchIcon}
            </div>



        </div>
    )
}

export default Navbar
