import { Button, Card, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import mailgif from "../../../assets/mail.json";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../configs/axiosInstance";
import { message } from "antd";

const LoginWTGmail = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [otp, setOtp] = useState('');
  const[status,changeStatus]=useState(false)
// const [message,setMessage]=useState("")
  const sendOtp=async()=>{
  try {
      console.log("i am email",email)
    const res=await axiosInstance.post("/api/admin/sendemailotp",{email})
    console.log(res)
    changeStatus(true)
  } catch (error) {
    console.log(error)
    message.error("Invalid email")
  }

  }
  const verifyOtp = async () => {
  
    try {
        const response=await axiosInstance.post("/api/admin/verifyemailotp",{email,otp})
        console.log(response)
        message.success("Login successfull")
        if (response.data.verified) {
          console.log("inside verified")
          if (response.data.token) {
            console.log("inside token")
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("User", JSON.stringify(response.data.User));
            if (response.data.User.role === "user") {
              navigate("/home");
            } else if (response.data.User.role === "admin") {
              navigate("/admin/home");
            } else {
              console.log("invalid person");
            }
        }} else {
          console.log(object)('Invalid OTP');
        }
      
    
    } catch (error) {
      console.log(error)
    
    }}
    

  return (
    <div className="flex flex-col md:flex-row justify-center text-center items-center shadow-2xl  h-screen">
      <Card className="px-3 md:border">
        <div className="md:flex">
          <div className="md:text-6xl text-4xl">
            <h1 className="pt-5 pb-5 font-bold w-[300px]  md:hidden">
              {" "}
              {!status?
"Login using Email":"Enter the Otp send to email"}
            </h1>
            <div className="w-60 md:w-[400px]  mx-auto">
              <Lottie loop={true} animationData={mailgif} />
            </div>
          </div>
          <div className="flex flex-col  pb-6 px-3 items-center justify-center gap-5 pt-6">
            <h1 className="pt-5 pb-5  w-[300px] text-3xl font-extrabold hidden md:flex">
              {" "}
              {!status?
"Login using Email":"Enter the Otp send to email"}   
         </h1>
            {!status?
            <>
            <Input size="lg" label="Enter Email " name="email" onChange={(e)=>setEmail(e.target.value)} />
              <Button onClick={sendOtp} className="flex items-center justify-center gap-3 ">
                Send otp to mail
              </Button>
              </>
           :
<>
           <Input
           size="large"
           label="Enter OTP"
           value={otp}
           name="otp"
           onChange={(e) => setOtp(e.target.value)}
         />
         <Button onClick={verifyOtp}>Verify OTP</Button>
         </>

          }





            OR
            <Link to="/loginphone">
              <Button className="flex items-center justify-center gap-3 h-7 ">
                login using phone number
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
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

export default LoginWTGmail;
