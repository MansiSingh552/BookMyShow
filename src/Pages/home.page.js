import React from "react";

import EntertainmentCardSlider from "../Components/Entertainment/entertainmentCard.component";
import PremierImages from "../config/TempPoster.config";

import PosterSlider from "../PosterSlider/PosterSlider.component";

const HomePage = () => {
  return (
  <>
  <div className="container px-20 my-14 ">
  <h1 className="text-2xl font-bold text-gray-800">
  The best of Entertainment
  </h1>
  <EntertainmentCardSlider />
  </div>

  <div className="bg-navCol-200 py-16 w-full">
  <div className="flex  px-20 ">
   <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
   alt="Rupay"
   className="w-full h-full"
    />
  </div>
  <PosterSlider heading="Premiers" subHeading="Brand new release every friday" isDark images="PremierImage"/>
</div>

    <PosterSlider heading="Online Streaming Events" isDark={false} images="PremierImage"/>

    <PosterSlider heading="Online Streaming Events" isDark={false} images="PremierImage"/>

    <PosterSlider heading="Online Streaming Events" isDark={false} images="PremierImage"/>
    <PosterSlider heading="Online Streaming Events" isDark={false} images="PremierImage"/>
  </>
);
};

export default HomePage;