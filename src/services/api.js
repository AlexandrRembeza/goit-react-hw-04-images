import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const params = new URLSearchParams({
    key: '28425173-69dd37ad462df2a985c1a5bfb',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query,
    page: page,
    per_page: 8,
  });

  const response = await axios.get(`?${params}`);
  return response.data;
};
