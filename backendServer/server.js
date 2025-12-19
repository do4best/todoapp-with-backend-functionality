import http from 'http';
import sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database('./db.sqlite',(err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});
db.run('CREATE TABLE IF NOT EXISTS Products (ProductId INTEGER PRIMARY KEY AUTOINCREMENT, ProductName TEXT,SupplierId INTEGER,' +
    'CategoryID INTEGER,Unit Text,price FLOAT)', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Table Products created successfully.');
    });
/////////////
const search = (callback) => {
    db.all('SELECT * FROM Products', (err, rows) => {
        if (err){
            console.error(err.message);
        }else{
            callback(rows);
        }
    });
}
/////////////
const insertData = db.prepare('INSERT INTO Products (ProductName,SupplierId,CategoryID,Unit,price) VALUES (?,?,?,?,?)',(err)=>{
        if (err){
            console.error(err.message);
        }else{
            console.log("Data inserted successfully....");
        }

    })
///////////// deleteData
const deleteData = db.prepare('DELETE FROM Products WHERE ProductId==?',(err)=>{
if (err){
    console.error(err.message);
}else{
    console.log("Data deleted successfully....");
}
})
/////////////

const modifyData = db.prepare('UPDATE Products SET ProductName=?,SupplierId=?,CategoryID=?,Unit=?,price=? WHERE ProductId==?',(err)=>{
    if (err){
        console.error(err.message);
    }else{
        console.log("Data modified successfully....");
    }
})
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    search((result)=>{
        res.write(JSON.stringify(result));
       res.end()
    });
//     if (req.method === 'POST'){
//         let body='';
//         req.on("data",(chunk)=>{
//             body+=chunk;
//         })
//         req.on("end",()=>{
//             const parsedBody=JSON.parse(body);
//             console.log(parsedBody);
//             insertData.run(
//                 parsedBody.ProductName,
//                 parsedBody.SipplierId,
//                 parsedBody.CategoryId,
//                 parsedBody.Unit,
//                 parsedBody.Price
//             );
//             console.log("Data inserted successfully....");
//         })
//     }else if (req.method === 'DELETE'){
//         let body="";
//         req.on("data",(chank)=>{
//             body+=chank;
//         });
//         req.on("end",()=>{
//             const parseBody=JSON.parse(body);
//             console.log(parseBody);
//         })
// // verify Put
//     }else if (req.method === 'PUT'){
//         let body="";
//         req.on("data",(chank)=>{
//             body+=chank;
//         });
//         req.on("end",()=>{
//             const parsedBody=JSON.parse(body);
//             console.log(parseBody);
//
//             insertData.run(
//                 parsedBody.ProductName,
//                 parsedBody.SipplierId,
//                 parsedBody.CategoryId,
//                 parsedBody.Unit,
//                 parsedBody.Price
//             )
//             console.log("Data inserted successfully....");
//         })
//
//     }
});
const PORT = 3001;
server.listen(PORT)
console.log(`Server running on port ${PORT}`);

