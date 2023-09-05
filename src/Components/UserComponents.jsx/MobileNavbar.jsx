import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
 
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 const[name,setName]=useState("")


useEffect(()=>{
const ls=JSON.parse(localStorage.getItem("User"))
console.log(ls)
setName(ls)
},[])

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
        
  const navList = (



  //   <div className=" text-">
  //   <List>
  //     <Link to="/admin/home">
  //       <ListItem className="text-white flex border mt-2   text-lg">
  //         <ListItemPrefix>
  //           <HomeIcon className="h-6 w-6 " />
  //         </ListItemPrefix>
  //         Dashboard
  //       </ListItem>
  //     </Link>

  //     <Accordion
  //       open={open === 2}
  //       icon={
  //         <ChevronDownIcon
  //           strokeWidth={2.5}
  //           className={`mx-auto h-4 w-4 text-white transition-transform ${
  //             open === 2 ? "rotate-180" : ""
  //           }`}
  //         />
  //       }
  //     >
  //       <ListItem className="p-0 border mt-2" selected={open === 2}>
  //         <AccordionHeader
  //           onClick={() => handleOpen(2)}
  //           className="border-b-0 text-white p-3"
  //         >
  //           <ListItemPrefix>
  //             <TableCellsIcon className="h-6 w-6" />
  //           </ListItemPrefix>
  //           <Typography
  //             color="blue-gray"
  //             className="mr-auto text-white text-lg font-semibold"
  //           >
  //             Tables
  //           </Typography>
  //         </AccordionHeader>
  //       </ListItem>
  //       <AccordionBody className="py-1 text-white">
  //         <List className="p-0">
  //           <Link to="/admin/userlist">
  //             <ListItem className="text-white">
  //               <ListItemPrefix>
  //                 <StarIcon strokeWidth={3} className="h-3 text w-5" />
  //               </ListItemPrefix>
  //               User Tables
  //             </ListItem>
  //           </Link>
  //           <Link to="/admin/electionlist">
  //             <ListItem className="text-white">
  //               <ListItemPrefix className="text-white">
  //                 <StarIcon strokeWidth={3} className="h-3 w-5 " />
  //               </ListItemPrefix>
  //               Election Tables
  //             </ListItem>
  //           </Link>
  //         </List>
  //       </AccordionBody>
  //     </Accordion>

  //     <Link to="/admin/results">
  //       <ListItem className="text-white border mt-2 flex   text-lg">
  //         <ListItemPrefix>
  //           <FlagIcon className="h-6 w-6 " />
  //         </ListItemPrefix>
  //         Results
  //       </ListItem>
  //     </Link>
  //     <Link to="/admin/notvoted">
  //       <ListItem className="text-white flex border mt-2  text-lg">
  //         <ListItemPrefix>
  //           <XCircleIcon className="h-6 w-6 " />
  //         </ListItemPrefix>
  //         Not Voted List
  //       </ListItem>
  //     </Link>

  //     <Link to="/admin/createuser">
  //       <ListItem className="text-white border mt-2 flex   text-lg">
  //         <ListItemPrefix>
  //           <UserIcon className="h-6 w-6 " />
  //         </ListItemPrefix>
  //         Create User
  //       </ListItem>
  //     </Link>
  //     <Link to="/admin/createelection">
  //       <ListItem className="text-white border mt-2 flex  text-lg">
  //         <ListItemPrefix>
  //           <ClipboardDocumentCheckIcon className="h-6 w-6 " />
  //         </ListItemPrefix>
  //         Create Election
  //       </ListItem>
  //     </Link>
  //     {/* <Link to="/admin/createcandidate">
  //       <ListItem className="text-white border mt-2 flex   text-lg">
  //         <ListItemPrefix>
  //           <UserPlusIcon className="h-6 w-6 " />
  //         </ListItemPrefix>
  //         Create Candidate
  //       </ListItem>
  //     </Link> */}
  //     <Link to="/admin/offlinevote">
  //       <ListItem className="text-white border mt-2 flex   text-lg">
  //         <ListItemPrefix>
  //           <ExclamationTriangleIcon className="h-6 w-6 " />
  //         </ListItemPrefix>
  //         Offline Vote
  //       </ListItem>
  //     </Link>

  //     <Link to="/">
  //       <ListItem className="text-white border mt-2 flex   text-lg">
  //         <ListItemPrefix>
  //           <PowerIcon className="h-6 w-6 " />
  //         </ListItemPrefix>
  //         Log out
  //       </ListItem>
  //     </Link>
  //   </List>
  // </div>
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg "
      >
       <Link to="/home">
        Home

       </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg "
      >
       <Link to="/result">
          Results

       </Link>
      </Typography>
     
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg "
      >
       <Link to="/">
          Logout

       </Link>
      </Typography>
     
   
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Election
        </Typography>
      <div className="flex items-center gap-1">
        <div     className="flex items-center gap-2"        onClick={() => setOpenNav(!openNav)}
>
        <h1>{name&&name.username}</h1>
        <img
        src={name&&name.url}
        className="w-10 h-10 rounded-full "
        />

        </div>
          {/* {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )} */}
        </div>

      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          
        </div>
      </MobileNav>
    </Navbar>
  );
}

