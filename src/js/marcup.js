export { renderEventsPhoto }

const gallery = document.querySelector('.gallery')

function renderEventsPhoto(events) {
    const markup = events
        .map(event => {
            const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = event
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
        }).join('')
    gallery.insertAdjacentHTML('beforeend', markup);
}