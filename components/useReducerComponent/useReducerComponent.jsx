import React, {useReducer} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const countReducer = (state,action) =>{
    switch (action.type){
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        case "reset":
            return {count:0}
        default:
            return state;
    }
}

function UseReducerComponent(props) {
    const [state,dispatch] = useReducer(countReducer,{count:0})
    return (
        <>

            <Box sx={{ display:"flex",flexDirection:"column",alignItems:"center",mt:5,justifyContent:"center" }}><Typography sx={{mt:5}} color={"primary"} variant={"h1"}>{state.count}</Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" size="large" color="primary" onClick={()=>dispatch({type:'increment'})}>
                        Increment
                    </Button>
                    <Button variant="contained" size="large" color="secondary" onClick={()=>dispatch({type:'decrement'})}>
                        Decrement
                    </Button>
                    <Button variant="outlined" size="large" onClick={()=>dispatch({type:'reset' })}>
                        Reset
                    </Button>
                </Stack></Box>

        </>
    );
}

export default UseReducerComponent;