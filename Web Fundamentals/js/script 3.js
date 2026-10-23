const button = document.getElementById('button');
const profileInfo = document.getElementById('profile-info');
const skillGrid = document.getElementById('skill-grid');

button.addEventListener('click', function () {
    profileInfo.textContent = 'I’m Tejas Namde, a first-year B.Tech CSE student at ITM Skills University, learning web development and Python.';
    profileInfo.hidden = false;
    skillGrid.hidden = false;
});