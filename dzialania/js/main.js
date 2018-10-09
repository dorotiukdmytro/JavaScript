function operationsWithNumbers(number1, number2, number3) {
    let summ = number1 + number2 + number3;
    let subtract = number1 - number2 - number3;
    let multiply = number1 * number2 * number3;

    console.log('Wynik dodawania wynosi: ' + summ);
    console.log('Wynik odejmowania wynosi: ' + subtract);
    console.log('Wynik mnożenia wynosi: ' + multiply);

    if (summ < 0 || subtract < 0 || multiply < 0) {
        console.log('Wynik jest ujemny');
    }
}

operationsWithNumbers(1, 2, 3);