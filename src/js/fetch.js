import axios from 'axios';
export  async function fetchEvent(events,page,perPage) {
 const URL = 'https://pixabay.com/api/';
    const API = "30706711-d5d2ff18b6ad5954982c3eaa0";
    const BASE = `&q=${events}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    try {
    const response = await axios.get(
     `${URL}?key=${API}${BASE}`
    );
return response;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
           
    }

//     async function fetchImages(query, page, perPage) {
//   const response = await axios.get(
//     `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
//   )
//   return response
// }


//     return fetch(`${BASE_URL}?key=${API}${PARAMETR}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status)
                
//             }
//             return response.json();
//         })
        
//     .catch((error) => console.log(error))

