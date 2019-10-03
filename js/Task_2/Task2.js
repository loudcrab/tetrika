//fs модуль node.js для чтения файлов
let fs = require('fs');

//Функция считает какая по счету буква в алфавите
let getNumberOfChar = (char) => {
    let startPos = 'a'.charCodeAt(0),
        currentPos = char.toLowerCase().charCodeAt(0);
    return (currentPos - startPos + 1)
}

//Функция складывает getNumberOfLetter
let getAdditionOfWord = (word) => {
    additionOfWord = 0
    // Удаляем ковычки из начала и конца слова
    word = word.replace(/"/g, '')

    for (let i = 0; i < word.length; i++) additionOfWord += getNumberOfChar(word.charAt(i))
    return additionOfWord
}
//Считает сумму произведения положения имени и сумму счета букв
let sumOfAllLetters = (file) => {
    for (let word of file) {
        iterator++
        sum += (getAdditionOfWord(word) * iterator)
    }
    return sum
}

let iterator = 0
let sum = 0
let additionOfWord
//Проверка на существование файла


let file = fs.readFileSync('na2mes.txt', 'utf8')
console.log(sumOfAllLetters(file.split(',').sort()))






