export {fetchEvent}

    function fetchEvent(query, page, perPage) {
    // console.log('query', query)
    // console.log('page', page)
    //  console.log('perpage',perPage)
 const BASE_URL = "https://pixabay.com/api/"
const API = "30706711-d5d2ff18b6ad5954982c3eaa0"
const PARAMETR =`&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`   
    return fetch(`${BASE_URL}?key=${API}${PARAMETR}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
                
            }
            return response.json();
        })
        
    .catch((error) => console.log(error))
}
