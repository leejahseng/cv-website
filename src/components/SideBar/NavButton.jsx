import React from 'react';

export default class NavButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            href: props.href,
            icon: props.icon
        };
    }

    render() {
        return(
            <div className='nav-button' >
                <a href={this.state.href} >
                    <p>{this.state.name}</p>
                    {this.state.icon}
                </a>
            </div>
        )
    }
}
