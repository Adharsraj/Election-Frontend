import { Button, Card } from "@material-tailwind/react";
import React from "react";
import Lottie from "lottie-react";
import chicken from "../../../assets/Polite Chicky.json";
import { useRef } from "react";
import votebox from "../../../assets/votebox.json";
import { Link } from "react-router-dom";
const LoginHome = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center shadow-2xl  h-screen">
      <Card className="px-3">
        <div className="md:text-6xl text-4xl">
          <h1 className="pt-5 pb-5 font-bold w-[300px] md:w-full">
            {" "}
            Welcome to election board
          </h1>
          <div className="w-60  mx-auto ">
            <Lottie loop={true} animationData={votebox} />
          </div>
          <h1 className="md:text-4xl text-xl font-bold">
            Choose a method to log in
          </h1>
        </div>
        <div className="flex flex-col md:flex-row pb-6 px-3 items-center justify-center gap-5 pt-6">
          <Link to="/loginphone">
            <Button className="flex items-center justify-center gap-3 ">
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
          <Link to="/logingmail">
            <Button className="flex justify-center items-center gap-5">
              login using Email
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
      </Card>
    </div>
  );
};

export default LoginHome;
