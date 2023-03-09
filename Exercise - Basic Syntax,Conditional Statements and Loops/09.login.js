function login(input) {
    let index = 0;

    let username = input[index];
    index++;

    let password = username.split("").reverse().join("");

    let failedAttempts = 0

    while (failedAttempts <=3) {
        let currentPassword = input[index]
        index++

        if (currentPassword !== password) {
            failedAttempts++
        } else {
            console.log(`User ${username} logged in.`)
            break;
        }

        if (failedAttempts === 4){
            console.log(`User ${username} blocked!`)
            break;
        }

        console.log(`Incorrect password. Try again.`)
    }
}
login(['Acer','login','go','let me in','recA'])