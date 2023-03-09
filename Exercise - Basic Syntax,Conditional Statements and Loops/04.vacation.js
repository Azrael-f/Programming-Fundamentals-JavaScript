function vacation(peopleC, typeOfGroup, dayOfTheWeek) {

    let totalPrice = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfTheWeek === "Friday") {
                totalPrice = peopleC * 8.45;
            } else if (dayOfTheWeek === "Saturday") {
                totalPrice = peopleC * 9.80;
            } else if (dayOfTheWeek === "Sunday") {
                totalPrice = peopleC * 10.46;
            }
            if (peopleC >= 30) {
                totalPrice *= 0.85
            }
            break;
        case "Business":
            if (peopleC >= 100) {
                peopleC -= 10
            }
            if (dayOfTheWeek === "Friday") {
                totalPrice = peopleC * 10.90;
            } else if (dayOfTheWeek === "Saturday") {
                totalPrice = peopleC * 15.60;
            } else if (dayOfTheWeek === "Sunday") {
                totalPrice = peopleC * 16;
            }
            break;
        case "Regular":
            if (dayOfTheWeek === "Friday") {
                totalPrice = peopleC * 15;
            } else if (dayOfTheWeek === "Saturday") {
                totalPrice = peopleC * 20;
            } else if (dayOfTheWeek === "Sunday") {
                totalPrice = peopleC * 22.50;
            }
            if (peopleC >= 10 && peopleC <= 20) {
                totalPrice *= 0.95
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday")