import {fetchEvent} from './js/fetch';
import { renderEventsPhoto } from './js/marcup';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'
//import throttle from 'lodash.throttle';

const gallery = document.querySelector('.gallery')
   const form = document.querySelector('form')
    //button: document.querySelector('button'),
   const galleryLink = document.querySelector('.gallery__link')
const btnLoadMore = document.querySelector('.load-more')
   form.addEventListener('submit',onFormSubmit)
btnLoadMore.addEventListener('click', () => {
   getFetch(page, query)
   
})
let perPage = 40;
let page = 1;
let query = '';
 

function getFetch(page, query) {
   fetchEvent(page, query)
      .then(data => {
page += 1
         console.log('data', data)
         const events = data.hits
      
         console.log('events', events)
         if (events === 0) {
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
         } else {
            renderEventsPhoto(events)
            Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
               const totalPages = Math.ceil(data.totalHits / perPage)
            console.log('totalPages', totalPages)
            if (page > totalPages) {
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
      }
         }
 
      },
     
   )
   .catch(error => console.log(error))
}
function onFormSubmit(e) {

   e.preventDefault()
   
   page = 1;
   const query = e.target.searchQuery.value.trim()

   console.log('query', query)
   gallery.innerHTML = '';
   if (query === '') {  

    Notiflix.Notify.info('Sorry, there are no imgs matchin your search qery. Plese try again.');
      return 
           }
getFetch(page, query)
}



















   


// let simpleLightBox;
// //let query = '';
// let page = 1;
// let perPage = 40;
// let keyWord = '';

// form.addEventListener('submit', onSubmitForm)

// btnLoadMore.addEventListener('click', () => {
//     getFetch(page, keyWord, perPage)
// });

// function onSubmitForm(e){
//     e.preventDefault()     
//     const query = e.target.searchQuery.value.trim()
//    // refs.galleryConteiner.innerHTML = '';
//    // refs.btnLoadMore.classList.add('invisible')
//     keyWord = query;
//      console.log(keyWord)
//     if (query === '') {  
//        // refs.galleryLink.innerHTML = '';
//    Notiflix.Notify.info('Sorry, there are no imgs matchin your search qery. Plese try again.');
//         return 
//             }
// getFetch(page, query, perPage)
 
// }

// function getFetch( page,query,perPage){
//     fetchEvent(query, page, perPage)
//         .then((data ) => {   
         
//             console.log('data', data)
//          //console.log('page', page)    
//             const totalPages = data.totalHits       
//             const events = data.hits;
//         console.log('events', events)
//             let allPages = Math.ceil(data.totalHits / perPage)
//             if (events === 0) {
//                // refs.btnLoadMore.classList.add('invisible')
//             Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
//             }
//             else {
//                 renderEventsPhoto(events) 
//                 simpleLightBox = new SimpleLightbox('.gallery a').refresh()
//                 Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
//             }
//            simpleLightBox.destroy()

//             renderEventsPhoto(events)
//               page += 1; 
//  simpleLightBox = new SimpleLightbox('.gallery a').refresh()
           
// console.log('allpage', allPages)
//             if ( keyWord > allPages) {
//                 btnLoadMore.classList.add('invisible')
//                 Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
//             }
//             // if (page === totalPages) {
//             //     //refs.btnLoadMore.classList.add('invisible')
//             //     Notiflix.Notify.info(" We're sorry, but you've reached the end of search results.")
//             //     return;
//             // }
//         })
    
//    .catch(error => console.log(error)) 
    
// }
// function renderEventsPhoto(events) {
//     const marcup = events
//         .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
//             return  `
//  <div class="photocard">

//  <a class="gallery__link" href="${largeImageURL}">
//        <img src ="${webformatURL}" alt="${tags}" loading="lazy"  /></a>
//        <div class="info">
//            <p class="info-item">
//            <b>likes:${likes}</b>
//            </p>
//            <p class="info-item">
//                <b>views:${views}</b>
//            </p>
// <p class="info-item">
//                <b>comments:${comments}</b>
//            </p>
//            <p class="info-item">
//                <b>downloads:${downloads}</b>
//            </p>
//        </div>
// </div>    ` 
//     }).join('')
//     galleryConteiner.innerHTML = marcup;
// }