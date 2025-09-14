import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixaby-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  getLoadMoreBtn,
} from './js/render-functions.js';

const form = document.querySelector('.form');
let currentQuery = '';
let currentPage = 1;

const loadMoreBtn = getLoadMoreBtn();

form.addEventListener('submit', e => {
  e.preventDefault();
  currentQuery = e.target['search-text'].value.trim();

  if (!currentQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
    });
    return;
  }

  currentPage = 1;
  clearGallery();
  hideLoadMore();
  showLoader();

  getImagesByQuery(currentQuery, currentPage)
    .then(data => {
      hideLoader();
      if (!data || !Array.isArray(data.hits) || data.hits.length === 0) {
        iziToast.error({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits);
      if (data.hits.length === 20) {
        showLoadMore();
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images.',
      });
      console.error(error);
    });
});

loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  showLoader();
  hideLoadMore();

  getImagesByQuery(currentQuery, currentPage)
    .then(data => {
      hideLoader();
      if (data.hits.length) {
        createGallery(data.hits);
        if (data.hits.length === 20) showLoadMore();
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching more images.',
      });
      console.error(error);
    });
});
