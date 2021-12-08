import React from 'react'
import { PropTypes } from 'prop-types';
import { FaGithub } from 'react-icons/fa';

const Navbar = (props) => {
        return (
            <div>
                <nav className="navbar bg-primary">
                    <h1>
                        <div><FaGithub /> Github Finder</div>
                    </h1>
                </nav>
            </div>
        )
    };

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'FaGithub'
}
Navbar.propTypes = {
    title: PropTypes.array.isRequired,
    icon: PropTypes.string.isRequired   
}

export default Navbar;
