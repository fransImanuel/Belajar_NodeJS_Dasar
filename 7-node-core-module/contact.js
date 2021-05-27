
const fs = require('fs');

//Readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//membuat folder data
const dirPath= './data';
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
}

//membuat file contact.json jika belum ada
const dataPath = 'data/contact.json';
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan= (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) =>{
      resolve(nama);
    });
  });
};


const simpanContact = (nama, umur, email)=>{
const contact = {nama, umur, email};
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  
  contacts.push(contact);
  console.log(contacts);

  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

  console.log("Terimakasih sudah memasukan data.");

  rl.close();
}

module.exports = {
    tulisPertanyaan,
    simpanContact
}