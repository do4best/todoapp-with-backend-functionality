import React, {useLayoutEffect, useState} from 'react';
import Button from "@mui/material/Button";

function MainUseLayout() {
    const[color,setColor]=useState('pink')
    useLayoutEffect(()=>{
        document.body.style.backgroundColor = color;
    })
    return (
        <>
        <Button variant="contained" onClick={()=>setColor('blue')}>Change Color</Button>
        </>
    );
}

export default MainUseLayout;