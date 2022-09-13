import { createSlice } from "@reduxjs/toolkit"

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
