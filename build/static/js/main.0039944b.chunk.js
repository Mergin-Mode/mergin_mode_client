(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},15:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(8),i=a.n(o),s=(a(15),a(4)),d=a(3),c=(a(16),a(17),a(0)),l=(a(18),a(19),a(9)),h=a(6),m=a(5),w=function(e,t,a,n){return{Xb:e+a*Math.sin(n/63.6619772367581),Yb:t+a*Math.cos(n/63.6619772367581)}},p=function(e,t,a,n){var r=Math.abs(a-e),o=Math.abs(n-t),i=Math.sqrt(Math.pow(r,2)+Math.pow(o,2));return Number(i.toFixed(4))},u=function(e,t,a){if(0==a.length)return 0;var n=(p(0,e,0,-50)/(100/99)).toFixed(4)-0,r=(p(0,t,0,50)/(100/99)).toFixed(4)-0,o=Math.floor(n),i=Math.floor(r),s=n-o,d=r-i;if(0==s&&0==d){var c=100*i+o;return Number(a[c][2].toFixed(4))}if(s<=1-d){if(!a[c=100*i+o]||!a[c+1])return 0;var l=a[c][2]-a[c+1][2],h=Math.sqrt(Math.pow(l/150-0,2)+Math.pow(100/99,2)),m=s+d,w=Math.sqrt(Math.pow(d*(100/99),2)+Math.pow(d*(100/99),2)),u=h*m,f=Math.atan(Math.abs((l/150-0)/(100/99))),g=u*Math.sin(f);if(l<0)var v=a[c][2]/150-0+g;else v=a[c][2]/150-0-g;if(!a[c]||!a[c+100])return 0;var b=a[c][2]-a[c+100][2],M=Math.sqrt(Math.pow(b/150-0,2)+Math.pow(100/99,2)),y=d+s,x=Math.sqrt(Math.pow(s*(100/99),2)+Math.pow(s*(100/99),2)),O=M*y,S=Math.atan(Math.abs((b/150-0)/(100/99))),F=O*Math.sin(S);if(b<0)var E=a[c][2]/150-0+F;else E=a[c][2]/150-0-F;var j=w/(x+w),A=Math.abs(v-E)*j;if(v-E<0)var z=v+A;else z=v-A}else{if(!a[c=100*(i+1)+o+1]||!a[c-1])return 0;l=a[c][2]-a[c-1][2],h=Math.sqrt(Math.pow(l/150-0,2)+Math.pow(100/99,2)),m=1-s+(1-d),w=Math.sqrt(Math.pow(100/99*(1-d),2)+Math.pow(100/99*(1-d),2)),u=h*m,f=Math.atan(Math.abs((l/150-0)/(100/99))),g=u*Math.sin(f);if(l<0)v=a[c][2]/150-0+g;else v=a[c][2]/150-0-g;if(!a[c]||!a[c-100])return 0;b=a[c][2]-a[c-100][2],M=Math.sqrt(Math.pow(b/150-0,2)+Math.pow(100/99,2)),y=1-d+(1-s),x=Math.sqrt(Math.pow(100/99*(1-s),2)+Math.pow(100/99*(1-s),2)),O=M*y,S=Math.atan(Math.abs((b/150-0)/(100/99))),F=O*Math.sin(S);if(b<0)E=a[c][2]/150-0+F;else E=a[c][2]/150-0-F;j=w/(x+w),A=Math.abs(v-E)*j;if(v-E<0)z=v+A;else z=v-A}return Number(z.toFixed(4))};function f(e,t,a,n,r,o,i,d,f,g,v){i.FBXLoader=h.a,i.GLTFLoader=m.a;var b=new c.h,M=(new c.kb,new c.Cb,document.getElementById("three-map"));document.getElementById("axes-helper");a=new c.mb;var y=document.getElementsByTagName("video")[0],x=new c.Hb(y);x.minFilter=c.E,x.magFilter=c.E,x.format=c.jb,a.background=x,(n=new c.Ib({antialias:!0,alpha:!0})).setPixelRatio(window.devicePixelRatio),n.setClearColor(0,0),n.setSize(M.clientWidth,M.clientHeight),M.appendChild(n.domElement),(e=new c.ab(60,M.clientWidth/M.clientHeight,1,1e4)).position.set(80,80,80),(t=new l.a(e)).enableDamping=!0,t.dampingFactor=.05,t.screenSpacePanning=!1,t.minDistance=1,t.maxDistance=1e3,t.rotateSpeed=.8,t.panSpeed=.8,t.zoomSpeed=.8,function(e){for(var t=e.getAttribute("position"),a=t.array,n=2,r=0;n<a.length;n+=3,r++)a[n]=0;t.needsUpdate=!0,e.computeVertexNormals()}(z=new c.bb(100,100,99,99)),(I=new c.R({wireframe:!0,color:"#222",side:c.l})).flatShading=!0;var O=new c.O(z,I);O.position.set(0,0,0),O.castShadow=!0,O.receiveShadow=!0,O.geometry.rotateX(Math.PI/2),a.add(O);var S=new c.s(1e4,1e3);a.add(S);var F=new c.a(4210752,1);a.add(F);var E=new c.u(16777215,16777215,1);E.color.setHSL(.6,.5,.75),E.groundColor.setHSL(.095,.5,.5),E.position.set(0,0,50),a.add(E);var j=new c.k(16777215,1);window.dirLight=j,j.position.set(1,-1,1),j.position.multiplyScalar(50),j.name="dirlight",a.add(j),j.castShadow=!0,j.shadowMapWidth=j.shadowMapHeight=2048;var A=300;j.shadowCameraLeft=-A,j.shadowCameraRight=A,j.shadowCameraTop=A,j.shadowCameraBottom=-A,j.shadowCameraFar=3500,j.shadowBias=-1e-4,j.shadowDarkness=.35;var z=new c.sb(.5,32,32),I=new c.P({color:"red"});r=new c.O(z,I);z=new c.sb(150,32,32);(new c.xb).crossOrigin="";z=new c.sb(150,32,32),I=new c.P({opacity:0,transparent:!0,alphaTest:.05,side:c.l});var B=new c.O(z,I);function L(){e.aspect=M.clientWidth/M.clientHeight,e.updateProjectionMatrix(),n.setSize(M.clientWidth,M.clientHeight)}return B.rotation.set(Math.PI/2,0,0),a.add(B),function r(){requestAnimationFrame(r),t.update(),function(){for(var t=b.getDelta(),r=0;r<window.mergin_mode.mixers.length;++r)window.mergin_mode.mixers[r].update(t);window.mergin_mode.modelLayer.map((function(e){var a=Object(s.a)(Object(s.a)({},e),{},{mesh:e.mesh.children[0]}),n=a.mesh.position,r=n.x,o=n.y,i=n.z,d=a.runtimeInfo,l=d.animating,h=d.activeRow,m=window.mergin_mode.vectors.data.filter((function(e){return e.id==a.vectorId}))[0].array[0][h],f=m[0],v=m[1],b=(m[2],m[3]),M=m[4];if(l&&"undefined"!==typeof r&&"undefined"!==typeof o&&"undefined"!==typeof i){var y=window.mergin_mode.plane.dem,x=function(e,t,a,n,r,o){var i=w(e,t,1.75*r,n),s=u(i.Xb,i.Yb,o);return{x:i.Xb,y:i.Yb,z:s}}(Number(r.toFixed(4)),Number(o.toFixed(4)),Number(i.toFixed(4)),b,t,y),O=x.x,S=x.y,F=x.z,E=p(f,v,r,o);if(E===1/0&&(E=0),E<M)a.mesh.position.set(O,S,F);else{var j=window.mergin_mode.vectors.data.filter((function(e){return e.id==a.vectorId}))[0].array[0][h+1];if(j){g(a.id,{animating:!0,activeRow:h+1});var A=new c.Db(0,0,1);a.mesh.rotateOnWorldAxis(A,-(400-m[3]+j[3])/63.6619772367581)}else{window.mergin_mode.vectors.data.filter((function(e){return e.id==a.vectorId}))[0].array[0][0];g(a.id,{animating:!1,activeRow:0})}}}})),n.render(a,e)}()}(),window.addEventListener("resize",L,!1),{camera:e,controls:t,scene:a,renderer:n,pointer:r,partials:{plane:O,pointer:r,sky:B,gridHelper:S},loaders:i,onWindowResize:L}}m.a.prototype.load2=function(e,t){var a=this,n=e[0],r=new FileReader;r.onload=function(e){2!==e.target.readyState&&0!==e.target.status||a.parse(e.target.result||e.target.responseText,"",t)},r.readAsArrayBuffer(n)},h.a.prototype.load2=function(e,t){var a=this,n=e[0],r=new FileReader;r.onload=function(e){if(2===e.target.readyState||0===e.target.status){var n=a.parse(e.target.result||e.target.responseText);t&&t(n)}},r.readAsArrayBuffer(n)},window.mergin_mode={modelLayer:[],vectors:[],plane:{},sky:{},mixers:[]};var g=function(){Object(n.useRef)(null);var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=(t[0],t[1]),o=Object(n.useState)(1),i=Object(d.a)(o,2),c=(i[0],i[1],{video:{width:1280,height:720,facingMode:"environment"}}),l=Object(n.useState)({mixers:[],camera:{},controls:{},scene:{},renderer:{},pointer:{},partials:{},loaders:{},onWindowResize:function(){}}),h=Object(d.a)(l,2),m=h[0],w=(h[1],Object(n.useState)({})),p=Object(d.a)(w,2),u=p[0],g=p[1],v=Object(n.useState)({}),b=Object(d.a)(v,2),M=b[0],y=b[1];return Object(n.useEffect)((function(){if(window.Accelerometer){var e=new window.Accelerometer({frequency:60});e.addEventListener("reading",(function(){g({x:e.x.toFixed(2),y:e.y.toFixed(2),z:e.z.toFixed(2)}),console.log("Acceleration along the X-axis "+e.x),console.log("Acceleration along the Y-axis "+e.y),console.log("Acceleration along the Z-axis "+e.z)})),e.start()}window.addEventListener("deviceorientation",(function(e){e.absolute;var t=e.alpha.toFixed(2),a=e.beta.toFixed(2),n=e.gamma.toFixed(2);y({x:a,y:n,z:t})}),!0),navigator.mediaDevices.getUserMedia(c).then((function(e){var t=document.getElementById("video");t.srcObject=e,t.play();var n=e.getTracks()[0].getSettings();a(Object(s.a)({},n));m.mixers;var r=m.camera,o=m.controls,i=m.scene,d=m.renderer,c=m.pointer,l=(m.partials,m.loaders);document.getElementById("three-map"),f(r,o,i,d,c,0,l)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}},r.a.createElement("video",{id:"video",style:{display:"none"},autoplay:!0,playsinline:!0}),r.a.createElement("div",{id:"three-map",style:{position:"absolute",width:"100%",height:"100%"}})),r.a.createElement("div",{style:{position:"absolute",top:0,left:0}},"Accelerometer "+JSON.stringify(u)),r.a.createElement("div",{style:{position:"absolute",top:"20px",left:0}},"Orientation "+JSON.stringify(M)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0039944b.chunk.js.map