import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if(resInfo === null) return <Shimmer/>;


  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
    

  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
   
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categoriles = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"] === 
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log("categoriles", categoriles);
  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold ">{cuisines?.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      {categoriles.map((category) =>  <RestaurantCategory data={category?.card?.card }/>)}
      
    </div>
  );
};

export default RestaurantMenu;