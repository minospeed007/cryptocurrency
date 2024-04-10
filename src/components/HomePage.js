import React, {useState, useEffect,useRef}  from 'react'
import {CardMedia,CardContent,CardActions, CssBaseline,Card,Button, Grid,Input,
    Typography, CircularProgress} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Routes, Link , Route} from 'react-router-dom'
import {useGetCryptoQuery} from '../services/cryptoApi'
import millify from 'millify'
import{Cryptocurrencies} from '../components'
import {CryptoNews} from '../components'
// home page component
const HomePage=()=>{
  const {data, isFetching}= useGetCryptoQuery(10)
  const globalStat= data?.data?.stats
  const num= globalStat?.totalMarketCap
    const prev= useRef(null)

    useEffect(()=>{
prev.current= num
    },[ num])
   //const count= simplified ? 10 :100
    const stat_num= 1035864045069
    return(<>
    
    <CssBaseline/>
        {isFetching ? (
  <div className="circular">
  <CircularProgress size='2rem'/>
  </div>
):(<>
<div className='global'>

    <Typography variant="h6">Global Crypto Stats</Typography>
    </div>
    
    
    {num > stat_num ? (
      <CardContent >
      
      <Typography variant="subtitle2">
        <p> Total: ${millify(globalStat?.total)}</p>
      
      <p>Total Markets: ${millify(globalStat?.totalMarkets)}</p>

        <p> Total 24h volume: ${millify(globalStat?.total24hVolume)}</p>
      
        <p className="arrow-div" > Total marketCap: ${millify(globalStat?.totalMarketCap)}
        </p><p className="arrow-green arrow-div"><ArrowUpwardIcon className="arrow-green"/>
        </p>
      </Typography>
      </CardContent>
    ):(<CardContent>
      
      <Typography variant="subtitle2">
        <p> Total: ${millify(globalStat?.total)}</p>
      
      <p>Total Markets: ${millify(globalStat?.totalMarkets)}</p>
      <p> Total 24h volume: ${millify(globalStat?.total24hVolume)}</p>

      
        <p> Total marketCap: ${millify(globalStat?.totalMarketCap)}
        </p><p className="arrow arrow-div"><ArrowDownwardIcon /></p> 
      </Typography>
      </CardContent>) }
      
      
      
  <Grid container className='container'>
  <Typography className='global' variant='h6'>Top 12 Cryptocurrencies</Typography>


 

    </Grid>
    
    <Cryptocurrencies simplified/>
    
    

    
    <CryptoNews simplified/>

    
    <div >
    <Link to='/CryptoNews'className="more">show more</Link>

    </div>
</>)
}

    </>)
}
export default HomePage