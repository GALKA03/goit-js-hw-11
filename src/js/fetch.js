//export {fetchEvent}
const form = document.querySelector('form')
    //button: document.querySelector('button'),
    const gallery = document.querySelector('.gallery')
   const galleryLink = document.querySelector('.gallery__link')
   const btnLoadMore = document.querySelector('.load-more')
   

function fetchEvent(keyword, page, perPage) {
    const URL = 'https://pixabay.com/api/';
    const API = "30706711-d5d2ff18b6ad5954982c3eaa0";
    const BASE = `$q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    // console.log('keyword', keyword)
    // console.log('page', page)
    //  console.log('perpage',perPage)

    let page = 1;
    let keyword = "";

    function fetchEvent(page, keyword) {
        const params = new URLSearchParams({
            apikey: API,
            page,
            keyword,
            perPage: 40,
        });
        return fetch(`${URL}?${params}${BASE}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .catch((error) => console.log(error));
    }
   
    function getEv(page, keyword) {
        fetchEvent(page, keyword)
            .then((data) => {
                console.log(data.page.totalElements);

                //     if (data.page.totalElements === 0) {
                //       button.classList.add("invisible");
                //       alert(`There are no events by keyword ${keyword}`);
                //     }

                //     const events = data?._embedded?.events;
                //     if (events) {
                //       renderEvents(events);
                //     }

                //     if (pageToFetch === data.page.totalPages - 1) {
                //       button.classList.add("invisible");
                //       alert("Finish");
                //       return;
                //     }
                //     pageToFetch += 1;
                //     if (data.page.totalPages > 1) {
                //       button.classList.remove("invisible");
                //     }
            });
    }

    
    function renderEv(events) {
        const markup = events
            .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `
 <div class="photocard">

 <a class="gallery__link" href="${largeImageURL}">
       <img src ="${webformatURL}" alt="${tags}" loading="lazy"  /></a>
       <div class="info">
           <p class="info-item">
           <b>likes:${likes}</b>
           </p>
           <p class="info-item">
               <b>views:${views}</b>
           </p>
<p class="info-item">
               <b>comments:${comments}</b>
           </p>
           <p class="info-item">
               <b>downloads:${downloads}</b>
           </p>
       </div>
</div>    `
            })
            .join('')
        gallery.insertAdjacentHTML("beforeend", markup);
    }
    

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = e.target.searchQuery.value.trim();
        keyword = query;
        page = 1;
        gallery.innerHTML = "";
        if (!query) {
            return;
        }
        getEv(page, query);
    });
    
}  
 btnLoadMore.addEventListener("click", () => {
  getEvents(pageToFetch, keyword);
});   
    
//     return fetch(`${BASE_URL}?key=${API}${PARAMETR}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status)
                
//             }
//             return response.json();
//         })
        
//     .catch((error) => console.log(error))

