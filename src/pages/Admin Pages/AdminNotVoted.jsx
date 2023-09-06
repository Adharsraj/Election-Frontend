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
import { Spin } from "antd";
import axiosInstance from "../../configs/axiosInstance";

const AdminNotVoted = () => {
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
        const response = await axiosInstance.get("/api/admin/electiondata", {
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

  const activeElections = electionData.filter(
    (election) => new Date(election.endDate) > currentDate
  );
  console.log(activeElections);

  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>
      <div className="text-center flex flex-col justify-center items-center  w-full  px-4">
        <h1 className=" text-4xl text-gray-400 lg:text-6xl lg:pt-10 text-center pt-5">
           Non-voters list
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
                    <Link to={`/admin/nonvoters/${m._id}`}>
                      <Button
                        size="lg"
                        fullWidth={true}
                        className="relative bg-black"
                      >
                        Show not-voted
                      </Button>
                    </Link>
                  )}
                  {/* <Link to="/indivudual">
                <Button className="border w-full pt-4 mt-3 text-sm ">
                  PArticipate
                </Button>
              </Link> */}
                </CardFooter>
              </div>
            ))}
            {/* 2 */}

            {/* <div className="bg-white text-black w-[300px] rounded-xl ">
              <Typography className="text-2xl font-bold uppercase pt-2">
                PRESIDENT ELECTION
              </Typography>

              <CardFooter className="flex flex-col  items-center justify-between">
                <Typography className=" font-bold uppercase ">
                  Candidates
                </Typography>

                <div className="flex items-center -space-x-3  mx-auto">
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                </div>
              </CardFooter>
              <div className="flex justify-between px-5">
                <Typography className="font-normal border border-black rounded-xl p-1 w-28">
                  <h2 className="uppercase font-bold">Start date</h2>

                  <h2>January 10</h2>
                </Typography>
                <Typography className="font-normal  border border-black rounded-xl p-1 w-28">
                  <h2 className="uppercase font-bold">End date</h2>
                  <h2>January 30</h2>
                </Typography>
              </div>
              <Link to="/indivudual">
                <Button className="border w-full pt-4 mt-3 text-sm ">
                  PArticipate
                </Button>
              </Link>
            </div>

            <div className="bg-white text-black w-[300px] rounded-xl ">
              <Typography className="text-2xl font-bold uppercase pt-2">
                PRESIDENT ELECTION
              </Typography>

              <CardFooter className="flex flex-col  items-center justify-between">
                <Typography className=" font-bold uppercase ">
                  Candidates
                </Typography>

                <div className="flex items-center -space-x-3  mx-auto">
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                </div>
              </CardFooter>
              <div className="flex justify-between px-5">
                <Typography className="font-normal border border-black rounded-xl p-1 w-28">
                  <h2 className="uppercase font-bold">Start date</h2>

                  <h2>January 10</h2>
                </Typography>
                <Typography className="font-normal  border border-black rounded-xl p-1 w-28">
                  <h2 className="uppercase font-bold">End date</h2>
                  <h2>January 30</h2>
                </Typography>
              </div>
              <Link to="/indivudual">
                <Button className="border w-full pt-4 mt-3 text-sm ">
                  PArticipate
                </Button>
              </Link>
            </div>

            <div className="bg-white text-black w-[300px] rounded-xl ">
              <Typography className="text-2xl font-bold uppercase pt-2">
                PRESIDENT ELECTION
              </Typography>

              <CardFooter className="flex flex-col  items-center justify-between">
                <Typography className=" font-bold uppercase ">
                  Candidates
                </Typography>

                <div className="flex items-center -space-x-3  mx-auto">
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                </div>
              </CardFooter>
              <div className="flex justify-between px-5">
                <Typography className="font-normal border border-black rounded-xl p-1 w-28">
                  <h2 className="uppercase font-bold">Start date</h2>

                  <h2>January 10</h2>
                </Typography>
                <Typography className="font-normal  border border-black rounded-xl p-1 w-28">
                  <h2 className="uppercase font-bold">End date</h2>
                  <h2>January 30</h2>
                </Typography>
              </div>
              <Link to="/indivudual">
                <Button className="border w-full pt-4 mt-3 text-sm ">
                  PArticipate
                </Button>
              </Link>
            </div>
            <div className="bg-white text-black w-[300px] rounded-xl ">
              <Typography className="text-2xl font-bold uppercase pt-2">
                PRESIDENT ELECTION
              </Typography>

              <CardFooter className="flex flex-col  items-center justify-between">
                <Typography className=" font-bold uppercase ">
                  Candidates
                </Typography>

                <div className="flex items-center -space-x-3  mx-auto">
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                </div>
              </CardFooter>
              <div className="flex justify-between px-5">
                <Typography className="font-normal border border-black rounded-xl p-1 w-28">
                  <h2 className="uppercase font-bold">Start date</h2>

                  <h2>January 10</h2>
                </Typography>
                <Typography className="font-normal  border border-black rounded-xl p-1 w-28">
                  <h2 className="uppercase font-bold">End date</h2>
                  <h2>January 30</h2>
                </Typography>
              </div>
              <Link to="/indivudual">
                <Button className="border w-full pt-4 mt-3 text-sm ">
                  PArticipate
                </Button>
              </Link>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNotVoted;
