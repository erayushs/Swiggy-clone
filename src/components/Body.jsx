import RestaurantCard from "./RestaurantCard.jsx";
import SearchBar from "./SearchBar.jsx";
import FilterBtn from "./FilterBtn.jsx";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer.jsx";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [dummyList, setDummyList] = useState([]);
  const [isfiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4371831&lng=80.2885113&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const resListFromAPI =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log("Fetched Restaurants: ", resListFromAPI);

    console.log(json);

    setResturantList(resListFromAPI);
    setDummyList(resListFromAPI);
  };

  function toggleFilter() {
    if (isfiltered) {
      setDummyList(resturantList);
      setIsFiltered(false);
    } else {
      const filteredList = dummyList.filter((res) => res.info.avgRating >= 4.4);

      setIsFiltered(!isfiltered);
      setDummyList(filteredList);
    }
  }

  return dummyList.length === 0 || dummyList === undefined ? (
    <Shimmer />
  ) : (
    <div className="">
      {/* {console.log("JSX Rendered:" + dummyList.length)} */}
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
        {dummyList.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
