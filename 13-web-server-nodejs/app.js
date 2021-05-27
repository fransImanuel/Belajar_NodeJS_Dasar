const http = require('http');
const fs = require('fs');

const renderHtml= (path, res) =>{
    fs.readFile(path, (err, data)=>{
        if(err){
            res.writeHead(404);
            res.write('Error File Not Found');
        }else{
            res.write(data);
        }
        res.end();
    });
};

http
    .createServer((req, res)=>{
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const url = req.url;
        if(url === '/about'){
            // res.write('<h1>Ini adalah halaman about</h1>');
            // res.end();
            renderHtml('./about.html',res);
        }else if(url === '/contact'){
            
            renderHtml('./contact.html',res);
        }else{
            // res.write('Hello World!');
            // fs.readFile('./index.html', (err, data)=>{
            //     if(err){
            //         res.writeHead(404);
            //         res.write('Error File Not Found');
            //     }else{
            //         res.write(data);
            //     }
            //     res.end();
            // });
            
            renderHtml('./index.html',res);
        }

    })
    .listen(3000, ()=>{
        console.log('Server is listening on port 3000..')
    });

