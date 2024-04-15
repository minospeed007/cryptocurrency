import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables);
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName,cryptoHis,cryptoHist,cryptoHisPri }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < cryptoHist; i += 1) {
    coinPrice.push(cryptoHisPri[i].price);
  }
  console.log(coinPrice)
console.log(coinHistory?.data?.change)
  for (let i = 0; i < cryptoHist; i += 1) {
    coinTimestamp.push(new Date(cryptoHisPri[i].timestamp).toLocaleDateString());
  }
  console.log(coinTimestamp)


  
  return (
    <>

      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
        <Title level={5} className='current-price'>Change <span className={cryptoHis > 0 ? 'green-text' : 'red-text'}>
          {cryptoHis}%</span></Title>

          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <div className='line8'>

      <div className='line-div'>
      <Line data={{
    labels:coinTimestamp,
    datasets:[{
        label:' coin price in usd',
        data:coinPrice,
        backgroundColor:'#0071bd',
        borderColor:'#0071bd'
    }]
}}
options={{maintainAspectRatio:false}}
/>
</div>
</div>
    </>
  );
};

export default LineChart;

