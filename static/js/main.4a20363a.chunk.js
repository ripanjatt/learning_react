(this.webpackJsonpbootstraper=this.webpackJsonpbootstraper||[]).push([[0],{48:function(n,e,t){"use strict";t.r(e);var i=t(0),c=t.n(i),a=t(24),r=t.n(a),o=t(22),s=t(16),l=t(8),d=t(50),p=t(51),h=t(52),b=t(31),u=t(53),x=t(54),j=t(9),m=(t(36),t(20)),f=t.n(m),g=t(25),O=function n(){var e=new n;e.append("Accept","application/json"),e.append("Authorization","")};function w(n){for(var e=(new DOMParser).parseFromString(n,"text/html").getElementsByClassName("column collection_thumb"),t=[],i=0;i<e.length;i++)t.push("https://wallpaperaccess.com/full/"+e.item(i).getElementsByTagName("img").item(0).getAttribute("data-src").replace("/thumb/",""));return t}var v,y,k,E,A,B,F,C,N,S=function(){var n=Object(g.a)(f.a.mark((function n(e,t){var i,c,a,r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i="https://wallpaperaccess.com/search?q="+e.replaceAll(" ","+"),n.next=3,fetch(i,{method:"GET",headers:O});case 3:return c=n.sent,n.next=6,c.text();case 6:a=n.sent,r=w(a),t(r);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),D=[{title:"Home",icon:"icofont-ui-home",href:"#"},{title:"Explore",icon:"icofont-compass",href:"#"},{title:"About",icon:"icofont-info",href:"#"}],z=["cosmos","sky","marvel","dc","superheroes","beautiful","iron man","avengers","planes","guns"],G=t(1),I=j.b.div(v||(v=Object(l.a)(["\n    justify-content: center;\n    align-items: center;\n    background: #E7F2F8;\n\n    .main {\n        width: 100vw;\n        height: 96vh;\n        position: relative;\n    }\n\n    h3, h4 {\n        width: 100%;\n        text-align: center;\n        padding-top: 32px;\n        font-weight: 900;\n        color: #CB41F9;\n    }\n\n    .column {\n        width: 10%;\n        @media (max-width: 1024px) {\n            display: none;\n        }\n    }\n\n    .col-8 {\n        @media (max-width: 1024px) {\n            width: 100%;\n        }\n    }\n\n    .menuButton {\n        background: #CB41F9;\n        border: none;\n        display: none;\n\n        &:focus {\n            outline: none;\n        }\n\n        @media (max-width: 1024px) {\n            display: block;\n        }\n    }\n\n    .tags {\n        display: flex;\n        flex-wrap: wrap;\n        margin-top: 20%;\n    }\n"]))),T=j.b.div(y||(y=Object(l.a)(["\n    display: flex;\n    width: 100%;\n    height: 80vh;\n    padding: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    span {\n        padding-left: 16px;\n    }\n"]))),M=j.b.a(k||(k=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    outline: none;\n    border: 1px solid #EADBEF;\n    padding-left: 16px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-decoration: none;\n    font-size: 1.1rem;\n    font-weight: 700;\n    text-align: left;\n    margin-bottom: 8px;\n    width: 80%;\n    border-radius: 8px;\n    background: ",";\n    color: ",";\n    transition: all .5s ease-in-out;\n    cursor: pointer;\n\n    &:hover {\n        color: ",";\n        background: ",";\n    }\n"])),(function(n){return n.isActive?"#CB41F9":"transparent"}),(function(n){return n.isActive?"white":"black"}),(function(n){return n.isActive?"white":"black"}),(function(n){return n.isActive?"#CB41F9":"#EADBEF"})),H=j.b.div(E||(E=Object(l.a)(["\n    background: #EADBEF;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    border: none; \n    border-radius: 8px;\n    padding-top: 32px;\n    padding-bottom: 32px;\n    padding-left: 32px;\n    padding-right: 32px;\n    box-shadow: 1px 2px 2px 2px rgba(5, 5, 5, 0.1);\n"]))),J=j.b.div(A||(A=Object(l.a)(["\n    display: flex;\n    height: 64px;\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n\n    h2 {\n        font-weight: 900;\n        color: #CB41F9;\n    }\n\n    .inputGroup {\n        width: 40%;\n    }\n"]))),P=j.b.div(B||(B=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    overflow-y: scroll;\n    align-items: center;\n    justify-content: center;\n    height: 72vh;\n\n    img {\n        width: 240px;\n        height: 128px;\n        border-radius: 8px;\n        margin: 8px;\n        object-fit: cover;\n        transition: all 0.8s ease-in-out;\n        box-shadow: 1px 1px 1px 2px rgb(1, 1, 1, 0.2);\n\n        &:hover {\n            transform: scale(1.05);\n        }\n        \n        @media (max-width: 600px) {\n            width: 512px;\n            height: 256px;\n        }\n\n        @media (max-width: 1024px) {\n            width: 50%;\n            height: 256px;\n        }\n\n        @media (max-width: 1308px) {\n            width: 240px;\n            height: 128px;\n        }\n    }\n\n    ::-webkit-scrollbar {\n        width: 8px;\n        border: none;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: #EADBEF;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: #CB41F9;\n        border-radius: 2px;\n    }\n"]))),W=j.b.a(F||(F=Object(l.a)(["\n    background: #EADBEF;\n    padding: 16px;\n    text-decoration: none;\n    color: black;\n    margin: 4px;\n    border-radius: 16px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px 2px rgba(1, 1, 1, 0.1);\n    transition: all 0.5s ease-in-out;\n\n    &:hover {\n        outline: none;\n        color: black;\n        transform: scale(1.1);\n    }\n"]))),q=j.b.div(C||(C=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    background: #E7F2F8;\n    height: 100vh;\n    width: 100vw;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: ",";\n    z-index: 100;\n    transition: all 1s ease-in-out;\n\n    span {\n        padding: 4px;\n    }\n\n    @media (min-width: 1024px) {\n        display: none;\n    }\n"])),(function(n){return n.show?"0%":"-100%"}));function K(){var n=Object(i.useState)([]),e=Object(s.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(!0),r=Object(s.a)(a,2),l=r[0],j=r[1],m=Object(i.useState)(!1),f=Object(s.a)(m,2),g=f[0],O=f[1],w=Object(i.useState)(0),v=Object(s.a)(w,2),y=v[0],k=v[1],E=function(n){c([]),c((function(e){return[].concat(Object(o.a)(e),Object(o.a)(n))}))};l&&(j(!1),S("nature",E));var A=function(n){return parseInt(n)===parseInt(y)},B=function(n){O(!1),k(n)};return Object(G.jsxs)(I,{children:[Object(G.jsxs)(q,{show:g,children:[D.map((function(n,e){return Object(G.jsxs)(M,{href:n.href,onClick:function(){return B(e)},isActive:A(e),children:[Object(G.jsx)("i",{className:n.icon}),Object(G.jsx)("span",{children:n.title})]},e)})),Object(G.jsxs)(M,{href:"#",onClick:function(){return B(y)},isActive:!1,children:[Object(G.jsx)("i",{className:"icofont-close"}),Object(G.jsx)("span",{children:"Close"})]})]}),Object(G.jsx)(d.a,{className:"p-3 main",fluid:!0,children:Object(G.jsxs)(p.a,{children:[Object(G.jsxs)(h.a,{className:"column",children:[Object(G.jsx)("h4",{children:"WallpaperLib."}),Object(G.jsx)(T,{children:D.map((function(n,e){return Object(G.jsxs)(M,{href:n.href,onClick:function(){return function(n){k(n)}(e)},isActive:A(e),children:[Object(G.jsx)("i",{className:n.icon}),Object(G.jsx)("span",{children:n.title})]},e)}))})]}),Object(G.jsx)(h.a,{xs:8,children:Object(G.jsxs)(H,{children:[Object(G.jsxs)(J,{children:[Object(G.jsx)(b.a,{className:"menuButton",onClick:function(){return O(!g)},children:Object(G.jsx)("i",{className:"icofont-navigation-menu"})}),Object(G.jsx)("h2",{children:"Welcome!"}),Object(G.jsxs)(u.a,{className:"mb-3 inputGroup",children:[Object(G.jsx)(u.a.Text,{id:"basic-addon1",children:Object(G.jsx)("i",{className:"icofont-search-2"})}),Object(G.jsx)(x.a,{id:"input",placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon1",onKeyDown:function(n){!function(n){13===n.keyCode&&S(document.getElementById("input").value,E)}(n)}})]})]}),Object(G.jsx)(P,{children:t.map((function(n,e){return Object(G.jsx)("img",{src:n,alt:"img"},e)}))})]})}),Object(G.jsxs)(h.a,{className:"column",children:[Object(G.jsx)("h3",{children:"Tags"}),Object(G.jsx)("div",{className:"tags",children:z.map((function(n,e){return Object(G.jsx)(W,{onClick:function(){return S(n,E)},children:n},e)}))})]})]})})]})}var L,_=j.b.div(N||(N=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n"])));function Q(){return Object(G.jsxs)(_,{children:[Object(G.jsx)("h2",{children:"Page not found!"}),Object(G.jsx)(b.a,{variant:"primary",onClick:function(){return window.location.href="/"},children:"Go to Homepage!"})]})}var R=Object(j.a)(L||(L=Object(l.a)(["\n  * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Montserrat', sans-serif;\n  }\n\n  html, body {\n      overflow-y: hidden;\n  }\n"]))),U=t(29),V=t(4),X=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(R,{}),Object(G.jsx)(U.a,{children:Object(G.jsxs)(V.c,{children:[Object(G.jsx)(V.a,{exact:!0,path:"/",component:K}),Object(G.jsx)(V.a,{component:Q})]})})]})};r.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(X,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4a20363a.chunk.js.map