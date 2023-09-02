import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
  } from "@material-tailwind/react";

  import { useEffect, useState } from "react";
  import { Button, Input } from "antd";
  import axiosInstance from "../../configs/axiosInstance";
  
import { Link } from "react-router-dom";
import { SidebarWithCtaAdmin } from "../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefaultAdmin } from "../../Components/UserComponents.jsx/MobileNavbar";
import icn1 from "../../assets/images/Alluser.png";
import icn2 from "../../assets/images/ballot.png";
import icn3 from "../../assets/images/Uicon.png";

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

const AdminElectionlist = () => {
    const [users, setUsers] = useState([]);
    const [id, setid] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showrepConfirmation, setShowrepConfirmation] = useState(false);
    const [showeConfirmation, setShoweConfirmation] = useState(false);
    const [rep, setRepresentative] = useState([]);
    const [electionData, SetElectionData] = useState([]);
  
    const handleDeleteClick = (id) => {
      setShowConfirmation(true);
      setid(id);
    };
  
    const handleConfirmDelete = async (id) => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const deleteUser = await axiosInstance.post("/api/admin/deleteuser", {
          headers,
          id,
        });
        setid("");
      } catch (error) {}
      setShowConfirmation(false);
    };
  
    const handleCancelDelete = () => {
      setShowConfirmation(false);
    };
  
    const handleDeleterepClick = (id) => {
      setShowrepConfirmation(true);
      setid(id);
    };
  
    const handleConfirmrepDelete = async (id) => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const deleterep = await axiosInstance.post("/api/admin/deleterep", {
          headers,
          id,
        });
        setid("");
      } catch (error) {}
      setShowrepConfirmation(false);
    };
    const handleCancelrepDelete = () => {
      setShowrepConfirmation(false);
    };
  
  //el-delete
  
  
    const handleDeleteeClick = (id) => {
      setShoweConfirmation(true);
      setid(id);
    };
  
    const handleConfirmeDelete = async (id) => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const deletee = await axiosInstance.post("/api/admin/deletee", {
          headers,
          id,
        });
        setid("");
      } catch (error) {}
      setShoweConfirmation(false);
    };
  
    const handleCanceleDelete = () => {
      setShoweConfirmation(false);
    };
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token");
          const headers = {
            Authorization: `Bearer ${token}`,
          };
          const response = await axiosInstance.get("/api/admin/showuser", { headers });
          setUsers(response.data.showUser);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [id]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token");
          const headers = {
            Authorization: `Bearer ${token}`,
          };
          const response = await axiosInstance.get("/api/admin/addrepresentative", {
            headers,
          });
          setRepresentative(response.data.Representative);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [id]);
  
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
          SetElectionData(response?.data?.election);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [id]);
  
    const TABLE_HEAD = ["Name", "Membership Number","Profile picture","Phone Number", "Email","Age", "Edit", "Delete"];
    const TABLE_HEAD_REP = ["Name", "Duration","Profile Picture", "DELETE"];
  
    const TABLE_HEAD_ELECTION = [
      "Election Name",
      "StartDate",
      "EndDate",
    ];
  
    // edit card 1
    const [editedUser, setEditedUser] = useState(null);
    const handleEditClick = (user) => {
      setEditedUser(user);
    };
    const handleConfirmEdit = async (editedUser) => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const edit = await axiosInstance.post("/api/admin/edituser", {
          headers,
          editedUser,
        });
        setid("123");
        setEditedUser(null);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };
  
    const handleCancelEdit = () => {
      setEditedUser(null);
    };
  
    //edit card 2
    const [editedUser2, setEditedUser2] = useState(null);
    const handleEditClick2 = (user) => {
      setEditedUser(user);
    };
    const handleConfirmEdit2 = async (editedUser) => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const edit = await axiosInstance.post("/api/admin/editrep", {
          headers,
          editedUser,
        });
        setid("123");
        setEditedUser2(null);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };
  
    const handleCancelEdit2 = () => {
      setEditedUser2(null);
    };
  
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>
      <div className=" w-full flex bg-gray-900 justify-center">
      <div className="mt-12 mb-8 flex w-[98%] md:w-[90%] flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Users List
          </Typography>
        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((m) => (
                <tr key={m.username} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {m.username}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {m.membershipnumber}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
<img src={m.url} alt="image" className="w-10 h-10"  />
                    </Typography>
                  </td>

                 
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {m.contactnumber}
                    </Typography>
                  </td>
                

                
                  
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {m.email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {m.age}
                    </Typography>
                  </td>

                 
                  <td className="p-4" onClick={() => handleEditClick(m)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                    </svg>
                  </td>
                  <td
                    className="cursor-pointer p-4"
                    onClick={() => handleDeleteClick(m._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {editedUser && (
            <div className="fixed  inset-0 z-40 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="rounded-md bg-white p-6 shadow-lg">
                {/* Edit form or modal */}
                <p className="mb-4 text-xl font-semibold">Edit User</p>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={editedUser.name}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={editedUser.email}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="position"
                    className="text-sm font-medium text-gray-700"
                  >
                    Position
                  </label>
                  <Input
                    id="position"
                    type="position"
                    value={editedUser.position}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, position: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <Input
                    id="location"
                    type="text"
                    value={editedUser.location}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, location: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="age"
                    className="text-sm font-medium text-gray-700"
                  >
                    age
                  </label>
                  <Input
                    id="age"
                    type="text"
                    value={editedUser.age}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, age: e.target.value })
                    }
                  />
                </div>
                {/* Add input fields for other user properties (location, age, etc.) */}
                <div className="mt-6 flex justify-end">
                  <Button
                    className="mr-2 bg-blue-400"
                    type="primary"
                    onClick={() => handleConfirmEdit(editedUser)}
                  >
                    Save
                  </Button>
                  <Button onClick={handleCancelEdit}>Cancel</Button>
                </div>
              </div>
            </div>
          )}

          {showConfirmation && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="rounded-md bg-white p-6 shadow-lg">
                <p>Are you sure you want to delete?</p>
                <div className="mt-4 flex justify-end">
                  <button
                    className="mr-2 rounded bg-red-500 px-4 py-2 text-white"
                    onClick={() => handleConfirmDelete(id)}
                  >
                    Confirm
                  </button>
                  <button
                    className="rounded bg-gray-300 px-4 py-2 text-gray-800"
                    onClick={handleCancelDelete}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </CardBody>
      </Card>

      
    </div>
      </div>
    </div>
  );
};

export default AdminElectionlist;
