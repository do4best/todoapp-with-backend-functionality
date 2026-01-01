import React from 'react';
import Typography from "@mui/material/Typography";
import StateGoverment from "./stateGoverment.jsx";

function IndianGoverment(props) {
    const Compensation={
        Money:5000,
        Bonus:1000,
        Pension:2000
    }
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Indian Goverment</Typography>
            <StateGoverment Compensation={Compensation}/>

        </>
    );
}

export default IndianGoverment;