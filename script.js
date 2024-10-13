const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg'
];

let currentImageIndex = 0;

// Get DOM elements
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the main image and highlight the active thumbnail
function updateGallery(index) {
    mainImage.src = images[index];

    thumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

// Next and Previous button event listeners
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery(currentImageIndex);
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery(currentImageIndex);
});

// Thumbnail click event listeners
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentImageIndex = index;
        updateGallery(currentImageIndex);
    });
});
