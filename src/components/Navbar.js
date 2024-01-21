import React from 'react';
import {NavLink} from "react-router-dom";
import './CSS/Navbar.css';
import { SocialIcon } from "react-social-icons";

export default function Navbar(){
    return(
        <header className="bg-gray-400">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink to="/" exact
                    activeClassName="text-black"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-black hover:text-white text-4xl font-bold cursive tracking-widest">
                        Amin
                    </NavLink>
                    <NavLink to="/resume" 
                    activeClassName="text-white bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        Resume
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-red-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        Projects
                    </NavLink>
                    <NavLink to="/contact" activeClassName="text-red-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        Contact Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://github.com/Asabe041" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}/>
                <SocialIcon url="https://www.linkedin.com/in/amin-saber-11bb52167/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}/>

                </div>
            </div>
            
        </header>
    )
}

