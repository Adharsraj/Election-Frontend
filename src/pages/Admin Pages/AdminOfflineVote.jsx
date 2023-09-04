import React, { useEffect } from "react";
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
import axiosInstance from "../../configs/axiosInstance";

const AdminOfflineVote = () => {
  useEffect(()=>{
   const fetchdata=async()=>{
    const res=await axiosInstance.get("/api/admin/vote")
    console.log(res)

   }
   fetchdata()
  },[])
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>
     <div>

     </div>
    </div>
  );
};

export default AdminOfflineVote;
