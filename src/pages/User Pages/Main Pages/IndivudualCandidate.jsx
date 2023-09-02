import React from "react";
import { SidebarWithCta } from "../../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefault } from "../../../Components/UserComponents.jsx/MobileNavbar";
import { IndivudualCandidateCard } from "../../../Components/UserComponents.jsx/Tables";

const IndivudualCandidate = () => {
  
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCta />
      </div>
      <div className="md:hidden">
        <NavbarDefault />
      </div>
      <div className="   text-center flex flex-col justify-center items-center  w-full  px-4   ">
       
        <div className="  ">

        <IndivudualCandidateCard/>

        </div>

      </div>
    </div>
  );
};

export default IndivudualCandidate;
