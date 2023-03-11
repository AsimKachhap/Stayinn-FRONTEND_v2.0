import React from "react";
import Map from "../components/Map";
import HotelCard from "../components/HotelCard";
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";

const HomePage = () => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
    },
    function () {
      alert("Could not get your Position.");
    }
  );
  return (
    <div className="">
      <section className="Topbar px-10 py-4 flex flex-row content-center items-center justify-evenly border-b-[1px] border-black ">
        <div className="flex flex-row items-center content-center gap-2 text-3xl">
          <div>LOGO</div>
          <div className="font-lobster text-[#FF385C]">Stayinn</div>
        </div>
        <div className="flex flex-row items-center content-center gap-2 rounded-full py-2 px-4 border-[1px] border-black">
          <BiSearch className="text-2xl font-medium" />
          <input
            type="text"
            placeholder="Search city or Hotel"
            className="focus:outline-none"
          />
        </div>
        <div className="flex flex-row items-center content-center gap-2 rounded-full py-2 px-4 border-[1px] border-black">
          <GoLocation className="text-2xl font-medium" />
          <div>Current Location</div>
        </div>
        <div className="flex flex-row items-center content-center gap-2 rounded-full py-2 px-4 border-[1px] border-black">
          <GiHamburgerMenu className="text-2xl font-medium" />
          <BsPersonCircle className="text-2xl font-medium" />
        </div>
      </section>
      <div className="main-div px-10">
        <div className="grid grid-cols-2 gap-2 ">
          <div>Search Filter and Sorting</div>
          <div className="h-[60vh] bg-rose-500 ">
            <Map />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
          <HotelCard></HotelCard>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
