import React from "react";
import { FiPieChart, FiSettings, FiUsers, FiThumbsUp } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { BiChevronRight, BiUserCircle } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Transactions } from "../Assets/money-withdraw.svg";
import LineChart from "./LineChart";
import { RiArrowDropDownLine } from "react-icons/ri";
import PieChart from "./PieChart";

const Dashboard = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="font-montserrat bg-slate-100 h-screen grid grid-cols-5">
      <div className="bg-black col-span-1 m-5 rounded-3xl text-white grid grid-cols-1 content-between p-6">
        <div>
          <h3
            className="font-bold text-4xl cursor-pointer"
            onClick={navigateToHome}
          >
            Board.
          </h3>
          <div className="mt-10 ">
            <Pages
              icons={<FiPieChart />}
              label={"Dashboard"}
              additionalCss={"font-semibold"}
            />
            <Pages icons={<BsTags />} label={"Transactions"} />
            <Pages icons={<TbCalendarTime />} label="Schedules" />
            <Pages icons={<BiUserCircle />} label="Users" />
            <Pages icons={<FiSettings />} label="Settings" />
          </div>
        </div>
        <div>
          <p className="text-sm">Help</p>
          <p className="text-sm">Contact Us</p>
        </div>
      </div>
      <div className=" mt-2 mb-8 mr-8 p-4 h-auto col-span-4">
        <div className="grid grid-cols-2 justify-around">
          <div>
            <h3 className="font-bold text-2xl">Dashboard</h3>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex items-center justify-around bg-white p-2 mr-4 rounded-full h-6 w-48 text-slate-400 cursor-pointer hover:text-black text-sm">
              Search...
              <AiOutlineSearch className="ml-16" />
            </div>
            <AiOutlineBell className="ml-4 mr-6 text-2xl hover:scale-110" />
            <img
              className="h-8 w-8S rounded-full hover:scale-110"
              src="https://ik.imagekit.io/anurag/400_crop_5adda56853a71_5adda5531d5d7_SdJ1xq0BY.webp?updatedAt=1680726087075"
              alt="user"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-4">
          <Card
            bgColor={"bg-green-100"}
            label={"Total Revenues"}
            value={"$2,129,430"}
            icon={<Transactions />}
            additionalCss={"w-5 h-5 ml-11"}
          />
          <Card
            bgColor={"bg-yellow-100"}
            label={"Total Transactions"}
            value={"9721"}
            icon={<BsTags />}
          />
          <Card
            bgColor={"bg-rose-100"}
            label={"Total Likes"}
            value={"1520"}
            icon={<FiThumbsUp />}
          />
          <Card
            bgColor="bg-indigo-100"
            label={"Total Users"}
            value={"892"}
            icon={<FiUsers />}
          />
        </div>
        <LineChart />
        <div className="grid grid-cols-2 gap-4 h-40 mb-2">
          <div className="col-span-1 bg-white rounded-lg mt-3 h-full p-2">
            <div className="flex justify-between">
              <h3 className="font-semibold ">Top Products</h3>
              <p className="flex items-center text-slate-400 text-xs hover:text-slate-950 cursor-pointer">
                May-June 2021
                <RiArrowDropDownLine className="text-lg" />
              </p>
            </div>
            <div className="flex justify-between">
              <PieChart />
              <div className="">
                <div>
                  <p className="flex items-center mr-4 font-semibold">
                    <div className="bg-green-300 h-2 w-2 rounded-full mr-3"></div>
                    Basic Tees
                  </p>
                  <p className="ml-5 text-xs text-slate-400">55%</p>
                </div>
                <div>
                  <p className="flex items-center mr-4 font-semibold">
                    <div className="bg-yellow-300 h-2 w-2 rounded-full mr-3"></div>
                    Custom Short Pants
                  </p>
                  <p className="ml-5 text-xs text-slate-400">31%</p>
                </div>
                <div>
                  <p className="flex items-center mr-4 font-semibold">
                    <div className="bg-red-300 h-2 w-2 rounded-full mr-3"></div>
                    Super Hoodies
                  </p>
                  <p className="ml-5 text-xs text-slate-400">14%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-lg mt-3 h-full p-2">
            <div className="flex justify-between">
              <h3 className="font-semibold ">Today's Schedule</h3>
              <p className="flex items-center text-slate-400 text-xs hover:text-slate-950 cursor-pointer">
                See All
                <BiChevronRight className="text-lg" />
              </p>
            </div>
            <div>
              <div className="border-l-8 border-solid border-green-300 pl-2 mt-1">
                <h3 className="font-semibold text-slate-700">
                  Meeting with suppliers from Kuta Bali
                </h3>
                <p className="text-slate-700 text-sm">14:00-15:00</p>
                <p className="text-slate-700 text-sm">
                  at Sunset Road, Kuta, Bali
                </p>
              </div>
              <div className="border-l-8 border-solid border-indigo-700 pl-2 mt-1">
                <h3 className="font-semibold text-slate-700">
                  Meeting with suppliers from Kuta Bali
                </h3>
                <p className="text-slate-700 text-sm">14:00-15:00</p>
                <p className="text-slate-700 text-sm">
                  at Sunset Road, Kuta, Bali
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Pages = ({ icons, label, additionalCss }) => {
  return (
    <p
      className={`flex items-center ${additionalCss} mb-3 hover:scale-105 cursor-pointer`}
    >
      <div className="mr-2">{icons}</div>
      {label}
    </p>
  );
};
const Card = ({ bgColor, icon, label, value, additionalCss }) => {
  return (
    <div
      className={`grid grid-cols-3 w-52  h-20 rounded-2xl p-2 pl-4  ${bgColor} hover:scale-105 	`}
    >
      <div className="col-span-2 pt-6">
        <p className="text-xs">{label}</p>
        <h3 className="font-semibold text-lg ">{value}</h3>
      </div>
      <div className={`col-span-1 ${additionalCss} text-lg flex justify-end`}>
        {icon}
      </div>
    </div>
  );
};

export default Dashboard;
