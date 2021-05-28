const thumbnails = document.querySelectorAll('[data-image-thumbnail]');

function isInView({currentTarget}) {
    for( thumbnail of thumbnails) {
        console.log(thumbnail)
    }
}

window.addEventListener("scroll", isInView);
