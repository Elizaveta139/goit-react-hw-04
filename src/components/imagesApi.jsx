import axios from 'axios';

const ACCESS_KEY = 'jtoSI8CvDKt9OsffDrV847n0Qv6agzgo1fJs0S7Hodo';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export async function fetchImages(query, page) {
  const response = await axios.get(
    `/search/photos?client_id=${ACCESS_KEY}&query=${query}&page=${page}&lang=en&per_page=20&orientation=landscape`
  );
  console.log(response.data);
  return response.data;
}
