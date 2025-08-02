import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState(resList);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // RestaurantCard is a components and is input to withPromotedLabel and this return will stored in RestaurantCardPromoted
  

  console.log("body rerender" ,listOfRestaurant );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.31500&lng=83.00580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log("Full API response:", json);

      let restaurants = [];
      if (json?.data?.cards && Array.isArray(json.data.cards)) {
        for (const card of json.data.cards) {
          const possibleRestaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (possibleRestaurants && Array.isArray(possibleRestaurants)) {
            restaurants = possibleRestaurants;
            break;
          }
        }
      }
      console.log("Extracted restaurants:", restaurants);
      setlistOfRestaurant(restaurants);
      setfilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setlistOfRestaurant([]);
      setfilteredRestaurant([]);
    }
  };

  const onlineState = useOnlineState();

  if (onlineState === false)
    return <h1>Looks like you are not connected to the internet</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search m-4 , p-4 ">
          <input
            type="text"
            className="rounded border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 bg-green-100 m-4 rounded border border-black"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        <button
          className="px-4 bg-gray-100 m-4 rounded border border-black"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurant(filteredList);
            console.log("Filtered List:", filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
            {/* {restaurant.data.promoted ? (<RestaurantCardPromoted />) : ( <RestaurantCard resData={restaurant} />)} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
