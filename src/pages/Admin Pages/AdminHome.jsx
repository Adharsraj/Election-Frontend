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

const AdminHome = () => {
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>
      <div className="   text-center flex flex-col  w-full  px-4   ">
        <div className="flex flex-wrap gap-8 justify-center pt-10 pb-10 items-center">
          {/* 1 */}
          {statisticsCardsData.map((m) => (
            <div className="bg-white text-black w-[300px] rounded-xl ">
              <Typography className="text-xl gap-4 flex justify-center items-center font-bold uppercase pt-2">
                <img src={m.icon} className="w-10 h-10" />
                <h1>{m.title}</h1>
              </Typography>
              <h2 className="text-7xl">{m.value}</h2>
            </div>
          ))}
          {/* 2 */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
