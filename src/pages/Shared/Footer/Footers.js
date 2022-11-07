import { Footer } from 'flowbite-react';
import React from 'react';
import logo from '../../../assets/images/logo.png'

const Footers = () => {
    return (
        <Footer container={true} className='mt-10'>
            <div className="w-full text-center">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="#"
                        src={logo}
                        alt="Website Logo"
                        name="Professor 360"
                    />
                    <Footer.LinkGroup className='flex justify-evenly mt-5'>
                        <Footer.Link>About</Footer.Link>
                        <Footer.Link>Privacy Policy</Footer.Link>
                        <Footer.Link>Licensing</Footer.Link>
                        <Footer.Link>Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="#"
                    by="by Professor M"
                    year={2022}
                />
            </div>
        </Footer>
    );
};

export default Footers;