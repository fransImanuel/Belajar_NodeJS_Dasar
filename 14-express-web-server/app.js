const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //   res.send('Hello World!');
    // res.json({
    //     nama: 'Sandhika',
    //     email: 'sandhika@gmail.com',
    //     nohp: 0132132
    // });
    res.sendFile('./index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('Ini adalah halaman about');
    res.sendFile('./about.html', {root: __dirname});
})

app.get('/contact', (req, res) => {
    // res.send('Ini adalah halaman contact');
    res.sendFile('./contact.html', {root: __dirname});
})

// app.get('/product/:id/category/:idCat', (req, res)=>{
//     res.send(`Product ID:  ${req.params.id} <br> Category ID: ${req.params.idCat}`);
// });
app.get('/product/:id', (req, res)=>{
    res.send(`Product ID:  ${req.params.id} <br> Category ID: ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})




// const http = require('http');
// const fs = require('fs');

// const renderHtml= (path, res) =>{
//     fs.readFile(path, (err, data)=>{
//         if(err){
//             res.writeHead(404);
//             res.write('Error File Not Found');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     });
// };

// http
//     .createServer((req, res)=>{
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });

//         const url = req.url;
//         if(url === '/about'){
//             // res.write('<h1>Ini adalah halaman about</h1>');
//             // res.end();
//             renderHtml('./about.html',res);
//         }else if(url === '/contact'){
            
//             renderHtml('./contact.html',res);
//         }else{
//             // res.write('Hello World!');
//             // fs.readFile('./index.html', (err, data)=>{
//             //     if(err){
//             //         res.writeHead(404);
//             //         res.write('Error File Not Found');
//             //     }else{
//             //         res.write(data);
//             //     }
//             //     res.end();
//             // });
            
//             renderHtml('./index.html',res);
//         }

//     })
//     .listen(3000, ()=>{
//         console.log('Server is listening on port 3000..')
//     });



