const resList = [
  {
    info: {
      id: "435680",
      name: "Pizza Hut",
      cloudinaryImageId: "img1.jpg",
      locality: "Lallapura",
      areaName: "Chetganj",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "8.3K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-16 04:00:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "87263",
      name: "KFC",
      cloudinaryImageId: "img2.jpg",
      locality: "Sigra",
      areaName: "Varanasi",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.0,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-16 05:00:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "433786",
      name: "The Good Bowl",
      cloudinaryImageId: "img3.jpg",
      locality: "Mahmoorganj",
      areaName: "Raja Moti Chand Road",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "North Indian"],
      avgRating: 4.4,
      parentId: "7918",
      avgRatingString: "4.4",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-15 23:59:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "700101",
      name: "Burger King",
      cloudinaryImageId: "img4.jpg",
      locality: "Sigra",
      areaName: "Varanasi",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 3.9,
      parentId: "600",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-16 03:00:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "700102",
      name: "Subway",
      cloudinaryImageId: "img5.jpg",
      locality: "Cantt",
      areaName: "Varanasi",
      costForTwo: "₹300 for two",
      cuisines: ["Sandwich", "Healthy Food"],
      avgRating: 4.1,
      parentId: "800",
      avgRatingString: "4.1",
      totalRatingsString: "3K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-16 01:00:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "700103",
      name: "Biryani Blues",
      cloudinaryImageId: "img6.jpg",
      locality: "Lanka",
      areaName: "Varanasi",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Hyderabadi"],
      avgRating: 4.5,
      parentId: "900",
      avgRatingString: "4.5",
      totalRatingsString: "6K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-16 00:30:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "700104",
      name: "Behrouz Biryani",
      cloudinaryImageId: "img7.jpg",
      locality: "Sigra",
      areaName: "Varanasi",
      costForTwo: "₹600 for two",
      cuisines: ["Biryani", "Mughlai"],
      avgRating: 4.6,
      parentId: "1000",
      avgRatingString: "4.6",
      totalRatingsString: "7K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 3.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-16 01:30:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "700105",
      name: "Faasos",
      cloudinaryImageId: "img8.jpg",
      locality: "Bhelupur",
      areaName: "Varanasi",
      costForTwo: "₹250 for two",
      cuisines: ["Wraps", "Snacks"],
      avgRating: 3.8,
      parentId: "1100",
      avgRatingString: "3.8",
      totalRatingsString: "2K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-15 23:30:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "700106",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "img9.jpg",
      locality: "DLW",
      areaName: "Varanasi",
      costForTwo: "₹450 for two",
      cuisines: ["Pizzas", "Italian"],
      avgRating: 4.0,
      parentId: "1200",
      avgRatingString: "4.0",
      totalRatingsString: "4K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-16 02:00:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "700107",
      name: "Kwality Walls",
      cloudinaryImageId: "img10.jpg",
      locality: "Sigra",
      areaName: "Varanasi",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      parentId: "1300",
      avgRatingString: "4.7",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-15 23:45:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  },
  {
    info: {
      id: "700108",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "img11.jpg",
      locality: "Cantonment",
      areaName: "Varanasi",
      costForTwo: "₹350 for two",
      cuisines: ["Cafe", "Beverages"],
      avgRating: 4.1,
      parentId: "1400",
      avgRatingString: "4.1",
      totalRatingsString: "4K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2025-07-16 03:00:00", opened: true },
      isOpen: true,
      type: "F",
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
  }
];

export default resList;
