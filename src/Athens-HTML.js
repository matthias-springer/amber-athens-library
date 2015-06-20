define("amber-athens/Athens-HTML", ["amber/boot", "amber-athens/Athens-Core", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-HTML');
$core.packages["Athens-HTML"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-HTML"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('AthensHTMLCanvas', $globals.AthensCanvas, ['context2D', 'pathTransform', 'paintTransform', 'currentClipRect', 'font'], 'Athens-HTML');
$core.addMethod(
$core.method({
selector: "clipBy:during:",
protocol: 'clipping',
fn: function (aShape,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._push();
$recv(self["@context2D"])._beginPath();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginPath"]=1;
//>>excludeEnd("ctx");
$recv(aShape)._drawOn_(self);
$recv(self["@context2D"])._clip();
$recv(self["@context2D"])._beginPath();
$recv(aBlock)._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@context2D"])._pop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clipBy:during:",{aShape:aShape,aBlock:aBlock},$globals.AthensHTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aShape", "aBlock"],
source: "clipBy: aShape during: aBlock\x0a\x09context2D push.\x0a\x09context2D beginPath.\x0a\x09aShape drawOn: self.\x0a\x09context2D clip.\x0a\x09context2D beginPath.\x0a\x09aBlock ensure: [context2D pop].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["push", "beginPath", "drawOn:", "clip", "ensure:", "pop"]
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "context2D",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context2D"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context2D\x0a\x09^ context2D",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "context2D:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context2D"]=aContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context2D: aContext\x0a\x09context2D := aContext.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "createPath:",
protocol: 'creation',
fn: function (aPathCreatingBlock){
var self=this;
function $AthensHTMLPath(){return $globals.AthensHTMLPath||(typeof AthensHTMLPath=="undefined"?nil:AthensHTMLPath)}
function $AthensSimplePathBuilder(){return $globals.AthensSimplePathBuilder||(typeof AthensSimplePathBuilder=="undefined"?nil:AthensSimplePathBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensHTMLPath())._segment_($recv($AthensSimplePathBuilder())._createPath_(aPathCreatingBlock));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},$globals.AthensHTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPathCreatingBlock"],
source: "createPath: aPathCreatingBlock\x0a\x09^ AthensHTMLPath segment: (AthensSimplePathBuilder createPath: aPathCreatingBlock)",
referencedClasses: ["AthensHTMLPath", "AthensSimplePathBuilder"],
//>>excludeEnd("ide");
messageSends: ["segment:", "createPath:"]
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "drawString:",
protocol: 'drawing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._font_($recv(self["@font"])._asHTMLString());
self._drawShape_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawString:",{aString:aString},$globals.AthensHTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "drawString: aString\x0a\x09context2D font: font asHTMLString.\x0a\x09self drawShape: aString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["font:", "asHTMLString", "drawShape:"]
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "drawString:from:to:",
protocol: 'drawing',
fn: function (aString,start,end){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._drawString_($recv(aString)._copyFrom_to_(start,end));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawString:from:to:",{aString:aString,start:start,end:end},$globals.AthensHTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "start", "end"],
source: "drawString: aString from: start to: end\x0a\x09^ self drawString: (aString copyFrom: start to: end)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawString:", "copyFrom:to:"]
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "measureStringWidth:",
protocol: 'drawing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(self["@context2D"])._font_($recv(self["@font"])._asHTMLString());
$1=$recv(self["@context2D"])._measureStringWidth_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"measureStringWidth:",{aString:aString},$globals.AthensHTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "measureStringWidth: aString\x0a\x09context2D font: font asHTMLString.\x0a\x09^ context2D measureStringWidth: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["font:", "asHTMLString", "measureStringWidth:"]
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "newPath",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@surface']['@context2D'].beginPath(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newPath",{},$globals.AthensHTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newPath\x0a\x09< self['@surface']['@context2D'].beginPath(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "paintTransform",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@paintTransform"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "paintTransform\x0a\x09^ paintTransform",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "pathTransform",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@pathTransform"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pathTransform\x0a\x09^ pathTransform",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "setFont:",
protocol: 'accessing',
fn: function (aFont){
var self=this;
self["@font"]=aFont;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFont"],
source: "setFont: aFont\x0a\x09font := aFont.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLCanvas);

$core.addMethod(
$core.method({
selector: "surface:",
protocol: 'accessing',
fn: function (anHTMLSurface){
var self=this;
function $AthensHTMLTransformation(){return $globals.AthensHTMLTransformation||(typeof AthensHTMLTransformation=="undefined"?nil:AthensHTMLTransformation)}
function $AthensAffineTransform(){return $globals.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $AthensHTMLPaintMode(){return $globals.AthensHTMLPaintMode||(typeof AthensHTMLPaintMode=="undefined"?nil:AthensHTMLPaintMode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@surface"]=anHTMLSurface;
self["@pathTransform"]=$recv($AthensHTMLTransformation())._on_(self["@surface"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:"]=1;
//>>excludeEnd("ctx");
self["@paintTransform"]=$recv($AthensAffineTransform())._new();
self["@paintMode"]=$recv($AthensHTMLPaintMode())._on_(self["@surface"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},$globals.AthensHTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anHTMLSurface"],
source: "surface: anHTMLSurface\x0a\x09surface := anHTMLSurface.\x0a\x09pathTransform := AthensHTMLTransformation on: surface.\x0a\x09paintTransform := AthensAffineTransform new.\x0a\x09paintMode := AthensHTMLPaintMode on: surface.",
referencedClasses: ["AthensHTMLTransformation", "AthensAffineTransform", "AthensHTMLPaintMode"],
//>>excludeEnd("ide");
messageSends: ["on:", "new"]
}),
$globals.AthensHTMLCanvas);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anHTMLSurface){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._surface_(anHTMLSurface);
$recv($2)._context2D_($recv(anHTMLSurface)._context2D());
$recv($2)._initialize();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},$globals.AthensHTMLCanvas.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anHTMLSurface"],
source: "on: anHTMLSurface\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09context2D: anHTMLSurface context2D;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["surface:", "basicNew", "context2D:", "context2D", "initialize", "yourself"]
}),
$globals.AthensHTMLCanvas.klass);


$core.addClass('AthensHTMLPaintMode', $globals.AthensPaintMode, ['context2D', 'surface'], 'Athens-HTML');
$core.addMethod(
$core.method({
selector: "atop",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("source-atop");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atop",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atop\x0a\x09context2D globalCompositeOperation: 'source-atop'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "availableModes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["atop", "darken", "destAtop", "destIn", "destOut", "destOver", "in", "lighten", "out", "over", "xor"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availableModes\x0a\x09^ #(atop darken destAtop destIn destOut destOver in lighten out over xor)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "darken",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("darker");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"darken",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "darken\x0a\x09context2D globalCompositeOperation: 'darker'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "destAtop",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("destination-atop");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destAtop",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destAtop\x0a\x09context2D globalCompositeOperation: 'destination-atop'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "destIn",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("destination-in");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destIn",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destIn\x0a\x09context2D globalCompositeOperation: 'destination-in'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "destOut",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("destination-out");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destOut",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destOut\x0a\x09context2D globalCompositeOperation: 'destination-out'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "destOver",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("destination-over");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destOver",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destOver\x0a\x09context2D globalCompositeOperation: 'destination-over'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "in",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("source-in");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"in",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "in\x0a\x09context2D globalCompositeOperation: 'source-in'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "lighten",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("lighter");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lighten",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lighten\x0a\x09context2D globalCompositeOperation: 'lighter'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "out",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("source-out");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"out",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "out\x0a\x09context2D globalCompositeOperation: 'source-out'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "over",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("source-over");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"over",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "over\x0a\x09context2D globalCompositeOperation: 'source-over'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "restoreAfter:",
protocol: 'convenience',
fn: function (aBlock){
var self=this;
var previous;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
previous=$recv(self["@context2D"])._globalCompositeOperation();
$recv(aBlock)._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@context2D"])._globalCompositeOperation_(previous);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock,previous:previous},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09|previous|\x0a\x09previous := context2D globalCompositeOperation.\x0a\x09aBlock ensure: [context2D globalCompositeOperation: previous].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation", "ensure:", "globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "surface:",
protocol: 'accessing',
fn: function (aSurface){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@surface"]=aSurface;
self["@context2D"]=$recv(aSurface)._context2D();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.\x0a\x09context2D := aSurface context2D.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context2D"]
}),
$globals.AthensHTMLPaintMode);

$core.addMethod(
$core.method({
selector: "xor",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("xor");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xor",{},$globals.AthensHTMLPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xor\x0a\x09context2D globalCompositeOperation: 'xor'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalCompositeOperation:"]
}),
$globals.AthensHTMLPaintMode);


$core.addMethod(
$core.method({
selector: "on:",
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
}, function($ctx1) {$ctx1.fill(self,"on:",{aSurface:aSurface},$globals.AthensHTMLPaintMode.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSurface"],
source: "on: aSurface\x0a\x09^ self new\x0a\x09\x09surface: aSurface;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["surface:", "new", "yourself"]
}),
$globals.AthensHTMLPaintMode.klass);


$core.addClass('AthensHTMLSurface', $globals.AthensSurface, ['extent', 'canvasTag', 'context2D', 'athensCanvas', 'boundsRect', 'transparentColor'], 'Athens-HTML');
$core.addMethod(
$core.method({
selector: "appendToBrush:",
protocol: 'adding',
fn: function (aTagBrush){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._appendToJQuery_($recv(aTagBrush)._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09self appendToJQuery: aTagBrush asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "appendToJQuery:",
protocol: 'adding',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._renderOn_($recv($HTMLCanvas())._onJQuery_(aJQuery));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self renderOn: (HTMLCanvas onJQuery: aJQuery)",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "onJQuery:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "asAthensPaintOn:",
protocol: 'converting',
fn: function (aCanvas){
var self=this;
function $AthensHTMLPatternSurfacePaint(){return $globals.AthensHTMLPatternSurfacePaint||(typeof AthensHTMLPatternSurfacePaint=="undefined"?nil:AthensHTMLPatternSurfacePaint)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensHTMLPatternSurfacePaint())._forSurface_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCanvas"],
source: "asAthensPaintOn: aCanvas\x0a\x09^ AthensHTMLPatternSurfacePaint forSurface: self",
referencedClasses: ["AthensHTMLPatternSurfacePaint"],
//>>excludeEnd("ide");
messageSends: ["forSurface:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "canvasTag",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@canvasTag"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canvasTag\x0a\x09^ canvasTag",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "canvasTag:",
protocol: 'accessing',
fn: function (aTagBrush){
var self=this;
self["@canvasTag"]=aTagBrush;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "canvasTag: aTagBrush\x0a\x09canvasTag := aTagBrush",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "clear",
protocol: 'drawing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._clear_(self["@transparentColor"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09self clear: transparentColor.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clear:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "clear:",
protocol: 'drawing',
fn: function (clearPaint){
var self=this;
var canvas;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
canvas=self["@currentCanvas"];
$1=$recv(canvas)._pathTransform();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pathTransform"]=1;
//>>excludeEnd("ctx");
$recv($1)._restoreAfter_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(canvas)._pathTransform())._loadIdentity();
return $recv($recv(canvas)._paintMode())._restoreAfter_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(self["@context2D"])._globalCompositeOperation_("source-over");
$recv(self["@context2D"])._clearRect_($recv((0).__at((0)))._corner_(self["@extent"]));
$recv(canvas)._setPaint_(clearPaint);
return $recv(canvas)._drawShape_(self["@boundsRect"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["restoreAfter:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear:",{clearPaint:clearPaint,canvas:canvas},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["clearPaint"],
source: "clear: clearPaint\x0a\x09|canvas|\x0a\x09canvas := currentCanvas.\x0a\x09canvas pathTransform restoreAfter: [\x0a\x09\x09canvas pathTransform loadIdentity.\x0a\x09\x09canvas paintMode restoreAfter: [\x0a\x09\x09\x09context2D globalCompositeOperation: 'source-over'.\x0a\x09\x09\x09context2D clearRect: (0@0 corner: extent).\x0a\x09\x09\x09canvas setPaint: clearPaint.\x0a\x09\x09\x09canvas drawShape: boundsRect]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["restoreAfter:", "pathTransform", "loadIdentity", "paintMode", "globalCompositeOperation:", "clearRect:", "corner:", "@", "setPaint:", "drawShape:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "context2D",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context2D"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context2D\x0a\x09^ context2D",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "createBitmapPaint:",
protocol: 'paints',
fn: function (aBitmap){
var self=this;
function $AthensHTMLBitmapPaint(){return $globals.AthensHTMLBitmapPaint||(typeof AthensHTMLBitmapPaint=="undefined"?nil:AthensHTMLBitmapPaint)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensHTMLBitmapPaint())._fromImage_(aBitmap);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createBitmapPaint:",{aBitmap:aBitmap},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBitmap"],
source: "createBitmapPaint: aBitmap\x0a\x09^ AthensHTMLBitmapPaint fromImage: aBitmap",
referencedClasses: ["AthensHTMLBitmapPaint"],
//>>excludeEnd("ide");
messageSends: ["fromImage:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "createBitmapPaint:afterLoading:",
protocol: 'paints',
fn: function (aBitmap,aBlock){
var self=this;
function $AthensHTMLBitmapPaint(){return $globals.AthensHTMLBitmapPaint||(typeof AthensHTMLBitmapPaint=="undefined"?nil:AthensHTMLBitmapPaint)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensHTMLBitmapPaint())._fromImage_afterLoading_(aBitmap,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createBitmapPaint:afterLoading:",{aBitmap:aBitmap,aBlock:aBlock},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBitmap", "aBlock"],
source: "createBitmapPaint: aBitmap afterLoading: aBlock\x0a\x09^ AthensHTMLBitmapPaint fromImage: aBitmap afterLoading: aBlock",
referencedClasses: ["AthensHTMLBitmapPaint"],
//>>excludeEnd("ide");
messageSends: ["fromImage:afterLoading:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "createLinearGradient:start:stop:",
protocol: 'paints',
fn: function (aColorRamp,aStartPoint,aStopPoint){
var self=this;
function $AthensHTMLGradientPaint(){return $globals.AthensHTMLGradientPaint||(typeof AthensHTMLGradientPaint=="undefined"?nil:AthensHTMLGradientPaint)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensHTMLGradientPaint())._createLinearGradient_start_stop_(aColorRamp,aStartPoint,aStopPoint);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColorRamp", "aStartPoint", "aStopPoint"],
source: "createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint\x0a\x09^ AthensHTMLGradientPaint \x0a\x09\x09createLinearGradient: aColorRamp \x0a\x09\x09start: aStartPoint \x0a\x09\x09stop: aStopPoint",
referencedClasses: ["AthensHTMLGradientPaint"],
//>>excludeEnd("ide");
messageSends: ["createLinearGradient:start:stop:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "createPath:",
protocol: 'creation',
fn: function (aPathCreatingBlock){
var self=this;
function $AthensHTMLPath(){return $globals.AthensHTMLPath||(typeof AthensHTMLPath=="undefined"?nil:AthensHTMLPath)}
function $AthensSimplePathBuilder(){return $globals.AthensSimplePathBuilder||(typeof AthensSimplePathBuilder=="undefined"?nil:AthensSimplePathBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensHTMLPath())._segment_($recv($AthensSimplePathBuilder())._createPath_(aPathCreatingBlock));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPathCreatingBlock"],
source: "createPath: aPathCreatingBlock\x0a\x09^ AthensHTMLPath segment: (AthensSimplePathBuilder createPath: aPathCreatingBlock)",
referencedClasses: ["AthensHTMLPath", "AthensSimplePathBuilder"],
//>>excludeEnd("ide");
messageSends: ["segment:", "createPath:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "createRadialGradient:center:radius:focalPoint:",
protocol: 'paints',
fn: function (colorRamp,aCenter,aRadius,fp){
var self=this;
function $AthensHTMLGradientPaint(){return $globals.AthensHTMLGradientPaint||(typeof AthensHTMLGradientPaint=="undefined"?nil:AthensHTMLGradientPaint)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensHTMLGradientPaint())._radialBetween_extending_and_extending_withColorRamp_(fp,(0),aCenter,aRadius,colorRamp);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:focalPoint:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius,fp:fp},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["colorRamp", "aCenter", "aRadius", "fp"],
source: "createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: fp\x0a\x09^AthensHTMLGradientPaint\x09\x0a\x09\x09radialBetween: fp\x0a\x09\x09extending: 0\x0a\x09\x09and: aCenter\x0a\x09\x09extending: aRadius\x0a\x09\x09withColorRamp: colorRamp",
referencedClasses: ["AthensHTMLGradientPaint"],
//>>excludeEnd("ide");
messageSends: ["radialBetween:extending:and:extending:withColorRamp:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "createSolidColorPaint:",
protocol: 'paints',
fn: function (aColor){
var self=this;
function $AthensHTMLSolidPaint(){return $globals.AthensHTMLSolidPaint||(typeof AthensHTMLSolidPaint=="undefined"?nil:AthensHTMLSolidPaint)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($AthensHTMLSolidPaint())._new();
$recv($2)._color_(aColor);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createSolidColorPaint:",{aColor:aColor},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "createSolidColorPaint: aColor \x0a\x09^ AthensHTMLSolidPaint new \x0a\x09\x09color: aColor;\x0a\x09\x09yourself",
referencedClasses: ["AthensHTMLSolidPaint"],
//>>excludeEnd("ide");
messageSends: ["color:", "new", "yourself"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "createStrokePaintFor:",
protocol: 'paints',
fn: function (aPaint){
var self=this;
function $AthensHTMLStrokePaint(){return $globals.AthensHTMLStrokePaint||(typeof AthensHTMLStrokePaint=="undefined"?nil:AthensHTMLStrokePaint)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($AthensHTMLStrokePaint())._new();
$recv($2)._fillPaint_(aPaint);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createStrokePaintFor:",{aPaint:aPaint},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint"],
source: "createStrokePaintFor: aPaint\x0a\x09^ AthensHTMLStrokePaint new \x0a\x09\x09fillPaint: aPaint;\x0a\x09\x09yourself",
referencedClasses: ["AthensHTMLStrokePaint"],
//>>excludeEnd("ide");
messageSends: ["fillPaint:", "new", "yourself"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "drawDuring:",
protocol: 'drawing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@currentCanvas"]=self["@athensCanvas"];
self._setDefaults();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self["@currentCanvas"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
self["@currentCanvas"]=nil;
return self["@currentCanvas"];

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "drawDuring: aBlock\x0a\x09currentCanvas := athensCanvas.\x0a\x09self setDefaults.\x0a\x09[aBlock value: currentCanvas] ensure: [currentCanvas := nil].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setDefaults", "ensure:", "value:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "extent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@extent"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "extent\x0a\x09^ extent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "extent:",
protocol: 'accessing',
fn: function (anExtent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@extent"]=anExtent;
self["@boundsRect"]=$recv((0).__at((0)))._corner_(anExtent);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anExtent"],
source: "extent: anExtent\x0a\x09extent := anExtent.\x0a\x09boundsRect := 0@0 corner: anExtent.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["corner:", "@"]
}),
$globals.AthensHTMLSurface);

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
$1=$recv(self["@extent"])._y();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ extent y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Color(){return $globals.Color||(typeof Color=="undefined"?nil:Color)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@transparentColor"]=$recv($Color())._transparent();
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AthensHTMLSurface.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._initializeCanvas();
$recv(self["@canvasTag"])._height_(self._height());
$recv(self["@canvasTag"])._width_(self._width());
self["@context2D"]=$recv(self["@canvasTag"])._getContext_("2d");
self["@athensCanvas"]=self._newCanvas();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09transparentColor := Color transparent.\x0a\x09super initialize.\x0a\x09self initializeCanvas.\x0a\x09canvasTag height: self height.\x0a\x09canvasTag width: self width.\x0a\x09context2D := canvasTag getContext: '2d'.\x0a\x09athensCanvas := self newCanvas.",
referencedClasses: ["Color"],
//>>excludeEnd("ide");
messageSends: ["transparent", "initialize", "initializeCanvas", "height:", "height", "width:", "width", "getContext:", "newCanvas"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "initializeCanvas",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 self['@canvasTag'] = document.createElement('canvas'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeCanvas",{},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeCanvas\x0a\x09< self['@canvasTag'] = document.createElement('canvas'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "newCanvas",
protocol: 'private',
fn: function (){
var self=this;
function $AthensHTMLCanvas(){return $globals.AthensHTMLCanvas||(typeof AthensHTMLCanvas=="undefined"?nil:AthensHTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensHTMLCanvas())._on_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCanvas\x0a\x09^ AthensHTMLCanvas on: self",
referencedClasses: ["AthensHTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["on:"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TagBrush(){return $globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(html)._with_($recv($TagBrush())._fromJQuery_canvas_($recv(self["@canvasTag"])._asJQuery(),html));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html with: (TagBrush fromJQuery: canvasTag asJQuery canvas: html).",
referencedClasses: ["TagBrush"],
//>>excludeEnd("ide");
messageSends: ["with:", "fromJQuery:canvas:", "asJQuery"]
}),
$globals.AthensHTMLSurface);

$core.addMethod(
$core.method({
selector: "setDefaults",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@currentCanvas"])._paintMode())._over();
$recv($recv(self["@currentCanvas"])._pathTransform())._loadIdentity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["loadIdentity"]=1;
//>>excludeEnd("ctx");
$recv($recv(self["@currentCanvas"])._paintTransform())._loadIdentity();
$recv(self["@context2D"])._lineJoin_("miter");
$recv(self["@context2D"])._miterLimit_((10));
$recv(self["@context2D"])._lineCap_("butt");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setDefaults",{},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setDefaults\x0a\x09currentCanvas paintMode over.\x0a\x09currentCanvas pathTransform loadIdentity.\x0a\x09currentCanvas paintTransform loadIdentity.\x0a\x09\x0a\x09context2D lineJoin: 'miter'.\x0a\x09context2D miterLimit: 10.\x0a\x09context2D lineCap: 'butt'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["over", "paintMode", "loadIdentity", "pathTransform", "paintTransform", "lineJoin:", "miterLimit:", "lineCap:"]
}),
$globals.AthensHTMLSurface);

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
$1=$recv(self["@extent"])._x();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.AthensHTMLSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ extent x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x"]
}),
$globals.AthensHTMLSurface);


$core.addMethod(
$core.method({
selector: "extent:",
protocol: 'instance creation',
fn: function (anExtent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._extent_(anExtent);
$recv($2)._initialize();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},$globals.AthensHTMLSurface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anExtent"],
source: "extent: anExtent\x0a\x09^ self basicNew\x0a\x09\x09extent: anExtent;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["extent:", "basicNew", "initialize", "yourself"]
}),
$globals.AthensHTMLSurface.klass);

$core.addMethod(
$core.method({
selector: "paintFillsUsing:on:",
protocol: '*Athens-HTML',
fn: function (aPaint,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aPaint)._drawString_on_(self,anAthensCanvas);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas\x0a\x09aPaint drawString: self on: anAthensCanvas.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawString:on:"]
}),
$globals.String);

});
