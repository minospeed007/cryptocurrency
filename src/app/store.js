import {configureStore} from '@reduxjs/toolkit'
import {estateApi} from '../services/estateApi'
import {newsApi} from '../services/cryptoNewsApi'

export default configureStore({
    reducer:{
        [estateApi.reducerPath]: estateApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,

    },
})