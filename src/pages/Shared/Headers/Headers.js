import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../assets/images/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Headers = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Log Out Successful")
            })
            .catch(error => console.error(error))
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Link to='/' className='flex justify-center items-center'>
                <img
                    src={logo}
                    className="mr-3 h-14"
                    alt="Website Logo"
                />
                <span className="self-center whitespace-nowrap text-2xl font-bold italic">
                    Professor 360
                </span>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink to='/home' className='flex items-center'>
                    Home
                </NavLink>
                <NavLink to='/services' className='flex items-center'>
                    Services
                </NavLink>
                <NavLink to='/blog' className='flex items-center'>
                    Blog
                </NavLink>
                <>
                    {
                        user?.uid ?
                            <>
                                <NavLink to='/my-reviews' className='flex items-center'>
                                    My Reviews
                                </NavLink>
                                <NavLink to='/add-service' className='flex items-center'>
                                    Add Service
                                </NavLink>
                                <Button onClick={handleLogOut} color='gray'>
                                    <Navbar.Link>Log Out</Navbar.Link>
                                </Button>
                                <>
                                    {
                                        user?.photoURL ?
                                            <>
                                                <Avatar
                                                    title={user?.displayName}
                                                    img={user?.photoURL}
                                                    rounded={true}
                                                    bordered={true}
                                                    status="online"
                                                    statusPosition="bottom-right"
                                                />
                                            </>
                                            :
                                            <>
                                                <FaUserAlt></FaUserAlt>
                                            </>
                                    }
                                </>
                            </>
                            :
                            <>
                                <NavLink to='/login' className='flex items-center'>
                                    Login
                                </NavLink>
                            </>
                    }
                </>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Headers;