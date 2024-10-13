import axios from 'axios';

// const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
const ACCESS_KEY = 'yrvwBCUKI7qmqnJcluc-l1RFruvgFppZ_BRTgitL-sY';

// axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.headers.common['Authorization'] = ACCESS_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(
    // `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=cat&page=${page}`
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=cat`
  );

  return data;
};
