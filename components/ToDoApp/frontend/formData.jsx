import React, {useEffect} from 'react';
import {useNavigate} from "react-router";
import Box from "@mui/material/Box";
import Header from "./Header.jsx";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import ListofResult from "./listofResult.jsx";
import Footer from "./Footer.jsx";

function FormData(props) {
    const [result, setResult] = React.useState([]);
    const [dataToInsert, setDataToInsert] = React.useState({
        ProductName: '',
        SupplierId: '',
        CategoryId: '',
        UnitId: '',
        Price: '',
    });
    const [directed, setDirected] = React.useState(false);
    // const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handelChange = (e) => {
        console.log("handelChange", e);
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

                    <TextField id="outlined-basic1" value={dataToInsert.ProductName} label="Product Name" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} onChange={handelChange} required />
                    <TextField id="outlined-basic2" value={dataToInsert.SupplierId} label="Supplier ID" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} onChange={handelChange} required/>
                    <TextField id="outlined-basic3" value={dataToInsert.CategoryId} label="Catagory ID" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} onChange={handelChange} required/>
                    <TextField id="outlined-basic3" value={dataToInsert.UnitId} label="Unit" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }}  onChange={handelChange} required/>
                    <TextField id="outlined-basic3" value={dataToInsert.Price} label="Price" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} onChange={handelChange} required/>
                    <Button variant="contained" sx={{ width: '100%', maxWidth: '400px' }}>Submit</Button>

           </>
    );
}

export default FormData;