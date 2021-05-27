
const yargs = require('yargs');
const {simpanContact} = require('./contact');

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
    simpanContact(argv.nama, argv.email, argv.nohp)
    // const contact = {
    //   nama: argv.nama,
    //   email: argv.email,
    //   nohp: argv.nohp
    // };

    // console.log(contact);

  }
});

yargs.parse();


// const main = async() =>{
//   const nama = await contacts.tulisPertanyaan('Masukan nama anda: ');
//   const umur = await contacts.tulisPertanyaan('Masukan umur anda: ');
//   const email = contacts.tulisPertanyaan('Masukan email anda: ');

//   contacts.simpanContact(nama, umur, email);
// }

// main();
