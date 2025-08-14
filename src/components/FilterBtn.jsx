import React from "react";
import { restaurantData } from "../utils/ResData.js";

const FilterBtn = () => {
  const listOfRestuarants = [];

  function showTopRated() {
    alert(344);
  }

  return (
    <div>
      <button
        className="rounded-sm p-2 font-mono cursor-pointer bg-[#202a36] text-white mt-4 border border-black"
        onClick={showTopRated}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default FilterBtn;
