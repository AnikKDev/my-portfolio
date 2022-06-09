import React from 'react';

const Header = () => {
    const menuItems = <>
        <li className="mx-2"><a>HOME</a></li>
        <li className="mx-2"><a href='#projects'>PROJECTS</a></li>
        <li className="mx-2"><a href='#services'>SERVICES</a></li>
        <li className="mx-2"><a href='#contact'>CONTACT</a></li>
    </>
    return (
        <div class="navbar bg-[#252734] md:px-16">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a class="justify-between">
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                {menuItems}
                            </ul>
                        </li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-3xl">PORTFOLIO</a>
            </div>
            <div class="navbar-center hidden h-20 lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn btn-outline rounded-full px-10">Resume</a>
            </div>
        </div>
    );
};

export default Header;