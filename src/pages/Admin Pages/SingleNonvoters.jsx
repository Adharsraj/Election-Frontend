import React from "react";
import {
  Avatar,
  Button,
  CardFooter,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { SidebarWithCtaAdmin } from "../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefaultAdmin } from "../../Components/UserComponents.jsx/MobileNavbar";
import icn1 from "../../assets/images/Alluser.png";
import icn2 from "../../assets/images/ballot.png";
import icn3 from "../../assets/images/Uicon.png";
import { IndivudualNonvoters } from "../../Components/UserComponents.jsx/Tables";

const statisticsCardsData = [
  {
    icon: icn2,
    title: "Total Elections",
    value: `10`,
  },
  {
    icon: icn3,
    title: "Total Members",
    value: `40`,
  },
  {
    icon: icn1,
    title: "Total Candidates",
    value: `15`,
  },
];

const SingleNonvoters = () => {
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <IndivudualNonvoters/>
      </div>
    </div>
  );
};

export default SingleNonvoters;
