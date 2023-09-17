import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header id="app-header">
            <div className="container">

                <div id="app-infos">
                    <p id="app-name">WorkSpace</p>
                    <h1 id="page-name">Remind.me</h1>
                </div>

                <div className="right-part" id="menus">

                    <ul id="app-menu">
                        <li className="menu-item">
                            <NavLink to="/">Remind.me</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/payme">Pay.me</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/hireme">Hire.me</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/contactme">Contact.me</NavLink>
                        </li>
                    </ul>

                </div>

            </div>
        </header>
    );
}

export default Header