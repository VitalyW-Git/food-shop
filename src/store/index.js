import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as showcaseReducer } from './showcase.js'
import { reducer as basketReducer } from './basket.js'

const rootReducer = combineReducers({
    showcase: showcaseReducer,
    basket: basketReducer
})

export const store = configureStore({ 
    reducer: rootReducer
})
