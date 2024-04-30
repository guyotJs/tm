var V=Object.defineProperty;var G=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var S=(e,t,n)=>(G(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function O(){}function q(e){return e()}function B(){return Object.create(null)}function A(e){e.forEach(q)}function H(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function N(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function P(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function D(){return w(" ")}function W(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function I(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function X(e){return Array.from(e.childNodes)}function x(e,t){t=""+t,e.data!==t&&(e.data=t)}function U(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let L;function C(e){L=e}function Y(){if(!L)throw new Error("Function called outside component initialization");return L}function Z(e){Y().$$.on_mount.push(e)}const k=[],z=[];let E=[];const F=[],ee=Promise.resolve();let T=!1;function te(){T||(T=!0,ee.then(K))}function j(e){E.push(e)}const M=new Set;let v=0;function K(){if(v!==0)return;const e=L;do{try{for(;v<k.length;){const t=k[v];v++,C(t),ne(t.$$)}}catch(t){throw k.length=0,v=0,t}for(C(null),k.length=0,v=0;z.length;)z.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];M.has(n)||(M.add(n),n())}E.length=0}while(k.length);for(;F.length;)F.pop()();T=!1,M.clear(),C(e)}function ne(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}function re(e){const t=[],n=[];E.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),E=t}const oe=new Set;function ie(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function se(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),j(()=>{const s=e.$$.on_mount.map(q).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...s):A(s),e.$$.on_mount=[]}),o.forEach(j)}function le(e,t){const n=e.$$;n.fragment!==null&&(re(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(k.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(e,t,n,r,o,s,u=null,_=[-1]){const d=L;C(e);const i=e.$$={fragment:null,ctx:[],props:s,update:O,not_equal:o,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:B(),dirty:_,skip_bound:!1,root:t.target||d.$$.root};u&&u(i.root);let g=!1;if(i.ctx=n?n(e,t.props||{},(l,a,...b)=>{const p=b.length?b[0]:a;return i.ctx&&o(i.ctx[l],i.ctx[l]=p)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](p),g&&ue(e,l)),a}):[],i.update(),g=!0,A(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const l=X(t.target);i.fragment&&i.fragment.l(l),l.forEach(y)}else i.fragment&&i.fragment.c();t.intro&&ie(e.$$.fragment),se(e,t.target,t.anchor),K()}C(d)}class fe{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){le(this,1),this.$destroy=O}$on(t,n){if(!H(n))return O;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const de="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);function ae(e){let t=e[0]-12+"",n;return{c(){n=w(t)},m(r,o){$(r,n,o)},p(r,o){o&1&&t!==(t=r[0]-12+"")&&x(n,t)},d(r){r&&y(n)}}}function me(e){let t=e[4](e[0])+"",n;return{c(){n=w(t)},m(r,o){$(r,n,o)},p(r,o){o&1&&t!==(t=r[4](r[0])+"")&&x(n,t)},d(r){r&&y(n)}}}function he(e){let t,n,r=e[4](e[1])+"",o,s,u=e[4](e[2])+"",_,d,i,g,l,a,b;function p(c,h){return c[0]<=12?me:ae}let f=p(e),m=f(e);return{c(){t=P("div"),m.c(),n=w(`  :
	`),o=w(r),s=w(` :
	`),_=w(u),d=D(),i=P("button"),i.textContent="Dark Mode",g=D(),l=P("div"),l.textContent="This website uses cookies",I(t,"class","main svelte-1blh053"),U(t,"font-size","20px"),I(i,"class","svelte-1blh053"),I(l,"class","bottom svelte-1blh053"),U(l,"font-family","sans-serif")},m(c,h){$(c,t,h),m.m(t,null),N(t,n),N(t,o),N(t,s),N(t,_),$(c,d,h),$(c,i,h),$(c,g,h),$(c,l,h),a||(b=W(i,"click",e[3]),a=!0)},p(c,[h]){f===(f=p(c))&&m?m.p(c,h):(m.d(1),m=f(c),m&&(m.c(),m.m(t,n))),h&2&&r!==(r=c[4](c[1])+"")&&x(o,r),h&4&&u!==(u=c[4](c[2])+"")&&x(_,u)},i:O,o:O,d(c){c&&(y(t),y(d),y(i),y(g),y(l)),m.d(),a=!1,b()}}}function R(e,t,n){const r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);let o="expires="+r.toUTCString();document.cookie=e+"="+t+";"+o+";path=/"}function pe(e){let t=e+"=",r=decodeURIComponent(document.cookie).split(";");for(let o=0;o<r.length;o++){let s=r[o];for(;s.charAt(0)==" ";)s=s.substring(1);if(s.indexOf(t)==0)return s.substring(t.length,s.length)}return""}function _e(e,t,n){let r,o,s,u=new Date,_=[{h:9,m:30},{h:10,m:53},{h:10,m:57},{h:11,m:36},{h:11,m:40},{h:13,m:36},{h:13,m:40},{h:14,m:57},{h:15,m:1},{h:16,m:18}],d=[{h:10,m:53},{h:11,m:36},{h:13,m:36},{h:14,m:57},{h:16,m:18}],i=0;Z(()=>{const p=setInterval(()=>{n(5,u=new Date),i=0;for(let f=0;f<3;f++)r>=_[i].h&&o>=_[i].h&&i++;i==3&&(o-d[i].m,r-d[i].h)},1e3);return()=>{clearInterval(p)}});function g(){window.document.body.classList.toggle("dark-mode"),l?(l=!1,R("dim","o",365)):(l=!0,R("dim","d",365))}let l=!1;window.document.body.classList.remove("dark-mode"),pe("dim")=="d"&&(window.document.body.classList.add("dark-mode"),l=!0);let a=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];function b(p){let f=p.toString();return f.length==1?`${a[f[0]]}`:`${a[f[1]]}${a[f[0]]}`}return e.$$.update=()=>{e.$$.dirty&32&&n(0,r=u.getHours()),e.$$.dirty&32&&n(1,o=u.getMinutes()),e.$$.dirty&32&&n(2,s=u.getSeconds())},[r,o,s,g,b,u]}class ge extends fe{constructor(t){super(),ce(this,t,_e,he,J,{})}}new ge({target:document.getElementById("app")});
