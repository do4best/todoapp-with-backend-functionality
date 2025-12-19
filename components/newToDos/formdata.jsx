import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Container from "@mui/material/Container";

function Formdata() {
    const [results,setResults]= useState([]);
    const [datatoInsert,setDataToInsert]=useState({
        ProductName:"",
        SupplierId:"",
        CategoryId:"",
        Unit:"",
        Price:""
    })
    const [redirect,setRedirect]=useState(false);
    return (
        <>
            <Container maxWidth="lg">
        <div>This is Form Data</div>
  <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
            </Container> </>);
}

export default Formdata;