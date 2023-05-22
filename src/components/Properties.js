import React,{useState,useEffect} from 'react'
import {useGetEstateQuery} from '../services/estateApi'
import {CardMedia,CardContent, CssBaseline,Card, Grid,Input,
    Typography, CircularProgress,Select,MenuItem,FormControl,InputLabel} from '@mui/material'
import millify from 'millify'
import {Routes, Link , Route} from 'react-router-dom'
import{Container,Row,Col} from 'react-bootstrap';
 
const Properties=({simplified})=>{
    const count = simplified ? 12 : 100
    const {data: estateList, isFetching} = useGetEstateQuery(count)
    const [estate, setEstate]= useState([])
    const [search, setSearch]= useState('')
console.log(estateList)
    useEffect(()=>{
        
        const filteredData= estateList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLocaleLowerCase()))
        setEstate(filteredData)

    },[estateList, search])

    if(isFetching) return 'Loading'
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
    {estate?.map((coin,index)=>(
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
export default Properties