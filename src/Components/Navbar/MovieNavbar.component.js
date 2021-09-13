
import React from "react";
import { BiShareAlt,BiSearch , BiChevronDown, BiMenu, BiChevronLeft } from "react-icons/bi";
import logoSvg from "./logo.svg";


const NavSm = () => {
  return (
    <>
    <div className="text-black flex items-center justify-between ">
    <div className="flex items-center">
    <span className="text-3xl"> <BiChevronLeft /></span>
    <h3 className="text-xl ">Fast and Furious</h3>
    </div>
    <div className="w-8 h-8 ">
    <BiShareAlt className="w-full h-full" />
    </div>
    </div>
    </>
  )
};

const NavLg = () => {
  
  return (
    <>
    <div className="container mx-auto px-4 flex items-center justify-between">
   <div className="flex items-center w-1/2">
      <div className="w-64 h-12">
         <img 
         src={logoSvg}
         alt="logo"
         className="w-full h-full"
         />
        

      </div>
      <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
         <BiSearch />
         <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
      </div>
   </div>




   <div className="flex items-center gap-3">
   <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
      Allahabad
      <BiChevronDown />
   </span>
   <button className="bg-myColor-400 text-white text-sm rounded px-2 py-1">
   Sign in
   </button>
   <div className="w-8 h-8 text-white">
   <BiMenu className="w-full h-full" />
   </div>
   </div>
</div>
</>
  )
 
};

const MovieNavbar = () => {
return (
  <>
  <nav className=" bg-white lg:bg-navCol-800 px-4 py-2 absolute inset-x-0 z-10 backdrop-filter backdrop-blur bg-opacity-10 lg:relative">
  <div className="md:hidden ">{
    /*Mobile Screen*/
    <NavSm />
  }</div>
  <div className="hidden lg:hidden md:block">{
    /*Tablet Screen*/
    <NavSm />
  }</div>
  <div className="hidden lg:flex">{
    /*desktop Screen*/
    <NavLg />
  }</div>
  </nav>
  </>
)

};

export default MovieNavbar;
