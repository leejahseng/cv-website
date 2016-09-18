import React from 'react';

export default class NavButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = {name: props.name, href: props.href};
    }

    render() {
        return(
            <div className='nav-button'>
                <a href={this.state.href}>{this.state.name}</a>
            </div>
        )
    }
}
