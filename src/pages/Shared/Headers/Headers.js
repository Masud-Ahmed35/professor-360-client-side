import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../assets/images/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

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
                <>
                    {
                        user?.uid ?
                            <>
                                <Link>
                                    <Navbar.Link>My Reviews</Navbar.Link>
                                </Link>
                                <Link>
                                    <Navbar.Link>Add Service</Navbar.Link>
                                </Link>
                                <Button onClick={handleLogOut} color='gray'>
                                    <Navbar.Link>Log Out</Navbar.Link>
                                </Button>
                                <>
                                    {
                                        user?.photoURL ?
                                            <>
                                                <Avatar
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
                                <Link to='/login'>
                                    <Navbar.Link>Login</Navbar.Link>
                                </Link>
                            </>
                    }
                </>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Headers;