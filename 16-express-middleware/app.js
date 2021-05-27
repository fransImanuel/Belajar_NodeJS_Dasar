const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const { loadContact,findContact } = require('./utils/contacs');
const app = express();
const port = 3000;

//gunakan ejs
app.set('view engine', 'ejs');

// Third-party middleware
app.use(expressLayouts);

//built-in middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname});
    const mahasiswa = [{
        nama: 'Frans Imanuel',
        email: 'fransimanuel@getMaxListeners.com'
    },{
        nama: 'Erik',
        email: 'Erik@getMaxListeners.com'
    },{
        nama: 'Doddy',
        email: 'Doddy@getMaxListeners.com'
    }];

    res.render('index',{ 
        nama:'FRANS IMANUEL', 
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout'
    });
});

app.get('/about', (req, res, next) => {
    // res.sendFile('./about.html', {root: __dirname});
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About'
    });
    // next();
})

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts 
    });
})

app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);
    res.render('detail', {
        layout: 'layouts/main-layout',
        title: 'Halaman Detail Contact',
        contact
    });
})

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



