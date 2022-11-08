import { configureStore } from '@reduxjs/toolkit'
import authUser from './auth/authUser.js'

export const store = configureStore({
    reducer: {
        auth: authUser,
    },
})