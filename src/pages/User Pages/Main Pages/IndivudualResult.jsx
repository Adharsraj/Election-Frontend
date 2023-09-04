import React, { useEffect, useState } from "react";
import { SidebarWithCta } from "../../../Components/UserComponents.jsx/SideNavbar";
import { NavbarDefault } from "../../../Components/UserComponents.jsx/MobileNavbar";
import { IndivudualCandidateCard } from "../../../Components/UserComponents.jsx/Tables";
import Lottie from "lottie-react";
import celebration from '../../../assets/celebration.json'
import axiosInstance from "../../../configs/axiosInstance";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
const IndivudualResult = () => {
  const { id } = useParams();
  const [allelections, setAllelections] = useState([{}]);

  const [namesArray, setNamesArray] = useState([]);
  const [commonNames, setCommonNames] = useState([]);
  const [mostCommonCount, setMostCommonCount] = useState(0);
  const [date,SetDate]=useState('')
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getAllElections = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const { data } = await axiosInstance.get("/api/admin/vote",{headers});
        setAllelections(data.votes);
      } catch (error) {
        console.log(error);
      }
    };
    getAllElections();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get(`/api/admin/collections/${id}`,{headers});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  
  const findMostRepetitiveNames = (names) => {
    const nameCount = {};
    let mostCommonNames = [];
    let highestCount = 0;

    for (const name of names) {
      if (name in nameCount) {
        nameCount[name] += 1;
      } else {
        nameCount[name] = 1;
      }

      if (nameCount[name] > highestCount) {
        mostCommonNames = [name];
        highestCount = nameCount[name];
      } else if (nameCount[name] === highestCount) {
        mostCommonNames.push(name);
      }
    }

    return { mostCommonNames, highestCount };
  };

  useEffect(() => {
    const fetchNamesFromAPI = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get(`/api/admin/collections/${id}`,{headers});
        SetDate(response.data.endDate.split("T")[0])
        const namesFromResponse = response.data.RepresentativeName;
        setNamesArray(namesFromResponse);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchNamesFromAPI();
  }, [id]);

  useEffect(() => {
    const { mostCommonNames, highestCount } =
      findMostRepetitiveNames(namesArray);
    setCommonNames(mostCommonNames);
    setMostCommonCount(highestCount);
  }, [namesArray]);
  const currentDate = new Date().toISOString().slice(0, 10)
  return (
    <div className="md:flex bg-gray-900 min-h-screen   max-h-fit text-white">
      <div className="hidden md:flex">
        <SidebarWithCta />
      </div>
      <div className="md:hidden">
        <NavbarDefault />
      </div>

{loading?<div className="md:flex justify-center   items-center pt-5 w-full hidden ">
            <Spin size="large" />
          </div>
:  <div className="relative w-full md:flex flex-col justify-center items-center hidden  ">
{date < currentDate&&     <Lottie loop={true} animationData={celebration} className="absolute  w-full md:h-full  "  />
}
<div class="p-8 bg-gray-100">
{date < currentDate ? (
<div class="bg-white rounded-lg shadow-md p-6">

<div>
  {commonNames.map((name, index) => (
    <p key={index} class="mb-2 text-5xl  text-center text-black">
      <span class="text-blue-500 text-6xl font-semibold">{name}</span> won with <span class="text-green-500 font-semibold text-6xl">{mostCommonCount}</span> votes
    </p>
  ))}
</div>
</div>
) : (
<div class="text-gray-500 text-center text-3xl">Results Not Published <br />
Election still in progress
</div>
)}
</div>
</div>}
      

   {loading?<div className=" w-full flex justify-center items-center md:hidden">
            <Spin size="large" className="" />
          </div> :<div className="h-screen md:hidden relative flex flex-col justify-center items-center text-center">
{date < currentDate&& <Lottie loop={true} animationData={celebration} className="absolute w-full md:h-full border "  />
 }

<div class="p-8 bg-gray-100">
    {date < currentDate ? (
      <div class="bg-white rounded-lg shadow-md p-6">
        
        <div>
          {commonNames.map((name, index) => (
            <p key={index} class="mb-2 text-5xl  text-center">
              <span class="text-blue-500 text-6xl font-semibold">{name}</span> won with <span class="text-green-500 font-semibold text-6xl">{mostCommonCount}</span> votes
            </p>
          ))}
        </div>
      </div>
    ) : (
      <div class="text-gray-500 text-center text-3xl">Results Not Published <br />
      Election still in progress
      </div>
    )}
  </div>
</div>
   } 


</div>


  );
};

export default IndivudualResult;
