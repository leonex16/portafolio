import includeHtml from "./helpers/includeHtml.js";
import includeSvg from "./helpers/includeSvg.js";
import desactivateBtn from "./helpers/desactivateBtn.js";
import activateBtn from "./helpers/activateBtn.js";
import moveReferences from "./helpers/moveReferences.js";
import changeImageMe from "./helpers/changeImageMe.js";

let $root = document.getElementById("root");
// let views = [
//   {fileName: 'topNavbar.html', element: $root},
//   {fileName: 'introduction.html', element: $root},
//   {fileName: 'aboutMe.html', element: $root},
//   {fileName: 'references.html', element: $root},
//   {fileName: 'tecnologies.html', element: $root},
//   {fileName: 'projects.html', element: $root},
//   {fileName: 'footer.html', element: $root},
//   {fileName: 'bottomNavbar.html', element: $root},
// ];
let pathsSvgContactMe = {
  'rrss': [
    'gmail',
    'linkedin',
    'whatsapp'
  ]
};

let pathsSvgTecnologies = {
  'backEnd': [
    'node',
    'express'
  ],
  'databases': [
    'mysql',
    'oracle',
    'sqlServer'
  ],
  'essentials': [
    'html',
    'css',
    'js'
  ],
  'frontEnd': [
    'bootstrap',
    'materialize',
    'tailwind'
  ],
  'others': [
    'python',
    'django',
    'docker',
    'git',
    'linux'
  ],
  'preprocessors': [
    'sass',
    'typescript'
  ],
  'prototypingTools': [
    'adobeXd',
    'figma'
  ]
};

export function App(){
  includeHtml({fileName: 'topNavbar.html', element: $root});
  includeHtml({fileName: 'introduction.html', element: $root});
  includeHtml({fileName: 'aboutMe.html', element: $root});
  includeHtml({fileName: 'references.html', element: $root});
  includeHtml({fileName: 'tecnologies.html', element: $root});
  includeHtml({fileName: 'projects.html', element: $root});
  includeHtml({fileName: 'footer.html', element: $root});
  includeHtml({fileName: 'bottomNavbar.html', element: $root});

  setTimeout(() => {
    includeSvg(pathsSvgTecnologies);
    activateBtn();
    desactivateBtn();
    moveReferences();
    changeImageMe();
  }, 500);
};


// EL ARCHIVO UTILIZADO CONTIENE DOS SVG. NO SE PUDO INCRUSTAR TODO EN UN HTML
// DADO QUE FETCH POR ALGUNA RAZÓN NO TRAE CIERTA CANTIDAD DE CARACTERES

setTimeout(() => {
  fetch('app/assets/views/introductionSvgs.html')
    .then(res => res.ok ? res.text() : Promise.reject())
    .then(text => document.querySelector('.contact-me').insertAdjacentHTML('afterbegin', text))
    .catch(err => console.error('Error al cargar la ruta: ' + fileName + 'More Info => ' + err))
}, 100);
