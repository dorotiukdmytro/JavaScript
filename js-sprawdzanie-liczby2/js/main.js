function checkNumbers(number1, number2) {
    if ((number1 == 20 || number2 == 20) || (number1 + number2) <= 20) {
        return true;
    }
}

console.log(checkNumbers(10, 5));