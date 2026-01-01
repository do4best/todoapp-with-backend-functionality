import React, {useContext} from 'react';
import Typography from "@mui/material/Typography";
import Boss from "./Boss.jsx";
import SubManager from "./subManager.jsx";
import {MyContext} from "./bossContext.jsx";

function Manager() {
    const data = useContext(MyContext);

    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Manager Salary is {data.SalaryDetails.salary} </Typography>
       <SubManager/> </>
    );
}

export default Manager;