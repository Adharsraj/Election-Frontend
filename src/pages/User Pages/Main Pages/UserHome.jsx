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

const UserHome = () => {
  const [electionData, setElectionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId,setUserId]=useState("")
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
        console.log(response?.data?.election)
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







  useEffect(() => {
    const getAllElections = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/user/electiondata", {
          headers,
        });
        const id = JSON.parse(localStorage.getItem("User"))
        console.log(id)
        setUserId(id._id)

  console.log(response.data.election)
        const isVoted = response.data.election.some((election) => {
          return election?.userid?.includes(id);
        });
  
        if (isVoted) {
          // User voted in the specific election
          console.log("voted");
          // You can set some state or perform other actions here
        } else {
          // User did not vote in the specific election
          console.log("not voted");
          // You can set some state or perform other actions here
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllElections();
  }, []);
  


useEffect(()=>{
 
},[])

  
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCta />
      </div>
      <div className="md:hidden">
        <NavbarDefault />
      </div>
      <div className="   text-center flex flex-col justify-center items-center  w-full  px-4   ">
        <h1 className=" text-4xl text-gray-400 lg:text-6xl lg:pt-10 text-center pt-5">
          Welcome to Election 2023
        </h1>
        {loading ? (
          <div className="flex justify-center items-center pt-5">
            <Spin size="large" />
          </div>
        ) : (
          <div className="flex flex-wrap gap-8 justify-center pt-10 pb-10 items-center">
            {/* 1 */}
            {activeElections.map((m) => (
              <div className="bg-white text-black w-[300px] rounded-xl ">
                <Typography className="text-2xl font-bold uppercase pt-2">
                  {m.electionName}
                </Typography>
                <CardFooter className="flex flex-col  items-center justify-between">
                  <Typography className=" font-bold uppercase ">
                    Candidates
                  </Typography>
                  {/* {m.userid?.includes(userId) ? (
    <h1>Voted</h1>
  ) : (
    <h1>Not Voted</h1>
  )} */}
                  <div className="flex items-center -space-x-3  mx-auto">
                    {m.representatives.map((d) => (
                      <Tooltip content={d.username}>
                        <Avatar
                          size="sm"
                          variant="circular"
                          alt=""
                          src={d.url}
                          className="border-2 border-white hover:z-10"
                        />
                      </Tooltip>
                    ))}
                 
                  </div>
                </CardFooter>
                <div className="flex justify-between px-5">
                  <Typography className="font-normal border border-black rounded-xl p-1 w-28">
                    <h2 className="uppercase font-bold">Start date</h2>

                    <h2>{`${
                      monthNames[new Date(m.startDate).getMonth()]
                    } ${new Date(m.startDate).getDate()}`}</h2>
                  </Typography>
                  <Typography className="font-normal  border border-black rounded-xl p-1 w-28">
                    <h2 className="uppercase font-bold">End date</h2>
                    <h2>{`${
                      monthNames[new Date(m.endDate).getMonth()]
                    } ${new Date(m.endDate).getDate()}`}</h2>
                  </Typography>
                </div>
{m.userid?.includes(userId)? <CardFooter className="pt-3">
                 
                    <Button
                      size="lg"
                      fullWidth={true}
                      disabled={true}
                      className="relative bg-black"
                    >
                      
                        <>
                          Already voted
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-500 pointer-events-none">
                          </span>
                        </>
                    
                    </Button>
                
                
                
                </CardFooter>:
             <CardFooter className="pt-3">
                  {new Date(m.startDate) > currentDate ||
                  new Date(m.endDate) <= currentDate ? (
                    <Button
                      size="lg"
                      fullWidth={true}
                      disabled={true}
                      className="relative bg-black"
                    >
                      {new Date(m.startDate) > currentDate ? (
                        <>
                          Upcoming Election
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-500 pointer-events-none">
                            {/* {m.startDate?.split("T")[0]} */}
                          </span>
                        </>
                      ) : (
                        <>
                          Ended Election
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-500 pointer-events-none">
                            {m.endDate?.split("T")[0]}
                          </span>
                        </>
                      )}
                    </Button>
                  ) : (
                    <Link to={`/indivudual/${m._id}`}>
                      <Button
                        size="lg"
                        fullWidth={true}
                        className="relative bg-black"
                      >
                        Participate
                      </Button>
                    </Link>
                  )}
                
                </CardFooter>
}   
              </div>
            ))}
          
          </div>
        )}
      </div>
    </div>
  );
};

export default UserHome;
