import {CDN_URL} from "../utils/contants";

const ItemList = ({ items }) => {
  console.log("Items received:", items);
  console.log("Items length:", items?.length);
  
  if (!items || !Array.isArray(items) || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div>
      {items.map((item) => {
        console.log("Item:", item);
        
        // Add safety checks for item structure
        if (!item?.card?.info?.id) {
          console.warn("Item missing required properties:", item);
          return null;
        }

        const itemInfo = item.card.info;
        
        return (
          <div key={itemInfo.id} className="p-2 m-2 border-black border-b-2 text-left">
            {itemInfo.imageId && (
              <img 
                src={CDN_URL + itemInfo.imageId} 
                alt={itemInfo.name || 'Food item'} 
                className="w-20 h-20" 
              />
            )}
            <button className="bg-gray-200 p-1 rounded-md">Add+</button>
            <div className="p-2 flex justify-between items-center">
              <span>{itemInfo.name || 'Unknown item'}</span>
              <span>₹{itemInfo.price ? (itemInfo.price / 100).toFixed(2) : 'N/A'}</span>
            </div>
            {itemInfo.description && (
              <p className="text-xs">{itemInfo.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;