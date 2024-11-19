import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navlink=<>
        <li><NavLink to="/">Home</NavLink> </li>
        <li><NavLink to="/addProduct">Add Product</NavLink> </li>
        <li><NavLink to="/Mycard">My Card</NavLink> </li>
        <li><NavLink to="/login">Login</NavLink> </li>
        
    </>
    return (
        <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navlink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src="/public/images/swoosh-logo-black.jpeg" className='w-20' alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlink}
    </ul>
  </div>
  <div className="navbar-end">
  <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <a className="btn btn-warning ms-3">Login</a>
  </div>
</div>
        </div>
    );
};

export default Header;