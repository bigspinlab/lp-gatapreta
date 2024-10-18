/* eslint-disable no-undef */

function initSplide() {
  var splide = new Splide('.splide');
  splide.mount();
}

function removeStylesWrapperContent() {
  const currentUrl = window.location.href;
  const targetUrl =
    'https://www.gatapretasapatilhas.com.br/bem-vindo-a-gata-preta-sapatilhas';
  const unWantedBlock = document.querySelector(
    '.widget .block .block-static-block'
  );

  // If the current URL matches the target URL
  if (currentUrl === targetUrl) {
    const mainContent = document.getElementById('maincontent');

    // Apply padding 0 to the #maincontent element if it exists
    if (mainContent) {
      mainContent.style.padding = '0';
      mainContent.style.width = '100%';
    }

    if (unWantedBlock) {
      unWantedBlock.remove();
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initSplide();
  removeStylesWrapperContent();
});
