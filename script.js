let cssTroca = false;

function trocarCSS() {
  const linkElement = document.getElementById('css-link');

  if (cssTroca) {

    linkElement.setAttribute('href', 'black.css');
    cssTroca = false;

  } else {

    linkElement.setAttribute('href', 'white.css');
    cssTroca = true;

  }
}