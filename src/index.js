import { fetchEvent } from './js/fetch'
import { renderEventsPhoto } from './js/marcup'
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'
//import throttle from 'lodash.throttle';

refs = {
    form: document.querySelector('form'),
    //button: document.querySelector('button'),
    galleryConteiner: document.querySelector('.gallery'),
    galleryLink: document.querySelector('.gallery__link'),
    btnLoadMore: document.querySelector('.load-more')
   
}
// let lightbox = new SimpleLightbox('.photo-card a', {
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
// });

console.log(refs.btnLoadMore)
let simpleLightBox;
//let query = '';
let page = 1;
let perPage = 40;
let keyWord = '';

refs.form.addEventListener('submit', onSubmitForm)

refs.btnLoadMore.addEventListener('click', () => {
    getFetch(page, keyWord, perPage)
});

function onSubmitForm(e){
    e.preventDefault()     
    const query = e.target.searchQuery.value.trim()
    refs.galleryConteiner.innerHTML = '';
   // refs.btnLoadMore.classList.add('invisible')
    keyWord = query;
     console.log(keyWord)
    if (query === '') {  
       // refs.galleryLink.innerHTML = '';
   Notiflix.Notify.info('Sorry, there are no imgs matchin your search qery. Plese try again.');
        return 
            }
getFetch(page, query, perPage)
 
}

function getFetch( page,query,perPage){
    fetchEvent(query, page, perPage)
        .then((data ) => {   
         
            console.log('data', data)
         //console.log('page', page)    
            const totalPages = data.totalHits       
            const events = data.hits;
        console.log('events', events)
            let allPages = Math.ceil(data.totalHits / perPage)
            if (events === 0) {
               // refs.btnLoadMore.classList.add('invisible')
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
            }
            else {
                renderEventsPhoto(events) 
                simpleLightBox = new SimpleLightbox('.gallery a').refresh()
                Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
            }
           simpleLightBox.destroy()

            renderEventsPhoto(events)
              page += 1; 
 simpleLightBox = new SimpleLightbox('.gallery a').refresh()
           
console.log('allpage', allPages)
            if ( page > allPages) {
                refs.btnLoadMore.classList.add('invisible')
                Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
            }
            // if (page === totalPages) {
            //     //refs.btnLoadMore.classList.add('invisible')
            //     Notiflix.Notify.info(" We're sorry, but you've reached the end of search results.")
            //     return;
            // }
        })
    
   .catch(error => console.log(error)) 
    
}
