(self.webpackChunkhdf_app_manager=self.webpackChunkhdf_app_manager||[]).push([[33],{64317:function(V,h,e){"use strict";var C=e(22122),c=e(28991),g=e(81253),n=e(67294),D=e(10244),v=e(22270),O=e(66758),o=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],f=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],i=n.forwardRef(function(t,d){var T=t.fieldProps,W=t.children,Z=t.params,j=t.proFieldProps,x=t.mode,F=t.valueEnum,L=t.request,A=t.showSearch,R=t.options,s=(0,g.Z)(t,o),y=(0,n.useContext)(O.Z);return n.createElement(D.Z,(0,C.Z)({mode:"edit",valueEnum:(0,v.h)(F),request:L,params:Z,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({options:R,mode:x,showSearch:A,getPopupContainer:y.getPopupContainer},T),ref:d,proFieldProps:j},s),W)}),I=n.forwardRef(function(t,d){var T=t.fieldProps,W=t.children,Z=t.params,j=t.proFieldProps,x=t.mode,F=t.valueEnum,L=t.request,A=t.options,R=(0,g.Z)(t,f),s=(0,c.Z)({options:A,mode:x||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},T),y=(0,n.useContext)(O.Z);return n.createElement(D.Z,(0,C.Z)({mode:"edit",valueEnum:(0,v.h)(F),request:L,params:Z,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({getPopupContainer:y.getPopupContainer},s),ref:d,proFieldProps:j},R),W)}),a=i,l=I,P=a;P.SearchSelect=l,P.displayName="ProFormComponent",h.Z=P},23080:function(V,h,e){"use strict";var C=e(85589),c=e.n(C),g=e(85893);function n(D){var v=D.editorState,O=D.setEditorState,o=function(i){O(i)};return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(c(),{style:{border:"1px solid",borderColor:"rgba(0, 0, 0, 0.5)"},value:v,onChange:function(i){return o(i)}})})}h.Z=n},9321:function(V,h,e){"use strict";var C=e(9715),c=e(93766),g=e(43185),n=e(94412),D=e(34792),v=e(48086),O=e(2824),o=e(67294),f=e(7085),i=e(49101),I=e(17024),a=e(85893),l=function(t){var d=t.coverImage,T=t.setCoverImage,W=(0,o.useState)(!1),Z=(0,O.Z)(W,2),j=Z[0],x=Z[1],F=function(s){var y=s.type==="image/jpeg"||s.type==="image/png";y||v.default.error("You can only upload JPG/PNG file!");var $=s.size/1024/1024<2;return $||v.default.error("Image must smaller than 2MB!"),y&&$},L=function(s){if(s.file.status==="uploading"){x(!0);return}s.file.status==="done"&&(T(s.file.response.data),x(!1))},A=(0,a.jsxs)("div",{children:[j?(0,a.jsx)(f.Z,{}):(0,a.jsx)(i.Z,{}),(0,a.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,a.jsx)(c.Z.Item,{label:"\u56FE\u7247",children:(0,a.jsx)(n.Z,{name:"file",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"".concat("","/common/upload"),beforeUpload:F,onChange:L,children:d?(0,a.jsx)("img",{src:(0,I.up)(d),alt:"\u56FE\u7247",style:{maxWidth:"100%",maxHeight:"100%"}}):A})})};h.Z=l},34945:function(V,h,e){"use strict";e.r(h),e.d(h,{default:function(){return fe}});var C=e(34792),c=e(48086),g=e(49111),n=e(19650),D=e(62350),v=e(75443),O=e(57663),o=e(71577),f=e(11849),i=e(3182),I=e(9715),a=e(93766),l=e(2824),P=e(94043),t=e.n(P),d=e(67265),T=e(8212),W=e(73171),Z=e(49101),j=e(952),x=e(8890),F=e(5966),L=e(64317),A=e(90672),R=e(35255),s=e(67294),y=e(85589),$=e.n(y),ne=e(23080),G=e(21010);function De(){return request("/admin/articles?per=100")}var oe=function(){var U=(0,i.Z)(t().mark(function p(K){var S;return t().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,G.WY)("/admin/articles",{method:"get",params:{page:K.current,name:K.name}});case 2:return S=_.sent,console.log(S),_.abrupt("return",new Promise(function(H){H({data:S.list,success:!0,total:S.total})}));case 5:case"end":return _.stop()}},p)}));return function(K){return U.apply(this,arguments)}}(),se=function(p){return(0,G.WY)("/admin/articles/".concat(p),{method:"GET"})},le=function(p){return(0,G.WY)("/admin/articles",{method:"POST",data:p})},ue=function(p,K){return(0,G.WY)("/admin/articles/".concat(p),{method:"PATCH",data:K})},de=function(p){return(0,G.WY)("/admin/articles/".concat(p),{method:"DELETE"})},ie=e(9377),me=e(9321),ce=e(17024),r=e(85893);function ve(){var U=(0,s.useState)(!1),p=(0,l.Z)(U,2),K=p[0],S=p[1],X=(0,s.useState)(""),_=(0,l.Z)(X,2),H=_[0],J=_[1],pe=(0,s.useState)(""),w=(0,l.Z)(pe,2),k=w[0],q=w[1],z=(0,s.useRef)(),Ee=a.Z.useForm(),he=(0,l.Z)(Ee,1),b=he[0],ge=(0,s.useState)({}),ee=(0,l.Z)(ge,2),te=ee[0],Pe=ee[1],Me=(0,s.useState)({}),ae=(0,l.Z)(Me,2),re=ae[0],Q=ae[1];(0,s.useEffect)(function(){(0,ie.Lp)().then(function(B){var M={};M[0]={text:"\u5168\u90E8"},B.list.forEach(function(E){M[E.id]={text:E.name}}),Pe(M)})},[]);var Ce=[{title:"\u5E8F\u53F7",align:"center",hideInSearch:!0,render:function(M,E,m){return(0,r.jsx)(r.Fragment,{children:m+1})}},{title:"\u540D\u5B57",align:"center",dataIndex:"name"},{title:"\u4E3B\u56FE",align:"center",hideInSearch:!0,render:function(M,E){return(0,r.jsx)("img",{src:(0,ce.up)(E.image),style:{width:"80px"}})}},{title:"\u6D4F\u89C8\u6B21\u6570",align:"center",hideInSearch:!0,dataIndex:"views"},{title:"\u5206\u7C7B",align:"center",dataIndex:"category",render:function(M,E){var m;return(0,r.jsx)("p",{children:(m=E.category)===null||m===void 0?void 0:m.name})},filters:!0,onFilter:!0,valueType:"select",valueEnum:te},{title:"\u63CF\u8FF0",align:"center",dataIndex:"desc",hideInSearch:!0},{title:"\u64CD\u4F5C",align:"center",hideInSearch:!0,render:function(M,E){return(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(o.Z,{onClick:(0,i.Z)(t().mark(function m(){var Y,u;return t().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,se(E.id);case 2:Y=N.sent,S(!0),J(Y.image),Q($().createEditorState(Y.content)),q(Y.id),u=(0,f.Z)({},Y),delete u.category,b.setFieldsValue((0,f.Z)((0,f.Z)({},u),{},{category:"".concat(E.category.id)}));case 10:case"end":return N.stop()}},m)})),type:"primary",size:"small",title:"\u7F16\u8F91",icon:(0,r.jsx)(T.Z,{})}),(0,r.jsx)(v.Z,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",onConfirm:(0,i.Z)(t().mark(function m(){return t().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,de(E.id);case 2:z.current&&z.current.reload();case 3:case"end":return u.stop()}},m)})),children:(0,r.jsx)(o.Z,{type:"primary",danger:!0,size:"small",title:"\u5220\u9664",icon:(0,r.jsx)(W.Z,{})})})]})}}];return(0,r.jsxs)(d.ZP,{children:[(0,r.jsx)(R.ZP,{headerTitle:"\u8D44\u8BAF",actionRef:z,rowKey:"id",columns:Ce,pagination:{showSizeChanger:!1,pageSize:10},request:oe,toolBarRender:function(){return[(0,r.jsxs)(o.Z,{type:"primary",onClick:function(){S(!0),Q($().createEditorState("")),q(""),J(""),b.setFieldsValue({name:"",desc:""})},children:[(0,r.jsx)(Z.Z,{}),"\u65B0\u5EFA"]},"primary")]}}),(0,r.jsxs)(x.Y,{title:"\u7F16\u8F91",width:"800px",initialValues:{name:"Tom"},form:b,visible:K,onVisibleChange:S,onFinish:function(){var B=(0,i.Z)(t().mark(function M(E){var m;return t().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(m=(0,f.Z)((0,f.Z)({},E),{},{content:re.toHTML()}),H&&(m.image=H),k==""){u.next=9;break}return u.next=5,ue(k,m);case 5:c.default.success("\u4FEE\u6539\u6210\u529F"),S(!1),u.next=13;break;case 9:return u.next=11,le(m);case 11:c.default.success("\u65B0\u589E\u6210\u529F"),S(!1);case 13:z.current&&z.current.reload();case 14:case"end":return u.stop()}},M)}));return function(M){return B.apply(this,arguments)}}(),children:[(0,r.jsx)(F.Z,{label:"\u540D\u5B57",rules:[{required:!0,message:"\u5206\u7C7B\u540D\u5B57\u5FC5\u586B"}],placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u5B57",width:"md",name:"name"}),(0,r.jsx)(L.Z,{name:"articleCategoryId",label:"\u5206\u7C7B",valueEnum:te,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u5206\u7C7B"}]}),(0,r.jsx)(A.Z,{label:"\u7B80\u4ECB",placeholder:"\u8BF7\u8F93\u5165\u7B80\u4ECB",width:"md",name:"desc"}),(0,r.jsx)(me.Z,{coverImage:H,setCoverImage:J}),(0,r.jsx)(j.ZP.Item,{label:"\u8BE6\u60C5",children:(0,r.jsx)(ne.Z,{editorState:re,setEditorState:Q})})]})]})}var fe=ve},9377:function(V,h,e){"use strict";e.d(h,{Lp:function(){return D},e1:function(){return v},Sf:function(){return O},mS:function(){return o},Ec:function(){return f},Fv:function(){return i}});var C=e(3182),c=e(94043),g=e.n(c),n=e(21010);function D(){return(0,n.WY)("/admin/article_categories?per=100")}var v=function(){var I=(0,C.Z)(g().mark(function a(l){var P;return g().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,n.WY)("/admin/article_categories",{method:"get",params:{page:l.current,name:l.name}});case 2:return P=d.sent,console.log(P),d.abrupt("return",new Promise(function(T){T({data:P.list,success:!0,total:P.total})}));case 5:case"end":return d.stop()}},a)}));return function(l){return I.apply(this,arguments)}}(),O=function(a){return(0,n.WY)("/admin/article_categories/".concat(a),{method:"GET"})},o=function(a){return(0,n.WY)("/admin/article_categories",{method:"POST",data:a})},f=function(a,l){return(0,n.WY)("/admin/article_categories/".concat(a),{method:"PATCH",data:l})},i=function(a){return(0,n.WY)("/admin/article_categories/".concat(a),{method:"DELETE"})}},17024:function(V,h,e){"use strict";e.d(h,{up:function(){return v}});var C=e(30381),c=e.n(C);function g(o){sessionStorage.setItem("token",o)}function n(){return sessionStorage.getItem("token")}function D(){sessionStorage.removeItem("token")}function v(o){return o?o.startsWith("http")?o:"".concat("").concat(o):"http://oss.penkuoer.com/uPic/ss.jpeg"}function O(o){return moment(o).format("YYYY-MM-DD HH:mm:ss")}}}]);
