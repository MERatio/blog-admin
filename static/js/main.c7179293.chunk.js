(this["webpackJsonpblog-admin"]=this["webpackJsonpblog-admin"]||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(31),s=n.n(a),r=n(1),c=n.n(r),i=n(32),o=n.n(i),u=n(8),l=(n(42),n(43),n(45),n(2)),p=n.n(l),d=n(4),b=n(3),j=n(5),m=n(6),h=n(35);function f(){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(p.a.mark((function e(){var t,n,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(p.a.mark((function e(t){var n,a,s,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"",a=r.length>2&&void 0!==r[2]?r[2]:{},e.next=4,fetch(n,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify(a)});case 4:return s=e.sent,e.abrupt("return",s.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("PUT","".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(t._id),Object(b.a)(Object(b.a)({},t),{},{published:!t.published}));case 3:if(!(n=e.sent).err){e.next=8;break}k(n.err),e.next=13;break;case 8:if(!n.errors){e.next=12;break}window.flashes(n.errors),e.next=13;break;case 12:return e.abrupt("return",n.post);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function y(e,t){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(p.a.mark((function e(t,n){var a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(t,"/comments/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(!(s=e.sent).err){e.next=11;break}k(s.err),e.next=12;break;case 11:return e.abrupt("return",s.comment);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function k(e){window.flashes([{msg:e.message}])}var S=n(33),P=new(n.n(S).a),C=(n(47),n(0));var F=function(e){var t=e.type,n=e.size;return Object(C.jsx)("div",{className:"BootstrapSpinner",children:Object(C.jsx)("div",{className:"spinner-".concat(t," text-primary"),style:{width:n,height:n},role:"status",children:Object(C.jsx)("span",{className:"sr-only",children:"Loading..."})})})};var D=function(e){var t=e.user,n=e.signOut;return Object(C.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top mb-4",children:[Object(C.jsx)(u.c,{to:"/",className:"navbar-brand",children:"Blog User"}),Object(C.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(C.jsx)("span",{className:"navbar-toggler-icon"})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(C.jsx)("ul",{className:"navbar-nav ml-auto",children:t?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(u.c,{exact:!0,to:"/posts",className:"nav-link",activeClassName:"active",children:"Posts"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(u.c,{exact:!0,to:"/posts/new",className:"nav-link",activeClassName:"active",children:"Add a new post"})}),Object(C.jsxs)("li",{className:"nav-item dropdown",children:[Object(C.jsx)("button",{className:"nav-link btn btn-link dropdown-toggle",id:"navbarDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:t.username}),Object(C.jsx)("div",{className:"dropdown-menu dropdown-menu-right",children:Object(C.jsx)("button",{className:"dropdown-item",type:"button",onClick:n,children:"Sign out"})})]})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(u.c,{exact:!0,to:"/sign-up",className:"nav-link",activeClassName:"active",children:"Sign Up"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(u.c,{exact:!0,to:"/sign-in",className:"nav-link",activeClassName:"active",children:"Sign In"})})]})})})]})};var T=function(e){var t=e.flashes,n=e.handleFlashDelete;return Object(C.jsx)(C.Fragment,{children:t.map((function(e){return Object(C.jsxs)("div",{className:"alert alert-".concat(e.type||"danger"," alert-dismissible"),role:"alert",children:[e.msg,Object(C.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return n(e.id)},children:Object(C.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]},e.id)}))})},U=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){return a(!0),function(){return a(!1)}}),[]),n},I=n(15),L=n.n(I),q=n(18),E=n.n(q);var _=function(e){var t=e.type,n=e.text,a=e.isLoading,s=e.loadingText,r=e.onClick;return a?Object(C.jsxs)("button",{type:"button",className:"btn btn-".concat(t),disabled:!0,children:[Object(C.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),s]}):Object(C.jsx)("button",{type:"button",className:"btn btn-".concat(t),onClick:r,children:n})};var B=function(e){var t=e.postWithComments,n=e.handlePostPublishedUpdate,a=U(),s=Object(r.useState)(!1),c=Object(j.a)(s,2),i=c[0],o=c[1];function l(){return(l=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,n(t);case 3:a&&o(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(C.jsxs)("div",{className:"card mb-2",children:[Object(C.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h5",{className:"card-title",children:t.title}),Object(C.jsx)("p",{className:"card-subtitle mb-2",children:t.author.firstName+" "+t.author.lastName}),Object(C.jsx)("p",{className:"card-subtitle",children:E()(new Date(t.createdAt),"PPpp")})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(_,{type:t.published?"danger":"warning",text:t.published?"Unpublish":"Publish",isLoading:i,loadingText:"Updating...",onClick:function(){return l.apply(this,arguments)}}),Object(C.jsx)(u.b,{to:"/posts/".concat(t._id,"/edit"),className:"ml-3",children:"Edit"})]})]}),Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("p",{className:"card-text",children:t.body}),Object(C.jsxs)(u.b,{to:"/posts/".concat(t._id),className:"card-link",children:[t.comments.length," comments"]})]})]})};function A(e){var t=e.postsWithComments,n=e.handlePostPublishedUpdate,a=t.map((function(e){return Object(C.jsx)(B,{postWithComments:e,handlePostPublishedUpdate:n},e._id)}));return Object(C.jsx)(C.Fragment,{children:a})}A.propTypes={postsWithComments:L.a.array.isRequired,handlePostPublishedUpdate:L.a.func.isRequired};var z=A;var W=function(){var e=U(),t=Object(r.useState)([]),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),i=Object(j.a)(c,2),o=i[0],u=i[1];function l(){return(l=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n);case 2:a=t.sent,e&&a._id&&s((function(e){return e.map((function(e){return e._id!==n._id?e:Object(b.a)(Object(b.a)({},e),{},{published:a.published})}))}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function t(){return(t=Object(d.a)(p.a.mark((function t(){var n,a,r,c,i,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=function(){return(c=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(t.map(function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(t._id,"/comments"));case 3:if(!(n=e.sent).err){e.next=8;break}k(n.err),e.next=9;break;case 8:return e.abrupt("return",Object(b.a)(Object(b.a)({},t),{},{comments:n.comments}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)},r=function(e){return c.apply(this,arguments)},a=function(){return(a=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://blog-api-97575.herokuapp.com","/posts"));case 3:if(!(t=e.sent).err){e.next=8;break}k(t.err),e.next=9;break;case 8:return e.abrupt("return",t.posts);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)},n=function(){return a.apply(this,arguments)},!e){t.next=14;break}return u(!0),t.next=8,n();case 8:return i=t.sent,t.next=11,r(i);case 11:o=t.sent,u(!1),s(o);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),o?Object(C.jsx)("div",{className:"bootstrap-spinner-container",children:Object(C.jsx)(F,{type:"border",size:"2em"})}):Object(C.jsx)("section",{className:"position-relative",children:Object(C.jsx)(z,{postsWithComments:a,handlePostPublishedUpdate:function(e){return l.apply(this,arguments)}})})};var J=function(){return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row justify-content-center",children:Object(C.jsx)("div",{className:"col-md-8",children:Object(C.jsx)(W,{})})})})},R=n(14);function Y(e){var t=e.text;return e.isSubmitting?Object(C.jsxs)("button",{type:"submit",className:"btn btn-primary w-100",disabled:!0,children:[Object(C.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Submitting..."]}):Object(C.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:t})}Y.defaultProps={text:"Submit"};var G=Y;var M=function(e){var t=e.state,n=e.onInputChange,a=e.onSubmit,s=e.isSubmitting,r=e.submitBtnText;return Object(C.jsxs)("form",{onSubmit:a,children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"title",children:"Title"}),Object(C.jsx)("textarea",{className:"form-control",id:"title",name:"title",value:t.title,onChange:n,required:!0,maxLength:70})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"body",children:"Body"}),Object(C.jsx)("textarea",{className:"form-control",id:"body",name:"body",value:t.body,onChange:n,required:!0,maxLength:1e3})]}),Object(C.jsxs)("div",{className:"form-group form-check",children:[Object(C.jsx)("input",{type:"checkbox",className:"form-check-input",id:"published",name:"published",checked:t.published,onChange:n}),Object(C.jsx)("label",{className:"form-check-label",htmlFor:"published",children:"Published?"})]}),Object(C.jsx)(G,{text:r,isSubmitting:s})]})};var H=function(){var e=U(),t=Object(r.useState)({title:"",body:"",published:!1}),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),i=Object(j.a)(c,2),o=i[0],u=i[1];function l(){return(l=Object(d.a)(p.a.mark((function t(n){var r,c,i,o,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),u(!0),t.next=5,O("POST","".concat("https://blog-api-97575.herokuapp.com","/posts"),a);case 5:r=t.sent,e&&u(!1),r.err?k(r.err):r.errors?(c=r.post,i=c.title,o=c.body,l=c.published,e&&s({title:i,body:o,published:l}),window.flashes(r.errors)):(s({title:"",body:"",published:!1}),window.flashes([{msg:"Post successfully created",type:"success"}])),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row justify-content-center",children:Object(C.jsx)("div",{className:"col-md-8",children:Object(C.jsx)(M,{state:a,onInputChange:function(e){var t=e.target,n=t.name,a="checkbox"===t.type?t.checked:t.value;s((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(R.a)({},n,a))}))},onSubmit:function(e){return l.apply(this,arguments)},isSubmitting:o,submitBtnText:"Submit"})})})})};var K=function(){var e=Object(m.h)().postId,t=Object(m.g)(),n=U(),a=Object(r.useState)(!1),s=Object(j.a)(a,2),c=s[0],i=s[1],o=Object(r.useState)({title:"",body:"",published:!1}),u=Object(j.a)(o,2),l=u[0],h=u[1],x=Object(r.useState)(!1),v=Object(j.a)(x,2),g=v[0],w=v[1];function y(){return(y=Object(d.a)(p.a.mark((function a(s){var r,c,i,o;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s.preventDefault(),w(!0),a.next=5,O("PUT","".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(e),l);case 5:r=a.sent,n&&w(!1),r.err?k(r.err):r.errors?(c=r.post,i=c.title,o=c.body,n&&h({title:i,body:o}),window.flashes(r.errors)):(h({title:"",body:""}),t.push("/"),window.flashes([{msg:"Post successfully updated",type:"success"}])),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){function n(){return(n=Object(d.a)(p.a.mark((function e(n){var a,s,r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,f("".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(n,"/edit"));case 4:a=e.sent,i(!1),a.err?([401,404].includes(a.err.status)&&t.push("/"),k(a)):(s=a.post,r=s.title,c=s.body,o=s.published,h({title:r,body:c,published:o})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e)}),[e,t]),c?Object(C.jsx)("div",{className:"bootstrap-spinner-container",children:Object(C.jsx)(F,{type:"border",size:"2em"})}):l.title?Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row justify-content-center",children:Object(C.jsx)("div",{className:"col-md-8",children:Object(C.jsx)(M,{state:l,onInputChange:function(e){var t=e.target,n=t.name,a="checkbox"===t.type?t.checked:t.value;h((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(R.a)({},n,a))}))},onSubmit:function(e){return y.apply(this,arguments)},isSubmitting:g,submitBtnText:"Update"})})})}):null};var Q=function(e){var t=e.postComment,n=e.handlePostCommentDelete,a=U(),s=Object(r.useState)(!1),c=Object(j.a)(s,2),i=c[0],o=c[1];function u(){return(u=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,n(t._id);case 3:a&&o(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(C.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{className:"h6 mb-1",children:t.author.firstName+" "+t.author.lastName}),Object(C.jsx)("p",{className:"text-muted mb-2",children:E()(new Date(t.createdAt),"PPpp")}),Object(C.jsx)("p",{className:"mb-2",children:t.body})]}),Object(C.jsx)("div",{children:Object(C.jsx)(_,{type:"danger",text:"Delete",isLoading:i,loadingText:"Deleting...",onClick:function(){return u.apply(this,arguments)}})})]})};var V=function(e){var t=e.postComments,n=e.handlePostCommentDelete;return t.length>0?Object(C.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(C.jsx)(Q,{postComment:e,handlePostCommentDelete:n},e._id)}))}):null};var X=function(){var e=Object(m.h)().postId,t=Object(m.g)(),n=U(),a=Object(r.useState)(!1),s=Object(j.a)(a,2),c=s[0],i=s[1],o=Object(r.useState)({}),u=Object(j.a)(o,2),l=u[0],h=u[1];function x(e){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(t,"/comments"));case 3:if(!(n=e.sent).err){e.next=8;break}k(n.err),e.next=9;break;case 8:return e.abrupt("return",n.comments);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function v(){return(v=Object(d.a)(p.a.mark((function a(){var s,r,c,o;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=function(){return(r=Object(d.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(n));case 3:if(!(a=e.sent).err){e.next=9;break}[401,404].includes(a.err.status)&&t.push("/"),k(a.err),e.next=10;break;case 9:return e.abrupt("return",a.post);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)},s=function(e){return r.apply(this,arguments)},!n){a.next=12;break}return i(!0),a.next=6,s(e);case 6:return c=a.sent,a.next=9,x(e);case 9:o=a.sent,i(!1),h(Object(b.a)(Object(b.a)({},c),{},{comments:o}));case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function w(){return(w=Object(d.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:a=e.sent,n&&a._id&&h((function(e){return Object(b.a)(Object(b.a)({},e),{},{published:a.published})}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(d.a)(p.a.mark((function t(a){var s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e,a);case 2:s=t.sent,n&&s._id&&h((function(e){return Object(b.a)(Object(b.a)({},e),{},{comments:e.comments.filter((function(e){return e._id!==a}))})}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[n]),c?Object(C.jsx)("div",{className:"bootstrap-spinner-container",children:Object(C.jsx)(F,{type:"border",size:"2em"})}):l._id?Object(C.jsxs)("section",{className:"mb-4",children:[Object(C.jsx)(B,{postWithComments:l,handlePostPublishedUpdate:function(e){return w.apply(this,arguments)}}),Object(C.jsx)(V,{postComments:l.comments,handlePostCommentDelete:function(e){return N.apply(this,arguments)}})]}):null};var Z=function(){return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row justify-content-center",children:Object(C.jsx)("div",{className:"col-md-8 position-relative",children:Object(C.jsx)(X,{})})})})};var $=function(){var e=Object(m.g)(),t=U(),n=Object(r.useState)({firstName:"",lastName:"",username:"",password:"",confirmPassword:"",adminPasscode:""}),a=Object(j.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)(!1),o=Object(j.a)(i,2),u=o[0],l=o[1];function h(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(R.a)({},n,a))}))}function f(){return(f=Object(d.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a.preventDefault(),l(!0),n.next=5,O("POST","".concat("https://blog-api-97575.herokuapp.com","/users"),Object(b.a)(Object(b.a)({},s),{},{isAdminPasscodeRequired:!0}));case 5:r=n.sent,t&&l(!1),r.err?k(r.err):r.errors?(t&&c({firstName:r.userFormData.firstName,lastName:r.userFormData.lastName,username:r.userFormData.username,password:"",confirmPassword:"",adminPasscode:""}),window.flashes(r.errors)):(window.flashes([{msg:"You have successfuly signed up",type:"success"}]),e.push("/")),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}return Object(C.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"firstName",children:"First name"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"firstName",placeholder:"John",name:"firstName",value:s.firstName,required:!0,maxLength:"255",onChange:h})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"lastName",children:"Last name"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Doe",name:"lastName",value:s.lastName,required:!0,maxLength:"255",onChange:h})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"username",children:"Username"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"johnDoe01",name:"username",value:s.username,required:!0,maxLength:"20",onChange:h})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"password",children:"Password"}),Object(C.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:s.password,required:!0,minLength:"8",onChange:h})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"confirmPassword",children:"Password confirmation"}),Object(C.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",name:"confirmPassword",value:s.confirmPassword,required:!0,minLength:"8",onChange:h})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"adminPasscode",children:"Admin passcode"}),Object(C.jsx)("input",{type:"password",className:"form-control",id:"adminPasscode",name:"adminPasscode",value:s.adminPasscode,required:!0,onChange:h})]}),Object(C.jsx)(G,{isSubmitting:u})]})};var ee=function(){return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row justify-content-center",children:Object(C.jsx)("div",{className:"col-md-6",children:Object(C.jsx)($,{})})})})};var te=function(e){var t=e.setUser,n=Object(m.g)(),a=U(),s=Object(r.useState)({username:"",password:""}),c=Object(j.a)(s,2),i=c[0],o=c[1],u=Object(r.useState)(!1),l=Object(j.a)(u,2),h=l[0],f=l[1];function x(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(R.a)({},n,a))}))}function v(){return(v=Object(d.a)(p.a.mark((function e(s){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.preventDefault(),f(!0),e.next=5,O("POST","".concat("https://blog-api-97575.herokuapp.com","/auth/sign-in"),i);case 5:r=e.sent,a&&f(!1),r.err?(a&&o((function(e){return Object(b.a)(Object(b.a)({},e),{},{password:""})})),k(r.err)):r.user&&r.user.admin?(localStorage.setItem("jwt",r.token),t(r.user),window.flashes([{msg:"You have successfuly signed in",type:"success"}]),n.push("/")):(a&&o({username:"",password:""}),window.flashes([{msg:"Admin account is required",type:"warning"}])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(C.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"username",children:"Username"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"johnDoe01",name:"username",value:i.username,required:!0,maxLength:"20",onChange:x})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"password",children:"Password"}),Object(C.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:i.password,required:!0,minLength:"8",onChange:x})]}),Object(C.jsx)(G,{isSubmitting:h})]})};var ne=function(e){var t=e.setUser;return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row justify-content-center",children:Object(C.jsx)("div",{className:"col-md-6",children:Object(C.jsx)(te,{setUser:t})})})})};n(76);var ae=function(){var e=Object(m.g)(),t=Object(r.useState)([]),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(null),i=Object(j.a)(c,2),o=i[0],u=i[1];return Object(r.useEffect)((function(){P.addListener("flashes",(function(e){var t=e.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{id:Object(h.a)()})}));s(t)}))}),[]),Object(r.useEffect)((function(){window.flashes=function(e){return P.emit("flashes",e)}}),[]),Object(r.useEffect)((function(){if(a.length>0){var e=setTimeout((function(){return s([])}),4e3);return function(){return clearTimeout(e)}}}),[a]),Object(r.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("".concat("https://blog-api-97575.herokuapp.com","/users/current-user"));case 2:(t=e.sent).user&&t.user.admin?u(t.user):(localStorage.removeItem("jwt"),u(!1));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var n=setInterval(e,3e4);return function(){return clearInterval(n)}}),[]),null===o?Object(C.jsx)(F,{type:"grow",size:"3em"}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(D,{user:o,signOut:function(){localStorage.removeItem("jwt"),u(!1),window.flashes([{msg:"You have successfully signed out",type:"success"}]),e.push("/")}}),a.length>0&&Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row justify-content-center",children:Object(C.jsx)("div",{className:"col-md-8",children:Object(C.jsx)(T,{flashes:a,handleFlashDelete:function(e){var t=a.filter((function(t){return t.id!==e}));s(t)}})})})}),Object(C.jsx)("main",{children:Object(C.jsxs)(m.d,{children:[Object(C.jsx)(m.b,{exact:!0,path:"/",children:Object(C.jsx)(m.a,{to:"/posts"})}),Object(C.jsx)(m.b,{exact:!0,path:"/posts",children:o?Object(C.jsx)(J,{}):Object(C.jsx)(m.a,{to:"/sign-in"})}),Object(C.jsx)(m.b,{exact:!0,path:"/posts/new",children:o?Object(C.jsx)(H,{}):Object(C.jsx)(m.a,{to:"/sign-in"})}),Object(C.jsx)(m.b,{exact:!0,path:"/posts/:postId",children:o?Object(C.jsx)(Z,{}):Object(C.jsx)(m.a,{to:"/sign-in"})}),Object(C.jsx)(m.b,{exact:!0,path:"/posts/:postId/edit",children:o?Object(C.jsx)(K,{}):Object(C.jsx)(m.a,{to:"/sign-in"})}),Object(C.jsx)(m.b,{exact:!0,path:"/sign-up",children:o?Object(C.jsx)(m.a,{to:"/posts"}):Object(C.jsx)(ee,{})}),Object(C.jsx)(m.b,{exact:!0,path:"/sign-in",children:o?Object(C.jsx)(m.a,{to:"posts"}):Object(C.jsx)(ne,{setUser:u})})]})})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};s.a.config(),o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(u.a,{basename:"/blog-admin",children:Object(C.jsx)(ae,{})})}),document.getElementById("root")),se()}},[[77,1,2]]]);
//# sourceMappingURL=main.c7179293.chunk.js.map