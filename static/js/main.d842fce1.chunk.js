(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{24:function(e,t,a){},27:function(e){e.exports=JSON.parse('[{"productId":1,"productName":"Adidas Running Shoe","price":1299,"rating":4,"category":"Shoes","color":"Black","brand":"Adidas","image":"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_F36199_01_standard.jpg"},{"productId":2,"productName":"HP Envy Laptop","price":89900,"rating":3,"category":"Laptops","color":"Blue","brand":"HP","image":"https://in-media.apjonlinecdn.com/catalog/product/cache/314dec89b3219941707ad62ccc90e585/3/S/3S960PA-1_T1594096831.png"},{"productId":3,"productName":"Fastrack Men Watch","price":1499,"rating":4,"category":"Watches","color":"Black","brand":"Fastrack","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRApQ_5YCFWNTSQvmTBj0lE7vYN2l3YhQGcfQ&usqp=CAU"},{"productId":4,"productName":"Puma Tshirt Men","price":499,"rating":3.5,"category":"Clothings","color":"Black","brand":"Puma","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCSdz4PYVw-FdX6QxHnu2QSHecuUkDHZ6qzw&usqp=CAU"},{"productId":5,"productName":"Iphone 11 pro max","price":99999,"rating":4,"category":"Mobiles","color":"Black","brand":"Apple","image":"https://assets.croma.com/medias/sys_master/images/images/h4a/hca/8952893734942/221136_pjpeg.jpg"}]')},31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},37:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(13),l=a.n(r),o=(a(36),a(37),a(25)),s=a(26),i=a(30),m=a(29),d=a(9),u=a(2),p=a(7);var g=function(e){var t=Object(c.useState)(!1),a=Object(p.a)(t,2),r=a[0],l=a[1];return n.a.createElement("div",null,n.a.createElement("nav",{class:"navbar navbar-light bg-dark"},n.a.createElement("span",{class:"navContent"},"Login")),n.a.createElement("div",{class:"form loginPanel"},n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"cardPriceStyle"},"Username"),n.a.createElement("input",{type:"text",id:"username",name:"username",autocomplete:"off",class:"form-control rounded"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"cardPriceStyle"},"Password"),n.a.createElement("input",{type:"password",id:"password",name:"password",class:"form-control rounded"})),r&&n.a.createElement("p",{class:"error"},"Please enter a valid details!!"),n.a.createElement("div",{class:"rightAlign"},n.a.createElement("button",{class:"btn btn-primary",type:"submit",onClick:function(e){"wagdy"===document.getElementById("username").value&&"123"===document.getElementById("password").value?(l(!1),window.location.href="https://wagdy2019.github.io/shopReact/#/products"):l(!0)}},"Login"))))},E=a(21),h=a(27),b=a(10),v=a(16),f={cartData:[]};var y=Object(v.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(console.log("act",t,e),t.type){case"HANDLE_CART":return{cartData:t.cartData};default:return e}}));a(24);var S=Object(b.b)()((function(e){var t,a=Object(c.useState)(y.getState().cartData),r=Object(p.a)(a,2),l=r[0],o=r[1],s=Object(c.useState)(""),i=Object(p.a)(s,2),m=i[0],u=i[1],g=Object(c.useState)({category:"",color:"",price:"",brand:"",sort:""}),b=Object(p.a)(g,2),v=b[0],f=b[1];return n.a.createElement("div",null,n.a.createElement("nav",{class:"navbar navbar-light bg-dark"},n.a.createElement("span",{className:"navContent"},"Products"),n.a.createElement("div",{class:"rightAlign"},n.a.createElement(d.b,{className:"btn btn-success",to:{pathname:"/cart"}},"Go to Cart \xa0",y.getState().cartData.length>0&&n.a.createElement("span",{class:"badge badge-danger"},y.getState().cartData.length)))),n.a.createElement("br",null),n.a.createElement("div",{class:"input-group mb-3"},n.a.createElement("div",{class:"input-group-prepend"},n.a.createElement("span",{class:"input-group-text",id:"basic-addon1"},n.a.createElement("i",{class:"fa fa-search"}))),n.a.createElement("input",{type:"text",class:"form-control",placeholder:"Search for Products",onChange:function(e){return u(e.target.value)}})),n.a.createElement("div",{style:{display:"flex",width:"100%"}},"\xa0",n.a.createElement("span",{style:{width:"7%",fontStyle:"italic",fontWeight:"bold",fontSize:"23px"}},n.a.createElement("i",null,n.a.createElement("u",null,"Filter :"))),n.a.createElement("select",{style:{width:"15%"},id:"category",class:"form-control"},n.a.createElement("option",{value:"",selected:!0},"Category..."),n.a.createElement("option",{value:"Shoes"},"Shoes"),n.a.createElement("option",{value:"Watches"},"Watches"),n.a.createElement("option",{value:"Mobiles"},"Mobiles"),n.a.createElement("option",{value:"Laptops"},"Laptops"),n.a.createElement("option",{value:"Clothings"},"clothings"))," \xa0 \xa0\xa0 \xa0",n.a.createElement("select",{style:{width:"10%"},id:"color",class:"form-control"},n.a.createElement("option",{value:"",selected:!0},"Color..."),n.a.createElement("option",{value:"White"},"White"),n.a.createElement("option",{value:"Black"},"Black"),n.a.createElement("option",{value:"Blue"},"Blue"))," \xa0 \xa0\xa0 \xa0",n.a.createElement("select",{style:{width:"15%"},id:"price",class:"form-control"},n.a.createElement("option",{value:"",selected:!0},"Price..."),n.a.createElement("option",{value:"1000"},"Less than 1000"),n.a.createElement("option",{value:"50000"},"Less than 50,000"),n.a.createElement("option",{value:"100000"},"Less than 1 Lakh"))," \xa0 \xa0\xa0 \xa0",n.a.createElement("select",{style:{width:"10%"},id:"brand",class:"form-control"},n.a.createElement("option",{value:"",selected:!0},"Brand..."),n.a.createElement("option",{value:"Adidas"},"Adidas"),n.a.createElement("option",{value:"Puma"},"Puma"),n.a.createElement("option",{value:"Fastrack"},"Fastrack"),n.a.createElement("option",{value:"HP"},"HP"),n.a.createElement("option",{value:"Apple"},"Apple"))," \xa0 \xa0\xa0 \xa0\xa0",n.a.createElement("select",{style:{width:"15%"},id:"sort",class:"form-control"},n.a.createElement("option",{value:"",selected:!0},"Sort..."),n.a.createElement("option",{value:"Low"},"Price : Low to High"),n.a.createElement("option",{value:"High"},"Price : High to Low"),n.a.createElement("option",{value:"AtoZ"},"A - Z"))," \xa0 \xa0\xa0 \xa0\xa0",n.a.createElement("div",{style:{float:"right"}},n.a.createElement("button",{class:"btn btn-primary",onClick:function(){var e={},t=document.getElementById("category").value,a=document.getElementById("color").value,c=document.getElementById("price").value,n=document.getElementById("brand").value,r=document.getElementById("sort").value;t.length>0?e.category=t:e.category="",a.length>0?e.color=a:e.color="",c.length>0?e.price=c:e.price="",n.length>0?e.brand=n:e.brand="",r.length>0?e.sort=r:e.sort="",f(e)}},"Apply")," \xa0",n.a.createElement("button",{class:"btn btn-danger",onClick:function(){return f({category:"",color:"",price:"",brand:"",sort:""})}},"Clear Filter"))),n.a.createElement("div",{className:"productDisplayLayout"},h.sort((function(e,t){if(v.sort.length>0)switch(v.sort){case"Low":return e.price-t.price;case"High":return t.price-e.price;case"AtoZ":return e.productName.localeCompare(t.productName)}})).filter((t=m,console.log("searchingFor "+t),function(e){return console.log(e.productName),console.log(e.productName.toLowerCase().includes(t.toLowerCase())),e.productName.toLowerCase().includes(t.toLowerCase())||!t})).map((function(t,a){if(function(e){var t=!(v.category.length>0),a=!v.color.length,c=!v.price.length,n=!v.brand.length;return v.category===e.category&&(t=!0),v.color===e.color&&(a=!0),parseInt(v.price)>parseInt(e.price)&&(c=!0),v.brand===e.brand&&(n=!0),console.log("flter",e.productName,t,c,a,n),t&&a&&c&&n}(t))return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"cardStyle"},n.a.createElement("img",{src:t.image,class:"card-img-top",alt:"..."}),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title cardTitleStyle"},t.productName),n.a.createElement("div",{class:"flex"},n.a.createElement("p",{class:"cardPriceStyle"},"Price : ")," \xa0",n.a.createElement("p",{class:"card-text"},t.price," /-")),n.a.createElement("div",{class:"flex"},y.getState().cartData.includes(t)?n.a.createElement("div",null,n.a.createElement("button",{id:"buttonFontSize",className:"btn btn-danger",onClick:function(){return function(t){var a=y.getState().cartData.filter((function(e){return e.productId!=t.productId}));e.dispatch({type:"HANDLE_CART",cartData:a}),o(a)}(t)}},"Remove")," \xa0"):n.a.createElement("div",null,n.a.createElement("button",{id:"buttonFontSize",className:"btn btn-primary",onClick:function(){return function(t){var a=y.getState().cartData;e.dispatch({type:"HANDLE_CART",cartData:[].concat(Object(E.a)(a),[t])}),o([].concat(Object(E.a)(l),[t]))}(t)}},"Add to Cart")," \xa0"),n.a.createElement("button",{id:"buttonFontSize",className:"btn btn-secondary"},"More details")))))}))))}));var N=Object(b.b)()((function(e){var t=Object(c.useState)(y.getState().cartData),a=Object(p.a)(t,2),r=(a[0],a[1]);return n.a.createElement("div",null,n.a.createElement("nav",{class:"navbar navbar-light bg-dark"},n.a.createElement("span",{className:"navContent"},"Cart \xa0",y.getState().cartData.length>0&&n.a.createElement("span",{class:"badge badge-danger"},y.getState().cartData.length))),n.a.createElement("div",{className:"productDisplayLayout"},0===y.getState().cartData.length&&n.a.createElement("div",{className:"cartEmptyMessage"},n.a.createElement("h3",{className:"App italic"},"Your cart is empty!!"),n.a.createElement("h6",{className:"App italic"},"Visit ",n.a.createElement("a",{href:"/products"},"Products")," page to explore more..")),y.getState().cartData.map((function(t){return n.a.createElement("div",{class:"card",className:"cardStyle"},n.a.createElement("img",{src:t.image,class:"card-img-top",alt:"..."}),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title cardTitleStyle"},t.productName),n.a.createElement("div",{class:"flex"},n.a.createElement("p",{class:"cardPriceStyle"},"Price : ")," \xa0",n.a.createElement("p",{class:"card-text"},t.price," /-")),n.a.createElement("div",{class:"rightAlign"},n.a.createElement("button",{id:"buttonFontSize",className:"btn btn-danger",onClick:function(){return function(t){var a=y.getState().cartData.filter((function(e){return e.productId!=t.productId}));e.dispatch({type:"HANDLE_CART",cartData:a}),r(a)}(t)}},"Remove"))))}))),y.getState().cartData.length>0&&n.a.createElement("div",{class:"rightAlign"},n.a.createElement(d.b,{className:"btn btn-secondary",to:{pathname:"/products"}},"Back to products")," \xa0",n.a.createElement("button",{className:"btn btn-success"},"Check out")))})),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/"},n.a.createElement(g,null)),n.a.createElement(u.a,{exact:!0,path:"https://wagdy2019.github.io/shopReact/#/products",component:g}),n.a.createElement(u.a,{exact:!0,path:"/products",component:S,store:this.props.store}),n.a.createElement(u.a,{exact:!0,path:"/cart/:name",component:N,store:this.props.store}),n.a.createElement(u.a,{exact:!0,path:"/cart",component:N,store:this.props.store}))))}}]),a}(c.Component);var A=function(){return n.a.createElement("div",null,n.a.createElement(b.a,{store:y},n.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43),a(44);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d842fce1.chunk.js.map