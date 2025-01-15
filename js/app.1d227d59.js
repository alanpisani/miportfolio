(function(){var e={7164:function(e,t,n){"use strict";var r=n(5130),s=(n(8992),n(3949),n(6768)),a=n(4232);const o=["href","target"];var i=(0,s.pM)({__name:"NavBar",props:{href:{type:String,required:!1,default:"#"},target:{type:String,default:"_self"},customClass:{type:String,required:!1,default:""},menuItems:{type:Array,required:!0},customNavClass:{type:String,required:!1,default:""}},setup(e){const t=e;return(e,n)=>((0,s.uX)(),(0,s.CE)("nav",{class:(0,a.C4)(t.customNavClass)},[(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.menuItems,((t,n)=>((0,s.uX)(),(0,s.CE)("li",{key:n},[(0,s.Lk)("a",{href:t.href,target:t.target,class:(0,a.C4)(t.customClass)},[(0,s.RG)(e.$slots,"menu-item",{item:t},(()=>[(0,s.eW)((0,a.v_)(t.title),1)]))],10,o)])))),128))])],2))}}),u=n(1241);const c=(0,u.A)(i,[["__scopeId","data-v-cdf28712"]]);var l=c;const p={id:"contacto"},d=["src","alt"],g={key:1};var v=(0,s.pM)({__name:"FooterPortfolio",setup(e){const t=[{title:"instagram",href:"https://www.instagram.com/alan.pisani/",src:"instagram.svg",target:"_blank",customClass:""},{title:"linkedin",href:"https://www.linkedin.com/in/alan-pisani/",src:"linkedin.svg",target:"_blank",customClass:""},{title:"github",href:"https://github.com/alanpisani",src:"github.svg",target:"_blank",customClass:""}];return(e,r)=>((0,s.uX)(),(0,s.CE)("footer",p,[(0,s.bF)(l,{menuItems:t,customNavClass:"f-nav"},{"menu-item":(0,s.k6)((({item:e})=>[e.src?((0,s.uX)(),(0,s.CE)("img",{key:0,src:n(1232)(`./${e.src}`),alt:e.title},null,8,d)):((0,s.uX)(),(0,s.CE)("span",g,(0,a.v_)(e.title),1))])),_:1})]))}});const f=(0,u.A)(v,[["__scopeId","data-v-793110e4"]]);var m=f,h=n(144);const b=["href","target"];var y=(0,s.pM)({__name:"HamburgerNav",props:{href:{type:String,required:!1,default:"#"},target:{type:String,default:"_self"},customClass:{type:String,required:!1,default:""},menuItems:{type:Array,required:!0},customNavClass:{type:String,required:!1,default:""}},setup(e){const t=e,n=()=>{const e=document.getElementById("menu");e&&(e.checked=!1)};return(e,r)=>((0,s.uX)(),(0,s.CE)("nav",null,[r[1]||(r[1]=(0,s.Lk)("p",null,[(0,s.Lk)("span",{class:"first-letter"},"A"),(0,s.eW)("lan "),(0,s.Lk)("span",{class:"first-letter"},"P"),(0,s.eW)("isani")],-1)),(0,s.Lk)("div",null,[r[0]||(r[0]=(0,s.Fv)('<input type="checkbox" id="menu" data-v-352a7d4b><label for="menu" class="hamburguesa" data-v-352a7d4b><span class="barrita" data-v-352a7d4b></span><span class="barrita" data-v-352a7d4b></span><span class="barrita" data-v-352a7d4b></span></label>',2)),(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.menuItems,((t,r)=>((0,s.uX)(),(0,s.CE)("li",{key:r},[(0,s.Lk)("a",{href:t.href,target:t.target,class:(0,a.C4)(t.customClass),onClick:n},[(0,s.RG)(e.$slots,"menu-item",{item:t,class:"item-menu"},(()=>[(0,s.eW)((0,a.v_)(t.title),1)]))],10,b)])))),128))])])]))}});const k=(0,u.A)(y,[["__scopeId","data-v-352a7d4b"]]);var _=k,C=(0,s.pM)({__name:"HeaderPortfolio",setup(e){const t=[{title:"Sobre mi",href:"#sobre-mi",target:"#sobre-mi",customClass:"header-link",src:""},{title:"Conocimientos",href:"#lenguajes",target:"#lenguajes",customClass:"header-link",src:""},{title:"Proyectos",href:"#proyectos",target:"#proyectos",customClass:"header-link",src:""},{title:"Contacto",href:"#contacto",target:"#contacto",customClass:"header-link",src:""}],n=(0,h.KR)(window.innerWidth<=770);function r(){n.value=window.innerWidth<=770}return(0,s.sV)((()=>{window.addEventListener("resize",r)})),(0,s.hi)((()=>{window.removeEventListener("resize",r)})),(e,r)=>((0,s.uX)(),(0,s.CE)("header",null,[n.value?((0,s.uX)(),(0,s.Wv)(_,{key:1,menuItems:t})):((0,s.uX)(),(0,s.Wv)(l,{key:0,menuItems:t}))]))}});const w=(0,u.A)(C,[["__scopeId","data-v-2d047f4b"]]);var L=w;const E=["my-id"];var x=(0,s.pM)({__name:"MySection",setup(e){const t=(0,s.pM)({customId:{type:String,required:!1,default:""}});return(e,n)=>((0,s.uX)(),(0,s.CE)("div",{"my-id":(0,h.R1)(t).customId},[(0,s.RG)(e.$slots,"default")],8,E))}});const I=(0,u.A)(x,[["__scopeId","data-v-2c327910"]]);var S=I,A=(0,s.pM)({__name:"AboutMe",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(S,{"my-id":"sobre-mi"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.Lk)("h2",null,"Sobre mí",-1),(0,s.Lk)("p",null,"Actualmente me encuentro en el tercer año de la carrera de tecnicatura superior en análisis de sistemas. Tengo conocimientos tanto en front como en backend, pero mi fuerte son Java y Spring. Me encanta resolver problemas y crear soluciones eficientes.",-1)]))),_:1}))}});const M=(0,u.A)(A,[["__scopeId","data-v-386c50ae"]]);var j=M;const q={class:"slide"},F=["src"];var X=(0,s.pM)({__name:"MySlide",props:{route:{type:String,required:!0}},setup(e){const t=e;return(e,r)=>((0,s.uX)(),(0,s.CE)("div",q,[(0,s.Lk)("img",{src:n(1232)(`./${t.route}`),alt:""},null,8,F)]))}});const O=(0,u.A)(X,[["__scopeId","data-v-7ec1ea02"]]);var P=O;const W={class:"slider"},H={class:"slide-track"};var N=(0,s.pM)({__name:"MyKnownledge",setup(e){const t=[{route:"html5.svg"},{route:"css.svg"},{route:"javascript.svg"},{route:"java.svg"},{route:"spring.svg"},{route:"mysql.svg"},{route:"postman.svg"},{route:"python.svg"},{route:"flutter.svg"},{route:"git.svg"},{route:"github.svg"},{route:"bootstrap.svg"},{route:"vue.svg"},{route:"html5.svg"},{route:"css.svg"},{route:"javascript.svg"},{route:"java.svg"},{route:"spring.svg"},{route:"mysql.svg"},{route:"postman.svg"},{route:"python.svg"},{route:"flutter.svg"},{route:"git.svg"},{route:"github.svg"},{route:"bootstrap.svg"},{route:"vue.svg"}];return(e,n)=>((0,s.uX)(),(0,s.Wv)(S,{"my-id":"lenguajes"},{default:(0,s.k6)((()=>[n[0]||(n[0]=(0,s.Lk)("h2",null,"Conocimientos",-1)),(0,s.Lk)("div",W,[(0,s.Lk)("div",H,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(t,((e,t)=>(0,s.bF)(P,{key:t,route:e.route},null,8,["route"]))),64))])])])),_:1}))}});const D=(0,u.A)(N,[["__scopeId","data-v-43a2bb7a"]]);var K=D,z=(0,s.pM)({__name:"MyButton",props:{btnContent:{type:String,required:!1,default:"Clickeame"},onClick:{type:Function,required:!1,default:()=>{alert("Error al botonear")}}},setup(e){const t=e,n=()=>t.onClick();return(e,r)=>((0,s.uX)(),(0,s.CE)("button",{onClick:n},(0,a.v_)(t.btnContent),1))}});const R=(0,u.A)(z,[["__scopeId","data-v-d2f18772"]]);var T=R;const $={class:"proyecto"},B=["src"],U={class:"btn-container"},G=["href"];var J=(0,s.pM)({__name:"ProyectItem",props:{title:{type:String,required:!1,default:"Sin proyecto"},content:{type:String,required:!1,default:"El proyecto aún no está disponible"},image:{type:String,required:!0},href:{type:String,required:!1,default:""},githubHref:{type:String,required:!1,default:""}},setup(e){const t=e;function r(e){""!=e?window.open(e,"_blank"):alert("La página aún no está disponible")}return(e,o)=>((0,s.uX)(),(0,s.CE)("div",$,[(0,s.Lk)("h3",null,(0,a.v_)(t.title),1),(0,s.Lk)("p",null,(0,a.v_)(t.content),1),(0,s.Lk)("img",{src:n(692)(`./${t.image}`),alt:""},null,8,B),(0,s.Lk)("div",U,[(0,s.bF)(T,{onClick:()=>r(t.href),btnContent:"Ir al sitio"},null,8,["onClick"]),(0,s.Lk)("a",{href:t.githubHref,target:"_blank"},o[0]||(o[0]=[(0,s.Lk)("svg",{class:"github-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,s.Lk)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1)]),8,G)])]))}});const V=(0,u.A)(J,[["__scopeId","data-v-b5b89f88"]]);var Q=V;const Y={class:"proyectos-container"};var Z=(0,s.pM)({__name:"MyProjects",setup(e){const t=[{title:"Sala de escape",content:"Juego de sala de escape con temporizador y un ranking en el que figuran los 10 mejores jugadores, los cuales son guardados en una base de datos.",image:"escape.png",href:"http://saladeescape.great-site.net/index.html",githubHref:"https://github.com/alanpisani/Sala-de-escape"},{title:"Aplicación móvil",content:"Aplicación para móviles la cual contiene varios minijuegos y un sistema de logros que tiene como fin incentivar al usuario a realizar una serie de objetivos.",image:"app.png",githubHref:""},{title:"Lista de tareas",content:"Aplicación web con API RESTful en el backend. La aplicación permite crear una cuenta de usuario a través de un registro. Cada usuario posee su propia lista de tareas, las cuales podrá crear, marcarlas como realizadas o borrarlas.",image:"todo.png",githubHref:"https://github.com/alanpisani/lista-de-tareas"},{title:"E-commerce",content:"E-commerce de productos hecho en impresora 3D. Por el momento la página solo contiene el frontend. Hecha con html5, css3 y JavaScript vanilla.",image:"coshita.png",href:"https://alanpisani.github.io/coshita-3D/",githubHref:"https://github.com/alanpisani/coshita-3D"}];return(e,n)=>((0,s.uX)(),(0,s.Wv)(S,{id:"proyectos"},{default:(0,s.k6)((()=>[n[0]||(n[0]=(0,s.Lk)("h2",null,"Proyectos",-1)),(0,s.Lk)("div",Y,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(t,((e,t)=>(0,s.bF)(Q,{key:t,title:e.title,content:e.content,image:e.image,href:e.href,"github-href":e.githubHref},null,8,["title","content","image","href","github-href"]))),64))])])),_:1}))}});const ee=(0,u.A)(Z,[["__scopeId","data-v-48c5ee7a"]]);var te=ee,ne=n.p+"img/cara.e9e985e4.jpeg";const re={class:"hero-content"};var se=(0,s.pM)({__name:"ProfilePortfolio",setup(e){function t(){const e=document.createElement("a");e.href="/cv-Alan-Pisani.pdf",e.download="cv Alan Pisani.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)}return(e,n)=>((0,s.uX)(),(0,s.Wv)(S,{"my-id":"hero"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",re,[n[0]||(n[0]=(0,s.Lk)("img",{src:ne,alt:"Mi Foto",class:"profile-pic"},null,-1)),n[1]||(n[1]=(0,s.Lk)("h1",null,[(0,s.eW)("¡Hola! Soy Alan Pisani"),(0,s.Lk)("span",null,"🖐🏻")],-1)),n[2]||(n[2]=(0,s.Lk)("p",null,"Programador apasionado por la tecnología y el desarrollo. poseo gran capacidad para aprender nuevas habilidades rápidamente, capacidad para trabajar en equipo",-1)),(0,s.bF)(T,{btnContent:"Descargar cv",onClick:t})])])),_:1}))}});const ae=(0,u.A)(se,[["__scopeId","data-v-1b566856"]]);var oe=ae,ie=(0,s.pM)({__name:"MainPortfolio",setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("main",null,[(0,s.bF)(oe),(0,s.bF)(j),(0,s.bF)(K),(0,s.bF)(te)]))}});const ue=(0,u.A)(ie,[["__scopeId","data-v-46fe66de"]]);var ce=ue,le=(0,s.pM)({__name:"App",setup(e){return(0,s.sV)((()=>{document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.getAttribute("href");if(t){const e=document.querySelector(t);e&&e.scrollIntoView({behavior:"smooth"})}}))}))})),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(L),(0,s.bF)(ce),(0,s.bF)(m)],64))}});const pe=le;var de=pe;(0,r.Ef)(de).mount("#app")},1232:function(e,t,n){var r={"./bootstrap.svg":710,"./css.svg":38,"./flutter.svg":9822,"./git.svg":3044,"./github.svg":6145,"./html5.svg":9108,"./instagram.svg":88,"./java.svg":6708,"./javascript.svg":9405,"./linkedin.svg":6082,"./mysql.svg":278,"./postman.svg":9750,"./python.svg":5914,"./spring.svg":1379,"./vue.svg":2476};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=1232},692:function(e,t,n){var r={"./app.png":7061,"./coshita.png":1069,"./escape.png":3131,"./no.png":8783,"./todo.png":8926};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=692},710:function(e,t,n){"use strict";e.exports=n.p+"img/bootstrap.0beac29d.svg"},38:function(e,t,n){"use strict";e.exports=n.p+"img/css.8945e5ff.svg"},9822:function(e,t,n){"use strict";e.exports=n.p+"img/flutter.fc148647.svg"},3044:function(e,t,n){"use strict";e.exports=n.p+"img/git.4d7cc96e.svg"},6145:function(e,t,n){"use strict";e.exports=n.p+"img/github.71c07629.svg"},9108:function(e,t,n){"use strict";e.exports=n.p+"img/html5.58e15875.svg"},88:function(e,t,n){"use strict";e.exports=n.p+"img/instagram.ed26097a.svg"},6708:function(e,t,n){"use strict";e.exports=n.p+"img/java.4b2d4f86.svg"},9405:function(e,t,n){"use strict";e.exports=n.p+"img/javascript.9e6252ac.svg"},6082:function(e,t,n){"use strict";e.exports=n.p+"img/linkedin.bf47dfcc.svg"},278:function(e,t,n){"use strict";e.exports=n.p+"img/mysql.e669b397.svg"},9750:function(e,t,n){"use strict";e.exports=n.p+"img/postman.bd1d2c7b.svg"},5914:function(e,t,n){"use strict";e.exports=n.p+"img/python.66161dc9.svg"},1379:function(e,t,n){"use strict";e.exports=n.p+"img/spring.1fec3d3c.svg"},2476:function(e,t,n){"use strict";e.exports=n.p+"img/vue.b63e3430.svg"},7061:function(e,t,n){"use strict";e.exports=n.p+"img/app.6626503e.png"},1069:function(e,t,n){"use strict";e.exports=n.p+"img/coshita.3fa02ef9.png"},3131:function(e,t,n){"use strict";e.exports=n.p+"img/escape.c2240420.png"},8783:function(e,t,n){"use strict";e.exports=n.p+"img/no.6e43e8c2.png"},8926:function(e,t,n){"use strict";e.exports=n.p+"img/todo.dc274eae.png"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,a){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],a=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(i=!1,a<o&&(o=a));if(i){e.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/miportfolio/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,a,o=r[0],i=r[1],u=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(u)var l=u(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(7164)}));r=n.O(r)})();
//# sourceMappingURL=app.1d227d59.js.map