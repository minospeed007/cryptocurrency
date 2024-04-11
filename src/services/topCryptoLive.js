import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoLiveApiHeader = {
    'X-RapidAPI-Key': '46f44f79a1msh6d1a47c39ed677fp1cd9a6jsn779aa9920912',
    'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
};

const baseUrl ='https://crypto-update-live.p.rapidapi.com';

const createRequest = (url) => ({
  url,
  headers: cryptoLiveApiHeader,
});


  
  export const cryptoLiveApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getNews: builder.query({
        query:(count)=>createRequest(`/cointelegraph?limit=${count}`)
  
      })
    })
  });
  
  export const {
    useGetCrytoLiveQuery,
  } = cryptoLiveApi;
  