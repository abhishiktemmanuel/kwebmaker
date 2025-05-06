'use client'
import React from 'react';
import Link from "next/link";
import CTA from './CTA';

const Navbar = () => {
    return (
        <nav className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between h-16">
                    {/* Left section - Brand Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <img src="SSA-Logo03 1.svg" alt="Sports Logo" className="h-8 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Center section - Navigation Links */}
                    <div className="hidden md:flex items-center justify-center space-x-4">
                        <Link href="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</Link>
                        <Link href="/matches" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Matches</Link>
                        <Link href="/programs" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Programs</Link>
                        <Link href="/coaches" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Coaches</Link>
                        <Link href="/amenities" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Amenities</Link>
                        <Link href="/eventsPage" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Events</Link>
                        <Link href="/news" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">News</Link>
                        <Link href="/blogs" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blogs</Link>
                    </div>

                    {/* Right section - Contact Button */}
                    <div className="flex items-center">
                        <CTA text="Contact Us" onClick={() => window.location.href = '/contact'} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;