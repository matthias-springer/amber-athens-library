define("amber-athens/Athens-Core-Paths", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-Core-Paths');
$core.packages["Athens-Core-Paths"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-Core-Paths"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('AthensPathBuilder', $globals.Object, [], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "absolute",
protocol: 'path commands',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"absolute",{},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "absolute\x0a\x09\x22next commands will use absolute coordinates for all segment points\x22\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "ccwArcTo:angle:",
protocol: 'path commands',
fn: function (endPt,rot){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{endPt:endPt,rot:rot},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["endPt", "rot"],
source: "ccwArcTo: endPt angle: rot\x0a\x09\x22 Add a counter-clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x22\x0a\x09\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'path commands',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09\x22close the current path controur\x22\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "createPath:",
protocol: 'creating path',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "createPath:\x09aBlock\x0a\x0a\x09\x09\x22aBlock value: self ....\x22\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "curveVia:and:to:",
protocol: 'path commands',
fn: function (cp1,cp2,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{cp1:cp1,cp2:cp2,aPoint:aPoint},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cp1", "cp2", "aPoint"],
source: "curveVia: cp1 and: cp2 to: aPoint\x0a\x09\x22Add a cubic bezier curve,\x0a\x09starting from current path endpoint, using control points cp1, cp2\x0a\x09and ending at aPoint \x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "curveVia:to:",
protocol: 'path commands',
fn: function (cp1,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{cp1:cp1,aPoint:aPoint},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cp1", "aPoint"],
source: "curveVia: cp1 to: aPoint\x0a\x0a\x09\x22Add a quadric bezier curve,\x0a\x09starting from current path endpoint, using control point cp1, \x0a\x09and ending at aPoint \x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "cwArcTo:angle:",
protocol: 'path commands',
fn: function (endPt,rot){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{endPt:endPt,rot:rot},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["endPt", "rot"],
source: "cwArcTo: endPt angle: rot\x0a\x09\x22 Add a clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x22\x0a\x09\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "fromRectangles:",
protocol: 'creating path',
fn: function (rects){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._createPath_(function(builder) {
		builder._absolute();
		
		for (var i = 0; i < rects.length; i++) {
			var rect = rects[i];
			builder._moveTo_(rect['@origin']['@x'].__at(rect['@origin']['@y']));
			builder._lineTo_(rect['@corner']['@x'].__at(rect['@origin']['@y']));
			builder._lineTo_(rect['@corner']['@x'].__at(rect['@corner']['@y']));
			builder._lineTo_(rect['@origin']['@x'].__at(rect['@corner']['@y']));
			builder._close();
		}
	}); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromRectangles:",{rects:rects},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rects"],
source: "fromRectangles: rects\x0a\x09< return self._createPath_(function(builder) {\x0a\x09\x09builder._absolute();\x0a\x09\x09\x0a\x09\x09for (var i = 0; i < rects.length; i++) {\x0a\x09\x09\x09var rect = rects[i];\x0a\x09\x09\x09builder._moveTo_(rect['@origin']['@x'].__at(rect['@origin']['@y']));\x0a\x09\x09\x09builder._lineTo_(rect['@corner']['@x'].__at(rect['@origin']['@y']));\x0a\x09\x09\x09builder._lineTo_(rect['@corner']['@x'].__at(rect['@corner']['@y']));\x0a\x09\x09\x09builder._lineTo_(rect['@origin']['@x'].__at(rect['@corner']['@y']));\x0a\x09\x09\x09builder._close();\x0a\x09\x09}\x0a\x09}); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "lineTo:",
protocol: 'path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09\x22add a line segment, starting from current path endpoint to aPoint\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "moveTo:",
protocol: 'path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09\x22 move command always starts a new contour \x22\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);

$core.addMethod(
$core.method({
selector: "relative",
protocol: 'path commands',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"relative",{},$globals.AthensPathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "relative\x0a\x0a\x09\x22next commands will use relative coordinates for all segment points\x22\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathBuilder);


$globals.AthensPathBuilder.klass.iVarNames = ['zeroPoint'];
$core.addMethod(
$core.method({
selector: "createPath:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._createPath_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},$globals.AthensPathBuilder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "createPath: aBlock\x0a\x0a\x09^ self new createPath: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createPath:", "new"]
}),
$globals.AthensPathBuilder.klass);

$core.addMethod(
$core.method({
selector: "fromRectangles:",
protocol: 'instance creation',
fn: function (rects){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._fromRectangles_(rects);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromRectangles:",{rects:rects},$globals.AthensPathBuilder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rects"],
source: "fromRectangles: rects\x0a\x0a\x09^ self new fromRectangles: rects",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromRectangles:", "new"]
}),
$globals.AthensPathBuilder.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@zeroPoint"]=(0).__at((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensPathBuilder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09zeroPoint := 0@0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.AthensPathBuilder.klass);

$core.addMethod(
$core.method({
selector: "zeroPoint",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(0).__at((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zeroPoint",{},$globals.AthensPathBuilder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zeroPoint\x0a\x09^ 0@0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.AthensPathBuilder.klass);


$core.addClass('AthensSimplePathBuilder', $globals.AthensPathBuilder, ['absolute', 'open', 'contourStartPt', 'xMin', 'yMin', 'xMax', 'yMax', 'pathStart', 'lastSegment'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "absolute",
protocol: 'path commands',
fn: function (){
var self=this;
self["@absolute"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "absolute\x0a\x09absolute := true.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "addSegment:",
protocol: 'private',
fn: function (aSegment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@lastSegment"])._next_(aSegment);
self["@lastSegment"]=aSegment;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSegment:",{aSegment:aSegment},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSegment"],
source: "addSegment: aSegment\x0a\x09lastSegment next: aSegment.\x0a\x09lastSegment := aSegment.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["next:"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "ccwArcTo:angle:",
protocol: 'path commands',
fn: function (endPt,rot){
var self=this;
function $AthensCCWArcSegment(){return $globals.AthensCCWArcSegment||(typeof AthensCCWArcSegment=="undefined"?nil:AthensCCWArcSegment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._addSegment_($recv($recv($AthensCCWArcSegment())._new())._endPoint_angle_(self._toAbsolute_(endPt),rot));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{endPt:endPt,rot:rot},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["endPt", "rot"],
source: "ccwArcTo: endPt angle: rot\x0a\x09\x22 angle should be specified in radians \x22\x0a\x09^ self addSegment: (AthensCCWArcSegment new endPoint: (self toAbsolute: endPt) angle: rot).",
referencedClasses: ["AthensCCWArcSegment"],
//>>excludeEnd("ide");
messageSends: ["addSegment:", "endPoint:angle:", "new", "toAbsolute:"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'path commands',
fn: function (){
var self=this;
function $AthensCloseSegment(){return $globals.AthensCloseSegment||(typeof AthensCloseSegment=="undefined"?nil:AthensCloseSegment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._addSegment_($recv($recv($AthensCloseSegment())._new())._point_(self["@contourStartPt"]));
self["@contourStartPt"]=nil;
self["@open"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09\x22close the current contour\x22\x0a\x09self addSegment: (AthensCloseSegment new point: contourStartPt).\x0a\x0a\x09contourStartPt := nil.\x0a\x09open := false",
referencedClasses: ["AthensCloseSegment"],
//>>excludeEnd("ide");
messageSends: ["addSegment:", "point:", "new"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "createPath:",
protocol: 'creating path',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aBlock)._value_(self);
$1=self["@pathStart"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "createPath:\x09aBlock\x0a\x09aBlock value: self.\x0a\x09^ pathStart",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "curveVia:and:to:",
protocol: 'path commands',
fn: function (cp1,cp2,aPoint){
var self=this;
var pt1,pt2,pt3;
function $AthensCubicSegment(){return $globals.AthensCubicSegment||(typeof AthensCubicSegment=="undefined"?nil:AthensCubicSegment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
pt1=self._toAbsolute_(cp1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toAbsolute:"]=1;
//>>excludeEnd("ctx");
pt2=self._toAbsolute_(cp2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toAbsolute:"]=2;
//>>excludeEnd("ctx");
pt3=self._toAbsolute_(aPoint);
$1=self._addSegment_($recv($recv($AthensCubicSegment())._new())._from_via_and_to_($recv(self["@lastSegment"])._endPoint(),pt1,pt2,pt3));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{cp1:cp1,cp2:cp2,aPoint:aPoint,pt1:pt1,pt2:pt2,pt3:pt3},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cp1", "cp2", "aPoint"],
source: "curveVia: cp1 and: cp2 to: aPoint\x0a\x09\x22Cubic bezier curve\x22\x0a\x09\x0a\x09| pt1 pt2 pt3 |\x0a\x09\x22Quad bezier curve\x22\x0a\x0a\x09pt1 := self toAbsolute: cp1.\x0a\x09pt2 := self toAbsolute: cp2.\x0a\x09pt3 := self toAbsolute: aPoint.\x0a\x09^ self addSegment: (\x0a\x09\x09AthensCubicSegment new \x0a\x09\x09\x09from: lastSegment endPoint \x0a\x09\x09\x09via: pt1\x0a\x09\x09\x09and: pt2\x0a\x09\x09\x09to: pt3)",
referencedClasses: ["AthensCubicSegment"],
//>>excludeEnd("ide");
messageSends: ["toAbsolute:", "addSegment:", "from:via:and:to:", "new", "endPoint"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "curveVia:to:",
protocol: 'path commands',
fn: function (cp1,aPoint){
var self=this;
var pt1,pt2;
function $AthensQuadSegment(){return $globals.AthensQuadSegment||(typeof AthensQuadSegment=="undefined"?nil:AthensQuadSegment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
pt1=self._toAbsolute_(cp1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toAbsolute:"]=1;
//>>excludeEnd("ctx");
pt2=self._toAbsolute_(aPoint);
$1=self._addSegment_($recv($recv($AthensQuadSegment())._new())._from_via_to_($recv(self["@lastSegment"])._endPoint(),pt1,pt2));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{cp1:cp1,aPoint:aPoint,pt1:pt1,pt2:pt2},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cp1", "aPoint"],
source: "curveVia: cp1 to: aPoint\x0a\x09| pt1 pt2 |\x0a\x09\x22Quad bezier curve\x22\x0a\x0a\x09pt1 := self toAbsolute: cp1.\x0a\x09pt2 := self toAbsolute: aPoint.\x0a\x09^ self addSegment: (\x0a\x09\x09AthensQuadSegment new \x0a\x09\x09\x09from: lastSegment endPoint \x0a\x09\x09\x09via: pt1 \x0a\x09\x09\x09to: pt2)",
referencedClasses: ["AthensQuadSegment"],
//>>excludeEnd("ide");
messageSends: ["toAbsolute:", "addSegment:", "from:via:to:", "new", "endPoint"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "cwArcTo:angle:",
protocol: 'path commands',
fn: function (endPt,rot){
var self=this;
function $AthensCWArcSegment(){return $globals.AthensCWArcSegment||(typeof AthensCWArcSegment=="undefined"?nil:AthensCWArcSegment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._addSegment_($recv($recv($AthensCWArcSegment())._new())._endPoint_angle_(self._toAbsolute_(endPt),rot));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{endPt:endPt,rot:rot},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["endPt", "rot"],
source: "cwArcTo: endPt angle: rot\x0a\x09\x22 angle should be specified in radians \x22\x0a\x09^ self addSegment: (AthensCWArcSegment new endPoint: (self toAbsolute: endPt) angle: rot).",
referencedClasses: ["AthensCWArcSegment"],
//>>excludeEnd("ide");
messageSends: ["addSegment:", "endPoint:angle:", "new", "toAbsolute:"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $AthensMoveSegment(){return $globals.AthensMoveSegment||(typeof AthensMoveSegment=="undefined"?nil:AthensMoveSegment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@absolute"]=false;
$1=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
self["@contourStartPt"]=$recv($1)._zeroPoint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["zeroPoint"]=1;
//>>excludeEnd("ctx");
self["@lastSegment"]=$recv($recv($AthensMoveSegment())._new())._point_($recv(self._class())._zeroPoint());
self["@pathStart"]=self["@lastSegment"];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22A new path always starts from implicit (moveTo:0@0) segment.\x0a\x09If next segment is moveTo: , the point of already existing move segment will be changed,\x0a\x09avoiding creating extra move segments.\x0a\x09\x0a\x09\x22\x0a\x09absolute := false.\x0a\x09contourStartPt := self class zeroPoint.\x0a\x09pathStart := lastSegment := (AthensMoveSegment new  point: self class zeroPoint).",
referencedClasses: ["AthensMoveSegment"],
//>>excludeEnd("ide");
messageSends: ["zeroPoint", "class", "point:", "new"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "lineTo:",
protocol: 'path commands',
fn: function (aPoint){
var self=this;
function $AthensLineSegment(){return $globals.AthensLineSegment||(typeof AthensLineSegment=="undefined"?nil:AthensLineSegment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._addSegment_($recv($recv($AthensLineSegment())._new())._point_(self._toAbsolute_(aPoint)));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x0a\x09^ self addSegment: (AthensLineSegment new point: (self toAbsolute: aPoint)).",
referencedClasses: ["AthensLineSegment"],
//>>excludeEnd("ide");
messageSends: ["addSegment:", "point:", "new", "toAbsolute:"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "moveTo:",
protocol: 'path commands',
fn: function (aPoint){
var self=this;
function $AthensMoveSegment(){return $globals.AthensMoveSegment||(typeof AthensMoveSegment=="undefined"?nil:AthensMoveSegment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
self["@contourStartPt"]=self._toAbsolute_(aPoint);
$1=$recv(self["@lastSegment"])._isMove();
if($core.assert($1)){
$recv(self["@lastSegment"])._point_(self["@contourStartPt"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["point:"]=1;
//>>excludeEnd("ctx");
return self;
};
$2=$recv($AthensMoveSegment())._new();
$recv($2)._point_(self["@contourStartPt"]);
$3=$recv($2)._reopen_(self["@open"]);
self._addSegment_($3);
self["@open"]=true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09\x22 move command always starts a new contour \x22\x0a\x09contourStartPt := self toAbsolute: aPoint.\x0a\x09\x0a\x09\x22collapse multiple moves to a single one\x22\x0a\x09lastSegment isMove ifTrue: [\x0a\x09\x09lastSegment point: contourStartPt.\x0a\x09\x09^ self\x0a\x09].\x0a\x0a\x09self addSegment: (AthensMoveSegment new point: contourStartPt; reopen: open).\x0a\x09open := true.",
referencedClasses: ["AthensMoveSegment"],
//>>excludeEnd("ide");
messageSends: ["toAbsolute:", "ifTrue:", "isMove", "point:", "addSegment:", "new", "reopen:"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "pathBounds",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@xMin"]).__at(self["@yMin"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._corner_($recv(self["@xMax"]).__at(self["@yMax"]));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pathBounds",{},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pathBounds\x0a\x09^ xMin@yMin corner: xMax@yMax",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["corner:", "@"]
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "pathStart",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@pathStart"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pathStart\x0a\x09^ pathStart",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "relative",
protocol: 'path commands',
fn: function (){
var self=this;
self["@absolute"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "relative\x0a\x09absolute := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensSimplePathBuilder);

$core.addMethod(
$core.method({
selector: "toAbsolute:",
protocol: 'private',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var pt = self['@absolute'] ? aPoint : self['@lastSegment']._endPoint().__plus(aPoint);
	var ptX = pt._x();
	var ptY = pt._y();
	
	if (self['@xMin'] === undefined) {
		self['@xMin'] = self['@xMax'] = ptX;
		self['@yMin'] = self['@yMax'] = ptY;
	}
	else {
		self['@xMin'] = Math.min(self['@xMin'], ptX);
		self['@xMax'] = Math.min(self['@xMax'], ptX);
		self['@yMin'] = Math.min(self['@yMin'], ptY);
		self['@yMax'] = Math.min(self['@yMax'], ptY);
	}
	
	return pt; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toAbsolute:",{aPoint:aPoint},$globals.AthensSimplePathBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "toAbsolute: aPoint\x0a\x09< var pt = self['@absolute'] ? aPoint : self['@lastSegment']._endPoint().__plus(aPoint);\x0a\x09var ptX = pt._x();\x0a\x09var ptY = pt._y();\x0a\x09\x0a\x09if (self['@xMin'] === undefined) {\x0a\x09\x09self['@xMin'] = self['@xMax'] = ptX;\x0a\x09\x09self['@yMin'] = self['@yMax'] = ptY;\x0a\x09}\x0a\x09else {\x0a\x09\x09self['@xMin'] = Math.min(self['@xMin'], ptX);\x0a\x09\x09self['@xMax'] = Math.min(self['@xMax'], ptX);\x0a\x09\x09self['@yMin'] = Math.min(self['@yMin'], ptY);\x0a\x09\x09self['@yMax'] = Math.min(self['@yMax'], ptY);\x0a\x09}\x0a\x09\x0a\x09return pt; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensSimplePathBuilder);



$core.addClass('AthensPathConverter', $globals.Object, ['sourcePath', 'dest', 'endPoint'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "close:",
protocol: 'converting path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@dest"])._close_(aPoint);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close:",{aPoint:aPoint},$globals.AthensPathConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "close: aPoint \x0a\x09^ dest close: aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["close:"]
}),
$globals.AthensPathConverter);

$core.addMethod(
$core.method({
selector: "convert:",
protocol: 'actions',
fn: function (aSourcePath){
var self=this;
var segment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
segment=aSourcePath;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(segment)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(segment)._convertWith_(self);
self["@endPoint"]=$recv(segment)._endPoint();
self["@endPoint"];
segment=$recv(segment)._next();
return segment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=$recv(self["@dest"])._finish();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"convert:",{aSourcePath:aSourcePath,segment:segment},$globals.AthensPathConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSourcePath"],
source: "convert: aSourcePath\x0a\x09\x0a\x09\x22 iterate over segments and do conversion \x22\x0a\x09\x0a\x09| segment |\x0a\x09\x0a\x09segment := aSourcePath.\x0a\x09\x0a\x09[ segment notNil ] whileTrue: [\x0a\x09\x09segment convertWith: self.\x0a\x09\x09endPoint := segment endPoint.\x0a\x09\x09segment := segment next.\x0a\x09].\x0a\x0a\x09^ dest finish",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "notNil", "convertWith:", "endPoint", "next", "finish"]
}),
$globals.AthensPathConverter);

$core.addMethod(
$core.method({
selector: "curveVia:to:",
protocol: 'converting path commands',
fn: function (pt1,pt2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@dest"])._curveVia_to_(pt1,pt2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,pt2:pt2},$globals.AthensPathConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "pt2"],
source: "curveVia: pt1 to: pt2\x0a\x0a\x09^ dest curveVia: pt1 to: pt2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curveVia:to:"]
}),
$globals.AthensPathConverter);

$core.addMethod(
$core.method({
selector: "dest:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@dest"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "dest: anObject\x0a\x09dest := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPathConverter);

$core.addMethod(
$core.method({
selector: "finish",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@dest"])._finish();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"finish",{},$globals.AthensPathConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "finish\x0a\x09^ dest finish",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["finish"]
}),
$globals.AthensPathConverter);

$core.addMethod(
$core.method({
selector: "lineTo:",
protocol: 'converting path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@dest"])._lineTo_(aPoint);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},$globals.AthensPathConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "lineTo: aPoint \x0a\x09^ dest lineTo: aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lineTo:"]
}),
$globals.AthensPathConverter);

$core.addMethod(
$core.method({
selector: "moveTo:",
protocol: 'converting path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@dest"])._moveTo_(aPoint);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},$globals.AthensPathConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "moveTo: aPoint \x0a\x09^ dest moveTo: aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveTo:"]
}),
$globals.AthensPathConverter);

$core.addMethod(
$core.method({
selector: "source:dest:",
protocol: 'accessing',
fn: function (aSource,aDest){
var self=this;
self["@sourcePath"]=aSource;
self["@dest"]=aDest;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSource", "aDest"],
source: "source: aSource dest: aDest\x0a\x0a\x09sourcePath := aSource.\x0a\x09dest := aDest",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPathConverter);


$core.addMethod(
$core.method({
selector: "dest:",
protocol: 'instance creation',
fn: function (aDest){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._dest_(aDest);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dest:",{aDest:aDest},$globals.AthensPathConverter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDest"],
source: "dest: aDest\x0a\x0a\x09^ self new dest: aDest",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dest:", "new"]
}),
$globals.AthensPathConverter.klass);

$core.addMethod(
$core.method({
selector: "source:dest:",
protocol: 'instance creation',
fn: function (aSource,aDest){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._source_dest_(aSource,aDest);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source:dest:",{aSource:aSource,aDest:aDest},$globals.AthensPathConverter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSource", "aDest"],
source: "source: aSource dest: aDest\x0a\x09\x22 answer a converted path from source to dest, using my instance as a converter\x22\x0a\x09\x0a\x09^ self new source: aSource dest: aDest",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["source:dest:", "new"]
}),
$globals.AthensPathConverter.klass);


$core.addClass('AthensBezierConverter', $globals.AthensPathConverter, ['distanceTolerance', 'angleTolerance'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "angleBetween:and:ifDegenerate:",
protocol: 'helpers',
fn: function (p1,p2,aBlock){
var self=this;
var x1,y1,x2,y2,dot2,n2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$7,$6,$8,$9,$10;
x1=$recv(p1)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
y1=$recv(p1)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
x2=$recv(p2)._x();
y2=$recv(p2)._y();
$1=$recv(x1).__star(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv(y1).__star(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
dot2=$recv($1).__plus($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
dot2=$recv(dot2).__star(dot2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$4=$recv(x1).__star(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
$5=$recv(y1).__star(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$3=$recv($4).__plus($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$7=$recv(x2).__star(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
$6=$recv($7).__plus($recv(y2).__star(y2));
n2=$recv($3).__star($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$8=$recv(n2).__eq((0));
if($core.assert($8)){
$9=$recv(aBlock)._value();
return $9;
};
$10=$recv($recv(dot2).__slash(n2))._arcCos();
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"angleBetween:and:ifDegenerate:",{p1:p1,p2:p2,aBlock:aBlock,x1:x1,y1:y1,x2:x2,y2:y2,dot2:dot2,n2:n2},$globals.AthensBezierConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["p1", "p2", "aBlock"],
source: "angleBetween: p1 and: p2 ifDegenerate: aBlock\x0a\x0a\x22 Calculate an angle (in radians) between two vectors. \x0aEvaluate a block, in case if calculation not possible because one of the vectors has zero length \x22\x0a\x0a\x09| x1 y1 x2 y2 dot2 n2 |\x0a\x09x1 := p1 x.\x0a\x09y1 := p1 y.\x0a\x09x2 := p2 x.\x0a\x09y2 := p2 y.\x0a\x09\x0a\x09dot2 := x1 * x2 + (y1 * y2).\x0a\x09dot2 := dot2 * dot2.\x0a\x09\x0a\x09n2 := (x1*x1 + (y1*y1)) * (x2*x2 + (y2*y2)).\x0a\x09\x0a\x09n2 = 0 ifTrue: [ ^ aBlock value ].\x0a\x09\x0a\x09^ (dot2 / n2) arcCos",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x", "y", "+", "*", "ifTrue:", "=", "value", "arcCos", "/"]
}),
$globals.AthensBezierConverter);

$core.addMethod(
$core.method({
selector: "curveVia:to:",
protocol: 'converting path commands',
fn: function (pt1,pt2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(self["@endPoint"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv(self["@endPoint"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv(pt1)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$4=$recv(pt1)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
self._recursiveBezier2X1_y1_x2_y2_x3_y3_($1,$2,$3,$4,$recv(pt2)._x(),$recv(pt2)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,pt2:pt2},$globals.AthensBezierConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "pt2"],
source: "curveVia: pt1 to: pt2\x0a\x0a\x0a\x09self\x09 recursiveBezier2X1: endPoint x y1: endPoint y\x0a\x09\x09x2: pt1 x y2: pt1 y\x0a\x09\x09x3: pt2 x y3: pt2 y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["recursiveBezier2X1:y1:x2:y2:x3:y3:", "x", "y"]
}),
$globals.AthensBezierConverter);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
self["@distanceTolerance"]=(0.5);
self["@angleTolerance"]=(0.1);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09distanceTolerance := 0.5.\x0a\x09angleTolerance := 0.1 .",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensBezierConverter);

$core.addMethod(
$core.method({
selector: "isFlatBezier2X1:y1:x2:y2:x3:y3:",
protocol: 'testing',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
var dx,dy,d,da,angle;
function $CollinearityEps(){return $globals.CollinearityEps||(typeof CollinearityEps=="undefined"?nil:CollinearityEps)}
function $CurveAngleTolerance(){return $globals.CurveAngleTolerance||(typeof CurveAngleTolerance=="undefined"?nil:CurveAngleTolerance)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$1,$6,$8,$10,$12,$13,$11,$9,$7,$14,$16,$17,$15,$19,$20,$18,$21,$22,$23,$24,$26,$25,$28,$27,$30,$33,$32,$35,$34,$31,$29,$36,$37,$39,$38,$41,$40,$42,$44,$43,$46,$45,$49,$50,$48,$47,$52,$51,$53;
dx=$recv(x3).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
dy=$recv(y3).__minus(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$3=$recv(x2).__minus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$5=$recv(y2).__minus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=5;
//>>excludeEnd("ctx");
$4=$recv($5).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__minus($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
d=$recv($1)._abs();
$6=$recv(d).__gt($CollinearityEps());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($6)){
$8=$recv(d).__star(d);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$10=self["@distanceTolerance"];
$12=$recv(dx).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
$13=$recv(dy).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$11=$recv($12).__plus($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__star($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__lt_eq($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
if($core.assert($7)){
$14=$recv(self["@angleTolerance"]).__lt($CurveAngleTolerance());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
if($core.assert($14)){
return true;
};
$16=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=6;
//>>excludeEnd("ctx");
$17=$recv(y2).__minus(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=7;
//>>excludeEnd("ctx");
$15=$recv($16).__at($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$19=$recv(x3).__minus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=8;
//>>excludeEnd("ctx");
$20=$recv(y3).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=9;
//>>excludeEnd("ctx");
$18=$recv($19).__at($20);
angle=self._angleBetween_and_ifDegenerate_($15,$18,(function(){
return (0);

}));
angle;
$21=$recv(angle).__lt_eq(self["@angleTolerance"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=2;
//>>excludeEnd("ctx");
if($core.assert($21)){
return true;
};
};
} else {
$22=$recv(dx).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
$23=$recv(dy).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=8;
//>>excludeEnd("ctx");
da=$recv($22).__plus($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
da;
$24=$recv(da).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($24)){
$26=$recv(x1).__minus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=10;
//>>excludeEnd("ctx");
$25=$recv($26)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=1;
//>>excludeEnd("ctx");
$28=$recv(y1).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=11;
//>>excludeEnd("ctx");
$27=$recv($28)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=2;
//>>excludeEnd("ctx");
d=$recv($25).__plus($27);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
d;
} else {
$30=d;
$33=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=12;
//>>excludeEnd("ctx");
$32=$recv($33).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=9;
//>>excludeEnd("ctx");
$35=$recv(y2).__minus(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=13;
//>>excludeEnd("ctx");
$34=$recv($35).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=10;
//>>excludeEnd("ctx");
$31=$recv($32).__plus($34);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
$29=$recv($30).__eq($31);
$recv($29).__slash(da);
$36=$recv($recv(d).__gt((0)))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(d).__lt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}));
if($core.assert($36)){
return true;
};
$37=$recv(d).__lt_eq((0));
if($core.assert($37)){
$39=$recv(x1).__minus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=14;
//>>excludeEnd("ctx");
$38=$recv($39)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=3;
//>>excludeEnd("ctx");
$41=$recv(y1).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=15;
//>>excludeEnd("ctx");
$40=$recv($41)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=4;
//>>excludeEnd("ctx");
d=$recv($38).__plus($40);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=5;
//>>excludeEnd("ctx");
d;
} else {
$42=$recv(d).__gt_eq((1));
if($core.assert($42)){
$44=$recv(x2).__minus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=16;
//>>excludeEnd("ctx");
$43=$recv($44)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=5;
//>>excludeEnd("ctx");
$46=$recv(y2).__minus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=17;
//>>excludeEnd("ctx");
$45=$recv($46)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=6;
//>>excludeEnd("ctx");
d=$recv($43).__plus($45);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=6;
//>>excludeEnd("ctx");
d;
} else {
$49=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=19;
//>>excludeEnd("ctx");
$50=$recv(d).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=11;
//>>excludeEnd("ctx");
$48=$recv($49).__minus($50);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=18;
//>>excludeEnd("ctx");
$47=$recv($48)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=7;
//>>excludeEnd("ctx");
$52=$recv($recv(y2).__minus(y1)).__minus($recv(d).__star(dy));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=20;
//>>excludeEnd("ctx");
$51=$recv($52)._squared();
d=$recv($47).__plus($51);
d;
};
};
};
$53=$recv(d).__lt(self._distanceToleranceSquared());
if($core.assert($53)){
return true;
};
};
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFlatBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,dx:dx,dy:dy,d:d,da:da,angle:angle},$globals.AthensBezierConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "isFlatBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09| dx dy d da angle |\x0a\x09\x0a\x09dx := x3-x1.\x0a\x09dy := y3-y1.\x0a\x09\x0a \x09d := (((x2 - x3) * dy) - ((y2 - y3) * dx)) abs.\x0a\x0a\x09d > CollinearityEps ifTrue: [\x0a\x09\x09\x0a\x09\x09\x22regular case\x22\x0a\x0a\x09\x09d*d <= (distanceTolerance * ( dx*dx + (dy*dy))) ifTrue: [\x0a\x09\x09\x09\x0a\x09\x09\x09angleTolerance < CurveAngleTolerance ifTrue: [ ^ true ].\x0a\x09\x09\x09\x0a\x09\x09\x09angle := self angleBetween: x2-x1 @ (y2-y1) and: x3-x2 @ (y3-y2)\x0a\x09\x09\x09\x09ifDegenerate: [ 0.0 ].\x0a\x09\x09\x09\x0a\x09\x09\x09\x22parallel. no need to proceed further\x22\x0a\x09\x09\x09angle <= angleTolerance ifTrue: [ ^ true ]\x09\x09\x09\x09\x09\x0a\x09\x09]\x0a\x09]\x0a\x09ifFalse: [ \x0a\x09\x09\x22collinear\x22\x0a\x09\x09da := dx*dx + (dy*dy).\x0a\x09\x09\x0a\x09\x09da = 0 \x0a\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09d = ((x2 - x1)*dx + ((y2 - y1)*dy)) / da.\x0a\x0a\x09\x09\x09\x09(d > 0.0 and: [ d < 1.0 ] ) ifTrue: [ \x0a\x09\x09\x09\x09\x09\x22Simple collinear case, 1---2---3\x22 \x0a\x09\x09\x09\x09\x09^ true\x0a     \x09\x09\x09\x09].\x0a\x09\x09\x09\x09d <= 0.0 \x0a\x09\x09\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09d >= 1.0 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ d:= (x2-x3) squared + (y2-y3) squared ]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ d:= (x2 - x1 - (d*dx)) squared + (y2 - y1 - (d*dy)) squared ]\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x0a\x09\x09\x09d < self distanceToleranceSquared ifTrue: [ ^ true ]\x09\x09\x0a\x09].\x0a\x0a\x09^ false",
referencedClasses: ["CollinearityEps", "CurveAngleTolerance"],
//>>excludeEnd("ide");
messageSends: ["-", "abs", "*", "ifTrue:ifFalse:", ">", "ifTrue:", "<=", "+", "<", "angleBetween:and:ifDegenerate:", "@", "=", "squared", "/", "and:", ">=", "distanceToleranceSquared"]
}),
$globals.AthensBezierConverter);

$core.addMethod(
$core.method({
selector: "recursiveBezier2X1:y1:x2:y2:x3:y3:",
protocol: 'helpers',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
$1=self._isFlatBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x2,y2,x3,y3);
if($core.assert($1)){
$2=self["@dest"];
$3=$2;
$4=$recv(x2).__at(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$recv($3)._lineTo_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:"]=1;
//>>excludeEnd("ctx");
$5=$recv($2)._lineTo_($recv(x3).__at(y3));
$5;
} else {
var x12,y12,x23,y23,x123,y123;
$6=$recv(x1).__plus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
x12=$recv($6).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
x12;
$7=$recv(y1).__plus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
y12=$recv($7).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
y12;
$8=$recv(x2).__plus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
x23=$recv($8).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
x23;
$9=$recv(y2).__plus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
y23=$recv($9).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
y23;
$10=$recv(x12).__plus(x23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=5;
//>>excludeEnd("ctx");
x123=$recv($10).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
x123;
y123=$recv($recv(y12).__plus(y23)).__star((0.5));
y123;
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x12,y12,x123,y123);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["recursiveBezier2X1:y1:x2:y2:x3:y3:"]=1;
//>>excludeEnd("ctx");
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x123,y123,x23,y23,x3,y3);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recursiveBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},$globals.AthensBezierConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "recursiveBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09\x22recursively subdive bezier curve as long as #isFlatBezier2.. answers false \x22\x0a\x0a\x09(self isFlatBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3) ifTrue: [\x0a\x09\x09\x0a\x09\x09dest \x0a\x09\x09\x09lineTo: x2 @ y2;\x0a\x09\x09\x09lineTo: x3 @ y3\x0a\x09] ifFalse: [\x0a\x09\x09| x12 y12 x23 y23 x123 y123 |\x09\x0a\x09\x22calculate midpoints of line segments \x22\x0a\x09\x09x12 := (x1 + x2) * 0.5.\x0a\x09\x09y12 := (y1 + y2) * 0.5 .\x0a\x0a\x09\x09x23 := (x2 + x3) * 0.5 .\x0a\x09\x09y23 := (y2 + y3) * 0.5 .\x0a\x0a\x09\x09x123 := (x12 + x23) * 0.5.\x0a\x09\x09y123 := (y12 + y23) * 0.5.\x0a\x09\x09\x0a\x09\x09self recursiveBezier2X1: x1 y1: y1 \x0a\x09\x09\x09x2: x12 \x0a\x09\x09\x09y2: y12 \x0a\x09\x09\x09x3: x123 \x0a\x09\x09\x09y3: y123.\x0a\x09\x09\x09\x0a\x09\x09self recursiveBezier2X1: x123 \x0a\x09\x09\x09y1: y123\x0a\x09\x09\x09x2: x23\x0a\x09\x09\x09y2: y23 \x0a\x09\x09\x09x3: x3 \x0a\x09\x09\x09y3: y3.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isFlatBezier2X1:y1:x2:y2:x3:y3:", "lineTo:", "@", "*", "+", "recursiveBezier2X1:y1:x2:y2:x3:y3:"]
}),
$globals.AthensBezierConverter);


$globals.AthensBezierConverter.klass.iVarNames = ['collinearityEps','curveAngleTolerance','distanceEps'];
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@curveAngleTolerance'] = 0.01;
	self['@collinearityEps'] = 1e-30;
	self['@distanceEps'] = 1e-30; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensBezierConverter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09\x22collinearityEps := 1e-30.\x22\x0a\x09\x22distanceEps := 1e-30.\x22\x0a\x09\x22curveAngleTolerance := 0.01.\x22\x0a\x09\x0a\x09< self['@curveAngleTolerance'] = 0.01;\x0a\x09self['@collinearityEps'] = 1e-30;\x0a\x09self['@distanceEps'] = 1e-30; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensBezierConverter.klass);


$core.addClass('AthensPathSegment', $globals.Object, ['next'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensPathSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathSegment);

$core.addMethod(
$core.method({
selector: "convertWith:",
protocol: 'visitor',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"convertWith:",{anObject:anObject},$globals.AthensPathSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "convertWith: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPathSegment);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'iterating',
fn: function (aBlock){
var self=this;
var segment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
segment=self;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(segment);
segment=$recv(segment)._next();
segment;
return $recv(segment)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock,segment:segment},$globals.AthensPathSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09|segment|\x0a\x09segment := self.\x0a\x09[aBlock value: segment. segment := segment next. segment notNil] whileTrue.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue", "value:", "next", "notNil"]
}),
$globals.AthensPathSegment);

$core.addMethod(
$core.method({
selector: "isMove",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMove\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPathSegment);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@next"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ next",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPathSegment);

$core.addMethod(
$core.method({
selector: "next:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@next"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "next: anObject\x0a\x09next := anObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPathSegment);

$core.addMethod(
$core.method({
selector: "sendCommandsTo:",
protocol: 'iterating',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var segment = self;
	while (segment !== undefined) {
		segment._sendCommandTo_(aBuilder);
		segment = segment['@next'];
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommandsTo:",{aBuilder:aBuilder},$globals.AthensPathSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "sendCommandsTo: aBuilder\x0a\x09< var segment = self;\x0a\x09while (segment !== undefined) {\x0a\x09\x09segment._sendCommandTo_(aBuilder);\x0a\x09\x09segment = segment['@next'];\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPathSegment);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
var segment,count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
segment=self;
count=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(segment)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
count=$recv(count).__plus((1));
count;
segment=$recv(segment)._next();
return segment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=count;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{segment:segment,count:count},$globals.AthensPathSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09\x22answer 1 + the number of segments next to receiver\x22\x0a\x09\x0a\x09| segment count |\x0a\x09segment := self.\x0a\x09count := 0.\x0a\x09[ segment notNil ] whileTrue: [  count := count + 1. segment := segment next ].\x0a\x0a\x09^ count.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "notNil", "+", "next"]
}),
$globals.AthensPathSegment);



$core.addClass('AthensArcSegment', $globals.AthensPathSegment, ['endPoint', 'angle'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "angle",
protocol: 'accessors',
fn: function (){
var self=this;
var $1;
$1=self["@angle"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "angle\x0a\x09^ angle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensArcSegment);

$core.addMethod(
$core.method({
selector: "endPoint",
protocol: 'accessors',
fn: function (){
var self=this;
var $1;
$1=self["@endPoint"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endPoint\x0a\x09^ endPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensArcSegment);

$core.addMethod(
$core.method({
selector: "endPoint:angle:",
protocol: 'accessors',
fn: function (pt,a){
var self=this;
self["@endPoint"]=pt;
self["@angle"]=a;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt", "a"],
source: "endPoint: pt angle: a\x0a\x0a\x09endPoint := pt.\x0a\x09angle := a",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensArcSegment);



$core.addClass('AthensCCWArcSegment', $globals.AthensArcSegment, [], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._ccwArcSegment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensCCWArcSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor ccwArcSegment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ccwArcSegment:"]
}),
$globals.AthensCCWArcSegment);

$core.addMethod(
$core.method({
selector: "sendCommandTo:",
protocol: 'visitor',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 aBuilder._ccwArcTo_angle_(self['@endPoint'], self['@angle']); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},$globals.AthensCCWArcSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09< aBuilder._ccwArcTo_angle_(self['@endPoint'], self['@angle']); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCCWArcSegment);



$core.addClass('AthensCWArcSegment', $globals.AthensArcSegment, [], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._cwArcSegment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensCWArcSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor cwArcSegment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cwArcSegment:"]
}),
$globals.AthensCWArcSegment);

$core.addMethod(
$core.method({
selector: "sendCommandTo:",
protocol: 'visitor',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 aBuilder._cwArcTo_angle_(self['@endPoint'], self['@angle']); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},$globals.AthensCWArcSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09< aBuilder._cwArcTo_angle_(self['@endPoint'], self['@angle']); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCWArcSegment);



$core.addClass('AthensCubicSegment', $globals.AthensPathSegment, ['via1', 'via2', 'to'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._cubicBezierSegment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensCubicSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor cubicBezierSegment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cubicBezierSegment:"]
}),
$globals.AthensCubicSegment);

$core.addMethod(
$core.method({
selector: "endPoint",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@to"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endPoint\x0a\x09^ to",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCubicSegment);

$core.addMethod(
$core.method({
selector: "from:via:and:to:",
protocol: 'accessing',
fn: function (origin,controlPoint,secondControlPoint,destination){
var self=this;
self["@via1"]=controlPoint;
self["@via2"]=secondControlPoint;
self["@to"]=destination;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["origin", "controlPoint", "secondControlPoint", "destination"],
source: "from: origin\x0a\x09via: controlPoint\x0a\x09and: secondControlPoint\x0a\x09to: destination\x0a\x09\x0a\x09\x0a\x09via1:= controlPoint.\x0a\x09via2 := secondControlPoint.\x0a\x09to := destination.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCubicSegment);

$core.addMethod(
$core.method({
selector: "sendCommandTo:",
protocol: 'visitor',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 aBuilder._curveVia_and_to_(self['@via1'], self['@via2'], self['@to']); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},$globals.AthensCubicSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09< aBuilder._curveVia_and_to_(self['@via1'], self['@via2'], self['@to']); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCubicSegment);

$core.addMethod(
$core.method({
selector: "to",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@to"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "to\x0a\x0a\x09^ to",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCubicSegment);

$core.addMethod(
$core.method({
selector: "via1",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@via1"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "via1\x0a\x09^ via1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCubicSegment);

$core.addMethod(
$core.method({
selector: "via2",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@via2"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "via2\x0a\x09^ via2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCubicSegment);



$core.addClass('AthensEllipticalArcSegment', $globals.AthensPathSegment, ['radii', 'phi', 'large', 'sweep', 'endPoint'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._ellipticalArcSegment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensEllipticalArcSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor ellipticalArcSegment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ellipticalArcSegment:"]
}),
$globals.AthensEllipticalArcSegment);



$core.addClass('AthensLineSegment', $globals.AthensPathSegment, ['point'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._lineSegment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensLineSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor lineSegment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lineSegment:"]
}),
$globals.AthensLineSegment);

$core.addMethod(
$core.method({
selector: "endPoint",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@point"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endPoint\x0a\x09^ point",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensLineSegment);

$core.addMethod(
$core.method({
selector: "point",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@point"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "point\x0a\x0a\x09^ point",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensLineSegment);

$core.addMethod(
$core.method({
selector: "point:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@point"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "point: anObject\x0a\x0a\x09point := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensLineSegment);

$core.addMethod(
$core.method({
selector: "sendCommandTo:",
protocol: 'visitor',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 aBuilder._lineTo_(self['@point']); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},$globals.AthensLineSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09< aBuilder._lineTo_(self['@point']); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensLineSegment);



$core.addClass('AthensCloseSegment', $globals.AthensLineSegment, [], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._closeSegment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensCloseSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor closeSegment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["closeSegment:"]
}),
$globals.AthensCloseSegment);

$core.addMethod(
$core.method({
selector: "sendCommandTo:",
protocol: 'visitor',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 aBuilder._close(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},$globals.AthensCloseSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09< aBuilder._close(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCloseSegment);



$core.addClass('AthensMoveSegment', $globals.AthensLineSegment, ['closed'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._moveSegment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensMoveSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor moveSegment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveSegment:"]
}),
$globals.AthensMoveSegment);

$core.addMethod(
$core.method({
selector: "closed:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@closed"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "closed: aBoolean\x0a\x09closed := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensMoveSegment);

$core.addMethod(
$core.method({
selector: "isClosed",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@closed"]).__eq_eq(true);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isClosed",{},$globals.AthensMoveSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClosed\x0a\x09^ closed == true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=="]
}),
$globals.AthensMoveSegment);

$core.addMethod(
$core.method({
selector: "isMove",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMove\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensMoveSegment);

$core.addMethod(
$core.method({
selector: "reopen:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@closed"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "reopen: aBoolean\x0a\x09closed := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensMoveSegment);

$core.addMethod(
$core.method({
selector: "sendCommandTo:",
protocol: 'visitor',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 aBuilder._moveTo_(self['@point']); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},$globals.AthensMoveSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09< aBuilder._moveTo_(self['@point']); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensMoveSegment);



$core.addClass('AthensQuadSegment', $globals.AthensPathSegment, ['via', 'to'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visitor',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._quadricBezierSegment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AthensQuadSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor quadricBezierSegment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["quadricBezierSegment:"]
}),
$globals.AthensQuadSegment);

$core.addMethod(
$core.method({
selector: "endPoint",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@to"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endPoint\x0a\x09^ to",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensQuadSegment);

$core.addMethod(
$core.method({
selector: "from:via:to:",
protocol: 'initialize-release',
fn: function (pt0,pt1,p){
var self=this;
self["@via"]=pt1;
self["@to"]=p;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt0", "pt1", "p"],
source: "from: pt0 via: pt1 to: p\x0a\x0a\x09via := pt1.\x0a\x09to := p.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensQuadSegment);

$core.addMethod(
$core.method({
selector: "sendCommandTo:",
protocol: 'visitor',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 aBuilder._curveVia_to_(self['@via'], self['@to']); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},$globals.AthensQuadSegment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09< aBuilder._curveVia_to_(self['@via'], self['@to']); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensQuadSegment);

$core.addMethod(
$core.method({
selector: "to",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@to"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "to\x0a\x0a\x09^ to",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensQuadSegment);

$core.addMethod(
$core.method({
selector: "via",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@via"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "via\x0a\x0a\x09^ via",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensQuadSegment);



$core.addClass('AthensPathSegmentConverter', $globals.Object, ['dest', 'endPoint', 'contourStartPt'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "convert:",
protocol: 'converting',
fn: function (aPath){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@endPoint"]=(0).__at((0));
self["@contourStartPt"]=self["@endPoint"];
$recv(aPath)._sendCommandsTo_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"convert:",{aPath:aPath},$globals.AthensPathSegmentConverter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath"],
source: "convert: aPath\x0a\x09\x22pipe the path segments to destination, converting\x0a\x09segments on the way\x22\x0a\x09\x0a\x09contourStartPt := endPoint := 0@0.\x0a\x09\x0a\x09aPath sendCommandsTo: self.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "sendCommandsTo:"]
}),
$globals.AthensPathSegmentConverter);

$core.addMethod(
$core.method({
selector: "dest:",
protocol: 'accessing',
fn: function (aDest){
var self=this;
self["@dest"]=aDest;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDest"],
source: "dest: aDest\x0a\x09dest := aDest",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPathSegmentConverter);



$core.addClass('AthensPolygon', $globals.Object, ['contours', 'currentContour', 'distanceTolerance', 'angleTolerance', 'endPoint'], 'Athens-Core-Paths');
$core.addMethod(
$core.method({
selector: "angleBetween:and:ifDegenerate:",
protocol: 'bezier flattening',
fn: function (p1,p2,aBlock){
var self=this;
var x1,y1,x2,y2,dot2,n2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$7,$6,$8,$9,$10;
x1=$recv(p1)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
y1=$recv(p1)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
x2=$recv(p2)._x();
y2=$recv(p2)._y();
$1=$recv(x1).__star(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv(y1).__star(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
dot2=$recv($1).__plus($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
dot2=$recv(dot2).__star(dot2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$4=$recv(x1).__star(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
$5=$recv(y1).__star(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$3=$recv($4).__plus($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$7=$recv(x2).__star(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
$6=$recv($7).__plus($recv(y2).__star(y2));
n2=$recv($3).__star($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$8=$recv(n2).__eq((0));
if($core.assert($8)){
$9=$recv(aBlock)._value();
return $9;
};
$10=$recv($recv(dot2).__slash(n2))._arcCos();
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"angleBetween:and:ifDegenerate:",{p1:p1,p2:p2,aBlock:aBlock,x1:x1,y1:y1,x2:x2,y2:y2,dot2:dot2,n2:n2},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["p1", "p2", "aBlock"],
source: "angleBetween: p1 and: p2 ifDegenerate: aBlock\x0a\x0a\x22 Calculate an angle (in radians) between two vectors. \x0aEvaluate a block, in case if calculation not possible because one of the vectors has zero length \x22\x0a\x0a\x09| x1 y1 x2 y2 dot2 n2 |\x0a\x09x1 := p1 x.\x0a\x09y1 := p1 y.\x0a\x09x2 := p2 x.\x0a\x09y2 := p2 y.\x0a\x09\x0a\x09dot2 := x1 * x2 + (y1 * y2).\x0a\x09dot2 := dot2 * dot2.\x0a\x09\x0a\x09n2 := (x1*x1 + (y1*y1)) * (x2*x2 + (y2*y2)).\x0a\x09\x0a\x09n2 = 0 ifTrue: [ ^ aBlock value ].\x0a\x09\x0a\x09^ (dot2 / n2) arcCos",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x", "y", "+", "*", "ifTrue:", "=", "value", "arcCos", "/"]
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "asPolygon",
protocol: 'conversion',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPolygon\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "boundingBox",
protocol: 'conversion',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var minX = Infinity;
	var minY = Infinity;
	var maxX = -Infinity;
	var maxY = -Infinity;
	
	for (var contourIndex = 0; contourIndex < self['@contours'].length; contourIndex++) {
		var contour = self['@contours'][contourIndex];
		for (var pointIndex = 0; pointIndex < contour.length; pointIndex++) {
			var point = contour[pointIndex];
			minX = Math.min(minX, point['@x']);
			minY = Math.min(minY, point['@y']);
			maxX = Math.max(maxX, point['@x']);
			maxY = Math.max(maxY, point['@y']);
		}
	}
	
	return minX.__at(minY)._corner_(maxX.__at(maxY)); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boundingBox",{},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "boundingBox\x0a\x09< var minX = Infinity;\x0a\x09var minY = Infinity;\x0a\x09var maxX = -Infinity;\x0a\x09var maxY = -Infinity;\x0a\x09\x0a\x09for (var contourIndex = 0; contourIndex < self['@contours'].length; contourIndex++) {\x0a\x09\x09var contour = self['@contours'][contourIndex];\x0a\x09\x09for (var pointIndex = 0; pointIndex < contour.length; pointIndex++) {\x0a\x09\x09\x09var point = contour[pointIndex];\x0a\x09\x09\x09minX = Math.min(minX, point['@x']);\x0a\x09\x09\x09minY = Math.min(minY, point['@y']);\x0a\x09\x09\x09maxX = Math.max(maxX, point['@x']);\x0a\x09\x09\x09maxY = Math.max(maxY, point['@y']);\x0a\x09\x09}\x0a\x09}\x0a\x09\x0a\x09return minX.__at(minY)._corner_(maxX.__at(maxY)); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "curveVia:to:",
protocol: 'conversion',
fn: function (pt1,pt2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(self["@endPoint"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv(self["@endPoint"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv(pt1)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$4=$recv(pt1)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
self._recursiveBezier2X1_y1_x2_y2_x3_y3_($1,$2,$3,$4,$recv(pt2)._x(),$recv(pt2)._y());
self["@endPoint"]=pt2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,pt2:pt2},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "pt2"],
source: "curveVia: pt1 to: pt2\x0a\x09self recursiveBezier2X1: endPoint x y1: endPoint y\x0a\x09\x09x2: pt1 x y2: pt1 y\x0a\x09\x09x3: pt2 x y3: pt2 y.\x0a\x09endPoint := pt2.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["recursiveBezier2X1:y1:x2:y2:x3:y3:", "x", "y"]
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "finish",
protocol: 'conversion',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "finish\x0a\x09\x22Finally convert contours to arrays\x22\x0a\x09\x0a\x09\x22contours := contours collect: [:ea | ea asArray ]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "includesPoint:",
protocol: 'testing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var pX = aPoint['@x'];
	var pY = aPoint['@y'];
	
	for (var ci = 0; ci < self['@contours'].length; ci++) {
		var contour = self['@contours'][ci];
		var num = contour.length;
		var i = 0;
		var j = num - 1;
		var c = false;
		
		for (i = 0; i < num; i++) {		
			if (((pY < contour[i]['@y']) != (pY < contour[j]['@y'])) && (pX < (contour[j]['@x'] - contour[i]['@x']) * (pY - contour[i]['@y']) / (contour[j]['@y'] - contour[i]['@y']) + contour[i]['@x'])) {
				c = !c;
			}
			
			j = i;
		}
		
		if (c) {
			return c;
		}
	}
	
	return false; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09< var pX = aPoint['@x'];\x0a\x09var pY = aPoint['@y'];\x0a\x09\x0a\x09for (var ci = 0; ci < self['@contours'].length; ci++) {\x0a\x09\x09var contour = self['@contours'][ci];\x0a\x09\x09var num = contour.length;\x0a\x09\x09var i = 0;\x0a\x09\x09var j = num - 1;\x0a\x09\x09var c = false;\x0a\x09\x09\x0a\x09\x09for (i = 0; i < num; i++) {\x09\x09\x0a\x09\x09\x09if (((pY < contour[i]['@y']) != (pY < contour[j]['@y'])) && (pX < (contour[j]['@x'] - contour[i]['@x']) * (pY - contour[i]['@y']) / (contour[j]['@y'] - contour[i]['@y']) + contour[i]['@x'])) {\x0a\x09\x09\x09\x09c = !c;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09j = i;\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (c) {\x0a\x09\x09\x09return c;\x0a\x09\x09}\x0a\x09}\x0a\x09\x0a\x09return false; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "includesPoint:withTransformation:",
protocol: 'testing',
fn: function (aPoint,matrix){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var pX = matrix['@sx']*aPoint['@x'] + matrix['@shx']*aPoint['@y'] + matrix['@x'];
	var pY = matrix['@shy']*aPoint['@x'] + matrix['@sy']*aPoint['@y'] + matrix['@y'];
	
	for (var ci = 0; ci < self['@contours'].length; ci++) {
		var contour = self['@contours'][ci];
		x= contour;
		var num = contour.length;
		var i = 0;
		var j = num - 1;
		var c = false;
		
		for (i = 0; i < num; i++) {		
			if (((pY < contour[i]['@y']) != (pY < contour[j]['@y'])) && (pX < (contour[j]['@x'] - contour[i]['@x']) * (pY - contour[i]['@y']) / (contour[j]['@y'] - contour[i]['@y']) + contour[i]['@x'])) {
				c = !c;
			}
			
			j = i;
		}
		
		if (c) {
			return c;
		}
	}
	
	return false; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesPoint:withTransformation:",{aPoint:aPoint,matrix:matrix},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "matrix"],
source: "includesPoint: aPoint withTransformation: matrix\x0a\x09< var pX = matrix['@sx']*aPoint['@x'] + matrix['@shx']*aPoint['@y'] + matrix['@x'];\x0a\x09var pY = matrix['@shy']*aPoint['@x'] + matrix['@sy']*aPoint['@y'] + matrix['@y'];\x0a\x09\x0a\x09for (var ci = 0; ci < self['@contours'].length; ci++) {\x0a\x09\x09var contour = self['@contours'][ci];\x0a\x09\x09x= contour;\x0a\x09\x09var num = contour.length;\x0a\x09\x09var i = 0;\x0a\x09\x09var j = num - 1;\x0a\x09\x09var c = false;\x0a\x09\x09\x0a\x09\x09for (i = 0; i < num; i++) {\x09\x09\x0a\x09\x09\x09if (((pY < contour[i]['@y']) != (pY < contour[j]['@y'])) && (pX < (contour[j]['@x'] - contour[i]['@x']) * (pY - contour[i]['@y']) / (contour[j]['@y'] - contour[i]['@y']) + contour[i]['@x'])) {\x0a\x09\x09\x09\x09c = !c;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09j = i;\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (c) {\x0a\x09\x09\x09return c;\x0a\x09\x09}\x0a\x09}\x0a\x09\x0a\x09return false; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@contours'] = smalltalk.OrderedCollection._new();
	self['@distanceTolerance'] = 0.5;
	self['@angleTolerance'] = 0.1; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09< self['@contours'] = smalltalk.OrderedCollection._new();\x0a\x09self['@distanceTolerance'] = 0.5;\x0a\x09self['@angleTolerance'] = 0.1; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "isFlatBezier2X1:y1:x2:y2:x3:y3:",
protocol: 'bezier flattening',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
var dx,dy,d,da,angle;
function $CollinearityEps(){return $globals.CollinearityEps||(typeof CollinearityEps=="undefined"?nil:CollinearityEps)}
function $CurveAngleTolerance(){return $globals.CurveAngleTolerance||(typeof CurveAngleTolerance=="undefined"?nil:CurveAngleTolerance)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$1,$6,$8,$10,$12,$13,$11,$9,$7,$14,$16,$17,$15,$19,$20,$18,$21,$22,$23,$24,$26,$25,$28,$27,$30,$33,$32,$35,$34,$31,$29,$36,$37,$39,$38,$41,$40,$42,$44,$43,$46,$45,$49,$50,$48,$47,$52,$51,$53;
dx=$recv(x3).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
dy=$recv(y3).__minus(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$3=$recv(x2).__minus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$5=$recv(y2).__minus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=5;
//>>excludeEnd("ctx");
$4=$recv($5).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__minus($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
d=$recv($1)._abs();
$6=$recv(d).__gt($CollinearityEps());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($6)){
$8=$recv(d).__star(d);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$10=self["@distanceTolerance"];
$12=$recv(dx).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
$13=$recv(dy).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$11=$recv($12).__plus($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__star($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__lt_eq($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
if($core.assert($7)){
$14=$recv(self["@angleTolerance"]).__lt($CurveAngleTolerance());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
if($core.assert($14)){
return true;
};
$16=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=6;
//>>excludeEnd("ctx");
$17=$recv(y2).__minus(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=7;
//>>excludeEnd("ctx");
$15=$recv($16).__at($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$19=$recv(x3).__minus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=8;
//>>excludeEnd("ctx");
$20=$recv(y3).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=9;
//>>excludeEnd("ctx");
$18=$recv($19).__at($20);
angle=self._angleBetween_and_ifDegenerate_($15,$18,(function(){
return (0);

}));
angle;
$21=$recv(angle).__lt_eq(self["@angleTolerance"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=2;
//>>excludeEnd("ctx");
if($core.assert($21)){
return true;
};
};
} else {
$22=$recv(dx).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
$23=$recv(dy).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=8;
//>>excludeEnd("ctx");
da=$recv($22).__plus($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
da;
$24=$recv(da).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($24)){
$26=$recv(x1).__minus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=10;
//>>excludeEnd("ctx");
$25=$recv($26)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=1;
//>>excludeEnd("ctx");
$28=$recv(y1).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=11;
//>>excludeEnd("ctx");
$27=$recv($28)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=2;
//>>excludeEnd("ctx");
d=$recv($25).__plus($27);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
d;
} else {
$30=d;
$33=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=12;
//>>excludeEnd("ctx");
$32=$recv($33).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=9;
//>>excludeEnd("ctx");
$35=$recv(y2).__minus(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=13;
//>>excludeEnd("ctx");
$34=$recv($35).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=10;
//>>excludeEnd("ctx");
$31=$recv($32).__plus($34);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
$29=$recv($30).__eq($31);
$recv($29).__slash(da);
$36=$recv($recv(d).__gt((0)))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(d).__lt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}));
if($core.assert($36)){
return true;
};
$37=$recv(d).__lt_eq((0));
if($core.assert($37)){
$39=$recv(x1).__minus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=14;
//>>excludeEnd("ctx");
$38=$recv($39)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=3;
//>>excludeEnd("ctx");
$41=$recv(y1).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=15;
//>>excludeEnd("ctx");
$40=$recv($41)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=4;
//>>excludeEnd("ctx");
d=$recv($38).__plus($40);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=5;
//>>excludeEnd("ctx");
d;
} else {
$42=$recv(d).__gt_eq((1));
if($core.assert($42)){
$44=$recv(x2).__minus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=16;
//>>excludeEnd("ctx");
$43=$recv($44)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=5;
//>>excludeEnd("ctx");
$46=$recv(y2).__minus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=17;
//>>excludeEnd("ctx");
$45=$recv($46)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=6;
//>>excludeEnd("ctx");
d=$recv($43).__plus($45);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=6;
//>>excludeEnd("ctx");
d;
} else {
$49=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=19;
//>>excludeEnd("ctx");
$50=$recv(d).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=11;
//>>excludeEnd("ctx");
$48=$recv($49).__minus($50);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=18;
//>>excludeEnd("ctx");
$47=$recv($48)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=7;
//>>excludeEnd("ctx");
$52=$recv($recv(y2).__minus(y1)).__minus($recv(d).__star(dy));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=20;
//>>excludeEnd("ctx");
$51=$recv($52)._squared();
d=$recv($47).__plus($51);
d;
};
};
};
$53=$recv(d).__lt(self._distanceToleranceSquared());
if($core.assert($53)){
return true;
};
};
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFlatBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,dx:dx,dy:dy,d:d,da:da,angle:angle},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "isFlatBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09| dx dy d da angle |\x0a\x09\x0a\x09dx := x3-x1.\x0a\x09dy := y3-y1.\x0a\x09\x0a \x09d := (((x2 - x3) * dy) - ((y2 - y3) * dx)) abs.\x0a\x0a\x09d > CollinearityEps ifTrue: [\x0a\x09\x09\x0a\x09\x09\x22regular case\x22\x0a\x0a\x09\x09d*d <= (distanceTolerance * ( dx*dx + (dy*dy))) ifTrue: [\x0a\x09\x09\x09\x0a\x09\x09\x09angleTolerance < CurveAngleTolerance ifTrue: [ ^ true ].\x0a\x09\x09\x09\x0a\x09\x09\x09angle := self angleBetween: x2-x1 @ (y2-y1) and: x3-x2 @ (y3-y2)\x0a\x09\x09\x09\x09ifDegenerate: [ 0.0 ].\x0a\x09\x09\x09\x0a\x09\x09\x09\x22parallel. no need to proceed further\x22\x0a\x09\x09\x09angle <= angleTolerance ifTrue: [ ^ true ]\x09\x09\x09\x09\x09\x0a\x09\x09]\x0a\x09]\x0a\x09ifFalse: [ \x0a\x09\x09\x22collinear\x22\x0a\x09\x09da := dx*dx + (dy*dy).\x0a\x09\x09\x0a\x09\x09da = 0 \x0a\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09d = ((x2 - x1)*dx + ((y2 - y1)*dy)) / da.\x0a\x0a\x09\x09\x09\x09(d > 0.0 and: [ d < 1.0 ] ) ifTrue: [ \x0a\x09\x09\x09\x09\x09\x22Simple collinear case, 1---2---3\x22 \x0a\x09\x09\x09\x09\x09^ true\x0a     \x09\x09\x09\x09].\x0a\x09\x09\x09\x09d <= 0.0 \x0a\x09\x09\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09d >= 1.0 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ d:= (x2-x3) squared + (y2-y3) squared ]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ d:= (x2 - x1 - (d*dx)) squared + (y2 - y1 - (d*dy)) squared ]\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x0a\x09\x09\x09d < self distanceToleranceSquared ifTrue: [ ^ true ]\x09\x09\x0a\x09].\x0a\x0a\x09^ false",
referencedClasses: ["CollinearityEps", "CurveAngleTolerance"],
//>>excludeEnd("ide");
messageSends: ["-", "abs", "*", "ifTrue:ifFalse:", ">", "ifTrue:", "<=", "+", "<", "angleBetween:and:ifDegenerate:", "@", "=", "squared", "/", "and:", ">=", "distanceToleranceSquared"]
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "lineTo:",
protocol: 'conversion',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@currentContour']._add_(aPoint);
	self['@endPoint'] = aPoint; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "lineTo: aPoint \x0a\x09< self['@currentContour']._add_(aPoint);\x0a\x09self['@endPoint'] = aPoint; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "moveTo:",
protocol: 'conversion',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self._newContour();
	self['@currentContour']._add_(aPoint);
	self['@endPoint'] = aPoint; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "moveTo: aPoint \x0a\x09< self._newContour();\x0a\x09self['@currentContour']._add_(aPoint);\x0a\x09self['@endPoint'] = aPoint; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "multiplyBy:",
protocol: 'transformations',
fn: function (matrix){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 for (var ci = 0; ci < self['@contours'].length; ci++) {
		var contour = self['@contours'][ci];
		
		for (var pi = 0; pi < contour.length; pi++)
		{
			var x = contour[pi]['@x'];
			var y = contour[pi]['@y'];
			contour[pi]['@x'] = matrix['@sx']*x + matrix['@shx']*y + matrix['@x'];
			contour[pi]['@y'] = matrix['@shy']*x + matrix['@sy']*y + matrix['@y'];
		}
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{matrix:matrix},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["matrix"],
source: "multiplyBy: matrix\x0a\x09< for (var ci = 0; ci < self['@contours'].length; ci++) {\x0a\x09\x09var contour = self['@contours'][ci];\x0a\x09\x09\x0a\x09\x09for (var pi = 0; pi < contour.length; pi++)\x0a\x09\x09{\x0a\x09\x09\x09var x = contour[pi]['@x'];\x0a\x09\x09\x09var y = contour[pi]['@y'];\x0a\x09\x09\x09contour[pi]['@x'] = matrix['@sx']*x + matrix['@shx']*y + matrix['@x'];\x0a\x09\x09\x09contour[pi]['@y'] = matrix['@shy']*x + matrix['@sy']*y + matrix['@y'];\x0a\x09\x09}\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "newContour",
protocol: 'conversion',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@currentContour'] = self['@contours']._add_(smalltalk.OrderedCollection._new()); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newContour",{},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newContour\x0a\x09< self['@currentContour'] = self['@contours']._add_(smalltalk.OrderedCollection._new()); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "paintFillsUsing:on:",
protocol: 'drawing',
fn: function (aPaint,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aPaint)._fillPolygon_on_(self,anAthensCanvas);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09\x0a\x09\x22This method is a part of rendering dispatch  Canvas->receiver->paint\x22\x0a\x09\x0a\x09^ aPaint fillPolygon: self on: anAthensCanvas",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fillPolygon:on:"]
}),
$globals.AthensPolygon);

$core.addMethod(
$core.method({
selector: "recursiveBezier2X1:y1:x2:y2:x3:y3:",
protocol: 'bezier flattening',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self._isFlatBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x2,y2,x3,y3);
if($core.assert($1)){
$2=$recv(x2).__at(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
self._lineTo_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:"]=1;
//>>excludeEnd("ctx");
$3=self._lineTo_($recv(x3).__at(y3));
$3;
} else {
var x12,y12,x23,y23,x123,y123;
$4=$recv(x1).__plus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
x12=$recv($4).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
x12;
$5=$recv(y1).__plus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
y12=$recv($5).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
y12;
$6=$recv(x2).__plus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
x23=$recv($6).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
x23;
$7=$recv(y2).__plus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
y23=$recv($7).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
y23;
$8=$recv(x12).__plus(x23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=5;
//>>excludeEnd("ctx");
x123=$recv($8).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
x123;
y123=$recv($recv(y12).__plus(y23)).__star((0.5));
y123;
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x12,y12,x123,y123);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["recursiveBezier2X1:y1:x2:y2:x3:y3:"]=1;
//>>excludeEnd("ctx");
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x123,y123,x23,y23,x3,y3);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recursiveBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},$globals.AthensPolygon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "recursiveBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09\x22recursively subdive bezier curve as long as #isFlatBezier2.. answers false \x22\x0a\x0a\x09(self isFlatBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3) ifTrue: [\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09lineTo: x2 @ y2;\x0a\x09\x09\x09lineTo: x3 @ y3\x0a\x09] ifFalse: [\x0a\x09\x09| x12 y12 x23 y23 x123 y123 |\x09\x0a\x09\x22calculate midpoints of line segments \x22\x0a\x09\x09x12 := (x1 + x2) * 0.5.\x0a\x09\x09y12 := (y1 + y2) * 0.5 .\x0a\x0a\x09\x09x23 := (x2 + x3) * 0.5 .\x0a\x09\x09y23 := (y2 + y3) * 0.5 .\x0a\x0a\x09\x09x123 := (x12 + x23) * 0.5.\x0a\x09\x09y123 := (y12 + y23) * 0.5.\x0a\x09\x09\x0a\x09\x09self recursiveBezier2X1: x1 y1: y1 \x0a\x09\x09\x09x2: x12 \x0a\x09\x09\x09y2: y12 \x0a\x09\x09\x09x3: x123 \x0a\x09\x09\x09y3: y123.\x0a\x09\x09\x09\x0a\x09\x09self recursiveBezier2X1: x123 \x0a\x09\x09\x09y1: y123\x0a\x09\x09\x09x2: x23\x0a\x09\x09\x09y2: y23 \x0a\x09\x09\x09x3: x3 \x0a\x09\x09\x09y3: y3.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isFlatBezier2X1:y1:x2:y2:x3:y3:", "lineTo:", "@", "*", "+", "recursiveBezier2X1:y1:x2:y2:x3:y3:"]
}),
$globals.AthensPolygon);


});
