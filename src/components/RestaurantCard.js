import { use } from "react";
import { CDN_URL } from "../utils/contants";
import { useParams } from "react-router-dom";


const RestaurantCard = (props) => {
    const {redId} = useParams();
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo , sla} = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400" >
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
            
        </div>
    );
};
//higher order functino

//input--> RestaurantCard output --> RestaurantCard promoted

export const withPromotedLabel = (RestaurantCard) => {
    return() => {
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard/>
            </div>
        );
    };
};


export default RestaurantCard;