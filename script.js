document.addEventListener('DOMContentLoaded', () => {
    const backgroundElement = document.querySelector('.background');
    
    const highResImage = new Image();
    highResImage.src = 'bg0.jpg';
    
    highResImage.onload = () => {
        backgroundElement.classList.add('image-loaded');
    };
});
