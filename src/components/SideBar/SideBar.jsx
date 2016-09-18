import React from 'react';
import NavButton from './NavButton.jsx'

export default class SideBar extends React.Component{
    
    render() {
        return(
            <div className='side-bar'>
                <NavButton name="About Me" href="about-me"/>
                <NavButton name="Programming" href="programming"/>
                <NavButton name="Art" href="art"/>
                <NavButton name="More" href="more"/>
            </div>
        )
    }
}
