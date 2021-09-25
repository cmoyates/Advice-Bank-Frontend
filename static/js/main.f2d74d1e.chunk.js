(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(30),r=n.n(i),o=(n(85),n(13)),s=(n(86),n(68)),l=n(15),j=n(142),d=n(129),u=n(143),b=n(135),O=n(136),p=n(2),h=function(e){var t=Object(l.f)(),n=Object(c.useState)(""),a=Object(o.a)(n,2),i=a[0],r=a[1];return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/Advice-Bank-Frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Landing Page"}),Object(p.jsx)(j.a,{maxWidth:"sm",children:Object(p.jsxs)(d.a,{direction:"column",children:[Object(p.jsx)(u.a,{children:"Please enter your Username"}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{id:"email",label:"Username",variant:"outlined",value:i,onChange:function(e){r(e.target.value)},autoComplete:"off"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{variant:"contained",onClick:function(){t.push("/dashboard"),e.setUsername(i)},children:"Dashboard"})]})})]})},x=n(33),g=n.n(x),f=n(41),m=n(151),v=n(152),S=n(141),_=n(145),C=n(146),D=function(e){var t=new Date(e.post.ts),n=t.getDate()===e.currentDate.getDate()?"".concat(t.toLocaleTimeString()," Today"):t.toLocaleDateString();return Object(p.jsxs)(_.a,{children:[Object(p.jsxs)(d.a,{direction:"row",alignItems:"center",justifyContent:"space-between",marginX:"20px",children:[Object(p.jsx)(u.a,{variant:"h4",marginTop:"10px",children:e.post.title}),Object(p.jsx)(d.a,{direction:"row",spacing:1,children:e.post.tags.map((function(e,t){return Object(p.jsx)(O.a,{variant:"outlined",size:"small",children:e},t)}))})]}),Object(p.jsxs)(u.a,{variant:"body2",marginLeft:"20px",textAlign:"left",children:[Object(p.jsxs)("span",{style:{cursor:"pointer"},onClick:function(){return console.log(e.post.user_name)},children:[e.post.user_name,": "]}),Object(p.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return console.log(t.toLocaleString())},children:n})]}),Object(p.jsx)(u.a,{marginX:"20px",marginY:"10px",textAlign:"left",style:{maxHeight:"100px",height:"100px",overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:4},children:e.post.content}),Object(p.jsx)(C.a,{children:Object(p.jsx)(d.a,{width:"100%",direction:"row",justifyContent:"end",alignItems:"center",children:Object(p.jsx)(O.a,{onClick:function(){e.handleShowDetails(e.post)},children:"Details"})})})]})},T=n(140),E=n(147),w=n(148),P=n(149),y=function(e){var t=new Date(e.post.ts),n=t.getDate()===e.currentDate.getDate()?"today at ".concat(t.toLocaleTimeString()):"on ".concat(t.toLocaleDateString());return Object(p.jsxs)(T.a,{fullWidth:!0,open:e.open,onClose:function(){return e.setDialogOpen(!1)},children:[Object(p.jsx)(E.a,{children:e.post.title}),Object(p.jsxs)(w.a,{style:{color:"#000000",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"0px"},children:[Object(p.jsxs)("div",{children:["Posted by ",e.post.user_name]}),Object(p.jsxs)("div",{children:["Posted ",n]}),e.post.tags.length>0?Object(p.jsxs)("div",{children:["Tags: ",Object(p.jsx)(d.a,{direction:"row",paddingTop:"5px",spacing:1,children:e.post.tags.map((function(e,t){return Object(p.jsx)(O.a,{size:"small",variant:"outlined",children:e},t)}))})]}):null]}),Object(p.jsxs)(P.a,{padding:"20px",style:{color:"#000000"},children:['"',e.post.content,'"']})]})},A=n(150),L=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),l=s[0],j=s[1];return Object(p.jsxs)(T.a,{open:e.open,onClose:function(){return e.setDialogOpen(!1)},children:[Object(p.jsx)(E.a,{children:"Submit a Post"}),Object(p.jsxs)(w.a,{children:[Object(p.jsx)(b.a,{fullWidth:!0,margin:"normal",id:"title",label:"Title",variant:"outlined",autoComplete:"off",value:a,onChange:function(e){i(e.target.value)}}),Object(p.jsx)(b.a,{fullWidth:!0,margin:"dense",id:"content",label:"Content",variant:"outlined",multiline:!0,rows:4,autoComplete:"off",value:l,onChange:function(e){j(e.target.value)}})]}),Object(p.jsx)(A.a,{children:Object(p.jsx)(O.a,{variant:"contained",onClick:Object(f.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setDialogOpen(!1),n={user_id:1,user_name:e.username,user_img:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",title:a,content:l,tags:[]},console.log(n),t.next=5,e.handleSubmitPost(n);case 5:case"end":return t.stop()}}),t)}))),children:"Submit"})})]})},k={post_id:-1,user_id:-1,user_name:"",user_img:"",title:"",content:"",tags:[],ts:""},R=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),l=s[0],j=s[1],h=Object(c.useState)(k),x=Object(o.a)(h,2),_=x[0],C=x[1],T=Object(c.useState)([]),E=Object(o.a)(T,2),w=E[0],P=E[1],A=new Date,R=function(){var e=Object(f.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Advice-Bank-Frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/posts/"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),P(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){R()}),[]);var W=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Advice-Bank-Frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/posts"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});case 2:return e.next=4,R();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){C(e),j(!0)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{position:"static",children:Object(p.jsx)(v.a,{children:Object(p.jsxs)(u.a,{variant:"h5",children:[e.username,"'s Dashboard"]})})}),Object(p.jsxs)(d.a,{margin:"10px",direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(p.jsx)(b.a,{id:"outlined-basic",label:"Search",variant:"outlined"}),Object(p.jsx)(O.a,{variant:"contained",onClick:function(){return i(!0)},children:"Post"})]}),Object(p.jsx)(S.a,{container:!0,spacing:4,padding:"20px",children:w.map((function(e,t){return Object(p.jsx)(S.a,{item:!0,xs:6,children:Object(p.jsx)(D,{post:e,handleShowDetails:F,currentDate:A})},t)}))}),Object(p.jsx)(L,{open:a,setDialogOpen:i,handleSubmitPost:W,username:e.username}),Object(p.jsx)(y,{open:l,setDialogOpen:j,post:_,currentDate:A})]})},W=n(20),F=n(69);var B=function(){var e=Object(F.a)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],i=n[1];return Object(p.jsx)(W.c,{theme:e,children:Object(p.jsx)(s.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(p.jsx)(h,{setUsername:i})}}),Object(p.jsx)(l.a,{path:"/dashboard",component:function(){return Object(p.jsx)(R,{username:a})}})]})})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),U()}},[[98,1,2]]]);
//# sourceMappingURL=main.f2d74d1e.chunk.js.map