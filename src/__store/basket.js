import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {fetchProducts} from "./showcase.js";

export const addNewProduct = createAsyncThunk(
    'basket/addNewProduct',
    async function (params, {rejectWithValue, dispatch}) {
        try {
            const id = params.id
            const title = params.titleValue
            const price = params.priceValue
            const response = await fetch('/api/products', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id, title, price})
            });
            if (response.status === 401) {
                window.top.location = '/login'
            }
            if (!response.ok) {
                throw new Error('Во время обновления продукта произошла ошибка');
            }

            const data = await response.json();
            if (data) {
                dispatch(fetchProducts('/api/products'))
            }
            if (!data) {
                throw new Error('Во время обновления продукта произошла ошибка');
            }

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const showcaseSlice = createSlice({
    name: 'basket',
    initialState: {
        total: 0,
        isSpoiled: false
    },
    reducers: {
        addMushrooms: (state, action) => {
            const { payload } = action
            state.total = state.total + payload
        },
        toggleSpoiled: state => {
            state.isSpoiled = !state.isSpoiled
        }
    },

})

export const { actions, reducer } = showcaseSlice
