import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function MainToDoApp() {
    return (
        <>
          <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header/>
                <Box sx={{
                    pt: 2, // Reduced top padding
                    pb: 6, // Kept some bottom padding
                    px: 6,
                    bgcolor: 'background.paper',
                    mt:0,

                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Centers vertically in the available space
                    alignItems: 'center',     // Centers horizontally
                    gap: 2
                }}>
                    <TextField id="outlined-basic1" label="Product Name" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} />
                    <TextField id="outlined-basic2" label="Supplier ID" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} />
                    <TextField id="outlined-basic3" label="Catagory ID" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} />
                    <TextField id="outlined-basic3" label="Unit" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} />
                    <TextField id="outlined-basic3" label="Price" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} />
                    <Button variant="contained" sx={{ width: '100%', maxWidth: '400px' }}>Submit</Button>

                       <Typography variant="h3" sx={{mt:2}}> Results :</Typography>

                </Box>

            <Footer/>
            </Box>
          </Container>
        </>
    );
}

export default MainToDoApp;