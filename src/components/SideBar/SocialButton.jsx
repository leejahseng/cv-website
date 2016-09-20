import React from 'react';

export default class SocialButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon,
            href: props.href
        }
    }

    render() {
        return(
            <div className='icon-social-button'>
                <a href={this.state.href}>{this.state.icon}</a>
            </div>
        );
    }
}