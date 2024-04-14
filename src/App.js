import  {useState , useEffect }  from 'react'
import {Switch, Link ,Routes, Route} from 'react-router-dom'

import {Navbar,HomePage, Cryptocurrencies, CryptoNews,Cryptodetail,Footer} from './components'
import './App.css'
const App=()=> {
 return (<>
  <div className='app'>
  <Navbar/>
<div className="line">
<div className="nav-container">
      <div className="line-link">
        <Link to='/' className="a-line">Home</Link>
        <Link to='/CryptoNews' className="a-line">News</Link>
        <Link to='/cryptocurrencies' className="a-line">Cryptocurrencies</Link>

</div>
</div>
   </div>
   <hr className="hr" />
   
<div className='main'>
  
    <div className='routes'>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/CryptoNews' element={<CryptoNews />}/>

        <Route exact path='/crypto/:coinId' element={<Cryptodetail/> }/>

        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
        
        
      </Routes>
    </div>
  
  <footer>
  <Footer/>
  </footer>
</div>

  </div>
 
    
 

    </>
    )
  

}

export default App;
