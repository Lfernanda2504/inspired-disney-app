import { Link } from "react-router-dom";
import { MdMenu, MdSearch, MdClose } from "react-icons/md";
import { useState } from "react";


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [clicked, setClicked] = useState(false)
    const avatar = 'foto.jpg'

    const handleShowNav = () => {
        setClicked(!clicked)
    }

    return <div className="container">
        <div className="container-header">
            <div className="container-logo">
                <button className="toggle-btn" onClick={handleShowNav}>
                    {
                        clicked ? <MdClose className="icon-navbar" /> : <MdMenu className="icon-navbar" />
                    }
                </button>
                <Link className="logo" to="/"><img src="https://res.cloudinary.com/academia/image/upload/v1709834834/magher/dzwv4usle82k1cfi9wyw.png" /></Link>
                <div className="avatar-container">
                    {isLoggedIn ? (
                        <img src={avatar} alt="Profile" />
                    ) : (
                        <button className="btn-primary" onClick={() => setIsLoggedIn(true)}><Link to="/login">Ingreso</Link></button>
                    )}
                    {isLoggedIn && <button className="btn-logout" onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>}
                </div>
            </div>
            <div className={clicked ? 'content-nav-mobile' : 'active'}>
                {/**${clicked ? 'active' : ''}` */}
                <nav className={isLoggedIn ? 'navbar-login' : 'navbar'}>
                    <ul className="nav-list">
                        <li><Link to="/" ></Link>Home</li>
                        <li><Link to="/" ></Link>Peliculas</li>
                        <li><Link to="/user">Series</Link></li>
                    </ul>
                    <div className="search-container">
                        <input type="text" placeholder="Buscar" />
                        <MdSearch className="search-icon" />
                    </div>
                </nav>
            </div>
        </div>
    </div>
}



export default Navbar;