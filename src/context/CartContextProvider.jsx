import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  totalPrice: 0,
  itemCounter: 0,
  checkout: false,
};

const sumItems = (items) => {
  console.log(items);
  const itemCounter = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.attributes.price,
    0
  );

  console.log(totalPrice);

  return { itemCounter, totalPrice };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const findItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );

      if (!findItem) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        checkout: false,
        ...sumItems(state.selectedItems),
      };

    case "REMOVE_ITEM":
      const filterSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...filterSelectedItems],
        checkout: false,
        ...sumItems(filterSelectedItems),
      };

    case "PRODUCT_COUNT":
      const itemIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
        console.log(state.selectedItems[itemIndex]);
      state.selectedItems[itemIndex].quantity = +action.count;
      sumItems(state.selectedItems);
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
  }
};

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
