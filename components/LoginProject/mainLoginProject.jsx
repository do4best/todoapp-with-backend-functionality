import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {InputAdornment, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';
import {AccountCircle} from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
function MainLoginProject(props) {
    const [action, setAction] = useState("Signup");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Simple regex logic for email validation
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmailError(value !== "" && !isValid);
    };
    return (
        <>
<Typography variant="h2" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>{action} Page</Typography>
        <Box sx={{ mt: 8 ,display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",gap:4}}>
            <TextField id="outlined-basic" label="User Name" variant="outlined" sx={{width: '70%'}}
                       slotProps={{
                           input: {
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <AccountCircle />
                                   </InputAdornment>
                               ),
                           },
                       }}/>
            {action === "Signup" ? <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width: '70%'}} onChange={handleEmailChange} error={emailError} /> : null}
            <TextField id="outlined-basic" type={"password"} label="Password" variant="outlined" sx={{width: '70%'}}
                       slotProps={{
                           input: {
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <PasswordIcon />
                                   </InputAdornment>
                               ),
                           },
                       }}/>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button variant={"contained"} size={"large"} sx={{ mr: "15%",px:4,py:1.2,fontSize:'1.1rem'}} disabled={action === "Login" ? true : false}  onClick={()=>setAction("Login")}>Login</Button>
            <Button variant={"contained"} size={"large"} sx={{ mr: "15%",px:4,py:1.2,fontSize:'1.1rem'}} disabled={action === "Signup" ? true : false}  onClick={()=>setAction("Signup")}>Signup</Button>
        </Box></Box>
        </>
    );
}

export default MainLoginProject;