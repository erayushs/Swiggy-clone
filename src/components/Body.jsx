import RestaurantCard from "./RestaurantCard.jsx";
import SearchBar from "./SearchBar.jsx";
import { restaurantData } from "../utils/ResData.js";
import FilterBtn from "./FilterBtn.jsx";
import { useState } from "react";

const Body = () => {
  const [resturantList, setResturantList] = useState(restaurantData);
  const [isfiltered, setIsFiltered] = useState(false);

  function toggleFilter() {
    if (isfiltered) {
      setResturantList(restaurantData);
      setIsFiltered(false);
    } else {
      const filteredList = restaurantData.filter(
        (res) => res.info.avgRating >= 4.4
      );

      setIsFiltered(!isfiltered);
      setResturantList(filteredList);
    }
  }

  return (
    <div className="">
      <div className="flex items-center gap-8">
        <SearchBar />
        {/* <FilterBtn /> */}

        <button
          className={`border p-2 mt-3 cursor-pointer rounded font-mono text-white  ${
            isfiltered ? "border-blue-500 bg-blue-500" : "border-black"
          }`}
          onClick={toggleFilter}
        >
          Top Rated Restuarants {isfiltered ? "X" : ""}
        </button>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8  2xl:grid-cols-8">
        {resturantList.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
