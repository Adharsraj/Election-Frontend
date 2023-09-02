import React, { useEffect, useState } from "react";

import { SidebarWithCtaAdmin } from "../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefaultAdmin } from "../../Components/UserComponents.jsx/MobileNavbar";
import { Form, Select, Button, message } from "antd";
import { Input } from "@material-tailwind/react";
import axiosInstance from "../../configs/axiosInstance";




const AdminCreateElection = () => {
  const [rep, setRepresentative] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [form] = Form.useForm(); // Create a form instance



  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get('/api/admin/showuser', { headers });
        console.log(response)
        setRepresentative(response.data.showUser);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (selectedValues) => {
    setSelectedItems(selectedValues);
  };
  const onFinish = async (formData) => {
    const selectedUsernames = selectedItems.map((value) => {
      const option = rep.find((item) => item._id === value);
      return option ;
    });

    const dataToSend = {
      ...formData,
      representatives: selectedUsernames,
    };
    console.log("dataToSend",dataToSend)

    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axiosInstance.post('/api/admin/electiondata', {dataToSend,headers});
      console.log('Response from backend:', dataToSend);
      form.resetFields();
      message.success("Election created successfully!");

      // Handle success or further actions here
    } catch (error) {
      console.error('Error sending data to backend:', error);
      // Handle error here
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
        <Form form={form}
         name="adminCreateUserForm" className="w-full px-10" onFinish={onFinish}>

          <div className="md:flex w-full  border">
            <div className="w-full p-4 md:w-1/2 bg-white">
            <Form.Item name="electionName" >
                <Input label="Name of Position" />
              </Form.Item>
              <Form.Item name="representatives">
      <Select
        mode="multiple"
        placeholder="Select Participants"
        value={selectedItems}
        onChange={handleSelectChange}
        size="large"
        style={{
          width: '100%',
        }}
        options={rep.map(({ username, _id }) => ({
          value: _id,
          label: username,
        }))}
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
              <Form.Item name="startDate" >
              <Input type="date" label='From Date' name="startDate"  id="startDate" required/>
                     </Form.Item>
            
                     <Form.Item name="endDate" >
              <Input type="date" label='To Date' name="endDate" id="endDate" required />       
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
