function isBestFriend(objectOne, objectTwo) {
    if (objectOne.name == objectTwo.friend && objectTwo.name == objectOne.friend) {
        return true;
    }
    else {
        return false;
    }
}

let bestFriend1 = { name: "abul", friend: "babul" }
let bestFriend2 = { name: "babul", friend: "abul" }
const result = isBestFriend(bestFriend1, bestFriend2);
console.log(result);