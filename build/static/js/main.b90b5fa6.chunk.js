(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(8),r=n.n(a),c=(n(86),n(87),n(88),n(29)),d=n.n(c),s=n(43),l=n(51),m=n(28),u=n(21),p=n(44),w=n(1),f=n(63),h=n(64),v=n(54),g=n(53),b=function(e,t,n,i){return{Xb:e+n*Math.sin(i/63.6619772367581),Yb:t+n*Math.cos(i/63.6619772367581)}},y=function(e,t,n){var i=new w.Fb(e.x,e.y,e.z+n);return((new w.mb(i,new w.Fb(0,0,-1)).intersectObject(t,!0)[0]||{}).point||{}).z||0},x=function(e,t){var n=Number(t.object.position.x.toFixed(4)),i=Number(t.object.position.y.toFixed(4)),o=t.animations[t.runtimeInfo.animationIndex];if(t.runtimeInfo.duration+=e,o.duration){if(t.runtimeInfo.duration>=o.duration/1e3)if(t.runtimeInfo.duration=0,t.animations.length-1>t.runtimeInfo.animationIndex){t.runtimeInfo.animationIndex++,t.runtimeInfo.pathIndex=0;var a=new w.c(t.object);a.clipAction(t.object.animations.filter((function(e){return e.name==t.animations[t.runtimeInfo.animationIndex].name}))[0]).setDuration(1).play(),t.runtimeInfo.mixer=a}else{t.runtimeInfo.animationIndex=0,t.runtimeInfo.pathIndex=0;var r=new w.c(t.object);r.clipAction(t.object.animations.filter((function(e){return e.name==t.animations[t.runtimeInfo.animationIndex].name}))[0]).setDuration(1).play(),t.runtimeInfo.mixer=r}return!1}var c=o.path[t.runtimeInfo.pathIndex],d=Number(c[0].toFixed(4)),s=Number(c[1].toFixed(4)),l=e*o.speed/60/60*1e3,m=o.path[t.runtimeInfo.pathIndex-1]?o.path[t.runtimeInfo.pathIndex-1]:o.path[t.runtimeInfo.pathIndex],u=Number(function(e,t,n,i){var o,a=Math.abs(n-e),r=Math.abs(i-t),c=Math.sqrt(Math.pow(a,2)+Math.pow(r,2)),d=n-e,s=i-t,l=63.6619772367581*Math.atan(a/r);return d>0&&s>0?o=l:d>0&&s<0?o=200-l:d<0&&s<0?o=200+l:d<0&&s>0?o=400-l:0===d&&s>0?o=0:0===d&&s<0?o=200:d>0&&0===s?o=100:d<0&&0===s?o=300:0===d&&0===s&&(o=0),{Gab:o.toFixed(4),Sab:c.toFixed(4)}}(m[0],m[1],d,s).Gab);if(u<=100&&(n>=d||i>=s)||u>100&&u<=200&&(n>=d||i<=s)||u>200&&u<=300&&(n<=d||i<=s)||u>300&&(n<=d||i>=s)){if(o.path.length-1>t.runtimeInfo.pathIndex)t.runtimeInfo.pathIndex++,t.runtimeInfo.duration=0;else if(t.animations.length-1>t.runtimeInfo.animationIndex){t.runtimeInfo.animationIndex++,t.runtimeInfo.pathIndex=0,t.runtimeInfo.duration=0;var p=new w.c(t.object);p.clipAction(t.object.animations.filter((function(e){return e.name==t.animations[t.runtimeInfo.animationIndex].name}))[0]).setDuration(1).play(),t.runtimeInfo.mixer=p}else{t.runtimeInfo.animationIndex=0,t.runtimeInfo.pathIndex=0,t.runtimeInfo.duration=0;var f=new w.c(t.object);f.clipAction(t.object.animations.filter((function(e){return e.name==t.animations[t.runtimeInfo.animationIndex].name}))[0]).setDuration(1).play(),t.runtimeInfo.mixer=f}var h=b(n,i,l,u);y({x:h.Xb,y:h.Yb,z:t.object.position.z},window.mergin_mode.plane,2);return!1}var v=b(n,i,l,u),g=y({x:v.Xb,y:v.Yb,z:t.object.position.z},window.mergin_mode.plane,2),x=u?u/63.661977236758:0;return{position:[v.Xb,v.Yb,g],rotation:[t.rotation[0],t.rotation[1]-x,t.rotation[2]]}};Math.PI;function E(e,t,n,i,o,a,r,c,d,s){r.FBXLoader=v.a,r.GLTFLoader=g.a;var l=new w.j,m=document.getElementById("three-map");n=new w.ob;var b=document.getElementsByTagName("video")[0],y=new w.Jb(b);y.minFilter=w.G,y.magFilter=w.G,y.format=w.lb,n.background=y,(i=new w.Kb({antialias:!0,alpha:!0})).setPixelRatio(window.devicePixelRatio),i.setClearColor(0,0),i.setSize(m.clientWidth,m.clientHeight),m.appendChild(i.domElement),(e=new w.cb(60,m.clientWidth/m.clientHeight,1,1e4)).position.set(50,17,50),e.up.set(0,0,1),(t=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}()?new h.a(e):new f.a(e,i.domElement)).enableDamping=!0,t.dampingFactor=.05,t.screenSpacePanning=!1,t.minDistance=1,t.maxDistance=1e3,t.rotateSpeed=.8,t.panSpeed=.8,t.zoomSpeed=.8;var E=new w.db(100,100,99,99);!function(e){for(var t=e.getAttribute("position"),n=t.array,i=2,o=0;i<n.length;i+=3,o++)n[i]=0;t.needsUpdate=!0,e.computeVertexNormals()}(E);var I=new w.T({wireframe:!0,color:"#222",side:w.n});I.flatShading=!0;var j=new w.Q(E,I);j.position.set(0,0,0),j.castShadow=!1,j.receiveShadow=!1,n.add(j);var _=new w.u(1e4,1e3);_.geometry.rotateX(Math.PI/2),n.add(_);var k=new w.a(4210752,1);n.add(k);var O=new w.w(16777215,16777215,1);O.color.setHSL(.6,.5,.75),O.groundColor.setHSL(.095,.5,.5),O.position.set(0,0,50),n.add(O);var S=new w.m(16777215,1);window.dirLight=S,S.position.set(1,-1,1),S.position.multiplyScalar(50),S.name="dirlight",n.add(S),S.castShadow=!1,o=new w.Q(new w.ub(.5,32,32),new w.R({color:"red"}));var L=new w.Q(new w.ub(150,32,32),new w.R({opacity:0,transparent:!0,alphaTest:.05,side:w.n}));L.rotation.set(Math.PI/2,0,0),n.add(L);var D=new w.mb,T=new w.Eb,F=function e(t){return!(!t||!window.mergin_mode.world)&&(-1!==window.mergin_mode.world.map((function(e){return e.id})).indexOf(t.uuid)?t:e(t.parent))};function z(t){window.mergin_mode.selected.object&&(n.remove(window.mergin_mode.selected.objectHelper),window.mergin_mode.selected.object=null,window.mergin_mode.selected.material=null);var o=i.domElement.getBoundingClientRect();T.x=((t.clientX||t.changedTouches[0].clientX)-o.left)/o.width*2-1,T.y=-((t.clientY||t.changedTouches[0].clientY)-o.top)/o.height*2+1,D.setFromCamera(T,e);var a,r,c=D.intersectObjects(n.children,!0),d=Object(p.a)(c);try{for(d.s();!(r=d.n()).done;){var l=r.value;if(a=F(null===l||void 0===l?void 0:l.object))break}}catch(m){d.e(m)}finally{d.f()}if(!a)return s(null),!1;new w.T({color:"#b34f0b",side:w.n});window.mergin_mode.selected.object=a,window.mergin_mode.selected.objectHelper=new w.f(a),window.mergin_mode.selected.objectHelper.material.color.set(16777215),n.add(window.mergin_mode.selected.objectHelper),n.add(window.mergin_mode.selected.objectHelper),s(a.uuid)}function M(){e.aspect=m.clientWidth/m.clientHeight,e.updateProjectionMatrix(),i.setSize(m.clientWidth,m.clientHeight)}return function o(){setTimeout((function(){var a;requestAnimationFrame(o),!1!==(null===(a=window.mergin_mode.scene)||void 0===a?void 0:a.visible)&&(t.update(),function(){i.render(n,e);var t=l.getDelta();window.mergin_mode.world.forEach((function(e){e.runtimeInfo&&e.runtimeInfo.mixer&&e.runtimeInfo.mixer.update(t)})),window.mergin_mode.world.forEach((function(e){if(e.animations&&e.object){var n=x(t,e);if(n){var i,o;if(n.position)(i=e.object.position).set.apply(i,Object(u.a)(n.position));if(n.rotation)(o=e.object.rotation).set.apply(o,Object(u.a)(n.rotation))}}})),(window.mergin_mode.selected||{}).objectHelper&&window.mergin_mode.selected.objectHelper.update()}())}),60)}(),window.addEventListener("resize",M,!1),document.getElementById("three-map").addEventListener("click",z),document.getElementById("three-map").addEventListener("touchend",z,!1),{plane:j,camera:e,controls:t,scene:n,renderer:i,pointer:o,partials:{plane:j,pointer:o,sky:L,gridHelper:_},loaders:r,onWindowResize:M}}g.a.prototype.load2=function(e,t){var n=this,i=e[0],o=new FileReader;o.onload=function(e){2!==e.target.readyState&&0!==e.target.status||n.parse(e.target.result||e.target.responseText,"",t)},o.readAsArrayBuffer(i)},v.a.prototype.load2=function(e,t){var n=this,i=e[0],o=new FileReader;o.onload=function(e){if(2===e.target.readyState||0===e.target.status){var i=n.parse(e.target.result||e.target.responseText);t&&t(i)}},o.readAsArrayBuffer(i)};var I=n(16),j=(n(103),n(65)),_=function(e,t,n,i,o){var a=e[0],r=(a.name,a.size,a.url),c=window.mergin_mode,d=(c.scene,new c.loaders.GLTFLoader),s=new j.a;return d.setDRACOLoader(s),new Promise((function(e,a){d.load(r,(function(a){var r,c,d;(r=a.scene.position).set.apply(r,Object(u.a)(t)),(c=a.scene.scale).set.apply(c,Object(u.a)(i)),(d=a.scene.rotation).set.apply(d,Object(u.a)(n)),a.scene.animations=a.animations,e({referenceIndex:o,uuid:a.scene.uuid,object:a.scene})}),(function(){}),(function(e){a(e)}))}))},k=[{type:"model",url:"/white-tower.gltf",position:[0,0,0],rotation:[Math.PI/2,0,0],scale:[1,1,1],description:'<iframe \n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="https://en.wikipedia.org/wiki/White_Tower_of_Thessaloniki"></iframe>'},{type:"model",url:"/tree-green.fbx",position:[0,20,0],rotation:[Math.PI/2,0,0],scale:[.1,.1,.1],description:'<iframe \n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="https://en.wikipedia.org/wiki/Tree"></iframe>'},{type:"model",url:"/Soldier.glb",position:[0,30,0],rotation:[Math.PI/2,0,0],scale:[1,1,1],animations:[{name:"Idle",duration:5e3},{name:"Walk",path:[[0,30,0],[10,40,0],[30,20,0],[0,30,0]],speed:6,speedUnit:"km/h"},{name:"Run",path:[[0,30,0],[10,40,0],[30,20,0],[0,30,0]],speed:12,speedUnit:"km/h"}],description:'<iframe \n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="https://en.wikipedia.org/wiki/Alexander_the_Great"></iframe>'}],O={gltf:_,glb:_,fbx:function(e,t,n,i,o){var a=e[0],r=(a.name,a.size,a.url),c=window.mergin_mode,d=(c.scene,new c.loaders.FBXLoader);return new Promise((function(e,a){d.load(r,(function(a){var r,c,d;a.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),(r=a.position).set.apply(r,Object(u.a)(t)),(c=a.scale).set.apply(c,Object(u.a)(i)),(d=a.rotation).set.apply(d,Object(u.a)(n)),e({referenceIndex:o,uuid:a.uuid,object:a})}),(function(){}),(function(e){a(e)}))}))}},S=Object(s.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(e){return e.split(/[#?]/)[0].split(".").pop().trim()},function(e){var n=[];window.mergin_mode.world=[];var i,o=Object(p.a)(e.entries());try{for(o.s();!(i=o.n()).done;){var a=Object(I.a)(i.value,2),r=a[0],c=a[1];"model"===c.type&&(n.push(O[t(c.url)]([{url:c.url}],c.position,c.rotation,c.scale,r)),window.mergin_mode.world.push(c))}}catch(d){o.e(d)}finally{o.f()}return Promise.all(n).then((function(e){e.forEach((function(e){if(window.mergin_mode.world[e.referenceIndex].id=e.uuid,window.mergin_mode.world[e.referenceIndex].object=e.object,window.mergin_mode.scene.add(e.object),window.mergin_mode.world[e.referenceIndex].animations){var t=new w.c(e.object);t.clipAction(window.mergin_mode.world[e.referenceIndex].object.animations.filter((function(t){return t.name==window.mergin_mode.world[e.referenceIndex].animations[0].name}))[0]).setDuration(1).play(),window.mergin_mode.world[e.referenceIndex].runtimeInfo={animationIndex:0,pathIndex:0,duration:0,mixer:t}}}))})).catch((function(e){console.error(e)}))}(k);case 3:case"end":return e.stop()}}),e)}))),L=Object(m.b)((function(e){return{api:e.api}}),(function(e){return{setDescriptiveData:function(t){return e({type:"SET_DESCRIPTIVE_DATA",descriptiveData:t})}}}))((function(e){return Object(i.useEffect)((function(){var t;if(!(null===(t=navigator.mediaDevices)||void 0===t?void 0:t.getUserMedia))return!1;navigator.mediaDevices.getUserMedia({video:{width:1280,height:720,facingMode:"environment"}}).then((function(e){var t=document.getElementById("video");t.srcObject=e,t.play()}));var n=window.mergin_mode,i=(n.mixers,n.camera),o=n.controls,a=n.scene,r=n.renderer,c=n.pointer,m=(n.partials,n.loaders),u=(document.getElementById("three-map"),E(i,o,a,r,c,0,m,0,0,(function(t){var n=t?window.mergin_mode.world.filter((function(e){return e.id==t}))[0].description:null;window["descriptive-data-container"].classList.add("transition"),window["descriptive-data-container"].style.height=n?"33%":"0%",setTimeout((function(){window["descriptive-data-container"].classList.remove("transition")}),1e3),e.setDescriptiveData(n)})));window.mergin_mode=Object(l.a)(Object(l.a)({},window.mergin_mode),u),Object(s.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e.context);case 2:case"end":return t.stop()}}),t)})))()}),[]),o.a.createElement("div",{id:"world"},o.a.createElement("video",{id:"video",style:{display:"none"},autoPlay:!0,playsInline:!0}),o.a.createElement("div",{id:"three-map",style:{position:"absolute",width:"100%",height:"100%"}}))})),D=n(4),T=n(131),F=n(142),z=n(140),M=n(139),A=n(141),H=function(e){var t=Object(T.a)((function(e){return{root:Object(D.a)({pointerEvents:"none",height:380,transform:"translateZ(0px)",flexGrow:1,flex:1,zIndex:10,width:"100%"},"height","100%"),speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2),"& .MuiSpeedDialAction-staticTooltip .MuiSpeedDialAction-staticTooltipLabel":{whiteSpace:"nowrap"},"& .MuiButtonBase-root.MuiFab-root.MuiSpeedDial-fab.MuiFab-primary":{width:48,height:48,"& .MuiFab-label":{display:"initial"},"&:focus":{outline:"none"}}}}}))(),n=o.a.useState(!1),i=Object(I.a)(n,2),a=i[0],r=i[1],c=function(){r(!1)};return o.a.createElement("div",{className:t.root},o.a.createElement(F.a,{open:a}),o.a.createElement(z.a,{ariaLabel:"Action Tooltip",className:t.speedDial,icon:o.a.createElement(A.a,null),onClose:c,onOpen:function(){r(!0)},open:a},e.actions.map((function(e){return o.a.createElement(M.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0,onClick:c})}))))},C=n(138),N=Object(T.a)((function(e){return{paper:{position:"absolute",fontFamily:"Ubuntu",width:"98%",height:"98%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),borderRadius:20,display:"flex",flexFlow:"column"}}})),P=function(e){var t=N(),n=o.a.useState(!1),i=Object(I.a)(n,2),a=(i[0],i[1],o.a.createElement("div",{className:t.paper},e.data));return o.a.createElement(C.a,{open:!0,onClose:e.onClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},a)},R=(n(94),n(69)),Y=n.n(R),B=n(136),X=n(67),W=n.n(X),q=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:25}},o.a.createElement("i",{style:{fontSize:70},className:"fas fa-qrcode"}),o.a.createElement("h2",{style:{marginLeft:24,fontWeight:900,textTransform:"uppercase",color:"#606059",letterSpacing:5},id:"simple-modal-title"},"QR Code Scanner")),o.a.createElement("p",{id:"simple-modal-description",style:{flex:1}},o.a.createElement("div",{style:{height:"calc(100% - 30px)",position:"relative"}},o.a.createElement("div",{className:"scan-tip"},o.a.createElement(W.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){if(e){var t=JSON.parse(e);window.mergin_mode.camera.position.set(t.x,t.y,t.z),window.mergin_mode.controls.alphaOffset=t.heading/180*Math.PI,window.mergin_mode.controls.update()}},style:{width:"100%"}}))),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(B.a,{style:{fontSize:"18px",color:"#313129",fontWeight:600},onClick:e.onClose},"Close"))))},G=function(e,t,n){return function(i){t.current.style.height="100%";var o=function(n){e.current.classList.add("transition"),.33==(e.current.offsetHeight/window.innerHeight).toFixed(2)?e.current.style.height="0%":e.current.style.height="33%",window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",r),window.removeEventListener("touchend",r),setTimeout((function(){e.current.classList.remove("transition"),t.current.style.height="48px"}),500)};n.current={height:null,movementY:null,previousTouchY:null,previousHeight:e.current.offsetHeight};var a=function(t){n.current.moved=!0,"undefined"===typeof t.movementY?(n.current.movementY=t.touches[0].pageY-(n.current.previousTouchY||t.touches[0].pageY),n.current.previousTouchY=t.touches[0].pageY):n.current.movementY=t.movementY,n.current.height=e.current.offsetHeight-n.current.movementY,e.current.style.height="".concat(n.current.height,"px")};window.addEventListener("mousemove",a),window.addEventListener("touchmove",a);var r=function i(){if(!n.current.moved)return o();e.current.classList.add("transition");var r=n.current.previousHeight-e.current.offsetHeight,c=(e.current.offsetHeight/window.innerHeight).toFixed(2);Number(c)<=.33?n.current.height=r>=0?"0%":"33%":n.current.height=r>=0?"33%":"100%",e.current.style.height="".concat(n.current.height),setTimeout((function(){e.current.classList.remove("transition"),t.current.style.height="48px"}),500),window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",i),window.removeEventListener("touchend",i)};window.addEventListener("mouseup",r),window.addEventListener("touchend",r)}},U=Object(m.b)((function(e){return{descriptiveData:e.api.descriptiveData}}),(function(e){return{}}))((function(e){var t=Object(i.useRef)(),n=Object(i.useRef)(),a=Object(i.useState)(null),r=Object(I.a)(a,2),c=r[0],d=r[1],s=Object(i.useRef)({height:null,movementY:null,previousTouchY:null,moved:!1});return o.a.createElement("div",{id:"controls"},o.a.createElement("img",{id:"logo",width:120,height:87.9375,src:"/logo-transparent.png"}),o.a.createElement("div",{id:"actions-menu"},o.a.createElement(H,{actions:[{icon:o.a.createElement("div",{onClick:function(){return d(o.a.createElement(q,{onClose:function(){return d(null)}}))}},o.a.createElement("i",{style:{fontSize:18},className:"fas fa-qrcode"})),name:"QR Scan"},{icon:o.a.createElement(Y.a,{onClick:function(){document.fullscreenElement?document.exitFullscreen():window.document.body.requestFullscreen().catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}}),name:"Full Screen"}]}),o.a.createElement("div",{id:"descriptive-data-container",ref:function(e){return n.current=e}},o.a.createElement(B.a,{id:"slider-helper",onMouseDown:G(n,t,s),onTouchStart:G(n,t,s),ref:function(e){return t.current=e}}),o.a.createElement("div",{id:"slider"}),e.descriptiveData?o.a.createElement("div",{id:"descriptive-data",dangerouslySetInnerHTML:{__html:e.descriptiveData}}):o.a.createElement("div",{id:"descriptive-data",style:{overflowY:"auto"}},o.a.createElement("i",{className:"mm-icons far fa-comment-dots"}),o.a.createElement("p",null,"Please select an object to reveal descriptive data"))),c&&o.a.createElement(P,{data:c,onClose:function(){d(null)}})))})),Q=n(72),V=n(137),J=Object(Q.a)({palette:{primary:{main:"#b34f0b"},secondary:{main:"#323228"}}});var K=function(){return o.a.createElement(V.a,{theme:J},o.a.createElement("div",{className:"App"},o.a.createElement(L,{context:k}),o.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(24),$=n(70),ee=n(71),te={currentAction:"immerse",descriptiveData:null},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DESCRIPTIVE_DATA":var n=t.descriptiveData;return Object.assign({},e,{descriptiveData:n});default:return e}};window.mergin_mode={modelLayer:[],vectors:[],plane:{},sky:{},mixers:[],camera:{},controls:{},scene:{},renderer:{},pointer:{},partials:{},loaders:{},selected:{object:null,material:null},onWindowResize:function(){}};var ie=Object(Z.c)({api:ne}),oe=document.getElementById("root"),ae=Object($.createLogger)({}),re=Object(Z.d)(ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(Z.a)(ee.a,ae));r.a.render(o.a.createElement(m.a,{store:re},o.a.createElement(K,null)),oe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,n){e.exports=n(102)},86:function(e,t,n){},88:function(e,t,n){},94:function(e,t,n){"use strict";(function(e){n(16),n(0),n(106),e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent)}).call(this,n(95))}},[[81,1,2]]]);
//# sourceMappingURL=main.b90b5fa6.chunk.js.map