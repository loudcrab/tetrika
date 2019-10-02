let searchPairs = (array, N) => {
    let answer = [];
    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) == N) {
                if(IsOnArray(answer, array[i], array[j])) answer.push([array[i], array[j]])
            }
        }

    }

    return answer
}
//Проверка на уникальные пары
let IsOnArray = (answer, i, j) => {
    for (let pair in answer) {
        if (answer[pair][0] === i || answer[pair][1] === i) {
            return false
        }
    }
    return true
}
const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const k = 5;


console.log(searchPairs(arr, k))