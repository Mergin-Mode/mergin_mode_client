(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),a=t(8),r=t.n(a),c=(t(86),t(87),t(88),t(29)),d=t.n(c),s=t(43),l=t(51),m=t(28),u=t(21),p=t(44),f=t(1),w=t(63),h=t(64),v=t(54),g=t(53),b=function(e,n,t,i){return{Xb:e+t*Math.sin(i/63.6619772367581),Yb:n+t*Math.cos(i/63.6619772367581)}},x=function(e,n,t){var i=new f.Vector3(e.x,e.y+t,e.z);return((new f.Raycaster(i,new f.Vector3(0,-1,0)).intersectObject(n,!0)[0]||{}).point||{}).y||0},y=function(e,n){var t=Number(n.object.position.x.toFixed(4)),i=Number(n.object.position.z.toFixed(4)),o=n.animations[n.runtimeInfo.animationIndex];if(n.runtimeInfo.duration+=e,o.duration){if(n.runtimeInfo.duration>=o.duration/1e3)if(n.runtimeInfo.duration=0,n.animations.length-1>n.runtimeInfo.animationIndex){n.runtimeInfo.animationIndex++,n.runtimeInfo.pathIndex=0;var a=new f.AnimationMixer(n.object);a.clipAction(n.object.animations.filter((function(e){return e.name==n.animations[n.runtimeInfo.animationIndex].name}))[0]).setDuration(1).play(),n.runtimeInfo.mixer=a}else{n.runtimeInfo.animationIndex=0,n.runtimeInfo.pathIndex=0;var r=new f.AnimationMixer(n.object);r.clipAction(n.object.animations.filter((function(e){return e.name==n.animations[n.runtimeInfo.animationIndex].name}))[0]).setDuration(1).play(),n.runtimeInfo.mixer=r}return!1}var c=o.path[n.runtimeInfo.pathIndex],d=Number(c[0].toFixed(4)),s=Number(c[2].toFixed(4)),l=e*o.speed/60/60*1e3,m=o.path[n.runtimeInfo.pathIndex-1]?o.path[n.runtimeInfo.pathIndex-1]:o.path[n.runtimeInfo.pathIndex],u=Number(function(e,n,t,i){var o,a=Math.abs(t-e),r=Math.abs(i-n),c=Math.sqrt(Math.pow(a,2)+Math.pow(r,2)),d=t-e,s=i-n,l=63.6619772367581*Math.atan(a/r);return d>0&&s>0?o=l:d>0&&s<0?o=200-l:d<0&&s<0?o=200+l:d<0&&s>0?o=400-l:0===d&&s>0?o=0:0===d&&s<0?o=200:d>0&&0===s?o=100:d<0&&0===s?o=300:0===d&&0===s&&(o=0),{Gab:o.toFixed(4),Sab:c.toFixed(4)}}(m[0],m[2],d,s).Gab);if(u<=100&&t>=d&&i>=s||u>100&&u<=200&&t>=d&&i<=s||u>200&&u<=300&&t<=d&&i<=s||u>300&&t<=d&&i>=s){if(o.path.length-1>n.runtimeInfo.pathIndex)n.runtimeInfo.pathIndex++,n.runtimeInfo.duration=0;else if(n.animations.length-1>n.runtimeInfo.animationIndex){n.runtimeInfo.animationIndex++,n.runtimeInfo.pathIndex=0,n.runtimeInfo.duration=0;var p=new f.AnimationMixer(n.object);p.clipAction(n.object.animations.filter((function(e){return e.name==n.animations[n.runtimeInfo.animationIndex].name}))[0]).setDuration(1).play(),n.runtimeInfo.mixer=p}else{n.runtimeInfo.animationIndex=0,n.runtimeInfo.pathIndex=0,n.runtimeInfo.duration=0;var w=new f.AnimationMixer(n.object);w.clipAction(n.object.animations.filter((function(e){return e.name==n.animations[n.runtimeInfo.animationIndex].name}))[0]).setDuration(1).play(),n.runtimeInfo.mixer=w}var h=n.animations[n.runtimeInfo.animationIndex].path[n.runtimeInfo.pathIndex-1]?n.animations[n.runtimeInfo.animationIndex].path[n.runtimeInfo.pathIndex-1]:n.animations[n.runtimeInfo.animationIndex].path[n.runtimeInfo.pathIndex],v=x({x:h[0],z:h[1],y:h[2]},window.mergin_mode.plane,2);return{position:[h[0],v,h[2]]}}var g=b(t,i,l,u),y=x({x:g.Xb,z:g.Yb,y:n.object.position.y},window.mergin_mode.plane,2),I=u?u/63.661977236758:0;return{position:[g.Xb,y,g.Yb],rotation:[n.rotation[0],n.rotation[1]+I,n.rotation[2]]}};Math.PI;function I(e,n,t,i,o,a,r,c,d,s){r.FBXLoader=v.a,r.GLTFLoader=g.a;var l=new f.Clock,m=document.getElementById("three-map");t=new f.Scene;var b=document.getElementsByTagName("video")[0],x=new f.VideoTexture(b);x.minFilter=f.LinearFilter,x.magFilter=f.LinearFilter,x.format=f.RGBFormat,t.background=x,(i=new f.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),i.setClearColor(0,0),i.setSize(m.clientWidth,m.clientHeight),m.appendChild(i.domElement),(e=new f.PerspectiveCamera(60,m.clientWidth/m.clientHeight,1,1e4)).position.set(18,1.7,-20),(n=function(){var e,n=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(n=!0),n}()?new h.a(e):new w.a(e,i.domElement)).enableDamping=!0,n.dampingFactor=.05,n.screenSpacePanning=!1,n.minDistance=1,n.maxDistance=1e3,n.rotateSpeed=.8,n.panSpeed=.8,n.zoomSpeed=.8;var I=new f.PlaneBufferGeometry(100,100,99,99);!function(e){for(var n=e.getAttribute("position"),t=n.array,i=2,o=0;i<t.length;i+=3,o++)t[i]=0;n.needsUpdate=!0,e.computeVertexNormals()}(I);var E=new f.MeshPhongMaterial({wireframe:!0,color:"#222",side:f.DoubleSide});E.flatShading=!0;var j=new f.Mesh(I,E);j.position.set(0,0,0),j.castShadow=!1,j.receiveShadow=!1,j.geometry.rotateX(Math.PI/2),t.add(j);var _=new f.GridHelper(1e4,1e3);t.add(_);var k=new f.AmbientLight(4210752,3);k.channel=123,t.add(k),o=new f.Mesh(new f.SphereGeometry(.5,32,32),new f.MeshBasicMaterial({color:"red"}));var S=new f.Mesh(new f.SphereGeometry(150,32,32),new f.MeshBasicMaterial({opacity:0,transparent:!0,alphaTest:.05,side:f.DoubleSide}));t.add(S);var O=new f.Raycaster,M=new f.Vector2,D=function e(n){return!(!n||!window.mergin_mode.world)&&(-1!==window.mergin_mode.world.map((function(e){return e.id})).indexOf(n.uuid)?n:e(n.parent))};function L(n){window.mergin_mode.selected.object&&(t.remove(window.mergin_mode.selected.objectHelper),window.mergin_mode.selected.object=null,window.mergin_mode.selected.material=null);var o=i.domElement.getBoundingClientRect();M.x=((n.clientX||n.changedTouches[0].clientX)-o.left)/o.width*2-1,M.y=-((n.clientY||n.changedTouches[0].clientY)-o.top)/o.height*2+1,O.setFromCamera(M,e);var a,r,c=O.intersectObjects(t.children,!0),d=Object(p.a)(c);try{for(d.s();!(r=d.n()).done;){var l=r.value;if(a=D(null===l||void 0===l?void 0:l.object))break}}catch(m){d.e(m)}finally{d.f()}if(!a)return s(null),!1;new f.MeshPhongMaterial({color:"#b34f0b",side:f.DoubleSide});window.mergin_mode.selected.object=a,window.mergin_mode.selected.objectHelper=new f.BoxHelper(a),window.mergin_mode.selected.objectHelper.material.color.set(16777215),t.add(window.mergin_mode.selected.objectHelper),t.add(window.mergin_mode.selected.objectHelper),s(a.uuid)}function T(){e.aspect=m.clientWidth/m.clientHeight,e.updateProjectionMatrix(),i.setSize(m.clientWidth,m.clientHeight)}return function o(){setTimeout((function(){var a;requestAnimationFrame(o),!1!==(null===(a=window.mergin_mode.scene)||void 0===a?void 0:a.visible)&&(n.update(),function(){i.render(t,e);var n=l.getDelta();window.mergin_mode.world.forEach((function(e){e.runtimeInfo&&e.runtimeInfo.mixer&&e.runtimeInfo.mixer.update(n)})),window.mergin_mode.world.forEach((function(e){if(e.animations&&e.object){var t=y(n,e);if(t){var i,o;if(t.position)(i=e.object.position).set.apply(i,Object(u.a)(t.position));if(t.rotation)(o=e.object.rotation).set.apply(o,Object(u.a)(t.rotation))}}})),(window.mergin_mode.selected||{}).objectHelper&&window.mergin_mode.selected.objectHelper.update()}())}),60)}(),window.addEventListener("resize",T,!1),document.getElementById("three-map").addEventListener("click",L),document.getElementById("three-map").addEventListener("touchend",L,!1),{plane:j,camera:e,controls:n,scene:t,renderer:i,pointer:o,partials:{plane:j,pointer:o,sky:S,gridHelper:_},loaders:r,onWindowResize:T}}g.a.prototype.load2=function(e,n){var t=this,i=e[0],o=new FileReader;o.onload=function(e){2!==e.target.readyState&&0!==e.target.status||t.parse(e.target.result||e.target.responseText,"",n)},o.readAsArrayBuffer(i)},v.a.prototype.load2=function(e,n){var t=this,i=e[0],o=new FileReader;o.onload=function(e){if(2===e.target.readyState||0===e.target.status){var i=t.parse(e.target.result||e.target.responseText);n&&n(i)}},o.readAsArrayBuffer(i)};var E=t(16),j=(t(103),t(65)),_=function(e,n,t,i,o,a){var r=e[0],c=(r.name,r.size,r.url),d=window.mergin_mode,s=(d.scene,new d.loaders.GLTFLoader),l=new j.a;return s.setDRACOLoader(l),new Promise((function(e,r){s.load(c,(function(r){var c,d,s;(c=r.scene.position).set.apply(c,Object(u.a)(n)),(d=r.scene.scale).set.apply(d,Object(u.a)(i)),(s=r.scene.rotation).set.apply(s,Object(u.a)(t)),r.scene.animations=r.animations,a&&new f.MeshPhongMaterial({color:0,blending:f[a]}),r.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,a&&(e.material.blending=f[a]))})),e({referenceIndex:o,uuid:r.scene.uuid,object:r.scene})}),(function(){}),(function(e){r(e)}))}))},k=[{type:"model",url:"/white-tower.gltf",blending:"AdditiveBlending",position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],description:'<iframe \n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="https://en.wikipedia.org/wiki/White_Tower_of_Thessaloniki"></iframe>'},{type:"model",url:"/tree-green.fbx",position:[0,0,20],rotation:[0,0,0],scale:[.1,.1,.1],description:'<iframe \n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="https://en.wikipedia.org/wiki/Tree"></iframe>'},{type:"model",url:"/Soldier.glb",position:[0,0,10],rotation:[0,Math.PI,0],scale:[1,1,1],animations:[{name:"Idle",duration:5e3,path:[[0,0,10]]},{name:"Run",path:[[0,0,10],[10,0,10],[10,0,-20],[-20,0,-20],[-20,0,10],[10,0,10],[0,0,10]],speed:16,speedUnit:"km/h"},{name:"Run",path:[[0,0,10],[10,0,10],[10,0,-20],[-20,0,-20],[-20,0,10],[10,0,10],[0,0,10]],speed:16,speedUnit:"km/h"}],description:'<iframe \n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="https://en.wikipedia.org/wiki/Alexander_the_Great"></iframe>'}],S={gltf:_,glb:_,fbx:function(e,n,t,i,o,a){var r=e[0],c=(r.name,r.size,r.url),d=window.mergin_mode,s=(d.scene,new d.loaders.FBXLoader);return new Promise((function(e,r){s.load(c,(function(r){var c,d,s;r.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,a&&(e.material.blending=f[a],e.material.needsUpdate=!0))})),(c=r.position).set.apply(c,Object(u.a)(n)),(d=r.scale).set.apply(d,Object(u.a)(i)),(s=r.rotation).set.apply(s,Object(u.a)(t)),e({referenceIndex:o,uuid:r.uuid,object:r})}),(function(){}),(function(e){r(e)}))}))}},O=Object(s.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(e){return e.split(/[#?]/)[0].split(".").pop().trim()},function(e){var t=[];window.mergin_mode.world=[];var i,o=Object(p.a)(e.entries());try{for(o.s();!(i=o.n()).done;){var a=Object(E.a)(i.value,2),r=a[0],c=a[1];"model"===c.type&&(t.push(S[n(c.url)]([{url:c.url}],c.position,c.rotation,c.scale,r,c.blending)),window.mergin_mode.world.push(c))}}catch(d){o.e(d)}finally{o.f()}return Promise.all(t).then((function(e){e.forEach((function(e){if(window.mergin_mode.world[e.referenceIndex].id=e.uuid,window.mergin_mode.world[e.referenceIndex].object=e.object,window.mergin_mode.scene.add(e.object),window.mergin_mode.world[e.referenceIndex].animations){var n=new f.AnimationMixer(e.object);n.clipAction(window.mergin_mode.world[e.referenceIndex].object.animations.filter((function(n){return n.name==window.mergin_mode.world[e.referenceIndex].animations[0].name}))[0]).setDuration(1).play(),window.mergin_mode.world[e.referenceIndex].runtimeInfo={animationIndex:0,pathIndex:0,duration:0,mixer:n}}}))})).catch((function(e){console.error(e)}))}(k);case 3:case"end":return e.stop()}}),e)}))),M=Object(m.b)((function(e){return{api:e.api}}),(function(e){return{setDescriptiveData:function(n){return e({type:"SET_DESCRIPTIVE_DATA",descriptiveData:n})}}}))((function(e){return Object(i.useEffect)((function(){var n;if(!(null===(n=navigator.mediaDevices)||void 0===n?void 0:n.getUserMedia))return!1;navigator.mediaDevices.getUserMedia({video:{width:1280,height:720,facingMode:"environment"}}).then((function(e){var n=document.getElementById("video");n.srcObject=e,n.play()}));var t=window.mergin_mode,i=(t.mixers,t.camera),o=t.controls,a=t.scene,r=t.renderer,c=t.pointer,m=(t.partials,t.loaders),u=(document.getElementById("three-map"),I(i,o,a,r,c,0,m,0,0,(function(n){var t=n?window.mergin_mode.world.filter((function(e){return e.id==n}))[0].description:null;window["descriptive-data-container"].classList.add("transition"),window["descriptive-data-container"].style.height=t?"33%":"0%",setTimeout((function(){window["descriptive-data-container"].classList.remove("transition")}),1e3),e.setDescriptiveData(t)})));window.mergin_mode=Object(l.a)(Object(l.a)({},window.mergin_mode),u),Object(s.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(e.context);case 2:case"end":return n.stop()}}),n)})))()}),[]),o.a.createElement("div",{id:"world"},o.a.createElement("video",{id:"video",style:{display:"none"},autoPlay:!0,playsInline:!0}),o.a.createElement("div",{id:"three-map",style:{position:"absolute",width:"100%",height:"100%"}}))})),D=t(4),L=t(131),T=t(142),A=t(140),F=t(139),z=t(141),C=function(e){var n=Object(L.a)((function(e){return{root:Object(D.a)({pointerEvents:"none",height:380,transform:"translateZ(0px)",flexGrow:1,flex:1,zIndex:10,width:"100%"},"height","100%"),speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2),"& .MuiSpeedDialAction-staticTooltip .MuiSpeedDialAction-staticTooltipLabel":{whiteSpace:"nowrap"},"& .MuiButtonBase-root.MuiFab-root.MuiSpeedDial-fab.MuiFab-primary":{width:48,height:48,"& .MuiFab-label":{display:"initial"},"&:focus":{outline:"none"}}}}}))(),t=o.a.useState(!1),i=Object(E.a)(t,2),a=i[0],r=i[1],c=function(){r(!1)};return o.a.createElement("div",{className:n.root},o.a.createElement(T.a,{open:a}),o.a.createElement(A.a,{ariaLabel:"Action Tooltip",className:n.speedDial,icon:o.a.createElement(z.a,null),onClose:c,onOpen:function(){r(!0)},open:a},e.actions.map((function(e){return o.a.createElement(F.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0,onClick:c})}))))},H=t(138),R=Object(L.a)((function(e){return{paper:{position:"absolute",fontFamily:"Ubuntu",width:"98%",height:"98%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),borderRadius:20,display:"flex",flexFlow:"column"}}})),P=function(e){var n=R(),t=o.a.useState(!1),i=Object(E.a)(t,2),a=(i[0],i[1],o.a.createElement("div",{className:n.paper},e.data));return o.a.createElement(H.a,{open:!0,onClose:e.onClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},a)},B=(t(94),t(69)),N=t.n(B),Y=t(136),G=t(67),W=t.n(G),X=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:25}},o.a.createElement("i",{style:{fontSize:70},className:"fas fa-qrcode"}),o.a.createElement("h2",{style:{marginLeft:24,fontWeight:900,textTransform:"uppercase",color:"#606059",letterSpacing:5},id:"simple-modal-title"},"QR Code Scanner")),o.a.createElement("p",{id:"simple-modal-description",style:{flex:1}},o.a.createElement("div",{style:{height:"calc(100% - 30px)",position:"relative"}},o.a.createElement("div",{className:"scan-tip"},o.a.createElement(W.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){if(e){var n=JSON.parse(e);window.mergin_mode.camera.position.set(n.x,n.y,n.z),window.mergin_mode.controls.alphaOffset=n.heading/180*Math.PI,window.mergin_mode.controls.update()}},style:{width:"100%"}}))),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(Y.a,{style:{fontSize:"18px",color:"#313129",fontWeight:600},onClick:e.onClose},"Close"))))},q=function(e,n,t){return function(i){n.current.style.height="100%";var o=function(t){e.current.classList.add("transition"),.33==(e.current.offsetHeight/window.innerHeight).toFixed(2)?e.current.style.height="0%":e.current.style.height="33%",window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",r),window.removeEventListener("touchend",r),setTimeout((function(){e.current.classList.remove("transition"),n.current.style.height="48px"}),500)};t.current={height:null,movementY:null,previousTouchY:null,previousHeight:e.current.offsetHeight};var a=function(n){t.current.moved=!0,"undefined"===typeof n.movementY?(t.current.movementY=n.touches[0].pageY-(t.current.previousTouchY||n.touches[0].pageY),t.current.previousTouchY=n.touches[0].pageY):t.current.movementY=n.movementY,t.current.height=e.current.offsetHeight-t.current.movementY,e.current.style.height="".concat(t.current.height,"px")};window.addEventListener("mousemove",a),window.addEventListener("touchmove",a);var r=function i(){if(!t.current.moved)return o();e.current.classList.add("transition");var r=t.current.previousHeight-e.current.offsetHeight,c=(e.current.offsetHeight/window.innerHeight).toFixed(2);Number(c)<=.33?t.current.height=r>=0?"0%":"33%":t.current.height=r>=0?"33%":"100%",e.current.style.height="".concat(t.current.height),setTimeout((function(){e.current.classList.remove("transition"),n.current.style.height="48px"}),500),window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",i),window.removeEventListener("touchend",i)};window.addEventListener("mouseup",r),window.addEventListener("touchend",r)}},U=Object(m.b)((function(e){return{descriptiveData:e.api.descriptiveData}}),(function(e){return{}}))((function(e){var n=Object(i.useRef)(),t=Object(i.useRef)(),a=Object(i.useState)(null),r=Object(E.a)(a,2),c=r[0],d=r[1],s=Object(i.useRef)({height:null,movementY:null,previousTouchY:null,moved:!1});return o.a.createElement("div",{id:"controls"},o.a.createElement("img",{id:"logo",width:120,height:87.9375,src:"/logo-transparent.png"}),o.a.createElement("div",{id:"actions-menu"},o.a.createElement(C,{actions:[{icon:o.a.createElement("div",{onClick:function(){return d(o.a.createElement(X,{onClose:function(){return d(null)}}))}},o.a.createElement("i",{style:{fontSize:18},className:"fas fa-qrcode"})),name:"QR Scan"},{icon:o.a.createElement(N.a,{onClick:function(){document.fullscreenElement?document.exitFullscreen():window.document.body.requestFullscreen().catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}}),name:"Full Screen"}]}),o.a.createElement("div",{id:"descriptive-data-container",ref:function(e){return t.current=e}},o.a.createElement(Y.a,{id:"slider-helper",onMouseDown:q(t,n,s),onTouchStart:q(t,n,s),ref:function(e){return n.current=e}}),o.a.createElement("div",{id:"slider"}),e.descriptiveData?o.a.createElement("div",{id:"descriptive-data",dangerouslySetInnerHTML:{__html:e.descriptiveData}}):o.a.createElement("div",{id:"descriptive-data",style:{overflowY:"auto"}},o.a.createElement("i",{className:"mm-icons far fa-comment-dots"}),o.a.createElement("p",null,"Please select an object to reveal descriptive data"))),c&&o.a.createElement(P,{data:c,onClose:function(){d(null)}})))})),V=t(72),J=t(137),Q=Object(V.a)({palette:{primary:{main:"#b34f0b"},secondary:{main:"#323228"}}});var Z=function(){return o.a.createElement(J.a,{theme:Q},o.a.createElement("div",{className:"App"},o.a.createElement(M,{context:k}),o.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=t(24),K=t(70),ee=t(71),ne={currentAction:"immerse",descriptiveData:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_DESCRIPTIVE_DATA":var t=n.descriptiveData;return Object.assign({},e,{descriptiveData:t});default:return e}};window.mergin_mode={modelLayer:[],vectors:[],plane:{},sky:{},mixers:[],camera:{},controls:{},scene:{},renderer:{},pointer:{},partials:{},loaders:{},selected:{object:null,material:null},onWindowResize:function(){}};var ie=Object($.c)({api:te}),oe=document.getElementById("root"),ae=Object(K.createLogger)({}),re=Object($.d)(ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object($.a)(ee.a,ae));r.a.render(o.a.createElement(m.a,{store:re},o.a.createElement(Z,null)),oe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,n,t){e.exports=t(102)},86:function(e,n,t){},88:function(e,n,t){},94:function(e,n,t){"use strict";(function(e){t(16),t(0),t(106),e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent)}).call(this,t(95))}},[[81,1,2]]]);
//# sourceMappingURL=main.9aada14b.chunk.js.map