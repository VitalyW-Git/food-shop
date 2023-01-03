import { RootState } from "../store";

/** передаём созданные свойства */
export const selectPizzaData = (state: RootState) => state.pizza;
