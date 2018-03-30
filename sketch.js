var seq;
var len;
var iters;

function setup() {
	// runs once on startup
	createCanvas(windowWidth, windowHeight);
	start = new Segment(150, 200, 450, 200);
	iters = 0;
	seq = sequence(iters);
	len = 10
}

function draw() {
  	// repeats every frame
	background(51);
	translate(mouseX,mouseY);
	strokeWeight(2);
	for (var i = 0; i < seq.length; i++) {
		translate(len, len);
		rotate(PI/2 * seq[i]);
		line(0, 0, len, len);
	}

}

function mouseClicked() {
	iters += 1;
	len = 30 / iters
	seq = sequence(iters);
}

function nextseq(curve) {
	// R = 1
	// L = -1
	var nextcurve = curve.slice();
	nextcurve.push(1);
	curve = curve.reverse();
	for (var i = 0; i < curve.length; i++) {
		nextcurve.push(curve[i] * -1);
	}
	 return curve;
}



function sequence(folds) {
	// R = 1
	// L = -1
	var curve = [1];
	for (var i = 0; i < folds-1; i++) {
		var nextcurve = curve.slice();
		nextcurve.push(1);
		curve = curve.reverse();
		for (var j = 0; j < curve.length; j++) {
			nextcurve.push(curve[j] * -1);
		}
		curve = nextcurve;
	}
	return curve;
}

