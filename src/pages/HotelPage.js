import React from "react";
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";

const HotelPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="Topbar px-10 py-4 flex flex-row content-center items-center justify-between border-b-[1px] border-black ">
        <div className="flex flex-row items-center content-center gap-2 text-3xl">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            LOGO
          </div>
          <div
            className="font-lobster text-[#FF385C] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Stayinn
          </div>
        </div>
        <div className="flex flex-row items-center content-center gap-2 rounded-full py-2 px-4 border-[1px] border-black">
          <GiHamburgerMenu className="text-2xl font-medium" />
          <BsPersonCircle className="text-2xl font-medium" />
        </div>
      </section>
    </div>
  );
};

export default HotelPage;
