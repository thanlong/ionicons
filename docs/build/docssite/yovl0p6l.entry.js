const t=window.DocsSite.h;import{a as e,b as o,c as i,d as s,e as n,f as r,g as a,h as c,i as l,j as h,k as u,l as d,m as p,n as y,o as f,p as m,q as g,r as w,s as b,t as v,u as S}from"./chunk-1ec105a7.js";class x{constructor(){this.isSticky=!1,this.query="",this.isSearchVisible=!1}handleScroll(){requestAnimationFrame(this.checkScroll.bind(this))}handleResize(){requestAnimationFrame(()=>{window.innerWidth>768&&(this.el.querySelector("nav").style.display="",this.el.classList.remove("show-mobile-menu"),document.body.classList.remove("no-scroll"),this.isMobileMenuShown=!1)})}checkScroll(){const t=document.documentElement.scrollTop||document.body.scrollTop;this.isSticky=t>30}showNav(){if(this.isMobileMenuShown)return;this.isMobileMenuShown=!0;const t=this.el.querySelector("nav");t.style.display="flex",setTimeout(()=>{t.classList.add("show-mobile-menu"),document.body.classList.add("no-scroll")},1)}hideNav(){if(!this.isMobileMenuShown)return;this.isMobileMenuShown=!1;const t=this.el.querySelector("nav");t.classList.remove("show-mobile-menu"),setTimeout(()=>{t.style.display="none",document.body.classList.remove("no-scroll")},300)}render(){return t("header",{class:`${this.isSearchVisible?"visible-search":""} ${this.isSticky?"overlay":""}`},t("div",{class:"container"},t("div",{class:"logo"},t("stencil-route-link",{url:"/",exact:!0},t("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{id:"icon","fill-rule":"nonzero"},t("circle",{id:"circle",fill:"#EAEEF5",cx:"16",cy:"16",r:"16"}),t("circle",{id:"circle_copy",fill:"#B4C1D8",cx:"16",cy:"16",r:"11"}),t("circle",{id:"circle_copy_2",fill:"#647AA1",cx:"16",cy:"16",r:"6"}),t("circle",{id:"circle_copy_3",fill:"#647AA1",cx:"23.5",cy:"8.5",r:"2"})))),"Ionicons"),t("span",{class:"version"},this.version)),t("icon-search",{query:this.query,size:"small"}),t("nav",null,t("stencil-route-link",{class:"nav__item",url:"/",exact:!0,onClick:this.hideNav.bind(this)},"Icons"),t("stencil-route-link",{class:"nav__item",url:"/usage",onClick:()=>{this.toggleHeaderSearch.emit("hide"),this.hideNav()}},"Usage"),t("a",{class:"nav__item",href:"https://github.com/ionic-team/ionicons"},"Github",t("svg",{width:"12px",height:"12px",viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{transform:"translate(0,1)"},t("rect",{id:"bg",fill:"#e3e8f1",x:"0",y:"2",width:"9",height:"9",rx:"1.5"}),t("path",{d:"M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z",id:"arrow",fill:"#A4AEC3"})))),t("span",{class:"close",onClick:this.hideNav.bind(this)},t("i",{class:"ion ion-md-close"}))),t("a",{class:"btn sm-hide",href:"/ionicons.designerpack.zip"},t("svg",{width:"9px",height:"11px",viewBox:"0 0 9 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",null,t("rect",{id:"bg",fill:"#BAC3D1",x:"0",y:"9",width:"9",height:"2",rx:"1"}),t("path",{d:"M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z",id:"arrow",fill:"#94A0B8"}))),"Designer pack"),t("span",{class:"more",onClick:this.showNav.bind(this)},t("i",{class:"ion ion-md-more"}))))}static get is(){return"header-bar"}static get properties(){return{el:{elementRef:!0},isMobileMenuShown:{state:!0},isSearchVisible:{type:Boolean,attr:"is-search-visible"},isSticky:{state:!0},query:{type:String,attr:"query"},version:{type:String,attr:"version"}}}static get events(){return[{name:"toggleHeaderSearch",method:"toggleHeaderSearch",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"window:scroll",method:"handleScroll",passive:!0},{name:"window:resize",method:"handleResize",passive:!0}]}static get style(){return"header-bar header{-webkit-transition:border .6s;transition:border .6s;position:fixed;width:100%;top:0;left:0;right:0;background:#fff;z-index:999;border-bottom:1px solid transparent;height:64px}header-bar header.overlay{border-bottom:1px solid rgba(0,0,0,.05)}header-bar .container,header-bar .logo,header-bar .logo a,header-bar nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}header-bar .logo,header-bar nav{-ms-flex:0 0 auto;flex:0 0 auto}header-bar nav{-ms-flex-align:baseline;align-items:baseline}header-bar icon-search{-webkit-transition:opacity .5s;transition:opacity .5s;-ms-flex:1;flex:1;padding-left:60px;padding-right:60px;opacity:0;pointer-events:none}header-bar .visible-search icon-search{opacity:1;pointer-events:auto}header-bar .container{-ms-flex-pack:justify;justify-content:space-between;padding-top:12px;padding-bottom:12px}header-bar .logo a{font-weight:700;font-size:16px;color:var(--color-shark)}header-bar .logo svg{margin-right:10px}header-bar .logo .version{margin-left:10px;font-size:10px;font-weight:600;color:var(--color-oslo-gray);background-color:var(--color-catskill-white);border-radius:4px;padding:1px 5px;position:relative;top:-2px}header-bar a{text-decoration:none}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:30px}header-bar .nav__item{font-size:13px;font-weight:600}header-bar .nav__item,header-bar .nav__item a{-webkit-transition:color .3s;transition:color .3s;color:var(--color-pale-sky)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:var(--color-shark)}header-bar .nav__item .link-active{color:var(--color-heather);cursor:default}header-bar .nav__item svg{margin-left:6px}header-bar .nav__item:hover svg #arrow{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)}header-bar .btn svg{margin-right:6px}header-bar .btn:hover svg #arrow{-webkit-transform:translateY(1px);transform:translateY(1px)}header-bar .more{padding:0 8px;line-height:28px;color:var(--color-dodger-blue);cursor:pointer}header-bar .more,header-bar nav span.close{font-size:28px;display:none}\@media screen and (max-width:992px){header-bar nav>*+*{margin-left:18px}header-bar icon-search{padding-left:30px;padding-right:30px}}\@media screen and (max-width:768px){header-bar .btn.sm-hide{display:none}header-bar .close,header-bar .more{cursor:pointer}header-bar .more{display:block}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:0;margin-top:30px}header-bar nav{-webkit-transition:opacity .3s;transition:opacity .3s;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999;background-image:linear-gradient(-223deg,#363e49,#1c1e21);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;opacity:0;display:none}header-bar nav .close{margin:0;position:absolute;top:14px;right:18px;color:#fff;cursor:pointer}header-bar .nav__item{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(8px);transform:translateY(8px)}header-bar .nav__item,header-bar .nav__item a{font-size:28px;color:hsla(0,0%,100%,.9)}header-bar .nav__item .link-active{color:hsla(0,0%,100%,.3)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:hsla(0,0%,100%,.9)}header-bar .nav__item svg #bg{opacity:.2}header-bar nav.show-mobile-menu{opacity:1}header-bar nav.show-mobile-menu .nav__item{-webkit-transform:translateY(0);transform:translateY(0)}header-bar nav.show-mobile-menu .close{display:block}header-bar icon-search{padding-left:20px;padding-right:15px}}\@media screen and (max-width:520px){header-bar .version{display:none}}"}}class T{constructor(){this.data={version:void 0,icons:[]},this.query="",this.isHeaderSearchVisible=!1}handleScroll(){requestAnimationFrame(this.checkScroll.bind(this))}searchHandler(t){this.query=t.detail}toggleHandler(t){this.isHeaderSearchVisible="show"===t.detail}componentWillLoad(){this.loadData()}async loadData(){const t=await fetch("/data.json"),e=await t.json();this.data=e,this.data.icons=e.icons.map(t=>(t.icons=t.icons.reverse(),t.name=t.icons[0].split("-").slice(1).join("-"),t))}checkScroll(){const t=document.querySelector("header .search-input"),e=document.querySelector("icon-list .search-input");if(!e||!t)return;const o=t.querySelector("input"),i=e.querySelector("input");if(e.getBoundingClientRect().top<e.scrollHeight/2){if(this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!0,i===document.activeElement&&o.focus()}else{if(!this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!1,o===document.activeElement&&i.focus()}}render(){return[t("header-bar",{version:this.data.version,query:this.query,isSearchVisible:this.isHeaderSearchVisible}),t("stencil-router",null,t("stencil-router-scroll-top",null,t("stencil-route-switch",{scrollTopOffset:0},t("stencil-route",{url:"/",component:"landing-page",exact:!0,componentProps:{query:this.query,data:this.data}}),t("stencil-route",{url:"/usage",component:"usage-page",componentProps:{data:this.data}}),t("stencil-route",{component:"notfound-page"}))))]}static get is(){return"ionicons-site"}static get properties(){return{data:{state:!0},isHeaderSearchVisible:{state:!0},query:{state:!0}}}static get listeners(){return[{name:"window:scroll",method:"handleScroll",passive:!0},{name:"hasSearched",method:"searchHandler"},{name:"toggleHeaderSearch",method:"toggleHandler"}]}static get style(){return"stencil-router>div{height:100%}"}}var L=function(t,e,o,i){return new(o||(o=Promise))(function(s,n){function r(t){try{c(i.next(t))}catch(t){n(t)}}function a(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){t.done?s(t.value):new o(function(e){e(t.value)}).then(r,a)}c((i=i.apply(t,e||[])).next())})};class k{constructor(){this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const o=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!o)return this.previousMatch=this.match,this.match=e(t.pathname,{path:this.url,exact:this.exact,strict:!0})}loadCompleted(){return L(this,void 0,void 0,function*(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!o(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)})}componentDidUpdate(){return L(this,void 0,void 0,function*(){yield this.loadCompleted()})}componentDidLoad(){return L(this,void 0,void 0,function*(){yield this.loadCompleted()})}render(){if(!this.match||!this.history)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},e,{component:this.component})):this.component?t(this.component,Object.assign({},e)):void 0}static get is(){return"stencil-route"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group",reflectToAttr:!0},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{type:"Any",attr:"match",mutable:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}}static get style(){return"stencil-route.inactive{display:none}"}}i.injectProps(k,["location","history","historyType","routeViewsUpdated"]);var P=function(t,e,o,i){return new(o||(o=Promise))(function(s,n){function r(t){try{c(i.next(t))}catch(t){n(t)}}function a(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){t.done?s(t.value):new o(function(e){e(t.value)}).then(r,a)}c((i=i.apply(t,e||[])).next())})};function O(t){return"stencil-route"===t.tagName.toLocaleLowerCase()}class A{constructor(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[]}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}regenerateSubscribers(t){return P(this,void 0,void 0,function*(){if(null==t)return;let o=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(O).map((i,s)=>{const n=function(o,s,n){return e(t.pathname,{path:i.url,exact:i.exact,strict:!0})}();return n&&-1===o&&(o=s),{el:i,match:n}}),-1===o)return;if(this.activeIndex===o)return void(this.subscribers[o].el.match=this.subscribers[o].match);this.activeIndex=o;const i=this.subscribers[this.activeIndex];this.scrollTopOffset&&(i.el.scrollTopOffset=this.scrollTopOffset),i.el.group=this.group,i.el.match=i.match,i.el.componentUpdated=(t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))})})}render(){return t("slot",null)}static get is(){return"stencil-route-switch"}static get properties(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}}}function H(t,...e){t||console.error(...e)}function q(t,...e){t||console.warn(...e)}i.injectProps(A,["location","routeViewsUpdated"]);const U=()=>{let t,e=[];return{setPrompt:e=>(q(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,o,i,s)=>{if(null!=t){const n="function"==typeof t?t(e,o):t;"string"==typeof n?"function"==typeof i?i(n,s):(q(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),s(!0)):s(!1!==n)}else s(!0)},appendListener:t=>{let o=!0;const i=(...e)=>{o&&t(...e)};return e.push(i),()=>{o=!1,e=e.filter(t=>t!==i)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},M=(t="scrollPositions")=>{let e=new Map;if(s("sessionStorage")){const o=window.sessionStorage.getItem(t);e=o?new Map(JSON.parse(o)):e}function o(t,o){if(e.set(t,o),s("sessionStorage")){const t=[];e.forEach((e,o)=>{t.push([o,e])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(t))}}return"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:o,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){o(t,[window.scrollX,window.scrollY])}}},V=()=>{try{return window.history.state||{}}catch(t){return{}}},R={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+v(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:v,decodePath:a},slash:{encodePath:a,decodePath:a}},C=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},E=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};var j=function(t,e,o,i){return new(o||(o=Promise))(function(s,n){function r(t){try{c(i.next(t))}catch(t){n(t)}}function a(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){t.done?s(t.value):new o(function(e){e(t.value)}).then(r,a)}c((i=i.apply(t,e||[])).next())})};function I(t,e){const o=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:o})}const B={browser:(t={})=>{H(d,"Browser history needs a DOM");const e=window.history,o=m(),i=!g(),s=M(),b=null!=t.forceRefresh&&t.forceRefresh,v=null!=t.getUserConfirmation?t.getUserConfirmation:f,S=null!=t.keyLength?t.keyLength:6,x=t.basename?c(a(t.basename)):"",T=t=>{t=t||{};const{key:e,state:o}=t,{pathname:i,search:s,hash:a}=window.location;let c=i+s+a;return q(!x||l(c,x),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+c+'" to begin with "'+x+'".'),x&&(c=h(c,x)),n(c,o,e||r(S))},L=U(),k=t=>{s.capture(z.location.key),Object.assign(z,t),z.location.scrollPosition=s.get(z.location.key),z.length=e.length,L.notifyListeners(z.location,z.action)},P=t=>{w(t)||R(T(t.state))},O=()=>{R(T(V()))};let A=!1;const R=t=>{if(A)A=!1,k();else{const e="POP";L.confirmTransitionTo(t,e,v,o=>{o?k({action:e,location:t}):C(t)})}},C=t=>{let e=j.indexOf(z.location.key);-1===e&&(e=0);let o=j.indexOf(t.key);-1===o&&(o=0);const i=e-o;i&&(A=!0,B(i))},E=T(V());let j=[E.key];const I=t=>x+u(t),B=t=>{e.go(t)};let N=0;const _=t=>{1===(N+=t)?(p(window,"popstate",P),i&&p(window,"hashchange",O)):0===N&&(y(window,"popstate",P),i&&y(window,"hashchange",O))};let D=!1;const z={length:e.length,action:"POP",location:E,createHref:I,push:(t,i)=>{q(!("object"==typeof t&&void 0!==t.state&&void 0!==i),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s=n(t,i,r(S),z.location);L.confirmTransitionTo(s,"PUSH",v,t=>{if(!t)return;const i=I(s),{key:n,state:r}=s;if(o)if(e.pushState({key:n,state:r},void 0,i),b)window.location.href=i;else{const t=j.indexOf(z.location.key),e=j.slice(0,-1===t?0:t+1);e.push(s.key),j=e,k({action:"PUSH",location:s})}else q(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=i})},replace:(t,i)=>{q(!("object"==typeof t&&void 0!==t.state&&void 0!==i),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s=n(t,i,r(S),z.location);L.confirmTransitionTo(s,"REPLACE",v,t=>{if(!t)return;const i=I(s),{key:n,state:r}=s;if(o)if(e.replaceState({key:n,state:r},void 0,i),b)window.location.replace(i);else{const t=j.indexOf(z.location.key);-1!==t&&(j[t]=s.key),k({action:"REPLACE",location:s})}else q(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(i)})},go:B,goBack:()=>B(-1),goForward:()=>B(1),block:(t="")=>{const e=L.setPrompt(t);return D||(_(1),D=!0),()=>(D&&(D=!1,_(-1)),e())},listen:t=>{const e=L.appendListener(t);return _(1),()=>{_(-1),e()}}};return z},hash:(t={})=>{H(d,"Hash history needs a DOM");const e=window.history,o=S(),i=null!=t.keyLength?t.keyLength:6,{getUserConfirmation:s=f,hashType:m="slash"}=t,g=t.basename?c(a(t.basename)):"",{encodePath:w,decodePath:v}=R[m],x=()=>{let t=v(C());return q(!g||l(t,g),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+g+'".'),g&&(t=h(t,g)),n(t,void 0,r(i))},T=U(),L=t=>{Object.assign(F,t),F.length=e.length,T.notifyListeners(F.location,F.action)};let k=!1,P=null;const O=()=>{const t=C(),e=w(t);if(t!==e)E(e);else{const t=x(),e=F.location;if(!k&&b(e,t))return;if(P===u(t))return;P=null,A(t)}},A=t=>{if(k)k=!1,L();else{const e="POP";T.confirmTransitionTo(t,e,s,o=>{o?L({action:e,location:t}):M(t)})}},M=t=>{let e=B.lastIndexOf(u(F.location));-1===e&&(e=0);let o=B.lastIndexOf(u(t));-1===o&&(o=0);const i=e-o;i&&(k=!0,N(i))},V=C(),j=w(V);V!==j&&E(j);const I=x();let B=[u(I)];const N=t=>{q(o,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let _=0;const D=t=>{1===(_+=t)?p(window,"hashchange",O):0===_&&y(window,"hashchange",O)};let z=!1;const F={length:e.length,action:"POP",location:I,createHref:t=>"#"+w(g+u(t)),push:(t,e)=>{q(void 0===e,"Hash history cannot push state; it is ignored");const o=n(t,void 0,r(i),F.location);T.confirmTransitionTo(o,"PUSH",s,t=>{if(!t)return;const e=u(o),i=w(g+e);if(C()!==i){P=e,(t=>window.location.hash=t)(i);const t=B.lastIndexOf(u(F.location)),s=B.slice(0,-1===t?0:t+1);s.push(e),B=s,L({action:"PUSH",location:o})}else q(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),L()})},replace:(t,e)=>{q(void 0===e,"Hash history cannot replace state; it is ignored");const o=n(t,void 0,r(i),F.location);T.confirmTransitionTo(o,"REPLACE",s,t=>{if(!t)return;const e=u(o),i=w(g+e);C()!==i&&(P=e,E(i));const s=B.indexOf(u(F.location));-1!==s&&(B[s]=e),L({action:"REPLACE",location:o})})},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(t="")=>{const e=T.setPrompt(t);return z||(D(1),z=!0),()=>(z&&(z=!1,D(-1)),e())},listen:t=>{const e=T.appendListener(t);return D(1),()=>{D(-1),e()}}};return F}};class N{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=((t={})=>{if(t.scrollToId&&"browser"===this.historyType){const e=document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)})}componentWillLoad(){this.history=B[this.historyType](),this.history.listen(t=>j(this,void 0,void 0,function*(){t=I(t,this.root),this.location=t})),this.location=I(this.history.location,this.root)}scrollTo(t){if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&Array.isArray(this.history.location.scrollPosition)?this.queue.write(()=>{this.history&&this.history.location&&Array.isArray(this.history.location.scrollPosition)&&window.scrollTo(this.history.location.scrollPosition[0],this.history.location.scrollPosition[1])}):this.queue.write(()=>{window.scrollTo(0,t)})}render(){if(this.location&&this.history)return t(i.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},t("slot",null))}static get is(){return"stencil-router"}static get properties(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}}}export{x as HeaderBar,T as IoniconsSite,k as StencilRoute,A as StencilRouteSwitch,N as StencilRouter};