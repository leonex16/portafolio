export default function desactivateBtn() {
  window.addEventListener('scroll', () => {
    let $btnToDesactivate = document.querySelector('img.bottom-links-container__img--active');
    if ($btnToDesactivate) {
      setTimeout(() => $btnToDesactivate.classList.remove('bottom-links-container__img--active'), 2000);
      
    }
  });
};