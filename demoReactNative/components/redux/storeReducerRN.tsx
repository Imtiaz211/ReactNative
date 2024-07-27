import { configureStore } from '@reduxjs/toolkit'
import rootReducerRN from './rootReducerRN'
const store = configureStore({
    reducer: rootReducerRN
})
export default store