(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{165:function(e,t,c){},167:function(e,t,c){},168:function(e,t,c){},173:function(e,t,c){},185:function(e,t,c){},186:function(e,t,c){},187:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},190:function(e,t,c){},191:function(e,t,c){},192:function(e,t,c){},193:function(e,t,c){},194:function(e,t,c){},196:function(e,t,c){},198:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),s=c(61),n=c.n(s),l=(c(165),c(132)),r=c(13),j=c(0),d=Object(a.createContext)(),o=function(){return Object(a.useContext)(d)},b=function(e){var t=e.children,c=e.defaultCart,i=void 0===c?[]:c,s=Object(a.useState)(i),n=Object(r.a)(s,2),o=n[0],b=n[1],h=Object(a.useState)(0),O=Object(r.a)(h,2),x=O[0],m=O[1],u=Object(a.useState)((function(){return!1})),_=Object(r.a)(u,2),p=_[0],v=_[1];return Object(j.jsx)(d.Provider,{value:{cart:o,cantItems:x,isDarkMode:p,changeState:function(e){v(e)},addItem:function(e,t){if(0!==o.length){var c=o.findIndex((function(t){return t.item.id===e.item.id}));if(-1!==c){var a=o;a[c].cantidad=a[c].cantidad+e.cantidad}else b([].concat(Object(l.a)(o),[e]))}else b([].concat(Object(l.a)(o),[e]));m(e.cantidad+x)},removeItem:function(e,t){b(o.filter((function(t){return t.item.id!==e}))),m(x-t)},clearCart:function(){b(i),m(0)}},children:t})};c(167);var h=function(){return Object(j.jsx)("div",{className:"header__container",children:Object(j.jsx)("h1",{children:"E-Commerce"})})},O=(c(168),c(12)),x=c(200),m=c(86),u=c(87);c(173);var _=function(){var e=o().cantItems;return Object(j.jsxs)("div",{className:"Icon__Cont",children:[Object(j.jsx)(O.b,{className:"Icon__Styles",to:"/cart",children:Object(j.jsx)(m.a,{icon:u.a})}),Object(j.jsx)("div",{className:"Amount__container",children:Object(j.jsxs)("span",{children:[" ",e]})})]})},p=c(142),v=c.n(p);var f=function(){var e=Object(a.useContext)(d),t=Object(a.useState)((function(){return!1})),c=Object(r.a)(t,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){e.changeState(i)})),Object(j.jsx)(v.a,{onChange:s,checked:i,size:80})};var g=function(){var e=o().cantItems;return Object(j.jsxs)("div",{className:"Nav__container",children:[Object(j.jsx)(O.b,{to:"/",children:Object(j.jsx)(x.a,{size:"Medium",inverted:!0,color:"white",style:{marginTop:"5px"},children:"Home"})}),Object(j.jsx)("div",{className:"DarkMode__Style",children:Object(j.jsx)(f,{})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{className:"Link__Style",to:"/electronics",children:"Electronic"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{className:"Link__Style",to:"/jewelery",children:"Jewelery"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{className:"Link__Style",to:"/MenCloth",children:"Men-Cloth"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{className:"Link__Style",to:"/womencloth",children:"Women-Cloth"})})]}),0!==e?Object(j.jsx)(_,{}):null]})},N=c(15),k=(c(185),c(215)),C=c(148),y=c(216),w=c(212);var M=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(y.a,{active:!0,children:Object(j.jsx)(w.a,{children:"Loading"})})})},S=c(146),z=(c(199),S.a.initializeApp({apiKey:"AIzaSyDly5mM4d2X8MgQz3hZO7CdR4xhqQrY844",authDomain:"ecommercecoderreact.firebaseapp.com",projectId:"ecommercecoderreact",storageBucket:"ecommercecoderreact.appspot.com",messagingSenderId:"981548252670",appId:"1:981548252670:web:48725b5e14199d22e714af"}).firestore());var D=function(){var e=o().isDarkMode,t=Object(a.useState)([]),c=Object(r.a)(t,2),i=c[0],s=c[1],n=Object(a.useState)(!0),l=Object(r.a)(n,2),d=l[0],b=l[1];return Object(a.useEffect)((function(){var e=[];z.collection("items").get().then((function(t){t.forEach((function(t){e.push(Object(N.a)(Object(N.a)({},t.data()),{},{id:t.id,category:t.data().category}));var c=e.filter((function(e){return"Electronic"===e.category}));s(c)})),b(!1)}))}),[]),Object(j.jsx)("div",{children:e?Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[d?Object(j.jsx)(M,{}):null,i.map((function(e){return Object(j.jsx)("div",{className:"Item__container__Dark",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"Container__img",children:Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{style:{backgroundColor:"black"},children:[Object(j.jsx)(k.a.Header,{style:{backgroundColor:"black",color:"white"},children:e.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{style:{color:"white"},className:"date",children:[Object(j.jsx)("span",{style:{color:"white"},children:"us$ "}),e.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(e.id),children:Object(j.jsx)(x.a,{size:"Medium",color:"black",children:"Details"})})})]})]})},e.id)}))]})}):Object(j.jsx)("div",{className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[d?Object(j.jsx)(M,{}):null,i.map((function(e){return Object(j.jsx)("div",{className:"Item__container",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{className:"Container__img",children:Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{children:[Object(j.jsx)(k.a.Header,{children:e.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{className:"date",children:[Object(j.jsx)("span",{children:"us$ "}),e.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(e.id),children:Object(j.jsx)(x.a,{size:"Medium",color:"black",children:"Details"})})})]})]})},e.id)}))]})})})};c(186),c(187);var I=function(e){var t=e.item,c=o().isDarkMode;return Object(j.jsx)("div",{children:c?Object(j.jsx)("div",{className:"Item__container__Dark",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"Container__img",children:Object(j.jsx)(C.a,{src:t.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{style:{backgroundColor:"black"},children:[Object(j.jsx)(k.a.Header,{style:{backgroundColor:"black",color:"white"},children:t.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{style:{color:"white"},className:"date",children:[Object(j.jsx)("span",{style:{color:"white"},children:"us$ "}),t.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(t.id),children:Object(j.jsx)(x.a,{size:"medium",color:"black",children:"Details"})})})]})]})}):Object(j.jsx)("div",{className:"Item__container",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{className:"Container__img",children:Object(j.jsx)(C.a,{src:t.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{children:[Object(j.jsx)(k.a.Header,{children:t.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{className:"date",children:[Object(j.jsx)("span",{children:"us$ "}),t.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(t.id),children:Object(j.jsx)(x.a,{size:"medium",color:"black",children:"Details"})})})]})]})})})};var E=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(!0),n=Object(r.a)(s,2),l=n[0],d=n[1];return Object(a.useEffect)((function(){var e=[];z.collection("items").get().then((function(t){t.forEach((function(t){e.push(Object(N.a)(Object(N.a)({},t.data()),{},{id:t.id}))})),i(e),d(!1)}))}),[]),Object(j.jsx)("div",{className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[l?Object(j.jsx)(M,{}):null,c.map((function(e){return Object(j.jsx)(I,{item:e},e.id)}))]})})};var L=function(){var e=o().isDarkMode;return Object(j.jsx)("div",{children:e?Object(j.jsx)("div",{style:{backgroundColor:"black"},children:Object(j.jsx)(E,{})}):Object(j.jsx)("div",{children:Object(j.jsx)(E,{})})})};c(188);var $=function(){var e=o().isDarkMode,t=Object(a.useState)([]),c=Object(r.a)(t,2),i=c[0],s=c[1],n=Object(a.useState)(!0),l=Object(r.a)(n,2),d=l[0],b=l[1];return Object(a.useEffect)((function(){var e=[];z.collection("items").get().then((function(t){t.forEach((function(t){e.push(Object(N.a)(Object(N.a)({},t.data()),{},{id:t.id,category:t.data().category}));var c=e.filter((function(e){return"Jewelery"===e.category}));s(c)})),b(!1)}))}),[]),Object(j.jsx)("div",{children:e?Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[d?Object(j.jsx)(M,{}):null,i.map((function(e){return Object(j.jsx)("div",{className:"Item__container__Dark",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"Container__img",children:Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{style:{backgroundColor:"black"},children:[Object(j.jsx)(k.a.Header,{style:{backgroundColor:"black",color:"white"},children:e.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{style:{color:"white"},className:"date",children:[Object(j.jsx)("span",{style:{color:"white"},children:"us$ "}),e.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(e.id),children:Object(j.jsx)(x.a,{size:"Medium",color:"black",children:"Details"})})})]})]})},e.id)}))]})}):Object(j.jsx)("div",{className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[d?Object(j.jsx)(M,{}):null,i.map((function(e){return Object(j.jsx)("div",{className:"Item__container",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{className:"Container__img",children:Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{children:[Object(j.jsx)(k.a.Header,{children:e.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{className:"date",children:[Object(j.jsx)("span",{children:"us$ "}),e.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(e.id),children:Object(j.jsx)(x.a,{size:"Medium",color:"black",children:"Details"})})})]})]})},e.id)}))]})})})};c(189);var H=function(){var e=o().isDarkMode,t=Object(a.useState)([]),c=Object(r.a)(t,2),i=c[0],s=c[1],n=Object(a.useState)(!0),l=Object(r.a)(n,2),d=l[0],b=l[1];return Object(a.useEffect)((function(){var e=[];z.collection("items").get().then((function(t){t.forEach((function(t){e.push(Object(N.a)(Object(N.a)({},t.data()),{},{id:t.id,category:t.data().category}));var c=e.filter((function(e){return"Men-Cloth"===e.category}));s(c)})),b(!1)}))}),[]),Object(j.jsx)("div",{children:e?Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[d?Object(j.jsx)(M,{}):null,i.map((function(e){return Object(j.jsx)("div",{className:"Item__container__Dark",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"Container__img",children:Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{style:{backgroundColor:"black"},children:[Object(j.jsx)(k.a.Header,{style:{backgroundColor:"black",color:"white"},children:e.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{style:{color:"white"},className:"date",children:[Object(j.jsx)("span",{style:{color:"white"},children:"us$ "}),e.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(e.id),children:Object(j.jsx)(x.a,{size:"Medium",color:"black",children:"Details"})})})]})]})},e.id)}))]})}):Object(j.jsx)("div",{className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[d?Object(j.jsx)(M,{}):null,i.map((function(e){return Object(j.jsx)("div",{className:"Item__container",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{className:"Container__img",children:Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{children:[Object(j.jsx)(k.a.Header,{children:e.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{className:"date",children:[Object(j.jsx)("span",{children:"us$ "}),e.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(e.id),children:Object(j.jsx)(x.a,{size:"Medium",color:"black",children:"Details"})})})]})]})},e.id)}))]})})})};c(190);var F=function(){var e=o().isDarkMode,t=Object(a.useState)([]),c=Object(r.a)(t,2),i=c[0],s=c[1],n=Object(a.useState)(!0),l=Object(r.a)(n,2),d=l[0],b=l[1];return Object(a.useEffect)((function(){var e=[];z.collection("items").get().then((function(t){t.forEach((function(t){e.push(Object(N.a)(Object(N.a)({},t.data()),{},{id:t.id,category:t.data().category}));var c=e.filter((function(e){return"Women-Cloth"===e.category}));s(c)})),b(!1)}))}),[]),Object(j.jsx)("div",{children:e?Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[d?Object(j.jsx)(M,{}):null,i.map((function(e){return Object(j.jsx)("div",{className:"Item__container__Dark",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"Container__img",children:Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{style:{backgroundColor:"black"},children:[Object(j.jsx)(k.a.Header,{style:{backgroundColor:"black",color:"white"},children:e.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{style:{color:"white"},className:"date",children:[Object(j.jsx)("span",{style:{color:"white"},children:"us$ "}),e.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(e.id),children:Object(j.jsx)(x.a,{size:"Medium",color:"black",children:"Details"})})})]})]})},e.id)}))]})}):Object(j.jsx)("div",{className:"itemList__container",children:Object(j.jsxs)("div",{className:"itemlist__grid",children:[d?Object(j.jsx)(M,{}):null,i.map((function(e){return Object(j.jsx)("div",{className:"Item__container",children:Object(j.jsxs)(k.a,{style:{height:450,width:350},children:[Object(j.jsx)("div",{className:"Container__img",children:Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0})}),Object(j.jsxs)(k.a.Content,{children:[Object(j.jsx)(k.a.Header,{children:e.title}),Object(j.jsx)(k.a.Meta,{className:"date",children:Object(j.jsxs)("span",{className:"date",children:[Object(j.jsx)("span",{children:"us$ "}),e.price]})}),Object(j.jsx)(k.a.Content,{children:Object(j.jsx)(O.b,{to:"/detail/".concat(e.id),children:Object(j.jsx)(x.a,{size:"Medium",color:"black",children:"Details"})})})]})]})},e.id)}))]})})})};c(191),c(192);var T=function(e){var t=e.min,c=e.max,i=e.item,s=Object(a.useState)(parseInt(t)),n=Object(r.a)(s,2),l=n[0],b=n[1],h=Object(a.useContext)(d),m=o().isDarkMode,u=function(e){h.addItem({item:i,cantidad:e})},_=function(){b(l+1)},p=function(){b(l-1)};return Object(j.jsx)("div",{children:m?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{style:{backgroundColor:"black"},className:"SectionCounter",children:[Object(j.jsx)(x.a,{color:"white",disabled:l<=1,onClick:p,children:"-"}),Object(j.jsxs)("span",{style:{color:"white"},className:"span",children:[" ",l," "]}),Object(j.jsx)(x.a,{color:"white",onClick:_,disabled:l>=c,children:"+"}),Object(j.jsx)(O.b,{to:"/cart",children:Object(j.jsx)(x.a,{size:"Medium",color:"white",onClick:function(){return u(l)},children:"Add to Cart"})})]})}):Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"SectionCounter",children:[Object(j.jsx)(x.a,{color:"black",disabled:l<=1,onClick:p,children:"-"}),Object(j.jsxs)("span",{className:"span",children:[" ",l," "]}),Object(j.jsx)(x.a,{color:"black",onClick:_,disabled:l>=c,children:"+"}),Object(j.jsx)(O.b,{to:"/cart",children:Object(j.jsx)(x.a,{size:"Medium",color:"black",onClick:function(){return u(l)},children:"Add to Cart"})})]})})})};var B=function(e){var t=e.match.params.id,c=o().isDarkMode,i=Object(a.useState)([]),s=Object(r.a)(i,2),n=s[0],l=s[1],d=Object(a.useState)(!0),b=Object(r.a)(d,2),h=b[0],O=b[1];return Object(a.useEffect)((function(){var e=[];z.collection("items").get().then((function(c){c.forEach((function(c){e.push(Object(N.a)(Object(N.a)({},c.data()),{},{id:c.id}));var a=e.filter((function(e){return e.id===t}));l(a)})),O(!1)}))}),[t]),Object(j.jsx)("div",{children:c?Object(j.jsxs)("div",{children:[h?Object(j.jsx)(M,{}):null,n.map((function(e){return Object(j.jsx)("div",{style:{backgroundColor:"black",height:"1200px"},children:Object(j.jsx)("div",{className:"Item__container__DarkDetail ",children:Object(j.jsxs)(k.a,{style:{width:400,boxShadow:"0 5px 40px rgba(158, 0, 0, 0.5)"},children:[" ",Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0}),Object(j.jsxs)(k.a.Content,{style:{backgroundColor:"black"},children:[Object(j.jsx)(k.a.Header,{style:{color:"white"},children:e.title}),Object(j.jsx)(k.a.Description,{style:{color:"white"},children:e.description}),Object(j.jsx)(k.a.Meta,{className:"container__Date",children:Object(j.jsxs)("span",{style:{color:"white"},className:"date",children:[Object(j.jsx)("span",{style:{color:"white"},children:"us$ "}),e.price]})})]}),Object(j.jsx)(T,{min:1,max:5,item:e})]})})},e.id)}))]}):Object(j.jsxs)("div",{children:[h?Object(j.jsx)(M,{}):null,n.map((function(e){return Object(j.jsx)("div",{className:"Item__container__detail",children:Object(j.jsx)("div",{className:"card__style",children:Object(j.jsxs)(k.a,{style:{width:400,boxShadow:"0 5px 40px rgba(0, 0, 0, 0.5)"},children:[Object(j.jsx)(C.a,{src:e.image,size:"small",wrapped:!0,centered:!0}),Object(j.jsxs)(k.a.Content,{children:[Object(j.jsx)(k.a.Header,{children:e.title}),Object(j.jsx)(k.a.Description,{children:e.description}),Object(j.jsx)(k.a.Meta,{className:"container__Date",children:Object(j.jsxs)("span",{className:"date",children:[Object(j.jsx)("span",{children:"us$ "}),e.price]})})]}),Object(j.jsx)(T,{min:1,max:5,item:e})]})})},e.id)}))]})})};c(193),c(194);var A=function(){return Object(j.jsx)("div",{className:"Error__style",children:Object(j.jsx)("div",{className:"Button__container",children:Object(j.jsx)(O.b,{to:"/",children:Object(j.jsx)(x.a,{size:"big",color:"black",style:{marginTop:"5px"},children:"the cart is empty, go shopping"})})})})},J=c(112),G=c(131),Q=c.n(G),R=c(147),W=c(214),q=c(213),K=function(){var e=o(),t=e.cart,c=e.isDarkMode,i={firstName:"",lastName:"",Email:""},s=Object(a.useState)(i),n=Object(r.a)(s,2),l=n[0],d=n[1],b=Object(a.useState)([]),h=Object(r.a)(b,2),O=h[0],m=h[1],u=function(){var e=Object(R.a)(Q.a.mark((function e(c){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.collection("ordenes").doc().set(c);case 2:t.forEach((function(e){alert("Compra Realizada!, si numero de orden es: "+e.item.id),console.log("nuevo producto agregado!",e.item.id)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var c=e.target,a=c.name,i=c.value;d(Object(N.a)(Object(N.a)({},l),{},Object(J.a)({},a,i))),m({values:l,product:t})},p=function(e){u({order:O}),d(Object(N.a)({},i))};return Object(j.jsx)("div",{children:c?Object(j.jsxs)(W.a,{onSubmit:p,children:[Object(j.jsxs)(W.a.Field,{children:[Object(j.jsx)("label",{style:{color:"white"},children:"First Name"}),Object(j.jsx)("input",{placeholder:"First Name",name:"firstName",onChange:_,value:l.firstName})]}),Object(j.jsxs)(W.a.Field,{children:[Object(j.jsx)("label",{style:{color:"white"},children:"Last Name"}),Object(j.jsx)("input",{placeholder:"Last Name",name:"lastName",onChange:_,value:l.lastName})]}),Object(j.jsx)(W.a.Field,{id:"form-input-control-error-email",control:q.a,label:"Email",placeholder:"example@example.com",name:"Email",onChange:_,value:l.Email}),Object(j.jsx)(x.a,{type:"submit",size:"Medium",color:"black",children:"Submit"})]}):Object(j.jsxs)(W.a,{onSubmit:p,children:[Object(j.jsxs)(W.a.Field,{children:[Object(j.jsx)("label",{children:"First Name"}),Object(j.jsx)("input",{placeholder:"First Name",name:"firstName",onChange:_,value:l.firstName})]}),Object(j.jsxs)(W.a.Field,{children:[Object(j.jsx)("label",{children:"Last Name"}),Object(j.jsx)("input",{placeholder:"Last Name",name:"lastName",onChange:_,value:l.lastName})]}),Object(j.jsx)(W.a.Field,{id:"form-input-control-error-email",control:q.a,label:"Email",placeholder:"example@example.com",name:"Email",onChange:_,value:l.Email}),Object(j.jsx)(x.a,{type:"submit",size:"Medium",color:"black",children:"Submit"})]})})},P=function(){var e=o(),t=e.cart,c=e.removeItem,a=e.clearCart,i=e.isDarkMode,s=0;return Object(j.jsx)("div",{children:i?Object(j.jsxs)("div",{style:{height:"800px",backgroundColor:"black"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"container__h4 backGround__Img__Black ",children:Object(j.jsx)("h4",{className:"h4__Style",children:"Cart"})}),Object(j.jsx)(x.a,{size:"Medium",color:"black",style:{marginTop:"5px"},onClick:a,children:"Clear Cart"}),0===t.length&&Object(j.jsx)(A,{})]}),Object(j.jsxs)("div",{style:{backgroundColor:"black"},className:"grid__Cart",children:[Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"Container__all__Black",children:Object(j.jsxs)("div",{className:"Container__Card",children:[Object(j.jsx)("img",{src:e.item.image,alt:""}),Object(j.jsx)("div",{className:"style__text_black",children:e.item.title}),Object(j.jsxs)("div",{className:"style__text_black",children:["x ",e.cantidad," "]}),Object(j.jsxs)("div",{className:"style__text_black",children:["total: us$ ",e.cantidad*e.item.price]}),Object(j.jsx)("div",{className:"Container__Icon",children:Object(j.jsx)("button",{style:{cursor:"pointer"},onClick:function(){return c(e.item.id,e.cantidad)},children:Object(j.jsx)(m.a,{icon:u.b})})})]})},e.id)}))}),Object(j.jsx)("div",{children:0!==t.length&&Object(j.jsx)(K,{})})]}),Object(j.jsx)("div",{style:{backgroundColor:"black"},className:"container__",children:0!==t.length&&Object(j.jsx)("div",{className:"Total__Style",children:Object(j.jsxs)("span",{style:{color:"white"},className:"Total_Style_Black",children:[t.forEach((function(e){s=e.item.price*e.cantidad+s})),"Total: us$ ",s.toFixed(2)]})})})]}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"backGround__Img",children:[Object(j.jsx)("div",{className:"container__h4",children:Object(j.jsx)("h4",{className:"h4__Style",children:"Cart"})}),Object(j.jsx)(x.a,{size:"Medium",color:"black",style:{marginTop:"5px"},onClick:a,children:"Clear Cart"}),0===t.length&&Object(j.jsx)(A,{})]}),Object(j.jsxs)("div",{className:"grid__Cart",children:[Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)("div",{className:"Container__all",children:Object(j.jsxs)("div",{className:"Container__Card",children:[Object(j.jsx)("img",{src:e.item.image,alt:""}),Object(j.jsx)("div",{className:"style__text",children:e.item.title}),Object(j.jsxs)("div",{className:"style__text",children:["x ",e.cantidad," "]}),Object(j.jsxs)("div",{className:"style__text",children:["total: us$ ",e.cantidad*e.item.price]}),Object(j.jsx)("div",{className:"Container__Icon",children:Object(j.jsx)("button",{style:{cursor:"pointer"},onClick:function(){return c(e.item.id,e.cantidad)},children:Object(j.jsx)(m.a,{icon:u.b})})})]})},e.id)}))}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:0!==t.length&&Object(j.jsx)(K,{})})})]}),Object(j.jsx)("div",{className:"container__",children:0!==t.length&&Object(j.jsx)("div",{className:"Total__Style",children:Object(j.jsxs)("span",{children:[t.forEach((function(e){s=e.item.price*e.cantidad+s})),"Total: us$ ",s.toFixed(2)]})})})]})})},X=c(16);c(196);var Y=function(){return Object(j.jsx)(b,{children:Object(j.jsx)(O.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)(g,{}),Object(j.jsxs)(X.c,{children:[Object(j.jsx)(X.a,{path:"/",exact:!0,component:L}),Object(j.jsx)(X.a,{path:"/electronics",component:D}),Object(j.jsx)(X.a,{path:"/jewelery",component:$}),Object(j.jsx)(X.a,{path:"/MenCloth",component:H}),Object(j.jsx)(X.a,{path:"/womencloth",component:F}),Object(j.jsx)(X.a,{path:"/detail/:id",component:B}),Object(j.jsx)(X.a,{path:"/Cart",component:P})]})]})})})};c(197);n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.4ec9146e.chunk.js.map