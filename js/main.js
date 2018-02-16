var rightAsideLink = document.querySelector('#right-aside-link');
var leftAsideLink = document.querySelector('#left-aside-link');

rightAsideLink.addEventListener('click', function (e) {
    var rightAsideBlock = document.querySelector('.right-aside');
    rightAsideBlock.classList.toggle('right-aside-show');
    e.preventDefault();
});

leftAsideLink.addEventListener('click', function (e) {
    var leftAsideBlock = document.querySelector('.left-aside');
    leftAsideBlock.classList.toggle('left-aside-show');
    e.preventDefault();
});