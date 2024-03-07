import { Link } from "react-router-dom";
import { MdMenu, MdSearch } from "react-icons/md";
import { useState } from "react";


const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const avatar = 'foto.jpg'


    return <div className="container">
        <div className="container-header">
            <div className="toggle-btn">
                <button onClick={() => { setClicked(!clicked) }}>
                    <MdMenu />
                </button>
                <Link className="logo" to="/"><img src="https://res.cloudinary.com/academia/image/upload/v1709834834/magher/dzwv4usle82k1cfi9wyw.png"/></Link>

            </div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/" ></Link>Peliculas</li>
                    <li><Link to="/user">Series</Link></li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder="Buscar" />
                    <MdSearch className="search-icon" />
                </div>
            </nav>
            <div className="avatar-container">
                <img src={avatar} alt="Profile" />
            </div>
        </div>
    </div>
}



export default Navbar;