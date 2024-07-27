import { configureStore } from '@reduxjs/toolkit'
import rootReducerRN from './rootReducerRN'

import createSagaMiddleware from 'redux-saga'
import sagaData from './sagaReactNative'


const sagaMiddleWare = createSagaMiddleware()


const store = configureStore({
    reducer: rootReducerRN,
    middleware: () => [sagaMiddleWare]
})
sagaMiddleWare.run(sagaData)
export default store