import React, { useEffect, useState } from "react";
import { Select, Input, Button, message } from "antd";
import axiosInstance from "../../configs/axiosInstance";
import {
  Avatar,
  CardFooter,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { SidebarWithCtaAdmin } from "../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefaultAdmin } from "../../Components/UserComponents.jsx/MobileNavbar";
import Modal from "react-modal";

const AdminOfflineVote = () => {
  const [elections, setElections] = useState([]);
  const [selectedElection, setSelectedElection] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [numberToAdd, setNumberToAdd] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const res = await axiosInstance.get("/api/admin/electiondata", {
          headers,
        });
        console.log(res.data.election);
        setElections(res.data.election);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false);
  };

  const handleConfirmationOpen = () => {
    setIsConfirmationOpen(true);
  };

//   const handleAddNames = async () => {
//     if (
//       !selectedElection ||
//       !selectedName ||
//       isNaN(numberToAdd) ||
//       numberToAdd <= 0
//     ) {
//       return;
//     }
//  console.log(selectedElection)
//     const electionId = selectedElection;

//     let newNames = [];

//     for (let i = 0; i < numberToAdd; i++) {
//       newNames.push(selectedName);
//     }

//     console.log("electionId", electionId);
//     console.log(newNames);

//     // Send the election ID along with the new names to the backend
//     try {
//       const token = localStorage.getItem("token");
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       const response = await axiosInstance.post("/api/admin/offlinevote", {
//         headers,
//         electionId,
//         names: newNames,
//       });

//       // Handle the response from the backend if needed
//       console.log(response.data);
//       setSelectedElection(" ");
//       setSelectedName(null);
//       setNumberToAdd(null);
//       setIsConfirmationOpen(false);
// message.success("Vote added sucessfully")
//     } catch (error) {
//       // Handle errors if any
//       console.error(error);
//     }
//   };

const handleAddNames = async () => {
  if (
    !selectedElection ||
    !selectedName ||
    isNaN(numberToAdd) ||
    numberToAdd <= 0
  ) {
    return;
  }

  const electionId = selectedElection;

  let newNames = [];

  for (let i = 0; i < numberToAdd; i++) {
    newNames.push(selectedName);
  }

  // Send the election ID along with the new names to the backend
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post("/api/admin/offlinevote", {
      headers,
      electionId,
      names: newNames,
    });
    
    // Handle the response from the backend if needed
    console.log(response.data);

    // Reset the state values
    setSelectedElection(null);
    setSelectedName(null);
    setNumberToAdd(null);
    setIsConfirmationOpen(false);
    message.success("Vote added successfully");
  } catch (error) {
    // Handle errors if any
    console.error(error);
  }
};

  return (
    <div className="md:flex bg-gray-900 min-h-screen max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>

      <div className=" w-full flex flex-col justify-center items-center">
      <h1 className=" text-4xl text-gray-400 lg:text-6xl lg:pb-10 text-center pt-5">
        Add Offline Votes here
        </h1>
        <div className="max-w-lg bg-blue-900 p-7 px-10 ">
          <Select
            placeholder="Select Election Name"
            className="mb-3  placeholder-black "
            size="large"
            style={{
              width: "100%",
            }}
            options={elections.map((election) => ({
              value: election._id, // Pass the election ID as the value
              label: election.electionName, // Display the election name as the label
            }))}
            onChange={(value) => setSelectedElection(value)}
            value={selectedElection} 

            required
          />

          {selectedElection && (
            <Select
              placeholder="Select Candidate Name"
              size="large"
              className="mb-3 placeholder-black"

              style={{
                width: "100%",
                color: "black", // Text color
              }}
              options={
                elections
                  .find((election) => election._id === selectedElection)
                  ?.representatives.map((rep) => ({
                    value: rep.username,
                    label: rep.username,
                  })) || []
              }
              onChange={(value) => setSelectedName(value)}
              value={selectedName} // Add this line
              required
            />
          )}

          <Input
            placeholder="Enter Number of votes to add"
            type="number"
            value={numberToAdd !== null ? numberToAdd.toString() : ''} // Show placeholder when numberToAdd is null
            onChange={(e) => setNumberToAdd(parseInt(e.target.value))}
            className="text-black "

          />

          <Button type="primary" className="bg-black w-full hover:bg-black mt-4" onClick={handleConfirmationOpen}
          >
            Add Vote
          </Button>
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
                      
                      {/* <p className="text-gray-700">{selectedElection}
                   
                      </p> */}
                    </div>
                    <p className="text-gray-700 mb-4">
                      Are you sure you want to add {numberToAdd} vote for {selectedName}?
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button
                        onClick={handleAddNames}
                        className="h-10 bg-green-300"

                      >
                        Yes,vote
                      </Button>
                      <button
                        onClick={handleConfirmationClose}
                        className="border rounded-lg p-2 hover:bg-red-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
        </div>
      </div>
    </div>
  );
};

export default AdminOfflineVote;
