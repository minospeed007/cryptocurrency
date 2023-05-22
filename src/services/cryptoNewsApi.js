import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeader={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '46f44f79a1msh6d1a47c39ed677fp1cd9a6jsn779aa9920912',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  
}

const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest=(url)=>({url, headers:cryptoNewsApiHeader})

export const newsApi= createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder)=>({
       getNews: builder.query({
        query: ({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
       })
    } )
})


export const {
    useGetNewsQuery,
} = newsApi

