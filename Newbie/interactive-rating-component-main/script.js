var rateBox = document.getElementById('rate-box');
var thanksBox = document.getElementById('thanks-box');
var numbers = document.querySelectorAll('span');
var btnSubmit = document.querySelector('button');
var userRate = document.getElementsByClassName('user-rate')[0];

window.addEventListener('load', () => {
    thanksBox.style.display = 'none';
    // rateBox.style.display = 'none';
    localStorage.removeItem('stars-quantity');
})

$('span').click(function () {
    $('span').removeClass('active')
    $(this).addClass('active')
    console.log(this.innerHTML)
    localStorage.setItem('stars-quantity', this.innerHTML);
})

$('button').click(function () {
    if (localStorage.getItem('stars-quantity') === null) {
        alert("Please, don't forget to hate us")
    } else {
        rateBox.style.display = 'none';
        thanksBox.style.display = 'block';
        userRate.innerHTML = localStorage.getItem('stars-quantity');
    }
})
