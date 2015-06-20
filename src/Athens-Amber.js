define("amber-athens/Athens-Amber", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-Amber');
$core.packages["Athens-Amber"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-Amber"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('CanvasContext2D', $globals.Object, [], 'Athens-Amber');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CanvasContext2D.comment="I am an HTML Canvas 2D drawing context. I am used internally by Athens-HTML and considered private.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "beginPath",
protocol: 'paths',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.beginPath(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beginPath",{},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beginPath\x0a\x09< self.beginPath(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "bezierCurveVia:and:to:",
protocol: 'paths',
fn: function (pt1,pt2,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bezierCurveVia:and:to:",{pt1:pt1,pt2:pt2,aPoint:aPoint},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "pt2", "aPoint"],
source: "bezierCurveVia: pt1 and: pt2 to: aPoint\x0a\x09< self.bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "clearRect:",
protocol: 'rectangles',
fn: function (rect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._clearRect_a_a_a_($recv(rect)._left(),$recv(rect)._top(),$recv(rect)._right(),$recv(rect)._bottom());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearRect:",{rect:rect},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rect"],
source: "clearRect: rect\x0a\x09self clearRect: rect left a: rect top a: rect right a: rect bottom.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearRect:a:a:a:", "left", "top", "right", "bottom"]
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "clearRect:a:a:a:",
protocol: 'private',
fn: function (left,top,right,bottom){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.clearRect(left, top, right, bottom); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["left", "top", "right", "bottom"],
source: "clearRect: left a: top a: right a: bottom\x0a\x09< self.clearRect(left, top, right, bottom); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "clip",
protocol: 'paths',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.clip(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clip",{},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clip\x0a\x09< self.clip(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "closePath",
protocol: 'paths',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.closePath(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"closePath",{},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "closePath\x0a\x09< self.closePath(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "createLinearGradient:a:a:a:",
protocol: 'private',
fn: function (x1,y1,x2,y2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.createLinearGradient(x1, y1, x2, y2); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:a:a:a:",{x1:x1,y1:y1,x2:x2,y2:y2},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2"],
source: "createLinearGradient: x1 a: y1 a: x2 a: y2\x0a\x09< return self.createLinearGradient(x1, y1, x2, y2); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "createLinearGradientFrom:to:",
protocol: 'styles',
fn: function (start,stop){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv(start)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$3=$recv(start)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$1=self._createLinearGradient_a_a_a_($2,$3,$recv(stop)._x(),$recv(stop)._y());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createLinearGradientFrom:to:",{start:start,stop:stop},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["start", "stop"],
source: "createLinearGradientFrom: start to: stop\x0a\x09^ self createLinearGradient: start x a: start y a: stop x a: stop y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createLinearGradient:a:a:a:", "x", "y"]
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "createPattern:repeat:",
protocol: 'styles',
fn: function (source,repeatMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.createPattern(source, repeatMode); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPattern:repeat:",{source:source,repeatMode:repeatMode},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["source", "repeatMode"],
source: "createPattern: source repeat: repeatMode\x0a\x09< self.createPattern(source, repeatMode); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "createRadialGradient:a:a:a:a:a:",
protocol: 'private',
fn: function (x1,y1,innerRadius,x2,y2,outerRadius){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.createRadialGradient(x1, y1, innerRadius, x2, y2, outerRadius); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:a:a:a:a:a:",{x1:x1,y1:y1,innerRadius:innerRadius,x2:x2,y2:y2,outerRadius:outerRadius},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "innerRadius", "x2", "y2", "outerRadius"],
source: "createRadialGradient: x1 a: y1 a: innerRadius a: x2 a: y2 a: outerRadius\x0a\x09< return self.createRadialGradient(x1, y1, innerRadius, x2, y2, outerRadius); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "createRadialGradientFrom:with:to:with:",
protocol: 'styles',
fn: function (start,innerRadius,stop,outerRadius){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv(start)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$3=$recv(start)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$1=self._createRadialGradient_a_a_a_a_a_($2,$3,innerRadius,$recv(stop)._x(),$recv(stop)._y(),outerRadius);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createRadialGradientFrom:with:to:with:",{start:start,innerRadius:innerRadius,stop:stop,outerRadius:outerRadius},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["start", "innerRadius", "stop", "outerRadius"],
source: "createRadialGradientFrom: start with: innerRadius to: stop with: outerRadius\x0a\x09^ self createRadialGradient: start x a: start y a: innerRadius a: stop x a: stop y a: outerRadius",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createRadialGradient:a:a:a:a:a:", "x", "y"]
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "fill",
protocol: 'paths',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.fill(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fill",{},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fill\x0a\x09< self.fill(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "fillRect:",
protocol: 'rectangles',
fn: function (rect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._fillRect_a_a_a_($recv(rect)._left(),$recv(rect)._top(),$recv(rect)._right(),$recv(rect)._bottom());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillRect:",{rect:rect},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rect"],
source: "fillRect: rect\x0a\x09self fillRect: rect left a: rect top a: rect right a: rect bottom.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fillRect:a:a:a:", "left", "top", "right", "bottom"]
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "fillRect:a:a:a:",
protocol: 'private',
fn: function (left,top,right,bottom){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.fillRect(left, top, right, bottom); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["left", "top", "right", "bottom"],
source: "fillRect: left a: top a: right a: bottom\x0a\x09< self.fillRect(left, top, right, bottom); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "fillStyle:",
protocol: 'styles',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.fillStyle = anObject; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillStyle:",{anObject:anObject},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "fillStyle: anObject\x0a\x09< self.fillStyle = anObject; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "fillText:X:Y:",
protocol: 'text',
fn: function (aString,x,y){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.fillText(aString, x, y); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillText:X:Y:",{aString:aString,x:x,y:y},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "x", "y"],
source: "fillText: aString X: x Y: y\x0a\x09< self.fillText(aString, x, y); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "font:",
protocol: 'text',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.font = aString; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"font:",{aString:aString},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "font: aString\x0a\x09< self.font = aString; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "globalCompositeOperation",
protocol: 'compositing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.globalCompositeOperation; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalCompositeOperation",{},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalCompositeOperation\x0a\x09< return self.globalCompositeOperation; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "globalCompositeOperation:",
protocol: 'compositing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.globalCompositeOperation = aString; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalCompositeOperation:",{aString:aString},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "globalCompositeOperation: aString\x0a\x09< self.globalCompositeOperation = aString; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "lineCap:",
protocol: 'line styles',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.lineCap = aNumber; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineCap:",{aNumber:aNumber},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "lineCap: aNumber\x0a\x09< self.lineCap = aNumber; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "lineDash:",
protocol: 'line styles',
fn: function (anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 if (self.setLineDash !== undefined) {
		self.setLineDash(anArray);
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineDash:",{anArray:anArray},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "lineDash: anArray\x0a\x09< if (self.setLineDash !== undefined) {\x0a\x09\x09self.setLineDash(anArray);\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "lineDashOffset:",
protocol: 'line styles',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 if (self.setLineDash !== undefined) {
		self.lineDashOffset = aNumber;
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineDashOffset:",{aNumber:aNumber},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "lineDashOffset: aNumber\x0a\x09< if (self.setLineDash !== undefined) {\x0a\x09\x09self.lineDashOffset = aNumber;\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "lineJoin:",
protocol: 'line styles',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.lineJoin = aNumber; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineJoin:",{aNumber:aNumber},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "lineJoin: aNumber\x0a\x09< self.lineJoin = aNumber; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "lineTo:",
protocol: 'paths',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.lineTo(aPoint._x(), aPoint._y()); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09< self.lineTo(aPoint._x(), aPoint._y()); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "lineWidth:",
protocol: 'line styles',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.lineWidth = aNumber; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineWidth:",{aNumber:aNumber},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "lineWidth: aNumber\x0a\x09< self.lineWidth = aNumber; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "measureStringWidth:",
protocol: 'text',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.measureText(aString).width; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"measureStringWidth:",{aString:aString},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "measureStringWidth: aString\x0a\x09< return self.measureText(aString).width; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "miterLimit:",
protocol: 'line styles',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.miterLimit = aNumber; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"miterLimit:",{aNumber:aNumber},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "miterLimit: aNumber\x0a\x09< self.miterLimit = aNumber; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "moveTo:",
protocol: 'paths',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.moveTo(aPoint._x(), aPoint._y()); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09< self.moveTo(aPoint._x(), aPoint._y()); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "pop",
protocol: 'save/restore context',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.restore(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pop",{},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pop\x0a\x09< self.restore(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "push",
protocol: 'save/restore context',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.save(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"push",{},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "push\x0a\x09< self.save(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "quadraticCurveVia:to:",
protocol: 'paths',
fn: function (pt1,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"quadraticCurveVia:to:",{pt1:pt1,aPoint:aPoint},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "aPoint"],
source: "quadraticCurveVia: pt1 to: aPoint\x0a\x09< self.quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "rect:",
protocol: 'rectangles',
fn: function (rect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._rect_a_a_a_($recv(rect)._left(),$recv(rect)._top(),$recv(rect)._right(),$recv(rect)._bottom());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rect:",{rect:rect},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rect"],
source: "rect: rect\x0a\x09self rect: rect left a: rect top a: rect right a: rect bottom.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rect:a:a:a:", "left", "top", "right", "bottom"]
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "rect:a:a:a:",
protocol: 'private',
fn: function (left,top,right,bottom){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.rect(left, top, right, bottom); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["left", "top", "right", "bottom"],
source: "rect: left a: top a: right a: bottom\x0a\x09< self.rect(left, top, right, bottom); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "rotateByRadians:",
protocol: 'transformations',
fn: function (angle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.rotate(angle); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09< self.rotate(angle); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "scaleByX:Y:",
protocol: 'transformations',
fn: function (x,y){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.scale(x, y); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{x:x,y:y},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y"],
source: "scaleByX: x Y: y\x0a\x09< self.scale(x, y); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "stroke",
protocol: 'paths',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.stroke(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stroke",{},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stroke\x0a\x09< self.stroke(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "strokeRect:",
protocol: 'rectangles',
fn: function (rect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._strokeRect_a_a_a_($recv(rect)._left(),$recv(rect)._top(),$recv(rect)._right(),$recv(rect)._bottom());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeRect:",{rect:rect},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rect"],
source: "strokeRect: rect\x0a\x09self strokeRect: rect left a: rect top a: rect right a: rect bottom.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strokeRect:a:a:a:", "left", "top", "right", "bottom"]
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "strokeRect:a:a:a:",
protocol: 'private',
fn: function (left,top,right,bottom){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.strokeRect(left, top, right, bottom); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["left", "top", "right", "bottom"],
source: "strokeRect: left a: top a: right a: bottom\x0a\x09< self.strokeRect(left, top, right, bottom); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "strokeStyle:",
protocol: 'styles',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.strokeStyle = anObject; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeStyle:",{anObject:anObject},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "strokeStyle: anObject\x0a\x09< self.strokeStyle = anObject; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "transform:a:a:a:a:a:",
protocol: 'transformations',
fn: function (sx,shy,shx,sy,x,y){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.setTransform(sx, shy, shx, sy, x, y); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transform:a:a:a:a:a:",{sx:sx,shy:shy,shx:shx,sy:sy,x:x,y:y},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["sx", "shy", "shx", "sy", "x", "y"],
source: "transform: sx a: shy a: shx a: sy a: x a: y\x0a\x09< self.setTransform(sx, shy, shx, sy, x, y); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "transformBy:a:a:a:a:a:",
protocol: 'transformations',
fn: function (sx,shy,shx,sy,x,y){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.transform(sx, shy, shx, sy, x, y); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformBy:a:a:a:a:a:",{sx:sx,shy:shy,shx:shx,sy:sy,x:x,y:y},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["sx", "shy", "shx", "sy", "x", "y"],
source: "transformBy: sx a: shy a: shx a: sy a: x a: y\x0a\x09< self.transform(sx, shy, shx, sy, x, y); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);

$core.addMethod(
$core.method({
selector: "translateByX:Y:",
protocol: 'transformations',
fn: function (x,y){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.translate(x, y); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{x:x,y:y},$globals.CanvasContext2D)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y"],
source: "translateByX: x Y: y\x0a\x09< self.translate(x, y); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasContext2D);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $Platform(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._javascriptConstructor_($recv($recv($Platform())._globals())._CanvasRenderingContext2D());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CanvasContext2D.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self javascriptConstructor: Platform globals CanvasRenderingContext2D ",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["javascriptConstructor:", "CanvasRenderingContext2D", "globals"]
}),
$globals.CanvasContext2D.klass);


$core.addClass('CanvasGradient', $globals.Object, [], 'Athens-Amber');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CanvasGradient.comment="I am an HTML Canvas gradient object. I am used internally by Athens-HTML and considered private.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addColorStopAt:color:",
protocol: 'styles',
fn: function (pos,color){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.addColorStop(pos, color); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addColorStopAt:color:",{pos:pos,color:color},$globals.CanvasGradient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pos", "color"],
source: "addColorStopAt: pos color: color\x0a\x09< self.addColorStop(pos, color); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CanvasGradient);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $Platform(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._javascriptConstructor_($recv($recv($Platform())._globals())._CanvasGradient());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CanvasGradient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self javascriptConstructor: Platform globals CanvasGradient ",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["javascriptConstructor:", "CanvasGradient", "globals"]
}),
$globals.CanvasGradient.klass);


$core.addClass('Color', $globals.Object, ['rgbaString', 'alpha', 'r', 'g', 'b'], 'Athens-Amber');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Color.comment="I represent a color.\x0a\x0a## API\x0aThe method `#r`, `#g`, `#b`, `#alpha` are used to retrieve my red, green, blue, and alpha component. Setters exist for modifying my color components.\x0a\x0aThe methods `self class>>#r:g:b:` and `self class>>#r:g:b:a:` are used to create new color instances.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alpha",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@alpha"];
if(($receiver = $1) == null || $receiver.isNil){
self["@alpha"]=(1);
self["@alpha"];
} else {
$1;
};
$2=self["@alpha"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alpha",{},$globals.Color)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alpha\x0a\x09alpha ifNil: [alpha := 1].\x0a\x09^ alpha",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "alpha:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@alpha"]=aNumber;
self["@rgbaString"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "alpha: aNumber\x0a\x09alpha := aNumber.\x0a\x09rgbaString := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "b:",
protocol: 'accessing',
fn: function (blue){
var self=this;
self["@b"]=blue;
self["@rgbaString"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["blue"],
source: "b: blue\x0a\x09b := blue.\x0a\x09rgbaString := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "blue",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@b"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blue\x0a\x09^ b",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "g:",
protocol: 'accessing',
fn: function (green){
var self=this;
self["@g"]=green;
self["@rgbaString"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["green"],
source: "g: green\x0a\x09g := green.\x0a\x09rgbaString := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "green",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@g"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "green\x0a\x09^ g",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "r:",
protocol: 'accessing',
fn: function (red){
var self=this;
self["@r"]=red;
self["@rgbaString"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["red"],
source: "r: red\x0a\x09r := red.\x0a\x09rgbaString := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "red",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@r"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "red\x0a\x09^ r",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "rgbaString",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 if (self['@rgbaString'] !== undefined && !self['@rgbaString']._isNil()) {
		return self['@rgbaString'];
	}
	else {
		if (self['@alpha'] === undefined) { 
			return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',1)';
		}
		else {
			return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',' + self['@alpha'] + ')';
		}
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rgbaString",{},$globals.Color)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rgbaString\x0a\x09< if (self['@rgbaString'] !== undefined && !self['@rgbaString']._isNil()) {\x0a\x09\x09return self['@rgbaString'];\x0a\x09}\x0a\x09else {\x0a\x09\x09if (self['@alpha'] === undefined) { \x0a\x09\x09\x09return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',1)';\x0a\x09\x09}\x0a\x09\x09else {\x0a\x09\x09\x09return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',' + self['@alpha'] + ')';\x0a\x09\x09}\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);


$core.addMethod(
$core.method({
selector: "black",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0, 0, 0, 'rgba(0,0,0,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"black",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "black\x0a\x09< return self._r_g_b_rgba_(0, 0, 0, 'rgba(0,0,0,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "blue",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0, 0, 1, 'rgba(0,0,255,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blue",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blue\x0a\x09< return self._r_g_b_rgba_(0, 0, 1, 'rgba(0,0,255,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoBlue",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.06, 0.51, 0.96, 'rgba(15,130,245,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoBlue",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoBlue\x0a\x09< return self._r_g_b_rgba_(0.06, 0.51, 0.96, 'rgba(15,130,245,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoDarkBlue",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0, 0.3, 0.6, 'rgba(0,76,153,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoDarkBlue",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoDarkBlue\x0a\x09< return self._r_g_b_rgba_(0, 0.3, 0.6, 'rgba(0,76,153,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoDarkGray",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.33, 0.33, 0.33, 'rgba(85,85,85,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoDarkGray",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoDarkGray\x0a\x09< return self._r_g_b_rgba_(0.33, 0.33, 0.33, 'rgba(85,85,85,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoDarkPurple",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.38, 0.19, 0.48, 'rgba(97,48,121,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoDarkPurple",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoDarkPurple\x0a\x09< return self._r_g_b_rgba_(0.38, 0.19, 0.48, 'rgba(97,48,121,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoGray",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.6, 0.6, 0.6, 'rgba(153,153,153,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoGray",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoGray\x0a\x09< return self._r_g_b_rgba_(0.6, 0.6, 0.6, 'rgba(153,153,153,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoLightGray",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.87, 0.87, 0.87, 'rgba(223,223,223,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoLightGray",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoLightGray\x0a\x09< return self._r_g_b_rgba_(0.87, 0.87, 0.87, 'rgba(223,223,223,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoLightPurple",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.69, 0.48, 0.8, 'rgba(177,123,203,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoLightPurple",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoLightPurple\x0a\x09< return self._r_g_b_rgba_(0.69, 0.48, 0.8, 'rgba(177,123,203,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoMiddleBlue",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0, 0.45, 0.9, 'rgba(0,114,230,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoMiddleBlue",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoMiddleBlue\x0a\x09< return self._r_g_b_rgba_(0, 0.45, 0.9, 'rgba(0,114,230,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoMiddlePurple",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.55, 0.28, 0.69, 'rgba(141,70,176,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoMiddlePurple",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoMiddlePurple\x0a\x09< return self._r_g_b_rgba_(0.55, 0.28, 0.69, 'rgba(141,70,176,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "cosmoPurple",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.61, 0.35, 0.73, 'rgba(155,89,187,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cosmoPurple",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cosmoPurple\x0a\x09< return self._r_g_b_rgba_(0.61, 0.35, 0.73, 'rgba(155,89,187,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "gray",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0.5, 0.5, 0.5, 'rgba(128, 128, 128, 1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gray",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gray\x0a\x09< return self._r_g_b_rgba_(0.5, 0.5, 0.5, 'rgba(128, 128, 128, 1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "green",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(0, 1, 0, 'rgba(0,255,0,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"green",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "green\x0a\x09< return self._r_g_b_rgba_(0, 1, 0, 'rgba(0,255,0,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "r:g:b:",
protocol: 'instance creation',
fn: function (red,green,blue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	return instance; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{red:red,green:green,blue:blue},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["red", "green", "blue"],
source: "r: red g: green b: blue\x0a\x09< var instance = self._new();\x0a\x09instance['@r'] = red;\x0a\x09instance['@g'] = green;\x0a\x09instance['@b'] = blue;\x0a\x09return instance; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "r:g:b:a:",
protocol: 'instance creation',
fn: function (red,green,blue,alpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	instance['@alpha'] = alpha;
	return instance; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"r:g:b:a:",{red:red,green:green,blue:blue,alpha:alpha},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["red", "green", "blue", "alpha"],
source: "r: red g: green b: blue a: alpha\x0a\x09< var instance = self._new();\x0a\x09instance['@r'] = red;\x0a\x09instance['@g'] = green;\x0a\x09instance['@b'] = blue;\x0a\x09instance['@alpha'] = alpha;\x0a\x09return instance; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "r:g:b:rgba:",
protocol: 'instance creation',
fn: function (red,green,blue,rgbaString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	instance['@rgbaString'] = rgbaString;
	return instance; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"r:g:b:rgba:",{red:red,green:green,blue:blue,rgbaString:rgbaString},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["red", "green", "blue", "rgbaString"],
source: "r: red g: green b: blue rgba: rgbaString\x0a\x09< var instance = self._new();\x0a\x09instance['@r'] = red;\x0a\x09instance['@g'] = green;\x0a\x09instance['@b'] = blue;\x0a\x09instance['@rgbaString'] = rgbaString;\x0a\x09return instance; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "red",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(1, 0, 0, 'rgba(255,0,0,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"red",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "red\x0a\x09< return self._r_g_b_rgba_(1, 0, 0, 'rgba(255,0,0,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "transparent",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._r_((0));
$recv($2)._g_((0));
$recv($2)._b_((0));
$recv($2)._alpha_((0));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transparent",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transparent\x0a\x09^ self new r: 0; g: 0; b: 0; alpha: 0; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["r:", "new", "g:", "b:", "alpha:", "yourself"]
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "white",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(1, 1, 1, 'rgba(255,255,255,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"white",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "white\x0a\x09< return self._r_g_b_rgba_(1, 1, 1, 'rgba(255,255,255,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);

$core.addMethod(
$core.method({
selector: "yellow",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._r_g_b_rgba_(1, 1, 0, 'rgba(255,255,0,1)'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yellow",{},$globals.Color.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yellow\x0a\x09< return self._r_g_b_rgba_(1, 1, 0, 'rgba(255,255,0,1)'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color.klass);


$core.addClass('Image', $globals.Object, [], 'Athens-Amber');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Image.comment="I represent a DOM image element. I am loaded asynchronously from a URL.\x0a\x0a\x0a## API\x0a\x0aThe `#onLoad:` method is used to bind a event that is triggered when the image was loaded by the browser. I provide a method `#complete` to determine the loading status at any time.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "complete",
protocol: 'state',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.complete; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"complete",{},$globals.Image)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "complete\x0a\x09< return self.complete; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Image);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.height; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.Image)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09< return self.height; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Image);

$core.addMethod(
$core.method({
selector: "onLoad:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.onload = aBlock; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onLoad:",{aBlock:aBlock},$globals.Image)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onLoad: aBlock\x0a \x09< self.onload = aBlock; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Image);

$core.addMethod(
$core.method({
selector: "source:",
protocol: 'accessing',
fn: function (anUrl){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self.src = anUrl; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source:",{anUrl:anUrl},$globals.Image)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUrl"],
source: "source: anUrl\x0a\x09< self.src = anUrl; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Image);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.width; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.Image)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09< return self.width; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Image);

$core.addMethod(
$core.method({
selector: "yourself",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yourself",{},$globals.Image)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yourself\x0a\x09< return self; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Image);


$core.addMethod(
$core.method({
selector: "fromUrl:",
protocol: 'instance creation',
fn: function (anUrl){
var self=this;
function $Image(){return $globals.Image||(typeof Image=="undefined"?nil:Image)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Image())._new();
$recv($2)._source_(anUrl);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromUrl:",{anUrl:anUrl},$globals.Image.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUrl"],
source: "fromUrl: anUrl\x0a\x09^ Image new\x0a\x09\x09source: anUrl;\x0a\x09\x09yourself",
referencedClasses: ["Image"],
//>>excludeEnd("ide");
messageSends: ["source:", "new", "yourself"]
}),
$globals.Image.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $Platform(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._javascriptConstructor_($recv($recv($Platform())._globals())._Image());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Image.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self javascriptConstructor: Platform globals Image ",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["javascriptConstructor:", "Image", "globals"]
}),
$globals.Image.klass);


$core.addClass('LogicalFont', $globals.Object, ['familyName', 'size', 'sizeUnit'], 'Athens-Amber');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.LogicalFont.comment="I represent a text font with a specific size.\x0a\x0a## API\x0aThe method `#familyName` returns my family name. The set of possible font families depends on your web browser. Web browsers typically support at least 'Arial', 'Courier', 'Helvetica', 'monospace' and 'Times'. Web fonts can be used as well after they are loaded.\x0a\x0aThe method `#size` returns my size. The default size measurement unit is pixels, but it can be changed with `#sizeUnit:`. Possible values are 'pt' and 'px'.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asHTMLString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv(self["@size"])._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(self["@sizeUnit"])._asString());
$2=$recv($3).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(self["@familyName"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asHTMLString",{},$globals.LogicalFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asHTMLString\x0a\x09^ size asString, sizeUnit asString, ' ', familyName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString"]
}),
$globals.LogicalFont);

$core.addMethod(
$core.method({
selector: "familyName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@familyName"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "familyName\x0a\x09^ familyName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LogicalFont);

$core.addMethod(
$core.method({
selector: "familyName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@familyName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "familyName: aString\x0a\x09familyName := aString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LogicalFont);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LogicalFont.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@sizeUnit"]="px";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.LogicalFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09sizeUnit := 'px'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.LogicalFont);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@size"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LogicalFont);

$core.addMethod(
$core.method({
selector: "size:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@size"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "size: anInteger\x0a\x09size := anInteger.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LogicalFont);

$core.addMethod(
$core.method({
selector: "sizeUnit",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sizeUnit"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sizeUnit\x0a\x09^ sizeUnit",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LogicalFont);

$core.addMethod(
$core.method({
selector: "sizeUnit:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(["pt","px"])._includes_(aString);
if($core.assert($1)){
self["@sizeUnit"]=aString;
self["@sizeUnit"];
} else {
self._error_("Invalid size measurement unit");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sizeUnit:",{aString:aString},$globals.LogicalFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "sizeUnit: aString\x0a\x09({'pt'. 'px'} includes: aString)\x0a\x09\x09ifFalse: [self error: 'Invalid size measurement unit']\x0a\x09\x09ifTrue: [sizeUnit := aString].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "includes:", "error:"]
}),
$globals.LogicalFont);


$core.addMethod(
$core.method({
selector: "familyName:pixelSize:",
protocol: 'instance creation',
fn: function (aString,anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._familyName_(aString);
$recv($2)._size_(anInteger);
$recv($2)._sizeUnit_("px");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"familyName:pixelSize:",{aString:aString,anInteger:anInteger},$globals.LogicalFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anInteger"],
source: "familyName: aString pixelSize: anInteger\x0a\x09^ self new\x0a\x09\x09familyName: aString;\x0a\x09\x09size: anInteger;\x0a\x09\x09sizeUnit: 'px';\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["familyName:", "new", "size:", "sizeUnit:", "yourself"]
}),
$globals.LogicalFont.klass);

$core.addMethod(
$core.method({
selector: "familyName:pointSize:",
protocol: 'instance creation',
fn: function (aString,anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._familyName_(aString);
$recv($2)._size_(anInteger);
$recv($2)._sizeUnit_("pt");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"familyName:pointSize:",{aString:aString,anInteger:anInteger},$globals.LogicalFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anInteger"],
source: "familyName: aString pointSize: anInteger\x0a\x09^ self new\x0a\x09\x09familyName: aString;\x0a\x09\x09size: anInteger;\x0a\x09\x09sizeUnit: 'pt';\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["familyName:", "new", "size:", "sizeUnit:", "yourself"]
}),
$globals.LogicalFont.klass);

$core.addMethod(
$core.method({
selector: "familyName:size:",
protocol: 'instance creation',
fn: function (aString,anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._familyName_pixelSize_(aString,anInteger);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"familyName:size:",{aString:aString,anInteger:anInteger},$globals.LogicalFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anInteger"],
source: "familyName: aString size: anInteger\x0a\x09^ self\x0a\x09\x09familyName: aString\x0a\x09\x09pixelSize: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["familyName:pixelSize:"]
}),
$globals.LogicalFont.klass);


$core.addClass('Rectangle', $globals.Object, ['origin', 'corner'], 'Athens-Amber');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Rectangle.comment="I am a rectangle. I have a point of origin and a corner point.\x0a\x0a\x0a## API\x0a\x0aThe `#insectsWith:` method is used to determine whether I intersect with another rectangle.\x0a\x0aThe `#boundsAfterMultiplicationWith:` method is used to calculate my bounding box after transforming myself with the argument matrix.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asPolygon",
protocol: 'converting',
fn: function (){
var self=this;
function $AthensPolygon(){return $globals.AthensPolygon||(typeof AthensPolygon=="undefined"?nil:AthensPolygon)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$5,$6,$4,$7,$1;
$2=$recv($AthensPolygon())._new();
$recv($2)._moveTo_(self["@origin"]);
$3=$2;
$5=$recv(self["@corner"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$6=$recv(self["@origin"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__at($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$recv($3)._lineTo_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:"]=1;
//>>excludeEnd("ctx");
$recv($2)._lineTo_(self["@corner"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:"]=2;
//>>excludeEnd("ctx");
$recv($2)._lineTo_($recv($recv(self["@origin"])._x()).__at($recv(self["@corner"])._y()));
$7=$recv($2)._yourself();
$1=$7;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asPolygon",{},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPolygon\x0a\x09^ AthensPolygon new\x0a\x09\x09moveTo: origin;\x0a\x09\x09lineTo: corner x @ origin y;\x0a\x09\x09lineTo: corner;\x0a\x09\x09lineTo: origin x @ corner y;\x0a\x09\x09yourself",
referencedClasses: ["AthensPolygon"],
//>>excludeEnd("ide");
messageSends: ["moveTo:", "new", "lineTo:", "@", "x", "y", "yourself"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "bottom",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@corner"])._y();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bottom",{},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bottom\x0a\x09^ corner y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "boundingBox",
protocol: 'converting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "boundingBox\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "boundsAfterMultiplicationWith:",
protocol: 'converting',
fn: function (matrix){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
	var x1 = matrix['@sx']*self['@origin']['@x'] + matrix['@shx']*self['@origin']['@y'] + matrix['@x'];
	var x2 = matrix['@sx']*self['@corner']['@x'] + matrix['@shx']*self['@corner']['@y'] + matrix['@x'];
	var y1 = matrix['@shy']*self['@origin']['@x'] + matrix['@sy']*self['@origin']['@y'] + matrix['@y'];
	var y2 = matrix['@shy']*self['@corner']['@x'] + matrix['@sy']*self['@corner']['@y'] + matrix['@y'];
	
	var points = [[x1, y1], [x1, y2], [x2, y1], [x2, y2]];
	
	for (var i = 0; i < 4; i++) {
		minX = Math.min(minX, points[i][0]);
		maxX = Math.max(maxX, points[i][0]);
		minY = Math.min(minY, points[i][1]);
		maxY = Math.max(maxY, points[i][1]);
	}
	
	return minX.__at(minY)._corner_(maxX.__at(maxY)); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boundsAfterMultiplicationWith:",{matrix:matrix},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["matrix"],
source: "boundsAfterMultiplicationWith: matrix\x0a\x09< var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;\x0a\x09var x1 = matrix['@sx']*self['@origin']['@x'] + matrix['@shx']*self['@origin']['@y'] + matrix['@x'];\x0a\x09var x2 = matrix['@sx']*self['@corner']['@x'] + matrix['@shx']*self['@corner']['@y'] + matrix['@x'];\x0a\x09var y1 = matrix['@shy']*self['@origin']['@x'] + matrix['@sy']*self['@origin']['@y'] + matrix['@y'];\x0a\x09var y2 = matrix['@shy']*self['@corner']['@x'] + matrix['@sy']*self['@corner']['@y'] + matrix['@y'];\x0a\x09\x0a\x09var points = [[x1, y1], [x1, y2], [x2, y1], [x2, y2]];\x0a\x09\x0a\x09for (var i = 0; i < 4; i++) {\x0a\x09\x09minX = Math.min(minX, points[i][0]);\x0a\x09\x09maxX = Math.max(maxX, points[i][0]);\x0a\x09\x09minY = Math.min(minY, points[i][1]);\x0a\x09\x09maxY = Math.max(maxY, points[i][1]);\x0a\x09}\x0a\x09\x0a\x09return minX.__at(minY)._corner_(maxX.__at(maxY)); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "corner",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@corner"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "corner\x0a\x09^ corner",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "corner:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@corner"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "corner: aPoint\x0a\x09corner := aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "drawOn:",
protocol: 'drawing',
fn: function (canvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(canvas)._context2D())._rect_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["canvas"],
source: "drawOn: canvas\x0a\x09canvas context2D rect: self.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rect:", "context2D"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@corner"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__minus($recv(self["@origin"])._y());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ corner y - origin y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "y"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "intersectsWith:",
protocol: 'testing',
fn: function (aRect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$7,$6,$4,$10,$9,$8,$3,$12,$13,$11,$2,$15,$14,$1;
$5=$recv(self["@origin"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$7=$recv(aRect)._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["corner"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__lt_eq($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
$10=$recv(aRect)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__lt_eq($recv(self["@corner"])._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__and($8);
$12=$recv(self["@origin"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$13=$recv($recv(aRect)._corner())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__lt($13);
$2=$recv($3).__and($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=2;
//>>excludeEnd("ctx");
$15=$recv($recv(aRect)._origin())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$14=$recv($15).__lt_eq($recv(self["@corner"])._y());
$1=$recv($2).__and($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"intersectsWith:",{aRect:aRect},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRect"],
source: "intersectsWith: aRect\x0a\x09^ (origin x <= aRect corner x) & (aRect origin x <= corner x) & (origin y < aRect corner y) & (aRect origin y <= corner y)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["&", "<=", "x", "corner", "origin", "<", "y"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "left",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@origin"])._x();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"left",{},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "left\x0a\x09^ origin x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "origin",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@origin"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "origin\x0a\x09^ origin",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "origin:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@origin"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "origin: aPoint\x0a\x09origin := aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "right",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@corner"])._x();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"right",{},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "right\x0a\x09^ corner x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "top",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@origin"])._y();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"top",{},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "top\x0a\x09^ origin y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@corner"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__minus($recv(self["@origin"])._x());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ corner x - origin x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "x"]
}),
$globals.Rectangle);


$core.addMethod(
$core.method({
selector: "origin:corner:",
protocol: 'instance creation',
fn: function (originPoint,cornerPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._origin_(originPoint);
$recv($2)._corner_(cornerPoint);
$recv($2)._initialize();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"origin:corner:",{originPoint:originPoint,cornerPoint:cornerPoint},$globals.Rectangle.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["originPoint", "cornerPoint"],
source: "origin: originPoint corner: cornerPoint\x0a\x09^ self basicNew\x0a\x09\x09origin: originPoint;\x0a\x09\x09corner: cornerPoint;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["origin:", "basicNew", "corner:", "initialize", "yourself"]
}),
$globals.Rectangle.klass);

$core.addMethod(
$core.method({
selector: "millisecondClockValue",
protocol: '*Athens-Amber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return new Date().getTime(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"millisecondClockValue",{},$globals.Date.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "millisecondClockValue\x0a\x09< return new Date().getTime(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "reverseDo:",
protocol: '*Athens-Amber',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
for(var i=self.length-1;-1<i;i--){aBlock._value_(self[i]);};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reverseDo:",{aBlock:aBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "reverseDo: aBlock\x0a\x09<for(var i=self.length-1;-1<i;i--){aBlock._value_(self[i]);}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

});
