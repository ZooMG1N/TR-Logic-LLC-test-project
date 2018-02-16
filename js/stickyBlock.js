var wrapperVisibleBlock;
var headerHeight = document.querySelector('.header');
var visibleBlock = document.querySelector('.visible-block');
var mainContentBlock = document.querySelector('.main-content');

window.addEventListener('scroll', function stickyScroll() {
    if (wrapperVisibleBlock == null) {
        var styleWrapper = getComputedStyle(visibleBlock), s = '';

        for (var i = 0; i < styleWrapper.length; i++) {
            if (styleWrapper[i].indexOf('border') == 0 || styleWrapper[i].indexOf('background') == 0) {
                s += styleWrapper[i] + ': ' + styleWrapper.getPropertyValue(styleWrapper[i]) + '; '
            }
        }
        wrapperVisibleBlock = document.createElement('div');
        wrapperVisibleBlock.style.cssText = s + 'width: 200px; height: 500px;';

        visibleBlock.insertBefore(wrapperVisibleBlock, visibleBlock.firstChild);
        visibleBlock.style.border = '0';

        for (var i = 1; i < visibleBlock.childNodes.length; i++) {
            wrapperVisibleBlock.appendChild(visibleBlock.childNodes[1]);
        }
    }

    if (headerHeight.getBoundingClientRect().top <= 0) {
        headerHeight.style.position = 'fixed';
        mainContentBlock.style.top = '0px';
    }

    if (visibleBlock.getBoundingClientRect().top <= headerHeight.scrollHeight) {
        wrapperVisibleBlock.classList.add('sticky');
    } else {
        wrapperVisibleBlock.classList.remove('sticky');
    }
});