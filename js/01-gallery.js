import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryItems() {
    return galleryItems.map(({ original, description, preview}) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>
        `;
    }).join('');
}

galleryContainer.innerHTML = createGalleryItems();

galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const imageSrc = event.target.dataset.source;
        const imageAlt = event.target.alt;

        const lightbox = basicLightbox.create(`
            <img src="${imageSrc}" alt="${imageAlt}">
        `);

        lightbox.show();

        addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                lightbox.close()
            }
        })
    }


});

console.log(galleryItems);
