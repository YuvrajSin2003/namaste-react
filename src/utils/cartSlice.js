import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        // add item is the dispatch action ad function pass through 
        // the addItem is the educe function to edit the slice of react store
        addItem:(state , action) => {
            //mutating the state
            state.items.push(action.payload);
        },
        removeItem:(state , action) => {
            state.items.pop();
        },
        clearCart:(state , action) => {
            state.items.length = 0;
        },
    },
});

export const {addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;