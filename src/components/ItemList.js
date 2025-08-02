const ItemList = ({ items }) => {
  // Add these debug logs
  console.log("Items received:", items);
  console.log("Items length:", items?.length);
  
  // Safety check
  if (!items || !Array.isArray(items)) {
    return <div>No items to display</div>;
  }

  return (
    <div>
      {items.map((item) => {
        console.log("Item:", item); // Debug each item
        return (
          <div key={item.card.info.id} className="p-2 m-2 border-black border-b-2">
            <div>
              <span>{item.card.info.name}</span>
              <span>₹{(item.card.info.price / 100).toFixed(2)}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;