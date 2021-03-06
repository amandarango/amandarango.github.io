// This is our Javascript file. Here is where we define complex functionality.

// This function adds hamburger menu functionality for mobile/tablet screens
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }
}

let widthMatch = window.matchMedia("(min-width: 811px)");
// mm in the function arg is the matchMedia object, passed back into the function
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        // it matches the media query: that is, min-width is >= 500px
        document.getElementById("myLinks").style.display = "none";
    }
    else {
        // it no longer matches the media query
        // remove the event listener
    }
});
