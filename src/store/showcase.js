import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

function waitForProgress(timeout){
    return new Promise((yep, non) => setTimeout(yep, timeout))
}

export const fetchProducts = createAsyncThunk('showcase/fetchProducts', async (url = '/api/products', rejectWithValue) => {
    try {
        const response = await fetch(url)
        await waitForProgress(2000)
        if(!response.ok) throw new Error('Во время загрузки списка продуктов произошла ошибка.')
        return await response.json()
    }
    catch(err){
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
        [fetchProducts.pending]: state => {
            state.status = 'loading'
            state.progressVisibility = true
            state.error = null
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.progressVisibility = false
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed'
            state.progressVisibility = false
            state.products = []
            state.error = action.payload
        }
    }
});

export const { actions, reducer } = showcaseSlice
export const { toggleSpoiled } = actions
