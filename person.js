function Person() {
  this.pos = createVector(0, 200);
  this.vel = createVector(1, 0);
  this.acc = createVector(1, 0);
  this.mass = 5;
  this.applyForce = function(force) {
  this.acc.add(force);
}

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(59, 237, 151);
    stroke(200);
    ellipse(this.pos.x + 25, this.pos.y - 10, this.mass*10, this.mass*10);
    fill(0, 0, 0);
    ellipse(this.pos.x+40, this.pos.y-20, 10, 10)
    ellipse(this.pos.x+20, this.pos.y-20, 10, 10)
    ellipse(this.pos.x+35, this. pos.y-2, 20, 20)
  }

  this.edges = function() {
    if (this.pos.y > 350) {
      this.vel.y *= 0;
      this.pos.y = 350;
    }
  }
}
