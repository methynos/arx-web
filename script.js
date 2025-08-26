const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Star {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 2;
    this.speed = Math.random() * 1 + 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = '#c27fff';
    ctx.fill();
  }
  update() {
    this.y += this.speed;
    if(this.y > h) {
      this.y = 0;
      this.x = Math.random() * w;
    }
    this.draw();
  }
}

for(let i=0; i<150; i++){
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0,0,w,h);
  stars.forEach(star => star.update());
  requestAnimationFrame(animate);
}
animate();
