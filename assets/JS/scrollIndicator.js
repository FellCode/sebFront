window.onscroll = function() {
    scrollArrow();
}


function scrollArrow() {
    const checkpoint = 300;
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 0;
    }
    document.getElementById("scrollIndicator").style.opacity = opacity;
  }