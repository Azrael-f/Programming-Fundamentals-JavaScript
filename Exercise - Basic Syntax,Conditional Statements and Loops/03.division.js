function division(number) {

    let devisionableNumber = 0

    if (number % 10 === 0) {
        devisionableNumber = 10;
    } else if (number % 7 === 0) {
        devisionableNumber = 7
    } else if (number % 6 === 0) {
        devisionableNumber = 6
    } else if (number % 3 === 0) {
        devisionableNumber = 3
    } else if (number % 2 === 0) {
        devisionableNumber = 2
    } else {
        console.log('Not divisible')
        return;
    }
    console.log(`The number is divisible by ${devisionableNumber}`);

}
division(1643)