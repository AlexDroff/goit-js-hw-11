import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'loaders.css/loaders.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loaderTextEl = document.querySelector('.loader-text');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map(
      img => `
<li class="gallery__item">
  <a class="gallery__link" href="${img.largeImageURL}">
    <img class="gallery__image" src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b><span>${img.likes}</span></p>
    <p class="info-item"><b>Views</b><span>${img.views}</span></p>
    <p class="info-item"><b>Comments</b><span>${img.comments}</span></p>
    <p class="info-item"><b>Downloads</b><span>${img.downloads}</span></p>
  </div>
</li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  if (loaderEl) loaderEl.style.display = 'flex';
  if (loaderTextEl) loaderTextEl.style.display = 'block';
}

export function hideLoader() {
  if (loaderEl) loaderEl.style.display = 'none';
  if (loaderTextEl) loaderTextEl.style.display = 'none';
}
