import React from 'react';
import Typography from "@mui/material/Typography";

function CommonPeople({Compensation}) {
    console.log(Compensation);
    return (
        <>

        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Common People
            {Compensation.Bonus}
            {Compensation.Pension}</Typography>
        </>
    );
}

export default CommonPeople;