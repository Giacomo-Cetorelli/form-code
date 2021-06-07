let d = 100
let total = 100
let xs = []
let ys = []
let dxs = []
let dys = []

function setup () {
  createCanvas(innerWidth, innerHeight)
  background(0)
  
  for (let i = 0; i < total; i++){
    xs.push(random(0, width))
    ys.push(innerWidth)
    dxs.push(random(-5, 10))
    dys.push(random(-10, 5))
  }
}

function drawOverlaps (x, y) {
  stroke(random(0, 255))
  for (let i = 0; i < total; i++) {
    let distance = dist(x + 10, y + 100, xs[i], ys[i])
    if (distance < (d * 2) && distance !== 0){
      line(x, y, xs[i], ys[i])   
    }
  }
}

function draw () {
  background(random(100, 150), mouseY, random(0, 100), mouseX)
  //move cursor back and forth to go from static to geometric patterns
  for (let i = 0; i < total; i++) {
    ys[i] += dys[i]
    if (ys[i] > height || ys[i] < 0) dys[i] = -dys[i]
    drawOverlaps(xs[i], ys[i])
  }
}
