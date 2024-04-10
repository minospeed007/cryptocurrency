import {configureStore} from '@reduxjs/toolkit'
import {cryptoApi} from '../services/cryptoApi'
import {newsApi} from '../services/cryptoNewsApi'
import {cryptoLiveApi} from '../services/topCryptoLive'


export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [cryptoLiveApi.reducerPath]:cryptoLiveApi.reducer,


    },
})