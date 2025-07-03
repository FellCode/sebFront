let currentImgIndex = 0;
const images = [
  "url('../assets/img/schiesssport/schiesssport1.jpeg')",
  "url('../assets/img/schiesssport/schiesssport2.jpeg')",
  "url('../assets/img/schiesssport/schiesssport3.jpeg')",
]

window.onscroll = function () {
  scrollFunction();
  scrollArrow();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}




// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function myFunction() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function nextImage() {
  let backgroundImage = document.getElementById("schiessSportImg");
  let mainText = document.getElementById("mainText");
  let summaryText = document.getElementById("summaryText");
  let dataText = document.getElementById("dataText");

  currentImgIndex++;
  if (currentImgIndex > images.length - 1)
    currentImgIndex = 0;

  backgroundImage.style.backgroundImage = images[currentImgIndex]



  if (currentImgIndex === 0) {
    mainText.classList.add("visibleFade")
    mainText.classList.remove("hiddenFade")
    summaryText.classList.remove("visibleFade")
    summaryText.classList.add("hiddenFade")
    dataText.classList.remove("visibleFade")
    dataText.classList.add("hiddenFade")

  } else if (currentImgIndex === 1) {
    mainText.classList.add("hiddenFade")
    mainText.classList.remove("visibleFade")
    summaryText.classList.add("visibleFade")
    summaryText.classList.remove("hiddenFade")
    dataText.classList.remove("visibleFade")
    dataText.classList.add("hiddenFade")
  } else {
    mainText.classList.add("hiddenFade")
    mainText.classList.remove("visibleFade")
    summaryText.classList.remove("visibleFade")
    summaryText.classList.add("hiddenFade")
    dataText.classList.remove("hiddenFade")
    dataText.classList.add("visibleFade")
  }

}


function previousImage() {
  let mainText = document.getElementById("mainText");
  let summaryText = document.getElementById("summaryText");
  let dataText = document.getElementById("dataText");
  var backgroundImage = document.getElementById("schiessSportImg");

  currentImgIndex--;
  if (currentImgIndex < 0)
    currentImgIndex = images.length - 1;

  backgroundImage.style.backgroundImage = images[currentImgIndex]


  if (currentImgIndex === 0) {
    mainText.classList.add("visibleFade")
    mainText.classList.remove("hiddenFade")
    summaryText.classList.remove("visibleFade")
    summaryText.classList.add("hiddenFade")
    dataText.classList.remove("visibleFade")
    dataText.classList.add("hiddenFade")

  } else if (currentImgIndex === 1) {
    mainText.classList.add("hiddenFade")
    mainText.classList.remove("visibleFade")
    summaryText.classList.add("visibleFade")
    summaryText.classList.remove("hiddenFade")
    dataText.classList.remove("visibleFade")
    dataText.classList.add("hiddenFade")
  } else {
    mainText.classList.add("hiddenFade")
    mainText.classList.remove("visibleFade")
    summaryText.classList.remove("visibleFade")
    summaryText.classList.add("hiddenFade")
    dataText.classList.remove("hiddenFade")
    dataText.classList.add("visibleFade")
  }

}

function scrollArrow() {
  const checkpoint = 300;
  const currentScroll = window.pageYOffset;
  const scrollIcon = document.getElementById("scrollIndicator")
  let opacity;

  if(scrollIcon === null)
    return;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  scrollIcon.style.opacity = opacity;
}

function mobileMenu() {
  let nav = document.getElementById("nav-menu")
  nav.classList.toggle("visible");
}

$(function () {
  $("#contactform").on("click", function () {
    $("#contactFormContainer").fadeToggle();
  });
  $(document).on("mouseup",function (e) {
    let container = $("#contactFormContainer");

    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0
    ) {
      container.fadeOut();
    }
  });
});