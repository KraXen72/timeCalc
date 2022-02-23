import{w as Z,S as B,i as X,s as G,e as m,t as V,a as y,b as f,c as b,d as a,f as C,l as A,g as W,h as ne,j as h,n as I,k as oe,m as L,o as R,H as re,p as ue,q as J,r as fe,u as se,v as $,x as E,y as K,z as N,A as P}from"./vendor.7135973b.js";const ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};ae();function k(o,e,i){return i=i||"0",o=o+"",o.length>=e?o:new Array(e-o.length+1).join(i)+o}const U=Z({perHour:8,batchSize:100,batchOffset:0}),x=Z({h:0,m:0}),Y=Z({h:0,m:0,decimal:0});function ee(o,e,i){const s=o.slice();return s[4]=e[i],s[5]=e,s[6]=i,s}function te(o){let e,i=o[1][o[4]]+"",s,t,n,r,u,l;function c(){o[2].call(n,o[4])}return{c(){e=m("div"),s=V(i),t=V(`:\r
                `),n=m("input"),r=y(),f(n,"type","number"),f(n,"class","svelte-1rp4m5f"),f(e,"class","flexitem")},m(v,_){b(v,e,_),a(e,s),a(e,t),a(e,n),C(n,o[0][o[4]]),a(e,r),u||(l=A(n,"input",c),u=!0)},p(v,_){o=v,_&1&&i!==(i=o[1][o[4]]+"")&&W(s,i),_&1&&ne(n.value)!==o[0][o[4]]&&C(n,o[0][o[4]])},d(v){v&&h(e),u=!1,l()}}}function ce(o){let e,i,s,t=Object.keys(o[0]),n=[];for(let r=0;r<t.length;r+=1)n[r]=te(ee(o,t,r));return{c(){e=m("div"),i=m("strong"),i.textContent="Settings:",s=y();for(let r=0;r<n.length;r+=1)n[r].c();f(i,"class","svelte-1rp4m5f"),f(e,"id","flexer"),f(e,"class","svelte-1rp4m5f")},m(r,u){b(r,e,u),a(e,i),a(e,s);for(let l=0;l<n.length;l+=1)n[l].m(e,null)},p(r,[u]){if(u&3){t=Object.keys(r[0]);let l;for(l=0;l<t.length;l+=1){const c=ee(r,t,l);n[l]?n[l].p(c,u):(n[l]=te(c),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}},i:I,o:I,d(r){r&&h(e),oe(n,r)}}}function me(o,e,i){let s;L(o,U,u=>i(3,s=u));let t={perHour:8,batchSize:100,batchOffset:0};const n={perHour:"\u20AC/h",batchSize:"\u20AC/payout",batchOffset:"offset current batch? (\u20AC)"};function r(u){t[u]=ne(this.value),i(0,t)}return o.$$.update=()=>{o.$$.dirty&1&&R(U,s=t,s)},[t,n,r]}class pe extends B{constructor(e){super();X(this,e,me,ce,G,{})}}function de(o){let e,i,s,t,n;return{c(){e=m("article"),i=m("span"),s=m("strong"),s.textContent="Total money:",t=y(),n=new re,n.a=null,f(i,"class","timewrap")},m(r,u){b(r,e,u),a(e,i),a(i,s),a(i,t),n.m(o[0],i)},p(r,[u]){u&1&&n.p(r[0])},i:I,o:I,d(r){r&&h(e)}}}function _e(o,e,i){let{totalSum:s=0}=e,{perHour:t=0}=e,{batchSize:n=0}=e,{batchOffset:r=0}=e,u;return o.$$set=l=>{"totalSum"in l&&i(1,s=l.totalSum),"perHour"in l&&i(2,t=l.perHour),"batchSize"in l&&i(3,n=l.batchSize),"batchOffset"in l&&i(4,r=l.batchOffset)},o.$$.update=()=>{o.$$.dirty&30&&(r===0?i(0,u=`${s.toFixed(2)}h * ${t}\u20AC = ${s*t}\u20AC / ${n}\u20AC`):i(0,u=`(${s.toFixed(2)}h * ${t}\u20AC) + <strong>${r}\u20AC</strong> = ${s*t+r}\u20AC / ${n}\u20AC`))},[u,s,t,n,r]}class be extends B{constructor(e){super();X(this,e,_e,de,G,{totalSum:1,perHour:2,batchSize:3,batchOffset:4})}}function he(o){let e,i,s,t,n,r;return{c(){e=m("strong"),e.textContent="Total time:",i=m("br"),s=y(),t=m("input"),f(e,"class","svelte-1ww9fbs"),f(t,"type","text"),f(t,"name","startTime"),f(t,"class","timeinp"),f(t,"placeholder","HH:mm"),t.required=!0,f(t,"autocomplete","off")},m(u,l){b(u,e,l),b(u,i,l),b(u,s,l),b(u,t,l),C(t,o[4]),n||(r=A(t,"input",o[12]),n=!0)},p(u,l){l&16&&t.value!==u[4]&&C(t,u[4])},d(u){u&&h(e),u&&h(i),u&&h(s),u&&h(t),n=!1,r()}}}function we(o){let e,i,s,t,n,r;return{c(){e=m("strong"),e.textContent="Start time:",i=m("br"),s=y(),t=m("input"),f(e,"class","svelte-1ww9fbs"),f(t,"type","time"),f(t,"name","startTime"),f(t,"class","timeinp"),t.required=!0},m(u,l){b(u,e,l),b(u,i,l),b(u,s,l),b(u,t,l),C(t,o[1]),n||(r=A(t,"input",o[11]),n=!0)},p(u,l){l&2&&C(t,u[1])},d(u){u&&h(e),u&&h(i),u&&h(s),u&&h(t),n=!1,r()}}}function ye(o){let e,i,s,t,n,r,u;return{c(){e=m("strong"),e.textContent="Today's time:",i=y(),s=m("input"),t=y(),n=m("button"),n.textContent="\u{1F4C5}",f(e,"class","svelte-1ww9fbs"),f(s,"type","text"),f(s,"name","startTime"),f(s,"class","timeinp"),f(s,"placeholder","HH:mm"),s.required=!0,f(s,"autocomplete","off"),f(n,"class","nowbtn"),f(n,"type","button"),f(n,"title","copy the time from the difference above")},m(l,c){b(l,e,c),b(l,i,c),b(l,s,c),C(s,o[5]),b(l,t,c),b(l,n,c),r||(u=[A(s,"input",o[14]),A(n,"click",o[9])],r=!0)},p(l,c){c&32&&s.value!==l[5]&&C(s,l[5])},d(l){l&&h(e),l&&h(i),l&&h(s),l&&h(t),l&&h(n),r=!1,se(u)}}}function ve(o){let e,i,s,t,n,r,u;return{c(){e=m("strong"),e.textContent="End time:",i=y(),s=m("input"),t=y(),n=m("button"),n.textContent="\u231A",f(e,"class","svelte-1ww9fbs"),f(s,"type","time"),f(s,"name","endTime"),f(s,"class","timeinp"),s.required=!0,f(n,"class","nowbtn"),f(n,"type","button"),f(n,"title","now")},m(l,c){b(l,e,c),b(l,i,c),b(l,s,c),C(s,o[2]),b(l,t,c),b(l,n,c),r||(u=[A(s,"input",o[13]),A(n,"click",o[7])],r=!0)},p(l,c){c&4&&C(s,l[2])},d(l){l&&h(e),l&&h(i),l&&h(s),l&&h(t),l&&h(n),r=!1,se(u)}}}function ge(o){let e,i,s,t,n,r,u,l,c,v;return{c(){e=m("div"),i=m("input"),s=y(),t=m("strong"),t.textContent="Together:",n=y(),r=V(o[6]),u=y(),l=m("button"),l.textContent="\u23EA",f(i,"type","submit"),f(i,"class","nowbtn svelte-1ww9fbs"),i.value="Add",f(t,"class","svelte-1ww9fbs"),f(l,"class","nowbtn svelte-1ww9fbs"),f(l,"type","button"),f(l,"title","add to the result"),f(e,"class","timewrap result svelte-1ww9fbs")},m(_,w){b(_,e,w),a(e,i),a(e,s),a(e,t),a(e,n),a(e,r),a(e,u),a(e,l),c||(v=A(l,"click",o[10]),c=!0)},p(_,w){w&64&&W(r,_[6])},d(_){_&&h(e),c=!1,v()}}}function He(o){let e,i,s,t,n,r;return{c(){e=m("div"),i=m("input"),s=y(),t=m("strong"),t.textContent="Difference:",n=y(),r=V(o[3]),f(i,"type","submit"),f(i,"class","nowbtn svelte-1ww9fbs"),i.value="Calculate",f(t,"class","svelte-1ww9fbs"),f(e,"class","timewrap result svelte-1ww9fbs")},m(u,l){b(u,e,l),a(e,i),a(e,s),a(e,t),a(e,n),a(e,r)},p(u,l){l&8&&W(r,u[3])},d(u){u&&h(e)}}}function Se(o){let e,i,s,t,n,r,u,l,c;function v(d,p){return d[0]==="subtract"?we:he}let _=v(o),w=_(o);function T(d,p){return d[0]==="subtract"?ve:ye}let O=T(o),S=O(o);function z(d,p){return d[0]==="subtract"?He:ge}let j=z(o),g=j(o);return{c(){e=m("hr"),i=y(),s=m("form"),t=m("span"),w.c(),n=y(),r=m("span"),S.c(),u=y(),g.c(),f(t,"class","timewrap start svelte-1ww9fbs"),f(r,"class","timewrap end svelte-1ww9fbs"),f(s,"class","svelte-1ww9fbs")},m(d,p){b(d,e,p),b(d,i,p),b(d,s,p),a(s,t),w.m(t,null),a(s,n),a(s,r),S.m(r,null),a(s,u),g.m(s,null),l||(c=A(s,"submit",ue(o[8])),l=!0)},p(d,[p]){_===(_=v(d))&&w?w.p(d,p):(w.d(1),w=_(d),w&&(w.c(),w.m(t,null))),O===(O=T(d))&&S?S.p(d,p):(S.d(1),S=O(d),S&&(S.c(),S.m(r,null))),j===(j=z(d))&&g?g.p(d,p):(g.d(1),g=j(d),g&&(g.c(),g.m(s,null)))},i:I,o:I,d(d){d&&h(e),d&&h(i),d&&h(s),w.d(),S.d(),g.d(),l=!1,c()}}}function Q(o){return 100/60*o}function ke(o,e,i){let s,t;L(o,x,H=>i(17,s=H)),L(o,Y,H=>i(18,t=H)),J.extend(fe);let n,r,u="0h0min",l={h:0,m:0},c,v,_={h:0,m:0},w="0h0min",{mode:T="subtract"}=e;function O(){let H=new Date;i(2,r=`${k(H.getHours(),2)}:${k(H.getMinutes(),2)}`)}function S(){T==="subtract"?z():j()}function z(){let H=J(n.replaceAll(":","-"),"HH-mm","sk"),M=J(r.replaceAll(":","-"),"HH-mm","sk"),q=M.diff(H,"m");l.h=Math.floor(q/60),l.m=q%60,i(3,u=`${k(l.h,2)}h${k(l.m,2)}min (${k(l.h,2)}.${Q(l.m).toFixed(0)}h)`),R(x,s=l,s),console.log({startDate:H,endDate:M,delta:q})}function j(){let H=parseInt(c.split(":")[0])+parseInt(v.split(":")[0]),M=parseInt(c.split(":")[1])+parseInt(v.split(":")[1]),q=Math.floor(M/60);M-=q*60,H+=q,_.h=H,_.m=M,i(6,w=`${k(_.h,2)}h${k(_.m,2)}min (${k(_.h,2)}.${Q(_.m).toFixed(0)}h)`),R(Y,t={h:H,m:M,decimal:parseFloat(`${_.h}.${Q(_.m).toFixed(0)}`)},t),console.log(t.decimal)}function g(){i(5,v=`${k(s.h,2)}:${k(s.m,2)}`)}function d(){i(4,c=`${k(_.h,2)}:${k(_.m,2)}`)}function p(){n=this.value,i(1,n)}function D(){c=this.value,i(4,c)}function F(){r=this.value,i(2,r)}function ie(){v=this.value,i(5,v)}return o.$$set=H=>{"mode"in H&&i(0,T=H.mode)},[T,n,r,u,c,v,w,O,S,g,d,p,D,F,ie]}class le extends B{constructor(e){super();X(this,e,ke,Se,G,{mode:0})}}function Oe(o){let e,i,s,t,n,r,u,l,c,v,_,w,T,O,S,z,j,g,d;return t=new pe({}),r=new le({props:{mode:"subtract"}}),l=new le({props:{mode:"add"}}),w=new be({props:{totalSum:o[0].decimal,batchSize:o[1].batchSize,perHour:o[1].perHour,batchOffset:o[1].batchOffset}}),{c(){e=m("main"),i=m("h1"),i.textContent="timeCalc",s=y(),$(t.$$.fragment),n=y(),$(r.$$.fragment),u=y(),$(l.$$.fragment),c=y(),v=m("hr"),_=y(),$(w.$$.fragment),T=y(),O=m("p"),O.innerHTML=`Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.`,S=y(),z=m("p"),z.innerHTML=`Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!`,j=y(),g=m("p"),g.textContent="made by KraXen72",f(i,"class","svelte-idb4io"),f(O,"class","svelte-idb4io"),f(z,"class","svelte-idb4io"),f(g,"class","svelte-idb4io"),f(e,"class","svelte-idb4io")},m(p,D){b(p,e,D),a(e,i),a(e,s),E(t,e,null),a(e,n),E(r,e,null),a(e,u),E(l,e,null),a(e,c),a(e,v),a(e,_),E(w,e,null),a(e,T),a(e,O),a(e,S),a(e,z),a(e,j),a(e,g),d=!0},p(p,[D]){const F={};D&1&&(F.totalSum=p[0].decimal),D&2&&(F.batchSize=p[1].batchSize),D&2&&(F.perHour=p[1].perHour),D&2&&(F.batchOffset=p[1].batchOffset),w.$set(F)},i(p){d||(K(t.$$.fragment,p),K(r.$$.fragment,p),K(l.$$.fragment,p),K(w.$$.fragment,p),d=!0)},o(p){N(t.$$.fragment,p),N(r.$$.fragment,p),N(l.$$.fragment,p),N(w.$$.fragment,p),d=!1},d(p){p&&h(e),P(t),P(r),P(l),P(w)}}}function Ce(o,e,i){let s,t;return L(o,Y,n=>i(0,s=n)),L(o,U,n=>i(1,t=n)),[s,t]}class Te extends B{constructor(e){super();X(this,e,Ce,Oe,G,{})}}new Te({target:document.getElementById("app")});