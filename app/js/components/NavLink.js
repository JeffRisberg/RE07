import React from 'react'
import { NavLink as RouterNavLink } from 'react-router'

class NavLink extends React.Component {
    render() {
        return <RouterNavLink {...this.props} end={this.props.to === '/'}/>
    }
}

export default NavLink;
