import React from 'react';
import SideBar from './components/SideBar/SideBar.jsx';

require('./stylesheets/main.scss');

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <SideBar />
            </div>
        );
    }
}

export default App;
