(this["webpackJsonppopit-app"]=this["webpackJsonppopit-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(8),i=n.n(r),o=(n(13),n(14),n(5)),a=n(2),u=n(0),l=function(e,t){for(var n=e.toString();n.length<t;)n="0".concat(n);return n},d=function(e){var t=e.time,n=e.prefix,c=e.classes,s={minutes:l(t.minutes,2),seconds:l(t.seconds,2),milliseconds:l(t.milliseconds,3)};return Object(u.jsxs)("p",{className:c?"".concat(c," time"):"time",children:[n,s.minutes,":",s.seconds,".",s.milliseconds]})};d.defaultProps={prefix:void 0,classes:void 0};var j=d,b=function(e){var t=e.initialTime,n=e.sendFinal,s=Object(c.useState)({minutes:0,seconds:0,milliseconds:0,duration:0}),r=Object(a.a)(s,2),i=r[0],o=r[1],l=Object(c.useRef)({minutes:0,seconds:0,milliseconds:0,duration:0});return Object(c.useEffect)((function(){var e=setInterval((function(){var e={minutes:0,seconds:0,milliseconds:0,duration:0},n=(new Date).getTime()-t;e.duration=n.valueOf(),e.minutes=Math.floor(n/6e4),n%=6e4,e.seconds=Math.floor(n/1e3),n%=1e3,e.milliseconds=n,o(e),l.current=e}),10);return function(){clearInterval(e),n(l.current)}}),[t,n]),Object(u.jsx)(j,{time:i,classes:"bold-larger"})},m=n(7),f={src:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Button_Icon_Blue.svg",alt:"blue button"},O={src:"https://upload.wikimedia.org/wikipedia/commons/9/96/Button_Icon_White.svg",alt:"white button"},v=function(e){var t=e.value,n=e.row,c=e.col,s=e.onPress,r=new Audio("".concat("/PopItNow-React","/honk.mp3")),i=function(){r.play(),s(n,c)},o="ontouchstart"in window?{touch:i,mousedown:void 0}:{touch:void 0,mousedown:i};return Object(u.jsx)("div",{role:"none",onMouseDown:o.mousedown,onTouchStart:o.touch,children:Object(u.jsx)("img",{width:"32",alt:t?f.alt:O.alt,src:t?f.src:O.src})})},p=function(e){var t=[];return e.map((function(e){return t.push(Object(o.a)(e))})),t},h=function(e,t){for(var n=[],c=[],s=0;s<t;s++)n[s]=!0;for(var r=0;r<e;r++)c[r]=[].concat(n);return c}(5,6),x=function(e){var t=e.requestGameEnd,n=e.requestGameStart,s=Object(c.useState)(p(h)),r=Object(a.a)(s,2),i=r[0],o=r[1],l=c.useContext(I),d=function(e,c){var s=p(i);if(s[e][c]=!s[e][c],l){if(function(e){return e.every((function(e){return e.every((function(e){return!e}))}))}(s))return t(),o(p(h))}else n();return o(s)};return Object(u.jsx)("table",{className:"centered",children:Object(u.jsx)("tbody",{children:i.map((function(e,t){return Object(u.jsx)("tr",{children:e.map((function(e,n){return Object(u.jsx)("td",{children:Object(u.jsx)(v,{value:e,row:t,col:n,onPress:d})},Object(m.uniqueId)())}))},Object(m.uniqueId)())}))})})},g=function(){var e="".concat("/PopItNow-React","/GitHub-Mark-120px-plus.png");return Object(u.jsx)("a",{href:"https://github.com/g-parki/PopItNow-React",children:Object(u.jsx)("img",{className:"logo",src:e,alt:"GitHub logo"})})},w=function(e){var t=e.bestTime,n=e.attempts;return Object(u.jsxs)("div",{className:"nav-bottom",children:[Object(u.jsx)("div",{className:"nav-member",children:Object(u.jsx)(g,{})}),Object(u.jsx)("div",{className:"nav-member align-left time bold-larger",children:Object(u.jsxs)("p",{children:["Attempts:",n]})}),Object(u.jsx)("div",{className:"nav-member align-left time bold-larger",children:t?Object(u.jsx)(j,{prefix:"Best: ",time:t,classes:"no-margin"}):null})]})};w.defaultProps={bestTime:void 0};var N=w,I=c.createContext(!1),S=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),i=Object(a.a)(r,2),l=i[0],d=i[1],m=Object(c.useState)(0),f=Object(a.a)(m,2),O=f[0],v=f[1],p=Object(c.useState)(!1),h=Object(a.a)(p,2),g=h[0],w=h[1],S=function(e){s([e].concat(Object(o.a)(n))),function(e){(void 0===l||e.duration<l.duration)&&d(e)}(e)};return Object(u.jsxs)(I.Provider,{value:g,children:[Object(u.jsx)(x,{requestGameEnd:function(){w(!1),v(O+1)},requestGameStart:function(){w(!0)}}),Object(u.jsx)("div",{className:"center-text",children:function(){if(g)return Object(u.jsx)(b,{initialTime:(new Date).getTime(),sendFinal:S});var e=n[0];if(void 0!==e){var t=e===l?"bold-larger green":"bold-larger red";return Object(u.jsx)(j,{time:e,classes:t})}}()}),Object(u.jsx)(N,{attempts:O,bestTime:l})]})},k=function(){return Object(u.jsxs)("div",{className:"title-container",children:[Object(u.jsx)("div",{className:"title-top-row",children:"Pop It."}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"title-bottom-row",children:"Now."})]})},P=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(k,{}),Object(u.jsx)(S,{})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7af93270.chunk.js.map