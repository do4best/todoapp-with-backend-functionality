import React, {useCallback, useState} from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MainUseCallBack(props) {
    const [count, setCount] = useState(0);
    const [cont1, setCont1] = useState(0);
    console.log(count);
    console.log(cont1);
    const handelClick= useCallback(()=> setCount(count+1)
    ,[count])
    return (
        <>
        <Button variant="contained" onClick={handelClick}>Increment</Button>
            <Button variant="contained" onClick={()=>setCont1(cont1+1)}>Increment</Button>
            <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Count is {count}</Typography>
            <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>Cont1 is {cont1}</Typography>
        </>
    );
}

export default MainUseCallBack;