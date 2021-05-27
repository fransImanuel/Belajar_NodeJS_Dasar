const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('sandhikagmail.com'));
// console.log(validator.isMobilePhone('08123456789', 'id-ID'));
// console.log(validator.isNumeric('08123456789s'));

// console.log(bgGreen.italic.blackchalk.black.italic.bgBlue('Hello World!'));
const nama = 'frans';
const pesan = chalk`Lorem ipsum dolor {bgBlue.black sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Facere, rerum. nama saya : ${nama}`;
// console.log(chalk.bgRed.black(pesan));
console.log(pesan);