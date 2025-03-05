import React from 'react'

function Navbar() {
    const navItems = (
        <>
        <li><a>Home</a></li>
        <li><a>Course</a></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li>
        </>
    )
  return (
    <>
    <div>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <a className="text-2xl font-bold cursor-pointer">ReadSphere</a>
  </div>

  <div className="navbar-end">

  <div className="navbar-center hidden lg:flex mr-4">
    <ul className="menu menu-horizontal px-0">
      {navItems}
    </ul>
  </div>
  <label className="input pt-2 ml-3 hidden md:block">
  <input type="text" className="grow" placeholder="Search" />
</label>
  <div className="navbar-end ml-4 ">
    <a href='' className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300">Login</a>
  </div>
  
</div>
</div>
    </div>
    </>
  )
}

export default Navbar
