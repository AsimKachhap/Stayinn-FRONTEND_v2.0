import React from "react";

const HotelCard = () => {
  const hotel = {
    id: 3857,
    name: "Shangri La",
    location: "Janpath New Delhi",
    startingPrice: 3375,
    displayImage:
      "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/9/9/%7B299F476C-FF02-4CA9-8DD7-2C7C3BE3CCA0%7DSLND_AboutHotel_Banner_1920x940.jpg?w=600&h=500&mode=crop&scale=both",
  };

  return (
    <div className="flex flex-col rounded-md">
      <div className=" object-cover "></div>
      <div></div>
    </div>
  );
};

export default HotelCard;
