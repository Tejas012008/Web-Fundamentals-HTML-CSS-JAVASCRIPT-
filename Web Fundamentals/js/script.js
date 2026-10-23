const clickmebtn = document.getElementById('welcomebtn');
const message = document.getElementById('message');

clickmebtn.addEventListener('click', function () {
    message.textContent = 'Hello, I m learning Web Fundamentals!';
    alert('Hello, I m learning Web Fundamentals!');
});