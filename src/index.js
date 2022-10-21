import './js/fetch'
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.min.css";
// let gallery = new SimpleLightbox('.gallery a');
// console.log(gallery)


refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    button: document.querySelector('button'),
   galleryConteiner: document.querySelector('.gallery')
}
let query = '';
let page = 1;
refs.form.addEventListener('submit', onSubmitForm)
refs.button.addEventListener('click', () => {
    getFetch()
})
function onSubmitForm(e){
    e.preventDefault()

    const query = e.target.searchQuery.value.trim()
    if (!query) {
        return
    }
    console.log(query)
    getFetch(page, query)
    if (query === '') {
        refs.galleryConteiner.innerHTML = '';
    }
}

function fetchEvent() {
   
 const BASE_URL = "https://pixabay.com/api/"
const API = "30706711-d5d2ff18b6ad5954982c3eaa0"
const PARAMETR =`&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`   
    return fetch(`${BASE_URL}?key=${API}${PARAMETR}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
                
            }
            return response.json();
        })
        
    .catch((error) => console.log(error))
}

function getFetch(query, page, per_page){
    fetchEvent(query, page, per_page)
        .then(data => {
     console.log(data)
            const events = data.hits
            console.log(events)
            renderEventsPhoto(events)
            page += 1;
 })   
    // if (events === '') {
    //   return Notiflix.Notify.info('Sorry, there are no imgs matchin your search qery. Plese try again.');
    // }
    
}

function renderEventsPhoto(events) {
    const marcup = events
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return  `
 <div class="photocard">
 <a class="gallery__link" href="${largeImageURL}"/>
       <a href ="${webformatURL}" alt="${tags}" loading="lazy" />
       <div class="info">
           <p class="info-item">
           <b>l${likes}</b>
           </p>
           <p class="info-item">
               <b>${views}</b>
           </p>
<p class="info-item">
               <b>${comments}</b>
           </p>
           <p class="info-item">
               <b>${downloads}</b>
           </p>
       </div>
</div>    ` 
    }).join('')
    refs.galleryConteiner.innerHTML = marcup;
}
function galaryLibraey() {
    var gallery = $('.gallery a').simpleLightbox();
    gallery.refresh();
}
// function renderEventsAmount(events) {
//     const marcup = events.map({ likes, views, comments, downloads }){

//     }
// }