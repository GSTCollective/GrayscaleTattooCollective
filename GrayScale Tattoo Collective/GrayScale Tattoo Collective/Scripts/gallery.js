
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Set up smooth transitions for tattoo images on hover
        var tattooImages = document.querySelectorAll('.tattooimg');

        tattooImages.forEach(function(image) {
            image.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.transition = 'transform 0.3s ease';
            });

            image.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.transition = 'transform 0.3s ease';
            });
        });
    }, 2000); 
});
