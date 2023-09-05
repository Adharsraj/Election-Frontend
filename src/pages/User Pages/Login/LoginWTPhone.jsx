import { Button, Card, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import otpgif from "../../../assets/otp.json";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../configs/axiosInstance";
import { message } from "antd";
const LoginWTPhone = () => {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpmobilenumber, setOtpMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  // const [message, setMessage] = useState("");

  const sendOTP = async () => {
    try {
      const response = await axiosInstance.post("/api/admin/send-otp", {
        otpmobilenumber,
      });
      // setMessage(response.data.message);
      setIsOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      message.error("Error verifiying phonenumber")
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axiosInstance.post("/api/admin/verify-otp", {
        otpmobilenumber,
        otp,
      });
      // setMessage(response.data.message);
      console.log(response.data);
      message.success("Number Verified,Login successfull")

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("User", JSON.stringify(response.data.User));
        if (response.data.User.role === "user") {
          navigate("/home");
        } else if (response.data.User.role === "admin") {
          navigate("/admin/home");
        } else {
          console.log("invalid person");
        }
      } else {
        console.log("invalid token");
        message.error("Invalid Otp")

      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      message.error("Error verifiying Otp")
    }
  };


  return (
    <div className="flex flex-col md:flex-row justify-center text-center items-center shadow-2xl  h-screen">
      <Card className="px-3 md:border">
        {/* <p className="bg-gray">{message}</p> */}

        <div className="md:flex">
          <div className="md:text-6xl text-4xl">
            <h1 className="pt-5 pb-5 font-bold w-[300px]  md:hidden">
              {" "}
              Login using phone number
            </h1>
            <div className="w-60 md:w-[400px]   mx-auto">
              <Lottie loop={true} animationData={otpgif} />
            </div>
          </div>
          <div className="flex flex-col  pb-6 px-3 items-center justify-center gap-5 pt-6">
            <h1 className="pt-5 pb-5 text-3xl font-extrabold hidden md:flex">
              {" "}
              {!isOtpSent
                ? "Login using phone number"
                : "otp send sucessfully check your phone"}
            </h1>
            {!isOtpSent ? (
              <>
                <Input
                  size="lg"
                  className="text-xl text-center"
                  label="Enter Mobile Number"
                  value={otpmobilenumber}
                  onChange={(e) => setOtpMobileNumber(e.target.value)}
                  required
                />
                <Button
                  onClick={sendOTP}
                  className="flex items-center justify-center gap-3 "
                >
                  Send otp
                </Button>
              </>
            ) : (
              <>
                <Input
                  size="lg"
                  className="text-xl text-center"
                  label="Enter Otp "
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <Button
                  onClick={verifyOTP}
                  className="flex items-center bg-green-300 justify-center gap-3 "
                >
                  Verify otp
                </Button>
              </>
            )}
            OR
            <Link to="/logingmail">
              <Button className="flex justify-center items-center gap-5 h-7 ">
                login using Gmail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginWTPhone;
