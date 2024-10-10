// Getting number of amount donated by user
function getInputNumberById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    if(inputNumber > 0){
        return inputNumber;
    }
    else{
        alert('Failed to Donate');
    }
}

// Getting the balance by number
function getBalanceNumberById(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance);
    return balanceNumber;
}

// Active section by click
function activeSection(id){
    document.getElementById('donation-cards-container').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

// Button active after click
function activeBtn(id){
    document.getElementById('btn-donation').classList.add('border');
    document.getElementById('btn-donation').classList.remove('bg-btn-green', 'text-black');

    document.getElementById('btn-history').classList.add('border');
    document.getElementById('btn-history').classList.remove('bg-btn-green', 'text-black');

    document.getElementById(id).classList.remove('border');
    document.getElementById(id).classList.add('bg-btn-green', 'text-black');
}
