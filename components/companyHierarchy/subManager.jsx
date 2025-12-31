import React from 'react';
import Typography from "@mui/material/Typography";
import Manager from "./Manager.jsx";

function SubManager({SalaryDetails}) {
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Sub Manager</Typography>
        <Manager SalaryDetails={SalaryDetails}/>
        </>
    );
}

export default SubManager;