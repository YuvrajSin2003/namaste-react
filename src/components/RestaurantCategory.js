import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        console.log("Header clicked");
        setShowIndex(); // Call the function passed from parent
    };

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center bg-gray-50 shadow-lg p-4 my-4">
                <div className="flex justify-between cursor-pointer w-full" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards?.length || 0})
                    </span>
                    <span>{showItems ? "🔼" : "🔽"}</span>
                </div>
            </div>
            
            {/* Show items only when showItems is true */}
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;