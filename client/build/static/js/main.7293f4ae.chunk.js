(this["webpackJsonpreact-soc-cal"]=this["webpackJsonpreact-soc-cal"]||[]).push([[0],{161:function(e,t,a){e.exports=a.p+"static/media/w512h5121371227427events.c6e75c47.png"},168:function(e,t,a){e.exports=a(260)},173:function(e,t,a){},174:function(e,t,a){},177:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(35),r=a.n(c),i=a(5),l=a(4),o=a(6),m=a(7),u=a(8),d=a(18),v=a(38),h=(a(68),a(9)),E=a(64),p=a(65),g=(a(173),a(165)),f=a(164),b=a(278),y=a(281),j=(a(174),a(279)),O=a(155),k=a.n(O),C=a(280),N=a(151),_=a.n(N),I=a(150),w=a.n(I),x=a(149),D=a.n(x),S=a(147),F=a.n(S),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).removeInvite=e.removeInvite,a.state={invite:e.invite},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"accept",value:function(){var e=this.state.invite.id;this.handleInvite(e,"accept"),this.removeInvite(e)}},{key:"decline",value:function(){var e=this.state.invite.id;this.handleInvite(e,"decline"),this.removeInvite(e)}},{key:"handleInvite",value:function(e,t){fetch("/invite?id=".concat(e.$oid,"&action=").concat(t),{method:"DELETE"}).then((function(e){console.log(e.statusText)}))}},{key:"render",value:function(){var e,t=this,a=this.state.invite;return e="friend"===a.type?a.sender_name+" \u0431\u0443\u0434\u0435\u0442 \u0432\u0430\u0448\u0438\u043c \u0434\u0440\u0443\u0433\u043e\u043c?":"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u0441\u044c \u043d\u0430 "+a.event_name+"?",s.a.createElement("div",{className:"container"},"friend"===a.type?s.a.createElement(F.a,{className:"type-icon"}):s.a.createElement(D.a,{className:"type-icon"}),s.a.createElement("div",{className:"content"},e),s.a.createElement(C.a,{color:"primary",className:"accept-btn",onClick:function(){return t.accept()}},s.a.createElement(w.a,{fontSize:"small"})),s.a.createElement(C.a,{color:"secondary",className:"decline-btn",onClick:function(){return t.decline()}},s.a.createElement(_.a,{fontSize:"small"})))}}]),t}(s.a.Component),T=(a(177),a(152)),A=a.n(T),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={invites:[]},a.toggle=a.toggle.bind(Object(h.a)(a)),a.removeInvite=a.removeInvite.bind(Object(h.a)(a)),a.getInvites=a.getInvites.bind(Object(h.a)(a)),a.getInvites(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getInvites",value:function(){var e=this;fetch("/invites").then((function(t){t.ok?t.json().then((function(t){e.setState({invites:t||[]})})):console.log(t.statusText)}))}},{key:"toggle",value:function(){"hide"===this.widget.className?this.widget.className="show":this.widget.className="hide"}},{key:"removeInvite",value:function(e){var t=this.state.invites;this.setState({invites:t.filter((function(t){return t.id!==e}))})}},{key:"render",value:function(){var e=this,t=this.state.invites.map((function(t){return s.a.createElement(U,{invite:t,key:t.id,removeInvite:e.removeInvite})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,{variant:"contained",color:"primary",size:"small",className:this.props.className,onClick:this.toggle},0===this.state.invites.length?"":this.state.invites.length,s.a.createElement(A.a,{size:"small"})),s.a.createElement("div",{ref:function(t){return e.widget=t},className:"hide"},t))}}]),t}(s.a.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={userName:e.user?e.user.name:"",pictureUrl:e.user?e.user.profile_pic:""},a.updateUser=a.updateUser.bind(Object(h.a)(a)),a.exit=a.exit.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"exit",value:function(){fetch("/logout").then((function(e){window.location.replace("https://127.0.0.1:5000/")}))}},{key:"updateUser",value:function(e){this.setState({userName:e?e.name:"",pictureUrl:e?e.profile_pic:""})}},{key:"render",value:function(){return s.a.createElement(b.a,{container:!0},s.a.createElement(f.a,{alt:this.state.userName,size:"55",round:!0,src:this.state.pictureUrl}),s.a.createElement(b.a,{item:!0,className:"user-info"},s.a.createElement(y.a,{className:"user-name"},s.a.createElement(j.a,{className:"card-title",color:"textSecondary",gutterBottom:!0},this.state.userName)),s.a.createElement("div",{className:"buttons"},s.a.createElement(z,{className:"notifications-center"}),s.a.createElement(C.a,{variant:"contained",color:"primary",className:"settings-btn",size:"small",onClick:this.exit},s.a.createElement(k.a,{fontSize:"small"})))))}}]),t}(s.a.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={user:null},a.getCurrentUser=a.getCurrentUser.bind(Object(h.a)(a)),a.getCurrentUser(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getCurrentUser",value:function(){var e=this;fetch("/user").then((function(t){t.ok?t.json().then((function(t){e.setState({user:{user_id:t.id,name:t.name,email:t.email,profile_pic:t.profile_pic,birthday:t.birthday}}),e.userCard.updateUser(e.state.user)})):console.log(t.statusText)}))}},{key:"render",value:function(){var e=this;return s.a.createElement(E.a,{bg:"dark",variant:"dark",className:"navbar"},s.a.createElement(E.a.Brand,{className:"navbar-brand"},s.a.createElement(d.b,{className:"header-link",to:"../../../../../Calendar"},"Social Calendar")),s.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(p.a,null,s.a.createElement(p.a.Link,null,s.a.createElement(d.b,{className:"header-link",to:"../../../../../Calendar"},"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c")),s.a.createElement(p.a.Link,null,s.a.createElement(d.b,{className:"header-link",to:"../../../../../Friends"},"\u0414\u0440\u0443\u0437\u044c\u044f")),s.a.createElement(p.a.Link,null,s.a.createElement(d.b,{className:"header-link",to:"../../../../../Dialogues"},"\u0427\u0430\u0442\u044b")))),s.a.createElement(g.a,{inline:!0},s.a.createElement(M,{user:this.state.user,ref:function(t){return e.userCard=t}})))}}]),t}(s.a.Component),Y=a(158),B=a.n(Y),R=a(82),$=a.n(R),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).removeFriend=e.removeFriend,a.state={friend:e.friend},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"deleteFriend",value:function(e){fetch("/friend?id=".concat(e),{method:"DELETE"}).then((function(e){e.ok?e.json().then((function(e){console.log(e)})):console.log(e.statusText)}))}},{key:"render",value:function(){var e=this,t=this.state.friend;return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"friend"},s.a.createElement("div",{className:"wrap"},s.a.createElement("img",{className:"friend-avatar",src:t.profile_pic,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u0434\u0440\u0443\u0433\u0430"}),s.a.createElement("div",{className:"friend-name"},t.name)),s.a.createElement("div",{className:"wrap"},s.a.createElement(C.a,{color:"primary",className:"settings-btn",variant:"contained"},s.a.createElement($.a,{fontSize:"small"})),s.a.createElement(C.a,{color:"primary",className:"settings-btn",variant:"contained",onClick:function(){return e.deleteFriend(t.id.$oid)}},s.a.createElement(B.a,{fontSize:"small"})))))}}]),t}(s.a.Component),J=a(159),W=a.n(J),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).sendInvite=e.sendInvite,a.state={user:e.user},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"sendInvite",value:function(e){var t=JSON.stringify({type:"friend",receiver_id:e.$oid});fetch("/invite",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:t}).then((function(e){e.ok?e.json().then((function(e){console.log(e)})):console.log(e.statusText)}))}},{key:"render",value:function(){var e=this,t=this.state.user;return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"friend"},s.a.createElement("div",{className:"wrap"},s.a.createElement("img",{className:"friend-avatar",src:t.profile_pic,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u043d\u0435\u0434\u0440\u0443\u0433\u0430"}),s.a.createElement("div",{className:"friend-name"},t.name)),s.a.createElement("div",{className:"wrap"},s.a.createElement(C.a,{color:"primary",className:"settings-btn",variant:"contained"},s.a.createElement($.a,{fontSize:"small"})),s.a.createElement(C.a,{color:"primary",className:"settings-btn",variant:"contained",onClick:function(){return e.sendInvite(t._id)}},s.a.createElement(W.a,{fontSize:"small"})))))}}]),t}(s.a.Component),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={friends:[],users:[]},a.getUsers=a.getUsers.bind(Object(h.a)(a)),a.getFriends=a.getFriends.bind(Object(h.a)(a)),a.removeFriend=a.removeFriend.bind(Object(h.a)(a)),a.searchUsers=a.searchUsers.bind(Object(h.a)(a)),a.sendInvite=a.sendInvite.bind(Object(h.a)(a)),a.getFriends(),a.getUsers(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getUsers",value:function(e){var t=this;fetch("/search/users?filtered_str=".concat(e)).then((function(e){e.ok?e.json().then((function(e){t.setState({users:e})})):console.log(e.statusText)}))}},{key:"getFriends",value:function(){var e=this;fetch("/friends").then((function(t){t.ok?t.json().then((function(t){e.setState({friends:t})})):console.log(t.statusText)}))}},{key:"sendInvite",value:function(e){}},{key:"removeFriend",value:function(e){this.getFriends()}},{key:"searchUsers",value:function(){this.getUsers(document.getElementById("search").value)}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state.friends.map((function(t){return s.a.createElement(P,{friend:t,key:t.id,removeFriend:e.removeFriend})})),a=this.state.users.map((function(t){return s.a.createElement(G,{user:t,key:t.id,sendInvite:e.sendInvite})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"friends-main-box"},s.a.createElement("h4",{class:"friends"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439"),s.a.createElement("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0434\u0440\u0443\u0437\u0435\u0439",type:"text",name:"friends-search",id:"search",onChange:this.searchUsers}),s.a.createElement("ol",{class:"friends-list"},t,a)))}}]),t}(s.a.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(L,null),s.a.createElement(K,null))}}]),t}(s.a.Component),H=(a(78),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{class:"dialogue"},s.a.createElement("div",{class:"wrap"},s.a.createElement("img",{class:"dialogue-img",src:"../img/asd.png",alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u0431\u0435\u0441\u0435\u0434\u044b"}),s.a.createElement("div",{class:"dialogue-content"},s.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0435\u0441\u0435\u0434\u044b"),s.a.createElement("div",{class:"wrap2"},s.a.createElement("div",{class:"wrap"},s.a.createElement("img",{src:"../img/asd.png",width:"15px",height:"15px",alt:""}),s.a.createElement("div",null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")),s.a.createElement("div",{class:"time"},"12:20"))))))}}]),t}(s.a.Component)),Q=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{class:"wrap2"},s.a.createElement("div",{class:"message"},"username1: message"),s.a.createElement("div",{class:"time"},"10:35")))}}]),t}(s.a.Component),V=a(160),X=a.n(V),Z=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"dialogues-main-box"},s.a.createElement("div",{class:"wrap3"},s.a.createElement("div",{class:"dialogues-box"},s.a.createElement("h4",{class:"defoult-titel"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"),s.a.createElement("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u0430...",type:"text",class:"text",name:"dialogue-search"}),s.a.createElement("ol",{class:"dialogues-list"},s.a.createElement(H,null),s.a.createElement(H,null),s.a.createElement(H,null),s.a.createElement(H,null),s.a.createElement(H,null),s.a.createElement(H,null),s.a.createElement(H,null),s.a.createElement(H,null))),s.a.createElement("div",{class:"selected-dialog-box"},s.a.createElement("h4",{class:"defoult-titel"},"\u0412\u044b\u0431\u0440\u0430\u043d\u044b\u0439 \u0434\u0438\u0430\u043b\u043e\u0433 (\u0435\u0433\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435)"),s.a.createElement("ol",{class:"message-list"},s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null),s.a.createElement(Q,null)),s.a.createElement("div",{class:"msg-area"},s.a.createElement("textarea",{class:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."}),s.a.createElement(C.a,{color:"primary",className:"settings-btn",variant:"contained"},s.a.createElement(X.a,null)))))))}}]),t}(s.a.Component),ee=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(L,null),s.a.createElement(Z,null))}}]),t}(s.a.Component),te=(a(233),a(234),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={id:e.id.$oid,avatar:"https://www.meme-arsenal.com/memes/3904597739d704ee6d0688119ebeee15.jpg",name:"Kalivan"},fetch("/member?id=".concat(a.props.id.$oid)).then((function(e){e.ok?e.json().then((function(e){a.setState({name:e.name,avatar:e.profile_pic})})):console.log(e.statusText)})),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(d.b,{to:"/Calendar/"+this.state.id,className:"event-member-link"},s.a.createElement("div",{className:"event-member"},s.a.createElement("img",{className:"event-member-ava",src:this.state.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),s.a.createElement("div",{className:"event-member-name"},this.state.name)))}}]),t}(s.a.Component)),ae=a(161),ne=a.n(ae),se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={access:!1,eventID:a.props.match.params.id,eventAvatarUrl:ne.a,eventTitle:"_eventTitle",eventFullDesr:"_eventFullDesr",eventShortDescr:"_eventShortDescr",isPrivate:!1,datetime:new Date,address:"_address",members:[],chatID:-1},fetch("/event?id=".concat(a.props.match.params.id)).then((function(e){e.ok?e.json().then((function(e){console.log(e.member_id_list),a.setState({access:!0,eventAvatarUrl:e.icon,eventTitle:e.name,eventFullDesr:e.description,eventShortDescr:e.short_descr,isPrivate:e.is_private,datetime:e.datetime,address:e.address,chatID:e.chat_id,members:e.member_id_list})})):(console.log(e.statusText),a.state.access=!1)})),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.state.access&&this.state.members){console.log(this.state.members);var e=this.state.members.map((function(e){return s.a.createElement(te,{key:e,id:e})}));return s.a.createElement("div",{className:"page-container-event"},s.a.createElement(L,null),s.a.createElement("main",{className:"event"},s.a.createElement("div",{className:"event-box"},s.a.createElement("div",{className:"event-img-wrap event-page-wrap"},s.a.createElement("img",{className:"event-img",src:this.state.eventAvatarUrl,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"})),s.a.createElement("div",{className:"event-title-descr event-page-wrap"},s.a.createElement("h3",{className:"event-title"},this.state.eventTitle),s.a.createElement("div",{className:"event-short-descr"},this.state.eventShortDescr)),s.a.createElement("div",{className:"event-members event-page-wrap"},s.a.createElement("h4",{className:"members-title"},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),s.a.createElement("div",{className:"members-list"},e)),s.a.createElement("div",{className:"event-body event-page-wrap"},s.a.createElement("h4",{className:"event-body-title"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),s.a.createElement("div",{className:"event-full-descr"},this.state.eventFullDesr))),s.a.createElement("div",{className:"chat-main-box"},s.a.createElement("h4",{className:"event-chat"},"\u0427\u0430\u0442"),s.a.createElement("div",{className:"chat-box"}))))}return s.a.createElement("div",{className:"no-access"},"\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0432\u0430\u0441")}}]),t}(s.a.Component),ce=(a(235),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={selectedElement:document.getElementById("bell.svg"),selected:"bell.svg"},console.log(a.state.selectedElement),a.selectChanged=a.selectChanged.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"selectChanged",value:function(e){this.props.changeIcon(e),this.state.selectedElement&&(this.state.selectedElement.style.border="0px");var t=document.getElementById(e);this.setState({selected:e,selectedElement:t}),t.style.border="5px solid rgba(200,42,42,1)",t.style.borderRadius="25%"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"flex-center"},s.a.createElement("div",{id:"icons-grid",className:"icons-grid"},s.a.createElement("div",{id:"bell.svg",onClick:function(){return e.selectChanged("bell.svg")}},s.a.createElement("img",{src:"/load_icon/bell.svg",alt:"1"})),s.a.createElement("div",{id:"burger.svg",onClick:function(){return e.selectChanged("burger.svg")}},s.a.createElement("img",{src:"/load_icon/burger.svg",alt:"2"})),s.a.createElement("div",{id:"cart.svg",onClick:function(){return e.selectChanged("cart.svg")}},s.a.createElement("img",{src:"/load_icon/cart.svg",alt:"3"})),s.a.createElement("div",{id:"coctail.svg",onClick:function(){return e.selectChanged("coctail.svg")}},s.a.createElement("img",{src:"/load_icon/coctail.svg",alt:"4"})),s.a.createElement("div",{id:"coffee.svg",onClick:function(){return e.selectChanged("coffee.svg")}},s.a.createElement("img",{src:"/load_icon/coffee.svg",alt:"5"})),s.a.createElement("div",{id:"confirm.svg",onClick:function(){return e.selectChanged("confirm.svg")}},s.a.createElement("img",{src:"/load_icon/confirm.svg",alt:"6"})),s.a.createElement("div",{id:"delete.svg",onClick:function(){return e.selectChanged("delete.svg")}},s.a.createElement("img",{src:"/load_icon/delete.svg",alt:"7"})),s.a.createElement("div",{id:"doughnut.svg",onClick:function(){return e.selectChanged("doughnut.svg")}},s.a.createElement("img",{src:"/load_icon/doughnut.svg",alt:"8"})),s.a.createElement("div",{id:"exit.svg",onClick:function(){return e.selectChanged("exit.svg")}},s.a.createElement("img",{src:"/load_icon/exit.svg",alt:"9"})),s.a.createElement("div",{id:"gamepad.svg",onClick:function(){return e.selectChanged("gamepad.svg")}},s.a.createElement("img",{src:"/load_icon/gamepad.svg",alt:"10"})),s.a.createElement("div",{id:"glasses.svg",onClick:function(){return e.selectChanged("glasses.svg")}},s.a.createElement("img",{src:"/load_icon/glasses.svg",alt:"11"})),s.a.createElement("div",{id:"heart.svg",onClick:function(){return e.selectChanged("heart.svg")}},s.a.createElement("img",{src:"/load_icon/heart.svg",alt:"12"})),s.a.createElement("div",{id:"music.svg",onClick:function(){return e.selectChanged("music.svg")}},s.a.createElement("img",{src:"/load_icon/music.svg",alt:"13"})),s.a.createElement("div",{id:"pin.svg",onClick:function(){return e.selectChanged("pin.svg")}},s.a.createElement("img",{src:"/load_icon/pin.svg",alt:"14"})),s.a.createElement("div",{id:"pizza.svg",onClick:function(){return e.selectChanged("pizza.svg")}},s.a.createElement("img",{src:"/load_icon/pizza.svg",alt:"15"})),s.a.createElement("div",{id:"plus.svg",onClick:function(){return e.selectChanged("plus.svg")}},s.a.createElement("img",{src:"/load_icon/plus.svg",alt:"16"}))))}}]),t}(s.a.Component)),re=a(50),ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={type:"single",event_name:"Event_name",is_private:"true",datetime:a.props.match.params.day+"."+a.props.match.params.month+"."+a.props.match.params.year+" 15:30",address:"\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0438\u0439 \u0421\u043e\u044e\u0437",description:"Desciption",icon:"https://social-calendar-tensor.herokuapp.com/load_icon/bell.svg"},a.privateChange=a.privateChange.bind(Object(h.a)(a)),a.typeChange=a.typeChange.bind(Object(h.a)(a)),a.sendNewEvent=a.sendNewEvent.bind(Object(h.a)(a)),a.nameChange=a.nameChange.bind(Object(h.a)(a)),a.addressChange=a.addressChange.bind(Object(h.a)(a)),a.descriptionChange=a.descriptionChange.bind(Object(h.a)(a)),a.changeSelectedIcon=a.changeSelectedIcon.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"sendNewEvent",value:function(){console.log(this.state);var e=JSON.stringify({type:this.state.type,name:this.state.event_name,is_private:this.state.is_private,datetime:this.state.datetime,address:this.state.address,description:this.state.description,icon:this.state.icon});fetch("/event",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:e}).then((function(e){e.ok?e.json().then((function(e){console.log(e),window.location.replace("https://127.0.0.1:5000/")})):console.log(e.statusText)}))}},{key:"typeChange",value:function(e){this.setState({type:e})}},{key:"privateChange",value:function(e){this.setState({is_private:e})}},{key:"nameChange",value:function(e){this.setState({event_name:e.target.value})}},{key:"addressChange",value:function(e){this.setState({address:e.target.value})}},{key:"descriptionChange",value:function(e){this.setState({description:e.target.value})}},{key:"changeSelectedIcon",value:function(e){this.setState({icon:"https://social-calendar-tensor.herokuapp.com/load_icon/"+e}),console.log("\u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430 \u0441\u043c\u0435\u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0438 "+this.state.icon)}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-container-event"},s.a.createElement(L,null),s.a.createElement("main",{className:"create-event"},s.a.createElement("div",{className:"create-event-grid"},s.a.createElement(ce,{changeIcon:this.changeSelectedIcon}),s.a.createElement("h4",{className:"create-event-title left-column-title"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),s.a.createElement("input",{className:"create-event-title-input create-event-input",type:"text",value:this.state.event_name,onChange:this.nameChange}),s.a.createElement("h4",{className:"create-event-type left-column-title"},"\u0422\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),s.a.createElement(re.RadioGroup,{onChange:this.typeChange,horizontal:!0},s.a.createElement(re.ReversedRadioButton,{className:"radio-button-create-event",value:"group"},"\u0413\u0440\u0443\u043f\u043f\u043e\u0432\u043e\u0439"),s.a.createElement(re.ReversedRadioButton,{className:"radio-button-create-event",value:"single"},"\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439")),s.a.createElement("h4",{className:"create-event-isPrivate left-column-title"},"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439"),s.a.createElement(re.RadioGroup,{onChange:this.privateChange,horizontal:!0},s.a.createElement(re.ReversedRadioButton,{className:"radio-button-create-event",value:"true"},"\u0414\u0430"),s.a.createElement(re.ReversedRadioButton,{className:"radio-button-create-event",value:"false"},"\u041d\u0435\u0442")),s.a.createElement("h4",{className:"create-event-Address left-column-title"},"\u0410\u0434\u0440\u0435\u0441"),s.a.createElement("input",{className:"create-event-Address-input create-event-input",type:"text",value:this.state.address,onChange:this.addressChange}),s.a.createElement("h4",{className:"create-event-descr left-column-title"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),s.a.createElement("input",{className:"create-event-descr-input create-event-input",type:"text",value:this.state.description,onChange:this.descriptionChange})),s.a.createElement(C.a,{color:"primary",className:"settings-btn create-button",variant:"contained",onClick:this.sendNewEvent},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435")))}}]),t}(s.a.Component),le=(a(253),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isAuth:!1},fetch("/invites").then((function(e){e.ok&&a.setState({isAuth:e.headers.get("Auth")})})),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"signIn",value:function(){window.location.replace("https://127.0.0.1:5000/login")}},{key:"render",value:function(){return this.state.isAuth?s.a.createElement(v.a,{to:"/Calendar"}):s.a.createElement("div",{className:"wrap-index-main"},s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"title"},"Social Calendar"),s.a.createElement("button",{className:"google-auth-button",onClick:this.signIn})))}}]),t}(s.a.Component)),oe=a(166),me=(a(254),a(255),a(256),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={eventID:e.eventID,name:e.name,icon:e.icon,time:e.time},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggleInfo",value:function(e){this.info.hidden=e}},{key:"render",value:function(){var e=this,t="object"===typeof this.state.eventID?this.state.eventID.$oid:this.state.eventID;return s.a.createElement("div",null,this.state.icon?s.a.createElement(d.b,{to:"/Event/"+t},s.a.createElement("img",{className:"event-icon",src:this.state.icon,alt:".",onMouseEnter:function(){return e.toggleInfo(!1)},onMouseLeave:function(){return e.toggleInfo(!0)}})):"",s.a.createElement("div",{className:"event-info",hidden:!0,ref:function(t){return e.info=t}},this.state.name," ",s.a.createElement("br",null)," ",this.state.time))}}]),t}(s.a.Component)),ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={events:e.events&&0!==e.events.length?e.events:null,updateEventListData:e.updateEventListData?e.updateEventListData:null,month:e.month,year:e.year},a.updateEvents=a.updateEvents.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"updateEvents",value:function(e){this.setState({events:e&&0!==e.length?e:null})}},{key:"render",value:function(){var e,t=this,a={opacity:this.props.hidden?.4:.92},n={year:"numeric",month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"};return console.log(this.state.events),this.state.events&&(e=this.state.events.map((function(e){return s.a.createElement(me,{key:e.id,eventID:e.id,name:e.name,time:new Date(e.datetime.$date).toLocaleString("ru",n),icon:e.icon})}))),s.a.createElement("div",{className:"day-plate",style:a,onClick:function(){t.state.updateEventListData(t.state.events)}},this.props.day,s.a.createElement("div",{className:"mini-events"},this.state.events?e:"",s.a.createElement(d.b,{to:"/CreateEvent/"+this.state.year+"/"+this.state.month+"/"+this.props.day},s.a.createElement("img",{className:"addEventButton",src:"/load_icon/plus.svg",alt:"+",onClick:this.createEvent}))))}}]),t}(s.a.Component),de=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).day=[],a.state={countDays:ve(e.year,e.month),firstDayOfWeek:he(e.year,e.month),month:e.month,year:e.year,events:{}},a.updateMonthAndYear=a.updateMonthAndYear.bind(Object(h.a)(a)),a.updateEvents=a.updateEvents.bind(Object(h.a)(a)),a.getEvents=a.getEvents.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"prevMonth",value:function(){var e=this.state.month,t=this.state.year;1===e?(t--,e=12,this.updateMonthAndYear(e,t)):(e--,this.updateMonthAndYear(e,t))}},{key:"nextMonth",value:function(){var e=this.state.month,t=this.state.year;12===e?(t++,e=1,this.updateMonthAndYear(e,t)):(e++,this.updateMonthAndYear(e,t))}},{key:"prevYear",value:function(){this.updateMonthAndYear(this.state.month,this.state.year-1)}},{key:"nextYear",value:function(){this.updateMonthAndYear(this.state.month,this.state.year+1)}},{key:"updateMonthAndYear",value:function(e,t){this.setState({countDays:ve(t,e),firstDayOfWeek:he(t,e),month:e,year:t,events:this.state.events}),this.getEvents(e,t)}},{key:"updateEvents",value:function(e){if(console.log(e),this.setState({events:e}),this.day)for(var t=0,a=Object.entries(e);t<a.length;t++){var n=a[t],s=Object(oe.a)(n,2),c=s[0],r=s[1];this.day[c].updateEvents(r)}}},{key:"componentDidMount",value:function(){this.getEvents(this.state.month,this.state.year)}},{key:"getEvents",value:function(e,t){var a=this;fetch("/events?month=".concat(e,"&year=").concat(t)).then((function(e){e.ok?e.json().then((function(e){a.updateEvents(e)})):console.log(e.statusText)}))}},{key:"render",value:function(){for(var e=this,t=[],a=this.state.firstDayOfWeek,n=this.state.countDays,c=1===this.state.month?ve(this.state.year-1,12):ve(this.state.year,this.state.month-1),r=0;r<7;r++)t.push(s.a.createElement("div",{className:"day-name",key:100+r}));for(var i=0;i<a;i++)t.push(s.a.createElement(ue,{key:-i,hidden:!0,day:c-a+1+i,events:null,month:this.state.month-1,year:1===this.state.month?this.state.year-1:this.state.year}));for(var l=function(a){t.push(s.a.createElement(ue,{key:a+1,hidden:!1,day:a+1,events:e.state.events[a+1],updateEventListData:e.props.updateEventListData,month:e.state.month,year:e.state.year,ref:function(t){return e.day[a+1]=t}}))},o=0;o<n;o++)l(o);for(var m=0;m<42-n-a;m++)t.push(s.a.createElement(ue,{key:n+m,hidden:!0,day:m+1,events:null,month:this.state.month,year:12===this.state.month?this.state.year+1:this.state.year}));return s.a.createElement("div",{className:"flex-col"},s.a.createElement("div",{className:"wrap-year-month"},s.a.createElement("div",{className:"month-year"},s.a.createElement("button",{className:"arrow-button",onClick:function(){return e.prevMonth()}},"<"),["","\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][this.state.month],s.a.createElement("button",{className:"arrow-button",onClick:function(){return e.nextMonth()}},">")),s.a.createElement("div",{className:"month-year"},s.a.createElement("button",{className:"arrow-button",onClick:function(){return e.prevYear()}},"<"),this.state.year,s.a.createElement("button",{className:"arrow-button",onClick:function(){return e.nextYear()}},">"))),s.a.createElement("div",{className:"month-grid"},t))}}]),t}(s.a.Component);function ve(e,t){var a=0;return 2===t&&(e%4===0&&(a=1),e%100===0&&(a=0),e%400===0&&(a=1)),[0,31,28,31,30,31,30,31,31,30,31,30,31][t]+a}function he(e,t){return new Date(e,t-1,0).getDay()}a(257);var Ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={events:e.events},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"events-area"},s.a.createElement("ol",{className:"events-list"}))}}]),t}(s.a.Component),pe=(a(258),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).updateEventListData=function(e){a.setState({eventsInEventsList:e})};var n=new Date;return a.state={curYear:n.getFullYear(),curMonth:n.getMonth()+1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"page-container"},s.a.createElement(L,null),s.a.createElement("div",{className:"flex-row calendar-main"},s.a.createElement(de,{year:this.state.curYear,month:this.state.curMonth,updateEventListData:this.updateEventListData}),s.a.createElement(Ee,{events:this.state.eventsInEventsList})))}}]),t}(s.a.Component)),ge=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(v.d,null,s.a.createElement(v.b,{path:"/Calendar/:id",component:pe}),s.a.createElement(v.b,{path:"/Calendar",component:pe}),s.a.createElement(v.b,{path:"/Event/:id",component:se}),s.a.createElement(v.b,{path:"/Event",component:se}),s.a.createElement(v.b,{path:"/CreateEvent/:year/:month/:day",component:ie}),s.a.createElement(v.b,{path:"/Dialogues/:id",component:ee}),s.a.createElement(v.b,{path:"/Dialogues",component:ee}),s.a.createElement(v.b,{path:"/Friends",component:q}),s.a.createElement(v.b,{path:"/",component:le})))}}]),t}(s.a.Component);a(259);r.a.render(s.a.createElement(ge,null),document.getElementById("root"))},68:function(e,t,a){},78:function(e,t,a){}},[[168,1,2]]]);
//# sourceMappingURL=main.7293f4ae.chunk.js.map