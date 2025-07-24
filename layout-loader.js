function loadContent(page) {
  fetch(page)
    .then(response => response.text())
    .then(data => document.getElementById('main-content').innerHTML = data);
}

// Load header and footer on page load
fetch('header-footer/header.html')
  .then(response => response.text())
  .then(data => document.getElementById('header').innerHTML = data);

fetch('header-footer/footer.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer').innerHTML = data);

// Load home page content by default
loadContent('home.html');