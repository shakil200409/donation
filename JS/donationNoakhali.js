document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    
    // Getting number of amount donated by user
    const donation = getInputNumberById('input-noakhali');
    
    // Checking if donation is a number
    const number = checkIsNAN(donation);

    // Getting the present balance by number
    const mainBalance = getBalanceNumberById('main-balance');
    const noakhaliBalance = getBalanceNumberById('noakhali-balance')

    // Checking the balance of user
    if(mainBalance < number){
        alert('Insufficiant Balance!');
        document.getElementById('input-noakhali').value = '';
        return;
    }
    else{
        alert(`Congratulations! You donated ${number}Tk.`)
        const newBalanceNoakhali = noakhaliBalance + number;
        const newMainBalance = mainBalance - number;
        document.getElementById('noakhali-balance').innerText = newBalanceNoakhali;
        document.getElementById('main-balance').innerText = newMainBalance;
        document.getElementById('input-noakhali').value = '';

    }

    console.log(donation, noakhaliBalance, mainBalance);




})

