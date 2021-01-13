// // SOAL ESSAY 1
// //     - Pemrograman javascript
// //         JavaScript adalah bahasa pemrograman yang biasanya digunakan untuk membuat sebuah halaman web yang dinamis dan interaktif
// //     - Aturan dasar Pada javascript
// //         * Case Sensitive
// //             Bahasa pemrograman javascript menerapkan aturan case sensitive, yaitu membedakan antara huruf besar dan huruf kecil yang ada dalam kode program. Semua perintah, variabel, dan tipe data yang berkaitan dengan aturan dan pendefinisian dari interpreter javascript harus ditulis sesuai dengan ketentuan yang ditetapkan interpreter. Sebagai contoh yaitu nama perintah harus ditulis dengan huruf kecil, apabila seorang programer menulis dengan huruf besar atau mengandung huruf besar maka perintah tersebut tidak akan dikenali.
// //         * Penulisan Perintah
// //             Setiap perintah javascript ditulis dalam satu baris tapa perlu diakhiri dengan tanda ; (titik koma). Namun demikian penggunaan titik koma masih diperkenankan walaupun tidak diperlukan.    

// // SOAL ALGORITMA PERTAMA
console.log("Soal Pertama \n");
for (let i = 1; i <= 7; i++) {
    var result = "";
    for (let j = 6; j >= i; j--) {
        result += "0";
    }
    console.log(i + result);
} console.log("\n\n");

// // SOAL KEDUA ARRAY
console.log("Soal Kedua \n" + "\nPoint 1\nMembagi array [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3] menjadi 3");
let array = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];

// //Mengelompokan array
var a = array.slice(0,11);//[1,2,33,44,55,33,44,22,44,33,2]
var b = array.slice(11,22);//[77,66,1,2,3,4,5,6,7,89,3]
var c = array.slice(22,32);//[3,8,9,75,4,3,2,2,1,3]
console.log("Array pertama = " + a, "\nArray kedua = " + b, "\nArray ketiga = " + c);

// //Shorting array
console.log("\nPoint 2\nMengurutkan Array terbesar-terkecil");
const shortA = a.sort((a, b) => {return b-a});// [1,  2,  2, 22, 33,33, 33, 44, 44, 44,55]
const shortB = b.sort((a, b) => {return b-a});// [1, 2,  3, 3,  4,5, 6, 66, 7, 77,89]
const shortC = c.sort((a, b) => {return b-a});//[1, 2,  2, 3, 3,3, 4, 75, 8, 9]
console.log("Shorting terbesar-terkecil array pertama = " + shortA, "\nShorting terbesar-terkecil array kedua = " + shortB,"\nShorting terbesar-terkecil array ketiga = " + shortC);

// //Sum array
console.log("\nPoint 3\nMenjumlahkan array");
const sumA = a.reduce((a, b) => {return a + b;});//[55,44,44,44,33,33,33,22,2,2,1]
const sumB = b.reduce((a, b) => {return a + b;});//[89,77,66,7,6,5,4,3,3,2,1]
const sumC = c.reduce((a, b) => {return a + b;});//[75,9,8,4,3,3,3,2,2,1]
console.log("Jumlah array pertama =" + sumA,"\nJumlah array kedua =" + sumB,"\nJumlah array ketiga =" + sumC);

// //Menghitung rata rata
console.log("\nPoint 4\nMenghitung rata-rata array");
const avgA = sumA / a.length;//313
const avgB = sumB / b.length;//263
const avgC = sumB / c.length;//110
console.log("Nilai rata-rata array 1 = " + avgA,"\nNilai rata-rata array 2 = " +  avgB,"\nNilai rata-rata array 3 = " +  avgC);

// //Nilai tertinggi dan terendah array
console.log("\nPoint 5\nMenghitung nilai terbesar & terkecil array");
const maxA = Math.max.apply(null, a);
const minA = Math.min.apply(null, a);
const maxB = Math.max.apply(null, b);
const minB = Math.min.apply(null, b);
const maxC = Math.max.apply(null, c);
const minC = Math.min.apply(null, c);
console.log("Nilai terbesar array 1 = " + maxA + "||", "Nilai terkecil array 1 = " + minA ,"\nNilai terbesar array 2 = " + maxB + "||","Nilai terkecil array 2 = " + minB , "\nNilai terbesar array 3 = " + maxC + "||","Nilai terkecil array 3 = " + minC);

// //Menghitung karakter yang muncul dari text
console.log("\nSoal Ketiga\n\nPoint 1");
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.";
let text2 = text.toLowerCase();
let rs = "";
for (let i = 65; i < 91; i++) {
    var str = String.fromCharCode(i);
    console.log(i + " Huruf " + str + " mucul sebanyak " + [...text2].reduce((a, c) => c === str.toLowerCase() ? ++a : a, 0) + " kali");
}
for (let j = 0; j < text.length; j++) {
    if (text[j] == " " || text.charCodeAt(j) == 44 || text.charCodeAt(j) == 46) {
        rs += text[j];
    } else if (text.charCodeAt(j) >= 118) {
        rs += String.fromCharCode(text.charCodeAt(j) - 21);
    } else if (text.charCodeAt(j) >= 86 && text.charCodeAt(j) < 97) {
        rs += String.fromCharCode(text.charCodeAt(j) - 21); 
    } else {
        rs += String.fromCharCode(text.charCodeAt(j) + 5);
    }
}
console.log("\nPoint Point 2\nMengganti karakter sebanyak 5 karakter\n");
console.log(rs);

// //Soal ke empat
console.log("\nSoal ke-empat");

//cara 1 langsung di log pakai floor untuk mengembalikan nilai menjadi bilangan bulat dari yang terbesar kurang dari atau sama dengan.
//* 100 artinya angka yang akan kita acak itu dari angka 0-99,dan diangka 100 itu minim sekali untuk keluar
console.log(Math.floor(Math.random() * 100))

//cara 2 memakai function between untuk menset dari bilangan berapa sampai berapa yang inign dirandom
//contoh yang dipakai dari angka 10 sampai 200 unutk angka yang di random
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
//   console.log(max, min);
  console.log(  
    between(10, 200)
  )

  let rand = Math.floor(Math.random() * 100)
  let tebak = 0;
  console.log("angkanya " + rand);

  do {

    tebak++
    let aaaaa = Math.floor(Math.random() * 100)
    if(aaaaa === rand){
        break
    }
    console.log("Angka yang harus ditebak adalah " + rand + " dan anda menebak " + aaaaa);

      
  } while (true);

  if (tebak > 50){
    console.log("wrong");
}
  console.log("tebakannya " + tebak + " kali");