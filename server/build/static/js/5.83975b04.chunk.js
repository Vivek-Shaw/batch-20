"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5],{9005:function(e,a,r){r.r(a);var s=r(4165),n=r(5861),t=r(885),c=r(7022),o=r(9743),l=r(2677),d=r(9140),i=r(3855),u=r(3360),m=r(2791),f=r(9289),x=r(184);a.default=function(){var e=(0,m.useState)({lowercase:!1,uppercase:!1,number:!1,symbol:!1,length:!1}),a=(0,t.Z)(e,2),r=a[0],p=a[1],h=(0,m.useState)(!1),v=(0,t.Z)(h,2),Z=v[0],b=v[1],g=r.lowercase,j=r.uppercase,N=r.number,y=r.symbol,w=r.length,C=(0,m.useState)(""),P=(0,t.Z)(C,2),k=P[0],E=P[1],S=(0,m.useState)(""),B=(0,t.Z)(S,2),I=B[0],L=B[1],R=(0,m.useState)(""),G=(0,t.Z)(R,2),z=G[0],H=G[1];(0,m.useEffect)((function(){var e=Object.values(r).every(Boolean);console.log(e),b(e),console.log({isValid:Z})}),[p]);var O=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(a){var r,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={name:z,username:I,password:k},e.prev=1,e.next=4,(0,f.hd)(r);case 4:return e.next=6,e.sent.data;case 6:n=e.sent,console.log(n),n&&alert("user signup successful"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}();return(0,x.jsx)(c.Z,{fluid:!0,children:(0,x.jsx)(o.Z,{children:(0,x.jsx)(l.Z,{lg:{offset:4,span:4},md:{offset:3,span:6},sm:{offset:1,span:10},children:(0,x.jsxs)(d.Z,{className:"mt-3 p-3 signup",children:[(0,x.jsx)(d.Z.Title,{children:"Signup"}),(0,x.jsxs)(d.Z.Body,{children:[(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicEmail",onChange:function(e){return H(e.target.value)},children:[(0,x.jsx)(i.Z.Label,{children:"Name"}),(0,x.jsx)(i.Z.Control,{placeholder:"Enter name"})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"username",children:[(0,x.jsx)(i.Z.Label,{children:"Username"}),(0,x.jsx)(i.Z.Control,{placeholder:"Enter username",onChange:function(e){return L(e.target.value)}})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,x.jsx)(i.Z.Label,{children:"Password"}),(0,x.jsx)(i.Z.Control,{type:"password",onChange:function(e){var a=e.target.value;console.log(a);var r=/(?=.*[a-z])/.test(a),s=/(?=.*[A-Z])/.test(a),n=/(?=.*\d)/.test(a),t=/(?=.*[\W_])/.test(a),c=a.length>=8;E(a),p({lowercase:r,uppercase:s,number:n,symbol:t,length:c})},placeholder:"Password"})]}),(0,x.jsx)(u.Z,{variant:"primary",onClick:O,type:"submit",disabled:!Z,children:"Signup"})]}),(0,x.jsxs)("div",{className:"pwd-strength",children:[(0,x.jsx)("div",{className:g?"text-success":"text-danger",children:"Lowercase character :- a-z"}),(0,x.jsx)("div",{className:j?"text-success":"text-danger",children:"Uppercase character :- A-Z"}),(0,x.jsx)("div",{className:N?"text-success":"text-danger",children:"Numeric character :- 0-9"}),(0,x.jsx)("div",{className:y?"text-success":"text-danger",children:"Special character :- !@#$%^&*()_+"}),(0,x.jsx)("div",{className:w?"text-success":"text-danger",children:"Password should consist of 8 or more character"})]})]})})})})}},9140:function(e,a,r){r.d(a,{Z:function(){return B}});var s=r(1413),n=r(5987),t=r(1694),c=r.n(t),o=r(2791),l=r(162),d=r(6543),i=r(7472),u=r(184),m=["bsPrefix","className","variant","as"],f=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.variant,d=e.as,i=void 0===d?"img":d,f=(0,n.Z)(e,m),x=(0,l.vE)(r,"card-img");return(0,u.jsx)(i,(0,s.Z)({ref:a,className:c()(o?"".concat(x,"-").concat(o):x,t)},f))}));f.displayName="CardImg";var x=f,p=r(6040),h=["bsPrefix","className","as"],v=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,d=e.as,i=void 0===d?"div":d,m=(0,n.Z)(e,h),f=(0,l.vE)(r,"card-header"),x=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,u.jsx)(p.Z.Provider,{value:x,children:(0,u.jsx)(i,(0,s.Z)((0,s.Z)({ref:a},m),{},{className:c()(t,f)}))})}));v.displayName="CardHeader";var Z=v,b=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,i.Z)("h5"),j=(0,i.Z)("h6"),N=(0,d.Z)("card-body"),y=(0,d.Z)("card-title",{Component:g}),w=(0,d.Z)("card-subtitle",{Component:j}),C=(0,d.Z)("card-link",{Component:"a"}),P=(0,d.Z)("card-text",{Component:"p"}),k=(0,d.Z)("card-footer"),E=(0,d.Z)("card-img-overlay"),S=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.bg,d=e.text,i=e.border,m=e.body,f=e.children,x=e.as,p=void 0===x?"div":x,h=(0,n.Z)(e,b),v=(0,l.vE)(r,"card");return(0,u.jsx)(p,(0,s.Z)((0,s.Z)({ref:a},h),{},{className:c()(t,v,o&&"bg-".concat(o),d&&"text-".concat(d),i&&"border-".concat(i)),children:m?(0,u.jsx)(N,{children:f}):f}))}));S.displayName="Card",S.defaultProps={body:!1};var B=Object.assign(S,{Img:x,Title:y,Subtitle:w,Body:N,Link:C,Text:P,Header:Z,Footer:k,ImgOverlay:E})},9743:function(e,a,r){var s=r(1413),n=r(5987),t=r(1694),c=r.n(t),o=r(2791),l=r(162),d=r(184),i=["bsPrefix","className","as"],u=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.as,u=void 0===o?"div":o,m=(0,n.Z)(e,i),f=(0,l.vE)(r,"row"),x=(0,l.pi)(),p=(0,l.zG)(),h="".concat(f,"-cols"),v=[];return x.forEach((function(e){var a,r=m[e];delete m[e],a=null!=r&&"object"===typeof r?r.cols:r;var s=e!==p?"-".concat(e):"";null!=a&&v.push("".concat(h).concat(s,"-").concat(a))})),(0,d.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},m),{},{className:c().apply(void 0,[t,f].concat(v))}))}));u.displayName="Row",a.Z=u}}]);
//# sourceMappingURL=5.83975b04.chunk.js.map