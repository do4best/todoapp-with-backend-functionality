import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <>
        <Box sx={{ bgcolor: 'black', p: 6, display:"flex", justifyContent:"center" }} >
            <Typography variant="h6" sx={{color:"white"}}  align="center" gutterBottom> 2026 -LCC</Typography>

        </Box>

        </>
    );
}

export default Footer;