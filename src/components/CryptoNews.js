import React, {useState,useEffect} from 'react'
import { Select, Col} from 'antd'
import { Card, MenuItem, Grid, Typography, CssBaseline} from '@mui/material'
import moment from 'moment'
import {useGetNewsQuery} from '../services/cryptoNewsApi'
import {useGetEstateQuery} from '../services/estateApi'

const {Option} = Select;


const CryptoNews=({simplified})=>{
  const[newsCategory,setNewsCategory]=useState('cryptocurrency')

  const {data:newsList, isFetching}= useGetNewsQuery({newsCategory ,count:simplified ? 6:12})
  const {data} = useGetEstateQuery(100)

  const demoImage='https://www.bing.com/th?id=OVFT.WKdmIb79OplobsgczOYuJC&pid=News' 
  if (!newsList?.value) return 'Loading....'

    return(<>

    {!simplified && (
      <div className="select-div">
      <Col span={24}>
      <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
          </Col>
          </div>
    )}
    <div>
    <CssBaseline/>
      <div className="top">
         <Typography variant="h6" >Top Crypto News</Typography>
         
         

   </div>
   <hr style={{ color:'blue',height:'5px'}}/>

     <Grid container className="currency-news" >

    {newsList?.value.map((news, i)=>(
        <Grid item key={i}>
               
            <a href={news.url} target='_blank' rel='noreferrer' className="prop-link">
             <Card className="card-news">
             <Typography className='text' variant='subtitle2'>
                    <p>{news.name.length > 30 ? news.name.substring(0, 40) +
            '...' : news.name}</p>
                    </Typography>
                <img className="image" src={news?.image?.thumbnail?.contentUrl ? news?.image?.thumbnail?.contentUrl
                : demoImage}
 
                               style={{maxHeight:50,maxWidth:100, margin:10 }}
                                        alt=''/>
                    
                    <Typography variant="subtitle2">
                    
                    <p> {news.description.length > 50 ? news.description.substring(0, 50) +
            '...' : news.description}</p>
                    </Typography>
                    <div className='provider-container'>
        
     <div className="avatar-con">
     <img className="avatar" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" / >
     </div>
     <div className='moment'>
     <Typography variant='subtitle1'>
                     {moment(news.datePublished).startOf('ss').fromNow()}
                     </Typography>
     </div>
                    
     </div>                     
                </Card>
                </a>

        </Grid>
    ))}
    </Grid>
    </div>

    </>)
}

export default CryptoNews;