import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full px-10 py-4 flex flex-row border-t-[1px] border-neutral-400 justify-between ">
      <div>
        <span> &#169;</span> 2023 Stayinn Inc
      </div>
      <div>
        This Site is developed by <span>Asim Kachhap</span>.
      </div>
    </div>
  );
};

export default Footer;
