import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import loginLogo2 from '../../assets/images/loginLogo2.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const LogIn = () => {
    const { googleLogin, logInWithEmail } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    // -------------------Google Login-----------------------
    const handleGoogleLogin = event => {
        event.preventDefault();

        googleLogin(googleProvider)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful With Google')
            })
            .catch(error => console.error(error.message))
    }

    // ----------------Login In With Email And Password-------------------
    const handleLoginWithEmail = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        logInWithEmail(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful');
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='my-10 lg:flex lg:divide-x-2'>
            <div>
                <img className='w-2/3 mx-auto lg:w-[80%]' src={login} alt="" />
            </div>
            <div className='w-2/3 mx-auto lg:mx-0'>
                <div className='flex justify-center mb-5'>
                    <img className='w-40' src={loginLogo2} alt="" />
                </div>
                <form onSubmit={handleLoginWithEmail} className="flex flex-col gap-4 lg:w-2/3 mx-auto">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name='email'
                            placeholder="example@gmail.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            name='password'
                            placeholder="********"
                            required={true}
                        />
                    </div>
                    <div className="flex justify-end text-xs">
                        <Link>Forgot Your Password?</Link>
                    </div>
                    <Button type="submit">
                        Login
                    </Button>
                </form>
                <div className="mt-5 flex items-center pt-4 space-x-1 w-[90%] mx-auto lg:w-[60%] lg:mx-auto">
                    <div className="flex-1 h-px bg-gray-700"></div>
                    <p className="px-3 text-sm">Login with social accounts</p>
                    <div className="flex-1 h-px bg-gray-700"></div>
                </div>
                <div className='mt-5 flex justify-evenly'>
                    <Link>
                        <Button onClick={handleGoogleLogin} color="gray" className='w-full'>
                            <FcGoogle className='w-6 h-6 mr-2' />
                            <p>Google</p>
                        </Button>
                    </Link>
                    <Link>
                        <Button color="gray" className='w-full'>
                            <FaGithub className='w-6 h-6 mr-2' />
                            <p>GitHub</p>
                        </Button>
                    </Link>
                </div>
                <p className="text-sm text-center mt-5">Don't have an account?
                    <Link to='/register' className="underline ml-1 text-amber-600 font-semibold">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;