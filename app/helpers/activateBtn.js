export default function activateBtn(){
  document.addEventListener('click', e => {
    if(e.target.matches('.bottom-links-container__img')){
      e.target.classList.add('bottom-links-container__img--active');
    };
  });
};