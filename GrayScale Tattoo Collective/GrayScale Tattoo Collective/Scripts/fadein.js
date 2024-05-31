document.addEventListener('DOMContentLoaded', function() {
    function fadeInElements(elements) {
        elements.forEach(function(element) {
            element.style.opacity = '1';
        });
    }

    setTimeout(function() {
        // elements to be faded in
        var elementsToFadeIn = [
            document.querySelector('header'),
            document.querySelector('#heroimg'),
            ...document.querySelectorAll('.content-container'),
            document.querySelector('.artists-container'),
            ...document.querySelectorAll('.section'),
            ...document.querySelectorAll('.sectionH1'),
            document.querySelector('#gallery'),
            document.querySelector('footer'),
            document.querySelector('#services-container')
        ];

        
        elementsToFadeIn = elementsToFadeIn.filter(element => element !== null);

        // Fade in all elements
        fadeInElements(elementsToFadeIn);
    }, 2000); 
});
