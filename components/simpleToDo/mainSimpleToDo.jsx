import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {TextField,Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ListItems from "./ListItems.jsx";

function MainSimpleToDo() {
    const [text, setText] = useState('')
    const [toDoList, setToDoList] = useState([])

    const addToList = () => {// this function will invoke when user click on add button
        if (text.trim() === "") {
            alert("Please Input Something");
            return;
        }
        const newToDo = {id:Math.floor(Math.random()*800),
        item:text,
        isDone:false}
        setToDoList([...toDoList,newToDo])
        setText('')
    }
    console.log("ToDoList  : ",toDoList)

    const handelTodo = (valueId) => {
        const newToDo = toDoList.map((item)=>{
            if (item.id === valueId){
                return {...item,isDone:!item.isDone}
            }
            return item
        })
        setToDoList(newToDo)


    }

    const handelDelete = (valueId) => {
        const newToDo = toDoList.filter(item => item.id !== valueId)
        setToDoList(newToDo)
    }
    return (
        <>
        <Typography variant="h1" color={"success"} sx={{ border: "red", m: 5, textAlign: "center" }}>ToDo's List</Typography>

           <Grid container spacing={2} justifyContent="center" alignItems="center">
               <Grid size={{xs: 12, md: 8}} textAlign={"center"}>
                   <Box sx={{'& button':{p:2}}}>
            <TextField  id="outlined-basic" label="Outlined" value={text} variant="outlined" defaultValue={''} color={"secondary"} sx={{width: '70%'}} onChange={(e)=>setText(e.target.value)} />

                   <Button  onClick={addToList} variant="contained" size={"large"}>Add</Button>
                       </Box>

           </Grid>

           </Grid>
            <ListItems todoList={toDoList} handelDelete={handelDelete} handelTodo={handelTodo}/>


        </>
    );
}

export default MainSimpleToDo;