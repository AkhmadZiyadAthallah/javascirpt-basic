
// Tugas 1
/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut() {
    return "Halo Function"
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console



/*
 BUATLAH KODE FUNCTION DISINI
*/

function calculateMultiply(num1, num2) {
    return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


// Tugas 3
/*
 BUATLAH KODE FUNCTION DISINI
*/

function processSentence(name,age,address,hobby){
    return ("Nama saya " + name + " " + "Umur saya " + age + " " + "tahun." + " " + "Saya tinggal di " + address + " " + "Hobi saya" + " " + hobby)
}

var name = "Ziyad.";
var age = "15";
var address = "Jln. Tun Abdul Razak, Makassar.";
var hobby = "badminton.";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

// Menampilkan nama, umur, alamat, dan hobby