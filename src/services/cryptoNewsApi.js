import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeader = {
  'X-RapidAPI-Key': '46f44f79a1msh6d1a47c39ed677fp1cd9a6jsn779aa9920912',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl ='https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest = (url) => ({
  url,
  headers: cryptoNewsApiHeader
});

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query:(count)=>createRequest(`/cointelegraph?limit=${count}`)

    })
  })
});

export const {
  useGetNewsQuery,
} = newsApi;
