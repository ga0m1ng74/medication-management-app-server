(self.webpackChunkhdf_app_manager=self.webpackChunkhdf_app_manager||[]).push([[652],{90672:function(L,d,e){"use strict";var M=e(22122),m=e(81253),E=e(67294),s=e(10244),g=["fieldProps","proFieldProps"],c=function(t,f){var P=t.fieldProps,l=t.proFieldProps,_=(0,m.Z)(t,g);return E.createElement(s.Z,(0,M.Z)({ref:f,mode:"edit",valueType:"textarea",fieldProps:P,proFieldProps:l},_))};d.Z=E.forwardRef(c)},9321:function(L,d,e){"use strict";var M=e(9715),m=e(93766),E=e(43185),s=e(94412),g=e(34792),c=e(48086),p=e(2824),t=e(67294),f=e(7085),P=e(49101),l=e(17024),_=e(85893),r=function(u){var o=u.coverImage,B=u.setCoverImage,F=(0,t.useState)(!1),K=(0,p.Z)(F,2),Z=K[0],j=K[1],x=function(D){var y=D.type==="image/jpeg"||D.type==="image/png";y||c.default.error("You can only upload JPG/PNG file!");var a=D.size/1024/1024<2;return a||c.default.error("Image must smaller than 2MB!"),y&&a},S=function(D){if(D.file.status==="uploading"){j(!0);return}D.file.status==="done"&&(B(D.file.response.data),j(!1))},I=(0,_.jsxs)("div",{children:[Z?(0,_.jsx)(f.Z,{}):(0,_.jsx)(P.Z,{}),(0,_.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,_.jsx)(m.Z.Item,{label:"\u56FE\u7247",children:(0,_.jsx)(s.Z,{name:"file",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"".concat("","/common/upload"),beforeUpload:x,onChange:S,children:o?(0,_.jsx)("img",{src:(0,l.up)(o),alt:"\u56FE\u7247",style:{maxWidth:"100%",maxHeight:"100%"}}):I})})};d.Z=r},9985:function(L,d,e){"use strict";e.r(d);var M=e(34792),m=e(48086),E=e(11849),s=e(49111),g=e(19650),c=e(62350),p=e(75443),t=e(57663),f=e(71577),P=e(3182),l=e(9715),_=e(93766),r=e(2824),O=e(94043),u=e.n(O),o=e(67265),B=e(8212),F=e(73171),K=e(49101),Z=e(8890),j=e(5966),x=e(90672),S=e(35255),I=e(67294),v=e(96747),D=e(9321),y=e(17024),a=e(85893);function N(){var Q=(0,I.useState)(!1),$=(0,r.Z)(Q,2),X=$[0],U=$[1],w=(0,I.useState)(""),z=(0,r.Z)(w,2),b=z[0],Y=z[1],k=(0,I.useState)(""),G=(0,r.Z)(k,2),H=G[0],J=G[1],W=(0,I.useRef)(),q=_.Z.useForm(),ee=(0,r.Z)(q,1),V=ee[0],_e=[{title:"\u5E8F\u53F7",align:"center",hideInSearch:!0,render:function(C,h,i){return(0,a.jsx)(a.Fragment,{children:i+1})}},{title:"\u540D\u5B57",align:"center",dataIndex:"name"},{title:"\u4E3B\u56FE",align:"center",hideInSearch:!0,render:function(C,h){return(0,a.jsx)("img",{src:(0,y.up)(h.image),style:{width:"80px"}})}},{title:"\u63CF\u8FF0",align:"center",dataIndex:"desc",hideInSearch:!0},{title:"\u64CD\u4F5C",align:"center",hideInSearch:!0,render:function(C,h){return(0,a.jsxs)(g.Z,{children:[(0,a.jsx)(f.Z,{onClick:(0,P.Z)(u().mark(function i(){var T;return u().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,v.Sf)(h.id);case 2:T=R.sent,U(!0),Y(T.image),J(T.id),V.setFieldsValue(T);case 7:case"end":return R.stop()}},i)})),type:"primary",size:"small",title:"\u7F16\u8F91",icon:(0,a.jsx)(B.Z,{})}),(0,a.jsx)(p.Z,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",onConfirm:(0,P.Z)(u().mark(function i(){return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.Fv)(h.id);case 2:W.current&&W.current.reload();case 3:case"end":return n.stop()}},i)})),children:(0,a.jsx)(f.Z,{type:"primary",danger:!0,size:"small",title:"\u5220\u9664",icon:(0,a.jsx)(F.Z,{})})})]})}}];return(0,a.jsxs)(o.ZP,{children:[(0,a.jsx)(S.ZP,{headerTitle:"\u804C\u79F0\u4FE1\u606F",actionRef:W,rowKey:"id",columns:_e,pagination:{showSizeChanger:!1,pageSize:10},request:v.e1,toolBarRender:function(){return[(0,a.jsxs)(f.Z,{type:"primary",onClick:function(){U(!0),J(""),Y(""),V.setFieldsValue({name:"",desc:""})},children:[(0,a.jsx)(K.Z,{}),"\u65B0\u5EFA"]},"primary")]}}),(0,a.jsxs)(Z.Y,{title:"\u7F16\u8F91",width:"800px",initialValues:{name:"Tom"},form:V,visible:X,onVisibleChange:U,onFinish:function(){var A=(0,P.Z)(u().mark(function C(h){var i;return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(i=(0,E.Z)({},h),b&&(i.image=b),H==""){n.next=9;break}return n.next=5,(0,v.Ec)(H,i);case 5:m.default.success("\u4FEE\u6539\u6210\u529F"),U(!1),n.next=13;break;case 9:return n.next=11,(0,v.mS)(i);case 11:m.default.success("\u65B0\u589E\u6210\u529F"),U(!1);case 13:W.current&&W.current.reload();case 14:case"end":return n.stop()}},C)}));return function(C){return A.apply(this,arguments)}}(),children:[(0,a.jsx)(j.Z,{label:"\u540D\u5B57",rules:[{required:!0,message:"\u5206\u7C7B\u540D\u5B57\u5FC5\u586B"}],placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u5B57",width:"md",name:"name"}),(0,a.jsx)(x.Z,{label:"\u7B80\u4ECB",placeholder:"\u8BF7\u8F93\u5165\u7B80\u4ECB",width:"md",name:"desc"}),(0,a.jsx)(D.Z,{coverImage:b,setCoverImage:Y})]})]})}d.default=N},96747:function(L,d,e){"use strict";e.d(d,{e1:function(){return c},Sf:function(){return p},mS:function(){return t},Ec:function(){return f},Fv:function(){return P}});var M=e(3182),m=e(94043),E=e.n(m),s=e(21010);function g(){return request("/admin/doctor_titles?per=100")}var c=function(){var l=(0,M.Z)(E().mark(function _(r){var O;return E().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,s.WY)("/admin/doctor_titles",{method:"get",params:{page:r.current,name:r.name}});case 2:return O=o.sent,console.log(O),o.abrupt("return",new Promise(function(B){B({data:O.list,success:!0,total:O.total})}));case 5:case"end":return o.stop()}},_)}));return function(r){return l.apply(this,arguments)}}(),p=function(_){return(0,s.WY)("/admin/doctor_titles/".concat(_),{method:"GET"})},t=function(_){return(0,s.WY)("/admin/doctor_titles",{method:"POST",data:_})},f=function(_,r){return(0,s.WY)("/admin/doctor_titles/".concat(_),{method:"PATCH",data:r})},P=function(_){return(0,s.WY)("/admin/doctor_titles/".concat(_),{method:"DELETE"})}},17024:function(L,d,e){"use strict";e.d(d,{up:function(){return c}});var M=e(30381),m=e.n(M);function E(t){sessionStorage.setItem("token",t)}function s(){return sessionStorage.getItem("token")}function g(){sessionStorage.removeItem("token")}function c(t){return t?t.startsWith("http")?t:"".concat("").concat(t):"http://oss.penkuoer.com/uPic/ss.jpeg"}function p(t){return moment(t).format("YYYY-MM-DD HH:mm:ss")}}}]);
