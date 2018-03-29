
function setup() {
  // runs once on startup
  createCanvas(600, 400);
  var control = sequence(3);
  var test = reqseq([1], 3);
  lines = [new Segment(100, 200, 500, 200)];
}

function draw() {
  // repeats every frame
  background(51);
  strokeWeight(2)
  
  for (var i = 0; i < lines.length; i++) {
  	if (lines.toDel) {
  		lines.splice(i, 1);
  		i--;
  	} else {
  		lines[i].show();
  	}
  }
  lines[0].sep();
  //print(lines)
}


function reqseq(curve, folds=1) {
	if (folds > 1) {
		var nextcurve = curve.slice();
		nextcurve.push(1);
		curve = curve.reverse();
		for (var i = 0; i < curve.length; i++) {
			nextcurve.push(curve[i] * -1);
		}
		return reqseq(nextcurve, folds-1)
	} else {
	 return curve
	}
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

