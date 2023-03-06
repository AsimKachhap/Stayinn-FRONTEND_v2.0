import React from "react";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <section className="Topbar ">Topbar</section>
      <div className="flex flex-row gap-2 ">
        <div>Hotel Cards</div>
        <div>Map</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
