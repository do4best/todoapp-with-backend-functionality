import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Header() {
    return (
        <>
        <Box sx={{ bgcolor: 'black', p: 2 }}>
            <Typography variant="h4" sx={{color:"white"}} align="center" gutterBottom> CRUD (React, NodeJs, Sqlite</Typography>
        </Box>
        </>
    );
}

export default Header;