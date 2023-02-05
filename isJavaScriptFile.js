function isJavaScriptFile(filename) {
    if (filename.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}

const result = isJavaScriptFile('index.js');
console.log(result);


// optional way
function isJavaScriptFile(filename) {
    if (filename[filename.length - 1] == 's') {
        if (filename[filename.length - 2] == 'j') {
            if (filename[filename.length - 3] == '.') {
                return true;
            }
        }
    }
    return false;
}
// const result = isJavaScriptFile('index.js');
// console.log(result);