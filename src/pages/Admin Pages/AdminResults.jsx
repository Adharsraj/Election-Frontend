import React, { useEffect, useState } from "react";
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
import { Spin } from "antd";
import axiosInstance from "../../configs/axiosInstance";

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

const AdminResults = () => {
  const [electionData, setElectionData] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/admin/electiondata", {
          headers,
        });
        console.log("response",response)
        setElectionData(response?.data?.election);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if an error occurs
      }
    };

    fetchData();
  }, []);

  const [allelections, setAllelections] = useState([{}]);
  useEffect(() => {
    const getAllElections = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/admin/vote", {
          headers,
        });

        console.log("object",response)
        setAllelections(response.data.votes);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    getAllElections();
  }, []);
  const currentDate = new Date(); // Get the current date
  const currentYear = currentDate.getFullYear(); // Get the current year
  
  // Filter out the elections where the year of endDate is equal to the current year
  const filteredElections = allelections.filter((m) => new Date(m.endDate).getFullYear() === currentYear);
  
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
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>
      <div className="   text-center flex flex-col  w-full  px-4   ">
      <div className="   text-center flex flex-col justify-center items-center  w-full  px-4   ">
        <h1 className=" text-4xl text-gray-400 lg:text-6xl lg:pt-10 text-center pt-5">
          Welcome to Results 2023
        </h1>
        {loading?
        
        <div className="flex justify-center items-center pt-5">
            <Spin size="large" />
          </div>
:   <div className="flex flex-wrap gap-8 justify-center pt-10 pb-10 items-center">
{/* 1 */}
{filteredElections.map((m) => (

<div className="bg-green-200 text-black w-[300px] rounded-xl ">
          <Typography className="text-2xl font-bold uppercase pt-2 pb-7">
{m.electionName}
          </Typography>


          <div className="flex justify-between px-5">
                  <Typography className="font-normal border border-black  p-1 w-28">
                    <h2 className="uppercase font-bold">Start date</h2>

                    <h2>{`${
                      monthNames[new Date(m.startDate).getMonth()]
                    } ${new Date(m.startDate).getDate()}`}</h2>
                  </Typography>
                  <Typography className="font-normal  border border-black  p-1 w-28">
                    <h2 className="uppercase font-bold">End date</h2>
                    <h2>{`${
                      monthNames[new Date(m.endDate).getMonth()]
                    } ${new Date(m.endDate).getDate()}`}</h2>
                  </Typography>
                </div>
                <Link to={`/admin/indivudualresult/${m._id}`}>
          <Button className="border w-full pt-4 mt-3 text-sm ">show result</Button>
          </Link>
</div>
          ))}

{/* 2 */}




       


        </div>}
     

      </div>
      </div>
    </div>
  );
};

export default AdminResults;
