"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[725],{1725:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var a=t(4942),r=t(1413),i=t(9439),s=t(2791),c=t(1620),o={input:"form_input__cqeL6",p:"form_p__75oS7",infoForUser:"form_infoForUser__zOjDw"},l=t(4420),u=t(4070),m=t(2564),d=t(3553),f=function(e){return e.contacts.items},h=(0,d.P1)([function(e){return e.contacts},function(e){return e.filter}],(function(e,n){if(!n||"string"!==typeof n)return e;var t=n.trim().toLowerCase();return e.items.filter((function(e){return(e.name||"").trim().toLowerCase().includes(t)}))})),x=t(184),_=function(){var e=(0,l.v9)(f),n=(0,l.I0)(),t=(0,s.useState)({}),d=(0,i.Z)(t,2),h=d[0],_=d[1],p=function(e){var n=e.target,t=n.name,i=n.value;_((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,i))}))};return(0,x.jsxs)("form",{className:o.form,onSubmit:function(t){t.preventDefault();var a=h.name;e.findIndex((function(e){return e.name.toLocaleLowerCase().trim()===a.toLocaleLowerCase().trim()}))>=0?m.Am.warning("Contact ".concat(a," is already exists!")):(n((0,u.xe)(h)),e.length>0&&t.currentTarget.reset())},children:[(0,x.jsx)("label",{htmlFor:"name",children:"Name"}),(0,x.jsx)("input",{className:o.input,onChange:p,type:"text",name:"name",id:"username",required:!0,placeholder:"Please, enter data of contact"}),(0,x.jsx)("label",{htmlFor:"tel",children:"Phone number "}),(0,x.jsx)("input",{className:o.input,onChange:p,type:"tel",name:"number",id:"tel",required:!0,placeholder:"Please, enter a phone number"}),(0,x.jsx)(c.Z,{type:"submit",text:"Add contact"})]})},p=t(118),j=t(4164),b="contactsList_contactsList__DGG6L",v="contactsList_itemContacts__PtrNV",N="contactsList_contactInfo__0aqg3",C="contactsList_link__ZZsC4",g="contactsList_btn__1i6Qa",y=t(4005),Z={backdrop:"modal_backdrop__1aTRo",modal:"modal_modal__+OT1t",btnModalClose:"modal_btnModalClose__ZQkiw",icon:"modal_icon__5hS-K",input:"modal_input__SBHw0",p:"modal_p__zA2Iq",infoForUser:"modal_infoForUser__quw1g"},k=t(7508),L=function(e){var n=e.onClose,t=e.currentId,o=(0,l.v9)(f).find((function(e){return e.id===t})),m=(0,l.I0)(),d=(0,s.useState)({name:"",number:"",id:""}),h=(0,i.Z)(d,2),_=h[0],p=h[1];(0,s.useEffect)((function(){o&&p({name:o.name,number:o.number,id:o.id})}),[o]);var j=function(e){p((0,r.Z)((0,r.Z)({},_),{},(0,a.Z)({},e.target.name,e.target.value)))};return(0,x.jsx)("div",{className:Z.backdrop,children:(0,x.jsxs)("div",{className:Z.modal,children:[(0,x.jsxs)("form",{className:Z.form,onSubmit:function(e){return function(e,n){e.preventDefault();var t={name:_.name,number:_.number};m((0,u.LG)({id:n,contact:t}))}(e,_.id)},children:[(0,x.jsx)("label",{htmlFor:"name",children:"Name"}),(0,x.jsx)("input",{className:Z.input,onChange:j,value:_.name,type:"text",name:"name",id:"username",required:!0}),(0,x.jsx)("label",{htmlFor:"tel",children:"Phone number "}),(0,x.jsx)("input",{className:Z.input,onChange:j,value:_.number,type:"tel",name:"number",id:"tel",required:!0}),(0,x.jsx)(c.Z,{type:"submit",text:"Edit contact"})]}),(0,x.jsx)("button",{className:Z.btnModalClose,onClick:n,children:(0,x.jsx)(k.$iT,{className:Z.icon})})]})})},w=function(){var e=(0,l.v9)(h),n=e.items,t=e.isLoading,a=(0,s.useState)(!1),r=(0,i.Z)(a,2),c=r[0],o=r[1],m=(0,s.useState)(null),d=(0,i.Z)(m,2),f=d[0],_=d[1],p=(0,l.v9)(h),Z=(0,l.I0)();(0,s.useEffect)((function(){Z((0,u.yF)())}),[Z]);var k=function(e){Z((0,u.ze)(e))},w=function(e){o(!0),_(e)},F=n?n.map((function(e){return(0,x.jsxs)("li",{className:v,children:[(0,x.jsxs)("p",{className:N,children:[e.name," ",(0,x.jsx)("a",{className:C,href:"tel:".concat(e.number),children:e.number})]}),(0,x.jsx)("button",{id:e.id,className:g,onClick:function(){return k(e.id)},type:"button",children:"Delete"}),(0,x.jsx)("button",{id:e.id,className:g,onClick:function(){return w(e.id)},type:"button",children:"Edit"})]},e.id)})):p.map((function(e){return(0,x.jsxs)("li",{className:v,children:[(0,x.jsxs)("p",{className:N,children:[e.name,"  ",e.number]}),(0,x.jsx)("button",{id:e.id,className:g,onClick:function(){return k(e.id)},type:"button",children:"Delete"}),(0,x.jsx)("button",{id:e.id,className:g,onClick:function(){return w(e.id)},type:"button",children:"Edit"})]},e.id)}));return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)(y.a,{}),c&&(0,j.createPortal)((0,x.jsx)(L,{currentId:f,onClose:function(){return o(!1)}}),document.querySelector("#modal-root")),(0,x.jsx)("div",{className:"contactsList",children:(0,x.jsx)("ul",{className:b,children:F})})]})},F=t(5653),S=function(e){var n=e.children,t=(0,l.v9)(f).length,a=(0,l.I0)();return(0,x.jsxs)("section",{children:[Boolean(t)?(0,x.jsxs)("div",{className:"filter",children:[(0,x.jsx)(p.Z,{title:"Contacts"}),(0,x.jsx)("p",{className:o.p,children:"Find contacts by name"}),(0,x.jsx)("form",{children:(0,x.jsx)("input",{onChange:function(e){var n=e.target.value,t=(0,F.K)({filter:n});a(t)},className:o.input,name:"filter",type:"text",placeholder:"Enter name"})})]}):(0,x.jsx)("p",{className:o.infoForUser,children:"You don't have any contacts yet."}),n]})},q=function(){return(0,x.jsxs)("main",{className:"container",children:[(0,x.jsx)(p.Z,{title:"Phonebook",children:(0,x.jsx)(_,{})}),(0,x.jsx)(S,{children:(0,x.jsx)(w,{})})]})}},118:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var a="title_title__3H47j",r=t(184),i=function(e){var n=e.title,t=e.children;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:a,children:n}),t]})}}}]);
//# sourceMappingURL=725.0ab55bc1.chunk.js.map