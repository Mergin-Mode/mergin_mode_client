(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{64:function(e,t,a){e.exports=a(81)},69:function(e,t,a){},70:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),c=(a(69),a(25)),s=a(16),d=(a(70),a(1)),l=a(51),m=a(44),u=a(43),p=function(e,t,a,n){return{Xb:e+a*Math.sin(n/63.6619772367581),Yb:t+a*Math.cos(n/63.6619772367581)}},h=function(e,t,a,n){var o=Math.abs(a-e),r=Math.abs(n-t),i=Math.sqrt(Math.pow(o,2)+Math.pow(r,2));return Number(i.toFixed(4))},f=function(e,t,a){if(0===a.length)return 0;var n,o,r,i,c,s,d,l,m,u,p,f,w,g,v,b,M,y,E,x,O,S,j,F,k,C;if(j=(h(0,e,0,-50)/(100/99)).toFixed(4)-0,F=(h(0,t,0,50)/(100/99)).toFixed(4)-0,k=Math.floor(j),S=F-(C=Math.floor(F)),0===(O=j-k)&&0===S)return n=100*C+k,Number(a[n][2].toFixed(4));if(O<=1-S){if(!a[n=100*C+k]||!a[n+1])return 0;if(s=a[n][2]-a[n+1][2],l=Math.sqrt(Math.pow(s/150-0,2)+Math.pow(100/99,2)),u=O+S,w=Math.sqrt(Math.pow(S*(100/99),2)+Math.pow(S*(100/99),2)),g=l*u,b=Math.atan(Math.abs((s/150-0)/(100/99))),y=g*Math.sin(b),o=s<0?a[n][2]/150-0+y:a[n][2]/150-0-y,!a[n]||!a[n+100])return 0;d=a[n][2]-a[n+100][2],m=Math.sqrt(Math.pow(d/150-0,2)+Math.pow(100/99,2)),p=S+O,f=Math.sqrt(Math.pow(O*(100/99),2)+Math.pow(O*(100/99),2)),v=m*p,M=Math.atan(Math.abs((d/150-0)/(100/99))),E=v*Math.sin(M),r=d<0?a[n][2]/150-0+E:a[n][2]/150-0-E,x=w/(f+w),i=Math.abs(o-r)*x,c=o-r<0?o+i:o-i}else{if(!a[n=100*(C+1)+k+1]||!a[n-1])return 0;if(s=a[n][2]-a[n-1][2],l=Math.sqrt(Math.pow(s/150-0,2)+Math.pow(100/99,2)),u=1-O+(1-S),w=Math.sqrt(Math.pow(100/99*(1-S),2)+Math.pow(100/99*(1-S),2)),g=l*u,b=Math.atan(Math.abs((s/150-0)/(100/99))),y=g*Math.sin(b),o=s<0?a[n][2]/150-0+y:a[n][2]/150-0-y,!a[n]||!a[n-100])return 0;d=a[n][2]-a[n-100][2],m=Math.sqrt(Math.pow(d/150-0,2)+Math.pow(100/99,2)),p=1-S+(1-O),f=Math.sqrt(Math.pow(100/99*(1-O),2)+Math.pow(100/99*(1-O),2)),v=m*p,M=Math.atan(Math.abs((d/150-0)/(100/99))),E=v*Math.sin(M),r=d<0?a[n][2]/150-0+E:a[n][2]/150-0-E,x=w/(f+w),i=Math.abs(o-r)*x,c=o-r<0?o+i:o-i}return Number(c.toFixed(4))};function w(e,t,a,n,o,r,i,s,w,g,v){i.FBXLoader=m.a,i.GLTFLoader=u.a;var b=new d.h,M=document.getElementById("three-map");a=new d.jb;var y=document.getElementsByTagName("video")[0],E=new d.Cb(y);E.minFilter=d.D,E.magFilter=d.D,E.format=d.hb,a.background=E,(n=new d.Db({antialias:!0,alpha:!0})).setPixelRatio(window.devicePixelRatio),n.setClearColor(0,0),n.setSize(M.clientWidth,M.clientHeight),M.appendChild(n.domElement),(e=new d.Y(60,M.clientWidth/M.clientHeight,1,1e4)).position.set(0,1.7,0),(t=new l.a(e)).enableDamping=!0,t.dampingFactor=.05,t.screenSpacePanning=!1,t.minDistance=1,t.maxDistance=1e3,t.rotateSpeed=.8,t.panSpeed=.8,t.zoomSpeed=.8;var x=new d.Z(100,100,99,99);!function(e){for(var t=e.getAttribute("position"),a=t.array,n=2,o=0;n<a.length;n+=3,o++)a[n]=0;t.needsUpdate=!0,e.computeVertexNormals()}(x);var O=new d.P({wireframe:!0,color:"#222",side:d.l});O.flatShading=!0;var S=new d.M(x,O);S.position.set(0,0,0),S.castShadow=!1,S.receiveShadow=!1,S.geometry.rotateX(Math.PI/2),a.add(S);var j=new d.r(1e4,1e3);a.add(j);var F=new d.a(4210752,1);a.add(F);var k=new d.t(16777215,16777215,1);k.color.setHSL(.6,.5,.75),k.groundColor.setHSL(.095,.5,.5),k.position.set(0,0,50),a.add(k);var C=new d.k(16777215,1);window.dirLight=C,C.position.set(1,-1,1),C.position.multiplyScalar(50),C.name="dirlight",a.add(C),C.castShadow=!1,o=new d.M(new d.pb(.5,32,32),new d.N({color:"red"}));var N=new d.M(new d.pb(150,32,32),new d.N({opacity:0,transparent:!0,alphaTest:.05,side:d.l}));function R(){e.aspect=M.clientWidth/M.clientHeight,e.updateProjectionMatrix(),n.setSize(M.clientWidth,M.clientHeight)}return N.rotation.set(Math.PI/2,0,0),a.add(N),function o(){setTimeout((function(){var r;requestAnimationFrame(o),!1!==(null===(r=window.mergin_mode.scene)||void 0===r?void 0:r.visible)&&(t.update(),function(){for(var t=b.getDelta(),o=0;o<window.mergin_mode.mixers.length;++o)window.mergin_mode.mixers[o].update(t);window.mergin_mode.modelLayer.forEach((function(e){var a=Object(c.a)(Object(c.a)({},e),{},{mesh:e.mesh.children[0]}),n=a.mesh.position,o=n.x,r=n.y,i=n.z,s=a.runtimeInfo,l=s.animating,m=s.activeRow,u=window.mergin_mode.vectors.data.filter((function(e){return e.id===a.vectorId}))[0].array[0][m],w=u[0],v=u[1],b=u[3],M=u[4];if(l&&"undefined"!==typeof o&&"undefined"!==typeof r&&"undefined"!==typeof i){var y=window.mergin_mode.plane.dem,E=function(e,t,a,n,o,r){var i=p(e,t,1.75*o,n),c=f(i.Xb,i.Yb,r);return{x:i.Xb,y:i.Yb,z:c}}(Number(o.toFixed(4)),Number(r.toFixed(4)),Number(i.toFixed(4)),b,t,y),x=E.x,O=E.y,S=E.z,j=h(w,v,o,r);if(j===1/0&&(j=0),j<M)a.mesh.position.set(x,O,S);else{var F=window.mergin_mode.vectors.data.filter((function(e){return e.id===a.vectorId}))[0].array[0][m+1];if(F){g(a.id,{animating:!0,activeRow:m+1});var k=new d.yb(0,0,1);a.mesh.rotateOnWorldAxis(k,-(400-u[3]+F[3])/63.6619772367581)}else g(a.id,{animating:!1,activeRow:0})}}})),n.render(a,e)}())}),60)}(),window.addEventListener("resize",R,!1),{camera:e,controls:t,scene:a,renderer:n,pointer:o,partials:{plane:S,pointer:o,sky:N,gridHelper:j},loaders:i,onWindowResize:R}}u.a.prototype.load2=function(e,t){var a=this,n=e[0],o=new FileReader;o.onload=function(e){2!==e.target.readyState&&0!==e.target.status||a.parse(e.target.result||e.target.responseText,"",t)},o.readAsArrayBuffer(n)},m.a.prototype.load2=function(e,t){var a=this,n=e[0],o=new FileReader;o.onload=function(e){if(2===e.target.readyState||0===e.target.status){var n=a.parse(e.target.result||e.target.responseText);t&&t(n)}},o.readAsArrayBuffer(n)};var g=a(52),v=a.n(g),b=a(4),M=a(111),y=a(121),E=a(119),x=a(117),O=a(120),S=function(e){var t=Object(M.a)((function(e){return{root:Object(b.a)({height:380,transform:"translateZ(0px)",flexGrow:1,position:"absolute",zIndex:10,width:"100%"},"height","100%"),speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}}))(),a=o.a.useState(!1),n=Object(s.a)(a,2),r=n[0],i=n[1],c=function(){i(!1)};return o.a.createElement("div",{className:t.root},o.a.createElement(y.a,{open:r}),o.a.createElement(E.a,{ariaLabel:"Action Tooltip",className:t.speedDial,icon:o.a.createElement(O.a,null),onClose:c,onOpen:function(){i(!0)},open:r},e.actions.map((function(e){return o.a.createElement(x.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0,onClick:c})}))))},j=a(116);function F(){return Math.round(20*Math.random())-10}function k(){var e=50+F(),t=50+F();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var C=Object(M.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),N=function(e){var t=C(),a=o.a.useState(k),n=Object(s.a)(a,1)[0],r=o.a.useState(!1),i=Object(s.a)(r,2),c=(i[0],i[1],o.a.createElement("div",{style:n,className:t.paper},o.a.createElement("h2",{id:"simple-modal-title"},"Text in a modal"),o.a.createElement("p",{id:"simple-modal-description"},e.data)));return o.a.createElement(j.a,{open:!0,onClose:e.onClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},c)},R=a(59),_=a(115),I=a(58),q=a.n(I),D=a(57),z=a.n(D),L=a(56),P=a.n(L),A=Object(R.a)({palette:{primary:{main:"#b34f0b"},secondary:{main:"#323228"}}});window.mergin_mode={modelLayer:[],vectors:[],plane:{},sky:{},mixers:[],camera:{},controls:{},scene:{},renderer:{},pointer:{},partials:{},loaders:{},onWindowResize:function(){}};var B=function(){var e=Object(n.useState)({latitude:0,longitude:0}),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("immerse"),d=Object(s.a)(i,2),l=d[0],m=d[1],u=Object(n.useState)(null),p=Object(s.a)(u,2),h=p[0],f=p[1],g=Object(n.useRef)(null),b=Object(n.useRef)(null),M=Object(n.useRef)(a);return Object(n.useRef)({}),Object(n.useEffect)((function(){var e,t;if(!(null===(e=navigator.geolocation)||void 0===e?void 0:e.getCurrentPosition)||!(null===(t=navigator.mediaDevices)||void 0===t?void 0:t.getUserMedia))return!1;navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;M.current={latitude:t,longitude:a},r(M.current)}),(function(){})),navigator.mediaDevices.getUserMedia({video:{width:1280,height:720,facingMode:"environment"}}).then((function(e){var t=document.getElementById("video");t.srcObject=e,t.play()}));var a=window.mergin_mode,n=(a.mixers,a.camera),o=a.controls,i=a.scene,s=a.renderer,d=a.pointer,l=(a.partials,a.loaders),m=(document.getElementById("three-map"),w(n,o,i,s,d,0,l));window.mergin_mode=Object(c.a)(Object(c.a)({},window.mergin_mode),m)}),[]),Object(n.useEffect)((function(){var e="immerse"===l;window.mergin_mode.scene.visible=e,window.mergin_mode.scene.needsUpdate=!0,g.current.style.display=e?"block":"none"}),[l]),o.a.createElement(_.a,{theme:A},o.a.createElement("div",{className:"App",ref:function(e){return b.current=e}},o.a.createElement("div",{id:"main",ref:function(e){return g.current=e}},o.a.createElement("img",{id:"logo",width:120,height:87.9375,src:"/logo-transparent.png"}),o.a.createElement("video",{id:"video",style:{display:"none"},autoPlay:!0,playsInline:!0}),o.a.createElement("div",{id:"three-map",style:{position:"absolute",width:"100%",height:"100%"}})),o.a.createElement(S,{actions:[{icon:o.a.createElement(P.a,{color:"secondary",onClick:function(){return m("immerse")}}),name:"Immerse"},{icon:o.a.createElement(z.a,{color:"secondary",onClick:function(){return m("scan")}}),name:"QR Scan"},{icon:o.a.createElement(q.a,{color:"secondary",onClick:function(){document.fullscreenElement?document.exitFullscreen():b.current.requestFullscreen().catch((function(e){h("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}}),name:"Full Screen"}]}),"scan"===l&&o.a.createElement("div",{className:"scan-tip"},o.a.createElement(v.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){e&&f(e)},style:{width:"100%"}}),o.a.createElement("p",null,h?"":"Scanning...")),h&&o.a.createElement(N,{data:h,onClose:function(){f(null),m("immerse")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.a1441c64.chunk.js.map