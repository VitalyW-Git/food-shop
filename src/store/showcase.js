import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

function waitForProgress(timeout){
    return new Promise((yep, non) => setTimeout(yep, timeout))
}

export const fetchProducts = createAsyncThunk(
    'showcase/fetchProducts',
    async (url = 'products.json', rejectWithValue) => {
    try {
        const response = await fetch(url)
        await waitForProgress(2000)
        if(!response.ok) {
            throw new Error('Во время загрузки списка продуктов произошла ошибка.')
        }
        return await response.json()
    }
    catch(err) {
        /** параметр для отлова ошибки */
        rejectWithValue(err.message)
    }
})

const showcaseSlice = createSlice({
    name: 'showcase',
    initialState: {
        products: [],
        progressVisibility: false,
        status: 'idle',
        error: null
    },

    extraReducers: {
        // идёт загрузка, запрос запущен метод ещё ничего не вернул
        [fetchProducts.pending]: state => {
            state.status = 'loading'
            state.progressVisibility = true
            state.error = null
        },
        // успешно полученные данные
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.progressVisibility = false
            state.products = action.payload
        },
        // обработка ошибок
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed'
            state.progressVisibility = false
            state.products = []
            state.error = action.payload
        }
    }
});

export const { actions, reducer } = showcaseSlice