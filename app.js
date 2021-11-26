const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
const selectedIn = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/kaisa13/gallery_images/gallery_img${i}.jpg`;
    image.alt = `Photos inside of the rental space`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = `/kaisa13/gallery_images/gallery_img${i}.jpg`;
    });

    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(100%)';
    popup.src = '';
    popup.alt = '';
})
