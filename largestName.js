/* 
John
Alexis

return hobe: sixelA
*/

function reverseName(name1, name2) {
    if (name1.length> name2.length){
        return name1.split('').reverse().join('');
    }
    else {
        return name2.split('').reverse().join('');
    }
}

const result = reverseName('John', 'Alexis');
// console.log(result);

// optional way for reversing string

