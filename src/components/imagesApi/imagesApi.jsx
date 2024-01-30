import axios from 'axios';

// const ACCESS_KEY = 'jtoSI8CvDKt9OsffDrV847n0Qv6agzgo1fJs0S7Hodo';

export async function imagesApi(query, page) {
  const URL = 'https://api.unsplash.com/photos/';
  // параметри запиту на бекенд
  const options = {
    params: {
      key: 'jtoSI8CvDKt9OsffDrV847n0Qv6agzgo1fJs0S7Hodo',
      query: query,
      orientation: 'landscape',
      content_filter: 'high',
      page: page,
      per_page: 20,
    },
  };

  const response = await axios.get(URL, options);
  console.log(response);
  return response;
}
