import * as React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <p><strong>FOLLOW ME: </strong></p>
                <a href="https://www.linkedin.com/in/moashabi/" target="_blank" rel="noreferrer"><FaLinkedin className='footer-icon' /> LinkedIn</a>
                <a href="https://github.com/TheYodash" target="_blank" rel="noreferrer"><FaGithubSquare className='footer-icon'/> GitHub</a>
            </div>
            <p>© 2021 STAR WARS: THE KNOWN UNIVERSE</p>
                <p>DESIGNED AND DEVELOPED BY <strong>MOAYAD MOHAMMED</strong></p>
        </footer>
    );
}

export default Footer;