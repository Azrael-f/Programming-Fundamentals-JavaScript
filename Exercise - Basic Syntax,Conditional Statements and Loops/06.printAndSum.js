function printAndSum(start, end){

    let sum = 0
    let result = ''

    for (let currentNum = start; currentNum <= end; currentNum++){
        sum += currentNum
        result += `${currentNum} `
    }

    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)