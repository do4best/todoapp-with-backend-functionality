import React, {useState, useEffect} from 'react';
import {TextField, Button, Box} from "@mui/material";
import Container from "@mui/material/Container";
import {useNavigate} from "react-router";

function Formdata({id}) {
    const navigate = useNavigate();
    const [datatoInsert,setDataToInsert]=useState({
        ProductName:"",
        SupplierId:"",
        CategoryId:"",
        Unit:"",
        Price:""
    })

    useEffect(() => {
        if (id) {
            fetch('http://localhost:3001')
                .then(res => res.json())
                .then(data => {
                    const product = data.find(p => p.ProductId === parseInt(id));
                    if (product) {
                        setDataToInsert({
                            ProductName: product.ProductName || "",
                            SupplierId: product.SupplierId || "",
                            CategoryId: product.CategoryID || "",
                            Unit: product.Unit || "",
                            Price: product.price || ""
                        });
                    }
                })
                .catch(err => console.error(err));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataToInsert(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const method = id ? 'PUT' : 'POST';
        const body = id ? { ...datatoInsert, ProductId: id } : datatoInsert;

        fetch('http://localhost:3001', {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(() => {
            if (id) {
                navigate('/');
            } else {
                setDataToInsert({
                    ProductName: "",
                    SupplierId: "",
                    CategoryId: "",
                    Unit: "",
                    Price: ""
                });
                window.location.reload();
            }
        });
    };

    return (
        <Container maxWidth="lg">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <div>{id ? "Edit Product" : "Add New Product"}</div>
                <TextField name="ProductName" label="Product Name" variant="outlined" fullWidth margin="normal" value={datatoInsert.ProductName} onChange={handleChange} />
                <TextField name="SupplierId" label="Supplier ID" variant="outlined" fullWidth margin="normal" value={datatoInsert.SupplierId} onChange={handleChange} />
                <TextField name="CategoryId" label="Category ID" variant="outlined" fullWidth margin="normal" value={datatoInsert.CategoryId} onChange={handleChange} />
                <TextField name="Unit" label="Unit" variant="outlined" fullWidth margin="normal" value={datatoInsert.Unit} onChange={handleChange} />
                <TextField name="Price" label="Price" variant="outlined" fullWidth margin="normal" value={datatoInsert.Price} onChange={handleChange} />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>{id ? "Update" : "Submit"}</Button>
            </Box>
        </Container>
    );
}

export default Formdata;