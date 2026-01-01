import React, {useContext} from 'react';
import Typography from "@mui/material/Typography";
import Manager from "./Manager.jsx";
import  {MyContext} from "./bossContext.jsx";

function Boss() {
const data=   useContext(MyContext)
    console.log(data);
    return (
        <>

                <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }} >Boss Position is {data.SalaryDetails.Designation} </Typography>
<Manager />
        </>
    );
}

export default Boss;