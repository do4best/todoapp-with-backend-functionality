import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from "react-router";

function ListOfResults() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = () => {
        fetch('http://localhost:3001')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = (id) => {
        fetch('http://localhost:3001', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ProductId: id })
        }).then(() => fetchProducts());
    };

    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Supplier ID</TableCell>
                        <TableCell>Category ID</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.ProductId}>
                            <TableCell>{product.ProductId}</TableCell>
                            <TableCell>{product.ProductName}</TableCell>
                            <TableCell>{product.SupplierId}</TableCell>
                            <TableCell>{product.CategoryID}</TableCell>
                            <TableCell>{product.Unit}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={() => navigate(`/modify/${product.ProductId}`)}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="error" onClick={() => handleDelete(product.ProductId)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListOfResults;