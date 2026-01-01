import React from 'react';
import Typography from "@mui/material/Typography";
import DistrictGoverment from "./DistrictGoverment.jsx";

function StateGoverment({Compensation}) {
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>State Goverment</Typography>
            <DistrictGoverment Compensation={Compensation}/>
        </>
    );
}

export default StateGoverment;