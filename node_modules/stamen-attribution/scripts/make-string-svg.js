const fs = require('fs');

const svgPath = 'assets/stamen-logo.svg';

const svgString = fs.readFileSync(svgPath, 'utf8');

const jsFile = `
const stamenSvg = \`${svgString}\`

export { stamenSvg };
`;

fs.writeFileSync('src/lib/string-svg.js', jsFile);
