//export { renderEventsPhoto }

const gallery = document.querySelector('.gallery')

function renderEventsPhoto(events) {
    const markup = events
        .map(event =>{  
            const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = event   
            return `
 <div class="photocard" >
 <a class="gallery__link" href="${largeImageURL}">
       <img src ="${webformatURL}" alt="${tags}" loading="lazy"  /></a>
       <div class="info">
           <p class="info-item">
           <b>likes:<br>${likes}</b>
           </p>
           <p class="info-item">
               <b>views:<br>${views}</b>
           </p>
<p class="info-item">
               <b>comments:<br>${comments}</b>
           </p>
           <p class="info-item">
               <b>downloads:<br>${downloads}</b>
           </p>
       </div>
</div>    `
        }).join('')
  return  gallery.insertAdjacentHTML('beforeend', markup);
 
}
