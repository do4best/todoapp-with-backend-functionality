import React from 'react';
import Typography from "@mui/material/Typography";
import CommonPeople from "./CommonPeople.jsx";

function BlockGoverment({Compensation}) {
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Block Goverment</Typography>
        <CommonPeople Compensation={Compensation}/>
        </>
    );
}

export default BlockGoverment;