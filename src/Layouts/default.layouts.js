import React from "react";

//navbar
import Navbar from "../Components/Navbar/navbar.component";
import HeroCarousal from "../Components/HeroCarousal/heroCarousal.component";

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroCarousal />
    {props.children}
    </>
  )
};

export default DefaultLayout;

