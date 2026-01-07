import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";


function ListofResult() {
    const [results, setResults] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/").then(res => res.json()).then((data) =>
        { setResults(data);
            console.log(data);
        }).catch(err => console.log(err));
    },[])
    const handelDelete = (id) => {
        console.log(id.target.name);
        if (confirm("Are you sure to delete this record ?")){
            console.log("Deleted");
            fetch(`http://localhost:3000`, {
                method: "PUT",
                body:JSON.stringify({["ProductId"]:id.target.name}),
                headers: {
                    "Content-Type": "application/json"
                },

            })
            window.location.reload();}else{
            console.log("Not Deleted");
        }
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Supplier ID</TableCell>
                            <TableCell align="right">Catagory Id</TableCell>
                            <TableCell align="right">Unit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.ProductId}</TableCell>
                                <TableCell align="right">{row.SupplierId}</TableCell>
                                <TableCell align="right">{row.CategoryId}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <Button variant={"contained"} color={"primary"} name={row.ProductId} onClick={handelDelete}>Press</Button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    );
}

export default ListofResult;