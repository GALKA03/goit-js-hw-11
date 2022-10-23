
//export { renderEventsPhoto }


// const galleryConteiner = document.querySelector('.gallery')
//     function renderEventsPhoto(events) {
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
// galleryConteiner.innerHTML = marcup;
// }