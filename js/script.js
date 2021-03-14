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

// This brings functionality to landing page email sign up
function saveToFirebase()
{
    const data = document.getElementById('emailForm').elements[0].value;


  if(ValidateEmail(data))
  {
    database.ref('emails').push({ email: data}).then(function(snapshot) {
      pass(); // some success method
      }, function(error)
         {
            console.log('error' + error);
            fail(); // some error method
          });
     document.getElementById('frm1').reset();
  }

}

function ValidateEmail(mail)
{
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
        {
          pass();
          return (true);
        }
    else{
          fail();
          return (false);
          }
}


function fail()
{

  $('#fail').finish().show().delay(1000).fadeOut(6000);

}
function pass()
{

$('#success').finish().show().delay(1000).fadeOut(6000);

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
