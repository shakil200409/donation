// Getting number of amount donated by user
function getInputNumberById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// Checking if it is a number
function checkIsNAN(input){
    const inputNumber = input;
    if(isNaN(input)){
        alert('Failed to donate!');
        return;
    }
    else{
        return input;
    }
}

// Getting the balance by number
function getBalanceNumberById(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance);
    return balanceNumber;
}

