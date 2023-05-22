import React from 'react'
import {Link} from 'react-router-dom'


const Footer=()=>{
return(<>
<div className="footer-main">
    <div className="footer">
    <div >
    <Link to='/'>Home</Link>

    </div>
    <div >
    <Link to='/CryptoNews'>News</Link>

    </div>
    <div >
    <Link to='/properties'>Cryptocurrencies</Link>

    </div>
    </div>
    </div>
</>)
}
export default Footer