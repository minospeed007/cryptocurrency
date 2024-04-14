import React, { useState, useEffect } from 'react';
import axios from 'axios';
import millify from 'millify'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        headers: {
          'X-RapidAPI-Key': '46f44f79a1msh6d1a47c39ed677fp1cd9a6jsn779aa9920912',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
        
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setCrypto(response.data); // Set the fetched data to state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Pass an empty dependency array to run this effect only once

  let cryptoData = [];
  if (crypto && crypto.data && Array.isArray(crypto.data.coins)) {
    cryptoData = crypto.data.coins.slice(0, 4);
    console.log(cryptoData[0].name, 'crypto data');
  }
  
  return (
    <>
     
      <div className='nav-div'>
      
             <div className='logo-img'>
             <img src={logo}  className='log__img' alt='client_img'/>

          <h3 className='logo'>CRYPTOKONG</h3>
        
                  </div>
        <div className='nav-divs'>
        <div className='crypto-card'>
          {/* BTC */}
          {cryptoData.length > 0 && (
            <div className='crypto-desc'>
              <div>
              <p className='p-text'>{cryptoData[0].symbol}</p>
                <p className='p-text'>Price ${millify(cryptoData[0].price)}</p>
                <p className='p-text'>24hV ${millify(cryptoData[0]['24hVolume'])}</p>
                <p className='p-text'>Change <span className={cryptoData[0].change > 0 ? 'green-text' : 'red-text'}>{millify(cryptoData[0].change)}%</span></p>
              </div>
            </div>
          )}
  
          {cryptoData.length > 1 && (
            <div className='crypto-desc'>
              <div>
              <p className='p-text'>{cryptoData[1].symbol}</p>
                <p className='p-text'>Price ${millify(cryptoData[1].price)}</p>
                <p className='p-text'>24hV ${millify(cryptoData[1]['24hVolume'])}</p>
                <p className='p-text'>Change <span className={cryptoData[1].change > 0 ? 'green-text' : 'red-text'}>{millify(cryptoData[1].change)}%</span></p>
              </div>
            </div>
          )}
  
          {/* BNB */}
          {cryptoData.length > 2 && (
            <div className='crypto-desc'>
              <div>
                <p className='p-text'>{cryptoData[2].symbol}</p>
                <p className='p-text'>Price ${millify(cryptoData[2].price)}</p>
                <p className='p-text'>24hV ${millify(cryptoData[2]['24hVolume'])}</p>
                <p className='p-text'>Change <span className={cryptoData[2].change > 0 ? 'green-text' : 'red-text'}>{millify(cryptoData[2].change)}%</span></p>
              </div>
            </div>
          )}
        </div>
        </div>

      </div>
    </>
  );
       
}

export default Navbar;
