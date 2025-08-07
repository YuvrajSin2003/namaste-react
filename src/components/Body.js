import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState(resList);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineState = useOnlineState();

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
          const possibleRestaurants =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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

  if (onlineState === false)
    return <h1>Looks like you are not connected to the internet</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          {/* Search Bar */}
          <input
            type="text"
            className="rounded border border-black"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 m-4 rounded border border-black"
            onClick={() => {
              const filtered = listOfRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Search
          </button>

          {/* Top Rated Filter */}
          <button
            className="px-4 bg-gray-100 m-4 rounded border border-black"
            onClick={() => {
              const filtered = listOfRestaurant.filter(
                (res) => res?.info?.avgRating > 4
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Top Rated Restaurants
          </button>

          {/* Username Update */}
          <div className="w-80 flex items-center gap-2 mt-4">
            <label className="font-semibold">Username:</label>
            <input
              className="border border-black p-2 rounded w-full"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* If no results found */}
      {filteredRestaurant.length === 0 && (
        <h2 className="m-4 p-4 text-red-500 font-bold">
          No Restaurants match your filter!
        </h2>
      )}

      {/* Restaurant List */}
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
