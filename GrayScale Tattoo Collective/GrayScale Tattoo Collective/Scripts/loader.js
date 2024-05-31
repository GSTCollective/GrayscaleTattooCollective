
document.addEventListener('DOMContentLoaded', function() {
    // Delay to ensure the loading animation is displayed
    setTimeout(function() {
        var loaderWrapper = document.querySelector('.loader-wrapper');
        loaderWrapper.classList.add('hidden'); // Add hidden class after delay
        loaderWrapper.addEventListener('transitionend', function() {
            loaderWrapper.style.display = 'none'; // Hide loader after transition
        });

        // Enable scrolling after loading
        document.body.style.overflow = 'auto';
    }, 2000); 
});
