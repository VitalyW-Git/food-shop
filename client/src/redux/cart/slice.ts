import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import calcTotalPrice from "../../utils/calcTotalPrice";
import getCartFromLS from "../../utils/getCartFromLS";
import { CartItem, CartSliceState } from "./types";

/** items ранее добавленные в localStorage */
const initialState: CartSliceState = getCartFromLS();

/** методы для использование с корзиной */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /** добавление товара */
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      /** пересчёт заказ */
      state.totalPrice = calcTotalPrice(state.items);
    },
    /** минус продукт в корзине */
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count -= 1;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    /** удаление позицыи в заказе */
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    /** чистим корзину */
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
