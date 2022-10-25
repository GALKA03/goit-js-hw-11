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
btnLoadMore.addEventListener('click', onBtnLoadMore)

let perPage = 40;
let page = 1;
let query = '';



async function onFormSubmit(e) {
e.preventDefault()
   btnLoadMore.classList.add('invis')
   page = 1;
   gallery.innerHTML = '';
   const query = e.target.searchQuery.value.trim()
if (query === '') {  
    Notiflix.Notify.info('Sorry, there are no imgs matchin your search qery. Plese try again.');
      return 
   }
   
   fetchEvent(query, page, perPage) 
      .then(({ data })=> {
         //const events = data.hits
         // if (events === 0) 
         if(data.totalHits === 0){
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
         } else {
            renderEventsPhoto(data.hits)//events
simpleLightBox = new SimpleLightbox('.gallery a').refresh()
            Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
          
         }
         if (data.totalHits > perPage) {
          btnLoadMore.classList.remove('invis')
        }
      },
     
   )
   .catch(error => console.log(error))
}
  
function onBtnLoadMore(){
   page += 1;
   simpleLightBox.destroy()
   fetchEvent(query, page, perPage)
      .then(({ data }) => {
         //let query = 
         console.log()
          renderEventsPhoto(data.hits)
         //console.log(data.hits.query)
         let totalPages = Math.ceil(data.totalHits / perPage)
      simpleLightBox = new SimpleLightbox('.gallery a').refresh()
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
        
         console.log('totalPages', totalPages)  
        
         if (page > totalPages) {
       btnLoadMore.classList.add('invis')
         Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
         }   

      })
     
      .catch(error => console.log(error))

}




//     const response = await fetchImages(page, query);
//   currentHits = response.hits.length;

//   if (response.totalHits > 40) {
//     btnLoadMore.classList.remove('is-hidden');
//   } else {
//     btnLoadMore.classList.add('is-hidden');
//    }






















   


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