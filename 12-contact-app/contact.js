
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

//Readline
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

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

// const tulisPertanyaan= (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (nama) =>{
//       resolve(nama);
//     });
//   });
// };

const loadContact = ()=>{
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
}


const simpanContact = (nama, email, nohp)=>{
  const contact = {nama, email, nohp};
  const contacts = loadContact();

  //cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if(duplikat){
    console.log(chalk.red.inverse.bold`Contact Sudah Terdaftar, Gunakan Nama Lain!`);
    return false;
  }

  //cek email
  if(email){
    if(!validator.isEmail(email)){
      console.log(chalk.red.inverse.bold`Email tidak valid!`);
    return false;
    }
  }

  //cek nohp
  if(!validator.isMobilePhone(nohp, 'id-ID')){
    console.log(chalk.red.inverse.bold`No HP tidak valid!`);
  return false;
  }
  
  contacts.push(contact);
  // console.log(contacts);

  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold("Terimakasih sudah memasukan data."));

  // rl.close();
}

const listContacts = ()=>{
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar Kontak :"));
  contacts.forEach( (contact, i) =>{
    console.log(`${i+1}. ${contact.nama} - ${contact.nohp}`);
  });
};

const detailContact = (nama)=>{
  const contacts = loadContact();

  const contact = contacts.find( contact => contact.nama.toLowerCase() === nama.toLowerCase() )

  if(!contact){    
    console.log(chalk.red.inverse.bold`${nama} tidak ditemukan`);
    return false;
  }
  console.log(chalk.cyan.inverse.bold`${contact.nama}`);
  console.log(contact.nohp);
  if(contact.email){
    console.log(contact.email);
  }
}

const deleteContact = (nama)=>{
  const contacts = loadContact();
  const newContacts =  contacts.filter(    
      contact => contact.nama.toLowerCase() !== nama.toLowerCase()
    );
  
  if(contacts.length == newContacts.length){    
    console.log(chalk.red.inverse.bold`${nama} tidak ditemukan`);
    return false;
  }

  
  fs.writeFileSync('data/contact.json', JSON.stringify(newContacts));
  console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus!`));

  
};  

module.exports = {
    // tulisPertanyaan,
    simpanContact,
    listContacts,
    detailContact,
    deleteContact
}