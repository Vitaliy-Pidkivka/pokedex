(this["webpackJsonptest-pokedex"]=this["webpackJsonptest-pokedex"]||[]).push([[0],{47:function(e,a,t){e.exports=t(75)},52:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(12),c=t.n(n),l=(t(52),t(11)),i=t(41),s=t(102),u=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length,t=new Array(a>1?a-1:0),o=1;o<a;o++)t[o-1]=arguments[o];return t.reduce((function(e,a){return"".concat(e,"-").concat(a)}),e)},p=t(15),d=t.n(p),m=t(31),g=t(22),b=t(30),f=t.n(b);f.a.defaults.baseURL="https://pokeapi.co/api/v2/pokemon";var k,v=function(e){var a=e.data,t=e.url,o=void 0===t?"/":t;return f.a.get(o,a)},h=function(){var e=Object(o.useState)([]),a=Object(l.a)(e,2),t=a[0],r=a[1],n=Object(o.useState)(0),c=Object(l.a)(n,2),i=c[0],s=c[1],u=function(){var e=Object(g.a)(d.a.mark((function e(){var a,o,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={offset:12*i,limit:12},e.next=3,v({data:{params:a}});case 3:o=e.sent,n=o.data,r([].concat(Object(m.a)(t),Object(m.a)(n.results)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){u()}),[i]),{pokemonList:t,setNextPage:function(){return s(i+1)}}},C=function(e){var a=Object(o.useState)({}),t=Object(l.a)(a,2),r=t[0],n=t[1],c=function(){var a=Object(g.a)(d.a.mark((function a(){var t,o;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v({url:e});case 2:t=a.sent,o=t.data,n(o);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(o.useEffect)((function(){c()}),[]),r},x=t(101),j=t(43),O=t(5),E=t(3),y=t(24),B=t(93),N=t(25),w=t(94),S=t(26),W=t(27),F=t(28),z=t(95),L=t(96),P=t(97),T=y.a,I=B.a,_=N.a,A=w.a,J=S.a,D=W.a,H=F.a,M=z.a,R=L.a,U=P.a,Y="bug",q="grass",G="fire",K="flying",Q="poison",V="water",X="normal",Z="fighting",$="ground",ee="rock",ae="ghost",te="steel",oe="electric",re="psychic",ne="ice",ce="dragon",le="dark",ie="fairy",se="shadow",ue="unknown",pe=(k={},Object(E.a)(k,Y,{backgroundColor:I[500],hoverBackgroundColor:I[700]}),Object(E.a)(k,q,{backgroundColor:_[500],hoverBackgroundColor:_[700]}),Object(E.a)(k,G,{backgroundColor:J[500],hoverBackgroundColor:J[700]}),Object(E.a)(k,K,{backgroundColor:A[300],hoverBackgroundColor:A[700]}),Object(E.a)(k,Q,{backgroundColor:_[300],hoverBackgroundColor:_[500]}),Object(E.a)(k,V,{backgroundColor:T[500],hoverBackgroundColor:T[700]}),Object(E.a)(k,X,{backgroundColor:T[400],hoverBackgroundColor:T[600]}),Object(E.a)(k,Z,{backgroundColor:D[200],hoverBackgroundColor:D[300]}),Object(E.a)(k,$,{backgroundColor:I[300],hoverBackgroundColor:I[500]}),Object(E.a)(k,ee,{backgroundColor:H[300],hoverBackgroundColor:H[500]}),Object(E.a)(k,ae,{backgroundColor:D[200],hoverBackgroundColor:D[400]}),Object(E.a)(k,te,{backgroundColor:D[600],hoverBackgroundColor:D[700]}),Object(E.a)(k,oe,{backgroundColor:T[100],hoverBackgroundColor:T[300]}),Object(E.a)(k,re,{backgroundColor:A[100],hoverBackgroundColor:A[300]}),Object(E.a)(k,ne,{backgroundColor:T[600],hoverBackgroundColor:A[800]}),Object(E.a)(k,ce,{backgroundColor:J[700],hoverBackgroundColor:J[800]}),Object(E.a)(k,le,{backgroundColor:M[700],hoverBackgroundColor:M[800]}),Object(E.a)(k,ie,{backgroundColor:R[700],hoverBackgroundColor:R[800]}),Object(E.a)(k,se,{backgroundColor:M[300],hoverBackgroundColor:M[400]}),Object(E.a)(k,ue,{backgroundColor:U[300],hoverBackgroundColor:U[400]}),k),de=function(e){var a=e.type,t=Object(j.a)(e,["type"]),o=pe[a]||{},n=o.backgroundColor,c=o.hoverBackgroundColor,l=Object(O.a)((function(e){var a=e.palette;return{root:{backgroundColor:n,color:a.getContrastText(n),"&:hover":{backgroundColor:c}}}}))(s.a);return r.a.createElement(l,t)},me=Object(x.a)({pokemon:{flex:"1 1 33.333%",boxSizing:"border-box",padding:10},pokemonInner:{padding:5,display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0 0 10px gray"},picture:{cursor:"pointer"},name:{fontSize:16,fontWeight:900,textTransform:"capitalize",cursor:"pointer",marginBottom:10},margin:{margin:"0 5px 5px 0"}}),ge=function(e){var a=e.filter,t=e.name,o=e.setFilter,n=e.setPokemon,c=me(),l=C(t),i=l.sprites,s=void 0===i?{}:i,p=l.types,d=void 0===p?[]:p,m=s.front_default,g=void 0===m?"":m,b=d.map((function(e){return e.type.name}));if(a&&!b.includes(a))return null;var f=function(){return n(l)};return r.a.createElement("div",{className:c.pokemon},r.a.createElement("div",{className:c.pokemonInner},r.a.createElement("img",{className:c.picture,alt:t,onClick:f,src:g}),r.a.createElement("div",{onClick:f,className:c.name},t),r.a.createElement("div",null,b.map((function(e,t){return r.a.createElement(de,{className:c.margin,variant:"contained",key:u(e,t),type:e,onClick:function(){o(e===a?"":e)}},e)})))))},be=t(99),fe=t(104),ke=t(100),ve=Object(x.a)({root:{flex:"1 1 30%",boxShadow:"0 0 10px gray",margin:10},content:{padding:10},picture:{textAlign:"center",height:"80px"},name:{fontSize:24,fontWeight:900,textTransform:"uppercase",textAlign:"center"},pos:{marginBottom:14},boldFont:{fontWeight:"bold",textTransform:"capitalize"},infoWrapper:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid gray"}}),he=function(e){var a=e.pokemon,t=ve(),o=a.name,n=a.sprites,c=void 0===n?{}:n,l=(a.types,a.weight),i=a.height,s=a.base_experience,u=c.front_default,p=void 0===u?"":u;return r.a.createElement(fe.a,{className:t.root,variant:"outlined"},r.a.createElement(be.a,{className:t.content},r.a.createElement(ke.a,{color:"textSecondary",className:t.picture,component:"div",gutterBottom:!0},r.a.createElement("img",{alt:o,src:p})),r.a.createElement(ke.a,{variant:"h5",component:"h1",className:"".concat(t.name," ").concat(t.pos)},o),r.a.createElement(ke.a,{color:"textSecondary",className:t.infoWrapper},r.a.createElement("span",{className:t.boldFont},"Weight: "),r.a.createElement("span",null,l)),r.a.createElement(ke.a,{color:"textSecondary",className:t.infoWrapper},r.a.createElement("span",{className:t.boldFont},"Height: "),r.a.createElement("span",null,i)),r.a.createElement(ke.a,{color:"textSecondary",className:t.infoWrapper},r.a.createElement("span",{className:t.boldFont},"Base experience: "),r.a.createElement("span",null,s)),a.stats.map((function(e){return r.a.createElement(ke.a,{color:"textSecondary",className:t.infoWrapper},r.a.createElement("span",{className:t.boldFont},e.stat.name,": "),r.a.createElement("span",null,e.base_stat))}))))},Ce=Object(x.a)({appWrapper:{display:"flex"},contentWrapper:{display:"flex",flex:"0 1 50%",flexWrap:"wrap"},pokemonList:{display:"flex",flex:"0 1 100%",flexWrap:"wrap",boxSizing:"border-box",height:"calc(100vh - 76px)",overflowY:"scroll",justifyContent:"center"},moreBtn:{flex:"1 0 auto",marginTop:20,padding:16,color:"#fff",background:"#328df6",margin:10}}),xe=function(e){Object(i.a)(e);var a=Ce(),t=Object(o.useState)({}),n=Object(l.a)(t,2),c=n[0],p=n[1],d=Object(o.useState)(""),m=Object(l.a)(d,2),g=m[0],b=m[1],f=h(),k=f.pokemonList,v=f.setNextPage;return r.a.createElement("div",{className:a.appWrapper},r.a.createElement("div",{className:a.contentWrapper},r.a.createElement("div",{className:a.pokemonList},k.map((function(e,a){var t=e.name;return r.a.createElement(ge,Object.assign({key:u(t,a)},{filter:g,name:t,setFilter:b,setPokemon:p}))}))),r.a.createElement(s.a,{className:a.moreBtn,color:"primary",variant:"contained",onClick:v},"Load more")),!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return!(e.hasOwnProperty("length")?e.length:Object.keys(e).length)}(c)&&r.a.createElement(he,{pokemon:c}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(xe,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.7183020f.chunk.js.map