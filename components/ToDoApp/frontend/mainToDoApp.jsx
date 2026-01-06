
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListofResult from "./listofResult.jsx";
import FormData from "./formData.jsx";

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
                    <FormData/>
                    <ListofResult/>

                </Box>

            <Footer/>
            </Box>
          </Container>
        </>
    );
}

export default MainToDoApp;