import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItems() {
    return galleryItems.map(({ original, description, preview }) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>
        `;
    }).join('');
}

galleryContainer.innerHTML = createGalleryItems();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

galleryContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightbox.close()
    }
});


console.log(galleryItems);
