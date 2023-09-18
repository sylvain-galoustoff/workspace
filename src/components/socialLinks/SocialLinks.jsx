import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

function SocialLinks() {
    return (
        <div id="social-links">
            <div id="social-link-wrapper">

                <a
                    className="social-link"
                    href="https://github.com/sylvain-galoustoff/workspace"
                    target="_blank"
                    rel="noreferrer"
                    title="Repo github du projet"
                >
                    <IoLogoGithub />
                </a>

                <a
                    className="social-link"
                    href="https://www.linkedin.com/in/sylvain-galoustoff-043058287/"
                    target="_blank"
                    rel="noreferrer"
                    title="Profil LinkedIn"
                >
                    <IoLogoLinkedin />
                </a>

            </div>
        </div>
    );
}

export default SocialLinks