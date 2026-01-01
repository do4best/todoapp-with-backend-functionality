import React, {useContext} from 'react';
import Typography from "@mui/material/Typography";
import SuperVisor from "./superVisor.jsx";
import {MyContext} from "./bossContext.jsx";
import Button from "@mui/material/Button";

function Labour() {
    const data = useContext(MyContext);
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Labour Salary is </Typography>
<Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}> {data.counter} </Typography>
            <Button variant="contained"  onClick={()=>data.setCounter(data.counter + 1)}>Increment</Button>
        </>
    );
}

export default Labour;