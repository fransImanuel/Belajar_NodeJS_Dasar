function cetakNama(nama){
    console.log(`Nama saya ${nama}`)
}

const PI = 3.14;

const mahasiswa = {
    nama: 'doddy ferdiansyag',
    umur: 20,
    cetakMhs(){
        return `Halo, nama saya ${this.nama}, saya ${this.umur} tahun`
    }
}

class Orang{
    constructor(){
        console.log('Object Orang telah dibuat');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mabahsiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {
    cetakNama,
    PI,
    mahasiswa,
    Orang
}