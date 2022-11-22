import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

function waitForProgress(timeout){
    return new Promise((yep, non) => setTimeout(yep, timeout))
}

export const fetchProducts = createAsyncThunk(
    'showcase/fetchProducts',
    async (url = '/api/products', rejectWithValue) => {
    try {
        console.log(url)
        const response = await fetch(url)
        await waitForProgress(2000)
        if (response.status === 401) {
            window.top.location = '/login'
        }
        if(!response.ok) throw new Error('Во время загрузки списка продуктов произошла ошибка.')
        console.log(response)
        return await response.json()
    }
    catch(err){
        rejectWithValue(err.message)
    }
})

export const addProduct = createAsyncThunk(
    'showcase/addProduct',
    async (params, rejectWithValue) => {
    try {
        const {title, price} = params
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, price})
        });
        if (response.status === 401) {
            window.top.location = '/login'
        }
        if (!response.ok) {
            throw new Error('Во время добавления продукта произошла ошибка.')
        }
        await waitForProgress(2000)

        if(!response.ok) throw new Error('Во время загрузки списка продуктов произошла ошибка.')

        return await response.json()

    } catch(err) {
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
        },

        [addProduct.pending]: state => {
            state.status = 'loading'
            state.progressVisibility = true
            state.error = null
        },
        [addProduct.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.progressVisibility = false
        },
        [addProduct.rejected]: (state, action) => {
            state.status = 'failed'
            state.progressVisibility = false
            state.error = action.payload
        }
    },

    reducers: {
        addProduct: (state, action) => {
            state.products = [action.payload, ...state.products]
        },
        deleteMushroom: (state, action) => {
            console.log(action)
            state.products = state.products.filter(item => item.id !== action.payload)
        }
    },
});

export const { actions, reducer } = showcaseSlice
export const { toggleSpoiled } = actions