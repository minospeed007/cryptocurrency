import React,{useState,useEffect} from 'react'
import {useGetCryptoQuery} from '../services/cryptoApi'
import {Card, Grid,Input,
    Typography, CircularProgress} from '@mui/material'
import millify from 'millify'
import { Link } from 'react-router-dom'
 
const Cryptocurrencies=({simplified})=>{
    const count = simplified ? 12 : 100
    const {data: cryptoList, isFetching} = useGetCryptoQuery(count)
    const [crypto, setCrypto]= useState([])
    const [search, setSearch]= useState('')
console.log(cryptoList)
    useEffect(()=>{
        
        const filteredData= cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLocaleLowerCase()))
        setCrypto(filteredData)

    },[cryptoList, search])

    if(isFetching) return <div className='circular'><CircularProgress/></div>
    return(<>
    {!simplified && (
        <div className='search-crypto'>
        <Input className='search-input'
         placeholder='search crypto' 
          onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    )}
    <div >
    <Grid container className="currency-container">
    {crypto?.map((coin,index)=>(
        <Grid item key={index} className='grid-card'>
            <Link  key={coin.uuid} to={`/crypto/${coin.uuid}`} className="prop-link">
                 
                  <Card className='card'>
                  <div className='image-con'>
                  <img className="image" src={coin?.iconUrl} alt=''/>

                  </div>
                    <Typography variant='subtitle2'>
                    <p>Rank: {coin.rank}</p>
                    </Typography>
                    <Typography variant='subtitle2'>
                   <p> name: {coin.name}</p>
                    </Typography>
      <Typography variant="subtitle2" >
        <p  > Price: ${millify(coin.price)}
        </p>
      </Typography>
    
                    <Typography variant='subtitle2'>
                   <p> market cap: ${millify(coin.marketCap)}</p>
                    </Typography>
                </Card>
            </Link>
        </Grid>
    ))}
    
    </Grid >
    {simplified &&(
        <div className="mor">
    <Link to='/properties'className="more2">show more</Link>
    </div>

    )}
    </div>
    </>)
}
export default Cryptocurrencies