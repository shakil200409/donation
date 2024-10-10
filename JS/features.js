document.getElementById('btn-donation').addEventListener('click', function(){
    activeBtn('btn-donation');
    activeSection('donation-cards-container');
    btnShow('blog-btn');
})

document.getElementById('btn-history').addEventListener('click', function(){
    activeBtn('btn-history');
    activeSection('history-section');
    btnShow('blog-btn')
})

document.getElementById('home-btn').addEventListener('click', function(){
    activeSection('donation-cards-container');
    btnShow('blog-btn');
})