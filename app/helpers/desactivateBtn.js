export default function desactivateBtn() {
  window.addEventListener('scroll', () => {
    let $btnToDesactivate = document.querySelectorAll('.a-opacity-active');
    if ($btnToDesactivate) {
      setTimeout(() => $btnToDesactivate.forEach(btn => btn.classList.remove('a-opacity-active')), 1000);
    }
  });
};