import React from 'react';
import NavButton from './NavButton.jsx';

// Icons - must be better way of importing
var FaUser = require('react-icons/lib/fa/user');
var User = <FaUser className="icon"/>;
var FaFileText = require('react-icons/lib/fa/file-text');
var FileText = <FaFileText className="icon"/>;
var FaPaintBrush = require('react-icons/lib/fa/paint-brush');
var PaintBrush = <FaPaintBrush className="icon"/>;
var FaEllipsis = require('react-icons/lib/fa/ellipsis-h');
var Ellipsis = <FaEllipsis className="icon"/>;

export default class NavButtonPane extends React.Component{
    render() {
        return(
            <div>
                <NavButton name="About Me" href="about-me" icon={User}/>
                <NavButton name="Programming" href="programming" icon={FileText}/>
                <NavButton name="Art" href="art" icon={PaintBrush}/>
                <NavButton name="More" href="more" icon={Ellipsis}/>
            </div>
        )
    }
}
