const input = document.getElementById('input');
const info = document.querySelector('.info');

input.addEventListener('keyup', function (e) {
  if(e.keyCode == 13) shortUrl(input.value);
});

function shortUrl(url) {
  const options = {
    method: 'post',   
    headers: {
      "Content-Type": "application/json",
      "apikey": "YOUR_API_KEY"
    },
    body: JSON.stringify({
      destination: url,
     
    })
  }

  fetch('https://api.rebrandly.com/v1/links', options)
  .then(d => d.json())
  .then(addToList)
  .catch(console.error)
}

function addToList(d) {
  info.style.display = "none";
  const results = document.querySelector('.results');
  const el = `<a href="https://${d.shortUrl}" class="result">
                ${d.shortUrl}
                <div class="sub">${d.destination}</div>
              </a>`;
  results.innerHTML = el + results.innerHTML; 
}

