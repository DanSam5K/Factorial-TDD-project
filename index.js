const Calculate = {
    //
    factorial(inputNum) {
        for (let i = inputNum - 1; i >= 1; i--){
            inputNum *= i;
        }
        return inputNum;
    }
}

module.exports = Calculate;