export function NavbarDefaultAdmin() {
    const [openNav, setOpenNav] = React.useState(false);
   const[name,setName]=useState("")


useEffect(()=>{
  const ls=JSON.parse(localStorage.getItem("User"))
  console.log(ls)
  setName(ls)
},[])

    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
          
    const navList = (



    //   <div className=" text-">
    //   <List>
    //     <Link to="/admin/home">
    //       <ListItem className="text-white flex border mt-2   text-lg">
    //         <ListItemPrefix>
    //           <HomeIcon className="h-6 w-6 " />
    //         </ListItemPrefix>
    //         Dashboard
    //       </ListItem>
    //     </Link>

    //     <Accordion
    //       open={open === 2}
    //       icon={
    //         <ChevronDownIcon
    //           strokeWidth={2.5}
    //           className={`mx-auto h-4 w-4 text-white transition-transform ${
    //             open === 2 ? "rotate-180" : ""
    //           }`}
    //         />
    //       }
    //     >
    //       <ListItem className="p-0 border mt-2" selected={open === 2}>
    //         <AccordionHeader
    //           onClick={() => handleOpen(2)}
    //           className="border-b-0 text-white p-3"
    //         >
    //           <ListItemPrefix>
    //             <TableCellsIcon className="h-6 w-6" />
    //           </ListItemPrefix>
    //           <Typography
    //             color="blue-gray"
    //             className="mr-auto text-white text-lg font-semibold"
    //           >
    //             Tables
    //           </Typography>
    //         </AccordionHeader>
    //       </ListItem>
    //       <AccordionBody className="py-1 text-white">
    //         <List className="p-0">
    //           <Link to="/admin/userlist">
    //             <ListItem className="text-white">
    //               <ListItemPrefix>
    //                 <StarIcon strokeWidth={3} className="h-3 text w-5" />
    //               </ListItemPrefix>
    //               User Tables
    //             </ListItem>
    //           </Link>
    //           <Link to="/admin/electionlist">
    //             <ListItem className="text-white">
    //               <ListItemPrefix className="text-white">
    //                 <StarIcon strokeWidth={3} className="h-3 w-5 " />
    //               </ListItemPrefix>
    //               Election Tables
    //             </ListItem>
    //           </Link>
    //         </List>
    //       </AccordionBody>
    //     </Accordion>

    //     <Link to="/admin/results">
    //       <ListItem className="text-white border mt-2 flex   text-lg">
    //         <ListItemPrefix>
    //           <FlagIcon className="h-6 w-6 " />
    //         </ListItemPrefix>
    //         Results
    //       </ListItem>
    //     </Link>
    //     <Link to="/admin/notvoted">
    //       <ListItem className="text-white flex border mt-2  text-lg">
    //         <ListItemPrefix>
    //           <XCircleIcon className="h-6 w-6 " />
    //         </ListItemPrefix>
    //         Not Voted List
    //       </ListItem>
    //     </Link>

    //     <Link to="/admin/createuser">
    //       <ListItem className="text-white border mt-2 flex   text-lg">
    //         <ListItemPrefix>
    //           <UserIcon className="h-6 w-6 " />
    //         </ListItemPrefix>
    //         Create User
    //       </ListItem>
    //     </Link>
    //     <Link to="/admin/createelection">
    //       <ListItem className="text-white border mt-2 flex  text-lg">
    //         <ListItemPrefix>
    //           <ClipboardDocumentCheckIcon className="h-6 w-6 " />
    //         </ListItemPrefix>
    //         Create Election
    //       </ListItem>
    //     </Link>
    //     {/* <Link to="/admin/createcandidate">
    //       <ListItem className="text-white border mt-2 flex   text-lg">
    //         <ListItemPrefix>
    //           <UserPlusIcon className="h-6 w-6 " />
    //         </ListItemPrefix>
    //         Create Candidate
    //       </ListItem>
    //     </Link> */}
    //     <Link to="/admin/offlinevote">
    //       <ListItem className="text-white border mt-2 flex   text-lg">
    //         <ListItemPrefix>
    //           <ExclamationTriangleIcon className="h-6 w-6 " />
    //         </ListItemPrefix>
    //         Offline Vote
    //       </ListItem>
    //     </Link>

    //     <Link to="/">
    //       <ListItem className="text-white border mt-2 flex   text-lg">
    //         <ListItemPrefix>
    //           <PowerIcon className="h-6 w-6 " />
    //         </ListItemPrefix>
    //         Log out
    //       </ListItem>
    //     </Link>
    //   </List>
    // </div>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-lg "
        >
         <Link to="/admin/home">
          Home

         </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-lg "
        >
         <Link to="/admin/results">
            Results

         </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-lg "
        >
      <Link to="/admin/notvoted">
            Not voted

         </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-lg "
        >
      <Link to="/admin/createuser">
            Create user

         </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-lg "
        >
         <Link to="/admin/createelection">
            Create Election

         </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-lg "
        >
         <Link to="/admin/offlinevote">
            Offline vote

         </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-lg "
        >
         <Link to="/">
            Logout

         </Link>
        </Typography>
       
     
      </ul>
    );
   
    return (
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Election
          </Typography>
        <div className="flex items-center gap-1">
          <div     className="flex items-center gap-2"        onClick={() => setOpenNav(!openNav)}
 >
          <h1>{name&&name.username}</h1>
          <img
          src={name&&name.url}
          className="w-10 h-10 rounded-full "
          />

          </div>
            {/* {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )} */}
          </div>
  
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            
          </div>
        </MobileNav>
      </Navbar>
    );
  }