import React, {useState} from 'react'
import HTMLReactParser from 'html-react-parser';
import {LineChart} from '../components'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined,
     StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, InfoOutlined }
      from '@ant-design/icons';
import {CircularProgress} from '@mui/material'
import {useParams} from 'react-router-dom';
import {useGetCryptodetailQuery,useGetCryptoHistoryQuery} from '../services/cryptoApi'
import  millify from 'millify'
import {Col,Row,Typography,Select} from 'antd';

const {Text,Title}= Typography
const {Option} = Select

const Cryptodetail=()=>{
const {coinId} = useParams()
const [timeperiod, setTimeperiod] = useState('5y')
const  {data,isFetching}= useGetCryptodetailQuery(coinId)
const  {data:coinHistory}= useGetCryptoHistoryQuery({coinId,timeperiod})
console.log(coinHistory)
console.log(timeperiod)
const cryptodetail= data?.data?.coin
const cryptoHis= coinHistory?.data?.change
const cryptoHist= coinHistory?.data?.history?.length
const cryptoHisPri= coinHistory?.data?.history

console.log(cryptodetail)

console.log(cryptoHist)


  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptodetail?.price && millify(cryptodetail?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptodetail?.rank, icon: <NumberOutlined /> },
    { title: 'Symbol ', value: ` ${cryptodetail?.symbol}`, icon: <InfoOutlined /> },

    { title: 'Market Cap', value: `$ ${cryptodetail?.marketCap && millify(cryptodetail?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptodetail?.allTimeHigh?.price && millify(cryptodetail?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptodetail?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptodetail?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptodetail?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptodetail?.supply?.total && millify(cryptodetail?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptodetail?.supply?.circulating && millify(cryptodetail?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  console.log(data)
    return(<>
    {isFetching ? (
      <div className="circular">
  <CircularProgress size='2rem'/>
  </div>
    ):(<>

    
        <Col className='coin-detail-container'>
        <Col className="coin-heading-container">
        <img className='icon-img' src={cryptodetail?.iconUrl} alt=''/>
          <Title level={2} classNmae="coin-name">
            {cryptodetail?.name} ({cryptodetail?.symbol}) price
          </Title>
          <p>{cryptodetail?.name} live price in US Dollars.
           view statistics, marketcap and supply</p>
        </Col>
         <Select defaultValue="7d" className="select-timeperiod" 
         placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
        {time.map((date) => <Option key={date}>{date}</Option>)}
      </Select>
        <LineChart cryptoHistory={coinHistory} 
        currentPrice={millify(cryptodetail?.price)}
        coinName={cryptodetail?.name}
      cryptoHis={cryptoHis} cryptoHist={cryptoHist} cryptoHisPri={cryptoHisPri}/>

        
     <Col className='stats-container'>
           <Col className='coin-value-statistics'>
           <Col className='coin-value-statistics-heading'>
            <Title level={3} className='coin-detail-heading'>
            {cryptodetail?.name} value statistics
            </Title>
            <p> An overview showing the stats {cryptodetail?.name} </p>
           </Col>
            {stats?.map(({icon,title,value})=>(
              <Col className="coin-stats">
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
              </Col>
            ))}
           </Col>
           <Col className='other-stats-info'>
           <Col className='coin-value-statistics-heading'>
            <Title level={3} className='coin-details-heading'>
            Other Stats
            </Title>
            <p> An overview showing the stats of other cryptocurrencies</p>
           </Col>
            {genericStats?.map(({icon,title,value})=>(
              <Col className="coin-stats" >
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
              </Col>
            ))}
           </Col>


     </Col>
        <Col className='coin-desc-link'>
          <Row className="coin-desc">
            <Title level={3} className="coin-details-heading">
              What is {cryptodetail?.name}?
             <p className='descript'>
              {HTMLReactParser(`${cryptodetail?.description}`)}</p>
            </Title>
          </Row>
          <Col className="coin-links">
            <Title level={3} className='coin-details-heading'>
              {cryptodetail?.name} Links
            </Title>
            {cryptodetail?.links?.map((link)=>(
              <Row className='coin-link' key={link?.name}>
                <Title level={5} className='link-name'>
                  {link?.type}
                </Title>
                <a href={link.url} target='_blank' rel='noreferrer'>{link?.name}</a>
              </Row>
            ))}
          </Col>
        </Col>
        </Col>
        </>)}
    </>)
}
export default Cryptodetail