import React from "react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const HotelCard = () => {
  const hotel = {
    id: 3857,
    name: "Shangri La",
    location: "Janpath New Delhi",
    startingPrice: 3375,
    displayImage:
      "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/9/9/%7B299F476C-FF02-4CA9-8DD7-2C7C3BE3CCA0%7DSLND_AboutHotel_Banner_1920x940.jpg?w=600&h=500&mode=crop&scale=both",
  };

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col bg-[#f9f9f9] border-[1px] border-black rounded-md">
      <div className=" object-cover rounded-t-md ">
        <img className="rounded-t-md" src={hotel.displayImage} alt="hotel" />
      </div>
      <div className="flex flex-row justify-between p-3">
        <div>
          <h3 className="text-2xl font-bold">{hotel.name}</h3>
          <div className="flex flex-row items-center ">
            <MdLocationOn className="text-yellow-500 text-2xl -ml-[8px]" />
            <div>{hotel.location}</div>
          </div>
          <p className=" text-neutral-500 uppercase font-semibold ">
            Starts at &#8377; {hotel.startingPrice} / Night
          </p>
        </div>

        <div
          className={`h-[35px] w-[35px]  z-10 cursor-pointer rounded-md flex items-center justify-center ${
            isLiked ? "bg-pink-200" : "bg-neutral-200"
          }`}
        >
          {isLiked ? (
            <AiFillHeart
              className="text-pink-600 h-[30px] w-[30px] "
              onClick={() => setIsLiked(false)}
            />
          ) : (
            <AiOutlineHeart
              className=" text-neutral-600 h-[30px] w-[30px] bg-transparent"
              onClick={() => setIsLiked(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
