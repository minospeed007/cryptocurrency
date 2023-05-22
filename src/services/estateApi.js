import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const estateApiHeaders={
    'X-RapidAPI-Key': '46f44f79a1msh6d1a47c39ed677fp1cd9a6jsn779aa9920912',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl= 'https://coinranking1.p.rapidapi.com'
const createRequest= (url)=>({url, headers: estateApiHeaders})

export const estateApi= createApi({
    reducerPath: 'estateApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder)=>({
       getEstate: builder.query({
        query: (count)=>createRequest(`/coins?limit=${count}`)
       }),
       getCryptodetail:builder.query({
        query:(coindId)=> createRequest(`/coin/${coindId}`)
    }),
    getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),


    } )
})

export const {
    useGetEstateQuery,useGetCryptodetailQuery,useGetCryptoHistoryQuery
} = estateApi