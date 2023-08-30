import React, { useState } from "react";
import arrowright from "../../assets/arrowright.json";
import votebox from "../../assets/votebox.json";
import usericon from "../../assets/usericon.json";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  XCircleIcon,
  AcademicCapIcon,
  HomeIcon,
  TableCellsIcon,
  ClipboardDocumentCheckIcon,
  UserPlusIcon,
  UserIcon,
  FlagIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

export function SidebarWithCta() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [navopen, setnavopen] = useState(true);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {navopen ? (
        <Card className="xl:h-[80%] xl:my-auto ml-3 w-full  max-w-[20rem] hidden  p-4 shadow-xl md:flex flex-col xl:justify-center shadow-blue-gray-900/5 bg-transparent  text-white">
          <div className="fixed  bg-yellow-800 rounded-xl p-2 py-10 ">
            {/* <div className="mb-2 p-4 flex items-center justify-between">
        <Typography variant="h5" className="uppercase invisible text-3xl mx-auto" color="">
        -------
        </Typography>
          <XCircleIcon onClick={()=>setnavopen(false)} className="w-10 hidden cursor-pointer " size="sm"/>

      </div> */}

            <div className=" text-center">
              <Lottie
                loop={true}
                animationData={usericon}
                className="border h-32 bg-white w-32 mx-auto rounded-full"
              />
              <h1 className="pt-5 text-3xl">Tom Cruise</h1>
              <h2 className="text-lg pt-3 pb-3 uppercase">President</h2>

              <h3>
                398 Wallace <br /> Ranch Suite 593 <br />
                Ivanburgh, AZ 80818
              </h3>
              <List>
                <Link to="/home">
                  <ListItem className="text-white flex border mt-2 justify-center items-center  text-2xl">
                    <ListItemPrefix>
                      <HomeIcon className="h-8 w-8 " />
                    </ListItemPrefix>
                    Home
                  </ListItem>
                </Link>
                <Link to="/result">
                  <ListItem className="text-white border mt-2 flex justify-center items-center  text-2xl">
                    <ListItemPrefix>
                      <AcademicCapIcon className="h-8 w-8 " />
                    </ListItemPrefix>
                    Results
                  </ListItem>
                </Link>
                <Link to="/">
                  <ListItem className="text-white border mt-2 flex justify-center items-center  text-2xl">
                    <ListItemPrefix>
                      <PowerIcon className="h-8 w-8 " />
                    </ListItemPrefix>
                    Log out
                  </ListItem>
                </Link>
              </List>
            </div>
          </div>

          <List className="invisible">
            <ListItem className="text-white flex justify-center items-center text-2xl">
              <ListItemPrefix>
                <PowerIcon className="h-8 w-8 " />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      ) : (
        <div
          onClick={() => setnavopen(true)}
          className="w-16  pt-6  cursor-pointer fixed h-full bg-black flex flex-col justify-between   mx-auto  "
        >
          <Lottie loop={true} animationData={arrowright} />
          <Lottie loop={true} animationData={arrowright} />
          <Lottie loop={true} animationData={arrowright} />
        </div>
      )}
    </>
  );
}

export function SidebarWithCtaAdmin() {
  return (
    <>
      <Card className="xl:h-[80%] xl:my-auto ml-3 w-full  max-w-[20rem] hidden   shadow-xl md:flex flex-col xl:justify-center shadow-blue-gray-900/5 bg-transparent  text-white">
        <div className="fixed my-auto  bg-blue-800 rounded-xl p-2 py-10 xl:py-5 ">
          {/* <div className="mb-2 p-4 flex items-center justify-between">
        <Typography variant="h5" className="uppercase invisible text-3xl mx-auto" color="">
        -------
        </Typography>
          <XCircleIcon onClick={()=>setnavopen(false)} className="w-10 hidden cursor-pointer " size="sm"/>

      </div> */}

          <div className=" text-">
            <List>
              <Link to="/admin/home">
                <ListItem className="text-white flex border mt-2   text-lg">
                  <ListItemPrefix>
                    <HomeIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </Link>
              <Link to="/admin/tables">
                <ListItem className="text-white flex border mt-2  text-lg">
                  <ListItemPrefix>
                    <TableCellsIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Tables
                </ListItem>
              </Link>
              <Link to="/admin/results">
                <ListItem className="text-white border mt-2 flex   text-lg">
                  <ListItemPrefix>
                    <FlagIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Results
                </ListItem>
              </Link>
              <Link to="/admin/notvoted">
                <ListItem className="text-white flex border mt-2  text-lg">
                  <ListItemPrefix>
                    <XCircleIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Not Voted List
                </ListItem>
              </Link>
             
              <Link to="/admin/createuser">
                <ListItem className="text-white border mt-2 flex   text-lg">
                  <ListItemPrefix>
                    <UserIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Create User
                </ListItem>
              </Link>
              <Link to="/admin/createelection">
                <ListItem className="text-white border mt-2 flex  text-lg">
                  <ListItemPrefix>
                    <ClipboardDocumentCheckIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Create Election
                </ListItem>
              </Link>
              {/* <Link to="/admin/createcandidate">
                <ListItem className="text-white border mt-2 flex   text-lg">
                  <ListItemPrefix>
                    <UserPlusIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Create Candidate
                </ListItem>
              </Link> */}
              <Link to="/admin/offlinevote">
                <ListItem className="text-white border mt-2 flex   text-lg">
                  <ListItemPrefix>
                    <ExclamationTriangleIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Offline Vote
                </ListItem>
              </Link>

              <Link to="/">
                <ListItem className="text-white border mt-2 flex   text-lg">
                  <ListItemPrefix>
                    <PowerIcon className="h-6 w-6 " />
                  </ListItemPrefix>
                  Log out
                </ListItem>
              </Link>
            </List>
          </div>
        </div>

        <List className="invisible">
          <ListItem className="text-white flex  text-2xl">
            <ListItemPrefix>
              <PowerIcon className="h-6 w-6 " />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
}
