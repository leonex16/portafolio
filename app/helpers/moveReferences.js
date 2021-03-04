export default function moveReferences(){
  let $moveFrom = document.querySelector('.background-references');
  let $moveTo = document.querySelector('.aux-div');
  let matchMedia = window.matchMedia('screen and (min-width: 992px)');

  if(matchMedia.matches){
    $moveTo.insertAdjacentHTML('beforeend', $moveFrom.outerHTML);
    $moveFrom.remove();
  };
};