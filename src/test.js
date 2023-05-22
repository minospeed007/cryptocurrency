{response?.listings?.map((responses)=>(
    <Grid item xs={12} sm={4}  mb={2} key={responses.id}>
    
    
    <Card style={{maxWidth: 330,
     boxShadow:'0, 5px, 0 rgba(0,0,0.3)',
     backgroundColor: '#fafafa' }}>
  
     <Box >
    <CardMedia 
  image={responses.photo}
  style={{height:0, paddingTop: '56.25%'}}
    alt='' />
  <CardContent>
  <p>{responses.address > 100 ? `${responses.address.substring(0,100)}` 
              : responses.address }</p>
  
   </CardContent>
   <CardContent>
  <Typography color='primary' variant='subtitle1'>
  price: {responses.price}
  
  </Typography>
   </CardContent>
    </Box>
  
     </Card>
  
   ))}
  