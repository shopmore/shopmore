var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function l(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){t.value=null==n?"":n}let h;function m(t){h=t}function $(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const g=[],y=[],b=[],_=[],x=Promise.resolve();let v=!1;function k(t){b.push(t)}let w=!1;const E=new Set;function j(){if(!w){w=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];m(n),A(n.$$)}for(m(null),g.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];E.has(n)||(E.add(n),n())}b.length=0}while(g.length);for(;_.length;)_.pop()();v=!1,w=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const C=new Set;function N(t,n){-1===t.$$.dirty[0]&&(g.push(t),v||(v=!0,x.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(u,c,s,a,f,l,d=[-1]){const p=h;m(u);const $=u.$$={fragment:null,ctx:null,props:l,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:c.context||[]),callbacks:e(),dirty:d,skip_bound:!1};let g=!1;if($.ctx=s?s(u,c.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),g&&N(u,t)),n})):[],$.update(),g=!0,o($.before_update),$.fragment=!!a&&a($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();c.intro&&((y=u.$$.fragment)&&y.i&&(C.delete(y),y.i(b))),function(t,e,u,c){const{fragment:i,on_mount:s,on_destroy:a,after_update:f}=t.$$;i&&i.m(e,u),c||k((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(k)}(u,c.target,c.anchor,c.customElement),j()}var y,b;m(p)}function L(n){let e,r,u,h,m,$,g,y,b;return{c(){e=s("main"),r=s("h1"),u=a(n[1]),h=f(),m=s("p"),m.textContent="What is your name?",$=f(),g=s("input"),d(r,"class","svelte-1tky8bj"),d(g,"type","text"),d(e,"class","svelte-1tky8bj")},m(t,o){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,o),c(e,r),c(r,u),c(e,h),c(e,m),c(e,$),c(e,g),p(g,n[0]),y||(b=[l(g,"input",n[3]),l(g,"input",n[2])],y=!0)},p(t,[n]){2&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(u,t[1]),1&n&&g.value!==t[0]&&p(g,t[0])},i:t,o:t,d(t){t&&i(e),y=!1,o(b)}}}function S(t,n,e){let o="World",r="";function u(){fetch("/api/samples/hello?name="+o).then((t=>t.text())).then((t=>{e(1,r=t)}))}return $(u),[o,r,u,function(){o=this.value,e(0,o)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,S,L,u,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map