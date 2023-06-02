import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUl = document.querySelector('.gallery');
const galleryMarkup =  galleryItems.map((galleryItem) => {
        return `
        <a
        class="gallery__item"
        href="${galleryItem.original}"
        >
        <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"
        />
        </a>
        `
    })
    .join('');
galleryUl.insertAdjacentHTML('beforeend', galleryMarkup)
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionSelector: 'img',
  captionsData: 'alt',
});

