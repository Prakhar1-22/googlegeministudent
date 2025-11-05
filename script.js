// Replace this with your published Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/library/d/14X-Xl9Vdd8c-e3VrXVJOHATCtO62pWcdMFzvElktCf17G9p6-TOYmez9/1";

// This is the redirect URL from your QR code
const REDIRECT_URL = "https://aiskillshouse.com/student/qr-mediator.html?uid=1433&promptId=19";

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
    // The redirection will happen, so no need to hide the progress bar explicitly here
    // as the page will unload.
    window.location.href = REDIRECT_URL;
  }).catch(err => {
    progressOverlay.classList.remove('visible'); // Hide on error
    alert("Something went wrong!");
  });
});

