define("amber-athens/Athens-Core-PathsGeometry", ["amber/boot", "amber_core/Kernel-Objects", "amber-athens/Athens-Core-Paths"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-Core-PathsGeometry');
$core.packages["Athens-Core-PathsGeometry"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-Core-PathsGeometry"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('AthensCubicBezier', $globals.Object, ['x1', 'y1', 'x2', 'y2', 'x3', 'y3', 'x4', 'y4'], 'Athens-Core-PathsGeometry');


$core.addClass('AthensCurveFlattener', $globals.AthensPathSegmentConverter, ['transform', 'inverseTransform', 'lengthTolerance', 'lengthToleranceSquared'], 'Athens-Core-PathsGeometry');
$core.addMethod(
$core.method({
selector: "curveVia:to:",
protocol: 'path commands',
fn: function (via,end){
var self=this;
var pt1,pt2,pt3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
pt1=$recv(self["@transform"])._transform_(self["@endPoint"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transform:"]=1;
//>>excludeEnd("ctx");
pt2=$recv(self["@transform"])._transform_(via);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transform:"]=2;
//>>excludeEnd("ctx");
pt3=$recv(self["@transform"])._transform_(end);
self["@endPoint"]=end;
$1=$recv(pt1)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv(pt1)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv(pt2)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$4=$recv(pt2)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
self._flattenQuadBezier_y1_x2_y2_x3_y3_($1,$2,$3,$4,$recv(pt3)._x(),$recv(pt3)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{via:via,end:end,pt1:pt1,pt2:pt2,pt3:pt3},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["via", "end"],
source: "curveVia: via to: end \x0a\x09| pt1 pt2 pt3 |\x0a\x09\x0a\x09pt1 := transform transform: endPoint.\x0a\x09pt2 := transform transform: via.\x0a\x09pt3 := transform transform: end.\x0a\x09\x0a\x09endPoint := end.\x0a\x0a\x09self flattenQuadBezier: pt1 x y1: pt1 y x2: pt2 x y2: pt2 y x3: pt3 x y3: pt3 y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["transform:", "flattenQuadBezier:y1:x2:y2:x3:y3:", "x", "y"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "curveVia:via:to:",
protocol: 'path commands',
fn: function (via1,via2,end){
var self=this;
var pt1,pt2,pt3,pt4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
pt1=$recv(self["@transform"])._transform_(self["@endPoint"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transform:"]=1;
//>>excludeEnd("ctx");
pt2=$recv(self["@transform"])._transform_(via1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transform:"]=2;
//>>excludeEnd("ctx");
pt3=$recv(self["@transform"])._transform_(end);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transform:"]=3;
//>>excludeEnd("ctx");
pt4=$recv(self["@transform"])._transform_(end);
self["@endPoint"]=end;
$1=$recv(pt1)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv(pt1)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv(pt2)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$4=$recv(pt2)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$5=$recv(pt3)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$6=$recv(pt3)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=3;
//>>excludeEnd("ctx");
self._flattenCubicBezier_y1_x2_y2_x3_y3_x4_y4_($1,$2,$3,$4,$5,$6,$recv(pt4)._x(),$recv(pt4)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:via:to:",{via1:via1,via2:via2,end:end,pt1:pt1,pt2:pt2,pt3:pt3,pt4:pt4},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["via1", "via2", "end"],
source: "curveVia: via1 via: via2 to: end \x0a\x09| pt1 pt2 pt3 pt4 |\x0a\x09\x0a\x09pt1 := transform transform: endPoint.\x0a\x09pt2 := transform transform: via1.\x0a\x09pt3 := transform transform: end.\x0a\x09pt4 := transform transform: end.\x0a\x09\x0a\x09endPoint := end.\x0a\x0a\x09self flattenCubicBezier: pt1 x y1: pt1 y x2: pt2 x y2: pt2 y x3: pt3 x y3: pt3 y x4: pt4 x y4: pt4 y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["transform:", "flattenCubicBezier:y1:x2:y2:x3:y3:x4:y4:", "x", "y"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "defaultTolerance",
protocol: 'accessing',
fn: function (){
var self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultTolerance\x0a\x09^ 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "flattenCubicBezier:y1:x2:y2:x3:y3:x4:y4:",
protocol: 'helpers',
fn: function (x1,y1,x2,y2,x3,y3,x4,y4){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2", "x3", "y3", "x4", "y4"],
source: "flattenCubicBezier: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3 x4: x4 y4: y4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "flattenPath:transform:",
protocol: 'public API',
fn: function (aPath,aTransform){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._flattenPath_transform_toleranceMultiplier_(aPath,aTransform,(1));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flattenPath:transform:",{aPath:aPath,aTransform:aTransform},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath", "aTransform"],
source: "flattenPath: aPath transform: aTransform\x0a\x0a\x09\x22This is an entry point for flattening path.\x0a\x09An additional argument, transform is an Affine matrix, used to map path geometry to screen,\x0a\x09and therefore used to calculate the error tolerance for path subdivisions\x22\x0a\x09\x0a\x09^ self flattenPath: aPath transform: aTransform toleranceMultiplier: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["flattenPath:transform:toleranceMultiplier:"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "flattenPath:transform:toleranceMultiplier:",
protocol: 'public API',
fn: function (aPath,aTransform,aToleranceMultiplier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@transform"]=aTransform;
self["@lengthTolerance"]=aToleranceMultiplier;
self["@lengthToleranceSquared"]=$recv(self["@lengthTolerance"])._squared();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flattenPath:transform:toleranceMultiplier:",{aPath:aPath,aTransform:aTransform,aToleranceMultiplier:aToleranceMultiplier},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath", "aTransform", "aToleranceMultiplier"],
source: "flattenPath: aPath transform: aTransform toleranceMultiplier: aToleranceMultiplier\x0a\x0a\x09\x22This is an entry point for flattening path (converting all curves into line segments by approximating them).\x0a\x09\x0a\x09- transform is an Affine matrix, used to map path geometry to screen,\x0a\x09and therefore used to calculate the error tolerance for path subdivisions\x0a\x09\x0a\x09\x0a\x09- a tolerance multiplier is a number .. which\x0a\x09\x09if = 1 , the default error tolerance is used,\x0a\x09\x09if > 1 you will get more coarse approximation\x0a\x09\x09if < 1 you will get more finer approximation\x0a\x09\x0a\x09\x22\x0a\x09\x0a\x09transform := aTransform.\x0a\x09lengthTolerance := aToleranceMultiplier.\x0a\x09lengthToleranceSquared := lengthTolerance squared.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["squared"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "flattenQuadBezier:y1:x2:y2:x3:y3:",
protocol: 'helpers',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$7,$6,$5,$8,$9,$11,$10,$12,$13,$14,$15,$16,$17;
$1=self._isFlatQuadBezier_y1_x2_y2_x3_y3_(x1,y1,x2,y2,x3,y3);
if($core.assert($1)){
var midx,midy;
$4=$recv(x2).__plus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$3=$recv($4).__plus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__plus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
midx=$recv($2).__star((0.25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
midx;
$7=$recv(y2).__plus(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=6;
//>>excludeEnd("ctx");
$6=$recv($7).__plus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=5;
//>>excludeEnd("ctx");
$5=$recv($6).__plus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
midy=$recv($5).__star((0.25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
midy;
$8=self["@dest"];
$9=$8;
$11=$recv(midx).__at(midy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$10=self._inverseTransform_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inverseTransform:"]=1;
//>>excludeEnd("ctx");
$recv($9)._lineTo_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:"]=1;
//>>excludeEnd("ctx");
$12=$recv($8)._lineTo_(self._inverseTransform_($recv(x3).__at(y3)));
$12;
} else {
var x12,y12,x23,y23,x123,y123;
$13=$recv(x1).__plus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=7;
//>>excludeEnd("ctx");
x12=$recv($13).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
x12;
$14=$recv(y1).__plus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=8;
//>>excludeEnd("ctx");
y12=$recv($14).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
y12;
$15=$recv(x2).__plus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=9;
//>>excludeEnd("ctx");
x23=$recv($15).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
x23;
$16=$recv(y2).__plus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=10;
//>>excludeEnd("ctx");
y23=$recv($16).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
y23;
$17=$recv(x12).__plus(x23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=11;
//>>excludeEnd("ctx");
x123=$recv($17).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
x123;
y123=$recv($recv(y12).__plus(y23)).__star((0.5));
y123;
self._flattenQuadBezier_y1_x2_y2_x3_y3_(x1,y1,x12,y12,x123,y123);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["flattenQuadBezier:y1:x2:y2:x3:y3:"]=1;
//>>excludeEnd("ctx");
self._flattenQuadBezier_y1_x2_y2_x3_y3_(x123,y123,x23,y23,x3,y3);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flattenQuadBezier:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "flattenQuadBezier: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09\x22Recursively subdive quadric bezier curve as long as #isFlatBezier.. answers false \x22\x0a\x0a\x09\x22The points here is unboxed intentionally to avoid generating extra garbage\x0a\x09(which contributes to performance loss)\x22\x0a\x0a\x09(self isFlatQuadBezier: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3) ifTrue: [\x0a\x09\x09| midx midy |\x0a\x09\x09midx := (x2 + x1 + x2+x3) * 0.25 .  \x22mid ( mid(pt1,pt2), mid(pt2,pt3)) \x22\x0a\x09\x09midy := (y2 + y1 + y2+y3) * 0.25 . \x0a\x0a\x09\x09dest \x0a\x09\x09\x09lineTo: (self inverseTransform: midx @ midy);\x0a\x09\x09\x09lineTo: (self inverseTransform: x3 @ y3)\x0a\x09\x09\x09\x0a\x09\x22\x09dest \x0a\x09\x09\x09lineTo: (self inverseTransform: x2 @ y2);\x0a\x09\x09\x09lineTo: (self inverseTransform: x3 @ y3)\x0a\x09\x22\x0a\x09\x0a\x09] ifFalse: [\x0a\x09\x09| x12 y12 x23 y23 x123 y123 |\x09\x0a\x09\x22calculate midpoints of line segments \x22\x0a\x09\x09x12 := (x1 + x2) * 0.5.\x0a\x09\x09y12 := (y1 + y2) * 0.5 .\x0a\x0a\x09\x09x23 := (x2 + x3) * 0.5 .\x0a\x09\x09y23 := (y2 + y3) * 0.5 .\x0a\x0a\x09\x09x123 := (x12 + x23) * 0.5.\x0a\x09\x09y123 := (y12 + y23) * 0.5.\x0a\x09\x09\x0a\x09\x09self flattenQuadBezier: x1 y1: y1 \x0a\x09\x09\x09x2: x12 \x0a\x09\x09\x09y2: y12 \x0a\x09\x09\x09x3: x123 \x0a\x09\x09\x09y3: y123.\x0a\x09\x09\x09\x0a\x09\x09self flattenQuadBezier: x123 \x0a\x09\x09\x09y1: y123\x0a\x09\x09\x09x2: x23\x0a\x09\x09\x09y2: y23 \x0a\x09\x09\x09x3: x3 \x0a\x09\x09\x09y3: y3.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isFlatQuadBezier:y1:x2:y2:x3:y3:", "*", "+", "lineTo:", "inverseTransform:", "@", "flattenQuadBezier:y1:x2:y2:x3:y3:"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $AthensAffineTransform(){return $globals.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AthensCurveFlattener.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@transform"]=$recv($AthensAffineTransform())._new();
self._toleranceMultiplier_(self._defaultTolerance());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09transform := AthensAffineTransform new. \x22identity\x22\x0a\x09self toleranceMultiplier: self defaultTolerance",
referencedClasses: ["AthensAffineTransform"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "toleranceMultiplier:", "defaultTolerance"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "inverseTransform:",
protocol: 'helpers',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@transform"])._inverseTransform_(aPoint);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inverseTransform:",{aPoint:aPoint},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "inverseTransform: aPoint \x0a\x09^ transform inverseTransform: aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inverseTransform:"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "isFlatQuadBezier:y1:x2:y2:x3:y3:",
protocol: 'helpers',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
var dx,dy,d,da;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$1,$7,$8,$6,$11,$12,$10,$14,$15,$13,$9,$17,$19,$18,$16,$20,$21,$22,$24,$23,$26,$25,$29,$28,$31,$30,$27,$32,$33,$35,$34,$37,$36,$38,$40,$39,$42,$41,$45,$46,$44,$43,$48,$47,$49;
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["abs"]=1;
//>>excludeEnd("ctx");
$7=d;
$8=self._lengthToleranceSquared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lengthToleranceSquared"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__gt($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($6)){
var dot;
$11=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=6;
//>>excludeEnd("ctx");
$12=$recv(x2).__minus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=7;
//>>excludeEnd("ctx");
$10=$recv($11).__star($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$14=$recv(y1).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=8;
//>>excludeEnd("ctx");
$15=$recv(y2).__minus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=9;
//>>excludeEnd("ctx");
$13=$recv($14).__star($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$9=$recv($10).__plus($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
dot=$recv($9)._abs();
dot;
$17=dot;
$19=self._lengthToleranceSquared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lengthToleranceSquared"]=2;
//>>excludeEnd("ctx");
$18=$recv($19).__star((0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
$16=$recv($17).__lt($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
if($core.assert($16)){
return true;
};
} else {
$20=$recv(dx).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$21=$recv(dy).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
da=$recv($20).__plus($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
da;
$22=$recv(da).__eq((0));
if($core.assert($22)){
$24=$recv(x1).__minus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=10;
//>>excludeEnd("ctx");
$23=$recv($24)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=1;
//>>excludeEnd("ctx");
$26=$recv(y1).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=11;
//>>excludeEnd("ctx");
$25=$recv($26)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=2;
//>>excludeEnd("ctx");
d=$recv($23).__plus($25);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
d;
} else {
$29=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=12;
//>>excludeEnd("ctx");
$28=$recv($29).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=8;
//>>excludeEnd("ctx");
$31=$recv(y2).__minus(y1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=13;
//>>excludeEnd("ctx");
$30=$recv($31).__star(dy);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=9;
//>>excludeEnd("ctx");
$27=$recv($28).__plus($30);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
d=$recv($27).__slash(da);
d;
$32=$recv($recv(d).__gt((0)))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(d).__lt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
if($core.assert($32)){
return true;
};
$33=$recv(d).__lt_eq((0));
if($core.assert($33)){
$35=$recv(x1).__minus(x2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=14;
//>>excludeEnd("ctx");
$34=$recv($35)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=3;
//>>excludeEnd("ctx");
$37=$recv(y1).__minus(y2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=15;
//>>excludeEnd("ctx");
$36=$recv($37)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=4;
//>>excludeEnd("ctx");
d=$recv($34).__plus($36);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=5;
//>>excludeEnd("ctx");
d;
} else {
$38=$recv(d).__gt_eq((1));
if($core.assert($38)){
$40=$recv(x2).__minus(x3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=16;
//>>excludeEnd("ctx");
$39=$recv($40)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=5;
//>>excludeEnd("ctx");
$42=$recv(y2).__minus(y3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=17;
//>>excludeEnd("ctx");
$41=$recv($42)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=6;
//>>excludeEnd("ctx");
d=$recv($39).__plus($41);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=6;
//>>excludeEnd("ctx");
d;
} else {
$45=$recv(x2).__minus(x1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=19;
//>>excludeEnd("ctx");
$46=$recv(d).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=10;
//>>excludeEnd("ctx");
$44=$recv($45).__minus($46);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=18;
//>>excludeEnd("ctx");
$43=$recv($44)._squared();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["squared"]=7;
//>>excludeEnd("ctx");
$48=$recv($recv(y2).__minus(y1)).__minus($recv(d).__star(dy));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=20;
//>>excludeEnd("ctx");
$47=$recv($48)._squared();
d=$recv($43).__plus($47);
d;
};
};
};
$49=$recv(d).__lt(self._lengthToleranceSquared());
if($core.assert($49)){
return true;
};
};
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFlatQuadBezier:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,dx:dx,dy:dy,d:d,da:da},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "isFlatQuadBezier: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09| dx dy d da |\x0a\x09\x0a\x09dx := x3-x1.\x0a\x09dy := y3-y1.\x0a\x09\x0a\x09\x22This is the area of triangle enclosing curve * 2\x22\x0a \x09d := (((x2 - x3) * dy) - ((y2 - y3) * dx)) abs.\x0a\x0a\x09d > (self lengthToleranceSquared ) ifTrue: [\x0a\x09\x09\x0a\x09\x09\x22Non-collinear case (regular one)\x22\x0a\x09\x09| dot |\x0a\x0a\x09\x09\x22if dot product is close to zero, that means we having flat curve\x22\x09\x09\x09\x0a\x09\x09dot := ( (x2-x1)*(x2-x3) + ((y1-y2)*(y2-y3)) ) abs.\x0a\x09\x09dot < (self lengthToleranceSquared * 0.5 ) ifTrue: [  ^ true ].\x0a\x09]\x0a\x09ifFalse: [ \x0a\x09\x09\x22collinear\x22\x0a\x09\x09da := dx*dx + (dy*dy).\x0a\x09\x09\x0a\x09\x09da = 0 \x22end points coincide\x22\x0a\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared  \x22pointy case\x22 ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x22the control point lies on line between endpoints?\x22\x0a\x09\x09\x09\x09d := ((x2 - x1)*dx + ((y2 - y1)*dy)) / da.\x0a\x0a\x09\x09\x09\x09(d > 0.0 and: [ d < 1.0 ] ) ifTrue: [ \x0a\x09\x09\x09\x09\x09\x22Simple collinear case, 1---2---3\x22 \x0a\x09\x09\x09\x09\x09^ true\x0a     \x09\x09\x09\x09].\x0a\x09\x09\x09\x09d <= 0.0 \x0a\x09\x09\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09d >= 1.0 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ d:= (x2-x3) squared + (y2-y3) squared ]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ d:= (x2 - x1 - (d*dx)) squared + (y2 - y1 - (d*dy)) squared ]\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x0a\x09\x09\x09d < (self lengthToleranceSquared) ifTrue: [ ^ true ]\x09\x09\x0a\x09].\x0a\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "abs", "*", "ifTrue:ifFalse:", ">", "lengthToleranceSquared", "+", "ifTrue:", "<", "=", "squared", "/", "and:", "<=", ">="]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "lengthTolerance",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@lengthTolerance"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lengthTolerance\x0a\x0a\x09^ lengthTolerance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "lengthToleranceSquared",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@lengthToleranceSquared"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lengthToleranceSquared\x0a\x0a\x09^ lengthToleranceSquared",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "lineTo:",
protocol: 'path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@endPoint"]=aPoint;
$1=$recv(self["@dest"])._lineTo_(aPoint);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "lineTo: aPoint \x0a\x0a\x09endPoint := aPoint.\x0a\x09\x0a\x09^ dest lineTo: aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lineTo:"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "moveTo:",
protocol: 'path commands',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@endPoint"]=aPoint;
self["@contourStartPt"]=self["@endPoint"];
$1=$recv(self["@dest"])._moveTo_(aPoint);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "moveTo: aPoint \x0a\x0a\x09contourStartPt := endPoint := aPoint.\x0a\x09\x0a\x09^ dest moveTo: aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveTo:"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "quadricBezierSegment:",
protocol: 'visiting',
fn: function (segment){
var self=this;
var pt1,pt2,pt3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
pt1=$recv(self["@transform"])._transform_(self["@endPoint"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transform:"]=1;
//>>excludeEnd("ctx");
pt2=$recv(self["@transform"])._transform_($recv(segment)._via());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transform:"]=2;
//>>excludeEnd("ctx");
$1=self["@transform"];
$2=$recv(segment)._endPoint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["endPoint"]=1;
//>>excludeEnd("ctx");
pt3=$recv($1)._transform_($2);
self["@endPoint"]=$recv(segment)._endPoint();
$3=$recv(pt1)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$recv(pt1)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$5=$recv(pt2)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$6=$recv(pt2)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
self._flattenQuadBezier_y1_x2_y2_x3_y3_($3,$4,$5,$6,$recv(pt3)._x(),$recv(pt3)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"quadricBezierSegment:",{segment:segment,pt1:pt1,pt2:pt2,pt3:pt3},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["segment"],
source: "quadricBezierSegment: segment\x0a\x09| pt1 pt2 pt3 |\x0a\x09\x0a\x09pt1 := transform transform: endPoint.\x0a\x09pt2 := transform transform: segment via.\x0a\x09pt3 := transform transform: segment endPoint.\x0a\x09\x0a\x09endPoint := segment endPoint.\x0a\x0a\x09self flattenQuadBezier: pt1 x y1: pt1 y x2: pt2 x y2: pt2 y x3: pt3 x y3: pt3 y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["transform:", "via", "endPoint", "flattenQuadBezier:y1:x2:y2:x3:y3:", "x", "y"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "toleranceMultiplier:",
protocol: 'accessing',
fn: function (aToleranceMultiplier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@lengthTolerance"]=aToleranceMultiplier;
self["@lengthToleranceSquared"]=$recv(self["@lengthTolerance"])._squared();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toleranceMultiplier:",{aToleranceMultiplier:aToleranceMultiplier},$globals.AthensCurveFlattener)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aToleranceMultiplier"],
source: "toleranceMultiplier: aToleranceMultiplier\x0a\x0a\x09\x22\x09\x0a\x09A tolerance multiplier is a number .. which\x0a\x09\x09if = 1 , the default error tolerance is used,\x0a\x09\x09if > 1 you will get more coarse approximation\x0a\x09\x09if < 1 you will get more finer approximation\x0a\x09\x0a\x09\x22\x0a\x09\x0a\x09lengthTolerance := aToleranceMultiplier.\x0a\x09lengthToleranceSquared := lengthTolerance squared.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["squared"]
}),
$globals.AthensCurveFlattener);

$core.addMethod(
$core.method({
selector: "transform:",
protocol: 'accessing',
fn: function (aTransform){
var self=this;
self["@transform"]=aTransform;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTransform"],
source: "transform: aTransform \x0a\x09\x22\x0a\x09- transform is an Affine matrix, used to map path geometry to screen,\x0a\x09and therefore used to calculate the error tolerance for path subdivisions\x0a\x09\x0a\x09\x0a\x09- a tolerance multiplier is a number .. which\x0a\x09\x09if = 1 , the default error tolerance is used,\x0a\x09\x09if > 1 you will get more coarse approximation\x0a\x09\x09if < 1 you will get more finer approximation\x0a\x09\x0a\x09\x22\x0a\x09\x0a\x09transform := aTransform.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCurveFlattener);


$globals.AthensCurveFlattener.klass.iVarNames = ['collinearityEps'];
});
