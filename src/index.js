import { fetchEvent } from './js/fetch'
import { renderEventsPhoto } from './js/marcup'
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.min.css";

refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    button: document.querySelector('button'),
    galleryConteiner: document.querySelector('.gallery'),
    galleryLink: document.querySelector('.gallery__link'),
   btnLoadMore:document.querySelector('.load-more')
}
console.log(refs.galleryConteiner)
let simpleLightBox;
let query = '';
let page = 1;
let perPage = 40;

refs.form.addEventListener('submit', onSubmitForm)
// refs.button.addEventListener('click', () => {
//     getFetch()
// })
refs.btnLoadMore.addEventListener('click', () => {
    getFetch(page, query)
});

function onSubmitForm(e){
    e.preventDefault()
    
    const query = e.target.searchQuery.value.trim()
    page = 1
    refs.galleryConteiner.innerHTML = '';
if(query === '') {
    return
    //Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.')
    }
getFetch(page, query)

}

function getFetch( page,query){
    fetchEvent(query, page, perPage)
        .then(data => {
            console.log('data', data)
            let totalPages = data.totalHits
            const events = data.hits
            renderEventsPhoto(events)
            page += 1;
            if ( perPage > 40) {
           refs.btnLoadMore.classList.remove('.invisible')     
            }
       
            //perPage = 1;
 })   
    if (query === '') {
        return Notiflix.Notify.info('Sorry, there are no imgs matchin your search qery. Plese try again.');
    }
    
}


// galaryLibraey()
// function galaryLibraey() {
//     var gallery = $('.gallery a').simpleLightbox();
//     gallery.refresh();
// }
// function renderEventsAmount(events) {
//     const marcup = events.map({ likes, views, comments, downloads }){

//     }
// }