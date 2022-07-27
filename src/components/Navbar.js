import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaInstagramSquare,
    FaTwitterSquare,
    FaLinkedInSquare,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div>
    <ul>
    <li>Home</li>
    <li>Work</li>
    <li>Socials</li>
    <li>Contact</li>
    </ul>
    </div>
  )
}
