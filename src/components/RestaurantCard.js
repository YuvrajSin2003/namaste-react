import { useContext } from "react"; // Fixed: import useContext instead of 'use'
import { CDN_URL } from "../utils/contants";
import { useParams } from "react-router-dom";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { loggedinUser } = useContext(UserContext);
  const { redId } = useParams();
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;
  
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{loggedinUser}</h4>
    </div>
  );
};

// Higher Order Function - Fixed to pass props
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => { // Added props parameter
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} /> {/* Pass all props to wrapped component */}
      </div>
    );
  };
};

export default RestaurantCard;