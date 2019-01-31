import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <ul>
                    <li><a id='jendigital' alt='JenDigital' href='https://jendigitalvision.com/'>Jen Digital Vision </a></li>
                    <li><a alt='Github' href='https://github.com/jendigital'>Github</a></li>
                    <li><a alt='Linkedin' href='https://www.linkedin.com/in/jendigitalvision/'> Linkedin </a></li>
                    <li><a alt='Curriculum Vitae' href='https://docs.google.com/document/d/1RKdDXFEklAHV0NJmxiFtMFQX0Abi3UU_4bGtLAQNmRc/edit?usp=sharing'>Curriculum Vitae</a></li>
                    <li><a alt='Trello' href='https://trello.com/jendigitalvision'>Trello</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;
