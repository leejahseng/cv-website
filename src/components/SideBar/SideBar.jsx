import React from 'react';
import NavButtonPane from './NavButtonPane.jsx';

export default class SideBar extends React.Component{

    render() {
        return(
            <div className='side-bar'>
                <NavButtonPane />
            </div>
        )
    }
}
