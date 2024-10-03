(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="167",qu=0,Uc=1,Yu=2,Nl=1,ju=2,Zn=3,_i=0,cn=1,Qn=2,mi=0,pr=1,io=2,Nc=3,Fc=4,$u=5,Oi=100,Ku=101,Ju=102,Zu=103,Qu=104,tf=200,ef=201,nf=202,rf=203,ro=204,so=205,sf=206,af=207,of=208,cf=209,lf=210,uf=211,ff=212,hf=213,df=214,pf=0,mf=1,gf=2,Ws=3,_f=4,vf=5,xf=6,yf=7,ko=0,Mf=1,Sf=2,gi=0,Ef=1,Tf=2,bf=3,Af=4,wf=5,Cf=6,Rf=7,Fl=300,_r=301,vr=302,ao=303,oo=304,$s=306,co=1e3,zi=1001,lo=1002,En=1003,Pf=1004,hs=1005,Pn=1006,Ea=1007,Hi=1008,ni=1009,Ol=1010,Bl=1011,Xr=1012,Vo=1013,ki=1014,ti=1015,$r=1016,Go=1017,Wo=1018,xr=1020,zl=35902,Hl=1021,kl=1022,Ln=1023,Vl=1024,Gl=1025,mr=1026,yr=1027,Wl=1028,Xo=1029,Xl=1030,qo=1031,Yo=1033,Bs=33776,zs=33777,Hs=33778,ks=33779,uo=35840,fo=35841,ho=35842,po=35843,mo=36196,go=37492,_o=37496,vo=37808,xo=37809,yo=37810,Mo=37811,So=37812,Eo=37813,To=37814,bo=37815,Ao=37816,wo=37817,Co=37818,Ro=37819,Po=37820,Lo=37821,Vs=36492,Do=36494,Io=36495,ql=36283,Uo=36284,No=36285,Fo=36286,Lf=3200,Df=3201,Yl=0,If=1,pi="",Bn="srgb",vi="srgb-linear",jo="display-p3",Ks="display-p3-linear",Xs="linear",Fe="srgb",qs="rec709",Ys="p3",Ki=7680,Oc=519,Uf=512,Nf=513,Ff=514,jl=515,Of=516,Bf=517,zf=518,Hf=519,Bc=35044,zc="300 es",ei=2e3,js=2001;class Sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=Math.PI/180,Oo=180/Math.PI;function Kr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function kf(i,t){return(i%t+t)%t}function ba(i,t,e){return(1-e)*i+e*t}function Ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*n-l*s+t.x,this.y=a*s+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,s,a,l,u,d,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,l,u,d,p)}set(t,e,n,s,a,l,u,d,p){const g=this.elements;return g[0]=t,g[1]=s,g[2]=u,g[3]=e,g[4]=a,g[5]=d,g[6]=n,g[7]=l,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,l=n[0],u=n[3],d=n[6],p=n[1],g=n[4],_=n[7],v=n[2],S=n[5],E=n[8],b=s[0],y=s[3],m=s[6],N=s[1],P=s[4],D=s[7],K=s[2],B=s[5],c=s[8];return a[0]=l*b+u*N+d*K,a[3]=l*y+u*P+d*B,a[6]=l*m+u*D+d*c,a[1]=p*b+g*N+_*K,a[4]=p*y+g*P+_*B,a[7]=p*m+g*D+_*c,a[2]=v*b+S*N+E*K,a[5]=v*y+S*P+E*B,a[8]=v*m+S*D+E*c,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],l=t[4],u=t[5],d=t[6],p=t[7],g=t[8];return e*l*g-e*u*p-n*a*g+n*u*d+s*a*p-s*l*d}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],l=t[4],u=t[5],d=t[6],p=t[7],g=t[8],_=g*l-u*p,v=u*d-g*a,S=p*a-l*d,E=e*_+n*v+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(s*p-g*n)*b,t[2]=(u*n-s*l)*b,t[3]=v*b,t[4]=(g*e-s*d)*b,t[5]=(s*a-u*e)*b,t[6]=S*b,t[7]=(n*d-p*e)*b,t[8]=(l*e-n*a)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,l,u){const d=Math.cos(a),p=Math.sin(a);return this.set(n*d,n*p,-n*(d*l+p*u)+l+t,-s*p,s*d,-s*(-p*l+d*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new le;function $l(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vf(){const i=qr("canvas");return i.style.display="block",i}const Hc={};function Vr(i){i in Hc||(Hc[i]=!0,console.warn(i))}function Gf(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const kc=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vc=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[vi]:{transfer:Xs,primaries:qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Bn]:{transfer:Fe,primaries:qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ks]:{transfer:Xs,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Vc),fromReference:i=>i.applyMatrix3(kc)},[jo]:{transfer:Fe,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vc),fromReference:i=>i.applyMatrix3(kc).convertLinearToSRGB()}},Wf=new Set([vi,Ks]),we={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ur[t].toReference,s=Ur[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ur[i].primaries},getTransfer:function(i){return i===pi?Xs:Ur[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ur[t].luminanceCoefficients)}};function gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class Xf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=qr("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=gr(a[l]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gr(e[n]/255)*255):e[n]=gr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qf=0;class Kl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Kr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?a.push(Ca(s[l].image)):a.push(Ca(s[l]))}else a=Ca(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yf=0;class ln extends Sr{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=zi,s=zi,a=Pn,l=Hi,u=Ln,d=ni,p=ln.DEFAULT_ANISOTROPY,g=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Kr(),this.name="",this.source=new Kl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case co:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case co:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Fl;ln.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,n=0,s=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*s+l[12]*a,this.y=l[1]*e+l[5]*n+l[9]*s+l[13]*a,this.z=l[2]*e+l[6]*n+l[10]*s+l[14]*a,this.w=l[3]*e+l[7]*n+l[11]*s+l[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const d=t.elements,p=d[0],g=d[4],_=d[8],v=d[1],S=d[5],E=d[9],b=d[2],y=d[6],m=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(p+1)/2,D=(S+1)/2,K=(m+1)/2,B=(g+v)/4,c=(_+b)/4,Y=(E+y)/4;return P>D&&P>K?P<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(P),s=B/n,a=c/n):D>K?D<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(D),n=B/s,a=Y/s):K<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(K),n=c/a,s=Y/a),this.set(n,s,a,e),this}let N=Math.sqrt((y-E)*(y-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(_-b)/N,this.z=(v-g)/N,this.w=Math.acos((p+S+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jf extends Sr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Kl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends jf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $f extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,l,u){let d=n[s+0],p=n[s+1],g=n[s+2],_=n[s+3];const v=a[l+0],S=a[l+1],E=a[l+2],b=a[l+3];if(u===0){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u===1){t[e+0]=v,t[e+1]=S,t[e+2]=E,t[e+3]=b;return}if(_!==b||d!==v||p!==S||g!==E){let y=1-u;const m=d*v+p*S+g*E+_*b,N=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const K=Math.sqrt(P),B=Math.atan2(K,m*N);y=Math.sin(y*B)/K,u=Math.sin(u*B)/K}const D=u*N;if(d=d*y+v*D,p=p*y+S*D,g=g*y+E*D,_=_*y+b*D,y===1-u){const K=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=K,p*=K,g*=K,_*=K}}t[e]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,s,a,l){const u=n[s],d=n[s+1],p=n[s+2],g=n[s+3],_=a[l],v=a[l+1],S=a[l+2],E=a[l+3];return t[e]=u*E+g*_+d*S-p*v,t[e+1]=d*E+g*v+p*_-u*S,t[e+2]=p*E+g*S+u*v-d*_,t[e+3]=g*E-u*_-d*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,l=t._order,u=Math.cos,d=Math.sin,p=u(n/2),g=u(s/2),_=u(a/2),v=d(n/2),S=d(s/2),E=d(a/2);switch(l){case"XYZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"YZX":this._x=v*g*_+p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_-v*S*E;break;case"XZY":this._x=v*g*_-p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],l=e[1],u=e[5],d=e[9],p=e[2],g=e[6],_=e[10],v=n+u+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-d)*S,this._y=(a-p)*S,this._z=(l-s)*S}else if(n>u&&n>_){const S=2*Math.sqrt(1+n-u-_);this._w=(g-d)/S,this._x=.25*S,this._y=(s+l)/S,this._z=(a+p)/S}else if(u>_){const S=2*Math.sqrt(1+u-n-_);this._w=(a-p)/S,this._x=(s+l)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-n-u);this._w=(l-s)/S,this._x=(a+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,l=t._w,u=e._x,d=e._y,p=e._z,g=e._w;return this._x=n*g+l*u+s*p-a*d,this._y=s*g+l*d+a*u-n*p,this._z=a*g+l*p+n*d-s*u,this._w=l*g-n*u-s*d-a*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,l=this._w;let u=l*t._w+n*t._x+s*t._y+a*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=l,this._x=n,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-e;return this._w=S*l+e*this._w,this._x=S*n+e*this._x,this._y=S*s+e*this._y,this._z=S*a+e*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,u),_=Math.sin((1-e)*g)/p,v=Math.sin(e*g)/p;return this._w=l*_+this._w*v,this._x=n*_+this._x*v,this._y=s*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,l=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*l,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*l,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,l=t.y,u=t.z,d=t.w,p=2*(l*s-u*n),g=2*(u*e-a*s),_=2*(a*n-l*e);return this.x=e+d*p+l*_-u*g,this.y=n+d*g+u*p-a*_,this.z=s+d*_+a*g-l*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,l=e.x,u=e.y,d=e.z;return this.x=s*d-a*u,this.y=a*l-n*d,this.z=n*u-s*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new k,Gc=new Jr;class Zr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)t.isMesh===!0?t.getVertexPosition(l,wn):wn.fromBufferAttribute(a,l),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const s=t.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),ps.subVectors(this.max,Nr),Zi.subVectors(t.a,Nr),Qi.subVectors(t.b,Nr),tr.subVectors(t.c,Nr),ci.subVectors(Qi,Zi),li.subVectors(tr,Qi),Ri.subVectors(Zi,tr);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!Pa(e,Zi,Qi,tr,ps)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,Zi,Qi,tr,ps))?!1:(ms.crossVectors(ci,li),e=[ms.x,ms.y,ms.z],Pa(e,Zi,Qi,tr,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new k,new k,new k,new k,new k,new k,new k,new k],wn=new k,ds=new Zr,Zi=new k,Qi=new k,tr=new k,ci=new k,li=new k,Ri=new k,Nr=new k,ps=new k,ms=new k,Pi=new k;function Pa(i,t,e,n,s){for(let a=0,l=i.length-3;a<=l;a+=3){Pi.fromArray(i,a);const u=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),d=t.dot(Pi),p=e.dot(Pi),g=n.dot(Pi);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>u)return!1}return!0}const Kf=new Zr,Fr=new k,La=new k;class $o{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kf.setFromPoints(t).getCenter(n);let s=0;for(let a=0,l=t.length;a<l;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(La)),this.expandByPoint(Fr.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new k,Da=new k,gs=new k,ui=new k,Ia=new k,_s=new k,Ua=new k;class Jf{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Da.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Da);const a=t.distanceTo(e)*.5,l=-this.direction.dot(gs),u=ui.dot(this.direction),d=-ui.dot(gs),p=ui.lengthSq(),g=Math.abs(1-l*l);let _,v,S,E;if(g>0)if(_=l*d-u,v=l*u-d,E=a*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,S=_*(_+l*v+2*u)+v*(l*_+v+2*d)+p}else v=a,_=Math.max(0,-(l*v+u)),S=-_*_+v*(v+2*d)+p;else v=-a,_=Math.max(0,-(l*v+u)),S=-_*_+v*(v+2*d)+p;else v<=-E?(_=Math.max(0,-(-l*a+u)),v=_>0?-a:Math.min(Math.max(-a,-d),a),S=-_*_+v*(v+2*d)+p):v<=E?(_=0,v=Math.min(Math.max(-a,-d),a),S=v*(v+2*d)+p):(_=Math.max(0,-(l*a+u)),v=_>0?a:Math.min(Math.max(-a,-d),a),S=-_*_+v*(v+2*d)+p);else v=l>0?-a:a,_=Math.max(0,-(l*v+u)),S=-_*_+v*(v+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Da).addScaledVector(gs,v),S}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,a=t.radius*t.radius;if(s>a)return null;const l=Math.sqrt(a-s),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,l,u,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(n=(t.min.x-v.x)*p,s=(t.max.x-v.x)*p):(n=(t.max.x-v.x)*p,s=(t.min.x-v.x)*p),g>=0?(a=(t.min.y-v.y)*g,l=(t.max.y-v.y)*g):(a=(t.max.y-v.y)*g,l=(t.min.y-v.y)*g),n>l||a>s||((a>n||isNaN(n))&&(n=a),(l<s||isNaN(s))&&(s=l),_>=0?(u=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(u=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,a){Ia.subVectors(e,t),_s.subVectors(n,t),Ua.crossVectors(Ia,_s);let l=this.direction.dot(Ua),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;ui.subVectors(this.origin,t);const d=u*this.direction.dot(_s.crossVectors(ui,_s));if(d<0)return null;const p=u*this.direction.dot(Ia.cross(ui));if(p<0||d+p>l)return null;const g=-u*ui.dot(Ua);return g<0?null:this.at(g/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(t,e,n,s,a,l,u,d,p,g,_,v,S,E,b,y){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,l,u,d,p,g,_,v,S,E,b,y)}set(t,e,n,s,a,l,u,d,p,g,_,v,S,E,b,y){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=a,m[5]=l,m[9]=u,m[13]=d,m[2]=p,m[6]=g,m[10]=_,m[14]=v,m[3]=S,m[7]=E,m[11]=b,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),a=1/er.setFromMatrixColumn(t,1).length(),l=1/er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(s),p=Math.sin(s),g=Math.cos(a),_=Math.sin(a);if(t.order==="XYZ"){const v=l*g,S=l*_,E=u*g,b=u*_;e[0]=d*g,e[4]=-d*_,e[8]=p,e[1]=S+E*p,e[5]=v-b*p,e[9]=-u*d,e[2]=b-v*p,e[6]=E+S*p,e[10]=l*d}else if(t.order==="YXZ"){const v=d*g,S=d*_,E=p*g,b=p*_;e[0]=v+b*u,e[4]=E*u-S,e[8]=l*p,e[1]=l*_,e[5]=l*g,e[9]=-u,e[2]=S*u-E,e[6]=b+v*u,e[10]=l*d}else if(t.order==="ZXY"){const v=d*g,S=d*_,E=p*g,b=p*_;e[0]=v-b*u,e[4]=-l*_,e[8]=E+S*u,e[1]=S+E*u,e[5]=l*g,e[9]=b-v*u,e[2]=-l*p,e[6]=u,e[10]=l*d}else if(t.order==="ZYX"){const v=l*g,S=l*_,E=u*g,b=u*_;e[0]=d*g,e[4]=E*p-S,e[8]=v*p+b,e[1]=d*_,e[5]=b*p+v,e[9]=S*p-E,e[2]=-p,e[6]=u*d,e[10]=l*d}else if(t.order==="YZX"){const v=l*d,S=l*p,E=u*d,b=u*p;e[0]=d*g,e[4]=b-v*_,e[8]=E*_+S,e[1]=_,e[5]=l*g,e[9]=-u*g,e[2]=-p*g,e[6]=S*_+E,e[10]=v-b*_}else if(t.order==="XZY"){const v=l*d,S=l*p,E=u*d,b=u*p;e[0]=d*g,e[4]=-_,e[8]=p*g,e[1]=v*_+b,e[5]=l*g,e[9]=S*_-E,e[2]=E*_-S,e[6]=u*g,e[10]=b*_+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zf,t,Qf)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),fi.crossVectors(n,gn),fi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),fi.crossVectors(n,gn)),fi.normalize(),vs.crossVectors(gn,fi),s[0]=fi.x,s[4]=vs.x,s[8]=gn.x,s[1]=fi.y,s[5]=vs.y,s[9]=gn.y,s[2]=fi.z,s[6]=vs.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,l=n[0],u=n[4],d=n[8],p=n[12],g=n[1],_=n[5],v=n[9],S=n[13],E=n[2],b=n[6],y=n[10],m=n[14],N=n[3],P=n[7],D=n[11],K=n[15],B=s[0],c=s[4],Y=s[8],R=s[12],C=s[1],H=s[5],it=s[9],q=s[13],ot=s[2],ht=s[6],ct=s[10],dt=s[14],rt=s[3],bt=s[7],Dt=s[11],Bt=s[15];return a[0]=l*B+u*C+d*ot+p*rt,a[4]=l*c+u*H+d*ht+p*bt,a[8]=l*Y+u*it+d*ct+p*Dt,a[12]=l*R+u*q+d*dt+p*Bt,a[1]=g*B+_*C+v*ot+S*rt,a[5]=g*c+_*H+v*ht+S*bt,a[9]=g*Y+_*it+v*ct+S*Dt,a[13]=g*R+_*q+v*dt+S*Bt,a[2]=E*B+b*C+y*ot+m*rt,a[6]=E*c+b*H+y*ht+m*bt,a[10]=E*Y+b*it+y*ct+m*Dt,a[14]=E*R+b*q+y*dt+m*Bt,a[3]=N*B+P*C+D*ot+K*rt,a[7]=N*c+P*H+D*ht+K*bt,a[11]=N*Y+P*it+D*ct+K*Dt,a[15]=N*R+P*q+D*dt+K*Bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],l=t[1],u=t[5],d=t[9],p=t[13],g=t[2],_=t[6],v=t[10],S=t[14],E=t[3],b=t[7],y=t[11],m=t[15];return E*(+a*d*_-s*p*_-a*u*v+n*p*v+s*u*S-n*d*S)+b*(+e*d*S-e*p*v+a*l*v-s*l*S+s*p*g-a*d*g)+y*(+e*p*_-e*u*S-a*l*_+n*l*S+a*u*g-n*p*g)+m*(-s*u*g-e*d*_+e*u*v+s*l*_-n*l*v+n*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],l=t[4],u=t[5],d=t[6],p=t[7],g=t[8],_=t[9],v=t[10],S=t[11],E=t[12],b=t[13],y=t[14],m=t[15],N=_*y*p-b*v*p+b*d*S-u*y*S-_*d*m+u*v*m,P=E*v*p-g*y*p-E*d*S+l*y*S+g*d*m-l*v*m,D=g*b*p-E*_*p+E*u*S-l*b*S-g*u*m+l*_*m,K=E*_*d-g*b*d-E*u*v+l*b*v+g*u*y-l*_*y,B=e*N+n*P+s*D+a*K;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const c=1/B;return t[0]=N*c,t[1]=(b*v*a-_*y*a-b*s*S+n*y*S+_*s*m-n*v*m)*c,t[2]=(u*y*a-b*d*a+b*s*p-n*y*p-u*s*m+n*d*m)*c,t[3]=(_*d*a-u*v*a-_*s*p+n*v*p+u*s*S-n*d*S)*c,t[4]=P*c,t[5]=(g*y*a-E*v*a+E*s*S-e*y*S-g*s*m+e*v*m)*c,t[6]=(E*d*a-l*y*a-E*s*p+e*y*p+l*s*m-e*d*m)*c,t[7]=(l*v*a-g*d*a+g*s*p-e*v*p-l*s*S+e*d*S)*c,t[8]=D*c,t[9]=(E*_*a-g*b*a-E*n*S+e*b*S+g*n*m-e*_*m)*c,t[10]=(l*b*a-E*u*a+E*n*p-e*b*p-l*n*m+e*u*m)*c,t[11]=(g*u*a-l*_*a-g*n*p+e*_*p+l*n*S-e*u*S)*c,t[12]=K*c,t[13]=(g*b*s-E*_*s+E*n*v-e*b*v-g*n*y+e*_*y)*c,t[14]=(E*u*s-l*b*s-E*n*d+e*b*d+l*n*y-e*u*y)*c,t[15]=(l*_*s-g*u*s+g*n*d-e*_*d-l*n*v+e*u*v)*c,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,l=t.x,u=t.y,d=t.z,p=a*l,g=a*u;return this.set(p*l+n,p*u-s*d,p*d+s*u,0,p*u+s*d,g*u+n,g*d-s*l,0,p*d-s*u,g*d+s*l,a*d*d+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,l){return this.set(1,n,a,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,l=e._y,u=e._z,d=e._w,p=a+a,g=l+l,_=u+u,v=a*p,S=a*g,E=a*_,b=l*g,y=l*_,m=u*_,N=d*p,P=d*g,D=d*_,K=n.x,B=n.y,c=n.z;return s[0]=(1-(b+m))*K,s[1]=(S+D)*K,s[2]=(E-P)*K,s[3]=0,s[4]=(S-D)*B,s[5]=(1-(v+m))*B,s[6]=(y+N)*B,s[7]=0,s[8]=(E+P)*c,s[9]=(y-N)*c,s[10]=(1-(v+b))*c,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=er.set(s[0],s[1],s[2]).length();const l=er.set(s[4],s[5],s[6]).length(),u=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const p=1/a,g=1/l,_=1/u;return Cn.elements[0]*=p,Cn.elements[1]*=p,Cn.elements[2]*=p,Cn.elements[4]*=g,Cn.elements[5]*=g,Cn.elements[6]*=g,Cn.elements[8]*=_,Cn.elements[9]*=_,Cn.elements[10]*=_,e.setFromRotationMatrix(Cn),n.x=a,n.y=l,n.z=u,this}makePerspective(t,e,n,s,a,l,u=ei){const d=this.elements,p=2*a/(e-t),g=2*a/(n-s),_=(e+t)/(e-t),v=(n+s)/(n-s);let S,E;if(u===ei)S=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(u===js)S=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,n,s,a,l,u=ei){const d=this.elements,p=1/(e-t),g=1/(n-s),_=1/(l-a),v=(e+t)*p,S=(n+s)*g;let E,b;if(u===ei)E=(l+a)*_,b=-2*_;else if(u===js)E=a*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=b,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const er=new k,Cn=new He,Zf=new k(0,0,0),Qf=new k(1,1,1),fi=new k,vs=new k,gn=new k,Wc=new He,Xc=new Jr;class Vn{constructor(t=0,e=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],l=s[4],u=s[8],d=s[1],p=s[5],g=s[9],_=s[2],v=s[6],S=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-l,p)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-nn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,p));break;case"YZX":this._z=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let th=0;const qc=new k,nr=new Jr,$n=new He,xs=new k,Or=new k,eh=new k,nh=new Jr,Yc=new k(1,0,0),jc=new k(0,1,0),$c=new k(0,0,1),Kc={type:"added"},ih={type:"removed"},ir={type:"childadded",child:null},Na={type:"childremoved",child:null};class dn extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new k,e=new Vn,n=new Jr,s=new k(1,1,1);function a(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new le}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Or,xs,this.up):$n.lookAt(xs,Or,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),nr.setFromRotationMatrix($n),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kc),ir.child=t,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ih),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kc),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,eh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];a(t.shapes,_)}else a(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,p=this.material.length;d<p;d++)u.push(a(t.materials,this.material[d]));s.material=u}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(t.animations,d))}}if(e){const u=l(t.geometries),d=l(t.materials),p=l(t.textures),g=l(t.images),_=l(t.shapes),v=l(t.skeletons),S=l(t.animations),E=l(t.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),_.length>0&&(n.shapes=_),v.length>0&&(n.skeletons=v),S.length>0&&(n.animations=S),E.length>0&&(n.nodes=E)}return n.object=s,n;function l(u){const d=[];for(const p in u){const g=u[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}dn.DEFAULT_UP=new k(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new k,Kn=new k,Fa=new k,Jn=new k,rr=new k,sr=new k,Jc=new k,Oa=new k,Ba=new k,za=new k;class Hn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){Rn.subVectors(s,e),Kn.subVectors(n,e),Fa.subVectors(t,e);const l=Rn.dot(Rn),u=Rn.dot(Kn),d=Rn.dot(Fa),p=Kn.dot(Kn),g=Kn.dot(Fa),_=l*p-u*u;if(_===0)return a.set(0,0,0),null;const v=1/_,S=(p*d-u*g)*v,E=(l*g-u*d)*v;return a.set(1-S-E,E,S)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,a,l,u,d){return this.getBarycoord(t,e,n,s,Jn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Jn.x),d.addScaledVector(l,Jn.y),d.addScaledVector(u,Jn.z),d)}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Kn.subVectors(t,e),Rn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let l,u;rr.subVectors(s,n),sr.subVectors(a,n),Oa.subVectors(t,n);const d=rr.dot(Oa),p=sr.dot(Oa);if(d<=0&&p<=0)return e.copy(n);Ba.subVectors(t,s);const g=rr.dot(Ba),_=sr.dot(Ba);if(g>=0&&_<=g)return e.copy(s);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return l=d/(d-g),e.copy(n).addScaledVector(rr,l);za.subVectors(t,a);const S=rr.dot(za),E=sr.dot(za);if(E>=0&&S<=E)return e.copy(a);const b=S*p-d*E;if(b<=0&&p>=0&&E<=0)return u=p/(p-E),e.copy(n).addScaledVector(sr,u);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return Jc.subVectors(a,s),u=(_-g)/(_-g+(S-E)),e.copy(s).addScaledVector(Jc,u);const m=1/(y+b+v);return l=b*m,u=v*m,e.copy(n).addScaledVector(rr,l).addScaledVector(sr,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class be{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=kf(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,l=2*n-a;this.r=Ha(l,a,t+1/3),this.g=Ha(l,a,t),this.b=Ha(l,a,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,e=Bn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){const n=Ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}copyLinearToSRGB(t){return this.r=wa(t.r),this.g=wa(t.g),this.b=wa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return we.fromWorkingColorSpace(en.copy(this),t),Math.round(nn(en.r*255,0,255))*65536+Math.round(nn(en.g*255,0,255))*256+Math.round(nn(en.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(en.copy(this),e);const n=en.r,s=en.g,a=en.b,l=Math.max(n,s,a),u=Math.min(n,s,a);let d,p;const g=(u+l)/2;if(u===l)d=0,p=0;else{const _=l-u;switch(p=g<=.5?_/(l+u):_/(2-l-u),l){case n:d=(s-a)/_+(s<a?6:0);break;case s:d=(a-n)/_+2;break;case a:d=(n-s)/_+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Bn){we.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(ys);const n=ba(hi.h,ys.h,e),s=ba(hi.s,ys.s,e),a=ba(hi.l,ys.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new be;be.NAMES=Ql;let rh=0;class Qr extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=pr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=so,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}if(e){const a=s(t.textures),l=s(t.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ts extends Qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new k,Ms=new Xt;class kn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Vr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),a=hn(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bc&&(t.usage=this.usage),t}}class tu extends kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class rn extends kn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sh=0;const Sn=new He,ka=new dn,ar=new k,_n=new Zr,Br=new Zr,Ke=new k;class Gn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($l(t)?eu:tu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new le().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new rn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];_n.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){const u=e[a];Br.setFromBufferAttribute(u),this.morphTargetsRelative?(Ke.addVectors(_n.min,Br.min),_n.expandByPoint(Ke),Ke.addVectors(_n.max,Br.max),_n.expandByPoint(Ke)):(_n.expandByPoint(Br.min),_n.expandByPoint(Br.max))}_n.getCenter(n);let s=0;for(let a=0,l=t.count;a<l;a++)Ke.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let a=0,l=e.length;a<l;a++){const u=e[a],d=this.morphTargetsRelative;for(let p=0,g=u.count;p<g;p++)Ke.fromBufferAttribute(u,p),d&&(ar.fromBufferAttribute(t,p),Ke.add(ar)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],d=[];for(let Y=0;Y<n.count;Y++)u[Y]=new k,d[Y]=new k;const p=new k,g=new k,_=new k,v=new Xt,S=new Xt,E=new Xt,b=new k,y=new k;function m(Y,R,C){p.fromBufferAttribute(n,Y),g.fromBufferAttribute(n,R),_.fromBufferAttribute(n,C),v.fromBufferAttribute(a,Y),S.fromBufferAttribute(a,R),E.fromBufferAttribute(a,C),g.sub(p),_.sub(p),S.sub(v),E.sub(v);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(H),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),u[Y].add(b),u[R].add(b),u[C].add(b),d[Y].add(y),d[R].add(y),d[C].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let Y=0,R=N.length;Y<R;++Y){const C=N[Y],H=C.start,it=C.count;for(let q=H,ot=H+it;q<ot;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const P=new k,D=new k,K=new k,B=new k;function c(Y){K.fromBufferAttribute(s,Y),B.copy(K);const R=u[Y];P.copy(R),P.sub(K.multiplyScalar(K.dot(R))).normalize(),D.crossVectors(B,R);const H=D.dot(d[Y])<0?-1:1;l.setXYZW(Y,P.x,P.y,P.z,H)}for(let Y=0,R=N.length;Y<R;++Y){const C=N[Y],H=C.start,it=C.count;for(let q=H,ot=H+it;q<ot;q+=3)c(t.getX(q+0)),c(t.getX(q+1)),c(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let v=0,S=n.count;v<S;v++)n.setXYZ(v,0,0,0);const s=new k,a=new k,l=new k,u=new k,d=new k,p=new k,g=new k,_=new k;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),b=t.getX(v+1),y=t.getX(v+2);s.fromBufferAttribute(e,E),a.fromBufferAttribute(e,b),l.fromBufferAttribute(e,y),g.subVectors(l,a),_.subVectors(s,a),g.cross(_),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),p.fromBufferAttribute(n,y),u.add(g),d.add(g),p.add(g),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(b,d.x,d.y,d.z),n.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=e.count;v<S;v+=3)s.fromBufferAttribute(e,v+0),a.fromBufferAttribute(e,v+1),l.fromBufferAttribute(e,v+2),g.subVectors(l,a),_.subVectors(s,a),g.cross(_),n.setXYZ(v+0,g.x,g.y,g.z),n.setXYZ(v+1,g.x,g.y,g.z),n.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(u,d){const p=u.array,g=u.itemSize,_=u.normalized,v=new p.constructor(d.length*g);let S=0,E=0;for(let b=0,y=d.length;b<y;b++){u.isInterleavedBufferAttribute?S=d[b]*u.data.stride+u.offset:S=d[b]*g;for(let m=0;m<g;m++)v[E++]=p[S++]}return new kn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,n=this.index.array,s=this.attributes;for(const u in s){const d=s[u],p=t(d,n);e.setAttribute(u,p)}const a=this.morphAttributes;for(const u in a){const d=[],p=a[u];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=t(v,n);d.push(S)}e.morphAttributes[u]=d}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const p=l[u];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const d in n){const p=n[d];t.data.attributes[d]=p.toJSON(t.data)}const s={};let a=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(s[d]=g,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const p in s){const g=s[p];this.setAttribute(p,g.clone(e))}const a=t.morphAttributes;for(const p in a){const g=[],_=a[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(e));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let p=0,g=l.length;p<g;p++){const _=l[p];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new He,Li=new Jf,Ss=new $o,Qc=new k,or=new k,cr=new k,lr=new k,Va=new k,Es=new k,Ts=new Xt,bs=new Xt,As=new Xt,tl=new k,el=new k,nl=new k,ws=new k,Cs=new k;class Pe extends dn{constructor(t=new Gn,e=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const u=this.morphTargetInfluences;if(a&&u){Es.set(0,0,0);for(let d=0,p=a.length;d<p;d++){const g=u[d],_=a[d];g!==0&&(Va.fromBufferAttribute(_,t),l?Es.addScaledVector(Va,g):Es.addScaledVector(Va.sub(e),g))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(a),Li.copy(t.ray).recast(t.near),!(Ss.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Ss,Qc)===null||Li.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(Zc.copy(a).invert(),Li.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const a=this.geometry,l=this.material,u=a.index,d=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,v=a.groups,S=a.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,b=v.length;E<b;E++){const y=v[E],m=l[y.materialIndex],N=Math.max(y.start,S.start),P=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let D=N,K=P;D<K;D+=3){const B=u.getX(D),c=u.getX(D+1),Y=u.getX(D+2);s=Rs(this,m,t,n,p,g,_,B,c,Y),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const E=Math.max(0,S.start),b=Math.min(u.count,S.start+S.count);for(let y=E,m=b;y<m;y+=3){const N=u.getX(y),P=u.getX(y+1),D=u.getX(y+2);s=Rs(this,l,t,n,p,g,_,N,P,D),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let E=0,b=v.length;E<b;E++){const y=v[E],m=l[y.materialIndex],N=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let D=N,K=P;D<K;D+=3){const B=D,c=D+1,Y=D+2;s=Rs(this,m,t,n,p,g,_,B,c,Y),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let y=E,m=b;y<m;y+=3){const N=y,P=y+1,D=y+2;s=Rs(this,l,t,n,p,g,_,N,P,D),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}}function ah(i,t,e,n,s,a,l,u){let d;if(t.side===cn?d=n.intersectTriangle(l,a,s,!0,u):d=n.intersectTriangle(s,a,l,t.side===_i,u),d===null)return null;Cs.copy(u),Cs.applyMatrix4(i.matrixWorld);const p=e.ray.origin.distanceTo(Cs);return p<e.near||p>e.far?null:{distance:p,point:Cs.clone(),object:i}}function Rs(i,t,e,n,s,a,l,u,d,p){i.getVertexPosition(u,or),i.getVertexPosition(d,cr),i.getVertexPosition(p,lr);const g=ah(i,t,e,n,or,cr,lr,ws);if(g){s&&(Ts.fromBufferAttribute(s,u),bs.fromBufferAttribute(s,d),As.fromBufferAttribute(s,p),g.uv=Hn.getInterpolation(ws,or,cr,lr,Ts,bs,As,new Xt)),a&&(Ts.fromBufferAttribute(a,u),bs.fromBufferAttribute(a,d),As.fromBufferAttribute(a,p),g.uv1=Hn.getInterpolation(ws,or,cr,lr,Ts,bs,As,new Xt)),l&&(tl.fromBufferAttribute(l,u),el.fromBufferAttribute(l,d),nl.fromBufferAttribute(l,p),g.normal=Hn.getInterpolation(ws,or,cr,lr,tl,el,nl,new k),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const _={a:u,b:d,c:p,normal:new k,materialIndex:0};Hn.getNormal(or,cr,lr,_.normal),g.face=_}return g}class es extends Gn{constructor(t=1,e=1,n=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:l};const u=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const d=[],p=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,n,e,t,l,a,0),E("z","y","x",1,-1,n,e,-t,l,a,1),E("x","z","y",1,1,t,n,e,s,l,2),E("x","z","y",1,-1,t,n,-e,s,l,3),E("x","y","z",1,-1,t,e,n,s,a,4),E("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(_,2));function E(b,y,m,N,P,D,K,B,c,Y,R){const C=D/c,H=K/Y,it=D/2,q=K/2,ot=B/2,ht=c+1,ct=Y+1;let dt=0,rt=0;const bt=new k;for(let Dt=0;Dt<ct;Dt++){const Bt=Dt*H-q;for(let ue=0;ue<ht;ue++){const Me=ue*C-it;bt[b]=Me*N,bt[y]=Bt*P,bt[m]=ot,p.push(bt.x,bt.y,bt.z),bt[b]=0,bt[y]=0,bt[m]=B>0?1:-1,g.push(bt.x,bt.y,bt.z),_.push(ue/c),_.push(1-Dt/Y),dt+=1}}for(let Dt=0;Dt<Y;Dt++)for(let Bt=0;Bt<c;Bt++){const ue=v+Bt+ht*Dt,Me=v+Bt+ht*(Dt+1),lt=v+(Bt+1)+ht*(Dt+1),_t=v+(Bt+1)+ht*Dt;d.push(ue,Me,_t),d.push(Me,lt,_t),rt+=6}u.addGroup(S,rt,R),S+=rt,v+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){const t={};for(let e=0;e<i.length;e++){const n=Mr(i[e]);for(const s in n)t[s]=n[s]}return t}function oh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const iu={clone:Mr,merge:on};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=oh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ru extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new k,il=new Xt,rl=new Xt;class vn extends ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,il,rl),e.subVectors(rl,il)}setViewOffset(t,e,n,s,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,p=l.fullHeight;a+=l.offsetX*s/d,e-=l.offsetY*n/p,s*=l.width/d,n*=l.height/p}const u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ur=-90,fr=1;class uh extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(ur,fr,t,e);s.layers=this.layers,this.add(s);const a=new vn(ur,fr,t,e);a.layers=this.layers,this.add(a);const l=new vn(ur,fr,t,e);l.layers=this.layers,this.add(l);const u=new vn(ur,fr,t,e);u.layers=this.layers,this.add(u);const d=new vn(ur,fr,t,e);d.layers=this.layers,this.add(d);const p=new vn(ur,fr,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,l,u,d]=e;for(const p of e)this.remove(p);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,d,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,l),t.setRenderTarget(n,2,s),t.render(e,u),t.setRenderTarget(n,3,s),t.render(e,d),t.setRenderTarget(n,4,s),t.render(e,p),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),t.render(e,g),t.setRenderTarget(_,v,S),t.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class su extends ln{constructor(t,e,n,s,a,l,u,d,p,g){t=t!==void 0?t:[],e=e!==void 0?e:_r,super(t,e,n,s,a,l,u,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new su(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new es(5,5,5),a=new ii({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:mi});a.uniforms.tEquirect.value=e;const l=new Pe(s,a),u=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Pn),new uh(1,10,this).update(t,l),e.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,s);t.setRenderTarget(a)}}const Ga=new k,hh=new k,dh=new le;class Ni{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ga.subVectors(n,e).cross(hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dh.getNormalMatrix(t),s=this.coplanarPoint(Ga).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new $o,Ps=new k;class Ko{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,a=new Ni,l=new Ni){this.planes=[t,e,n,s,a,l]}set(t,e,n,s,a,l){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(n),u[3].copy(s),u[4].copy(a),u[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){const n=this.planes,s=t.elements,a=s[0],l=s[1],u=s[2],d=s[3],p=s[4],g=s[5],_=s[6],v=s[7],S=s[8],E=s[9],b=s[10],y=s[11],m=s[12],N=s[13],P=s[14],D=s[15];if(n[0].setComponents(d-a,v-p,y-S,D-m).normalize(),n[1].setComponents(d+a,v+p,y+S,D+m).normalize(),n[2].setComponents(d+l,v+g,y+E,D+N).normalize(),n[3].setComponents(d-l,v-g,y-E,D-N).normalize(),n[4].setComponents(d-u,v-_,y-b,D-P).normalize(),e===ei)n[5].setComponents(d+u,v+_,y+b,D+P).normalize();else if(e===js)n[5].setComponents(u,_,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ps.x=s.normal.x>0?t.max.x:t.min.x,Ps.y=s.normal.y>0?t.max.y:t.min.y,Ps.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let i=null,t=!1,e=null,n=null;function s(a,l){e(a,l),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function ph(i){const t=new WeakMap;function e(u,d){const p=u.array,g=u.usage,_=p.byteLength,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,p,g),u.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(p instanceof Uint16Array)u.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:_}}function n(u,d,p){const g=d.array,_=d._updateRange,v=d.updateRanges;if(i.bindBuffer(p,u),_.count===-1&&v.length===0&&i.bufferSubData(p,0,g),v.length!==0){for(let S=0,E=v.length;S<E;S++){const b=v[S];i.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}_.count!==-1&&(i.bufferSubData(p,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count),_.count=-1),d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=t.get(u);d&&(i.deleteBuffer(d.buffer),t.delete(u))}function l(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=t.get(u);(!g||g.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const p=t.get(u);if(p===void 0)t.set(u,e(u,d));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,u,d),p.version=u.version}}return{get:s,remove:a,update:l}}class Js extends Gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,l=e/2,u=Math.floor(n),d=Math.floor(s),p=u+1,g=d+1,_=t/u,v=e/d,S=[],E=[],b=[],y=[];for(let m=0;m<g;m++){const N=m*v-l;for(let P=0;P<p;P++){const D=P*_-a;E.push(D,-N,0),b.push(0,0,1),y.push(P/u),y.push(1-m/d)}}for(let m=0;m<d;m++)for(let N=0;N<u;N++){const P=N+p*m,D=N+p*(m+1),K=N+1+p*(m+1),B=N+1+p*m;S.push(P,D,B),S.push(D,K,B)}this.setIndex(S),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(b,3)),this.setAttribute("uv",new rn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.width,t.height,t.widthSegments,t.heightSegments)}}var mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",qh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ep=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ip=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:mh,alphahash_pars_fragment:gh,alphamap_fragment:_h,alphamap_pars_fragment:vh,alphatest_fragment:xh,alphatest_pars_fragment:yh,aomap_fragment:Mh,aomap_pars_fragment:Sh,batching_pars_vertex:Eh,batching_vertex:Th,begin_vertex:bh,beginnormal_vertex:Ah,bsdfs:wh,iridescence_fragment:Ch,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Ih,color_fragment:Uh,color_pars_fragment:Nh,color_pars_vertex:Fh,color_vertex:Oh,common:Bh,cube_uv_reflection_fragment:zh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:kh,displacementmap_vertex:Vh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Wh,colorspace_fragment:Xh,colorspace_pars_fragment:qh,envmap_fragment:Yh,envmap_common_pars_fragment:jh,envmap_pars_fragment:$h,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:od,envmap_vertex:Jh,fog_vertex:Zh,fog_pars_vertex:Qh,fog_fragment:td,fog_pars_fragment:ed,gradientmap_pars_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:rd,lights_lambert_pars_fragment:sd,lights_pars_begin:ad,lights_toon_fragment:cd,lights_toon_pars_fragment:ld,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:hd,lights_physical_pars_fragment:dd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:yd,map_fragment:Md,map_pars_fragment:Sd,map_particle_fragment:Ed,map_particle_pars_fragment:Td,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Ad,morphinstance_vertex:wd,morphcolor_vertex:Cd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Id,normal_pars_fragment:Ud,normal_pars_vertex:Nd,normal_vertex:Fd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:kd,opaque_fragment:Vd,packing:Gd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:qd,dithering_pars_fragment:Yd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Zd,shadowmask_pars_fragment:Qd,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:rp,specularmap_pars_fragment:sp,tonemapping_fragment:ap,tonemapping_pars_fragment:op,transmission_fragment:cp,transmission_pars_fragment:lp,uv_pars_fragment:up,uv_pars_vertex:fp,uv_vertex:hp,worldpos_vertex:dp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:vp,cube_frag:xp,depth_vert:yp,depth_frag:Mp,distanceRGBA_vert:Sp,distanceRGBA_frag:Ep,equirect_vert:Tp,equirect_frag:bp,linedashed_vert:Ap,linedashed_frag:wp,meshbasic_vert:Cp,meshbasic_frag:Rp,meshlambert_vert:Pp,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Ip,meshnormal_vert:Up,meshnormal_frag:Np,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:zp,meshtoon_vert:Hp,meshtoon_frag:kp,points_vert:Vp,points_frag:Gp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:Yp},Et={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},zn={basic:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:on([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:on([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:on([Et.points,Et.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:on([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:on([Et.common,Et.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:on([Et.sprite,Et.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:on([Et.common,Et.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:on([Et.lights,Et.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};zn.physical={uniforms:on([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ls={r:0,b:0,g:0},Ii=new Vn,jp=new He;function $p(i,t,e,n,s,a,l){const u=new be(0);let d=a===!0?0:1,p,g,_=null,v=0,S=null;function E(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?e:t).get(P)),P}function b(N){let P=!1;const D=E(N);D===null?m(u,d):D&&D.isColor&&(m(D,1),P=!0);const K=i.xr.getEnvironmentBlendMode();K==="additive"?n.buffers.color.setClear(0,0,0,1,l):K==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(N,P){const D=E(P);D&&(D.isCubeTexture||D.mapping===$s)?(g===void 0&&(g=new Pe(new es(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Mr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(K,B,c){this.matrixWorld.copyPosition(c.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),Ii.copy(P.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(Ii)),g.material.toneMapped=we.getTransfer(D.colorSpace)!==Fe,(_!==D||v!==D.version||S!==i.toneMapping)&&(g.material.needsUpdate=!0,_=D,v=D.version,S=i.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Pe(new Js(2,2),new ii({name:"BackgroundMaterial",uniforms:Mr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=we.getTransfer(D.colorSpace)!==Fe,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,S=i.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function m(N,P){N.getRGB(Ls,nu(i)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,P,l)}return{getClearColor:function(){return u},setClearColor:function(N,P=1){u.set(N),d=P,m(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,m(u,d)},render:b,addToRenderList:y}}function Kp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=v(null);let a=s,l=!1;function u(C,H,it,q,ot){let ht=!1;const ct=_(q,it,H);a!==ct&&(a=ct,p(a.object)),ht=S(C,q,it,ot),ht&&E(C,q,it,ot),ot!==null&&t.update(ot,i.ELEMENT_ARRAY_BUFFER),(ht||l)&&(l=!1,D(C,H,it,q),ot!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function d(){return i.createVertexArray()}function p(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function _(C,H,it){const q=it.wireframe===!0;let ot=n[C.id];ot===void 0&&(ot={},n[C.id]=ot);let ht=ot[H.id];ht===void 0&&(ht={},ot[H.id]=ht);let ct=ht[q];return ct===void 0&&(ct=v(d()),ht[q]=ct),ct}function v(C){const H=[],it=[],q=[];for(let ot=0;ot<e;ot++)H[ot]=0,it[ot]=0,q[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:it,attributeDivisors:q,object:C,attributes:{},index:null}}function S(C,H,it,q){const ot=a.attributes,ht=H.attributes;let ct=0;const dt=it.getAttributes();for(const rt in dt)if(dt[rt].location>=0){const Dt=ot[rt];let Bt=ht[rt];if(Bt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(Bt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(Bt=C.instanceColor)),Dt===void 0||Dt.attribute!==Bt||Bt&&Dt.data!==Bt.data)return!0;ct++}return a.attributesNum!==ct||a.index!==q}function E(C,H,it,q){const ot={},ht=H.attributes;let ct=0;const dt=it.getAttributes();for(const rt in dt)if(dt[rt].location>=0){let Dt=ht[rt];Dt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(Dt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(Dt=C.instanceColor));const Bt={};Bt.attribute=Dt,Dt&&Dt.data&&(Bt.data=Dt.data),ot[rt]=Bt,ct++}a.attributes=ot,a.attributesNum=ct,a.index=q}function b(){const C=a.newAttributes;for(let H=0,it=C.length;H<it;H++)C[H]=0}function y(C){m(C,0)}function m(C,H){const it=a.newAttributes,q=a.enabledAttributes,ot=a.attributeDivisors;it[C]=1,q[C]===0&&(i.enableVertexAttribArray(C),q[C]=1),ot[C]!==H&&(i.vertexAttribDivisor(C,H),ot[C]=H)}function N(){const C=a.newAttributes,H=a.enabledAttributes;for(let it=0,q=H.length;it<q;it++)H[it]!==C[it]&&(i.disableVertexAttribArray(it),H[it]=0)}function P(C,H,it,q,ot,ht,ct){ct===!0?i.vertexAttribIPointer(C,H,it,ot,ht):i.vertexAttribPointer(C,H,it,q,ot,ht)}function D(C,H,it,q){b();const ot=q.attributes,ht=it.getAttributes(),ct=H.defaultAttributeValues;for(const dt in ht){const rt=ht[dt];if(rt.location>=0){let bt=ot[dt];if(bt===void 0&&(dt==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),dt==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor)),bt!==void 0){const Dt=bt.normalized,Bt=bt.itemSize,ue=t.get(bt);if(ue===void 0)continue;const Me=ue.buffer,lt=ue.type,_t=ue.bytesPerElement,Ft=lt===i.INT||lt===i.UNSIGNED_INT||bt.gpuType===Vo;if(bt.isInterleavedBufferAttribute){const It=bt.data,ee=It.stride,re=bt.offset;if(It.isInstancedInterleavedBuffer){for(let Zt=0;Zt<rt.locationSize;Zt++)m(rt.location+Zt,It.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Zt=0;Zt<rt.locationSize;Zt++)y(rt.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Zt=0;Zt<rt.locationSize;Zt++)P(rt.location+Zt,Bt/rt.locationSize,lt,Dt,ee*_t,(re+Bt/rt.locationSize*Zt)*_t,Ft)}else{if(bt.isInstancedBufferAttribute){for(let It=0;It<rt.locationSize;It++)m(rt.location+It,bt.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let It=0;It<rt.locationSize;It++)y(rt.location+It);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let It=0;It<rt.locationSize;It++)P(rt.location+It,Bt/rt.locationSize,lt,Dt,Bt*_t,Bt/rt.locationSize*It*_t,Ft)}}else if(ct!==void 0){const Dt=ct[dt];if(Dt!==void 0)switch(Dt.length){case 2:i.vertexAttrib2fv(rt.location,Dt);break;case 3:i.vertexAttrib3fv(rt.location,Dt);break;case 4:i.vertexAttrib4fv(rt.location,Dt);break;default:i.vertexAttrib1fv(rt.location,Dt)}}}}N()}function K(){Y();for(const C in n){const H=n[C];for(const it in H){const q=H[it];for(const ot in q)g(q[ot].object),delete q[ot];delete H[it]}delete n[C]}}function B(C){if(n[C.id]===void 0)return;const H=n[C.id];for(const it in H){const q=H[it];for(const ot in q)g(q[ot].object),delete q[ot];delete H[it]}delete n[C.id]}function c(C){for(const H in n){const it=n[H];if(it[C.id]===void 0)continue;const q=it[C.id];for(const ot in q)g(q[ot].object),delete q[ot];delete it[C.id]}}function Y(){R(),l=!0,a!==s&&(a=s,p(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:R,dispose:K,releaseStatesOfGeometry:B,releaseStatesOfProgram:c,initAttributes:b,enableAttribute:y,disableUnusedAttributes:N}}function Jp(i,t,e){let n;function s(p){n=p}function a(p,g){i.drawArrays(n,p,g),e.update(g,n,1)}function l(p,g,_){_!==0&&(i.drawArraysInstanced(n,p,g,_),e.update(g,n,_))}function u(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];e.update(S,n,1)}function d(p,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)l(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(n,p,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b];for(let b=0;b<v.length;b++)e.update(E,n,v[b])}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Zp(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(B){return!(B!==Ln&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(B){const c=B===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ni&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ti&&!c)}function d(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=e.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=S>0,K=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:p,logarithmicDepthBuffer:_,maxTextures:v,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:m,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:D,maxSamples:K}}function Qp(i){const t=this;let e=null,n=0,s=!1,a=!1;const l=new Ni,u=new le,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||n!==0||s;return s=v,n=_.length,S},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){e=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,m=i.get(_);if(!s||E===null||E.length===0||a&&!y)a?g(null):p();else{const N=a?0:n,P=N*4;let D=m.clippingState||null;d.value=D,D=g(E,v,P,S);for(let K=0;K!==P;++K)D[K]=e[K];m.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function g(_,v,S,E){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=d.value,E!==!0||y===null){const m=S+b*4,N=v.matrixWorldInverse;u.getNormalMatrix(N),(y===null||y.length<m)&&(y=new Float32Array(m));for(let P=0,D=S;P!==b;++P,D+=4)l.copy(_[P]).applyMatrix4(N,u),l.normal.toArray(y,D),y[D+3]=l.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function tm(i){let t=new WeakMap;function e(l,u){return u===ao?l.mapping=_r:u===oo&&(l.mapping=vr),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===ao||u===oo)if(t.has(l)){const d=t.get(l).texture;return e(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const p=new fh(d.height);return p.fromEquirectangularTexture(i,l),t.set(l,p),l.addEventListener("dispose",s),e(p.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class em extends ru{constructor(t=-1,e=1,n=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,l=n+t,u=s+e,d=s-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,l=a+p*this.view.width,u-=g*this.view.offsetY,d=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const dr=4,sl=[.125,.215,.35,.446,.526,.582],Bi=20,Wa=new em,al=new be;let Xa=null,qa=0,Ya=0,ja=!1;const Fi=(1+Math.sqrt(5))/2,hr=1/Fi,ol=[new k(-Fi,hr,0),new k(Fi,hr,0),new k(-hr,0,Fi),new k(hr,0,Fi),new k(0,Fi,-hr),new k(0,Fi,hr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=ja,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:$r,format:Ln,colorSpace:vi,depthBuffer:!1},s=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(a)),this._blurMaterial=im(a,t,e)}return s}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,n,s){const u=new vn(90,1,e,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(al),g.toneMapping=gi,g.autoClear=!1;const S=new ts({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),E=new Pe(new es,S);let b=!1;const y=t.background;y?y.isColor&&(S.color.copy(y),t.background=null,b=!0):(S.color.copy(al),b=!0);for(let m=0;m<6;m++){const N=m%3;N===0?(u.up.set(0,d[m],0),u.lookAt(p[m],0,0)):N===1?(u.up.set(0,0,d[m]),u.lookAt(0,p[m],0)):(u.up.set(0,d[m],0),u.lookAt(0,0,p[m]));const P=this._cubeSize;Ds(s,N*P,m>2?P:0,P,P),g.setRenderTarget(s),b&&g.render(E,u),g.render(t,u)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=_,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_r||t.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new Pe(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=t;const d=this._cubeSize;Ds(e,0,0,3*d,2*d),n.setRenderTarget(e),n.render(l,Wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=ol[(s-a-1)%ol.length];this._blur(t,a-1,a,l,u)}e.autoClear=n}_blur(t,e,n,s,a){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,s,"latitudinal",a),this._halfBlur(l,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,l,u){const d=this._renderer,p=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Pe(this._lodPlanes[s],p),v=p.uniforms,S=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Bi-1),b=a/E,y=isFinite(a)?1+Math.floor(g*b):Bi;y>Bi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Bi}`);const m=[];let N=0;for(let c=0;c<Bi;++c){const Y=c/b,R=Math.exp(-Y*Y/2);m.push(R),c===0?N+=R:c<y&&(N+=2*R)}for(let c=0;c<m.length;c++)m[c]=m[c]/N;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=m,v.latitudinal.value=l==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:P}=this;v.dTheta.value=E,v.mipInt.value=P-n;const D=this._sizeLods[s],K=3*D*(s>P-dr?s-P+dr:0),B=4*(this._cubeSize-D);Ds(e,K,B,3*D,2*D),d.setRenderTarget(e),d.render(_,Wa)}}function nm(i){const t=[],e=[],n=[];let s=i;const a=i-dr+1+sl.length;for(let l=0;l<a;l++){const u=Math.pow(2,s);e.push(u);let d=1/u;l>i-dr?d=sl[l-i+dr-1]:l===0&&(d=0),n.push(d);const p=1/(u-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,b=3,y=2,m=1,N=new Float32Array(b*E*S),P=new Float32Array(y*E*S),D=new Float32Array(m*E*S);for(let B=0;B<S;B++){const c=B%3*2/3-1,Y=B>2?0:-1,R=[c,Y,0,c+2/3,Y,0,c+2/3,Y+1,0,c,Y,0,c+2/3,Y+1,0,c,Y+1,0];N.set(R,b*E*B),P.set(v,y*E*B);const C=[B,B,B,B,B,B];D.set(C,m*E*B)}const K=new Gn;K.setAttribute("position",new kn(N,b)),K.setAttribute("uv",new kn(P,y)),K.setAttribute("faceIndex",new kn(D,m)),t.push(K),s>dr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ll(i,t,e){const n=new Vi(i,t,e);return n.texture.mapping=$s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function im(i,t,e){const n=new Float32Array(Bi),s=new k(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ul(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function fl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rm(i){let t=new WeakMap,e=null;function n(u){if(u&&u.isTexture){const d=u.mapping,p=d===ao||d===oo,g=d===_r||d===vr;if(p||g){let _=t.get(u);const v=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return e===null&&(e=new cl(i)),_=p?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const S=u.image;return p&&S&&S.height>0||g&&S&&s(S)?(e===null&&(e=new cl(i)),_=p?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",a),_.texture):null}}}return u}function s(u){let d=0;const p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function sm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function am(i,t,e,n){const s={},a=new WeakMap;function l(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);for(const E in v.morphAttributes){const b=v.morphAttributes[E];for(let y=0,m=b.length;y<m;y++)t.remove(b[y])}v.removeEventListener("dispose",l),delete s[v.id];const S=a.get(v);S&&(t.remove(S),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function u(_,v){return s[v.id]===!0||(v.addEventListener("dispose",l),s[v.id]=!0,e.memory.geometries++),v}function d(_){const v=_.attributes;for(const E in v)t.update(v[E],i.ARRAY_BUFFER);const S=_.morphAttributes;for(const E in S){const b=S[E];for(let y=0,m=b.length;y<m;y++)t.update(b[y],i.ARRAY_BUFFER)}}function p(_){const v=[],S=_.index,E=_.attributes.position;let b=0;if(S!==null){const N=S.array;b=S.version;for(let P=0,D=N.length;P<D;P+=3){const K=N[P+0],B=N[P+1],c=N[P+2];v.push(K,B,B,c,c,K)}}else if(E!==void 0){const N=E.array;b=E.version;for(let P=0,D=N.length/3-1;P<D;P+=3){const K=P+0,B=P+1,c=P+2;v.push(K,B,B,c,c,K)}}else return;const y=new($l(v)?eu:tu)(v,1);y.version=b;const m=a.get(_);m&&t.remove(m),a.set(_,y)}function g(_){const v=a.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return a.get(_)}return{get:u,update:d,getWireframeAttribute:g}}function om(i,t,e){let n;function s(v){n=v}let a,l;function u(v){a=v.type,l=v.bytesPerElement}function d(v,S){i.drawElements(n,S,a,v*l),e.update(S,n,1)}function p(v,S,E){E!==0&&(i.drawElementsInstanced(n,S,a,v*l,E),e.update(S,n,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,a,v,0,E);let y=0;for(let m=0;m<E;m++)y+=S[m];e.update(y,n,1)}function _(v,S,E,b){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<v.length;m++)p(v[m]/l,S[m],b[m]);else{y.multiDrawElementsInstancedWEBGL(n,S,0,a,v,0,b,0,E);let m=0;for(let N=0;N<E;N++)m+=S[N];for(let N=0;N<b.length;N++)e.update(m,n,b[N])}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function cm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,u){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=u*(a/3);break;case i.LINES:e.lines+=u*(a/2);break;case i.LINE_STRIP:e.lines+=u*(a-1);break;case i.LINE_LOOP:e.lines+=u*a;break;case i.POINTS:e.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lm(i,t,e){const n=new WeakMap,s=new Oe;function a(l,u,d){const p=l.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let v=n.get(u);if(v===void 0||v.count!==_){let C=function(){Y.dispose(),n.delete(u),u.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),y===!0&&(D=3);let K=u.attributes.position.count*D,B=1;K>t.maxTextureSize&&(B=Math.ceil(K/t.maxTextureSize),K=t.maxTextureSize);const c=new Float32Array(K*B*4*_),Y=new Jl(c,K,B,_);Y.type=ti,Y.needsUpdate=!0;const R=D*4;for(let H=0;H<_;H++){const it=m[H],q=N[H],ot=P[H],ht=K*B*4*H;for(let ct=0;ct<it.count;ct++){const dt=ct*R;E===!0&&(s.fromBufferAttribute(it,ct),c[ht+dt+0]=s.x,c[ht+dt+1]=s.y,c[ht+dt+2]=s.z,c[ht+dt+3]=0),b===!0&&(s.fromBufferAttribute(q,ct),c[ht+dt+4]=s.x,c[ht+dt+5]=s.y,c[ht+dt+6]=s.z,c[ht+dt+7]=0),y===!0&&(s.fromBufferAttribute(ot,ct),c[ht+dt+8]=s.x,c[ht+dt+9]=s.y,c[ht+dt+10]=s.z,c[ht+dt+11]=ot.itemSize===4?s.w:1)}}v={count:_,texture:Y,size:new Xt(K,B)},n.set(u,v),u.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const b=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:a}}function um(i,t,e,n){let s=new WeakMap;function a(d){const p=n.render.frame,g=d.geometry,_=t.get(d,g);if(s.get(_)!==p&&(t.update(_),s.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==p&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==p&&(v.update(),s.set(v,p))}return _}function l(){s=new WeakMap}function u(d){const p=d.target;p.removeEventListener("dispose",u),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:a,dispose:l}}class ou extends ln{constructor(t,e,n,s,a,l,u,d,p,g=mr){if(g!==mr&&g!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===mr&&(n=ki),n===void 0&&g===yr&&(n=xr),super(null,s,a,l,u,d,g,n,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:En,this.minFilter=d!==void 0?d:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cu=new ln,hl=new ou(1,1),lu=new Jl,uu=new $f,fu=new su,dl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function Er(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=dl[s];if(a===void 0&&(a=new Float32Array(s),dl[s]=a),t!==0){n.toArray(a,0);for(let l=1,u=0;l!==t;++l)u+=e,i[l].toArray(a,u)}return a}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zs(i,t){let e=pl[t];e===void 0&&(e=new Int32Array(t),pl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;_l.set(n),i.uniformMatrix2fv(this.addr,!1,_l),je(e,n)}}function gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),je(e,n)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),je(e,n)}}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(hl.compareFunction=jl,a=hl):a=cu,e.setTexture2D(t||a,s)}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uu,s)}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fu,s)}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function Pm(i){switch(i){case 5126:return fm;case 35664:return hm;case 35665:return dm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return ym;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return Em;case 36295:return Tm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Lm(i,t){i.uniform1fv(this.addr,t)}function Dm(i,t){const e=Er(t,this.size,2);i.uniform2fv(this.addr,e)}function Im(i,t){const e=Er(t,this.size,3);i.uniform3fv(this.addr,e)}function Um(i,t){const e=Er(t,this.size,4);i.uniform4fv(this.addr,e)}function Nm(i,t){const e=Er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fm(i,t){const e=Er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Om(i,t){const e=Er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bm(i,t){i.uniform1iv(this.addr,t)}function zm(i,t){i.uniform2iv(this.addr,t)}function Hm(i,t){i.uniform3iv(this.addr,t)}function km(i,t){i.uniform4iv(this.addr,t)}function Vm(i,t){i.uniform1uiv(this.addr,t)}function Gm(i,t){i.uniform2uiv(this.addr,t)}function Wm(i,t){i.uniform3uiv(this.addr,t)}function Xm(i,t){i.uniform4uiv(this.addr,t)}function qm(i,t,e){const n=this.cache,s=t.length,a=Zs(e,s);Ye(n,a)||(i.uniform1iv(this.addr,a),je(n,a));for(let l=0;l!==s;++l)e.setTexture2D(t[l]||cu,a[l])}function Ym(i,t,e){const n=this.cache,s=t.length,a=Zs(e,s);Ye(n,a)||(i.uniform1iv(this.addr,a),je(n,a));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||uu,a[l])}function jm(i,t,e){const n=this.cache,s=t.length,a=Zs(e,s);Ye(n,a)||(i.uniform1iv(this.addr,a),je(n,a));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||fu,a[l])}function $m(i,t,e){const n=this.cache,s=t.length,a=Zs(e,s);Ye(n,a)||(i.uniform1iv(this.addr,a),je(n,a));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||lu,a[l])}function Km(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Im;case 35666:return Um;case 35674:return Nm;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return Hm;case 35669:case 35673:return km;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return $m}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pm(e.type)}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Km(e.type)}}class Qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const u=s[a];u.setValue(t,e[u.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function vl(i,t){i.seq.push(t),i.map[t.id]=t}function tg(i,t,e){const n=i.name,s=n.length;for($a.lastIndex=0;;){const a=$a.exec(n),l=$a.lastIndex;let u=a[1];const d=a[2]==="]",p=a[3];if(d&&(u=u|0),p===void 0||p==="["&&l+2===s){vl(e,p===void 0?new Jm(u,i,t):new Zm(u,i,t));break}else{let _=e.map[u];_===void 0&&(_=new Qm(u),vl(e,_)),e=_}}}class Gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);tg(a,l,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,l=e.length;a!==l;++a){const u=e[a],d=n[u.id];d.needsUpdate!==!1&&u.setValue(t,d.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const l=t[s];l.id in e&&n.push(l)}return n}}function xl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const eg=37297;let ng=0;function ig(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=s;l<a;l++){const u=l+1;n.push(`${u===t?">":" "} ${u}: ${e[l]}`)}return n.join(`
`)}function rg(i){const t=we.getPrimaries(we.workingColorSpace),e=we.getPrimaries(i);let n;switch(t===e?n="":t===Ys&&e===qs?n="LinearDisplayP3ToLinearSRGB":t===qs&&e===Ys&&(n="LinearSRGBToLinearDisplayP3"),i){case vi:case Ks:return[n,"LinearTransferOETF"];case Bn:case jo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ig(i.getShaderSource(t),l)}else return s}function sg(i,t){const e=rg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ag(i,t){let e;switch(t){case Ef:e="Linear";break;case Tf:e="Reinhard";break;case bf:e="OptimizedCineon";break;case Af:e="ACESFilmic";break;case Cf:e="AgX";break;case Rf:e="Neutral";break;case wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new k;function og(){we.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function lg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ug(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),l=a.name;let u=1;a.type===i.FLOAT_MAT2&&(u=2),a.type===i.FLOAT_MAT3&&(u=3),a.type===i.FLOAT_MAT4&&(u=4),e[l]={type:a.type,location:i.getAttribLocation(t,l),locationSize:u}}return e}function Hr(i){return i!==""}function Ml(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(fg,dg)}const hg=new Map;function dg(i,t){let e=ce[t];if(e===void 0){const n=hg.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bo(e)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(pg,mg)}function mg(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Tl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function _g(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _r:case vr:t="ENVMAP_TYPE_CUBE";break;case $s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vr:t="ENVMAP_MODE_REFRACTION";break}return t}function xg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ko:t="ENVMAP_BLENDING_MULTIPLY";break;case Mf:t="ENVMAP_BLENDING_MIX";break;case Sf:t="ENVMAP_BLENDING_ADD";break}return t}function yg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mg(i,t,e,n){const s=i.getContext(),a=e.defines;let l=e.vertexShader,u=e.fragmentShader;const d=gg(e),p=_g(e),g=vg(e),_=xg(e),v=yg(e),S=cg(e),E=lg(a),b=s.createProgram();let y,m,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Hr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Hr).join(`
`),m.length>0&&(m+=`
`)):(y=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),m=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",e.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ce.tonemapping_pars_fragment:"",e.toneMapping!==gi?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),l=Bo(l),l=Ml(l,e),l=Sl(l,e),u=Bo(u),u=Ml(u,e),u=Sl(u,e),l=El(l),u=El(u),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=N+y+l,D=N+m+u,K=xl(s,s.VERTEX_SHADER,P),B=xl(s,s.FRAGMENT_SHADER,D);s.attachShader(b,K),s.attachShader(b,B),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function c(H){if(i.debug.checkShaderErrors){const it=s.getProgramInfoLog(b).trim(),q=s.getShaderInfoLog(K).trim(),ot=s.getShaderInfoLog(B).trim();let ht=!0,ct=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,K,B);else{const dt=yl(s,K,"vertex"),rt=yl(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+it+`
`+dt+`
`+rt)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(q===""||ot==="")&&(ct=!1);ct&&(H.diagnostics={runnable:ht,programLog:it,vertexShader:{log:q,prefix:y},fragmentShader:{log:ot,prefix:m}})}s.deleteShader(K),s.deleteShader(B),Y=new Gs(s,b),R=ug(s,b)}let Y;this.getUniforms=function(){return Y===void 0&&c(this),Y};let R;this.getAttributes=function(){return R===void 0&&c(this),R};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(b,eg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ng++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=K,this.fragmentShader=B,this}let Sg=0;class Eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tg(t),e.set(t,n)),n}}class Tg{constructor(t){this.id=Sg++,this.code=t,this.usedTimes=0}}function bg(i,t,e,n,s,a,l){const u=new Zl,d=new Eg,p=new Set,g=[],_=s.logarithmicDepthBuffer,v=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,C,H,it,q){const ot=it.fog,ht=q.geometry,ct=R.isMeshStandardMaterial?it.environment:null,dt=(R.isMeshStandardMaterial?e:t).get(R.envMap||ct),rt=dt&&dt.mapping===$s?dt.image.height:null,bt=E[R.type];R.precision!==null&&(S=s.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const Dt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Bt=Dt!==void 0?Dt.length:0;let ue=0;ht.morphAttributes.position!==void 0&&(ue=1),ht.morphAttributes.normal!==void 0&&(ue=2),ht.morphAttributes.color!==void 0&&(ue=3);let Me,lt,_t,Ft;if(bt){const me=zn[bt];Me=me.vertexShader,lt=me.fragmentShader}else Me=R.vertexShader,lt=R.fragmentShader,d.update(R),_t=d.getVertexShaderID(R),Ft=d.getFragmentShaderID(R);const It=i.getRenderTarget(),ee=q.isInstancedMesh===!0,re=q.isBatchedMesh===!0,Zt=!!R.map,Be=!!R.matcap,O=!!dt,Ue=!!R.aoMap,Se=!!R.lightMap,Ae=!!R.bumpMap,kt=!!R.normalMap,Ne=!!R.displacementMap,Gt=!!R.emissiveMap,ne=!!R.metalnessMap,U=!!R.roughnessMap,A=R.anisotropy>0,Z=R.clearcoat>0,pt=R.dispersion>0,mt=R.iridescence>0,j=R.sheen>0,Nt=R.transmission>0,Tt=A&&!!R.anisotropyMap,Ut=Z&&!!R.clearcoatMap,ie=Z&&!!R.clearcoatNormalMap,vt=Z&&!!R.clearcoatRoughnessMap,Pt=mt&&!!R.iridescenceMap,se=mt&&!!R.iridescenceThicknessMap,Vt=j&&!!R.sheenColorMap,At=j&&!!R.sheenRoughnessMap,Yt=!!R.specularMap,ae=!!R.specularColorMap,Re=!!R.specularIntensityMap,G=Nt&&!!R.transmissionMap,xt=Nt&&!!R.thicknessMap,ft=!!R.gradientMap,ut=!!R.alphaMap,Mt=R.alphaTest>0,jt=!!R.alphaHash,de=!!R.extensions;let _e=gi;R.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Ee={shaderID:bt,shaderType:R.type,shaderName:R.name,vertexShader:Me,fragmentShader:lt,defines:R.defines,customVertexShaderID:_t,customFragmentShaderID:Ft,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:re,batchingColor:re&&q._colorsTexture!==null,instancing:ee,instancingColor:ee&&q.instanceColor!==null,instancingMorph:ee&&q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:It===null?i.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:vi,alphaToCoverage:!!R.alphaToCoverage,map:Zt,matcap:Be,envMap:O,envMapMode:O&&dt.mapping,envMapCubeUVHeight:rt,aoMap:Ue,lightMap:Se,bumpMap:Ae,normalMap:kt,displacementMap:v&&Ne,emissiveMap:Gt,normalMapObjectSpace:kt&&R.normalMapType===If,normalMapTangentSpace:kt&&R.normalMapType===Yl,metalnessMap:ne,roughnessMap:U,anisotropy:A,anisotropyMap:Tt,clearcoat:Z,clearcoatMap:Ut,clearcoatNormalMap:ie,clearcoatRoughnessMap:vt,dispersion:pt,iridescence:mt,iridescenceMap:Pt,iridescenceThicknessMap:se,sheen:j,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:Yt,specularColorMap:ae,specularIntensityMap:Re,transmission:Nt,transmissionMap:G,thicknessMap:xt,gradientMap:ft,opaque:R.transparent===!1&&R.blending===pr&&R.alphaToCoverage===!1,alphaMap:ut,alphaTest:Mt,alphaHash:jt,combine:R.combine,mapUv:Zt&&b(R.map.channel),aoMapUv:Ue&&b(R.aoMap.channel),lightMapUv:Se&&b(R.lightMap.channel),bumpMapUv:Ae&&b(R.bumpMap.channel),normalMapUv:kt&&b(R.normalMap.channel),displacementMapUv:Ne&&b(R.displacementMap.channel),emissiveMapUv:Gt&&b(R.emissiveMap.channel),metalnessMapUv:ne&&b(R.metalnessMap.channel),roughnessMapUv:U&&b(R.roughnessMap.channel),anisotropyMapUv:Tt&&b(R.anisotropyMap.channel),clearcoatMapUv:Ut&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:se&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:At&&b(R.sheenRoughnessMap.channel),specularMapUv:Yt&&b(R.specularMap.channel),specularColorMapUv:ae&&b(R.specularColorMap.channel),specularIntensityMapUv:Re&&b(R.specularIntensityMap.channel),transmissionMapUv:G&&b(R.transmissionMap.channel),thicknessMapUv:xt&&b(R.thicknessMap.channel),alphaMapUv:ut&&b(R.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(kt||A),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ht.attributes.uv&&(Zt||ut),fog:!!ot,useFog:R.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:q.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Zt&&R.map.isVideoTexture===!0&&we.getTransfer(R.map.colorSpace)===Fe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Qn,flipSided:R.side===cn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:de&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&R.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ee.vertexUv1s=p.has(1),Ee.vertexUv2s=p.has(2),Ee.vertexUv3s=p.has(3),p.clear(),Ee}function m(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)C.push(H),C.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(N(C,R),P(C,R),C.push(i.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function N(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function P(R,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),R.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.skinning&&u.enable(4),C.morphTargets&&u.enable(5),C.morphNormals&&u.enable(6),C.morphColors&&u.enable(7),C.premultipliedAlpha&&u.enable(8),C.shadowMapEnabled&&u.enable(9),C.doubleSided&&u.enable(10),C.flipSided&&u.enable(11),C.useDepthPacking&&u.enable(12),C.dithering&&u.enable(13),C.transmission&&u.enable(14),C.sheen&&u.enable(15),C.opaque&&u.enable(16),C.pointsUvs&&u.enable(17),C.decodeVideoTexture&&u.enable(18),C.alphaToCoverage&&u.enable(19),R.push(u.mask)}function D(R){const C=E[R.type];let H;if(C){const it=zn[C];H=iu.clone(it.uniforms)}else H=R.uniforms;return H}function K(R,C){let H;for(let it=0,q=g.length;it<q;it++){const ot=g[it];if(ot.cacheKey===C){H=ot,++H.usedTimes;break}}return H===void 0&&(H=new Mg(i,C,R,a),g.push(H)),H}function B(R){if(--R.usedTimes===0){const C=g.indexOf(R);g[C]=g[g.length-1],g.pop(),R.destroy()}}function c(R){d.remove(R)}function Y(){d.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:D,acquireProgram:K,releaseProgram:B,releaseShaderCache:c,programs:g,dispose:Y}}function Ag(){let i=new WeakMap;function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function e(a){i.delete(a)}function n(a,l,u){i.get(a)[l]=u}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Al(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function l(_,v,S,E,b,y){let m=i[t];return m===void 0?(m={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:b,group:y},i[t]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=S,m.groupOrder=E,m.renderOrder=_.renderOrder,m.z=b,m.group=y),t++,m}function u(_,v,S,E,b,y){const m=l(_,v,S,E,b,y);S.transmission>0?n.push(m):S.transparent===!0?s.push(m):e.push(m)}function d(_,v,S,E,b,y){const m=l(_,v,S,E,b,y);S.transmission>0?n.unshift(m):S.transparent===!0?s.unshift(m):e.unshift(m)}function p(_,v){e.length>1&&e.sort(_||wg),n.length>1&&n.sort(v||bl),s.length>1&&s.sort(v||bl)}function g(){for(let _=t,v=i.length;_<v;_++){const S=i[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:u,unshift:d,finish:g,sort:p}}function Cg(){let i=new WeakMap;function t(n,s){const a=i.get(n);let l;return a===void 0?(l=new Al,i.set(n,[l])):s>=a.length?(l=new Al,a.push(l)):l=a[s],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new be};break;case"SpotLight":e={position:new k,direction:new k,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new be,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new be,groundColor:new be};break;case"RectAreaLight":e={color:new be,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Pg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lg=0;function Dg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ig(i){const t=new Rg,e=Pg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new k);const s=new k,a=new He,l=new He;function u(p){let g=0,_=0,v=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let S=0,E=0,b=0,y=0,m=0,N=0,P=0,D=0,K=0,B=0,c=0;p.sort(Dg);for(let R=0,C=p.length;R<C;R++){const H=p[R],it=H.color,q=H.intensity,ot=H.distance,ht=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=it.r*q,_+=it.g*q,v+=it.b*q;else if(H.isLightProbe){for(let ct=0;ct<9;ct++)n.probe[ct].addScaledVector(H.sh.coefficients[ct],q);c++}else if(H.isDirectionalLight){const ct=t.get(H);if(ct.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const dt=H.shadow,rt=e.get(H);rt.shadowIntensity=dt.intensity,rt.shadowBias=dt.bias,rt.shadowNormalBias=dt.normalBias,rt.shadowRadius=dt.radius,rt.shadowMapSize=dt.mapSize,n.directionalShadow[S]=rt,n.directionalShadowMap[S]=ht,n.directionalShadowMatrix[S]=H.shadow.matrix,N++}n.directional[S]=ct,S++}else if(H.isSpotLight){const ct=t.get(H);ct.position.setFromMatrixPosition(H.matrixWorld),ct.color.copy(it).multiplyScalar(q),ct.distance=ot,ct.coneCos=Math.cos(H.angle),ct.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ct.decay=H.decay,n.spot[b]=ct;const dt=H.shadow;if(H.map&&(n.spotLightMap[K]=H.map,K++,dt.updateMatrices(H),H.castShadow&&B++),n.spotLightMatrix[b]=dt.matrix,H.castShadow){const rt=e.get(H);rt.shadowIntensity=dt.intensity,rt.shadowBias=dt.bias,rt.shadowNormalBias=dt.normalBias,rt.shadowRadius=dt.radius,rt.shadowMapSize=dt.mapSize,n.spotShadow[b]=rt,n.spotShadowMap[b]=ht,D++}b++}else if(H.isRectAreaLight){const ct=t.get(H);ct.color.copy(it).multiplyScalar(q),ct.halfWidth.set(H.width*.5,0,0),ct.halfHeight.set(0,H.height*.5,0),n.rectArea[y]=ct,y++}else if(H.isPointLight){const ct=t.get(H);if(ct.color.copy(H.color).multiplyScalar(H.intensity),ct.distance=H.distance,ct.decay=H.decay,H.castShadow){const dt=H.shadow,rt=e.get(H);rt.shadowIntensity=dt.intensity,rt.shadowBias=dt.bias,rt.shadowNormalBias=dt.normalBias,rt.shadowRadius=dt.radius,rt.shadowMapSize=dt.mapSize,rt.shadowCameraNear=dt.camera.near,rt.shadowCameraFar=dt.camera.far,n.pointShadow[E]=rt,n.pointShadowMap[E]=ht,n.pointShadowMatrix[E]=H.shadow.matrix,P++}n.point[E]=ct,E++}else if(H.isHemisphereLight){const ct=t.get(H);ct.skyColor.copy(H.color).multiplyScalar(q),ct.groundColor.copy(H.groundColor).multiplyScalar(q),n.hemi[m]=ct,m++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=_,n.ambient[2]=v;const Y=n.hash;(Y.directionalLength!==S||Y.pointLength!==E||Y.spotLength!==b||Y.rectAreaLength!==y||Y.hemiLength!==m||Y.numDirectionalShadows!==N||Y.numPointShadows!==P||Y.numSpotShadows!==D||Y.numSpotMaps!==K||Y.numLightProbes!==c)&&(n.directional.length=S,n.spot.length=b,n.rectArea.length=y,n.point.length=E,n.hemi.length=m,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=D+K-B,n.spotLightMap.length=K,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=c,Y.directionalLength=S,Y.pointLength=E,Y.spotLength=b,Y.rectAreaLength=y,Y.hemiLength=m,Y.numDirectionalShadows=N,Y.numPointShadows=P,Y.numSpotShadows=D,Y.numSpotMaps=K,Y.numLightProbes=c,n.version=Lg++)}function d(p,g){let _=0,v=0,S=0,E=0,b=0;const y=g.matrixWorldInverse;for(let m=0,N=p.length;m<N;m++){const P=p[m];if(P.isDirectionalLight){const D=n.directional[_];D.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(y),_++}else if(P.isSpotLight){const D=n.spot[S];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const D=n.rectArea[E];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),l.identity(),a.copy(P.matrixWorld),a.premultiply(y),l.extractRotation(a),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(l),D.halfHeight.applyMatrix4(l),E++}else if(P.isPointLight){const D=n.point[v];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const D=n.hemi[b];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(y),b++}}}return{setup:u,setupView:d,state:n}}function wl(i){const t=new Ig(i),e=[],n=[];function s(g){p.camera=g,e.length=0,n.length=0}function a(g){e.push(g)}function l(g){n.push(g)}function u(){t.setup(e)}function d(g){t.setupView(e,g)}const p={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l}}function Ug(i){let t=new WeakMap;function e(s,a=0){const l=t.get(s);let u;return l===void 0?(u=new wl(i),t.set(s,[u])):a>=l.length?(u=new wl(i),l.push(u)):u=l[a],u}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ng extends Qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fg extends Qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zg(i,t,e){let n=new Ko;const s=new Xt,a=new Xt,l=new Oe,u=new Ng({depthPacking:Df}),d=new Fg,p={},g=e.maxTextureSize,_={[_i]:cn,[cn]:_i,[Qn]:Qn},v=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Og,fragmentShader:Bg}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Gn;E.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Pe(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let m=this.type;this.render=function(B,c,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const R=i.getRenderTarget(),C=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),it=i.state;it.setBlending(mi),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const q=m!==Zn&&this.type===Zn,ot=m===Zn&&this.type!==Zn;for(let ht=0,ct=B.length;ht<ct;ht++){const dt=B[ht],rt=dt.shadow;if(rt===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);const bt=rt.getFrameExtents();if(s.multiply(bt),a.copy(rt.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/bt.x),s.x=a.x*bt.x,rt.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/bt.y),s.y=a.y*bt.y,rt.mapSize.y=a.y)),rt.map===null||q===!0||ot===!0){const Bt=this.type!==Zn?{minFilter:En,magFilter:En}:{};rt.map!==null&&rt.map.dispose(),rt.map=new Vi(s.x,s.y,Bt),rt.map.texture.name=dt.name+".shadowMap",rt.camera.updateProjectionMatrix()}i.setRenderTarget(rt.map),i.clear();const Dt=rt.getViewportCount();for(let Bt=0;Bt<Dt;Bt++){const ue=rt.getViewport(Bt);l.set(a.x*ue.x,a.y*ue.y,a.x*ue.z,a.y*ue.w),it.viewport(l),rt.updateMatrices(dt,Bt),n=rt.getFrustum(),D(c,Y,rt.camera,dt,this.type)}rt.isPointLightShadow!==!0&&this.type===Zn&&N(rt,Y),rt.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(R,C,H)};function N(B,c){const Y=t.update(b);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(s.x,s.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(c,null,Y,v,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(c,null,Y,S,b,null)}function P(B,c,Y,R){let C=null;const H=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)C=H;else if(C=Y.isPointLight===!0?d:u,i.localClippingEnabled&&c.clipShadows===!0&&Array.isArray(c.clippingPlanes)&&c.clippingPlanes.length!==0||c.displacementMap&&c.displacementScale!==0||c.alphaMap&&c.alphaTest>0||c.map&&c.alphaTest>0){const it=C.uuid,q=c.uuid;let ot=p[it];ot===void 0&&(ot={},p[it]=ot);let ht=ot[q];ht===void 0&&(ht=C.clone(),ot[q]=ht,c.addEventListener("dispose",K)),C=ht}if(C.visible=c.visible,C.wireframe=c.wireframe,R===Zn?C.side=c.shadowSide!==null?c.shadowSide:c.side:C.side=c.shadowSide!==null?c.shadowSide:_[c.side],C.alphaMap=c.alphaMap,C.alphaTest=c.alphaTest,C.map=c.map,C.clipShadows=c.clipShadows,C.clippingPlanes=c.clippingPlanes,C.clipIntersection=c.clipIntersection,C.displacementMap=c.displacementMap,C.displacementScale=c.displacementScale,C.displacementBias=c.displacementBias,C.wireframeLinewidth=c.wireframeLinewidth,C.linewidth=c.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const it=i.properties.get(C);it.light=Y}return C}function D(B,c,Y,R,C){if(B.visible===!1)return;if(B.layers.test(c.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Zn)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const q=t.update(B),ot=B.material;if(Array.isArray(ot)){const ht=q.groups;for(let ct=0,dt=ht.length;ct<dt;ct++){const rt=ht[ct],bt=ot[rt.materialIndex];if(bt&&bt.visible){const Dt=P(B,bt,R,C);B.onBeforeShadow(i,B,c,Y,q,Dt,rt),i.renderBufferDirect(Y,null,q,Dt,B,rt),B.onAfterShadow(i,B,c,Y,q,Dt,rt)}}}else if(ot.visible){const ht=P(B,ot,R,C);B.onBeforeShadow(i,B,c,Y,q,ht,null),i.renderBufferDirect(Y,null,q,ht,B,null),B.onAfterShadow(i,B,c,Y,q,ht,null)}}const it=B.children;for(let q=0,ot=it.length;q<ot;q++)D(it[q],c,Y,R,C)}function K(B){B.target.removeEventListener("dispose",K);for(const Y in p){const R=p[Y],C=B.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function Hg(i){function t(){let G=!1;const xt=new Oe;let ft=null;const ut=new Oe(0,0,0,0);return{setMask:function(Mt){ft!==Mt&&!G&&(i.colorMask(Mt,Mt,Mt,Mt),ft=Mt)},setLocked:function(Mt){G=Mt},setClear:function(Mt,jt,de,_e,Ee){Ee===!0&&(Mt*=_e,jt*=_e,de*=_e),xt.set(Mt,jt,de,_e),ut.equals(xt)===!1&&(i.clearColor(Mt,jt,de,_e),ut.copy(xt))},reset:function(){G=!1,ft=null,ut.set(-1,0,0,0)}}}function e(){let G=!1,xt=null,ft=null,ut=null;return{setTest:function(Mt){Mt?Ft(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(Mt){xt!==Mt&&!G&&(i.depthMask(Mt),xt=Mt)},setFunc:function(Mt){if(ft!==Mt){switch(Mt){case pf:i.depthFunc(i.NEVER);break;case mf:i.depthFunc(i.ALWAYS);break;case gf:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case _f:i.depthFunc(i.EQUAL);break;case vf:i.depthFunc(i.GEQUAL);break;case xf:i.depthFunc(i.GREATER);break;case yf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Mt}},setLocked:function(Mt){G=Mt},setClear:function(Mt){ut!==Mt&&(i.clearDepth(Mt),ut=Mt)},reset:function(){G=!1,xt=null,ft=null,ut=null}}}function n(){let G=!1,xt=null,ft=null,ut=null,Mt=null,jt=null,de=null,_e=null,Ee=null;return{setTest:function(me){G||(me?Ft(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(me){xt!==me&&!G&&(i.stencilMask(me),xt=me)},setFunc:function(me,Tn,pn){(ft!==me||ut!==Tn||Mt!==pn)&&(i.stencilFunc(me,Tn,pn),ft=me,ut=Tn,Mt=pn)},setOp:function(me,Tn,pn){(jt!==me||de!==Tn||_e!==pn)&&(i.stencilOp(me,Tn,pn),jt=me,de=Tn,_e=pn)},setLocked:function(me){G=me},setClear:function(me){Ee!==me&&(i.clearStencil(me),Ee=me)},reset:function(){G=!1,xt=null,ft=null,ut=null,Mt=null,jt=null,de=null,_e=null,Ee=null}}}const s=new t,a=new e,l=new n,u=new WeakMap,d=new WeakMap;let p={},g={},_=new WeakMap,v=[],S=null,E=!1,b=null,y=null,m=null,N=null,P=null,D=null,K=null,B=new be(0,0,0),c=0,Y=!1,R=null,C=null,H=null,it=null,q=null;const ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ht=!1,ct=0;const dt=i.getParameter(i.VERSION);dt.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(dt)[1]),ht=ct>=1):dt.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),ht=ct>=2);let rt=null,bt={};const Dt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ue=new Oe().fromArray(Dt),Me=new Oe().fromArray(Bt);function lt(G,xt,ft,ut){const Mt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(G,jt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<ft;de++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(xt+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return jt}const _t={};_t[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Ft(i.DEPTH_TEST),a.setFunc(Ws),Ae(!1),kt(Uc),Ft(i.CULL_FACE),Ue(mi);function Ft(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function It(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function ee(G,xt){return g[G]!==xt?(i.bindFramebuffer(G,xt),g[G]=xt,G===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=xt),G===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function re(G,xt){let ft=v,ut=!1;if(G){ft=_.get(xt),ft===void 0&&(ft=[],_.set(xt,ft));const Mt=G.textures;if(ft.length!==Mt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,de=Mt.length;jt<de;jt++)ft[jt]=i.COLOR_ATTACHMENT0+jt;ft.length=Mt.length,ut=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,ut=!0);ut&&i.drawBuffers(ft)}function Zt(G){return S!==G?(i.useProgram(G),S=G,!0):!1}const Be={[Oi]:i.FUNC_ADD,[Ku]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};Be[Zu]=i.MIN,Be[Qu]=i.MAX;const O={[tf]:i.ZERO,[ef]:i.ONE,[nf]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[of]:i.DST_COLOR,[sf]:i.DST_ALPHA,[rf]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[hf]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(G,xt,ft,ut,Mt,jt,de,_e,Ee,me){if(G===mi){E===!0&&(It(i.BLEND),E=!1);return}if(E===!1&&(Ft(i.BLEND),E=!0),G!==$u){if(G!==b||me!==Y){if((y!==Oi||P!==Oi)&&(i.blendEquation(i.FUNC_ADD),y=Oi,P=Oi),me)switch(G){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,N=null,D=null,K=null,B.set(0,0,0),c=0,b=G,Y=me}return}Mt=Mt||xt,jt=jt||ft,de=de||ut,(xt!==y||Mt!==P)&&(i.blendEquationSeparate(Be[xt],Be[Mt]),y=xt,P=Mt),(ft!==m||ut!==N||jt!==D||de!==K)&&(i.blendFuncSeparate(O[ft],O[ut],O[jt],O[de]),m=ft,N=ut,D=jt,K=de),(_e.equals(B)===!1||Ee!==c)&&(i.blendColor(_e.r,_e.g,_e.b,Ee),B.copy(_e),c=Ee),b=G,Y=!1}function Se(G,xt){G.side===Qn?It(i.CULL_FACE):Ft(i.CULL_FACE);let ft=G.side===cn;xt&&(ft=!ft),Ae(ft),G.blending===pr&&G.transparent===!1?Ue(mi):Ue(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const ut=G.stencilWrite;l.setTest(ut),ut&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ft(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(G){R!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),R=G)}function kt(G){G!==qu?(Ft(i.CULL_FACE),G!==C&&(G===Uc?i.cullFace(i.BACK):G===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),C=G}function Ne(G){G!==H&&(ht&&i.lineWidth(G),H=G)}function Gt(G,xt,ft){G?(Ft(i.POLYGON_OFFSET_FILL),(it!==xt||q!==ft)&&(i.polygonOffset(xt,ft),it=xt,q=ft)):It(i.POLYGON_OFFSET_FILL)}function ne(G){G?Ft(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function U(G){G===void 0&&(G=i.TEXTURE0+ot-1),rt!==G&&(i.activeTexture(G),rt=G)}function A(G,xt,ft){ft===void 0&&(rt===null?ft=i.TEXTURE0+ot-1:ft=rt);let ut=bt[ft];ut===void 0&&(ut={type:void 0,texture:void 0},bt[ft]=ut),(ut.type!==G||ut.texture!==xt)&&(rt!==ft&&(i.activeTexture(ft),rt=ft),i.bindTexture(G,xt||_t[G]),ut.type=G,ut.texture=xt)}function Z(){const G=bt[rt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(G){ue.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ue.copy(G))}function At(G){Me.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Me.copy(G))}function Yt(G,xt){let ft=d.get(xt);ft===void 0&&(ft=new WeakMap,d.set(xt,ft));let ut=ft.get(G);ut===void 0&&(ut=i.getUniformBlockIndex(xt,G.name),ft.set(G,ut))}function ae(G,xt){const ut=d.get(xt).get(G);u.get(xt)!==ut&&(i.uniformBlockBinding(xt,ut,G.__bindingPointIndex),u.set(xt,ut))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},rt=null,bt={},g={},_=new WeakMap,v=[],S=null,E=!1,b=null,y=null,m=null,N=null,P=null,D=null,K=null,B=new be(0,0,0),c=0,Y=!1,R=null,C=null,H=null,it=null,q=null,ue.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:Ft,disable:It,bindFramebuffer:ee,drawBuffers:re,useProgram:Zt,setBlending:Ue,setMaterial:Se,setFlipSided:Ae,setCullFace:kt,setLineWidth:Ne,setPolygonOffset:Gt,setScissorTest:ne,activeTexture:U,bindTexture:A,unbindTexture:Z,compressedTexImage2D:pt,compressedTexImage3D:mt,texImage2D:Pt,texImage3D:se,updateUBOMapping:Yt,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:vt,texSubImage2D:j,texSubImage3D:Nt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Ut,scissor:Vt,viewport:At,reset:Re}}function Cl(i,t,e,n){const s=kg(n);switch(e){case Hl:return i*t;case Vl:return i*t;case Gl:return i*t*2;case Wl:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case Xl:return i*t*2/s.components*s.byteLength;case qo:return i*t*2/s.components*s.byteLength;case kl:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case Yo:return i*t*4/s.components*s.byteLength;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:case po:return Math.max(i,16)*Math.max(t,8)/4;case uo:case ho:return Math.max(i,8)*Math.max(t,8)/2;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vs:case Do:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ql:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kg(i){switch(i){case ni:case Ol:return{byteLength:1,components:1};case Xr:case Bl:case $r:return{byteLength:2,components:1};case Go:case Wo:return{byteLength:2,components:4};case ki:case Vo:case ti:return{byteLength:4,components:1};case zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vg(i,t,e,n,s,a,l){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return S?new OffscreenCanvas(U,A):qr("canvas")}function b(U,A,Z){let pt=1;const mt=ne(U);if((mt.width>Z||mt.height>Z)&&(pt=Z/Math.max(mt.width,mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const j=Math.floor(pt*mt.width),Nt=Math.floor(pt*mt.height);_===void 0&&(_=E(j,Nt));const Tt=A?E(j,Nt):_;return Tt.width=j,Tt.height=Nt,Tt.getContext("2d").drawImage(U,0,0,j,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+j+"x"+Nt+")."),Tt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),U;return U}function y(U){return U.generateMipmaps&&U.minFilter!==En&&U.minFilter!==Pn}function m(U){i.generateMipmap(U)}function N(U,A,Z,pt,mt=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let j=A;if(A===i.RED&&(Z===i.FLOAT&&(j=i.R32F),Z===i.HALF_FLOAT&&(j=i.R16F),Z===i.UNSIGNED_BYTE&&(j=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(j=i.R8UI),Z===i.UNSIGNED_SHORT&&(j=i.R16UI),Z===i.UNSIGNED_INT&&(j=i.R32UI),Z===i.BYTE&&(j=i.R8I),Z===i.SHORT&&(j=i.R16I),Z===i.INT&&(j=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(j=i.RG32F),Z===i.HALF_FLOAT&&(j=i.RG16F),Z===i.UNSIGNED_BYTE&&(j=i.RG8)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(j=i.RG8UI),Z===i.UNSIGNED_SHORT&&(j=i.RG16UI),Z===i.UNSIGNED_INT&&(j=i.RG32UI),Z===i.BYTE&&(j=i.RG8I),Z===i.SHORT&&(j=i.RG16I),Z===i.INT&&(j=i.RG32I)),A===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),A===i.RGBA){const Nt=mt?Xs:we.getTransfer(pt);Z===i.FLOAT&&(j=i.RGBA32F),Z===i.HALF_FLOAT&&(j=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(j=Nt===Fe?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function P(U,A){let Z;return U?A===null||A===ki||A===xr?Z=i.DEPTH24_STENCIL8:A===ti?Z=i.DEPTH32F_STENCIL8:A===Xr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ki||A===xr?Z=i.DEPTH_COMPONENT24:A===ti?Z=i.DEPTH_COMPONENT32F:A===Xr&&(Z=i.DEPTH_COMPONENT16),Z}function D(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==En&&U.minFilter!==Pn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function K(U){const A=U.target;A.removeEventListener("dispose",K),c(A),A.isVideoTexture&&g.delete(A)}function B(U){const A=U.target;A.removeEventListener("dispose",B),R(A)}function c(U){const A=n.get(U);if(A.__webglInit===void 0)return;const Z=U.source,pt=v.get(Z);if(pt){const mt=pt[A.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&Y(U),Object.keys(pt).length===0&&v.delete(Z)}n.remove(U)}function Y(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const Z=U.source,pt=v.get(Z);delete pt[A.__cacheKey],l.memory.textures--}function R(U){const A=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let mt=0;mt<A.__webglFramebuffer[pt].length;mt++)i.deleteFramebuffer(A.__webglFramebuffer[pt][mt]);else i.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)i.deleteFramebuffer(A.__webglFramebuffer[pt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=U.textures;for(let pt=0,mt=Z.length;pt<mt;pt++){const j=n.get(Z[pt]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),l.memory.textures--),n.remove(Z[pt])}n.remove(U)}let C=0;function H(){C=0}function it(){const U=C;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),C+=1,U}function q(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function ot(U,A){const Z=n.get(U);if(U.isVideoTexture&&Ne(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Z,U,A);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function ht(U,A){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){Me(Z,U,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function ct(U,A){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){Me(Z,U,A);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function dt(U,A){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){lt(Z,U,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}const rt={[co]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},bt={[En]:i.NEAREST,[Pf]:i.NEAREST_MIPMAP_NEAREST,[hs]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Dt={[Uf]:i.NEVER,[Hf]:i.ALWAYS,[Nf]:i.LESS,[jl]:i.LEQUAL,[Ff]:i.EQUAL,[zf]:i.GEQUAL,[Of]:i.GREATER,[Bf]:i.NOTEQUAL};function Bt(U,A){if(A.type===ti&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Pn||A.magFilter===Ea||A.magFilter===hs||A.magFilter===Hi||A.minFilter===Pn||A.minFilter===Ea||A.minFilter===hs||A.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,rt[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,rt[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,rt[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,bt[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,bt[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Dt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===En||A.minFilter!==hs&&A.minFilter!==Hi||A.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ue(U,A){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",K));const pt=A.source;let mt=v.get(pt);mt===void 0&&(mt={},v.set(pt,mt));const j=q(A);if(j!==U.__cacheKey){mt[j]===void 0&&(mt[j]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),mt[j].usedTimes++;const Nt=mt[U.__cacheKey];Nt!==void 0&&(mt[U.__cacheKey].usedTimes--,Nt.usedTimes===0&&Y(A)),U.__cacheKey=j,U.__webglTexture=mt[j].texture}return Z}function Me(U,A,Z){let pt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=i.TEXTURE_3D);const mt=ue(U,A),j=A.source;e.bindTexture(pt,U.__webglTexture,i.TEXTURE0+Z);const Nt=n.get(j);if(j.version!==Nt.__version||mt===!0){e.activeTexture(i.TEXTURE0+Z);const Tt=we.getPrimaries(we.workingColorSpace),Ut=A.colorSpace===pi?null:we.getPrimaries(A.colorSpace),ie=A.colorSpace===pi||Tt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let vt=b(A.image,!1,s.maxTextureSize);vt=Gt(A,vt);const Pt=a.convert(A.format,A.colorSpace),se=a.convert(A.type);let Vt=N(A.internalFormat,Pt,se,A.colorSpace,A.isVideoTexture);Bt(pt,A);let At;const Yt=A.mipmaps,ae=A.isVideoTexture!==!0,Re=Nt.__version===void 0||mt===!0,G=j.dataReady,xt=D(A,vt);if(A.isDepthTexture)Vt=P(A.format===yr,A.type),Re&&(ae?e.texStorage2D(i.TEXTURE_2D,1,Vt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,vt.width,vt.height,0,Pt,se,null));else if(A.isDataTexture)if(Yt.length>0){ae&&Re&&e.texStorage2D(i.TEXTURE_2D,xt,Vt,Yt[0].width,Yt[0].height);for(let ft=0,ut=Yt.length;ft<ut;ft++)At=Yt[ft],ae?G&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,Pt,se,At.data):e.texImage2D(i.TEXTURE_2D,ft,Vt,At.width,At.height,0,Pt,se,At.data);A.generateMipmaps=!1}else ae?(Re&&e.texStorage2D(i.TEXTURE_2D,xt,Vt,vt.width,vt.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Pt,se,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,vt.width,vt.height,0,Pt,se,vt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Vt,Yt[0].width,Yt[0].height,vt.depth);for(let ft=0,ut=Yt.length;ft<ut;ft++)if(At=Yt[ft],A.format!==Ln)if(Pt!==null)if(ae){if(G)if(A.layerUpdates.size>0){const Mt=Cl(At.width,At.height,A.format,A.type);for(const jt of A.layerUpdates){const de=At.data.subarray(jt*Mt/At.data.BYTES_PER_ELEMENT,(jt+1)*Mt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,jt,At.width,At.height,1,Pt,de,0,0)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,vt.depth,Pt,At.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Vt,At.width,At.height,vt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,vt.depth,Pt,se,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Vt,At.width,At.height,vt.depth,0,Pt,se,At.data)}else{ae&&Re&&e.texStorage2D(i.TEXTURE_2D,xt,Vt,Yt[0].width,Yt[0].height);for(let ft=0,ut=Yt.length;ft<ut;ft++)At=Yt[ft],A.format!==Ln?Pt!==null?ae?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Vt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?G&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,Pt,se,At.data):e.texImage2D(i.TEXTURE_2D,ft,Vt,At.width,At.height,0,Pt,se,At.data)}else if(A.isDataArrayTexture)if(ae){if(Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Vt,vt.width,vt.height,vt.depth),G)if(A.layerUpdates.size>0){const ft=Cl(vt.width,vt.height,A.format,A.type);for(const ut of A.layerUpdates){const Mt=vt.data.subarray(ut*ft/vt.data.BYTES_PER_ELEMENT,(ut+1)*ft/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,vt.width,vt.height,1,Pt,se,Mt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Pt,se,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,vt.width,vt.height,vt.depth,0,Pt,se,vt.data);else if(A.isData3DTexture)ae?(Re&&e.texStorage3D(i.TEXTURE_3D,xt,Vt,vt.width,vt.height,vt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Pt,se,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,vt.width,vt.height,vt.depth,0,Pt,se,vt.data);else if(A.isFramebufferTexture){if(Re)if(ae)e.texStorage2D(i.TEXTURE_2D,xt,Vt,vt.width,vt.height);else{let ft=vt.width,ut=vt.height;for(let Mt=0;Mt<xt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Vt,ft,ut,0,Pt,se,null),ft>>=1,ut>>=1}}else if(Yt.length>0){if(ae&&Re){const ft=ne(Yt[0]);e.texStorage2D(i.TEXTURE_2D,xt,Vt,ft.width,ft.height)}for(let ft=0,ut=Yt.length;ft<ut;ft++)At=Yt[ft],ae?G&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Pt,se,At):e.texImage2D(i.TEXTURE_2D,ft,Vt,Pt,se,At);A.generateMipmaps=!1}else if(ae){if(Re){const ft=ne(vt);e.texStorage2D(i.TEXTURE_2D,xt,Vt,ft.width,ft.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,se,vt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Pt,se,vt);y(A)&&m(pt),Nt.__version=j.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function lt(U,A,Z){if(A.image.length!==6)return;const pt=ue(U,A),mt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Z);const j=n.get(mt);if(mt.version!==j.__version||pt===!0){e.activeTexture(i.TEXTURE0+Z);const Nt=we.getPrimaries(we.workingColorSpace),Tt=A.colorSpace===pi?null:we.getPrimaries(A.colorSpace),Ut=A.colorSpace===pi||Nt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const ie=A.isCompressedTexture||A.image[0].isCompressedTexture,vt=A.image[0]&&A.image[0].isDataTexture,Pt=[];for(let ut=0;ut<6;ut++)!ie&&!vt?Pt[ut]=b(A.image[ut],!0,s.maxCubemapSize):Pt[ut]=vt?A.image[ut].image:A.image[ut],Pt[ut]=Gt(A,Pt[ut]);const se=Pt[0],Vt=a.convert(A.format,A.colorSpace),At=a.convert(A.type),Yt=N(A.internalFormat,Vt,At,A.colorSpace),ae=A.isVideoTexture!==!0,Re=j.__version===void 0||pt===!0,G=mt.dataReady;let xt=D(A,se);Bt(i.TEXTURE_CUBE_MAP,A);let ft;if(ie){ae&&Re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Yt,se.width,se.height);for(let ut=0;ut<6;ut++){ft=Pt[ut].mipmaps;for(let Mt=0;Mt<ft.length;Mt++){const jt=ft[Mt];A.format!==Ln?Vt!==null?ae?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt,0,0,jt.width,jt.height,Vt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt,Yt,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt,0,0,jt.width,jt.height,Vt,At,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt,Yt,jt.width,jt.height,0,Vt,At,jt.data)}}}else{if(ft=A.mipmaps,ae&&Re){ft.length>0&&xt++;const ut=ne(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Yt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(vt){ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Pt[ut].width,Pt[ut].height,Vt,At,Pt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Yt,Pt[ut].width,Pt[ut].height,0,Vt,At,Pt[ut].data);for(let Mt=0;Mt<ft.length;Mt++){const de=ft[Mt].image[ut].image;ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt+1,0,0,de.width,de.height,Vt,At,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt+1,Yt,de.width,de.height,0,Vt,At,de.data)}}else{ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Vt,At,Pt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Yt,Vt,At,Pt[ut]);for(let Mt=0;Mt<ft.length;Mt++){const jt=ft[Mt];ae?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt+1,0,0,Vt,At,jt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt+1,Yt,Vt,At,jt.image[ut])}}}y(A)&&m(i.TEXTURE_CUBE_MAP),j.__version=mt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function _t(U,A,Z,pt,mt,j){const Nt=a.convert(Z.format,Z.colorSpace),Tt=a.convert(Z.type),Ut=N(Z.internalFormat,Nt,Tt,Z.colorSpace);if(!n.get(A).__hasExternalTextures){const vt=Math.max(1,A.width>>j),Pt=Math.max(1,A.height>>j);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,j,Ut,vt,Pt,A.depth,0,Nt,Tt,null):e.texImage2D(mt,j,Ut,vt,Pt,0,Nt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),kt(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,mt,n.get(Z).__webglTexture,0,Ae(A)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,mt,n.get(Z).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(U,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const pt=A.depthTexture,mt=pt&&pt.isDepthTexture?pt.type:null,j=P(A.stencilBuffer,mt),Nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=Ae(A);kt(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,j,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,j,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,U)}else{const pt=A.textures;for(let mt=0;mt<pt.length;mt++){const j=pt[mt],Nt=a.convert(j.format,j.colorSpace),Tt=a.convert(j.type),Ut=N(j.internalFormat,Nt,Tt,j.colorSpace),ie=Ae(A);Z&&kt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Ut,A.width,A.height):kt(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Ut,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ot(A.depthTexture,0);const pt=n.get(A.depthTexture).__webglTexture,mt=Ae(A);if(A.depthTexture.format===mr)kt(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(A.depthTexture.format===yr)kt(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function ee(U){const A=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");It(A.__webglFramebuffer,U)}else if(Z){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]=i.createRenderbuffer(),Ft(A.__webglDepthbuffer[pt],U,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Ft(A.__webglDepthbuffer,U,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(U,A,Z){const pt=n.get(U);A!==void 0&&_t(pt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&ee(U)}function Zt(U){const A=U.texture,Z=n.get(U),pt=n.get(A);U.addEventListener("dispose",B);const mt=U.textures,j=U.isWebGLCubeRenderTarget===!0,Nt=mt.length>1;if(Nt||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=A.version,l.memory.textures++),j){Z.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Tt]=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)Z.__webglFramebuffer[Tt][Ut]=i.createFramebuffer()}else Z.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Tt=0;Tt<A.mipmaps.length;Tt++)Z.__webglFramebuffer[Tt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let Tt=0,Ut=mt.length;Tt<Ut;Tt++){const ie=n.get(mt[Tt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),l.memory.textures++)}if(U.samples>0&&kt(U)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Tt=0;Tt<mt.length;Tt++){const Ut=mt[Tt];Z.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Tt]);const ie=a.convert(Ut.format,Ut.colorSpace),vt=a.convert(Ut.type),Pt=N(Ut.internalFormat,ie,vt,Ut.colorSpace,U.isXRRenderTarget===!0),se=Ae(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Pt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(Z.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,A);for(let Tt=0;Tt<6;Tt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)_t(Z.__webglFramebuffer[Tt][Ut],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ut);else _t(Z.__webglFramebuffer[Tt],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);y(A)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let Tt=0,Ut=mt.length;Tt<Ut;Tt++){const ie=mt[Tt],vt=n.get(ie);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),Bt(i.TEXTURE_2D,ie),_t(Z.__webglFramebuffer,U,ie,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),y(ie)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Tt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,pt.__webglTexture),Bt(Tt,A),A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)_t(Z.__webglFramebuffer[Ut],U,A,i.COLOR_ATTACHMENT0,Tt,Ut);else _t(Z.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,Tt,0);y(A)&&m(Tt),e.unbindTexture()}U.depthBuffer&&ee(U)}function Be(U){const A=U.textures;for(let Z=0,pt=A.length;Z<pt;Z++){const mt=A[Z];if(y(mt)){const j=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Nt=n.get(mt).__webglTexture;e.bindTexture(j,Nt),m(j),e.unbindTexture()}}}const O=[],Ue=[];function Se(U){if(U.samples>0){if(kt(U)===!1){const A=U.textures,Z=U.width,pt=U.height;let mt=i.COLOR_BUFFER_BIT;const j=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(U),Tt=A.length>1;if(Tt)for(let Ut=0;Ut<A.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ut=0;Ut<A.length;Ut++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ut]);const ie=n.get(A[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,Z,pt,0,0,Z,pt,mt,i.NEAREST),d===!0&&(O.length=0,Ue.length=0,O.push(i.COLOR_ATTACHMENT0+Ut),U.depthBuffer&&U.resolveDepthBuffer===!1&&(O.push(j),Ue.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Ut=0;Ut<A.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ut]);const ie=n.get(A[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ae(U){return Math.min(s.maxSamples,U.samples)}function kt(U){const A=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ne(U){const A=l.render.frame;g.get(U)!==A&&(g.set(U,A),U.update())}function Gt(U,A){const Z=U.colorSpace,pt=U.format,mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==vi&&Z!==pi&&(we.getTransfer(Z)===Fe?(pt!==Ln||mt!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function ne(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=H,this.setTexture2D=ot,this.setTexture2DArray=ht,this.setTexture3D=ct,this.setTextureCube=dt,this.rebindTextures=re,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=kt}function Gg(i,t){function e(n,s=pi){let a;const l=we.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.BYTE;if(n===Bl)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===$r)return i.HALF_FLOAT;if(n===Hl)return i.ALPHA;if(n===kl)return i.RGB;if(n===Ln)return i.RGBA;if(n===Vl)return i.LUMINANCE;if(n===Gl)return i.LUMINANCE_ALPHA;if(n===mr)return i.DEPTH_COMPONENT;if(n===yr)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===Xl)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===Bs||n===zs||n===Hs||n===ks)if(l===Fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===fo||n===ho||n===po)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===uo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mo||n===go||n===_o)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===mo||n===go)return l===Fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===_o)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vo||n===xo||n===yo||n===Mo||n===So||n===Eo||n===To||n===bo||n===Ao||n===wo||n===Co||n===Ro||n===Po||n===Lo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===vo)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ao)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Co)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return l===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vs||n===Do||n===Io)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Vs)return l===Fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ql||n===Uo||n===No||n===Fo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Wg extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Us extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xg={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,l=null;const u=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){l=!0;for(const b of t.hand.values()){const y=e.getJointPose(b,n),m=this._getHandJoint(p,b);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ln,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:qg,fragmentShader:Yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends Sr{constructor(t,e){super();const n=this;let s=null,a=1,l=null,u="local-floor",d=1,p=null,g=null,_=null,v=null,S=null,E=null;const b=new jg,y=e.getContextAttributes();let m=null,N=null;const P=[],D=[],K=new Xt;let B=null;const c=new vn;c.layers.enable(1),c.viewport=new Oe;const Y=new vn;Y.layers.enable(2),Y.viewport=new Oe;const R=[c,Y],C=new Wg;C.layers.enable(1),C.layers.enable(2);let H=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let _t=P[lt];return _t===void 0&&(_t=new Ka,P[lt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(lt){let _t=P[lt];return _t===void 0&&(_t=new Ka,P[lt]=_t),_t.getGripSpace()},this.getHand=function(lt){let _t=P[lt];return _t===void 0&&(_t=new Ka,P[lt]=_t),_t.getHandSpace()};function q(lt){const _t=D.indexOf(lt.inputSource);if(_t===-1)return;const Ft=P[_t];Ft!==void 0&&(Ft.update(lt.inputSource,lt.frame,p||l),Ft.dispatchEvent({type:lt.type,data:lt.inputSource}))}function ot(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",ht);for(let lt=0;lt<P.length;lt++){const _t=D[lt];_t!==null&&(D[lt]=null,P[lt].disconnect(_t))}H=null,it=null,b.reset(),t.setRenderTarget(m),S=null,v=null,_=null,s=null,N=null,Me.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(K.width,K.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){a=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){u=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||l},this.setReferenceSpace=function(lt){p=lt},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(K),s.renderState.layers===void 0){const _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Vi(S.framebufferWidth,S.framebufferHeight,{format:Ln,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let _t=null,Ft=null,It=null;y.depth&&(It=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=y.stencil?yr:mr,Ft=y.stencil?xr:ki);const ee={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:a};_=new XRWebGLBinding(s,e),v=_.createProjectionLayer(ee),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new Vi(v.textureWidth,v.textureHeight,{format:Ln,type:ni,depthTexture:new ou(v.textureWidth,v.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),p=null,l=await s.requestReferenceSpace(u),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ht(lt){for(let _t=0;_t<lt.removed.length;_t++){const Ft=lt.removed[_t],It=D.indexOf(Ft);It>=0&&(D[It]=null,P[It].disconnect(Ft))}for(let _t=0;_t<lt.added.length;_t++){const Ft=lt.added[_t];let It=D.indexOf(Ft);if(It===-1){for(let re=0;re<P.length;re++)if(re>=D.length){D.push(Ft),It=re;break}else if(D[re]===null){D[re]=Ft,It=re;break}if(It===-1)break}const ee=P[It];ee&&ee.connect(Ft)}}const ct=new k,dt=new k;function rt(lt,_t,Ft){ct.setFromMatrixPosition(_t.matrixWorld),dt.setFromMatrixPosition(Ft.matrixWorld);const It=ct.distanceTo(dt),ee=_t.projectionMatrix.elements,re=Ft.projectionMatrix.elements,Zt=ee[14]/(ee[10]-1),Be=ee[14]/(ee[10]+1),O=(ee[9]+1)/ee[5],Ue=(ee[9]-1)/ee[5],Se=(ee[8]-1)/ee[0],Ae=(re[8]+1)/re[0],kt=Zt*Se,Ne=Zt*Ae,Gt=It/(-Se+Ae),ne=Gt*-Se;_t.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(ne),lt.translateZ(Gt),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert();const U=Zt+Gt,A=Be+Gt,Z=kt-ne,pt=Ne+(It-ne),mt=O*Be/A*U,j=Ue*Be/A*U;lt.projectionMatrix.makePerspective(Z,pt,mt,j,U,A),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}function bt(lt,_t){_t===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(_t.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;b.texture!==null&&(lt.near=b.depthNear,lt.far=b.depthFar),C.near=Y.near=c.near=lt.near,C.far=Y.far=c.far=lt.far,(H!==C.near||it!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,it=C.far,c.near=H,c.far=it,Y.near=H,Y.far=it,c.updateProjectionMatrix(),Y.updateProjectionMatrix(),lt.updateProjectionMatrix());const _t=lt.parent,Ft=C.cameras;bt(C,_t);for(let It=0;It<Ft.length;It++)bt(Ft[It],_t);Ft.length===2?rt(C,c,Y):C.projectionMatrix.copy(c.projectionMatrix),Dt(lt,C,_t)};function Dt(lt,_t,Ft){Ft===null?lt.matrix.copy(_t.matrixWorld):(lt.matrix.copy(Ft.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(_t.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(_t.projectionMatrix),lt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Oo*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(lt){d=lt,v!==null&&(v.fixedFoveation=lt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=lt)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let Bt=null;function ue(lt,_t){if(g=_t.getViewerPose(p||l),E=_t,g!==null){const Ft=g.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let It=!1;Ft.length!==C.cameras.length&&(C.cameras.length=0,It=!0);for(let re=0;re<Ft.length;re++){const Zt=Ft[re];let Be=null;if(S!==null)Be=S.getViewport(Zt);else{const Ue=_.getViewSubImage(v,Zt);Be=Ue.viewport,re===0&&(t.setRenderTargetTextures(N,Ue.colorTexture,v.ignoreDepthValues?void 0:Ue.depthStencilTexture),t.setRenderTarget(N))}let O=R[re];O===void 0&&(O=new vn,O.layers.enable(re),O.viewport=new Oe,R[re]=O),O.matrix.fromArray(Zt.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Zt.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Be.x,Be.y,Be.width,Be.height),re===0&&(C.matrix.copy(O.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),It===!0&&C.cameras.push(O)}const ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const re=_.getDepthInformation(Ft[0]);re&&re.isValid&&re.texture&&b.init(t,re,s.renderState)}}for(let Ft=0;Ft<P.length;Ft++){const It=D[Ft],ee=P[Ft];It!==null&&ee!==void 0&&ee.update(It,_t,p||l)}Bt&&Bt(lt,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),E=null}const Me=new au;Me.setAnimationLoop(ue),this.setAnimationLoop=function(lt){Bt=lt},this.dispose=function(){}}}const Ui=new Vn,Kg=new He;function Jg(i,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,nu(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,N,P,D){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(y,m):m.isMeshToonMaterial?(a(y,m),_(y,m)):m.isMeshPhongMaterial?(a(y,m),g(y,m)):m.isMeshStandardMaterial?(a(y,m),v(y,m),m.isMeshPhysicalMaterial&&S(y,m,D)):m.isMeshMatcapMaterial?(a(y,m),E(y,m)):m.isMeshDepthMaterial?a(y,m):m.isMeshDistanceMaterial?(a(y,m),b(y,m)):m.isMeshNormalMaterial?a(y,m):m.isLineBasicMaterial?(l(y,m),m.isLineDashedMaterial&&u(y,m)):m.isPointsMaterial?d(y,m,N,P):m.isSpriteMaterial?p(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===cn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===cn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const N=t.get(m),P=N.envMap,D=N.envMapRotation;P&&(y.envMap.value=P,Ui.copy(D),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),y.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(Ui)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function l(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function u(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function d(y,m,N,P){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*N,y.scale.value=P*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function p(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function g(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function _(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function v(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function S(y,m,N){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,m){m.matcap&&(y.matcap.value=m.matcap)}function b(y,m){const N=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zg(i,t,e,n){let s={},a={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,P){const D=P.program;n.uniformBlockBinding(N,D)}function p(N,P){let D=s[N.id];D===void 0&&(E(N),D=g(N),s[N.id]=D,N.addEventListener("dispose",y));const K=P.program;n.updateUBOMapping(N,K);const B=t.render.frame;a[N.id]!==B&&(v(N),a[N.id]=B)}function g(N){const P=_();N.__bindingPointIndex=P;const D=i.createBuffer(),K=N.__size,B=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,K,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,D),D}function _(){for(let N=0;N<u;N++)if(l.indexOf(N)===-1)return l.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const P=s[N.id],D=N.uniforms,K=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let B=0,c=D.length;B<c;B++){const Y=Array.isArray(D[B])?D[B]:[D[B]];for(let R=0,C=Y.length;R<C;R++){const H=Y[R];if(S(H,B,R,K)===!0){const it=H.__offset,q=Array.isArray(H.value)?H.value:[H.value];let ot=0;for(let ht=0;ht<q.length;ht++){const ct=q[ht],dt=b(ct);typeof ct=="number"||typeof ct=="boolean"?(H.__data[0]=ct,i.bufferSubData(i.UNIFORM_BUFFER,it+ot,H.__data)):ct.isMatrix3?(H.__data[0]=ct.elements[0],H.__data[1]=ct.elements[1],H.__data[2]=ct.elements[2],H.__data[3]=0,H.__data[4]=ct.elements[3],H.__data[5]=ct.elements[4],H.__data[6]=ct.elements[5],H.__data[7]=0,H.__data[8]=ct.elements[6],H.__data[9]=ct.elements[7],H.__data[10]=ct.elements[8],H.__data[11]=0):(ct.toArray(H.__data,ot),ot+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,it,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(N,P,D,K){const B=N.value,c=P+"_"+D;if(K[c]===void 0)return typeof B=="number"||typeof B=="boolean"?K[c]=B:K[c]=B.clone(),!0;{const Y=K[c];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return K[c]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function E(N){const P=N.uniforms;let D=0;const K=16;for(let c=0,Y=P.length;c<Y;c++){const R=Array.isArray(P[c])?P[c]:[P[c]];for(let C=0,H=R.length;C<H;C++){const it=R[C],q=Array.isArray(it.value)?it.value:[it.value];for(let ot=0,ht=q.length;ot<ht;ot++){const ct=q[ot],dt=b(ct),rt=D%K,bt=rt%dt.boundary,Dt=rt+bt;D+=bt,Dt!==0&&K-Dt<dt.storage&&(D+=K-Dt),it.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=D,D+=dt.storage}}}const B=D%K;return B>0&&(D+=K-B),N.__size=D,N.__cache={},this}function b(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function y(N){const P=N.target;P.removeEventListener("dispose",y);const D=l.indexOf(P.__bindingPointIndex);l.splice(D,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function m(){for(const N in s)i.deleteBuffer(s[N]);l=[],s={},a={}}return{bind:d,update:p,dispose:m}}class Qg{constructor(t={}){const{canvas:e=Vf(),context:n=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const S=new Uint32Array(4),E=new Int32Array(4);let b=null,y=null;const m=[],N=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=gi,this.toneMappingExposure=1;const P=this;let D=!1,K=0,B=0,c=null,Y=-1,R=null;const C=new Oe,H=new Oe;let it=null;const q=new be(0);let ot=0,ht=e.width,ct=e.height,dt=1,rt=null,bt=null;const Dt=new Oe(0,0,ht,ct),Bt=new Oe(0,0,ht,ct);let ue=!1;const Me=new Ko;let lt=!1,_t=!1;const Ft=new He,It=new k,ee=new Oe,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Be(){return c===null?dt:1}let O=n;function Ue(w,W){return e.getContext(w,W)}try{const w={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ho}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){const W="webgl2";if(O=Ue(W,w),O===null)throw Ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,Ae,kt,Ne,Gt,ne,U,A,Z,pt,mt,j,Nt,Tt,Ut,ie,vt,Pt,se,Vt,At,Yt,ae,Re;function G(){Se=new sm(O),Se.init(),Yt=new Gg(O,Se),Ae=new Zp(O,Se,t,Yt),kt=new Hg(O),Ne=new cm(O),Gt=new Ag,ne=new Vg(O,Se,kt,Gt,Ae,Yt,Ne),U=new tm(P),A=new rm(P),Z=new ph(O),ae=new Kp(O,Z),pt=new am(O,Z,Ne,ae),mt=new um(O,pt,Z,Ne),se=new lm(O,Ae,ne),ie=new Qp(Gt),j=new bg(P,U,A,Se,Ae,ae,ie),Nt=new Jg(P,Gt),Tt=new Cg,Ut=new Ug(Se),Pt=new $p(P,U,A,kt,mt,v,d),vt=new zg(P,mt,Ae),Re=new Zg(O,Ne,Ae,kt),Vt=new Jp(O,Se,Ne),At=new om(O,Se,Ne),Ne.programs=j.programs,P.capabilities=Ae,P.extensions=Se,P.properties=Gt,P.renderLists=Tt,P.shadowMap=vt,P.state=kt,P.info=Ne}G();const xt=new $g(P,O);this.xr=xt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(w){w!==void 0&&(dt=w,this.setSize(ht,ct,!1))},this.getSize=function(w){return w.set(ht,ct)},this.setSize=function(w,W,Q=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=w,ct=W,e.width=Math.floor(w*dt),e.height=Math.floor(W*dt),Q===!0&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(ht*dt,ct*dt).floor()},this.setDrawingBufferSize=function(w,W,Q){ht=w,ct=W,dt=Q,e.width=Math.floor(w*Q),e.height=Math.floor(W*Q),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(Dt)},this.setViewport=function(w,W,Q,tt){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,W,Q,tt),kt.viewport(C.copy(Dt).multiplyScalar(dt).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,W,Q,tt){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,W,Q,tt),kt.scissor(H.copy(Bt).multiplyScalar(dt).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){kt.setScissorTest(ue=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){bt=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(w=!0,W=!0,Q=!0){let tt=0;if(w){let X=!1;if(c!==null){const yt=c.texture.format;X=yt===Yo||yt===qo||yt===Xo}if(X){const yt=c.texture.type,wt=yt===ni||yt===ki||yt===Xr||yt===xr||yt===Go||yt===Wo,Lt=Pt.getClearColor(),Ot=Pt.getClearAlpha(),$t=Lt.r,Kt=Lt.g,Wt=Lt.b;wt?(S[0]=$t,S[1]=Kt,S[2]=Wt,S[3]=Ot,O.clearBufferuiv(O.COLOR,0,S)):(E[0]=$t,E[1]=Kt,E[2]=Wt,E[3]=Ot,O.clearBufferiv(O.COLOR,0,E))}else tt|=O.COLOR_BUFFER_BIT}W&&(tt|=O.DEPTH_BUFFER_BIT),Q&&(tt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Tt.dispose(),Ut.dispose(),Gt.dispose(),U.dispose(),A.dispose(),mt.dispose(),ae.dispose(),Re.dispose(),j.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",pn),xt.removeEventListener("sessionend",Tr),un.stop()};function ft(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Ne.autoReset,W=vt.enabled,Q=vt.autoUpdate,tt=vt.needsUpdate,X=vt.type;G(),Ne.autoReset=w,vt.enabled=W,vt.autoUpdate=Q,vt.needsUpdate=tt,vt.type=X}function Mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){const W=w.target;W.removeEventListener("dispose",jt),de(W)}function de(w){_e(w),Gt.remove(w)}function _e(w){const W=Gt.get(w).programs;W!==void 0&&(W.forEach(function(Q){j.releaseProgram(Q)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Q,tt,X,yt){W===null&&(W=re);const wt=X.isMesh&&X.matrixWorld.determinant()<0,Lt=aa(w,W,Q,tt,X);kt.setMaterial(tt,wt);let Ot=Q.index,$t=1;if(tt.wireframe===!0){if(Ot=pt.getWireframeAttribute(Q),Ot===void 0)return;$t=2}const Kt=Q.drawRange,Wt=Q.attributes.position;let Te=Kt.start*$t,Le=(Kt.start+Kt.count)*$t;yt!==null&&(Te=Math.max(Te,yt.start*$t),Le=Math.min(Le,(yt.start+yt.count)*$t)),Ot!==null?(Te=Math.max(Te,0),Le=Math.min(Le,Ot.count)):Wt!=null&&(Te=Math.max(Te,0),Le=Math.min(Le,Wt.count));const ze=Le-Te;if(ze<0||ze===1/0)return;ae.setup(X,tt,Lt,Q,Ot);let sn,ve=Vt;if(Ot!==null&&(sn=Z.get(Ot),ve=At,ve.setIndex(sn)),X.isMesh)tt.wireframe===!0?(kt.setLineWidth(tt.wireframeLinewidth*Be()),ve.setMode(O.LINES)):ve.setMode(O.TRIANGLES);else if(X.isLine){let Ht=tt.linewidth;Ht===void 0&&(Ht=1),kt.setLineWidth(Ht*Be()),X.isLineSegments?ve.setMode(O.LINES):X.isLineLoop?ve.setMode(O.LINE_LOOP):ve.setMode(O.LINE_STRIP)}else X.isPoints?ve.setMode(O.POINTS):X.isSprite&&ve.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ve.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))ve.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ht=X._multiDrawStarts,We=X._multiDrawCounts,xe=X._multiDrawCount,De=Ot?Z.get(Ot).bytesPerElement:1,mn=Gt.get(tt).currentProgram.getUniforms();for(let $e=0;$e<xe;$e++)mn.setValue(O,"_gl_DrawID",$e),ve.render(Ht[$e]/De,We[$e])}else if(X.isInstancedMesh)ve.renderInstances(Te,ze,X.count);else if(Q.isInstancedBufferGeometry){const Ht=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,We=Math.min(Q.instanceCount,Ht);ve.renderInstances(Te,ze,We)}else ve.render(Te,ze)};function Ee(w,W,Q){w.transparent===!0&&w.side===Qn&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,Xi(w,W,Q),w.side=_i,w.needsUpdate=!0,Xi(w,W,Q),w.side=Qn):Xi(w,W,Q)}this.compile=function(w,W,Q=null){Q===null&&(Q=w),y=Ut.get(Q),y.init(W),N.push(y),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),w!==Q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const tt=new Set;return w.traverse(function(X){const yt=X.material;if(yt)if(Array.isArray(yt))for(let wt=0;wt<yt.length;wt++){const Lt=yt[wt];Ee(Lt,Q,X),tt.add(Lt)}else Ee(yt,Q,X),tt.add(yt)}),N.pop(),y=null,tt},this.compileAsync=function(w,W,Q=null){const tt=this.compile(w,W,Q);return new Promise(X=>{function yt(){if(tt.forEach(function(wt){Gt.get(wt).currentProgram.isReady()&&tt.delete(wt)}),tt.size===0){X(w);return}setTimeout(yt,10)}Se.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let me=null;function Tn(w){me&&me(w)}function pn(){un.stop()}function Tr(){un.start()}const un=new au;un.setAnimationLoop(Tn),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(w){me=w,xt.setAnimationLoop(w),w===null?un.stop():un.start()},xt.addEventListener("sessionstart",pn),xt.addEventListener("sessionend",Tr),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(W),W=xt.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,W,c),y=Ut.get(w,N.length),y.init(W),N.push(y),Ft.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Me.setFromProjectionMatrix(Ft),_t=this.localClippingEnabled,lt=ie.init(this.clippingPlanes,_t),b=Tt.get(w,m.length),b.init(),m.push(b),xt.enabled===!0&&xt.isPresenting===!0){const yt=P.xr.getDepthSensingMesh();yt!==null&&Dn(yt,W,-1/0,P.sortObjects)}Dn(w,W,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(rt,bt),Zt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Zt&&Pt.addToRenderList(b,w),this.info.render.frame++,lt===!0&&ie.beginShadows();const Q=y.state.shadowsArray;vt.render(Q,w,W),lt===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=b.opaque,X=b.transmissive;if(y.setupLights(),W.isArrayCamera){const yt=W.cameras;if(X.length>0)for(let wt=0,Lt=yt.length;wt<Lt;wt++){const Ot=yt[wt];Ti(tt,X,w,Ot)}Zt&&Pt.render(w);for(let wt=0,Lt=yt.length;wt<Lt;wt++){const Ot=yt[wt];Gi(b,w,Ot,Ot.viewport)}}else X.length>0&&Ti(tt,X,w,W),Zt&&Pt.render(w),Gi(b,w,W);c!==null&&(ne.updateMultisampleRenderTarget(c),ne.updateRenderTargetMipmap(c)),w.isScene===!0&&w.onAfterRender(P,w,W),ae.resetDefaultState(),Y=-1,R=null,N.pop(),N.length>0?(y=N[N.length-1],lt===!0&&ie.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,m.pop(),m.length>0?b=m[m.length-1]:b=null};function Dn(w,W,Q,tt){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Me.intersectsSprite(w)){tt&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ft);const wt=mt.update(w),Lt=w.material;Lt.visible&&b.push(w,wt,Lt,Q,ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Me.intersectsObject(w))){const wt=mt.update(w),Lt=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ee.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ee.copy(wt.boundingSphere.center)),ee.applyMatrix4(w.matrixWorld).applyMatrix4(Ft)),Array.isArray(Lt)){const Ot=wt.groups;for(let $t=0,Kt=Ot.length;$t<Kt;$t++){const Wt=Ot[$t],Te=Lt[Wt.materialIndex];Te&&Te.visible&&b.push(w,wt,Te,Q,ee.z,Wt)}}else Lt.visible&&b.push(w,wt,Lt,Q,ee.z,null)}}const yt=w.children;for(let wt=0,Lt=yt.length;wt<Lt;wt++)Dn(yt[wt],W,Q,tt)}function Gi(w,W,Q,tt){const X=w.opaque,yt=w.transmissive,wt=w.transparent;y.setupLightsView(Q),lt===!0&&ie.setGlobalState(P.clippingPlanes,Q),tt&&kt.viewport(C.copy(tt)),X.length>0&&Wi(X,W,Q),yt.length>0&&Wi(yt,W,Q),wt.length>0&&Wi(wt,W,Q),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ti(w,W,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[tt.id]===void 0&&(y.state.transmissionRenderTarget[tt.id]=new Vi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?$r:ni,minFilter:Hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const yt=y.state.transmissionRenderTarget[tt.id],wt=tt.viewport||C;yt.setSize(wt.z,wt.w);const Lt=P.getRenderTarget();P.setRenderTarget(yt),P.getClearColor(q),ot=P.getClearAlpha(),ot<1&&P.setClearColor(16777215,.5),P.clear(),Zt&&Pt.render(Q);const Ot=P.toneMapping;P.toneMapping=gi;const $t=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),y.setupLightsView(tt),lt===!0&&ie.setGlobalState(P.clippingPlanes,tt),Wi(w,Q,tt),ne.updateMultisampleRenderTarget(yt),ne.updateRenderTargetMipmap(yt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Wt=0,Te=W.length;Wt<Te;Wt++){const Le=W[Wt],ze=Le.object,sn=Le.geometry,ve=Le.material,Ht=Le.group;if(ve.side===Qn&&ze.layers.test(tt.layers)){const We=ve.side;ve.side=cn,ve.needsUpdate=!0,rs(ze,Q,tt,sn,ve,Ht),ve.side=We,ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(ne.updateMultisampleRenderTarget(yt),ne.updateRenderTargetMipmap(yt))}P.setRenderTarget(Lt),P.setClearColor(q,ot),$t!==void 0&&(tt.viewport=$t),P.toneMapping=Ot}function Wi(w,W,Q){const tt=W.isScene===!0?W.overrideMaterial:null;for(let X=0,yt=w.length;X<yt;X++){const wt=w[X],Lt=wt.object,Ot=wt.geometry,$t=tt===null?wt.material:tt,Kt=wt.group;Lt.layers.test(Q.layers)&&rs(Lt,W,Q,Ot,$t,Kt)}}function rs(w,W,Q,tt,X,yt){w.onBeforeRender(P,W,Q,tt,X,yt),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.transparent===!0&&X.side===Qn&&X.forceSinglePass===!1?(X.side=cn,X.needsUpdate=!0,P.renderBufferDirect(Q,W,tt,X,w,yt),X.side=_i,X.needsUpdate=!0,P.renderBufferDirect(Q,W,tt,X,w,yt),X.side=Qn):P.renderBufferDirect(Q,W,tt,X,w,yt),w.onAfterRender(P,W,Q,tt,X,yt)}function Xi(w,W,Q){W.isScene!==!0&&(W=re);const tt=Gt.get(w),X=y.state.lights,yt=y.state.shadowsArray,wt=X.state.version,Lt=j.getParameters(w,X.state,yt,W,Q),Ot=j.getProgramCacheKey(Lt);let $t=tt.programs;tt.environment=w.isMeshStandardMaterial?W.environment:null,tt.fog=W.fog,tt.envMap=(w.isMeshStandardMaterial?A:U).get(w.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",jt),$t=new Map,tt.programs=$t);let Kt=$t.get(Ot);if(Kt!==void 0){if(tt.currentProgram===Kt&&tt.lightsStateVersion===wt)return ss(w,Lt),Kt}else Lt.uniforms=j.getUniforms(w),w.onBeforeCompile(Lt,P),Kt=j.acquireProgram(Lt,Ot),$t.set(Ot,Kt),tt.uniforms=Lt.uniforms;const Wt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=ie.uniform),ss(w,Lt),tt.needsLights=oa(w),tt.lightsStateVersion=wt,tt.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.directionalShadowMap.value=X.state.directionalShadowMap,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotShadowMap.value=X.state.spotShadowMap,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMap.value=X.state.pointShadowMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),tt.currentProgram=Kt,tt.uniformsList=null,Kt}function br(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Gs.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function ss(w,W){const Q=Gt.get(w);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function aa(w,W,Q,tt,X){W.isScene!==!0&&(W=re),ne.resetTextureUnits();const yt=W.fog,wt=tt.isMeshStandardMaterial?W.environment:null,Lt=c===null?P.outputColorSpace:c.isXRRenderTarget===!0?c.texture.colorSpace:vi,Ot=(tt.isMeshStandardMaterial?A:U).get(tt.envMap||wt),$t=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Kt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Wt=!!Q.morphAttributes.position,Te=!!Q.morphAttributes.normal,Le=!!Q.morphAttributes.color;let ze=gi;tt.toneMapped&&(c===null||c.isXRRenderTarget===!0)&&(ze=P.toneMapping);const sn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ve=sn!==void 0?sn.length:0,Ht=Gt.get(tt),We=y.state.lights;if(lt===!0&&(_t===!0||w!==R)){const Je=w===R&&tt.id===Y;ie.setState(tt,w,Je)}let xe=!1;tt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==We.state.version||Ht.outputColorSpace!==Lt||X.isBatchedMesh&&Ht.batching===!1||!X.isBatchedMesh&&Ht.batching===!0||X.isBatchedMesh&&Ht.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ht.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ht.instancing===!1||!X.isInstancedMesh&&Ht.instancing===!0||X.isSkinnedMesh&&Ht.skinning===!1||!X.isSkinnedMesh&&Ht.skinning===!0||X.isInstancedMesh&&Ht.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ht.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ht.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ht.instancingMorph===!1&&X.morphTexture!==null||Ht.envMap!==Ot||tt.fog===!0&&Ht.fog!==yt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ie.numPlanes||Ht.numIntersection!==ie.numIntersection)||Ht.vertexAlphas!==$t||Ht.vertexTangents!==Kt||Ht.morphTargets!==Wt||Ht.morphNormals!==Te||Ht.morphColors!==Le||Ht.toneMapping!==ze||Ht.morphTargetsCount!==ve)&&(xe=!0):(xe=!0,Ht.__version=tt.version);let De=Ht.currentProgram;xe===!0&&(De=Xi(tt,W,X));let mn=!1,$e=!1,Ar=!1;const ke=De.getUniforms(),xn=Ht.uniforms;if(kt.useProgram(De.program)&&(mn=!0,$e=!0,Ar=!0),tt.id!==Y&&(Y=tt.id,$e=!0),mn||R!==w){ke.setValue(O,"projectionMatrix",w.projectionMatrix),ke.setValue(O,"viewMatrix",w.matrixWorldInverse);const Je=ke.map.cameraPosition;Je!==void 0&&Je.setValue(O,It.setFromMatrixPosition(w.matrixWorld)),Ae.logarithmicDepthBuffer&&ke.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ke.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,$e=!0,Ar=!0)}if(X.isSkinnedMesh){ke.setOptional(O,X,"bindMatrix"),ke.setOptional(O,X,"bindMatrixInverse");const Je=X.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ke.setValue(O,"boneTexture",Je.boneTexture,ne))}X.isBatchedMesh&&(ke.setOptional(O,X,"batchingTexture"),ke.setValue(O,"batchingTexture",X._matricesTexture,ne),ke.setOptional(O,X,"batchingIdTexture"),ke.setValue(O,"batchingIdTexture",X._indirectTexture,ne),ke.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&ke.setValue(O,"batchingColorTexture",X._colorsTexture,ne));const qi=Q.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&se.update(X,Q,De),($e||Ht.receiveShadow!==X.receiveShadow)&&(Ht.receiveShadow=X.receiveShadow,ke.setValue(O,"receiveShadow",X.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(xn.envMap.value=Ot,xn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&W.environment!==null&&(xn.envMapIntensity.value=W.environmentIntensity),$e&&(ke.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ht.needsLights&&as(xn,Ar),yt&&tt.fog===!0&&Nt.refreshFogUniforms(xn,yt),Nt.refreshMaterialUniforms(xn,tt,dt,ct,y.state.transmissionRenderTarget[w.id]),Gs.upload(O,br(Ht),xn,ne)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Gs.upload(O,br(Ht),xn,ne),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ke.setValue(O,"center",X.center),ke.setValue(O,"modelViewMatrix",X.modelViewMatrix),ke.setValue(O,"normalMatrix",X.normalMatrix),ke.setValue(O,"modelMatrix",X.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Je=tt.uniformsGroups;for(let Yi=0,ca=Je.length;Yi<ca;Yi++){const os=Je[Yi];Re.update(os,De),Re.bind(os,De)}}return De}function as(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function oa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return c},this.setRenderTargetTextures=function(w,W,Q){Gt.get(w.texture).__webglTexture=W,Gt.get(w.depthTexture).__webglTexture=Q;const tt=Gt.get(w);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const Q=Gt.get(w);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Q=0){c=w,K=W,B=Q;let tt=!0,X=null,yt=!1,wt=!1;if(w){const Ot=Gt.get(w);Ot.__useDefaultFramebuffer!==void 0?(kt.bindFramebuffer(O.FRAMEBUFFER,null),tt=!1):Ot.__webglFramebuffer===void 0?ne.setupRenderTarget(w):Ot.__hasExternalTextures&&ne.rebindTextures(w,Gt.get(w.texture).__webglTexture,Gt.get(w.depthTexture).__webglTexture);const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(wt=!0);const Kt=Gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[W])?X=Kt[W][Q]:X=Kt[W],yt=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?X=Gt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?X=Kt[Q]:X=Kt,C.copy(w.viewport),H.copy(w.scissor),it=w.scissorTest}else C.copy(Dt).multiplyScalar(dt).floor(),H.copy(Bt).multiplyScalar(dt).floor(),it=ue;if(kt.bindFramebuffer(O.FRAMEBUFFER,X)&&tt&&kt.drawBuffers(w,X),kt.viewport(C),kt.scissor(H),kt.setScissorTest(it),yt){const Ot=Gt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,Q)}else if(wt){const Ot=Gt.get(w.texture),$t=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.__webglTexture,Q||0,$t)}Y=-1},this.readRenderTargetPixels=function(w,W,Q,tt,X,yt,wt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){kt.bindFramebuffer(O.FRAMEBUFFER,Lt);try{const Ot=w.texture,$t=Ot.format,Kt=Ot.type;if(!Ae.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-tt&&Q>=0&&Q<=w.height-X&&O.readPixels(W,Q,tt,X,Yt.convert($t),Yt.convert(Kt),yt)}finally{const Ot=c!==null?Gt.get(c).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(w,W,Q,tt,X,yt,wt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){kt.bindFramebuffer(O.FRAMEBUFFER,Lt);try{const Ot=w.texture,$t=Ot.format,Kt=Ot.type;if(!Ae.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=w.width-tt&&Q>=0&&Q<=w.height-X){const Wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Wt),O.bufferData(O.PIXEL_PACK_BUFFER,yt.byteLength,O.STREAM_READ),O.readPixels(W,Q,tt,X,Yt.convert($t),Yt.convert(Kt),0),O.flush();const Te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await Gf(O,Te,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,yt)}finally{O.deleteBuffer(Wt),O.deleteSync(Te)}return yt}}finally{const Ot=c!==null?Gt.get(c).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(w,W=null,Q=0){w.isTexture!==!0&&(Vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1]);const tt=Math.pow(2,-Q),X=Math.floor(w.image.width*tt),yt=Math.floor(w.image.height*tt),wt=W!==null?W.x:0,Lt=W!==null?W.y:0;ne.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,wt,Lt,X,yt),kt.unbindTexture()},this.copyTextureToTexture=function(w,W,Q=null,tt=null,X=0){w.isTexture!==!0&&(Vr("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,w=arguments[1],W=arguments[2],X=arguments[3]||0,Q=null);let yt,wt,Lt,Ot,$t,Kt;Q!==null?(yt=Q.max.x-Q.min.x,wt=Q.max.y-Q.min.y,Lt=Q.min.x,Ot=Q.min.y):(yt=w.image.width,wt=w.image.height,Lt=0,Ot=0),tt!==null?($t=tt.x,Kt=tt.y):($t=0,Kt=0);const Wt=Yt.convert(W.format),Te=Yt.convert(W.type);ne.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Le=O.getParameter(O.UNPACK_ROW_LENGTH),ze=O.getParameter(O.UNPACK_IMAGE_HEIGHT),sn=O.getParameter(O.UNPACK_SKIP_PIXELS),ve=O.getParameter(O.UNPACK_SKIP_ROWS),Ht=O.getParameter(O.UNPACK_SKIP_IMAGES),We=w.isCompressedTexture?w.mipmaps[X]:w.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,We.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,We.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ot),w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,$t,Kt,yt,wt,Wt,Te,We.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,$t,Kt,We.width,We.height,Wt,We.data):O.texSubImage2D(O.TEXTURE_2D,X,$t,Kt,yt,wt,Wt,Te,We),O.pixelStorei(O.UNPACK_ROW_LENGTH,Le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ze),O.pixelStorei(O.UNPACK_SKIP_PIXELS,sn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ve),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ht),X===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),kt.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Q=null,tt=null,X=0){w.isTexture!==!0&&(Vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,w=arguments[2],W=arguments[3],X=arguments[4]||0);let yt,wt,Lt,Ot,$t,Kt,Wt,Te,Le;const ze=w.isCompressedTexture?w.mipmaps[X]:w.image;Q!==null?(yt=Q.max.x-Q.min.x,wt=Q.max.y-Q.min.y,Lt=Q.max.z-Q.min.z,Ot=Q.min.x,$t=Q.min.y,Kt=Q.min.z):(yt=ze.width,wt=ze.height,Lt=ze.depth,Ot=0,$t=0,Kt=0),tt!==null?(Wt=tt.x,Te=tt.y,Le=tt.z):(Wt=0,Te=0,Le=0);const sn=Yt.convert(W.format),ve=Yt.convert(W.type);let Ht;if(W.isData3DTexture)ne.setTexture3D(W,0),Ht=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)ne.setTexture2DArray(W,0),Ht=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const We=O.getParameter(O.UNPACK_ROW_LENGTH),xe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),De=O.getParameter(O.UNPACK_SKIP_PIXELS),mn=O.getParameter(O.UNPACK_SKIP_ROWS),$e=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ze.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ze.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,$t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Kt),w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ht,X,Wt,Te,Le,yt,wt,Lt,sn,ve,ze.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ht,X,Wt,Te,Le,yt,wt,Lt,sn,ze.data):O.texSubImage3D(Ht,X,Wt,Te,Le,yt,wt,Lt,sn,ve,ze),O.pixelStorei(O.UNPACK_ROW_LENGTH,We),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,De),O.pixelStorei(O.UNPACK_SKIP_ROWS,mn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$e),X===0&&W.generateMipmaps&&O.generateMipmap(Ht),kt.unbindTexture()},this.initRenderTarget=function(w){Gt.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){K=0,B=0,c=null,kt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===jo?"display-p3":"srgb",e.unpackColorSpace=we.workingColorSpace===Ks?"display-p3":"srgb"}}class t_ extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let l=1;l<=t;l++)n=this.getPoint(l/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let l;e?l=e:l=t*n[a-1];let u=0,d=a-1,p;for(;u<=d;)if(s=Math.floor(u+(d-u)/2),p=n[s]-l,p<0)u=s+1;else if(p>0)d=s-1;else{d=s;break}if(s=d,n[s]===l)return s/(a-1);const g=n[s],v=n[s+1]-g,S=(l-g)/v;return(s+S)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const l=this.getPoint(s),u=this.getPoint(a),d=e||(l.isVector2?new Xt:new k);return d.copy(u).sub(l).normalize(),d}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,s=[],a=[],l=[],u=new k,d=new He;for(let S=0;S<=t;S++){const E=S/t;s[S]=this.getTangentAt(E,new k)}a[0]=new k,l[0]=new k;let p=Number.MAX_VALUE;const g=Math.abs(s[0].x),_=Math.abs(s[0].y),v=Math.abs(s[0].z);g<=p&&(p=g,n.set(1,0,0)),_<=p&&(p=_,n.set(0,1,0)),v<=p&&n.set(0,0,1),u.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],u),l[0].crossVectors(s[0],a[0]);for(let S=1;S<=t;S++){if(a[S]=a[S-1].clone(),l[S]=l[S-1].clone(),u.crossVectors(s[S-1],s[S]),u.length()>Number.EPSILON){u.normalize();const E=Math.acos(nn(s[S-1].dot(s[S]),-1,1));a[S].applyMatrix4(d.makeRotationAxis(u,E))}l[S].crossVectors(s[S],a[S])}if(e===!0){let S=Math.acos(nn(a[0].dot(a[t]),-1,1));S/=t,s[0].dot(u.crossVectors(a[0],a[t]))>0&&(S=-S);for(let E=1;E<=t;E++)a[E].applyMatrix4(d.makeRotationAxis(s[E],S*E)),l[E].crossVectors(s[E],a[E])}return{tangents:s,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hu extends ri{constructor(t=0,e=0,n=1,s=1,a=0,l=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=l,this.aClockwise=u,this.aRotation=d}getPoint(t,e=new Xt){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const l=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(l?a=0:a=s),this.aClockwise===!0&&!l&&(a===s?a=-s:a=a-s);const u=this.aStartAngle+t*a;let d=this.aX+this.xRadius*Math.cos(u),p=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=d-this.aX,S=p-this.aY;d=v*g-S*_+this.aX,p=v*_+S*g+this.aY}return n.set(d,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class e_ extends hu{constructor(t,e,n,s,a,l){super(t,e,n,n,s,a,l),this.isArcCurve=!0,this.type="ArcCurve"}}function Zo(){let i=0,t=0,e=0,n=0;function s(a,l,u,d){i=a,t=u,e=-3*a+3*l-2*u-d,n=2*a-2*l+u+d}return{initCatmullRom:function(a,l,u,d,p){s(l,u,p*(u-a),p*(d-l))},initNonuniformCatmullRom:function(a,l,u,d,p,g,_){let v=(l-a)/p-(u-a)/(p+g)+(u-l)/g,S=(u-l)/g-(d-l)/(g+_)+(d-u)/_;v*=g,S*=g,s(l,u,v,S)},calc:function(a){const l=a*a,u=l*a;return i+t*a+e*l+n*u}}}const Ns=new k,Ja=new Zo,Za=new Zo,Qa=new Zo;class n_ extends ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){const n=e,s=this.points,a=s.length,l=(a-(this.closed?0:1))*t;let u=Math.floor(l),d=l-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:d===0&&u===a-1&&(u=a-2,d=1);let p,g;this.closed||u>0?p=s[(u-1)%a]:(Ns.subVectors(s[0],s[1]).add(s[0]),p=Ns);const _=s[u%a],v=s[(u+1)%a];if(this.closed||u+2<a?g=s[(u+2)%a]:(Ns.subVectors(s[a-1],s[a-2]).add(s[a-1]),g=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),S),b=Math.pow(_.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(g),S);b<1e-4&&(b=1),E<1e-4&&(E=b),y<1e-4&&(y=b),Ja.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,E,b,y),Za.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,E,b,y),Qa.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,E,b,y)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),Za.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),Qa.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return n.set(Ja.calc(d),Za.calc(d),Qa.calc(d)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rl(i,t,e,n,s){const a=(n-t)*.5,l=(s-e)*.5,u=i*i,d=i*u;return(2*e-2*n+a+l)*d+(-3*e+3*n-2*a-l)*u+a*i+e}function i_(i,t){const e=1-i;return e*e*t}function r_(i,t){return 2*(1-i)*i*t}function s_(i,t){return i*i*t}function Gr(i,t,e,n){return i_(i,t)+r_(i,e)+s_(i,n)}function a_(i,t){const e=1-i;return e*e*e*t}function o_(i,t){const e=1-i;return 3*e*e*i*t}function c_(i,t){return 3*(1-i)*i*i*t}function l_(i,t){return i*i*i*t}function Wr(i,t,e,n,s){return a_(i,t)+o_(i,e)+c_(i,n)+l_(i,s)}class u_ extends ri{constructor(t=new Xt,e=new Xt,n=new Xt,s=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Xt){const n=e,s=this.v0,a=this.v1,l=this.v2,u=this.v3;return n.set(Wr(t,s.x,a.x,l.x,u.x),Wr(t,s.y,a.y,l.y,u.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class f_ extends ri{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){const n=e,s=this.v0,a=this.v1,l=this.v2,u=this.v3;return n.set(Wr(t,s.x,a.x,l.x,u.x),Wr(t,s.y,a.y,l.y,u.y),Wr(t,s.z,a.z,l.z,u.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class h_ extends ri{constructor(t=new Xt,e=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d_ extends ri{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class p_ extends ri{constructor(t=new Xt,e=new Xt,n=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Xt){const n=e,s=this.v0,a=this.v1,l=this.v2;return n.set(Gr(t,s.x,a.x,l.x),Gr(t,s.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qo extends ri{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,s=this.v0,a=this.v1,l=this.v2;return n.set(Gr(t,s.x,a.x,l.x),Gr(t,s.y,a.y,l.y),Gr(t,s.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m_ extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Xt){const n=e,s=this.points,a=(s.length-1)*t,l=Math.floor(a),u=a-l,d=s[l===0?l:l-1],p=s[l],g=s[l>s.length-2?s.length-1:l+1],_=s[l>s.length-3?s.length-1:l+2];return n.set(Rl(u,d.x,p.x,g.x,_.x),Rl(u,d.y,p.y,g.y,_.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Xt().fromArray(s))}return this}}var g_=Object.freeze({__proto__:null,ArcCurve:e_,CatmullRomCurve3:n_,CubicBezierCurve:u_,CubicBezierCurve3:f_,EllipseCurve:hu,LineCurve:h_,LineCurve3:d_,QuadraticBezierCurve:p_,QuadraticBezierCurve3:Qo,SplineCurve:m_});class tc extends Gn{constructor(t=1,e=1,n=1,s=32,a=1,l=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:d};const p=this;s=Math.floor(s),a=Math.floor(a);const g=[],_=[],v=[],S=[];let E=0;const b=[],y=n/2;let m=0;N(),l===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(g),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(S,2));function N(){const D=new k,K=new k;let B=0;const c=(e-t)/n;for(let Y=0;Y<=a;Y++){const R=[],C=Y/a,H=C*(e-t)+t;for(let it=0;it<=s;it++){const q=it/s,ot=q*d+u,ht=Math.sin(ot),ct=Math.cos(ot);K.x=H*ht,K.y=-C*n+y,K.z=H*ct,_.push(K.x,K.y,K.z),D.set(ht,c,ct).normalize(),v.push(D.x,D.y,D.z),S.push(q,1-C),R.push(E++)}b.push(R)}for(let Y=0;Y<s;Y++)for(let R=0;R<a;R++){const C=b[R][Y],H=b[R+1][Y],it=b[R+1][Y+1],q=b[R][Y+1];g.push(C,H,q),g.push(H,it,q),B+=6}p.addGroup(m,B,0),m+=B}function P(D){const K=E,B=new Xt,c=new k;let Y=0;const R=D===!0?t:e,C=D===!0?1:-1;for(let it=1;it<=s;it++)_.push(0,y*C,0),v.push(0,C,0),S.push(.5,.5),E++;const H=E;for(let it=0;it<=s;it++){const ot=it/s*d+u,ht=Math.cos(ot),ct=Math.sin(ot);c.x=R*ct,c.y=y*C,c.z=R*ht,_.push(c.x,c.y,c.z),v.push(0,C,0),B.x=ht*.5+.5,B.y=ct*.5*C+.5,S.push(B.x,B.y),E++}for(let it=0;it<s;it++){const q=K+it,ot=H+it;D===!0?g.push(ot,ot+1,q):g.push(ot+1,ot,q),Y+=3}p.addGroup(m,Y,D===!0?1:2),m+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ns extends Gn{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:l,thetaLength:u},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const d=Math.min(l+u,Math.PI);let p=0;const g=[],_=new k,v=new k,S=[],E=[],b=[],y=[];for(let m=0;m<=n;m++){const N=[],P=m/n;let D=0;m===0&&l===0?D=.5/e:m===n&&d===Math.PI&&(D=-.5/e);for(let K=0;K<=e;K++){const B=K/e;_.x=-t*Math.cos(s+B*a)*Math.sin(l+P*u),_.y=t*Math.cos(l+P*u),_.z=t*Math.sin(s+B*a)*Math.sin(l+P*u),E.push(_.x,_.y,_.z),v.copy(_).normalize(),b.push(v.x,v.y,v.z),y.push(B+D,1-P),N.push(p++)}g.push(N)}for(let m=0;m<n;m++)for(let N=0;N<e;N++){const P=g[m][N+1],D=g[m][N],K=g[m+1][N],B=g[m+1][N+1];(m!==0||l>0)&&S.push(P,D,B),(m!==n-1||d<Math.PI)&&S.push(D,K,B)}this.setIndex(S),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(b,3)),this.setAttribute("uv",new rn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wn extends Gn{constructor(t=new Qo(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:a};const l=t.computeFrenetFrames(e,a);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const u=new k,d=new k,p=new Xt;let g=new k;const _=[],v=[],S=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(S,2));function b(){for(let P=0;P<e;P++)y(P);y(a===!1?e:0),N(),m()}function y(P){g=t.getPointAt(P/e,g);const D=l.normals[P],K=l.binormals[P];for(let B=0;B<=s;B++){const c=B/s*Math.PI*2,Y=Math.sin(c),R=-Math.cos(c);d.x=R*D.x+Y*K.x,d.y=R*D.y+Y*K.y,d.z=R*D.z+Y*K.z,d.normalize(),v.push(d.x,d.y,d.z),u.x=g.x+n*d.x,u.y=g.y+n*d.y,u.z=g.z+n*d.z,_.push(u.x,u.y,u.z)}}function m(){for(let P=1;P<=e;P++)for(let D=1;D<=s;D++){const K=(s+1)*(P-1)+(D-1),B=(s+1)*P+(D-1),c=(s+1)*P+D,Y=(s+1)*(P-1)+D;E.push(K,B,Y),E.push(B,c,Y)}}function N(){for(let P=0;P<=e;P++)for(let D=0;D<=s;D++)p.x=P/e,p.y=D/s,S.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Wn(new g_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class __ extends Qr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Pl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class v_{constructor(t,e,n){const s=this;let a=!1,l=0,u=0,d;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(g){u++,a===!1&&s.onStart!==void 0&&s.onStart(g,l,u),a=!0},this.itemEnd=function(g){l++,s.onProgress!==void 0&&s.onProgress(g,l,u),l===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const S=p[_],E=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const x_=new v_;class ec{constructor(t){this.manager=t!==void 0?t:x_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,a){n.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ec.DEFAULT_MATERIAL_NAME="__DEFAULT";class y_ extends ec{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,l=Pl.get(t);if(l!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(l),a.manager.itemEnd(t)},0),l;const u=qr("img");function d(){g(),Pl.add(t,this),e&&e(this),a.manager.itemEnd(t)}function p(_){g(),s&&s(_),a.manager.itemError(t),a.manager.itemEnd(t)}function g(){u.removeEventListener("load",d,!1),u.removeEventListener("error",p,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(t),u.src=t,u}}class M_ extends ec{constructor(t){super(t)}load(t,e,n,s){const a=new ln,l=new y_(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(u){a.image=u,a.needsUpdate=!0,e!==void 0&&e(a)},n,s),a}}class S_ extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const to=new He,Ll=new k,Dl=new k;class E_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ll),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Il=new He,zr=new k,eo=new k;class T_ extends E_{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),zr.setFromMatrixPosition(t.matrixWorld),n.position.copy(zr),eo.copy(n.position),eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(eo),n.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),Il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il)}}class nc extends S_{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new T_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);var b_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var du={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(t,e){i.exports=t.document?e(t,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return e(n)}})(typeof window<"u"?window:b_,function(t,e){var n=[],s=Object.getPrototypeOf,a=n.slice,l=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},u=n.push,d=n.indexOf,p={},g=p.toString,_=p.hasOwnProperty,v=_.toString,S=v.call(Object),E={},b=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},y=function(o){return o!=null&&o===o.window},m=t.document,N={type:!0,src:!0,nonce:!0,noModule:!0};function P(r,o,f){f=f||m;var h,x,M=f.createElement("script");if(M.text=r,o)for(h in N)x=o[h]||o.getAttribute&&o.getAttribute(h),x&&M.setAttribute(h,x);f.head.appendChild(M).parentNode.removeChild(M)}function D(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?p[g.call(r)]||"object":typeof r}var K="3.7.1",B=/HTML$/i,c=function(r,o){return new c.fn.init(r,o)};c.fn=c.prototype={jquery:K,constructor:c,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=c.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return c.each(this,r)},map:function(r){return this.pushStack(c.map(this,function(o,f){return r.call(o,f,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,f=+r+(r<0?o:0);return this.pushStack(f>=0&&f<o?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},c.extend=c.fn.extend=function(){var r,o,f,h,x,M,T=arguments[0]||{},F=1,I=arguments.length,V=!1;for(typeof T=="boolean"&&(V=T,T=arguments[F]||{},F++),typeof T!="object"&&!b(T)&&(T={}),F===I&&(T=this,F--);F<I;F++)if((r=arguments[F])!=null)for(o in r)h=r[o],!(o==="__proto__"||T===h)&&(V&&h&&(c.isPlainObject(h)||(x=Array.isArray(h)))?(f=T[o],x&&!Array.isArray(f)?M=[]:!x&&!c.isPlainObject(f)?M={}:M=f,x=!1,T[o]=c.extend(V,M,h)):h!==void 0&&(T[o]=h));return T},c.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,f;return!r||g.call(r)!=="[object Object]"?!1:(o=s(r),o?(f=_.call(o,"constructor")&&o.constructor,typeof f=="function"&&v.call(f)===S):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,f){P(r,{nonce:o&&o.nonce},f)},each:function(r,o){var f,h=0;if(Y(r))for(f=r.length;h<f&&o.call(r[h],h,r[h])!==!1;h++);else for(h in r)if(o.call(r[h],h,r[h])===!1)break;return r},text:function(r){var o,f="",h=0,x=r.nodeType;if(!x)for(;o=r[h++];)f+=c.text(o);return x===1||x===11?r.textContent:x===9?r.documentElement.textContent:x===3||x===4?r.nodeValue:f},makeArray:function(r,o){var f=o||[];return r!=null&&(Y(Object(r))?c.merge(f,typeof r=="string"?[r]:r):u.call(f,r)),f},inArray:function(r,o,f){return o==null?-1:d.call(o,r,f)},isXMLDoc:function(r){var o=r&&r.namespaceURI,f=r&&(r.ownerDocument||r).documentElement;return!B.test(o||f&&f.nodeName||"HTML")},merge:function(r,o){for(var f=+o.length,h=0,x=r.length;h<f;h++)r[x++]=o[h];return r.length=x,r},grep:function(r,o,f){for(var h,x=[],M=0,T=r.length,F=!f;M<T;M++)h=!o(r[M],M),h!==F&&x.push(r[M]);return x},map:function(r,o,f){var h,x,M=0,T=[];if(Y(r))for(h=r.length;M<h;M++)x=o(r[M],M,f),x!=null&&T.push(x);else for(M in r)x=o(r[M],M,f),x!=null&&T.push(x);return l(T)},guid:1,support:E}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=n[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){p["[object "+o+"]"]=o.toLowerCase()});function Y(r){var o=!!r&&"length"in r&&r.length,f=D(r);return b(r)||y(r)?!1:f==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function R(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var C=n.pop,H=n.sort,it=n.splice,q="[\\x20\\t\\r\\n\\f]",ot=new RegExp("^"+q+"+|((?:^|[^\\\\])(?:\\\\.)*)"+q+"+$","g");c.contains=function(r,o){var f=o&&o.parentNode;return r===f||!!(f&&f.nodeType===1&&(r.contains?r.contains(f):r.compareDocumentPosition&&r.compareDocumentPosition(f)&16))};var ht=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ct(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}c.escapeSelector=function(r){return(r+"").replace(ht,ct)};var dt=m,rt=u;(function(){var r,o,f,h,x,M=rt,T,F,I,V,nt,at=c.expando,J=0,gt=0,Qt=cs(),ge=cs(),oe=cs(),Ze=cs(),qe=function(L,z){return L===z&&(x=!0),0},In="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Un="(?:\\\\[\\da-fA-F]{1,6}"+q+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",pe="\\["+q+"*("+Un+")(?:"+q+"*([*^$|!~]?=)"+q+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Un+"))|)"+q+"*\\]",wi=":("+Un+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+pe+")*)|.*)\\)|)",ye=new RegExp(q+"+","g"),Ve=new RegExp("^"+q+"*,"+q+"*"),Pr=new RegExp("^"+q+"*([>+~]|"+q+")"+q+"*"),ga=new RegExp(q+"|>"),Nn=new RegExp(wi),Lr=new RegExp("^"+Un+"$"),Fn={ID:new RegExp("^#("+Un+")"),CLASS:new RegExp("^\\.("+Un+")"),TAG:new RegExp("^("+Un+"|[*])"),ATTR:new RegExp("^"+pe),PSEUDO:new RegExp("^"+wi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+q+"*(even|odd|(([+-]|)(\\d*)n|)"+q+"*(?:([+-]|)"+q+"*(\\d+)|))"+q+"*\\)|)","i"),bool:new RegExp("^(?:"+In+")$","i"),needsContext:new RegExp("^"+q+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+q+"*((?:-\\d)?\\d*)"+q+"*\\)|)(?=[^-]|$)","i")},si=/^(?:input|select|textarea|button)$/i,ai=/^h\d$/i,yn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_a=/[+~]/,Xn=new RegExp("\\\\[\\da-fA-F]{1,6}"+q+"?|\\\\([^\\r\\n\\f])","g"),qn=function(L,z){var $="0x"+L.slice(1)-65536;return z||($<0?String.fromCharCode($+65536):String.fromCharCode($>>10|55296,$&1023|56320))},zu=function(){oi()},Hu=us(function(L){return L.disabled===!0&&R(L,"fieldset")},{dir:"parentNode",next:"legend"});function ku(){try{return T.activeElement}catch{}}try{M.apply(n=a.call(dt.childNodes),dt.childNodes),n[dt.childNodes.length].nodeType}catch{M={apply:function(z,$){rt.apply(z,a.call($))},call:function(z){rt.apply(z,a.call(arguments,1))}}}function Ce(L,z,$,et){var st,St,Ct,zt,Rt,fe,Jt,te=z&&z.ownerDocument,he=z?z.nodeType:9;if($=$||[],typeof L!="string"||!L||he!==1&&he!==9&&he!==11)return $;if(!et&&(oi(z),z=z||T,I)){if(he!==11&&(Rt=yn.exec(L)))if(st=Rt[1]){if(he===9)if(Ct=z.getElementById(st)){if(Ct.id===st)return M.call($,Ct),$}else return $;else if(te&&(Ct=te.getElementById(st))&&Ce.contains(z,Ct)&&Ct.id===st)return M.call($,Ct),$}else{if(Rt[2])return M.apply($,z.getElementsByTagName(L)),$;if((st=Rt[3])&&z.getElementsByClassName)return M.apply($,z.getElementsByClassName(st)),$}if(!Ze[L+" "]&&(!V||!V.test(L))){if(Jt=L,te=z,he===1&&(ga.test(L)||Pr.test(L))){for(te=_a.test(L)&&va(z.parentNode)||z,(te!=z||!E.scope)&&((zt=z.getAttribute("id"))?zt=c.escapeSelector(zt):z.setAttribute("id",zt=at)),fe=Dr(L),St=fe.length;St--;)fe[St]=(zt?"#"+zt:":scope")+" "+ls(fe[St]);Jt=fe.join(",")}try{return M.apply($,te.querySelectorAll(Jt)),$}catch{Ze(L,!0)}finally{zt===at&&z.removeAttribute("id")}}}return Ic(L.replace(ot,"$1"),z,$,et)}function cs(){var L=[];function z($,et){return L.push($+" ")>o.cacheLength&&delete z[L.shift()],z[$+" "]=et}return z}function An(L){return L[at]=!0,L}function ji(L){var z=T.createElement("fieldset");try{return!!L(z)}catch{return!1}finally{z.parentNode&&z.parentNode.removeChild(z),z=null}}function Vu(L){return function(z){return R(z,"input")&&z.type===L}}function Gu(L){return function(z){return(R(z,"input")||R(z,"button"))&&z.type===L}}function Lc(L){return function(z){return"form"in z?z.parentNode&&z.disabled===!1?"label"in z?"label"in z.parentNode?z.parentNode.disabled===L:z.disabled===L:z.isDisabled===L||z.isDisabled!==!L&&Hu(z)===L:z.disabled===L:"label"in z?z.disabled===L:!1}}function Ci(L){return An(function(z){return z=+z,An(function($,et){for(var st,St=L([],$.length,z),Ct=St.length;Ct--;)$[st=St[Ct]]&&($[st]=!(et[st]=$[st]))})})}function va(L){return L&&typeof L.getElementsByTagName<"u"&&L}function oi(L){var z,$=L?L.ownerDocument||L:dt;return $==T||$.nodeType!==9||!$.documentElement||(T=$,F=T.documentElement,I=!c.isXMLDoc(T),nt=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&dt!=T&&(z=T.defaultView)&&z.top!==z&&z.addEventListener("unload",zu),E.getById=ji(function(et){return F.appendChild(et).id=c.expando,!T.getElementsByName||!T.getElementsByName(c.expando).length}),E.disconnectedMatch=ji(function(et){return nt.call(et,"*")}),E.scope=ji(function(){return T.querySelectorAll(":scope")}),E.cssHas=ji(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(o.filter.ID=function(et){var st=et.replace(Xn,qn);return function(St){return St.getAttribute("id")===st}},o.find.ID=function(et,st){if(typeof st.getElementById<"u"&&I){var St=st.getElementById(et);return St?[St]:[]}}):(o.filter.ID=function(et){var st=et.replace(Xn,qn);return function(St){var Ct=typeof St.getAttributeNode<"u"&&St.getAttributeNode("id");return Ct&&Ct.value===st}},o.find.ID=function(et,st){if(typeof st.getElementById<"u"&&I){var St,Ct,zt,Rt=st.getElementById(et);if(Rt){if(St=Rt.getAttributeNode("id"),St&&St.value===et)return[Rt];for(zt=st.getElementsByName(et),Ct=0;Rt=zt[Ct++];)if(St=Rt.getAttributeNode("id"),St&&St.value===et)return[Rt]}return[]}}),o.find.TAG=function(et,st){return typeof st.getElementsByTagName<"u"?st.getElementsByTagName(et):st.querySelectorAll(et)},o.find.CLASS=function(et,st){if(typeof st.getElementsByClassName<"u"&&I)return st.getElementsByClassName(et)},V=[],ji(function(et){var st;F.appendChild(et).innerHTML="<a id='"+at+"' href='' disabled='disabled'></a><select id='"+at+"-\r\\' disabled='disabled'><option selected=''></option></select>",et.querySelectorAll("[selected]").length||V.push("\\["+q+"*(?:value|"+In+")"),et.querySelectorAll("[id~="+at+"-]").length||V.push("~="),et.querySelectorAll("a#"+at+"+*").length||V.push(".#.+[+~]"),et.querySelectorAll(":checked").length||V.push(":checked"),st=T.createElement("input"),st.setAttribute("type","hidden"),et.appendChild(st).setAttribute("name","D"),F.appendChild(et).disabled=!0,et.querySelectorAll(":disabled").length!==2&&V.push(":enabled",":disabled"),st=T.createElement("input"),st.setAttribute("name",""),et.appendChild(st),et.querySelectorAll("[name='']").length||V.push("\\["+q+"*name"+q+"*="+q+`*(?:''|"")`)}),E.cssHas||V.push(":has"),V=V.length&&new RegExp(V.join("|")),qe=function(et,st){if(et===st)return x=!0,0;var St=!et.compareDocumentPosition-!st.compareDocumentPosition;return St||(St=(et.ownerDocument||et)==(st.ownerDocument||st)?et.compareDocumentPosition(st):1,St&1||!E.sortDetached&&st.compareDocumentPosition(et)===St?et===T||et.ownerDocument==dt&&Ce.contains(dt,et)?-1:st===T||st.ownerDocument==dt&&Ce.contains(dt,st)?1:h?d.call(h,et)-d.call(h,st):0:St&4?-1:1)}),T}Ce.matches=function(L,z){return Ce(L,null,null,z)},Ce.matchesSelector=function(L,z){if(oi(L),I&&!Ze[z+" "]&&(!V||!V.test(z)))try{var $=nt.call(L,z);if($||E.disconnectedMatch||L.document&&L.document.nodeType!==11)return $}catch{Ze(z,!0)}return Ce(z,T,null,[L]).length>0},Ce.contains=function(L,z){return(L.ownerDocument||L)!=T&&oi(L),c.contains(L,z)},Ce.attr=function(L,z){(L.ownerDocument||L)!=T&&oi(L);var $=o.attrHandle[z.toLowerCase()],et=$&&_.call(o.attrHandle,z.toLowerCase())?$(L,z,!I):void 0;return et!==void 0?et:L.getAttribute(z)},Ce.error=function(L){throw new Error("Syntax error, unrecognized expression: "+L)},c.uniqueSort=function(L){var z,$=[],et=0,st=0;if(x=!E.sortStable,h=!E.sortStable&&a.call(L,0),H.call(L,qe),x){for(;z=L[st++];)z===L[st]&&(et=$.push(st));for(;et--;)it.call(L,$[et],1)}return h=null,L},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(a.apply(this)))},o=c.expr={cacheLength:50,createPseudo:An,match:Fn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(L){return L[1]=L[1].replace(Xn,qn),L[3]=(L[3]||L[4]||L[5]||"").replace(Xn,qn),L[2]==="~="&&(L[3]=" "+L[3]+" "),L.slice(0,4)},CHILD:function(L){return L[1]=L[1].toLowerCase(),L[1].slice(0,3)==="nth"?(L[3]||Ce.error(L[0]),L[4]=+(L[4]?L[5]+(L[6]||1):2*(L[3]==="even"||L[3]==="odd")),L[5]=+(L[7]+L[8]||L[3]==="odd")):L[3]&&Ce.error(L[0]),L},PSEUDO:function(L){var z,$=!L[6]&&L[2];return Fn.CHILD.test(L[0])?null:(L[3]?L[2]=L[4]||L[5]||"":$&&Nn.test($)&&(z=Dr($,!0))&&(z=$.indexOf(")",$.length-z)-$.length)&&(L[0]=L[0].slice(0,z),L[2]=$.slice(0,z)),L.slice(0,3))}},filter:{TAG:function(L){var z=L.replace(Xn,qn).toLowerCase();return L==="*"?function(){return!0}:function($){return R($,z)}},CLASS:function(L){var z=Qt[L+" "];return z||(z=new RegExp("(^|"+q+")"+L+"("+q+"|$)"))&&Qt(L,function($){return z.test(typeof $.className=="string"&&$.className||typeof $.getAttribute<"u"&&$.getAttribute("class")||"")})},ATTR:function(L,z,$){return function(et){var st=Ce.attr(et,L);return st==null?z==="!=":z?(st+="",z==="="?st===$:z==="!="?st!==$:z==="^="?$&&st.indexOf($)===0:z==="*="?$&&st.indexOf($)>-1:z==="$="?$&&st.slice(-$.length)===$:z==="~="?(" "+st.replace(ye," ")+" ").indexOf($)>-1:z==="|="?st===$||st.slice(0,$.length+1)===$+"-":!1):!0}},CHILD:function(L,z,$,et,st){var St=L.slice(0,3)!=="nth",Ct=L.slice(-4)!=="last",zt=z==="of-type";return et===1&&st===0?function(Rt){return!!Rt.parentNode}:function(Rt,fe,Jt){var te,he,qt,Ie,fn,Qe=St!==Ct?"nextSibling":"previousSibling",Mn=Rt.parentNode,On=zt&&Rt.nodeName.toLowerCase(),$i=!Jt&&!zt,an=!1;if(Mn){if(St){for(;Qe;){for(qt=Rt;qt=qt[Qe];)if(zt?R(qt,On):qt.nodeType===1)return!1;fn=Qe=L==="only"&&!fn&&"nextSibling"}return!0}if(fn=[Ct?Mn.firstChild:Mn.lastChild],Ct&&$i){for(he=Mn[at]||(Mn[at]={}),te=he[L]||[],Ie=te[0]===J&&te[1],an=Ie&&te[2],qt=Ie&&Mn.childNodes[Ie];qt=++Ie&&qt&&qt[Qe]||(an=Ie=0)||fn.pop();)if(qt.nodeType===1&&++an&&qt===Rt){he[L]=[J,Ie,an];break}}else if($i&&(he=Rt[at]||(Rt[at]={}),te=he[L]||[],Ie=te[0]===J&&te[1],an=Ie),an===!1)for(;(qt=++Ie&&qt&&qt[Qe]||(an=Ie=0)||fn.pop())&&!((zt?R(qt,On):qt.nodeType===1)&&++an&&($i&&(he=qt[at]||(qt[at]={}),he[L]=[J,an]),qt===Rt)););return an-=st,an===et||an%et===0&&an/et>=0}}},PSEUDO:function(L,z){var $,et=o.pseudos[L]||o.setFilters[L.toLowerCase()]||Ce.error("unsupported pseudo: "+L);return et[at]?et(z):et.length>1?($=[L,L,"",z],o.setFilters.hasOwnProperty(L.toLowerCase())?An(function(st,St){for(var Ct,zt=et(st,z),Rt=zt.length;Rt--;)Ct=d.call(st,zt[Rt]),st[Ct]=!(St[Ct]=zt[Rt])}):function(st){return et(st,0,$)}):et}},pseudos:{not:An(function(L){var z=[],$=[],et=Sa(L.replace(ot,"$1"));return et[at]?An(function(st,St,Ct,zt){for(var Rt,fe=et(st,null,zt,[]),Jt=st.length;Jt--;)(Rt=fe[Jt])&&(st[Jt]=!(St[Jt]=Rt))}):function(st,St,Ct){return z[0]=st,et(z,null,Ct,$),z[0]=null,!$.pop()}}),has:An(function(L){return function(z){return Ce(L,z).length>0}}),contains:An(function(L){return L=L.replace(Xn,qn),function(z){return(z.textContent||c.text(z)).indexOf(L)>-1}}),lang:An(function(L){return Lr.test(L||"")||Ce.error("unsupported lang: "+L),L=L.replace(Xn,qn).toLowerCase(),function(z){var $;do if($=I?z.lang:z.getAttribute("xml:lang")||z.getAttribute("lang"))return $=$.toLowerCase(),$===L||$.indexOf(L+"-")===0;while((z=z.parentNode)&&z.nodeType===1);return!1}}),target:function(L){var z=t.location&&t.location.hash;return z&&z.slice(1)===L.id},root:function(L){return L===F},focus:function(L){return L===ku()&&T.hasFocus()&&!!(L.type||L.href||~L.tabIndex)},enabled:Lc(!1),disabled:Lc(!0),checked:function(L){return R(L,"input")&&!!L.checked||R(L,"option")&&!!L.selected},selected:function(L){return L.parentNode&&L.parentNode.selectedIndex,L.selected===!0},empty:function(L){for(L=L.firstChild;L;L=L.nextSibling)if(L.nodeType<6)return!1;return!0},parent:function(L){return!o.pseudos.empty(L)},header:function(L){return ai.test(L.nodeName)},input:function(L){return si.test(L.nodeName)},button:function(L){return R(L,"input")&&L.type==="button"||R(L,"button")},text:function(L){var z;return R(L,"input")&&L.type==="text"&&((z=L.getAttribute("type"))==null||z.toLowerCase()==="text")},first:Ci(function(){return[0]}),last:Ci(function(L,z){return[z-1]}),eq:Ci(function(L,z,$){return[$<0?$+z:$]}),even:Ci(function(L,z){for(var $=0;$<z;$+=2)L.push($);return L}),odd:Ci(function(L,z){for(var $=1;$<z;$+=2)L.push($);return L}),lt:Ci(function(L,z,$){var et;for($<0?et=$+z:$>z?et=z:et=$;--et>=0;)L.push(et);return L}),gt:Ci(function(L,z,$){for(var et=$<0?$+z:$;++et<z;)L.push(et);return L})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=Vu(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=Gu(r);function Dc(){}Dc.prototype=o.filters=o.pseudos,o.setFilters=new Dc;function Dr(L,z){var $,et,st,St,Ct,zt,Rt,fe=ge[L+" "];if(fe)return z?0:fe.slice(0);for(Ct=L,zt=[],Rt=o.preFilter;Ct;){(!$||(et=Ve.exec(Ct)))&&(et&&(Ct=Ct.slice(et[0].length)||Ct),zt.push(st=[])),$=!1,(et=Pr.exec(Ct))&&($=et.shift(),st.push({value:$,type:et[0].replace(ot," ")}),Ct=Ct.slice($.length));for(St in o.filter)(et=Fn[St].exec(Ct))&&(!Rt[St]||(et=Rt[St](et)))&&($=et.shift(),st.push({value:$,type:St,matches:et}),Ct=Ct.slice($.length));if(!$)break}return z?Ct.length:Ct?Ce.error(L):ge(L,zt).slice(0)}function ls(L){for(var z=0,$=L.length,et="";z<$;z++)et+=L[z].value;return et}function us(L,z,$){var et=z.dir,st=z.next,St=st||et,Ct=$&&St==="parentNode",zt=gt++;return z.first?function(Rt,fe,Jt){for(;Rt=Rt[et];)if(Rt.nodeType===1||Ct)return L(Rt,fe,Jt);return!1}:function(Rt,fe,Jt){var te,he,qt=[J,zt];if(Jt){for(;Rt=Rt[et];)if((Rt.nodeType===1||Ct)&&L(Rt,fe,Jt))return!0}else for(;Rt=Rt[et];)if(Rt.nodeType===1||Ct)if(he=Rt[at]||(Rt[at]={}),st&&R(Rt,st))Rt=Rt[et]||Rt;else{if((te=he[St])&&te[0]===J&&te[1]===zt)return qt[2]=te[2];if(he[St]=qt,qt[2]=L(Rt,fe,Jt))return!0}return!1}}function xa(L){return L.length>1?function(z,$,et){for(var st=L.length;st--;)if(!L[st](z,$,et))return!1;return!0}:L[0]}function Wu(L,z,$){for(var et=0,st=z.length;et<st;et++)Ce(L,z[et],$);return $}function fs(L,z,$,et,st){for(var St,Ct=[],zt=0,Rt=L.length,fe=z!=null;zt<Rt;zt++)(St=L[zt])&&(!$||$(St,et,st))&&(Ct.push(St),fe&&z.push(zt));return Ct}function ya(L,z,$,et,st,St){return et&&!et[at]&&(et=ya(et)),st&&!st[at]&&(st=ya(st,St)),An(function(Ct,zt,Rt,fe){var Jt,te,he,qt,Ie=[],fn=[],Qe=zt.length,Mn=Ct||Wu(z||"*",Rt.nodeType?[Rt]:Rt,[]),On=L&&(Ct||!z)?fs(Mn,Ie,L,Rt,fe):Mn;if($?(qt=st||(Ct?L:Qe||et)?[]:zt,$(On,qt,Rt,fe)):qt=On,et)for(Jt=fs(qt,fn),et(Jt,[],Rt,fe),te=Jt.length;te--;)(he=Jt[te])&&(qt[fn[te]]=!(On[fn[te]]=he));if(Ct){if(st||L){if(st){for(Jt=[],te=qt.length;te--;)(he=qt[te])&&Jt.push(On[te]=he);st(null,qt=[],Jt,fe)}for(te=qt.length;te--;)(he=qt[te])&&(Jt=st?d.call(Ct,he):Ie[te])>-1&&(Ct[Jt]=!(zt[Jt]=he))}}else qt=fs(qt===zt?qt.splice(Qe,qt.length):qt),st?st(null,zt,qt,fe):M.apply(zt,qt)})}function Ma(L){for(var z,$,et,st=L.length,St=o.relative[L[0].type],Ct=St||o.relative[" "],zt=St?1:0,Rt=us(function(te){return te===z},Ct,!0),fe=us(function(te){return d.call(z,te)>-1},Ct,!0),Jt=[function(te,he,qt){var Ie=!St&&(qt||he!=f)||((z=he).nodeType?Rt(te,he,qt):fe(te,he,qt));return z=null,Ie}];zt<st;zt++)if($=o.relative[L[zt].type])Jt=[us(xa(Jt),$)];else{if($=o.filter[L[zt].type].apply(null,L[zt].matches),$[at]){for(et=++zt;et<st&&!o.relative[L[et].type];et++);return ya(zt>1&&xa(Jt),zt>1&&ls(L.slice(0,zt-1).concat({value:L[zt-2].type===" "?"*":""})).replace(ot,"$1"),$,zt<et&&Ma(L.slice(zt,et)),et<st&&Ma(L=L.slice(et)),et<st&&ls(L))}Jt.push($)}return xa(Jt)}function Xu(L,z){var $=z.length>0,et=L.length>0,st=function(St,Ct,zt,Rt,fe){var Jt,te,he,qt=0,Ie="0",fn=St&&[],Qe=[],Mn=f,On=St||et&&o.find.TAG("*",fe),$i=J+=Mn==null?1:Math.random()||.1,an=On.length;for(fe&&(f=Ct==T||Ct||fe);Ie!==an&&(Jt=On[Ie])!=null;Ie++){if(et&&Jt){for(te=0,!Ct&&Jt.ownerDocument!=T&&(oi(Jt),zt=!I);he=L[te++];)if(he(Jt,Ct||T,zt)){M.call(Rt,Jt);break}fe&&(J=$i)}$&&((Jt=!he&&Jt)&&qt--,St&&fn.push(Jt))}if(qt+=Ie,$&&Ie!==qt){for(te=0;he=z[te++];)he(fn,Qe,Ct,zt);if(St){if(qt>0)for(;Ie--;)fn[Ie]||Qe[Ie]||(Qe[Ie]=C.call(Rt));Qe=fs(Qe)}M.apply(Rt,Qe),fe&&!St&&Qe.length>0&&qt+z.length>1&&c.uniqueSort(Rt)}return fe&&(J=$i,f=Mn),fn};return $?An(st):st}function Sa(L,z){var $,et=[],st=[],St=oe[L+" "];if(!St){for(z||(z=Dr(L)),$=z.length;$--;)St=Ma(z[$]),St[at]?et.push(St):st.push(St);St=oe(L,Xu(st,et)),St.selector=L}return St}function Ic(L,z,$,et){var st,St,Ct,zt,Rt,fe=typeof L=="function"&&L,Jt=!et&&Dr(L=fe.selector||L);if($=$||[],Jt.length===1){if(St=Jt[0]=Jt[0].slice(0),St.length>2&&(Ct=St[0]).type==="ID"&&z.nodeType===9&&I&&o.relative[St[1].type]){if(z=(o.find.ID(Ct.matches[0].replace(Xn,qn),z)||[])[0],z)fe&&(z=z.parentNode);else return $;L=L.slice(St.shift().value.length)}for(st=Fn.needsContext.test(L)?0:St.length;st--&&(Ct=St[st],!o.relative[zt=Ct.type]);)if((Rt=o.find[zt])&&(et=Rt(Ct.matches[0].replace(Xn,qn),_a.test(St[0].type)&&va(z.parentNode)||z))){if(St.splice(st,1),L=et.length&&ls(St),!L)return M.apply($,et),$;break}}return(fe||Sa(L,Jt))(et,z,!I,$,!z||_a.test(L)&&va(z.parentNode)||z),$}E.sortStable=at.split("").sort(qe).join("")===at,oi(),E.sortDetached=ji(function(L){return L.compareDocumentPosition(T.createElement("fieldset"))&1}),c.find=Ce,c.expr[":"]=c.expr.pseudos,c.unique=c.uniqueSort,Ce.compile=Sa,Ce.select=Ic,Ce.setDocument=oi,Ce.tokenize=Dr,Ce.escape=c.escapeSelector,Ce.getText=c.text,Ce.isXML=c.isXMLDoc,Ce.selectors=c.expr,Ce.support=c.support,Ce.uniqueSort=c.uniqueSort})();var bt=function(r,o,f){for(var h=[],x=f!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(x&&c(r).is(f))break;h.push(r)}return h},Dt=function(r,o){for(var f=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&f.push(r);return f},Bt=c.expr.match.needsContext,ue=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Me(r,o,f){return b(o)?c.grep(r,function(h,x){return!!o.call(h,x,h)!==f}):o.nodeType?c.grep(r,function(h){return h===o!==f}):typeof o!="string"?c.grep(r,function(h){return d.call(o,h)>-1!==f}):c.filter(o,r,f)}c.filter=function(r,o,f){var h=o[0];return f&&(r=":not("+r+")"),o.length===1&&h.nodeType===1?c.find.matchesSelector(h,r)?[h]:[]:c.find.matches(r,c.grep(o,function(x){return x.nodeType===1}))},c.fn.extend({find:function(r){var o,f,h=this.length,x=this;if(typeof r!="string")return this.pushStack(c(r).filter(function(){for(o=0;o<h;o++)if(c.contains(x[o],this))return!0}));for(f=this.pushStack([]),o=0;o<h;o++)c.find(r,x[o],f);return h>1?c.uniqueSort(f):f},filter:function(r){return this.pushStack(Me(this,r||[],!1))},not:function(r){return this.pushStack(Me(this,r||[],!0))},is:function(r){return!!Me(this,typeof r=="string"&&Bt.test(r)?c(r):r||[],!1).length}});var lt,_t=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ft=c.fn.init=function(r,o,f){var h,x;if(!r)return this;if(f=f||lt,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?h=[null,r,null]:h=_t.exec(r),h&&(h[1]||!o))if(h[1]){if(o=o instanceof c?o[0]:o,c.merge(this,c.parseHTML(h[1],o&&o.nodeType?o.ownerDocument||o:m,!0)),ue.test(h[1])&&c.isPlainObject(o))for(h in o)b(this[h])?this[h](o[h]):this.attr(h,o[h]);return this}else return x=m.getElementById(h[2]),x&&(this[0]=x,this.length=1),this;else return!o||o.jquery?(o||f).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(b(r))return f.ready!==void 0?f.ready(r):r(c)}return c.makeArray(r,this)};Ft.prototype=c.fn,lt=c(m);var It=/^(?:parents|prev(?:Until|All))/,ee={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(r){var o=c(r,this),f=o.length;return this.filter(function(){for(var h=0;h<f;h++)if(c.contains(this,o[h]))return!0})},closest:function(r,o){var f,h=0,x=this.length,M=[],T=typeof r!="string"&&c(r);if(!Bt.test(r)){for(;h<x;h++)for(f=this[h];f&&f!==o;f=f.parentNode)if(f.nodeType<11&&(T?T.index(f)>-1:f.nodeType===1&&c.find.matchesSelector(f,r))){M.push(f);break}}return this.pushStack(M.length>1?c.uniqueSort(M):M)},index:function(r){return r?typeof r=="string"?d.call(c(r),this[0]):d.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function re(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}c.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return bt(r,"parentNode")},parentsUntil:function(r,o,f){return bt(r,"parentNode",f)},next:function(r){return re(r,"nextSibling")},prev:function(r){return re(r,"previousSibling")},nextAll:function(r){return bt(r,"nextSibling")},prevAll:function(r){return bt(r,"previousSibling")},nextUntil:function(r,o,f){return bt(r,"nextSibling",f)},prevUntil:function(r,o,f){return bt(r,"previousSibling",f)},siblings:function(r){return Dt((r.parentNode||{}).firstChild,r)},children:function(r){return Dt(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(R(r,"template")&&(r=r.content||r),c.merge([],r.childNodes))}},function(r,o){c.fn[r]=function(f,h){var x=c.map(this,o,f);return r.slice(-5)!=="Until"&&(h=f),h&&typeof h=="string"&&(x=c.filter(h,x)),this.length>1&&(ee[r]||c.uniqueSort(x),It.test(r)&&x.reverse()),this.pushStack(x)}});var Zt=/[^\x20\t\r\n\f]+/g;function Be(r){var o={};return c.each(r.match(Zt)||[],function(f,h){o[h]=!0}),o}c.Callbacks=function(r){r=typeof r=="string"?Be(r):c.extend({},r);var o,f,h,x,M=[],T=[],F=-1,I=function(){for(x=x||r.once,h=o=!0;T.length;F=-1)for(f=T.shift();++F<M.length;)M[F].apply(f[0],f[1])===!1&&r.stopOnFalse&&(F=M.length,f=!1);r.memory||(f=!1),o=!1,x&&(f?M=[]:M="")},V={add:function(){return M&&(f&&!o&&(F=M.length-1,T.push(f)),function nt(at){c.each(at,function(J,gt){b(gt)?(!r.unique||!V.has(gt))&&M.push(gt):gt&&gt.length&&D(gt)!=="string"&&nt(gt)})}(arguments),f&&!o&&I()),this},remove:function(){return c.each(arguments,function(nt,at){for(var J;(J=c.inArray(at,M,J))>-1;)M.splice(J,1),J<=F&&F--}),this},has:function(nt){return nt?c.inArray(nt,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return x=T=[],M=f="",this},disabled:function(){return!M},lock:function(){return x=T=[],!f&&!o&&(M=f=""),this},locked:function(){return!!x},fireWith:function(nt,at){return x||(at=at||[],at=[nt,at.slice?at.slice():at],T.push(at),o||I()),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!h}};return V};function O(r){return r}function Ue(r){throw r}function Se(r,o,f,h){var x;try{r&&b(x=r.promise)?x.call(r).done(o).fail(f):r&&b(x=r.then)?x.call(r,o,f):o.apply(void 0,[r].slice(h))}catch(M){f.apply(void 0,[M])}}c.extend({Deferred:function(r){var o=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],f="pending",h={state:function(){return f},always:function(){return x.done(arguments).fail(arguments),this},catch:function(M){return h.then(null,M)},pipe:function(){var M=arguments;return c.Deferred(function(T){c.each(o,function(F,I){var V=b(M[I[4]])&&M[I[4]];x[I[1]](function(){var nt=V&&V.apply(this,arguments);nt&&b(nt.promise)?nt.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[I[0]+"With"](this,V?[nt]:arguments)})}),M=null}).promise()},then:function(M,T,F){var I=0;function V(nt,at,J,gt){return function(){var Qt=this,ge=arguments,oe=function(){var qe,In;if(!(nt<I)){if(qe=J.apply(Qt,ge),qe===at.promise())throw new TypeError("Thenable self-resolution");In=qe&&(typeof qe=="object"||typeof qe=="function")&&qe.then,b(In)?gt?In.call(qe,V(I,at,O,gt),V(I,at,Ue,gt)):(I++,In.call(qe,V(I,at,O,gt),V(I,at,Ue,gt),V(I,at,O,at.notifyWith))):(J!==O&&(Qt=void 0,ge=[qe]),(gt||at.resolveWith)(Qt,ge))}},Ze=gt?oe:function(){try{oe()}catch(qe){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(qe,Ze.error),nt+1>=I&&(J!==Ue&&(Qt=void 0,ge=[qe]),at.rejectWith(Qt,ge))}};nt?Ze():(c.Deferred.getErrorHook?Ze.error=c.Deferred.getErrorHook():c.Deferred.getStackHook&&(Ze.error=c.Deferred.getStackHook()),t.setTimeout(Ze))}}return c.Deferred(function(nt){o[0][3].add(V(0,nt,b(F)?F:O,nt.notifyWith)),o[1][3].add(V(0,nt,b(M)?M:O)),o[2][3].add(V(0,nt,b(T)?T:Ue))}).promise()},promise:function(M){return M!=null?c.extend(M,h):h}},x={};return c.each(o,function(M,T){var F=T[2],I=T[5];h[T[1]]=F.add,I&&F.add(function(){f=I},o[3-M][2].disable,o[3-M][3].disable,o[0][2].lock,o[0][3].lock),F.add(T[3].fire),x[T[0]]=function(){return x[T[0]+"With"](this===x?void 0:this,arguments),this},x[T[0]+"With"]=F.fireWith}),h.promise(x),r&&r.call(x,x),x},when:function(r){var o=arguments.length,f=o,h=Array(f),x=a.call(arguments),M=c.Deferred(),T=function(F){return function(I){h[F]=this,x[F]=arguments.length>1?a.call(arguments):I,--o||M.resolveWith(h,x)}};if(o<=1&&(Se(r,M.done(T(f)).resolve,M.reject,!o),M.state()==="pending"||b(x[f]&&x[f].then)))return M.then();for(;f--;)Se(x[f],T(f),M.reject);return M.promise()}});var Ae=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(r,o){t.console&&t.console.warn&&r&&Ae.test(r.name)&&t.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},c.readyException=function(r){t.setTimeout(function(){throw r})};var kt=c.Deferred();c.fn.ready=function(r){return kt.then(r).catch(function(o){c.readyException(o)}),this},c.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(r!==!0&&--c.readyWait>0)&&kt.resolveWith(m,[c]))}}),c.ready.then=kt.then;function Ne(){m.removeEventListener("DOMContentLoaded",Ne),t.removeEventListener("load",Ne),c.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?t.setTimeout(c.ready):(m.addEventListener("DOMContentLoaded",Ne),t.addEventListener("load",Ne));var Gt=function(r,o,f,h,x,M,T){var F=0,I=r.length,V=f==null;if(D(f)==="object"){x=!0;for(F in f)Gt(r,o,F,f[F],!0,M,T)}else if(h!==void 0&&(x=!0,b(h)||(T=!0),V&&(T?(o.call(r,h),o=null):(V=o,o=function(nt,at,J){return V.call(c(nt),J)})),o))for(;F<I;F++)o(r[F],f,T?h:h.call(r[F],F,o(r[F],f)));return x?r:V?o.call(r):I?o(r[0],f):M},ne=/^-ms-/,U=/-([a-z])/g;function A(r,o){return o.toUpperCase()}function Z(r){return r.replace(ne,"ms-").replace(U,A)}var pt=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function mt(){this.expando=c.expando+mt.uid++}mt.uid=1,mt.prototype={cache:function(r){var o=r[this.expando];return o||(o={},pt(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,f){var h,x=this.cache(r);if(typeof o=="string")x[Z(o)]=f;else for(h in o)x[Z(h)]=o[h];return x},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][Z(o)]},access:function(r,o,f){return o===void 0||o&&typeof o=="string"&&f===void 0?this.get(r,o):(this.set(r,o,f),f!==void 0?f:o)},remove:function(r,o){var f,h=r[this.expando];if(h!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(Z):(o=Z(o),o=o in h?[o]:o.match(Zt)||[]),f=o.length;f--;)delete h[o[f]];(o===void 0||c.isEmptyObject(h))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!c.isEmptyObject(o)}};var j=new mt,Nt=new mt,Tt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ut=/[A-Z]/g;function ie(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Tt.test(r)?JSON.parse(r):r}function vt(r,o,f){var h;if(f===void 0&&r.nodeType===1)if(h="data-"+o.replace(Ut,"-$&").toLowerCase(),f=r.getAttribute(h),typeof f=="string"){try{f=ie(f)}catch{}Nt.set(r,o,f)}else f=void 0;return f}c.extend({hasData:function(r){return Nt.hasData(r)||j.hasData(r)},data:function(r,o,f){return Nt.access(r,o,f)},removeData:function(r,o){Nt.remove(r,o)},_data:function(r,o,f){return j.access(r,o,f)},_removeData:function(r,o){j.remove(r,o)}}),c.fn.extend({data:function(r,o){var f,h,x,M=this[0],T=M&&M.attributes;if(r===void 0){if(this.length&&(x=Nt.get(M),M.nodeType===1&&!j.get(M,"hasDataAttrs"))){for(f=T.length;f--;)T[f]&&(h=T[f].name,h.indexOf("data-")===0&&(h=Z(h.slice(5)),vt(M,h,x[h])));j.set(M,"hasDataAttrs",!0)}return x}return typeof r=="object"?this.each(function(){Nt.set(this,r)}):Gt(this,function(F){var I;if(M&&F===void 0)return I=Nt.get(M,r),I!==void 0||(I=vt(M,r),I!==void 0)?I:void 0;this.each(function(){Nt.set(this,r,F)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){Nt.remove(this,r)})}}),c.extend({queue:function(r,o,f){var h;if(r)return o=(o||"fx")+"queue",h=j.get(r,o),f&&(!h||Array.isArray(f)?h=j.access(r,o,c.makeArray(f)):h.push(f)),h||[]},dequeue:function(r,o){o=o||"fx";var f=c.queue(r,o),h=f.length,x=f.shift(),M=c._queueHooks(r,o),T=function(){c.dequeue(r,o)};x==="inprogress"&&(x=f.shift(),h--),x&&(o==="fx"&&f.unshift("inprogress"),delete M.stop,x.call(r,T,M)),!h&&M&&M.empty.fire()},_queueHooks:function(r,o){var f=o+"queueHooks";return j.get(r,f)||j.access(r,f,{empty:c.Callbacks("once memory").add(function(){j.remove(r,[o+"queue",f])})})}}),c.fn.extend({queue:function(r,o){var f=2;return typeof r!="string"&&(o=r,r="fx",f--),arguments.length<f?c.queue(this[0],r):o===void 0?this:this.each(function(){var h=c.queue(this,r,o);c._queueHooks(this,r),r==="fx"&&h[0]!=="inprogress"&&c.dequeue(this,r)})},dequeue:function(r){return this.each(function(){c.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var f,h=1,x=c.Deferred(),M=this,T=this.length,F=function(){--h||x.resolveWith(M,[M])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";T--;)f=j.get(M[T],r+"queueHooks"),f&&f.empty&&(h++,f.empty.add(F));return F(),x.promise(o)}});var Pt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,se=new RegExp("^(?:([+-])=|)("+Pt+")([a-z%]*)$","i"),Vt=["Top","Right","Bottom","Left"],At=m.documentElement,Yt=function(r){return c.contains(r.ownerDocument,r)},ae={composed:!0};At.getRootNode&&(Yt=function(r){return c.contains(r.ownerDocument,r)||r.getRootNode(ae)===r.ownerDocument});var Re=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&Yt(r)&&c.css(r,"display")==="none"};function G(r,o,f,h){var x,M,T=20,F=h?function(){return h.cur()}:function(){return c.css(r,o,"")},I=F(),V=f&&f[3]||(c.cssNumber[o]?"":"px"),nt=r.nodeType&&(c.cssNumber[o]||V!=="px"&&+I)&&se.exec(c.css(r,o));if(nt&&nt[3]!==V){for(I=I/2,V=V||nt[3],nt=+I||1;T--;)c.style(r,o,nt+V),(1-M)*(1-(M=F()/I||.5))<=0&&(T=0),nt=nt/M;nt=nt*2,c.style(r,o,nt+V),f=f||[]}return f&&(nt=+nt||+I||0,x=f[1]?nt+(f[1]+1)*f[2]:+f[2],h&&(h.unit=V,h.start=nt,h.end=x)),x}var xt={};function ft(r){var o,f=r.ownerDocument,h=r.nodeName,x=xt[h];return x||(o=f.body.appendChild(f.createElement(h)),x=c.css(o,"display"),o.parentNode.removeChild(o),x==="none"&&(x="block"),xt[h]=x,x)}function ut(r,o){for(var f,h,x=[],M=0,T=r.length;M<T;M++)h=r[M],h.style&&(f=h.style.display,o?(f==="none"&&(x[M]=j.get(h,"display")||null,x[M]||(h.style.display="")),h.style.display===""&&Re(h)&&(x[M]=ft(h))):f!=="none"&&(x[M]="none",j.set(h,"display",f)));for(M=0;M<T;M++)x[M]!=null&&(r[M].style.display=x[M]);return r}c.fn.extend({show:function(){return ut(this,!0)},hide:function(){return ut(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Re(this)?c(this).show():c(this).hide()})}});var Mt=/^(?:checkbox|radio)$/i,jt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,de=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=m.createDocumentFragment(),o=r.appendChild(m.createElement("div")),f=m.createElement("input");f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),o.appendChild(f),E.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",E.option=!!o.lastChild})();var _e={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};_e.tbody=_e.tfoot=_e.colgroup=_e.caption=_e.thead,_e.th=_e.td,E.option||(_e.optgroup=_e.option=[1,"<select multiple='multiple'>","</select>"]);function Ee(r,o){var f;return typeof r.getElementsByTagName<"u"?f=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?f=r.querySelectorAll(o||"*"):f=[],o===void 0||o&&R(r,o)?c.merge([r],f):f}function me(r,o){for(var f=0,h=r.length;f<h;f++)j.set(r[f],"globalEval",!o||j.get(o[f],"globalEval"))}var Tn=/<|&#?\w+;/;function pn(r,o,f,h,x){for(var M,T,F,I,V,nt,at=o.createDocumentFragment(),J=[],gt=0,Qt=r.length;gt<Qt;gt++)if(M=r[gt],M||M===0)if(D(M)==="object")c.merge(J,M.nodeType?[M]:M);else if(!Tn.test(M))J.push(o.createTextNode(M));else{for(T=T||at.appendChild(o.createElement("div")),F=(jt.exec(M)||["",""])[1].toLowerCase(),I=_e[F]||_e._default,T.innerHTML=I[1]+c.htmlPrefilter(M)+I[2],nt=I[0];nt--;)T=T.lastChild;c.merge(J,T.childNodes),T=at.firstChild,T.textContent=""}for(at.textContent="",gt=0;M=J[gt++];){if(h&&c.inArray(M,h)>-1){x&&x.push(M);continue}if(V=Yt(M),T=Ee(at.appendChild(M),"script"),V&&me(T),f)for(nt=0;M=T[nt++];)de.test(M.type||"")&&f.push(M)}return at}var Tr=/^([^.]*)(?:\.(.+)|)/;function un(){return!0}function Dn(){return!1}function Gi(r,o,f,h,x,M){var T,F;if(typeof o=="object"){typeof f!="string"&&(h=h||f,f=void 0);for(F in o)Gi(r,F,f,h,o[F],M);return r}if(h==null&&x==null?(x=f,h=f=void 0):x==null&&(typeof f=="string"?(x=h,h=void 0):(x=h,h=f,f=void 0)),x===!1)x=Dn;else if(!x)return r;return M===1&&(T=x,x=function(I){return c().off(I),T.apply(this,arguments)},x.guid=T.guid||(T.guid=c.guid++)),r.each(function(){c.event.add(this,o,x,h,f)})}c.event={global:{},add:function(r,o,f,h,x){var M,T,F,I,V,nt,at,J,gt,Qt,ge,oe=j.get(r);if(pt(r))for(f.handler&&(M=f,f=M.handler,x=M.selector),x&&c.find.matchesSelector(At,x),f.guid||(f.guid=c.guid++),(I=oe.events)||(I=oe.events=Object.create(null)),(T=oe.handle)||(T=oe.handle=function(Ze){return typeof c<"u"&&c.event.triggered!==Ze.type?c.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Zt)||[""],V=o.length;V--;)F=Tr.exec(o[V])||[],gt=ge=F[1],Qt=(F[2]||"").split(".").sort(),gt&&(at=c.event.special[gt]||{},gt=(x?at.delegateType:at.bindType)||gt,at=c.event.special[gt]||{},nt=c.extend({type:gt,origType:ge,data:h,handler:f,guid:f.guid,selector:x,needsContext:x&&c.expr.match.needsContext.test(x),namespace:Qt.join(".")},M),(J=I[gt])||(J=I[gt]=[],J.delegateCount=0,(!at.setup||at.setup.call(r,h,Qt,T)===!1)&&r.addEventListener&&r.addEventListener(gt,T)),at.add&&(at.add.call(r,nt),nt.handler.guid||(nt.handler.guid=f.guid)),x?J.splice(J.delegateCount++,0,nt):J.push(nt),c.event.global[gt]=!0)},remove:function(r,o,f,h,x){var M,T,F,I,V,nt,at,J,gt,Qt,ge,oe=j.hasData(r)&&j.get(r);if(!(!oe||!(I=oe.events))){for(o=(o||"").match(Zt)||[""],V=o.length;V--;){if(F=Tr.exec(o[V])||[],gt=ge=F[1],Qt=(F[2]||"").split(".").sort(),!gt){for(gt in I)c.event.remove(r,gt+o[V],f,h,!0);continue}for(at=c.event.special[gt]||{},gt=(h?at.delegateType:at.bindType)||gt,J=I[gt]||[],F=F[2]&&new RegExp("(^|\\.)"+Qt.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=M=J.length;M--;)nt=J[M],(x||ge===nt.origType)&&(!f||f.guid===nt.guid)&&(!F||F.test(nt.namespace))&&(!h||h===nt.selector||h==="**"&&nt.selector)&&(J.splice(M,1),nt.selector&&J.delegateCount--,at.remove&&at.remove.call(r,nt));T&&!J.length&&((!at.teardown||at.teardown.call(r,Qt,oe.handle)===!1)&&c.removeEvent(r,gt,oe.handle),delete I[gt])}c.isEmptyObject(I)&&j.remove(r,"handle events")}},dispatch:function(r){var o,f,h,x,M,T,F=new Array(arguments.length),I=c.event.fix(r),V=(j.get(this,"events")||Object.create(null))[I.type]||[],nt=c.event.special[I.type]||{};for(F[0]=I,o=1;o<arguments.length;o++)F[o]=arguments[o];if(I.delegateTarget=this,!(nt.preDispatch&&nt.preDispatch.call(this,I)===!1)){for(T=c.event.handlers.call(this,I,V),o=0;(x=T[o++])&&!I.isPropagationStopped();)for(I.currentTarget=x.elem,f=0;(M=x.handlers[f++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||M.namespace===!1||I.rnamespace.test(M.namespace))&&(I.handleObj=M,I.data=M.data,h=((c.event.special[M.origType]||{}).handle||M.handler).apply(x.elem,F),h!==void 0&&(I.result=h)===!1&&(I.preventDefault(),I.stopPropagation()));return nt.postDispatch&&nt.postDispatch.call(this,I),I.result}},handlers:function(r,o){var f,h,x,M,T,F=[],I=o.delegateCount,V=r.target;if(I&&V.nodeType&&!(r.type==="click"&&r.button>=1)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&!(r.type==="click"&&V.disabled===!0)){for(M=[],T={},f=0;f<I;f++)h=o[f],x=h.selector+" ",T[x]===void 0&&(T[x]=h.needsContext?c(x,this).index(V)>-1:c.find(x,this,null,[V]).length),T[x]&&M.push(h);M.length&&F.push({elem:V,handlers:M})}}return V=this,I<o.length&&F.push({elem:V,handlers:o.slice(I)}),F},addProp:function(r,o){Object.defineProperty(c.Event.prototype,r,{enumerable:!0,configurable:!0,get:b(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(f){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(r){return r[c.expando]?r:new c.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Mt.test(o.type)&&o.click&&R(o,"input")&&Ti(o,"click",!0),!1},trigger:function(r){var o=this||r;return Mt.test(o.type)&&o.click&&R(o,"input")&&Ti(o,"click"),!0},_default:function(r){var o=r.target;return Mt.test(o.type)&&o.click&&R(o,"input")&&j.get(o,"click")||R(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Ti(r,o,f){if(!f){j.get(r,o)===void 0&&c.event.add(r,o,un);return}j.set(r,o,!1),c.event.add(r,o,{namespace:!1,handler:function(h){var x,M=j.get(this,o);if(h.isTrigger&1&&this[o]){if(M)(c.event.special[o]||{}).delegateType&&h.stopPropagation();else if(M=a.call(arguments),j.set(this,o,M),this[o](),x=j.get(this,o),j.set(this,o,!1),M!==x)return h.stopImmediatePropagation(),h.preventDefault(),x}else M&&(j.set(this,o,c.event.trigger(M[0],M.slice(1),this)),h.stopPropagation(),h.isImmediatePropagationStopped=un)}})}c.removeEvent=function(r,o,f){r.removeEventListener&&r.removeEventListener(o,f)},c.Event=function(r,o){if(!(this instanceof c.Event))return new c.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?un:Dn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&c.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:Dn,isPropagationStopped:Dn,isImmediatePropagationStopped:Dn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=un,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=un,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=un,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(r,o){function f(h){if(m.documentMode){var x=j.get(this,"handle"),M=c.event.fix(h);M.type=h.type==="focusin"?"focus":"blur",M.isSimulated=!0,x(h),M.target===M.currentTarget&&x(M)}else c.event.simulate(o,h.target,c.event.fix(h))}c.event.special[r]={setup:function(){var h;if(Ti(this,r,!0),m.documentMode)h=j.get(this,o),h||this.addEventListener(o,f),j.set(this,o,(h||0)+1);else return!1},trigger:function(){return Ti(this,r),!0},teardown:function(){var h;if(m.documentMode)h=j.get(this,o)-1,h?j.set(this,o,h):(this.removeEventListener(o,f),j.remove(this,o));else return!1},_default:function(h){return j.get(h.target,r)},delegateType:o},c.event.special[o]={setup:function(){var h=this.ownerDocument||this.document||this,x=m.documentMode?this:h,M=j.get(x,o);M||(m.documentMode?this.addEventListener(o,f):h.addEventListener(r,f,!0)),j.set(x,o,(M||0)+1)},teardown:function(){var h=this.ownerDocument||this.document||this,x=m.documentMode?this:h,M=j.get(x,o)-1;M?j.set(x,o,M):(m.documentMode?this.removeEventListener(o,f):h.removeEventListener(r,f,!0),j.remove(x,o))}}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){c.event.special[r]={delegateType:o,bindType:o,handle:function(f){var h,x=this,M=f.relatedTarget,T=f.handleObj;return(!M||M!==x&&!c.contains(x,M))&&(f.type=T.origType,h=T.handler.apply(this,arguments),f.type=o),h}}}),c.fn.extend({on:function(r,o,f,h){return Gi(this,r,o,f,h)},one:function(r,o,f,h){return Gi(this,r,o,f,h,1)},off:function(r,o,f){var h,x;if(r&&r.preventDefault&&r.handleObj)return h=r.handleObj,c(r.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof r=="object"){for(x in r)this.off(x,o,r[x]);return this}return(o===!1||typeof o=="function")&&(f=o,o=void 0),f===!1&&(f=Dn),this.each(function(){c.event.remove(this,r,f,o)})}});var Wi=/<script|<style|<link/i,rs=/checked\s*(?:[^=]|=\s*.checked.)/i,Xi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function br(r,o){return R(r,"table")&&R(o.nodeType!==11?o:o.firstChild,"tr")&&c(r).children("tbody")[0]||r}function ss(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function aa(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function as(r,o){var f,h,x,M,T,F,I;if(o.nodeType===1){if(j.hasData(r)&&(M=j.get(r),I=M.events,I)){j.remove(o,"handle events");for(x in I)for(f=0,h=I[x].length;f<h;f++)c.event.add(o,x,I[x][f])}Nt.hasData(r)&&(T=Nt.access(r),F=c.extend({},T),Nt.set(o,F))}}function oa(r,o){var f=o.nodeName.toLowerCase();f==="input"&&Mt.test(r.type)?o.checked=r.checked:(f==="input"||f==="textarea")&&(o.defaultValue=r.defaultValue)}function w(r,o,f,h){o=l(o);var x,M,T,F,I,V,nt=0,at=r.length,J=at-1,gt=o[0],Qt=b(gt);if(Qt||at>1&&typeof gt=="string"&&!E.checkClone&&rs.test(gt))return r.each(function(ge){var oe=r.eq(ge);Qt&&(o[0]=gt.call(this,ge,oe.html())),w(oe,o,f,h)});if(at&&(x=pn(o,r[0].ownerDocument,!1,r,h),M=x.firstChild,x.childNodes.length===1&&(x=M),M||h)){for(T=c.map(Ee(x,"script"),ss),F=T.length;nt<at;nt++)I=x,nt!==J&&(I=c.clone(I,!0,!0),F&&c.merge(T,Ee(I,"script"))),f.call(r[nt],I,nt);if(F)for(V=T[T.length-1].ownerDocument,c.map(T,aa),nt=0;nt<F;nt++)I=T[nt],de.test(I.type||"")&&!j.access(I,"globalEval")&&c.contains(V,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?c._evalUrl&&!I.noModule&&c._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},V):P(I.textContent.replace(Xi,""),I,V))}return r}function W(r,o,f){for(var h,x=o?c.filter(o,r):r,M=0;(h=x[M])!=null;M++)!f&&h.nodeType===1&&c.cleanData(Ee(h)),h.parentNode&&(f&&Yt(h)&&me(Ee(h,"script")),h.parentNode.removeChild(h));return r}c.extend({htmlPrefilter:function(r){return r},clone:function(r,o,f){var h,x,M,T,F=r.cloneNode(!0),I=Yt(r);if(!E.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!c.isXMLDoc(r))for(T=Ee(F),M=Ee(r),h=0,x=M.length;h<x;h++)oa(M[h],T[h]);if(o)if(f)for(M=M||Ee(r),T=T||Ee(F),h=0,x=M.length;h<x;h++)as(M[h],T[h]);else as(r,F);return T=Ee(F,"script"),T.length>0&&me(T,!I&&Ee(r,"script")),F},cleanData:function(r){for(var o,f,h,x=c.event.special,M=0;(f=r[M])!==void 0;M++)if(pt(f)){if(o=f[j.expando]){if(o.events)for(h in o.events)x[h]?c.event.remove(f,h):c.removeEvent(f,h,o.handle);f[j.expando]=void 0}f[Nt.expando]&&(f[Nt.expando]=void 0)}}}),c.fn.extend({detach:function(r){return W(this,r,!0)},remove:function(r){return W(this,r)},text:function(r){return Gt(this,function(o){return o===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return w(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=br(this,r);o.appendChild(r)}})},prepend:function(){return w(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=br(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return w(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return w(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(c.cleanData(Ee(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return c.clone(this,r,o)})},html:function(r){return Gt(this,function(o){var f=this[0]||{},h=0,x=this.length;if(o===void 0&&f.nodeType===1)return f.innerHTML;if(typeof o=="string"&&!Wi.test(o)&&!_e[(jt.exec(o)||["",""])[1].toLowerCase()]){o=c.htmlPrefilter(o);try{for(;h<x;h++)f=this[h]||{},f.nodeType===1&&(c.cleanData(Ee(f,!1)),f.innerHTML=o);f=0}catch{}}f&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return w(this,arguments,function(o){var f=this.parentNode;c.inArray(this,r)<0&&(c.cleanData(Ee(this)),f&&f.replaceChild(o,this))},r)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){c.fn[r]=function(f){for(var h,x=[],M=c(f),T=M.length-1,F=0;F<=T;F++)h=F===T?this:this.clone(!0),c(M[F])[o](h),u.apply(x,h.get());return this.pushStack(x)}});var Q=new RegExp("^("+Pt+")(?!px)[a-z%]+$","i"),tt=/^--/,X=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=t),o.getComputedStyle(r)},yt=function(r,o,f){var h,x,M={};for(x in o)M[x]=r.style[x],r.style[x]=o[x];h=f.call(r);for(x in o)r.style[x]=M[x];return h},wt=new RegExp(Vt.join("|"),"i");(function(){function r(){if(V){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",At.appendChild(I).appendChild(V);var nt=t.getComputedStyle(V);f=nt.top!=="1%",F=o(nt.marginLeft)===12,V.style.right="60%",M=o(nt.right)===36,h=o(nt.width)===36,V.style.position="absolute",x=o(V.offsetWidth/3)===12,At.removeChild(I),V=null}}function o(nt){return Math.round(parseFloat(nt))}var f,h,x,M,T,F,I=m.createElement("div"),V=m.createElement("div");V.style&&(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=V.style.backgroundClip==="content-box",c.extend(E,{boxSizingReliable:function(){return r(),h},pixelBoxStyles:function(){return r(),M},pixelPosition:function(){return r(),f},reliableMarginLeft:function(){return r(),F},scrollboxSize:function(){return r(),x},reliableTrDimensions:function(){var nt,at,J,gt;return T==null&&(nt=m.createElement("table"),at=m.createElement("tr"),J=m.createElement("div"),nt.style.cssText="position:absolute;left:-11111px;border-collapse:separate",at.style.cssText="box-sizing:content-box;border:1px solid",at.style.height="1px",J.style.height="9px",J.style.display="block",At.appendChild(nt).appendChild(at).appendChild(J),gt=t.getComputedStyle(at),T=parseInt(gt.height,10)+parseInt(gt.borderTopWidth,10)+parseInt(gt.borderBottomWidth,10)===at.offsetHeight,At.removeChild(nt)),T}}))})();function Lt(r,o,f){var h,x,M,T,F=tt.test(o),I=r.style;return f=f||X(r),f&&(T=f.getPropertyValue(o)||f[o],F&&T&&(T=T.replace(ot,"$1")||void 0),T===""&&!Yt(r)&&(T=c.style(r,o)),!E.pixelBoxStyles()&&Q.test(T)&&wt.test(o)&&(h=I.width,x=I.minWidth,M=I.maxWidth,I.minWidth=I.maxWidth=I.width=T,T=f.width,I.width=h,I.minWidth=x,I.maxWidth=M)),T!==void 0?T+"":T}function Ot(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var $t=["Webkit","Moz","ms"],Kt=m.createElement("div").style,Wt={};function Te(r){for(var o=r[0].toUpperCase()+r.slice(1),f=$t.length;f--;)if(r=$t[f]+o,r in Kt)return r}function Le(r){var o=c.cssProps[r]||Wt[r];return o||(r in Kt?r:Wt[r]=Te(r)||r)}var ze=/^(none|table(?!-c[ea]).+)/,sn={position:"absolute",visibility:"hidden",display:"block"},ve={letterSpacing:"0",fontWeight:"400"};function Ht(r,o,f){var h=se.exec(o);return h?Math.max(0,h[2]-(f||0))+(h[3]||"px"):o}function We(r,o,f,h,x,M){var T=o==="width"?1:0,F=0,I=0,V=0;if(f===(h?"border":"content"))return 0;for(;T<4;T+=2)f==="margin"&&(V+=c.css(r,f+Vt[T],!0,x)),h?(f==="content"&&(I-=c.css(r,"padding"+Vt[T],!0,x)),f!=="margin"&&(I-=c.css(r,"border"+Vt[T]+"Width",!0,x))):(I+=c.css(r,"padding"+Vt[T],!0,x),f!=="padding"?I+=c.css(r,"border"+Vt[T]+"Width",!0,x):F+=c.css(r,"border"+Vt[T]+"Width",!0,x));return!h&&M>=0&&(I+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-M-I-F-.5))||0),I+V}function xe(r,o,f){var h=X(r),x=!E.boxSizingReliable()||f,M=x&&c.css(r,"boxSizing",!1,h)==="border-box",T=M,F=Lt(r,o,h),I="offset"+o[0].toUpperCase()+o.slice(1);if(Q.test(F)){if(!f)return F;F="auto"}return(!E.boxSizingReliable()&&M||!E.reliableTrDimensions()&&R(r,"tr")||F==="auto"||!parseFloat(F)&&c.css(r,"display",!1,h)==="inline")&&r.getClientRects().length&&(M=c.css(r,"boxSizing",!1,h)==="border-box",T=I in r,T&&(F=r[I])),F=parseFloat(F)||0,F+We(r,o,f||(M?"border":"content"),T,h,F)+"px"}c.extend({cssHooks:{opacity:{get:function(r,o){if(o){var f=Lt(r,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,f,h){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var x,M,T,F=Z(o),I=tt.test(o),V=r.style;if(I||(o=Le(F)),T=c.cssHooks[o]||c.cssHooks[F],f!==void 0){if(M=typeof f,M==="string"&&(x=se.exec(f))&&x[1]&&(f=G(r,o,x),M="number"),f==null||f!==f)return;M==="number"&&!I&&(f+=x&&x[3]||(c.cssNumber[F]?"":"px")),!E.clearCloneStyle&&f===""&&o.indexOf("background")===0&&(V[o]="inherit"),(!T||!("set"in T)||(f=T.set(r,f,h))!==void 0)&&(I?V.setProperty(o,f):V[o]=f)}else return T&&"get"in T&&(x=T.get(r,!1,h))!==void 0?x:V[o]}},css:function(r,o,f,h){var x,M,T,F=Z(o),I=tt.test(o);return I||(o=Le(F)),T=c.cssHooks[o]||c.cssHooks[F],T&&"get"in T&&(x=T.get(r,!0,f)),x===void 0&&(x=Lt(r,o,h)),x==="normal"&&o in ve&&(x=ve[o]),f===""||f?(M=parseFloat(x),f===!0||isFinite(M)?M||0:x):x}}),c.each(["height","width"],function(r,o){c.cssHooks[o]={get:function(f,h,x){if(h)return ze.test(c.css(f,"display"))&&(!f.getClientRects().length||!f.getBoundingClientRect().width)?yt(f,sn,function(){return xe(f,o,x)}):xe(f,o,x)},set:function(f,h,x){var M,T=X(f),F=!E.scrollboxSize()&&T.position==="absolute",I=F||x,V=I&&c.css(f,"boxSizing",!1,T)==="border-box",nt=x?We(f,o,x,V,T):0;return V&&F&&(nt-=Math.ceil(f["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(T[o])-We(f,o,"border",!1,T)-.5)),nt&&(M=se.exec(h))&&(M[3]||"px")!=="px"&&(f.style[o]=h,h=c.css(f,o)),Ht(f,h,nt)}}}),c.cssHooks.marginLeft=Ot(E.reliableMarginLeft,function(r,o){if(o)return(parseFloat(Lt(r,"marginLeft"))||r.getBoundingClientRect().left-yt(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(r,o){c.cssHooks[r+o]={expand:function(f){for(var h=0,x={},M=typeof f=="string"?f.split(" "):[f];h<4;h++)x[r+Vt[h]+o]=M[h]||M[h-2]||M[0];return x}},r!=="margin"&&(c.cssHooks[r+o].set=Ht)}),c.fn.extend({css:function(r,o){return Gt(this,function(f,h,x){var M,T,F={},I=0;if(Array.isArray(h)){for(M=X(f),T=h.length;I<T;I++)F[h[I]]=c.css(f,h[I],!1,M);return F}return x!==void 0?c.style(f,h,x):c.css(f,h)},r,o,arguments.length>1)}});function De(r,o,f,h,x){return new De.prototype.init(r,o,f,h,x)}c.Tween=De,De.prototype={constructor:De,init:function(r,o,f,h,x,M){this.elem=r,this.prop=f,this.easing=x||c.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=h,this.unit=M||(c.cssNumber[f]?"":"px")},cur:function(){var r=De.propHooks[this.prop];return r&&r.get?r.get(this):De.propHooks._default.get(this)},run:function(r){var o,f=De.propHooks[this.prop];return this.options.duration?this.pos=o=c.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):De.propHooks._default.set(this),this}},De.prototype.init.prototype=De.prototype,De.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=c.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){c.fx.step[r.prop]?c.fx.step[r.prop](r):r.elem.nodeType===1&&(c.cssHooks[r.prop]||r.elem.style[Le(r.prop)]!=null)?c.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},De.propHooks.scrollTop=De.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},c.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},c.fx=De.prototype.init,c.fx.step={};var mn,$e,Ar=/^(?:toggle|show|hide)$/,ke=/queueHooks$/;function xn(){$e&&(m.hidden===!1&&t.requestAnimationFrame?t.requestAnimationFrame(xn):t.setTimeout(xn,c.fx.interval),c.fx.tick())}function qi(){return t.setTimeout(function(){mn=void 0}),mn=Date.now()}function Je(r,o){var f,h=0,x={height:r};for(o=o?1:0;h<4;h+=2-o)f=Vt[h],x["margin"+f]=x["padding"+f]=r;return o&&(x.opacity=x.width=r),x}function Yi(r,o,f){for(var h,x=(bn.tweeners[o]||[]).concat(bn.tweeners["*"]),M=0,T=x.length;M<T;M++)if(h=x[M].call(f,o,r))return h}function ca(r,o,f){var h,x,M,T,F,I,V,nt,at="width"in o||"height"in o,J=this,gt={},Qt=r.style,ge=r.nodeType&&Re(r),oe=j.get(r,"fxshow");f.queue||(T=c._queueHooks(r,"fx"),T.unqueued==null&&(T.unqueued=0,F=T.empty.fire,T.empty.fire=function(){T.unqueued||F()}),T.unqueued++,J.always(function(){J.always(function(){T.unqueued--,c.queue(r,"fx").length||T.empty.fire()})}));for(h in o)if(x=o[h],Ar.test(x)){if(delete o[h],M=M||x==="toggle",x===(ge?"hide":"show"))if(x==="show"&&oe&&oe[h]!==void 0)ge=!0;else continue;gt[h]=oe&&oe[h]||c.style(r,h)}if(I=!c.isEmptyObject(o),!(!I&&c.isEmptyObject(gt))){at&&r.nodeType===1&&(f.overflow=[Qt.overflow,Qt.overflowX,Qt.overflowY],V=oe&&oe.display,V==null&&(V=j.get(r,"display")),nt=c.css(r,"display"),nt==="none"&&(V?nt=V:(ut([r],!0),V=r.style.display||V,nt=c.css(r,"display"),ut([r]))),(nt==="inline"||nt==="inline-block"&&V!=null)&&c.css(r,"float")==="none"&&(I||(J.done(function(){Qt.display=V}),V==null&&(nt=Qt.display,V=nt==="none"?"":nt)),Qt.display="inline-block")),f.overflow&&(Qt.overflow="hidden",J.always(function(){Qt.overflow=f.overflow[0],Qt.overflowX=f.overflow[1],Qt.overflowY=f.overflow[2]})),I=!1;for(h in gt)I||(oe?"hidden"in oe&&(ge=oe.hidden):oe=j.access(r,"fxshow",{display:V}),M&&(oe.hidden=!ge),ge&&ut([r],!0),J.done(function(){ge||ut([r]),j.remove(r,"fxshow");for(h in gt)c.style(r,h,gt[h])})),I=Yi(ge?oe[h]:0,h,J),h in oe||(oe[h]=I.start,ge&&(I.end=I.start,I.start=0))}}function os(r,o){var f,h,x,M,T;for(f in r)if(h=Z(f),x=o[h],M=r[f],Array.isArray(M)&&(x=M[1],M=r[f]=M[0]),f!==h&&(r[h]=M,delete r[f]),T=c.cssHooks[h],T&&"expand"in T){M=T.expand(M),delete r[h];for(f in M)f in r||(r[f]=M[f],o[f]=x)}else o[h]=x}function bn(r,o,f){var h,x,M=0,T=bn.prefilters.length,F=c.Deferred().always(function(){delete I.elem}),I=function(){if(x)return!1;for(var at=mn||qi(),J=Math.max(0,V.startTime+V.duration-at),gt=J/V.duration||0,Qt=1-gt,ge=0,oe=V.tweens.length;ge<oe;ge++)V.tweens[ge].run(Qt);return F.notifyWith(r,[V,Qt,J]),Qt<1&&oe?J:(oe||F.notifyWith(r,[V,1,0]),F.resolveWith(r,[V]),!1)},V=F.promise({elem:r,props:c.extend({},o),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},f),originalProperties:o,originalOptions:f,startTime:mn||qi(),duration:f.duration,tweens:[],createTween:function(at,J){var gt=c.Tween(r,V.opts,at,J,V.opts.specialEasing[at]||V.opts.easing);return V.tweens.push(gt),gt},stop:function(at){var J=0,gt=at?V.tweens.length:0;if(x)return this;for(x=!0;J<gt;J++)V.tweens[J].run(1);return at?(F.notifyWith(r,[V,1,0]),F.resolveWith(r,[V,at])):F.rejectWith(r,[V,at]),this}}),nt=V.props;for(os(nt,V.opts.specialEasing);M<T;M++)if(h=bn.prefilters[M].call(V,r,nt,V.opts),h)return b(h.stop)&&(c._queueHooks(V.elem,V.opts.queue).stop=h.stop.bind(h)),h;return c.map(nt,Yi,V),b(V.opts.start)&&V.opts.start.call(r,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),c.fx.timer(c.extend(I,{elem:r,anim:V,queue:V.opts.queue})),V}c.Animation=c.extend(bn,{tweeners:{"*":[function(r,o){var f=this.createTween(r,o);return G(f.elem,r,se.exec(o),f),f}]},tweener:function(r,o){b(r)?(o=r,r=["*"]):r=r.match(Zt);for(var f,h=0,x=r.length;h<x;h++)f=r[h],bn.tweeners[f]=bn.tweeners[f]||[],bn.tweeners[f].unshift(o)},prefilters:[ca],prefilter:function(r,o){o?bn.prefilters.unshift(r):bn.prefilters.push(r)}}),c.speed=function(r,o,f){var h=r&&typeof r=="object"?c.extend({},r):{complete:f||!f&&o||b(r)&&r,duration:r,easing:f&&o||o&&!b(o)&&o};return c.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in c.fx.speeds?h.duration=c.fx.speeds[h.duration]:h.duration=c.fx.speeds._default),(h.queue==null||h.queue===!0)&&(h.queue="fx"),h.old=h.complete,h.complete=function(){b(h.old)&&h.old.call(this),h.queue&&c.dequeue(this,h.queue)},h},c.fn.extend({fadeTo:function(r,o,f,h){return this.filter(Re).css("opacity",0).show().end().animate({opacity:o},r,f,h)},animate:function(r,o,f,h){var x=c.isEmptyObject(r),M=c.speed(o,f,h),T=function(){var F=bn(this,c.extend({},r),M);(x||j.get(this,"finish"))&&F.stop(!0)};return T.finish=T,x||M.queue===!1?this.each(T):this.queue(M.queue,T)},stop:function(r,o,f){var h=function(x){var M=x.stop;delete x.stop,M(f)};return typeof r!="string"&&(f=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var x=!0,M=r!=null&&r+"queueHooks",T=c.timers,F=j.get(this);if(M)F[M]&&F[M].stop&&h(F[M]);else for(M in F)F[M]&&F[M].stop&&ke.test(M)&&h(F[M]);for(M=T.length;M--;)T[M].elem===this&&(r==null||T[M].queue===r)&&(T[M].anim.stop(f),x=!1,T.splice(M,1));(x||!f)&&c.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,f=j.get(this),h=f[r+"queue"],x=f[r+"queueHooks"],M=c.timers,T=h?h.length:0;for(f.finish=!0,c.queue(this,r,[]),x&&x.stop&&x.stop.call(this,!0),o=M.length;o--;)M[o].elem===this&&M[o].queue===r&&(M[o].anim.stop(!0),M.splice(o,1));for(o=0;o<T;o++)h[o]&&h[o].finish&&h[o].finish.call(this);delete f.finish})}}),c.each(["toggle","show","hide"],function(r,o){var f=c.fn[o];c.fn[o]=function(h,x,M){return h==null||typeof h=="boolean"?f.apply(this,arguments):this.animate(Je(o,!0),h,x,M)}}),c.each({slideDown:Je("show"),slideUp:Je("hide"),slideToggle:Je("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){c.fn[r]=function(f,h,x){return this.animate(o,f,h,x)}}),c.timers=[],c.fx.tick=function(){var r,o=0,f=c.timers;for(mn=Date.now();o<f.length;o++)r=f[o],!r()&&f[o]===r&&f.splice(o--,1);f.length||c.fx.stop(),mn=void 0},c.fx.timer=function(r){c.timers.push(r),c.fx.start()},c.fx.interval=13,c.fx.start=function(){$e||($e=!0,xn())},c.fx.stop=function(){$e=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(r,o){return r=c.fx&&c.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(f,h){var x=t.setTimeout(f,r);h.stop=function(){t.clearTimeout(x)}})},function(){var r=m.createElement("input"),o=m.createElement("select"),f=o.appendChild(m.createElement("option"));r.type="checkbox",E.checkOn=r.value!=="",E.optSelected=f.selected,r=m.createElement("input"),r.value="t",r.type="radio",E.radioValue=r.value==="t"}();var Mc,wr=c.expr.attrHandle;c.fn.extend({attr:function(r,o){return Gt(this,c.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){c.removeAttr(this,r)})}}),c.extend({attr:function(r,o,f){var h,x,M=r.nodeType;if(!(M===3||M===8||M===2)){if(typeof r.getAttribute>"u")return c.prop(r,o,f);if((M!==1||!c.isXMLDoc(r))&&(x=c.attrHooks[o.toLowerCase()]||(c.expr.match.bool.test(o)?Mc:void 0)),f!==void 0){if(f===null){c.removeAttr(r,o);return}return x&&"set"in x&&(h=x.set(r,f,o))!==void 0?h:(r.setAttribute(o,f+""),f)}return x&&"get"in x&&(h=x.get(r,o))!==null?h:(h=c.find.attr(r,o),h??void 0)}},attrHooks:{type:{set:function(r,o){if(!E.radioValue&&o==="radio"&&R(r,"input")){var f=r.value;return r.setAttribute("type",o),f&&(r.value=f),o}}}},removeAttr:function(r,o){var f,h=0,x=o&&o.match(Zt);if(x&&r.nodeType===1)for(;f=x[h++];)r.removeAttribute(f)}}),Mc={set:function(r,o,f){return o===!1?c.removeAttr(r,f):r.setAttribute(f,f),f}},c.each(c.expr.match.bool.source.match(/\w+/g),function(r,o){var f=wr[o]||c.find.attr;wr[o]=function(h,x,M){var T,F,I=x.toLowerCase();return M||(F=wr[I],wr[I]=T,T=f(h,x,M)!=null?I:null,wr[I]=F),T}});var yu=/^(?:input|select|textarea|button)$/i,Mu=/^(?:a|area)$/i;c.fn.extend({prop:function(r,o){return Gt(this,c.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[c.propFix[r]||r]})}}),c.extend({prop:function(r,o,f){var h,x,M=r.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!c.isXMLDoc(r))&&(o=c.propFix[o]||o,x=c.propHooks[o]),f!==void 0?x&&"set"in x&&(h=x.set(r,f,o))!==void 0?h:r[o]=f:x&&"get"in x&&(h=x.get(r,o))!==null?h:r[o]},propHooks:{tabIndex:{get:function(r){var o=c.find.attr(r,"tabindex");return o?parseInt(o,10):yu.test(r.nodeName)||Mu.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(c.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function bi(r){var o=r.match(Zt)||[];return o.join(" ")}function Ai(r){return r.getAttribute&&r.getAttribute("class")||""}function la(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Zt)||[]:[]}c.fn.extend({addClass:function(r){var o,f,h,x,M,T;return b(r)?this.each(function(F){c(this).addClass(r.call(this,F,Ai(this)))}):(o=la(r),o.length?this.each(function(){if(h=Ai(this),f=this.nodeType===1&&" "+bi(h)+" ",f){for(M=0;M<o.length;M++)x=o[M],f.indexOf(" "+x+" ")<0&&(f+=x+" ");T=bi(f),h!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(r){var o,f,h,x,M,T;return b(r)?this.each(function(F){c(this).removeClass(r.call(this,F,Ai(this)))}):arguments.length?(o=la(r),o.length?this.each(function(){if(h=Ai(this),f=this.nodeType===1&&" "+bi(h)+" ",f){for(M=0;M<o.length;M++)for(x=o[M];f.indexOf(" "+x+" ")>-1;)f=f.replace(" "+x+" "," ");T=bi(f),h!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(r,o){var f,h,x,M,T=typeof r,F=T==="string"||Array.isArray(r);return b(r)?this.each(function(I){c(this).toggleClass(r.call(this,I,Ai(this),o),o)}):typeof o=="boolean"&&F?o?this.addClass(r):this.removeClass(r):(f=la(r),this.each(function(){if(F)for(M=c(this),x=0;x<f.length;x++)h=f[x],M.hasClass(h)?M.removeClass(h):M.addClass(h);else(r===void 0||T==="boolean")&&(h=Ai(this),h&&j.set(this,"__className__",h),this.setAttribute&&this.setAttribute("class",h||r===!1?"":j.get(this,"__className__")||""))}))},hasClass:function(r){var o,f,h=0;for(o=" "+r+" ";f=this[h++];)if(f.nodeType===1&&(" "+bi(Ai(f))+" ").indexOf(o)>-1)return!0;return!1}});var Su=/\r/g;c.fn.extend({val:function(r){var o,f,h,x=this[0];return arguments.length?(h=b(r),this.each(function(M){var T;this.nodeType===1&&(h?T=r.call(this,M,c(this).val()):T=r,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=c.map(T,function(F){return F==null?"":F+""})),o=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,T,"value")===void 0)&&(this.value=T))})):x?(o=c.valHooks[x.type]||c.valHooks[x.nodeName.toLowerCase()],o&&"get"in o&&(f=o.get(x,"value"))!==void 0?f:(f=x.value,typeof f=="string"?f.replace(Su,""):f??"")):void 0}}),c.extend({valHooks:{option:{get:function(r){var o=c.find.attr(r,"value");return o??bi(c.text(r))}},select:{get:function(r){var o,f,h,x=r.options,M=r.selectedIndex,T=r.type==="select-one",F=T?null:[],I=T?M+1:x.length;for(M<0?h=I:h=T?M:0;h<I;h++)if(f=x[h],(f.selected||h===M)&&!f.disabled&&(!f.parentNode.disabled||!R(f.parentNode,"optgroup"))){if(o=c(f).val(),T)return o;F.push(o)}return F},set:function(r,o){for(var f,h,x=r.options,M=c.makeArray(o),T=x.length;T--;)h=x[T],(h.selected=c.inArray(c.valHooks.option.get(h),M)>-1)&&(f=!0);return f||(r.selectedIndex=-1),M}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=c.inArray(c(r).val(),o)>-1}},E.checkOn||(c.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var Cr=t.location,Sc={guid:Date.now()},ua=/\?/;c.parseXML=function(r){var o,f;if(!r||typeof r!="string")return null;try{o=new t.DOMParser().parseFromString(r,"text/xml")}catch{}return f=o&&o.getElementsByTagName("parsererror")[0],(!o||f)&&c.error("Invalid XML: "+(f?c.map(f.childNodes,function(h){return h.textContent}).join(`
`):r)),o};var Ec=/^(?:focusinfocus|focusoutblur)$/,Tc=function(r){r.stopPropagation()};c.extend(c.event,{trigger:function(r,o,f,h){var x,M,T,F,I,V,nt,at,J=[f||m],gt=_.call(r,"type")?r.type:r,Qt=_.call(r,"namespace")?r.namespace.split("."):[];if(M=at=T=f=f||m,!(f.nodeType===3||f.nodeType===8)&&!Ec.test(gt+c.event.triggered)&&(gt.indexOf(".")>-1&&(Qt=gt.split("."),gt=Qt.shift(),Qt.sort()),I=gt.indexOf(":")<0&&"on"+gt,r=r[c.expando]?r:new c.Event(gt,typeof r=="object"&&r),r.isTrigger=h?2:3,r.namespace=Qt.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+Qt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=f),o=o==null?[r]:c.makeArray(o,[r]),nt=c.event.special[gt]||{},!(!h&&nt.trigger&&nt.trigger.apply(f,o)===!1))){if(!h&&!nt.noBubble&&!y(f)){for(F=nt.delegateType||gt,Ec.test(F+gt)||(M=M.parentNode);M;M=M.parentNode)J.push(M),T=M;T===(f.ownerDocument||m)&&J.push(T.defaultView||T.parentWindow||t)}for(x=0;(M=J[x++])&&!r.isPropagationStopped();)at=M,r.type=x>1?F:nt.bindType||gt,V=(j.get(M,"events")||Object.create(null))[r.type]&&j.get(M,"handle"),V&&V.apply(M,o),V=I&&M[I],V&&V.apply&&pt(M)&&(r.result=V.apply(M,o),r.result===!1&&r.preventDefault());return r.type=gt,!h&&!r.isDefaultPrevented()&&(!nt._default||nt._default.apply(J.pop(),o)===!1)&&pt(f)&&I&&b(f[gt])&&!y(f)&&(T=f[I],T&&(f[I]=null),c.event.triggered=gt,r.isPropagationStopped()&&at.addEventListener(gt,Tc),f[gt](),r.isPropagationStopped()&&at.removeEventListener(gt,Tc),c.event.triggered=void 0,T&&(f[I]=T)),r.result}},simulate:function(r,o,f){var h=c.extend(new c.Event,f,{type:r,isSimulated:!0});c.event.trigger(h,null,o)}}),c.fn.extend({trigger:function(r,o){return this.each(function(){c.event.trigger(r,o,this)})},triggerHandler:function(r,o){var f=this[0];if(f)return c.event.trigger(r,o,f,!0)}});var Eu=/\[\]$/,bc=/\r?\n/g,Tu=/^(?:submit|button|image|reset|file)$/i,bu=/^(?:input|select|textarea|keygen)/i;function fa(r,o,f,h){var x;if(Array.isArray(o))c.each(o,function(M,T){f||Eu.test(r)?h(r,T):fa(r+"["+(typeof T=="object"&&T!=null?M:"")+"]",T,f,h)});else if(!f&&D(o)==="object")for(x in o)fa(r+"["+x+"]",o[x],f,h);else h(r,o)}c.param=function(r,o){var f,h=[],x=function(M,T){var F=b(T)?T():T;h[h.length]=encodeURIComponent(M)+"="+encodeURIComponent(F??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!c.isPlainObject(r))c.each(r,function(){x(this.name,this.value)});else for(f in r)fa(f,r[f],o,x);return h.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=c.prop(this,"elements");return r?c.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!c(this).is(":disabled")&&bu.test(this.nodeName)&&!Tu.test(r)&&(this.checked||!Mt.test(r))}).map(function(r,o){var f=c(this).val();return f==null?null:Array.isArray(f)?c.map(f,function(h){return{name:o.name,value:h.replace(bc,`\r
`)}}):{name:o.name,value:f.replace(bc,`\r
`)}}).get()}});var Au=/%20/g,wu=/#.*$/,Cu=/([?&])_=[^&]*/,Ru=/^(.*?):[ \t]*([^\r\n]*)$/mg,Pu=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lu=/^(?:GET|HEAD)$/,Du=/^\/\//,Ac={},ha={},wc="*/".concat("*"),da=m.createElement("a");da.href=Cr.href;function Cc(r){return function(o,f){typeof o!="string"&&(f=o,o="*");var h,x=0,M=o.toLowerCase().match(Zt)||[];if(b(f))for(;h=M[x++];)h[0]==="+"?(h=h.slice(1)||"*",(r[h]=r[h]||[]).unshift(f)):(r[h]=r[h]||[]).push(f)}}function Rc(r,o,f,h){var x={},M=r===ha;function T(F){var I;return x[F]=!0,c.each(r[F]||[],function(V,nt){var at=nt(o,f,h);if(typeof at=="string"&&!M&&!x[at])return o.dataTypes.unshift(at),T(at),!1;if(M)return!(I=at)}),I}return T(o.dataTypes[0])||!x["*"]&&T("*")}function pa(r,o){var f,h,x=c.ajaxSettings.flatOptions||{};for(f in o)o[f]!==void 0&&((x[f]?r:h||(h={}))[f]=o[f]);return h&&c.extend(!0,r,h),r}function Iu(r,o,f){for(var h,x,M,T,F=r.contents,I=r.dataTypes;I[0]==="*";)I.shift(),h===void 0&&(h=r.mimeType||o.getResponseHeader("Content-Type"));if(h){for(x in F)if(F[x]&&F[x].test(h)){I.unshift(x);break}}if(I[0]in f)M=I[0];else{for(x in f){if(!I[0]||r.converters[x+" "+I[0]]){M=x;break}T||(T=x)}M=M||T}if(M)return M!==I[0]&&I.unshift(M),f[M]}function Uu(r,o,f,h){var x,M,T,F,I,V={},nt=r.dataTypes.slice();if(nt[1])for(T in r.converters)V[T.toLowerCase()]=r.converters[T];for(M=nt.shift();M;)if(r.responseFields[M]&&(f[r.responseFields[M]]=o),!I&&h&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),I=M,M=nt.shift(),M){if(M==="*")M=I;else if(I!=="*"&&I!==M){if(T=V[I+" "+M]||V["* "+M],!T){for(x in V)if(F=x.split(" "),F[1]===M&&(T=V[I+" "+F[0]]||V["* "+F[0]],T)){T===!0?T=V[x]:V[x]!==!0&&(M=F[0],nt.unshift(F[1]));break}}if(T!==!0)if(T&&r.throws)o=T(o);else try{o=T(o)}catch(at){return{state:"parsererror",error:T?at:"No conversion from "+I+" to "+M}}}}return{state:"success",data:o}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Cr.href,type:"GET",isLocal:Pu.test(Cr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?pa(pa(r,c.ajaxSettings),o):pa(c.ajaxSettings,r)},ajaxPrefilter:Cc(Ac),ajaxTransport:Cc(ha),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var f,h,x,M,T,F,I,V,nt,at,J=c.ajaxSetup({},o),gt=J.context||J,Qt=J.context&&(gt.nodeType||gt.jquery)?c(gt):c.event,ge=c.Deferred(),oe=c.Callbacks("once memory"),Ze=J.statusCode||{},qe={},In={},Un="canceled",pe={readyState:0,getResponseHeader:function(ye){var Ve;if(I){if(!M)for(M={};Ve=Ru.exec(x);)M[Ve[1].toLowerCase()+" "]=(M[Ve[1].toLowerCase()+" "]||[]).concat(Ve[2]);Ve=M[ye.toLowerCase()+" "]}return Ve==null?null:Ve.join(", ")},getAllResponseHeaders:function(){return I?x:null},setRequestHeader:function(ye,Ve){return I==null&&(ye=In[ye.toLowerCase()]=In[ye.toLowerCase()]||ye,qe[ye]=Ve),this},overrideMimeType:function(ye){return I==null&&(J.mimeType=ye),this},statusCode:function(ye){var Ve;if(ye)if(I)pe.always(ye[pe.status]);else for(Ve in ye)Ze[Ve]=[Ze[Ve],ye[Ve]];return this},abort:function(ye){var Ve=ye||Un;return f&&f.abort(Ve),wi(0,Ve),this}};if(ge.promise(pe),J.url=((r||J.url||Cr.href)+"").replace(Du,Cr.protocol+"//"),J.type=o.method||o.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(Zt)||[""],J.crossDomain==null){F=m.createElement("a");try{F.href=J.url,F.href=F.href,J.crossDomain=da.protocol+"//"+da.host!=F.protocol+"//"+F.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=c.param(J.data,J.traditional)),Rc(Ac,J,o,pe),I)return pe;V=c.event&&J.global,V&&c.active++===0&&c.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!Lu.test(J.type),h=J.url.replace(wu,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(Au,"+")):(at=J.url.slice(h.length),J.data&&(J.processData||typeof J.data=="string")&&(h+=(ua.test(h)?"&":"?")+J.data,delete J.data),J.cache===!1&&(h=h.replace(Cu,"$1"),at=(ua.test(h)?"&":"?")+"_="+Sc.guid+++at),J.url=h+at),J.ifModified&&(c.lastModified[h]&&pe.setRequestHeader("If-Modified-Since",c.lastModified[h]),c.etag[h]&&pe.setRequestHeader("If-None-Match",c.etag[h])),(J.data&&J.hasContent&&J.contentType!==!1||o.contentType)&&pe.setRequestHeader("Content-Type",J.contentType),pe.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+wc+"; q=0.01":""):J.accepts["*"]);for(nt in J.headers)pe.setRequestHeader(nt,J.headers[nt]);if(J.beforeSend&&(J.beforeSend.call(gt,pe,J)===!1||I))return pe.abort();if(Un="abort",oe.add(J.complete),pe.done(J.success),pe.fail(J.error),f=Rc(ha,J,o,pe),!f)wi(-1,"No Transport");else{if(pe.readyState=1,V&&Qt.trigger("ajaxSend",[pe,J]),I)return pe;J.async&&J.timeout>0&&(T=t.setTimeout(function(){pe.abort("timeout")},J.timeout));try{I=!1,f.send(qe,wi)}catch(ye){if(I)throw ye;wi(-1,ye)}}function wi(ye,Ve,Pr,ga){var Nn,Lr,Fn,si,ai,yn=Ve;I||(I=!0,T&&t.clearTimeout(T),f=void 0,x=ga||"",pe.readyState=ye>0?4:0,Nn=ye>=200&&ye<300||ye===304,Pr&&(si=Iu(J,pe,Pr)),!Nn&&c.inArray("script",J.dataTypes)>-1&&c.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),si=Uu(J,si,pe,Nn),Nn?(J.ifModified&&(ai=pe.getResponseHeader("Last-Modified"),ai&&(c.lastModified[h]=ai),ai=pe.getResponseHeader("etag"),ai&&(c.etag[h]=ai)),ye===204||J.type==="HEAD"?yn="nocontent":ye===304?yn="notmodified":(yn=si.state,Lr=si.data,Fn=si.error,Nn=!Fn)):(Fn=yn,(ye||!yn)&&(yn="error",ye<0&&(ye=0))),pe.status=ye,pe.statusText=(Ve||yn)+"",Nn?ge.resolveWith(gt,[Lr,yn,pe]):ge.rejectWith(gt,[pe,yn,Fn]),pe.statusCode(Ze),Ze=void 0,V&&Qt.trigger(Nn?"ajaxSuccess":"ajaxError",[pe,J,Nn?Lr:Fn]),oe.fireWith(gt,[pe,yn]),V&&(Qt.trigger("ajaxComplete",[pe,J]),--c.active||c.event.trigger("ajaxStop")))}return pe},getJSON:function(r,o,f){return c.get(r,o,f,"json")},getScript:function(r,o){return c.get(r,void 0,o,"script")}}),c.each(["get","post"],function(r,o){c[o]=function(f,h,x,M){return b(h)&&(M=M||x,x=h,h=void 0),c.ajax(c.extend({url:f,type:o,dataType:M,data:h,success:x},c.isPlainObject(f)&&f))}}),c.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),c._evalUrl=function(r,o,f){return c.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(h){c.globalEval(h,o,f)}})},c.fn.extend({wrapAll:function(r){var o;return this[0]&&(b(r)&&(r=r.call(this[0])),o=c(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(r){return b(r)?this.each(function(o){c(this).wrapInner(r.call(this,o))}):this.each(function(){var o=c(this),f=o.contents();f.length?f.wrapAll(r):o.append(r)})},wrap:function(r){var o=b(r);return this.each(function(f){c(this).wrapAll(o?r.call(this,f):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(r){return!c.expr.pseudos.visible(r)},c.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch{}};var Nu={0:200,1223:204},Rr=c.ajaxSettings.xhr();E.cors=!!Rr&&"withCredentials"in Rr,E.ajax=Rr=!!Rr,c.ajaxTransport(function(r){var o,f;if(E.cors||Rr&&!r.crossDomain)return{send:function(h,x){var M,T=r.xhr();if(T.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(M in r.xhrFields)T[M]=r.xhrFields[M];r.mimeType&&T.overrideMimeType&&T.overrideMimeType(r.mimeType),!r.crossDomain&&!h["X-Requested-With"]&&(h["X-Requested-With"]="XMLHttpRequest");for(M in h)T.setRequestHeader(M,h[M]);o=function(F){return function(){o&&(o=f=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,F==="abort"?T.abort():F==="error"?typeof T.status!="number"?x(0,"error"):x(T.status,T.statusText):x(Nu[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=o(),f=T.onerror=T.ontimeout=o("error"),T.onabort!==void 0?T.onabort=f:T.onreadystatechange=function(){T.readyState===4&&t.setTimeout(function(){o&&f()})},o=o("abort");try{T.send(r.hasContent&&r.data||null)}catch(F){if(o)throw F}},abort:function(){o&&o()}}}),c.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return c.globalEval(r),r}}}),c.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),c.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,f;return{send:function(h,x){o=c("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",f=function(M){o.remove(),f=null,M&&x(M.type==="error"?404:200,M.type)}),m.head.appendChild(o[0])},abort:function(){f&&f()}}}});var Pc=[],ma=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=Pc.pop()||c.expando+"_"+Sc.guid++;return this[r]=!0,r}}),c.ajaxPrefilter("json jsonp",function(r,o,f){var h,x,M,T=r.jsonp!==!1&&(ma.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ma.test(r.data)&&"data");if(T||r.dataTypes[0]==="jsonp")return h=r.jsonpCallback=b(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,T?r[T]=r[T].replace(ma,"$1"+h):r.jsonp!==!1&&(r.url+=(ua.test(r.url)?"&":"?")+r.jsonp+"="+h),r.converters["script json"]=function(){return M||c.error(h+" was not called"),M[0]},r.dataTypes[0]="json",x=t[h],t[h]=function(){M=arguments},f.always(function(){x===void 0?c(t).removeProp(h):t[h]=x,r[h]&&(r.jsonpCallback=o.jsonpCallback,Pc.push(h)),M&&b(x)&&x(M[0]),M=x=void 0}),"script"}),E.createHTMLDocument=function(){var r=m.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),c.parseHTML=function(r,o,f){if(typeof r!="string")return[];typeof o=="boolean"&&(f=o,o=!1);var h,x,M;return o||(E.createHTMLDocument?(o=m.implementation.createHTMLDocument(""),h=o.createElement("base"),h.href=m.location.href,o.head.appendChild(h)):o=m),x=ue.exec(r),M=!f&&[],x?[o.createElement(x[1])]:(x=pn([r],o,M),M&&M.length&&c(M).remove(),c.merge([],x.childNodes))},c.fn.load=function(r,o,f){var h,x,M,T=this,F=r.indexOf(" ");return F>-1&&(h=bi(r.slice(F)),r=r.slice(0,F)),b(o)?(f=o,o=void 0):o&&typeof o=="object"&&(x="POST"),T.length>0&&c.ajax({url:r,type:x||"GET",dataType:"html",data:o}).done(function(I){M=arguments,T.html(h?c("<div>").append(c.parseHTML(I)).find(h):I)}).always(f&&function(I,V){T.each(function(){f.apply(this,M||[I.responseText,V,I])})}),this},c.expr.pseudos.animated=function(r){return c.grep(c.timers,function(o){return r===o.elem}).length},c.offset={setOffset:function(r,o,f){var h,x,M,T,F,I,V,nt=c.css(r,"position"),at=c(r),J={};nt==="static"&&(r.style.position="relative"),F=at.offset(),M=c.css(r,"top"),I=c.css(r,"left"),V=(nt==="absolute"||nt==="fixed")&&(M+I).indexOf("auto")>-1,V?(h=at.position(),T=h.top,x=h.left):(T=parseFloat(M)||0,x=parseFloat(I)||0),b(o)&&(o=o.call(r,f,c.extend({},F))),o.top!=null&&(J.top=o.top-F.top+T),o.left!=null&&(J.left=o.left-F.left+x),"using"in o?o.using.call(r,J):at.css(J)}},c.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(x){c.offset.setOffset(this,r,x)});var o,f,h=this[0];if(h)return h.getClientRects().length?(o=h.getBoundingClientRect(),f=h.ownerDocument.defaultView,{top:o.top+f.pageYOffset,left:o.left+f.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,f,h=this[0],x={top:0,left:0};if(c.css(h,"position")==="fixed")o=h.getBoundingClientRect();else{for(o=this.offset(),f=h.ownerDocument,r=h.offsetParent||f.documentElement;r&&(r===f.body||r===f.documentElement)&&c.css(r,"position")==="static";)r=r.parentNode;r&&r!==h&&r.nodeType===1&&(x=c(r).offset(),x.top+=c.css(r,"borderTopWidth",!0),x.left+=c.css(r,"borderLeftWidth",!0))}return{top:o.top-x.top-c.css(h,"marginTop",!0),left:o.left-x.left-c.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&c.css(r,"position")==="static";)r=r.offsetParent;return r||At})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var f=o==="pageYOffset";c.fn[r]=function(h){return Gt(this,function(x,M,T){var F;if(y(x)?F=x:x.nodeType===9&&(F=x.defaultView),T===void 0)return F?F[o]:x[M];F?F.scrollTo(f?F.pageXOffset:T,f?T:F.pageYOffset):x[M]=T},r,h,arguments.length)}}),c.each(["top","left"],function(r,o){c.cssHooks[o]=Ot(E.pixelPosition,function(f,h){if(h)return h=Lt(f,o),Q.test(h)?c(f).position()[o]+"px":h})}),c.each({Height:"height",Width:"width"},function(r,o){c.each({padding:"inner"+r,content:o,"":"outer"+r},function(f,h){c.fn[h]=function(x,M){var T=arguments.length&&(f||typeof x!="boolean"),F=f||(x===!0||M===!0?"margin":"border");return Gt(this,function(I,V,nt){var at;return y(I)?h.indexOf("outer")===0?I["inner"+r]:I.document.documentElement["client"+r]:I.nodeType===9?(at=I.documentElement,Math.max(I.body["scroll"+r],at["scroll"+r],I.body["offset"+r],at["offset"+r],at["client"+r])):nt===void 0?c.css(I,V,F):c.style(I,V,nt,F)},o,T?x:void 0,T)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){c.fn[o]=function(f){return this.on(o,f)}}),c.fn.extend({bind:function(r,o,f){return this.on(r,null,o,f)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,f,h){return this.on(o,r,f,h)},undelegate:function(r,o,f){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",f)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){c.fn[o]=function(f,h){return arguments.length>0?this.on(o,null,f,h):this.trigger(o)}});var Fu=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(r,o){var f,h,x;if(typeof o=="string"&&(f=r[o],o=r,r=f),!!b(r))return h=a.call(arguments,2),x=function(){return r.apply(o||this,h.concat(a.call(arguments)))},x.guid=r.guid=r.guid||c.guid++,x},c.holdReady=function(r){r?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=R,c.isFunction=b,c.isWindow=y,c.camelCase=Z,c.type=D,c.now=Date.now,c.isNumeric=function(r){var o=c.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},c.trim=function(r){return r==null?"":(r+"").replace(Fu,"$1")};var Ou=t.jQuery,Bu=t.$;return c.noConflict=function(r){return t.$===c&&(t.$=Bu),r&&t.jQuery===c&&(t.jQuery=Ou),c},typeof e>"u"&&(t.jQuery=t.$=c),c})})(du);var w_=du.exports;const ic=A_(w_);var zo=document.getElementById("globeCanvas");const is=new t_,Yr=new Qg({alpha:!0});Yr.setClearColor(0,0);Yr.setSize(zo.offsetHeight,zo.offsetHeight);is.background=null;document.body.appendChild(Yr.domElement);var pu=new nc(5919999,.75);pu.position.set(-150,150,-50);var mu=new nc(4282614,.75);mu.position.set(-400,200,150);var gu=new nc(8403967,.7);gu.position.set(100,250,-100);is.add(pu,mu,gu);const no={atmosphere:{uniforms:{},vertexShader:["varying vec3 vNormal;","void main() {","vNormal = normalize( normalMatrix * normal );","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["varying vec3 vNormal;","void main() {","float intensity = pow( 0.99 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 6.0 );","gl_FragColor = vec4( .28, .48, 1.0, 1.0 ) * intensity;","}"].join(`
`)}},C_=new ns(2,64,64),R_=new ii({uniforms:iu.clone(no.atmosphere.uniforms),vertexShader:no.atmosphere.vertexShader,fragmentShader:no.atmosphere.fragmentShader,side:cn,blending:io,transparent:!0}),rc=new Pe(C_,R_);rc.scale.set(1.05,1.05,1.05);is.add(rc);rc.position.set(-.1,.1,0);const P_=new ns(2,64,64),L_=new __({color:15658734}),Ge=new Pe(P_,L_);Ge.castShadow=!0;Ge.receiveShadow=!0;is.add(Ge);const D_=new M_,I_=new ts({map:D_.load("texture.png"),transparent:!0}),U_=new ns(2.003,64,64),sc=new Pe(U_,I_);sc.castShadow=!0;sc.receiveShadow=!0;Ge.add(sc);var xi=100,N_=new k(0,1.5,1.3),F_=new k(.6,.6,3.2),O_=new k(1.5,-1,.8),yi=new Qo(N_,F_,O_),ac=new Wn(yi,xi,.01,20,!1);const Mi=new ts({color:14247418});ac.setDrawRange(0,1e4);var B_=new Pe(ac,Mi);Ge.add(B_);var oc=new Wn(yi,xi,.01,20,!1);oc.setDrawRange(0,1e4);var Qs=new Pe(oc,Mi);Ge.add(Qs);Qs.rotation.y=.75;Qs.rotation.z=.75;Qs.rotation.x=-.1;var cc=new Wn(yi,xi,.01,20,!1);cc.setDrawRange(0,1e4);var ta=new Pe(cc,Mi);Ge.add(ta);ta.rotation.y=2.1;ta.rotation.z=.5;ta.rotation.x=.2;var lc=new Wn(yi,xi,.01,20,!1);lc.setDrawRange(0,1e4);var ea=new Pe(lc,Mi);Ge.add(ea);ea.rotation.y=2.3;ea.rotation.z=.8;ea.rotation.x=.2;var uc=new Wn(yi,xi,.01,20,!1);uc.setDrawRange(0,1e4);var na=new Pe(uc,Mi);Ge.add(na);na.rotation.y=2.9;na.rotation.z=1.1;na.rotation.x=2;var fc=new Wn(yi,xi,.01,20,!1);fc.setDrawRange(0,1e4);var ia=new Pe(fc,Mi);Ge.add(ia);ia.rotation.y=7.1;ia.rotation.z=1;ia.rotation.x=4.4;var hc=new Wn(yi,xi,.01,20,!1);hc.setDrawRange(0,1e4);var ra=new Pe(hc,Mi);Ge.add(ra);ra.rotation.y=2.1;ra.rotation.z=3;ra.rotation.x=4.4;var dc=new Wn(yi,xi,.01,20,!1);dc.setDrawRange(0,1e4);var sa=new Pe(dc,Mi);Ge.add(sa);sa.rotation.y=2.5;sa.rotation.z=1;sa.rotation.x=1.1;const Si=new tc(.01,.01,4.25,32),Ei=new ts({color:56831,transparent:!0,opacity:.5}),_u=new Pe(Si,Ei);Ge.add(_u);_u.rotation.x=.75;const pc=new Pe(Si,Ei);Ge.add(pc);pc.rotation.x=.74;pc.rotation.z=-.05;const mc=new Pe(Si,Ei);Ge.add(mc);mc.rotation.x=.72;mc.rotation.z=-.07;const gc=new Pe(Si,Ei);Ge.add(gc);gc.rotation.x=-1;gc.rotation.z=2;const _c=new Pe(Si,Ei);Ge.add(_c);_c.rotation.x=.8;_c.rotation.z=.5;const vc=new Pe(Si,Ei);Ge.add(vc);vc.rotation.x=1.05;vc.rotation.z=0;const xc=new Pe(Si,Ei);Ge.add(xc);xc.rotation.x=2;xc.rotation.z=3;const yc=new Pe(Si,Ei);Ge.add(yc);yc.rotation.x=.8;yc.rotation.z=2.5;var jr=!1,Ul={x:0,y:0};ic("#globeCanvas").on("mousedown",function(i){jr=!0}).on("mousemove",function(i){var t={x:i.offsetX-Ul.x};jr&&(Ge.rotation.y+=t.x*.004),Ul={x:i.offsetX,y:i.offsetY}});ic(document).mouseup(function(){jr=!1});ic("#canvas").mouseout(function(){jr=!1});const vu=new vn(75,900/900,.1,1e3);vu.position.z=6;var Fs=0,Os=0,kr=[ac,oc,cc,lc,uc,fc,hc,dc];function z_(i,t){t=Math.ceil(t/3)*3,kr[i].setDrawRange(0,t),i>2?kr[i-3].setDrawRange(t,1e4):kr[kr.length-3+i].setDrawRange(t,1e4)}const xu=function(){Fs<1e4?(Fs+=80,z_(Os,Fs)):(Fs=0,Os>=kr.length-1?Os=0:Os++),requestAnimationFrame(xu),jr||(Ge.rotation.y+=5e-4),Yr.render(is,vu),zo.appendChild(Yr.domElement)};xu();
