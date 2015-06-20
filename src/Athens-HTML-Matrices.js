define("amber-athens/Athens-HTML-Matrices", ["amber/boot", "amber-athens/Athens-Core-Matrices"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Athens-HTML-Matrices');
$core.packages["Athens-HTML-Matrices"].innerEval = function (expr) { return eval(expr); };
$core.packages["Athens-HTML-Matrices"].transport = {"type":"amd","amdNamespace":"amber-athens"};

$core.addClass('AthensHTMLTransformation', $globals.AthensAffineTransform, ['surface'], 'Athens-HTML-Matrices');
$core.addMethod(
$core.method({
selector: "getMatrix",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._error_("not allowed");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getMatrix",{},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getMatrix\x0a\x09self error: 'not allowed'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "loadAffineTransform:",
protocol: 'transformations',
fn: function (m){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._transform_a_a_a_a_a_($recv(m)._sx(),$recv(m)._shy(),$recv(m)._shx(),$recv(m)._sy(),$recv(m)._x(),$recv(m)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["m"],
source: "loadAffineTransform: m\x0a\x09surface context2D transform: m sx a: m shy a: m shx a: m sy a: m x a: m y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["transform:a:a:a:a:a:", "context2D", "sx", "shy", "shx", "sy", "x", "y"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "loadGlobalIdentity",
protocol: 'transformations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._transform_a_a_a_a_a_((1),(0),(0),(1),(0),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadGlobalIdentity",{},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadGlobalIdentity\x0a\x09surface context2D transform: 1 a: 0 a: 0 a: 1 a: 0 a: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["transform:a:a:a:a:a:", "context2D"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "loadIdentity",
protocol: 'transformations',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._transform_a_a_a_a_a_((1),(0),(0),(1),(0),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadIdentity\x0a\x09surface context2D transform: 1 a: 0 a: 0 a: 1 a: 0 a: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["transform:a:a:a:a:a:", "context2D"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "multiplyBy:",
protocol: 'transformations',
fn: function (m){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._transformBy_a_a_a_a_a_($recv(m)._sx(),$recv(m)._shy(),$recv(m)._shx(),$recv(m)._sy(),$recv(m)._x(),$recv(m)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{m:m},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["m"],
source: "multiplyBy: m\x0a\x09surface context2D transformBy: m sx a: m shy a: m shx a: m sy a: m x a: m y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["transformBy:a:a:a:a:a:", "context2D", "sx", "shy", "shx", "sy", "x", "y"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "restoreAfter:",
protocol: 'transformations',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@surface"])._context2D();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context2D"]=1;
//>>excludeEnd("ctx");
$recv($1)._push();
$recv(aBlock)._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self["@surface"])._context2D())._pop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09surface context2D push.\x0a\x09aBlock ensure: [surface context2D pop].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["push", "context2D", "ensure:", "pop"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "rotateByDegrees:",
protocol: 'transformations',
fn: function (angle){
var self=this;
function $Number(){return $globals.Number||(typeof Number=="undefined"?nil:Number)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._rotateByRadians_($recv($recv(angle).__star($recv($Number())._pi())).__slash((180)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["angle"],
source: "rotateByDegrees: angle\x0a\x09surface context2D rotateByRadians: angle * Number pi /  180.",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
messageSends: ["rotateByRadians:", "context2D", "/", "*", "pi"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "rotateByRadians:",
protocol: 'transformations',
fn: function (angle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._rotateByRadians_(angle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09surface context2D rotateByRadians: angle.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotateByRadians:", "context2D"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "scaleBy:",
protocol: 'transformations',
fn: function (factor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(factor)._isNumber();
if($core.assert($1)){
$2=$recv(self["@surface"])._context2D();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context2D"]=1;
//>>excludeEnd("ctx");
$recv($2)._scaleByX_Y_(factor,factor);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scaleByX:Y:"]=1;
//>>excludeEnd("ctx");
} else {
$recv($recv(self["@surface"])._context2D())._scaleByX_Y_($recv(factor)._x(),$recv(factor)._y());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["factor"],
source: "scaleBy: factor\x0a\x09factor isNumber\x0a\x09\x09ifTrue: [surface context2D scaleByX: factor Y: factor]\x0a\x09\x09ifFalse: [surface context2D scaleByX: factor x Y: factor y].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isNumber", "scaleByX:Y:", "context2D", "x", "y"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "scaleByX:Y:",
protocol: 'transformations',
fn: function (fx,fy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._scaleByX_Y_(fx,fy);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{fx:fx,fy:fy},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["fx", "fy"],
source: "scaleByX: fx Y: fy\x0a\x09surface context2D scaleByX: fx Y: fy.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scaleByX:Y:", "context2D"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "surface:",
protocol: 'accessing',
fn: function (aSurface){
var self=this;
self["@surface"]=aSurface;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "translateBy:",
protocol: 'transformations',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._translateByX_Y_($recv(aPoint)._x(),$recv(aPoint)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09surface context2D translateByX: aPoint x Y: aPoint y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["translateByX:Y:", "context2D", "x", "y"]
}),
$globals.AthensHTMLTransformation);

$core.addMethod(
$core.method({
selector: "translateByX:Y:",
protocol: 'transformations',
fn: function (px,py){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@surface"])._context2D())._translateByX_Y_(px,py);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{px:px,py:py},$globals.AthensHTMLTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["px", "py"],
source: "translateByX: px Y: py\x0a\x09surface context2D translateByX: px Y: py.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["translateByX:Y:", "context2D"]
}),
$globals.AthensHTMLTransformation);


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
$recv($2)._initialize();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},$globals.AthensHTMLTransformation.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anHTMLSurface"],
source: "on: anHTMLSurface\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["surface:", "basicNew", "initialize", "yourself"]
}),
$globals.AthensHTMLTransformation.klass);

});
