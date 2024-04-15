import React from 'react';
import { Card, Grid, Typography, CircularProgress, CssBaseline } from '@mui/material';
import moment from 'moment';
import { useGetNewsQuery } from '../services/cryptoNewsApi';

const CryptoNews = ({ simplified }) => {
  const { data: newsList, isFetching } = useGetNewsQuery();

  const demoImage = 'https://images.cointelegraph.com/images/840_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjQtMDQvYjZlNjQ4YzMtY2QxOS00ZmY5LTkzMGYtZDJhNDkyZjc2NDVkLmpwZw==.jpg';

  let newsData = [];
  if (newsList?.data && Array.isArray(newsList.data)) {
    newsData = simplified ? newsList.data.slice(0, 6) : newsList.data;
  }

  return (
    <>
      <div className='roots'>
        <CssBaseline />
        <div className="top">
          <Typography variant="h6">Top Crypto News</Typography>
        </div>
        <hr className='news-line'/>
        {isFetching ? (
          <div className='circular'><CircularProgress /></div>
        ) : (
          <Grid container className="currency-news">
            {newsData.map((news, index) => (
              <Grid item key={index}>
                <a href={news.url} target='_blank' rel='noreferrer' className="prop-link">
                  <Card className="card-news">
                    <div className='title-news'>
                      <Typography className='text' variant='subtitle1'>
                        <p>{news.title.length > 30 ? `${news.title.substring(0, 40)}...` : news.title}</p>
                      </Typography>
                    </div>
                    <img
                      className="image"
                      src={news?.thumbnail ? news?.thumbnail : demoImage}
                      style={{ maxHeight: 50, maxWidth: 100, margin: 10 }}
                      alt=''
                    />
                    <Typography variant="subtitle2">
                      <p>{news.description.length > 50 ? `${news.description.substring(0, 50)}...` : news.description}</p>
                    </Typography>
                    <div className='provider-container'>
                      <div className="avatar-con"></div>
                      <div className='moment'>
                        <Typography variant='subtitle1'>
                          {moment(news.createdAt).startOf('ss').fromNow()}
                        </Typography>
                      </div>
                    </div>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
};

export default CryptoNews;
