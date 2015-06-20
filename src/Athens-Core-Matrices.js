define("amber-athens/Athens-Core-Matrices", ["amber/boot", "amber-athens/Athens-Core"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-Core-Matrices');
$core.packages["Athens-Core-Matrices"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-Core-Matrices"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('AthensAffineTransform', $globals.AthensTransform, ['sx', 'shx', 'x', 'shy', 'sy', 'y'], 'Athens-Core-Matrices');
$core.addMethod(
$core.method({
selector: "clearTranslation",
protocol: 'transformations',
fn: function (){
var self=this;
self["@y"]=(0);
self["@x"]=self["@y"];
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearTranslation\x0a\x09\x22reset a translation from matrix, leaving only scale and rotation\x22\x0a\x09\x0a\x09x := y := 0.0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._loadIdentity();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self loadIdentity",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadIdentity"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "inverseTransform:",
protocol: 'vector-transform',
fn: function (aPoint){
var self=this;
var px,py,y0,x0;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$5,$3,$6,$2,$7,$1,$9,$10,$8,$11,$12;
px=$recv(aPoint)._x();
py=$recv(aPoint)._y();
$4=$recv(self["@sx"]).__star(py);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$5=$recv(self["@sx"]).__star(self["@y"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__minus($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$6=$recv(self["@shy"]).__star(px);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__minus($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$7=$recv(self["@shy"]).__star(self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$1=$recv($2).__plus($7);
$9=$recv(self["@sx"]).__star(self["@sy"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
$10=$recv(self["@shy"]).__star(self["@shx"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$8=$recv($9).__minus($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
y0=$recv($1).__slash($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$11=$recv($recv(px).__minus(self["@x"])).__minus($recv(self["@shx"]).__star(y0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=4;
//>>excludeEnd("ctx");
x0=$recv($11).__slash(self["@sx"]);
$12=$recv(x0).__at(y0);
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inverseTransform:",{aPoint:aPoint,px:px,py:py,y0:y0,x0:x0},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "inverseTransform: aPoint \x0a\x09| px py y0 x0 |\x0a\x0a\x09px := aPoint x.\x0a\x09py := aPoint y.\x0a\x0a\x22  (we assume matrix is never degenerate)\x0a\x09Given straight transformation formulae:\x0a\x09\x09\x0a\x09px := x0*sx + y0*shx + x.\x0a\x09py := x0*shy + y0*sy + y.\x0a\x09\x0a\x09we doing inverse one, trying to find x0,y0 for rest of given variables (px,py,x,y,sx,sy,shx,shy).\x0a\x09\x0a\x09x0 := px - x - (shx*y0) / sx.\x0a\x09y0 := py - y - (shy*x0) / sy.\x0a\x09\x0a\x09y0 := py - y - (shy*(px - x - (shx*y0) / sx)) / sy.\x0a\x0a\x09sy * y0  == py - y - (shy*(px - x - (shx*y0) / sx)).\x0a\x0a\x09sx * sy * y0  == (sx*(py - y)) - (shy*(px - x - (shx*y0))).\x0a\x0a\x09sx * sy * y0  == sx*py - (sx*y) - (shy*px) + (shy*x) + (shy*shx*y0).\x0a\x0a\x09(sx * sy * y0) - (shy*shx*y0)  == sx*py - (sx*y) - (shy*px) + (shy*x) .\x0a\x09\x0a\x09y0* ((sx * sy) - (shy*shx))  == sx*py - (sx*y) - (shy*px) + (shy*x) .\x0a\x0a\x22\x0a\x09y0  := sx*py - (sx*y) - (shy*px) + (shy*x) / ((sx * sy) - (shy*shx)).\x0a\x09x0 := px - x - (shx*y0) / sx.\x0a\x0a\x09^ x0@y0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x", "y", "/", "+", "-", "*", "@"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "inverted",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notYetImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inverted",{},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inverted\x0a\x09\x22answer an inverse transformation of receiver\x22\x0a\x09self notYetImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notYetImplemented"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "loadAffineTransform:",
protocol: 'transformations',
fn: function (m){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@x'] = m['@x'];
	self['@y'] = m['@y'];
	self['@sx'] = m['@sx'];
	self['@sy'] = m['@sy'];
	self['@shx'] = m['@shx'];
	self['@shy'] = m['@shy']; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["m"],
source: "loadAffineTransform: m\x0a\x09< self['@x'] = m['@x'];\x0a\x09self['@y'] = m['@y'];\x0a\x09self['@sx'] = m['@sx'];\x0a\x09self['@sy'] = m['@sy'];\x0a\x09self['@shx'] = m['@shx'];\x0a\x09self['@shy'] = m['@shy']; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "loadGlobalIdentity",
protocol: 'transformations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@sx'] = self['@sy'] = 1.0;
	self['@shx'] = self['@shy'] = self['@x'] = self['@y'] = 0.0; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadGlobalIdentity",{},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadGlobalIdentity\x0a\x09< self['@sx'] = self['@sy'] = 1.0;\x0a\x09self['@shx'] = self['@shy'] = self['@x'] = self['@y'] = 0.0; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "loadIdentity",
protocol: 'transformations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@sx'] = self['@sy'] = 1.0;
	self['@shx'] = self['@shy'] = self['@x'] = self['@y'] = 0.0; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadIdentity\x0a\x09< self['@sx'] = self['@sy'] = 1.0;\x0a\x09self['@shx'] = self['@shy'] = self['@x'] = self['@y'] = 0.0; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "multiplyBy:",
protocol: 'transformations',
fn: function (m){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var nsx, nshx, nx, nshy, nsy, ny;
	nsx = self['@sx'] * m['@sx'] + self['@shx'] * m['@shy'];
	nshx = self['@sx'] * m['@shx'] + self['@shx'] * m['@sy'];
	nx = self['@sx'] * m['@x'] + self['@shx'] * m['@y'] + self['@x'];
	
	nshy = self['@shy'] * m['@sx'] + self['@sy'] * m['@shy'];
	nsy = self['@shy'] * m['@shx']  + self['@sy'] * m['@sy'];
	ny = self['@shy'] * m['@x'] + self['@sy'] * m['@y'] + self['@y'];
	
	self['@sx'] = nsx;
	self['@sy'] = nsy;
	self['@shx'] = nshx;
	self['@shy'] = nshy;
	self['@x'] = nx;
	self['@y'] = ny; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{m:m},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["m"],
source: "multiplyBy: m\x0a\x09< var nsx, nshx, nx, nshy, nsy, ny;\x0a\x09nsx = self['@sx'] * m['@sx'] + self['@shx'] * m['@shy'];\x0a\x09nshx = self['@sx'] * m['@shx'] + self['@shx'] * m['@sy'];\x0a\x09nx = self['@sx'] * m['@x'] + self['@shx'] * m['@y'] + self['@x'];\x0a\x09\x0a\x09nshy = self['@shy'] * m['@sx'] + self['@sy'] * m['@shy'];\x0a\x09nsy = self['@shy'] * m['@shx']  + self['@sy'] * m['@sy'];\x0a\x09ny = self['@shy'] * m['@x'] + self['@sy'] * m['@y'] + self['@y'];\x0a\x09\x0a\x09self['@sx'] = nsx;\x0a\x09self['@sy'] = nsy;\x0a\x09self['@shx'] = nshx;\x0a\x09self['@shy'] = nshy;\x0a\x09self['@x'] = nx;\x0a\x09self['@y'] = ny; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "restoreAfter:",
protocol: 'transformations',
fn: function (aBlock){
var self=this;
var previous;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
previous=self._copy();
$recv(aBlock)._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._loadAffineTransform_(previous);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock,previous:previous},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09|previous|\x0a\x09previous := self copy.\x0a\x09aBlock ensure: [ \x09self loadAffineTransform: previous ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "ensure:", "loadAffineTransform:"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "rotateByDegrees:",
protocol: 'transformations',
fn: function (angle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var cos = Math.cos(angle / 180.0 * Math.PI);
	var sin = Math.sin(angle / 180.0 * Math.PI);
	
	var newSx = self['@sx']*cos + self['@shx']*sin;
	var newSy = self['@sy']*cos - self['@shy']*sin;
	
	self['@shx'] = self['@shx']*cos - self['@sx']*sin;
	self['@shy'] = self['@shy']*cos + self['@sy']*sin;
	
	self['@sx'] = newSx;
	self['@sy'] = newSy; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["angle"],
source: "rotateByDegrees: angle\x0a\x09< var cos = Math.cos(angle / 180.0 * Math.PI);\x0a\x09var sin = Math.sin(angle / 180.0 * Math.PI);\x0a\x09\x0a\x09var newSx = self['@sx']*cos + self['@shx']*sin;\x0a\x09var newSy = self['@sy']*cos - self['@shy']*sin;\x0a\x09\x0a\x09self['@shx'] = self['@shx']*cos - self['@sx']*sin;\x0a\x09self['@shy'] = self['@shy']*cos + self['@sy']*sin;\x0a\x09\x0a\x09self['@sx'] = newSx;\x0a\x09self['@sy'] = newSy; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "rotateByRadians:",
protocol: 'transformations',
fn: function (angle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	
	var newSx = self['@sx']*cos + self['@shx']*sin;
	var newSy = self['@sy']*cos - self['@shy']*sin;
	
	self['@shx'] = self['@shx']*cos - self['@sx']*sin;
	self['@shy'] = self['@shy']*cos + self['@sy']*sin;
	
	self['@sx'] = newSx;
	self['@sy'] = newSy; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09< var cos = Math.cos(angle);\x0a\x09var sin = Math.sin(angle);\x0a\x09\x0a\x09var newSx = self['@sx']*cos + self['@shx']*sin;\x0a\x09var newSy = self['@sy']*cos - self['@shy']*sin;\x0a\x09\x0a\x09self['@shx'] = self['@shx']*cos - self['@sx']*sin;\x0a\x09self['@shy'] = self['@shy']*cos + self['@sy']*sin;\x0a\x09\x0a\x09self['@sx'] = newSx;\x0a\x09self['@sy'] = newSy; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "scale",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@sx"]).__at(self["@sy"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scale",{},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scale\x0a\x09^ sx@sy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "scaleBy:",
protocol: 'transformations',
fn: function (factor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 if (factor.constructor === Number) {
		self['@sx'] *= factor;
		self['@shx'] *= factor;
		self['@sy'] *= factor;
		self['@shy'] *= factor;
	}
	else {
		self['@sx'] *= factor._x();;
		self['@shx'] *= factor._y();
		self['@sy'] *= factor._y();
		self['@shy'] *= factor._x();
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["factor"],
source: "scaleBy: factor\x0a\x09< if (factor.constructor === Number) {\x0a\x09\x09self['@sx'] *= factor;\x0a\x09\x09self['@shx'] *= factor;\x0a\x09\x09self['@sy'] *= factor;\x0a\x09\x09self['@shy'] *= factor;\x0a\x09}\x0a\x09else {\x0a\x09\x09self['@sx'] *= factor._x();;\x0a\x09\x09self['@shx'] *= factor._y();\x0a\x09\x09self['@sy'] *= factor._y();\x0a\x09\x09self['@shy'] *= factor._x();\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "scaleByX:Y:",
protocol: 'transformations',
fn: function (fx,fy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@sx'] *= fx;
	self['@shx'] *= fx;
	self['@sy'] *= fy;
	self['@shy'] *= fy; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{fx:fx,fy:fy},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["fx", "fy"],
source: "scaleByX: fx Y: fy\x0a\x09< self['@sx'] *= fx;\x0a\x09self['@shx'] *= fx;\x0a\x09self['@sy'] *= fy;\x0a\x09self['@shy'] *= fy; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "scaleX:Y:",
protocol: 'transformations',
fn: function (fx,fy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._scaleByX_Y_(fx,fy);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["fx", "fy"],
source: "scaleX: fx Y: fy\x0a\x09self scaleByX: fx Y: fy.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scaleByX:Y:"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "shx",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@shx"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shx\x0a\x09^ shx",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "shx:",
protocol: 'accessing',
fn: function (number){
var self=this;
self["@shx"]=number;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["number"],
source: "shx: number\x0a\x09shx := number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "shy",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@shy"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shy\x0a\x09^ shy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "shy:",
protocol: 'accessing',
fn: function (number){
var self=this;
self["@shy"]=number;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["number"],
source: "shy: number\x0a\x09shy := number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "sx",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sx"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sx\x0a\x09^ sx",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "sx:",
protocol: 'accessing',
fn: function (number){
var self=this;
self["@sx"]=number;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["number"],
source: "sx: number\x0a\x09sx := number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "sy",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sy"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sy\x0a\x09^ sy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "sy:",
protocol: 'accessing',
fn: function (number){
var self=this;
self["@sy"]=number;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["number"],
source: "sy: number\x0a\x09sy := number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "transform:",
protocol: 'vector-transform',
fn: function (aPoint){
var self=this;
var px,py;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$5,$3,$2,$8,$7,$6,$1;
px=$recv(aPoint)._x();
py=$recv(aPoint)._y();
$4=$recv(self["@sx"]).__star(px);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$5=$recv(self["@shx"]).__star(py);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__plus($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__plus(self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$8=$recv(self["@shy"]).__star(px);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__plus($recv(self["@sy"]).__star(py));
$6=$recv($7).__plus(self["@y"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$1=$recv($Point())._x_y_($2,$6);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transform:",{aPoint:aPoint,px:px,py:py},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "transform: aPoint \x0a\x09| px py |\x0a\x0a\x09px := aPoint x.\x0a\x09py := aPoint y.\x0a\x09^ Point \x0a\x09\x09x: (sx*px +(shx*py) + x)\x0a\x09\x09y: (shy*px + (sy*py) + y)",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x", "y", "x:y:", "+", "*"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "transformX:Y:",
protocol: 'vector-transform',
fn: function (px,py){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$5,$3,$2,$8,$7,$6,$1;
$4=$recv(self["@sx"]).__star(px);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$5=$recv(self["@shx"]).__star(py);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__plus($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__plus(self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$8=$recv(self["@shy"]).__star(px);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__plus($recv(self["@sy"]).__star(py));
$6=$recv($7).__plus(self["@y"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$1=$recv($Point())._x_y_($2,$6);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformX:Y:",{px:px,py:py},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["px", "py"],
source: "transformX: px Y: py\x0a\x09\x22 transform x and y coordinates by receiver. Answer a Point\x22\x0a\x09^ Point \x0a\x09\x09x: (sx*px +(shx*py) + x)\x0a\x09\x09y: (shy*px + (sy*py) + y)",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x:y:", "+", "*"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "translateBy:",
protocol: 'transformations',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var px = aPoint._x();
	var py = aPoint._y();
	self['@x'] += self['@sx']*px + self['@shx']*py;
	self['@y'] += self['@shy']*px + self['@sy']*py; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09< var px = aPoint._x();\x0a\x09var py = aPoint._y();\x0a\x09self['@x'] += self['@sx']*px + self['@shx']*py;\x0a\x09self['@y'] += self['@shy']*px + self['@sy']*py; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "translateByX:Y:",
protocol: 'transformations',
fn: function (px,py){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@x'] += self['@sx']*px + self['@shx']*py;
	self['@y'] += self['@shy']*px + self['@sy']*py; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{px:px,py:py},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["px", "py"],
source: "translateByX: px Y: py\x0a\x09< self['@x'] += self['@sx']*px + self['@shx']*py;\x0a\x09self['@y'] += self['@shy']*px + self['@sy']*py; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "translateX:Y:",
protocol: 'transformations',
fn: function (px,py){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._translateByX_Y_(px,py);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["px", "py"],
source: "translateX: px Y: py\x0a\x09self translateByX: px Y: py.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["translateByX:Y:"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "translation",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@x"]).__at(self["@y"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translation",{},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "translation\x0a\x09^ x@y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "translation:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@x"]=$recv(aPoint)._x();
self["@y"]=$recv(aPoint)._y();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translation:",{aPoint:aPoint},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "translation: aPoint\x0a\x09x := aPoint x.\x0a\x09y := aPoint y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x", "y"]
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "transposed",
protocol: 'transformations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var s = self['@shx'];
	self['@shx'] = self['@shy'];
	self['@shy'] = s; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transposed",{},$globals.AthensAffineTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transposed\x0a\x09< var s = self['@shx'];\x0a\x09self['@shx'] = self['@shy'];\x0a\x09self['@shy'] = s; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "x",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@x"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "x:",
protocol: 'accessing',
fn: function (number){
var self=this;
self["@x"]=number;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["number"],
source: "x: number\x0a\x09x := number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "y",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@y"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x09^ y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);

$core.addMethod(
$core.method({
selector: "y:",
protocol: 'accessing',
fn: function (number){
var self=this;
self["@y"]=number;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["number"],
source: "y: number\x0a\x09y := number",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAffineTransform);



$core.addClass('AthensGenericTransform', $globals.AthensAffineTransform, ['w0', 'w1', 'w2'], 'Athens-Core-Matrices');
$core.addMethod(
$core.method({
selector: "loadIdentity",
protocol: 'transformations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AthensGenericTransform.superclass.fn.prototype._loadIdentity.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@w1"]=(0);
self["@w0"]=self["@w1"];
self["@w2"]=(1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},$globals.AthensGenericTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadIdentity\x0a\x09\x22initialize with identity transform\x22\x0a\x09super loadIdentity.\x0a\x09w0 := w1 := 0.0.\x0a\x09w2 := 1.0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadIdentity"]
}),
$globals.AthensGenericTransform);


});
