import axios from 'axios';
export function fetchEvent(page, query) {
 const URL = 'https://pixabay.com/api/';
    const API = "30706711-d5d2ff18b6ad5954982c3eaa0";
    const BASE = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`

     console.log('page', page)

    return axios.get(`${URL}?key=${API}${BASE}`)
        .then(response => response.data)
            .catch((error) => console.log(error));
    }

    
//     return fetch(`${BASE_URL}?key=${API}${PARAMETR}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status)
                
//             }
//             return response.json();
//         })
        
//     .catch((error) => console.log(error))

