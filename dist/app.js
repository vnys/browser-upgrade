var api=api||{};api.TravelTipDeck=function(e){function t(e,t){console.error("Reisetips component failed! ",t),e.parentNode.removeChild(e)}function i(e){return new Promise(function(t,i){var n=new XMLHttpRequest;"withCredentials"in n?(n.open("GET",e,!0),t(n)):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest,n.open("GET",e),t(n)):(n=null,i(Error("no xhr support")))})}function n(e){return new Promise(function(t,i){e.onload=function(){t(this.responseText)},e.onerror=function(){i(Error("transfer failed"))},e.ontimeout=function(){i(Error("timeout"))},e.onprogress=function(){},setTimeout(function(){e.send()},0)})}function r(e,t,i){var n=100/t,r=72;i.forEach(function(e){var t=document.createElement("div");t.classList.add("amc-traveltip-item"),t.setAttribute("style","width:"+n+"%");var i=document.createElement("h1");if(i.classList.add("amc-traveltip-title"),i.setAttribute("style","font-size:"+r*(n/100)+"px;"),i.appendChild(document.createTextNode(e.title)),e.img){var a=document.createElement("img");a.classList.add("amc-traveltip-image"),a.setAttribute("style","background-image:url("+e.img+")"),a.setAttribute("src","data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAxJREFUCB1jYCAZAAAAMwABFXv3/gAAAABJRU5ErkJggg==")}var s=document.createElement("a");s.classList.add("amc-traveltip-link"),s.setAttribute("href",e.link),e.img&&s.appendChild(a),s.appendChild(i);var c=document.createElement("article");c.appendChild(s),t.appendChild(c),o.appendChild(t)}),e.appendChild(o)}Object.keys(e).forEach(function(t){this[t]=e[t]}.bind(this));var a="http://services.api.no/api/mushnik/"+this.partner+"/items/"+this.items,o=document.createDocumentFragment();i(a).then(n).then(JSON.parse).then(r.bind(void 0,this.el,this.items)).catch(t.bind(void 0,this.el))};