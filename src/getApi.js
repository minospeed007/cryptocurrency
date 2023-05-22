import axios from 'axios'
  
  



export const getProperty= async ({query,e})=>{
  
try{
const {data:data}= await axios.get('https://realty-in-us.p.rapidapi.com/properties/list-for-sale',
{params: {
  state_code: 'NY',
  city: 'New York City',
  offset: '0',
  limit: '200',
  sort: 'relevance'
},
headers: {
  'X-RapidAPI-Key': '46f44f79a1msh6d1a47c39ed677fp1cd9a6jsn779aa9920912',
  'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
}
}
)
return data
}catch(error){

    
   
  }
  
   
}