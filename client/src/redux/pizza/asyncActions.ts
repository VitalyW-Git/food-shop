import { identity } from "lodash";
import { pickBy } from "lodash";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

/** формируем данные для заполнения карточек pizza */
export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Pizza[]>(
      `https://626d16545267c14d5677d9c2.mockapi.io/items`,
      {
        params: pickBy(
          {
            page: currentPage,
            category,
            sortBy,
            order,
            search,
            limit: 4,
          },
          identity,
        ),
      },
    );
    return data;
  },
);
