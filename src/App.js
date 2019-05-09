import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from "./component/Main";
import Navbar from './MyAppBar';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                    {/* <Link to="/home">Home</Link>&nbsp;&nbsp;
                    <Link to="/profile">Profile</Link>&nbsp;&nbsp;
                    <Link to="/portofolio">Portofolio</Link>&nbsp;&nbsp;
                    <Link to="/kontak">Kontak</Link>&nbsp;&nbsp; */}
                    <p><Main/></p>
                </div>
        );
    }

    newMethod() {
        return <Navbar />;
    }
}

export default App;
