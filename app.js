// 1-savol

// 2-savol

// let arr = ["salom", 12, "nima", true]

// function func(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == "string") {
//             newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//         }
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);


// 3-savol

// let str = "salom123";

// function func(arr) {
//     let res = "";

//     for (let i = 0; i < arr.length; i++) {
//         let char = arr[i];
//         if (char < "0" || char > "9") {
//             res += char;
//         }
//     }

//     return res;
// }

// let natija = func(str);
// console.log(natija);


// 4-savol

// let arr = ["salom", 410]

// function func(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == "string") {
//             newArr.push(arr[i])
//         };

//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);

// 5-savol

// let str = "salom nima gaplar"
// let arr = str.split(" ")

// function func(arr) {
//     let res = arr.length

//     return res
// }

// let natija = func(arr)
// console.log(natija);


// 6-savol

// let arr = ["gap", "salom", "nima"]

// function func(arr) {
//     return arr.sort(function (a, b) {
//         return a.length - b.length
//     })
// }

// let natija = func(arr)
// console.log(natija);

// 7-savol
// let str = "Hello, World!";

// function func(str) {
//     const vowels = 'aeiouAEIOU';
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (!vowels.includes(char)) {
//             result += char;
//         }
//     }

//     return result;
// }

// let result = func(str);
// console.log(result);


// 8-savol

// let arr = ["gap", "salom", "nima"]

// function func(arr) {
//     let newArr = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > newArr.length) {
//             newArr = arr[i]
//         }

//     }

//     return newArr

// }

// let natija = func(arr)
// console.log(natija);


// 9-savol


// let str = "salom nima"
// let arr = str.split(" ")

// function func(arr) {
//     let res = []

//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i].split("").reverse().join(""))

//     }

//     return res.join(" ")
// }

// let natija = func(arr)
// console.log(natija);



// 10-savol
// let array = ["apple", "banana", "apple", "orange", "apple", "banana"];
// let searchStr = "apple";

// function func(arr, str) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === str) {
//             count++;
//         }
//     }

//     return count;
// }

// let result = func(array, searchStr);
// console.log(result); 



// kanspek

// Local vs Global vs Block

// Global scope - dasturdagi har qanday joydan murojaat qilish mumkin
// Local scope - faqat ma'lum bir funksiya ichida mavjud bo‘lgan o'zgaruvchilarni bildiradi funksiyadan tashqarida mavjud emas.
// Block scope - faqat ma'lum bir kod blokida (masalan, if, for, while bloklarida) mavjud bo‘lgan o'zgaruvchilarni bildiradi. 


// Optional Chaining ?
    // Agar siz nested obyektlarda mavjud bo'lmagan xususiyatlarga murojaat qilsangiz, odatda xatolik yuzaga keladi. Optional chaining bu muammoni hal qiladi, chunki u xususiyat mavjud bo'lmagan taqdirda undefined qaytaradi.
// (?)

// Nullish coleption

// Agar siz qiymatning mavjudligini tekshirib, u mavjud bo'lmasa, biror alternativ qiymatni qaytarish kerak bo'lsa, ?? operatori juda foydalidir. ?? operatori null va undefined qiymatlarini tekshiradi, ammo 0, '' (bo'sh string), false, va boshqa "falsey" qiymatlar bilan ishlamaydi. (??)


