import { useEffect, useState } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = (resId) => {
    //fetchdata

    const [resInfo , setResInfo] = useState(null);
    const api = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.31500&lng=83.00580&restaurantId=87263&catalog_qa=undefined&submitAction=ENTER";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(api + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;