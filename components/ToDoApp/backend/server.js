const http = require('http');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('empresa.db',(err)=>{
    if(err){
        console.error(err);
    }else{
    console.log('Connected to the database.');}
});
db.run(`CREATE TABLE IF NOT EXISTS Products (
    ProductId INTEGER PRIMARY KEY AUTOINCREMENT, 
    ProductName TEXT,
    SupplierId INTEGER,
    CategoryID INTEGER,
    Unit Text,
    price FLOAT
        )`,(err)=>{
        if(err){
            console.error(err);
        }else{
            console.log('Table Products created successfully.');
        }}
)
////// const Search
const search = (callback)=>{
    db.all('SELECT * FROM Products',(err,rows)=>{
        if(err){
            console.error(err);
        }else{
            callback(rows);
        }
    });
};
// /////////////// Insert Data
const insertData = db.prepare('INSERT INTO Products (ProductName,SupplierId,CategoryID,Unit,price) VALUES (?,?,?,?,?)',(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log('Data inserted successfully....');
    }
});
/////////////// Delete Data
const deleteData = db.prepare('DELETE FROM Products WHERE ProductId==?',(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log('Data deleted successfully....');
    }
});
/////////////// Modify Data
const modifyData = db.prepare('UPDATE Products SET ProductName=?,SupplierId=?,CategoryID=?,Unit=?,price=? WHERE ProductId==?',(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log('Data modified successfully....');
    }
});
// server details
const server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Mthods","GET,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    // find the Search
    search((result)=>{
        res.write(JSON.stringify(result));
        res.end();
    });
    if (req.method === 'POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            const parsedBody=JSON.parse(body);
            console.log(parsedBody);
            insertData.run(
                parsedBody.ProductName,
                parsedBody.SupplierId,
                parsedBody.CategoryId,
                parsedBody.Unit,
                parsedBody.Price
            );
            console.log('Data inserted successfully....');
            res.end("Success");
        });
    }else if (req.method === 'DELETE'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            const parsedBody=JSON.parse(body);
            console.log(parsedBody);
            deleteData.run(parsedBody.ProductId);
            res.end("Deleted");
        });
    }else if (req.method === 'PUT'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            const parsedBody=JSON.parse(body);
            console.log(parsedBody);
            modifyData.run(
                parsedBody.ProductName,
                parsedBody.SupplierId,
            )
        })

    }
})








const port = 3000;
server.listen(port);
console.log(`Server running on port ${port}`);