(this.webpackJsonpform_for_coments=this.webpackJsonpform_for_coments||[]).push([[0],{14:function(e,t,n){e.exports={listItems:"CommentsList_listItems__2g2cJ",item:"CommentsList_item__cKCEw"}},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),m=n.n(c),a=n(8),o=n.n(a),r=n(5),s=n(10),i=n(4),d=n(16),l=n.n(d),u=n(3),b=n(17),j=n.n(b),O=n(18),h=n(2),x=n(36),_={addComment:Object(i.b)("comments/add",(function(e,t){return{payload:{name:e,text:t,id:Object(x.a)()}}}))},f=Object(i.c)([],Object(O.a)({},_.addComment,(function(e,t){var n=t.payload;return[].concat(Object(s.a)(e),[n])}))),p=Object(h.b)({items:f}),C=[].concat(Object(s.a)(Object(i.d)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})),[l.a]),v={key:"root",storage:j.a},g=Object(i.a)({reducer:{comments:Object(u.g)(v,p)},middleware:C,devTools:!1}),N=Object(u.h)(g),F=n(19),w=(n(31),n(15)),y=n(6),k=n.n(y),A=n(1);function E(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],m=t[1],a=Object(c.useState)(""),o=Object(w.a)(a,2),s=o[0],i=o[1],d=Object(r.b)(),l=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":m(c);break;case"comment":i(c);break;default:return}},u=function(){m(""),i("")};return Object(A.jsxs)("div",{children:[Object(A.jsxs)("form",{className:k.a.commentForm,onSubmit:function(e){return e.preventDefault(),d(_.addComment(n,s),u())},children:[Object(A.jsx)("label",{htmlFor:"new-name",children:"Name"}),Object(A.jsx)("input",{type:"text",name:"name",id:"new-name",placeholder:"Enter name",className:k.a.inputName,onChange:l,value:n,required:!0}),Object(A.jsx)("label",{htmlFor:"new-comment",children:"Comment"}),Object(A.jsx)("textarea",{type:"text",name:"comment",id:"new-comment",placeholder:"Enter your comment",className:k.a.inputComment,onChange:l,value:s,required:!0}),Object(A.jsx)("button",{className:k.a.btnAdd,type:"submit",children:"Add comment"})]}),Object(A.jsx)("h2",{className:k.a.title,children:"Comments list"})]})}n(33);var I=function(e){return function(e){return e.comments.items}(e)},S=n(14),J=n.n(S);function L(){var e=Object(r.c)(I);return Object(A.jsx)("ul",{className:J.a.listItems,children:e.map((function(e){var t=e.id,n=e.name,c=e.text;return Object(A.jsxs)("li",{className:J.a.item,children:[n,": ",c]},t)}))})}function q(){return Object(A.jsxs)("div",{children:[Object(A.jsx)(E,{}),Object(A.jsx)(L,{})]})}o.a.render(Object(A.jsx)(m.a.StrictMode,{children:Object(A.jsx)(F.a,{loading:null,persistor:N,children:Object(A.jsx)(r.a,{store:g,children:Object(A.jsx)(q,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={title:"CommentForm_title__2TGgt",commentForm:"CommentForm_commentForm__3G5Qg",inputName:"CommentForm_inputName__3ANQv",inputComment:"CommentForm_inputComment__39xPg",btnAdd:"CommentForm_btnAdd__2u7LV"}}},[[34,1,2]]]);
//# sourceMappingURL=main.25bdd308.chunk.js.map