):(

    {filteredResults?.listings?.map((responses)=>(
  <Grid item xs={12} sm={4}  mb={2}  key={responses.id}>
    <Box >
      <Card style={{maxWidth: 250,
     boxShadow:'0, 5px, 0 rgba(0,0,0.3)',
     backgroundColor: '#fafafa' }}>
        <CardMedia image={responses.photo ? responses.photo : url_image} 
        style={{height:0, paddingTop: '56.25%'}}
alt=''/>
        <CardContent>
          <Typography color='primary' variant='subtitle2'>
         <p> Address: {responses.address.length > 30 ? responses.address.substring(0, 30) +
          '...' : responses.address}

         </p>
          </Typography>
          <Typography color='primary' variant='subtitle2'>
          <p>City: {responses?.address_new?.city}</p>
  
          </Typography>
          <Typography color='primary'variant='subtitle2'>
            Price: {responses.price}
          </Typography>
          
        </CardContent>
        <CardActions>
        
        <Button size='small' color='primary' onClick={()=>window.open(responses.rdc_web_url, '_blank')}>
          website
        </Button>
      </CardActions>
      </Card>
    </Box>
  </Grid>
))}
</Grid>
       
    </div>