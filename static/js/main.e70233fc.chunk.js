(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},15:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(8),r=t.n(s),i=(t(15),t(6)),l=t.n(i),o=t(9),m=t(1),d=t(2),g=t(4),u=t(3),h=(t(17),function(e){Object(g.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand text-uppercase",href:"/"},"Clicky Game"),n.a.createElement("h4",{className:"navbar-text"},"Score: ",this.props.score," | Top Score: ",this.props.topScore))))}}]),t}(n.a.Component)),p={cursor:"pointer",height:"208px"},f=function(e){Object(g.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).handleImageClick=function(){e.props.handleOnClick(e.props.id)},e}return Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-6 col-md-4 col-lg-2 mt-5"},n.a.createElement("img",{alt:this.props.alt,src:this.props.image,onClick:this.handleImageClick,className:"img-thumbnail",style:p}))}}]),t}(n.a.Component),k=t(5),v=function(e){Object(g.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={matches:k,correctGuesses:0,bestScore:0,clickMessage:"Click on an image to gain points! Click on the same one twice and you lose."},e.handleImageClicked=function(){var a=Object(o.a)(l.a.mark((function a(t){var c,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=document.getElementById("game-cards"),n=e.state.matches.filter((function(e){return e.id===t})),c.classList.remove("apply-shake"),n[0].clicked?(c.classList.add("apply-shake"),e.setState({correctGuesses:0,clickMessage:"You already clicked on that one. Try again."}),e.handleResetAllCards()):e.state.correctGuesses<11?(n[0].clicked=!0,e.setState({correctGuesses:e.state.correctGuesses+1},(function(){e.state.correctGuesses>e.state.bestScore&&e.setState({bestScore:e.state.correctGuesses})})),e.setState({clickMessage:"Great! You haven't click on that one yet! Keep going!"}),e.handleShuffleCards()):(n[0].clicked=!0,e.state.correctGuesses=0,e.state.clickMessage="WOW!!! You got ALL of them!!! Now, let's see if you can do it again!",e.setState({bestScore:12}),e.handleResetAllCards());case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleShuffleCards=function(){for(var a=e.state.matches,t=0;t<a.length-1;t++){var c=t+Math.floor(Math.random()*(a.length-t)),n=a[c];a[c]=a[t],a[t]=n}e.setState({matches:a})},e.handleResetAllCards=function(){for(var a=0;a<e.state.matches.length;a++)k[a].clicked=!1,e.setState({correctGuesses:0,matches:k}),e.handleShuffleCards()},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(h,{score:this.state.correctGuesses,topScore:this.state.bestScore}),n.a.createElement("div",{className:"jumbotron py-3"},n.a.createElement("h4",null,this.state.clickMessage)),n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"game-cards",className:"row"},this.state.matches.map((function(a,t){return n.a.createElement(f,{key:t,id:a.id,image:a.image,handleOnClick:e.handleImageClicked})})))))}}]),t}(n.a.Component);t(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('[{"id":1,"image":"/images/kingpin.png","clicked":false},{"id":2,"image":"/images/greengoblin.jpg","clicked":false},{"id":3,"image":"/images/vulture.png","clicked":false},{"id":4,"image":"/images/rhino.jpg","clicked":false},{"id":5,"image":"/images/venom.png","clicked":false},{"id":6,"image":"/images/carnage.png","clicked":false},{"id":7,"image":"/images/lizard.png","clicked":false},{"id":8,"image":"/images/scorpion.png","clicked":false},{"id":9,"image":"/images/shocker.jpg","clicked":false},{"id":10,"image":"/images/blackcat.png","clicked":false},{"id":11,"image":"/images/kraven.jpg","clicked":false},{"id":12,"image":"/images/docock.png","clicked":false}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.e70233fc.chunk.js.map