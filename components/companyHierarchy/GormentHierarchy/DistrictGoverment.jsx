import React from 'react';
import Typography from "@mui/material/Typography";
import BlockGoverment from "./BlockGoverment.jsx";

function DistrictGoverment({Compensation}) {
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>District Goverment</Typography>
        <BlockGoverment Compensation={Compensation}/>
        </>
    );
}

export default DistrictGoverment;