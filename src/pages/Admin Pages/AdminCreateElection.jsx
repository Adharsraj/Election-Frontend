import React, { useState } from "react";

import { SidebarWithCtaAdmin } from "../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefaultAdmin } from "../../Components/UserComponents.jsx/MobileNavbar";
import icn1 from "../../assets/images/Alluser.png";
import icn2 from "../../assets/images/ballot.png";
import icn3 from "../../assets/images/Uicon.png";
import { Form, Select, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Input } from "@material-tailwind/react";


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

const AdminCreateElection = () => {
  const { Option } = Select;
  const [userImage, setUserImage] = useState(null);


  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUserImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>
      <div className="border bg-gray-50 justify-center lg:mt-0 lg:pt-0 mt-10 pt-10 items-center w-full  text-center flex  flex-col px-4">
        <h1 className=" md:text-5xl text-3xl rounded-xl text-white bg-gray-800 w-[80%] uppercase p-4 mb-2">Create  Election</h1>
        <Form name="adminCreateUserForm" className="w-full px-10" onFinish={onFinish}>

          <div className="md:flex w-full  border">
            <div className="w-full p-4 md:w-1/2 bg-white">
            <Form.Item name="username" >
                <Input label="Name of Election" />
              </Form.Item>
            <Form.Item name="currentPosition"  >
            <Select
                mode="multiple"
                placeholder="Select Participants"
                // value={selectedItems}
                // onChange={setSelectedItems}
                size='large'
                style={{
                  width: '100%',
                }}
                // options={rep.map(({ name, _id }) => ({
                //   value: _id,
                //   label: name,
                // }))}
                required
              />
</Form.Item>
{/* <Form.Item name="currentPosition"  >
  <Select defaultValue="default" className="" >
    <Option value="default" disabled>Are u a previous board member</Option>
    <Option value="position1">Yes</Option>
    <Option value="position2">No</Option>
 
  </Select>
</Form.Item> */}
             
             
            
            </div>
            <div className="w-full p-4 md:w-1/2 bg-white">
              <Form.Item name="presentAddress" >
              <Input type="date" label='From Date' name="fromDate"  id="fromDate" required/>
                     </Form.Item>
            
                     <Form.Item name="presentAddress" >
              <Input type="date" label='To Date' name="toDate" id="toDate"required />       
                     </Form.Item>

              
            </div>
          </div>
          <Form.Item>
                <Button type="primary" className="w-[50%] flex justify-center items-center mx-auto p-3 bg-blue-700 md:text-lg" htmlType="submit">
                  CREATE ELECTION
                </Button>
              </Form.Item>
        </Form>
      </div>
      </div>
  );
};

export default AdminCreateElection;
