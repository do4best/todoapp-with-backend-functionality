import React, {useEffect} from 'react';
import {data, useNavigate} from "react-router";
import Box from "@mui/material/Box";
import Header from "./Header.jsx";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import ListofResult from "./listofResult.jsx";
import Footer from "./Footer.jsx";

function FormData() {
    const [result, setResult] = React.useState([]);
    const [dataToInsert, setDataToInsert] = React.useState({
        ProductId: '',
        SupplierId: '',
        CategoryId: '',
        UnitId: '',
        Price: '',
    });
    const [directed, setDirected] = React.useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {

       const findItem = result.find((item)=>window.location.pathname === `/modify/${item.ProductId}`);
       if (findItem){
           fetch(`http://localhost:3000/${findItem.ProductId}`, {
               method: "PUT",
               body:JSON.stringify(dataToInsert),
               headers: {
                   "Content-Type": "application/json"
               },
           })
           navigate("/")
       }else{
           fetch("http://localhost:3000", {
               method: "POST",
               body:JSON.stringify(dataToInsert),
           })
       }
    }
    const handelChange = (e) => {
        setDataToInsert({...dataToInsert,[e.target.name]:e.target.value});
    }
    useEffect(() => {
        fetch("http://localhost:3000/").then(res => res.json()).then((data) =>
        { setResult(data);
            console.log(data);
            const formData = data.find(
                (item)=>window.location.pathname === `/modify/${item.ProductId}`
            );
            if (formData){
                setDataToInsert((prevState)=>(
                    {...prevState,...formData}
                ));
            }else{
                if (!directed){
                    setDirected(true);
                    navigate("/")
                }
            }
        }).catch(err => console.log(err));
    },[])
    return (
        <>

                    <TextField id="outlined-basic1" name={"ProductName"} value={dataToInsert.ProductId} label="Product Name" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} onChange={handelChange} required />
                    <TextField id="outlined-basic2" name={"SupplierId"} value={dataToInsert.SupplierId} label="Supplier ID" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} onChange={handelChange} required/>
                    <TextField id="outlined-basic3" name={"CategoryId"} value={dataToInsert.CategoryId} label="Catagory ID" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} onChange={handelChange} required/>
                    <TextField id="outlined-basic3" name={"UnitId"} value={dataToInsert.UnitId} label="Unit" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }}  onChange={handelChange} required/>
                    <TextField id="outlined-basic3" name={"Price"} value={dataToInsert.Price} label="Price" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} onChange={handelChange} required/>
                    <Button variant="contained" sx={{ width: '100%', maxWidth: '400px' }} onClick={handleSubmit}>Submit</Button>

           </>
    );
}

export default FormData;