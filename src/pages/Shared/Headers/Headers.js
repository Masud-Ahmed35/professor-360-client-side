import { Avatar, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'

const Headers = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Link to='/'>
                <Navbar.Brand>
                    <img
                        src={logo}
                        className="mr-3 h-14"
                        alt="Website Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-bold italic">
                        Professor 360
                    </span>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to='/home'>
                    <Navbar.Link>Home</Navbar.Link>
                </Link>
                <Link to='/services'>
                    <Navbar.Link>Services</Navbar.Link>
                </Link>
                <Link to='/blog'>
                    <Navbar.Link>Blog</Navbar.Link>
                </Link>
                <Link to='/login'>
                    <Navbar.Link>Login</Navbar.Link>
                </Link>
                <Link>
                    <Navbar.Link>My Reviews</Navbar.Link>
                </Link>
                <Link>
                    <Navbar.Link>Add Service</Navbar.Link>
                </Link>
                <Link>
                    <Navbar.Link>Log Out</Navbar.Link>
                </Link>
                <Avatar
                    className=''
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                    bordered={true}
                    status="online"
                    statusPosition="bottom-right"
                />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Headers;