(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=c(5),l=c(7),r=c(6),i=c(1),d=c.n(i),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.saveHandler=function(t){e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[Object(u.jsx)("h1",{className:"title",children:t?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t," ","is selected",Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){e.saveHandler("")}})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"})}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(c){return Object(u.jsxs)("tr",{"data-cy":"Good",className:c===t?"has-background-success-light":"hasnt-background-success-light",children:[Object(u.jsx)("td",{children:c===t?Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){e.setState({selectedGood:""})},children:"-"}):Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.saveHandler(c)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.a.Component);n.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5c403cd4.chunk.js.map