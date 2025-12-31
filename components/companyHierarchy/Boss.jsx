import React from 'react';
import Typography from "@mui/material/Typography";

function Boss() {
    const SalaryDetails ={
        Designation:"CEO",
        salary:1000000,
        bonus:100000,
        pension:10000
    };
    return (
        <>

                <Typography variant="h4" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }} >His Salary is {SalaryDetails}</Typography>

        </>
    );
}

export default Boss;