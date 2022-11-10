import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import registerLogo2 from '../../assets/images/registerLogo2.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {
    const { googleLogin, gitHubLogin, createUser, addNameAndPhoto } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    // -------------------Google Login-----------------------
    const handleGoogleLogin = event => {
        event.preventDefault();

        googleLogin(googleProvider)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful With Google');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error.message))
    }

    // -------------------GitHub Login-----------------------
    const handleGitHubLogin = event => {
        event.preventDefault();

        gitHubLogin(gitHubProvider)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful With GitHub');
                navigate(from, { replace: true });
            })
            .catch(error => toast.error(error.message))
    }

    // ------------------Registration--------------------
    const handleRegister = event => {
        event.preventDefault();
        const user = {
            name: event.target.name.value,
            photo: event.target.photo.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        createUser(user?.email, user?.password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Created Your Account');

                addNameAndPhoto(user?.name, user?.photo)
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    .catch(error => toast.error(error.message))
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='my-10 lg:flex lg:divide-x-2'>
            <div>
                <img className='w-2/3 mx-auto lg:w-[80%]' src={login} alt="" />
            </div>
            <div className='w-2/3 mx-auto lg:mx-0'>
                <div className='flex justify-center mb-5'>
                    <img className='w-40' src={registerLogo2} alt="" />
                </div>
                <form onSubmit={handleRegister} className="flex flex-col gap-4 lg:w-2/3 mx-auto">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            name='name'
                            placeholder="Type your Name"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photo"
                                value="Photo URL"
                            />
                        </div>
                        <TextInput
                            id="photo"
                            type="text"
                            name='photo'
                            placeholder="Give Your photoURL"
                            required={true}
                        />
                    </div>
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
                    <div className='mb-5'>
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
                    <Button type="submit">
                        Register
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
                        <Button onClick={handleGitHubLogin} color="gray" className='w-full'>
                            <FaGithub className='w-6 h-6 mr-2' />
                            <p>GitHub</p>
                        </Button>
                    </Link>
                </div>
                <p className="text-sm text-center mt-5">Already have an account?
                    <Link to='/login' className="underline ml-1 text-amber-600 font-semibold">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;