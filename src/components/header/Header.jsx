import { NavLink } from "react-router-dom";
import gmailIcon from '../../assets/gmail_icon.png'
import gdriveIcon from '../../assets/gdrive_icon.png'

function Header() {
    return (
        <header id="app-header">
            <div className="container">

                <div id="app-infos">
                    <p id="app-name">SG Suite</p>
                    <h1>Remind.me</h1>
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
                    </ul>

                    <div id="external-links">

                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
                            <img src={gmailIcon} alt="logo gmail" />
                        </a>

                        <a href="https://drive.google.com/drive/u/0/folders/0BxrDsls4aULHZVJVeUdxd0M3aEE?resourcekey=0-oqak2kKy48EbW1F6tDGAiw" target="_blank" rel="noreferrer">
                            <img src={gdriveIcon} alt="logo gmail" />
                        </a>




                    </div>

                </div>

            </div>
        </header>
    );
}

export default Header