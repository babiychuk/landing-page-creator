(this.webpackJsonpserials_library=this.webpackJsonpserials_library||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a.n(o),s=a(36),i=a(12),l=a(20),m=a(77),p=a(78),u=a(39),d=a.n(u),f=a(54);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={serials:""},O={clickDate:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a,r){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"CLICK_DATE",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},getSerials:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"GET_SERIALS",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},j=function(e,t){switch(e=e||g,t.type){case"CLICK_DATE":return h({},e,{selectDate:t.payload});case"GET_SERIALS":return h({},e,{serials:t.payload});default:return e}};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var E=a(17),x=a(10),v=a(22),w=a(23),C=a(24),k=a(35),D=a(30),I=a(5),S=a(162),N=a(32),M=a.n(N),P=a(79),Y=a.n(P),R=a(80),A=a.n(R),L=a(161),T=a(81),F=a.n(T),_=Object(I.a)({colorPrimary:{backgroundColor:"#dfcab2"},barColorPrimary:{backgroundColor:"#693900"}})(L.a),B=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(v.a)(this,Object(w.a)(t).call(this,e))).handleClickDate=function(e){a.props.clickDate(M()(e).format("YYYY-MM-DD")),a.props.getSerials(),a.setState({loading:!0});var t=M()(e).format("YYYY-MM-DD"),r="http://api.tvmaze.com/schedule?country=US&date=".concat(t);F.a.get("https://cors-anywhere.herokuapp.com/"+r).then((function(e){a.props.getSerials(e.data),a.setState({loading:!1}),a.props.history.push("/serials")})).catch((function(e){console.log(e)}))},a.state={loading:!1},a}return Object(C.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(S.a,{container:!0,item:!0,xs:12,sm:12},n.a.createElement(S.a,{className:e.tittle,container:!0,item:!0,xs:12,sm:12,justify:"center"},"SUPER FILM"),this.state.loading?n.a.createElement("div",{className:e.progress,open:this.state.loading},n.a.createElement(_,{className:e.margin})):null,n.a.createElement(S.a,{className:e.centerContent,item:!0,xs:12,sm:12},n.a.createElement("div",null,n.a.createElement("img",{className:e.imgTv,alt:"tv img",src:A.a})),n.a.createElement("div",{className:e.mainText},"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u0438 \u0434\u0435\u043d\u044c.")),n.a.createElement(Y.a,{className:e.calendar,onChange:this.handleClickDate}))}}]),t}(n.a.Component);var z=Object(I.a)((function(e){return{tittle:{backgroundColor:"#efefef",padding:"15px 0"},centerContent:{textAlign:"center",margin:"0",position:"absolute",top:"35%",left:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)"},imgTv:{width:"50%",heigth:"50%"},mainText:{padding:"30px"},calendar:{margin:"0 auto",bottom:"0",position:"absolute",width:"100%",marginLeft:"-8px"},progress:{flexGrow:1},margin:{margin:e.spacing(1)}}}))(Object(s.b)((function(e){return{serialsReduce:e.serialsReduce.serials,selectDate:e.serialsReduce.selectDate}}),(function(e){return Object(l.bindActionCreators)(O,e)}))(B)),G=(a(134),a(167)),U=a(168),W=a(84),J=a.n(W),K=a(83),q=a.n(K),H=a(46),Q=a.n(H),V=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(S.a,{item:!0,xs:12},n.a.createElement(S.a,{container:!0,item:!0,xs:12},n.a.createElement(S.a,{item:!0,xs:1,sm:1},n.a.createElement(U.a,{className:e.colorArrow,component:k.b,to:"/"},n.a.createElement(Q.a,null))),n.a.createElement(S.a,{item:!0,xs:11,sm:11,className:e.tittle},"SUPER FILM")),n.a.createElement(S.a,{container:!0,item:!0,xs:12},n.a.createElement(S.a,{item:!0,xs:1,sm:1,className:e.date}),n.a.createElement(S.a,{item:!0,xs:11,sm:11,className:e.date},this.props.selectDate)))}}]),t}(n.a.Component),X=Object(I.a)((function(e){return{colorArrow:{backgroundColor:"#efefef",padding:"15px 0",color:"#ff0000",width:"100%"},tittle:{backgroundColor:"#efefef",padding:"15px 0",textAlign:"center"},date:{backgroundColor:"#ffffff",padding:"15px 0",textAlign:"center"}}}))(V),Z=a(163),$=a(165),ee=a(164),te=a(166),ae=a(58),re=a.n(ae),ne=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement(Z.a,{className:t.card},n.a.createElement(ee.a,{className:t.cover,image:this.props.rowItem.show.image?this.props.rowItem.show.image.medium:re.a,title:this.props.rowItem.name,onClick:function(){return e.props.handleOpelImg(e.props.rowItem.show.image?e.props.rowItem.show.image.medium:re.a)}}),n.a.createElement("div",{className:t.details},n.a.createElement($.a,{className:t.content},n.a.createElement(te.a,{className:t.nameCard},this.props.rowItem.show.name),n.a.createElement(te.a,{variant:"subtitle1",color:"textSecondary"},this.props.premiered)),n.a.createElement(S.a,{className:t.controls,item:!0,xs:12,sm:12},n.a.createElement(S.a,{item:!0,xs:12,sm:6},"\u0421\u0435\u0437\u043e\u043d: ",this.props.rowItem.season),n.a.createElement(S.a,{item:!0,xs:12,sm:6},"\u0415\u043f\u0438\u0437\u043e\u0434: ",this.props.rowItem.number))))}}]),t}(n.a.Component),oe=Object(I.a)((function(e){return{card:{display:"flex",padding:"20px"},nameCard:{fontSize:"14px"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"90px",height:"140px"},controls:{display:"flex",alignItems:"center",backgroundColor:"#e8eaeb",marginLeft:"10px",padding:"12px",minWidth:"180px",maxWidth:"180px",fontSize:"12px"}}}))(ne),ce=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(v.a)(this,Object(w.a)(t).call(this,e))).handleOpenModal=function(e){a.setState({modalForm:e})},a.handleOpelImg=function(e){a.setState({originalImg:e,modalForm:!0})},a.handleClose=function(){a.setState({modalForm:!1})},a.state={modalForm:!1,originalImg:"",visible:2},a}return Object(C.a)(t,e),Object(x.a)(t,[{key:"loadMore",value:function(e){var t=e;this.setState({visible:t})}},{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement("div",null,n.a.createElement(X,{selectDate:M()(this.props.selectDate).locale("ru").format("DD MMMM YYYY")}),this.props.serials.length?n.a.createElement(S.a,{item:!0,xs:12},this.props.serials.slice(0,this.state.visible).map((function(t,a){return n.a.createElement(oe,{premiered:M()(t.show.premiered).format("YYYY"),handleOpelImg:e.handleOpelImg,rowItem:t,key:a})})),this.state.visible>3?n.a.createElement(S.a,{container:!0,item:!0,xs:12,className:t.blockLoadMore,justify:"center"},n.a.createElement(U.a,{className:t.loadMoreButton,onClick:function(){return e.loadMore(2)}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435",n.a.createElement(q.a,null))):n.a.createElement(S.a,{container:!0,item:!0,xs:12,className:t.blockLoadMore,justify:"center"},n.a.createElement(U.a,{className:t.loadMoreButton,onClick:function(){return e.loadMore(e.props.serials.length)}},"\u0415\u0449\u0435 ",this.props.serials.length-this.state.visible," \u0441\u0435\u0440\u0438\u0430\u043b\u0430",n.a.createElement(J.a,null))),n.a.createElement(G.a,{className:t.parrentImg,open:this.state.modalForm,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},n.a.createElement("img",{className:t.originalImg,alt:"original img",src:this.state.originalImg}))):n.a.createElement(S.a,{container:!0,item:!0,xs:12,justify:"center"},"\u0417\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442",n.a.createElement(U.a,{component:k.b,to:"/"},n.a.createElement(Q.a,null)," \u0432\u0435\u0440\u043d\u0443\u0442\u0441\u044f \u043d\u0430\u0437\u0430\u0434")))}}]),t}(n.a.Component);var se=Object(I.a)((function(e){return{parrentImg:{overflow:"hidden",width:"100%"},originalImg:{height:"450px",margin:"0 auto"},loadMoreButton:{width:"100%",textTransform:"none",color:"#b0b0b0"},blockLoadMore:{marginTop:"15px",backgroundColor:"#ffffff",color:"#b0b0b0",border:"1px solid #b0b0b0",borderRadius:"5px"}}}))(Object(s.b)((function(e){return{serials:e.serialsReduce.serials,selectDate:e.serialsReduce.selectDate}}),(function(e){return Object(l.bindActionCreators)(O,e)}))(ce)),ie=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return n.a.createElement(k.a,null,n.a.createElement(D.a,{exact:!0,path:"/",component:z}),n.a.createElement(D.a,{exact:!0,path:"/serials",component:se}))}}]),t}(r.Component),le=function(){var e={serialsReduce:j},t=Object(l.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)),a=[p.a];return Object(l.createStore)(t,Object(m.composeWithDevTools)(l.applyMiddleware.apply(void 0,a)))}(),me=document.getElementById("root");c.a.render(n.a.createElement(s.a,{store:le},n.a.createElement(ie,null)),me)},58:function(e,t,a){e.exports=a.p+"static/media/not_found.dfb4c9c2.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/tv.33174a35.jpg"},90:function(e,t,a){e.exports=a(137)}},[[90,1,2]]]);
//# sourceMappingURL=main.05ba4697.chunk.js.map