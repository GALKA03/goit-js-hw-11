const photocard = document.querySelector('.gallery')
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1

}

const observer = new IntersectionObserver(handlerPhoto, options)
photocard.forEach(photo => {
    observer.observe(photo)
    console.log(observer.observe(photo))
}

)
function handlerPhoto(myPhoto, observer) {
    myPhoto.forEach(singlPhoto => {
        console.log(singlPhoto.observer)
    })
}
