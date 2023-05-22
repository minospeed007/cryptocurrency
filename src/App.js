import  {useState , useEffect }  from 'react'
import {Switch, Link ,Routes, Route} from 'react-router-dom'
import { getProperty } from './getApi';
import {CardMedia,CardContent,CardActions, CssBaseline,Card,Button, Grid,Input,
    Typography, CircularProgress,Select,MenuItem,FormControl,InputLabel} from '@mui/material'
import axios from 'axios'
import {Navbar,HomePage, Properties, CryptoNews,Cryptodetail,Footer} from './components'
import './App.css'
const App=()=> {
 return (<>
  <div className='app'>
<div className="line">
<div className="line-link">
    <Link to='/' className="a-line">Home</Link>
    <Link to='/CryptoNews'className="a-line">News</Link>
    <Link to='/Properties'className="a-line">Cryptocurrencies</Link>


    </div>
  
   </div>
   <hr className="hr" />

<div className='main'>
  
    <div className='routes'>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/CryptoNews' element={<CryptoNews />}/>

        <Route exact path='/crypto/:coinId' element={<Cryptodetail/> }/>

        <Route exact path='/properties' element={<Properties />}/>
        
        
      </Routes>
    </div>
  
  <footer>
  <Footer/>
  </footer>
</div>

  </div>
  <CssBaseline/>
 
    
 

    </>
    )
  

}

export default App;
