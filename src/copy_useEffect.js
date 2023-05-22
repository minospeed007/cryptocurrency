import  {useState , useEffect }  from 'react'
import {CardMedia,CardContent,Box, Card, Grid,Input, Typography} from '@mui/material'
import {Router} from 'react-router-dom'
import { getProperty } from './getApi';
import Navbar from './components/Navbar'

const App=()=> {
  const [loading, setLoading] = useState(false)
  const [error,setError]=useState(null)
  const [response, setResponse] = useState('')
  const [query,setQuery]=useState('')
  

  

  useEffect(()=>{
    getProperty(response).then((data)=>{
      setResponse(data)
      setLoading(true)
    }, (error)=>{
      setLoading(true)
      setError(error)
    })  },[])
    
    

if(!loading){
  return <>Loading ...</>
} else{
  return (<>
<Input type='text' placeholder='search...'onChange={(e)=>setQuery(e.target.value)}/>
   
    <div className="App">
    <Grid container>
    {response?.listings?.filter((responses)=>{
      if(query==''){
        return responses
      }else if(responses.title?.includes(query)){
        return responses
      }
    })
    .map((responses)=>(
  <Grid item xs={12} sm={4}  mb={2}  key={responses.id}>
    <Box >
      <Card style={{maxWidth: 330,
     boxShadow:'0, 5px, 0 rgba(0,0,0.3)',
     backgroundColor: '#fafafa' }}>
        <CardMedia image={responses.photo} style={{height:0, paddingTop: '56.25%'}}
alt=''/>
        <CardContent>
          <Typography color='primary' variant='subtitle2'>
          <p>{responses.address > 30 ? `${responses.address.substring(0,30)}` 
              : responses.address }...</p>
  
          </Typography>
          <Typography color='primary' variant='subtitle2'>
          <p>City: {responses?.address_new?.city}</p>
  
          </Typography>
        </CardContent>
        <CardContent>
          <Typography color='primary'variant='subtitle2'>
            Price: {responses.price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Grid>
))}
</Grid>
       
    </div>

    </>);
  
}
}

export default App;
