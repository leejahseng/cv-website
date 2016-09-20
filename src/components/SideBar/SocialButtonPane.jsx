import React from 'react';
import SocialButton from './SocialButton.jsx';

// Icons - must be better way of importing
var FaGithub = require('react-icons/lib/fa/github');
var Github = <FaGithub className="icon-social-button"/>;
var FaLinkedin = require('react-icons/lib/fa/linkedin');
var Linkedin = <FaLinkedin className="icon-social-button"/>;

export default class SocialButtonPane extends React.Component{
    render() {
        return(
            <div className="social-button-pane">
                <SocialButton icon={Linkedin} href="https://nz.linkedin.com/in/jah-seng-lee-58289ab4"/>
                <SocialButton icon={Github} href="https://github.com/leejahseng"/>
            </div>
        )
    }
}
