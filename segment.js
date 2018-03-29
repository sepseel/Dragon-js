function Segment(x1, y1, x2, y2) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.len = int(dist(x1, y1, x2, y2));
	this.toDel = false;
	
	this.show = function() {
		line(this.x1, this.y1, this.x2, this.y2);
	}
	
	this.sep = function(dir) {
		this.toDel = true;
		var children = [];
		var line1 = new Segment(this.x1, this.y1, this.x1+(this.len/2), this.y2+(this.len/2)*dir);
		var line2 = new Segment(this.x1+(this.len/2), this.y2+(this.len/2)*dir, this.x2, this.y2);
		children.push(line1);
		children.push(line2);
		return children;
	}
}
