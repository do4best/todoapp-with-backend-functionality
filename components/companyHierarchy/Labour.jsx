import React from 'react';
import Typography from "@mui/material/Typography";
import SuperVisor from "./superVisor.jsx";

function Labour({SalaryDetails}) {
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>{SalaryDetails?.salary}</Typography>
        </>
    );
}

export default Labour;