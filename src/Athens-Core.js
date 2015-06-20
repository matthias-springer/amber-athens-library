define("amber-athens/Athens-Core", ["amber/boot", "amber_core/Kernel-Objects", "amber-athens/Athens-Amber"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-Core');
$core.packages["Athens-Core"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-Core"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('AthensCanvas', $globals.Object, ['paint', 'surface', 'shape', 'fontRenderer', 'paintMode'], 'Athens-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AthensCanvas.comment="I am an abstract Athens canvas. I provide methods for drawing shapes and performing transformation operations. My concrete subclass `AthensHTMLCanvas` is used for drawing on Amber.\x0a\x0a## Drawing\x0a`#setShape:` sets the shape to be drawn and `#draw` draws this shape. `#drawShape:` is a convenience method that does both.\x0a\x0a`#setFont:` sets the current font (must be an instance of `LogicalFont`). `#drawString:` drawing a string with the current font.\x0a\x0a## Paints\x0a`#setPaint:` and `#setStrokePaint:` are used to set the filling paint and the stroke paint for drawing shapes and strings. Only one of both paints can be used for drawing at one time. E.g. setting a stroke paint resets the filling paint.\x0a\x0a## Paths\x0a`#createPath:` takes a block with a path builder argument and returns a path that can used as a shape for drawing. See `AthensPathBuilder` documentation.\x0a\x0a## Transformation\x0a`#pathTransform` returns the path transformation object that is used to transform the drawing of the shape. `#paintTransform` returns the paint transformation object that is used to transform the paint of the drawing, relative to the path transformation. See `AthensTransform` documentation.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "cacheAt:ifAbsentPut:",
protocol: 'caching',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._cacheAt_ifAbsentPut_(anObject,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cacheAt:ifAbsentPut:",{anObject:anObject,aBlock:aBlock},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "cacheAt: anObject ifAbsentPut: aBlock\x0a\x09^ surface cacheAt: anObject ifAbsentPut: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cacheAt:ifAbsentPut:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "clearMask:",
protocol: 'masking',
fn: function (aShape){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aShape)._paintFillsUsing_on_($recv(self["@surface"])._clearMaskPaint(),self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearMask:",{aShape:aShape},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aShape"],
source: "clearMask: aShape\x0a\x09\x22Set mask pixels to 0 for all pixels covered by aShape.\x22\x0a\x09\x0a\x09^ aShape paintFillsUsing: surface clearMaskPaint on: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["paintFillsUsing:on:", "clearMaskPaint"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "clipBy:during:",
protocol: 'clipping',
fn: function (aRectangle,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._clipBy_during_(aRectangle,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clipBy:during:",{aRectangle:aRectangle,aBlock:aBlock},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle", "aBlock"],
source: "clipBy: aRectangle during: aBlock\x0a\x09\x22Sets a clipping rectangle during drawing operations performed in a block. Note that clipping rectangles are intetersected with currently active clipping rectangle.\x22\x0a\x09\x0a\x09 ^ surface clipBy: aRectangle during: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clipBy:during:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "createPath:",
protocol: 'paths',
fn: function (aPathCreatingBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._createPath_(aPathCreatingBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPathCreatingBlock"],
source: "createPath: aPathCreatingBlock\x0a\x09\x22Creates a new path. A path creating block should be a monadic block, which will get a path builder instance as argument. See AthensPathBuilder for the protocol. The resulting path object can be later used for drawing.\x22\x0a\x09\x0a\x09^ surface createPath: aPathCreatingBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createPath:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "createRectanglePath:",
protocol: 'paths',
fn: function (aRectangle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._createRectanglePath_(aRectangle);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createRectanglePath:",{aRectangle:aRectangle},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "createRectanglePath: aRectangle \x0a\x09^ surface createRectanglePath: aRectangle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createRectanglePath:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "disableMask",
protocol: 'masking',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._disableMask();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"disableMask",{},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "disableMask\x0a\x09^ surface disableMask",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["disableMask"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@shape"])._paintFillsUsing_on_(self["@paint"],self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x09\x22Fills the shape (anObject) using the currently selected paint. anObject should implement double-dispatch to the currently selected paint.\x22\x0a\x09\x0a\x09^ shape paintFillsUsing: paint on: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["paintFillsUsing:on:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "draw:",
protocol: 'drawing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._drawOnAthensCanvas_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw:",{anObject:anObject},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "draw: anObject\x0a\x09\x22A generic dispatch method to draw anObject onto the receiver. The object should understand #drawOnAthensCanvas: message.\x22\x0a\x09\x0a\x09^ anObject drawOnAthensCanvas: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawOnAthensCanvas:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "drawShape:",
protocol: 'drawing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._setShape_(anObject);
self._draw();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawShape:",{anObject:anObject},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "drawShape: anObject\x0a\x09\x22A convenience method, which sets the current shape to anObject and then fills it with the currently selected paint.\x22 \x0a\x09\x0a\x09self setShape: anObject.\x0a\x09self draw.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setShape:", "draw"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "drawString:",
protocol: 'drawing text',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@fontRenderer"])._renderCharacters_from_to_(aString,(1),$recv(aString)._size());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawString:",{aString:aString},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "drawString: aString\x0a\x09\x22Draws a string using the currently selected font. Answers a total advance of rendered string.\x22\x0a\x09\x0a\x09^ fontRenderer renderCharacters: aString from: 1 to: aString size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderCharacters:from:to:", "size"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "drawString:from:to:",
protocol: 'drawing text',
fn: function (aString,start,end){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@fontRenderer"])._renderCharacters_from_to_(aString,start,end);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawString:from:to:",{aString:aString,start:start,end:end},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "start", "end"],
source: "drawString: aString from: start to: end\x0a\x09\x22Draws a portion of string using the currently selected font. Answers a total advance of rendered portion.\x22\x0a\x09\x0a\x09^ fontRenderer renderCharacters: aString from: start to: end",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderCharacters:from:to:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "enableMask",
protocol: 'masking',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._enableMask();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enableMask",{},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enableMask\x0a\x09^ surface enableMask",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["enableMask"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "flushCacheAt:",
protocol: 'caching',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@surface"])._removeCacheAt_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flushCacheAt:",{anObject:anObject},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "flushCacheAt: anObject\x0a\x09\x22Flush (delete) any cached value(s) identified by given object, anObject. A surface using identity comparison for object identifiers. Answer receiver.\x22\x0a\x0a\x09surface removeCacheAt: anObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeCacheAt:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "initializeWithSurface:",
protocol: 'initialization',
fn: function (anAthensSurface){
var self=this;
self["@surface"]=anAthensSurface;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAthensSurface"],
source: "initializeWithSurface: anAthensSurface\x09\x0a\x09surface := anAthensSurface.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "isVisible:",
protocol: 'clipping',
fn: function (aRectangle){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "isVisible: aRectangle \x0a\x09\x22Check if the rectangles is not fully clipped by current clipping coordinates.\x22\x0a\x09\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "paint",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@paint"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "paint\x0a\x09^ paint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "paintMode",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@paintMode"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "paintMode\x0a\x09\x22Answer the current paint mode controller. The answered object should conform to AthensPaintMode public protocol.\x22\x0a\x0a\x09^ paintMode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "paintTransform",
protocol: 'transformation matrices',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._paintTransform();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"paintTransform",{},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "paintTransform\x0a\x09\x22Answer the paint transformation matrix controller. The answered object should conform to AthensTransform public protocol.\x22\x0a\x0a\x09^ surface paintTransform",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["paintTransform"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "pathTransform",
protocol: 'transformation matrices',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._pathTransform();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pathTransform",{},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pathTransform\x0a\x09\x22Answer the path transformation matrix controller. The answered object should conform to AthensTransform public protocol.\x22\x0a\x09\x0a\x09^ surface pathTransform",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pathTransform"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "setFont:",
protocol: 'drawing text',
fn: function (aFont){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@fontRenderer"]=$recv(aFont)._glyphRendererOn_(self["@surface"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setFont:",{aFont:aFont},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFont"],
source: "setFont: aFont\x0a\x09\x22Set the current font of receiver. Font object should answer a glyph renderer instance, compatible with glyph renderer protocol.\x22\x0a\x09\x0a\x09fontRenderer := aFont glyphRendererOn: surface.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["glyphRendererOn:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "setMask:",
protocol: 'masking',
fn: function (aShape){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aShape)._paintFillsUsing_on_($recv(self["@surface"])._setMaskPaint(),self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setMask:",{aShape:aShape},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aShape"],
source: "setMask: aShape\x0a\x09\x22Set mask pixels to 1 for all pixels covered by shape, aShape.\x22\x0a\x0a\x09^ aShape paintFillsUsing: surface setMaskPaint on: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["paintFillsUsing:on:", "setMaskPaint"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "setPaint:",
protocol: 'paint',
fn: function (aPaint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(self["@paint"]).__eq(aPaint);
if($core.assert($1)){
$2=self["@paint"];
return $2;
};
self["@paint"]=$recv(aPaint)._asAthensPaintOn_(self);
$3=self["@paint"];
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPaint:",{aPaint:aPaint},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint"],
source: "setPaint: aPaint\x0a\x09\x22Set the current paint of receiver.\x22\x0a\x09\x0a\x09paint = aPaint ifTrue: [ ^ paint ].\x0a\x09paint := aPaint asAthensPaintOn: self.\x0a\x09^ paint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "asAthensPaintOn:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "setShape:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@shape"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setShape: anObject\x0a\x09\x22Set the current shape of receiver.\x22\x0a\x09\x0a\x09shape := anObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "setStrokePaint:",
protocol: 'paint',
fn: function (aPaint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@paint"]=$recv($recv(aPaint)._asAthensPaintOn_(self))._asStrokePaintOn_(self);
$1=self["@paint"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setStrokePaint:",{aPaint:aPaint},$globals.AthensCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint"],
source: "setStrokePaint: aPaint\x0a\x09\x22Use paint as stroke paint, note conversion to #asStrokePaintOn:.\x22\x0a\x09\x0a\x09paint := (aPaint asAthensPaintOn: self) asStrokePaintOn: self.\x0a\x09^ paint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asStrokePaintOn:", "asAthensPaintOn:"]
}),
$globals.AthensCanvas);

$core.addMethod(
$core.method({
selector: "surface",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@surface"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "surface\x0a\x09\x22Answer an Athens surface, to which receiver is bound to.\x22\x0a\x09\x0a\x09^ surface",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensCanvas);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.AthensCanvas.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09\x22use #on: instead\x22\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.AthensCanvas.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'private',
fn: function (aSurface){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._basicNew())._initializeWithSurface_(aSurface);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aSurface:aSurface},$globals.AthensCanvas.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSurface"],
source: "on: aSurface\x0a\x09^ self basicNew initializeWithSurface: aSurface",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithSurface:", "basicNew"]
}),
$globals.AthensCanvas.klass);


$core.addClass('AthensPaintMode', $globals.Object, [], 'Athens-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AthensPaintMode.comment="I represent all Athens paint modes. Every drawing backend has its own concrete subclass of me.\x0a\x0a## API\x0aThe methods in the protocol \x22modes\x22, e.g. `#atop`, change the current paint mode. The method `#restoreAfter:` restores the original paint mode after the provided block was executed.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "add",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "add\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "atop",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atop",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atop\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "availableModes",
protocol: 'capabilities',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availableModes\x0a\x09\x22Answer a collection of paint mode names, currently supported by backend. \x0a\x09Different backends may support different sets of paint modes.\x0a\x09\x0a\x09You may need to structure your code depending on modes available.\x22\x0a\x09\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "clear",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09\x22Set 'clear' drawing mode.\x0a\x09\x0a\x09Drawing under this mode will clear the surface under the shape boundaries.\x22\x0a\x09\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "colorBurn",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorBurn",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colorBurn\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "colorDodge",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorDodge",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colorDodge\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "darken",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"darken",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "darken\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "default",
protocol: 'default mode',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._over();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09\x22Set the default paint mode. The default paint mode in Athens, is 'over'.\x22\x0a\x09\x0a\x09^ self over",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["over"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "dest",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dest",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dest\x0a\x09\x22Set 'dest' drawing mode.\x0a\x09\x0a\x09Drawing under this mode will ignore the source, as if nothing drawn.\x22\x0a\x09\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "destAtop",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destAtop",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destAtop\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "destIn",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destIn",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destIn\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "destOut",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destOut",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destOut\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "destOver",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destOver",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destOver\x09\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "difference",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"difference",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "difference\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "exclusion",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exclusion",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exclusion\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "hardLight",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hardLight",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hardLight\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "hslColor",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hslColor",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hslColor\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "hslHue",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hslHue",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hslHue\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "hslLuminosity",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hslLuminosity",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hslLuminosity\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "hslSaturation",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hslSaturation",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hslSaturation\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "in",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"in",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "in\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "lighten",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lighten",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lighten\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "multiply",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"multiply",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "multiply\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "notAvailable",
protocol: 'errors',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._error_("A requested paint mode is not supported by backend");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notAvailable",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notAvailable\x0a\x09^ self error: 'A requested paint mode is not supported by backend'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "out",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"out",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "out\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "over",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"over",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "over\x0a\x09\x22Set 'over' drawing mode. This is default paint mode.\x0a\x09\x0a\x09Drawing under this mode will blend source with destination color using source alpha component.\x22\x0a\x09\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "overlay",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overlay",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overlay\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "restoreAfter:",
protocol: 'convenience',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09\x22Restore current paint mode after evaluating a block.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "saturate",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saturate",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "saturate\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "screen",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"screen",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "screen\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "softLight",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"softLight",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "softLight\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09\x22Set 'source' drawing mode.\x0a\x09\x0a\x09Drawing under this mode will replace the content with incoming source under the shape boundaries.\x22\x0a\x09\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);

$core.addMethod(
$core.method({
selector: "xor",
protocol: 'modes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._notAvailable();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xor",{},$globals.AthensPaintMode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xor\x0a\x09self notAvailable.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notAvailable"]
}),
$globals.AthensPaintMode);



$core.addClass('AthensShape', $globals.Object, [], 'Athens-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AthensShape.comment="I am an abstract Athens shape.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "paintFillsUsing:on:",
protocol: 'drawing',
fn: function (aPaint,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},$globals.AthensShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09\x22This method is a part of rendering dispatch Canvas->receiver->paint.\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensShape);



$core.addClass('AthensPath', $globals.AthensShape, [], 'Athens-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AthensPath.comment="I am an abstract Athens path.";
//>>excludeEnd("ide");


$core.addClass('AthensSurface', $globals.Object, ['currentCanvas'], 'Athens-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AthensSurface.comment="I am an abstract Athens surface. I provide methods for creating paths, gradients, colors and clearing myself. My paths, gradients and colors can be reused in later drawings.\x0a\x0a## API\x0aThe method `#drawDuring:` takes a block with an Athens canvas as an argument and is used for drawing onto the surface.\x0a\x0a## Creating paints\x0aThe methods `#createSolidColorPaint:`, `#createRadialGrandient:center:radius:` and `#createLinearGradient:origin:corner:` create fill colors. The method `#createStrokePaintFor:` takes a paint and creates a stroke paint for it.\x0a\x0a## Creating paths\x0aThe method `#createPath:` takes a block with a path builder argument and creates a path object.\x0a\x0a## Clearing the surface\x0aThe method `#clear` is used to create the surface with transparent color. `#clear:` takes a color for clearing the canvas.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asForm",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asForm",{},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asForm\x0a\x09\x22Answer a Form, which contains a bits, converted from surface.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "cacheAt:ifAbsentPut:",
protocol: 'caching',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cacheAt:ifAbsentPut:",{anObject:anObject,aBlock:aBlock},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "cacheAt: anObject ifAbsentPut: aBlock\x0a\x09\x22Answer an object from surface's cache identified by anObject, if there is no cached object under such identifier, evaluate a block and put it into cache. Then answer the result of evaluation. A surface using identity comparison for object identifiers.\x22\x0a\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "clear",
protocol: 'public',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09\x22Clear the surface.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "clear:",
protocol: 'public',
fn: function (clearColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear:",{clearColor:clearColor},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["clearColor"],
source: "clear: clearColor\x0a\x09\x22Clear the surface.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "clipBy:during:",
protocol: 'clipping',
fn: function (aRectangle,aBlockClosure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clipBy:during:",{aRectangle:aRectangle,aBlockClosure:aBlockClosure},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle", "aBlockClosure"],
source: "clipBy: aRectangle during: aBlockClosure \x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createFormPaint:",
protocol: 'paints',
fn: function (aForm){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createFormPaint:",{aForm:aForm},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aForm"],
source: "createFormPaint: aForm \x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createLinearGradient:origin:corner:",
protocol: 'paints',
fn: function (colorRamp,pt1,pt2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:origin:corner:",{colorRamp:colorRamp,pt1:pt1,pt2:pt2},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["colorRamp", "pt1", "pt2"],
source: "createLinearGradient: colorRamp origin: pt1 corner: pt2\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createLinearGradient:start:stop:",
protocol: 'paints',
fn: function (colorRamp,pt1,pt2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{colorRamp:colorRamp,pt1:pt1,pt2:pt2},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["colorRamp", "pt1", "pt2"],
source: "createLinearGradient: colorRamp start: pt1 stop: pt2\x0a\x09\x22This protocol is deprecated. Use #createLinearGradient: start:stop: instead.\x22\x0a\x09\x0a\x09self shouldNotImplement.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createPath:",
protocol: 'paths',
fn: function (aPathBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathBuilder:aPathBuilder},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPathBuilder"],
source: "createPath: aPathBuilder\x0a\x09\x22Create a path from provided path builder instance.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createRadialGradient:center:radius:",
protocol: 'paints',
fn: function (colorRamp,aCenter,aRadius){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._createRadialGradient_center_radius_focalPoint_(colorRamp,aCenter,aRadius,aCenter);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["colorRamp", "aCenter", "aRadius"],
source: "createRadialGradient: colorRamp center: aCenter radius: aRadius\x0a\x09\x22By default, focal point coincede with center.\x22\x0a\x09\x0a\x09^ self createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: aCenter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createRadialGradient:center:radius:focalPoint:"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createRadialGradient:center:radius:focalPoint:",
protocol: 'paints',
fn: function (colorRamp,aCenter,aRadius,fp){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:focalPoint:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius,fp:fp},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["colorRamp", "aCenter", "aRadius", "fp"],
source: "createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: fp\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createRectanglePath:",
protocol: 'paths',
fn: function (aRectangle){
var self=this;
return aRectangle;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "createRectanglePath: aRectangle \x0a\x09^ aRectangle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createSolidColorPaint:",
protocol: 'paints',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createSolidColorPaint:",{aColor:aColor},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "createSolidColorPaint: aColor \x0a\x09 \x22Answer an instance of AthensPaint, valid for use with given surface.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "createStrokePaintFor:",
protocol: 'paints',
fn: function (aPaint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createStrokePaintFor:",{aPaint:aPaint},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint"],
source: "createStrokePaintFor: aPaint\x0a\x09 \x22Answer an instance of AthensPaint, valid for use as stroke paint on receiver, using an argument, paint for fills.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "disableMask",
protocol: 'masking',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"disableMask",{},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "disableMask\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "drawDuring:",
protocol: 'public',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@currentCanvas"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._attemptToRecurseDrawing();
};
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@currentCanvas"]=self._newCanvas();
self["@currentCanvas"];
return $recv(aBlock)._value_(self["@currentCanvas"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._releaseCanvas();
self["@currentCanvas"]=nil;
return self["@currentCanvas"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "drawDuring: aBlock\x0a\x09\x22You may draw on receiver only when inside a block and only using provided canvas object. This ensures releasing system resources used after finishing drawing.\x22\x0a\x0a\x0a\x09currentCanvas ifNotNil: [ self attemptToRecurseDrawing ].\x0a\x09\x0a\x09[\x0a\x09\x09currentCanvas := self newCanvas.\x0a\x09\x09aBlock value: currentCanvas.\x0a\x09] ensure: [\x0a\x09\x09self releaseCanvas.\x0a\x09\x09currentCanvas := nil.\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "attemptToRecurseDrawing", "ensure:", "newCanvas", "value:", "releaseCanvas"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "enableMask",
protocol: 'masking',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enableMask",{},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enableMask\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "flushCacheAt:",
protocol: 'caching',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flushCacheAt:",{anObject:anObject},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "flushCacheAt: anObject\x0a\x09\x22Flush (delete) any cached value(s) identified by given object, anObject. A surface using identity comparison for object identifiers. Answer receiver.\x22\x0a\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "maskEnabled",
protocol: 'masking',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maskEnabled",{},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maskEnabled\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "newCanvas",
protocol: 'private',
fn: function (){
var self=this;
function $AthensCanvas(){return $globals.AthensCanvas||(typeof AthensCanvas=="undefined"?nil:AthensCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AthensCanvas())._on_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},$globals.AthensSurface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCanvas\x0a\x09\x22Answer a preinitialized instance of AthensCanvas. Private to receiver and its subclasses, override seldom.\x22\x0a\x09\x0a\x09^ AthensCanvas on: self",
referencedClasses: ["AthensCanvas"],
//>>excludeEnd("ide");
messageSends: ["on:"]
}),
$globals.AthensSurface);

$core.addMethod(
$core.method({
selector: "releaseCanvas",
protocol: 'private',
fn: function (){
var self=this;
self["@currentCanvas"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "releaseCanvas\x0a\x09currentCanvas := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensSurface);


$core.addMethod(
$core.method({
selector: "extent:",
protocol: 'instance creation',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},$globals.AthensSurface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "extent: aPoint\x0a\x09\x22Create a new surface with given extent. \x0a\x09Note that some surfaces may not support this method, since they may represent an infinite surface.\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensSurface.klass);


$core.addClass('AthensTransform', $globals.Object, [], 'Athens-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AthensTransform.comment="I am an Athens transform object. I provide methods for transforming shapes.\x0a\x0a## API\x0aThe methods `#scaleBy:`, `#translateBy:` and `#rotateByDegrees:`/`#rotateByRadians` are used to apply scalin (ununiform scaling possible), translation and rotation.\x0a\x0aThe method `#loadAffineTransform:` loads a transformation from another matrix and `#loadIdentity` loads the identity transformation.\x0a\x0aThe method `#restoreAfter:` restores the current transformation after the block argument was executed.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getMatrix",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._copy();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getMatrix",{},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getMatrix\x0a\x09\x22Answer an affine transformation matrix currently used by receiver.\x0a\x09Note, that resulting matrix should be copied from receiver's data, i.e.\x0a\x09no future modifications of receiver should affect the answered object.\x0a\x09\x0a\x09The default implementation is to answer a copy of receiver.\x22\x0a\x09\x0a\x09^ self copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "invert",
protocol: 'transformations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invert",{},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "invert\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "loadAffineTransform:",
protocol: 'transformations',
fn: function (anAthenTransform){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{anAthenTransform:anAthenTransform},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAthenTransform"],
source: "loadAffineTransform: anAthenTransform\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "loadIdentity",
protocol: 'transformations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadIdentity\x0a\x09\x22Load the identity matrix into receiver.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "restoreAfter:",
protocol: 'transformations',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09\x22I should save the current transform state, evaluate the block, and then restore the saved transform state.\x22\x0a\x09\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "rotateByDegrees:",
protocol: 'transformations',
fn: function (angle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["angle"],
source: "rotateByDegrees: angle\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "rotateByRadians:",
protocol: 'transformations',
fn: function (angle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "scaleBy:",
protocol: 'transformations',
fn: function (factor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["factor"],
source: "scaleBy: factor\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "scaleByX:Y:",
protocol: 'transformations',
fn: function (fx,fy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{fx:fx,fy:fy},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["fx", "fy"],
source: "scaleByX: fx Y: fy\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "transform:",
protocol: 'vector-transform',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transform:",{aPoint:aPoint},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "transform: aPoint \x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "transformX:Y:",
protocol: 'vector-transform',
fn: function (px,py){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformX:Y:",{px:px,py:py},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["px", "py"],
source: "transformX: px Y: py \x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "translateBy:",
protocol: 'transformations',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);

$core.addMethod(
$core.method({
selector: "translateByX:Y:",
protocol: 'transformations',
fn: function (px,py){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{px:px,py:py},$globals.AthensTransform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["px", "py"],
source: "translateByX: px Y: py\x0a\x09self subclassResponsibility.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensTransform);


$core.addMethod(
$core.method({
selector: "asAthensPaintOn:",
protocol: '*Athens-Core',
fn: function (anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return anAthensCanvas['@surface']._createSolidColorPaint_(self); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},$globals.Color)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAthensCanvas"],
source: "asAthensPaintOn: anAthensCanvas\x0a\x09< return anAthensCanvas['@surface']._createSolidColorPaint_(self); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Color);

$core.addMethod(
$core.method({
selector: "arcCos",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return Math.acos(self); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcCos",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcCos\x0a\x09< return Math.acos(self); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcSin",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return Math.asin(self); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcSin",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcSin\x0a\x09< return Math.asin(self); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcTan",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return Math.atan(self); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcTan",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcTan\x0a\x09< return Math.atan(self); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asHexString",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self.toString(16); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asHexString",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asHexString\x0a\x09< return self.toString(16); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "cos",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return Math.cos(self); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cos",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cos\x0a\x09< return Math.cos(self); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "degreesToRadians",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self / 180.0 * Math.PI; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"degreesToRadians",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "degreesToRadians\x0a\x09< return self / 180.0 * Math.PI; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "sin",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return Math.sin(self); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sin",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sin\x0a\x09< return Math.sin(self); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "tan",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return Math.tan(self); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tan",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tan\x0a\x09< return Math.tan(self); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isPoint",
protocol: '*Athens-Core',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPoint\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "corner:",
protocol: '*Athens-Core',
fn: function (cornerPoint){
var self=this;
function $Rectangle(){return $globals.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Rectangle())._origin_corner_(self,cornerPoint);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"corner:",{cornerPoint:cornerPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cornerPoint"],
source: "corner: cornerPoint\x0a\x09^ Rectangle origin: self corner: cornerPoint",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
messageSends: ["origin:corner:"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "isPoint",
protocol: '*Athens-Core',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPoint\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "multiplyBy:",
protocol: '*Athens-Core',
fn: function (matrix){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var x = self['@x'];
	var y = self['@y'];
	self['@x'] = matrix['@sx']*x + matrix['@shx']*y + matrix['@x'];
	self['@y'] = matrix['@shy']*x + matrix['@sy']*y + matrix['@y'];	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{matrix:matrix},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["matrix"],
source: "multiplyBy: matrix\x0a\x09< var x = self['@x'];\x0a\x09var y = self['@y'];\x0a\x09self['@x'] = matrix['@sx']*x + matrix['@shx']*y + matrix['@x'];\x0a\x09self['@y'] = matrix['@shy']*x + matrix['@sy']*y + matrix['@y'];\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "normalized",
protocol: '*Athens-Core',
fn: function (){
var self=this;
var r;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv(self["@x"]).__star(self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__plus($recv(self["@y"]).__star(self["@y"]));
r=$recv($1)._sqrt();
$4=$recv(self["@x"]).__slash(r);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__at($recv(self["@y"]).__slash(r));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normalized",{r:r},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normalized\x0a\x09| r |\x0a\x09r := (x * x + (y * y)) sqrt.\x0a\x09^ (x / r) @ (y / r)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sqrt", "+", "*", "@", "/"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "r",
protocol: '*Athens-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(self["@x"]).__star(self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($recv(self["@y"]).__star(self["@y"]));
$1=$recv($2)._sqrt();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"r",{},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "r\x0a\x09^ (x*x + (y*y)) sqrt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sqrt", "+", "*"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "paintFillsUsing:on:",
protocol: '*Athens-Core',
fn: function (aPaint,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aPaint)._fillRectangle_on_(self,anAthensCanvas);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09aPaint fillRectangle: self on: anAthensCanvas.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fillRectangle:on:"]
}),
$globals.Rectangle);

});
