export default async function includeHtml(props){
  let { fileName, element, secs } = props;
  let response = await fetch('app/assets/views/' + fileName);
  let text = await response.text();
  setTimeout(() => element.insertAdjacentHTML('beforeend', text), secs);
   
  // fetch('app/assets/views/' + fileName)
  //   .then(res => res.ok ? res.text() : Promise.reject())
  //   .then(async text => await element.insertAdjacentHTML('beforeend', text))
  //   .catch(err => console.error('Error al cargar la ruta: ' + fileName + 'More Info => ' + err))
};