(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/bg.jpg?1470730390233", id:"bg"},
		{src:"images/green.png?1470730390233", id:"green"},
		{src:"images/light.png?1470730390233", id:"light"},
		{src:"images/logo.png?1470730390233", id:"logo"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.green = function() {
	this.initialize(img.green);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,32);


(lib.pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5FA031").s().p("AgyA+IAAh8IBkAAIAAAeIhBAAIAAATIA6AAIAAAaIg6AAIAAAUIBCAAIAAAdg");
	this.shape.setTransform(401,297.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5FA031").s().p("AgLA/IgPgDQgIgDgHgEIgMgJIATgYQAGAGANAGQAIACAMABQAHAAAEgBQADgDABgEIAAgBQgBgDgEgDQgEgCgLgDIgSgGQgKgDgFgEQgIgCgCgHQgFgGAAgKIAAgBQAAgIAEgHQADgIAHgGQAGgFAJgDQAJgCAKAAIAOAAIAOADQAHACAFAEIALAHIgRAZQgJgGgJgEQgJgDgHAAQgGAAgDACQgDADAAADIAAABQAAAEAEADQAFACALADIATAGQAJADAGAEQAGADAEAGQADAGAAAKQgBAJgDAIQgDAHgIAGQgGAFgJADQgKACgMAAIgOgBg");
	this.shape_1.setTransform(389.5,297.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5FA031").s().p("AgXA8IgKgEIgJgGIgGgIIgFgKIgDgMIgBgOIAAhFIAjAAIAABEQAAAHACAFQACAFADADQADAEAEABQAEACAEAAQAFAAAEgCQAEgBADgDIAFgIQACgFAAgHIAAhFIAjAAIAABEIgBAOQgBAHgCAFIgFAKIgHAJIgIAGIgLAEQgPAEgIAAQgQgCgHgCg");
	this.shape_2.setTransform(377.9,297.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5FA031").s().p("AAgA/IgJgXIguAAIgJAXIglAAIA2h9IAgAAIA1B9gAANANIgNgiIgNAiIAaAAg");
	this.shape_3.setTransform(365.2,297.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5FA031").s().p("Ag0A+IAAh8IA0AAQAMAAAKADQAKADAHAGQAGAGAEAIQAEAMAAAHIgBAKIgDAIIgFAHIgHAHQgHAGgKADQgKACgKAAIgRAAIAAAkgAgRAAIARAAIAGAAQAEgBADgCQACgDABgCQACgDAAgEIAAgBQAAgEgCgDQgBgDgCgCIgHgDIgGgBIgRAAg");
	this.shape_4.setTransform(354.4,297.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(346,287,62.1,22);


(lib.moment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA/IgMgDIgMgHIgKgIQgEgEgEgFIgFgLQgDgFgBgHIgCgNIAAAAIACgLQABgHADgGIAFgLIAIgKIAKgIIAMgFIAMgFIANgBIANABIAOAFIALAFIAKAIQAEAEAEAGIAGALIADAMQACAHgBAFIAAAAQABAGgCAHQgBAGgCAGIgGALIgIAJIgKAIIgMAHIgNADIgNABIgNgBgAgOgjQgHADgFAFQgFAGgCAHQgDAHgBAHIAAAAQABAIADAHQACAHAFAFQAGAGAGADQAIADAGAAQAIAAAHgDQAHgDAFgGQAFgFADgHQADgHAAgIIAAAAQAAgGgDgIQgDgHgFgGQgFgFgIgDQgHgDgHAAQgHAAgHADg");
	this.shape.setTransform(179.3,172.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMA+IAAhiIgnAAIAAgaIBnAAIAAAaIgnAAIAABig");
	this.shape_1.setTransform(167.1,172.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMA+IAAhiIgnAAIAAgaIBnAAIAAAaIgnAAIAABig");
	this.shape_2.setTransform(151.7,172.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgA+Ig7hOIAABOIgcAAIAAh8IAaAAIA6BMIAAhMIAbAAIAAB8g");
	this.shape_3.setTransform(139.6,172.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA+IAAh8IBeAAIAAAZIhCAAIAAAaIA5AAIAAAXIg5AAIAAAaIBDAAIAAAYg");
	this.shape_4.setTransform(127.5,172.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjA+IAAhQIgjA0IAAAAIgigzIAABPIgbAAIAAh8IAdAAIAgA2IAhg2IAeAAIAAB8g");
	this.shape_5.setTransform(114.2,172.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA/IgOgDIgLgHIgJgIQgFgEgDgFIgHgLQgCgFgBgHIgBgNIAAAAIABgLQABgHACgGIAHgLIAIgKIAKgIIAKgFIAOgFIAMgBIAOABIAMAFIAMAFIAJAIQAFAEADAGIAHALIADAMIACAMIAAAAIgCANQgBAGgCAGIgHALIgIAJIgKAIIgLAHIgMADIgOABIgMgBgAgOgjQgHADgFAFQgFAGgDAHQgCAHAAAHIAAAAQAAAIACAHQADAHAFAFQAGAGAGADQAIADAGAAQAIAAAHgDQAHgDAFgGQAFgFACgHQADgHAAgIIAAAAQAAgGgDgIQgCgHgFgGQgGgFgGgDQgIgDgHAAQgHAAgHADg");
	this.shape_6.setTransform(99.6,172.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjA+IAAhQIgjA0IAAAAIgigzIAABPIgcAAIAAh8IAfAAIAfA2IAhg2IAdAAIAAB8g");
	this.shape_7.setTransform(84.9,172.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWA+IgZgoIgWAAIAAAoIgcAAIAAh8IA4AAQAIABANADQAJADAHAHQAEAEAEAIQACAHAAAJIAAABQAAAHgBAGQgCAGgEAEIgJAIIgKAFIAeAtgAgZgBIAaAAIAJAAIAGgEQADgCACgEQABgDAAgEIAAgBQAAgEgBgEIgFgFIgHgEIgJAAIgZAAg");
	this.shape_8.setTransform(67.3,172.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVA8IgKgEIgIgGIgGgJQgDgEgBgFIgEgLIgBgOIAAhGIAcAAIAABFQAAAIACAHQACAFADAEQAEAEAFACQAFACAFAAQAGAAAFgCQAFgCAEgDQADgFACgFQABgGAAgIIAAhGIAcAAIAABFIgBAOIgDAMIgEAJIgGAJIgIAGIgKAEQgPADgHAAQgPgBgGgCg");
	this.shape_9.setTransform(54.3,172.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNA/IgMgDIgMgHIgKgIQgEgEgEgFIgFgLQgDgFgBgHIgCgNIAAAAIACgLQABgHADgGIAFgLIAIgKIAKgIIAMgFIAMgFIANgBIANABIAOAFIALAFIAKAIQAEAEAEAGIAGALIADAMQACAHgBAFIAAAAQABAGgCAHQgBAGgCAGIgGALIgIAJIgKAIIgMAHIgNADIgNABIgNgBgAgOgjQgHADgFAFQgFAGgCAHQgDAHgBAHIAAAAQABAIADAHQACAHAFAFQAGAGAGADQAIADAGAAQAIAAAHgDQAHgDAFgGQAFgFADgHQADgHAAgIIAAAAQAAgGgDgIQgDgHgFgGQgFgFgIgDQgHgDgHAAQgHAAgHADg");
	this.shape_10.setTransform(40.7,172.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,162,157.3,22);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.setTransform(340.5,0,0.486,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340.5,250);


(lib.is = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBtQgMgCgMgFQgMgEgLgHQgLgGgJgJIAcghQAPANAPAGIARAFQAJACAGAAQAPAAAJgFQAIgGAAgKIAAAAQAAgKgIgFQgKgGgYgHIgdgJQgPgFgIgGQgKgGgFgLQgEgMAAgPIAAAAQAAgPAFgMQAFgMAKgJQALgJAOgEQAOgFAQAAQAKAAALACQALABAKAEQAKAEAJAEIASAMIgZAkQgPgKgOgFQgOgGgMAAQgNAAgHAGQgHAEgBAJIAAAAQAAALAKAGQAJAEAaAIQASAFAMAFQANAFAIAGQAKAHAEALQAEALAAANIAAABQABAPgHAOQgFAMgLAIQgLAJgOAFQgPAEgSAAQgKAAgMgCg");
	this.shape.setTransform(226.3,156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBsIAAjXIAuAAIAADXg");
	this.shape_1.setTransform(212.2,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205,140,32.8,35);


(lib.green_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.green();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.getonline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5FA031").s().p("EgjkAAIIAAgQMBHJAAAIAAAQg");
	this.shape.setTransform(296.5,315.8,0.946,1.107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAQIAAgfIAbAAIAAAfg");
	this.shape_1.setTransform(509.9,300.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBvIAAjFIhLAAIAAgYICtAAIAAAYIhLAAIAADFg");
	this.shape_2.setTransform(499.7,291.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/BvIAAhkIh+AAIAABkIgZAAIAAjdIAZAAIAABjIB+AAIAAhjIAZAAIAADdg");
	this.shape_3.setTransform(478.2,291.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBwQgMgDgLgEQgKgEgJgGQgIgGgIgIQgIgIgFgJQgGgJgEgLQgEgKgCgLQgCgLAAgMIAAAAQAAgKACgLQACgLAEgKQAEgLAGgJQAGgJAHgIQAIgIAIgGQAJgHAKgEQAKgFAMgCQALgCALAAQANAAAMACQAMABAKAEQANAFAXARIgQATQgPgMgOgGQgIgEgKgCQgJgBgMAAQgJAAgHABIgQAGQgPAHgLANQgMAMgGARQgGAQAAASIAAAAQABAZAFALQAFARAMAMIANALIAPAJIARAFQAIACAKAAQAMAAAXgHQAQgGANgKIAAg3IhEAAIAAgUIBcAAIAABWQgYASgPAGQgMAFgMACQgNADgNAAQgMAAgLgCg");
	this.shape_4.setTransform(454.4,291.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBvIAAjdIAXAAIAADdg");
	this.shape_5.setTransform(438.3,291.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABJBvIiNi0IAAC0IgYAAIAAjdIAXAAICKCxIAAixIAYAAIAADdg");
	this.shape_6.setTransform(422,291.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBwQgMgCgLgFQgLgFgKgGQgLgHgKgJIAQgTIARAPQAJAFAJAFQAJAEAKABQAKACAKAAQALAAAJgDQAJgCAHgGQAGgEAEgIQADgGAAgJIAAAAQAAgIgCgGQgDgGgGgFQgHgGgLgDQgLgFgRgDQgSgEgOgGQgOgDgJgIQgJgIgFgKQgEgKAAgNIAAgBQAAgNAFgLQAGgLAKgIQAJgJAOgEQANgFAQABIAUABQALACAKAEQAMAEAXAQIgPATQgPgMgQgGQgPgGgQAAQgKAAgJADQgJADgGAEQgGAFgEAHQgDAGAAAIIAAAAQAAAIACAHQADAGAHAFQAHAFALAEQAMAFAQADQATAEANAGQAOAEAJAHQAJAIAEAKQAFAJAAANIAAABQAAAOgGAMQgGALgKAIQgKAJgOAFQgOADgQAAQgLAAgNgBg");
	this.shape_7.setTransform(391.4,291.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBqIgQgIQgHgEgGgGQgGgGgFgIQgFgIgDgJIgFgTIgCgWIAAh/IAZAAIAAB9QAAASAFAOQAEAOAJAKQAJAJANAFQAMAFAOAAQAPAAANgFQAMgEAJgJQAJgKAEgNQAFgOAAgSIAAh/IAZAAIAAB9IgCAXQgBAKgEAKQgDAJgFAHQgEAIgGAGQgHAHgHAEQgHAFgJADQgYAGgNAAQgZgCgLgEg");
	this.shape_8.setTransform(370.1,291.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBwQgMgCgLgFQgLgFgKgGQgLgHgKgJIAQgTIARAPQAJAFAJAFQAJAEAKABQAKACAKAAQALAAAJgDQAJgCAHgGQAGgEAEgIQADgGAAgJIAAAAQAAgIgCgGQgDgGgGgFQgHgGgLgDQgLgFgRgDQgSgEgOgGQgOgDgJgIQgJgIgFgKQgEgKAAgNIAAgBQAAgNAFgLQAGgLAKgIQAJgJAOgEQANgFAQABIAUABQALACAKAEQAMAEAXAQIgPATQgPgMgQgGQgPgGgQAAQgKAAgJADQgJADgGAEQgGAFgEAHQgDAGAAAIIAAAAQAAAIACAHQADAGAHAFQAHAFALAEQAMAFAQADQATAEANAGQAOAEAJAHQAJAIAEAKQAFAJAAANIAAABQAAAOgGAMQgGALgKAIQgKAJgOAFQgOADgQAAQgLAAgNgBg");
	this.shape_9.setTransform(348.7,291.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABJBvIiNi0IAAC0IgYAAIAAjdIAXAAICKCxIAAixIAYAAIAADdg");
	this.shape_10.setTransform(327,291.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhQBvIAAjdICfAAIAAAYIiGAAIAABLIB3AAIAAAVIh3AAIAABNICHAAIAAAYg");
	this.shape_11.setTransform(305.3,291.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBwQgKgDgKgEQgKgEgJgGQgKgGgHgIQgHgIgGgJQgGgJgEgKQgEgLgCgLQgCgLAAgMIAAAAQAAgKACgMQACgLAEgKQAEgKAGgKQAGgJAHgIQAHgHAKgHQAJgGAKgEQAKgFALgCQAKgCAMAAQAPAAAMACQAMADALAEQANAHAYATIgSASQgTgQgMgGQgIgEgKgCQgJgCgLAAIgRABIgQAGQgPAHgMAMQgMAMgGARQgHAXAAAMIAAAAQADAYAEALQAGARAMAMQAMANAPAHIARAFQAGACAKAAQALAAAJgCQAKgCAIgEQAMgGAVgSIARAQQgYAVgOAHQgLAGgNACQgMADgPAAQgLAAgLgCg");
	this.shape_12.setTransform(283.7,291.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBwQgMgCgLgFQgLgFgKgGQgLgHgKgJIAQgTIARAPQAJAFAJAFQAJAEAKABQAKACAKAAQALAAAJgDQAJgCAHgGQAGgEAEgIQADgGAAgJIAAAAQAAgIgCgGQgDgGgGgFQgHgGgLgDQgLgFgRgDQgSgEgOgGQgOgDgJgIQgJgIgFgKQgEgKAAgNIAAgBQAAgNAFgLQAGgLAKgIQAJgJAOgEQANgFAQABIAUABQALACAKAEQAMAEAXAQIgPATQgPgMgQgGQgPgGgQAAQgKAAgJADQgJADgGAEQgGAFgEAHQgDAGAAAIIAAAAQAAAIACAHQADAGAHAFQAHAFALAEQAMAFAQADQATAEANAGQAOAEAJAHQAJAIAEAKQAFAJAAANIAAABQAAAOgGAMQgGALgKAIQgKAJgOAFQgOADgQAAQgLAAgNgBg");
	this.shape_13.setTransform(253.4,291.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBvIAAjdIAXAAIAADdg");
	this.shape_14.setTransform(239.6,291.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLBvIAAjFIhLAAIAAgYICtAAIAAAYIhLAAIAADFg");
	this.shape_15.setTransform(216.8,291.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABABvIAAhkIh/AAIAABkIgYAAIAAjdIAYAAIAABjIB/AAIAAhjIAYAAIAADdg");
	this.shape_16.setTransform(195.4,291.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBwQgLgDgKgEQgLgEgJgGQgJgGgHgIQgHgIgGgJQgFgJgFgLQgDgKgCgLQgDgLAAgMIAAAAQAAgKADgLQACgLADgKQAFgLAFgJQAGgJAHgIQAIgIAJgGQAIgHALgEQAJgFAMgCQALgCALAAQAOAAAMACQALABAKAEQANAFAXARIgRATQgOgMgOgGQgIgEgKgCQgJgBgMAAQgJAAgHABIgQAGQgPAHgLANQgMAMgGARQgGAQgBASIAAAAQADAZAEALQAFARAMAMIANALIAPAJIARAFQAHACALAAQAMAAAXgHQARgGALgKIAAg3IhDAAIAAgUIBcAAIAABWQgXASgPAGQgMAFgNACQgNADgNAAQgMAAgMgCg");
	this.shape_17.setTransform(171.5,291.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLBvIAAjdIAXAAIAADdg");
	this.shape_18.setTransform(155.5,291.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABJBvIiNi0IAAC0IgYAAIAAjdIAXAAICKCxIAAixIAYAAIAADdg");
	this.shape_19.setTransform(139.2,291.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXBwQgLgDgLgEQgKgFgJgGQgJgGgIgIQgHgIgGgJQgGgJgEgKQgEgLgCgLQgCgLAAgLIAAAAQAAgKACgLQACgLAEgKQAFgLAFgJQAGgJAIgIQAHgIAJgGQAJgHALgEQAKgFAMgCQALgCALAAQAMAAAMACQALACALAFQAKAEAJAHQAJAGAIAIIANARQAFAJAFAKQAEAKACALQACALAAALIAAAAQAAALgCALQgDALgEAKQgEAKgFAJQgGAKgIAIQgHAIgJAGQgJAGgLAFQgKAEgMADQgLACgMAAQgLAAgMgCgAgRhZIgRAGIgPAIIgMALQgMANgGAQQgHAXAAAMIAAAAQADAYAEALQAGAQAMANIANALIAPAJIAQAFQAJACAIAAQAJAAAJgCIARgFQAKgFARgPQAMgMAGgRQAEgLADgYIAAAAQAAgLgHgXQgGgRgMgMQgRgPgLgFIgQgGQgJgBgJAAQgIAAgJABg");
	this.shape_20.setTransform(114,291.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLBvIAAjFIhLAAIAAgYICtAAIAAAYIhLAAIAADFg");
	this.shape_21.setTransform(92.6,291.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.4,274.9,434.8,42);


(lib.difference1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(265.8,195);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA+IAAh8IBcAAIAAAZIhBAAIAAAaIA5AAIAAAXIg5AAIAAAaIBCAAIAAAYg");
	this.shape_1.setTransform(258.3,190.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA/IgMgDIgLgHIgJgHIgIgKIgGgLQgCgFgBgHIgCgNIAAAAIACgLQABgHACgGIAGgLIAIgKIAJgIIALgFIANgFIAMgBQAJABAHABQAHABAGADQAIADANALIgSAUQgIgHgHgEQgIgDgJAAQgHAAgGADQgGADgFAFQgFAGgDAHQgDAHAAAHIAAAAQAAAIADAHQADAHAEAFQAFAGAHADQAGADAHAAQAHAAALgEQAHgDAIgIIASASIgLAKQgFAEgGADQgGADgIABQgHABgJAAIgMgBg");
	this.shape_2.setTransform(246.3,190.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgA+Ig7hOIAABOIgcAAIAAh8IAaAAIA6BMIAAhMIAbAAIAAB8g");
	this.shape_3.setTransform(233.3,190.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA+IAAh8IBdAAIAAAZIhBAAIAAAaIA5AAIAAAXIg5AAIAAAaIBCAAIAAAYg");
	this.shape_4.setTransform(221.2,190.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA+IgZgoIgWAAIAAAoIgcAAIAAh8IA4AAQAIABANADQAJADAHAHQAFAEADAIQACAHAAAJIAAABQAAAHgBAGQgCAGgEAEIgJAIIgLAFIAfAtgAgZgBIAaAAIAJAAIAGgEQAEgCABgEQABgDAAgEIAAgBQAAgEgBgEIgFgFIgGgEIgJAAIgaAAg");
	this.shape_5.setTransform(209.7,190.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguA+IAAh8IBcAAIAAAZIhBAAIAAAaIA6AAIAAAXIg6AAIAAAaIBDAAIAAAYg");
	this.shape_6.setTransform(197.8,190.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguA+IAAh8IBdAAIAAAaIhBAAIAAAaIA5AAIAAAYIg5AAIAAAwg");
	this.shape_7.setTransform(186.8,190.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA+IAAh8IBeAAIAAAaIhBAAIAAAaIA5AAIAAAYIg5AAIAAAwg");
	this.shape_8.setTransform(175.8,190.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMA+IAAh8IAZAAIAAB8g");
	this.shape_9.setTransform(167.3,190.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5A+IAAh8IAyAAIAMABIANAFQAGACAFADIAKAHIAIAJIAGALQADAGAAAHIABALIAAAAIgBANIgDALIgGALIgIAJIgKAIQgFAEgGACIgNADIgMABgAgcAlIAVAAQAHAAAHgDQAGgCAFgFQAFgFADgHQADgHgBgIIAAAAQABgHgDgHQgDgHgFgFQgFgFgGgDQgHgCgHAAIgVAAg");
	this.shape_10.setTransform(158.3,190.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlA/IgLgcIg0AAIgLAcIgcAAIA2h9IAXAAIA2B9gAAQALIgQgoIgQAoIAgAAg");
	this.shape_11.setTransform(140.1,190.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvA+IAAh8IBeAAIAAAZIhCAAIAAAaIA5AAIAAAXIg5AAIAAAaIBCAAIAAAYg");
	this.shape_12.setTransform(123.5,190.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXA+Igkg1IgPAPIAAAmIgcAAIAAh8IAcAAIAAA3IAxg3IAiAAIg0A2IA2BGg");
	this.shape_13.setTransform(112.1,190.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAlA/IgLgcIg0AAIgLAcIgcAAIA2h9IAXAAIA2B9gAAQALIgQgoIgQAoIAgAAg");
	this.shape_14.setTransform(98.6,190.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjA+IAAhQIgjA0IAAAAIgigzIAABPIgcAAIAAh8IAfAAIAfA2IAhg2IAdAAIAAB8g");
	this.shape_15.setTransform(84.5,190.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag5A+IAAh8IAxAAIANABIANAFQAGACAGADIAJAHIAIAJIAGALQADAGABAHIABALIAAAAIgBANIgEALIgGALIgIAJIgJAIQgGAEgGACIgNADIgNABgAgdAlIAVAAQAIAAAGgDQAHgCAGgFQAFgFACgHQADgHAAgIIAAAAQAAgHgDgHQgCgHgFgFQgGgFgHgDQgGgCgIAAIgVAAg");
	this.shape_16.setTransform(66.1,190.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAgA+Ig7hOIAABOIgcAAIAAh8IAaAAIA6BMIAAhMIAbAAIAAB8g");
	this.shape_17.setTransform(52.5,190.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAlA/IgLgcIg0AAIgLAcIgcAAIA2h9IAXAAIA2B9gAAQALIgQgoIgQAoIAgAAg");
	this.shape_18.setTransform(39.1,190.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,180,239.8,22);


(lib.clickTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-150,-125,300,250);
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.censusnight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAYIAAgvIAxAAIAAAvg");
	this.shape.setTransform(262.8,193.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBsIAAirIhDAAIAAgsICyAAIAAAsIhCAAIAACrg");
	this.shape_1.setTransform(252.3,185);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsBsIAAhXIhXAAIAABXIgvAAIAAjXIAvAAIAABWIBXAAIAAhWIAvAAIAADXg");
	this.shape_2.setTransform(231.3,185);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBtQgMgCgLgEIgTgKQgJgGgIgHQgHgIgGgJQgFgJgEgKQgFgKgCgLQgCgLAAgMIAAAAQAAgKACgLQACgLAFgKQADgKAHgJQAFgJAIgIQAIgIAJgGQAJgGAKgEQAKgEAMgDQALgCAKAAQAPAAAMACQAMACALAEQANAFAXARIgeAkQgOgLgLgFQgOgGgSAAQgKAAgMAFQgMAGgIAJQgJAJgEANQgFAMAAANIAAAAQAAAOAFANQAFAMAIAKQAJAJAMAFQAMAFAMAAQANAAAMgDQAMgDAIgHIAAgfIgwAAIAAgnIBfAAIAABcQgZASgPAGQgMAFgNADQgNADgPAAQgKAAgMgDg");
	this.shape_3.setTransform(208,185);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXBsIAAjXIAvAAIAADXg");
	this.shape_4.setTransform(191.6,185);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA4BsIhoiIIAACIIgvAAIAAjXIAsAAIBkCEIAAiEIAvAAIAADXg");
	this.shape_5.setTransform(175,185);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBtQgMgCgMgFQgMgEgLgHQgLgGgKgIIAdgiQAPANAQAGIAQAFQAJACAGAAQAPAAAJgGQAIgFAAgKIAAAAQAAgJgIgGQgKgGgYgHIgdgJQgPgFgIgGQgKgGgEgLQgGgLABgQIAAAAQAAgPAFgMQAGgMAJgJQALgJAOgFQAOgEAQAAQAKAAALACQALACAKADQAKADAJAFIASANIgZAkQgPgLgOgFQgOgGgMAAQgNAAgHAGQgIAEAAAJIAAAAQAAALAKAFQAJAGAaAHQASAEAMAGQANAGAIAFQAKAHAEAKQAEALAAAOIAAABQABAQgHAMQgFANgLAIQgLAJgOAFQgOAEgTAAQgKAAgMgCg");
	this.shape_6.setTransform(145,185);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBoQgJgEgIgEQgHgFgGgGQgGgGgFgHQgFgIgDgJIgFgTIgBgXIAAh6IAwAAIAAB5QAAANADAKQADAKAGAHQAGAHAJADQAJAEAJAAQAKAAAJgEQAJgDAGgGQAGgHADgKQADgKAAgMIAAh7IAwAAIAAB5IgCAXQgBAKgEAKQgDAJgFAIQgFAHgGAGQgGAGgHAFQgIAEgJAEQgZAGgNAAQgbgCgLgEg");
	this.shape_7.setTransform(124.4,185.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBtQgMgCgMgFQgMgEgLgHQgLgGgJgIIAcgiQAQANAOAGIARAFQAIACAHAAQAPAAAJgGQAIgFAAgKIAAAAQAAgJgIgGQgKgGgYgHIgegJQgOgFgIgGQgKgGgFgLQgEgLAAgQIAAAAQgBgPAGgMQAFgMAKgJQALgJAOgFQAOgEAQAAQAKAAALACQALACAKADQAKADAJAFIASANIgZAkQgPgLgOgFQgOgGgMAAQgMAAgIAGQgHAEgBAJIAAAAQABALAJAFQAJAGAaAHQASAEAMAGQANAGAJAFQAJAHAEAKQAEALABAOIAAABQAAAQgHAMQgFANgLAIQgLAJgOAFQgPAEgSAAQgJAAgNgCg");
	this.shape_8.setTransform(103.4,185);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3BsIhniIIAACIIgvAAIAAjXIAsAAIBkCEIAAiEIAvAAIAADXg");
	this.shape_9.setTransform(82.3,185);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhRBsIAAjXIChAAIAAArIhyAAIAAAsIBkAAIAAAoIhkAAIAAAtIB0AAIAAArg");
	this.shape_10.setTransform(60.9,185);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBtQgLgCgKgEQgKgEgJgGQgJgGgHgIQgIgIgFgJQgGgIgEgKQgFgLgCgKQgCgMAAgLIAAAAQAAgKACgLQACgLAEgKIAKgTQAGgJAIgIQAHgIAJgGQAJgGAKgEIAWgHQAKgCAMAAQAPAAANACQAMADALAEQAOAGAVATIgeAiQgOgLgMgGQgOgHgQAAQgMAAgLAFQgMAGgIAJQgJAJgEAMQgFANAAANIAAAAQAAANAFANQAEAMAJAJQAIAKALAFQAMAFAMAAQAMAAAUgGQALgGAOgNIAfAfQgJAJgJAHQgJAHgLAFQgLAFgMADQgNADgPAAQgLAAgLgDg");
	this.shape_11.setTransform(39.7,185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,169,242.7,35);


(lib.bottom = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAhQgKgFgFgDIAJgNQAFAEAGACQAGACADAAQAEAAACgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgBQAAgCgEgCIgJgEQgKgDgEgDQgDAAgBgEQgCgEAAgFQAAgFACgEQACgEADgDQAEgDAEgBIAIgBQAHAAAHACQAGABAGAEIgHAOIgKgFIgJgCQgCABgCABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAABQAAACAFACIAIAEIAHACIAHAEQADABACADQACAEAAAEIAAABQAAAFgCAFQgCAEgEADQgDADgFABQgFACgGAAQgGAAgHgDg");
	this.shape.setTransform(279.2,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAhQgEgCgDgDQgDgDgCgGQgBgEAAgGIAAgrIATAAIAAAkIABAHIACAFIAEACIAEABIAEgBIAEgCIADgFIABgHIAAgkIATAAIAABEIgTAAIAAgKQgEAFgFADIgDACIgHABQgFAAgFgCg");
	this.shape_1.setTransform(272.6,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAhQgKgFgFgDIAJgNQAFAEAGACQAGACADAAQAEAAACgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgBQAAgCgEgCIgJgEQgKgDgEgDQgDAAgBgEQgCgEAAgFQAAgFACgEQACgEADgDQAEgDAEgBIAIgBQAHAAAHACQAGABAGAEIgHAOIgKgFIgJgCQgCABgCABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAABQAAACAFACIAIAEIAHACIAHAEQADABACADQACAEAAAEIAAABQAAAFgCAFQgCAEgEADQgDADgFABQgFACgGAAQgGAAgHgDg");
	this.shape_2.setTransform(265.9,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAjIAAglIgBgGIgCgEIgEgDIgFgBIgDABIgEADIgDAEIgBAGIAAAlIgTAAIAAhDIATAAIAAAJQAEgFAFgCIADgDIAHgBQAFAAAFACQAEACADADQADADACAFQABAFAAAGIAAArg");
	this.shape_3.setTransform(259.3,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAhQgGgCgFgFQgFgFgDgHIgCgHIgBgHQAAgGADgGQACgHAFgFQAEgFAHgDIAGgCIAGgBIAIABIAHACIAGAEIAEAFQAEAFADAHQACAGAAAGIgBAFIguAAIACAGIAEAEIAFADIAEABQAFAAAEgCQAEgBAEgEIALAKIgFAFIgHAEQgDACgFABIgIABQgJgBgEgCgAAOgEIgBgGIgDgFIgFgDIgFgBIgEABIgEADIgEAFIgBAGIAbAAIAAAAg");
	this.shape_4.setTransform(251.9,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAtIgIgCIgJgEIgHgGIgFgHIgEgIQgCgEgBgFIAAgJIAAgIIADgJIAEgIIAFgGIAHgHIAJgEIAJgDIAIgBIALABIAKAEQAGACAIAIIgMAOQgGgFgFgDQgGgCgHAAQgEAAgEACIgIAGQgEAEgCAFQgCAFAAAFIAAAAQAAAFACAGQACAEAEAFQADAEAFACQAEACAEAAQAGAAAIgDQAEgCAHgGIAMAOIgHAGIgIAFIgKADIgMACIgIgCg");
	this.shape_5.setTransform(244,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAjIAAhDIAUAAIAAANIACgGIAEgFIAHgDIAIgBIAAAVIgBAAQgGgBgDACQgEACgDADQgDADgBAEQAAADAAAHIAAAZg");
	this.shape_6.setTransform(234,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAhQgEgCgDgDQgDgDgCgGQgBgEAAgGIAAgrIATAAIAAAkIABAHIACAFIAEACIAEABIAEgBIAEgCIADgFIABgHIAAgkIATAAIAABEIgTAAIAAgKQgEAFgFADIgDACIgHABQgFAAgFgCg");
	this.shape_7.setTransform(227.5,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAjIgHgCQgIgEgEgEQgFgFgCgGIgDgHIAAgHQAAgDADgKQACgGAGgFQADgDAIgFIAIgCIAGgBQAFAAAKADQAEACAHAGQAGAFACAGQADAJAAAEIAAAAIgBAHIgCAHQgDAGgFAFQgHAGgFACQgJADgFAAgAgGgQQgEABgCADIgEAGIgBAGIAAAAIACAHQABADACADQADADADABQAEACACAAQAEAAADgCIAGgEQACgCABgEQACgDAAgEQAAgCgCgEIgDgGQgDgDgDgBQgEgCgDAAQgDAAgDACg");
	this.shape_8.setTransform(219.8,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAsIgIgEIAGgOQAFADAEAAIAEgBIADgEIgchEIAVAAIAOAuIAPguIAVAAIgbBFIgEAJIgFAHIgEADIgIABIgJgBg");
	this.shape_9.setTransform(212.6,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLAhQgGgCgFgFQgFgFgDgHIgCgHIgBgHQAAgGADgGQACgHAFgFQAEgFAHgDIAGgCIAGgBIAIABIAHACIAGAEIAEAFQAEAFADAHQACAGAAAGIgBAFIguAAIACAGIAEAEIAFADIAEABQAFAAAEgCQAEgBAEgEIALAKIgFAFIgHAEQgDACgFABIgIABQgJgBgEgCgAAOgEIgBgGIgDgFIgFgDIgFgBIgEABIgEADIgEAFIgBAGIAbAAIAAAAg");
	this.shape_10.setTransform(202,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAArQgEgBgDgCQgCgDgCgEQgBgEAAgGIAAgfIgJAAIAAgRIAJAAIAAgSIASAAIAAASIAQAAIAAARIgQAAIAAAcQAAADABACQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAFAAAFgDIAAAQIgHADIgJABIgGgBg");
	this.shape_11.setTransform(196,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAhQgGgCgFgFQgFgFgDgHIgCgHIgBgHQAAgGADgGQACgHAFgFQAEgFAHgDIAGgCIAGgBIAIABIAHACIAGAEIAEAFQAEAFADAHQACAGAAAGIgBAFIguAAIACAGIAEAEIAFADIAEABQAFAAAEgCQAEgBAEgEIALAKIgFAFIgHAEQgDACgFABIgIABQgJgBgEgCgAAOgEIgBgGIgDgFIgFgDIgFgBIgEABIgEADIgEAFIgBAGIAbAAIAAAAg");
	this.shape_12.setTransform(190.1,23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAvIAAhdIARAAIAABdg");
	this.shape_13.setTransform(184.8,22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjAtIAAhYIATAAIAAAKQAFgFAEgEIAHgCIAFgBQAFABAGACQAGACAEAFQAFAEADAHQACAJAAAGIAAABIgBAIIgBAFQgDAHgFAFQgEAEgGADQgGACgFAAIgGgBIgGgCQgEgDgFgEIAAAdgAgGgaIgEADIgFAGIgBAIIAAABIABAIIAFAEQABADADAAIAGACIAGgCQADgBACgCIAEgEQABgEAAgEIAAgBIgBgIIgEgGIgFgDIgGgBIgGABg");
	this.shape_14.setTransform(179.2,24.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhAjIAAglIgBgGIgCgEIgDgDIgGgBIgEABIgFADIgCAEIgBAGIAAAlIgRAAIAAglIgBgGIgDgEIgDgDIgFgBIgFABIgDADQgDACAAACIgBAGIAAAlIgTAAIAAhDIATAAIAAAJQAEgFAEgCIAGgDIAGgBQAHAAAFADQADADADAFQAFgFAGgDIAFgCIAHgBQAFAAAFACQAEACADACQADAEACAEQABAFABAGIAAAsg");
	this.shape_15.setTransform(169.1,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAjIgHgCQgIgEgEgEQgFgFgCgGIgDgHIAAgHQAAgDADgKQACgGAGgFQADgDAIgFIAIgCIAGgBQAFAAAKADQAEACAHAGQAGAFACAGQADAJAAAEIAAAAIgBAHIgCAHQgDAGgFAFQgHAGgFACQgJADgFAAgAgGgQQgEABgCADIgEAGIgBAGIAAAAIACAHQABADACADQADADADABQAEACACAAQAEAAADgCIAGgEQACgCABgEQACgDAAgEQAAgCgCgEIgDgGQgDgDgDgBQgEgCgDAAQgDAAgDACg");
	this.shape_16.setTransform(159.2,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDAtIgJgCIgIgEIgHgGIgGgHIgEgIQgCgEAAgFIgBgJIABgIIACgJIAEgIIAGgGIAHgHIAIgEIAJgDIAIgBIALABIAKAEQAGACAJAIIgNAOQgGgFgFgDQgGgCgGAAQgFAAgEACIgIAGQgEAEgCAFQgBAFAAAFIAAAAQAAAFABAGQACAEAEAFQADAEAFACQAEACAFAAQAFAAAIgDQAEgCAGgGIAOAOIgIAGIgIAFIgKADIgMACIgHgCg");
	this.shape_17.setTransform(151,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// button
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5FA131").s().p("AqnB4QgxAAgkgkQgjgjAAgxQAAgwAjgkQAkgiAxgBIVPAAQAxABAjAiQAkAkAAAwQAAAxgkAjQgjAkgxAAg");
	this.shape_18.setTransform(214,23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#22612C").s().p("AqnB4QgxAAgkgkQgjgjAAgxQAAgwAjgkQAkgiAxgBIVPAAQAxABAjAiQAkAkAAAwQAAAxgkAjQgjAkgxAAg");
	this.shape_19.setTransform(214,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(8,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,3,286,32);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.august = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5FA031").s().p("AgdBsIAAiiIhBAAIAAg1IC9AAIAAA1IhBAAIAACig");
	this.shape.setTransform(189.4,155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5FA031").s().p("AAmBsIAAhSIhLAAIAABSIg9AAIAAjXIA9AAIAABRIBLAAIAAhRIA8AAIAADXg");
	this.shape_1.setTransform(168.3,155);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5FA031").s().p("AgLBvQgMgDgLgEQgLgEgIgGQgKgGgIgHQgIgHgGgJQgHgJgEgKQgEgLgDgLQgCgMAAgMIAAAAQAAgKACgMQACgLAFgKQAFgKAFgJQAHgJAIgHQAHgIAKgHQAJgGALgEQALgEALgCQAMgCAKgBQAOABANACQAMACALAEQALAEAJAGQAJAFAKAJIgkApQgMgJgMgFQgNgGgQAAQgKABgJAEQgKAEgIAJQgHAIgFAKQgEALAAALIAAABQAAANAEAKQAFALAIAJQAIAHAKAFQAJAFANgBQALAAAJgCQAIgCAGgFIAAgaIgqAAIAAgqIBkAAIAABgQgaASgQAFQgMAFgNADQgNADgPgBQgLAAgLgBg");
	this.shape_2.setTransform(145.3,155);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5FA031").s().p("AgdBsIAAjXIA7AAIAADXg");
	this.shape_3.setTransform(129.2,155);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5FA031").s().p("AAyBsIhbh1IAAB1Ig8AAIAAjXIA4AAIBXBwIAAhwIA8AAIAADXg");
	this.shape_4.setTransform(112.8,155);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5FA031").s().p("AgXBuQgMgCgKgFQgLgDgJgHQgJgFgIgIQgIgIgGgJQgGgJgFgKQgEgKgCgLQgCgLAAgMIAAAAQAAgKACgLQACgLAEgKQAFgLAGgIQAGgKAIgHQAIgIAJgGQAKgHAKgEQALgEALgCQAMgCALgBQAMABAMACQALACALAEQALAEAJAHQAJAGAIAIQAIAHAGAJQAGAJAEAKQAFALACAKQACALAAALIAAAAQAAALgCALQgCALgFALQgEAJgGAKQgGAIgIAIQgIAIgJAGQgKAGgKAEQgLAFgMACQgLADgMgBQgLABgMgDgAgVg0QgKAEgIAIQgHAIgEAKQgEALAAALIAAAAQAAALAEALQAEAKAIAIQAHAJAKAFQALAEAKAAQAMAAAKgEQAKgFAIgIQAHgIAEgLQAEgKAAgMIAAAAQAAgKgEgLQgEgKgIgJQgHgIgKgEQgLgFgLAAQgLAAgKAFg");
	this.shape_5.setTransform(88.6,155);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5FA031").s().p("AgdBsIAAiiIhBAAIAAg1IC9AAIAAA1IhBAAIAACig");
	this.shape_6.setTransform(67.2,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55,139,146.1,35);


// stage content:
(lib.ABS0019300x25005censusnightsharehousev2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:1});

	// timeline functions:
	this.frame_0 = function() {
		this.LOOP = 0;
		
		createjs.Touch.enable(stage);
		stage.enableMouseOver();
		
		inlineInit(this);
		
		 
		this.BUTTON.cursor = "pointer";
		
		this.BUTTON.addEventListener("mouseover", rolloverCTA.bind(this));
		this.BUTTON.addEventListener("mouseout", rolloutCTA.bind(this));
		//this.BUTTON.addEventListener("click", clickthrough);
		
		
		function rolloverCTA() {
			this.CTA.gotoAndStop(1);
		}
		
		function rolloutCTA() {
			this.CTA.gotoAndStop(0);
		}
		
		
		/*function clickthrough() {
			window.open(clickTag, "_blank");
		}*/
	}
	this.frame_302 = function() {
		this.stop();
		
		if (this.LOOP > 0) {
			this.LOOP -= 1;
			this.play();
		}
	}
	this.frame_320 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(302).call(this.frame_302).wait(18).call(this.frame_320).wait(1));

	// clickTag
	this.BUTTON = new lib.clickTag();
	this.BUTTON.setTransform(150,125,1,1,0,0,0,150,125);
	this.BUTTON.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.BUTTON).wait(321));

	// fade to black
	this.clickTag = new lib.clickTag();
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	this.clickTag.alpha = 0;
	this.clickTag._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(303).to({_off:false},0).to({alpha:1},16).wait(2));

	// bottom
	this.CTA = new lib.bottom();
	this.CTA.setTransform(150,226.5,1,1,0,0,0,150,23.5);
	this.CTA.alpha = 0;
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(24).to({_off:false},0).to({alpha:1},9).wait(288));

	// difference
	this.instance = new lib.difference1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(196).to({_off:false},0).to({alpha:1},5).wait(120));

	// pause
	this.instance_1 = new lib.pause();
	this.instance_1.setTransform(93.6,95.3,1.6,1.6,0,0,0,299.9,249.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176).to({_off:false},0).to({regX:300,regY:250,scaleX:1,scaleY:1,x:150,y:125,alpha:1},5).wait(140));

	// moment
	this.instance_2 = new lib.moment();
	this.instance_2.setTransform(157,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(170).to({_off:false},0).to({alpha:1},6).wait(145));

	// tonight is
	this.instance_3 = new lib.getonline();
	this.instance_3.setTransform(431,125,0.5,0.5,0,0,0,300,250);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(151).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(163));

	// census
	this.instance_4 = new lib.censusnight();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({alpha:1},7).wait(79).to({alpha:0},4).wait(171));

	// is
	this.instance_5 = new lib.is();
	this.instance_5.setTransform(150,124.5,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).to({alpha:1},7).wait(84).to({alpha:0},4).wait(171));

	// tonight
	this.instance_6 = new lib.august();
	this.instance_6.setTransform(137.7,141.1,1.667,1.666,0,0,0,134.2,154.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1,x:133.2,y:154.3,alpha:1},5).wait(98).to({alpha:0},4).wait(171));

	// light
	this.instance_7 = new lib.light_1();
	this.instance_7.setTransform(323.2,62.2,1,1,-80.9,0,0,170.2,125);
	this.instance_7.alpha = 0;
	this.instance_7.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-62.4,x:294,y:74.8,alpha:0.371},58).to({scaleX:1,scaleY:1,rotation:-31.3,x:244.8,y:96.1,alpha:0.23},98).to({rotation:-2.5,x:197.1,y:90.8,alpha:0.309},76).to({regY:125.1,scaleX:1,scaleY:1,rotation:24.1,x:152.3,y:85.8,alpha:0.051},88).wait(1));

	// green
	this.instance_8 = new lib.green_1();
	this.instance_8.setTransform(149,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0.441},16).to({alpha:0.852},42).to({alpha:0.379},40).to({alpha:0.219},58).to({alpha:0.648},76).to({alpha:0.078},88).wait(1));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(149,125,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.01,scaleY:1.01,x:149.1,y:125.1,alpha:1},16).to({scaleX:1.1,scaleY:1.1,x:150.6,y:126.9},216).to({regY:124.9,scaleX:1.13,scaleY:1.13,x:151,y:127.6},88).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,-0.7,474.6,375.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;