import React from "react";
import { SidebarWithCta } from "../../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefault } from "../../../Components/UserComponents.jsx/MobileNavbar";
import {
  Avatar,
  Button,
  CardFooter,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ResultsUser = () => {
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
          Welcome to Results 2023
        </h1>
        <div className="flex flex-wrap gap-8 justify-center pt-10 pb-10 items-center">
{/* 1 */}
<div className="bg-green-200 text-black w-[300px] rounded-xl ">
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
          <Link to="/indivudualresult">
          <Button className="border w-full pt-4 mt-3 text-sm ">show result</Button>
          </Link>
</div>
{/* 2 */}




       


        </div>

      </div>
    </div>
  );
};

export default ResultsUser;
