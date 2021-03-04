export default function activateBtn(){
  document.addEventListener('click', e => {
    if(e.target.matches('.bottom-links-container__img') || e.target.matches('.top-links-container__text')){
      e.target.classList.add('a-opacity-active');
    };
  });
};