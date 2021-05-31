'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Image";
    }
    else {
        this.textContent = "Green";
    }
    console.log('current class name: ' + className);
});