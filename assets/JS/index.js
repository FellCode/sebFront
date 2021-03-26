let currentImgIndex = 0;
const images = [
  "url('../assets/img/main/impression1.jpg')",
  "url('../assets/img/main/impression2.jpg')",
  "url('../assets/img/main/impression3.jpg')",
  ]

$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

window.onscroll = function() {
  scrollFunction();
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
function topFunction() {
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


function nextImage(){


  let backgroundImage = document.getElementById("schiessSportImg");
  let mainText = document.getElementById("mainText");
  let summaryText = document.getElementById("summaryText");
  let dataText = document.getElementById("dataText");

  currentImgIndex++;
  if(currentImgIndex > images.length -1)
    currentImgIndex = 0;

  backgroundImage.style.backgroundImage = images[currentImgIndex]
  


  if(currentImgIndex === 0 ){
    mainText.classList.add("visible")
    mainText.classList.remove("hidden")
    summaryText.classList.remove("visible")
    summaryText.classList.add("hidden")
    dataText.classList.remove("visible")
    dataText.classList.add("hidden")

  }
  else if(currentImgIndex === 1){
    mainText.classList.add("hidden")
    mainText.classList.remove("visible")
    summaryText.classList.add("visible")
    summaryText.classList.remove("hidden")
    dataText.classList.remove("visible")
    dataText.classList.add("hidden")
  }

  else {
    mainText.classList.add("hidden")
    mainText.classList.remove("visible")
    summaryText.classList.remove("visible")
    summaryText.classList.add("hidden")
    dataText.classList.remove("hidden")
    dataText.classList.add("visible")
  }
  
}


function previousImage(){
  var backgroundImage = document.getElementById("schiessSportImg");

  currentImgIndex--;
  if(currentImgIndex < 0)
    currentImgIndex = images.length-1;
  
  backgroundImage.style.backgroundImage = images[currentImgIndex]
  
}

$(function() {
  // contact form animations
  $("#contactform").click(function() {
    $("#contactFormContainer").fadeToggle();
  });
  $(document).mouseup(function(e) {
    var container = $("#contactFormContainer");

    if (
      !container.is(e.target) && // if the target of the click isn't the container...
      container.has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      container.fadeOut();
    }
  });
});
