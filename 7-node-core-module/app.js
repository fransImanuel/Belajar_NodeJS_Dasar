
//Core Module
// //File System
// const fs = require('fs');

// //menuliskan string ke file secara synchronus
// // try{
// //     fs.writeFileSync('data/test.txt', 'Hello world secara synchronus')
// // }catch(e){
// //     console.log(e)
// // }

// //menuliskan string ke file asynchronus
// // fs.writeFile('data/test.txt', 'Hello world secara asynchronus', (err) =>{
// //     console.log(err);
// // })

// // membaca isi file(synchronus)
// // const data = fs.readFileSync('data/test.txt', 'utf8');
// // console.log(data);

// //membaca isi file asynchronus
// // const data = fs.readFile('data/test.txt','utf-8', (err, data)=>{
// //     if (err) throw err;
// //     console.log(data);
// // })




// //Readline
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// //membuat folder data
// const dirPath= './data';
// if(!fs.existsSync(dirPath)){
//   fs.mkdirSync(dirPath);
// }

// //membuat file contact.json jika belum ada
// const dataPath = 'data/contact.json';
// if(!fs.existsSync(dataPath)){
//   fs.writeFileSync(dataPath, '[]', 'utf-8');
// }

// // fs.writeFile('data/contact.json',"[]",
// //             (err) =>{
// //                 console.log(err);
// //             }
// //         )

// // rl.question('What your name? ', (nama) => {
// //     rl.question('What your age? ', (umur) => {
// //         // console.log(`Hallo, ${nama}, You are ${umur} years old`);

// //         var txt = JSON.stringify(`{"nama" : "${nama}", "umur" : ${umur}},`)
// //         fs.appendFile('data/contact.json',
// //             JSON.parse(txt), 
// //             (err) =>{
// //                 console.log(err);
// //             }
// //         )

// //         rl.close();
// //     });
// // });



// //cara menambahkan data ke contact.json cara pak sandhika


// // rl.question('What your name? ', (nama) => {
// //     rl.question('What your age? ', (umur) => {
// //         // console.log(`Hallo, ${nama}, You are ${umur} years old`);
// //         const contact = {nama, umur}
// //         const file = fs.readFileSync('data/contact.json', 'utf-8');
// //         const contacts = JSON.parse(file);
        
// //         contacts.push(contact);
// //         console.log(contacts);

// //         fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

// //         console.log("Terimakasih sudah memasukan data.");

// //         rl.close();
// //     });
// // });


// //cara menangani callback hell jika pertanyaannya banyak

// const tulisPertanyaan= (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (nama) =>{
//       resolve(nama);
//     });
//   });
// };

const contacts = require('./contact');


const main = async() =>{
  const nama = await contacts.tulisPertanyaan('Masukan nama anda: ');
  const umur = await contacts.tulisPertanyaan('Masukan umur anda: ');
  const email = contacts.tulisPertanyaan('Masukan email anda: ');

  contacts.simpanContact(nama, umur, email);
}

main();