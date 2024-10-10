//Activation for Donation Button
document.getElementById('btn-donation').addEventListener('click', function(){
    activeBtn('btn-donation');
    activeSection('donation-cards-container');
    btnShow('blog-btn');
});

// Activation for History Button
document.getElementById('btn-history').addEventListener('click', function(){
    activeBtn('btn-history');
    activeSection('history-section');
    btnShow('blog-btn')
});

// Activation for Blog Button
document.getElementById('home-btn').addEventListener('click', function(){
    activeSection('donation-cards-container');
    btnShow('blog-btn');
    activeBtn('btn-donation');
});

// Home Button Activation
document.getElementById("blog-btn").addEventListener("click", function () {
    activeSection("faq-section");
    btnShow("home-btn");
    document.getElementById('btn-donation').classList.remove('bg-btn-green');
    document.getElementById('btn-history').classList.remove('bg-btn-green');
    document.getElementById('btn-donation').classList.add('border', 'border-light-gray');
    document.getElementById('btn-history').classList.add('border', 'border-light-gray');
    
    
  });