import React from 'react';
import Typography from "@mui/material/Typography";
import SubManager from "./subManager.jsx";

function SuperVisor({SalaryDetails}) {
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>SuperVisor</Typography>
        <SubManager SalaryDetails={SalaryDetails}/></>
    );
}

export default SuperVisor;