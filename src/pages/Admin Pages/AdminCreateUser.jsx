import React, { useState } from "react";

import { SidebarWithCtaAdmin } from "../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefaultAdmin } from "../../Components/UserComponents.jsx/MobileNavbar";
import icn1 from "../../assets/images/Alluser.png";
import icn2 from "../../assets/images/ballot.png";
import icn3 from "../../assets/images/Uicon.png";
import { Form, Select, Button, Upload, message } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { Input } from "@material-tailwind/react";
import axiosInstance from "../../configs/axiosInstance";
import { UserPlusIcon } from "@heroicons/react/24/solid";

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

const AdminCreateUser = () => {
  const { Option } = Select;
  const [userImage, setUserImage] = useState(null);
  const [image, setImage] = useState([]);
  const { setFieldsValue, resetFields } = Form;
  const [isUploading, setIsUploading] = useState(false); // Flag to track uploading state
  const [form] = Form.useForm(); // Create a form instance

  const initialState = {
    membershipnumber: "",
    username: "",
    dob: "",
    age: "",
    contactnumber: "",
    otpmobilenumber: "",
    votingtype: undefined,
    presentAddress: "",
    permanentAddress: "",
    nomineeName: "",
    currentposition: undefined,
    aadharnumber: "",
    profession: "",
    remarks: "",
    email: "",
  };
  const onFinish = async (values) => {
    try {
      console.log(values, image);
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axiosInstance.post("/api/admin/adduser", {
        headers,
        ...values,
        userImage: image,
      });
      console.log("Response from backend:", response.data);
      setUserImage(null);
      setImage([]);
      form.setFieldsValue(initialState);
      message.success("User created successfully!");

      // Reset form fields using form instance
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const customRequest = ({ file, onSuccess }) => {
    setIsUploading(true); // Set uploading state to true
    setTimeout(() => {
      setIsUploading(false); // Simulating the end of the upload process
      onSuccess();
    }, 2000); // Simulating 2 seconds of upload time

    // Don't forget to call onSuccess() to indicate successful upload
  };

  return (
    <div className="md:flex bg-gray-900 min-h-screen  max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCtaAdmin />
      </div>
      <div className="md:hidden">
        <NavbarDefaultAdmin />
      </div>
      <div className="border bg-gray-50 justify-center items-center w-full  text-center flex  flex-col px-4">
        <h1 className=" md:text-5xl text-3xl rounded-xl text-white bg-gray-800 w-[80%] uppercase p-4 mb-2">
          Create User
        </h1>
        <Form
          form={form} // Pass the form instance to the Form component
          name="adminCreateUserForm"
          className="w-full px-10"
          onFinish={onFinish}
        >
          <div className="md:flex w-full  border">
            <div className="w-full p-4 md:w-1/2 bg-white">
              <Form.Item
                name="userImage"
                label="Profile Picture"
                rules={[
                  {
                    required: true,
                    message: "Please upload a profile picture",
                  },
                ]}
              >
                <Upload
                  customRequest={customRequest} // Simulating an async request
                  showUploadList={false}
                  beforeUpload={(file) => {
                    setUserImage(URL.createObjectURL(file));
                    setFileToBase(file);
                    return false; // Prevent default upload behavior
                  }}
                >
                  {userImage ? (
                    <img
                      src={userImage}
                      alt="Selected"
                      className="h-32 w-32 rounded-full"
                    />
                  ) : (
                    <h3 icon={isUploading ? <LoadingOutlined /> : ""}>
                      {isUploading ? (
                        "Uploading..."
                      ) : (
                        <div className="w-32 flex flex-col items-center justify-center bg-gray-400 h-32 rounded-full">
                          <UserPlusIcon className="w-12 h-12" />
                          <h1>click here to add user picture</h1>
                        </div>
                      )}
                    </h3>
                  )}
                </Upload>
              </Form.Item>

              <Form.Item name="membershipnumber">
                <Input label="Membership Number" required />
              </Form.Item>
              <Form.Item name="username">
                <Input label="Name" required />
              </Form.Item>

              <Form.Item name="dob">
                <Input type="date" label="Date of Birth" required />
              </Form.Item>
              {/* <Form.Item name="userImage" label="Profile Picture">
        <Upload
          customRequest={customRequest} // Simulating an async request
          showUploadList={false}
          beforeUpload={(file) => {
            setUserImage(URL.createObjectURL(file));
            setFileToBase(file);
            return false; // Prevent default upload behavior
          }}
        >
          {userImage ? (
            <img src={userImage} alt="Selected" className="h-24 w-24" />
          ) : (
            <h3 icon={isUploading ? <LoadingOutlined /> : ""}>
              {isUploading ? "Uploading..." : <div className="w-32 flex flex-col items-center justify-center bg-gray-400 h-32 rounded-full">

                 <h1>click here to add user picture</h1>
                </div>}
            </h3>
          )}
        </Upload>
      </Form.Item> */}
              <Form.Item name="age">
                <Input type="number" label="Age" required />
              </Form.Item>
              <Form.Item name="contactnumber">
                <Input label="Phone Number" />
              </Form.Item>
              <Form.Item name="otpmobilenumber">
                <Input label="OTP mobile Number" required />
              </Form.Item>
              <Form.Item name="email">
                <Input label="Email" required />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 bg-white">
            <Form.Item
  name="votingtype"
  label="Voting Type"
  rules={[
    {
      required: true,
      message: 'Please choose a voting type',
    },
  ]}
>
  <Select
    placeholder="Choose Voting type"
    size="large"
    style={{
      width: '100%',
    }}
  >
    <Select.Option value="Online">Online</Select.Option>
    <Select.Option value="Offline">Offline</Select.Option>
  </Select>
</Form.Item>

              <Form.Item name="presentAddress">
                <Input label="Present Address" />
              </Form.Item>
              <Form.Item name="permanentAddress">
                <Input label="Permanent Address" />
              </Form.Item>
              <Form.Item name="nomineeName">
                <Input label="Name of Nominee" />
              </Form.Item>
              <Form.Item
  name="currentposition"
  label="Current Position"
  rules={[
    {
      required: true,
      message: 'Please select the current position of the user',
    },
  ]}
>
  <Select
    placeholder="Select Current Position of User"
    size="large"
    style={{
      width: '100%',
    }}
  >
    <Select.Option value="Member">Member</Select.Option>
    <Select.Option value="President">President</Select.Option>
    <Select.Option value="Vice-president">Vice-President</Select.Option>
    <Select.Option value="General-secretary">General Secretary</Select.Option>
    <Select.Option value="Joint-secretary">Joint Secretary</Select.Option>
    <Select.Option value="Treasurer">Treasurer</Select.Option>
    <Select.Option value="Executive-member">Executive Member</Select.Option>
  </Select>
</Form.Item>


              <Form.Item name="aadharnumber">
                <Input label="Aadhar Number" />
              </Form.Item>
              <Form.Item name="profession">
                <Input label="Profession" />
              </Form.Item>
              <Form.Item name="remarks">
                <Input label="Remarks" />
              </Form.Item>

              {/* 
              <Form.Item name="userImage" label="Profile Picture">
        <Upload
          customRequest={customRequest} // Simulating an async request
          showUploadList={false}
          beforeUpload={(file) => {
            setUserImage(URL.createObjectURL(file));
            setFileToBase(file);
            return false; // Prevent default upload behavior
          }}
        >
          {userImage ? (
            <img src={userImage} alt="Selected" className="h-full w-full" />
          ) : (
            <Button icon={isUploading ? <LoadingOutlined /> : <UploadOutlined />}>
              {isUploading ? "Uploading..." : "Upload Image"}
            </Button>
          )}
        </Upload>
      </Form.Item> */}
            </div>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={isUploading}
              className="bg-blue-700 w-[70%]"
              // Disable the button during upload
            >
              CREATE USER
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminCreateUser;
