console.log( 'test this' );


// Mobile Menu Toggling
let menuBTN = document.querySelector ('.menuBTN')
let mobileMenuList = document.querySelector ('.mobileMenuList')
menuBTN.addEventListener('click', function (){
    menuBTN.classList.toggle('close');
    mobileMenuList.classList.toggle('slideIn');
})


// JS Library 1. Glide js
new Glide('.glide').mount();
new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    gap: 0,
    autoplay: 2000
  }).mount();

// JS Library 2. Granim.js -->
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});


