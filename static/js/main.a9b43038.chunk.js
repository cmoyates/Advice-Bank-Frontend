(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(41),o=n.n(r),i=(n(116),n(117),n(96)),s=n(16),l=n(23),u=n.n(l),j=n(31),d=n(191),b=n(167),p=n(192),h=n(2),O=function(e){var t=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("".concat("https://advice-bank-backend.herokuapp.com","/auth/google"),"_self");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Landing Page"}),Object(h.jsx)(d.a,{maxWidth:"sm",children:Object(h.jsx)(b.a,{direction:"column",alignItems:"center",children:Object(h.jsx)(p.a,{variant:"contained",onClick:function(){t()},children:"Login with Google"})})})]})},x=n(13),f=n(27),g=n(173),m=n(190),v=n(193),w=n(195),D=n(196),k=n(197),S=function(e){var t=null;if(e.post){var n=new Date(e.post.ts);t=n.getDate()===e.currentDate.getDate()?"today at ".concat(n.toLocaleTimeString()):"on ".concat(n.toLocaleDateString())}return e.post?Object(h.jsxs)(v.a,{fullWidth:!0,open:e.open,onClose:function(){return e.setDialogOpen(!1)},children:[Object(h.jsx)(w.a,{children:e.post.title}),Object(h.jsxs)(D.a,{style:{color:"#000000",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"0px",paddingTop:"0px"},children:[Object(h.jsxs)("div",{children:["Posted by ",e.post.user_name]}),Object(h.jsxs)("div",{children:["Posted ",t]}),e.post.tags.length>0?Object(h.jsxs)("div",{children:["Tags: ",Object(h.jsx)(b.a,{direction:"row",paddingTop:"5px",spacing:1,children:e.post.tags.map((function(e,t){return Object(h.jsx)(p.a,{size:"small",variant:"outlined",children:e},t)}))})]}):null]}),Object(h.jsxs)(k.a,{padding:"20px",style:{color:"#000000"},children:['"',e.post.content,'"']})]}):null},C=n(187),y=n(198),L=n(61),T=n(199),P=function(e){var t=new Date(e.post.ts),n=t.getDate()===e.currentDate.getDate()?"".concat(t.toLocaleTimeString()," Today"):t.toLocaleDateString();return Object(h.jsxs)(y.a,{children:[Object(h.jsxs)(b.a,{direction:"row",alignItems:"center",justifyContent:"space-between",marginX:"20px",children:[Object(h.jsx)(L.a,{variant:"h4",marginTop:"10px",children:e.post.title}),Object(h.jsx)(b.a,{direction:"row",spacing:1,children:e.post.tags.map((function(e,t){return Object(h.jsx)(p.a,{variant:"outlined",size:"small",children:e},t)}))})]}),Object(h.jsxs)(L.a,{variant:"body2",marginLeft:"20px",textAlign:"left",children:[Object(h.jsxs)("span",{style:{cursor:"pointer"},onClick:function(){return console.log(e.post.user_name)},children:[e.post.user_name,": "]}),Object(h.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return console.log(t.toLocaleString())},children:n})]}),Object(h.jsx)(L.a,{marginX:"20px",marginY:"10px",textAlign:"left",style:{maxHeight:"100px",height:"100px",overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:4},children:e.post.content}),Object(h.jsx)(T.a,{children:Object(h.jsx)(b.a,{width:"100%",direction:"row",justifyContent:"end",alignItems:"center",children:Object(h.jsx)(p.a,{onClick:function(){e.handleShowDetails(e.post)},children:"Details"})})})]})},_=function(e){var t=Object(f.a)(),n=Object(g.a)(t.breakpoints.down("sm"));return Object(h.jsx)(C.a,{container:!0,padding:2,spacing:4,minHeight:"min-content",children:e.posts.map((function(t,c){return Object(h.jsx)(C.a,{item:!0,xs:n?12:6,children:Object(h.jsx)(P,{post:t,handleShowDetails:e.handleShowDetails,currentDate:e.currentDate})},c)}))})},A=n(77),I=n(177),M=n(180),F=n(174),R=n(194),W=n(175),z=n(184),B=n(188),E=n(176),J=n(178),G=function(e){return Object(h.jsx)(M.a,{open:e.open,anchorEl:e.anchorRef.current,role:void 0,placement:"bottom-start",transition:!0,disablePortal:!0,children:function(t){var n=t.TransitionProps,c=t.placement;return Object(h.jsx)(F.a,Object(A.a)(Object(A.a)({},n),{},{style:{transformOrigin:"bottom-start"===c?"left top":"left bottom"},children:Object(h.jsx)(R.a,{children:Object(h.jsx)(W.a,{onClickAway:e.handleClose,children:Object(h.jsx)(z.a,{autoFocusItem:e.open,id:"composition-menu","aria-labelledby":"composition-button",children:Object(h.jsxs)(B.a,{onClick:e.handleLogout,children:[Object(h.jsx)(E.a,{children:Object(h.jsx)(I.a,{})}),Object(h.jsx)(J.a,{children:"Logout"})]})})})})}))}})},H=n(181),N=n(200),U=function(e){var t=Object(c.useState)(""),n=Object(x.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),i=Object(x.a)(o,2),s=i[0],l=i[1];return Object(h.jsxs)(v.a,{open:e.open,onClose:function(){return e.setDialogOpen(!1)},children:[Object(h.jsx)(w.a,{children:"Submit a Post"}),Object(h.jsxs)(D.a,{children:[Object(h.jsx)(H.a,{fullWidth:!0,margin:"normal",id:"title",label:"Title",variant:"outlined",autoComplete:"off",value:a,onChange:function(e){r(e.target.value)}}),Object(h.jsx)(H.a,{fullWidth:!0,margin:"dense",id:"content",label:"Content",variant:"outlined",multiline:!0,rows:4,autoComplete:"off",value:s,onChange:function(e){l(e.target.value)}})]}),Object(h.jsx)(N.a,{children:Object(h.jsx)(p.a,{variant:"contained",onClick:Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setDialogOpen(!1),n={user_id:1,user_name:e.username,user_img:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",title:a,content:s,tags:[]},console.log(n),t.next=5,e.handleSubmitPost(n);case 5:r(""),l("");case 7:case"end":return t.stop()}}),t)}))),children:"Submit"})})]})},X=Object(c.createContext)(null),Y=function(e){var t=Object(c.useState)(null),n=Object(x.a)(t,2),a=n[0],r=n[1],o=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(window.location.href),e.next=3,fetch("".concat("https://advice-bank-backend.herokuapp.com","/getuser"),{credentials:"include",headers:{"Access-Control-Allow-Origin":window.location.href}});case 3:return t=e.sent,e.prev=4,e.next=7,t.json();case 7:n=e.sent,console.log(n),r(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(h.jsx)(X.Provider,{value:{userObject:a,setUserObject:r},children:e.children})},q=n(4),K=function(e){var t=Object(q.a)(R.a)((function(){return{flex:1,paddingTop:30,flexDirection:"column",justifyContent:"start",alignItems:"center",display:e.isMedScreen?"none":"flex"}}));return Object(h.jsx)(t,{children:Object(h.jsxs)(b.a,{direction:"column",justifyContent:"start",alignItems:"center",spacing:4,height:"100%",children:[Object(h.jsx)(p.a,{variant:"contained",onClick:function(){return e.setSubmitDialogOpen(!0)},children:"Post"}),Object(h.jsx)(H.a,{id:"outlined-basic",label:"Search",variant:"outlined"})]})})},Q=n(201),V=n(202),Z=n(203),$=n(185),ee=n(189),te=n(94),ne=n.n(te),ce=n(93),ae=n.n(ce),re=n(92),oe=n.n(re),ie=[null,Object(h.jsx)(oe.a,{}),Object(h.jsx)(ae.a,{})],se=function(e){return Object(h.jsx)(Q.a,{position:"static",style:{flexShrink:0},children:Object(h.jsxs)(V.a,{children:[e.isMedScreen?Object(h.jsx)(Z.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){e.setDrawerOpen(!0)},children:Object(h.jsx)(ne.a,{})}):null,Object(h.jsx)(L.a,{variant:"h5",flexGrow:1,textAlign:"start",children:"Dashboard"}),e.userData?Object(h.jsxs)(b.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(h.jsx)(L.a,{children:e.userData.user_name}),Object(h.jsx)(Z.a,{onClick:function(){e.setMenuOpen(!0)},children:Object(h.jsx)($.a,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},color:"error",badgeContent:ie[2],children:Object(h.jsx)(ee.a,{alt:e.userData.user_name,src:e.userData.user_img,ref:e.anchorRef})})})]}):Object(h.jsx)(L.a,{children:"You are not logged in"})]})})},le=function(e){var t=Object(c.useContext)(X),n=Object(f.a)(),a=Object(g.a)(n.breakpoints.down("md")),r=Object(s.g)(),o=Object(c.useRef)(null),i=Object(c.useState)(!1),l=Object(x.a)(i,2),d=l[0],b=l[1],p=Object(c.useState)(!1),O=Object(x.a)(p,2),v=O[0],w=O[1],D=Object(c.useState)(!1),k=Object(x.a)(D,2),C=k[0],y=k[1],L=Object(c.useState)(!1),T=Object(x.a)(L,2),P=T[0],A=T[1],I=Object(c.useState)(null),M=Object(x.a)(I,2),F=M[0],R=M[1],W=Object(c.useState)([]),z=Object(x.a)(W,2),B=z[0],E=z[1],J=new Date,H=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://advice-bank-backend.herokuapp.com","/posts/"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),E(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){H()}),[]);var N=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://advice-bank-backend.herokuapp.com","/posts"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});case 2:return e.next=4,H();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://advice-bank-backend.herokuapp.com","/logout"),{credentials:"include",headers:{"Access-Control-Allow-Origin":window.location.href}});case 2:return n=e.sent,console.log(n),e.next=6,n.text();case 6:"done"===e.sent&&(null===t||void 0===t||t.setUserObject(null),r.push("/"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(se,{userData:null===t||void 0===t?void 0:t.userObject,isMedScreen:a,setDrawerOpen:A,setMenuOpen:y,anchorRef:o}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",height:"100%",flex:1,overflow:"auto"},children:[Object(h.jsx)(K,{isMedScreen:a,setSubmitDialogOpen:b}),Object(h.jsx)("div",{style:{flex:3,display:"flex",flexDirection:"column",overflow:"auto",height:"100%"},children:Object(h.jsx)(_,{posts:B,handleShowDetails:function(e){R(e),w(!0)},currentDate:J})})]}),Object(h.jsx)(U,{open:d,setDialogOpen:b,handleSubmitPost:N,username:e.userData?e.userData.user_name:""}),Object(h.jsx)(S,{open:v,setDialogOpen:w,post:F,currentDate:J}),Object(h.jsx)(G,{open:C,anchorRef:o,handleClose:function(){y(!1)},handleLogout:Y}),Object(h.jsx)(m.a,{anchor:"left",open:P&&a,onClose:function(){A(!1)},children:Object(h.jsx)(K,{isMedScreen:!a,setSubmitDialogOpen:b})})]})},ue=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"404 no."})})},je=n(20),de=n(97);var be=function(){var e=Object(de.a)(),t=Object(c.useContext)(X);return Object(h.jsx)(je.c,{theme:e,children:Object(h.jsx)(i.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{exact:!0,path:"/",component:function(){return t&&t.userObject?Object(h.jsx)(s.a,{to:"/dashboard"}):Object(h.jsx)(O,{})}}),Object(h.jsx)(s.b,{exact:!0,path:"/dashboard",component:function(){return Object(h.jsx)(le,{userData:(null===t||void 0===t?void 0:t.userObject)||null})}}),Object(h.jsx)(s.b,{exact:!0,path:"/404",component:function(){return Object(h.jsx)(ue,{})}})]})})})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Y,{children:Object(h.jsx)(be,{})})}),document.getElementById("root")),pe()}},[[129,1,2]]]);
//# sourceMappingURL=main.a9b43038.chunk.js.map