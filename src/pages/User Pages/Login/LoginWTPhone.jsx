import { Button, Card, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import otpgif from "../../../assets/otp.json";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../configs/axiosInstance";
const LoginWTPhone = () => {
  const navigate=useNavigate()
  const [message, setMessage] = useState("");
  const [otpmobilenumber, setPhoneNumber] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [storedotp, setStoredotp] = useState("");
  const [userData, setUserData] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [otpVerificationError, setOtpVerificationError] = useState(false); 
  const [sucessmsg, setSucessmsg] = useState("");
  const [errormessage,setErrormessage]=useState("")


  const handleSendOTP = async () => {
    console.log("phoneNumber", otpmobilenumber);
    try {
      const response = await axiosInstance.post("/api/admin/send-otp", {
        otpmobilenumber,
      });

      setSucessmsg("otp send sucessfully");
      console.log(response.data);
      console.log("this is rrsponse", response.data.otp);
      setUserData(response.data);
      setStoredotp(response.data.otp);
      setPhoneNumber("")

      setIsOtpSent(true);



    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage("Error sending OTP! Invalid Phone Number.");
    }
  };

  const handleVerifyOTP = () => {
    setSucessmsg("");
    console.log(otp);
    console.log(storedotp);
    console.log("im inside handleverify", userData);
    if (otp == storedotp) {
      console.log("ok");
      setOtpVerificationError(false); // Reset OTP verification error state

      setSubmit(true);
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("User", JSON.stringify(userData.User));
        if (userData.User.role === "user") {
          navigate("/home");
        } else if (userData.User.role === "admin") {
          navigate("/admin/home");
        } else {
          console.log("invalid person");
        }
        setIsLoading(false);
      } else {
        console.log("invalid token");
      }
    } else {
      console.log("nop");
      setErrormessage("Invalid otp");
      setOtpVerificationError(true);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-center text-center items-center shadow-2xl  h-screen">
      <Card className="px-3 md:border">
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
              {!isOtpSent?"Login using phone number":"otp send sucessfully check your phone"} 
            </h1>
            {!isOtpSent ? (
              <>
                <Input
                  size="lg"
                  className="text-xl text-center"
                  label="Enter Mobile Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <Button
                  onClick={handleSendOTP}
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
                  onClick={handleVerifyOTP}
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
