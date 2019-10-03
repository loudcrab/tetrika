//Функция считает какая по счету буква в алфавите
let getNumberOfLetter = (let) => {
    let startPos = 'a'.charCodeAt(0),
        currentPos = let.toLowerCase().charCodeAt(0);
    return (currentPos - startPos + 1)
}

//Функция складывает getNumberOfLetter
let getAdditionOfWord = (letter) => {
    let additionOfWord = 0
    // Удаляем ковычки из начала и конца слова
    letter = letter.replace('"', "").replace('"', "")
    for (let i = 0; i < letter.length; i++) {

        additionOfWord += getNumberOfLetter(letter.charAt(i))

    }
    return additionOfWord
}
//Считает сумму произведения положения имени и сумму счета букв
let sumOfAllLetters = (file, sum, iterator) => {
    for (let letter in file) {


        iterator++
        let MultiplicationOfWord = getAdditionOfWord(file[letter])
        sum = sum + (MultiplicationOfWord * iterator)
    }
    return sum
}

let iterator = 0
let sum = 0
//fs модуль node.js для чтения файлов
let fs = require('fs');

//Проверка на существование файла
fs.exists('names.txt', (exists) => {
    if(exists){
        //Мы считывает файл, далее сплитим в массив и сортируем
        let file = fs.readFileSync('names.txt', 'utf8').split(',').sort();
        console.log(sumOfAllLetters(file, sum, iterator))
    } else {
        console.log("Файл не найден")
    }
});







