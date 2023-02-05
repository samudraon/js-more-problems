function publicBusFare(participants) {
    if (typeof participants != 'number' || participants < 50) {
        return 'Provide valid participants...'
    }

    let busSeatCapacity = 50;
    let microSeatCapacity = 11;

    let remaining = 0;
    // After calculating the amount of people who can travel by our bus
    // the value of remaining will be :-
    remaining = participants % busSeatCapacity;
    // console.log(remaining);

    // After calculating the amount of people who can travel by our microbus
    // the value of remaining will be :-
    remaining = remaining % microSeatCapacity;
    // console.log(remaining);

    // Now calculate the total cost of public bus 
    let costOfPublicBus = remaining * 250;
    return costOfPublicBus;
}
console.log(publicBusFare(365));