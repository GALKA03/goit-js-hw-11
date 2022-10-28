import {fetchEvent} from './js/fetch';
import { renderEventsPhoto } from './js/marcup';
import Notiflix, { Loading } from 'notiflix';
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

let lightbox = new SimpleLightbox('.photocard a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

async function onFormSubmit(e) {
   e.preventDefault()
   
   page = 1;
   gallery.innerHTML = '';
   const query = e.target.searchQuery.value.trim()
   keyWord = query
   if (!query) {
    btnLoadMore.classList.add('invis')
     Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.')
      return 
   }
   
   fetchEvent(query, page, perPage) 
      .then(({ data }) => {
       //const totalPages = Math.ceil(data.totalHits / perPage)
         
         if (data.totalHits === 0) {
            console.log(data.totalHits)
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
         }
         else {
            renderEventsPhoto(data.hits)
             lightbox.refresh()
           // new SimpleLightbox('.gallery a').refresh()
            Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
              btnLoadMore.classList.remove('invis')
            } 

      }
      
     
   )
   .catch(error => console.log(error))
}
  
function onBtnLoadMore() {
   page += 1;

   fetchEvent(keyWord, page, perPage)
      .then(({ data }) => {
         renderEventsPhoto(data.hits)
          lightbox.refresh()
      //new SimpleLightbox('.gallery a').refresh()
const totalPages = Math.ceil(data.totalHits / perPage)
         const { height: cardHeight } = document
            .querySelector('.gallery')
            .firstElementChild.getBoundingClientRect();

         window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
         })   
 if (totalPages <= page) {
            btnLoadMore.classList.add('invis')
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
          
        }
      })
            .catch(error => console.log(error))
      
}
   

// const photocard = document.querySelectorAll('.gallery')
// console.log(photocard)
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1

// }
// console.log(options)
// function handlerPhoto(myPhoto, observer) {
//     myPhoto.forEach(singlPhoto => {
//        console.log(singlPhoto.intersectionRatio)
//        if (myPhoto.intersectionRatio > 0) {
//           loadPictures(myPhoto.target)
//        }
//     })
// }
// function loadPictures(image) {
//    image.src = image.getAttribute('datta')
// }
// const observer = new IntersectionObserver(handlerPhoto, options)
// photocard.forEach(photo => {
//     observer.observe(photo)
// //console.log(observer.observe(photo))
// })














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
