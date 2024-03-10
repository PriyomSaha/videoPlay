import { Box, Card, CardContent, FormControlLabel, Grid, Radio, TextField, Typography } from "@mui/material";
import React from "react";



const Example4 = () => {
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };
    const qrCodeSrc = "./images/Mask Group 1.png";
// Update this path accordingly
    return (
        <div style={{ position: 'relative' }}>
            {/* Black background div */}
            <div style={{ backgroundColor: 'black', width: '110%', height: '140px' }}> </div>
            <div style={{ backgroundColor: 'white',  width: '90%', height: '740px', position:'absolute' ,left:'8%', top:'50px', borderRadius:'25px',border:'solid grey 1px'}}> <Typography variant="h5" sx={{color:'black',textAlign:'center',fontWeight:'bold', marginTop:'45px'}}>Payment method</Typography>
             <p style={{color:'red',textAlign:'center',fontWeight:'bold',marginTop:'0'}}>Choose a payment option and fill in the requested information</p></div>
             <div style={{ backgroundColor: 'lightgrey',  width: '63%', height: '590px', position:'absolute' ,left:'19%', top:'180px', borderRadius:'25px'}}>
             <Typography variant="body1" sx={{color:'black',fontWeight:'bold', marginTop:'20px',marginLeft:'40px'}}>Payment options</Typography> 
             <Typography 
              variant="body1" 
                 sx={{
                 color: 'grey', 
                 fontWeight: 'bold', 
                 marginTop: '-25px', 
                 textAlign: 'center', 
                 marginRight: '85px' // Moves the text a bit to the left
  }}
>
  Secure Server
</Typography>
     
      <div style={{ position:'absolute',width: '79%', height: '500px', marginTop: '25px', marginLeft: '5%', borderRadius:'20px' }}>
            <Card sx={{ height: '280px', width: '410px', borderRadius: '20px', padding: '10px', marginBottom:'20px' }}>
      <CardContent>
        <FormControlLabel
          control={
            <Radio
              checked={selectedValue === 'creditCard'}
              onChange={handleChange}
              value="creditCard"
              name="paymentMethod"
              sx={{
                color: 'gray',
                '&.Mui-checked': {
                  color: 'red',
                },
              }}
            />
          }
          label="Credit/debit card"
          componentsProps={{
            typography: {
              fontWeight: 'bold',
            },
          }}
        
        />

        <Typography variant="body2" sx={{ marginBottom: 1, marginLeft: '30px', color:'lightgrey', fontWeight:'bold' }}> {/* Decreased marginBottom */}
          Secure transfer using your bank account
        </Typography>
        <div style={{ borderBottom: '2px dashed black', width: '100%', marginBottom: '8px' }}> {/* Decreased marginBottom */}</div>

        <Grid container spacing={0.5}> {/* Reduced spacing */}
          {['Name(s)', 'Last Name', 'Card Number', 'Expiration', 'CVV', 'Postal Code', 'Email'].map((label, index) => (
            <Grid item xs={index === 3 ? 4 : index === 4 ? 2 : 6} key={label}>
              <Typography sx={{ marginBottom: '2px', color:'gray' }}> {/* Further decreased marginBottom for labels */}
                {label}
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                margin="dense"
                sx={{
                  input: {
                    height: '4px',
                    padding: '8px', // Keeping reduced padding for smaller input size
                  },
                  '.MuiOutlinedInput-root': {
                    margin: '2px', 
                  },
                  width: '100%',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    <div style={{ position: 'absolute', top: '320px', left: '0%', width:'370px', height:'430px', borderRadius: '20px'}}>
           <Card sx={{ width: '430px', borderRadius: '20px', marginTop: '4px' }}> 
        <CardContent sx={{
            padding: '8px', 
            '&:last-child': { paddingBottom: '8px' } 
        }}>
            <FormControlLabel 
            control={
              <Radio 
                checked={selectedValue === 'UPIPayment'}
                onChange={handleChange}
                value="UPIPayment"
                size="small" // Optional: Use smaller Radio buttons
                sx={{
                  color: 'gray',
                  '&.Mui-checked': {
                    color: 'red',
                  }
                }}
              />
            } 
            label="UPI Payment" 
            componentsProps={{
              typography: {
                fontWeight: 'bold',
              },
            }}
          
          />

          <Grid container spacing={1} sx={{ justifyContent: "center", position: 'relative' }}> {/* Reduced spacing */}
              <Grid item xs={12} sm={6}>
                  <TextField
                      fullWidth
                      label="UPI ID"
                      variant="standard"
                      size="small" // Use smaller TextField
                      sx={{ mb: 1, fontWeight:'bold' }} // Adjust spacing if needed
                  />
                  <div style={{ marginBottom: '2px',marginLeft:'80px' ,color:'lightgrey',fontWeight:'bold'}}> or</div> {/* Reduced spacing */}
                  <TextField
                      fullWidth
                      label="UPI Number"
                      variant="standard"
                      size="small" // Consistent smaller TextField
                  />
              </Grid>

              <Box sx={{
                color:'gray',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '55%',
                  borderLeft: '1px dashed grey',
                  transform: 'translateX(-50%)',
              }} />

<Grid item xs={12} sm={6} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Box sx={{ 
      width: '80%', // Adjusted QR code size
      height: '80%', // Adjusted QR code container height
      display: 'flex',
      justifyContent: 'center', // Centers content horizontally
      alignItems: 'center', // Centers content vertically
      border: '1px dashed white',
      marginTop:'-28px' // Optional styling for QR code container
  }}>
                      <img src={qrCodeSrc} alt="QR Code" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                  </Box>
              </Grid>
          </Grid>
        </CardContent>
     </Card>
      
            </div>
            </div>
             </div>
             <div> <Card sx={{
                  position: 'absolute',
                  top: '180px', 
                  left: '40%',
                  
                  bgcolor:'#D10001',
        height:'590px',
        width:'22%',
        marginLeft:'20%',
        borderTopRightRadius:'10px',
        borderBottomRightRadius:'10px',
        color:'white'
        
    }}>
        <CardContent>
        <Typography variant="h6" sx={{ marginBottom: 2, marginTop:'10px', marginLeft: '75px' ,fontSize:'16px' , color:'white'}}>
          Payment settings
        </Typography>

        <Typography variant="h6" sx={{  marginTop:'35px' ,fontSize:'16px' , color:'white'}}>
          Basic Plan

          <p style={{marginTop:'0px',fontSize:'13px'}}>with limited acess to the template 
           catalog and basic editing</p>

        </Typography>
        <Box sx={{
                borderBottom: '1px dashed white',
                width: '100%',
                margin: '0 auto', // Center the line
                 // Space below the line
            }}></Box>

        <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                
                marginTop:'15px', // Space below the details
            }}>
                <Typography variant="body1" sx={{ fontSize: '14px' }}>
                    Transaction date:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '13px' }}>
                    00/00/0000
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop:'2px', 
                marginBottom:'20px'// Space below the details
            }}>
                <Typography variant="body1" sx={{ fontSize: '14px' }}>
                    Hour:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '13px' }}>
                    00:00 PM
                </Typography>
            </Box>
            

        <Box sx={{
                borderBottom: '1px dashed white',
                width: '100%',
                margin: '0 auto', // Center the line
                 // Space below the line
            }}></Box>
             <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop:'15px',
                marginBottom:'15px' // Space below the details
            }}>
                <Typography variant="body1" sx={{ fontSize: '14px' }}>
                    Subtotal:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '12px' }}>
                ₹ 100
                </Typography>
            </Box>
            <Box sx={{
                borderBottom: '1px dashed white',
                width: '100%',
                margin: '0 auto', // Center the line
                marginBottom: '20px', // Space below the line
            }}></Box>
            <Typography variant="body1" sx={{ fontSize: '12px', marginLeft:'184px' , marginTop:'0px'}}>
              Total: ₹ 100
                </Typography>

            
        <button style={{width:'95%', height:'30px', borderRadius:'15px',cursor:'pointer',marginTop:'170px' , backgroundColor:'black', color:'white', textAlign:"center" }}>Done</button>

        </CardContent>
    </Card>
            </div>
       </div>
    );
}
export default Example4