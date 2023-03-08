function sumOfOddNumbers(max){

    let total = 0
    let oddNum = 1

    for (let i = 1; i <= max; i++){
        console.log(oddNum)

        total += oddNum
        oddNum += 2
    
    }
    console.log(`Sum: ${total}`)
}
sumOfOddNumbers(3)