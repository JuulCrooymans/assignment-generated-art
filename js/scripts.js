const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const body = document.querySelector('body');
const arrKleur = ['#caa8f5', '#9984d4', '#592e83', '#230c33', '#b27c66'];

svg.setAttribute('viewbox', '0 0 500 500');
svg.setAttribute('width', '500');
svg.setAttribute('height', '500');
body.appendChild(svg)

function createCircle(x, y, r, color) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg','circle')
    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y);
    circle.setAttribute("r",r);
    circle.setAttribute("fill",color);
    return circle
}

for (let i=0; i < 1200; i++) {
    let circleX = Math.random() * (500 - 1) + 1;
    let circleY = Math.random() * (500 - 1) + 1;
    let radius = Math.random() * (15 - 3) + 3;
    let color =  arrKleur[Math.floor(Math.random() * arrKleur.length)];

    svg.appendChild(createCircle(circleX, circleY, radius, color));
}



