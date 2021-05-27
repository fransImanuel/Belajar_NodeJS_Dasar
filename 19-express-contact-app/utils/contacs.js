const { filter } = require('async');
const fs = require('fs');

//membuat folder data
const dirPath= './data';
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
};

//membuat file contact.json jika belum ada
const dataPath = 'data/contact.json';
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath, '[]', 'utf-8');
};

// ambil semua data contact json
const loadContact = ()=>{
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama)=>{
    const contacts = loadContact();
    const contact = contacts.find( contact => contact.nama.toLowerCase() === nama.toLowerCase() )
    return contact;
};

// menuliaskan/menipa file contacts.json dengan yg baru
const saveContacts = (contacts)=>{
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
};

//menambahkan data contact baru
const addContact = (contact)=>{
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

// cek nama yang diduplikat
const cekDuplikat = (nama)=>{
  const contacts = loadContact();
  return contacts.find((contact)=>contact.nama === nama);
}

// hapus contact
const deleteContact = (nama)=>{
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact)=> contact.nama !== nama);
  saveContacts(filteredContacts);
};

const updateContacts = (contactBaru)=>{
  const contacts = loadContact();
  // hilangkan contact lama yang namanya sama dengan oldNama
  const filteredContacts = contacts.filter((contact)=> contact.nama !== contactBaru.oldNama);
  delete contactBaru.oldNama;
  filteredContacts.push(contactBaru);
  saveContacts(filteredContacts);
}


module.exports = {
    loadContact,
    findContact,
    addContact,
    cekDuplikat,
    deleteContact,
    updateContacts
  
}