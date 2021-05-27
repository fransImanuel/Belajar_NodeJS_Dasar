
const yargs = require('yargs');
const contacts = require('./contact');

yargs.command({
  command: 'add',
  describe: 'Menambahkan contact baru',
  builder: {
    nama:{
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'string'
    },
    email:{
      describe: "Email",
      demandOption: false,
      type: 'string'
    },
    nohp:{
      describe: "No Handphone",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    contacts.simpanContact(argv.nama, argv.email, argv.nohp)
    // const contact = {
    //   nama: argv.nama,
    //   email: argv.email,
    //   nohp: argv.nohp
    // };

    // console.log(contact);

  }
}).demandCommand();

//menampilkan daftar semua nama&nohp contact
yargs.command({
  command: 'list',
  describe: 'Menampilkan semua nama dan nohp',
  handler(){
    contacts.listContacts();
  }
})

// menampilkan detail sebuah kontak
yargs.command({
  command: 'detail',
  describe: 'Menampilkan detail sebuah kontak',
  builder:{
    nama:{
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv){
    contacts.detailContact(argv.nama);
  }
})

// menghapus berdasarkan nama
yargs.command({
  command: 'delete',
  describe: 'Menghapus kontak berdasarkan nama',
  builder:{
    nama:{
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv){
    contacts.deleteContact(argv.nama);
  }
})


yargs.parse();


// const main = async() =>{
//   const nama = await contacts.tulisPertanyaan('Masukan nama anda: ');
//   const umur = await contacts.tulisPertanyaan('Masukan umur anda: ');
//   const email = contacts.tulisPertanyaan('Masukan email anda: ');

//   contacts.simpanContact(nama, umur, email);
// }

// main();
