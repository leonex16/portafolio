export default function includeHtml(props){
  let { fileName, element } = props;
  fetch('app/assets/views/' + fileName)
    .then(res => res.ok ? res.text() : Promise.reject())
    .then(async text => await element.insertAdjacentHTML('beforeend', text))
    .catch(err => console.error('Error al cargar la ruta: ' + fileName + 'More Info => ' + err))
};