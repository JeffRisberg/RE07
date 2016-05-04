import React from 'react';
import ReactDOM from 'react-dom';

import NavLink from './NavLink'
import Header from './Header'
import DonationList from './DonationList'

class AppRoot extends React.Component {

    render() {
        return (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top" style={{marginBottom: '0px'}}>
                    <div className="container">
                        <div className="navbar-inner">
                            <NavLink to="/" className="navbar-brand">RE07</NavLink>

                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/items">Find Charities</NavLink></li>
                                    <li><NavLink to="/events">Manage Gift Cards</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Header/>
                </div>
                <div className="container">
                    <DonationList/>
                </div>
            </div>
        );
    }
}

export default AppRoot;
