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
import { useEffect, useState } from "react";
import axiosInstance from "../../configs/axiosInstance";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

const itemsPerPage = 4; // Number of items per page

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
  const [loading, setLoading] = useState(true);

  const handleRadioChange = (userName, userPhoto, _id) => {
    console.log(_id);
    setSelectedUser(userName);
    setSelectedUserPhoto(userPhoto);
    setSelectedVote(_id);
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

  const [collection, setCollection] = useState([]);
  const [viewPage, setViewPage] = useState(false);
  const [elections, setElections] = useState([]);
  const [selectedElection, setSelectedElection] = useState(null);
  const [selectedVote, setSelectedVote] = useState(null);
  const [votedPersons, setVotedPersons] = useState([]);
  const [nameToCheck, setNameToCheck] = useState("");
  const [isNameIncluded, setIsNameIncluded] = useState(false);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const [samp, setSamp] = useState([]);
  const [myId, setMyId] = useState("");
  const [votedids, setVotedIds] = useState([]);
  const [notvotedlist, setNotvotedList] = useState([]);

  const { id } = useParams();
  const userid = localStorage.getItem("User");
  const exact = JSON.parse(userid);

  useEffect(() => {
    console.log("object", id);

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        console.log("object");

        const response = await axiosInstance.get(
          `/api/admin/collections/${id}`,
          { headers }
        );
        console.log("response", response);
        setCollection(response.data);

        if (response?.data?.userid?.includes(exact._id)) {
          setRemainingVoters(true);
        } else {
          setViewPage(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setViewPage(true);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/user/electiondata", {
          headers,
        });
        console.log("response", response);
        setLoading(false);
        setElections(response.data.election);
        const foundElection = response.data.election.find(
          (election) => election._id === id
        );
        setSelectedElection(foundElection);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchElections();
  }, [id]);

  useEffect(() => {
    const getVotedPersons = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const re = await axiosInstance.get(
          `/api/admin/getsingleelection/${id}`,
          { headers }
        );
        console.log("res", re);

        const response = await axiosInstance.get("/api/user/electiondata", {
          headers,
        });
        const res = await axiosInstance.get("/api/admin/vote", { headers });
        const votedPersonsData = res.data.votes;
        const m = res.data.votes.map((m) => {
          setMyId(m._id);
        });

        setVotedPersons(votedPersonsData);
        const Username = JSON.parse(localStorage.getItem("User"));
        const namesArray = votedPersonsData.map((vote) => vote.name[0]);
        const included = namesArray.includes(Username.name);

        setIsNameIncluded(included);
      } catch (error) {
        console.error("Error fetching voted persons:", error);
      }
    };

    getVotedPersons();
  }, [nameToCheck, samp]);

  // const handleVoteChange = (personId) => {
  //   setSelectedVote(personId);
  // };

  const handleSubmit = async () => {
    // if (selectedVote) {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const re = await axiosInstance.get(`/api/admin/getsingleelection/${id}`, {
        headers,
      });
      console.log("response", re);
      setVoteSubmitted(true);
      const response = await axiosInstance.get("/api/user/electiondata", {
        headers,
      });
      const person = selectedElection.representatives.find(
        (m) => m._id === selectedVote
      );
      console.log("person", person);
      const Username = JSON.parse(localStorage.getItem("User"));
      const votedData = {
        personName: person.username,
        voted: true,
        id: id,
        name: Username.username,
        startDate: re.data.startDate,
        endDate: re.data.endDate,
        electionName: re.data.electionName,
        userid: Username._id,
      };
      console.log("votedData", votedData);
      const submit = await axiosInstance.post("/api/admin/vote", {
        headers,
        votedData,
      });

      const addUseridtoelectionData = await axiosInstance.post(
        "/api/user/addidtoelectiondata",
        { userid: votedData.userid, id: votedData.id }
      );
