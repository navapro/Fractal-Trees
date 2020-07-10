let angle;
let slider;
let trees = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, PI * 2, PI / 4, 0.001);
  slider.position(width / 2, height / 4);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - height / 5);
  trees.push(new Branch(a, b));
  trees.push(trees[0].branchRight());
  trees.push(trees[0].branchLeft());
}
function draw() {
  background(50);
  angle = slider.value();
  for (let i = 0; i < trees.length; i++) {
    trees[i].show();
  }

}
function mousePressed(){
  for (let i = trees.length -1; i >= 0; i--){
    if (!trees[i].done){
      trees.push(trees[i].branchRight());
      trees.push(trees[i].branchLeft());
    }

    trees[i].done = true;

  }
}