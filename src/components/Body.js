import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState(resList);

  console.log("body rerender");

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

      // Dynamically find the card with restaurants
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

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/>  </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
