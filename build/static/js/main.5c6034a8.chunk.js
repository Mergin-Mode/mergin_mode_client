(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(8),r=n.n(a),c=(n(85),n(86),n(87),n(29)),d=n.n(c),s=n(43),l=n(51),m=n(28),u=n(21),p=n(44),w=n(1),f=n(63),h=n(64),v=n(54),g=n(53),b=function(e,t,n,i){return{Xb:e+n*Math.sin(i/63.6619772367581),Yb:t+n*Math.cos(i/63.6619772367581)}},x=function(e,t,n,i){var o,a=Math.abs(n-e),r=Math.abs(i-t),c=Math.sqrt(Math.pow(a,2)+Math.pow(r,2)),d=n-e,s=i-t,l=63.6619772367581*Math.atan(a/r);return d>0&&s>0?o=l:d>0&&s<0?o=200-l:d<0&&s<0?o=200+l:d<0&&s>0?o=400-l:0===d&&s>0?o=0:0===d&&s<0?o=200:d>0&&0===s?o=100:d<0&&0===s?o=300:0===d&&0===s&&(o=0),{Gab:o.toFixed(4),Sab:c.toFixed(4)}},y=function(e,t,n){var i=new w.Vector3(e.x,e.y+n,e.z);return((new w.Raycaster(i,new w.Vector3(0,-1,0)).intersectObjects(t.children,!0)[0]||{}).point||{}).y||0},E=function(e,t){function n(){t.style.textDecoration="line-through ",t.style.pointerEvents="none",t.onclick=null,t.style.textDecoration="line-through",t.style.pointerEvents="none"}if("xr"in navigator)return navigator.xr.isSessionSupported("immersive-vr").then((function(i){i?function(){var n=null;function i(t){t.addEventListener("end",o),e.xr.setSession(t),n=t}function o(){n.removeEventListener("end",o),t.textContent="ENTER VR",n=null}t.onclick=function(){if(null===n){navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]}).then(i)}else n.end()}}():n()})),t;var i=document.createElement("a");return i.href="https://immersiveweb.dev/",!1===window.isSecureContext?i.innerHTML="WEBXR NEEDS HTTPS":i.innerHTML="WEBXR NOT AVAILABLE",i.style.left="calc(50% - 90px)",i.style.width="180px",i.style.textDecoration="none",i},j=(Math.PI,function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t});function I(e,t,n,i,o,a,r,c,d,s){r.FBXLoader=v.a,r.GLTFLoader=g.a;var l=new w.Clock,m=document.getElementById("three-map");n=new w.Scene;var I=document.getElementsByTagName("video")[0],_=new w.VideoTexture(I);_.minFilter=w.LinearFilter,_.magFilter=w.LinearFilter,_.format=w.RGBFormat,(i=new w.WebGLRenderer({antialias:!0})).xr.enabled=!0,i.setPixelRatio(window.devicePixelRatio),i.setSize(m.clientWidth,m.clientHeight),i.sortObjects=!1,m.appendChild(i.domElement),e=new w.PerspectiveCamera(60,m.clientWidth/m.clientHeight,1,1e4),window.mergin_mode.realities={virtual:function(){i.setClearColor("#4285f4",1),n.background=void 0,j()?(n.position.set(15.08,-1.7,-52.64),e.position.set(0,0,0)):(n.position.set(0,0,0),e.position.set(-15.08,1.7,52.64))},augmented:function(){n.background=_,i.setClearColor(0,0),n.position.set(15.08,-1.7,-52.64),e.position.set(0,0,0)},mixed:function(){n.background=_,i.setClearColor(0,0),n.position.set(15.08,-1.7,-52.64),e.position.set(0,0,0)}},window.mergin_mode.realities.virtual(),(t=j()?new h.a(e):new f.a(e,i.domElement)).enableDamping=!1,t.dampingFactor=.05,t.screenSpacePanning=!1,t.minDistance=1,t.maxDistance=1e3,t.rotateSpeed=.8,t.panSpeed=.8,t.zoomSpeed=.8;var S=new w.PlaneBufferGeometry(100,100,99,99);!function(e){for(var t=e.getAttribute("position"),n=t.array,i=2,o=0;i<n.length;i+=3,o++)n[i]=0;t.needsUpdate=!0,e.computeVertexNormals()}(S);var k=new w.MeshPhongMaterial({wireframe:!0,color:"#222",side:w.DoubleSide});k.flatShading=!0;var M=new w.Mesh(S,k);M.position.set(0,0,0),M.castShadow=!1,M.receiveShadow=!1,M.geometry.rotateX(Math.PI/2);var L=new w.GridHelper(1e4,1e3);n.add(L);var O=new w.AmbientLight(16777215,2);O.channel=123,n.add(O),o=new w.Mesh(new w.SphereGeometry(.5,32,32),new w.MeshBasicMaterial({color:"red"}));var D=new w.Mesh(new w.SphereGeometry(150,32,32),new w.MeshBasicMaterial({opacity:0,transparent:!0,alphaTest:.05,side:w.DoubleSide}));n.add(D);var T=new w.Raycaster,A=new w.Vector2,R=function e(t){return!(!t||!window.mergin_mode.world)&&(-1!==window.mergin_mode.world.map((function(e){return e.id})).indexOf(t.uuid)?t:e(t.parent))};function C(){e.aspect=m.clientWidth/m.clientHeight,e.updateProjectionMatrix(),i.setSize(m.clientWidth,m.clientHeight)}return i.setAnimationLoop((function(){t.update(),function(){if(i.render(n,e),!window.mergin_mode.world)return!0;var t=l.getDelta();window.mergin_mode.world.forEach((function(e){if(e.actions){var n,i=(null===(n=window.mergin_mode.selected.object)||void 0===n?void 0:n.uuid)==e.id?e.selectedRuntimeInfo:e.runtimeInfo;i&&i.mixer.update(t)}})),window.mergin_mode.world.forEach((function(e){var n,i;if((null===(n=e.actions)||void 0===n||null===(i=n.onLoad)||void 0===i?void 0:i.animations)&&e.object){var o,a,r=function(e,t){var n,i,o=Number(t.object.position.x.toFixed(4)),a=Number(t.object.position.z.toFixed(4)),r=(null===(n=window.mergin_mode.selected.object)||void 0===n?void 0:n.uuid)==t.id?t.actions.onSelect:t.actions.onLoad,c=(null===(i=window.mergin_mode.selected.object)||void 0===i?void 0:i.uuid)==t.id?t.selectedRuntimeInfo:t.runtimeInfo;if(t.actions.onSelect===r){var d=Number(x(t.object.position.x,t.object.position.z,window.mergin_mode.camera.position.x,window.mergin_mode.camera.position.z).Gab),s=d?d/63.661977236758:0;t.object.rotation.set(t.rotation[0],t.rotation[1]+s,t.rotation[2])}var l=r.animations[c.animationIndex];if(c.duration+=e,l.duration){if(c.duration>=l.duration/1e3)if(c.duration=0,r.animations.length-1>c.animationIndex){c.animationIndex++,c.pathIndex=0;var m=new w.AnimationMixer(t.object);m.clipAction(t.object.animations.filter((function(e){return e.name==r.animations[c.animationIndex].name}))[0]).setDuration(1).play(),c.mixer=m}else{c.animationIndex=0,c.pathIndex=0;var u=new w.AnimationMixer(t.object);u.clipAction(t.object.animations.filter((function(e){return e.name==r.animations[c.animationIndex].name}))[0]).setDuration(1).play(),c.mixer=u}return!1}var p=l.path[c.pathIndex],f=Number(p[0].toFixed(4)),h=Number(p[2].toFixed(4)),v=e*l.speed/60/60*1e3,g=l.path[c.pathIndex-1]?l.path[c.pathIndex-1]:l.path[c.pathIndex],E=Number(x(g[0],g[2],f,h).Gab);if(E<=100&&o>=f&&a>=h||E>100&&E<=200&&o>=f&&a<=h||E>200&&E<=300&&o<=f&&a<=h||E>300&&o<=f&&a>=h){if(l.path.length-1>c.pathIndex)c.pathIndex++,c.duration=0;else if(r.animations.length-1>c.animationIndex){c.animationIndex++,c.pathIndex=0,c.duration=0;var j=new w.AnimationMixer(t.object);j.clipAction(t.object.animations.filter((function(e){return e.name==r.animations[c.animationIndex].name}))[0]).setDuration(1).play(),c.mixer=j}else{c.animationIndex=0,c.pathIndex=0,c.duration=0;var I=new w.AnimationMixer(t.object);I.clipAction(t.object.animations.filter((function(e){return e.name==r.animations[c.animationIndex].name}))[0]).setDuration(1).play(),c.mixer=I}var _=r.animations[c.animationIndex].path[c.pathIndex-1]?r.animations[c.animationIndex].path[c.pathIndex-1]:r.animations[c.animationIndex].path[c.pathIndex];return y({x:_[0],z:_[1],y:_[2]},window.mergin_mode.world.filter((function(e){return 1==e.ground}))[0].object,3),{position:_}}var S=b(o,a,v,E),k=y({x:S.Xb,z:S.Yb,y:t.object.position.y},window.mergin_mode.world.filter((function(e){return 1==e.ground}))[0].object,3),M=E?E/63.661977236758:0;return{position:[S.Xb,k,S.Yb],rotation:[t.rotation[0],t.rotation[1]+M,t.rotation[2]]}}(t,e);if(r)r.position&&(o=e.object.position).set.apply(o,Object(u.a)(r.position)),r.rotation&&(a=e.object.rotation).set.apply(a,Object(u.a)(r.rotation))}})),window.mergin_mode.selected.object&&window.mergin_mode.selected.objectHelper.update()}()})),window.addEventListener("resize",C,!1),document.getElementById("three-map").addEventListener("mousedown",(function(){var t=function(){window.mergin_mode.listeners.mouseMoved=!0};document.getElementById("three-map").addEventListener("mousemove",t),document.getElementById("three-map").addEventListener("mouseup",(function o(a){window.mergin_mode.listeners.mouseMoved||function(t){if(window.mergin_mode.listeners.mouseMoved)return!0;window.mergin_mode.selected.object&&(n.remove(window.mergin_mode.selected.objectHelper),window.mergin_mode.selected.object=null,window.mergin_mode.selected.material=null);var o=i.domElement.getBoundingClientRect();A.x=((t.clientX||t.changedTouches[0].clientX)-o.left)/o.width*2-1,A.y=-((t.clientY||t.changedTouches[0].clientY)-o.top)/o.height*2+1,T.setFromCamera(A,e);var a,r,c=T.intersectObjects(n.children,!0),d=Object(p.a)(c);try{for(d.s();!(r=d.n()).done;){var l=r.value;if(a=R(null===l||void 0===l?void 0:l.object))if(!1!==window.mergin_mode.world.filter((function(e){return e.id==a.uuid}))[0].selectable)break}}catch(h){d.e(h)}finally{d.f()}if(!a)return s(null),!1;new w.MeshPhongMaterial({color:"#b34f0b",side:w.DoubleSide}),window.mergin_mode.selected.object=a,window.mergin_mode.selected.objectHelper=new w.BoxHelper(a),window.mergin_mode.selected.objectHelper.material.color.set(16777215),n.add(window.mergin_mode.selected.objectHelper),n.add(window.mergin_mode.selected.objectHelper);var m=window.mergin_mode.world.filter((function(e){return e.id==a.uuid}))[0],u=m.selectedRuntimeInfo;if(u){u.animationIndex=0,u.pathIndex=0,u.duration=0;var f=new w.AnimationMixer(a);f.clipAction(a.animations.filter((function(e){return e.name==m.actions.onSelect.animations[m.selectedRuntimeInfo.animationIndex].name}))[0]).setDuration(1).play(),u.mixer=f}s(a.uuid)}(a),window.mergin_mode.listeners.mouseMoved=!1,document.getElementById("three-map").removeEventListener("mouseup",o),document.getElementById("three-map").removeEventListener("mousemove",t)}))})),E(i,window.vrh),E(i,window.mrh),{plane:M,camera:e,controls:t,scene:n,renderer:i,pointer:o,partials:a,loaders:r,onWindowResize:C}}g.a.prototype.load2=function(e,t){var n=this,i=e[0],o=new FileReader;o.onload=function(e){2!==e.target.readyState&&0!==e.target.status||n.parse(e.target.result||e.target.responseText,"",t)},o.readAsArrayBuffer(i)},v.a.prototype.load2=function(e,t){var n=this,i=e[0],o=new FileReader;o.onload=function(e){if(2===e.target.readyState||0===e.target.status){var i=n.parse(e.target.result||e.target.responseText);t&&t(i)}},o.readAsArrayBuffer(i)};var _=n(16),S=(n(103),n(65)),k=function(e,t,n,i,o,a){var r=e[0],c=(r.name,r.size,r.url),d=window.mergin_mode,s=(d.scene,new d.loaders.GLTFLoader),l=new S.a;return s.setDRACOLoader(l),new Promise((function(e,r){s.load(c,(function(r){var c,d,s,l;(c=r.scene.position).set.apply(c,Object(u.a)(t)),(d=r.scene.scale).set.apply(d,Object(u.a)(i)),(s=r.scene.rotation).set.apply(s,Object(u.a)(n)),r.scene.animations=r.animations,a&&(l=new w.MeshPhongMaterial({color:0,blending:w[a]}),r.scene.renderOrder=999),r.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,a&&(e.material=l,e.renderOrder=999))})),e({referenceIndex:o,uuid:r.scene.uuid,object:r.scene})}),(function(){}),(function(e){r(e)}))}))},M={name:"White Tower Of Thessaloniki",description:"A simple overview of the area near the tower of thessaloniki.",content:[{type:"model",url:"/white-tower.gltf",blending:"AdditiveBlending",position:[0,0,0],rotation:[0,0,0],scale:[.8,.8,.8],actions:[],description:'<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="https://en.wikipedia.org/wiki/White_Tower_of_Thessaloniki"></iframe>'},{type:"model",ground:!0,selectable:!1,url:"/white-tower-area.gltf",position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],description:""},{type:"model",url:"/Soldier.glb",position:[0,.4,20],rotation:[0,Math.PI,0],scale:[.8,.8,.8],actions:{onLoad:{animations:[{name:"Idle",duration:5e3,path:[[-23.45,.12,25.13]]}]},onSelect:{animations:[{name:"Idle",duration:1/0,path:[[30,0,30]],lookAt:"camera"}]}},description:'<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat("",'/templates/soldier.html"></iframe>')},{type:"model",url:"/Soldier.glb",position:[-23.45,.12,25.13],rotation:[0,Math.PI,0],scale:[.8,.8,.8],actions:{onLoad:{animations:[{name:"Idle",duration:5e3,path:[[-23.45,.12,25.13]]},{name:"Walk",path:[[-23.45,.12,25.13],[-5.08,-.28,32.64],[18.89,-.45,28.14],[31.23,-.27,8.53],[32.32,.49,-15.25],[13.63,.99,-36.69],[-9.23,1.41,-27.81],[-20.42,1.41,-19.05],[-27.09,1.36,-9.68],[-32.47,1.28,.26],[-30.55,1.16,6.46],[-26.03,.26,21.47],[-23.45,.12,25.13]],speed:5,speedUnit:"km/h"},{name:"Run",path:[[-23.45,.12,25.13],[-5.08,-.28,32.64],[18.89,-.45,28.14],[31.23,-.27,8.53],[32.32,.49,-15.25],[13.63,.99,-36.69],[-9.23,1.41,-27.81],[-20.42,1.41,-19.05],[-27.09,1.36,-9.68],[-32.47,1.28,.26],[-30.55,1.16,6.46],[-26.03,.26,21.47],[-23.45,.12,25.13]],speed:10,speedUnit:"km/h"}]},onSelect:{animations:[{name:"Idle",duration:1/0,path:[[30,0,30]],lookAt:"camera"}]}},description:'<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat("",'/templates/soldier.html"></iframe>')}],meta:{authors:[{firstName:"Konstantinos",lastName:"Evanggelidis"},{firstName:"Theofilos",lastName:"Papadopoulos"}]}},L={gltf:k,glb:k,fbx:function(e,t,n,i,o,a){var r=e[0],c=(r.name,r.size,r.url),d=window.mergin_mode,s=(d.scene,new d.loaders.FBXLoader);return new Promise((function(e,r){s.load(c,(function(r){var c,d,s;r.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,a&&(e.material.blending=w[a],e.material.needsUpdate=!0))})),(c=r.position).set.apply(c,Object(u.a)(t)),(d=r.scale).set.apply(d,Object(u.a)(i)),(s=r.rotation).set.apply(s,Object(u.a)(n)),e({referenceIndex:o,uuid:r.uuid,object:r})}),(function(){}),(function(e){r(e)}))}))}},O=function(){var e=Object(s.a)(d.a.mark((function e(t,n){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=function(e){return e.split(/[#?]/)[0].split(".").pop().trim()},function(e){var t=window.mergin_mode,n=(t.renderer,t.scene,t.camera,[]);window.mergin_mode.world=[];var o,a=Object(p.a)(e.entries());try{for(a.s();!(o=a.n()).done;){var r=Object(_.a)(o.value,2),c=r[0],d=r[1];"model"===d.type&&(n.push(L[i(d.url)]([{url:d.url}],d.position,d.rotation,d.scale,c,d.blending)),window.mergin_mode.world.push(d))}}catch(s){a.e(s)}finally{a.f()}return Promise.all(n).then((function(e){e.forEach((function(e){window.mergin_mode.world[e.referenceIndex].id=e.uuid,window.mergin_mode.world[e.referenceIndex].object=e.object,window.mergin_mode.scene.add(e.object),e.object.traverse((function(e){e.isMesh&&(e.material.flatShading=!1,e.geometry.computeVertexNormals())}));var t=window.mergin_mode.world[e.referenceIndex].actions||{};if((t.onLoad||{}).animations){var n=new w.AnimationMixer(e.object);n.clipAction(window.mergin_mode.world[e.referenceIndex].object.animations.filter((function(e){return e.name==t.onLoad.animations[0].name}))[0]).setDuration(1).play(),window.mergin_mode.world[e.referenceIndex].runtimeInfo={animationIndex:0,pathIndex:0,duration:0,mixer:n}}if((t.onSelect||{}).animations){var i=new w.AnimationMixer(e.object);i.clipAction(window.mergin_mode.world[e.referenceIndex].object.animations.filter((function(e){return e.name==t.onSelect.animations[0].name}))[0]).setDuration(1).play(),window.mergin_mode.world[e.referenceIndex].selectedRuntimeInfo={animationIndex:0,pathIndex:0,duration:0,mixer:i}}}))})).catch((function(e){console.error(e)}))}(M.content);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=Object(m.b)((function(e){return{api:e.api}}),(function(e){return{setDescriptiveData:function(t){return e({type:"SET_DESCRIPTIVE_DATA",descriptiveData:t})}}}))((function(e){return Object(i.useEffect)((function(){var t;if(!(null===(t=navigator.mediaDevices)||void 0===t?void 0:t.getUserMedia))return!1;navigator.mediaDevices.getUserMedia({video:{width:1280,height:720,facingMode:"environment"}}).then((function(e){var t=document.getElementById("video");t.srcObject=e,t.play()}));var n=window.mergin_mode,i=(n.mixers,n.camera),o=n.controls,a=n.scene,r=n.renderer,c=n.pointer,m=n.partials,u=n.loaders,p=(document.getElementById("three-map"),I(i,o,a,r,c,m,u,0,0,(function(t){var n=t?window.mergin_mode.world.filter((function(e){return e.id==t}))[0].description:null;window["descriptive-data-container"].classList.add("transition"),window["descriptive-data-container"].style.height=n?"33%":"0%",setTimeout((function(){window["descriptive-data-container"].classList.remove("transition")}),1e3),e.setDescriptiveData(n)})));window.mergin_mode=Object(l.a)(Object(l.a)({},window.mergin_mode),p),Object(s.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e.context);case 2:case"end":return t.stop()}}),t)})))()}),[]),o.a.createElement("div",{id:"world"},o.a.createElement("video",{id:"video",style:{display:"none"},autoPlay:!0,playsInline:!0}),o.a.createElement("div",{id:"three-map",style:{position:"absolute",width:"100%",height:"100%"}}))})),T=n(4),A=n(131),R=n(142),C=n(140),F=n(139),N=n(141),z=function(e){var t=Object(A.a)((function(e){return{root:Object(T.a)({pointerEvents:"none",height:380,transform:"translateZ(0px)",flexGrow:1,flex:1,zIndex:10,width:"100%"},"height","100%"),speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2),"& .MuiSpeedDialAction-staticTooltip .MuiSpeedDialAction-staticTooltipLabel":{whiteSpace:"nowrap"},"& .MuiButtonBase-root.MuiFab-root.MuiSpeedDial-fab.MuiFab-primary":{width:48,height:48,"& .MuiFab-label":{display:"initial"},"&:focus":{outline:"none"}}}}}))(),n=o.a.useState(!1),i=Object(_.a)(n,2),a=i[0],r=i[1],c=function(){r(!1)};return o.a.createElement("div",{className:t.root},o.a.createElement(R.a,{open:a}),o.a.createElement(C.a,{ariaLabel:"Action Tooltip",className:t.speedDial,icon:o.a.createElement(N.a,null),onClose:c,onOpen:function(){r(!0)},open:a},e.actions.map((function(e){return o.a.createElement(F.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0,onClick:c})}))))},H=n(138),B=Object(A.a)((function(e){return{paper:{position:"absolute",fontFamily:"Ubuntu",width:"98%",height:"98%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),borderRadius:20,display:"flex",flexFlow:"column"}}})),P=function(e){var t=B(),n=o.a.useState(!1),i=Object(_.a)(n,2),a=(i[0],i[1],o.a.createElement("div",{className:t.paper},e.data));return o.a.createElement(H.a,{open:!0,onClose:e.onClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},a)},Y=(n(93),n(69)),V=n.n(Y),W=n(136),X=n(67),G=n.n(X),q=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:25}},o.a.createElement("i",{style:{fontSize:70},className:"fas fa-qrcode"}),o.a.createElement("h2",{style:{marginLeft:24,fontWeight:900,textTransform:"uppercase",color:"#606059",letterSpacing:5},id:"simple-modal-title"},"QR Code Scanner")),o.a.createElement("p",{id:"simple-modal-description",style:{flex:1}},o.a.createElement("div",{style:{height:"calc(100% - 30px)",position:"relative"}},o.a.createElement("div",{className:"scan-tip"},o.a.createElement(G.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){if(e){var t=JSON.parse(e);window.mergin_mode.camera.position.set(t.x,t.y,t.z),window.mergin_mode.controls.alphaOffset=t.heading/180*Math.PI,window.mergin_mode.controls.update()}},style:{width:"100%"}}))),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(W.a,{style:{fontSize:"18px",color:"#313129",fontWeight:600},onClick:e.onClose},"Close"))))},U=function(e,t,n){return function(i){t.current.style.height="100%";var o=function(n){e.current.classList.add("transition"),.33==(e.current.offsetHeight/window.innerHeight).toFixed(2)?e.current.style.height="0%":e.current.style.height="33%",window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",r),window.removeEventListener("touchend",r),setTimeout((function(){e.current.classList.remove("transition"),t.current.style.height="48px"}),500)};n.current={height:null,movementY:null,previousTouchY:null,previousHeight:e.current.offsetHeight};var a=function(t){n.current.moved=!0,"undefined"===typeof t.movementY?(n.current.movementY=t.touches[0].pageY-(n.current.previousTouchY||t.touches[0].pageY),n.current.previousTouchY=t.touches[0].pageY):n.current.movementY=t.movementY,n.current.height=e.current.offsetHeight-n.current.movementY,e.current.style.height="".concat(n.current.height,"px")};window.addEventListener("mousemove",a),window.addEventListener("touchmove",a);var r=function i(){if(!n.current.moved)return o();e.current.classList.add("transition");var r=n.current.previousHeight-e.current.offsetHeight,c=(e.current.offsetHeight/window.innerHeight).toFixed(2);Number(c)<=.33?n.current.height=r>=0?"0%":"33%":n.current.height=r>=0?"33%":"100%",e.current.style.height="".concat(n.current.height),setTimeout((function(){e.current.classList.remove("transition"),t.current.style.height="48px"}),500),window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",i),window.removeEventListener("touchend",i)};window.addEventListener("mouseup",r),window.addEventListener("touchend",r)}},J=Object(m.b)((function(e){return{descriptiveData:e.api.descriptiveData}}),(function(e){return{}}))((function(e){var t=Object(i.useRef)(),n=Object(i.useRef)(),a=Object(i.useState)(null),r=Object(_.a)(a,2),c=r[0],d=r[1],s=Object(i.useRef)({height:null,movementY:null,previousTouchY:null,moved:!1});return o.a.createElement("div",{id:"controls"},o.a.createElement("img",{id:"logo",width:120,height:87.9375,src:"/logo-transparent.png"}),o.a.createElement("div",{id:"actions-menu"},o.a.createElement(z,{actions:[{icon:o.a.createElement("div",{onClick:function(){return d(o.a.createElement(q,{onClose:function(){return d(null)}}))}},o.a.createElement("i",{style:{fontSize:18},className:"fas fa-qrcode"})),name:"QR Scan"},{icon:o.a.createElement(V.a,{onClick:function(){document.fullscreenElement?document.exitFullscreen():window.document.body.requestFullscreen().catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}}),name:"Full Screen"},{icon:o.a.createElement("span",{onClick:function(){window.mergin_mode.realities.virtual()}},"VR"),name:"Virtual Reality"},{icon:o.a.createElement("span",{onClick:function(){window.mergin_mode.realities.mixed()}},"MR"),name:"Mixed Reality"},{icon:o.a.createElement("span",{onClick:function(){window.mergin_mode.realities.mixed()},id:"vrh"},"VRH"),name:"VR Headset"},{icon:o.a.createElement("span",{onClick:function(){window.mergin_mode.realities.mixed()},id:"mrh"},"MRH"),name:"MR Headset"}]}),o.a.createElement("div",{id:"available-worlds"}),o.a.createElement("div",{id:"descriptive-data-container",ref:function(e){return n.current=e}},o.a.createElement(W.a,{id:"slider-helper",onMouseDown:U(n,t,s),onTouchStart:U(n,t,s),ref:function(e){return t.current=e}}),o.a.createElement("div",{id:"slider"}),e.descriptiveData?o.a.createElement("div",{id:"descriptive-data",dangerouslySetInnerHTML:{__html:e.descriptiveData}}):o.a.createElement("div",{id:"descriptive-data",style:{overflowY:"auto"}},o.a.createElement("i",{className:"mm-icons far fa-comment-dots"}),o.a.createElement("p",null,"Please select an object to reveal descriptive data"))),c&&o.a.createElement(P,{data:c,onClose:function(){d(null)}})))})),Q=n(71),K=n(137),Z=Object(Q.a)({palette:{primary:{main:"#b34f0b"},secondary:{main:"#323228"}}});var $=function(){return o.a.createElement(K.a,{theme:Z},o.a.createElement("div",{className:"App"},o.a.createElement(D,{context:M.content}),o.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=n(25),te=n(70),ne=(n(101),{currentAction:"immerse",descriptiveData:null}),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DESCRIPTIVE_DATA":var n=t.descriptiveData;return Object.assign({},e,{descriptiveData:n});default:return e}};window.mergin_mode={modelLayer:[],vectors:[],plane:{},sky:{},mixers:[],camera:{},controls:{},scene:{},renderer:{},pointer:{},partials:{},loaders:{},selected:{object:null,material:null},listeners:{mouseMoved:!1},onWindowResize:function(){}};var oe=Object(ee.b)({api:ie}),ae=document.getElementById("root"),re=(Object(te.createLogger)({}),Object(ee.c)(oe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));r.a.render(o.a.createElement(m.a,{store:re},o.a.createElement($,null)),ae),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,n){e.exports=n(102)},85:function(e,t,n){},87:function(e,t,n){},93:function(e,t,n){"use strict";(function(e){n(16),n(0),n(106),e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent)}).call(this,n(94))}},[[80,1,2]]]);
//# sourceMappingURL=main.5c6034a8.chunk.js.map