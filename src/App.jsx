import React from 'react';
import SideBar from './components/SideBar.jsx';

require('./stylesheets/main.scss');

class App extends React.Component {
    render() {
        return (
            <div>
                <SideBar />
                Hello World!
            </div>
        );
    }
}

export default App;
