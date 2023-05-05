import React, { createContext, useReducer } from "react";

// function
import { sumItems } from "../helper/functions";

const initialState = {
  selectedItems: [],
  totalPrice: 0,
  itemCounter: 0,
  checkout: false,
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
        checkout: false,
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

      state.selectedItems[itemIndex].quantity = +action.count;

      return {
        ...state,
        ...sumItems(state.selectedItems),
        checkout: false,
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        checkout: false,
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
