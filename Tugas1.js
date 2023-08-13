
const prompt = require('prompt-sync')({sigint: true});

const nilai = prompt("Masukkan angka genap: ");

let message;

if(nilai<0){

    message = "Tidak bisa input bilangan negatif"

} else if(nilai % 2 !== 0) {

    message = "Tidak bisa input bilangan ganjil"

} else {

    message = "Hasil akar pangkat dua dari "+ nilai + " adalah : " +Math.sqrt(nilai);

}

console.log(message)