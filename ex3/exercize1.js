const arr = [1, 2, 3, 4, 5, 6];
let anotherArray = [];

for (let i = 0; i < arr.length; i += 2) {
  anotherArray.push([arr[i], arr[i + 1]]);
  console.log(`${arr[i]}  ${arr[i + 1]}`)
}

console.log(anotherArray);
const string = 'Маша ела кашу';
let changedString = string.slice(0, string.length - 2) + string.slice(-1);

console.log('Строка до изменениия: ' + string + '\nСТрока после изменения: ' + changedString);

const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const size = Math.floor(array.length / 2)

var firstSum = 0
for (let i = 0; i < size; i+=1){
    firstSum += array[i]
}

var secondSum = 0
for (let i = size; i < array.length; i+=1){
    secondSum += array[i]
}

console.log("Результат деления первой половины массива на сумму второй половины = " + Math.floor(firstSum / secondSum))

var inputString = window.prompt("Введите первую строку: ", "")
var inputString2 = window.prompt("Введите вторую строку: ", "")
var result1 = false

if (inputString[inputString.length - 1] != inputString2[0]){
    console.log('Последняя буква первого не совпадает с первой буквой второго.')
} else {
    console.log('Последняя буква первого совпадает с первой буквой второго.')
    result1 = true;
}

var dict = {
    name: 'Джейк',
    age: 30,
    isMarried: false,
    cityLive: "New-York"
}

for (var item in dict){
    console.log("Ключ: " + item + ", значение: " + dict[item])
}

const chars = 'abcdef'
let result = ''

for (let i = 0; i < chars.length; i += 2) {
  result += chars.charAt(i).toUpperCase()
  if (i + 1 < chars.length) {
    result += chars.charAt(i + 1)
  }
}

console.log(result)

let dictOfResults = {
    exerceze1: anotherArray,
    exerceze2: changedString,
    exerceze3: Math.floor(firstSum / secondSum),
    exerceze4: result1,
    exerceze5: dict,
    exerceze6: result
}

for (item in dictOfResults){
    console.log(item + ": " + dictOfResults[item])
}