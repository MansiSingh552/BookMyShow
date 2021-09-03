
import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";
import logoSvg from "./logo.svg";


const NavSm = () => {
  return (
    <>
    <div className="text-white flex items-center justify-between">
    <div>
     <h3 className="text-xl font-bold">It All Starts Here!</h3>
     <span className="text-gray-400 text-xs flex items-center">
     Allahabad <BiChevronRight />
     </span>
    </div>
    <div className="w-8 h-8">
    <BiSearch className="w-full h-full" />
    </div>
    </div>
    </>
  )
};
const NavMd = () => {
  return (
    <>
    <div className="text-white flex flex-col w-full">
      <div className="w-full flex items-center bg-white gap-3 rounded-sm mt-3 text-black pl-2"><BiSearch className=""/>
      <input className="w-full my-1 focus:outline-none" type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" ></input></div>
      <div className="flex text-base">
        <div className="mr-3 py-1">Movies</div>
        <div className="mr-3 py-1">Stream</div>
        <div className="mr-3 py-1">Events</div>
        <div className="mr-3 py-1">Plays</div>
        <div className="mr-3 py-1">Sports</div>
        <div className="mr-3 py-1">Activities</div>
        <div className="mr-3 py-1">Buzz</div>
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
      Bhubaneswar
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

const Navbar = () => {
return (
  <>
  <nav className="bg-navCol-700 px-4 py-2">
  <div className="md:hidden">{
    /*Mobile Screen*/
    <NavSm />
  }</div>
  <div className="hidden lg:hidden md:flex">{
    /*Tablet Screen*/
    <NavMd />
  }</div>
  <div className="hidden lg:flex">{
    /*desktop Screen*/
    <NavLg />
  }</div>
  </nav>
  </>
)

};

export default Navbar;
