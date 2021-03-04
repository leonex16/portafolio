export default function changeImageMe(){
  let $img = document.querySelector('.about-me__image');
  let matchMedia = window.matchMedia('screen and (min-width: 992px)');

  if(matchMedia.matches){
    $img.src = 'app/assets/image/me/desktop.png';
    $img.classList.remove('a-neomorph');
  }else{
    $img.src = 'app/assets/image/me/moblie.jpg';
    $img.classList.add('a-neomorph');
  };
};