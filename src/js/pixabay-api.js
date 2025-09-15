import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52282020-0fa7caca98833a1caa1732196';

export function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 20,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
