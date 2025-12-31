import React from 'react';
import Typography from "@mui/material/Typography";
import Boss from "./Boss.jsx";

function Manager({SalaryDetails}) {

    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Manager</Typography>
       <Boss SalaryDetails={SalaryDetails}/> </>
    );
}

export default Manager;