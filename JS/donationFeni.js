document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();
    
    // Getting number of amount donated by user
    const donation = getInputNumberById('input-feni');
    
    // Checking if donation is a number
    const number = checkIsNAN(donation);

    // Getting the present balance by number
    const mainBalance = getBalanceNumberById('main-balance');
    const feniBalance = getBalanceNumberById('feni-balance')

    // Checking the balance of user
    if(mainBalance < number){
        alert('Insufficiant Balance!');
        document.getElementById('input-feni').value = '';
        return;
    }
    else{
        alert(`Congratulations! You donated ${number}Tk.`)
        const newBalanceFeni = feniBalance + number;
        const newMainBalance = mainBalance - number;
        document.getElementById('feni-balance').innerText = newBalanceFeni;
        document.getElementById('main-balance').innerText = newMainBalance;
        document.getElementById('input-feni').value = '';

    }
})