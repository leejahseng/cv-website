import React from 'react';
import SideBar from './src/sidebar/SideBar.jsx';

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