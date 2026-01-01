import React from 'react';
import Typography from "@mui/material/Typography";
import Manager from "./Manager.jsx";
import SuperVisor from "./superVisor.jsx";

function SubManager() {
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Sub Manager Salary is </Typography>
        <SuperVisor/>
        </>
    );
}

export default SubManager;