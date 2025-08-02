import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    console.log("data", data);
    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center bg-gray-100 p-4 my-4">
                <div>
                    <span className="font-bold text-lg">
                        {data.title} {data.itemCards.length}
                    </span>
                    <span> 🔽</span>
                </div>
            </div>

            {/* ItemList - moved outside the header */}
            <ItemList items={data.itemCards} />
        </div>
    );
};

export default RestaurantCategory;
