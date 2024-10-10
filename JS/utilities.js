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
    document.getElementById('faq-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

// Button active after click
function activeBtn(id){
    document.getElementById('btn-donation').classList.add('border', 'border-light-gray');
    document.getElementById('btn-donation').classList.remove('bg-btn-green', 'text-black');

    document.getElementById('btn-history').classList.add('border', 'border-light-gray');
    document.getElementById('btn-history').classList.remove('bg-btn-green', 'text-black');

    document.getElementById(id).classList.remove('border');
    document.getElementById(id).classList.add('bg-btn-green', 'text-black');
}

// Adding history function
function addToHistory(input, title){
    const div = document.createElement('div');
    div.classList.add('border-2', 'border-white-gray', 'rounded-xl', 'lg:rounded-3xl', 'p-5', 'my-5')
    div.innerHTML = `
    <h2 class="text-xl font-bold">${input} Taka is donated for ${title}</h2>
    `

    document.getElementById('history-section').appendChild(div);
}

// Confirmation Function
function donationConfirmMsg(input){
    const div = document.createElement('div');
    div.setAttribute('id', 'confirmation-card')
    div.classList.add('bg-stone-100', 'my-10', 'rounded-xl', 'p-5', 'lg:p-10', 'flex', 'flex-col', 'items-center', 'w-3/4', 'lg:w-2/5', 'mx-auto', 'absolute', 'inset-x-0', 'left-0', 'top-14', 'lg:top-44', 'drop-shadow-2xl');  
    div.innerHTML = `
    <h1 class="text-2xl lg:text-3xl font-bold mb-5">Congratulations!</h1>
    <div class="h-10 w-10 lg:h-14 lg:w-14">
    <img class="w-full" src="assets/coin.png">
    </div>
    <p class="py-5 text-dark-gray text-center">You Have Donated ${input} Taka for Humankind</p>
    <h2 class="font-bold text-lg lg:text-2xl pb-5">Successfully</h2>
    <button id="close-btn" class="bg-light-gray px-5 py-3 rounded-lg">Close Confirmation</button>
    `;

    document.getElementById('header').appendChild(div);
    
    document.getElementById('confirmation-card').classList.remove('hidden');
    
    document.getElementById('close-btn').addEventListener('click', function(){
        div.remove();
    })
}

// Home and Blog Button function
function btnShow(id){
    document.getElementById('blog-btn').classList.add('hidden');
    document.getElementById('home-btn').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}