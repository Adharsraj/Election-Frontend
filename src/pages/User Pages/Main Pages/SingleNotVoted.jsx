import React, { useEffect, useState } from "react";
import { SidebarWithCta } from "../../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefault } from "../../../Components/UserComponents.jsx/MobileNavbar";
import { Spin } from "antd";

import {
  Avatar,
  Button,
  CardFooter,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../configs/axiosInstance";
import { IndivudualNonvotersuser } from "../../../Components/UserComponents.jsx/Tables";

const SingleNotVoted = () => {
  const [electionData, setElectionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/user/electiondata", {
          headers,
        });
        console.log("response", response);
        setElectionData(response?.data?.election);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const currentDate = new Date();
console.log(currentDate)
  const activeElections = electionData.filter(
    (election) => new Date(election.endDate) >= currentDate

  );
  console.log(activeElections);

  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCta />
      </div>
      <div className="md:hidden">
        <NavbarDefault />
      </div>
      <div className="flex flex-col justify-center items-center  w-full">

      <IndivudualNonvotersuser/>
      </div>
    </div>
  );
};

export default SingleNotVoted;
