(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(t,e,n){t.exports=n.p+"static/media/Bomb.49fe2db2.jpg"},177:function(t,e,n){t.exports=n(413)},182:function(t,e,n){},213:function(t,e){},215:function(t,e){},247:function(t,e){},248:function(t,e){},317:function(t,e){},413:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(172),s=n.n(c),i=(n(182),n(27)),u=n(28),o=n(31),l=n(29),p=n(30),h=n(414),d=n(415),f=n(416),m=n(417),b=n(418),w=n(173),v=n.n(w),j=function(t){function e(t){return Object(i.a)(this,e),Object(o.a)(this,Object(l.a)(e).call(this,t))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(h.a,{inverse:!0},r.a.createElement(d.a,{width:"100%",src:v.a,alt:"Card image cap"}),r.a.createElement(f.a,null,r.a.createElement(m.a,null,"PassWord Destruct"),r.a.createElement(b.a,null,r.a.createElement("small",{className:"text-muted"})))),r.a.createElement(h.a,null,r.a.createElement(N,null),r.a.createElement(b.a,null,r.a.createElement("small",{className:"text-muted"}))))}}]),e}(a.Component),O=n(22),g=n.n(O),E=n(40),y=n(187),k=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t))).Post=function(){var t=Object(E.a)(g.a.mark(function t(e){var n,a;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={method:"POST",uri:"http://10.1.100.17/pwDestruct/php/api.php",body:e},t.next=4,y(n);case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),n.state={returnData:""},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=Object(E.a)(g.a.mark(function t(){var e,n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify(this.props.data),t.next=3,this.Post(e);case 3:n=t.sent,this.setState({returnData:n});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(t){return r.a.createElement("div",null,this.props.data.pw?"Generated PassWord!:"+this.state.returnData:"Retrieved Password: "+this.state.returnData)}}]),e}(r.a.Component),x=n(175),S=n(419),D=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t))).generate=Object(E.a)(g.a.mark(function t(){var e,a,r,c,s,i;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz","1234567890","!@#%",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#%",a="",r=0;r<=16;r++)c=Math.floor(Math.random()*e.length+1),console.log(c),console.log(a),a+=e[c];return t.next=8,C(a);case 8:s=t.sent,i=P(s),console.log(i),window.history.replaceState({},"Ticking","?"+i),n.setState(function(t,e){return{pw:a,pwHash:i,sending:!0,buttonDisabled:!0}});case 13:case"end":return t.stop()}},t,this)})),n.state={pw:"",pwHash:"",sending:!1,buttonDisabled:!1},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(S.a,{onClick:function(e){return t.generate()},disabled:this.state.buttonDisabled},"Generate"),r.a.createElement("br",null),"password: ",this.state.pw,r.a.createElement("br",null),"HASH: ",this.state.pwHash,this.state.sending?r.a.createElement(k,{data:{pw:this.state.pw,pwHash:this.state.pwHash}}):"")}}]),e}(a.Component),H=function(){var t=Object(E.a)(g.a.mark(function t(e){var n,a;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new TextEncoder,t.next=3,n.encode(e);case 3:return a=t.sent,t.abrupt("return",crypto.subtle.digest("SHA-256",a));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(E.a)(g.a.mark(function t(e){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),P=function(t){var e=new Uint8Array(t);return Object(x.a)(e).map(function(t){return t.toString(16).padStart(2,"0")}).join("")},N=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t))).state={QueryString:window.location.search.substring(1)},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return this.state.QueryString.length>=32?(console.log(this.state.QueryString),r.a.createElement(k,{data:{pwHash:this.state.QueryString}})):r.a.createElement("div",null,r.a.createElement(D,null))}}]),e}(a.Component),A=(n(412),function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))}}]),e}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[177,1,2]]]);
//# sourceMappingURL=main.281af815.chunk.js.map