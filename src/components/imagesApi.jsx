import axios from 'axios';

// const ACCESS_KEY = 'jtoSI8CvDKt9OsffDrV847n0Qv6agzgo1fJs0S7Hodo';

export async function fetchImages(query, page) {
  const URL = 'https://api.unsplash.com/photos/';
  // параметри запиту на бекенд
  const options = {
    params: {
      client_id: 'jtoSI8CvDKt9OsffDrV847n0Qv6agzgo1fJs0S7Hodo',
      query,
      orientation: 'landscape',
      content_filter: 'high',
      page,
      per_page: 20,
    },
  };

  const response = await axios.get(URL, options);
  console.log(response.data);
  return response.data;
}
