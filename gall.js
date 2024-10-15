// Function to open the lightbox with the full image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const fullImage = document.getElementById('full-image');
    fullImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    exitFullScreen(); // Ensure that full-screen mode is exited when the lightbox closes
}

// Function to toggle full-screen mode
function toggleFullScreen(event) {
    event.stopPropagation(); // Prevent the lightbox from closing when clicking the button
    const lightbox = document.getElementById('lightbox');

    if (!document.fullscreenElement) {
        lightbox.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Function to filter images based on search input
function filterImages() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const images = document.querySelectorAll('.masonry-item');

    images.forEach(image => {
        const altText = image.querySelector('img').alt.toLowerCase();
        image.style.display = altText.includes(searchInput) ? 'block' : 'none';
    });
}
// Open the lightbox modal
function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
}

// Close the lightbox modal
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Navigate to a specific slide in the lightbox
function openSlide(index) {
    let slides = document.getElementsByClassName('lightbox-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}

// Function to enter full-screen mode for the image
function openFullScreen(imageElement) {
    if (imageElement.requestFullscreen) {
        imageElement.requestFullscreen();
    } else if (imageElement.webkitRequestFullscreen) { /* Safari */
        imageElement.webkitRequestFullscreen();
    } else if (imageElement.msRequestFullscreen) { /* IE11 */
        imageElement.msRequestFullscreen();
    }
}