var images = document.querySelectorAll('#container img');

for (var i = 0; i < images.length; i++) {
  images[i].style.top = (i * 20) + 'px';
  images[i].style.left = (i * 20) + 'px';
}