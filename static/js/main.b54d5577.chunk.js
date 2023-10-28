(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(24),a=(n(33),n(34),n(9)),s=n(3),r=n(13),o=n.n(r),i=(n(35),n(2)),j=function(){var e=function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})};return"/home"===Object(s.n)().pathname?Object(i.jsx)(s.a,{to:"/"}):Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:e,to:"/people",children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})},l=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},b=n(0),h=n.n(b),u=n(5),O=n(4),x=n(6);function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=h.a.createContext({peoplE:[],loading:!1,messageNotHasPeople:"",errorMessage:"",loadPeople:function(){var e=Object(x.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),f=function(e){var t=e.children,n=Object(b.useState)([]),c=Object(u.a)(n,2),a=c[0],s=c[1],r=Object(b.useState)(!1),o=Object(u.a)(r,2),j=o[0],l=o[1],d=Object(b.useState)(""),h=Object(u.a)(d,2),O=h[0],x=h[1],f=Object(b.useState)(""),v=Object(u.a)(f,2),g=v[0],N=v[1],P={peoplE:a,loading:j,messageNotHasPeople:g,errorMessage:O,loadPeople:function(){return x(""),l(!0),p().then((function(e){s(e),e.length||N("There are no people on the server")})).catch((function(){return x("Something went wrong")})).finally((function(){return l(!1)}))}};return Object(i.jsx)(m.Provider,{value:P,children:t})},v=function(e){var t=e.person,n=Object(s.r)().slugPerson,c=t.slug,r=t.motherName,j=t.fatherName,l=t.name,d=t.sex,h=t.born,u=t.died,O=Object(b.useContext)(m).peoplE,x=O.find((function(e){return e.name===r})),p=O.find((function(e){return e.name===j})),f=function(e){return Object(i.jsx)(a.b,{to:"/people/".concat(null===e||void 0===e?void 0:e.slug),className:o()({"has-text-danger":"f"===(null===e||void 0===e?void 0:e.sex)}),children:null===e||void 0===e?void 0:e.name})};return Object(i.jsxs)("tr",{"data-cy":"person",className:o()({"has-background-warning":n===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{className:o()({"has-text-danger":"f"===d}),to:"/people/".concat(c),children:l})}),Object(i.jsx)("td",{children:d}),Object(i.jsx)("td",{children:h}),Object(i.jsx)("td",{children:u}),Object(i.jsx)("td",{children:x?f(x):r||"-"}),Object(i.jsx)("td",{children:p?f(p):j||"-"})]})},g=function(e){var t=e.people;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(v,{person:e},e.slug)}))})]})},N=(n(37),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),P=function(){var e=Object(b.useContext)(m),t=e.peoplE,n=e.loading,c=e.messageNotHasPeople,a=e.errorMessage,s=e.loadPeople;return Object(b.useEffect)((function(){s()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[n&&Object(i.jsx)(N,{}),c&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:c}),a&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:a}),!n&&!c&&!a&&Object(i.jsx)(g,{people:t})]})})]})},y=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(f,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(j,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(l,{})}),Object(i.jsxs)(s.c,{path:"people",children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(P,{})}),Object(i.jsx)(s.c,{path:":slugPerson",element:Object(i.jsx)(P,{})})]}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(d,{})})]})})})})};Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(y,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.b54d5577.chunk.js.map