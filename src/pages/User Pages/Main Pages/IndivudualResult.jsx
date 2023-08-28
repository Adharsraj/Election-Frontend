import React from "react";
import { SidebarWithCta } from "../../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefault } from "../../../Components/UserComponents.jsx/MobileNavbar";
import { IndivudualCandidateCard } from "../../../Components/UserComponents.jsx/Tables";
import Lottie from "lottie-react";
import celebration from '../../../assets/celebration.json'
const IndivudualResult = () => {
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCta />
      </div>
      <div className="md:hidden">
        <NavbarDefault />
      </div>

      <div className="relative w-full md:flex flex-col justify-center items-center hidden  ">
    <Lottie loop={true} animationData={celebration} className="absolute  w-full md:h-full  "  />
    
    <h1 className="text-5xl">Congratulations</h1>
    <h1 className="text-6xl">Aman has won with 5 votes</h1>
</div>
<div className="h-screen md:hidden relative flex flex-col justify-center items-center text-center">
<Lottie loop={true} animationData={celebration} className="absolute w-full md:h-full border "  />

<h1 className="text-4xl">Congratulations</h1>
    <h1 className="text-6xl ">Aman has won with 5 votes</h1> 
</div>
</div>


  );
};

export default IndivudualResult;
