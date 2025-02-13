import React, { useState } from "react";
import Button from "./Button";
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent p-4 fixed w-full top-0 left-0 z-50 text-sm">
            <div className="container mx-auto sm:flex justify-end items-center">
                <ul className="hidden md:flex items-center space-x-6 gap-5">
                    <li><a href="/" className="hover:text-red-500">Home</a></li>
                    <li><a href="/feature" className="hover:text-red-500">Feature</a></li>
                    <li><a href="/service" className="hover:text-red-500">Service</a></li>
                    <li><a href="/product" className="hover:text-red-500">Product</a></li>
                    <li><a href="/aboutUs" className="hover:text-red-500">About Us</a></li>
                    <li><a href="/login" className="text-red-500 hover:underline">Login</a></li>
                </ul>

                {/* hamburger */}
                <div className="hamburger flex justify-between items-center">
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isOpen ? (
                                // Tombol Close (X)
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <span className="text-sm ms-5 sm:me-10 sm:ms-11">
                        <Button title="Sign Up" />
                    </span>
                </div>
            </div>

            {/* Mobile Menu  */}
            <div className={`fixed inset-0 bg-white z-50 flex flex-col items-start w-3/4 h-full shadow-lg px-9 py-9 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 focus:outline-none self-start "
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Menu List */}
                <ul className="mt-11 space-y-10 text-sm w-full font-bold">
                    <li><a href="/" className="block hover:text-red-500">Home</a></li>
                    <li><a href="/feature" className="block hover:text-red-500">Feature</a></li>
                    <li><a href="/service" className="block hover:text-red-500">Service</a></li>
                    <li><a href="/product" className="block hover:text-red-500">Product</a></li>
                    <li><a href="/aboutUs" className="block hover:text-red-500">About Us</a></li>
                    <li><a href="/login" className="block text-red-500 hover:text-red-700">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
