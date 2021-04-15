//EXERCISE 1
const area = function(L,B){
    let result = L * B
    return result
}
console.log(area(11,12))

//EXERCISE 2
const crazySum = function(number1, number2){
    if(number1 === number2){
        let result = (number1 + number2) * 3
        return result
    }
    let result = number1 + number2
    return result
}
console.log(crazySum(2,3))
console.log(crazySum(3,3))

//EXERCISE 3
const crazyDiff = function(numberToSubtract){
    if (numberToSubtract > 19){
        let result = (numberToSubtract - 19) * 3
        return result
    }
    let result = numberToSubtract - 19
    return result
}
console.log(crazyDiff(20))
console.log(crazyDiff(18))

//EXERCISE 4
const boundary = function(integerN){
    if (integerN === 400){
        let result = true
        return result
    }
    if (integerN >= 20){
        let result = true
        return result
    } else if (integerN < 20){
        let result = false
        return result
    }
    if (integerN <=100 ){
        let result = true
        return result
    } else if (integerN > 100){
        let result = false
        return result
    }
}
console.log(boundary(400))
console.log(boundary(1))
console.log(boundary(15))
console.log(boundary(20))

//EXERCISE 5
let string = 'in strive school'
const strivify = function(){
    if (string.startsWith('in')) {
        let result = ('strive '+ string)
        return result
    }   
}
console.log(strivify(string))
console.log(string)

//EXERCISE 6
const check3And7 = function(positiveNumber){
    if (positiveNumber % 3 === 0 || positiveNumber % 7 === 0){
         let result = true
         return result
        }
}
console.log(check3And7(3))
console.log(check3And7(4))

//EXERCISE 7

//EXERCISE 8

//EXERCISE 9

//EXERCISE 10
