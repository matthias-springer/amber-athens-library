define("amber-athens/Athens-HTML-Paints", ["amber/boot", "amber-athens/Athens-Core-Paints"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-HTML-Paints');
$core.packages["Athens-HTML-Paints"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-HTML-Paints"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('AthensHTMLPaint', $globals.AthensPaint, ['fillStyle'], 'Athens-HTML-Paints');
$core.addMethod(
$core.method({
selector: "asAthensPaintOn:",
protocol: 'converting',
fn: function (anAthensCanvas){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAthensCanvas"],
source: "asAthensPaintOn: anAthensCanvas\x09\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPaint);

$core.addMethod(
$core.method({
selector: "drawString:on:",
protocol: 'drawing',
fn: function (aString,anAthensCanvas){
var self=this;
var context2D;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
context2D=$recv(anAthensCanvas)._context2D();
self._preparePaintFor_(context2D);
$recv(context2D)._beginPath();
$recv(context2D)._fillStyle_(self["@fillStyle"]);
$recv(context2D)._fillText_X_Y_(aString,(0),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas,context2D:context2D},$globals.AthensHTMLPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anAthensCanvas"],
source: "drawString: aString on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self preparePaintFor: context2D.\x0a\x09context2D beginPath.\x0a\x09\x22TODO: apply paint transform, but how?\x22\x0a\x09context2D fillStyle: fillStyle.\x0a\x09context2D fillText: aString X: 0 Y: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context2D", "preparePaintFor:", "beginPath", "fillStyle:", "fillText:X:Y:"]
}),
$globals.AthensHTMLPaint);

$core.addMethod(
$core.method({
selector: "fillPath:on:",
protocol: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
var context2D;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
context2D=$recv(anAthensCanvas)._context2D();
self._preparePaintFor_(context2D);
$recv(context2D)._beginPath();
$recv(aPath)._drawOn_(anAthensCanvas);
$recv(context2D)._push();
$recv($recv(anAthensCanvas)._pathTransform())._multiplyBy_($recv(anAthensCanvas)._paintTransform());
$recv(context2D)._fillStyle_(self["@fillStyle"]);
$recv(context2D)._fill();
$recv(context2D)._pop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},$globals.AthensHTMLPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self preparePaintFor: context2D.\x0a\x09context2D beginPath.\x0a\x09aPath drawOn: anAthensCanvas.\x0a\x09context2D push.\x0a\x09anAthensCanvas pathTransform multiplyBy: anAthensCanvas paintTransform.\x0a\x09context2D fillStyle: fillStyle.\x0a\x09context2D fill.\x0a\x09context2D pop.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context2D", "preparePaintFor:", "beginPath", "drawOn:", "push", "multiplyBy:", "pathTransform", "paintTransform", "fillStyle:", "fill", "pop"]
}),
$globals.AthensHTMLPaint);

$core.addMethod(
$core.method({
selector: "fillRectangle:on:",
protocol: 'drawing',
fn: function (rect,anAthensCanvas){
var self=this;
var context2D;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
context2D=$recv(anAthensCanvas)._context2D();
self._preparePaintFor_(context2D);
$recv(context2D)._beginPath();
$recv(context2D)._rect_(rect);
$recv(context2D)._push();
$recv($recv(anAthensCanvas)._pathTransform())._multiplyBy_($recv(anAthensCanvas)._paintTransform());
$recv(context2D)._fillStyle_(self["@fillStyle"]);
$recv(context2D)._fill();
$recv(context2D)._pop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{rect:rect,anAthensCanvas:anAthensCanvas,context2D:context2D},$globals.AthensHTMLPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rect", "anAthensCanvas"],
source: "fillRectangle: rect on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self preparePaintFor: context2D.\x0a\x09context2D beginPath.\x0a\x09context2D rect: rect.\x0a\x09context2D push.\x0a\x09anAthensCanvas pathTransform multiplyBy: anAthensCanvas paintTransform.\x0a\x09context2D fillStyle: fillStyle.\x0a\x09context2D fill.\x0a\x09context2D pop.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context2D", "preparePaintFor:", "beginPath", "rect:", "push", "multiplyBy:", "pathTransform", "paintTransform", "fillStyle:", "fill", "pop"]
}),
$globals.AthensHTMLPaint);

$core.addMethod(
$core.method({
selector: "fillStyle",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@fillStyle"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fillStyle\x0a\x09^ fillStyle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPaint);

$core.addMethod(
$core.method({
selector: "preparePaintFor:",
protocol: 'drawing',
fn: function (context2D){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},$globals.AthensHTMLPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["context2D"],
source: "preparePaintFor: context2D\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensHTMLPaint);



$core.addClass('AthensHTMLGradientPaint', $globals.AthensHTMLPaint, ['start', 'stop', 'innerRadius', 'outerRadius', 'colorRamp'], 'Athens-HTML-Paints');
$core.addMethod(
$core.method({
selector: "colorRamp:",
protocol: 'accessing',
fn: function (aColorRamp){
var self=this;
self["@colorRamp"]=aColorRamp;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColorRamp"],
source: "colorRamp: aColorRamp\x0a\x09colorRamp := aColorRamp.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLGradientPaint);

$core.addMethod(
$core.method({
selector: "innerRadius:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@innerRadius"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "innerRadius: aNumber\x0a\x09innerRadius := aNumber.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLGradientPaint);

$core.addMethod(
$core.method({
selector: "outerRadius:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@outerRadius"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "outerRadius: aNumber\x0a\x09outerRadius := aNumber.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLGradientPaint);

$core.addMethod(
$core.method({
selector: "preparePaintFor:",
protocol: 'drawing',
fn: function (context2D){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@innerRadius"]).__eq_eq(nil);
if($core.assert($1)){
self["@fillStyle"]=$recv(context2D)._createLinearGradientFrom_to_(self["@start"],self["@stop"]);
self["@fillStyle"];
} else {
self["@fillStyle"]=$recv(context2D)._createRadialGradientFrom_with_to_with_(self["@start"],self["@innerRadius"],self["@stop"],self["@outerRadius"]);
self["@fillStyle"];
};
$recv(self["@colorRamp"])._keysAndValuesDo_((function(pos,color){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@fillStyle"])._addColorStopAt_color_(pos,$recv(color)._rgbaString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({pos:pos,color:color},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},$globals.AthensHTMLGradientPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["context2D"],
source: "preparePaintFor: context2D\x0a\x09innerRadius == nil\x0a\x09\x09ifTrue: [fillStyle := context2D createLinearGradientFrom: start to: stop]\x0a\x09\x09ifFalse: [fillStyle := context2D createRadialGradientFrom: start with: innerRadius to: stop with: outerRadius].\x0a\x09\x09\x0a\x09colorRamp keysAndValuesDo: [:pos :color |\x0a\x09\x09fillStyle addColorStopAt: pos color: color rgbaString].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "==", "createLinearGradientFrom:to:", "createRadialGradientFrom:with:to:with:", "keysAndValuesDo:", "addColorStopAt:color:", "rgbaString"]
}),
$globals.AthensHTMLGradientPaint);

$core.addMethod(
$core.method({
selector: "start:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@start"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "start: aPoint\x0a\x09start := aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLGradientPaint);

$core.addMethod(
$core.method({
selector: "stop:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@stop"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "stop: aPoint\x0a\x09stop := aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLGradientPaint);


$core.addMethod(
$core.method({
selector: "createLinearGradient:start:stop:",
protocol: 'instance creation',
fn: function (aColorRamp,aStartPoint,aStopPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._start_(aStartPoint);
$recv($2)._stop_(aStopPoint);
$recv($2)._initialize();
$recv($2)._colorRamp_(aColorRamp);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint},$globals.AthensHTMLGradientPaint.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColorRamp", "aStartPoint", "aStopPoint"],
source: "createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint\x0a\x09^ self basicNew\x0a\x09\x09start: aStartPoint;\x0a\x09\x09stop: aStopPoint;\x0a\x09\x09initialize;\x0a\x09\x09colorRamp: aColorRamp;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["start:", "basicNew", "stop:", "initialize", "colorRamp:", "yourself"]
}),
$globals.AthensHTMLGradientPaint.klass);

$core.addMethod(
$core.method({
selector: "radialBetween:extending:and:extending:withColorRamp:",
protocol: 'instance creation',
fn: function (origin,innerRadius,outerOrigin,outerRadius,aColorRamp){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._start_(origin);
$recv($2)._stop_(outerOrigin);
$recv($2)._innerRadius_(innerRadius);
$recv($2)._outerRadius_(outerRadius);
$recv($2)._initialize();
$recv($2)._colorRamp_(aColorRamp);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"radialBetween:extending:and:extending:withColorRamp:",{origin:origin,innerRadius:innerRadius,outerOrigin:outerOrigin,outerRadius:outerRadius,aColorRamp:aColorRamp},$globals.AthensHTMLGradientPaint.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["origin", "innerRadius", "outerOrigin", "outerRadius", "aColorRamp"],
source: "radialBetween: origin extending: innerRadius and: outerOrigin  extending: outerRadius withColorRamp: aColorRamp\x0a\x09^ self basicNew\x0a\x09\x09start: origin;\x0a\x09\x09stop: outerOrigin;\x0a\x09\x09innerRadius: innerRadius;\x0a\x09\x09outerRadius: outerRadius;\x0a\x09\x09initialize;\x0a\x09\x09colorRamp: aColorRamp;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["start:", "basicNew", "stop:", "innerRadius:", "outerRadius:", "initialize", "colorRamp:", "yourself"]
}),
$globals.AthensHTMLGradientPaint.klass);


$core.addClass('AthensHTMLPatternPaint', $globals.AthensHTMLPaint, ['repeatMode', 'anAthensCanvas', 'patternSource'], 'Athens-HTML-Paints');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
self["@repeatMode"]="no-repeat";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09repeatMode := 'no-repeat'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPatternPaint);

$core.addMethod(
$core.method({
selector: "noRepeat",
protocol: 'drawing',
fn: function (){
var self=this;
self["@repeatMode"]="no-repeat";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noRepeat\x0a\x09repeatMode := 'no-repeat'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPatternPaint);

$core.addMethod(
$core.method({
selector: "preparePaintFor:",
protocol: 'drawing',
fn: function (context2D){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@fillStyle"]=$recv(context2D)._createPattern_repeat_(self["@patternSource"],self["@repeatMode"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},$globals.AthensHTMLPatternPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["context2D"],
source: "preparePaintFor: context2D\x0a\x09fillStyle := context2D createPattern: patternSource repeat: repeatMode.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createPattern:repeat:"]
}),
$globals.AthensHTMLPatternPaint);

$core.addMethod(
$core.method({
selector: "repeat",
protocol: 'drawing',
fn: function (){
var self=this;
self["@repeatMode"]="repeat";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "repeat\x0a\x09repeatMode := 'repeat'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPatternPaint);



$core.addClass('AthensHTMLBitmapPaint', $globals.AthensHTMLPatternPaint, [], 'Athens-HTML-Paints');
$core.addMethod(
$core.method({
selector: "bitmap:",
protocol: 'accessing',
fn: function (aBitmap){
var self=this;
self["@patternSource"]=aBitmap;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBitmap"],
source: "bitmap: aBitmap\x0a\x09patternSource := aBitmap.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLBitmapPaint);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@patternSource"])._height();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.AthensHTMLBitmapPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ patternSource height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height"]
}),
$globals.AthensHTMLBitmapPaint);

$core.addMethod(
$core.method({
selector: "loadingCallback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@patternSource"])._complete();
if($core.assert($1)){
$recv(aBlock)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
} else {
$recv(self["@patternSource"])._onLoad_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadingCallback:",{aBlock:aBlock},$globals.AthensHTMLBitmapPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "loadingCallback: aBlock\x0a\x09patternSource complete\x0a\x09\x09ifTrue: [aBlock value: self]\x0a\x09\x09ifFalse: [patternSource onLoad: [aBlock value: self]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "complete", "value:", "onLoad:"]
}),
$globals.AthensHTMLBitmapPaint);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@patternSource"])._width();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.AthensHTMLBitmapPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ patternSource width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width"]
}),
$globals.AthensHTMLBitmapPaint);


$core.addMethod(
$core.method({
selector: "fromImage:",
protocol: 'instance creation',
fn: function (aBitmap){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._bitmap_(aBitmap);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromImage:",{aBitmap:aBitmap},$globals.AthensHTMLBitmapPaint.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBitmap"],
source: "fromImage: aBitmap\x0a\x09^ self new\x0a\x09\x09bitmap: aBitmap;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bitmap:", "new", "yourself"]
}),
$globals.AthensHTMLBitmapPaint.klass);

$core.addMethod(
$core.method({
selector: "fromImage:afterLoading:",
protocol: 'instance creation',
fn: function (aBitmap,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._bitmap_(aBitmap);
$recv($2)._loadingCallback_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromImage:afterLoading:",{aBitmap:aBitmap,aBlock:aBlock},$globals.AthensHTMLBitmapPaint.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBitmap", "aBlock"],
source: "fromImage: aBitmap afterLoading: aBlock\x0a\x09^ self new\x0a\x09\x09bitmap: aBitmap;\x0a\x09\x09loadingCallback: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bitmap:", "new", "loadingCallback:", "yourself"]
}),
$globals.AthensHTMLBitmapPaint.klass);


$core.addClass('AthensHTMLPatternSurfacePaint', $globals.AthensHTMLPatternPaint, ['surface'], 'Athens-HTML-Paints');
$core.addMethod(
$core.method({
selector: "surface:",
protocol: 'accessing',
fn: function (aSurface){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@patternSource"]=$recv(aSurface)._canvasTag();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},$globals.AthensHTMLPatternSurfacePaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSurface"],
source: "surface: aSurface\x0a\x09patternSource := aSurface canvasTag.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["canvasTag"]
}),
$globals.AthensHTMLPatternSurfacePaint);


$core.addMethod(
$core.method({
selector: "forSurface:",
protocol: 'instance creation',
fn: function (aSurface){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._surface_(aSurface);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forSurface:",{aSurface:aSurface},$globals.AthensHTMLPatternSurfacePaint.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSurface"],
source: "forSurface: aSurface\x0a\x09^ self new\x0a\x09\x09surface: aSurface;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["surface:", "new", "yourself"]
}),
$globals.AthensHTMLPatternSurfacePaint.klass);


$core.addClass('AthensHTMLSolidPaint', $globals.AthensHTMLPaint, ['color'], 'Athens-HTML-Paints');
$core.addMethod(
$core.method({
selector: "color:",
protocol: 'accessing',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@fillStyle"]=$recv(aColor)._rgbaString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},$globals.AthensHTMLSolidPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "color: aColor\x0a\x09fillStyle := aColor rgbaString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rgbaString"]
}),
$globals.AthensHTMLSolidPaint);

$core.addMethod(
$core.method({
selector: "drawString:on:",
protocol: 'drawing',
fn: function (aString,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(anAthensCanvas)._context2D();
$recv($1)._fillStyle_(self["@fillStyle"]);
$2=$recv($1)._fillText_X_Y_(aString,(0),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas},$globals.AthensHTMLSolidPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anAthensCanvas"],
source: "drawString: aString on: anAthensCanvas\x0a\x09anAthensCanvas context2D\x0a\x09\x09fillStyle: fillStyle;\x0a\x09\x09fillText: aString X: 0 Y: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fillStyle:", "context2D", "fillText:X:Y:"]
}),
$globals.AthensHTMLSolidPaint);

$core.addMethod(
$core.method({
selector: "fillPath:on:",
protocol: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
var context2D;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
context2D=$recv(anAthensCanvas)._context2D();
$recv(context2D)._fillStyle_(self["@fillStyle"]);
$recv(aPath)._drawOn_(anAthensCanvas);
$recv(context2D)._fill();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},$globals.AthensHTMLSolidPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09context2D fillStyle: fillStyle.\x0a\x09aPath drawOn: anAthensCanvas.\x0a\x09context2D fill.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context2D", "fillStyle:", "drawOn:", "fill"]
}),
$globals.AthensHTMLSolidPaint);

$core.addMethod(
$core.method({
selector: "fillRectangle:on:",
protocol: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(anAthensCanvas)._context2D();
$recv($1)._fillStyle_(self["@fillStyle"]);
$2=$recv($1)._fillRect_(aRect);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},$globals.AthensHTMLSolidPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09anAthensCanvas context2D\x0a\x09\x09fillStyle: fillStyle;\x0a\x09\x09fillRect: aRect.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fillStyle:", "context2D", "fillRect:"]
}),
$globals.AthensHTMLSolidPaint);

$core.addMethod(
$core.method({
selector: "preparePaintFor:",
protocol: 'drawing',
fn: function (context2D){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["context2D"],
source: "preparePaintFor: context2D\x0a\x09\x22nothing to do\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLSolidPaint);



$core.addClass('AthensHTMLStrokePaint', $globals.AthensStrokePaint, ['dashOffset', 'dashLengths'], 'Athens-HTML-Paints');
$core.addMethod(
$core.method({
selector: "capButt",
protocol: 'setting cap styles',
fn: function (){
var self=this;
self["@capStyle"]="butt";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "capButt\x0a\x09capStyle := 'butt'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "capRound",
protocol: 'setting cap styles',
fn: function (){
var self=this;
self["@capStyle"]="round";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "capRound\x0a\x09capStyle := 'round'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "capSquare",
protocol: 'setting cap styles',
fn: function (){
var self=this;
self["@capStyle"]="square";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "capSquare\x0a\x09capStyle := 'square'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "dashes:offset:",
protocol: 'accessing',
fn: function (anAlternateCollectionOfLenghts,anOffset){
var self=this;
self["@dashLengths"]=anAlternateCollectionOfLenghts;
self["@dashOffset"]=anOffset;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAlternateCollectionOfLenghts", "anOffset"],
source: "dashes: anAlternateCollectionOfLenghts offset: anOffset\x0a\x09dashLengths := anAlternateCollectionOfLenghts.\x0a\x09dashOffset := anOffset.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "fillPath:on:",
protocol: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(anAthensCanvas)._context2D();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context2D"]=1;
//>>excludeEnd("ctx");
$recv($1)._strokeStyle_($recv(self["@fillPaint"])._fillStyle());
$recv($1)._lineWidth_(self["@width"]);
$recv($1)._lineJoin_(self["@joinStyle"]);
$recv($1)._lineCap_(self["@capStyle"]);
$recv($1)._lineDash_(self["@dashLengths"]);
$2=$recv($1)._lineDashOffset_(self["@dashOffset"]);
$recv(aPath)._drawOn_(anAthensCanvas);
$recv($recv(anAthensCanvas)._context2D())._stroke();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},$globals.AthensHTMLStrokePaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09anAthensCanvas context2D\x0a\x09\x09strokeStyle: fillPaint fillStyle;\x0a\x09\x09lineWidth: width;\x0a\x09\x09lineJoin: joinStyle;\x0a\x09\x09lineCap: capStyle;\x0a\x09\x09lineDash: dashLengths;\x0a\x09\x09lineDashOffset: dashOffset.\x0a\x09aPath drawOn: anAthensCanvas.\x0a\x09anAthensCanvas context2D stroke.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strokeStyle:", "context2D", "fillStyle", "lineWidth:", "lineJoin:", "lineCap:", "lineDash:", "lineDashOffset:", "drawOn:", "stroke"]
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "fillRectangle:on:",
protocol: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(anAthensCanvas)._context2D();
$recv($1)._strokeStyle_($recv(self["@fillPaint"])._fillStyle());
$recv($1)._lineWidth_(self["@width"]);
$recv($1)._lineJoin_(self["@joinStyle"]);
$recv($1)._lineCap_(self["@capStyle"]);
$recv($1)._lineDash_(self["@dashLengths"]);
$recv($1)._lineDashOffset_(self["@dashOffset"]);
$2=$recv($1)._strokeRect_(aRect);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},$globals.AthensHTMLStrokePaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09anAthensCanvas context2D\x0a\x09\x09strokeStyle: fillPaint fillStyle;\x0a\x09\x09lineWidth: width;\x0a\x09\x09lineJoin: joinStyle;\x0a\x09\x09lineCap: capStyle;\x0a\x09\x09lineDash: dashLengths;\x0a\x09\x09lineDashOffset: dashOffset;\x0a\x09\x09strokeRect: aRect.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strokeStyle:", "context2D", "fillStyle", "lineWidth:", "lineJoin:", "lineCap:", "lineDash:", "lineDashOffset:", "strokeRect:"]
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AthensHTMLStrokePaint.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@dashLengths"]=$recv($OrderedCollection())._new();
self["@width"]=(1);
self["@joinStyle"]=nil;
self["@capStyle"]=self["@joinStyle"];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensHTMLStrokePaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09dashLengths := OrderedCollection new.\x0a\x09width := 1.\x0a\x09capStyle := joinStyle := nil.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "joinBevel",
protocol: 'setting join styles',
fn: function (){
var self=this;
self["@joinStyle"]="bevel";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "joinBevel\x0a\x09joinStyle := 'bevel'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "joinMiter",
protocol: 'setting join styles',
fn: function (){
var self=this;
self["@joinStyle"]="miter";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "joinMiter\x0a\x09joinStyle := 'miter'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLStrokePaint);

$core.addMethod(
$core.method({
selector: "joinRound",
protocol: 'setting join styles',
fn: function (){
var self=this;
self["@joinStyle"]="round";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "joinRound\x0a\x09joinStyle := 'round'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLStrokePaint);


});
