import React from 'react';

export default class SocialButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon
        }
    }

    render() {
        return(
            <div className='icon-social-button'>
                <a>{this.state.icon}</a>
            </div>
        );
    }
}