console.log("addUseridtoelectionData",addUseridtoelectionData)
      setSamp("");
      console.log("submit", submit);
      setRemainingVoters(true);
      setIsConfirmationOpen(false);
      setSelectedUser(null);
    } catch (error) {}
    console.log("No vote selected");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const res = await axiosInstance.get(`/api/admin/collections/${id}`, {
          headers,
        });
        setSamp("res");
        setVotedIds(res.data.userid);

        console.log(res.data.userid);

        // Filter the IDs that are not in votedIds
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, samp]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/user/showuser", {
          headers,
        });

        const idArray = response.data.showUser.map((item) => item._id);
        console.log("idArray", idArray);

        // Filter the IDs that are not in votedIds
        const idsNotInVoted = idArray.filter((id) => !votedids.includes(id));
        console.log("idsNotInVoted", idsNotInVoted);

        // Fetch and log details for IDs not voted
        const detailsNotVoted = response.data.showUser.filter((item) =>
          idsNotInVoted.includes(item._id)
        );
        setNotvotedList(detailsNotVoted);
        console.log("Details for IDs not voted:", detailsNotVoted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [votedids]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, notvotedlist.length);
  const displayedRows = notvotedlist.slice(startIndex, endIndex);

  return (
    <>
      {!remainingVoters ? (
        <div className="">
          <h1 className=" text-4xl text-gray-400 lg:text-6xl pb-5 text-center pt-5">
            Select a person to vote
          </h1>

          {loading ? (
            <div className="flex justify-center items-center pt-5">
              <Spin size="large" />
            </div>
          ) : (
            <Card className="">
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
                    {selectedElection?.representatives.map(
                      ({ url, _id, username, email }, index) => {
                        const isSelected = selectedUser === username; // Check if this user is selected
                        const isLast =
                          index ===
                          selectedElection?.representatives.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";
                        const rowClass =
                          isSelected || !selectedUser ? "" : "selected-row";

                        return (
                          <tr key={username} className={rowClass}>
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Avatar src={url} alt={username} size="sm" />
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {username}
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
                              <Button
                                onClick={() =>
                                  handleRadioChange(username, url, _id)
                                }
                              >
                                Vote
                              </Button>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>

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
                        onClick={handleSubmit}
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
          )}
        </div>
      ) : (
        <>
          <div className="p-6 bg-white text-black rounded-lg shadow-md mt-10 ">
            <div className="space-y-4 ">
              <div className="  ">
                <h1 className="text-xl font-semibold flex items-center justify-center gap-4">
                  Thank you for voting
                </h1>
                <h1 className="text-3xl font-semibold">
                  your vote has been confirmed
                </h1>
              </div>
            </div>
          </div>
          <h1 className="text-3xl pt-5 pb-5">
            {notvotedlist.length} more people from your community are left to
            vote
          </h1>
          <Button
            className="bg-red-500 mb-3 mt-3"
            onClick={() => setShownonvotersTable(!showNonvoterstable)}
          >
            {showNonvoterstable ? "Hide" : "Show"} Persons left to vote{" "}
          </Button>
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
                    {displayedRows.map(({ url, username, email }, index) => {
                      const isSelected = selectedUser === username;
                      const isLast = index === displayedRows.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      const rowClass =
                        isSelected || !selectedUser ? "" : "selected-row";

                      return (
                        <tr key={username} className={rowClass}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={url} alt={username} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal"
                                >
                                  {username}
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
                    length: Math.ceil(notvotedlist.length / itemsPerPage),
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

export function IndivudualNonvoters() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserPhoto, setSelectedUserPhoto] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [remainingVoters, setRemainingVoters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNonvoterstable, setShownonvotersTable] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const [collection, setCollection] = useState([]);
  const [viewPage, setViewPage] = useState(false);
  const [elections, setElections] = useState([]);
  const [selectedElection, setSelectedElection] = useState(null);
  const [selectedVote, setSelectedVote] = useState(null);
  const [votedPersons, setVotedPersons] = useState([]);
  const [nameToCheck, setNameToCheck] = useState("");
  const [isNameIncluded, setIsNameIncluded] = useState(false);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const [samp, setSamp] = useState([]);
  const [myId, setMyId] = useState("");
  const [votedids, setVotedIds] = useState([]);
  const [notvotedlist, setNotvotedList] = useState([]);

  const { id } = useParams();
  const userid = localStorage.getItem("User");
  const exact = JSON.parse(userid);

  useEffect(() => {
    console.log("object", id);

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        console.log("object");

        const response = await axiosInstance.get(
          `/api/admin/collections/${id}`,
          { headers }
        );
        console.log("response", response);
        setCollection(response.data);

        if (response?.data?.userid?.includes(exact._id)) {
          setRemainingVoters(true);
        } else {
          setViewPage(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setViewPage(true);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/admin/electiondata", {
          headers,
        });
        console.log("response", response);
        setLoading(false);
        setElections(response.data.election);
        const foundElection = response.data.election.find(
          (election) => election._id === id
        );
        setSelectedElection(foundElection);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchElections();
  }, [id]);

  useEffect(() => {
    const getVotedPersons = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const re = await axiosInstance.get(
          `/api/admin/getsingleelection/${id}`,
          { headers }
        );
        console.log("res", re);

        const response = await axiosInstance.get("/api/admin/electiondata", {
          headers,
        });
        const res = await axiosInstance.get("/api/admin/vote", { headers });
        const votedPersonsData = res.data.votes;
        const m = res.data.votes.map((m) => {
          setMyId(m._id);
        });

        setVotedPersons(votedPersonsData);
        const Username = JSON.parse(localStorage.getItem("User"));
        const namesArray = votedPersonsData.map((vote) => vote.name[0]);
        const included = namesArray.includes(Username.name);

        setIsNameIncluded(included);
      } catch (error) {
        console.error("Error fetching voted persons:", error);
      }
    };

    getVotedPersons();
  }, [nameToCheck, samp]);

  // const handleVoteChange = (personId) => {
  //   setSelectedVote(personId);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const res = await axiosInstance.get(`/api/admin/collections/${id}`, {
          headers,
        });
        setSamp("res");
        setVotedIds(res.data.userid);

        console.log(res.data.userid);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, samp]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/admin/showuser", {
          headers,
        });

        const idArray = response.data.showUser.map((item) => item._id);
        console.log("idArray", idArray);

        // Filter the IDs that are not in votedIds
        const idsNotInVoted = idArray.filter((id) => !votedids.includes(id));
        console.log("idsNotInVoted", idsNotInVoted);

        // Fetch and log details for IDs not voted
        const detailsNotVoted = response.data.showUser.filter((item) =>
          idsNotInVoted.includes(item._id)
        );
        setNotvotedList(detailsNotVoted);
        console.log("Details for IDs not voted:", detailsNotVoted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [votedids]);

  const totalPages = Math.ceil(notvotedlist.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRows = notvotedlist.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {!remainingVoters ? (
        <div className="">
          <h1 className=" text-4xl text-gray-400 lg:text-6xl pb-5 text-center pt-5">
            Select a person to vote
          </h1>
        </div>
      ) : (
        <>
          <h1 className="text-3xl pt-5 pb-5">
            {notvotedlist.length} more people from your community are left to
            vote
          </h1>
          <Button
            className="bg-red-500 mb-3 mt-3"
            onClick={() => setShownonvotersTable(!showNonvoterstable)}
          >
            {showNonvoterstable ? "Hide" : "Show"} Persons left to vote{" "}
          </Button>
          {showNonvoterstable && (
            <Card className="md:w-[60%] mx-auto bg-black text-white pb-10 mb-10">
              <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                  {/* ... Your table header ... */}
                  <thead>
                    <tr>
                      <th className="cursor-pointer text-center font-bold border-blue-gray-100 bg-red-500 p-4 transition-colors hover:bg-blue-gray-50">
                        <Typography
                          variant=""
                          color="black"
                          className="text-2xl text-center gap-2 font-bold leading-none opacity-70"
                        >
                          Persons left to vote
                        </Typography>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedRows.map(({ username, email, url }) => (
                      <tr key={username}>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar src={url} alt={username} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="white"
                                className="font-normal"
                              >
                                {username}
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
                    ))}
                  </tbody>
                </table>

                {/* Pagination controls */}
                <div className="mt-4  flex justify-center">
                  {Array.from({ length: totalPages }).map((_, index) => (
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
                </div>
              </CardBody>
            </Card>
          )}
        </>
      )}
    </>
  );
}

export function IndivudualNonvotersuser() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserPhoto, setSelectedUserPhoto] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [remainingVoters, setRemainingVoters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNonvoterstable, setShownonvotersTable] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleRadioChange = (userName, userPhoto, _id) => {
    console.log(_id);
    setSelectedUser(userName);
    setSelectedUserPhoto(userPhoto);
    setSelectedVote(_id);
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

  const [collection, setCollection] = useState([]);
  const [viewPage, setViewPage] = useState(false);
  const [elections, setElections] = useState([]);
  const [selectedElection, setSelectedElection] = useState(null);
  const [selectedVote, setSelectedVote] = useState(null);
  const [votedPersons, setVotedPersons] = useState([]);
  const [nameToCheck, setNameToCheck] = useState("");
  const [isNameIncluded, setIsNameIncluded] = useState(false);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const [samp, setSamp] = useState([]);
  const [myId, setMyId] = useState("");
  const [votedids, setVotedIds] = useState([]);
  const [notvotedlist, setNotvotedList] = useState([]);

  const { id } = useParams();
  const userid = localStorage.getItem("User");
  const exact = JSON.parse(userid);

  useEffect(() => {
    console.log("object", id);

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        console.log("object");

        const response = await axiosInstance.get(
          `/api/admin/collections/${id}`,
          { headers }
        );
        console.log("response", response);
        setCollection(response.data);

        if (response?.data?.userid?.includes(exact._id)) {
          setRemainingVoters(true);
        } else {
          setViewPage(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setViewPage(true);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/user/electiondata", {
          headers,
        });
        console.log("response", response);
        setLoading(false);
        setElections(response.data.election);
        const foundElection = response.data.election.find(
          (election) => election._id === id
        );
        setSelectedElection(foundElection);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchElections();
  }, [id]);

  useEffect(() => {
    const getVotedPersons = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const re = await axiosInstance.get(
          `/api/admin/getsingleelection/${id}`,
          { headers }
        );
        console.log("res", re);

        const response = await axiosInstance.get("/api/user/electiondata", {
          headers,
        });
        const res = await axiosInstance.get("/api/admin/vote", { headers });
        const votedPersonsData = res.data.votes;
        const m = res.data.votes.map((m) => {
          setMyId(m._id);
        });

        setVotedPersons(votedPersonsData);
        const Username = JSON.parse(localStorage.getItem("User"));
        const namesArray = votedPersonsData.map((vote) => vote.name[0]);
        const included = namesArray.includes(Username.name);

        setIsNameIncluded(included);
      } catch (error) {
        console.error("Error fetching voted persons:", error);
      }
    };

    getVotedPersons();
  }, [nameToCheck, samp]);

  // const handleVoteChange = (personId) => {
  //   setSelectedVote(personId);
  // };

  const handleSubmit = async () => {
    // if (selectedVote) {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const re = await axiosInstance.get(`/api/admin/getsingleelection/${id}`, {
        headers,
      });
      console.log("response", re);
      setVoteSubmitted(true);
      const response = await axiosInstance.get("/api/user/electiondata", {
        headers,
      });
      const person = selectedElection.representatives.find(
        (m) => m._id === selectedVote
      );
      console.log("person", person);
      const Username = JSON.parse(localStorage.getItem("User"));
      const votedData = {
        personName: person.username,
        voted: true,
        id: id,
        name: Username.username,
        startDate: re.data.startDate,
        endDate: re.data.endDate,
        electionName: re.data.electionName,
        userid: Username._id,
      };
      console.log("votedData", votedData);
      const submit = await axiosInstance.post("/api/admin/vote", {
        headers,
        votedData,
      });
      setSamp("");
      console.log("submit", submit);
      setRemainingVoters(true);
      setIsConfirmationOpen(false);
      setSelectedUser(null);
    } catch (error) {}
    console.log("No vote selected");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const res = await axiosInstance.get(`/api/admin/collections/${id}`, {
          headers,
        });
        setSamp("res");
        setVotedIds(res.data.userid);

        console.log(res.data.userid);

        // Filter the IDs that are not in votedIds
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, samp]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get("/api/user/showuser", {
          headers,
        });

        const idArray = response.data.showUser.map((item) => item._id);
        console.log("idArray", idArray);

        // Filter the IDs that are not in votedIds
        const idsNotInVoted = idArray.filter((id) => !votedids.includes(id));
        console.log("idsNotInVoted", idsNotInVoted);

        // Fetch and log details for IDs not voted
        const detailsNotVoted = response.data.showUser.filter((item) =>
          idsNotInVoted.includes(item._id)
        );
        setNotvotedList(detailsNotVoted);
        console.log("Details for IDs not voted:", detailsNotVoted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [votedids]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, notvotedlist.length);
  const displayedRows = notvotedlist.slice(startIndex, endIndex);

  return (
    <>
      <div className="">
        {loading ? (
          <div className="flex justify-center items-center pt-5">
            <Spin size="large" />
          </div>
        ) : (
          <>
            <h1 className="text-3xl pt-5 pb-5">
              {notvotedlist.length} more people from your community are left to
              vote
            </h1>

            {showNonvoterstable && (
              <Card className="md:w-[60%] mx-auto bg-black text-white pb-10 mb-10">
                <CardBody className="overflow-scroll px-0">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head, index) => (
                          <th
                            key={head}
                            className="cursor-pointer text-center font-bold border-blue-gray-100 bg-red-500 p-4 transition-colors "
                          >
                            <Typography
                              variant=""
                              color="black"
                              className="text-2xl text-center gap-2 font-bold leading-none opacity-70"
                            >
                              {head} {index !== TABLE_HEAD.length - 1}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {displayedRows.map(({ url, username, email }, index) => {
                        const isSelected = selectedUser === username;
                        const isLast = index === displayedRows.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";
                        const rowClass =
                          isSelected || !selectedUser ? "" : "selected-row";

                        return (
                          <tr key={username} className={rowClass}>
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Avatar src={url} alt={username} size="sm" />
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal"
                                  >
                                    {username}
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
                  <div className="mt-4   ">
                    <div className=" flex justify-center ">
                      {Array.from({
                        length: Math.ceil(notvotedlist.length / itemsPerPage),
                      }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                          className={` px-3 py-1 rounded   ${
                            currentPage === index + 1
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>

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
      </div>
    </>
  );
}
