import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {TextField,Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ListItems from "./ListItems.jsx";

function MainSimpleToDo() {
    const [text, setText] = useState('')
    const [toDoList, setToDoList] = useState([])

    const addToList = () => {
        const newToDo = {id:Math.floor(Math.random()*800),
        item:text,
        isDone:false}
        setToDoList([...toDoList,newToDo])
    }
    console.log("ToDoList  : ",toDoList)
    return (
        <>
        <Typography variant="h1" textAlign={"center"} color={"success"} border={"red"} margin={"5"}>ToDo's List</Typography>

           <Grid container spacing={2} justifyContent="center" alignItems="center">
               <Grid size={{xs: 12, md: 8}} textAlign={"center"}>
                   <Box sx={{'& button':{p:2}}}>
            <TextField  id="outlined-basic" label="Outlined" value={text} variant="outlined" defaultValue={''} color={"secondary"} sx={{width: '70%'}} onChange={(e)=>setText(e.target.value)} />

                   <Button  onClick={addToList} variant="contained" size={"large"}>Add</Button>
                       </Box>
           </Grid>
               <ListItems/>
           </Grid>

        </>
    );
}

export default MainSimpleToDo;