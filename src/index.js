import {fetchEvent} from './js/fetch';
import { renderEventsPhoto } from './js/marcup';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'
//import throttle from 'lodash.throttle';

const gallery = document.querySelector('.gallery')
   const form = document.querySelector('form')
const btnLoadMore = document.querySelector('.load-more')
   form.addEventListener('submit',onFormSubmit)
btnLoadMore.addEventListener('click', onBtnLoadMore)
//window.addEventListener('scroll', onScroll)

let perPage = 40;
let page = 1;
let keyWord = '';



async function onFormSubmit(e) {
   e.preventDefault()
   
   page = 1;
   gallery.innerHTML = '';
   const query = e.target.searchQuery.value.trim()
   keyWord = query
   if (query === '') {
    btnLoadMore.classList.add('invis')
     Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.')
      return 
   }
   
   fetchEvent(query, page, perPage) 
      .then(({ data }) => {
         const totalPages = Math.ceil(data.totalHits / perPage)
         console.log(data)
         
         if (data.totalHits === 0) {
            console.log(data.totalHits)
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
         }
         else {
            renderEventsPhoto(data.hits)
            const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();
   
      window.scrollBy({
        top: cardHeight *2,
        behavior: 'smooth',
      });
            } 
simpleLightBox = new SimpleLightbox('.gallery a').refresh()
            Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
           
            btnLoadMore.classList.remove('invis')
      },
     
   )
   .catch(error => console.log(error))
}
  
function onBtnLoadMore(){
   page += 1;
        
   fetchEvent(keyWord, page, perPage)
      .then(({ data }) => {
   
         renderEventsPhoto(data.hits)
          const { height: cardHeight } = document
        .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();
 
 console.log(document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect())
   window.scrollBy({
      top: cardHeight * 2,
        behavior: 'smooth',
      }); 
         simpleLightBox = new SimpleLightbox('.gallery a').refresh()
       
const totalPages = Math.ceil(data.totalHits / perPage)
 if (totalPages < page) {
            btnLoadMore.classList.add('invis')
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
          
        }
      })
     
      .catch(error => console.log(error)) 
}
// window.addEventListener('scroll', onScrollAuto)
// function onScrollAuto() {
//    const documentAll = document.documentElement.getBoundingClientRect()
//    console.log('top', documentRect.top)
//    console.log('top', documentRect.bottom)
//    console.log(documentAll)
//        const { height: cardHeight } = document
//         .querySelector('body')
//         .firstElementChild.getBoundingClientRect();
   
//       window.scrollBy({
//         top: cardHeight * 100,
//         behavior: 'smooth',
//       });
// }





















   


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