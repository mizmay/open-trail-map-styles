import { stamenSvg } from './lib/string-svg';

const setStyle = (el, styleObj) => {
  Object.entries(styleObj).forEach(([k, v]) => {
    el.style[k] = v;
  });
};

const stamenLogo = document.createElement('img');
stamenLogo.src = `data:image/svg+xml;charset=utf-8,${stamenSvg}`;

const siteLink = document.createElement('a');
siteLink.href = 'https://stamen.com';

const attribution = document.createElement('div');

const stamenLogoStyle = {
  height: '24px',
  position: 'absolute',
  bottom: '-1px'
};

setStyle(stamenLogo, stamenLogoStyle);

const siteLinkStyle = {
  width: '110px',
  position: 'relative'
};

setStyle(siteLink, siteLinkStyle);

const attributionStyle = {
  position: 'fixed',
  bottom: '0px',
  right: '12px',
  zIndex: 10000,
  display: 'flex',
  flexDirection: 'row-reverse'
};

setStyle(attribution, attributionStyle);

siteLink.appendChild(stamenLogo);
attribution.appendChild(siteLink);
document.body.appendChild(attribution);

const updateStyle = styleObj => {
  for (const [k, v] of Object.entries(styleObj)) {
    attribution.style[k] = v;
  }
};

// First link does not get a spacer because it's next to the logo
let marker = false;
const addLink = (url, text) => {
  siteLink.style.marginRight = '6px';

  const addedLink = document.createElement('a');
  addedLink.innerHTML = text;
  addedLink.href = url;

  const spacer = document.createElement('div');
  spacer.innerHTML = marker ? '|' : ' ';

  attribution.appendChild(spacer);
  attribution.appendChild(addedLink);

  const addedLinkStyle = {
    color: 'white',
    marginRight: '6px',
    marginBottom: '6px',
    fontSize: '14px'
  };
  setStyle(addedLink, addedLinkStyle);
  setStyle(spacer, addedLinkStyle);

  marker = true;
};

export { updateStyle, addLink };
