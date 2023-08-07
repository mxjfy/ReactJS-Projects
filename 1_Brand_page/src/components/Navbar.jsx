import './Navbar.css';
import logo from '../assets/img/brand_logo.png';

const Navbar = () => {
    return (
        <>
            <nav className='nav-bar'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                {/* Links */}
                <ul className="link">
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Location</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>

                <button className="login">
                    <a href="#">Login</a>
                </button>
            </nav>
        </>
    )
}
export default Navbar;