import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const API =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const { name, avgRating, cuisines, sla, cloudinaryImageId } = resData?.info;

  return (
    <div>
      <div className="w-[220px]  rounded-xl bg-[#202a36]">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant_image"
          className="h-[130px] w-full object-cover object-[60%_65%] rounded-xl pt-1 px-1"
        />
        <div className="p-2 font-barlow text-white flex flex-col gap-1">
          <h3 className="truncate">{name}</h3>
          <p>Rating: {avgRating}</p>
          <p className="truncate">{cuisines.join(", ")}</p>
          <p>{sla.slaString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
