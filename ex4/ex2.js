const array = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]

function countNegativeNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
    return count;
  }

console.log("Количество отрицательных элементов в массиве: " + countNegativeNumbers(array))

const array1 = [1, 2, 3, 4, 5, 6]

function divideNums(arr){
    let result = 0
    let firstHalfSum = 0
    let secondHalfSum = 0

    for (let i = 0; i < arr.length / 2; i++){
        firstHalfSum += arr[i]
    }

    for (let j = arr.length /2; j < arr.length; j++){
        secondHalfSum += arr[j]
    }

    result = firstHalfSum / secondHalfSum

    return result
}

console.log("Частное первой и второй половин массива: " + divideNums(array1))

function printNumbersWithSumOfDigitsFive(){
    for (let i = 14; i <= 1000; i++){
        let firstDigit = Math.floor(i / 10)
        let secondDigit = i % 10

        if (firstDigit + secondDigit == 5){
            console.log(i)
        } 
    }
}

console.log(printNumbersWithSumOfDigitsFive())

let resultArray = {}
const arrForMerge = [1, 2, 3]
const arrayForMerge1 = [4, 5, 6]

function mergeArrays(arr1, arr2){
    resultArray = arr1.concat(arr2)
    return resultArray
}

console.log(mergeArrays(arrForMerge, arrayForMerge1))

const percentArr = [123, 12315, 4534, 2342, 1233, 543]

function increaseNumbersByTenPercent(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] *= 1.1
    }
    return arr
}

console.log(increaseNumbersByTenPercent(percentArr))