import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navHeader">
            <div className="logo">
                YummyTaste
            </div>
            <div className="navLinks">
                <div className="showContentOnSmallerSreen">
                    <button className="menuBtn">MENU</button>
                </div>
                <div className="options">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Menu">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;