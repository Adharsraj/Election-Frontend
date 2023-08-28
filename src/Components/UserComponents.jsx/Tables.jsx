import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Modal from "react-modal";

import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Radio,
} from "@material-tailwind/react";
import { useState } from "react";

const itemsPerPage = 2; // Number of items per page

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

// const TABLE_HEAD = ["Member", "Function", "Status", "Employed", "Vote"];
const TABLE_HEAD = ["Candidate", ""];
const TABLE_HEADD = ["NOT VOTED PERSONS LIST"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

export function SortableTable() {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, job, org, online, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {org}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export function IndivudualCandidateCard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserPhoto, setSelectedUserPhoto] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [remainingVoters, setRemainingVoters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNonvoterstable, setShownonvotersTable] = useState(false);

  const handleRadioChange = (userName, userPhoto) => {
    setSelectedUser(userName);
    setSelectedUserPhoto(userPhoto);
    setIsConfirmationOpen(true);

    // Update the selected user when a radio button is clicked
  };
  const handleConfirmationOpen = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false);
  };

  const handleVoteConfirmation = () => {
    // Perform the voting action here
    setRemainingVoters(true);
    setIsConfirmationOpen(false);
    setSelectedUser(null); // Reset selected user after voting
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(TABLE_ROWS.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedRows = TABLE_ROWS.slice(startIndex, endIndex);
  return (
    <>
      {!remainingVoters ? (
        <div className="">
          <h1 className=" text-4xl text-gray-400 lg:text-6xl pb-5 text-center pt-5">
            Select a person to vote
          </h1>
          <Card className="">
            {/* <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader> */}

            <CardBody className="overflow-scroll px-0">
              <table className=" w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={head}
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-200 p-4 transition-colors hover:bg-blue-gray-50"
                      >
                        <Typography
                          variant=""
                          color="blue-gray"
                          className="flex text-2xl items-center justify-between gap-2 font-normal leading-none opacity-70"
                        >
                          {head}{" "}
                          {index !== TABLE_HEAD.length - 1 && (
                            <ChevronUpDownIcon
                              strokeWidth={2}
                              className="h-4 w-4"
                            />
                          )}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ img, name, email }, index) => {
                    const isSelected = selectedUser === name; // Check if this user is selected
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    const rowClass =
                      isSelected || !selectedUser ? "" : "selected-row";

                    return (
                      <tr key={name} className={rowClass}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={img} alt={name} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {email}
                              </Typography>
                            </div>
                          </div>
                        </td>

                        {/* <td className={classes}>
                          <Radio
                            className="h-7 w-7"
                            name="selectedUser"
                            checked={isSelected}
                            onChange={() => handleRadioChange(name, img)} // Pass the photo URL
                            value={name}
                          />
                        </td> */}

                         <td className={classes}>
                         <Button onClick={()=>handleRadioChange(name, img)}>Vote</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* {selectedUser && (
                <div className="text-center mt-4">
                  <Button
                    onClick={handleConfirmationOpen}
                    className=" text-white    w-3/4 rounded"
                  >
                    Submit Vote
                  </Button>
                </div>
              )} */}
              <Modal
                isOpen={isConfirmationOpen}
                onRequestClose={handleConfirmationClose}
                className="fixed inset-0 z-50 flex items-center justify-center"
              >
                <div className="bg-white p-6 rounded shadow-md max-w-md text-center">
                  <h2 className="text-xl font-semibold mb-4 bg-black text-gray-300 uppercase">
                    Confirm Vote
                  </h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={selectedUserPhoto}
                      alt={selectedUser}
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="text-gray-700">{selectedUser}</p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Are you sure you want to vote for {selectedUser}?
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={handleVoteConfirmation}
                      className="px-4 py-2 
        rounded hover:bg-green-400"
                    >
                      Yes, Vote
                    </Button>
                    <button
                      onClick={handleConfirmationClose}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Modal>
            </CardBody>
          </Card>
        </div>
      ) : (
        <>
          <div className="p-6 bg-white text-black rounded-lg shadow-md mt-10 ">
            <div className="space-y-4 ">
              <div className="  ">
                <h1 className="text-xl font-semibold flex items-center justify-center gap-4">
                  Thank you for voting to {selectedUser}{" "}
                  <span>
                    <img src={selectedUserPhoto} className="w-10 h-10" />
                  </span>
                </h1>
                <h1 className="text-3xl font-semibold">
                  your vote has been confirmed
                </h1>
              </div>
            </div>
          </div>
          <h1 className="text-3xl pt-5 pb-5">
            90 more people from your community are left to vote
          </h1>
          <Button className="bg-red-500 mb-3 mt-3" onClick={()=>setShownonvotersTable(!showNonvoterstable)}>{showNonvoterstable?"Hide":"Show"} Persons left to vote </Button>
          {showNonvoterstable && (
            <Card className=" md:w-[60%] mx-auto bg-black text-white pb-10 mb-10">
              <CardBody className="overflow-scroll px-0">
                <table className=" w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEADD.map((head, index) => (
                        <th
                          key={head}
                          className="cursor-pointer  text-center font-bold border-blue-gray-100 bg-red-500 p-4 transition-colors hover:bg-blue-gray-50"
                        >
                          <Typography
                            variant=""
                            color="black"
                            className=" text-2xl text-center  gap-2 font-bold leading-none opacity-70"
                          >
                            {head} {index !== TABLE_HEAD.length - 1}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {displayedRows.map(({ img, name, email }, index) => {
                      const isSelected = selectedUser === name; // Check if this user is selected
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      const rowClass =
                        isSelected || !selectedUser ? "" : "selected-row";

                      return (
                        <tr key={name} className={rowClass}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={img} alt={name} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal"
                                >
                                  {name}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal opacity-70"
                                >
                                  {email}
                                </Typography>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Pagination controls */}
                <div className="  mt-4">
                  {Array.from({
                    length: Math.ceil(TABLE_ROWS.length / itemsPerPage),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`mx-1 px-3 py-1 rounded ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <div className="flex justify-center pt-3">
                    <button
                      onClick={handlePrevPage}
                      className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700"
                    >
                      Previous page
                    </button>
                    <button
                      onClick={handleNextPage}
                      className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700"
                    >
                      Next page
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}
        </>
      )}
    </>
  );
}
