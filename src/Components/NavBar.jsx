import { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../images/logo1.png';



export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-slate-900">
            <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between">
                        <a href="#" className="flex">
                            <img className="h-20 object-fit" src={logo} />
                        </a>
                        <h1 className="text-center text-white">Wachira Speaks <br/><span className="text-amber-500">Empowering People</span></h1>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200 hover:border-b-2 border-yellow-600 pb-4">
                                <NavLink to='/'>HOME</NavLink>
                            </li>
                            <li className="text-white hover:text-indigo-200 hover:border-b-2 border-yellow-600 pb-4">
                            <NavLink to='/about'>ABOUT</NavLink>
                            </li>
                            <li className="text-white hover:text-indigo-200 hover:border-b-2 border-yellow-600 pb-4">
                            <NavLink to='/service'>SERVICES</NavLink>
                            </li>
                            <li className="text-white hover:text-indigo-200 hover:border-b-2 border-yellow-600 pb-4">
                            <NavLink to='/contact'>CONTACT</NavLink>
                            </li>
                        </ul>

                        <div className="mt-0 space-y-0 lg:hidden md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="inline-block w-1/3 px-4 py-2 text-center text-white border-2"
                    >
                        GET IN TOUCH
                    </a>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-white  border-2"
                    >
                        GET IN TOUCH
                    </a>
                </div>
                
            </div>
        </nav>
    );
}