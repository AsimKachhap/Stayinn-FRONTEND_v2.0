import React from "react";
import Footer from "../components/Footer";
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="">
      <div className="main-div px-10">
        <section className="Topbar py-2 flex flex-row content-center items-center justify-evenly ">
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
        <div className="grid grid-cols-2 gap-2 ">
          <div>Hotel Cards</div>
          <div>Map</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
