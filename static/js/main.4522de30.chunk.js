(this["webpackJsonpgroup-by"]=this["webpackJsonpgroup-by"]||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(4),s=t.n(i),a=(t(9),t(2)),d=(t(10),t(0)),u=function(){var e=[{id:1,universe:"marvel",name:"Spider Man"},{id:2,universe:"marvel",name:"Iron Man"},{id:3,universe:"dc",name:"Aqua Man"},{id:4,universe:"dc",name:"Bat Man"},{id:5,universe:"marvel",name:"Hulk"}],n=[{id:1,mark:"AUDI",model:"Rs"},{id:2,mark:"AUDI",model:"80"},{id:3,mark:"Skoda",model:"Octavia"},{id:4,mark:"Skoda",model:"Rapid"},{id:5,mark:"Opel",model:"Vectra"},{id:6,mark:"Opel",model:"Omega"}],t=["id","universe","name","mark","model"],c=["cars","heroes"],i=Object(r.useState)(""),s=Object(a.a)(i,2),u=s[0],j=s[1],l=Object(r.useState)(""),o=Object(a.a)(l,2),m=o[0],b=o[1],O=Object(r.useState)(null),h=Object(a.a)(O,2),p=h[0],v=h[1],x=Object(r.useMemo)((function(){switch(m){case"cars":return n;case"heroes":return e}}),[m]);return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"arrays",children:[Object(d.jsxs)("div",{className:"arrHero",children:[Object(d.jsx)("h2",{children:"heroes"}),e.map((function(e){return Object(d.jsxs)("div",{children:["id:",e.id," universe:",e.universe," name:",e.name]})}))]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"cars"}),n.map((function(e){return Object(d.jsxs)("div",{children:["id:",e.id," mark:",e.mark," model:",e.model]})}))]})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:["\u0412\u044b\u0431\u0438\u0440\u0438\u0442\u0435 \u043c\u0430\u0441\u0441\u0438\u0432 \u0434\u043b\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438 : ",Object(d.jsx)("input",{onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)("span",{children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447 \u0434\u043b\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438 : ",Object(d.jsx)("input",{onChange:function(e){return j(e.target.value)}})]}),Object(d.jsx)("button",{onClick:function(){if(!t.includes(u)||!c.includes(m))return alert("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043b\u044e\u0447\u0430 \u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u0430");var e=function(e,n){var t={};return e.forEach((function(e){if(e[n]in t)return t[e[n]].push(e);t[e[n]]=[e]})),t}(x,u);v(e)},children:"\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(d.jsx)("div",{children:p&&Object(d.jsx)("div",{children:Object.keys(p).map((function(e,n){return Object(d.jsxs)("p",{children:[Object(d.jsxs)("span",{children:[e,": "]}),Object(d.jsxs)("span",{children:["["," ",p[e].map((function(e){return Object(d.jsxs)("span",{children:["{",Object.keys(e).map((function(n){return Object(d.jsxs)("span",{children:[n,": ",e[n],","]})})),"},"]})}))," ","]",","]})]},n)}))})})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.4522de30.chunk.js.map