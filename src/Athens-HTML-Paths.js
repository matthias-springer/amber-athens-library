define("amber-athens/Athens-HTML-Paths", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-HTML-Paths');
$core.packages["Athens-HTML-Paths"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-HTML-Paths"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('AthensHTMLPath', $globals.Object, ['segment', 'context2D', 'startPoint', 'endPoint'], 'Athens-HTML-Paths');
$core.addMethod(
$core.method({
selector: "arcTo:angle:cw:",
protocol: 'path commands',
fn: function (newEndPoint,angle,aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var start = self['@endPoint'];
	var end = self['@endPoint'] = newEndPoint;
	var cwAngle = aBool ? angle : -angle;
	var center = self._calcCenter_end_angle_(start, end, cwAngle);
	var vX = start._x() - center._x();
	var vY = start._y() - center._y();
	var radius = Math.sqrt(vX * vX + vY * vY);
	
	var vXAcos = Math.acos(vX / Math.sqrt(vX * vX + vY * vY));
	var startAngle = vY < 0 ? Math.PI * 2 - vXAcos : vXAcos;
	
	var eX = end._x() - center._x();
	var eY = end._y() - center._y();
	var eXAcos = Math.acos(eX / Math.sqrt(eX * eX + eY * eY));
	var endAngle = eY < 0 ? Math.PI * 2 - eXAcos : eXAcos;
	
	self['@context2D'].arc(center._x(), center._y(), radius, startAngle, endAngle, !aBool); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcTo:angle:cw:",{newEndPoint:newEndPoint,angle:angle,aBool:aBool},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newEndPoint", "angle", "aBool"],
source: "arcTo: newEndPoint angle: angle cw: aBool\x0a\x09< var start = self['@endPoint'];\x0a\x09var end = self['@endPoint'] = newEndPoint;\x0a\x09var cwAngle = aBool ? angle : -angle;\x0a\x09var center = self._calcCenter_end_angle_(start, end, cwAngle);\x0a\x09var vX = start._x() - center._x();\x0a\x09var vY = start._y() - center._y();\x0a\x09var radius = Math.sqrt(vX * vX + vY * vY);\x0a\x09\x0a\x09var vXAcos = Math.acos(vX / Math.sqrt(vX * vX + vY * vY));\x0a\x09var startAngle = vY < 0 ? Math.PI * 2 - vXAcos : vXAcos;\x0a\x09\x0a\x09var eX = end._x() - center._x();\x0a\x09var eY = end._y() - center._y();\x0a\x09var eXAcos = Math.acos(eX / Math.sqrt(eX * eX + eY * eY));\x0a\x09var endAngle = eY < 0 ? Math.PI * 2 - eXAcos : eXAcos;\x0a\x09\x0a\x09self['@context2D'].arc(center._x(), center._y(), radius, startAngle, endAngle, !aBool); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "asAthensShapeOn:",
protocol: 'converting',
fn: function (anAthensCanvas){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAthensCanvas"],
source: "asAthensShapeOn: anAthensCanvas\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "asPolygon",
protocol: 'converting',
fn: function (){
var self=this;
var polygon;
function $AthensPolygon(){return $globals.AthensPolygon||(typeof AthensPolygon=="undefined"?nil:AthensPolygon)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
polygon=$recv($AthensPolygon())._new();
$recv(self["@segment"])._sendCommandsTo_(polygon);
$1=polygon;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asPolygon",{polygon:polygon},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPolygon\x0a\x09|polygon|\x0a\x09polygon := AthensPolygon new.\x0a\x09segment sendCommandsTo: polygon.\x0a\x09^ polygon",
referencedClasses: ["AthensPolygon"],
//>>excludeEnd("ide");
messageSends: ["new", "sendCommandsTo:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "calcCenter:end:angle:",
protocol: 'path commands',
fn: function (start,end,angle){
var self=this;
var v,rot,center,radius,len,sina,cosa,m;
function $AthensAffineTransform(){return $globals.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $Number(){return $globals.Number||(typeof Number=="undefined"?nil:Number)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6;
v=$recv(end).__minus(start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$1=$recv($AthensAffineTransform())._new();
$2=$recv($recv($recv($Number())._pi()).__minus(angle)).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
m=$recv($1)._rotateByRadians_($2);
v=$recv(m)._transform_(v);
len=$recv(v)._r();
$3=$recv(len).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=3;
//>>excludeEnd("ctx");
$5=$recv(angle).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=4;
//>>excludeEnd("ctx");
$4=$recv($5)._sin();
radius=$recv($3).__slash($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=2;
//>>excludeEnd("ctx");
center=$recv($recv(v).__star($recv(radius).__slash(len))).__plus(start);
$6=center;
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"calcCenter:end:angle:",{start:start,end:end,angle:angle,v:v,rot:rot,center:center,radius:radius,len:len,sina:sina,cosa:cosa,m:m},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["start", "end", "angle"],
source: "calcCenter: start end: end angle: angle\x0a\x0a\x09| v  rot  center radius len sina cosa m |\x09\x0a\x09\x0a\x09v := end - start.\x0a\x09\x0a\x09m := AthensAffineTransform new rotateByRadians: (Number pi - angle   /2).\x0a\x0a\x09v := m transform: v.\x09\x09\x0a\x09len := v r.\x0a\x09radius := len / 2 / (angle /2) sin.\x0a\x09\x0a\x09center := v * (radius/len) + start.\x0a\x0a\x09^ center",
referencedClasses: ["AthensAffineTransform", "Number"],
//>>excludeEnd("ide");
messageSends: ["-", "rotateByRadians:", "new", "/", "pi", "transform:", "r", "sin", "+", "*"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "ccwArcTo:angle:",
protocol: 'path commands',
fn: function (newEndPoint,angle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._arcTo_angle_cw_(newEndPoint,angle,false);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newEndPoint", "angle"],
source: "ccwArcTo: newEndPoint angle: angle\x0a\x09\x22 Add a counter-clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x0a\x09\x22\x0a\x09^ self arcTo: newEndPoint angle: angle cw: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arcTo:angle:cw:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'path commands',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@endPoint"]=self["@startPoint"];
$recv(self["@context2D"])._closePath();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09endPoint := startPoint.\x0a\x09context2D closePath.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["closePath"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "curveVia:and:to:",
protocol: 'path commands',
fn: function (pt1,pt2,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@endPoint"]=aPoint;
$recv(self["@context2D"])._bezierCurveVia_and_to_(pt1,pt2,aPoint);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{pt1:pt1,pt2:pt2,aPoint:aPoint},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "pt2", "aPoint"],
source: "curveVia: pt1 and: pt2 to: aPoint\x0a\x09endPoint := aPoint.\x0a\x09context2D bezierCurveVia: pt1 and: pt2 to: aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bezierCurveVia:and:to:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "curveVia:to:",
protocol: 'path commands',
fn: function (pt1,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@endPoint"]=aPoint;
$recv(self["@context2D"])._quadraticCurveVia_to_(pt1,aPoint);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,aPoint:aPoint},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "aPoint"],
source: "curveVia: pt1 to: aPoint\x0a\x09endPoint := aPoint.\x0a\x09context2D quadraticCurveVia: pt1 to: aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["quadraticCurveVia:to:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "curveViaX:Y:toX:Y:",
protocol: 'path commands',
fn: function (x1,y1,x2,y2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(x1).__at(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
self._curveVia_to_($1,$recv(x2).__at(y2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2"],
source: "curveViaX: x1 Y: y1 toX: x2 Y: y2\x0a\x09self curveVia: x1 @ y1 to: x2 @ y2.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curveVia:to:", "@"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "curveViaX:Y:viaX:Y:toX:Y:",
protocol: 'path commands',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(x1).__at(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=$recv(x2).__at(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
self._curveVia_and_to_($1,$2,$recv(x3).__at(y3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:viaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "curveViaX: x1 Y: y1 viaX: x2 Y: y2 toX: x3 Y: y3\x0a\x09self curveVia: x1 @ y1 and: x2 @ y2 to: x3 @ y3.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curveVia:and:to:", "@"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "cwArcTo:angle:",
protocol: 'path commands',
fn: function (newEndPoint,angle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._arcTo_angle_cw_(newEndPoint,angle,true);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newEndPoint", "angle"],
source: "cwArcTo: newEndPoint angle: angle\x0a\x09\x22 Add a clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x0a\x09\x22\x0a\x09^ self arcTo: newEndPoint angle: angle cw: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arcTo:angle:cw:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "drawOn:",
protocol: 'drawing',
fn: function (anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@context2D"]=$recv(anAthensCanvas)._context2D();
self["@context2D"];
self._newPath();
return $recv(self["@segment"])._sendCommandsTo_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
self["@context2D"]=nil;
return self["@context2D"];

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawOn:",{anAthensCanvas:anAthensCanvas},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAthensCanvas"],
source: "drawOn: anAthensCanvas\x0a\x09\x22Replay saved path.\x22\x0a\x09\x0a\x09[\x0a\x09\x09context2D := anAthensCanvas context2D.\x0a\x09\x09self newPath.\x0a\x09\x09segment sendCommandsTo: self.\x0a\x09] ensure: [\x0a\x09\x09context2D := nil].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ensure:", "context2D", "newPath", "sendCommandsTo:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "lineTo:",
protocol: 'path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@endPoint"]=aPoint;
$recv(self["@context2D"])._lineTo_(aPoint);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09endPoint := aPoint.\x0a\x09context2D lineTo: aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lineTo:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "lineToX:Y:",
protocol: 'path commands',
fn: function (x,y){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._lineToX_Y_(x,y);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineToX:Y:",{x:x,y:y},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y"],
source: "lineToX: x Y: y\x0a\x09self lineToX: x Y: y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lineToX:Y:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "moveTo:",
protocol: 'path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@endPoint"]=aPoint;
$recv(self["@context2D"])._moveTo_(aPoint);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09endPoint := aPoint.\x0a\x09context2D moveTo: aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveTo:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "moveToX:Y:",
protocol: 'path commands',
fn: function (x,y){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._moveTo_($recv(x).__at(y));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveToX:Y:",{x:x,y:y},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y"],
source: "moveToX: x Y: y\x0a\x09self moveTo: x @ y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveTo:", "@"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "newPath",
protocol: 'path commands',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@startPoint"]=(0).__at((0));
self["@endPoint"]=self["@startPoint"];
$recv(self["@context2D"])._beginPath();
self._moveTo_(self["@startPoint"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newPath",{},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newPath\x0a\x09endPoint := startPoint := 0 @ 0.\x0a\x09context2D beginPath.\x0a\x09self moveTo: startPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "beginPath", "moveTo:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "paintFillsUsing:on:",
protocol: 'drawing',
fn: function (aPaint,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aPaint)._fillPath_on_(self,anAthensCanvas);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},$globals.AthensHTMLPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09aPaint fillPath: self on: anAthensCanvas.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fillPath:on:"]
}),
$globals.AthensHTMLPath);

$core.addMethod(
$core.method({
selector: "segment:",
protocol: 'accessing',
fn: function (startSegment){
var self=this;
self["@segment"]=startSegment;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["startSegment"],
source: "segment: startSegment\x0a\x09segment := startSegment.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPath);


$globals.AthensHTMLPath.klass.iVarNames = ['zeroPoint'];
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@zeroPoint"]=(0).__at((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensHTMLPath.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09zeroPoint := 0@0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.AthensHTMLPath.klass);

$core.addMethod(
$core.method({
selector: "segment:",
protocol: 'instance creation',
fn: function (startSegment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._segment_(startSegment);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"segment:",{startSegment:startSegment},$globals.AthensHTMLPath.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["startSegment"],
source: "segment: startSegment\x0a\x09^ self new\x0a\x09\x09segment: startSegment;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["segment:", "new", "yourself"]
}),
$globals.AthensHTMLPath.klass);

});
