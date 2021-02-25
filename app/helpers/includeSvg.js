export default function includeSvg(pathsSvg) {
  for (let key in pathsSvg) {
    let $elementSibling = document.getElementById(key);
    for (const name of pathsSvg[key].reverse()) {
      fetch(`app/assets/image/tecnologies/${key}/${name}.svg`)
        .then(res => res.text())
        .then(async text => {
          await $elementSibling.insertAdjacentHTML('afterend', text);
        });
    };
  };
};