const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtfuqWDc0f1erD3jwUqptTIIQgGSPHiW3twtBVQvmvjOICXFhFs7h7VsU5tOMMmGwl/exec"; // set your endpoint
const REDIRECT_URL = "https://aiskillshouse.com/student/qr-mediator.html?uid=1433&promptId=6"; // set your redirect URL

document.getElementById('studentForm').addEventListener('submit', function(e){
  e.preventDefault();
  
const progressOverlay = document.getElementById('progressOverlay');
  progressOverlay.classList.add('visible'); // Show the progress bar

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // To prevent CORS error
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(() => {
    window.location.href = REDIRECT_URL;
  }).catch(err => {
    alert("Something went wrong!");
  });
});