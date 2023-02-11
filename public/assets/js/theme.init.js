//LIBRARIES
!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(t.document)return e(t);throw new Error("jQuery requires a window with a document")}:e(t)}("undefined"!=typeof window?window:this,function(x,P){"use strict";function y(t){return"function"==typeof t&&"number"!=typeof t.nodeType&&"function"!=typeof t.item}function m(t){return null!=t&&t===t.window}var e=[],N=Object.getPrototypeOf,a=e.slice,R=e.flat?function(t){return e.flat.call(t)}:function(t){return e.concat.apply([],t)},q=e.push,F=e.indexOf,H={},W=H.toString,B=H.hasOwnProperty,$=B.toString,V=$.call(Object),g={},C=x.document,U={type:!0,src:!0,nonce:!0,noModule:!0};function Q(t,e,i){var n,o,s=(i=i||C).createElement("script");if(s.text=t,e)for(n in U)(o=e[n]||e.getAttribute&&e.getAttribute(n))&&s.setAttribute(n,o);i.head.appendChild(s).parentNode.removeChild(s)}function f(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?H[W.call(t)]||"object":typeof t}var t="3.6.1",T=function(t,e){return new T.fn.init(t,e)};function Y(t){var e=!!t&&"length"in t&&t.length,i=f(t);return!y(t)&&!m(t)&&("array"===i||0===e||"number"==typeof e&&0<e&&e-1 in t)}T.fn=T.prototype={jquery:t,constructor:T,length:0,toArray:function(){return a.call(this)},get:function(t){return null==t?a.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){t=T.merge(this.constructor(),t);return t.prevObject=this,t},each:function(t){return T.each(this,t)},map:function(i){return this.pushStack(T.map(this,function(t,e){return i.call(t,e,t)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(t,e){return(e+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(t,e){return e%2}))},eq:function(t){var e=this.length,t=+t+(t<0?e:0);return this.pushStack(0<=t&&t<e?[this[t]]:[])},end:function(){return this.prevObject||this.constructor()},push:q,sort:e.sort,splice:e.splice},T.extend=T.fn.extend=function(){var t,e,i,n,o,s=arguments[0]||{},r=1,a=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[r]||{},r++),"object"==typeof s||y(s)||(s={}),r===a&&(s=this,r--);r<a;r++)if(null!=(t=arguments[r]))for(e in t)i=t[e],"__proto__"!==e&&s!==i&&(l&&i&&(T.isPlainObject(i)||(n=Array.isArray(i)))?(o=s[e],o=n&&!Array.isArray(o)?[]:n||T.isPlainObject(o)?o:{},n=!1,s[e]=T.extend(l,o,i)):void 0!==i&&(s[e]=i));return s},T.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){return!(!t||"[object Object]"!==W.call(t)||(t=N(t))&&("function"!=typeof(t=B.call(t,"constructor")&&t.constructor)||$.call(t)!==V))},isEmptyObject:function(t){for(var e in t)return!1;return!0},globalEval:function(t,e,i){Q(t,{nonce:e&&e.nonce},i)},each:function(t,e){var i,n=0;if(Y(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},makeArray:function(t,e){e=e||[];return null!=t&&(Y(Object(t))?T.merge(e,"string"==typeof t?[t]:t):q.call(e,t)),e},inArray:function(t,e,i){return null==e?-1:F.call(e,t,i)},merge:function(t,e){for(var i=+e.length,n=0,o=t.length;n<i;n++)t[o++]=e[n];return t.length=o,t},grep:function(t,e,i){for(var n=[],o=0,s=t.length,r=!i;o<s;o++)!e(t[o],o)!=r&&n.push(t[o]);return n},map:function(t,e,i){var n,o,s=0,r=[];if(Y(t))for(n=t.length;s<n;s++)null!=(o=e(t[s],s,i))&&r.push(o);else for(s in t)null!=(o=e(t[s],s,i))&&r.push(o);return R(r)},guid:1,support:g}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=e[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){H["[object "+e+"]"]=e.toLowerCase()});function n(t,e,i){for(var n=[],o=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&T(t).is(i))break;n.push(t)}return n}function X(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i}var t=function(P){function h(t,e){return t="0x"+t.slice(1)-65536,e||(t<0?String.fromCharCode(65536+t):String.fromCharCode(t>>10|55296,1023&t|56320))}function N(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}function R(){x()}var t,d,_,s,q,p,F,H,w,l,c,x,C,i,T,f,n,o,m,E="sizzle"+ +new Date,u=P.document,k=0,W=0,B=O(),$=O(),V=O(),g=O(),U=function(t,e){return t===e&&(c=!0),0},Q={}.hasOwnProperty,e=[],Y=e.pop,X=e.push,A=e.push,G=e.slice,y=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",r="[\\x20\\t\\r\\n\\f]",a="(?:\\\\[\\da-fA-F]{1,6}"+r+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",K="\\["+r+"*("+a+")(?:"+r+"*([*^$|!~]?=)"+r+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+a+"))|)"+r+"*\\]",J=":("+a+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+K+")*)|.*)\\)|)",tt=new RegExp(r+"+","g"),v=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),et=new RegExp("^"+r+"*,"+r+"*"),it=new RegExp("^"+r+"*([>+~]|"+r+")"+r+"*"),nt=new RegExp(r+"|>"),ot=new RegExp(J),st=new RegExp("^"+a+"$"),b={ID:new RegExp("^#("+a+")"),CLASS:new RegExp("^\\.("+a+")"),TAG:new RegExp("^("+a+"|[*])"),ATTR:new RegExp("^"+K),PSEUDO:new RegExp("^"+J),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+r+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+r+"*((?:-\\d)?\\d*)"+r+"*\\)|)(?=[^-]|$)","i")},rt=/HTML$/i,at=/^(?:input|select|textarea|button)$/i,lt=/^h\d$/i,S=/^[^{]+\{\s*\[native \w/,ct=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ut=/[+~]/,I=new RegExp("\\\\[\\da-fA-F]{1,6}"+r+"?|\\\\([^\\r\\n\\f])","g"),ht=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,dt=yt(function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{A.apply(e=G.call(u.childNodes),u.childNodes),e[u.childNodes.length].nodeType}catch(t){A={apply:e.length?function(t,e){X.apply(t,G.call(e))}:function(t,e){for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}function L(t,e,i,n){var o,s,r,a,l,c,u=e&&e.ownerDocument,h=e?e.nodeType:9;if(i=i||[],"string"!=typeof t||!t||1!==h&&9!==h&&11!==h)return i;if(!n&&(x(e),e=e||C,T)){if(11!==h&&(a=ct.exec(t)))if(o=a[1]){if(9===h){if(!(c=e.getElementById(o)))return i;if(c.id===o)return i.push(c),i}else if(u&&(c=u.getElementById(o))&&m(e,c)&&c.id===o)return i.push(c),i}else{if(a[2])return A.apply(i,e.getElementsByTagName(t)),i;if((o=a[3])&&d.getElementsByClassName&&e.getElementsByClassName)return A.apply(i,e.getElementsByClassName(o)),i}if(d.qsa&&!g[t+" "]&&(!f||!f.test(t))&&(1!==h||"object"!==e.nodeName.toLowerCase())){if(c=t,u=e,1===h&&(nt.test(t)||it.test(t))){for((u=ut.test(t)&&gt(e.parentNode)||e)===e&&d.scope||((r=e.getAttribute("id"))?r=r.replace(ht,N):e.setAttribute("id",r=E)),s=(l=p(t)).length;s--;)l[s]=(r?"#"+r:":scope")+" "+j(l[s]);c=l.join(",")}try{return A.apply(i,u.querySelectorAll(c)),i}catch(e){g(t,!0)}finally{r===E&&e.removeAttribute("id")}}}return H(t.replace(v,"$1"),e,i,n)}function O(){var n=[];return function t(e,i){return n.push(e+" ")>_.cacheLength&&delete t[n.shift()],t[e+" "]=i}}function z(t){return t[E]=!0,t}function D(t){var e=C.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e)}}function pt(t,e){for(var i=t.split("|"),n=i.length;n--;)_.attrHandle[i[n]]=e}function ft(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(n)return n;if(i)for(;i=i.nextSibling;)if(i===e)return-1;return t?1:-1}function mt(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&dt(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function M(r){return z(function(s){return s=+s,z(function(t,e){for(var i,n=r([],t.length,s),o=n.length;o--;)t[i=n[o]]&&(t[i]=!(e[i]=t[i]))})})}function gt(t){return t&&void 0!==t.getElementsByTagName&&t}for(t in d=L.support={},q=L.isXML=function(t){var e=t&&t.namespaceURI,t=t&&(t.ownerDocument||t).documentElement;return!rt.test(e||t&&t.nodeName||"HTML")},x=L.setDocument=function(t){var t=t?t.ownerDocument||t:u;return t!=C&&9===t.nodeType&&t.documentElement&&(i=(C=t).documentElement,T=!q(C),u!=C&&(t=C.defaultView)&&t.top!==t&&(t.addEventListener?t.addEventListener("unload",R,!1):t.attachEvent&&t.attachEvent("onunload",R)),d.scope=D(function(t){return i.appendChild(t).appendChild(C.createElement("div")),void 0!==t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length}),d.attributes=D(function(t){return t.className="i",!t.getAttribute("className")}),d.getElementsByTagName=D(function(t){return t.appendChild(C.createComment("")),!t.getElementsByTagName("*").length}),d.getElementsByClassName=S.test(C.getElementsByClassName),d.getById=D(function(t){return i.appendChild(t).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(_.filter.ID=function(t){var e=t.replace(I,h);return function(t){return t.getAttribute("id")===e}},_.find.ID=function(t,e){if(void 0!==e.getElementById&&T)return(e=e.getElementById(t))?[e]:[]}):(_.filter.ID=function(t){var e=t.replace(I,h);return function(t){t=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return t&&t.value===e}},_.find.ID=function(t,e){if(void 0!==e.getElementById&&T){var i,n,o,s=e.getElementById(t);if(s){if((i=s.getAttributeNode("id"))&&i.value===t)return[s];for(o=e.getElementsByName(t),n=0;s=o[n++];)if((i=s.getAttributeNode("id"))&&i.value===t)return[s]}return[]}}),_.find.TAG=d.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):d.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,n=[],o=0,s=e.getElementsByTagName(t);if("*"!==t)return s;for(;i=s[o++];)1===i.nodeType&&n.push(i);return n},_.find.CLASS=d.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&T)return e.getElementsByClassName(t)},n=[],f=[],(d.qsa=S.test(C.querySelectorAll))&&(D(function(t){var e;i.appendChild(t).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&f.push("[*^$]="+r+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||f.push("\\["+r+"*(?:value|"+Z+")"),t.querySelectorAll("[id~="+E+"-]").length||f.push("~="),(e=C.createElement("input")).setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||f.push("\\["+r+"*name"+r+"*="+r+"*(?:''|\"\")"),t.querySelectorAll(":checked").length||f.push(":checked"),t.querySelectorAll("a#"+E+"+*").length||f.push(".#.+[+~]"),t.querySelectorAll("\\\f"),f.push("[\\r\\n\\f]")}),D(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=C.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&f.push("name"+r+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&f.push(":enabled",":disabled"),i.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&f.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),f.push(",.*:")})),(d.matchesSelector=S.test(o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector||i.msMatchesSelector))&&D(function(t){d.disconnectedMatch=o.call(t,"*"),o.call(t,"[s!='']:x"),n.push("!=",J)}),f=f.length&&new RegExp(f.join("|")),n=n.length&&new RegExp(n.join("|")),t=S.test(i.compareDocumentPosition),m=t||S.test(i.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,e=e&&e.parentNode;return t===e||!(!e||1!==e.nodeType||!(i.contains?i.contains(e):t.compareDocumentPosition&&16&t.compareDocumentPosition(e)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},U=t?function(t,e){return t===e?(c=!0,0):!t.compareDocumentPosition-!e.compareDocumentPosition||(1&(i=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!d.sortDetached&&e.compareDocumentPosition(t)===i?t==C||t.ownerDocument==u&&m(u,t)?-1:e==C||e.ownerDocument==u&&m(u,e)?1:l?y(l,t)-y(l,e):0:4&i?-1:1);var i}:function(t,e){if(t===e)return c=!0,0;var i,n=0,o=t.parentNode,s=e.parentNode,r=[t],a=[e];if(!o||!s)return t==C?-1:e==C?1:o?-1:s?1:l?y(l,t)-y(l,e):0;if(o===s)return ft(t,e);for(i=t;i=i.parentNode;)r.unshift(i);for(i=e;i=i.parentNode;)a.unshift(i);for(;r[n]===a[n];)n++;return n?ft(r[n],a[n]):r[n]==u?-1:a[n]==u?1:0}),C},L.matches=function(t,e){return L(t,null,null,e)},L.matchesSelector=function(t,e){if(x(t),d.matchesSelector&&T&&!g[e+" "]&&(!n||!n.test(e))&&(!f||!f.test(e)))try{var i=o.call(t,e);if(i||d.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){g(e,!0)}return 0<L(e,C,null,[t]).length},L.contains=function(t,e){return(t.ownerDocument||t)!=C&&x(t),m(t,e)},L.attr=function(t,e){(t.ownerDocument||t)!=C&&x(t);var i=_.attrHandle[e.toLowerCase()],i=i&&Q.call(_.attrHandle,e.toLowerCase())?i(t,e,!T):void 0;return void 0!==i?i:d.attributes||!T?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},L.escape=function(t){return(t+"").replace(ht,N)},L.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},L.uniqueSort=function(t){var e,i=[],n=0,o=0;if(c=!d.detectDuplicates,l=!d.sortStable&&t.slice(0),t.sort(U),c){for(;e=t[o++];)e===t[o]&&(n=i.push(o));for(;n--;)t.splice(i[n],1)}return l=null,t},s=L.getText=function(t){var e,i="",n=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=s(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[n++];)i+=s(e);return i},(_=L.selectors={cacheLength:50,createPseudo:z,match:b,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(I,h),t[3]=(t[3]||t[4]||t[5]||"").replace(I,h),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||L.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&L.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];return b.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&ot.test(i)&&(e=p(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(I,h).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=B[t+" "];return e||(e=new RegExp("(^|"+r+")"+t+"("+r+"|$)"))&&B(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(e,i,n){return function(t){t=L.attr(t,e);return null==t?"!="===i:!i||(t+="","="===i?t===n:"!="===i?t!==n:"^="===i?n&&0===t.indexOf(n):"*="===i?n&&-1<t.indexOf(n):"$="===i?n&&t.slice(-n.length)===n:"~="===i?-1<(" "+t.replace(tt," ")+" ").indexOf(n):"|="===i&&(t===n||t.slice(0,n.length+1)===n+"-"))}},CHILD:function(f,t,e,m,g){var v="nth"!==f.slice(0,3),y="last"!==f.slice(-4),b="of-type"===t;return 1===m&&0===g?function(t){return!!t.parentNode}:function(t,e,i){var n,o,s,r,a,l,c=v!=y?"nextSibling":"previousSibling",u=t.parentNode,h=b&&t.nodeName.toLowerCase(),d=!i&&!b,p=!1;if(u){if(v){for(;c;){for(r=t;r=r[c];)if(b?r.nodeName.toLowerCase()===h:1===r.nodeType)return!1;l=c="only"===f&&!l&&"nextSibling"}return!0}if(l=[y?u.firstChild:u.lastChild],y&&d){for(p=(a=(n=(o=(s=(r=u)[E]||(r[E]={}))[r.uniqueID]||(s[r.uniqueID]={}))[f]||[])[0]===k&&n[1])&&n[2],r=a&&u.childNodes[a];r=++a&&r&&r[c]||(p=a=0)||l.pop();)if(1===r.nodeType&&++p&&r===t){o[f]=[k,a,p];break}}else if(!1===(p=d?a=(n=(o=(s=(r=t)[E]||(r[E]={}))[r.uniqueID]||(s[r.uniqueID]={}))[f]||[])[0]===k&&n[1]:p))for(;(r=++a&&r&&r[c]||(p=a=0)||l.pop())&&((b?r.nodeName.toLowerCase()!==h:1!==r.nodeType)||!++p||(d&&((o=(s=r[E]||(r[E]={}))[r.uniqueID]||(s[r.uniqueID]={}))[f]=[k,p]),r!==t)););return(p-=g)===m||p%m==0&&0<=p/m}}},PSEUDO:function(t,s){var e,r=_.pseudos[t]||_.setFilters[t.toLowerCase()]||L.error("unsupported pseudo: "+t);return r[E]?r(s):1<r.length?(e=[t,t,"",s],_.setFilters.hasOwnProperty(t.toLowerCase())?z(function(t,e){for(var i,n=r(t,s),o=n.length;o--;)t[i=y(t,n[o])]=!(e[i]=n[o])}):function(t){return r(t,0,e)}):r}},pseudos:{not:z(function(t){var n=[],o=[],a=F(t.replace(v,"$1"));return a[E]?z(function(t,e,i,n){for(var o,s=a(t,null,n,[]),r=t.length;r--;)(o=s[r])&&(t[r]=!(e[r]=o))}):function(t,e,i){return n[0]=t,a(n,null,i,o),n[0]=null,!o.pop()}}),has:z(function(e){return function(t){return 0<L(e,t).length}}),contains:z(function(e){return e=e.replace(I,h),function(t){return-1<(t.textContent||s(t)).indexOf(e)}}),lang:z(function(i){return st.test(i||"")||L.error("unsupported lang: "+i),i=i.replace(I,h).toLowerCase(),function(t){var e;do{if(e=T?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(e=e.toLowerCase())===i||0===e.indexOf(i+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var e=P.location&&P.location.hash;return e&&e.slice(1)===t.id},root:function(t){return t===i},focus:function(t){return t===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:mt(!1),disabled:mt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!_.pseudos.empty(t)},header:function(t){return lt.test(t.nodeName)},input:function(t){return at.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(t=t.getAttribute("type"))||"text"===t.toLowerCase())},first:M(function(){return[0]}),last:M(function(t,e){return[e-1]}),eq:M(function(t,e,i){return[i<0?i+e:i]}),even:M(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:M(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:M(function(t,e,i){for(var n=i<0?i+e:e<i?e:i;0<=--n;)t.push(n);return t}),gt:M(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}}).pseudos.nth=_.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[t]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(t);for(t in{submit:!0,reset:!0})_.pseudos[t]=function(i){return function(t){var e=t.nodeName.toLowerCase();return("input"===e||"button"===e)&&t.type===i}}(t);function vt(){}function j(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function yt(r,t,e){var a=t.dir,l=t.next,c=l||a,u=e&&"parentNode"===c,h=W++;return t.first?function(t,e,i){for(;t=t[a];)if(1===t.nodeType||u)return r(t,e,i);return!1}:function(t,e,i){var n,o,s=[k,h];if(i){for(;t=t[a];)if((1===t.nodeType||u)&&r(t,e,i))return!0}else for(;t=t[a];)if(1===t.nodeType||u)if(o=(o=t[E]||(t[E]={}))[t.uniqueID]||(o[t.uniqueID]={}),l&&l===t.nodeName.toLowerCase())t=t[a]||t;else{if((n=o[c])&&n[0]===k&&n[1]===h)return s[2]=n[2];if((o[c]=s)[2]=r(t,e,i))return!0}return!1}}function bt(o){return 1<o.length?function(t,e,i){for(var n=o.length;n--;)if(!o[n](t,e,i))return!1;return!0}:o[0]}function _t(t,e,i,n,o){for(var s,r=[],a=0,l=t.length,c=null!=e;a<l;a++)!(s=t[a])||i&&!i(s,n,o)||(r.push(s),c&&e.push(a));return r}function wt(t){for(var n,e,i,o=t.length,s=_.relative[t[0].type],r=s||_.relative[" "],a=s?1:0,l=yt(function(t){return t===n},r,!0),c=yt(function(t){return-1<y(n,t)},r,!0),u=[function(t,e,i){t=!s&&(i||e!==w)||((n=e).nodeType?l:c)(t,e,i);return n=null,t}];a<o;a++)if(e=_.relative[t[a].type])u=[yt(bt(u),e)];else{if((e=_.filter[t[a].type].apply(null,t[a].matches))[E]){for(i=++a;i<o&&!_.relative[t[i].type];i++);return function t(p,f,m,g,v,e){return g&&!g[E]&&(g=t(g)),v&&!v[E]&&(v=t(v,e)),z(function(t,e,i,n){var o,s,r,a=[],l=[],c=e.length,u=t||function(t,e,i){for(var n=0,o=e.length;n<o;n++)L(t,e[n],i);return i}(f||"*",i.nodeType?[i]:i,[]),h=!p||!t&&f?u:_t(u,a,p,i,n),d=m?v||(t?p:c||g)?[]:e:h;if(m&&m(h,d,i,n),g)for(o=_t(d,l),g(o,[],i,n),s=o.length;s--;)(r=o[s])&&(d[l[s]]=!(h[l[s]]=r));if(t){if(v||p){if(v){for(o=[],s=d.length;s--;)(r=d[s])&&o.push(h[s]=r);v(null,d=[],o,n)}for(s=d.length;s--;)(r=d[s])&&-1<(o=v?y(t,r):a[s])&&(t[o]=!(e[o]=r))}}else d=_t(d===e?d.splice(c,d.length):d),v?v(null,e,d,n):A.apply(e,d)})}(1<a&&bt(u),1<a&&j(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(v,"$1"),e,a<i&&wt(t.slice(a,i)),i<o&&wt(t=t.slice(i)),i<o&&j(t))}u.push(e)}return bt(u)}return vt.prototype=_.filters=_.pseudos,_.setFilters=new vt,p=L.tokenize=function(t,e){var i,n,o,s,r,a,l,c=$[t+" "];if(c)return e?0:c.slice(0);for(r=t,a=[],l=_.preFilter;r;){for(s in i&&!(n=et.exec(r))||(n&&(r=r.slice(n[0].length)||r),a.push(o=[])),i=!1,(n=it.exec(r))&&(i=n.shift(),o.push({value:i,type:n[0].replace(v," ")}),r=r.slice(i.length)),_.filter)!(n=b[s].exec(r))||l[s]&&!(n=l[s](n))||(i=n.shift(),o.push({value:i,type:s,matches:n}),r=r.slice(i.length));if(!i)break}return e?r.length:r?L.error(t):$(t,a).slice(0)},F=L.compile=function(t,e){var i,g,v,y,b,n,o=[],s=[],r=V[t+" "];if(!r){for(i=(e=e||p(t)).length;i--;)((r=wt(e[i]))[E]?o:s).push(r);(r=V(t,(y=0<(v=o).length,b=0<(g=s).length,n=function(t,e,i,n,o){var s,r,a,l=0,c="0",u=t&&[],h=[],d=w,p=t||b&&_.find.TAG("*",o),f=k+=null==d?1:Math.random()||.1,m=p.length;for(o&&(w=e==C||e||o);c!==m&&null!=(s=p[c]);c++){if(b&&s){for(r=0,e||s.ownerDocument==C||(x(s),i=!T);a=g[r++];)if(a(s,e||C,i)){n.push(s);break}o&&(k=f)}y&&((s=!a&&s)&&l--,t&&u.push(s))}if(l+=c,y&&c!==l){for(r=0;a=v[r++];)a(u,h,e,i);if(t){if(0<l)for(;c--;)u[c]||h[c]||(h[c]=Y.call(n));h=_t(h)}A.apply(n,h),o&&!t&&0<h.length&&1<l+v.length&&L.uniqueSort(n)}return o&&(k=f,w=d),u},y?z(n):n))).selector=t}return r},H=L.select=function(t,e,i,n){var o,s,r,a,l,c="function"==typeof t&&t,u=!n&&p(t=c.selector||t);if(i=i||[],1===u.length){if(2<(s=u[0]=u[0].slice(0)).length&&"ID"===(r=s[0]).type&&9===e.nodeType&&T&&_.relative[s[1].type]){if(!(e=(_.find.ID(r.matches[0].replace(I,h),e)||[])[0]))return i;c&&(e=e.parentNode),t=t.slice(s.shift().value.length)}for(o=b.needsContext.test(t)?0:s.length;o--&&(r=s[o],!_.relative[a=r.type]);)if((l=_.find[a])&&(n=l(r.matches[0].replace(I,h),ut.test(s[0].type)&&gt(e.parentNode)||e))){if(s.splice(o,1),t=n.length&&j(s))break;return A.apply(i,n),i}}return(c||F(t,u))(n,e,!T,i,!e||ut.test(t)&&gt(e.parentNode)||e),i},d.sortStable=E.split("").sort(U).join("")===E,d.detectDuplicates=!!c,x(),d.sortDetached=D(function(t){return 1&t.compareDocumentPosition(C.createElement("fieldset"))}),D(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||pt("type|href|height|width",function(t,e,i){if(!i)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),d.attributes&&D(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||pt("value",function(t,e,i){if(!i&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),D(function(t){return null==t.getAttribute("disabled")})||pt(Z,function(t,e,i){if(!i)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),L}(x),G=(T.find=t,T.expr=t.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=t.uniqueSort,T.text=t.getText,T.isXMLDoc=t.isXML,T.contains=t.contains,T.escapeSelector=t.escape,T.expr.match.needsContext);function l(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var Z=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function K(t,i,n){return y(i)?T.grep(t,function(t,e){return!!i.call(t,e,t)!==n}):i.nodeType?T.grep(t,function(t){return t===i!==n}):"string"!=typeof i?T.grep(t,function(t){return-1<F.call(i,t)!==n}):T.filter(i,t,n)}T.filter=function(t,e,i){var n=e[0];return i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType?T.find.matchesSelector(n,t)?[n]:[]:T.find.matches(t,T.grep(e,function(t){return 1===t.nodeType}))},T.fn.extend({find:function(t){var e,i,n=this.length,o=this;if("string"!=typeof t)return this.pushStack(T(t).filter(function(){for(e=0;e<n;e++)if(T.contains(o[e],this))return!0}));for(i=this.pushStack([]),e=0;e<n;e++)T.find(t,o[e],i);return 1<n?T.uniqueSort(i):i},filter:function(t){return this.pushStack(K(this,t||[],!1))},not:function(t){return this.pushStack(K(this,t||[],!0))},is:function(t){return!!K(this,"string"==typeof t&&G.test(t)?T(t):t||[],!1).length}});var J,tt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,et=((T.fn.init=function(t,e,i){if(!t)return this;if(i=i||J,"string"!=typeof t)return t.nodeType?(this[0]=t,this.length=1,this):y(t)?void 0!==i.ready?i.ready(t):t(T):T.makeArray(t,this);if(!(n="<"===t[0]&&">"===t[t.length-1]&&3<=t.length?[null,t,null]:tt.exec(t))||!n[1]&&e)return(!e||e.jquery?e||i:this.constructor(e)).find(t);if(n[1]){if(e=e instanceof T?e[0]:e,T.merge(this,T.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:C,!0)),Z.test(n[1])&&T.isPlainObject(e))for(var n in e)y(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return(i=C.getElementById(n[2]))&&(this[0]=i,this.length=1),this}).prototype=T.fn,J=T(C),/^(?:parents|prev(?:Until|All))/),it={children:!0,contents:!0,next:!0,prev:!0};function nt(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}T.fn.extend({has:function(t){var e=T(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)if(T.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,o=this.length,s=[],r="string"!=typeof t&&T(t);if(!G.test(t))for(;n<o;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(r?-1<r.index(i):1===i.nodeType&&T.find.matchesSelector(i,t))){s.push(i);break}return this.pushStack(1<s.length?T.uniqueSort(s):s)},index:function(t){return t?"string"==typeof t?F.call(T(t),this[0]):F.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),T.each({parent:function(t){t=t.parentNode;return t&&11!==t.nodeType?t:null},parents:function(t){return n(t,"parentNode")},parentsUntil:function(t,e,i){return n(t,"parentNode",i)},next:function(t){return nt(t,"nextSibling")},prev:function(t){return nt(t,"previousSibling")},nextAll:function(t){return n(t,"nextSibling")},prevAll:function(t){return n(t,"previousSibling")},nextUntil:function(t,e,i){return n(t,"nextSibling",i)},prevUntil:function(t,e,i){return n(t,"previousSibling",i)},siblings:function(t){return X((t.parentNode||{}).firstChild,t)},children:function(t){return X(t.firstChild)},contents:function(t){return null!=t.contentDocument&&N(t.contentDocument)?t.contentDocument:(l(t,"template")&&(t=t.content||t),T.merge([],t.childNodes))}},function(n,o){T.fn[n]=function(t,e){var i=T.map(this,o,t);return(e="Until"!==n.slice(-5)?t:e)&&"string"==typeof e&&(i=T.filter(e,i)),1<this.length&&(it[n]||T.uniqueSort(i),et.test(n)&&i.reverse()),this.pushStack(i)}});var E=/[^\x20\t\r\n\f]+/g;function u(t){return t}function ot(t){throw t}function st(t,e,i,n){var o;try{t&&y(o=t.promise)?o.call(t).done(e).fail(i):t&&y(o=t.then)?o.call(t,e,i):e.apply(void 0,[t].slice(n))}catch(t){i.apply(void 0,[t])}}T.Callbacks=function(n){var t,i;n="string"==typeof n?(t=n,i={},T.each(t.match(E)||[],function(t,e){i[e]=!0}),i):T.extend({},n);function o(){for(a=a||n.once,r=s=!0;c.length;u=-1)for(e=c.shift();++u<l.length;)!1===l[u].apply(e[0],e[1])&&n.stopOnFalse&&(u=l.length,e=!1);n.memory||(e=!1),s=!1,a&&(l=e?[]:"")}var s,e,r,a,l=[],c=[],u=-1,h={add:function(){return l&&(e&&!s&&(u=l.length-1,c.push(e)),function i(t){T.each(t,function(t,e){y(e)?n.unique&&h.has(e)||l.push(e):e&&e.length&&"string"!==f(e)&&i(e)})}(arguments),e&&!s&&o()),this},remove:function(){return T.each(arguments,function(t,e){for(var i;-1<(i=T.inArray(e,l,i));)l.splice(i,1),i<=u&&u--}),this},has:function(t){return t?-1<T.inArray(t,l):0<l.length},empty:function(){return l=l&&[],this},disable:function(){return a=c=[],l=e="",this},disabled:function(){return!l},lock:function(){return a=c=[],e||s||(l=e=""),this},locked:function(){return!!a},fireWith:function(t,e){return a||(e=[t,(e=e||[]).slice?e.slice():e],c.push(e),s||o()),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!r}};return h},T.extend({Deferred:function(t){var s=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],o="pending",r={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(t){return r.then(null,t)},pipe:function(){var o=arguments;return T.Deferred(function(n){T.each(s,function(t,e){var i=y(o[e[4]])&&o[e[4]];a[e[1]](function(){var t=i&&i.apply(this,arguments);t&&y(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[e[0]+"With"](this,i?[t]:arguments)})}),o=null}).promise()},then:function(e,i,n){var l=0;function c(o,s,r,a){return function(){function t(){var t,e;if(!(o<l)){if((t=r.apply(i,n))===s.promise())throw new TypeError("Thenable self-resolution");e=t&&("object"==typeof t||"function"==typeof t)&&t.then,y(e)?a?e.call(t,c(l,s,u,a),c(l,s,ot,a)):(l++,e.call(t,c(l,s,u,a),c(l,s,ot,a),c(l,s,u,s.notifyWith))):(r!==u&&(i=void 0,n=[t]),(a||s.resolveWith)(i,n))}}var i=this,n=arguments,e=a?t:function(){try{t()}catch(t){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(t,e.stackTrace),l<=o+1&&(r!==ot&&(i=void 0,n=[t]),s.rejectWith(i,n))}};o?e():(T.Deferred.getStackHook&&(e.stackTrace=T.Deferred.getStackHook()),x.setTimeout(e))}}return T.Deferred(function(t){s[0][3].add(c(0,t,y(n)?n:u,t.notifyWith)),s[1][3].add(c(0,t,y(e)?e:u)),s[2][3].add(c(0,t,y(i)?i:ot))}).promise()},promise:function(t){return null!=t?T.extend(t,r):r}},a={};return T.each(s,function(t,e){var i=e[2],n=e[5];r[e[1]]=i.add,n&&i.add(function(){o=n},s[3-t][2].disable,s[3-t][3].disable,s[0][2].lock,s[0][3].lock),i.add(e[3].fire),a[e[0]]=function(){return a[e[0]+"With"](this===a?void 0:this,arguments),this},a[e[0]+"With"]=i.fireWith}),r.promise(a),t&&t.call(a,a),a},when:function(t){function e(e){return function(t){o[e]=this,s[e]=1<arguments.length?a.call(arguments):t,--i||r.resolveWith(o,s)}}var i=arguments.length,n=i,o=Array(n),s=a.call(arguments),r=T.Deferred();if(i<=1&&(st(t,r.done(e(n)).resolve,r.reject,!i),"pending"===r.state()||y(s[n]&&s[n].then)))return r.then();for(;n--;)st(s[n],e(n),r.reject);return r.promise()}});var rt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,at=(T.Deferred.exceptionHook=function(t,e){x.console&&x.console.warn&&t&&rt.test(t.name)&&x.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},T.readyException=function(t){x.setTimeout(function(){throw t})},T.Deferred());function lt(){C.removeEventListener("DOMContentLoaded",lt),x.removeEventListener("load",lt),T.ready()}T.fn.ready=function(t){return at.then(t).catch(function(t){T.readyException(t)}),this},T.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--T.readyWait:T.isReady)||(T.isReady=!0)!==t&&0<--T.readyWait||at.resolveWith(C,[T])}}),T.ready.then=at.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?x.setTimeout(T.ready):(C.addEventListener("DOMContentLoaded",lt),x.addEventListener("load",lt));function h(t,e,i,n,o,s,r){var a=0,l=t.length,c=null==i;if("object"===f(i))for(a in o=!0,i)h(t,e,a,i[a],!0,s,r);else if(void 0!==n&&(o=!0,y(n)||(r=!0),e=c?r?(e.call(t,n),null):(c=e,function(t,e,i){return c.call(T(t),i)}):e))for(;a<l;a++)e(t[a],i,r?n:n.call(t[a],a,e(t[a],i)));return o?t:c?e.call(t):l?e(t[0],i):s}var ct=/^-ms-/,ut=/-([a-z])/g;function ht(t,e){return e.toUpperCase()}function b(t){return t.replace(ct,"ms-").replace(ut,ht)}function v(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType}function dt(){this.expando=T.expando+dt.uid++}dt.uid=1,dt.prototype={cache:function(t){var e=t[this.expando];return e||(e={},v(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,o=this.cache(t);if("string"==typeof e)o[b(e)]=i;else for(n in e)o[b(n)]=e[n];return o},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][b(e)]},access:function(t,e,i){return void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(this.set(t,e,i),void 0!==i?i:e)},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e){i=(e=Array.isArray(e)?e.map(b):(e=b(e))in n?[e]:e.match(E)||[]).length;for(;i--;)delete n[e[i]]}void 0!==e&&!T.isEmptyObject(n)||(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){t=t[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var _=new dt,c=new dt,pt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ft=/[A-Z]/g;function mt(t,e,i){var n,o;if(void 0===i&&1===t.nodeType)if(n="data-"+e.replace(ft,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{i="true"===(o=i)||"false"!==o&&("null"===o?null:o===+o+""?+o:pt.test(o)?JSON.parse(o):o)}catch(t){}c.set(t,e,i)}else i=void 0;return i}T.extend({hasData:function(t){return c.hasData(t)||_.hasData(t)},data:function(t,e,i){return c.access(t,e,i)},removeData:function(t,e){c.remove(t,e)},_data:function(t,e,i){return _.access(t,e,i)},_removeData:function(t,e){_.remove(t,e)}}),T.fn.extend({data:function(i,t){var e,n,o,s=this[0],r=s&&s.attributes;if(void 0!==i)return"object"==typeof i?this.each(function(){c.set(this,i)}):h(this,function(t){var e;if(s&&void 0===t)return void 0!==(e=c.get(s,i))||void 0!==(e=mt(s,i))?e:void 0;this.each(function(){c.set(this,i,t)})},null,t,1<arguments.length,null,!0);if(this.length&&(o=c.get(s),1===s.nodeType&&!_.get(s,"hasDataAttrs"))){for(e=r.length;e--;)r[e]&&0===(n=r[e].name).indexOf("data-")&&(n=b(n.slice(5)),mt(s,n,o[n]));_.set(s,"hasDataAttrs",!0)}return o},removeData:function(t){return this.each(function(){c.remove(this,t)})}}),T.extend({queue:function(t,e,i){var n;if(t)return n=_.get(t,e=(e||"fx")+"queue"),i&&(!n||Array.isArray(i)?n=_.access(t,e,T.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=T.queue(t,e),n=i.length,o=i.shift(),s=T._queueHooks(t,e);"inprogress"===o&&(o=i.shift(),n--),o&&("fx"===e&&i.unshift("inprogress"),delete s.stop,o.call(t,function(){T.dequeue(t,e)},s)),!n&&s&&s.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks";return _.get(t,i)||_.access(t,i,{empty:T.Callbacks("once memory").add(function(){_.remove(t,[e+"queue",i])})})}}),T.fn.extend({queue:function(e,i){var t=2;return"string"!=typeof e&&(i=e,e="fx",t--),arguments.length<t?T.queue(this[0],e):void 0===i?this:this.each(function(){var t=T.queue(this,e,i);T._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&T.dequeue(this,e)})},dequeue:function(t){return this.each(function(){T.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){function i(){--o||s.resolveWith(r,[r])}var n,o=1,s=T.Deferred(),r=this,a=this.length;for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)(n=_.get(r[a],t+"queueHooks"))&&n.empty&&(o++,n.empty.add(i));return i(),s.promise(e)}});function gt(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&k(t)&&"none"===T.css(t,"display")}var t=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,vt=new RegExp("^(?:([+-])=|)("+t+")([a-z%]*)$","i"),d=["Top","Right","Bottom","Left"],w=C.documentElement,k=function(t){return T.contains(t.ownerDocument,t)},yt={composed:!0};w.getRootNode&&(k=function(t){return T.contains(t.ownerDocument,t)||t.getRootNode(yt)===t.ownerDocument});function bt(t,e,i,n){var o,s,r=20,a=n?function(){return n.cur()}:function(){return T.css(t,e,"")},l=a(),c=i&&i[3]||(T.cssNumber[e]?"":"px"),u=t.nodeType&&(T.cssNumber[e]||"px"!==c&&+l)&&vt.exec(T.css(t,e));if(u&&u[3]!==c){for(c=c||u[3],u=+(l/=2)||1;r--;)T.style(t,e,u+c),(1-s)*(1-(s=a()/l||.5))<=0&&(r=0),u/=s;T.style(t,e,(u*=2)+c),i=i||[]}return i&&(u=+u||+l||0,o=i[1]?u+(i[1]+1)*i[2]:+i[2],n&&(n.unit=c,n.start=u,n.end=o)),o}var _t={};function A(t,e){for(var i,n,o,s,r,a,l=[],c=0,u=t.length;c<u;c++)(n=t[c]).style&&(i=n.style.display,e?("none"===i&&(l[c]=_.get(n,"display")||null,l[c]||(n.style.display="")),""===n.style.display&&gt(n)&&(l[c]=(a=s=o=void 0,s=n.ownerDocument,r=n.nodeName,(a=_t[r])||(o=s.body.appendChild(s.createElement(r)),a=T.css(o,"display"),o.parentNode.removeChild(o),_t[r]=a="none"===a?"block":a)))):"none"!==i&&(l[c]="none",_.set(n,"display",i)));for(c=0;c<u;c++)null!=l[c]&&(t[c].style.display=l[c]);return t}T.fn.extend({show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){gt(this)?T(this).show():T(this).hide()})}});var wt=/^(?:checkbox|radio)$/i,xt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ct=/^$|^module$|\/(?:java|ecma)script/i,i=C.createDocumentFragment().appendChild(C.createElement("div")),S=((s=C.createElement("input")).setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),i.appendChild(s),g.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,i.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!i.cloneNode(!0).lastChild.defaultValue,i.innerHTML="<option></option>",g.option=!!i.lastChild,{thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]});function I(t,e){var i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[];return void 0===e||e&&l(t,e)?T.merge([t],i):i}function Tt(t,e){for(var i=0,n=t.length;i<n;i++)_.set(t[i],"globalEval",!e||_.get(e[i],"globalEval"))}S.tbody=S.tfoot=S.colgroup=S.caption=S.thead,S.th=S.td,g.option||(S.optgroup=S.option=[1,"<select multiple='multiple'>","</select>"]);var Et=/<|&#?\w+;/;function kt(t,e,i,n,o){for(var s,r,a,l,c,u=e.createDocumentFragment(),h=[],d=0,p=t.length;d<p;d++)if((s=t[d])||0===s)if("object"===f(s))T.merge(h,s.nodeType?[s]:s);else if(Et.test(s)){for(r=r||u.appendChild(e.createElement("div")),a=(xt.exec(s)||["",""])[1].toLowerCase(),a=S[a]||S._default,r.innerHTML=a[1]+T.htmlPrefilter(s)+a[2],c=a[0];c--;)r=r.lastChild;T.merge(h,r.childNodes),(r=u.firstChild).textContent=""}else h.push(e.createTextNode(s));for(u.textContent="",d=0;s=h[d++];)if(n&&-1<T.inArray(s,n))o&&o.push(s);else if(l=k(s),r=I(u.appendChild(s),"script"),l&&Tt(r),i)for(c=0;s=r[c++];)Ct.test(s.type||"")&&i.push(s);return u}var At=/^([^.]*)(?:\.(.+)|)/;function r(){return!0}function p(){return!1}function St(t,e){return t===function(){try{return C.activeElement}catch(t){}}()==("focus"===e)}function It(t,e,i,n,o,s){var r,a;if("object"==typeof e){for(a in"string"!=typeof i&&(n=n||i,i=void 0),e)It(t,a,i,n,e[a],s);return t}if(null==n&&null==o?(o=i,n=i=void 0):null==o&&("string"==typeof i?(o=n,n=void 0):(o=n,n=i,i=void 0)),!1===o)o=p;else if(!o)return t;return 1===s&&(r=o,(o=function(t){return T().off(t),r.apply(this,arguments)}).guid=r.guid||(r.guid=T.guid++)),t.each(function(){T.event.add(this,e,o,n,i)})}function Lt(t,o,s){s?(_.set(t,o,!1),T.event.add(t,o,{namespace:!1,handler:function(t){var e,i,n=_.get(this,o);if(1&t.isTrigger&&this[o]){if(n.length)(T.event.special[o]||{}).delegateType&&t.stopPropagation();else if(n=a.call(arguments),_.set(this,o,n),e=s(this,o),this[o](),n!==(i=_.get(this,o))||e?_.set(this,o,!1):i={},n!==i)return t.stopImmediatePropagation(),t.preventDefault(),i&&i.value}else n.length&&(_.set(this,o,{value:T.event.trigger(T.extend(n[0],T.Event.prototype),n.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===_.get(t,o)&&T.event.add(t,o,r)}T.event={global:{},add:function(e,t,i,n,o){var s,r,a,l,c,u,h,d,p,f=_.get(e);if(v(e))for(i.handler&&(i=(s=i).handler,o=s.selector),o&&T.find.matchesSelector(w,o),i.guid||(i.guid=T.guid++),(a=f.events)||(a=f.events=Object.create(null)),(r=f.handle)||(r=f.handle=function(t){return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(E)||[""]).length;l--;)h=p=(d=At.exec(t[l])||[])[1],d=(d[2]||"").split(".").sort(),h&&(c=T.event.special[h]||{},h=(o?c.delegateType:c.bindType)||h,c=T.event.special[h]||{},p=T.extend({type:h,origType:p,data:n,handler:i,guid:i.guid,selector:o,needsContext:o&&T.expr.match.needsContext.test(o),namespace:d.join(".")},s),(u=a[h])||((u=a[h]=[]).delegateCount=0,c.setup&&!1!==c.setup.call(e,n,d,r)||e.addEventListener&&e.addEventListener(h,r)),c.add&&(c.add.call(e,p),p.handler.guid||(p.handler.guid=i.guid)),o?u.splice(u.delegateCount++,0,p):u.push(p),T.event.global[h]=!0)},remove:function(t,e,i,n,o){var s,r,a,l,c,u,h,d,p,f,m,g=_.hasData(t)&&_.get(t);if(g&&(l=g.events)){for(c=(e=(e||"").match(E)||[""]).length;c--;)if(p=m=(a=At.exec(e[c])||[])[1],f=(a[2]||"").split(".").sort(),p){for(h=T.event.special[p]||{},d=l[p=(n?h.delegateType:h.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=s=d.length;s--;)u=d[s],!o&&m!==u.origType||i&&i.guid!==u.guid||a&&!a.test(u.namespace)||n&&n!==u.selector&&("**"!==n||!u.selector)||(d.splice(s,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(t,u));r&&!d.length&&(h.teardown&&!1!==h.teardown.call(t,f,g.handle)||T.removeEvent(t,p,g.handle),delete l[p])}else for(p in l)T.event.remove(t,p+e[c],i,n,!0);T.isEmptyObject(l)&&_.remove(t,"handle events")}},dispatch:function(t){var e,i,n,o,s,r=new Array(arguments.length),a=T.event.fix(t),t=(_.get(this,"events")||Object.create(null))[a.type]||[],l=T.event.special[a.type]||{};for(r[0]=a,e=1;e<arguments.length;e++)r[e]=arguments[e];if(a.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,a)){for(s=T.event.handlers.call(this,a,t),e=0;(n=s[e++])&&!a.isPropagationStopped();)for(a.currentTarget=n.elem,i=0;(o=n.handlers[i++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!1!==o.namespace&&!a.rnamespace.test(o.namespace)||(a.handleObj=o,a.data=o.data,void 0!==(o=((T.event.special[o.origType]||{}).handle||o.handler).apply(n.elem,r))&&!1===(a.result=o)&&(a.preventDefault(),a.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,a),a.result}},handlers:function(t,e){var i,n,o,s,r,a=[],l=e.delegateCount,c=t.target;if(l&&c.nodeType&&!("click"===t.type&&1<=t.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(s=[],r={},i=0;i<l;i++)void 0===r[o=(n=e[i]).selector+" "]&&(r[o]=n.needsContext?-1<T(o,this).index(c):T.find(o,this,null,[c]).length),r[o]&&s.push(n);s.length&&a.push({elem:c,handlers:s})}return c=this,l<e.length&&a.push({elem:c,handlers:e.slice(l)}),a},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(t){return t[T.expando]?t:new T.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){t=this||t;return wt.test(t.type)&&t.click&&l(t,"input")&&Lt(t,"click",r),!1},trigger:function(t){t=this||t;return wt.test(t.type)&&t.click&&l(t,"input")&&Lt(t,"click"),!0},_default:function(t){t=t.target;return wt.test(t.type)&&t.click&&l(t,"input")&&_.get(t,"click")||l(t,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},T.removeEvent=function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i)},T.Event=function(t,e){if(!(this instanceof T.Event))return new T.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?r:p,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&T.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=r,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=r,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=r,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(e,t){T.event.special[e]={setup:function(){return Lt(this,e,St),!1},trigger:function(){return Lt(this,e),!0},_default:function(t){return _.get(t.target,e)},delegateType:t}}),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,o){T.event.special[t]={delegateType:o,bindType:o,handle:function(t){var e,i=t.relatedTarget,n=t.handleObj;return i&&(i===this||T.contains(this,i))||(t.type=n.origType,e=n.handler.apply(this,arguments),t.type=o),e}}}),T.fn.extend({on:function(t,e,i,n){return It(this,t,e,i,n)},one:function(t,e,i,n){return It(this,t,e,i,n,1)},off:function(t,e,i){var n,o;if(t&&t.preventDefault&&t.handleObj)return n=t.handleObj,T(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"!=typeof t)return!1!==e&&"function"!=typeof e||(i=e,e=void 0),!1===i&&(i=p),this.each(function(){T.event.remove(this,t,i,e)});for(o in t)this.off(o,e,t[o]);return this}});var Ot=/<script|<style|<link/i,zt=/checked\s*(?:[^=]|=\s*.checked.)/i,Dt=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Mt(t,e){return l(t,"table")&&l(11!==e.nodeType?e:e.firstChild,"tr")&&T(t).children("tbody")[0]||t}function jt(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Pt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Nt(t,e){var i,n,o,s;if(1===e.nodeType){if(_.hasData(t)&&(s=_.get(t).events))for(o in _.remove(e,"handle events"),s)for(i=0,n=s[o].length;i<n;i++)T.event.add(e,o,s[o][i]);c.hasData(t)&&(t=c.access(t),t=T.extend({},t),c.set(e,t))}}function L(i,n,o,s){n=R(n);var t,e,r,a,l,c,u=0,h=i.length,d=h-1,p=n[0],f=y(p);if(f||1<h&&"string"==typeof p&&!g.checkClone&&zt.test(p))return i.each(function(t){var e=i.eq(t);f&&(n[0]=p.call(this,t,e.html())),L(e,n,o,s)});if(h&&(e=(t=kt(n,i[0].ownerDocument,!1,i,s)).firstChild,1===t.childNodes.length&&(t=e),e||s)){for(a=(r=T.map(I(t,"script"),jt)).length;u<h;u++)l=t,u!==d&&(l=T.clone(l,!0,!0),a&&T.merge(r,I(l,"script"))),o.call(i[u],l,u);if(a)for(c=r[r.length-1].ownerDocument,T.map(r,Pt),u=0;u<a;u++)l=r[u],Ct.test(l.type||"")&&!_.access(l,"globalEval")&&T.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?T._evalUrl&&!l.noModule&&T._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):Q(l.textContent.replace(Dt,""),l,c))}return i}function Rt(t,e,i){for(var n,o=e?T.filter(e,t):t,s=0;null!=(n=o[s]);s++)i||1!==n.nodeType||T.cleanData(I(n)),n.parentNode&&(i&&k(n)&&Tt(I(n,"script")),n.parentNode.removeChild(n));return t}T.extend({htmlPrefilter:function(t){return t},clone:function(t,e,i){var n,o,s,r,a,l,c,u=t.cloneNode(!0),h=k(t);if(!(g.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||T.isXMLDoc(t)))for(r=I(u),n=0,o=(s=I(t)).length;n<o;n++)a=s[n],"input"===(c=(l=r[n]).nodeName.toLowerCase())&&wt.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(e)if(i)for(s=s||I(t),r=r||I(u),n=0,o=s.length;n<o;n++)Nt(s[n],r[n]);else Nt(t,u);return 0<(r=I(u,"script")).length&&Tt(r,!h&&I(t,"script")),u},cleanData:function(t){for(var e,i,n,o=T.event.special,s=0;void 0!==(i=t[s]);s++)if(v(i)){if(e=i[_.expando]){if(e.events)for(n in e.events)o[n]?T.event.remove(i,n):T.removeEvent(i,n,e.handle);i[_.expando]=void 0}i[c.expando]&&(i[c.expando]=void 0)}}}),T.fn.extend({detach:function(t){return Rt(this,t,!0)},remove:function(t){return Rt(this,t)},text:function(t){return h(this,function(t){return void 0===t?T.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return L(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Mt(this,t).appendChild(t)})},prepend:function(){return L(this,arguments,function(t){var e;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(e=Mt(this,t)).insertBefore(t,e.firstChild)})},before:function(){return L(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return L(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(T.cleanData(I(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return T.clone(this,t,e)})},html:function(t){return h(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Ot.test(t)&&!S[(xt.exec(t)||["",""])[1].toLowerCase()]){t=T.htmlPrefilter(t);try{for(;i<n;i++)1===(e=this[i]||{}).nodeType&&(T.cleanData(I(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var i=[];return L(this,arguments,function(t){var e=this.parentNode;T.inArray(this,i)<0&&(T.cleanData(I(this)),e&&e.replaceChild(t,this))},i)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,r){T.fn[t]=function(t){for(var e,i=[],n=T(t),o=n.length-1,s=0;s<=o;s++)e=s===o?this:this.clone(!0),T(n[s])[r](e),q.apply(i,e.get());return this.pushStack(i)}});function qt(t){var e=t.ownerDocument.defaultView;return(e=e&&e.opener?e:x).getComputedStyle(t)}function Ft(t,e,i){var n,o={};for(n in e)o[n]=t.style[n],t.style[n]=e[n];for(n in i=i.call(t),e)t.style[n]=o[n];return i}var Ht,Wt,Bt,$t,Vt,Ut,Qt,o,Yt=new RegExp("^("+t+")(?!px)[a-z%]+$","i"),Xt=/^--/,Gt=new RegExp(d.join("|"),"i"),s="[\\x20\\t\\r\\n\\f]",Zt=new RegExp("^"+s+"+|((?:^|[^\\\\])(?:\\\\.)*)"+s+"+$","g");function Kt(t,e,i){var n,o=Xt.test(e),s=t.style;return(i=i||qt(t))&&(n=i.getPropertyValue(e)||i[e],""!==(n=o?n.replace(Zt,"$1"):n)||k(t)||(n=T.style(t,e)),!g.pixelBoxStyles()&&Yt.test(n)&&Gt.test(e)&&(o=s.width,t=s.minWidth,e=s.maxWidth,s.minWidth=s.maxWidth=s.width=n,n=i.width,s.width=o,s.minWidth=t,s.maxWidth=e)),void 0!==n?n+"":n}function Jt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}function te(){var t;o&&(Qt.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",o.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",w.appendChild(Qt).appendChild(o),t=x.getComputedStyle(o),Ht="1%"!==t.top,Ut=12===ee(t.marginLeft),o.style.right="60%",$t=36===ee(t.right),Wt=36===ee(t.width),o.style.position="absolute",Bt=12===ee(o.offsetWidth/3),w.removeChild(Qt),o=null)}function ee(t){return Math.round(parseFloat(t))}Qt=C.createElement("div"),(o=C.createElement("div")).style&&(o.style.backgroundClip="content-box",o.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===o.style.backgroundClip,T.extend(g,{boxSizingReliable:function(){return te(),Wt},pixelBoxStyles:function(){return te(),$t},pixelPosition:function(){return te(),Ht},reliableMarginLeft:function(){return te(),Ut},scrollboxSize:function(){return te(),Bt},reliableTrDimensions:function(){var t,e,i;return null==Vt&&(t=C.createElement("table"),e=C.createElement("tr"),i=C.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",e.style.cssText="border:1px solid",e.style.height="1px",i.style.height="9px",i.style.display="block",w.appendChild(t).appendChild(e).appendChild(i),i=x.getComputedStyle(e),Vt=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===e.offsetHeight,w.removeChild(t)),Vt}}));var ie=["Webkit","Moz","ms"],ne=C.createElement("div").style,oe={};function se(t){return T.cssProps[t]||oe[t]||(t in ne?t:oe[t]=function(t){for(var e=t[0].toUpperCase()+t.slice(1),i=ie.length;i--;)if((t=ie[i]+e)in ne)return t}(t)||t)}var re=/^(none|table(?!-c[ea]).+)/,ae={position:"absolute",visibility:"hidden",display:"block"},le={letterSpacing:"0",fontWeight:"400"};function ce(t,e,i){var n=vt.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function ue(t,e,i,n,o,s){var r="width"===e?1:0,a=0,l=0;if(i===(n?"border":"content"))return 0;for(;r<4;r+=2)"margin"===i&&(l+=T.css(t,i+d[r],!0,o)),n?("content"===i&&(l-=T.css(t,"padding"+d[r],!0,o)),"margin"!==i&&(l-=T.css(t,"border"+d[r]+"Width",!0,o))):(l+=T.css(t,"padding"+d[r],!0,o),"padding"!==i?l+=T.css(t,"border"+d[r]+"Width",!0,o):a+=T.css(t,"border"+d[r]+"Width",!0,o));return!n&&0<=s&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-s-l-a-.5))||0),l}function he(t,e,i){var n=qt(t),o=(!g.boxSizingReliable()||i)&&"border-box"===T.css(t,"boxSizing",!1,n),s=o,r=Kt(t,e,n),a="offset"+e[0].toUpperCase()+e.slice(1);if(Yt.test(r)){if(!i)return r;r="auto"}return(!g.boxSizingReliable()&&o||!g.reliableTrDimensions()&&l(t,"tr")||"auto"===r||!parseFloat(r)&&"inline"===T.css(t,"display",!1,n))&&t.getClientRects().length&&(o="border-box"===T.css(t,"boxSizing",!1,n),(s=a in t)&&(r=t[a])),(r=parseFloat(r)||0)+ue(t,e,i||(o?"border":"content"),s,n,r)+"px"}function O(t,e,i,n,o){return new O.prototype.init(t,e,i,n,o)}T.extend({cssHooks:{opacity:{get:function(t,e){if(e)return""===(e=Kt(t,"opacity"))?"1":e}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,i,n){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,s,r,a=b(e),l=Xt.test(e),c=t.style;if(l||(e=se(a)),r=T.cssHooks[e]||T.cssHooks[a],void 0===i)return r&&"get"in r&&void 0!==(o=r.get(t,!1,n))?o:c[e];"string"==(s=typeof i)&&(o=vt.exec(i))&&o[1]&&(i=bt(t,e,o),s="number"),null!=i&&i==i&&("number"!==s||l||(i+=o&&o[3]||(T.cssNumber[a]?"":"px")),g.clearCloneStyle||""!==i||0!==e.indexOf("background")||(c[e]="inherit"),r&&"set"in r&&void 0===(i=r.set(t,i,n))||(l?c.setProperty(e,i):c[e]=i))}},css:function(t,e,i,n){var o,s=b(e);return Xt.test(e)||(e=se(s)),"normal"===(o=void 0===(o=(s=T.cssHooks[e]||T.cssHooks[s])&&"get"in s?s.get(t,!0,i):o)?Kt(t,e,n):o)&&e in le&&(o=le[e]),""===i||i?(s=parseFloat(o),!0===i||isFinite(s)?s||0:o):o}}),T.each(["height","width"],function(t,r){T.cssHooks[r]={get:function(t,e,i){if(e)return!re.test(T.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?he(t,r,i):Ft(t,ae,function(){return he(t,r,i)})},set:function(t,e,i){var n=qt(t),o=!g.scrollboxSize()&&"absolute"===n.position,s=(o||i)&&"border-box"===T.css(t,"boxSizing",!1,n),i=i?ue(t,r,i,s,n):0;return s&&o&&(i-=Math.ceil(t["offset"+r[0].toUpperCase()+r.slice(1)]-parseFloat(n[r])-ue(t,r,"border",!1,n)-.5)),i&&(s=vt.exec(e))&&"px"!==(s[3]||"px")&&(t.style[r]=e,e=T.css(t,r)),ce(0,e,i)}}}),T.cssHooks.marginLeft=Jt(g.reliableMarginLeft,function(t,e){if(e)return(parseFloat(Kt(t,"marginLeft"))||t.getBoundingClientRect().left-Ft(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),T.each({margin:"",padding:"",border:"Width"},function(o,s){T.cssHooks[o+s]={expand:function(t){for(var e=0,i={},n="string"==typeof t?t.split(" "):[t];e<4;e++)i[o+d[e]+s]=n[e]||n[e-2]||n[0];return i}},"margin"!==o&&(T.cssHooks[o+s].set=ce)}),T.fn.extend({css:function(t,e){return h(this,function(t,e,i){var n,o,s={},r=0;if(Array.isArray(e)){for(n=qt(t),o=e.length;r<o;r++)s[e[r]]=T.css(t,e[r],!1,n);return s}return void 0!==i?T.style(t,e,i):T.css(t,e)},t,e,1<arguments.length)}}),((T.Tween=O).prototype={constructor:O,init:function(t,e,i,n,o,s){this.elem=t,this.prop=i,this.easing=o||T.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=s||(T.cssNumber[i]?"":"px")},cur:function(){var t=O.propHooks[this.prop];return(t&&t.get?t:O.propHooks._default).get(this)},run:function(t){var e,i=O.propHooks[this.prop];return this.options.duration?this.pos=e=T.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(i&&i.set?i:O.propHooks._default).set(this),this}}).init.prototype=O.prototype,(O.propHooks={_default:{get:function(t){return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(t=T.css(t.elem,t.prop,""))&&"auto"!==t?t:0},set:function(t){T.fx.step[t.prop]?T.fx.step[t.prop](t):1!==t.elem.nodeType||!T.cssHooks[t.prop]&&null==t.elem.style[se(t.prop)]?t.elem[t.prop]=t.now:T.style(t.elem,t.prop,t.now+t.unit)}}}).scrollTop=O.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},T.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},T.fx=O.prototype.init,T.fx.step={};var z,de,pe=/^(?:toggle|show|hide)$/,fe=/queueHooks$/;function me(){de&&(!1===C.hidden&&x.requestAnimationFrame?x.requestAnimationFrame(me):x.setTimeout(me,T.fx.interval),T.fx.tick())}function ge(){return x.setTimeout(function(){z=void 0}),z=Date.now()}function ve(t,e){var i,n=0,o={height:t};for(e=e?1:0;n<4;n+=2-e)o["margin"+(i=d[n])]=o["padding"+i]=t;return e&&(o.opacity=o.width=t),o}function ye(t,e,i){for(var n,o=(D.tweeners[e]||[]).concat(D.tweeners["*"]),s=0,r=o.length;s<r;s++)if(n=o[s].call(i,e,t))return n}function D(o,t,e){var i,s,n,r,a,l,c,u=0,h=D.prefilters.length,d=T.Deferred().always(function(){delete p.elem}),p=function(){if(s)return!1;for(var t=z||ge(),t=Math.max(0,f.startTime+f.duration-t),e=1-(t/f.duration||0),i=0,n=f.tweens.length;i<n;i++)f.tweens[i].run(e);return d.notifyWith(o,[f,e,t]),e<1&&n?t:(n||d.notifyWith(o,[f,1,0]),d.resolveWith(o,[f]),!1)},f=d.promise({elem:o,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},e),originalProperties:t,originalOptions:e,startTime:z||ge(),duration:e.duration,tweens:[],createTween:function(t,e){e=T.Tween(o,f.opts,t,e,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(e),e},stop:function(t){var e=0,i=t?f.tweens.length:0;if(s)return this;for(s=!0;e<i;e++)f.tweens[e].run(1);return t?(d.notifyWith(o,[f,1,0]),d.resolveWith(o,[f,t])):d.rejectWith(o,[f,t]),this}}),m=f.props,g=m,v=f.opts.specialEasing;for(n in g)if(a=v[r=b(n)],l=g[n],Array.isArray(l)&&(a=l[1],l=g[n]=l[0]),n!==r&&(g[r]=l,delete g[n]),(c=T.cssHooks[r])&&"expand"in c)for(n in l=c.expand(l),delete g[r],l)n in g||(g[n]=l[n],v[n]=a);else v[r]=a;for(;u<h;u++)if(i=D.prefilters[u].call(f,o,m,f.opts))return y(i.stop)&&(T._queueHooks(f.elem,f.opts.queue).stop=i.stop.bind(i)),i;return T.map(m,ye,f),y(f.opts.start)&&f.opts.start.call(o,f),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always),T.fx.timer(T.extend(p,{elem:o,anim:f,queue:f.opts.queue})),f}T.Animation=T.extend(D,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return bt(i.elem,t,vt.exec(e),i),i}]},tweener:function(t,e){for(var i,n=0,o=(t=y(t)?(e=t,["*"]):t.match(E)).length;n<o;n++)i=t[n],D.tweeners[i]=D.tweeners[i]||[],D.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,o,s,r,a,l,c,u="width"in e||"height"in e,h=this,d={},p=t.style,f=t.nodeType&&gt(t),m=_.get(t,"fxshow");for(n in i.queue||(null==(r=T._queueHooks(t,"fx")).unqueued&&(r.unqueued=0,a=r.empty.fire,r.empty.fire=function(){r.unqueued||a()}),r.unqueued++,h.always(function(){h.always(function(){r.unqueued--,T.queue(t,"fx").length||r.empty.fire()})})),e)if(o=e[n],pe.test(o)){if(delete e[n],s=s||"toggle"===o,o===(f?"hide":"show")){if("show"!==o||!m||void 0===m[n])continue;f=!0}d[n]=m&&m[n]||T.style(t,n)}if((l=!T.isEmptyObject(e))||!T.isEmptyObject(d))for(n in u&&1===t.nodeType&&(i.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=m&&m.display)&&(c=_.get(t,"display")),"none"===(u=T.css(t,"display"))&&(c?u=c:(A([t],!0),c=t.style.display||c,u=T.css(t,"display"),A([t]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===T.css(t,"float")&&(l||(h.done(function(){p.display=c}),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),i.overflow&&(p.overflow="hidden",h.always(function(){p.overflow=i.overflow[0],p.overflowX=i.overflow[1],p.overflowY=i.overflow[2]})),l=!1,d)l||(m?"hidden"in m&&(f=m.hidden):m=_.access(t,"fxshow",{display:c}),s&&(m.hidden=!f),f&&A([t],!0),h.done(function(){for(n in f||A([t]),_.remove(t,"fxshow"),d)T.style(t,n,d[n])})),l=ye(f?m[n]:0,n,h),n in m||(m[n]=l.start,f&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?D.prefilters.unshift(t):D.prefilters.push(t)}}),T.speed=function(t,e,i){var n=t&&"object"==typeof t?T.extend({},t):{complete:i||!i&&e||y(t)&&t,duration:t,easing:i&&e||e&&!y(e)&&e};return T.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in T.fx.speeds?n.duration=T.fx.speeds[n.duration]:n.duration=T.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){y(n.old)&&n.old.call(this),n.queue&&T.dequeue(this,n.queue)},n},T.fn.extend({fadeTo:function(t,e,i,n){return this.filter(gt).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(e,t,i,n){function o(){var t=D(this,T.extend({},e),r);(s||_.get(this,"finish"))&&t.stop(!0)}var s=T.isEmptyObject(e),r=T.speed(t,i,n);return o.finish=o,s||!1===r.queue?this.each(o):this.queue(r.queue,o)},stop:function(o,t,s){function r(t){var e=t.stop;delete t.stop,e(s)}return"string"!=typeof o&&(s=t,t=o,o=void 0),t&&this.queue(o||"fx",[]),this.each(function(){var t=!0,e=null!=o&&o+"queueHooks",i=T.timers,n=_.get(this);if(e)n[e]&&n[e].stop&&r(n[e]);else for(e in n)n[e]&&n[e].stop&&fe.test(e)&&r(n[e]);for(e=i.length;e--;)i[e].elem!==this||null!=o&&i[e].queue!==o||(i[e].anim.stop(s),t=!1,i.splice(e,1));!t&&s||T.dequeue(this,o)})},finish:function(r){return!1!==r&&(r=r||"fx"),this.each(function(){var t,e=_.get(this),i=e[r+"queue"],n=e[r+"queueHooks"],o=T.timers,s=i?i.length:0;for(e.finish=!0,T.queue(this,r,[]),n&&n.stop&&n.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===r&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete e.finish})}}),T.each(["toggle","show","hide"],function(t,n){var o=T.fn[n];T.fn[n]=function(t,e,i){return null==t||"boolean"==typeof t?o.apply(this,arguments):this.animate(ve(n,!0),t,e,i)}}),T.each({slideDown:ve("show"),slideUp:ve("hide"),slideToggle:ve("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){T.fn[t]=function(t,e,i){return this.animate(n,t,e,i)}}),T.timers=[],T.fx.tick=function(){var t,e=0,i=T.timers;for(z=Date.now();e<i.length;e++)(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||T.fx.stop(),z=void 0},T.fx.timer=function(t){T.timers.push(t),T.fx.start()},T.fx.interval=13,T.fx.start=function(){de||(de=!0,me())},T.fx.stop=function(){de=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(n,t){return n=T.fx&&T.fx.speeds[n]||n,this.queue(t=t||"fx",function(t,e){var i=x.setTimeout(t,n);e.stop=function(){x.clearTimeout(i)}})},i=C.createElement("input"),t=C.createElement("select").appendChild(C.createElement("option")),i.type="checkbox",g.checkOn=""!==i.value,g.optSelected=t.selected,(i=C.createElement("input")).value="t",i.type="radio",g.radioValue="t"===i.value;var be,_e=T.expr.attrHandle,we=(T.fn.extend({attr:function(t,e){return h(this,T.attr,t,e,1<arguments.length)},removeAttr:function(t){return this.each(function(){T.removeAttr(this,t)})}}),T.extend({attr:function(t,e,i){var n,o,s=t.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===t.getAttribute?T.prop(t,e,i):(1===s&&T.isXMLDoc(t)||(o=T.attrHooks[e.toLowerCase()]||(T.expr.match.bool.test(e)?be:void 0)),void 0!==i?null===i?void T.removeAttr(t,e):o&&"set"in o&&void 0!==(n=o.set(t,i,e))?n:(t.setAttribute(e,i+""),i):!(o&&"get"in o&&null!==(n=o.get(t,e)))&&null==(n=T.find.attr(t,e))?void 0:n)},attrHooks:{type:{set:function(t,e){var i;if(!g.radioValue&&"radio"===e&&l(t,"input"))return i=t.value,t.setAttribute("type",e),i&&(t.value=i),e}}},removeAttr:function(t,e){var i,n=0,o=e&&e.match(E);if(o&&1===t.nodeType)for(;i=o[n++];)t.removeAttribute(i)}}),be={set:function(t,e,i){return!1===e?T.removeAttr(t,i):t.setAttribute(i,i),i}},T.each(T.expr.match.bool.source.match(/\w+/g),function(t,e){var r=_e[e]||T.find.attr;_e[e]=function(t,e,i){var n,o,s=e.toLowerCase();return i||(o=_e[s],_e[s]=n,n=null!=r(t,e,i)?s:null,_e[s]=o),n}}),/^(?:input|select|textarea|button)$/i),xe=/^(?:a|area)$/i;function M(t){return(t.match(E)||[]).join(" ")}function j(t){return t.getAttribute&&t.getAttribute("class")||""}function Ce(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(E)||[]}T.fn.extend({prop:function(t,e){return h(this,T.prop,t,e,1<arguments.length)},removeProp:function(t){return this.each(function(){delete this[T.propFix[t]||t]})}}),T.extend({prop:function(t,e,i){var n,o,s=t.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&T.isXMLDoc(t)||(e=T.propFix[e]||e,o=T.propHooks[e]),void 0!==i?o&&"set"in o&&void 0!==(n=o.set(t,i,e))?n:t[e]=i:o&&"get"in o&&null!==(n=o.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){var e=T.find.attr(t,"tabindex");return e?parseInt(e,10):we.test(t.nodeName)||xe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(T.propHooks.selected={get:function(t){t=t.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(t){t=t.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(e){var t,i,n,o,s,r;return y(e)?this.each(function(t){T(this).addClass(e.call(this,t,j(this)))}):(t=Ce(e)).length?this.each(function(){if(n=j(this),i=1===this.nodeType&&" "+M(n)+" "){for(s=0;s<t.length;s++)o=t[s],i.indexOf(" "+o+" ")<0&&(i+=o+" ");r=M(i),n!==r&&this.setAttribute("class",r)}}):this},removeClass:function(e){var t,i,n,o,s,r;return y(e)?this.each(function(t){T(this).removeClass(e.call(this,t,j(this)))}):arguments.length?(t=Ce(e)).length?this.each(function(){if(n=j(this),i=1===this.nodeType&&" "+M(n)+" "){for(s=0;s<t.length;s++)for(o=t[s];-1<i.indexOf(" "+o+" ");)i=i.replace(" "+o+" "," ");r=M(i),n!==r&&this.setAttribute("class",r)}}):this:this.attr("class","")},toggleClass:function(e,i){var t,n,o,s,r=typeof e,a="string"==r||Array.isArray(e);return y(e)?this.each(function(t){T(this).toggleClass(e.call(this,t,j(this),i),i)}):"boolean"==typeof i&&a?i?this.addClass(e):this.removeClass(e):(t=Ce(e),this.each(function(){if(a)for(s=T(this),o=0;o<t.length;o++)n=t[o],s.hasClass(n)?s.removeClass(n):s.addClass(n);else void 0!==e&&"boolean"!=r||((n=j(this))&&_.set(this,"__className__",n),this.setAttribute&&this.setAttribute("class",!n&&!1!==e&&_.get(this,"__className__")||""))}))},hasClass:function(t){for(var e,i=0,n=" "+t+" ";e=this[i++];)if(1===e.nodeType&&-1<(" "+M(j(e))+" ").indexOf(n))return!0;return!1}});function Te(t){t.stopPropagation()}var Ee=/\r/g,ke=(T.fn.extend({val:function(e){var i,t,n,o=this[0];return arguments.length?(n=y(e),this.each(function(t){1===this.nodeType&&(null==(t=n?e.call(this,t,T(this).val()):e)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=T.map(t,function(t){return null==t?"":t+""})),(i=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,t,"value")||(this.value=t))})):o?(i=T.valHooks[o.type]||T.valHooks[o.nodeName.toLowerCase()])&&"get"in i&&void 0!==(t=i.get(o,"value"))?t:"string"==typeof(t=o.value)?t.replace(Ee,""):null==t?"":t:void 0}}),T.extend({valHooks:{option:{get:function(t){var e=T.find.attr(t,"value");return null!=e?e:M(T.text(t))}},select:{get:function(t){for(var e,i=t.options,n=t.selectedIndex,o="select-one"===t.type,s=o?null:[],r=o?n+1:i.length,a=n<0?r:o?n:0;a<r;a++)if(((e=i[a]).selected||a===n)&&!e.disabled&&(!e.parentNode.disabled||!l(e.parentNode,"optgroup"))){if(e=T(e).val(),o)return e;s.push(e)}return s},set:function(t,e){for(var i,n,o=t.options,s=T.makeArray(e),r=o.length;r--;)((n=o[r]).selected=-1<T.inArray(T.valHooks.option.get(n),s))&&(i=!0);return i||(t.selectedIndex=-1),s}}}}),T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=-1<T.inArray(T(t).val(),e)}},g.checkOn||(T.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),g.focusin="onfocusin"in x,/^(?:focusinfocus|focusoutblur)$/),Ae=(T.extend(T.event,{trigger:function(t,e,i,n){var o,s,r,a,l,c,u,h=[i||C],d=B.call(t,"type")?t.type:t,p=B.call(t,"namespace")?t.namespace.split("."):[],f=u=s=i=i||C;if(3!==i.nodeType&&8!==i.nodeType&&!ke.test(d+T.event.triggered)&&(-1<d.indexOf(".")&&(d=(p=d.split(".")).shift(),p.sort()),a=d.indexOf(":")<0&&"on"+d,(t=t[T.expando]?t:new T.Event(d,"object"==typeof t&&t)).isTrigger=n?2:3,t.namespace=p.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),e=null==e?[t]:T.makeArray(e,[t]),c=T.event.special[d]||{},n||!c.trigger||!1!==c.trigger.apply(i,e))){if(!n&&!c.noBubble&&!m(i)){for(r=c.delegateType||d,ke.test(r+d)||(f=f.parentNode);f;f=f.parentNode)h.push(f),s=f;s===(i.ownerDocument||C)&&h.push(s.defaultView||s.parentWindow||x)}for(o=0;(f=h[o++])&&!t.isPropagationStopped();)u=f,t.type=1<o?r:c.bindType||d,(l=(_.get(f,"events")||Object.create(null))[t.type]&&_.get(f,"handle"))&&l.apply(f,e),(l=a&&f[a])&&l.apply&&v(f)&&(t.result=l.apply(f,e),!1===t.result&&t.preventDefault());return t.type=d,n||t.isDefaultPrevented()||c._default&&!1!==c._default.apply(h.pop(),e)||!v(i)||a&&y(i[d])&&!m(i)&&((s=i[a])&&(i[a]=null),T.event.triggered=d,t.isPropagationStopped()&&u.addEventListener(d,Te),i[d](),t.isPropagationStopped()&&u.removeEventListener(d,Te),T.event.triggered=void 0,s&&(i[a]=s)),t.result}},simulate:function(t,e,i){i=T.extend(new T.Event,i,{type:t,isSimulated:!0});T.event.trigger(i,null,e)}}),T.fn.extend({trigger:function(t,e){return this.each(function(){T.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return T.event.trigger(t,e,i,!0)}}),g.focusin||T.each({focus:"focusin",blur:"focusout"},function(i,n){function o(t){T.event.simulate(n,t.target,T.event.fix(t))}T.event.special[n]={setup:function(){var t=this.ownerDocument||this.document||this,e=_.access(t,n);e||t.addEventListener(i,o,!0),_.access(t,n,(e||0)+1)},teardown:function(){var t=this.ownerDocument||this.document||this,e=_.access(t,n)-1;e?_.access(t,n,e):(t.removeEventListener(i,o,!0),_.remove(t,n))}}}),x.location),Se={guid:Date.now()},Ie=/\?/,Le=(T.parseXML=function(t){var e,i;if(!t||"string"!=typeof t)return null;try{e=(new x.DOMParser).parseFromString(t,"text/xml")}catch(t){}return i=e&&e.getElementsByTagName("parsererror")[0],e&&!i||T.error("Invalid XML: "+(i?T.map(i.childNodes,function(t){return t.textContent}).join("\n"):t)),e},/\[\]$/),Oe=/\r?\n/g,ze=/^(?:submit|button|image|reset|file)$/i,De=/^(?:input|select|textarea|keygen)/i;T.param=function(t,e){function i(t,e){e=y(e)?e():e,o[o.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==e?"":e)}var n,o=[];if(null==t)return"";if(Array.isArray(t)||t.jquery&&!T.isPlainObject(t))T.each(t,function(){i(this.name,this.value)});else for(n in t)!function i(n,t,o,s){if(Array.isArray(t))T.each(t,function(t,e){o||Le.test(n)?s(n,e):i(n+"["+("object"==typeof e&&null!=e?t:"")+"]",e,o,s)});else if(o||"object"!==f(t))s(n,t);else for(var e in t)i(n+"["+e+"]",t[e],o,s)}(n,t[n],e,i);return o.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=T.prop(this,"elements");return t?T.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!T(this).is(":disabled")&&De.test(this.nodeName)&&!ze.test(t)&&(this.checked||!wt.test(t))}).map(function(t,e){var i=T(this).val();return null==i?null:Array.isArray(i)?T.map(i,function(t){return{name:e.name,value:t.replace(Oe,"\r\n")}}):{name:e.name,value:i.replace(Oe,"\r\n")}}).get()}});var Me=/%20/g,je=/#.*$/,Pe=/([?&])_=[^&]*/,Ne=/^(.*?):[ \t]*([^\r\n]*)$/gm,Re=/^(?:GET|HEAD)$/,qe=/^\/\//,Fe={},He={},We="*/".concat("*"),Be=C.createElement("a");function $e(s){return function(t,e){"string"!=typeof t&&(e=t,t="*");var i,n=0,o=t.toLowerCase().match(E)||[];if(y(e))for(;i=o[n++];)"+"===i[0]?(i=i.slice(1)||"*",(s[i]=s[i]||[]).unshift(e)):(s[i]=s[i]||[]).push(e)}}function Ve(e,n,o,s){var r={},a=e===He;function l(t){var i;return r[t]=!0,T.each(e[t]||[],function(t,e){e=e(n,o,s);return"string"!=typeof e||a||r[e]?a?!(i=e):void 0:(n.dataTypes.unshift(e),l(e),!1)}),i}return l(n.dataTypes[0])||!r["*"]&&l("*")}function Ue(t,e){var i,n,o=T.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((o[i]?t:n=n||{})[i]=e[i]);return n&&T.extend(!0,t,n),t}Be.href=Ae.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ae.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ae.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":We,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Ue(Ue(t,T.ajaxSettings),e):Ue(T.ajaxSettings,t)},ajaxPrefilter:$e(Fe),ajaxTransport:$e(He),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0);var l,c,u,i,h,d,p,n,o,f=T.ajaxSetup({},e=e||{}),m=f.context||f,g=f.context&&(m.nodeType||m.jquery)?T(m):T.event,v=T.Deferred(),y=T.Callbacks("once memory"),b=f.statusCode||{},s={},r={},a="canceled",_={readyState:0,getResponseHeader:function(t){var e;if(d){if(!i)for(i={};e=Ne.exec(u);)i[e[1].toLowerCase()+" "]=(i[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=i[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return d?u:null},setRequestHeader:function(t,e){return null==d&&(t=r[t.toLowerCase()]=r[t.toLowerCase()]||t,s[t]=e),this},overrideMimeType:function(t){return null==d&&(f.mimeType=t),this},statusCode:function(t){if(t)if(d)_.always(t[_.status]);else for(var e in t)b[e]=[b[e],t[e]];return this},abort:function(t){t=t||a;return l&&l.abort(t),w(0,t),this}};if(v.promise(_),f.url=((t||f.url||Ae.href)+"").replace(qe,Ae.protocol+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(E)||[""],null==f.crossDomain){o=C.createElement("a");try{o.href=f.url,o.href=o.href,f.crossDomain=Be.protocol+"//"+Be.host!=o.protocol+"//"+o.host}catch(t){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=T.param(f.data,f.traditional)),Ve(Fe,f,e,_),!d){for(n in(p=T.event&&f.global)&&0==T.active++&&T.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Re.test(f.type),c=f.url.replace(je,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Me,"+")):(o=f.url.slice(c.length),f.data&&(f.processData||"string"==typeof f.data)&&(c+=(Ie.test(c)?"&":"?")+f.data,delete f.data),!1===f.cache&&(c=c.replace(Pe,"$1"),o=(Ie.test(c)?"&":"?")+"_="+Se.guid+++o),f.url=c+o),f.ifModified&&(T.lastModified[c]&&_.setRequestHeader("If-Modified-Since",T.lastModified[c]),T.etag[c]&&_.setRequestHeader("If-None-Match",T.etag[c])),(f.data&&f.hasContent&&!1!==f.contentType||e.contentType)&&_.setRequestHeader("Content-Type",f.contentType),_.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+We+"; q=0.01":""):f.accepts["*"]),f.headers)_.setRequestHeader(n,f.headers[n]);if(f.beforeSend&&(!1===f.beforeSend.call(m,_,f)||d))return _.abort();if(a="abort",y.add(f.complete),_.done(f.success),_.fail(f.error),l=Ve(He,f,e,_)){if(_.readyState=1,p&&g.trigger("ajaxSend",[_,f]),d)return _;f.async&&0<f.timeout&&(h=x.setTimeout(function(){_.abort("timeout")},f.timeout));try{d=!1,l.send(s,w)}catch(t){if(d)throw t;w(-1,t)}}else w(-1,"No Transport")}return _;function w(t,e,i,n){var o,s,r,a=e;d||(d=!0,h&&x.clearTimeout(h),l=void 0,u=n||"",_.readyState=0<t?4:0,n=200<=t&&t<300||304===t,i&&(r=function(t,e,i){for(var n,o,s,r,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));if(n)for(o in a)if(a[o]&&a[o].test(n)){l.unshift(o);break}if(l[0]in i)s=l[0];else{for(o in i){if(!l[0]||t.converters[o+" "+l[0]]){s=o;break}r=r||o}s=s||r}if(s)return s!==l[0]&&l.unshift(s),i[s]}(f,_,i)),!n&&-1<T.inArray("script",f.dataTypes)&&T.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),r=function(t,e,i,n){var o,s,r,a,l,c={},u=t.dataTypes.slice();if(u[1])for(r in t.converters)c[r.toLowerCase()]=t.converters[r];for(s=u.shift();s;)if(t.responseFields[s]&&(i[t.responseFields[s]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=u.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(r=c[l+" "+s]||c["* "+s]))for(o in c)if((a=o.split(" "))[1]===s&&(r=c[l+" "+a[0]]||c["* "+a[0]])){!0===r?r=c[o]:!0!==c[o]&&(s=a[0],u.unshift(a[1]));break}if(!0!==r)if(r&&t.throws)e=r(e);else try{e=r(e)}catch(t){return{state:"parsererror",error:r?t:"No conversion from "+l+" to "+s}}}return{state:"success",data:e}}(f,r,_,n),n?(f.ifModified&&((i=_.getResponseHeader("Last-Modified"))&&(T.lastModified[c]=i),(i=_.getResponseHeader("etag"))&&(T.etag[c]=i)),204===t||"HEAD"===f.type?a="nocontent":304===t?a="notmodified":(a=r.state,o=r.data,n=!(s=r.error))):(s=a,!t&&a||(a="error",t<0&&(t=0))),_.status=t,_.statusText=(e||a)+"",n?v.resolveWith(m,[o,a,_]):v.rejectWith(m,[_,a,s]),_.statusCode(b),b=void 0,p&&g.trigger(n?"ajaxSuccess":"ajaxError",[_,f,n?o:s]),y.fireWith(m,[_,a]),p&&(g.trigger("ajaxComplete",[_,f]),--T.active||T.event.trigger("ajaxStop")))}},getJSON:function(t,e,i){return T.get(t,e,i,"json")},getScript:function(t,e){return T.get(t,void 0,e,"script")}}),T.each(["get","post"],function(t,o){T[o]=function(t,e,i,n){return y(e)&&(n=n||i,i=e,e=void 0),T.ajax(T.extend({url:t,type:o,dataType:n,data:e,success:i},T.isPlainObject(t)&&t))}}),T.ajaxPrefilter(function(t){for(var e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")}),T._evalUrl=function(t,e,i){return T.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){T.globalEval(t,e,i)}})},T.fn.extend({wrapAll:function(t){return this[0]&&(y(t)&&(t=t.call(this[0])),t=T(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(i){return y(i)?this.each(function(t){T(this).wrapInner(i.call(this,t))}):this.each(function(){var t=T(this),e=t.contents();e.length?e.wrapAll(i):t.append(i)})},wrap:function(e){var i=y(e);return this.each(function(t){T(this).wrapAll(i?e.call(this,t):e)})},unwrap:function(t){return this.parent(t).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(t){return!T.expr.pseudos.visible(t)},T.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new x.XMLHttpRequest}catch(t){}};var Qe={0:200,1223:204},Ye=T.ajaxSettings.xhr();g.cors=!!Ye&&"withCredentials"in Ye,g.ajax=Ye=!!Ye,T.ajaxTransport(function(o){var s,r;if(g.cors||Ye&&!o.crossDomain)return{send:function(t,e){var i,n=o.xhr();if(n.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(i in o.xhrFields)n[i]=o.xhrFields[i];for(i in o.mimeType&&n.overrideMimeType&&n.overrideMimeType(o.mimeType),o.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest"),t)n.setRequestHeader(i,t[i]);s=function(t){return function(){s&&(s=r=n.onload=n.onerror=n.onabort=n.ontimeout=n.onreadystatechange=null,"abort"===t?n.abort():"error"===t?"number"!=typeof n.status?e(0,"error"):e(n.status,n.statusText):e(Qe[n.status]||n.status,n.statusText,"text"!==(n.responseType||"text")||"string"!=typeof n.responseText?{binary:n.response}:{text:n.responseText},n.getAllResponseHeaders()))}},n.onload=s(),r=n.onerror=n.ontimeout=s("error"),void 0!==n.onabort?n.onabort=r:n.onreadystatechange=function(){4===n.readyState&&x.setTimeout(function(){s&&r()})},s=s("abort");try{n.send(o.hasContent&&o.data||null)}catch(t){if(s)throw t}},abort:function(){s&&s()}}}),T.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return T.globalEval(t),t}}}),T.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),T.ajaxTransport("script",function(i){var n,o;if(i.crossDomain||i.scriptAttrs)return{send:function(t,e){n=T("<script>").attr(i.scriptAttrs||{}).prop({charset:i.scriptCharset,src:i.url}).on("load error",o=function(t){n.remove(),o=null,t&&e("error"===t.type?404:200,t.type)}),C.head.appendChild(n[0])},abort:function(){o&&o()}}});var Xe=[],Ge=/(=)\?(?=&|$)|\?\?/,Ze=(T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Xe.pop()||T.expando+"_"+Se.guid++;return this[t]=!0,t}}),T.ajaxPrefilter("json jsonp",function(t,e,i){var n,o,s,r=!1!==t.jsonp&&(Ge.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ge.test(t.data)&&"data");if(r||"jsonp"===t.dataTypes[0])return n=t.jsonpCallback=y(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,r?t[r]=t[r].replace(Ge,"$1"+n):!1!==t.jsonp&&(t.url+=(Ie.test(t.url)?"&":"?")+t.jsonp+"="+n),t.converters["script json"]=function(){return s||T.error(n+" was not called"),s[0]},t.dataTypes[0]="json",o=x[n],x[n]=function(){s=arguments},i.always(function(){void 0===o?T(x).removeProp(n):x[n]=o,t[n]&&(t.jsonpCallback=e.jsonpCallback,Xe.push(n)),s&&y(o)&&o(s[0]),s=o=void 0}),"script"}),g.createHTMLDocument=((s=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===s.childNodes.length),T.parseHTML=function(t,e,i){return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(g.createHTMLDocument?((n=(e=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,e.head.appendChild(n)):e=C),n=!i&&[],(i=Z.exec(t))?[e.createElement(i[1])]:(i=kt([t],e,n),n&&n.length&&T(n).remove(),T.merge([],i.childNodes)));var n},T.fn.load=function(t,e,i){var n,o,s,r=this,a=t.indexOf(" ");return-1<a&&(n=M(t.slice(a)),t=t.slice(0,a)),y(e)?(i=e,e=void 0):e&&"object"==typeof e&&(o="POST"),0<r.length&&T.ajax({url:t,type:o||"GET",dataType:"html",data:e}).done(function(t){s=arguments,r.html(n?T("<div>").append(T.parseHTML(t)).find(n):t)}).always(i&&function(t,e){r.each(function(){i.apply(this,s||[t.responseText,e,t])})}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,function(t){return e===t.elem}).length},T.offset={setOffset:function(t,e,i){var n,o,s,r,a=T.css(t,"position"),l=T(t),c={};"static"===a&&(t.style.position="relative"),s=l.offset(),n=T.css(t,"top"),r=T.css(t,"left"),a=("absolute"===a||"fixed"===a)&&-1<(n+r).indexOf("auto")?(o=(a=l.position()).top,a.left):(o=parseFloat(n)||0,parseFloat(r)||0),null!=(e=y(e)?e.call(t,i,T.extend({},s)):e).top&&(c.top=e.top-s.top+o),null!=e.left&&(c.left=e.left-s.left+a),"using"in e?e.using.call(t,c):l.css(c)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){T.offset.setOffset(this,e,t)});var t,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),i=i.ownerDocument.defaultView,{top:t.top+i.pageYOffset,left:t.left+i.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,i,n=this[0],o={top:0,left:0};if("fixed"===T.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===T.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&((o=T(t).offset()).top+=T.css(t,"borderTopWidth",!0),o.left+=T.css(t,"borderLeftWidth",!0))}return{top:e.top-o.top-T.css(n,"marginTop",!0),left:e.left-o.left-T.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===T.css(t,"position");)t=t.offsetParent;return t||w})}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,o){var s="pageYOffset"===o;T.fn[e]=function(t){return h(this,function(t,e,i){var n;if(m(t)?n=t:9===t.nodeType&&(n=t.defaultView),void 0===i)return n?n[o]:t[e];n?n.scrollTo(s?n.pageXOffset:i,s?i:n.pageYOffset):t[e]=i},e,t,arguments.length)}}),T.each(["top","left"],function(t,i){T.cssHooks[i]=Jt(g.pixelPosition,function(t,e){if(e)return e=Kt(t,i),Yt.test(e)?T(t).position()[i]+"px":e})}),T.each({Height:"height",Width:"width"},function(r,a){T.each({padding:"inner"+r,content:a,"":"outer"+r},function(n,s){T.fn[s]=function(t,e){var i=arguments.length&&(n||"boolean"!=typeof t),o=n||(!0===t||!0===e?"margin":"border");return h(this,function(t,e,i){var n;return m(t)?0===s.indexOf("outer")?t["inner"+r]:t.document.documentElement["client"+r]:9===t.nodeType?(n=t.documentElement,Math.max(t.body["scroll"+r],n["scroll"+r],t.body["offset"+r],n["offset"+r],n["client"+r])):void 0===i?T.css(t,e,o):T.style(t,e,i,o)},a,i?t:void 0,i)}})}),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){T.fn[e]=function(t){return this.on(e,t)}}),T.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,i){T.fn[i]=function(t,e){return 0<arguments.length?this.on(i,null,t,e):this.trigger(i)}}),/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),Ke=(T.proxy=function(t,e){var i,n;if("string"==typeof e&&(n=t[e],e=t,t=n),y(t))return i=a.call(arguments,2),(n=function(){return t.apply(e||this,i.concat(a.call(arguments)))}).guid=t.guid=t.guid||T.guid++,n},T.holdReady=function(t){t?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=l,T.isFunction=y,T.isWindow=m,T.camelCase=b,T.type=f,T.now=Date.now,T.isNumeric=function(t){var e=T.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},T.trim=function(t){return null==t?"":(t+"").replace(Ze,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return T}),x.jQuery),Je=x.$;return T.noConflict=function(t){return x.$===T&&(x.$=Je),t&&x.jQuery===T&&(x.jQuery=Ke),T},void 0===P&&(x.jQuery=x.$=T),T}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,function(){"use strict";const P="transitionend",N=e=>{let i=e.getAttribute("data-bs-target");if(!i||"#"===i){let t=e.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t="#"+t.split("#")[1]),i=t&&"#"!==t?t.trim():null}return i},R=t=>{t=N(t);return t&&document.querySelector(t)?t:null},o=t=>{t=N(t);return t?document.querySelector(t):null},q=t=>{t.dispatchEvent(new Event(P))},s=t=>!(!t||"object"!=typeof t)&&void 0!==(t=void 0!==t.jquery?t[0]:t).nodeType,r=t=>s(t)?t.jquery?t[0]:t:"string"==typeof t&&0<t.length?document.querySelector(t):null,n=t=>{if(!s(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(i&&i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},a=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),F=t=>{return document.documentElement.attachShadow?"function"==typeof t.getRootNode?(e=t.getRootNode())instanceof ShadowRoot?e:null:t instanceof ShadowRoot?t:t.parentNode?F(t.parentNode):null:null;var e},H=()=>{},W=t=>{t.offsetHeight},B=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,$=[],l=()=>"rtl"===document.documentElement.dir,t=n=>{var t=()=>{const t=B();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}};"loading"===document.readyState?($.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of $)t()}),$.push(t)):t()},c=t=>{"function"==typeof t&&t()},V=(i,o,t=!0)=>{if(t){t=(()=>{if(!o)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(o);var i=Number.parseFloat(t),n=Number.parseFloat(e);return i||n?(t=t.split(",")[0],e=e.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(e))):0})()+5;let e=!1;const n=({target:t})=>{t===o&&(e=!0,o.removeEventListener(P,n),c(i))};o.addEventListener(P,n),setTimeout(()=>{e||q(o)},t)}else c(i)},U=(t,e,i,n)=>{var o=t.length;let s=t.indexOf(e);return-1===s?!i&&n?t[o-1]:t[0]:(s+=i?1:-1,n&&(s=(s+o)%o),t[Math.max(0,Math.min(s,o-1))])},Q=/[^.]*(?=\..*)\.|.*/,Y=/\..*/,X=/::\d+$/,G={};let Z=1;const K={mouseenter:"mouseover",mouseleave:"mouseout"},J=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function tt(t,e){return e&&e+"::"+Z++||t.uidEvent||Z++}function et(t){var e=tt(t);return t.uidEvent=e,G[e]=G[e]||{},G[e]}function it(t,e,i=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===i)}function nt(t,e,i){var n="string"==typeof e,e=!n&&e||i;let o=rt(t);return[n,e,o=J.has(o)?o:t]}function ot(n,o,s,r,a){if("string"==typeof o&&n){let[t,e,i]=nt(o,s,r);if(o in K){const n=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};e=n(e)}const p=et(n),f=p[i]||(p[i]={}),m=it(f,e,t?s:null);if(m)return m.oneOff=m.oneOff&&a;const g=tt(e,o.replace(Q,"")),v=t?(u=n,h=s,d=e,function e(i){var n=u.querySelectorAll(h);for(let t=i["target"];t&&t!==this;t=t.parentNode)for(const o of n)if(o===t)return at(i,{delegateTarget:t}),e.oneOff&&y.off(u,i.type,h,d),d.apply(t,[i])}):(l=n,c=e,function t(e){return at(e,{delegateTarget:l}),t.oneOff&&y.off(l,e.type,c),c.apply(l,[e])});var l,c,u,h,d;v.delegationSelector=t?s:null,v.callable=e,v.oneOff=a,v.uidEvent=g,f[g]=v,n.addEventListener(i,v,t)}}function st(t,e,i,n,o){n=it(e[i],n,o);n&&(t.removeEventListener(i,n,Boolean(o)),delete e[i][n.uidEvent])}function rt(t){return t=t.replace(Y,""),K[t]||t}const y={on(t,e,i,n){ot(t,e,i,n,!1)},one(t,e,i,n){ot(t,e,i,n,!0)},off(t,e,i,n){if("string"==typeof e&&t){var[n,o,s]=nt(e,i,n),r=s!==e,a=et(t),l=a[s]||{},c=e.startsWith(".");if(void 0===o){if(c)for(const i of Object.keys(a)){u=void 0;h=void 0;d=void 0;p=void 0;f=void 0;var u=t;var h=a;var d=i;var p=e.slice(1);var f=h[d]||{};for(const m of Object.keys(f))if(m.includes(p)){const p=f[m];st(u,h,d,p.callable,p.delegationSelector)}}for(const i of Object.keys(l)){const n=i.replace(X,"");if(!r||e.includes(n)){const e=l[i];st(t,a,s,e.callable,e.delegationSelector)}}}else Object.keys(l).length&&st(t,a,s,o,n?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=B();let o=null,s=!0,r=!0,a=!1,l=(e!==rt(e)&&n&&(o=n.Event(e,i),n(t).trigger(o),s=!o.isPropagationStopped(),r=!o.isImmediatePropagationStopped(),a=o.isDefaultPrevented()),new Event(e,{bubbles:s,cancelable:!0}));return l=at(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&o&&o.preventDefault(),l}};function at(t,e){for(const[i,n]of Object.entries(e||{}))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const u=new Map,lt={set(t,e,i){u.has(t)||u.set(t,new Map);const n=u.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>u.has(t)&&u.get(t).get(e)||null,remove(t,e){if(u.has(t)){const i=u.get(t);i.delete(e),0===i.size&&u.delete(t)}}};function ct(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function ut(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}const h={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+ut(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+ut(e))},getDataAttributes(e){if(!e)return{};const i={},t=Object.keys(e.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"));for(const n of t){let t=n.replace(/^bs/,"");t=t.charAt(0).toLowerCase()+t.slice(1,t.length),i[t]=ct(e.dataset[n])}return i},getDataAttribute:(t,e)=>ct(t.getAttribute("data-bs-"+ut(e)))};class ht{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){var i=s(e)?h.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...s(e)?h.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const o of Object.keys(e)){var i=e[o],n=t[o],n=s(n)?"element":null==n?""+n:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(i).test(n))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${n}" but expected type "${i}".`)}}}class e extends ht{constructor(t,e){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(e),lt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){lt.remove(this._element,this.constructor.DATA_KEY),y.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){V(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return lt.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.2"}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}static eventName(t){return""+t+this.EVENT_KEY}}var dt=(e,i="hide")=>{const t="click.dismiss"+e.EVENT_KEY,n=e.NAME;y.on(document,t,`[data-bs-dismiss="${n}"]`,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),a(this)||(t=o(this)||this.closest("."+n),e.getOrCreateInstance(t)[i]())})};class pt extends e{static get NAME(){return"alert"}close(){var t;y.trigger(this._element,"close.bs.alert").defaultPrevented||(this._element.classList.remove("show"),t=this._element.classList.contains("fade"),this._queueCallback(()=>this._destroyElement(),this._element,t))}_destroyElement(){this._element.remove(),y.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=pt.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}})}}dt(pt,"close"),t(pt);const ft='[data-bs-toggle="button"]';class mt extends e{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each(function(){const t=mt.getOrCreateInstance(this);"toggle"===e&&t[e]()})}}y.on(document,"click.bs.button.data-api",ft,t=>{t.preventDefault();t=t.target.closest(ft);mt.getOrCreateInstance(t).toggle()}),t(mt);const d={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){var e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>t+':not([tabindex^="-"])').join(",");return this.find(e,t).filter(t=>!a(t)&&n(t))}},gt={endCallback:null,leftCallback:null,rightCallback:null},vt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class yt extends ht{constructor(t,e){super(),(this._element=t)&&yt.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return gt}static get DefaultType(){return vt}static get NAME(){return"swipe"}dispose(){y.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),c(this._config.endCallback)}_move(t){this._deltaX=t.touches&&1<t.touches.length?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){var t=Math.abs(this._deltaX);t<=40||(t=t/this._deltaX,this._deltaX=0,t&&c(0<t?this._config.rightCallback:this._config.leftCallback))}_initEvents(){this._supportPointerEvents?(y.on(this._element,"pointerdown.bs.swipe",t=>this._start(t)),y.on(this._element,"pointerup.bs.swipe",t=>this._end(t)),this._element.classList.add("pointer-event")):(y.on(this._element,"touchstart.bs.swipe",t=>this._start(t)),y.on(this._element,"touchmove.bs.swipe",t=>this._move(t)),y.on(this._element,"touchend.bs.swipe",t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||0<navigator.maxTouchPoints}}const bt="next",p="prev",i="left",_t="right",wt="slid.bs.carousel",xt="carousel",Ct="active",Tt={ArrowLeft:_t,ArrowRight:i},Et={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},kt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class At extends e{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=d.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===xt&&this.cycle()}static get Default(){return Et}static get DefaultType(){return kt}static get NAME(){return"carousel"}next(){this._slide(bt)}nextWhenVisible(){!document.hidden&&n(this._element)&&this.next()}prev(){this._slide(p)}pause(){this._isSliding&&q(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?y.one(this._element,wt,()=>this.cycle()):this.cycle())}to(t){var e,i=this._getItems();t>i.length-1||t<0||(this._isSliding?y.one(this._element,wt,()=>this.to(t)):(e=this._getItemIndex(this._getActive()))!==t&&(e=e<t?bt:p,this._slide(e,i[t])))}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&y.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(y.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),y.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&yt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of d.find(".carousel-item img",this._element))y.on(t,"dragstart.bs.carousel",t=>t.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(i)),rightCallback:()=>this._slide(this._directionToOrder(_t)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new yt(this._element,t)}_keydown(t){var e;/input|textarea/i.test(t.target.tagName)||(e=Tt[t.key])&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=d.findOne(".active",this._indicatorsElement),i=(e.classList.remove(Ct),e.removeAttribute("aria-current"),d.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement));i&&(i.classList.add(Ct),i.setAttribute("aria-current","true"))}}_updateInterval(){const t=this._activeElement||this._getActive();var e;t&&(e=Number.parseInt(t.getAttribute("data-bs-interval"),10),this._config.interval=e||this._config.defaultInterval)}_slide(e,t=null){if(!this._isSliding){const i=this._getActive(),n=e===bt,o=t||U(this._getItems(),i,n,this._config.wrap);if(o!==i){const s=this._getItemIndex(o),r=t=>y.trigger(this._element,t,{relatedTarget:o,direction:this._orderToDirection(e),from:this._getItemIndex(i),to:s});if(!r("slide.bs.carousel").defaultPrevented&&i&&o){t=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=o;const a=n?"carousel-item-start":"carousel-item-end",l=n?"carousel-item-next":"carousel-item-prev";o.classList.add(l),W(o),i.classList.add(a),o.classList.add(a),this._queueCallback(()=>{o.classList.remove(a,l),o.classList.add(Ct),i.classList.remove(Ct,l,a),this._isSliding=!1,r(wt)},i,this._isAnimated()),t&&this.cycle()}}}}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return d.findOne(".active.carousel-item",this._element)}_getItems(){return d.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return l()?t===i?p:bt:t===i?bt:p}_orderToDirection(t){return l()?t===p?i:_t:t===p?_t:i}static jQueryInterface(e){return this.each(function(){const t=At.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)})}}y.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",function(t){const e=o(this);if(e&&e.classList.contains(xt)){t.preventDefault();const i=At.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");n?i.to(n):"next"===h.getDataAttribute(this,"slide")?i.next():i.prev(),i._maybeEnableCycle()}}),y.on(window,"load.bs.carousel.data-api",()=>{for(const t of d.find('[data-bs-ride="carousel"]'))At.getOrCreateInstance(t)}),t(At);const St="show",It="collapse",Lt="collapsing",Ot='[data-bs-toggle="collapse"]',zt={parent:null,toggle:!0},Dt={parent:"(null|element)",toggle:"boolean"};class Mt extends e{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=d.find(Ot);for(const t of i){const e=R(t),i=d.find(e).filter(t=>t===this._element);null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return zt}static get DefaultType(){return Dt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(!this._isTransitioning&&!this._isShown()){let t=[];if(!((t=this._config.parent?this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t=>t!==this._element).map(t=>Mt.getOrCreateInstance(t,{toggle:!1})):t).length&&t[0]._isTransitioning||y.trigger(this._element,"show.bs.collapse").defaultPrevented)){for(const i of t)i.hide();const i=this._getDimension();this._element.classList.remove(It),this._element.classList.add(Lt),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;var e="scroll"+(i[0].toUpperCase()+i.slice(1));this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Lt),this._element.classList.add(It,St),this._element.style[i]="",y.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[i]=this._element[e]+"px"}}}hide(){if(!this._isTransitioning&&this._isShown()&&!y.trigger(this._element,"hide.bs.collapse").defaultPrevented){const e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",W(this._element),this._element.classList.add(Lt),this._element.classList.remove(It,St);for(const e of this._triggerArray){var t=o(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Lt),this._element.classList.add(It),y.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}}_isShown(t=this._element){return t.classList.contains(St)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(this._config.parent){const t=this._getFirstLevelChildren(Ot);for(const e of t){const t=o(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}}_getFirstLevelChildren(t){const e=d.find(":scope .collapse .collapse",this._config.parent);return d.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(e){const i={};return"string"==typeof e&&/show|hide/.test(e)&&(i.toggle=!1),this.each(function(){const t=Mt.getOrCreateInstance(this,i);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}y.on(document,"click.bs.collapse.data-api",Ot,function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();var e=R(this);for(const t of d.find(e))Mt.getOrCreateInstance(t,{toggle:!1}).toggle()}),t(Mt);var A="top",S="bottom",I="right",L="left",jt="auto",O=[A,S,I,L],z="start",b="end",Pt="clippingParents",Nt="viewport",g="popper",Rt="reference",qt=O.reduce(function(t,e){return t.concat([e+"-"+z,e+"-"+b])},[]),Ft=[].concat(O,[jt]).reduce(function(t,e){return t.concat([e,e+"-"+z,e+"-"+b])},[]),Ht="beforeRead",Wt="afterRead",Bt="beforeMain",$t="afterMain",Vt="beforeWrite",Ut="afterWrite",Qt=[Ht,"read",Wt,Bt,"main",$t,Vt,"write",Ut];function v(t){return t?(t.nodeName||"").toLowerCase():null}function _(t){return null==t?window:"[object Window]"!==t.toString()?(e=t.ownerDocument)&&e.defaultView||window:t;var e}function w(t){return t instanceof _(t).Element||t instanceof Element}function x(t){return t instanceof _(t).HTMLElement||t instanceof HTMLElement}function Yt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof _(t).ShadowRoot||t instanceof ShadowRoot)}var Xt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var o=t.state;Object.keys(o.elements).forEach(function(t){var e=o.styles[t]||{},i=o.attributes[t]||{},n=o.elements[t];x(n)&&v(n)&&(Object.assign(n.style,e),Object.keys(i).forEach(function(t){var e=i[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)}))})},effect:function(t){var n=t.state,o={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,o.popper),n.styles=o,n.elements.arrow&&Object.assign(n.elements.arrow.style,o.arrow),function(){Object.keys(n.elements).forEach(function(t){var e=n.elements[t],i=n.attributes[t]||{},t=Object.keys((n.styles.hasOwnProperty(t)?n.styles:o)[t]).reduce(function(t,e){return t[e]="",t},{});x(e)&&v(e)&&(Object.assign(e.style,t),Object.keys(i).forEach(function(t){e.removeAttribute(t)}))})}},requires:["computeStyles"]};function D(t){return t.split("-")[0]}var k=Math.max,Gt=Math.min,C=Math.round;function Zt(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Kt(){return!/^((?!chrome|android).)*safari/i.test(Zt())}function T(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),o=1,s=1,e=(e&&x(t)&&(o=0<t.offsetWidth&&C(n.width)/t.offsetWidth||1,s=0<t.offsetHeight&&C(n.height)/t.offsetHeight||1),(w(t)?_(t):window).visualViewport),t=!Kt()&&i,i=(n.left+(t&&e?e.offsetLeft:0))/o,t=(n.top+(t&&e?e.offsetTop:0))/s,e=n.width/o,o=n.height/s;return{width:e,height:o,top:t,right:i+e,bottom:t+o,left:i,x:i,y:t}}function Jt(t){var e=T(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function te(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&Yt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0}while(n=n.parentNode||n.host)}return!1}function E(t){return _(t).getComputedStyle(t)}function M(t){return((w(t)?t.ownerDocument:t.document)||window.document).documentElement}function ee(t){return"html"===v(t)?t:t.assignedSlot||t.parentNode||(Yt(t)?t.host:null)||M(t)}function ie(t){return x(t)&&"fixed"!==E(t).position?t.offsetParent:null}function ne(t){for(var e,i=_(t),n=ie(t);n&&(e=n,0<=["table","td","th"].indexOf(v(e)))&&"static"===E(n).position;)n=ie(n);return(!n||"html"!==v(n)&&("body"!==v(n)||"static"!==E(n).position))&&(n||function(t){var e=/firefox/i.test(Zt());if(!/Trident/i.test(Zt())||!x(t)||"fixed"!==E(t).position){var i=ee(t);for(Yt(i)&&(i=i.host);x(i)&&["html","body"].indexOf(v(i))<0;){var n=E(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}}return null}(t))||i}function oe(t){return 0<=["top","bottom"].indexOf(t)?"x":"y"}function se(t,e,i){return k(t,Gt(e,i))}function re(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ae(i,t){return t.reduce(function(t,e){return t[e]=i,t},{})}var le={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i,n,o,s=t.state,r=t.name,t=t.options,a=s.elements.arrow,l=s.modifiersData.popperOffsets,c=D(s.placement),u=oe(c),c=0<=[L,I].indexOf(c)?"height":"width";a&&l&&(t=re("number"!=typeof(t="function"==typeof(t=t.padding)?t(Object.assign({},s.rects,{placement:s.placement})):t)?t:ae(t,O)),e=Jt(a),o="y"===u?A:L,n="y"===u?S:I,i=s.rects.reference[c]+s.rects.reference[u]-l[u]-s.rects.popper[c],l=l[u]-s.rects.reference[u],a=(a=ne(a))?"y"===u?a.clientHeight||0:a.clientWidth||0:0,o=t[o],t=a-e[c]-t[n],o=se(o,n=a/2-e[c]/2+(i/2-l/2),t),s.modifiersData[r]=((a={})[u]=o,a.centerOffset=o-n,a))},effect:function(t){var e=t.state,t=t.options.element,t=void 0===t?"[data-popper-arrow]":t;null!=t&&("string"!=typeof t||(t=e.elements.popper.querySelector(t)))&&te(e.elements.popper,t)&&(e.elements.arrow=t)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(t){return t.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function he(t){var e,i=t.popper,n=t.popperRect,o=t.placement,s=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,t=t.isFixed,h=r.x,h=void 0===h?0:h,d=r.y,d=void 0===d?0:d,p="function"==typeof u?u({x:h,y:d}):{x:h,y:d},h=p.x,d=p.y,p=r.hasOwnProperty("x"),r=r.hasOwnProperty("y"),f=L,m=A,g=window;c&&(y="clientHeight",e="clientWidth",(v=ne(i))===_(i)&&"static"!==E(v=M(i)).position&&"absolute"===a&&(y="scrollHeight",e="scrollWidth"),o!==A&&(o!==L&&o!==I||s!==b)||(m=S,d=(d-((t&&v===g&&g.visualViewport?g.visualViewport.height:v[y])-n.height))*(l?1:-1)),o!==L&&(o!==A&&o!==S||s!==b)||(f=I,h=(h-((t&&v===g&&g.visualViewport?g.visualViewport.width:v[e])-n.width))*(l?1:-1)));var v,y,i=Object.assign({position:a},c&&ue),t=!0===u?(o=(y={x:h,y:d}).y,s=window.devicePixelRatio||1,{x:C(y.x*s)/s||0,y:C(o*s)/s||0}):{x:h,y:d};return h=t.x,d=t.y,l?Object.assign({},i,((v={})[m]=r?"0":"",v[f]=p?"0":"",v.transform=(g.devicePixelRatio||1)<=1?"translate("+h+"px, "+d+"px)":"translate3d("+h+"px, "+d+"px, 0)",v)):Object.assign({},i,((e={})[m]=r?d+"px":"",e[f]=p?h+"px":"",e.transform="",e))}var de={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,t=t.options,i=t.gpuAcceleration,i=void 0===i||i,n=t.adaptive,n=void 0===n||n,t=t.roundOffsets,t=void 0===t||t,i={placement:D(e.placement),variation:ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,he(Object.assign({},i,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:n,roundOffsets:t})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,he(Object.assign({},i,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:t})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},pe={passive:!0},fe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,t=t.options,n=t.scroll,o=void 0===n||n,n=t.resize,s=void 0===n||n,r=_(e.elements.popper),a=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&a.forEach(function(t){t.addEventListener("scroll",i.update,pe)}),s&&r.addEventListener("resize",i.update,pe),function(){o&&a.forEach(function(t){t.removeEventListener("scroll",i.update,pe)}),s&&r.removeEventListener("resize",i.update,pe)}},data:{}},me={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(t){return t.replace(/left|right|bottom|top/g,function(t){return me[t]})}var ve={start:"end",end:"start"};function ye(t){return t.replace(/start|end/g,function(t){return ve[t]})}function be(t){t=_(t);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _e(t){return T(M(t)).left+be(t).scrollLeft}function we(t){var t=E(t),e=t.overflow,i=t.overflowX,t=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+t+i)}function xe(t,e){void 0===e&&(e=[]);var i=function t(e){return 0<=["html","body","#document"].indexOf(v(e))?e.ownerDocument.body:x(e)&&we(e)?e:t(ee(e))}(t),t=i===(null==(t=t.ownerDocument)?void 0:t.body),n=_(i),n=t?[n].concat(n.visualViewport||[],we(i)?i:[]):i,i=e.concat(n);return t?i:i.concat(xe(ee(n)))}function Ce(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Te(t,e,i){return e===Nt?Ce((o=i,r=_(n=t),a=M(n),r=r.visualViewport,l=a.clientWidth,a=a.clientHeight,u=c=0,r&&(l=r.width,a=r.height,((s=Kt())||!s&&"fixed"===o)&&(c=r.offsetLeft,u=r.offsetTop)),{width:l,height:a,x:c+_e(n),y:u})):w(e)?((o=T(s=e,!1,"fixed"===i)).top=o.top+s.clientTop,o.left=o.left+s.clientLeft,o.bottom=o.top+s.clientHeight,o.right=o.left+s.clientWidth,o.width=s.clientWidth,o.height=s.clientHeight,o.x=o.left,o.y=o.top,o):Ce((r=M(t),l=M(r),a=be(r),c=null==(c=r.ownerDocument)?void 0:c.body,n=k(l.scrollWidth,l.clientWidth,c?c.scrollWidth:0,c?c.clientWidth:0),u=k(l.scrollHeight,l.clientHeight,c?c.scrollHeight:0,c?c.clientHeight:0),r=-a.scrollLeft+_e(r),a=-a.scrollTop,"rtl"===E(c||l).direction&&(r+=k(l.clientWidth,c?c.clientWidth:0)-n),{width:n,height:u,x:r,y:a}));var n,o,s,r,a,l,c,u}function Ee(t){var e,i=t.reference,n=t.element,t=t.placement,o=t?D(t):null,t=t?ce(t):null,s=i.x+i.width/2-n.width/2,r=i.y+i.height/2-n.height/2;switch(o){case A:e={x:s,y:i.y-n.height};break;case S:e={x:s,y:i.y+i.height};break;case I:e={x:i.x+i.width,y:r};break;case L:e={x:i.x-n.width,y:r};break;default:e={x:i.x,y:i.y}}var a=o?oe(o):null;if(null!=a){var l="y"===a?"height":"width";switch(t){case z:e[a]=e[a]-(i[l]/2-n[l]/2);break;case b:e[a]=e[a]+(i[l]/2-n[l]/2)}}return e}function ke(t,e){var i,n,o,s,r,a,e=e=void 0===e?{}:e,l=e.placement,l=void 0===l?t.placement:l,c=e.strategy,c=void 0===c?t.strategy:c,u=e.boundary,u=void 0===u?Pt:u,h=e.rootBoundary,h=void 0===h?Nt:h,d=e.elementContext,d=void 0===d?g:d,p=e.altBoundary,p=void 0!==p&&p,e=e.padding,e=void 0===e?0:e,e=re("number"!=typeof e?e:ae(e,O)),f=t.rects.popper,p=t.elements[p?d===g?Rt:g:d],c=(i=w(p)?p:p.contextElement||M(t.elements.popper),p=h,n=c,s="clippingParents"===(h=u)?(r=xe(ee(s=i)),w(o=0<=["absolute","fixed"].indexOf(E(s).position)&&x(s)?ne(s):s)?r.filter(function(t){return w(t)&&te(t,o)&&"body"!==v(t)}):[]):[].concat(h),r=[].concat(s,[p]),h=r[0],(p=r.reduce(function(t,e){e=Te(i,e,n);return t.top=k(e.top,t.top),t.right=Gt(e.right,t.right),t.bottom=Gt(e.bottom,t.bottom),t.left=k(e.left,t.left),t},Te(i,h,n))).width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p),u=T(t.elements.reference),h=Ee({reference:u,element:f,strategy:"absolute",placement:l}),p=Ce(Object.assign({},f,h)),f=d===g?p:u,m={top:c.top-f.top+e.top,bottom:f.bottom-c.bottom+e.bottom,left:c.left-f.left+e.left,right:f.right-c.right+e.right},h=t.modifiersData.offset;return d===g&&h&&(a=h[l],Object.keys(m).forEach(function(t){var e=0<=[I,S].indexOf(t)?1:-1,i=0<=[A,S].indexOf(t)?"y":"x";m[t]+=a[i]*e})),m}var Ae={name:"flip",enabled:!0,phase:"main",fn:function(t){var h=t.state,e=t.options,t=t.name;if(!h.modifiersData[t]._skip){for(var i=e.mainAxis,n=void 0===i||i,i=e.altAxis,o=void 0===i||i,i=e.fallbackPlacements,d=e.padding,p=e.boundary,f=e.rootBoundary,s=e.altBoundary,r=e.flipVariations,m=void 0===r||r,g=e.allowedAutoPlacements,r=h.options.placement,e=D(r),i=i||(e!==r&&m?function(t){if(D(t)===jt)return[];var e=ge(t);return[ye(t),e,ye(e)]}(r):[ge(r)]),a=[r].concat(i).reduce(function(t,e){return t.concat(D(e)===jt?(i=h,n=(t=t=void 0===(t={placement:e,boundary:p,rootBoundary:f,padding:d,flipVariations:m,allowedAutoPlacements:g})?{}:t).placement,o=t.boundary,s=t.rootBoundary,r=t.padding,a=t.flipVariations,l=void 0===(t=t.allowedAutoPlacements)?Ft:t,c=ce(n),t=c?a?qt:qt.filter(function(t){return ce(t)===c}):O,u=(n=0===(n=t.filter(function(t){return 0<=l.indexOf(t)})).length?t:n).reduce(function(t,e){return t[e]=ke(i,{placement:e,boundary:o,rootBoundary:s,padding:r})[D(e)],t},{}),Object.keys(u).sort(function(t,e){return u[t]-u[e]})):e);var i,n,o,s,r,a,l,c,u},[]),l=h.rects.reference,c=h.rects.popper,u=new Map,v=!0,y=a[0],b=0;b<a.length;b++){var _=a[b],w=D(_),x=ce(_)===z,C=0<=[A,S].indexOf(w),T=C?"width":"height",E=ke(h,{placement:_,boundary:p,rootBoundary:f,altBoundary:s,padding:d}),C=C?x?I:L:x?S:A,x=(l[T]>c[T]&&(C=ge(C)),ge(C)),T=[];if(n&&T.push(E[w]<=0),o&&T.push(E[C]<=0,E[x]<=0),T.every(function(t){return t})){y=_,v=!1;break}u.set(_,T)}if(v)for(var k=m?3:1;0<k&&"break"!==function(e){var t=a.find(function(t){t=u.get(t);if(t)return t.slice(0,e).every(function(t){return t})});if(t)return y=t,"break"}(k);k--);h.placement!==y&&(h.modifiersData[t]._skip=!0,h.placement=y,h.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Se(t,e,i){return{top:t.top-e.height-(i=void 0===i?{x:0,y:0}:i).y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Ie(e){return[A,I,S,L].some(function(t){return 0<=e[t]})}var Le={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,t=t.name,i=e.rects.reference,n=e.rects.popper,o=e.modifiersData.preventOverflow,s=ke(e,{elementContext:"reference"}),r=ke(e,{altBoundary:!0}),s=Se(s,i),i=Se(r,n,o),r=Ie(s),n=Ie(i);e.modifiersData[t]={referenceClippingOffsets:s,popperEscapeOffsets:i,isReferenceHidden:r,hasPopperEscaped:n},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":r,"data-popper-escaped":n})}},Oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var r=t.state,e=t.options,t=t.name,e=e.offset,a=void 0===e?[0,0]:e,e=Ft.reduce(function(t,e){return t[e]=(e=e,i=r.rects,n=a,o=D(e),s=0<=[L,A].indexOf(o)?-1:1,i="function"==typeof n?n(Object.assign({},i,{placement:e})):n,e=i[0]||0,n=(i[1]||0)*s,0<=[L,I].indexOf(o)?{x:n,y:e}:{x:e,y:n}),t;var i,n,o,s},{}),i=e[r.placement],n=i.x,i=i.y;null!=r.modifiersData.popperOffsets&&(r.modifiersData.popperOffsets.x+=n,r.modifiersData.popperOffsets.y+=i),r.modifiersData[t]=e}},ze={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,t=t.name;e.modifiersData[t]=Ee({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},De={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e,i,n,o,s,r,a,l,c,u=t.state,h=t.options,t=t.name,d=h.mainAxis,d=void 0===d||d,p=h.altAxis,p=void 0!==p&&p,f=h.boundary,m=h.rootBoundary,g=h.altBoundary,v=h.padding,y=h.tether,y=void 0===y||y,h=h.tetherOffset,h=void 0===h?0:h,f=ke(u,{boundary:f,rootBoundary:m,padding:v,altBoundary:g}),m=D(u.placement),v=ce(u.placement),g=!v,b=oe(m),_="x"===b?"y":"x",w=u.modifiersData.popperOffsets,x=u.rects.reference,C=u.rects.popper,h="function"==typeof h?h(Object.assign({},u.rects,{placement:u.placement})):h,h="number"==typeof h?{mainAxis:h,altAxis:h}:Object.assign({mainAxis:0,altAxis:0},h),T=u.modifiersData.offset?u.modifiersData.offset[u.placement]:null,E={x:0,y:0};w&&(d&&(d="y"===b?"height":"width",r=(a=w[b])+f[i="y"===b?A:L],l=a-f[c="y"===b?S:I],e=y?-C[d]/2:0,o=(v===z?x:C)[d],v=v===z?-C[d]:-x[d],s=u.elements.arrow,s=y&&s?Jt(s):{width:0,height:0},i=(n=u.modifiersData["arrow#persistent"]?u.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0})[i],n=n[c],c=se(0,x[d],s[d]),s=g?x[d]/2-e-c-i-h.mainAxis:o-c-i-h.mainAxis,o=g?-x[d]/2+e+c+n+h.mainAxis:v+c+n+h.mainAxis,g=(i=u.elements.arrow&&ne(u.elements.arrow))?"y"===b?i.clientTop||0:i.clientLeft||0:0,v=a+o-(e=null!=(d=null==T?void 0:T[b])?d:0),c=se(y?Gt(r,a+s-e-g):r,a,y?k(l,v):l),w[b]=c,E[b]=c-a),p&&(n="y"==_?"height":"width",o=(i=w[_])+f["x"===b?A:L],d=i-f["x"===b?S:I],s=-1!==[A,L].indexOf(m),g=null!=(e=null==T?void 0:T[_])?e:0,r=s?o:i-x[n]-C[n]-g+h.altAxis,v=s?i+x[n]+C[n]-g-h.altAxis:d,a=y&&s?(c=se(r,i,l=v),l<c?l:c):se(y?r:o,i,y?v:d),w[_]=a,E[_]=a-i),u.modifiersData[t]=E)},requiresIfExists:["offset"]};function Me(t){var i=new Map,n=new Set,o=[];return t.forEach(function(t){i.set(t.name,t)}),t.forEach(function(t){n.has(t.name)||function e(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){n.has(t)||(t=i.get(t))&&e(t)}),o.push(t)}(t)}),o}var je={placement:"bottom",modifiers:[],strategy:"absolute"};function Pe(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some(function(t){return!(t&&"function"==typeof t.getBoundingClientRect)})}function Ne(t){var t=t=void 0===t?{}:t,e=t.defaultModifiers,l=void 0===e?[]:e,e=t.defaultOptions,c=void 0===e?je:e;return function(n,o,e){void 0===e&&(e=c);var i,s,p={placement:"bottom",orderedModifiers:[],options:Object.assign({},je,c),modifiersData:{},elements:{reference:n,popper:o},attributes:{},styles:{}},r=[],f=!1,m={state:p,setOptions:function(t){t="function"==typeof t?t(p.options):t;a(),p.options=Object.assign({},c,p.options,t),p.scrollParents={reference:w(n)?xe(n):n.contextElement?xe(n.contextElement):[],popper:xe(o)};t=[].concat(l,p.options.modifiers),e=t.reduce(function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t},{}),i=Me(Object.keys(e).map(function(t){return e[t]}));var e,i,t=Qt.reduce(function(t,e){return t.concat(i.filter(function(t){return t.phase===e}))},[]);return p.orderedModifiers=t.filter(function(t){return t.enabled}),p.orderedModifiers.forEach(function(t){var e=t.name,i=t.options,t=t.effect;"function"==typeof t&&(t=t({state:p,name:e,instance:m,options:void 0===i?{}:i}),r.push(t||function(){}))}),m.update()},forceUpdate:function(){if(!f){var t=p.elements,e=t.reference,t=t.popper;if(Pe(e,t)){p.rects={reference:(e=e,r=ne(t),void 0===(a="fixed"===p.options.strategy)&&(a=!1),l=x(r),c=x(r)&&(h=(c=r).getBoundingClientRect(),u=C(h.width)/c.offsetWidth||1,h=C(h.height)/c.offsetHeight||1,1!==u||1!==h),u=M(r),h=T(e,c,a),e={scrollLeft:0,scrollTop:0},d={x:0,y:0},!l&&a||("body"===v(r)&&!we(u)||(e=(l=r)!==_(l)&&x(l)?{scrollLeft:l.scrollLeft,scrollTop:l.scrollTop}:be(l)),x(r)?((d=T(r,!0)).x+=r.clientLeft,d.y+=r.clientTop):u&&(d.x=_e(u))),{x:h.left+e.scrollLeft-d.x,y:h.top+e.scrollTop-d.y,width:h.width,height:h.height}),popper:Jt(t)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(t){return p.modifiersData[t.name]=Object.assign({},t.data)});for(var i,n,o,s=0;s<p.orderedModifiers.length;s++)!0!==p.reset?(i=(o=p.orderedModifiers[s]).fn,n=o.options,o=o.name,"function"==typeof i&&(p=i({state:p,options:void 0===n?{}:n,name:o,instance:m})||p)):(p.reset=!1,s=-1)}}var r,a,l,c,u,h,d},update:(i=function(){return new Promise(function(t){m.forceUpdate(),t(p)})},function(){return s=s||new Promise(function(t){Promise.resolve().then(function(){s=void 0,t(i())})})}),destroy:function(){a(),f=!0}};return Pe(n,o)&&m.setOptions(e).then(function(t){!f&&e.onFirstUpdate&&e.onFirstUpdate(t)}),m;function a(){r.forEach(function(t){return t()}),r=[]}}}var Re=Ne(),qe=Ne({defaultModifiers:[fe,ze,de,Xt]}),Fe=Ne({defaultModifiers:[fe,ze,de,Xt,Oe,Ae,De,le,Le]});const He=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Ne,detectOverflow:ke,createPopperBase:Re,createPopper:Fe,createPopperLite:qe,top:A,bottom:S,right:I,left:L,auto:jt,basePlacements:O,start:z,end:b,clippingParents:Pt,viewport:Nt,popper:g,reference:Rt,variationPlacements:qt,placements:Ft,beforeRead:Ht,read:"read",afterRead:Wt,beforeMain:Bt,main:"main",afterMain:$t,beforeWrite:Vt,write:"write",afterWrite:Ut,modifierPhases:Qt,applyStyles:Xt,arrow:le,computeStyles:de,eventListeners:fe,flip:Ae,hide:Le,offset:Oe,popperOffsets:ze,preventOverflow:De},Symbol.toStringTag,{value:"Module"})),We="dropdown",Be="ArrowDown",$e="click.bs.dropdown.data-api",Ve="keydown.bs.dropdown.data-api",Ue="show",f='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Qe=(f,".dropdown-menu"),Ye=l()?"top-end":"top-start",Xe=l()?"top-start":"top-end",Ge=l()?"bottom-end":"bottom-start",Ze=l()?"bottom-start":"bottom-end",Ke=l()?"left-start":"right-start",Je=l()?"right-start":"left-start",ti={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ei={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class m extends e{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=d.next(this._element,Qe)[0]||d.prev(this._element,Qe)[0]||d.findOne(Qe,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ti}static get DefaultType(){return ei}static get NAME(){return We}toggle(){return this._isShown()?this.hide():this.show()}show(){if(!a(this._element)&&!this._isShown()){const t={relatedTarget:this._element};if(!y.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))y.on(t,"mouseover",H);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ue),this._element.classList.add(Ue),y.trigger(this._element,"shown.bs.dropdown",t)}}}hide(){var t;!a(this._element)&&this._isShown()&&(t={relatedTarget:this._element},this._completeHide(t))}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!y.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))y.off(t,"mouseover",H);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ue),this._element.classList.remove(Ue),this._element.setAttribute("aria-expanded","false"),h.removeDataAttribute(this._menu,"popper"),y.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"!=typeof(t=super._getConfig(t)).reference||s(t.reference)||"function"==typeof t.reference.getBoundingClientRect)return t;throw new TypeError(We.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')}_createPopper(){if(void 0===He)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:s(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);var e=this._getPopperConfig();this._popper=Fe(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ue)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Ke;if(t.classList.contains("dropstart"))return Je;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";var e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?Xe:Ye:e?Ze:Ge}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const e=this._config["offset"];return"string"==typeof e?e.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return!this._inNavbar&&"static"!==this._config.display||(h.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=d.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(t=>n(t));i.length&&U(i,e,t===Be,!i.includes(e)).focus()}static jQueryInterface(e){return this.each(function(){const t=m.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(t){if(2!==t.button&&("keyup"!==t.type||"Tab"===t.key)){const e=d.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show');for(const i of e){const e=m.getInstance(i);if(e&&!1!==e._config.autoClose){const n=t.composedPath(),o=n.includes(e._menu);if(!(n.includes(e._element)||"inside"===e._config.autoClose&&!o||"outside"===e._config.autoClose&&o||e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))){const s={relatedTarget:e._element};"click"===t.type&&(s.clickEvent=t),e._completeHide(s)}}}}}static dataApiKeydownHandler(t){var e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=["ArrowUp",Be].includes(t.key);if((n||i)&&(!e||i)){t.preventDefault();const o=this.matches(f)?this:d.prev(this,f)[0]||d.next(this,f)[0]||d.findOne(f,t.delegateTarget.parentNode),s=m.getOrCreateInstance(o);if(n)return t.stopPropagation(),s.show(),void s._selectMenuItem(t);s._isShown()&&(t.stopPropagation(),s.hide(),o.focus())}}}y.on(document,Ve,f,m.dataApiKeydownHandler),y.on(document,Ve,Qe,m.dataApiKeydownHandler),y.on(document,$e,m.clearMenus),y.on(document,"keyup.bs.dropdown.data-api",m.clearMenus),y.on(document,$e,f,function(t){t.preventDefault(),m.getOrCreateInstance(this).toggle()}),t(m);const ii=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ni=".sticky-top",oi="padding-right",si="margin-right";class ri{constructor(){this._element=document.body}getWidth(){var t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,oi,t=>t+e),this._setElementAttributes(ii,oi,t=>t+e),this._setElementAttributes(ni,si,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,oi),this._resetElementAttributes(ii,oi),this._resetElementAttributes(ni,si)}isOverflowing(){return 0<this.getWidth()}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,i,n){const o=this.getWidth();this._applyManipulationCallback(t,t=>{var e;t!==this._element&&window.innerWidth>t.clientWidth+o||(this._saveInitialAttribute(t,i),e=window.getComputedStyle(t).getPropertyValue(i),t.style.setProperty(i,n(Number.parseFloat(e))+"px"))})}_saveInitialAttribute(t,e){var i=t.style.getPropertyValue(e);i&&h.setDataAttribute(t,e,i)}_resetElementAttributes(t,i){this._applyManipulationCallback(t,t=>{var e=h.getDataAttribute(t,i);null!==e?(h.removeDataAttribute(t,i),t.style.setProperty(i,e)):t.style.removeProperty(i)})}_applyManipulationCallback(t,e){if(s(t))e(t);else for(const i of d.find(t,this._element))e(i)}}const ai="mousedown.bs.backdrop",li={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},ci={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ui extends ht{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return li}static get DefaultType(){return ci}static get NAME(){return"backdrop"}show(t){if(this._config.isVisible){this._append();const e=this._getElement();this._config.isAnimated&&W(e),e.classList.add("show"),this._emulateAnimation(()=>{c(t)})}else c(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),c(t)})):c(t)}dispose(){this._isAppended&&(y.off(this._element,ai),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){var t;this._isAppended||(t=this._getElement(),this._config.rootElement.append(t),y.on(t,ai,()=>{c(this._config.clickCallback)}),this._isAppended=!0)}_emulateAnimation(t){V(t,this._getElement(),this._config.isAnimated)}}const hi=".bs.focustrap",di="backward",pi={autofocus:!0,trapElement:null},fi={autofocus:"boolean",trapElement:"element"};class mi extends ht{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return pi}static get DefaultType(){return fi}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),y.off(document,hi),y.on(document,"focusin.bs.focustrap",t=>this._handleFocusin(t)),y.on(document,"keydown.tab.bs.focustrap",t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,y.off(document,hi))}_handleFocusin(t){const e=this._config["trapElement"];if(t.target!==document&&t.target!==e&&!e.contains(t.target)){const i=d.focusableChildren(e);(0===i.length?e:this._lastTabNavDirection===di?i[i.length-1]:i[0]).focus()}}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?di:"forward")}}const gi="hidden.bs.modal",vi="show.bs.modal",yi="modal-open",bi="modal-static",_i={backdrop:!0,focus:!0,keyboard:!0},wi={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class xi extends e{constructor(t,e){super(t,e),this._dialog=d.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ri,this._addEventListeners()}static get Default(){return _i}static get DefaultType(){return wi}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||y.trigger(this._element,vi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(yi),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||y.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove("show"),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])y.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new mi({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=d.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),W(this._element),this._element.classList.add("show"),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,y.trigger(this._element,"shown.bs.modal",{relatedTarget:t})},this._dialog,this._isAnimated())}_addEventListeners(){y.on(this._element,"keydown.dismiss.bs.modal",t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),y.on(window,"resize.bs.modal",()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),y.on(this._element,"mousedown.dismiss.bs.modal",e=>{y.one(this._element,"click.dismiss.bs.modal",t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(yi),this._resetAdjustments(),this._scrollBar.reset(),y.trigger(this._element,gi)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(!y.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(bi)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(bi),this._queueCallback(()=>{this._element.classList.remove(bi),this._queueCallback(()=>{this._element.style.overflowY=e},this._dialog)},this._dialog),this._element.focus())}}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=0<e;if(i&&!t){const t=l()?"paddingLeft":"paddingRight";this._element.style[t]=e+"px"}if(!i&&t){const t=l()?"paddingRight":"paddingLeft";this._element.style[t]=e+"px"}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,i){return this.each(function(){const t=xi.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](i)}})}}y.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(t){const e=o(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),y.one(e,vi,t=>{t.defaultPrevented||y.one(e,gi,()=>{n(this)&&this.focus()})});t=d.findOne(".modal.show");t&&xi.getInstance(t).hide(),xi.getOrCreateInstance(e).toggle(this)}),dt(xi),t(xi);const Ci="showing",Ti=".offcanvas.show",Ei="hidePrevented.bs.offcanvas",ki="hidden.bs.offcanvas",Ai={backdrop:!0,keyboard:!0,scroll:!1},Si={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class j extends e{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ai}static get DefaultType(){return Si}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||y.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new ri).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ci),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add("show"),this._element.classList.remove(Ci),y.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})},this._element,!0))}hide(){!this._isShown||y.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add("hiding"),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove("show","hiding"),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new ri).reset(),y.trigger(this._element,ki)},this._element,!0))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){var t=Boolean(this._config.backdrop);return new ui({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():y.trigger(this._element,Ei)}:null})}_initializeFocusTrap(){return new mi({trapElement:this._element})}_addEventListeners(){y.on(this._element,"keydown.dismiss.bs.offcanvas",t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():y.trigger(this._element,Ei))})}static jQueryInterface(e){return this.each(function(){const t=j.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}})}}y.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(t){var e=o(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),a(this)||(y.one(e,ki,()=>{n(this)&&this.focus()}),(t=d.findOne(Ti))&&t!==e&&j.getInstance(t).hide(),j.getOrCreateInstance(e).toggle(this))}),y.on(window,"load.bs.offcanvas.data-api",()=>{for(const t of d.find(Ti))j.getOrCreateInstance(t).show()}),y.on(window,"resize.bs.offcanvas",()=>{for(const t of d.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&j.getOrCreateInstance(t).hide()}),dt(j),t(j);const Ii=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Li=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Oi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,zi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Di={allowList:zi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Mi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ji={entry:"(string|element|function|null)",selector:"(string|element)"};class Pi extends ht{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Di}static get DefaultType(){return Mi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return 0<this.getContent().length}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(var[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},ji)}_setContent(t,e,i){const n=d.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?s(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){if(this._config.sanitize){var e=t,i=this._config.allowList,n=this._config.sanitizeFn;if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const o=(new window.DOMParser).parseFromString(e,"text/html"),s=[].concat(...o.body.querySelectorAll("*"));for(const e of s){const n=e.nodeName.toLowerCase();if(Object.keys(i).includes(n)){const o=[].concat(...e.attributes),s=[].concat(i["*"]||[],i[n]||[]);for(const i of o)((t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Ii.has(i)||Boolean(Li.test(t.nodeValue)||Oi.test(t.nodeValue)):e.filter(t=>t instanceof RegExp).some(t=>t.test(i))})(i,s)||e.removeAttribute(i.nodeName)}else e.remove()}return o.body.innerHTML}return t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ni=new Set(["sanitize","allowList","sanitizeFn"]),Ri="fade",qi="show",Fi="hide.bs.modal",Hi="hover",Wi={AUTO:"auto",TOP:"top",RIGHT:l()?"left":"right",BOTTOM:"bottom",LEFT:l()?"right":"left"},Bi={allowList:zi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},$i={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Vi extends e{constructor(t,e){if(void 0===He)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Bi}static get DefaultType(){return $i}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),y.off(this._element.closest(".modal"),Fi,this._hideModalHandler),this.tip&&this.tip.remove(),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(this._isWithContent()&&this._isEnabled){const t=y.trigger(this._element,this.constructor.eventName("show")),e=(F(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(!t.defaultPrevented&&e){this.tip&&(this.tip.remove(),this.tip=null);const i=this._getTipElement(),n=(this._element.setAttribute("aria-describedby",i.getAttribute("id")),this._config)["container"];if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),y.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._popper=this._createPopper(i),i.classList.add(qi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))y.on(t,"mouseover",H);this._queueCallback(()=>{y.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}}}hide(){if(this._isShown()&&!y.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){const t=this._getTipElement();if(t.classList.remove(qi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))y.off(t,"mouseover",H);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),y.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ri,qi),e.classList.add(`bs-${this.constructor.NAME}-auto`);t=(t=>{for(;t+=Math.floor(1e6*Math.random()),document.getElementById(t););return t})(this.constructor.NAME).toString();return e.setAttribute("id",t),this._isAnimated()&&e.classList.add(Ri),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Pi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ri)}_isShown(){return this.tip&&this.tip.classList.contains(qi)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=Wi[e.toUpperCase()];return Fe(this._element,t,this._getPopperConfig(i))}_getOffset(){const e=this._config["offset"];return"string"==typeof e?e.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){t={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)y.on(this._element,this.constructor.eventName("click"),this._config.selector,t=>{this._initializeOnDelegatedTarget(t).toggle()});else if("manual"!==e){const t=e===Hi?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===Hi?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");y.on(this._element,t,this._config.selector,t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?"focus":Hi]=!0,e._enter()}),y.on(this._element,i,this._config.selector,t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?"focus":Hi]=e._element.contains(t.relatedTarget),e._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},y.on(this._element.closest(".modal"),Fi,this._hideModalHandler)}_fixTitle(){var t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=h.getDataAttributes(this._element);for(const t of Object.keys(e))Ni.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each(function(){const t=Vi.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}t(Vi);const Ui={...Vi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Qi={...Vi.DefaultType,content:"(null|string|element|function)"};class Yi extends Vi{static get Default(){return Ui}static get DefaultType(){return Qi}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=Yi.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}t(Yi);const Xi="click.bs.scrollspy",Gi="active",Zi={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ki={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ji extends e{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Zi}static get DefaultType(){return Ki}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?t.offset+"px 0px -30%":t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map(t=>Number.parseFloat(t))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(y.off(this._config.target,Xi),y.on(this._config.target,Xi,"[href]",t=>{var e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;i.scrollTo?i.scrollTo({top:n,behavior:"smooth"}):i.scrollTop=n}}))}_getNewObserver(){var t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),t)}_observerCallback(t){const e=t=>this._targetLinks.get("#"+t.target.id),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,o=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const s of t)if(s.isIntersecting){const t=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&t){if(i(s),!n)return}else o||t||i(s)}else this._activeTarget=null,this._clearActiveClass(e(s))}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=d.find("[href]",this._config.target);for(const e of t)if(e.hash&&!a(e)){const t=d.findOne(e.hash,this._element);n(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),(this._activeTarget=t).classList.add(Gi),this._activateParents(t),y.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))d.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Gi);else for(const e of d.parents(t,".nav, .list-group"))for(const t of d.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(Gi)}_clearActiveClass(t){t.classList.remove(Gi);var e=d.find("[href].active",t);for(const t of e)t.classList.remove(Gi)}static jQueryInterface(e){return this.each(function(){const t=Ji.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}})}}y.on(window,"load.bs.scrollspy.data-api",()=>{for(const t of d.find('[data-bs-spy="scroll"]'))Ji.getOrCreateInstance(t)}),t(Ji);const tn="ArrowRight",en="ArrowDown",nn="active",on="show",sn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',rn='.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), '+sn;class an extends e{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),y.on(this._element,"keydown.bs.tab",t=>this._keydown(t)))}static get NAME(){return"tab"}show(){var t,e,i=this._element;this._elemIsActive(i)||(e=(t=this._getActiveElem())?y.trigger(t,"hide.bs.tab",{relatedTarget:i}):null,y.trigger(i,"show.bs.tab",{relatedTarget:t}).defaultPrevented||e&&e.defaultPrevented||(this._deactivate(t,i),this._activate(i,t)))}_activate(t,e){t&&(t.classList.add(nn),this._activate(o(t)),this._queueCallback(()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),y.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(on)},t,t.classList.contains("fade")))}_deactivate(t,e){t&&(t.classList.remove(nn),t.blur(),this._deactivate(o(t)),this._queueCallback(()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),y.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(on)},t,t.classList.contains("fade")))}_keydown(t){if(["ArrowLeft",tn,"ArrowUp",en].includes(t.key)){t.stopPropagation(),t.preventDefault();const e=[tn,en].includes(t.key),i=U(this._getChildren().filter(t=>!a(t)),t.target,e,!0);i&&(i.focus({preventScroll:!0}),an.getOrCreateInstance(i).show())}}_getChildren(){return d.find(rn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);var e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){var e=o(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby","#"+t.id))}_toggleDropDown(t,n){const o=this._getOuterElement(t);o.classList.contains("dropdown")&&((t=(t,e)=>{const i=d.findOne(t,o);i&&i.classList.toggle(e,n)})(".dropdown-toggle",nn),t(".dropdown-menu",on),o.setAttribute("aria-expanded",n))}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(nn)}_getInnerElement(t){return t.matches(rn)?t:d.findOne(rn,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(e){return this.each(function(){const t=an.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}})}}y.on(document,"click.bs.tab",sn,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),a(this)||an.getOrCreateInstance(this).show()}),y.on(window,"load.bs.tab",()=>{for(const t of d.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))an.getOrCreateInstance(t)}),t(an);const ln="show",cn="showing",un={animation:"boolean",autohide:"boolean",delay:"number"},hn={animation:!0,autohide:!0,delay:5e3};class dn extends e{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return hn}static get DefaultType(){return un}static get NAME(){return"toast"}show(){y.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),W(this._element),this._element.classList.add(ln,cn),this._queueCallback(()=>{this._element.classList.remove(cn),y.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){!this.isShown()||y.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(cn),this._queueCallback(()=>{this._element.classList.add("hide"),this._element.classList.remove(cn,ln),y.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ln),super.dispose()}isShown(){return this._element.classList.contains(ln)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}e?this._clearTimeout():(t=t.relatedTarget,this._element===t||this._element.contains(t)||this._maybeScheduleHide())}_setListeners(){y.on(this._element,"mouseover.bs.toast",t=>this._onInteraction(t,!0)),y.on(this._element,"mouseout.bs.toast",t=>this._onInteraction(t,!1)),y.on(this._element,"focusin.bs.toast",t=>this._onInteraction(t,!0)),y.on(this._element,"focusout.bs.toast",t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=dn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}})}}return dt(dn),t(dn),{Alert:pt,Button:mt,Carousel:At,Collapse:Mt,Dropdown:m,Modal:xi,Offcanvas:j,Popover:Yi,ScrollSpy:Ji,Tab:an,Toast:dn,Tooltip:Vi}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(jQuery)}(function(h){var i=/\+/g;function d(t){return f.raw?t:encodeURIComponent(t)}function p(t,e){t=f.raw?t:function(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return t=decodeURIComponent(t.replace(i," ")),f.json?JSON.parse(t):t}catch(t){}}(t);return h.isFunction(e)?e(t):t}var f=h.cookie=function(t,e,i){var n,o;if(void 0!==e&&!h.isFunction(e))return"number"==typeof(i=h.extend({},f.defaults,i)).expires&&(n=i.expires,(o=i.expires=new Date).setTime(+o+864e5*n)),document.cookie=[d(t),"=",(o=e,d(f.json?JSON.stringify(o):String(o))),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("");for(var s=t?void 0:{},r=document.cookie?document.cookie.split("; "):[],a=0,l=r.length;a<l;a++){var c=r[a].split("="),u=(u=c.shift(),f.raw?u:decodeURIComponent(u)),c=c.join("=");if(t&&t===u){s=p(c,e);break}t||void 0===(c=p(c))||(s[u]=c)}return s};f.defaults={},h.removeCookie=function(t,e){return void 0!==h.cookie(t)&&(h.cookie(t,"",h.extend({},e,{expires:-1})),!h.cookie(t))}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(u){u.extend(u.fn,{validate:function(t){var n;{if(this.length)return(n=u.data(this[0],"validator"))||(this.attr("novalidate","novalidate"),n=new u.validator(t,this[0]),u.data(this[0],"validator",n),n.settings.onsubmit&&(this.on("click.validate",":submit",function(t){n.submitButton=t.currentTarget,u(this).hasClass("cancel")&&(n.cancelSubmit=!0),void 0!==u(this).attr("formnovalidate")&&(n.cancelSubmit=!0)}),this.on("submit.validate",function(i){function t(){var t,e;return n.submitButton&&(n.settings.submitHandler||n.formSubmitted)&&(t=u("<input type='hidden'/>").attr("name",n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)),!(n.settings.submitHandler&&!n.settings.debug)||(e=n.settings.submitHandler.call(n,n.currentForm,i),t&&t.remove(),void 0!==e&&e)}return n.settings.debug&&i.preventDefault(),n.cancelSubmit?(n.cancelSubmit=!1,t()):n.form()?n.pendingRequest?!(n.formSubmitted=!0):t():(n.focusInvalid(),!1)})),n);t&&t.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")}},valid:function(){var t,e,i;return u(this[0]).is("form")?t=this.validate().form():(i=[],t=!0,e=u(this[0].form).validate(),this.each(function(){(t=e.element(this)&&t)||(i=i.concat(e.errorList))}),e.errorList=i),t},rules:function(t,e){var i,n,o,s,r,a=this[0],l=void 0!==this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=a&&(!a.form&&l&&(a.form=this.closest("form")[0],a.name=this.attr("name")),null!=a.form)){if(t)switch(i=u.data(a.form,"validator").settings,n=i.rules,o=u.validator.staticRules(a),t){case"add":u.extend(o,u.validator.normalizeRule(e)),delete o.messages,n[a.name]=o,e.messages&&(i.messages[a.name]=u.extend(i.messages[a.name],e.messages));break;case"remove":return e?(r={},u.each(e.split(/\s/),function(t,e){r[e]=o[e],delete o[e]}),r):(delete n[a.name],o)}return(l=u.validator.normalizeRules(u.extend({},u.validator.classRules(a),u.validator.attributeRules(a),u.validator.dataRules(a),u.validator.staticRules(a)),a)).required&&(s=l.required,delete l.required,l=u.extend({required:s},l)),l.remote&&(s=l.remote,delete l.remote,l=u.extend(l,{remote:s})),l}}});function e(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}var i;u.extend(u.expr.pseudos||u.expr[":"],{blank:function(t){return!e(""+u(t).val())},filled:function(t){t=u(t).val();return null!==t&&!!e(""+t)},unchecked:function(t){return!u(t).prop("checked")}}),u.validator=function(t,e){this.settings=u.extend(!0,{},u.validator.defaults,t),this.currentForm=e,this.init()},u.validator.format=function(i,t){return 1===arguments.length?function(){var t=u.makeArray(arguments);return t.unshift(i),u.validator.format.apply(this,t)}:(void 0===t||((t=2<arguments.length&&t.constructor!==Array?u.makeArray(arguments).slice(1):t).constructor!==Array&&(t=[t]),u.each(t,function(t,e){i=i.replace(new RegExp("\\{"+t+"\\}","g"),function(){return e})})),i)},u.extend(u.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:u([]),errorLabelContainer:u([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){9===e.which&&""===this.elementValue(t)||-1!==u.inArray(e.keyCode,[16,17,18,20,35,36,37,38,39,40,45,144,225])||(t.name in this.submitted||t.name in this.invalid)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(t,e,i){("radio"===t.type?this.findByName(t.name):u(t)).addClass(e).removeClass(i)},unhighlight:function(t,e,i){("radio"===t.type?this.findByName(t.name):u(t)).removeClass(e).addClass(i)}},setDefaults:function(t){u.extend(u.validator.defaults,t)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:u.validator.format("Please enter no more than {0} characters."),minlength:u.validator.format("Please enter at least {0} characters."),rangelength:u.validator.format("Please enter a value between {0} and {1} characters long."),range:u.validator.format("Please enter a value between {0} and {1}."),max:u.validator.format("Please enter a value less than or equal to {0}."),min:u.validator.format("Please enter a value greater than or equal to {0}."),step:u.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function t(t){var e,i,n=void 0!==u(this).attr("contenteditable")&&"false"!==u(this).attr("contenteditable");!this.form&&n&&(this.form=u(this).closest("form")[0],this.name=u(this).attr("name")),o===this.form&&(n=u.data(this.form,"validator"),e="on"+t.type.replace(/^validate/,""),(i=n.settings)[e]&&!u(this).is(i.ignore)&&i[e].call(n,this,t))}this.labelContainer=u(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||u(this.currentForm),this.containers=u(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i,o=this.currentForm,n=this.groups={};u.each(this.settings.groups,function(i,t){"string"==typeof t&&(t=t.split(/\s/)),u.each(t,function(t,e){n[e]=i})}),i=this.settings.rules,u.each(i,function(t,e){i[t]=u.validator.normalizeRule(e)}),u(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",t).on("click.validate","select, option, [type='radio'], [type='checkbox']",t),this.settings.invalidHandler&&u(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),u.extend(this.submitted,this.errorMap),this.invalid=u.extend({},this.errorMap),this.valid()||u(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(t){var e,i,n=this.clean(t),o=this.validationTargetFor(n),s=this,r=!0;return void 0===o?delete this.invalid[n.name]:(this.prepareElement(o),this.currentElements=u(o),(i=this.groups[o.name])&&u.each(this.groups,function(t,e){e===i&&t!==o.name&&((n=s.validationTargetFor(s.clean(s.findByName(t))))&&n.name in s.invalid&&(s.currentElements.push(n),r=s.check(n)&&r))}),e=!1!==this.check(o),r=r&&e,this.invalid[o.name]=!e,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),u(t).attr("aria-invalid",!e)),r},showErrors:function(e){var i;e&&(u.extend((i=this).errorMap,e),this.errorList=u.map(this.errorMap,function(t,e){return{message:t,element:i.findByName(e)[0]}}),this.successList=u.grep(this.successList,function(t){return!(t.name in e)})),this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){u.fn.resetForm&&u(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var t=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(t)},resetElements:function(t){var e;if(this.settings.unhighlight)for(e=0;t[e];e++)this.settings.unhighlight.call(this,t[e],this.settings.errorClass,""),this.findByName(t[e].name).removeClass(this.settings.validClass);else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)void 0!==t[e]&&null!==t[e]&&!1!==t[e]&&i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{u(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(t){}},findLastActive:function(){var e=this.lastActive;return e&&1===u.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var i=this,n={};return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var t=this.name||u(this).attr("name"),e=void 0!==u(this).attr("contenteditable")&&"false"!==u(this).attr("contenteditable");return!t&&i.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=u(this).closest("form")[0],this.name=t),!(this.form!==i.currentForm||t in n||!i.objectLength(u(this).rules())||(n[t]=!0,0))})},clean:function(t){return u(t)[0]},errors:function(){var t=this.settings.errorClass.split(" ").join(".");return u(this.settings.errorElement+"."+t,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=u([]),this.toHide=u([])},reset:function(){this.resetInternals(),this.currentElements=u([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(t){var e=u(t),i=t.type,n=void 0!==e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===i||"checkbox"===i?this.findByName(t.name).filter(":checked").val():"number"===i&&void 0!==t.validity?t.validity.badInput?"NaN":e.val():(t=n?e.text():e.val(),"file"===i?"C:\\fakepath\\"===t.substr(0,12)?t.substr(12):0<=(n=t.lastIndexOf("/"))?t.substr(n+1):0<=(n=t.lastIndexOf("\\"))?t.substr(n+1):t:"string"==typeof t?t.replace(/\r/g,""):t)},check:function(e){e=this.validationTargetFor(this.clean(e));var t,i,n,o,s=u(e).rules(),r=u.map(s,function(t,e){return e}).length,a=!1,l=this.elementValue(e);for(i in"function"==typeof s.normalizer?o=s.normalizer:"function"==typeof this.settings.normalizer&&(o=this.settings.normalizer),o&&(l=o.call(e,l),delete s.normalizer),s){n={method:i,parameters:s[i]};try{if("dependency-mismatch"===(t=u.validator.methods[i].call(this,l,e,n.parameters))&&1===r){a=!0;continue}if(a=!1,"pending"===t)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!t)return this.formatAndAdd(e,n),!1}catch(t){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+n.method+"' method.",t),t instanceof TypeError&&(t.message+=".  Exception occurred when checking element "+e.id+", check the '"+n.method+"' method."),t}}if(!a)return this.objectLength(s)&&this.successList.push(e),!0},customDataMessage:function(t,e){return u(t).data("msg"+e.charAt(0).toUpperCase()+e.substring(1).toLowerCase())||u(t).data("msg")},customMessage:function(t,e){t=this.settings.messages[t];return t&&(t.constructor===String?t:t[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},defaultMessage:function(t,e){var i=this.findDefined(this.customMessage(t.name,(e="string"==typeof e?{method:e}:e).method),this.customDataMessage(t,e.method),!this.settings.ignoreTitle&&t.title||void 0,u.validator.messages[e.method],"<strong>Warning: No message defined for "+t.name+"</strong>"),n=/\$?\{(\d+)\}/g;return"function"==typeof i?i=i.call(this,e.parameters,t):n.test(i)&&(i=u.validator.format(i.replace(n,"{$1}"),e.parameters)),i},formatAndAdd:function(t,e){var i=this.defaultMessage(t,e);this.errorList.push({message:i,element:t,method:e.method}),this.errorMap[t.name]=i,this.submitted[t.name]=i},addWrapper:function(t){return t=this.settings.wrapper?t.add(t.parent(this.settings.wrapper)):t},defaultShowErrors:function(){for(var t,e,i=0;this.errorList[i];i++)e=this.errorList[i],this.settings.highlight&&this.settings.highlight.call(this,e.element,this.settings.errorClass,this.settings.validClass),this.showLabel(e.element,e.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(i=0;this.successList[i];i++)this.showLabel(this.successList[i]);if(this.settings.unhighlight)for(i=0,t=this.validElements();t[i];i++)this.settings.unhighlight.call(this,t[i],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return u(this.errorList).map(function(){return this.element})},showLabel:function(t,e){var i,n,o,s=this.errorsFor(t),r=this.idOrName(t),a=u(t).attr("aria-describedby");s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(e)):(n=s=u("<"+this.settings.errorElement+">").attr("id",r+"-error").addClass(this.settings.errorClass).html(e||""),this.settings.wrapper&&(n=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(n):this.settings.errorPlacement?this.settings.errorPlacement.call(this,n,u(t)):n.insertAfter(t),s.is("label")?s.attr("for",r):0===s.parents("label[for='"+this.escapeCssMeta(r)+"']").length&&(n=s.attr("id"),a?a.match(new RegExp("\\b"+this.escapeCssMeta(n)+"\\b"))||(a+=" "+n):a=n,u(t).attr("aria-describedby",a),(i=this.groups[t.name])&&u.each((o=this).groups,function(t,e){e===i&&u("[name='"+o.escapeCssMeta(t)+"']",o.currentForm).attr("aria-describedby",s.attr("id"))}))),!e&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,t)),this.toShow=this.toShow.add(s)},errorsFor:function(t){var e=this.escapeCssMeta(this.idOrName(t)),t=u(t).attr("aria-describedby"),e="label[for='"+e+"'], label[for='"+e+"'] *";return t&&(e=e+", #"+this.escapeCssMeta(t).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(t){return void 0===t?"":t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(t){return this.groups[t.name]||!this.checkable(t)&&t.id||t.name},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name)),u(t).not(this.settings.ignore)[0]},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(t){return u(this.currentForm).find("[name='"+this.escapeCssMeta(t)+"']")},getLength:function(t,e){switch(e.nodeName.toLowerCase()){case"select":return u("option:selected",e).length;case"input":if(this.checkable(e))return this.findByName(e.name).filter(":checked").length}return t.length},depend:function(t,e){return!this.dependTypes[typeof t]||this.dependTypes[typeof t](t,e)},dependTypes:{boolean:function(t){return t},string:function(t,e){return!!u(t,e.form).length},function:function(t,e){return t(e)}},optional:function(t){var e=this.elementValue(t);return!u.validator.methods.required.call(this,e,t)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,u(t).addClass(this.settings.pendingClass),this.pending[t.name]=!0)},stopRequest:function(t,e){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[t.name],u(t).removeClass(this.settings.pendingClass),e&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(u(this.currentForm).trigger("submit"),this.submitButton&&u("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!e&&0===this.pendingRequest&&this.formSubmitted&&(u(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(t,e){return e="string"==typeof e&&e||"remote",u.data(t,"previousValue")||u.data(t,"previousValue",{old:null,valid:!0,message:this.defaultMessage(t,{method:e})})},destroy:function(){this.resetForm(),u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(t,e){t.constructor===String?this.classRuleSettings[t]=e:u.extend(this.classRuleSettings,t)},classRules:function(t){var e={},t=u(t).attr("class");return t&&u.each(t.split(" "),function(){this in u.validator.classRuleSettings&&u.extend(e,u.validator.classRuleSettings[this])}),e},normalizeAttributeRule:function(t,e,i,n){/min|max|step/.test(i)&&(null===e||/number|range|text/.test(e))&&(n=Number(n),isNaN(n)&&(n=void 0)),n||0===n?t[i]=n:e===i&&"range"!==e&&(t["date"===e?"dateISO":i]=!0)},attributeRules:function(t){var e,i,n={},o=u(t),s=t.getAttribute("type");for(e in u.validator.methods)i="required"===e?(i=t.getAttribute(e),""===i&&(i=!0),!!i):o.attr(e),this.normalizeAttributeRule(n,s,e,i);return n.maxlength&&/-1|2147483647|524288/.test(n.maxlength)&&delete n.maxlength,n},dataRules:function(t){var e,i,n={},o=u(t),s=t.getAttribute("type");for(e in u.validator.methods)i=o.data("rule"+e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()),""===i&&(i=!0),this.normalizeAttributeRule(n,s,e,i);return n},staticRules:function(t){var e={},i=u.data(t.form,"validator");return e=i.settings.rules?u.validator.normalizeRule(i.settings.rules[t.name])||{}:e},normalizeRules:function(n,o){return u.each(n,function(t,e){if(!1===e)delete n[t];else if(e.param||e.depends){var i=!0;switch(typeof e.depends){case"string":i=!!u(e.depends,o.form).length;break;case"function":i=e.depends.call(o,o)}i?n[t]=void 0===e.param||e.param:(u.data(o.form,"validator").resetElements(u(o)),delete n[t])}}),u.each(n,function(t,e){n[t]="function"==typeof e&&"normalizer"!==t?e(o):e}),u.each(["minlength","maxlength"],function(){n[this]&&(n[this]=Number(n[this]))}),u.each(["rangelength","range"],function(){var t;n[this]&&(Array.isArray(n[this])?n[this]=[Number(n[this][0]),Number(n[this][1])]:"string"==typeof n[this]&&(t=n[this].replace(/[\[\]]/g,"").split(/[\s,]+/),n[this]=[Number(t[0]),Number(t[1])]))}),u.validator.autoCreateRanges&&(null!=n.min&&null!=n.max&&(n.range=[n.min,n.max],delete n.min,delete n.max),null!=n.minlength&&null!=n.maxlength&&(n.rangelength=[n.minlength,n.maxlength],delete n.minlength,delete n.maxlength)),n},normalizeRule:function(t){var e;return"string"==typeof t&&(e={},u.each(t.split(/\s/),function(){e[this]=!0}),t=e),t},addMethod:function(t,e,i){u.validator.methods[t]=e,u.validator.messages[t]=void 0!==i?i:u.validator.messages[t],e.length<3&&u.validator.addClassRules(t,u.validator.normalizeRule(t))},methods:{required:function(t,e,i){return this.depend(i,e)?"select"===e.nodeName.toLowerCase()?(i=u(e).val())&&0<i.length:this.checkable(e)?0<this.getLength(t,e):null!=t&&0<t.length:"dependency-mismatch"},email:function(t,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},url:function(t,e){return this.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)},date:(i=!1,function(t,e){return i||(i=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())}),dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},minlength:function(t,e,i){t=Array.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||i<=t},maxlength:function(t,e,i){t=Array.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||t<=i},rangelength:function(t,e,i){t=Array.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||t>=i[0]&&t<=i[1]},min:function(t,e,i){return this.optional(e)||i<=t},max:function(t,e,i){return this.optional(e)||t<=i},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},step:function(t,e,i){function n(t){return(t=(""+t).match(/(?:\.(\d+))?$/))&&t[1]?t[1].length:0}function o(t){return Math.round(t*Math.pow(10,s))}var s,r=u(e).attr("type"),a="Step attribute on input type "+r+" is not supported.",l=new RegExp("\\b"+r+"\\b"),c=!0;if(r&&!l.test(["text","number","range"].join()))throw new Error(a);return s=n(i),(n(t)>s||o(t)%o(i)!=0)&&(c=!1),this.optional(e)||c},equalTo:function(t,e,i){i=u(i);return this.settings.onfocusout&&i.not(".validate-equalTo-blur").length&&i.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){u(e).valid()}),t===i.val()},remote:function(n,o,t,s){if(this.optional(o))return"dependency-mismatch";s="string"==typeof s&&s||"remote";var r,e,a=this.previousValue(o,s);return this.settings.messages[o.name]||(this.settings.messages[o.name]={}),a.originalMessage=a.originalMessage||this.settings.messages[o.name][s],this.settings.messages[o.name][s]=a.message,e=u.param(u.extend({data:n},(t="string"==typeof t?{url:t}:t).data)),a.old===e?a.valid:(a.old=e,(r=this).startRequest(o),(e={})[o.name]=n,u.ajax(u.extend(!0,{mode:"abort",port:"validate"+o.name,dataType:"json",data:e,context:r.currentForm,success:function(t){var e,i=!0===t||"true"===t;r.settings.messages[o.name][s]=a.originalMessage,i?(e=r.formSubmitted,r.resetInternals(),r.toHide=r.errorsFor(o),r.formSubmitted=e,r.successList.push(o),r.invalid[o.name]=!1,r.showErrors()):(e={},t=t||r.defaultMessage(o,{method:s,parameters:n}),e[o.name]=a.message=t,r.invalid[o.name]=!0,r.showErrors(e)),a.valid=i,r.stopRequest(o,i)}},t)),"pending")}}});var n,o={};return u.ajaxPrefilter?u.ajaxPrefilter(function(t,e,i){var n=t.port;"abort"===t.mode&&(o[n]&&o[n].abort(),o[n]=i)}):(n=u.ajax,u.ajax=function(t){var e=("mode"in t?t:u.ajaxSettings).mode,i=("port"in t?t:u.ajaxSettings).port;return"abort"===e?(o[i]&&o[i].abort(),o[i]=n.apply(this,arguments),o[i]):n.apply(this,arguments)}),u}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?exports=t(require("jquery")):t(jQuery)}(function(e){e.easing.jswing=e.easing.swing;var i=Math.pow,n=Math.sqrt,o=Math.sin,s=Math.cos,r=Math.PI,a=1.70158,l=1.525*a,c=2*r/3,u=2*r/4.5;function h(t){var e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375}e.extend(e.easing,{def:"easeOutQuad",swing:function(t){return e.easing[e.easing.def](t)},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-i(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-i(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-i(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-i(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-i(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-i(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-i(-2*t+2,5)/2},easeInSine:function(t){return 1-s(t*r/2)},easeOutSine:function(t){return o(t*r/2)},easeInOutSine:function(t){return-(s(r*t)-1)/2},easeInExpo:function(t){return 0===t?0:i(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-i(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?i(2,20*t-10)/2:(2-i(2,-20*t+10))/2},easeInCirc:function(t){return 1-n(1-i(t,2))},easeOutCirc:function(t){return n(1-i(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-n(1-i(2*t,2)))/2:(n(1-i(-2*t+2,2))+1)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-i(2,10*t-10)*o((10*t-10.75)*c)},easeOutElastic:function(t){return 0===t?0:1===t?1:i(2,-10*t)*o((10*t-.75)*c)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-(i(2,20*t-10)*o((20*t-11.125)*u))/2:i(2,-20*t+10)*o((20*t-11.125)*u)/2+1},easeInBack:function(t){return 2.70158*t*t*t-a*t*t},easeOutBack:function(t){return 1+2.70158*i(t-1,3)+a*i(t-1,2)},easeInOutBack:function(t){return t<.5?i(2*t,2)*(7.189819*t-l)/2:(i(2*t-2,2)*((1+l)*(2*t-2)+l)+2)/2},easeInBounce:function(t){return 1-h(1-t)},easeOutBounce:h,easeInOutBounce:function(t){return t<.5?(1-h(1-2*t))/2:(1+h(2*t-1))/2}})}),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?e(require("jquery")):e(t.jQuery)}(this,function(n){n.fn.appear=function(i,t){var d=n.extend({data:void 0,one:!0,accX:0,accY:0},t);return this.each(function(){var u,e,t,h=n(this);h.appeared=!1,i?(u=n(window),e=function(){var t,e,i,n,o,s,r,a,l,c;h.is(":visible")?(t=u.scrollLeft(),e=u.scrollTop(),i=(n=h.offset()).left,n=n.top,o=d.accX,s=d.accY,r=h.height(),a=u.height(),l=h.width(),c=u.width(),e<=n+r+s&&n<=e+a+s&&t<=i+l+o&&i<=t+c+o?h.appeared||h.trigger("appear",d.data):h.appeared=!1):h.appeared=!1},t=function(){var t;h.appeared=!0,d.one&&(u.unbind("scroll",e),0<=(t=n.inArray(e,n.fn.appear.checks))&&n.fn.appear.checks.splice(t,1)),i.apply(this,arguments)},d.one?h.one("appear",d.data,t):h.bind("appear",d.data,t),u.scroll(e),n.fn.appear.checks.push(e),e()):h.trigger("appear",d.data)})},n.extend(n.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=n.fn.appear.checks.length;if(0<t)for(;t--;)n.fn.appear.checks[t]()},run:function(){n.fn.appear.timeout&&clearTimeout(n.fn.appear.timeout),n.fn.appear.timeout=setTimeout(n.fn.appear.checkAll,20)}}),n.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,e){var i=n.fn[e];i&&(n.fn[e]=function(){var t=i.apply(this,arguments);return n.fn.appear.run(),t})})}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(i){function r(t,r){function i(){r.scaleColor&&c(),r.trackColor&&l(r.trackColor,r.trackWidth||r.lineWidth,1)}var n,e=document.createElement("canvas"),o=(t.appendChild(e),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(e),e.getContext("2d")),s=(e.width=e.height=r.size,1),a=(1<window.devicePixelRatio&&(s=window.devicePixelRatio,e.style.width=e.style.height=[r.size,"px"].join(""),e.width=e.height=r.size*s,o.scale(s,s)),o.translate(r.size/2,r.size/2),o.rotate((r.rotate/180-.5)*Math.PI),(r.size-r.lineWidth)/2),l=(r.scaleColor&&r.scaleLength&&(a-=r.scaleLength+2),Date.now=Date.now||function(){return+new Date},function(t,e,i){var n=(i=Math.min(Math.max(-1,i||0),1))<=0;o.beginPath(),o.arc(0,0,a,0,2*Math.PI*i,n),o.strokeStyle=t,o.lineWidth=e,o.stroke()}),c=function(){var t,e;o.lineWidth=1,o.fillStyle=r.scaleColor,o.save();for(var i=24;0<i;--i)t=i%6==0?(e=r.scaleLength,0):(e=.6*r.scaleLength,r.scaleLength-e),o.fillRect(-r.size/2+t,0,e,1),o.rotate(Math.PI/12);o.restore()},u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};this.getCanvas=function(){return e},this.getCtx=function(){return o},this.clear=function(){o.clearRect(r.size/-2,r.size/-2,r.size,r.size)},this.draw=function(t){var e;r.scaleColor||r.trackColor?o.getImageData&&o.putImageData?n?o.putImageData(n,0,0):(i(),n=o.getImageData(0,0,r.size*s,r.size*s)):(this.clear(),i()):this.clear(),o.lineCap=r.lineCap,e="function"==typeof r.barColor?r.barColor(t):r.barColor,l(e,r.lineWidth,t/100)}.bind(this),this.animate=function(i,n){var o=Date.now(),s=(r.onStart(i,n),function(){var t=Math.min(Date.now()-o,r.animate.duration),e=r.easing(this,t,i,n-i,r.animate.duration);this.draw(e),r.onStep(i,n,e),t>=r.animate.duration?r.onStop(i,n):u(s)}.bind(this));u(s)}.bind(this)}function n(e,i){var n={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},onStart:function(t,e){},onStep:function(t,e,i){},onStop:function(t,e){}},o=(n.renderer=r,{}),s=0,t=function(){for(var t in this.el=e,this.options=o,n)n.hasOwnProperty(t)&&(o[t]=(i&&void 0!==i[t]?i:n)[t],"function"==typeof o[t]&&(o[t]=o[t].bind(this)));"string"==typeof o.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[o.easing])?o.easing=jQuery.easing[o.easing]:o.easing=n.easing,"number"==typeof o.animate&&(o.animate={duration:o.animate,enabled:!0}),"boolean"!=typeof o.animate||o.animate||(o.animate={duration:1e3,enabled:o.animate}),this.renderer=new o.renderer(e,o),this.renderer.draw(s),e.dataset&&e.dataset.percent?this.update(parseFloat(e.dataset.percent)):e.getAttribute&&e.getAttribute("data-percent")&&this.update(parseFloat(e.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),o.animate.enabled?this.renderer.animate(s,t):this.renderer.draw(t),s=t,this}.bind(this),this.disableAnimation=function(){return o.animate.enabled=!1,this},this.enableAnimation=function(){return o.animate.enabled=!0,this},t()}i.fn.easyPieChart=function(e){return this.each(function(){var t;i.data(this,"easyPieChart")||(t=i.extend({},e,i(this).data()),i.data(this,"easyPieChart",new n(this,t)))})}}),function(s){s.fn.gMap=function(t,e){switch(t){case"addMarker":return s(this).trigger("gMap.addMarker",[e.latitude,e.longitude,e.content,e.icon,e.popup]);case"centerAt":return s(this).trigger("gMap.centerAt",[e.latitude,e.longitude,e.zoom]);case"clearMarkers":return s(this).trigger("gMap.clearMarkers")}var p=s.extend({},s.fn.gMap.defaults,t);return this.each(function(){var c=new google.maps.Map(this),t=(s(this).data("gMap.reference",c),new google.maps.Geocoder),e=(p.address?t.geocode({address:p.address},function(t,e){t&&t.length&&c.setCenter(t[0].geometry.location)}):p.latitude&&p.longitude?c.setCenter(new google.maps.LatLng(p.latitude,p.longitude)):s.isArray(p.markers)&&0<p.markers.length?p.markers[0].address?t.geocode({address:p.markers[0].address},function(t,e){t&&0<t.length&&c.setCenter(t[0].geometry.location)}):c.setCenter(new google.maps.LatLng(p.markers[0].latitude,p.markers[0].longitude)):c.setCenter(new google.maps.LatLng(34.885931,9.84375)),c.setZoom(p.zoom),c.setMapTypeId(google.maps.MapTypeId[p.maptype]),{scrollwheel:p.scrollwheel,disableDoubleClickZoom:!p.doubleclickzoom}),u=(!1===p.controls?s.extend(e,{disableDefaultUI:!0}):0!==p.controls.length&&s.extend(e,p.controls,{disableDefaultUI:!0}),c.setOptions(e),new google.maps.Marker),e=new google.maps.MarkerImage(p.icon.image);e.size=new google.maps.Size(p.icon.iconsize[0],p.icon.iconsize[1]),e.anchor=new google.maps.Point(p.icon.iconanchor[0],p.icon.iconanchor[1]),u.setIcon(e),p.icon.shadow&&((e=new google.maps.MarkerImage(p.icon.shadow)).size=new google.maps.Size(p.icon.shadowsize[0],p.icon.shadowsize[1]),e.anchor=new google.maps.Point(p.icon.shadowanchor[0],p.icon.shadowanchor[1]),u.setShadow(e)),s(this).bind("gMap.centerAt",function(t,e,i,n){n&&c.setZoom(n),c.panTo(new google.maps.LatLng(parseFloat(e),parseFloat(i)))});for(var h,i,d=[],n=(s(this).bind("gMap.clearMarkers",function(){for(;d[0];)d.pop().setMap(null)}),s(this).bind("gMap.addMarker",function(t,e,i,n,o,s){var r,a=new google.maps.LatLng(parseFloat(e),parseFloat(i)),l=new google.maps.Marker({position:a});o?((a=new google.maps.MarkerImage(o.image)).size=new google.maps.Size(o.iconsize[0],o.iconsize[1]),a.anchor=new google.maps.Point(o.iconanchor[0],o.iconanchor[1]),l.setIcon(a),o.shadow&&((a=new google.maps.MarkerImage(o.shadow)).size=new google.maps.Size(o.shadowsize[0],o.shadowsize[1]),a.anchor=new google.maps.Point(o.shadowanchor[0],o.shadowanchor[1]),u.setShadow(a))):(l.setIcon(u.getIcon()),l.setShadow(u.getShadow())),n&&("_latlng"===n&&(n=e+", "+i),r=new google.maps.InfoWindow({content:p.html_prepend+n+p.html_append}),google.maps.event.addListener(l,"click",function(){h&&h.close(),r.open(c,l),h=r}),s&&google.maps.event.addListenerOnce(c,"tilesloaded",function(){r.open(c,l)})),l.setMap(c),d.push(l)}),this),o=0;o<p.markers.length;o++)(i=p.markers[o]).address?("_address"===i.html&&(i.html=i.address),t.geocode({address:i.address},function(i){return function(t,e){t&&0<t.length&&s(n).trigger("gMap.addMarker",[t[0].geometry.location.lat(),t[0].geometry.location.lng(),i.html,i.icon,i.popup])}}(i))):s(this).trigger("gMap.addMarker",[i.latitude,i.longitude,i.html,i.icon,i.popup])})},s.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,markers:[],controls:[],scrollwheel:!1,doubleclickzoom:!0,maptype:"ROADMAP",html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[6,34]}}}(jQuery),function(t){var e=function(n,d,s){"use strict";var p,f,t,P={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in f=n.lazySizesConfig||n.lazysizesConfig||{},P)t in f||(f[t]=P[t]);if(!d||!d.getElementsByClassName)return{init:function(){},cfg:f,noSupport:!0};function u(t,e){O(t,e)||t.setAttribute("class",(t[S]("class")||"").trim()+" "+e)}function h(t,e){(e=O(t,e))&&t.setAttribute("class",(t[S]("class")||"").replace(e," "))}function N(t,e){var i;!ct&&(i=n.picturefill||f.pf)?(e&&e.src&&!t[S]("srcset")&&t.setAttribute("srcset",e.src),i({reevaluate:!0,elements:[t]})):e&&e.src&&(t.src=e.src)}function e(i,t){return t?function(){M(i)}:function(){var t=this,e=arguments;M(function(){i.apply(t,e)})}}function R(t){function e(){var t=s.now()-n;t<99?I(e,99-t):(ht||o)(o)}var i,n,o=function(){i=null,t()};return function(){n=s.now(),i=i||I(e,99)}}function i(){!i.i&&d.getElementsByClassName&&(i.i=!0,yt._(),vt._())}var q,F,H,m,g,W,v,B,$,V,y,b,_,w,x,U,Q,Y,X,o,G,Z,K,J,C,T,E,tt,r,et,it,nt,k,ot,st,rt,at,lt,a,A=d.documentElement,ct=n.HTMLPictureElement,l="addEventListener",S="getAttribute",c=n[l].bind(n),I=n.setTimeout,ut=n.requestAnimationFrame||I,ht=n.requestIdleCallback,dt=/^picture$/i,pt=["load","error","lazyincluded","_lazyloaded"],L={},ft=Array.prototype.forEach,O=function(t,e){return L[e]||(L[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),L[e].test(t[S]("class")||"")&&L[e]},mt=function(e,i,t){var n=t?l:"removeEventListener";t&&mt(e,i),pt.forEach(function(t){e[n](t,i)})},z=function(t,e,i,n,o){var s=d.createEvent("Event");return(i=i||{}).instance=p,s.initEvent(e,!n,!o),s.detail=i,t.dispatchEvent(s),s},D=function(t,e){return(getComputedStyle(t,null)||{})[e]},gt=function(t,e,i){for(i=i||t.offsetWidth;i<f.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},M=(lt=[],a=at=[],At._lsFlush=kt,At),vt=(Z=/^img$/i,K=/^iframe$/i,J="onscroll"in n&&!/(gle|ing)bot/.test(navigator.userAgent),E=-1,tt=function(t){return(x=null==x?"hidden"==D(d.body,"visibility"):x)||!("hidden"==D(t.parentNode,"visibility")&&"hidden"==D(t,"visibility"))},U=wt,Y=T=C=0,X=f.throttleDelay,o=f.ricTimeout,G=ht&&49<o?function(){ht(xt,{timeout:o}),o!==f.ricTimeout&&(o=f.ricTimeout)}:e(function(){I(xt)},!0),et=e(Ct),it=function(t){et({target:t.target})},nt=e(function(e,t,i,n,o){var s,r,a,l,c;(r=z(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(i?u(e,f.autosizesClass):e.setAttribute("sizes",n)),i=e[S](f.srcsetAttr),n=e[S](f.srcAttr),o&&(s=(l=e.parentNode)&&dt.test(l.nodeName||"")),a=t.firesLoad||"src"in e&&(i||n||s),r={target:e},u(e,f.loadingClass),a&&(clearTimeout(W),W=I(_t,2500),mt(e,it,!0)),s&&ft.call(l.getElementsByTagName("source"),Tt),i?e.setAttribute("srcset",i):n&&!s&&(K.test(e.nodeName)?(t=n,0==(c=(l=e).getAttribute("data-load-mode")||f.iframeLoadMode)?l.contentWindow.location.replace(t):1==c&&(l.src=t)):e.src=n),o&&(i||s)&&N(e,{src:n})),e._lazyRace&&delete e._lazyRace,h(e,f.lazyClass),M(function(){var t=e.complete&&1<e.naturalWidth;a&&!t||(t&&u(e,f.fastLoadedClass),Ct(r),e._lazyCache=!0,I(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&T--},!0)}),ot=R(function(){f.loadMode=3,r()}),{_:function(){B=s.now(),p.elements=d.getElementsByClassName(f.lazyClass),m=d.getElementsByClassName(f.lazyClass+" "+f.preloadClass),c("scroll",r,!0),c("resize",r,!0),c("pageshow",function(t){var e;t.persisted&&(e=d.querySelectorAll("."+f.loadingClass)).length&&e.forEach&&ut(function(){e.forEach(function(t){t.complete&&k(t)})})}),n.MutationObserver?new MutationObserver(r).observe(A,{childList:!0,subtree:!0,attributes:!0}):(A[l]("DOMNodeInserted",r,!0),A[l]("DOMAttrModified",r,!0),setInterval(r,999)),c("hashchange",r,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(t){d[l](t,r,!0)}),/d$|^c/.test(d.readyState)?j():(c("load",j),d[l]("DOMContentLoaded",r),I(j,2e4)),p.elements.length?(wt(),M._lsFlush()):r()},checkElems:r=function(t){var e;(t=!0===t)&&(o=33),Q||(Q=!0,(e=X-(s.now()-Y))<0&&(e=0),t||e<9?G():I(G,e))},unveil:k=function(t){var e,i,n,o;t._lazyRace||(!(o="auto"==(n=(i=Z.test(t.nodeName))&&(t[S](f.sizesAttr)||t[S]("sizes"))))&&g||!i||!t[S]("src")&&!t.srcset||t.complete||O(t,f.errorClass)||!O(t,f.lazyClass))&&(e=z(t,"lazyunveilread").detail,o&&yt.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,T++,nt(t,e,o,n,i))},_aLSL:Et}),yt=(F=e(function(t,e,i,n){var o,s,r;if(t._lazysizesWidth=n,t.setAttribute("sizes",n+="px"),dt.test(e.nodeName||""))for(s=0,r=(o=e.getElementsByTagName("source")).length;s<r;s++)o[s].setAttribute("sizes",n);i.detail.dataAttr||N(t,i.detail)}),{_:function(){q=d.getElementsByClassName(f.autosizesClass),c("resize",H)},checkElems:H=R(function(){var t,e=q.length;if(e)for(t=0;t<e;t++)bt(q[t])}),updateElem:bt});function bt(t,e,i){var n=t.parentNode;n&&(i=gt(t,n,i),(e=z(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=e.detail.width)&&i!==t._lazysizesWidth&&F(t,n,e,i))}function _t(t){T--,t&&!(T<0)&&t.target||(T=0)}function wt(){var t,e,i,n,o,s,r,a,l,c,u,h=p.elements;if((v=f.loadMode)&&T<8&&(t=h.length)){for(e=0,E++;e<t;e++)if(h[e]&&!h[e]._lazyRace)if(!J||p.prematureUnveil&&p.prematureUnveil(h[e]))k(h[e]);else if((r=h[e][S]("data-expand"))&&(o=+r)||(o=C),l||(l=!f.expand||f.expand<1?500<A.clientHeight&&500<A.clientWidth?500:370:f.expand,c=(p._defEx=l)*f.expFactor,u=f.hFac,x=null,C<c&&T<1&&2<E&&2<v&&!d.hidden?(C=c,E=0):C=1<v&&1<E&&T<6?l:0),a!==o&&($=innerWidth+o*u,V=innerHeight+o,s=-1*o,a=o),c=h[e].getBoundingClientRect(),(w=c.bottom)>=s&&(y=c.top)<=V&&(_=c.right)>=s*u&&(b=c.left)<=$&&(w||_||b||y)&&(f.loadHidden||tt(h[e]))&&(g&&T<3&&!r&&(v<3||E<4)||function(t,e){var i,n=t,o=tt(t);for(y-=e,w+=e,b-=e,_+=e;o&&(n=n.offsetParent)&&n!=d.body&&n!=A;)(o=0<(D(n,"opacity")||1))&&"visible"!=D(n,"overflow")&&(i=n.getBoundingClientRect(),o=_>i.left&&b<i.right&&w>i.top-1&&y<i.bottom+1);return o}(h[e],o))){if(k(h[e]),n=!0,9<T)break}else!n&&g&&!i&&T<4&&E<4&&2<v&&(m[0]||f.preloadAfterLoad)&&(m[0]||!r&&(w||_||b||y||"auto"!=h[e][S](f.sizesAttr)))&&(i=m[0]||h[e]);i&&!n&&k(i)}}function xt(){Q=!1,Y=s.now(),U()}function Ct(t){var e=t.target;e._lazyCache?delete e._lazyCache:(_t(t),u(e,f.loadedClass),h(e,f.loadingClass),mt(e,it),z(e,"lazyloaded"))}function Tt(t){var e,i=t[S](f.srcsetAttr);(e=f.customMedia[t[S]("data-media")||t[S]("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)}function Et(){3==f.loadMode&&(f.loadMode=2),ot()}function j(){g||(s.now()-B<999?I(j,999):(g=!0,f.loadMode=3,r(),c("scroll",Et,!0)))}function kt(){var t=a;for(a=at.length?lt:at,rt=!(st=!0);t.length;)t.shift()();st=!1}function At(t,e){st&&!e?t.apply(this,arguments):(a.push(t),rt||(rt=!0,(d.hidden?I:ut)(kt)))}return I(function(){f.init&&i()}),p={cfg:f,autoSizer:yt,loader:vt,init:i,uP:N,aC:u,rC:h,hC:O,fire:z,gW:gt,rAF:M}}(t,t.document,Date);t.lazySizes=e,"object"==typeof module&&module.exports&&(module.exports=e)}("undefined"!=typeof window?window:{}),function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";function i(l,c,u){(u=u||e||t.jQuery)&&(c.prototype.option||(c.prototype.option=function(t){u.isPlainObject(t)&&(this.options=u.extend(!0,this.options,t))}),u.fn[l]=function(t){var e,n,o,s,r,a;return"string"==typeof t?(e=h.call(arguments,1),o=e,r="$()."+l+'("'+(n=t)+'")',(e=this).each(function(t,e){var i,e=u.data(e,l);e?(i=e[n])&&"_"!=n.charAt(0)?(i=i.apply(e,o),s=void 0===s?i:s):d(r+" is not a valid method"):d(l+" not initialized. Cannot call methods, i.e. "+r)}),void 0!==s?s:e):(a=t,this.each(function(t,e){var i=u.data(e,l);i?(i.option(a),i._init()):(i=new c(e,a),u.data(e,l,i))}),this)},n(u))}function n(t){t&&!t.bridget&&(t.bridget=i)}var h=Array.prototype.slice,o=t.console,d=void 0===o?function(){}:function(t){o.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){var i;if(t&&e)return-1==(i=(i=this._events=this._events||{})[t]=i[t]||[]).indexOf(e)&&i.push(e),this},e.once=function(t,e){var i;if(t&&e)return this.on(t,e),((i=this._onceEvents=this._onceEvents||{})[t]=i[t]||{})[e]=!0,this},e.off=function(t,e){t=this._events&&this._events[t];if(t&&t.length)return-1!=(e=t.indexOf(e))&&t.splice(e,1),this},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var s=i[o];n&&n[s]&&(this.off(t,s),delete n[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function g(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function v(t){t=getComputedStyle(t);return t||e("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),t}function y(t){if(x||(x=!0,(u=document.createElement("div")).style.width="200px",u.style.padding="1px 2px 3px 4px",u.style.borderStyle="solid",u.style.borderWidth="1px 2px 3px 4px",u.style.boxSizing="border-box",(c=document.body||document.documentElement).appendChild(u),s=v(u),b=200==Math.round(g(s.width)),y.isBoxSizeOuter=b,c.removeChild(u)),(t="string"==typeof t?document.querySelector(t):t)&&"object"==typeof t&&t.nodeType){var e=v(t);if("none"==e.display){for(var i={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},n=0;n<w;n++)i[_[n]]=0;return i}var o={};o.width=t.offsetWidth,o.height=t.offsetHeight;for(var s=o.isBorderBox="border-box"==e.boxSizing,r=0;r<w;r++){var a=_[r],l=e[a],l=parseFloat(l);o[a]=isNaN(l)?0:l}var c=o.paddingLeft+o.paddingRight,u=o.paddingTop+o.paddingBottom,t=o.marginLeft+o.marginRight,h=o.marginTop+o.marginBottom,d=o.borderLeftWidth+o.borderRightWidth,p=o.borderTopWidth+o.borderBottomWidth,f=s&&b,m=g(e.width),m=(!1!==m&&(o.width=m+(f?0:c+d)),g(e.height));return!1!==m&&(o.height=m+(f?0:u+p)),o.innerWidth=o.width-(c+d),o.innerHeight=o.height-(u+p),o.outerWidth=o.width+t,o.outerHeight=o.height+h,o}var u,c,s}var b,e="undefined"==typeof console?function(){}:function(t){console.error(t)},_=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],w=_.length,x=!1;return y}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(i,s){var l={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice,c=(l.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},l.removeFrom=function(t,e){e=t.indexOf(e);-1!=e&&t.splice(e,1)},l.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,s(t,e))return t},l.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},l.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},l.filterFindElements=function(t,n){t=l.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){s(t,n)&&o.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)o.push(e[i])}else o.push(t)}),o},l.debounceMethod=function(t,e,n){n=n||100;var o=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s],e=(clearTimeout(t),arguments),i=this;this[s]=setTimeout(function(){o.apply(i,e),delete i[s]},n)}},l.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},l.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()},i.console);return l.htmlInit=function(r,a){l.docReady(function(){var t=l.toDashed(a),n="data-"+t,e=document.querySelectorAll("["+n+"]"),t=document.querySelectorAll(".js-"+t),e=l.makeArray(e).concat(l.makeArray(t)),o=n+"-options",s=i.jQuery;e.forEach(function(e){var t,i=e.getAttribute(n)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(c&&c.error("Error parsing "+n+" on "+e.className+": "+t))}i=new r(e,t);s&&s.data(e,a,i)})})},l}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var n=document.documentElement.style,o="string"==typeof n.transition?"transition":"WebkitTransition",n="string"==typeof n.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],r={transform:n,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"},t=i.prototype=Object.create(t.prototype),a=(t.constructor=i,t._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},t.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},t.getSize=function(){this.size=e(this.element)},t.css=function(t){var e,i=this.element.style;for(e in t)i[r[e]||e]=t[e]},t.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],t=t[i?"top":"bottom"],o=parseFloat(n),s=parseFloat(t),r=this.layout.size;-1!=n.indexOf("%")&&(o=o/100*r.width),-1!=t.indexOf("%")&&(s=s/100*r.height),o=isNaN(o)?0:o,s=isNaN(s)?0:s,o-=e?r.paddingLeft:r.paddingRight,s-=i?r.paddingTop:r.paddingBottom,this.position.x=o,this.position.y=s},t.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"right":"left",s=this.position.x+t[i?"paddingLeft":"paddingRight"],i=(e[i?"left":"right"]=this.getXValue(s),e[o]="",n?"paddingTop":"paddingBottom"),s=n?"bottom":"top",o=this.position.y+t[i];e[n?"top":"bottom"]=this.getYValue(o),e[s]="",this.css(e),this.emitEvent("layout",[this])},t.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},t.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},t._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;this.setPosition(t,e),o&&!this.isTransitioning?this.layoutPosition():((o={}).transform=this.getTranslate(t-i,e-n),this.transition({to:o,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0}))},t.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},t.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},t.moveTo=t._transitionTo,t.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},t._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},t.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e,i=this._transn;for(e in t.onTransitionEnd)i.onEnd[e]=t.onTransitionEnd[e];for(e in t.to)i.ingProperties[e]=!0,t.isCleaning&&(i.clean[e]=!0);t.from&&(this.css(t.from),this.element.offsetHeight,0),this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)},"opacity,"+n.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})),l=(t.enableTransition=function(){var t;this.isTransitioning||(t="number"==typeof(t=this.layout.options.transitionDuration)?t+"ms":t,this.css({transitionProperty:a,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(s,this,!1))},t.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},t.onotransitionend=function(t){this.ontransitionend(t)},{"-webkit-transform":"transform"}),c=(t.ontransitionend=function(t){var e,i;t.target===this.element&&(e=this._transn,i=l[t.propertyName]||t.propertyName,delete e.ingProperties[i],function(t){for(var e in t)return;return 1}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd&&(e.onEnd[i].call(this),delete e.onEnd[i]),this.emitEvent("transitionEnd",[this]))},t.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},t._removeStyles=function(t){var e,i={};for(e in t)i[e]="";this.css(i)},{transitionProperty:"",transitionDuration:"",transitionDelay:""});return t.removeTransitionStyles=function(){this.css(c)},t.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},t.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},t.remove=function(){return o&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},t.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},t.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},t.getHideRevealTransitionEndProperty=function(t){var e,t=this.layout.options[t];if(t.opacity)return"opacity";for(e in t)return e},t.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},t.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},t.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(o,s){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(t,e,i,n){return s(o,t,e,i,n)}):"object"==typeof module&&module.exports?module.exports=s(o,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):o.Outlayer=s(o,o.EvEmitter,o.getSize,o.fizzyUIUtils,o.Outlayer.Item)}(window,function(t,e,o,n,s){"use strict";function r(t,e){var i=n.getQueryElement(t);i?(this.element=i,c&&(this.$element=c(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e),e=++u,this.element.outlayerGUID=e,(h[e]=this)._create(),this._getOption("initLayout")&&this.layout()):l&&l.error("Bad element for "+this.constructor.namespace+": "+(i||t))}function a(t){function e(){t.apply(this,arguments)}return(e.prototype=Object.create(t.prototype)).constructor=e}function i(){}var l=t.console,c=t.jQuery,u=0,h={},d=(r.namespace="outlayer",r.Item=s,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},r.prototype),p=(n.extend(d,e.prototype),d.option=function(t){n.extend(this.options,t)},d._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=new i(e[o],this);n.push(s)}return n},d._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(t){return t.element})},d.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),t=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=o(this.element)},d._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):n instanceof HTMLElement&&(i=n),this[t]=i?o(i)[e]:n):this[t]=0},d.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},d._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},d._layoutItems=function(t,i){var n;this._emitCompleteOnItems("layout",t),t&&t.length&&(n=[],t.forEach(function(t){var e=this._getItemLayoutPosition(t);e.item=t,e.isInstant=i||t.isLayoutInstant,n.push(e)},this),this._processLayoutQueue(n))},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},d.updateStagger=function(){var t=this.options.stagger;return null==t?void(this.stagger=0):(this.stagger=function(t){if("number"==typeof t)return t;var e=(t=t.match(/(^\d*\.?\d*)(\w*)/))&&t[1],t=t&&t[2];return e.length?parseFloat(e)*(p[t]||1):0}(t),this.stagger)},d._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){var t;this._getOption("resizeContainer")&&(t=this._getContainerSize())&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},d._getContainerSize=i,d._setContainerMeasure=function(t,e){var i;void 0!==t&&((i=this.size).isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px")},d._emitCompleteOnItems=function(e,t){function i(){s.dispatchEvent(e+"Complete",null,[t])}function n(){++o==r&&i()}var o,s=this,r=t.length;t&&r?(o=0,t.forEach(function(t){t.once(e,n)})):i()},d.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;this.emitEvent(t,n),c&&(this.$element=this.$element||c(this.element),e?((n=c.Event(e)).type=t,this.$element.trigger(n,i)):this.$element.trigger(t,i))},d.ignore=function(t){t=this.getItem(t);t&&(t.isIgnored=!0)},d.unignore=function(t){t=this.getItem(t);t&&delete t.isIgnored},d.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},d.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},d._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),n.makeArray(t)},d._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},d._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},d._manageStamp=i,d._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,t=o(t);return{left:e.left-i.left-t.marginLeft,top:e.top-i.top-t.marginTop,right:i.right-e.right-t.marginRight,bottom:i.bottom-e.bottom-t.marginBottom}},d.handleEvent=n.handleEvent,d.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},d.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},d.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),d.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},d.needsResizeLayout=function(){var t=o(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},d.addItems=function(t){t=this._itemize(t);return t.length&&(this.items=this.items.concat(t)),t},d.appended=function(t){t=this.addItems(t);t.length&&(this.layoutItems(t,!0),this.reveal(t))},d.prepended=function(t){var e,t=this._itemize(t);t.length&&(e=this.items.slice(0),this.items=t.concat(e),this._resetLayout(),this._manageStamps(),this.layoutItems(t,!0),this.reveal(t),this.layoutItems(e))},d.reveal=function(t){var i;this._emitCompleteOnItems("reveal",t),t&&t.length&&(i=this.updateStagger(),t.forEach(function(t,e){t.stagger(e*i),t.reveal()}))},d.hide=function(t){var i;this._emitCompleteOnItems("hide",t),t&&t.length&&(i=this.updateStagger(),t.forEach(function(t,e){t.stagger(e*i),t.hide()}))},d.revealItemElements=function(t){t=this.getItems(t);this.reveal(t)},d.hideItemElements=function(t){t=this.getItems(t);this.hide(t)},d.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},d.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){t=this.getItem(t);t&&e.push(t)},this),e},d.remove=function(t){t=this.getItems(t);this._emitCompleteOnItems("remove",t),t&&t.length&&t.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},d.destroy=function(){var t=this.element.style,t=(t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize(),this.element.outlayerGUID);delete h[t],delete this.element.outlayerGUID,c&&c.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=(t=n.getQueryElement(t))&&t.outlayerGUID;return t&&h[t]},r.create=function(t,e){var i=a(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=a(s),n.htmlInit(i,t),c&&c.bridget&&c.bridget(t,i),i},{ms:1,s:1e3});return r.Item=s,r}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create,o=(i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t,e=this.layout.options.getSortData,i=this.layout._sorters;for(t in e){var n=i[t];this.sortData[t]=n(this.element,this)}}},i.destroy);return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(e,i){"use strict";function n(t){(this.isotope=t)&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=n.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){o[t]=function(){return i.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var t=e(this.isotope.element);return this.isotope.size&&t&&t.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i,t=t+e,n="outer"+e;this._getMeasurement(t,n),this[t]||(i=this.getFirstItemSize(),this[t]=i&&i[n]||this.isotope.size["inner"+e])},o.getFirstItemSize=function(){var t=this.isotope.filteredItems[0];return t&&t.element&&e(t.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},n.modes={},n.create=function(t,e){function i(){n.apply(this,arguments)}return(i.prototype=Object.create(o)).constructor=i,e&&(i.options=e),n.modes[i.prototype.namespace=t]=i},n}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,a){var t=t.create("masonry"),e=(t.compatOptions.fitWidth="isFitWidth",t.prototype);return e._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},e.measureColumns=function(){this.getContainerWidth(),this.columnWidth||(t=(t=this.items[0])&&t.element,this.columnWidth=t&&a(t).outerWidth||this.containerWidth);var t=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,i=e/t,e=t-e%t,i=Math[e&&e<1?"round":"floor"](i);this.cols=Math.max(i,1)},e.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,t=a(t);this.containerWidth=t&&t.innerWidth},e._getItemLayoutPosition=function(t){t.getSize();for(var e=t.size.outerWidth%this.columnWidth,e=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth),e=Math.min(e,this.cols),i=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](e,t),n={x:this.columnWidth*i.col,y:i.y},o=i.y+t.size.outerHeight,s=e+i.col,r=i.col;r<s;r++)this.colYs[r]=o;return n},e._getTopColPosition=function(t){var t=this._getTopColGroup(t),e=Math.min.apply(Math,t);return{col:t.indexOf(e),y:e}},e._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++)e[n]=this._getColGroupY(n,t);return e},e._getColGroupY=function(t,e){if(e<2)return this.colYs[t];t=this.colYs.slice(t,t+e);return Math.max.apply(Math,t)},e._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,i=1<t&&i+t>this.cols?0:i,e=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=e?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},e._manageStamp=function(t){var e=a(t),t=this._getElementOffset(t),i=this._getOption("originLeft")?t.left:t.right,n=i+e.outerWidth,i=Math.floor(i/this.columnWidth),i=Math.max(0,i),o=Math.floor(n/this.columnWidth);o-=n%this.columnWidth?0:1;for(var o=Math.min(this.cols-1,o),s=(this._getOption("originTop")?t.top:t.bottom)+e.outerHeight,r=i;r<=o;r++)this.colYs[r]=Math.max(s,this.colYs[r])},e._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},e._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},e.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},t}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i,t=t.create("masonry"),n=t.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(i in e.prototype)o[i]||(n[i]=e.prototype[i]);var s=n.measureColumns,r=(n.measureColumns=function(){this.items=this.isotope.filteredItems,s.call(this)},n._getOption);return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:r.apply(this.isotope,arguments)},t}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var t=t.create("fitRows"),e=t.prototype;return e._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},e._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter,i=(0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY),{x:this.x,y:this.y});return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,i},e._getContainerSize=function(){return{height:this.maxY}},t}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var t=t.create("vertical",{horizontalAlignment:0}),e=t.prototype;return e._resetLayout=function(){this.y=0},e._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e._getContainerSize=function(){return{height:this.y}},t}),function(r,a){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(t,e,i,n,o,s){return a(r,t,0,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=a(r,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):r.Isotope=a(r,r.Outlayer,r.getSize,r.matchesSelector,r.fizzyUIUtils,r.Isotope.Item,r.Isotope.LayoutMode)}(window,function(t,i,e,n,s,o,r){var a=t.jQuery,l=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},c=i.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0}),t=(c.Item=o,c.LayoutMode=r,c.prototype),u=(t._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),i.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},t.reloadItems=function(){this.itemGUID=0,i.prototype.reloadItems.call(this)},t._itemize=function(){for(var t=i.prototype._itemize.apply(this,arguments),e=0;e<t.length;e++)t[e].id=this.itemGUID++;return this._updateItemsSortData(t),t},t._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?s.extend(e.options,i):i,this.modes[t]=new e(this)},t.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},t._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},t.arrange=function(t){this.option(t),this._getIsInstant();t=this._filter(this.items);this.filteredItems=t.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[t]):this._hideReveal(t),this._sort(),this._layout()},t._init=t.arrange,t._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},t._getIsInstant=function(){var t=this._getOption("layoutInstant"),t=void 0!==t?t:!this._isLayoutInited;return this._isInstant=t},t._bindArrangeComplete=function(){function t(){e&&i&&n&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,n,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},t._filter=function(t){for(var e=this.options.filter,i=[],n=[],o=[],s=this._getFilterTest(e||"*"),r=0;r<t.length;r++){var a,l=t[r];l.isIgnored||((a=s(l))&&i.push(l),a&&l.isHidden?n.push(l):a||l.isHidden||o.push(l))}return{matches:i,needReveal:n,needHide:o}},t._getFilterTest=function(e){return a&&this.options.isJQueryFiltering?function(t){return a(t.element).is(e)}:"function"==typeof e?function(t){return e(t.element)}:function(t){return n(t.element,e)}},t.updateSortData=function(t){t=t?(t=s.makeArray(t),this.getItems(t)):this.items;this._getSorters(),this._updateItemsSortData(t)},t._getSorters=function(){var t,e=this.options.getSortData;for(t in e){var i=e[t];this._sorters[t]=u(i)}},t._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++)t[i].updateSortData()},function(t){if("string"!=typeof t)return t;var e,i,n=(t=l(t).split(" "))[0],o=(o=n.match(/^\[(.+)\]$/))&&o[1],s=(i=n,(e=o)?function(t){return t.getAttribute(e)}:function(t){t=t.querySelector(i);return t&&t.textContent}),r=c.sortDataParsers[t[1]];return r?function(t){return t&&r(s(t))}:function(t){return t&&s(t)}}),h=(c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},t._sort=function(){var t,r,a;this.options.sortBy&&(t=s.makeArray(this.options.sortBy),this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory)),r=this.sortHistory,a=this.options.sortAscending,this.filteredItems.sort(function(t,e){for(var i=0;i<r.length;i++){var n=r[i],o=t.sortData[n],s=e.sortData[n];if(s<o||o<s)return(s<o?1:-1)*((void 0!==a[n]?a[n]:a)?1:-1)}return 0}))},t._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},t._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(e)return e.options=this.options[t],e;throw new Error("No layout mode: "+t)},t._resetLayout=function(){i.prototype._resetLayout.call(this),this._mode()._resetLayout()},t._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},t._manageStamp=function(t){this._mode()._manageStamp(t)},t._getContainerSize=function(){return this._mode()._getContainerSize()},t.needsResizeLayout=function(){return this._mode().needsResizeLayout()},t.appended=function(t){var t=this.addItems(t);t.length&&(t=this._filterRevealAdded(t),this.filteredItems=this.filteredItems.concat(t))},t.prepended=function(t){var e,t=this._itemize(t);t.length&&(this._resetLayout(),this._manageStamps(),e=this._filterRevealAdded(t),this.layoutItems(this.filteredItems),this.filteredItems=e.concat(this.filteredItems),this.items=t.concat(this.items))},t._filterRevealAdded=function(t){t=this._filter(t);return this.hide(t.needHide),this.reveal(t.matches),this.layoutItems(t.matches,!0),t.matches},t.insert=function(t){var e=this.addItems(t);if(e.length){for(var i,n=e.length,o=0;o<n;o++)i=e[o],this.element.appendChild(i.element);t=this._filter(e).matches;for(o=0;o<n;o++)e[o].isLayoutInstant=!0;for(this.arrange(),o=0;o<n;o++)delete e[o].isLayoutInstant;this.reveal(t)}},t.remove);return t.remove=function(t){t=s.makeArray(t);var e=this.getItems(t);h.call(this,t);for(var i=e&&e.length,n=0;i&&n<i;n++){var o=e[n];s.removeFrom(this.filteredItems,o)}},t.shuffle=function(){for(var t=0;t<this.items.length;t++)this.items[t].sortData.random=Math.random();this.options.sortBy="random",this._sort(),this._layout()},t._noTransition=function(t,e){var i=this.options.transitionDuration,t=(this.options.transitionDuration=0,t.apply(this,e));return this.options.transitionDuration=i,t},t.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},c}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/rect",e):"object"==typeof module&&module.exports?module.exports=e():(t.Packery=t.Packery||{},t.Packery.Rect=e())}(window,function(){function a(t){for(var e in a.defaults)this[e]=a.defaults[e];for(e in t)this[e]=t[e]}a.defaults={x:0,y:0,width:0,height:0};var t=a.prototype;return t.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},t.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,n=t.x+t.width,o=t.y+t.height;return this.x<n&&e>t.x&&this.y<o&&i>t.y},t.getMaximalFreeRects=function(t){if(!this.overlaps(t))return!1;var e,i=[],n=this.x+this.width,o=this.y+this.height,s=t.x+t.width,r=t.y+t.height;return this.y<t.y&&(e=new a({x:this.x,y:this.y,width:this.width,height:t.y-this.y}),i.push(e)),s<n&&(e=new a({x:s,y:this.y,width:n-s,height:this.height}),i.push(e)),r<o&&(e=new a({x:this.x,y:r,width:this.width,height:o-r}),i.push(e)),this.x<t.x&&(e=new a({x:this.x,y:this.y,width:t.x-this.x,height:this.height}),i.push(e)),i},t.canFit=function(t){return this.width>=t.width&&this.height>=t.height},a}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/packer",["./rect"],e):"object"==typeof module&&module.exports?module.exports=e(require("./rect")):(t=t.Packery=t.Packery||{}).Packer=e(t.Rect)}(window,function(e){function t(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}var i=t.prototype,n=(i.reset=function(){this.spaces=[];var t=new e({x:0,y:0,width:this.width,height:this.height});this.spaces.push(t),this.sorter=n[this.sortDirection]||n.downwardLeftToRight},i.pack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.canFit(t)){this.placeInSpace(t,i);break}}},i.columnPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.x<=t.x&&i.x+i.width>=t.x+t.width&&i.height>=t.height-.01){t.y=i.y,this.placed(t);break}}},i.rowPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.y<=t.y&&i.y+i.height>=t.y+t.height&&i.width>=t.width-.01){t.x=i.x,this.placed(t);break}}},i.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},i.placed=function(t){for(var e=[],i=0;i<this.spaces.length;i++){var n=this.spaces[i],o=n.getMaximalFreeRects(t);o?e.push.apply(e,o):e.push(n)}this.spaces=e,this.mergeSortSpaces()},i.mergeSortSpaces=function(){t.mergeRects(this.spaces),this.spaces.sort(this.sorter)},i.addSpace=function(t){this.spaces.push(t),this.mergeSortSpaces()},t.mergeRects=function(t){var e=0,i=t[e];t:for(;i;){for(var n=0,o=t[e+n];o;){if(o==i)n++;else{if(o.contains(i)){t.splice(e,1),i=t[e];continue t}i.contains(o)?t.splice(e+n,1):n++}o=t[e+n]}i=t[++e]}return t},{downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}});return t}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("./rect")):t.Packery.Item=e(t.Outlayer,t.Packery.Rect)}(window,function(t,e){function i(){t.Item.apply(this,arguments)}var n="string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform",o=i.prototype=Object.create(t.Item.prototype),s=o._create,r=(o._create=function(){s.call(this),this.rect=new e},o.moveTo);return o.moveTo=function(t,e){var i=Math.abs(this.position.x-t),n=Math.abs(this.position.y-e);return this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&i<1&&n<1?void this.goTo(t,e):void r.apply(this,arguments)},o.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&n&&(this.element.style[n]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},o.disablePlacing=function(){this.isPlacing=!1},o.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},o.showDropPlaceholder=function(){var t=this.dropPlaceholder;t||((t=this.dropPlaceholder=document.createElement("div")).className="packery-drop-placeholder",t.style.position="absolute"),t.style.width=this.size.width+"px",t.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(t)},o.positionDropPlaceholder=function(){this.dropPlaceholder.style[n]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},o.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},i}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):t.Packery=e(t.getSize,t.Outlayer,t.Packery.Rect,t.Packery.Packer,t.Packery.Item)}(window,function(c,t,r,e,i){function n(t,e){return t.position.y-e.position.y||t.position.x-e.position.x}function o(t,e){return t.position.x-e.position.x||t.position.y-e.position.y}r.prototype.canFit=function(t){return this.width>=t.width-1&&this.height>=t.height-1};var s=t.create("packery"),i=(s.Item=i,s.prototype),a=(i._create=function(){t.prototype._create.call(this),this.packer=new e,this.shiftPacker=new e,this.isEnabled=!0,this.dragItemCount=0;var i=this;this.handleDraggabilly={dragStart:function(){i.itemDragStart(this.element)},dragMove:function(){i.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){i.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(t,e){e&&i.itemDragStart(t.currentTarget)},drag:function(t,e){e&&i.itemDragMove(t.currentTarget,e.position.left,e.position.top)},stop:function(t,e){e&&i.itemDragEnd(t.currentTarget)}}},i._resetLayout=function(){var t,e,i;this.getSize(),this._getMeasurements(),i=this._getOption("horizontal")?(t=1/0,e=this.size.innerHeight+this.gutter,"rightwardTopToBottom"):(t=this.size.innerWidth+this.gutter,e=1/0,"downwardLeftToRight"),this.packer.width=this.shiftPacker.width=t,this.packer.height=this.shiftPacker.height=e,this.packer.sortDirection=this.shiftPacker.sortDirection=i,this.packer.reset(),this.maxY=0,this.maxX=0},i._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},i._getItemLayoutPosition=function(t){var e;return this._setRectSize(t.element,t.rect),this.isShifting||0<this.dragItemCount?(e=this._getPackMethod(),this.packer[e](t.rect)):this.packer.pack(t.rect),this._setMaxXY(t.rect),t.rect},i.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},i._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},i._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},i._setRectSize=function(t,e){var t=c(t),i=t.outerWidth,t=t.outerHeight;(i||t)&&(i=this._applyGridGutter(i,this.columnWidth),t=this._applyGridGutter(t,this.rowHeight)),e.width=Math.min(i,this.packer.width),e.height=Math.min(t,this.packer.height)},i._applyGridGutter=function(t,e){if(!e)return t+this.gutter;var i=t%(e+=this.gutter);return Math[i&&i<1?"round":"ceil"](t/e)*e},i._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},i._manageStamp=function(t){var e=this.getItem(t);e=e&&e.isPlacing?e.rect:(e=this._getElementOffset(t),new r({x:this._getOption("originLeft")?e.left:e.right,y:this._getOption("originTop")?e.top:e.bottom})),this._setRectSize(t,e),this.packer.placed(e),this._setMaxXY(e)},i.sortItemsByPosition=function(){var t=this._getOption("horizontal")?o:n;this.items.sort(t)},i.fit=function(t,e,i){t=this.getItem(t);t&&(this.stamp(t.element),t.enablePlacing(),this.updateShiftTargets(t),e=void 0===e?t.rect.x:e,i=void 0===i?t.rect.y:i,this.shift(t,e,i),this._bindFitEvents(t),t.moveTo(t.rect.x,t.rect.y),this.shiftLayout(),this.unstamp(t.element),this.sortItemsByPosition(),t.disablePlacing())},i._bindFitEvents=function(t){function e(){2==++n&&i.dispatchEvent("fitComplete",null,[t])}var i=this,n=0;t.once("layout",e),this.once("layoutComplete",e)},i.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},i.needsResizeLayout=function(){var t=c(this.element),e=this._getOption("horizontal")?"innerHeight":"innerWidth";return t[e]!=this.size[e]},i.resizeShiftPercentLayout=function(){var i,e,n,t=this._getItemsForLayout(this.items),o=this._getOption("horizontal"),s=o?"y":"x",r=o?"height":"width",a=o?"rowHeight":"columnWidth",o=o?"innerHeight":"innerWidth",l=this[a];(l=l&&l+this.gutter)?(this._getMeasurements(),i=this[a]+this.gutter,t.forEach(function(t){var e=Math.round(t.rect[s]/l);t.rect[s]=e*i})):(e=c(this.element)[o]+this.gutter,n=this.packer[r],t.forEach(function(t){t.rect[s]=t.rect[s]/n*e})),this.shiftLayout()},i.itemDragStart=function(t){this.isEnabled&&(this.stamp(t),(t=this.getItem(t))&&(t.enablePlacing(),t.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(t)))},i.updateShiftTargets=function(t){this.shiftPacker.reset(),this._getBoundingRect();var i=this._getOption("originLeft"),n=this._getOption("originTop"),l=(this.stamps.forEach(function(t){var e=this.getItem(t);e&&e.isPlacing||(e=this._getElementOffset(t),e=new r({x:i?e.left:e.right,y:n?e.top:e.bottom}),this._setRectSize(t,e),this.shiftPacker.placed(e))},this),this._getOption("horizontal")),e=l?"rowHeight":"columnWidth",c=l?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var u=this[e];if(u=u&&u+this.gutter)for(var e=Math.ceil(t.rect[c]/u),o=Math.floor((this.shiftPacker[c]+this.gutter)/u),h=(o-e)*u,s=0;s<o;s++)this._addShiftTarget(s*u,0,h);else h=this.shiftPacker[c]+this.gutter-t.rect[c],this._addShiftTarget(0,0,h);var e=this._getItemsForLayout(this.items),d=this._getPackMethod();e.forEach(function(t){var e=t.rect,i=(this._setRectSize(t.element,e),this.shiftPacker[d](e),this._addShiftTarget(e.x,e.y,h),l?e.x+e.width:e.x),n=l?e.y:e.y+e.height;if(this._addShiftTarget(i,n,h),u)for(var o=Math.round(e[c]/u),s=1;s<o;s++){var r=l?i:e.x+u*s,a=l?e.y+u*s:n;this._addShiftTarget(r,a,h)}},this)},i._addShiftTarget=function(t,e,i){var n=this._getOption("horizontal")?e:t;0!==n&&i<n||-1==this.shiftTargetKeys.indexOf(i=t+","+e)&&(this.shiftTargetKeys.push(i),this.shiftTargets.push({x:t,y:e}))},i.shift=function(t,e,i){var n,o=1/0,s={x:e,y:i};this.shiftTargets.forEach(function(t){i=(e=s).x-t.x,e=e.y-t.y;var e,i=Math.sqrt(i*i+e*e);i<o&&(n=t,o=i)}),t.rect.x=n.x,t.rect.y=n.y},i.itemDragMove=function(t,e,i){function n(){o.shift(s,e,i),s.positionDropPlaceholder(),o.layout()}var o,s=this.isEnabled&&this.getItem(t);s&&(e-=this.size.paddingLeft,i-=this.size.paddingTop,o=this,t=new Date,this._itemDragTime&&t-this._itemDragTime<120?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(n,120)):(n(),this._itemDragTime=t))},i.itemDragEnd=function(t){function e(){2==++i&&(o.element.classList.remove("is-positioning-post-drag"),o.hideDropPlaceholder(),n.dispatchEvent("dragItemPositioned",null,[o]))}var i,n,o=this.isEnabled&&this.getItem(t);o&&(clearTimeout(this.dragTimeout),o.element.classList.add("is-positioning-post-drag"),i=0,n=this,o.once("layout",e),this.once("layoutComplete",e),o.moveTo(o.rect.x,o.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),o.disablePlacing(),this.unstamp(o.element))},i.bindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"on")},i.unbindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"off")},i._bindDraggabillyEvents=function(t,e){var i=this.handleDraggabilly;t[e]("dragStart",i.dragStart),t[e]("dragMove",i.dragMove),t[e]("dragEnd",i.dragEnd)},i.bindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"on")},i.unbindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"off")},i._bindUIDraggableEvents=function(t,e){var i=this.handleUIDraggable;t[e]("dragstart",i.start)[e]("drag",i.drag)[e]("dragstop",i.stop)},i.destroy);return i.destroy=function(){a.apply(this,arguments),this.isEnabled=!1},s.Rect=r,s.Packer=e,s}),function(t,e){"function"==typeof define&&define.amd?define(["isotope-layout/js/layout-mode","packery/js/packery"],e):"object"==typeof module&&module.exports?module.exports=e(require("isotope-layout/js/layout-mode"),require("packery")):e(t.Isotope.LayoutMode,t.Packery)}(window,function(t,e){var i,t=t.create("packery"),n=t.prototype,o={_getElementOffset:!0,_getMeasurement:!0};for(i in e.prototype)o[i]||(n[i]=e.prototype[i]);var s=n._resetLayout,r=(n._resetLayout=function(){this.packer=this.packer||new e.Packer,this.shiftPacker=this.shiftPacker||new e.Packer,s.apply(this,arguments)},n._getItemLayoutPosition),a=(n._getItemLayoutPosition=function(t){return t.rect=t.rect||new e.Rect,r.call(this,t)},n.needsResizeLayout),l=(n.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():a.call(this)},n._getOption);return n._getOption=function(t){return"horizontal"==t?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:l.apply(this.isotope,arguments)},t}),function(l,i,n,a){function c(t,e){this.settings=null,this.options=l.extend({},c.Defaults,e),this.$element=l(t),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},l.each(["onResize","onThrottledResize"],l.proxy(function(t,e){this._handlers[e]=l.proxy(this[e],this)},this)),l.each(c.Plugins,l.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),l.each(c.Workers,l.proxy(function(t,e){this._pipe.push({filter:e.filter,run:l.proxy(e.run,this)})},this)),this.setup(),this.initialize()}c.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:i,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},c.Width={Default:"default",Inner:"inner",Outer:"outer"},c.Type={Event:"event",State:"state"},c.Plugins={},c.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,n=this.settings.rtl,n={width:"auto","margin-left":n?e:"","margin-right":n?"":e};i||this.$stage.children().css(n),t.css=n}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,n=this._items.length,o=!this.settings.autoWidth,s=[];for(t.items={merge:!1,width:e};n--;)i=this._mergers[n],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=1<i||t.items.merge,s[n]=o?e*i:this._items[n].width();this._widths=s}},{filter:["items","settings"],run:function(){var t=[],e=this._items,i=this.settings,n=Math.max(2*i.items,4),o=2*Math.ceil(e.length/2),s=i.loop&&e.length?i.rewind?n:Math.max(n,o):0,r="",a="";for(s/=2;0<s;)t.push(this.normalize(t.length/2,!0)),r+=e[t[t.length-1]][0].outerHTML,t.push(this.normalize(e.length-1-(t.length-1)/2,!0)),a=e[t[t.length-1]][0].outerHTML+a,--s;this._clones=t,l(r).addClass("cloned").appendTo(this.$stage),l(a).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t,e,i=this.settings.rtl?1:-1,n=this._clones.length+this._items.length,o=-1,s=[];++o<n;)t=s[o-1]||0,e=this._widths[this.relative(o)]+this.settings.margin,s.push(t+e*i);this._coordinates=s}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,e={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(e)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,n=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],n.eq(e).css(t.css);else i&&(t.css.width=t.items.width,n.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){for(var t,e,i=this.settings.rtl?1:-1,n=2*this.settings.stagePadding,o=this.coordinates(this.current())+n,s=o+this.width()*i,r=[],a=0,l=this._coordinates.length;a<l;a++)t=this._coordinates[a-1]||0,e=Math.abs(this._coordinates[a])+n*i,(this.op(t,"<=",o)&&this.op(t,">",s)||this.op(e,"<",o)&&this.op(e,">",s))&&r.push(a);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+r.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],c.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=l("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(l("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},c.prototype.initializeItems=function(){var t=this.$element.find(".owl-item");if(t.length)return this._items=t.get().map(function(t){return l(t)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},c.prototype.initialize=function(){var t,e;this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")&&(t=this.$element.find("img"),e=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:a,e=this.$element.children(e).width(),t.length&&e<=0&&this.preloadAutoWidthImages(t)),this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},c.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},c.prototype.setup=function(){var e=this.viewport(),t=this.options.responsive,i=-1,n=null;t?(l.each(t,function(t){t<=e&&i<t&&(i=Number(t))}),"function"==typeof(n=l.extend({},this.options,t[i])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+i))):n=l.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=i,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},c.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},c.prototype.prepare=function(t){var e=this.trigger("prepare",{content:t});return e.data||(e.data=l("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(t)),this.trigger("prepared",{content:e.data}),e.data},c.prototype.update=function(){for(var t=0,e=this._pipe.length,i=l.proxy(function(t){return this[t]},this._invalidated),n={};t<e;)(this._invalidated.all||0<l.grep(this._pipe[t].filter,i).length)&&this._pipe[t].run(n),t++;this._invalidated={},this.is("valid")||this.enter("valid")},c.prototype.width=function(t){switch(t=t||c.Width.Default){case c.Width.Inner:case c.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},c.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},c.prototype.onThrottledResize=function(){i.clearTimeout(this.resizeTimer),this.resizeTimer=i.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},c.prototype.onResize=function(){return!!this._items.length&&this._width!==this.$element.width()&&!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))},c.prototype.registerEventHandlers=function(){l.support.transition&&this.$stage.on(l.support.transition.end+".owl.core",l.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(i,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",l.proxy(this.onDragEnd,this)))},c.prototype.onDragStart=function(t){var e=null;3!==t.which&&(e=l.support.transform?{x:(e=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===e.length?12:4],y:e[16===e.length?13:5]}:(e=this.$stage.position(),{x:this.settings.rtl?e.left+this.$stage.width()-this.width()+this.settings.margin:e.left,y:e.top}),this.is("animating")&&(l.support.transform?this.animate(e.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===t.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=l(t.target),this._drag.stage.start=e,this._drag.stage.current=e,this._drag.pointer=this.pointer(t),l(n).on("mouseup.owl.core touchend.owl.core",l.proxy(this.onDragEnd,this)),l(n).one("mousemove.owl.core touchmove.owl.core",l.proxy(function(t){var e=this.difference(this._drag.pointer,this.pointer(t));l(n).on("mousemove.owl.core touchmove.owl.core",l.proxy(this.onDragMove,this)),Math.abs(e.x)<Math.abs(e.y)&&this.is("valid")||(t.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},c.prototype.onDragMove=function(t){var e=null,i=null,n=this.difference(this._drag.pointer,this.pointer(t)),o=this.difference(this._drag.stage.start,n);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,o.x=((o.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),t=this.settings.pullDrag?-1*n.x/5:0,o.x=Math.max(Math.min(o.x,e+t),i+t)),this._drag.stage.current=o,this.animate(o.x))},c.prototype.onDragEnd=function(t){var t=this.difference(this._drag.pointer,this.pointer(t)),e=this._drag.stage.current,i=0<t.x^this.settings.rtl?"left":"right";l(n).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==t.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==t.x?i:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=i,(3<Math.abs(t.x)||300<(new Date).getTime()-this._drag.time)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},c.prototype.closest=function(i,n){var o=-1,s=this.width(),r=this.coordinates();return this.settings.freeDrag||l.each(r,l.proxy(function(t,e){return"left"===n&&e-30<i&&i<e+30?o=t:"right"===n&&e-s-30<i&&i<e-s+30?o=t+1:this.op(i,"<",e)&&this.op(i,">",r[t+1]!==a?r[t+1]:e-s)&&(o="left"===n?t+1:t),-1===o},this)),this.settings.loop||(this.op(i,">",r[this.minimum()])?o=i=this.minimum():this.op(i,"<",r[this.maximum()])&&(o=i=this.maximum())),o},c.prototype.animate=function(t){var e=0<this.speed();this.is("animating")&&this.onTransitionEnd(),e&&(this.enter("animating"),this.trigger("translate")),l.support.transform3d&&l.support.transition?this.$stage.css({transform:"translate3d("+t+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):e?this.$stage.animate({left:t+"px"},this.speed(),this.settings.fallbackEasing,l.proxy(this.onTransitionEnd,this)):this.$stage.css({left:t+"px"})},c.prototype.is=function(t){return this._states.current[t]&&0<this._states.current[t]},c.prototype.current=function(t){if(t!==a){if(0===this._items.length)return a;var e;t=this.normalize(t),this._current!==t&&((e=this.trigger("change",{property:{name:"position",value:t}})).data!==a&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}}))}return this._current},c.prototype.invalidate=function(t){return"string"===l.type(t)&&(this._invalidated[t]=!0,this.is("valid")&&this.leave("valid")),l.map(this._invalidated,function(t,e){return e})},c.prototype.reset=function(t){(t=this.normalize(t))!==a&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},c.prototype.normalize=function(t,e){var i=this._items.length,e=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=a:(t<0||i+e<=t)&&(t=((t-e/2)%i+i)%i+e/2),t},c.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},c.prototype.maximum=function(t){var e,i,n,o=this.settings,s=this._coordinates.length;if(o.loop)s=this._clones.length/2+this._items.length-1;else if(o.autoWidth||o.merge){if(e=this._items.length)for(i=this._items[--e].width(),n=this.$element.width();e--&&!((i+=this._items[e].width()+this.settings.margin)>n););s=e+1}else s=o.center?this._items.length-1:this._items.length-o.items;return t&&(s-=this._clones.length/2),Math.max(s,0)},c.prototype.minimum=function(t){return t?0:this._clones.length/2},c.prototype.items=function(t){return t===a?this._items.slice():(t=this.normalize(t,!0),this._items[t])},c.prototype.mergers=function(t){return t===a?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},c.prototype.clones=function(i){function n(t){return t%2==0?o+t/2:e-(t+1)/2}var e=this._clones.length/2,o=e+this._items.length;return i===a?l.map(this._clones,function(t,e){return n(e)}):l.map(this._clones,function(t,e){return t===i?n(e):null})},c.prototype.speed=function(t){return t!==a&&(this._speed=t),this._speed},c.prototype.coordinates=function(t){var e,i=1,n=t-1;return t===a?l.map(this._coordinates,l.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(i=-1,n=t+1),e=this._coordinates[t],e+=(this.width()-e+(this._coordinates[n]||0))/2*i):e=this._coordinates[n]||0,Math.ceil(e))},c.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},c.prototype.to=function(t,e){var i=this.current(),n=t-this.relative(i),o=(0<n)-(n<0),s=this._items.length,r=this.minimum(),a=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(n)>s/2&&(n+=-1*o*s),(o=(((t=i+n)-r)%s+s)%s+r)!==t&&o-n<=a&&0<o-n&&this.reset(i=(t=o)-n)):t=this.settings.rewind?(t%(a+=1)+a)%a:Math.max(r,Math.min(a,t)),this.speed(this.duration(i,t,e)),this.current(t),this.isVisible()&&this.update()},c.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},c.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},c.prototype.onTransitionEnd=function(t){if(t!==a&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},c.prototype.viewport=function(){var t;return this.options.responsiveBaseElement!==i?t=l(this.options.responsiveBaseElement).width():i.innerWidth?t=i.innerWidth:n.documentElement&&n.documentElement.clientWidth?t=n.documentElement.clientWidth:console.warn("Can not detect viewport width."),t},c.prototype.replace=function(t){this.$stage.empty(),this._items=[],t=t&&(t instanceof jQuery?t:l(t)),(t=this.settings.nestedItemSelector?t.find("."+this.settings.nestedItemSelector):t).filter(function(){return 1===this.nodeType}).each(l.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},c.prototype.add=function(t,e){var i=this.relative(this._current);e=e===a?this._items.length:this.normalize(e,!0),t=t instanceof jQuery?t:l(t),this.trigger("add",{content:t,position:e}),t=this.prepare(t),0===this._items.length||e===this._items.length?(0===this._items.length&&this.$stage.append(t),0!==this._items.length&&this._items[e-1].after(t),this._items.push(t),this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[e].before(t),this._items.splice(e,0,t),this._mergers.splice(e,0,+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[i]&&this.reset(this._items[i].index()),this.invalidate("items"),this.trigger("added",{content:t,position:e})},c.prototype.remove=function(t){(t=this.normalize(t,!0))!==a&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},c.prototype.preloadAutoWidthImages=function(t){t.each(l.proxy(function(t,e){this.enter("pre-loading"),e=l(e),l(new Image).one("load",l.proxy(function(t){e.attr("src",t.target.src),e.css("opacity",1),this.leave("pre-loading"),this.is("pre-loading")||this.is("initializing")||this.refresh()},this)).attr("src",e.attr("src")||e.attr("data-src")||e.attr("data-src-retina"))},this))},c.prototype.destroy=function(){for(var t in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),l(n).off(".owl.core"),!1!==this.settings.responsive&&(i.clearTimeout(this.resizeTimer),this.off(i,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[t].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},c.prototype.op=function(t,e,i){var n=this.settings.rtl;switch(e){case"<":return n?i<t:t<i;case">":return n?t<i:i<t;case">=":return n?t<=i:i<=t;case"<=":return n?i<=t:t<=i}},c.prototype.on=function(t,e,i,n){t.addEventListener?t.addEventListener(e,i,n):t.attachEvent&&t.attachEvent("on"+e,i)},c.prototype.off=function(t,e,i,n){t.removeEventListener?t.removeEventListener(e,i,n):t.detachEvent&&t.detachEvent("on"+e,i)},c.prototype.trigger=function(t,e,i,n,o){var s={item:{count:this._items.length,index:this.current()}},r=l.camelCase(l.grep(["on",t,i],function(t){return t}).join("-").toLowerCase()),a=l.Event([t,"owl",i||"carousel"].join(".").toLowerCase(),l.extend({relatedTarget:this},s,e));return this._supress[t]||(l.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(a)}),this.register({type:c.Type.Event,name:t}),this.$element.trigger(a),this.settings&&"function"==typeof this.settings[r]&&this.settings[r].call(this,a)),a},c.prototype.enter=function(t){l.each([t].concat(this._states.tags[t]||[]),l.proxy(function(t,e){this._states.current[e]===a&&(this._states.current[e]=0),this._states.current[e]++},this))},c.prototype.leave=function(t){l.each([t].concat(this._states.tags[t]||[]),l.proxy(function(t,e){this._states.current[e]--},this))},c.prototype.register=function(i){var e;i.type===c.Type.Event?(l.event.special[i.name]||(l.event.special[i.name]={}),l.event.special[i.name].owl||(e=l.event.special[i.name]._default,l.event.special[i.name]._default=function(t){return!e||!e.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&-1<t.namespace.indexOf("owl"):e.apply(this,arguments)},l.event.special[i.name].owl=!0)):i.type===c.Type.State&&(this._states.tags[i.name]?this._states.tags[i.name]=this._states.tags[i.name].concat(i.tags):this._states.tags[i.name]=i.tags,this._states.tags[i.name]=l.grep(this._states.tags[i.name],l.proxy(function(t,e){return l.inArray(t,this._states.tags[i.name])===e},this)))},c.prototype.suppress=function(t){l.each(t,l.proxy(function(t,e){this._supress[e]=!0},this))},c.prototype.release=function(t){l.each(t,l.proxy(function(t,e){delete this._supress[e]},this))},c.prototype.pointer=function(t){var e={x:null,y:null};return(t=(t=t.originalEvent||t||i.event).touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(e.x=t.pageX,e.y=t.pageY):(e.x=t.clientX,e.y=t.clientY),e},c.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},c.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},l.fn.owlCarousel=function(e){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=l(this),i=t.data("owl.carousel");i||(i=new c(this,"object"==typeof e&&e),t.data("owl.carousel",i),l.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(t,e){i.register({type:c.Type.Event,name:e}),i.$element.on(e+".owl.carousel.core",l.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([e]),i[e].apply(this,[].slice.call(arguments,1)),this.release([e]))},i))})),"string"==typeof e&&"_"!==e.charAt(0)&&i[e].apply(i,n)})},l.fn.owlCarousel.Constructor=c}(window.Zepto||window.jQuery,window,document),function(e,i){function n(t){this._core=t,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":e.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=e.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)}n.Defaults={autoRefresh:!0,autoRefreshInterval:500},n.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=i.setInterval(e.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},n.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},n.prototype.destroy=function(){var t,e;for(t in i.clearInterval(this._interval),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoRefresh=n}(window.Zepto||window.jQuery,window,document),function(a,o){function e(t){this._core=t,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(t){if(t.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(t.property&&"position"==t.property.name||"initialized"==t.type)){var e=this._core.settings,i=e.center&&Math.ceil(e.items/2)||e.items,n=e.center&&-1*i||0,o=(t.property&&void 0!==t.property.value?t.property.value:this._core.current())+n,s=this._core.clones().length,r=a.proxy(function(t,e){this.load(e)},this);for(0<e.lazyLoadEager&&(i+=e.lazyLoadEager,e.loop&&(o-=e.lazyLoadEager,i++));n++<i;)this.load(s/2+this._core.relative(o)),s&&a.each(this._core.clones(this._core.relative(o)),r),o++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)}e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(t){var t=this._core.$stage.children().eq(t),e=t&&t.find(".owl-lazy");!e||-1<a.inArray(t.get(0),this._loaded)||(e.each(a.proxy(function(t,e){var i=a(e),n=1<o.devicePixelRatio&&i.attr("data-src-retina")||i.attr("data-src")||i.attr("data-srcset");this._core.trigger("load",{element:i,url:n},"lazy"),i.is("img")?i.one("load.owl.lazy",a.proxy(function(){i.css("opacity",1),this._core.trigger("loaded",{element:i,url:n},"lazy")},this)).attr("src",n):i.is("source")?i.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:i,url:n},"lazy")},this)).attr("srcset",n):((e=new Image).onload=a.proxy(function(){i.css({"background-image":'url("'+n+'")',opacity:"1"}),this._core.trigger("loaded",{element:i,url:n},"lazy")},this),e.src=n)},this)),this._loaded.push(t.get(0)))},e.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(o,i){function n(t){this._core=t,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"===t.property.name&&this.update()},this),"loaded.owl.lazy":o.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=o.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var e=this;o(i).on("load",function(){e._core.settings.autoHeight&&e.update()}),o(i).resize(function(){e._core.settings.autoHeight&&(null!=e._intervalId&&clearTimeout(e._intervalId),e._intervalId=setTimeout(function(){e.update()},250))})}n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var t=this._core._current,e=t+this._core.settings.items,i=this._core.settings.lazyLoad,t=this._core.$stage.children().toArray().slice(t,e),n=[],e=0;o.each(t,function(t,e){n.push(o(e).height())}),(e=Math.max.apply(null,n))<=1&&i&&this._previousHeight&&(e=this._previousHeight),this._previousHeight=e,this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},o.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(u,e){function i(t){this._core=t,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":u.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":u.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":u.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":u.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":u.proxy(function(t){var e;t.namespace&&(e=u(t.content).find(".owl-video")).length&&(e.css("display","none"),this.fetch(e,u(t.content)))},this)},this._core.options=u.extend({},i.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",u.proxy(function(t){this.play(t)},this))}i.Defaults={video:!1,videoHeight:!1,videoWidth:!1},i.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",n=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),o=t.attr("data-width")||this._core.settings.videoWidth,s=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if(-1<(n=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))i="youtube";else if(-1<n[3].indexOf("vimeo"))i="vimeo";else{if(!(-1<n[3].indexOf("vzaar")))throw new Error("Video URL not supported.");i="vzaar"}n=n[6],this._videos[r]={type:i,id:n,width:o,height:s},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},i.prototype.thumbnail=function(e,t){function i(t){n=c.lazyLoad?u("<div/>",{class:"owl-video-tn "+l,srcType:t}):u("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+t+")"}),e.after(n),e.after('<div class="owl-video-play-icon"></div>')}var n,o,s=t.width&&t.height?"width:"+t.width+"px;height:"+t.height+"px;":"",r=e.find("img"),a="src",l="",c=this._core.settings;if(e.wrap(u("<div/>",{class:"owl-video-wrapper",style:s})),this._core.settings.lazyLoad&&(a="data-src",l="owl-lazy"),r.length)return i(r.attr(a)),r.remove(),!1;"youtube"===t.type?(o="//img.youtube.com/vi/"+t.id+"/hqdefault.jpg",i(o)):"vimeo"===t.type?u.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+t.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t[0].thumbnail_large,i(o)}}):"vzaar"===t.type&&u.ajax({type:"GET",url:"//vzaar.com/api/videos/"+t.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t.framegrab_url,i(o)}})},i.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},i.prototype.play=function(t){var e,t=u(t.target).closest("."+this._core.settings.itemClass),i=this._videos[t.attr("data-video")],n=i.width||"100%",o=i.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),t=this._core.items(this._core.relative(t.index())),this._core.reset(t.index()),(e=u('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height",o),e.attr("width",n),"youtube"===i.type?e.attr("src","//www.youtube.com/embed/"+i.id+"?autoplay=1&rel=0&v="+i.id):"vimeo"===i.type?e.attr("src","//player.vimeo.com/video/"+i.id+"?autoplay=1"):"vzaar"===i.type&&e.attr("src","//view.vzaar.com/"+i.id+"/player?autoplay=true"),u(e).wrap('<div class="owl-video-frame" />').insertAfter(t.find(".owl-video")),this._playing=t.addClass("owl-video-playing"))},i.prototype.isInFullScreen=function(){var t=e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement;return t&&u(t).parent().hasClass("owl-video-frame")},i.prototype.destroy=function(){var t,e;for(t in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},u.fn.owlCarousel.Constructor.Plugins.Video=i}(window.Zepto||window.jQuery,(window,document)),function(r){function e(t){this.core=t,this.core.options=r.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":r.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":r.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":r.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)}e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){var t,e,i,n,o,s;1===this.core.settings.items&&r.support.animation&&r.support.transition&&(this.core.speed(0),e=r.proxy(this.clear,this),i=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,s=this.core.settings.animateOut,this.core.current()!==this.previous&&(s&&(t=this.core.coordinates(this.previous)-this.core.coordinates(this.next),i.one(r.support.animation.end,e).css({left:t+"px"}).addClass("animated owl-animated-out").addClass(s)),o&&n.one(r.support.animation.end,e).addClass("animated owl-animated-in").addClass(o)))},e.prototype.clear=function(t){r(t.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},r.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,(window,document)),function(n,o,e){function i(t){this._core=t,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":n.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":n.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":n.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":n.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":n.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":n.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":n.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":n.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=n.extend({},i.Defaults,this._core.options)}i.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},i.prototype._next=function(t){this._call=o.setTimeout(n.proxy(this._next,this,t),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||e.hidden||this._core.next(t||this._core.settings.autoplaySpeed)},i.prototype.read=function(){return(new Date).getTime()-this._time},i.prototype.play=function(t,e){var i;this._core.is("rotating")||this._core.enter("rotating"),t=t||this._core.settings.autoplayTimeout,i=Math.min(this._time%(this._timeout||t),t),this._paused?(this._time=this.read(),this._paused=!1):o.clearTimeout(this._call),this._time+=this.read()%t-i,this._timeout=t,this._call=o.setTimeout(n.proxy(this._next,this,e),t-i)},i.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,o.clearTimeout(this._call),this._core.leave("rotating"))},i.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,o.clearTimeout(this._call))},i.prototype.destroy=function(){var t,e;for(t in this.stop(),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},n.fn.owlCarousel.Constructor.Plugins.autoplay=i}(window.Zepto||window.jQuery,window,document),function(o){"use strict";function e(t){this._core=t,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":o.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":o.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":o.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=o.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)}e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var t,i=this._core.settings;for(t in this._controls.$relative=(i.navContainer?o(i.navContainer):o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=o("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",o.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=o("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",o.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[o('<button role="button">').addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?o(i.dotsContainer):o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",o.proxy(function(t){var e=(o(t.target).parent().is(this._controls.$absolute)?o(t.target):o(t.target).parent()).index();t.preventDefault(),this.to(e,i.dotsSpeed)},this)),this._overrides)this._core[t]=o.proxy(this[t],this)},e.prototype.destroy=function(){var t,e,i,n,o=this._core.settings;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)"$relative"===e&&o.navContainer?this._controls[e].html(""):this._controls[e].remove();for(n in this.overides)this._core[n]=this._overrides[n];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},e.prototype.update=function(){var t,e,i=this._core.clones().length/2,n=i+this._core.items().length,o=this._core.maximum(!0),s=this._core.settings,r=s.center||s.autoWidth||s.dotsData?1:s.dotsEach||s.items;if("page"!==s.slideBy&&(s.slideBy=Math.min(s.slideBy,s.items)),s.dots||"page"==s.slideBy)for(this._pages=[],t=i,e=0;t<n;t++){if(r<=e||0===e){if(this._pages.push({start:Math.min(o,t-i),end:t-i+r-1}),Math.min(o,t-i)===o)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},e.prototype.draw=function(){var t=this._core.settings,e=this._core.items().length<=t.items,i=this._core.relative(this._core.current()),n=t.loop||t.rewind;this._controls.$relative.toggleClass("disabled",!t.nav||e),t.nav&&(this._controls.$previous.toggleClass("disabled",!n&&i<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!n&&i>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!t.dots||e),t.dots&&(n=this._pages.length-this._controls.$absolute.children().length,t.dotsData&&0!=n?this._controls.$absolute.html(this._templates.join("")):0<n?this._controls.$absolute.append(new Array(1+n).join(this._templates[0])):n<0&&this._controls.$absolute.children().slice(n).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(o.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(t){var e=this._core.settings;t.page={index:o.inArray(this.current(),this._pages),count:this._pages.length,size:e&&(e.center||e.autoWidth||e.dotsData?1:e.dotsEach||e.items)}},e.prototype.current=function(){var i=this._core.relative(this._core.current());return o.grep(this._pages,o.proxy(function(t,e){return t.start<=i&&t.end>=i},this)).pop()},e.prototype.getPosition=function(t){var e,i,n=this._core.settings;return"page"==n.slideBy?(e=o.inArray(this.current(),this._pages),i=this._pages.length,t?++e:--e,e=this._pages[(e%i+i)%i].start):(e=this._core.relative(this._core.current()),i=this._core.items().length,t?e+=n.slideBy:e-=n.slideBy),e},e.prototype.next=function(t){o.proxy(this._overrides.to,this._core)(this.getPosition(!0),t)},e.prototype.prev=function(t){o.proxy(this._overrides.to,this._core)(this.getPosition(!1),t)},e.prototype.to=function(t,e,i){!i&&this._pages.length?(i=this._pages.length,o.proxy(this._overrides.to,this._core)(this._pages[(t%i+i)%i].start,e)):o.proxy(this._overrides.to,this._core)(t,e)},o.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,(window,document)),function(n,o){"use strict";function e(t){this._core=t,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":n.proxy(function(t){t.namespace&&"URLHash"===this._core.settings.startPosition&&n(o).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":n.proxy(function(t){var e;t.namespace&&(e=n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"))&&(this._hashes[e]=t.content)},this),"changed.owl.carousel":n.proxy(function(t){var i;t.namespace&&"position"===t.property.name&&(i=this._core.items(this._core.relative(this._core.current())),(t=n.map(this._hashes,function(t,e){return t===i?e:null}).join())&&o.location.hash.slice(1)!==t&&(o.location.hash=t))},this)},this._core.options=n.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),n(o).on("hashchange.owl.navigation",n.proxy(function(t){var e=o.location.hash.substring(1),i=this._core.$stage.children(),i=this._hashes[e]&&i.index(this._hashes[e]);void 0!==i&&i!==this._core.current()&&this._core.to(this._core.relative(i),!1,!0)},this))}e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var t,e;for(t in n(o).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},n.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(o){function e(t,i){var n=!1,e=t.charAt(0).toUpperCase()+t.slice(1);return o.each((t+" "+r.join(e+" ")+e).split(" "),function(t,e){if(void 0!==s[e])return n=!i||e,!1}),n}function t(t){return e(t,!0)}var s=o("<support>").get(0).style,r="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},n=function(){return!!e("transform")},a=function(){return!!e("perspective")},l=function(){return!!e("animation")};!function(){return!!e("transition")}()||(o.support.transition=new String(t("transition")),o.support.transition.end=i.transition.end[o.support.transition]),l()&&(o.support.animation=new String(t("animation")),o.support.animation.end=i.animation.end[o.support.animation]),n()&&(o.support.transform=new String(t("transform")),o.support.transform3d=a())}(window.Zepto||window.jQuery,(window,document)),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(c){function t(){}function u(t,e){f.ev.on("mfp"+t+i,e)}function h(t,e,i,n){var o=document.createElement("div");return o.className="mfp-"+t,i&&(o.innerHTML=i),n?e&&e.appendChild(o):(o=c(o),e&&o.appendTo(e)),o}function d(t,e){f.ev.triggerHandler("mfp"+t,e),f.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),f.st.callbacks[t]&&f.st.callbacks[t].apply(f,c.isArray(e)?e:[e]))}function p(t){return t===e&&f.currTemplate.closeBtn||(f.currTemplate.closeBtn=c(f.st.closeMarkup.replace("%title%",f.st.tClose)),e=t),f.currTemplate.closeBtn}function s(){c.magnificPopup.instance||((f=new t).init(),c.magnificPopup.instance=f)}var f,n,m,o,g,e,a="Close",l="BeforeClose",v="MarkupParse",i=".mfp",y="mfp-ready",r="mfp-removing",b="mfp-prevent-close",_=!!window.jQuery,w=c(window);c.magnificPopup={instance:null,proto:t.prototype={constructor:t,init:function(){var t=navigator.appVersion;f.isLowIE=f.isIE8=document.all&&!document.addEventListener,f.isAndroid=/android/gi.test(t),f.isIOS=/iphone|ipad|ipod/gi.test(t),f.supportsTransition=function(){var t=document.createElement("p").style,e=["ms","O","Moz","Webkit"];if(void 0!==t.transition)return!0;for(;e.length;)if(e.pop()+"Transition"in t)return!0;return!1}(),f.probablyMobile=f.isAndroid||f.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),m=c(document),f.popupsCache={}},open:function(t){if(!1===t.isObj){f.items=t.items.toArray(),f.index=0;for(var e,i=t.items,n=0;n<i.length;n++)if((e=(e=i[n]).parsed?e.el[0]:e)===t.el[0]){f.index=n;break}}else f.items=c.isArray(t.items)?t.items:[t.items],f.index=t.index||0;if(!f.isOpen){f.types=[],g="",t.mainEl&&t.mainEl.length?f.ev=t.mainEl.eq(0):f.ev=m,t.key?(f.popupsCache[t.key]||(f.popupsCache[t.key]={}),f.currTemplate=f.popupsCache[t.key]):f.currTemplate={},f.st=c.extend(!0,{},c.magnificPopup.defaults,t),f.fixedContentPos="auto"===f.st.fixedContentPos?!f.probablyMobile:f.st.fixedContentPos,f.st.modal&&(f.st.closeOnContentClick=!1,f.st.closeOnBgClick=!1,f.st.showCloseBtn=!1,f.st.enableEscapeKey=!1),f.bgOverlay||(f.bgOverlay=h("bg").on("click.mfp",function(){f.close()}),f.wrap=h("wrap").attr("tabindex",-1).on("click.mfp",function(t){f._checkIfClose(t.target)&&f.close()}),f.container=h("container",f.wrap)),f.contentContainer=h("content"),f.st.preloader&&(f.preloader=h("preloader",f.container,f.st.tLoading));var o=c.magnificPopup.modules;for(n=0;n<o.length;n++){var s=(s=o[n]).charAt(0).toUpperCase()+s.slice(1);f["init"+s].call(f)}d("BeforeOpen"),f.st.showCloseBtn&&(f.st.closeBtnInside?(u(v,function(t,e,i,n){i.close_replaceWith=p(n.type)}),g+=" mfp-close-btn-in"):f.wrap.append(p())),f.st.alignTop&&(g+=" mfp-align-top"),f.fixedContentPos?f.wrap.css({overflow:f.st.overflowY,overflowX:"hidden",overflowY:f.st.overflowY}):f.wrap.css({top:w.scrollTop(),position:"absolute"}),!1!==f.st.fixedBgPos&&("auto"!==f.st.fixedBgPos||f.fixedContentPos)||f.bgOverlay.css({height:m.height(),position:"absolute"}),f.st.enableEscapeKey&&m.on("keyup.mfp",function(t){27===t.keyCode&&f.close()}),w.on("resize.mfp",function(){f.updateSize()}),f.st.closeOnContentClick||(g+=" mfp-auto-cursor"),g&&f.wrap.addClass(g);var r=f.wH=w.height(),a={},l=(f.fixedContentPos&&f._hasScrollBar(r)&&((l=f._getScrollbarSize())&&(a.marginRight=l)),f.fixedContentPos&&(f.isIE7?c("body, html").css("overflow","hidden"):a.overflow="hidden"),f.st.mainClass);return f.isIE7&&(l+=" mfp-ie7"),l&&f._addClassToMFP(l),f.updateItemHTML(),d("BuildControls"),c("html").css(a),f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo||c(document.body)),f._lastFocusedEl=document.activeElement,setTimeout(function(){f.content?(f._addClassToMFP(y),f._setFocus()):f.bgOverlay.addClass(y),m.on("focusin.mfp",f._onFocusIn)},16),f.isOpen=!0,f.updateSize(r),d("Open"),t}f.updateItemHTML()},close:function(){f.isOpen&&(d(l),f.isOpen=!1,f.st.removalDelay&&!f.isLowIE&&f.supportsTransition?(f._addClassToMFP(r),setTimeout(function(){f._close()},f.st.removalDelay)):f._close())},_close:function(){d(a);var t=r+" "+y+" ";f.bgOverlay.detach(),f.wrap.detach(),f.container.empty(),f.st.mainClass&&(t+=f.st.mainClass+" "),f._removeClassFromMFP(t),f.fixedContentPos&&(t={marginRight:""},f.isIE7?c("body, html").css("overflow",""):t.overflow="",c("html").css(t)),m.off("keyup.mfp focusin.mfp"),f.ev.off(i),f.wrap.attr("class","mfp-wrap").removeAttr("style"),f.bgOverlay.attr("class","mfp-bg"),f.container.attr("class","mfp-container"),!f.st.showCloseBtn||f.st.closeBtnInside&&!0!==f.currTemplate[f.currItem.type]||f.currTemplate.closeBtn&&f.currTemplate.closeBtn.detach(),f.st.autoFocusLast&&f._lastFocusedEl&&c(f._lastFocusedEl).focus(),f.currItem=null,f.content=null,f.currTemplate=null,f.prevHeight=0,d("AfterClose")},updateSize:function(t){var e;f.isIOS?(e=document.documentElement.clientWidth/window.innerWidth,e=window.innerHeight*e,f.wrap.css("height",e),f.wH=e):f.wH=t||w.height(),f.fixedContentPos||f.wrap.css("height",f.wH),d("Resize")},updateItemHTML:function(){var t=f.items[f.index],e=(f.contentContainer.detach(),f.content&&f.content.detach(),(t=t.parsed?t:f.parseEl(f.index)).type),i=(d("BeforeChange",[f.currItem?f.currItem.type:"",e]),f.currItem=t,f.currTemplate[e]||(i=!!f.st[e]&&f.st[e].markup,d("FirstMarkupParse",i),f.currTemplate[e]=!i||c(i)),o&&o!==t.type&&f.container.removeClass("mfp-"+o+"-holder"),f["get"+e.charAt(0).toUpperCase()+e.slice(1)](t,f.currTemplate[e]));f.appendContent(i,e),t.preloaded=!0,d("Change",t),o=t.type,f.container.prepend(f.contentContainer),d("AfterChange")},appendContent:function(t,e){(f.content=t)?f.st.showCloseBtn&&f.st.closeBtnInside&&!0===f.currTemplate[e]?f.content.find(".mfp-close").length||f.content.append(p()):f.content=t:f.content="",d("BeforeAppend"),f.container.addClass("mfp-"+e+"-holder"),f.contentContainer.append(f.content)},parseEl:function(t){var e,i=f.items[t];if((i=i.tagName?{el:c(i)}:(e=i.type,{data:i,src:i.src})).el){for(var n=f.types,o=0;o<n.length;o++)if(i.el.hasClass("mfp-"+n[o])){e=n[o];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=e||f.st.type||"inline",i.index=t,i.parsed=!0,f.items[t]=i,d("ElementParse",i),f.items[t]},addGroup:function(e,i){function t(t){t.mfpEl=this,f._openClick(t,e,i)}var n="click.magnificPopup";(i=i||{}).mainEl=e,i.items?(i.isObj=!0,e.off(n).on(n,t)):(i.isObj=!1,i.delegate?e.off(n).on(n,i.delegate,t):(i.items=e).off(n).on(n,t))},_openClick:function(t,e,i){if((void 0!==i.midClick?i:c.magnificPopup.defaults).midClick||!(2===t.which||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)){var n=(void 0!==i.disableOn?i:c.magnificPopup.defaults).disableOn;if(n)if(c.isFunction(n)){if(!n.call(f))return!0}else if(w.width()<n)return!0;t.type&&(t.preventDefault(),f.isOpen&&t.stopPropagation()),i.el=c(t.mfpEl),i.delegate&&(i.items=e.find(i.delegate)),f.open(i)}},updateStatus:function(t,e){var i;f.preloader&&(n!==t&&f.container.removeClass("mfp-s-"+n),i={status:t,text:e=e||"loading"!==t?e:f.st.tLoading},d("UpdateStatus",i),t=i.status,f.preloader.html(e=i.text),f.preloader.find("a").on("click",function(t){t.stopImmediatePropagation()}),f.container.addClass("mfp-s-"+t),n=t)},_checkIfClose:function(t){if(!c(t).hasClass(b)){var e=f.st.closeOnContentClick,i=f.st.closeOnBgClick;if(e&&i)return!0;if(!f.content||c(t).hasClass("mfp-close")||f.preloader&&t===f.preloader[0])return!0;if(t===f.content[0]||c.contains(f.content[0],t)){if(e)return!0}else if(i&&c.contains(document,t))return!0;return!1}},_addClassToMFP:function(t){f.bgOverlay.addClass(t),f.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t),f.wrap.removeClass(t)},_hasScrollBar:function(t){return(f.isIE7?m.height():document.body.scrollHeight)>(t||w.height())},_setFocus:function(){(f.st.focus?f.content.find(f.st.focus).eq(0):f.wrap).focus()},_onFocusIn:function(t){return t.target===f.wrap[0]||c.contains(f.wrap[0],t.target)?void 0:(f._setFocus(),!1)},_parseMarkup:function(o,t,e){var s;e.data&&(t=c.extend(e.data,t)),d(v,[o,t,e]),c.each(t,function(t,e){if(void 0===e||!1===e)return!0;var i,n;1<(s=t.split("_")).length?0<(i=o.find(".mfp-"+s[0])).length&&("replaceWith"===(n=s[1])?i[0]!==e[0]&&i.replaceWith(e):"img"===n?i.is("img")?i.attr("src",e):i.replaceWith(c("<img>").attr("src",e).attr("class",i.attr("class"))):i.attr(s[1],e)):o.find(".mfp-"+t).html(e)})},_getScrollbarSize:function(){var t;return void 0===f.scrollbarSize&&((t=document.createElement("div")).style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t),f.scrollbarSize=t.offsetWidth-t.clientWidth,document.body.removeChild(t)),f.scrollbarSize}},modules:[],open:function(t,e){return s(),(t=t?c.extend(!0,{},t):{}).isObj=!0,t.index=e||0,this.instance.open(t)},close:function(){return c.magnificPopup.instance&&c.magnificPopup.instance.close()},registerModule:function(t,e){e.options&&(c.magnificPopup.defaults[t]=e.options),c.extend(this.proto,e.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},c.fn.magnificPopup=function(t){s();var e,i,n,o=c(this);return"string"==typeof t?"open"===t?(e=_?o.data("magnificPopup"):o[0].magnificPopup,i=parseInt(arguments[1],10)||0,n=e.items?e.items[i]:(n=o,(n=e.delegate?n.find(e.delegate):n).eq(i)),f._openClick({mfpEl:n},o,e)):f.isOpen&&f[t].apply(f,Array.prototype.slice.call(arguments,1)):(t=c.extend(!0,{},t),_?o.data("magnificPopup",t):o[0].magnificPopup=t,f.addGroup(o,t)),o};function x(){E&&(T.after(E.addClass(C)).detach(),E=null)}var C,T,E,k="inline";c.magnificPopup.registerModule(k,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){f.types.push(k),u(a+"."+k,function(){x()})},getInline:function(t,e){var i,n,o;return x(),t.src?(i=f.st.inline,(n=c(t.src)).length?((o=n[0].parentNode)&&o.tagName&&(T||(C=i.hiddenClass,T=h(C),C="mfp-"+C),E=n.after(T).detach().removeClass(C)),f.updateStatus("ready")):(f.updateStatus("error",i.tNotFound),n=c("<div>")),t.inlineElement=n):(f.updateStatus("ready"),f._parseMarkup(e,{},t),e)}}});function A(){S&&c(document.body).removeClass(S)}function P(){A(),f.req&&f.req.abort()}var S,I="ajax";c.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){f.types.push(I),S=f.st.ajax.cursor,u(a+"."+I,P),u("BeforeChange.ajax",P)},getAjax:function(n){S&&c(document.body).addClass(S),f.updateStatus("loading");var t=c.extend({url:n.src,success:function(t,e,i){t={data:t,xhr:i};d("ParseAjax",t),f.appendContent(c(t.data),I),n.finished=!0,A(),f._setFocus(),setTimeout(function(){f.wrap.addClass(y)},16),f.updateStatus("ready"),d("AjaxContentAdded")},error:function(){A(),n.finished=n.loadError=!0,f.updateStatus("error",f.st.ajax.tError.replace("%url%",n.src))}},f.st.ajax.settings);return f.req=c.ajax(t),""}}});var L;c.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var t=f.st.image,e=".image";f.types.push("image"),u("Open"+e,function(){"image"===f.currItem.type&&t.cursor&&c(document.body).addClass(t.cursor)}),u(a+e,function(){t.cursor&&c(document.body).removeClass(t.cursor),w.off("resize.mfp")}),u("Resize"+e,f.resizeImage),f.isLowIE&&u("AfterChange",f.resizeImage)},resizeImage:function(){var t,e=f.currItem;e&&e.img&&f.st.image.verticalFit&&(t=0,f.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",f.wH-t))},_onImageHasSize:function(t){t.img&&(t.hasSize=!0,L&&clearInterval(L),t.isCheckingImgSize=!1,d("ImageHasSize",t),t.imgHidden&&(f.content&&f.content.removeClass("mfp-loading"),t.imgHidden=!1))},findImageSize:function(e){function i(t){L&&clearInterval(L),L=setInterval(function(){return 0<o.naturalWidth?void f._onImageHasSize(e):(200<n&&clearInterval(L),void(3===++n?i(10):40===n?i(50):100===n&&i(500)))},t)}var n=0,o=e.img[0];i(1)},getImage:function(t,e){function i(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,d("ImageLoadComplete")):++s<200?setTimeout(i,100):n())}function n(){t&&(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("error",r.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)}var o,s=0,r=f.st.image,a=e.find(".mfp-img");return a.length&&((o=document.createElement("img")).className="mfp-img",t.el&&t.el.find("img").length&&(o.alt=t.el.find("img").attr("alt")),t.img=c(o).on("load.mfploader",i).on("error.mfploader",n),o.src=t.src,a.is("img")&&(t.img=t.img.clone()),0<(o=t.img[0]).naturalWidth?t.hasSize=!0:o.width||(t.hasSize=!1)),f._parseMarkup(e,{title:function(t){if(t.data&&void 0!==t.data.title)return t.data.title;var e=f.st.image.titleSrc;if(e){if(c.isFunction(e))return e.call(f,t);if(t.el)return t.el.attr(e)||""}return""}(t),img_replaceWith:t.img},t),f.resizeImage(),t.hasSize?(L&&clearInterval(L),t.loadError?(e.addClass("mfp-loading"),f.updateStatus("error",r.tError.replace("%url%",t.src))):(e.removeClass("mfp-loading"),f.updateStatus("ready"))):(f.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,e.addClass("mfp-loading"),f.findImageSize(t))),e}}});function O(t){var e;f.currTemplate[M]&&(e=f.currTemplate[M].find("iframe")).length&&(t||(e[0].src="//about:blank"),f.isIE8&&e.css("display",t?"block":"none"))}function z(t){var e=f.items.length;return e-1<t?t-e:t<0?e+t:t}function N(t,e,i){return t.replace(/%curr%/gi,e+1).replace(/%total%/gi,i)}c.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t,e,i,n,o,s,r=f.st.zoom;r.enabled&&f.supportsTransition&&(n=r.duration,o=function(t){var t=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),e="all "+r.duration/1e3+"s "+r.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},n="transition";return i["-webkit-"+n]=i["-moz-"+n]=i["-o-"+n]=i[n]=e,t.css(i),t},s=function(){f.content.css("visibility","visible")},u("BuildControls.zoom",function(){f._allowZoom()&&(clearTimeout(e),f.content.css("visibility","hidden"),(t=f._getItemToZoom())?((i=o(t)).css(f._getOffset()),f.wrap.append(i),e=setTimeout(function(){i.css(f._getOffset(!0)),e=setTimeout(function(){s(),setTimeout(function(){i.remove(),t=i=null,d("ZoomAnimationEnded")},16)},n)},16)):s())}),u(l+".zoom",function(){if(f._allowZoom()){if(clearTimeout(e),f.st.removalDelay=n,!t){if(!(t=f._getItemToZoom()))return;i=o(t)}i.css(f._getOffset(!0)),f.wrap.append(i),f.content.css("visibility","hidden"),setTimeout(function(){i.css(f._getOffset())},16)}}),u(a+".zoom",function(){f._allowZoom()&&(s(),i&&i.remove(),t=null)}))},_allowZoom:function(){return"image"===f.currItem.type},_getItemToZoom:function(){return!!f.currItem.hasSize&&f.currItem.img},_getOffset:function(t){var t=t?f.currItem.img:f.st.zoom.opener(f.currItem.el||f.currItem),e=t.offset(),i=parseInt(t.css("padding-top"),10),n=parseInt(t.css("padding-bottom"),10),t=(e.top-=c(window).scrollTop()-i,{width:t.width(),height:(_?t.innerHeight():t[0].offsetHeight)-n-i});return(D=void 0===D?void 0!==document.createElement("p").style.MozTransform:D)?t["-moz-transform"]=t.transform="translate("+e.left+"px,"+e.top+"px)":(t.left=e.left,t.top=e.top),t}}});var D,M="iframe",j=(c.magnificPopup.registerModule(M,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){f.types.push(M),u("BeforeChange",function(t,e,i){e!==i&&(e===M?O():i===M&&O(!0))}),u(a+"."+M,function(){O()})},getIframe:function(t,e){var i=t.src,n=f.st.iframe,o=(c.each(n.patterns,function(){return-1<i.indexOf(this.index)?(this.id&&(i="string"==typeof this.id?i.substr(i.lastIndexOf(this.id)+this.id.length,i.length):this.id.call(this,i)),i=this.src.replace("%id%",i),!1):void 0}),{});return n.srcAction&&(o[n.srcAction]=i),f._parseMarkup(e,o,t),f.updateStatus("ready"),e}}}),c.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var s=f.st.gallery,t=".mfp-gallery";return f.direction=!0,!(!s||!s.enabled)&&(g+=" mfp-gallery",u("Open"+t,function(){s.navigateByImgClick&&f.wrap.on("click"+t,".mfp-img",function(){return 1<f.items.length?(f.next(),!1):void 0}),m.on("keydown"+t,function(t){37===t.keyCode?f.prev():39===t.keyCode&&f.next()})}),u("UpdateStatus"+t,function(t,e){e.text&&(e.text=N(e.text,f.currItem.index,f.items.length))}),u(v+t,function(t,e,i,n){var o=f.items.length;i.counter=1<o?N(s.tCounter,n.index,o):""}),u("BuildControls"+t,function(){var t,e;1<f.items.length&&s.arrows&&!f.arrowLeft&&(e=s.arrowMarkup,t=f.arrowLeft=c(e.replace(/%title%/gi,s.tPrev).replace(/%dir%/gi,"left")).addClass(b),e=f.arrowRight=c(e.replace(/%title%/gi,s.tNext).replace(/%dir%/gi,"right")).addClass(b),t.click(function(){f.prev()}),e.click(function(){f.next()}),f.container.append(t.add(e)))}),u("Change"+t,function(){f._preloadTimeout&&clearTimeout(f._preloadTimeout),f._preloadTimeout=setTimeout(function(){f.preloadNearbyImages(),f._preloadTimeout=null},16)}),void u(a+t,function(){m.off(t),f.wrap.off("click"+t),f.arrowRight=f.arrowLeft=null}))},next:function(){f.direction=!0,f.index=z(f.index+1),f.updateItemHTML()},prev:function(){f.direction=!1,f.index=z(f.index-1),f.updateItemHTML()},goTo:function(t){f.direction=t>=f.index,f.index=t,f.updateItemHTML()},preloadNearbyImages:function(){for(var t=f.st.gallery.preload,e=Math.min(t[0],f.items.length),i=Math.min(t[1],f.items.length),n=1;n<=(f.direction?i:e);n++)f._preloadItem(f.index+n);for(n=1;n<=(f.direction?e:i);n++)f._preloadItem(f.index-n)},_preloadItem:function(t){var e;t=z(t),f.items[t].preloaded||((e=f.items[t]).parsed||(e=f.parseEl(t)),d("LazyLoad",e),"image"===e.type&&(e.img=c('<img class="mfp-img" />').on("load.mfploader",function(){e.hasSize=!0}).on("error.mfploader",function(){e.hasSize=!0,e.loadError=!0,d("LazyLoadError",e)}).attr("src",e.src)),e.preloaded=!0)}}}),"retina");c.magnificPopup.registerModule(j,{options:{replaceSrc:function(t){return t.src.replace(/\.\w+$/,function(t){return"@2x"+t})},ratio:1},proto:{initRetina:function(){var i,n;1<window.devicePixelRatio&&(i=f.st.retina,n=i.ratio,1<(n=isNaN(n)?n():n)&&(u("ImageHasSize."+j,function(t,e){e.img.css({"max-width":e.img[0].naturalWidth/n,width:"100%"})}),u("ElementParse."+j,function(t,e){e.src=i.replaceSrc(e,n)})))}}}),s()}),function(){"use strict";function e(t){if(void 0===t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}var n,i,t,h;function o(t,e,i){n(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(i),this.isReady&&this.init()}e.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],e.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],e.prototype.scan=function(t){for(var e,i,n=t.querySelectorAll(this.TYPES.join(",")),o=0;o<n.length;o++)i=(0,this[(e=n[o]).tagName.toLowerCase()+"ToPath"])(this.parseAttr(e.attributes)),i=this.pathMaker(e,i),e.parentNode.replaceChild(i,e)},e.prototype.lineToPath=function(t){var e={},i=t.x1||0,n=t.y1||0,o=t.x2||0,t=t.y2||0;return e.d="M"+i+","+n+"L"+o+","+t,e},e.prototype.rectToPath=function(t){var e,i={},n=parseFloat(t.x)||0,o=parseFloat(t.y)||0,s=parseFloat(t.width)||0,r=parseFloat(t.height)||0;return t.rx||t.ry?(e=parseInt(t.rx,10)||-1,t=parseInt(t.ry,10)||-1,e=Math.min(Math.max(e<0?t:e,0),s/2),t=Math.min(Math.max(t<0?e:t,0),r/2),i.d="M "+(n+e)+","+o+" L "+(n+s-e)+","+o+" A "+e+","+t+",0,0,1,"+(n+s)+","+(o+t)+" L "+(n+s)+","+(o+r-t)+" A "+e+","+t+",0,0,1,"+(n+s-e)+","+(o+r)+" L "+(n+e)+","+(o+r)+" A "+e+","+t+",0,0,1,"+n+","+(o+r-t)+" L "+n+","+(o+t)+" A "+e+","+t+",0,0,1,"+(n+e)+","+o):i.d="M"+n+" "+o+" L"+(n+s)+" "+o+" L"+(n+s)+" "+(o+r)+" L"+n+" "+(o+r)+" Z",i},e.prototype.polylineToPath=function(t){var e,i={},n=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){for(var o=[],s=0;s<n.length;s+=2)o.push(n[s]+","+n[s+1]);n=o}for(e="M"+n[0],s=1;s<n.length;s++)-1!==n[s].indexOf(",")&&(e+="L"+n[s]);return i.d=e,i},e.prototype.polygonToPath=function(t){t=e.prototype.polylineToPath(t);return t.d+="Z",t},e.prototype.ellipseToPath=function(t){var e={},i=parseFloat(t.rx)||0,n=parseFloat(t.ry)||0,o=parseFloat(t.cx)||0,t=parseFloat(t.cy)||0,s=o-i,r=t,o=parseFloat(o)+parseFloat(i);return e.d="M"+s+","+r+"A"+i+","+n+" 0,1,1 "+o+","+t+"A"+i+","+n+" 0,1,1 "+s+","+t,e},e.prototype.circleToPath=function(t){var e={},i=parseFloat(t.r)||0,n=parseFloat(t.cx)||0,t=parseFloat(t.cy)||0,o=n-i,s=t,n=parseFloat(n)+parseFloat(i);return e.d="M"+o+","+s+"A"+i+","+i+" 0,1,1 "+n+","+t+"A"+i+","+i+" 0,1,1 "+o+","+t,e},e.prototype.pathMaker=function(t,e){for(var i,n=document.createElementNS("http://www.w3.org/2000/svg","path"),o=0;o<t.attributes.length;o++)i=t.attributes[o],-1===this.ATTR_WATCH.indexOf(i.name)&&n.setAttribute(i.name,i.value);for(o in e)n.setAttribute(o,e[o]);return n},e.prototype.parseAttr=function(t){for(var e,i={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");i[e.name]=e.value}return i},o.LINEAR=function(t){return t},o.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},o.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},o.EASE_IN=function(t){return Math.pow(t,3)},o.EASE_OUT_BOUNCE=function(t){var e=1-Math.cos(t*(.5*Math.PI)),e=Math.pow(e,1.5),t=Math.pow(1-t,2);return 1-t+(1-Math.abs(Math.cos(e*(2.5*Math.PI))))*t},o.prototype.setElement=function(e,i){var n,t,o;if(void 0===e)throw new Error('Vivus [constructor]: "element" parameter is required');if(e.constructor===String&&!(e=document.getElementById(e)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=e,i&&i.file)return n=this,t=function(){var t=document.createElement("div"),t=(t.innerHTML=this.responseText,t.querySelector("svg"));if(!t)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+i.file);n.el=t,n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%"),n.parentEl.appendChild(n.el),n.isReady=!0,n.init(),n=null},(o=new window.XMLHttpRequest).addEventListener("load",t),o.open("GET",i.file),void o.send();switch(e.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=e,this.isReady=!0;break;case window.HTMLObjectElement:n=this,(t=function(t){if(!n.isReady){if(n.el=e.contentDocument&&e.contentDocument.querySelector("svg"),!n.el&&t)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");n.el&&(e.getAttribute("built-by-vivus")&&(n.parentEl.insertBefore(n.el,e),n.parentEl.removeChild(e),n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%")),n.isReady=!0,n.init(),n=null)}})()||e.addEventListener("load",t);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},o.prototype.setOptions=function(t){var e=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],i=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if((t=t||{}).type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===i.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||i[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=h(t.duration,120),this.delay=h(t.delay,null),this.dashGap=h(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!t.hasOwnProperty("ignoreInvisible")&&!!t.ignoreInvisible,this.animTimingFunction=t.animTimingFunction||o.LINEAR,this.pathTimingFunction=t.pathTimingFunction||o.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},o.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},o.prototype.mapping=function(){var t,e,i,n,o=i=n=0,s=this.el.querySelectorAll("path");for(l=!1,t=0;t<s.length;t++){var r,a,l,c,u=s[t];this.isInvisible(u)||(c={el:u,length:0,startAt:0,duration:0,isResizeSensitive:!1},"non-scaling-stroke"===u.getAttribute("vector-effect")?(a=u.getBoundingClientRect(),r=u.getBBox(),a=Math.max(a.width/r.width,a.height/r.height),l=c.isResizeSensitive=!0):a=1,c.length=Math.ceil(u.getTotalLength()*a),isNaN(c.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",u):(this.map.push(c),u.style.strokeDasharray=c.length+" "+(c.length+2*this.dashGap),u.style.strokeDashoffset=c.length+this.dashGap,c.length+=this.dashGap,i+=c.length,this.renderPath(t)))}for(l&&console.warn("Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info."),i=0===i?1:i,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(1<s.length?s.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(c=this.map[t],this.type){case"delayed":c.startAt=this.delayUnit*t,c.duration=this.duration-this.delay;break;case"oneByOne":c.startAt=n/i*this.duration,c.duration=c.length/i*this.duration;break;case"sync":case"async":case"nsync":c.startAt=0,c.duration=this.duration;break;case"scenario-sync":u=c.el,e=this.parseAttr(u),c.startAt=o+(h(e["data-delay"],this.delayUnit)||0),c.duration=h(e["data-duration"],this.duration),o=void 0!==e["data-async"]?c.startAt:c.startAt+c.duration,this.frameLength=Math.max(this.frameLength,c.startAt+c.duration);break;case"scenario":u=c.el,e=this.parseAttr(u),c.startAt=h(e["data-start"],this.delayUnit)||0,c.duration=h(e["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,c.startAt+c.duration)}n+=c.length,this.frameLength=this.frameLength||this.duration}},o.prototype.recalc=function(){this.mustRecalcScale||(this.mustRecalcScale=i(function(){this.performLineRecalc()}.bind(this)))},o.prototype.performLineRecalc=function(){for(var t,e,i,n,o=0;o<this.map.length;o++)(t=this.map[o]).isResizeSensitive&&(n=(e=t.el).getBoundingClientRect(),i=e.getBBox(),n=Math.max(n.width/i.width,n.height/i.height),t.length=Math.ceil(e.getTotalLength()*n),e.style.strokeDasharray=t.length+" "+(t.length+2*this.dashGap));this.trace(),this.mustRecalcScale=null},o.prototype.draw=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=i(function(){t.draw()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},o.prototype.trace=function(){for(var t,e,i=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,n=0;n<this.map.length;n++)t=(i-(e=this.map[n]).startAt)/e.duration,t=this.pathTimingFunction(Math.max(0,Math.min(1,t))),e.progress!==t&&(e.progress=t,e.el.style.strokeDashoffset=Math.floor(e.length*(1-t)),this.renderPath(n))},o.prototype.renderPath=function(t){var e;this.forceRender&&this.map&&this.map[t]&&(e=(t=this.map[t]).el.cloneNode(!0),t.el.parentNode.replaceChild(e,t.el),t.el=e)},o.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new e(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},o.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},o.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},o.prototype.reset=function(){return this.setFrameProgress(0)},o.prototype.finish=function(){return this.setFrameProgress(1)},o.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},o.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.draw(),this},o.prototype.stop=function(){return this.handle&&(t(this.handle),this.handle=null),this},o.prototype.destroy=function(){var t,e;for(this.stop(),t=0;t<this.map.length;t++)(e=this.map[t]).el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},o.prototype.isInvisible=function(t){var e=t.getAttribute("data-ignore");return null!==e?"false"!==e:!!this.ignoreInvisible&&!(e=t.getBoundingClientRect()).width&&!e.height},o.prototype.parseAttr=function(t){var e,i={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)i[(e=t.attributes[n]).name]=e.value;return i},o.prototype.isInViewport=function(t,e){var i=this.scrollY(),n=i+this.getViewportH(),t=t.getBoundingClientRect(),o=t.height,t=i+t.top;return t+o*(e=e||0)<=n&&i<=t+o},o.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return t<e?e:t},o.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},n=function(){o.prototype.docElem||(o.prototype.docElem=window.document.documentElement,i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},t=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)})},h=function(t,e){t=parseInt(t,10);return 0<=t?t:e},"function"==typeof define&&define.amd?define([],function(){return o}):"object"==typeof exports?module.exports=o:window.Vivus=o}(),function(){"use strict";var m,i,g,v;function s(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function c(t){this.time=t.time,this.target=t.target,this.rootBounds=n(t.rootBounds),this.boundingClientRect=n(t.boundingClientRect),this.intersectionRect=n(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var t=this.boundingClientRect,t=t.width*t.height,e=this.intersectionRect,e=e.width*e.height;this.intersectionRatio=t?Number((e/t).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var i,n,o,e=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(e.root&&1!=e.root.nodeType&&9!=e.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(i=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,o=null,function(){o=o||setTimeout(function(){i(),o=null},n)}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(e.rootMargin),this.thresholds=this._initThresholds(e.threshold),this.root=e.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function r(t,e,i,n){"function"==typeof t.addEventListener?t.addEventListener(e,i,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,i)}function a(t,e,i,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,i,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,i)}function y(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?e=e.width&&e.height?e:{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}:{top:0,bottom:0,left:0,right:0,width:0,height:0}}function n(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function b(t,e){var i=e.top-t.top,t=e.left-t.left;return{top:i,left:t,height:e.height,width:e.width,bottom:i+e.height,right:t+e.width}}function o(t,e){for(var i=e;i;){if(i==t)return!0;i=_(i)}return!1}function _(t){var e=t.parentNode;return 9==t.nodeType&&t!=m?s(t):(e=e&&e.assignedSlot?e.assignedSlot.parentNode:e)&&11==e.nodeType&&e.host?e.host:e}function l(t){return t&&9===t.nodeType}"object"==typeof window&&("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}):(m=function(){for(var t=window.document,e=s(t);e;)e=s(t=e.ownerDocument);return t}(),i=[],v=g=null,t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t._setupCrossOriginUpdater=function(){return g=g||function(t,e){v=t&&e?b(t,e):{top:0,bottom:0,left:0,right:0,width:0,height:0},i.forEach(function(t){t._checkForIntersections()})}},t._resetCrossOriginUpdater=function(){v=g=null},t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){t=t||[0];return(t=Array.isArray(t)?t:[t]).sort().filter(function(t,e,i){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==i[e-1]})},t.prototype._parseRootMargin=function(t){t=(t||"0px").split(/\s+/).map(function(t){t=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(t)return{value:parseFloat(t[1]),unit:t[2]};throw new Error("rootMargin must be specified in pixels or percent")});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},t.prototype._monitorIntersections=function(e){var i,n,o,t=e.defaultView;t&&-1==this._monitoringDocuments.indexOf(e)&&(i=this._checkForIntersections,o=n=null,this.POLL_INTERVAL?n=t.setInterval(i,this.POLL_INTERVAL):(r(t,"resize",i,!0),r(e,"scroll",i,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(o=new t.MutationObserver(i)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push(function(){var t=e.defaultView;t&&(n&&t.clearInterval(n),a(t,"resize",i,!0)),a(e,"scroll",i,!0),o&&o.disconnect()}),t=this.root&&(this.root.ownerDocument||this.root)||m,e!=t&&(t=s(e))&&this._monitorIntersections(t.ownerDocument))},t.prototype._unmonitorIntersections=function(n){var o,t,e=this._monitoringDocuments.indexOf(n);-1!=e&&(o=this.root&&(this.root.ownerDocument||this.root)||m,this._observationTargets.some(function(t){var e=t.element.ownerDocument;if(e==n)return!0;for(;e&&e!=o;){var i=s(e);if((e=i&&i.ownerDocument)==n)return!0}return!1})||(t=this._monitoringUnsubscribes[e],this._monitoringDocuments.splice(e,1),this._monitoringUnsubscribes.splice(e,1),t(),n!=o&&(e=s(n))&&this._unmonitorIntersections(e.ownerDocument)))},t.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0;for(var e=this._monitoringUnsubscribes.length=0;e<t.length;e++)t[e]()},t.prototype._checkForIntersections=function(){var a,l;!this.root&&g&&!v||(a=this._rootIsInDom(),l=a?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0},this._observationTargets.forEach(function(t){var e=t.element,i=y(e),n=this._rootContainsTarget(e),o=t.entry,s=a&&n&&this._computeTargetAndRootIntersection(e,i,l),r=null,t=(this._rootContainsTarget(e)?g&&!this.root||(r=l):r={top:0,bottom:0,left:0,right:0,width:0,height:0},t.entry=new c({time:window.performance&&performance.now&&performance.now(),target:e,boundingClientRect:i,rootBounds:r,intersectionRect:s}));o?a&&n?this._hasCrossedThreshold(o,t)&&this._queuedEntries.push(t):o&&o.isIntersecting&&this._queuedEntries.push(t):this._queuedEntries.push(t)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this))},t.prototype._computeTargetAndRootIntersection=function(t,e,i){if("none"!=window.getComputedStyle(t).display){for(var n,o,s,r,a=e,l=_(t),c=!1;!c&&l;){var u,h,d,p=null,f=1==l.nodeType?window.getComputedStyle(l):{};if("none"==f.display)return null;if(l==this.root||9==l.nodeType?(c=!0,l==this.root||l==m?g&&!this.root?!v||0==v.width&&0==v.height?a=p=l=null:p=v:p=i:(u=(d=_(l))&&y(d),h=d&&this._computeTargetAndRootIntersection(d,u,i),u&&h?(l=d,p=b(u,h)):a=l=null)):l!=(d=l.ownerDocument).body&&l!=d.documentElement&&"visible"!=f.overflow&&(p=y(l)),p&&(u=p,h=a,0,f=Math.max(u.top,h.top),p=Math.min(u.bottom,h.bottom),n=Math.max(u.left,h.left),r=p-f,a=0<=(s=(o=Math.min(u.right,h.right))-n)&&0<=r?{top:f,bottom:p,left:n,right:o,width:s,height:r}:null),!a)break;l=l&&_(l)}return a}},t.prototype._getRootRect=function(){var t,e;return e=this.root&&!l(this.root)?y(this.root):(e=(t=l(this.root)?this.root:m).documentElement,t=t.body,{top:0,left:0,right:e.clientWidth||t.clientWidth,width:e.clientWidth||t.clientWidth,bottom:e.clientHeight||t.clientHeight,height:e.clientHeight||t.clientHeight}),this._expandRectByRootMargin(e)},t.prototype._expandRectByRootMargin=function(i){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?i.width:i.height)/100}),t={top:i.top-t[0],right:i.right+t[1],bottom:i.bottom+t[2],left:i.left-t[3]};return t.width=t.right-t.left,t.height=t.bottom-t.top,t},t.prototype._hasCrossedThreshold=function(t,e){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(i!==n)for(var o=0;o<this.thresholds.length;o++){var s=this.thresholds[o];if(s==i||s==n||s<i!=s<n)return!0}},t.prototype._rootIsInDom=function(){return!this.root||o(m,this.root)},t.prototype._rootContainsTarget=function(t){var e=this.root&&(this.root.ownerDocument||this.root)||m;return o(e,t)&&(!this.root||e==t.ownerDocument)},t.prototype._registerInstance=function(){i.indexOf(this)<0&&i.push(this)},t.prototype._unregisterInstance=function(){var t=i.indexOf(this);-1!=t&&i.splice(t,1)},window.IntersectionObserver=t,window.IntersectionObserverEntry=c))}(),function(d){"use strict";d.fn.pin=function(l){function i(){n(),t()}var a=0,c=[],u=!1,h=d(window),n=(l=l||{},function(){for(var t=0,e=c.length;t<e;t++){var i,n,o,s,r,a=c[t];l.minWidth&&h.outerWidth()<=l.minWidth?(a.parent().is(".pin-wrapper")&&a.unwrap(),a.css({width:"",left:"",top:"",position:""}),l.activeClass&&a.removeClass(l.activeClass),u=!0):(u=!1,i=l.containerSelector?a.closest(l.containerSelector):d(document.body),n=a.offset(),o=i.offset(),s=a.parent().offset(),r=(a.parent().is(".pin-wrapper")||a.wrap("<div class='pin-wrapper'>"),d.extend({top:0,bottom:0},l.padding||{})),a.data("pin",{pad:r,from:(l.containerSelector?o:n).top-r.top,to:o.top+i.height()-a.outerHeight()-r.bottom,end:o.top+i.height(),parentTop:s.top}),a.css({width:a.outerWidth()}),a.parent().css("height",a.outerHeight()))}}),t=function(){if(!u){a=h.scrollTop();for(var t=[],e=0,i=c.length;e<i;e++){var n,o,s=d(c[e]),r=s.data("pin");r&&(t.push(s),n=r.from-r.pad.bottom,o=r.to-r.pad.top,n+s.outerHeight()>r.end?s.css("position",""):n<a&&a<o?("fixed"!=s.css("position")&&s.css({left:s.offset().left,top:r.pad.top}).css("position","fixed"),l.activeClass&&s.addClass(l.activeClass)):o<=a?(s.css({left:"",top:o-r.parentTop+r.pad.top}).css("position","absolute"),l.activeClass&&s.addClass(l.activeClass)):(s.css({position:"",top:"",left:""}),l.activeClass&&s.removeClass(l.activeClass)))}c=t}};return this.each(function(){var t=d(this),e=d(this).data("pin")||{};e&&e.update||(c.push(t),d("img",this).one("load",n),e.update=i,d(this).data("pin",e))}),h.scroll(t),h.resize(function(){n()}),n(),h.on("load",i),this}}(jQuery),function(i){"use strict";var n,o={action:function(){},runOnLoad:!1,duration:500},s=!1,r={init:function(){for(var t=0;t<=arguments.length;t++){var e=arguments[t];switch(typeof e){case"function":o.action=e;break;case"boolean":o.runOnLoad=e;break;case"number":o.duration=e}}return this.each(function(){o.runOnLoad&&o.action(),i(this).resize(function(){r.timedAction.call(this)})})}};r.timedAction=function(t,e){var i=function(){var t=o.duration;if(s){var e=new Date-n;if((t=o.duration-e)<=0)return clearTimeout(s),s=!1,void o.action()}s=setTimeout(i,t)};n=new Date,"number"==typeof e&&(o.duration=e),"function"==typeof t&&(o.action=t),s||i()},i.fn.afterResize=function(t){return r[t]?r[t].apply(this,Array.prototype.slice.call(arguments,1)):r.init.apply(this,arguments)}}(jQuery),jQuery(document).ready(function(r){var a=2500,s=3800,l=s-3e3,o=50,c=150,u=500,h=u+800,d=600,n=1500,t=".word-rotator",p=a;function f(t){var e,i,n=v(t);t.parents(".word-rotator").hasClass("type")?((e=t.parent(".word-rotator-words")).addClass("selected").removeClass("waiting"),setTimeout(function(){e.removeClass("selected"),t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},u),setTimeout(function(){m(n,c)},h)):t.parents(".word-rotator").hasClass("letters")?(i=t.children("i").length>=n.children("i").length,function t(e,i,n,o){e.removeClass("in").addClass("out");e.is(":last-child")?n&&setTimeout(function(){f(v(i))},a):setTimeout(function(){t(e.next(),i,n,o)},o);{var s;e.is(":last-child")&&r("html").hasClass("no-csstransitions")&&(s=v(i),y(i,s))}}(t.find("i").eq(0),t,i,o),g(n.find("i").eq(0),n,i,o)):t.parents(".word-rotator").hasClass("clip")?t.parents(".word-rotator-words").stop(!0,!0).animate({width:"2px"},d,function(){y(t,n),m(n)}):t.parents(".word-rotator").hasClass("loading-bar")?(t.parents(".word-rotator-words").removeClass("is-loading"),y(t,n),setTimeout(function(){f(n)},s),setTimeout(function(){t.parents(".word-rotator-words").addClass("is-loading")},l)):(y(t,n),setTimeout(function(){f(n)},a))}function m(t,e){t.parents(".word-rotator").hasClass("type")?(g(t.find("i").eq(0),t,!1,e),t.addClass("is-visible").removeClass("is-hidden")):t.parents(".word-rotator").hasClass("clip")&&(document.hasFocus()?t.parents(".word-rotator-words").stop(!0,!0).animate({width:t.outerWidth()+10},d,function(){setTimeout(function(){f(t)},n)}):(t.parents(".word-rotator-words").stop(!0,!0).animate({width:t.outerWidth()+10}),setTimeout(function(){f(t)},n)))}function g(t,e,i,n){t.addClass("in").removeClass("out"),t.is(":last-child")?(e.parents(".word-rotator").hasClass("type")&&setTimeout(function(){e.parents(".word-rotator-words").addClass("waiting")},200),i||setTimeout(function(){f(e)},a),e.closest(".word-rotator").hasClass("type")||e.closest(".word-rotator-words").stop(!0,!0).animate({width:e.outerWidth()})):setTimeout(function(){g(t.next(),e,i,n)},n)}function v(t){return t.is(":last-child")?t.parent().children().eq(0):t.next()}function y(t,e){var i;t.removeClass("is-visible").addClass("is-hidden"),e.removeClass("is-hidden").addClass("is-visible"),e.closest(".word-rotator").hasClass("clip")||(i=0,t=e.outerWidth()>t.outerWidth()?0:600,(e.closest(".word-rotator").hasClass("loading-bar")||e.closest(".word-rotator").hasClass("slide"))&&(i=3,t=0),setTimeout(function(){e.closest(".word-rotator-words").stop(!0,!0).animate({width:e.outerWidth()+i})},t))}theme.fn.intObs(t,function(){r(this).hasClass("letters")&&r(this).find("b").each(function(){var t=r(this),e=t.text().split(""),n=t.hasClass("is-visible");for(i in e)0<t.parents(".rotate-2").length&&(e[i]="<em>"+e[i]+"</em>"),e[i]=n?'<i class="in">'+e[i]+"</i>":"<i>"+e[i]+"</i>";var o=e.join("");t.html(o).css("opacity",1)});var t,e,n,o=r(this);o.hasClass("loading-bar")?(p=s,setTimeout(function(){o.find(".word-rotator-words").addClass("is-loading")},l)):o.hasClass("clip")?(t=(e=o.find(".word-rotator-words")).outerWidth()+10,e.css("width",t)):o.hasClass("type")||(e=o.find(".word-rotator-words b"),n=0,e.each(function(){var t=r(this).outerWidth();n<t&&(n=t)}),o.find(".word-rotator-words").css("width",n)),setTimeout(function(){f(o.find(".is-visible").eq(0))},p)},{})}),function(e){e.fn.hover3d=function(t){var c=e.extend({selector:null,perspective:1e3,sensitivity:20,invert:!1,shine:!1,hoverInClass:"hover-in",hoverOutClass:"hover-out",hoverClass:"hover-3d"},t);return this.each(function(){var t=e(this),a=t.find(c.selector),l=(currentX=0,currentY=0,c.shine&&a.append('<div class="shine"></div>'),e(this).find(".shine"));t.css({perspective:c.perspective+"px",transformStyle:"preserve-3d"}),a.css({perspective:c.perspective+"px",transformStyle:"preserve-3d"}),l.css({position:"absolute",top:0,left:0,bottom:0,right:0,transform:"translateZ(1px)","z-index":9}),t.on("mouseenter",function(){a.addClass(c.hoverInClass+" "+c.hoverClass),currentX=currentY=0,setTimeout(function(){a.removeClass(c.hoverInClass)},1e3)}),t.on("mousemove",function(t){return t=t,e=a.innerWidth(),i=a.innerHeight(),n=Math.round(t.pageX-a.offset().left),o=Math.round(t.pageY-a.offset().top),s=c.invert?(e/2-n)/c.sensitivity:-(e/2-n)/c.sensitivity,r=c.invert?-(i/2-o)/c.sensitivity:(i/2-o)/c.sensitivity,(o=180*Math.atan2(o-i/2,n-e/2)/Math.PI-90)<0&&(o+=360),a.css({perspective:c.perspective+"px",transformStyle:"preserve-3d",transform:"rotateY("+s+"deg) rotateX("+r+"deg)"}),void l.css("background","linear-gradient("+o+"deg, rgba(255,255,255,"+t.offsetY/i*.5+") 0%,rgba(255,255,255,0) 80%)");var e,i,n,o,s,r}),t.on("mouseleave",function(){a.addClass(c.hoverOutClass+" "+c.hoverClass),a.css({perspective:c.perspective+"px",transformStyle:"preserve-3d",transform:"rotateX(0) rotateY(0)"}),setTimeout(function(){a.removeClass(c.hoverOutClass+" "+c.hoverClass),currentX=currentY=0},1e3)})})}}(jQuery),function(s,e){"use strict";s.HoverDir=function(t,e){this.$el=s(e),this._init(t)},s.HoverDir.defaults={speed:300,easing:"ease",hoverDelay:0,inverse:!1,hoverElem:".thumb-info-wrapper-overlay"},s.HoverDir.prototype={_init:function(t){this.options=s.extend(!0,{},s.HoverDir.defaults,t),this.transitionProp="all "+this.options.speed+"ms "+this.options.easing,this.support=Modernizr.csstransitions,this._loadEvents()},_loadEvents:function(){var o=this;this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir",function(t){var e=s(this),i=e.find(o.options.hoverElem),e=o._getDir(e,{x:t.pageX,y:t.pageY}),n=o._getStyle(e);"mouseenter"===t.type?(i.hide().css(n.from),clearTimeout(o.tmhover),o.tmhover=setTimeout(function(){i.show(0,function(){var t=s(this);o.support&&t.css("transition",o.transitionProp),o._applyAnimation(t,n.to,o.options.speed)})},o.options.hoverDelay)):(o.support&&i.css("transition",o.transitionProp),clearTimeout(o.tmhover),o._applyAnimation(i,n.from,o.options.speed))})},_getDir:function(t,e){var i=t.width(),n=t.height(),o=(e.x-t.offset().left-i/2)*(n<i?n/i:1),e=(e.y-t.offset().top-n/2)*(i<n?i/n:1);return Math.round((Math.atan2(e,o)*(180/Math.PI)+180)/90+3)%4},_getStyle:function(t){var e,i,n={left:"0px",top:"-100%"},o={left:"0px",top:"100%"},s={left:"-100%",top:"0px"},r={left:"100%",top:"0px"},a={top:"0px"},l={left:"0px"};switch(t){case 0:e=this.options.inverse?o:n,i=a;break;case 1:e=this.options.inverse?s:r,i=l;break;case 2:e=this.options.inverse?n:o,i=a;break;case 3:e=this.options.inverse?r:s,i=l}return{from:e,to:i}},_applyAnimation:function(t,e,i){s.fn.applyStyle=this.support?s.fn.css:s.fn.animate,t.stop().applyStyle(e,s.extend(!0,[],{duration:i+"ms"}))}};function n(t){e.console&&e.console.error(t)}s.fn.hoverdir=function(t){var e,i=s.data(this,"hoverdir");return"string"==typeof t?(e=Array.prototype.slice.call(arguments,1),this.each(function(){i?s.isFunction(i[t])&&"_"!==t.charAt(0)?i[t].apply(i,e):n("no such method '"+t+"' for hoverdir instance"):n("cannot call methods on hoverdir prior to initialization; attempted to call method '"+t+"'")})):this.each(function(){i?i._init():i=s.data(this,"hoverdir",new s.HoverDir(t,this))}),i}}(jQuery,window),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):t.jQuery)}(this,function(p){"use strict";function o(t){for(var e,i,n,o,s={},r=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),a=0,l=r.length;a<l&&(-1===(i=r[a]).search(/^(http|https|ftp):\/\//)&&-1!==i.search(":"));a++)e=i.indexOf(":"),n=i.substring(0,e),"string"==typeof(o="string"==typeof(o=(o=i.substring(e+1))||void 0)?"true"===o||"false"!==o&&o:o)&&(o=isNaN(o)?o:+o),s[n]=o;return null==n&&null==o?t:s}function n(t,e,i){if(this.$element=p(t),"string"==typeof e&&(e=o(e)),i?"string"==typeof i&&(i=o(i)):i={},"string"==typeof e)e=e.replace(/\.\w*$/,"");else if("object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(e[n]=e[n].replace(/\.\w*$/,""));this.settings=p.extend({},r,i),this.path=e;try{this.init()}catch(t){if(t.message!==f)throw t}}var s="vide",r={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},f="Not implemented";n.prototype.init=function(){var t,e,i,n,o=this,s=o.path,r=s,a="",l=o.$element,c=o.settings,u=function(t){for(var e,i=(t=""+t).split(/\s+/),n="50%",o="50%",s=0,r=i.length;s<r;s++)"left"===(e=i[s])?n="0%":"right"===e?n="100%":"top"===e?o="0%":"bottom"===e?o="100%":"center"===e?0===s?n="50%":o="50%":0===s?n=e:o=e;return{x:n,y:o}}(c.position),h=c.posterType;function d(){n(this.src)}e=o.$wrapper=p("<div>").addClass(c.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":c.bgColor,"background-repeat":"no-repeat","background-position":u.x+" "+u.y}),"object"==typeof s&&(s.poster?r=s.poster:s.mp4?r=s.mp4:s.webm?r=s.webm:s.ogv&&(r=s.ogv)),"detect"===h?(n=function(t){e.css("background-image","url("+t+")")},p('<img src="'+(i=r)+'.gif">').on("load",d),p('<img src="'+i+'.jpg">').on("load",d),p('<img src="'+i+'.jpeg">').on("load",d),p('<img src="'+i+'.png">').on("load",d)):"none"!==h&&e.css("background-image","url("+r+"."+h+")"),"static"===l.css("position")&&l.css("position","relative"),l.prepend(e),t="object"==typeof s?(s.mp4&&(a+='<source src="'+s.mp4+'.mp4" type="video/mp4">'),s.webm&&(a+='<source src="'+s.webm+'.webm" type="video/webm">'),s.ogv&&(a+='<source src="'+s.ogv+'.ogv" type="video/ogg">'),o.$video=p("<video>"+a+"</video>")):o.$video=p('<video><source src="'+s+'.mp4" type="video/mp4"><source src="'+s+'.webm" type="video/webm"><source src="'+s+'.ogv" type="video/ogg"></video>');try{t.prop({autoplay:c.autoplay,loop:c.loop,volume:c.volume,muted:c.muted,defaultMuted:c.muted,playbackRate:c.playbackRate,defaultPlaybackRate:c.playbackRate})}catch(t){throw new Error(f)}t.css({margin:"auto",position:"absolute","z-index":-1,top:u.y,left:u.x,"-webkit-transform":"translate(-"+u.x+", -"+u.y+")","-ms-transform":"translate(-"+u.x+", -"+u.y+")","-moz-transform":"translate(-"+u.x+", -"+u.y+")",transform:"translate(-"+u.x+", -"+u.y+")",visibility:"hidden",opacity:0}).one("canplaythrough.vide",function(){o.resize()}).one("playing.vide",function(){t.css({visibility:"visible",opacity:1}),e.css("background-image","none")}),l.on("resize.vide",function(){c.resizing&&o.resize()}),e.append(t)},n.prototype.getVideoObject=function(){return this.$video[0]},n.prototype.resize=function(){var t,e,i,n,o;this.$video&&(t=this.$wrapper,o=(i=(e=this.$video)[0]).videoHeight,i=i.videoWidth,(n=t.height())/o<(o=t.width())/i?e.css({width:o+2,height:"auto"}):e.css({width:"auto",height:n+2}))},n.prototype.destroy=function(){delete p.vide.lookup[this.index],this.$video&&this.$video.off(s),this.$element.off(s).removeData(s),this.$wrapper.remove()},p.vide={lookup:[]},p.fn.vide=function(t,e){var i;return this.each(function(){(i=p.data(this,s))&&i.destroy(),(i=new n(this,t,e)).index=p.vide.lookup.push(i)-1,p.data(this,s,i)}),this},p(document).ready(function(){var t=p(window);t.on("resize.vide",function(){for(var t,e=p.vide.lookup.length,i=0;i<e;i++)(t=p.vide.lookup[i])&&t.settings.resizing&&t.resize()}),t.on("unload.vide",function(){return!1}),p(document).find("[data-vide-bg]").each(function(t,e){var e=p(e),i=e.data("vide-options"),n=e.data("vide-bg");e.vide(n,i)})})}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(jQuery)}(function(s){function r(t,e){this.$element=s(t),this.options=s.extend({},r.DEFAULTS,this.dataOptions(),e),this.init()}r.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null},r.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},r.prototype.dataOptions=function(){var t,e={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},i=Object.keys(e);for(t in i){var n=i[t];void 0===e[n]&&delete e[n]}return e},r.prototype.update=function(){this.value+=this.increment,this.loopCount++,this.render(),"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value))},r.prototype.render=function(){var t=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(t)},r.prototype.restart=function(){this.stop(),this.init(),this.start()},r.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},r.prototype.stop=function(){this.interval&&clearInterval(this.interval)},r.prototype.toggle=function(){this.interval?this.stop():this.start()},s.fn.countTo=function(o){return this.each(function(){var t=s(this),e=t.data("countTo"),i="object"==typeof o?o:{},n="string"==typeof o?o:"start";e&&"object"!=typeof o||(e&&e.stop(),t.data("countTo",e=new r(this,i))),e[n].call(e)})}}),function(p){p.fn.visible=function(t,e,i,n){var o,s,r,a,l,c,u,h,d;if(!(this.length<1))return u=1<this.length?this.eq(0):this,c=null!=n,n=p(c?n:window),h=c?n.position():0,s=u.get(0),l=n.outerWidth(),d=n.outerHeight(),i=i||"both",e=!0!==e||s.offsetWidth*s.offsetHeight,"function"==typeof s.getBoundingClientRect?(s=s.getBoundingClientRect(),r=c?0<=s.top-h.top&&s.top<d+h.top:0<=s.top&&s.top<d,a=c?0<s.bottom-h.top&&s.bottom<=d+h.top:0<s.bottom&&s.bottom<=d,o=c?0<=s.left-h.left&&s.left<l+h.left:0<=s.left&&s.left<l,s=c?0<s.right-h.left&&s.right<l+h.left:0<s.right&&s.right<=l,r=t?r||a:r&&a,a=t?o||s:o&&s,"both"===i?e&&r&&a:"vertical"===i?e&&r:"horizontal"===i?e&&a:void 0):(s=(o=c?0:h)+d,a=(r=n.scrollLeft())+l,d=(h=(c=u.position()).top)+u.height(),l=(n=c.left)+u.width(),c=!0===t?d:h,u=!0===t?h:d,h=!0===t?l:n,d=!0===t?n:l,"both"===i?!!e&&u<=s&&o<=c&&d<=a&&r<=h:"vertical"===i?!!e&&u<=s&&o<=c:"horizontal"===i?!!e&&d<=a&&r<=h:void 0)}}(jQuery),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(r){function a(t){return parseFloat(t)||0}function l(t){var t=r(t),n=null,o=[];return t.each(function(){var t=r(this),e=t.offset().top-a(t.css("margin-top")),i=0<o.length?o[o.length-1]:null;null!==i&&Math.floor(Math.abs(n-e))<=1?o[o.length-1]=i.add(t):o.push(t),n=e}),o}function c(t){var e={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof t?r.extend(e,t):("boolean"==typeof t?e.byRow=t:"remove"===t&&(e.remove=!0),e)}function n(t){u._beforeUpdate&&u._beforeUpdate(t,u._groups),r.each(u._groups,function(){u._apply(this.elements,this.options)}),u._afterUpdate&&u._afterUpdate(t,u._groups)}var o=-1,s=-1,u=r.fn.matchHeight=function(t){var i,t=c(t);return t.remove?((i=this).css(t.property,""),r.each(u._groups,function(t,e){e.elements=e.elements.not(i)})):this.length<=1&&!t.target||(u._groups.push({elements:this,options:t}),u._apply(this,t)),this},t=(u.version="0.7.2",u._groups=[],u._throttle=80,u._maintainScroll=!1,u._beforeUpdate=null,u._afterUpdate=null,u._rows=l,u._parse=a,u._parseOptions=c,u._apply=function(t,e){var o=c(e),e=r(t),t=[e],i=r(window).scrollTop(),n=r("html").outerHeight(!0),s=e.parents().filter(":hidden");return s.each(function(){var t=r(this);t.data("style-cache",t.attr("style"))}),s.css("display","block"),o.byRow&&!o.target&&(e.each(function(){var t=r(this),e=t.css("display");"inline-block"!==e&&"flex"!==e&&"inline-flex"!==e&&(e="block"),t.data("style-cache",t.attr("style")),t.css({display:e,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),t=l(e),e.each(function(){var t=r(this);t.attr("style",t.data("style-cache")||"")})),r.each(t,function(t,e){var e=r(e),n=0;if(o.target)n=o.target.outerHeight(!1);else{if(o.byRow&&e.length<=1)return void e.css(o.property,"");e.each(function(){var t=r(this),e=t.attr("style"),i=t.css("display"),i={display:i="inline-block"!==i&&"flex"!==i&&"inline-flex"!==i?"block":i};i[o.property]="",t.css(i),t.outerHeight(!1)>n&&(n=t.outerHeight(!1)),e?t.attr("style",e):t.css("display","")})}e.each(function(){var t=r(this),e=0;o.target&&t.is(o.target)||("border-box"!==t.css("box-sizing")&&(e=(e+=a(t.css("border-top-width"))+a(t.css("border-bottom-width")))+(a(t.css("padding-top"))+a(t.css("padding-bottom")))),t.css(o.property,n-e+"px"))})}),s.each(function(){var t=r(this);t.attr("style",t.data("style-cache")||null)}),u._maintainScroll&&r(window).scrollTop(i/n*r("html").outerHeight(!0)),this},u._applyDataApi=function(){var i={};r("[data-match-height], [data-mh]").each(function(){var t=r(this),e=t.attr("data-mh")||t.attr("data-match-height");e in i?i[e]=i[e].add(t):i[e]=t}),r.each(i,function(){this.matchHeight(!0)})},u._update=function(t,e){if(e&&"resize"===e.type){var i=r(window).width();if(i===o)return;o=i}t?-1===s&&(s=setTimeout(function(){n(e),s=-1},u._throttle)):n(e)},r(u._applyDataApi),r.fn.on?"on":"bind");r(window)[t]("load",function(t){u._update(!1,t)}),r(window)[t]("resize orientationchange",function(t){u._update(!0,t)})}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(d){var t,p="waitForImages",f=(t=new Image).srcset&&t.sizes;d.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},d.expr.pseudos["has-src"]=function(t){return d(t).is('img[src][src!=""]')},d.expr.pseudos.uncached=function(t){return!!d(t).is(":has-src")&&!t.complete},d.fn.waitForImages=function(){var o,s,e,r=0,a=0,l=d.Deferred(),c=this,u=[],i=d.waitForImages.hasImageProperties||[],n=d.waitForImages.hasImageAttributes||[],h=/url\(\s*(['"]?)(.*?)\1\s*\)/g;if(d.isPlainObject(arguments[0])?(e=arguments[0].waitForAll,s=arguments[0].each,o=arguments[0].finished):e=1===arguments.length&&"boolean"===d.type(arguments[0])?arguments[0]:(o=arguments[0],s=arguments[1],arguments[2]),o=o||d.noop,s=s||d.noop,e=!!e,d.isFunction(o)&&d.isFunction(s))return this.each(function(){var t=d(this);e?t.find("*").addBack().each(function(){var o=d(this);o.is("img:has-src")&&!o.is("[srcset]")&&u.push({src:o.attr("src"),element:o[0]}),d.each(i,function(t,e){var i,n=o.css(e);if(!n)return!0;for(;i=h.exec(n);)u.push({src:i[2],element:o[0]})}),d.each(n,function(t,e){if(!o.attr(e))return!0;u.push({src:o.attr("src"),srcset:o.attr("srcset"),element:o[0]})})}):t.find("img:has-src").each(function(){u.push({src:this.src,element:this})})}),r=u.length,(a=0)===r&&(o.call(c),l.resolveWith(c)),d.each(u,function(t,i){var e=new Image,n="load."+p+" error."+p;d(e).one(n,function t(e){e=[a,r,"load"==e.type];if(a++,s.apply(i.element,e),l.notifyWith(i.element,e),d(this).off(n,t),a==r)return o.call(c[0]),l.resolveWith(c[0]),!1}),f&&i.srcset&&(e.srcset=i.srcset,e.sizes=i.sizes),e.src=i.src}),l.promise();throw new TypeError("An invalid callback was supplied.")}}),function(l){fontSpy=function(t,e){var i=l("html"),n=l("body");if("string"!=typeof t||""===t)throw"A valid fontName is required. fontName must be a string and must not be an empty string.";var t={font:t,fontClass:t.toLowerCase().replace(/\s/g,""),success:function(){},failure:function(){},testFont:"Courier New",testString:"QW@HhsXJ",glyphs:"",delay:50,timeOut:1e3,callback:l.noop},o=l.extend(t,e),s=l("<span>"+o.testString+o.glyphs+"</span>").css("position","absolute").css("top","-9999px").css("left","-9999px").css("visibility","hidden").css("fontFamily",o.testFont).css("fontSize","250px"),r=(n.append(s),s.outerWidth()),a=(s.css("fontFamily",o.font+","+o.testFont),function(){var t=s.outerWidth();r!==t?(o.callback(),i.addClass(o.fontClass),o&&o.success&&o.success(),s.remove()):o.timeOut<0?(i.addClass("no-"+o.fontClass),o&&o.failure&&o.failure(),o.callback(new Error("FontSpy timeout")),s.remove()):(setTimeout(a,o.delay),o.timeOut=o.timeOut-o.delay)});a()}}(jQuery),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.observeElementInViewport={})}(this,function(t){function o(n,o,s,t){if(void 0===s&&(s=function(){}),void 0===t&&(t={}),!n)throw new Error("Target element to observe should be a valid DOM Node");var t=Object.assign({},{viewport:null,modTop:"0px",modRight:"0px",modBottom:"0px",modLeft:"0px",threshold:[0]},t),e=t.viewport,i=t.modTop,r=t.modLeft,a=t.modBottom,l=t.modRight,t=t.threshold;if(!Array.isArray(t)&&"number"!=typeof t)throw new Error("threshold should be a number or an array of numbers");var t=Array.isArray(t)?t.map(function(t){return Math.floor(t%101)/100}):[Math.floor(t?t%101:0)/100],c=Math.min.apply(Math,t),e={root:e instanceof Node?e:null,rootMargin:i+" "+l+" "+a+" "+r,threshold:t},u=new IntersectionObserver(function(t,e){function i(){return e.unobserve(n)}t=t.filter(function(t){return t.target===n})[0];t&&(t.isInViewport=t.isIntersecting&&t.intersectionRatio>=c,(t.isInViewport?o:s)(t,i,n))},e);return u.observe(n),function(){return u.unobserve(n)}}t.observeElementInViewport=o,t.isInViewport=function(t,n){return void 0===n&&(n={}),new Promise(function(i,e){try{o(t,function(t,e){e(),i(!0)},function(t,e){e(),i(!1)},n)}catch(t){e(t)}})}}),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(L){L.fn.marquee=function(I){return this.each(function(){var i,n,o,s,r,a=L.extend({},L.fn.marquee.defaults,I),l=L(this),c=3,t="animation-play-state",u=!1,h=function(t,e,i){for(var n=["webkit","moz","MS","o",""],o=0;o<n.length;o++)n[o]||(e=e.toLowerCase()),t.addEventListener(n[o]+e,i,!1)},d=function(t){var e,i=[];for(e in t)t.hasOwnProperty(e)&&i.push(e+":"+t[e]);return i.push(),"{"+i.join(",")+"}"},p=function(){l.timer=setTimeout(S,a.delayBeforeStart)},e={pause:function(){u&&a.allowCss3Support?i.css(t,"paused"):L.fn.pause&&i.pause(),l.data("runningStatus","paused"),l.trigger("paused")},resume:function(){u&&a.allowCss3Support?i.css(t,"running"):L.fn.resume&&i.resume(),l.data("runningStatus","resumed"),l.trigger("resumed")},toggle:function(){e["resumed"===l.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(l.timer),l.find("*").addBack().off(),l.html(l.find(".js-marquee:first").html())}};if("string"==typeof I)L.isFunction(e[I])&&(i=i||l.find(".js-marquee-wrapper"),!0===l.data("css3AnimationIsSupported")&&(u=!0),e[I]());else{L.each(a,function(t){if(void 0!==(f=l.attr("data-"+t))){switch(f){case"true":f=!0;break;case"false":f=!1}a[t]=f}}),a.speed&&(a.duration=parseInt(l.width(),10)/a.speed*1e3),s="up"===a.direction||"down"===a.direction,a.gap=a.duplicated?parseInt(a.gap):0,l.wrapInner('<div class="js-marquee"></div>');var f,m,g,v=l.find(".js-marquee").css({"margin-right":a.gap,float:"left"});if(a.duplicated&&v.clone(!0).appendTo(l),l.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),i=l.find(".js-marquee-wrapper"),s?(m=l.height(),i.removeAttr("style"),l.height(m),l.find(".js-marquee").css({float:"none","margin-bottom":a.gap,"margin-right":0}),a.duplicated&&l.find(".js-marquee:last").css({"margin-bottom":0}),g=l.find(".js-marquee:first").height()+a.gap,a.startVisible&&!a.duplicated?(a._completeDuration=(parseInt(g,10)+parseInt(m,10))/parseInt(m,10)*a.duration,a.duration=parseInt(g,10)/parseInt(m,10)*a.duration):a.duration=(parseInt(g,10)+parseInt(m,10))/parseInt(m,10)*a.duration):(r=l.find(".js-marquee:first").width()+a.gap,n=l.width(),a.startVisible&&!a.duplicated?(a._completeDuration=(parseInt(r,10)+parseInt(n,10))/parseInt(n,10)*a.duration,a.duration=parseInt(r,10)/parseInt(n,10)*a.duration):a.duration=(parseInt(r,10)+parseInt(n,10))/parseInt(n,10)*a.duration),a.duplicated&&(a.duration=a.duration/2),a.allowCss3Support){var y=document.body||document.createElement("div"),b="marqueeAnimation-"+Math.floor(1e7*Math.random()),_="Webkit Moz O ms Khtml".split(" "),w="animation",x="",C="";if(void 0!==y.style.animation&&(C="@keyframes "+b+" ",u=!0),!1===u)for(var T=0;T<_.length;T++)if(void 0!==y.style[_[T]+"AnimationName"]){var E="-"+_[T].toLowerCase()+"-",w=E+w,t=E+t,C="@"+E+"keyframes "+b+" ",u=!0;break}u&&(x=b+" "+a.duration/1e3+"s "+a.delayBeforeStart/1e3+"s infinite "+a.css3easing,l.data("css3AnimationIsSupported",!0))}var k=function(){i.css("transform","translateY("+("up"===a.direction?m+"px":"-"+g+"px")+")")},A=function(){i.css("transform","translateX("+("left"===a.direction?n+"px":"-"+r+"px")+")")},S=(a.duplicated?(s?a.startVisible?i.css("transform","translateY(0)"):i.css("transform","translateY("+("up"===a.direction?m+"px":"-"+(2*g-a.gap)+"px")+")"):a.startVisible?i.css("transform","translateX(0)"):i.css("transform","translateX("+("left"===a.direction?n+"px":"-"+(2*r-a.gap)+"px")+")"),a.startVisible||(c=1)):a.startVisible?c=2:(s?k:A)(),function(){var t,e;a.duplicated&&(1===c?(a._originalDuration=a.duration,a.duration=s?"up"===a.direction?a.duration+m/(g/a.duration):2*a.duration:"left"===a.direction?a.duration+n/(r/a.duration):2*a.duration,x=x&&b+" "+a.duration/1e3+"s "+a.delayBeforeStart/1e3+"s "+a.css3easing,c++):2===c&&(a.duration=a._originalDuration,x&&(b+="0",C=L.trim(C)+"0 ",x=b+" "+a.duration/1e3+"s 0s infinite "+a.css3easing),c++)),s?a.duplicated?(2<c&&i.css("transform","translateY("+("up"===a.direction?0:"-"+g+"px")+")"),o={transform:"translateY("+("up"===a.direction?"-"+g+"px":0)+")"}):a.startVisible?2===c?(x=x&&b+" "+a.duration/1e3+"s "+a.delayBeforeStart/1e3+"s "+a.css3easing,o={transform:"translateY("+("up"===a.direction?"-"+g+"px":m+"px")+")"},c++):3===c&&(a.duration=a._completeDuration,x&&(b+="0",C=L.trim(C)+"0 ",x=b+" "+a.duration/1e3+"s 0s infinite "+a.css3easing),k()):(k(),o={transform:"translateY("+("up"===a.direction?"-"+i.height()+"px":m+"px")+")"}):a.duplicated?(2<c&&i.css("transform","translateX("+("left"===a.direction?0:"-"+r+"px")+")"),o={transform:"translateX("+("left"===a.direction?"-"+r+"px":0)+")"}):a.startVisible?2===c?(x=x&&b+" "+a.duration/1e3+"s "+a.delayBeforeStart/1e3+"s "+a.css3easing,o={transform:"translateX("+("left"===a.direction?"-"+r+"px":n+"px")+")"},c++):3===c&&(a.duration=a._completeDuration,x&&(b+="0",C=L.trim(C)+"0 ",x=b+" "+a.duration/1e3+"s 0s infinite "+a.css3easing),A()):(A(),o={transform:"translateX("+("left"===a.direction?"-"+r+"px":n+"px")+")"}),l.trigger("beforeStarting"),u?(i.css(w,x),t=C+" { 100%  "+d(o)+"}",0!==(e=i.find("style")).length?e.filter(":last").html(t):L("head").append("<style>"+t+"</style>"),h(i[0],"AnimationIteration",function(){l.trigger("finished")}),h(i[0],"AnimationEnd",function(){S(),l.trigger("finished")})):i.animate(o,a.duration,a.easing,function(){l.trigger("finished"),(a.pauseOnCycle?p:S)()}),l.data("runningStatus","resumed")});l.on("pause",e.pause),l.on("resume",e.resume),a.pauseOnHover&&(l.on("mouseenter",e.pause),l.on("mouseleave",e.resume)),(u&&a.allowCss3Support?S:p)()}})},L.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,speed:0,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}});

// THEME
window.theme = {};

// Theme Common Functions
window.theme.fn = {

    getOptions: function(opts) {

        if (typeof(opts) == 'object') {

            return opts;

        } else if (typeof(opts) == 'string') {

            try {
                return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
            } catch (e) {
                return {};
            }

        } else {

            return {};

        }

    },

    execPluginFunction: function(functionName, context) {
        var args = Array.prototype.slice.call(arguments, 2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();

        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }

        return context[func].apply(context, args);
    },

    intObs: function(selector, functionName, intObsOptions, alwaysObserve) {
        var $el = document.querySelectorAll(selector);
        var intersectionObserverOptions = {
            rootMargin: '0px 0px 200px 0px'
        }

        if (Object.keys(intObsOptions).length) {
            intersectionObserverOptions = $.extend(intersectionObserverOptions, intObsOptions);
        }

        var observer = new IntersectionObserver(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];

                if (entry.intersectionRatio > 0) {
                    if (typeof functionName === 'string') {
                        var func = Function('return ' + functionName)();
                    } else {
                        var callback = functionName;

                        callback.call($(entry.target));
                    }

                    // Unobserve
                    if (!alwaysObserve) {
                        observer.unobserve(entry.target);
                    }

                }
            }
        }, intersectionObserverOptions);

        $($el).each(function() {
            observer.observe($(this)[0]);
        });
    },

    intObsInit: function(selector, functionName) {
        var $el = document.querySelectorAll(selector);
        var intersectionObserverOptions = {
            rootMargin: '200px'
        }

        var observer = new IntersectionObserver(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                if (entry.intersectionRatio > 0) {

                    var $this = $(entry.target),
                        opts;

                    var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                    if (pluginOptions)
                        opts = pluginOptions;

                    theme.fn.execPluginFunction(functionName, $this, opts);

                    // Unobserve
                    observer.unobserve(entry.target);
                }
            }
        }, intersectionObserverOptions);

        $($el).each(function() {
            observer.observe($(this)[0]);
        });
    },

    dynIntObsInit: function(selector, functionName, pluginDefaults) {
        var $el = document.querySelectorAll(selector);

        $($el).each(function() {
            var $this = $(this),
                opts;

            var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
            if (pluginOptions)
                opts = pluginOptions;

            var mergedPluginDefaults = theme.fn.mergeOptions(pluginDefaults, opts)

            var intersectionObserverOptions = {
                rootMargin: theme.fn.getRootMargin(functionName, mergedPluginDefaults),
                threshold: 0
            }

            if (!mergedPluginDefaults.forceInit) {

                var observer = new IntersectionObserver(function(entries) {
                    for (var i = 0; i < entries.length; i++) {
                        var entry = entries[i];

                        if (entry.intersectionRatio > 0) {
                            theme.fn.execPluginFunction(functionName, $this, mergedPluginDefaults);

                            // Unobserve
                            observer.unobserve(entry.target);
                        }
                    }
                }, intersectionObserverOptions);

                observer.observe($this[0]);

            } else {
                theme.fn.execPluginFunction(functionName, $this, mergedPluginDefaults);
            }
        });
    },

    getRootMargin: function(plugin, pluginDefaults) {
        switch (plugin) {
            case 'themePluginCounter':
                return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
                break;

            case 'themePluginAnimate':
                return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
                break;

            case 'themePluginIcon':
                return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
                break;

            case 'themePluginRandomImages':
                return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
                break;

            default:
                return '0px 0px 200px 0px';
                break;
        }
    },

    mergeOptions: function(obj1, obj2) {
        var obj3 = {};

        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (var attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }

        return obj3;
    },

    execOnceTroughEvent: function($el, event, callback) {
        var self = this,
            dataName = self.formatDataName(event);

        $($el).on(event, function() {
            if (!$(this).data(dataName)) {

                // Exec Callback Function
                callback.call($(this));

                // Add data name
                $(this).data(dataName, true);

                // Unbind event
                $(this).off(event);
            }
        });

        return this;
    },

    execOnceTroughWindowEvent: function($el, event, callback) {
        var self = this,
            dataName = self.formatDataName(event);

        $($el).on(event, function() {
            if (!$(this).data(dataName)) {

                // Exec Callback Function
                callback();

                // Add data name
                $(this).data(dataName, true);

                // Unbind event
                $(this).off(event);
            }
        });

        return this;
    },

    formatDataName: function(name) {
        name = name.replace('.', '');
        return name;
    },

    isElementInView: function($el) {
        var rect = $el[0].getBoundingClientRect();

        return (
            rect.top <= (window.innerHeight / 3)
        );
    },

    getScripts: function(arr, path) {
        var _arr = $.map(arr, function(scr) {
            return $.getScript((path || "") + scr);
        });

        _arr.push($.Deferred(function(deferred) {
            $(deferred.resolve);
        }));

        return $.when.apply($, _arr);
    },

    showErrorMessage: function(title, content) {

        $('.modalThemeErrorMessage').remove();
        $('body').append('<div class="modal fade" id="modalThemeErrorMessage" aria-hidden="true" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' + title + '</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">' + content + '</div><div class="modal-footer"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button></div></div></div></div>');

        var modalThemeErrorMessage = document.getElementById('modalThemeErrorMessage');
        var modalThemeErrorMessage = bootstrap.Modal.getOrCreateInstance(modalThemeErrorMessage);
        modalThemeErrorMessage.show();

    }

};

(function($) {

    /*
	Local Environment Warning
	*/
    try {
        if ("file://" === location.origin) {
            if ($('[data-icon]').length || $('iframe').length) {

                theme.fn.showErrorMessage('Local Environment Warning', 'SVG Objects, Icons, YouTube and Vimeo Videos might not show correctly on local environment. For better result, please preview on a server.');

            }
        }
    } catch (e) {}

    /*
	Browser Selector
	*/
    $.extend({

        browserSelector: function() {

            // jQuery.browser.mobile (http://detectmobilebrowser.com/)
            (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

            // Touch
            var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

            var u = navigator.userAgent,
                ua = u.toLowerCase(),
                is = function (t) {
                    return ua.indexOf(t) > -1;
                },
                g = 'gecko',
                w = 'webkit',
                s = 'safari',
                o = 'opera',
                h = document.documentElement,
                b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

            c = b.join(' ');

            if ($.browser.mobile) {
                c += ' mobile';
            }

            if (hasTouch) {
                c += ' touch';
            }

            h.className += ' ' + c;

            // Edge Detect
            var isEdge = /Edge/.test(navigator.userAgent);

            if(isEdge) {
                $('html').removeClass('chrome').addClass('edge');
            }

            // Dark and Boxed Compatibility
            if($('body').hasClass('dark')) {
                $('html').addClass('dark');
            }

            if($('body').hasClass('boxed')) {
                $('html').addClass('boxed');
            }

        }

    });

    $.browserSelector();

    /*
	Browser Workarounds
	*/
    if (/iPad|iPhone|iPod/.test(navigator.platform)) {

        // iPad/Iphone/iPod Hover Workaround
        $(document).ready(function($) {
            $('.thumb-info').attr('onclick', 'return true');
        });
    }

    /*
	Tabs
	*/
    if( $('a[data-bs-toggle="tab"]').length ) {
        $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            var $tabPane = $($(e.target).attr('href'));

            // Carousel Refresh
            if($tabPane.length) {
                $tabPane.find('.owl-carousel').trigger('refresh.owl.carousel');
            }

            // Change Active Class
            $(this).parents('.nav-tabs').find('.active').removeClass('active');
            $(this).addClass('active').parent().addClass('active');
        });

        if( window.location.hash ) {
            $(window).on('load', function(){
                if( window.location.hash !== '*' && $( window.location.hash ).get(0) ) {
                    new bootstrap.Tab( $('a.nav-link[href="'+ window.location.hash +'"]:not([data-hash])')[0] ).show();
                }
            });
        }
    }

    /*
	On Load Scroll
	*/
    if( !$('html').hasClass('disable-onload-scroll') && window.location.hash && !['#*'].includes( window.location.hash ) ) {

        window.scrollTo(0, 0);

        $(window).on('load', function() {
            setTimeout(function() {

                var target = window.location.hash,
                    offset = ( $(window).width() < 768 ) ? 180 : 90;

                if (!$(target).length) {
                    return;
                }

                if ( $("a[href$='" + window.location.hash + "']").is('[data-hash-offset]') ) {
                    offset = parseInt( $("a[href$='" + window.location.hash + "']").first().attr('data-hash-offset') );
                } else if ( $("html").is('[data-hash-offset]') ) {
                    offset = parseInt( $("html").attr('data-hash-offset') );
                }

                if (isNaN(offset)) {
                    offset = 0;
                }

                $('body').addClass('scrolling');

                $('html, body').animate({
                    scrollTop: $(target).offset().top - offset
                }, 600, 'easeOutQuad', function() {
                    $('body').removeClass('scrolling');
                });

            }, 1);
        });
    }

    /*
	* Text Rotator
	*/
    $.fn.extend({
        textRotator: function(options) {

            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
                child: null
            };

            var options = $.extend(defaults, options);

            return this.each(function() {
                var o = options;
                var obj = $(this);
                var items = $(obj.children(), obj);
                items.each(function() {
                    $(this).hide();
                })
                if (!o.child) {
                    var next = $(obj).children(':first');
                } else {
                    var next = o.child;
                }
                $(next).fadeIn(o.fadeSpeed, function() {
                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
                        var next = $(this).next();
                        if (next.length == 0) {
                            next = $(obj).children(':first');
                        }
                        $(obj).textRotator({
                            child: next,
                            fadeSpeed: o.fadeSpeed,
                            pauseSpeed: o.pauseSpeed
                        });
                    })
                });
            });
        }
    });

    /*
	* Notice Top bar
	*/
    var $noticeTopBar = {
        $wrapper: $('.notice-top-bar'),
        $closeBtn: $('.notice-top-bar-close'),
        $header: $('#header'),
        $body: $('.body'),
        init: function() {
            var self = this;

            if( !$.cookie('portoNoticeTopBarClose') ) {
                self
                    .build()
                    .events();
            } else {
                self.$wrapper.parent().prepend( '<!-- Notice Top Bar removed by cookie -->' );
                self.$wrapper.remove();
            }

            return this;
        },
        build: function(){
            var self = this;

            $(window).on('load', function(){
                setTimeout(function(){
                    self.$body.css({
                        'margin-top': self.$wrapper.outerHeight(),
                        'transition': 'ease margin 300ms'
                    });

                    $('#noticeTopBarContent').textRotator({
                        fadeSpeed: 500,
                        pauseSpeed: 5000
                    });

                    if( ['absolute', 'fixed'].includes( self.$header.css('position') ) ) {
                        self.$header.css({
                            'top': self.$wrapper.outerHeight(),
                            'transition': 'ease top 300ms'
                        });
                    }

                    $(window).trigger('notice.top.bar.opened');

                }, 1000);
            });

            return this;
        },
        events: function() {
            var self = this;

            self.$closeBtn.on('click', function(e){
                e.preventDefault();

                self.$body.animate({
                    'margin-top': 0,
                }, 300, function(){
                    self.$wrapper.remove();
                    self.saveCookie();
                });

                if( ['absolute', 'fixed'].includes( self.$header.css('position') ) ) {
                    self.$header.animate({
                        top: 0
                    }, 300);
                }

                // When header has shrink effect
                if( self.$header.hasClass('header-effect-shrink') ) {
                    self.$header.find('.header-body').animate({
                        top: 0
                    }, 300);
                }

                $(window).trigger('notice.top.bar.closed');
            });

            return this;
        },
        checkCookie: function(){
            var self = this;

            if( $.cookie('portoNoticeTopBarClose') ) {
                return true;
            } else {
                return false;
            }

            return this;
        },
        saveCookie: function() {
            var self = this;

            $.cookie('portoNoticeTopBarClose', true);

            return this;
        }
    }

    if( $('.notice-top-bar').length ) {
        $noticeTopBar.init();
    }

    /*
	* Image Hotspots
	*/
    if( $('.image-hotspot').length ) {
        $('.image-hotspot')
            .append('<span class="ring"></span>')
            .append('<span class="circle"></span>');
    }

    /*
	* Reading Progress
	*/
    if( $('.progress-reading').length ) {

        function updateScrollProgress() {
            var pixels = $(document).scrollTop()
            pageHeight = $(document).height() - $(window).height()
            progress = 100 * pixels / pageHeight;

            $('.progress-reading .progress-bar').width(parseInt(progress) + "%");
        }

        $(document).on('scroll ready', function() {
            updateScrollProgress();
        });

        $(document).ready(function(){
            $(window).afterResize(function() {
                updateScrollProgress();
            });
        });

    }

    /*
	* Page Transition
	*/
    if( $('body[data-plugin-page-transition]').length ) {

        var link_click = false;

        $(document).on('click', 'a', function(e){
            link_click = $(this);
        });

        $(window).on("beforeunload", function(e) {
            if( typeof link_click === 'object' ) {
                var href = link_click.attr('href');

                if( href.indexOf('mailto:') != 0 && href.indexOf('tel:') != 0 && !link_click.data('rm-from-transition') ) {
                    $('body').addClass('page-transition-active');
                }
            }
        });

        $(window).on("pageshow", function(e){
            if( e.persisted || e.originalEvent.persisted) {
                if( $('html').hasClass('safari') ) {
                    window.location.reload();
                }

                $('body').removeClass('page-transition-active');
            }
        });
    }

    /*
	* Clone Element
	*/
    if( $('[data-clone-element]').length ) {

        $('[data-clone-element]').each(function() {

            var $el = $(this),
                content = $el.html(),
                qty = $el.attr('data-clone-element');

            for (var i = 0; i < qty; i++) {
                $el.html($el.html() + content);
            }

        });

    }

    /*
	* Thumb Info Floating Caption
	*/
    $('.thumb-info-floating-caption').each(function() {

        $(this)
            .addClass('thumb-info-floating-element-wrapper')
            .append( '<span class="thumb-info-floating-element thumb-info-floating-caption-title d-none">'+ $(this).data('title') +'</span>' );

        if( $(this).data('type') ) {
            $('.thumb-info-floating-caption-title', $(this))
                .append( '<div class="thumb-info-floating-caption-type">'+ $(this).data('type') +'</div>' )
                .css({
                    'padding-bottom' : 22
                });
        }

        if( $(this).hasClass('thumb-info-floating-caption-clean') ) {
            $('.thumb-info-floating-element', $(this)).addClass('bg-transparent');
        }

    });

    /*
	* Thumb Info Floating Element
	*/
    if( $('.thumb-info-floating-element-wrapper').length ) {

        if (typeof gsap !== 'undefined') {

            $('.thumb-info-floating-element-wrapper').on('mouseenter', function(e){

                if(!$(this).data('offset')) {
                    $(this).data('offset', 0);
                }

                var offset = parseInt($(this).data('offset'));

                $('.thumb-info-floating-element-clone').remove();

                $('.thumb-info-floating-element', $(this)).clone().addClass('thumb-info-floating-element-clone p-fixed p-events-none').attr('style', 'transform: scale(0.1);').removeClass('d-none').appendTo('body');

                $('.thumb-info-floating-element-clone').css({
                    left: e.clientX + (offset),
                    top: e.clientY + (offset)
                }).fadeIn(300);

                gsap.to('.thumb-info-floating-element-clone', 0.5, {
                    css: {
                        scaleX: 1,
                        scaleY: 1
                    }
                });

                $(document).off('mousemove').on('mousemove', function(e){

                    gsap.to('.thumb-info-floating-element-clone', 0.5, {
                        css: {
                            left: e.clientX + (offset),
                            top: e.clientY + (offset)
                        }
                    });

                });

            }).on('mouseout', function(){

                gsap.to('.thumb-info-floating-element-clone', 0.5, {
                    css: {
                        scaleX: 0.5,
                        scaleY: 0.5,
                        opacity: 0
                    }
                });

            });

        } else {
            theme.fn.showErrorMessage('Failed to Load File', 'Failed to load: GSAP - Include the following file(s): (vendor/gsap/gsap.min.js)');
        }

    }

    /*
	* Thumb Info Direction Aware
	*/
    $(window).on('load', function() {
        $('.thumb-info-wrapper-direction-aware').each( function() {
            $(this).hoverdir({
                speed : 300,
                easing : 'ease',
                hoverDelay : 0,
                inverse : false,
                hoverElem: '.thumb-info-wrapper-overlay'
            });
        });
    });

    /*
	* Thumb Info Container Full
	*/
    $('.thumb-info-container-full-img').each(function() {

        var $container = $(this);

        $('[data-full-width-img-src]', $container).each(function() {
            var uniqueId = 'img' + Math.floor(Math.random() * 10000);
            $(this).attr('data-rel', uniqueId);

            $container.append('<div style="background-image: url(' + $(this).attr('data-full-width-img-src') + ');" id="' + uniqueId + '" class="thumb-info-container-full-img-large opacity-0"></div>');
        });

        $('.thumb-info', $container).on('mouseenter', function(e){
            $('.thumb-info-container-full-img-large').removeClass('active');
            $('#' + $(this).attr('data-rel')).addClass('active');
        });

    });

    /*
	* Toggle Text Click
	*/
    $('[data-toggle-text-click]').on('click', function () {
        $(this).text(function(i, text){
            return text === $(this).attr('data-toggle-text-click') ? $(this).attr('data-toggle-text-click-alt') : $(this).attr('data-toggle-text-click');
        });
    });

    /*
	* Toggle Class
	*/
    $('[data-toggle-class]').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass( $(this).data('porto-toggle-class') );
    });

    /*
	* Shape Divider Aspect Ratio
	*/
    if( $('.shape-divider').length ) {
        aspectRatioSVG();
        $(window).on('resize', function(){
            aspectRatioSVG();
        });
    }

    /*
	* Shape Divider Animated
	*/
    if( $('.shape-divider-horizontal-animation').length ) {
        theme.fn.intObs('.shape-divider-horizontal-animation', function(){
            for( var i = 0; i <= 1; i++ ) {
                var svgClone = $(this).find('svg:nth-child(1)').clone();

                $(this).append( svgClone )
            }

            $(this).addClass('start');
        }, {});
    }

    /*
	* Shape Divider - SVG Aspect Ratio
	*/
    function aspectRatioSVG() {
        if( $(window).width() < 1950 ) {
            $('.shape-divider svg[preserveAspectRatio]').each(function(){
                if( !$(this).parent().hasClass('shape-divider-horizontal-animation') ) {
                    $(this).attr('preserveAspectRatio', 'xMinYMin');
                } else {
                    $(this).attr('preserveAspectRatio', 'none');
                }
            });
        } else {
            $('.shape-divider svg[preserveAspectRatio]').each(function(){
                $(this).attr('preserveAspectRatio', 'none');
            });
        }
    }

    /*
	* Content Switcher
	*/
    $('[data-content-switcher]').on('change', function(e, v) {
        var switcherRel = ($(this).is(':checked') ? '1' : '2' ),
            switcherId = $(this).attr('data-content-switcher-content-id');

        $('[data-content-switcher-id=' + switcherId + ']').addClass('initialized').removeClass('active');

        var $activeEl = $('[data-content-switcher-id=' + switcherId + '][data-content-switcher-rel=' + switcherRel + ']');

        $activeEl.addClass('active');

        $activeEl.parent().css('height', $activeEl.height());
    });

    $('[data-content-switcher]').trigger('change');

    /*
	* Dynamic Height
	*/
    var $window = $(window);
    $window.on('resize dynamic.height.resize', function(){
        $('[data-dynamic-height]').each(function(){
            var $this = $(this),
                values = JSON.parse($this.data('dynamic-height').replace(/'/g,'"').replace(';',''))

            // XS
            if( $window.width() < 576 ) {
                $this.height( values[4] );
            }

            // SM
            if( $window.width() > 575 && $window.width() < 768 ) {
                $this.height( values[3] );
            }

            // MD
            if( $window.width() > 767 && $window.width() < 992 ) {
                $this.height( values[2] );
            }

            // LG
            if( $window.width() > 991 && $window.width() < 1200 ) {
                $this.height( values[1] );
            }

            // XS
            if( $window.width() > 1199 ) {
                $this.height( values[0] );
            }
        });
    });

    // Mobile First Load
    if( $window.width() < 992 ) {
        $window.trigger('dynamic.height.resize');
    }

    /*
	* Video - Trigger Play
	*/
    if( $('[data-trigger-play-video]').length ) {
        theme.fn.execOnceTroughEvent( '[data-trigger-play-video]', 'mouseover.trigger.play.video', function(){
            var $video = $( $(this).data('trigger-play-video') );

            $(this).on('click', function(e){
                e.preventDefault();

                if( $(this).data('trigger-play-video-remove') == 'yes' ) {
                    $(this).animate({
                        opacity: 0
                    }, 300, function(){
                        $video[0].play();

                        $(this).remove();
                    });
                } else {
                    setTimeout(function(){
                        $video[0].play();
                    },300);
                }
            });
        });
    }

    /*
	* Video - Auto Play
	*/
    if( $('video[data-auto-play]').length ) {
        $(window).on('load', function(){
            $('video[data-auto-play]').each(function(){
                var $video = $(this);

                setTimeout(function(){
                    if( $( '#' + $video.attr('id') ).length ) {
                        if( $( '[data-trigger-play-video="#' + $video.attr('id') + '"]' ).data('trigger-play-video-remove') == 'yes' ) {
                            $( '[data-trigger-play-video="#' + $video.attr('id') + '"]' ).animate({
                                opacity: 0
                            }, 300, function(){
                                $video[0].play();

                                $( '[data-trigger-play-video="#' + $video.attr('id') + '"]' ).remove();
                            });
                        } else {
                            setTimeout(function(){
                                $video[0].play();
                            },300);
                        }
                    }
                }, 100);

            });
        });
    }

    /*
	* Remove min height after the load of page
	*/
    if( $('[data-remove-min-height]').length ) {
        $(window).on('load', function(){
            $('[data-remove-min-height]').each(function(){
                $(this).css({
                    'min-height': 0
                });
            });
        });
    }

    /*
	* Lazy Load Background Images (with lazySizes plugin)
	*/
    document.addEventListener('lazybeforeunveil', function(e){
        var bg = e.target.getAttribute('data-bg-src');
        if(bg) {
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    });

    /*
	* Title Border
	*/
    if($('[data-title-border]').length) {

        var $pageHeaderTitleBorder = $('<span class="page-header-title-border"></span>'),
            $pageHeaderTitle = $('[data-title-border]'),
            $window = $(window);

        $pageHeaderTitle.before($pageHeaderTitleBorder);

        var setPageHeaderTitleBorderWidth = function() {
            $pageHeaderTitleBorder.width($pageHeaderTitle.width());
        }

        $window.afterResize(function(){
            setPageHeaderTitleBorderWidth();
        });

        setPageHeaderTitleBorderWidth();

        $pageHeaderTitleBorder.addClass('visible');
    }

    /*
	* Footer Reveal
	*/
    (function($) {
        var $footerReveal = {
            $wrapper: $('.footer-reveal'),
            init: function() {
                var self = this;

                self.build();
                self.events();
            },
            build: function() {
                var self = this,
                    footer_height = self.$wrapper.outerHeight(true),
                    window_height = ( $(window).height() - $('.header-body').height() );

                if( footer_height > window_height ) {
                    $('#footer').removeClass('footer-reveal');
                    $('body').css('margin-bottom', 0);
                } else {
                    $('#footer').addClass('footer-reveal');
                    $('body').css('margin-bottom', footer_height);
                }

            },
            events: function() {
                var self = this,
                    $window = $(window);

                $window.on('load', function(){
                    $window.afterResize(function(){
                        self.build();
                    });
                });
            }
        }

        if( $('.footer-reveal').length ) {
            $footerReveal.init();
        }
    })(jQuery);

    /*
	* Re-Init Plugin
	*/
    if( $('[data-reinit-plugin]').length ) {
        $('[data-reinit-plugin]').on('click', function(e) {
            e.preventDefault();

            var pluginInstance = $(this).data('reinit-plugin'),
                pluginFunction = $(this).data('reinit-plugin-function'),
                pluginElement  = $(this).data('reinit-plugin-element'),
                pluginOptions  = theme.fn.getOptions($(this).data('reinit-plugin-options'));

            $( pluginElement ).data( pluginInstance ).destroy();

            setTimeout(function(){
                theme.fn.execPluginFunction(pluginFunction, $( pluginElement ), pluginOptions);
            }, 1000);

        });
    }

    /*
	* Simple Copy To Clipboard
	*/
    if( $('[data-copy-to-clipboard]').length ) {
        theme.fn.intObs( '[data-copy-to-clipboard]', function(){
            var $this = $(this);

            $this.wrap( '<div class="copy-to-clipboard-wrapper position-relative"></div>' );

            var $copyButton = $('<a href="#" class="btn btn-primary btn-px-2 py-1 text-0 position-absolute top-8 right-8">COPY</a>');
            $this.parent().prepend( $copyButton );

            $copyButton.on('click', function(e){
                e.preventDefault();

                var $btn       = $(this),
                    $temp = $('<textarea class="d-block opacity-0" style="height: 0;">');

                $btn.parent().append( $temp );

                $temp.val( $this.text() );

                $temp[0].select();
                $temp[0].setSelectionRange(0, 99999);

                document.execCommand("copy");

                $btn.addClass('copied');
                setTimeout(function(){
                    $btn.removeClass('copied');
                }, 1000);

                $temp.remove();
            });
        }, {
            rootMargin: '0px 0px 0px 0px'
        } );
    }

    /*
	* Marquee
	*/
    if( $('.marquee').length && $.isFunction($.fn.marquee) ) {
        $('.marquee').marquee({
            duration: 5000,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true
        });
    }

    /*
	* Style Switcher Open Loader Button
	*/
    if( $('.style-switcher-open-loader').length ) {

        $('.style-switcher-open-loader').on('click', function(e){
            e.preventDefault();

            var $this = $(this);

            // Add Spinner to icon
            $this.addClass('style-switcher-open-loader-loading');

            var	basePath = $(this).data('base-path'),
                skinSrc = $(this).data('skin-src');

            var script1 = document.createElement("script");
            script1.src = basePath + "master/style-switcher/style.switcher.localstorage.js";

            var script2 = document.createElement("script");
            script2.src = basePath + "master/style-switcher/style.switcher.js";
            script2.id = "styleSwitcherScript";
            script2.setAttribute('data-base-path', basePath);
            script2.setAttribute('data-skin-src', skinSrc);

            script2.onload = function() {
                setTimeout(function(){
                    // Trigger a click to open the style switcher sidebar
                    function checkIfReady() {
                        if( !$('.style-switcher-open').length ) {
                            window.setTimeout(checkIfReady, 100);
                        } else {
                            $('.style-switcher-open').trigger('click');
                        }
                    }
                    checkIfReady();

                }, 500);
            }

            document.body.appendChild(script1);
            document.body.appendChild(script2);

        });

    }

})(jQuery);

// Animate
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__animate';

    var PluginAnimate = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginAnimate.defaults = {
        accX: 0,
        accY: -80,
        delay: 100,
        duration: '750ms',
        minWindowWidth: 767,
        forceAnimation: false,
        flagClassOnly: false
    };

    PluginAnimate.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            // Flag Class Only
            // - Useful for simple animations like hightlight
            // - Less process and memory
            if( self.options.flagClassOnly ) {
                var delay = self.options.wrapper.attr('data-appear-animation-delay') ? self.options.wrapper.attr('data-appear-animation-delay') : self.options.delay;

                self.options.wrapper.css({
                    'animation-delay': delay + 'ms',
                    'transition-delay': delay + 'ms'
                });
                self.options.wrapper.addClass( self.options.wrapper.attr('data-appear-animation') );

                return this;
            }

            if($('body').hasClass('loading-overlay-showing')) {
                $(window).on('loading.overlay.ready', function(){
                    self.animate();
                });
            } else {
                self.animate();
            }

            return this;
        },

        animate: function() {
            var self = this,
                $el = this.options.wrapper,
                delay = 0,
                duration = this.options.duration,
                elTopDistance = $el.offset().top,
                windowTopDistance = $(window).scrollTop();

            // If has appear animation elements inside a SVG.
            // Intersection Observer API do not check elements inside SVG's, so we need initialize trough top parent SVG
            if( $el.data('appear-animation-svg') ) {
                $el.find('[data-appear-animation]').each(function(){
                    var $this = $(this),
                        opts;

                    var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themePluginAnimate(opts);
                });

                return this;
            }

            // No animation at the first load of page. This is good for performance
            if( self.options.firstLoadNoAnim ) {
                $el.removeClass('appear-animation');

                // Inside Carousel
                if( $el.closest('.owl-carousel').get(0) ) {
                    setTimeout(function(){
                        $el.closest('.owl-carousel').on('change.owl.carousel', function(){
                            self.options.firstLoadNoAnim = false;
                            $el.removeData('__animate');
                            $el.themePluginAnimate( self.options );
                        });
                    }, 500);
                }

                return this;
            }

            $el.addClass('appear-animation animated');

            if (!$('html').hasClass('no-csstransitions') && $(window).width() > self.options.minWindowWidth && elTopDistance >= windowTopDistance || self.options.forceAnimation == true) {
                delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);
                duration = ($el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration);

                if (duration != '750ms') {
                    $el.css('animation-duration', duration);
                }

                $el.css('animation-delay', delay + 'ms');
                $el.addClass($el.attr('data-appear-animation') + ' appear-animation-visible');

                $el.trigger('animation:show');

            } else {
                $el.addClass('appear-animation-visible');
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginAnimate: PluginAnimate
    });

    // jquery plugin
    $.fn.themePluginAnimate = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginAnimate($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);

// Animated Content
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__animatedContent';

    var PluginAnimatedContent = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginAnimatedContent.defaults = {
        contentType: 'letter',
        animationName: 'fadeIn',
        animationSpeed: 50,
        startDelay: 500,
        minWindowWidth: 768,
        letterClass: '',
        wordClass: '',
        wrapperClass: ''
    };

    PluginAnimatedContent.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            var self = this;

            this.$el = $el;
            this.initialText = $el.text();

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginAnimatedContent.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self    = this;

            if( $(window).width() < self.options.minWindowWidth ) {
                return this;
            }

            if( self.options.firstLoadNoAnim ) {
                self.$el.css({
                    visibility: 'visible'
                });

                // Inside Carousel
                if( self.$el.closest('.owl-carousel').get(0) ) {
                    setTimeout(function(){
                        self.$el.closest('.owl-carousel').on('change.owl.carousel', function(){
                            self.options.firstLoadNoAnim = false;
                            self.build();
                        });
                    }, 500);
                }

                return this;
            }

            // Set Min Height to avoid flicking issues
            self.setMinHeight();

            // Letter
            if( self.options.contentType == 'letter' ) {

                self.$el.addClass('initialized');

                var letters = self.$el.text().split('');

                self.$el.text('');

                // Type Writer
                if( self.options.animationName == 'typeWriter' ) {
                    self.$el.append( '<span class="letters-wrapper"></span><span class="typeWriter"></pre>' );

                    var index = 0;

                    setTimeout(function(){

                        var timeout = function(){
                            var st = setTimeout(function(){
                                var letter = letters[index];

                                self.$el.find('.letters-wrapper').append( '<span class="letter '+ ( self.options.letterClass ? self.options.letterClass + ' ' : '' ) +'">' + letter + '</span>' );

                                index++;
                                timeout();
                            }, self.options.animationSpeed);

                            if( index >= letters.length ) {
                                clearTimeout(st);
                            }
                        };
                        timeout();

                    }, self.options.startDelay);

                    // Class Animation
                } else {
                    setTimeout(function(){
                        for( var i = 0; i < letters.length; i++ ) {
                            var letter = letters[i];

                            self.$el.append( '<span class="animated-letters-wrapper ' + self.options.wrapperClass + '"><span class="animated-letters-item letter '+ ( self.options.letterClass ? self.options.letterClass + ' ' : '' ) + self.options.animationName +' animated" style="animation-delay: '+ ( i * self.options.animationSpeed ) +'ms;">' + ( letter == ' ' ? '&nbsp;' : letter ) + '</span></span>' );

                        }
                    }, self.options.startDelay);
                }

                // Words
            } else if( self.options.contentType == 'word' ) {

                var words = self.$el.text().split(" "),
                    delay = self.options.startDelay;

                self.$el.empty();

                $.each(words, function(i, v) {
                    self.$el.append( $('<span class="animated-words-wrapper ' + self.options.wrapperClass + '">').html('<span class="animated-words-item ' + self.options.wordClass + ' appear-animation" data-appear-animation="' + self.options.animationName + '" data-appear-animation-delay="' + delay + '">' + v + '&nbsp;</span>') );
                    delay = delay + self.options.animationSpeed;
                });

                if ($.isFunction($.fn['themePluginAnimate']) && $('.animated-words-item[data-appear-animation]').length) {
                    theme.fn.dynIntObsInit( '.animated-words-item[data-appear-animation]', 'themePluginAnimate', theme.PluginAnimate.defaults );
                }

                self.$el.addClass('initialized');

            }

            return this;
        },

        setMinHeight: function() {
            var self = this;

            // if it's inside carousel
            if( self.$el.closest('.owl-carousel').get(0) ) {
                self.$el.closest('.owl-carousel').addClass('d-block');
                self.$el.css( 'min-height', self.$el.height() );
                self.$el.closest('.owl-carousel').removeClass('d-block');
            } else {
                self.$el.css( 'min-height', self.$el.height() );
            }

            return this;
        },

        destroy: function() {
            var self = this;

            self.$el
                .html( self.initialText )
                .css( 'min-height', '' );

            return this;
        },

        events: function() {
            var self = this;

            // Destroy
            self.$el.on('animated.letters.destroy', function(){
                self.destroy();
            });

            // Initialize
            self.$el.on('animated.letters.initialize', function(){
                self.build();
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginAnimatedContent: PluginAnimatedContent
    });

    // jquery plugin
    $.fn.themePluginAnimatedContent = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginAnimatedContent($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Before / After
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__beforeafter';

    var PluginBeforeAfter = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginBeforeAfter.defaults = {
        default_offset_pct: 0.5,
        orientation: 'horizontal',
        before_label: 'Before',
        after_label: 'After',
        no_overlay: false,
        move_slider_on_hover: false,
        move_with_handle_only: true,
        click_to_move: false
    };

    PluginBeforeAfter.prototype = {
        initialize: function($el, opts) {
            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginBeforeAfter.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {

            if (!($.isFunction($.fn.twentytwenty))) {
                return this;
            }

            var self = this;

            self.options.wrapper
                .twentytwenty(self.options);

            return this;

        }
    };

    // expose to scope
    $.extend(theme, {
        PluginBeforeAfter: PluginBeforeAfter
    });

    // jquery plugin
    $.fn.themePluginBeforeAfter = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginBeforeAfter($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Carousel Light
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__carouselLight';

    var PluginCarouselLight = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginCarouselLight.defaults = {
        autoplay: true,
        autoplayTimeout: 7000,
        disableAutoPlayOnClick: true
    };

    PluginCarouselLight.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;
            this.clickFlag = true;

            this
                .setData()
                .setOptions(opts)
                .build()
                .owlNav()
                .owlDots()
                .autoPlay()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginCarouselLight.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            self.$el
                .css('opacity', 1)
                .find('.owl-item:first-child')
                .addClass('active');

            self.$el.trigger('initialized.owl.carousel');

            // Carousel Navigate By ID and item index
            self.carouselNavigate();

            return this;
        },

        changeSlide: function( $nextSlide ) {
            var self = this,
                $prevSlide = self.$el.find('.owl-item.active');

            self.$el.find('.owl-item.active').addClass('removing');

            $prevSlide
                .removeClass('fadeIn')
                .addClass( 'fadeOut animated' );

            setTimeout(function(){
                setTimeout(function(){
                    $prevSlide.removeClass('active');
                }, 400);

                $nextSlide
                    .addClass('active')
                    .removeClass('fadeOut')
                    .addClass( 'fadeIn animated' );

            }, 200);

            // Dots
            self.$el
                .find('.owl-dot')
                .removeClass('active')
                .eq( $nextSlide.index() )
                .addClass('active');

            self.$el.trigger({
                type: 'change.owl.carousel',
                nextSlideIndex: $nextSlide.index(),
                prevSlideIndex: $prevSlide.index()
            });

            setTimeout(function(){
                self.$el.trigger({
                    type: 'changed.owl.carousel',
                    nextSlideIndex: $nextSlide.index(),
                    prevSlideIndex: $prevSlide.index()
                });
            }, 500);
        },

        owlNav: function() {
            var self = this,
                $owlNext = self.$el.find('.owl-next'),
                $owlPrev = self.$el.find('.owl-prev');

            $owlPrev.on('click', function(e){
                e.preventDefault();

                if( self.options.disableAutoPlayOnClick ) {
                    window.clearInterval(self.autoPlayInterval);
                }

                if( self.avoidMultipleClicks() ) {
                    return false;
                }

                self.owlPrev();
            });

            $owlNext.on('click', function(e){
                e.preventDefault();

                if( self.options.disableAutoPlayOnClick ) {
                    window.clearInterval(self.autoPlayInterval);
                }

                if( self.avoidMultipleClicks() ) {
                    return false;
                }

                self.owlNext();
            });

            return this;
        },

        owlDots: function(){
            var self = this,
                $owlDot = self.$el.find('.owl-dot');

            $owlDot.on('click', function(e){
                $this = $(this);

                e.preventDefault();

                if( self.options.disableAutoPlayOnClick ) {
                    window.clearInterval(self.autoPlayInterval);
                }

                if( self.avoidMultipleClicks() ) {
                    return false;
                }

                var dotIndex = $(this).index();

                // Do nothing if respective dot slide is active/showing
                if( $this.hasClass('active') ) {
                    return false;
                }

                self.changeSlide( self.$el.find('.owl-item').eq( dotIndex ) );
            });

            return this;
        },

        owlPrev: function() {
            var self = this;

            if( self.$el.find('.owl-item.active').prev().get(0) ) {
                self.changeSlide( self.$el.find('.owl-item.active').prev() );
            } else {
                self.changeSlide( self.$el.find('.owl-item:last-child') );
            }
        },

        owlNext: function() {
            var self = this;

            if( self.$el.find('.owl-item.active').next().get(0) ) {
                self.changeSlide( self.$el.find('.owl-item.active').next() );
            } else {
                self.changeSlide( self.$el.find('.owl-item').eq(0) );
            }
        },

        avoidMultipleClicks: function() {
            var self = this;

            if( !self.clickFlag ) {
                return true;
            }

            if( self.clickFlag ) {
                self.clickFlag = false;
                setTimeout(function(){
                    self.clickFlag = true;
                }, 1000);
            }

            return false;
        },

        autoPlay: function(){
            var self = this,
                $el  = this.options.wrapper;

            if( self.options.autoplay ) {
                self.autoPlayInterval = window.setInterval(function() {
                    self.owlNext();
                }, self.options.autoplayTimeout);
            }

            return this;
        },

        carouselNavigate: function() {
            var self      = this,
                $el       = this.options.wrapper,
                $carousel = $el;

            if( $('[data-carousel-navigate]').get(0) ) {
                $('[data-carousel-navigate-id="#'+ $el.attr('id') +'"]').each(function(){
                    var $this = $(this),
                        hasCarousel = $( $this.data('carousel-navigate-id') ).get(0),
                        toIndex = $this.data('carousel-navigate-to');

                    if( hasCarousel ) {

                        $this.on('click', function(){

                            if( self.options.disableAutoPlayOnClick ) {
                                window.clearInterval(self.autoPlayInterval);
                            }

                            self.changeSlide( self.$el.find('.owl-item').eq( parseInt(toIndex) - 1 ) );
                        });

                    }
                });

                $el.on('change.owl.carousel', function(e){
                    $('[data-carousel-navigate-id="#'+ $el.attr('id') +'"]').removeClass('active');
                });

                $el.on('changed.owl.carousel', function(e){
                    $('[data-carousel-navigate-id="#'+ $el.attr('id') +'"][data-carousel-navigate-to="'+ ( e.nextSlideIndex + 1 ) +'"]').addClass('active');
                });
            }

            return this;
        },

        events: function() {
            var self = this;

            self.$el.on('change.owl.carousel', function(event) {

                // Hide elements inside carousel
                self.$el.find('[data-appear-animation]:not(.background-image-wrapper), [data-plugin-animated-letters]').addClass('invisible');

                // Animated Letters
                self.$el.find('[data-plugin-animated-letters]').trigger('animated.letters.destroy');

                // Remove "d-none" class before show the element. This is useful when using background images inside a carousel. Like ken burns effect
                self.$el.find('.owl-item:not(.active) [data-carousel-onchange-show]').removeClass('d-none');

            });

            self.$el.on('changed.owl.carousel', function(event) {
                setTimeout(function(){

                    // Appear Animation
                    if( self.$el.find('.owl-item.cloned [data-appear-animation]').get(0) ) {
                        self.$el.find('.owl-item.cloned [data-appear-animation]').each(function() {
                            var $this = $(this),
                                opts;

                            var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                            if (pluginOptions)
                                opts = pluginOptions;

                            $this.themePluginAnimate(opts);
                        });
                    }

                    // Show elements inside carousel
                    self.$el.find('.owl-item.active [data-appear-animation]:not(.background-image-wrapper), [data-plugin-animated-letters]').removeClass('invisible');

                    // Animated Letters
                    self.$el.find('.owl-item.active [data-plugin-animated-letters]').trigger('animated.letters.initialize');

                    // Background Video
                    self.$el.find('.owl-item.cloned.active [data-plugin-video-background]').trigger('video.background.initialize');

                }, 500);

            });
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginCarouselLight: PluginCarouselLight
    });

    // jquery plugin
    $.fn.themePluginCarouselLight = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginCarouselLight($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);

// Carousel
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__carousel';

    var PluginCarousel = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginCarousel.defaults = {
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 1
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            },
            1199: {
                items: 4
            }
        },
        navText: [],
        refresh: false
    };

    PluginCarousel.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            // If has data-icon inside, initialize only after icons get rendered
            // Prevent flicking issues
            if( $el.find('[data-icon]').get(0) ) {
                var self = this;

                $(window).on('icon.rendered', function(){
                    if ($el.data(instanceName)) {
                        return this;
                    }

                    setTimeout(function(){
                        self
                            .setData()
                            .setOptions(opts)
                            .build();
                    }, 1000);
                });

                return this;
            }

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.owlCarousel))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper;

            // Add Theme Class
            $el.addClass('owl-theme');

            // Add Loading
            $el.addClass('owl-loading');

            // Force RTL according to HTML dir attribute
            if ($('html').attr('dir') == 'rtl') {
                this.options = $.extend(true, {}, this.options, {
                    rtl: true
                });
            }

            if (this.options.items == 1) {
                this.options.responsive = {}
            }

            if (this.options.items > 4) {
                this.options = $.extend(true, {}, this.options, {
                    responsive: {
                        1199: {
                            items: this.options.items
                        }
                    }
                });
            }

            // Auto Height Fixes
            if (this.options.autoHeight) {
                var itemsHeight = [];

                $el.find('.owl-item').each(function(){
                    if( $(this).hasClass('active') ) {
                        itemsHeight.push( $(this).height() );
                    }
                });

                $(window).afterResize(function() {
                    $el.find('.owl-stage-outer').height( Math.max.apply(null, itemsHeight) );
                });

                $(window).on('load', function() {
                    $el.find('.owl-stage-outer').height( Math.max.apply(null, itemsHeight) );
                });
            }

            // Initialize OwlCarousel
            $el.owlCarousel(this.options).addClass('owl-carousel-init animated fadeIn');

            // Remove "animated fadeIn" class to prevent conflicts
            setTimeout(function(){
                $el.removeClass('animated fadeIn');
            }, 1000);

            // Owl Carousel Wrapper
            if( $el.closest('.owl-carousel-wrapper').get(0) ) {
                setTimeout(function(){
                    $el.closest('.owl-carousel-wrapper').css({
                        height: ''
                    });
                }, 500);
            }

            // Owl Carousel Loader
            if( $el.prev().hasClass('owl-carousel-loader') ) {
                $el.prev().remove();
            }

            // Nav Offset
            self.navigationOffsets();

            // Nav Outside
            if( $el.hasClass('nav-outside') ) {
                $(window).on('owl.carousel.nav.outside', function(){
                    if( $(window).width() < 992 ) {
                        self.options.stagePadding = 40;
                        $el.addClass('stage-margin');
                    } else {
                        self.options.stagePadding = 0;
                        $el.removeClass('stage-margin');
                    }

                    $el.owlCarousel('destroy').owlCarousel( self.options );

                    // Nav Offset
                    self.navigationOffsets();
                });

                // Window Resize
                $(window).on('load', function(){
                    $(window).afterResize(function(){
                        $(window).trigger('owl.carousel.nav.outside');
                    });
                });

                // First Load
                $(window).trigger('owl.carousel.nav.outside');
            }

            // Nav style 5 (SVG Arrows)
            if( $el.hasClass('nav-svg-arrows-1') ) {
                var svg_arrow = '' +
                    '<svg version="1.1" viewBox="0 0 15.698 8.706" width="17" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<polygon stroke="#212121" stroke-width="0.1" fill="#212121" points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "/>' +
                    '</svg>';

                $el.find('.owl-next, .owl-prev').append( svg_arrow );
            }

            // Sync
            if( $el.attr('data-sync') ) {
                $el.on('change.owl.carousel', function(event) {
                    if (event.namespace && event.property.name === 'position') {
                        var target = event.relatedTarget.relative(event.property.value, true);
                        $( $el.data('sync') ).owlCarousel('to', target, 300, true);
                    }
                });
            }

            // Carousel Center Active Item
            if( $el.hasClass('carousel-center-active-item') ) {
                var itemsActive    = $el.find('.owl-item.active'),
                    indexCenter    = Math.floor( ($el.find('.owl-item.active').length - 1) / 2 ),
                    itemCenter     = itemsActive.eq(indexCenter);

                itemCenter.addClass('current');

                $el.on('change.owl.carousel', function(event) {
                    $el.find('.owl-item').removeClass('current');

                    setTimeout(function(){
                        var itemsActive    = $el.find('.owl-item.active'),
                            indexCenter    = Math.floor( ($el.find('.owl-item.active').length - 1) / 2 ),
                            itemCenter     = itemsActive.eq(indexCenter);

                        itemCenter.addClass('current');
                    }, 100);
                });

                // Refresh
                $el.trigger('refresh.owl.carousel');

            }

            // AnimateIn / AnimateOut Fix
            if( self.options.animateIn || self.options.animateOut ) {
                $el.on('change.owl.carousel', function(event) {

                    // Hide elements inside carousel
                    $el.find('[data-appear-animation], [data-plugin-animated-letters]').addClass('d-none');

                    // Animated Letters
                    $el.find('[data-plugin-animated-letters]').trigger('animated.letters.destroy');

                    // Remove "d-none" class before show the element. This is useful when using background images inside a carousel. Like ken burns effect
                    $el.find('.owl-item:not(.active) [data-carousel-onchange-show]').removeClass('d-none');

                });

                $el.on('changed.owl.carousel', function(event) {
                    setTimeout(function(){

                        // Appear Animation
                        $el.find('[data-appear-animation]').each(function() {
                            var $this = $(this),
                                opts;

                            var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                            if (pluginOptions)
                                opts = pluginOptions;

                            $this.themePluginAnimate(opts);
                        });

                        // Show elements inside carousel
                        $el.find('.owl-item.active [data-appear-animation], [data-plugin-animated-letters]').removeClass('d-none');

                        // Animated Letters
                        $el.find('.owl-item.active [data-plugin-animated-letters]').trigger('animated.letters.initialize');

                        // Background Video
                        $el.find('.owl-item.cloned.active [data-plugin-video-background]').trigger('video.background.initialize');

                    }, 10);

                });
            }

            // data-icon inside carousel
            if( $el.find('[data-icon]').length ) {
                $el.on('change.owl.carousel drag.owl.carousel', function(){
                    $el.find('.owl-item.cloned [data-icon]').each(function(){
                        var $this = $(this),
                            opts;

                        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginIcon(opts);
                    });
                });
            }

            // Render Background Videos inside carousel. Just a trigger on window is sufficient to render
            if( $el.find('[data-plugin-video-background]').get(0) ) {
                $(window).resize();
            }

            // Remove Loading
            $el.removeClass('owl-loading');

            // Remove Height
            $el.css('height', 'auto');

            // Carousel Navigate By ID and item index
            self.carouselNavigate();

            // Refresh Carousel
            if( self.options.refresh ) {
                $el.owlCarousel('refresh');
            }

            return this;
        },

        navigationOffsets: function() {
            var self 			 = this,
                $el  			 = this.options.wrapper,
                navHasTransform  = $el.find('.owl-nav').css('transform') == 'none' ? false : true,
                dotsHasTransform = $el.find('.owl-dots').css('transform') == 'none' ? false : true;

            // ************* NAV *****************
            // Nav Offset - Horizontal
            if( self.options.navHorizontalOffset && !self.options.navVerticalOffset ) {
                if( !navHasTransform ) {
                    $el.find('.owl-nav').css({
                        transform: 'translate3d('+ self.options.navHorizontalOffset +', 0, 0)'
                    });
                } else {
                    $el.find('.owl-nav').css({
                        left: self.options.navHorizontalOffset
                    });
                }
            }

            // Nav Offset - Vertical
            if( self.options.navVerticalOffset && !self.options.navHorizontalOffset ) {
                if( !navHasTransform ) {
                    $el.find('.owl-nav').css({
                        transform: 'translate3d(0, '+ self.options.navVerticalOffset +', 0)'
                    });
                } else {
                    $el.find('.owl-nav').css({
                        top: 'calc( 50% - '+ self.options.navVerticalOffset +' )'
                    });
                }
            }

            // Nav Offset - Horizontal & Vertical
            if( self.options.navVerticalOffset && self.options.navHorizontalOffset ) {
                if( !navHasTransform ) {
                    $el.find('.owl-nav').css({
                        transform: 'translate3d('+ self.options.navHorizontalOffset +', '+ self.options.navVerticalOffset +', 0)'
                    });
                } else {
                    $el.find('.owl-nav').css({
                        top: 'calc( 50% - '+ self.options.navVerticalOffset +' )',
                        left: self.options.navHorizontalOffset
                    });
                }
            }

            // ********** DOTS *********************
            // Dots Offset - Horizontal
            if( self.options.dotsHorizontalOffset && !self.options.dotsVerticalOffset ) {
                $el.find('.owl-dots').css({
                    transform: 'translate3d('+ self.options.dotsHorizontalOffset +', 0, 0)'
                });
            }

            // Dots Offset - Vertical
            if( self.options.dotsVerticalOffset && !self.options.dotsHorizontalOffset ) {
                if( !dotsHasTransform ) {
                    $el.find('.owl-dots').css({
                        transform: 'translate3d(0, '+ self.options.dotsVerticalOffset +', 0)'
                    });
                } else {
                    $el.find('.owl-dots').css({
                        top: 'calc( 50% - '+ self.options.dotsVerticalOffset +' )'
                    });
                }
            }

            // Dots Offset - Horizontal & Vertical
            if( self.options.dotsVerticalOffset && self.options.dotsHorizontalOffset ) {
                $el.find('.owl-dots').css({
                    transform: 'translate3d('+ self.options.dotsHorizontalOffset +', '+ self.options.dotsVerticalOffset +', 0)'
                });
            }

            return this;
        },

        carouselNavigate: function() {
            var self      = this,
                $el       = this.options.wrapper,
                $carousel = $el.data('owl.carousel');

            if( $('[data-carousel-navigate]').get(0) ) {
                $('[data-carousel-navigate-id="#'+ $el.attr('id') +'"]').each(function(){
                    var $this = $(this),
                        hasCarousel = $( $this.data('carousel-navigate-id') ).get(0),
                        toIndex = $this.data('carousel-navigate-to');

                    if( hasCarousel ) {

                        $this.on('click', function(){
                            $carousel.to( parseInt(toIndex) - 1 );
                        });

                    }
                });

                $el.on('change.owl.carousel', function(){
                    $('[data-carousel-navigate-id="#'+ $el.attr('id') +'"]').removeClass('active');
                });

                $el.on('changed.owl.carousel', function(e){
                    $('[data-carousel-navigate-id="#'+ $el.attr('id') +'"][data-carousel-navigate-to="'+ ( e.item.index + 1 ) +'"]').addClass('active');
                });
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginCarousel: PluginCarousel
    });

    // jquery plugin
    $.fn.themePluginCarousel = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginCarousel($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Chart Circular
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__chartCircular';

    var PluginChartCircular = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginChartCircular.defaults = {
        accX: 0,
        accY: -150,
        delay: 1,
        barColor: '#0088CC',
        trackColor: '#f2f2f2',
        scaleColor: false,
        scaleLength: 5,
        lineCap: 'round',
        lineWidth: 13,
        size: 175,
        rotate: 0,
        animate: ({
            duration: 2500,
            enabled: true
        })
    };

    PluginChartCircular.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.easyPieChart))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper,
                value = ($el.attr('data-percent') ? $el.attr('data-percent') : 0),
                percentEl = $el.find('.percent');

            $.extend(true, self.options, {
                onStep: function(from, to, currentValue) {
                    percentEl.html(parseInt(currentValue));
                }
            });

            $el.attr('data-percent', 0);

            $el.easyPieChart(self.options);

            setTimeout(function() {

                $el.data('easyPieChart').update(value);
                $el.attr('data-percent', value);

            }, self.options.delay);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginChartCircular: PluginChartCircular
    });

    // jquery plugin
    $.fn.themePluginChartCircular = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginChartCircular($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Countdown
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__countdown';

    var PluginCountdown = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginCountdown.defaults = {
        date: '2030/06/10 12:00:00',
        textDay: 'DAYS',
        textHour: 'HRS',
        textMin: 'MIN',
        textSec: 'SEC',
        uppercase: true,
        numberClass: '',
        wrapperClass: '',
        insertHTMLbefore: '',
        insertHTMLafter: ''
    };

    PluginCountdown.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginCountdown.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.countTo))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper,
                numberClass = ( self.options.numberClass ) ? ' ' + self.options.numberClass : '',
                wrapperClass = ( self.options.wrapperClass ) ? ' ' + self.options.wrapperClass : '';

            if( self.options.uppercase ) {
                $el.countdown(self.options.date).on('update.countdown', function(event) {
                    var $this = $(this).html(event.strftime(self.options.insertHTMLbefore
                        + '<span class="days'+ wrapperClass +'"><span class="'+ numberClass +'">%D</span> '+ self.options.textDay +'</span> '
                        + '<span class="hours'+ wrapperClass +'"><span class="'+ numberClass +'">%H</span> '+ self.options.textHour +'</span> '
                        + '<span class="minutes'+ wrapperClass +'"><span class="'+ numberClass +'">%M</span> '+ self.options.textMin +'</span> '
                        + '<span class="seconds'+ wrapperClass +'"><span class="'+ numberClass +'">%S</span> '+ self.options.textSec +'</span> '
                        + self.options.insertHTMLafter
                    ));
                });
            } else {
                $el.countdown(self.options.date).on('update.countdown', function(event) {
                    var $this = $(this).html(event.strftime(self.options.insertHTMLbefore
                        + '<span class="days'+ wrapperClass +'"><span class="'+ numberClass +'">%D</span> '+ self.options.textDay +'</span> '
                        + '<span class="hours'+ wrapperClass +'"><span class="'+ numberClass +'">%H</span> '+ self.options.textHour +'</span> '
                        + '<span class="minutes'+ wrapperClass +'"><span class="'+ numberClass +'">%M</span> '+ self.options.textMin +'</span> '
                        + '<span class="seconds'+ wrapperClass +'"><span class="'+ numberClass +'">%S</span> '+ self.options.textSec +'</span> '
                        + self.options.insertHTMLafter
                    ));
                });
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginCountdown: PluginCountdown
    });

    // jquery plugin
    $.fn.themePluginCountdown = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginCountdown($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Counter
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__counter';

    var PluginCounter = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginCounter.defaults = {
        accX: 0,
        accY: 0,
        appendWrapper: false,
        prependWrapper: false,
        speed: 3000,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }

    PluginCounter.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginCounter.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.countTo))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper;

            $.extend(self.options, {
                onComplete: function() {

                    if ($el.data('append')) {
                        if( self.options.appendWrapper ) {
                            var appendWrapper = $( self.options.appendWrapper );

                            appendWrapper.append( $el.data('append') );

                            $el.html( $el.html() + appendWrapper[0].outerHTML );
                        } else {
                            $el.html($el.html() + $el.data('append'));
                        }
                    }

                    if ($el.data('prepend')) {
                        if( self.options.prependWrapper ) {
                            var prependWrapper = $( self.options.prependWrapper );

                            prependWrapper.append( $el.data('prepend') );

                            $el.html( $el.html() + prependWrapper[0].outerHTML );
                        } else {
                            $el.html($el.data('prepend') + $el.html());
                        }
                    }
                }
            });

            $el.countTo(self.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginCounter: PluginCounter
    });

    // jquery plugin
    $.fn.themePluginCounter = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginCounter($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// CursorEffect
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__cursorEffect';

    var PluginCursorEffect = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginCursorEffect.defaults = {

    }

    PluginCursorEffect.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginCursorEffect.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            // Global Variables for cursor position
            self.clientX = -100;
            self.clientY = -100;

            // Hide Mouse Cursor
            if( self.options.hideMouseCursor ) {
                self.$el.addClass('hide-mouse-cursor');
            }

            // Creates the cursor wrapper node
            var cursorOuter = document.createElement('DIV');
            cursorOuter.className = 'cursor-outer';

            // Creates the cursor inner node
            var cursorInner = document.createElement('DIV');
            cursorInner.className = 'cursor-inner';

            // Custom Cursor Outer Color
            if( self.options.cursorOuterColor ) {
                cursorOuter.style = 'border-color: ' + self.options.cursorOuterColor + ';';
            }

            // Custom Cursor Inner Color
            if( self.options.cursorInnerColor ) {
                cursorInner.style = 'background-color: ' + self.options.cursorInnerColor + ';';
            }

            // Size
            if( self.options.size ) {
                switch ( self.options.size ) {
                    case 'small':
                        self.$el.addClass( 'cursor-effect-size-small' );
                        break;

                    case 'big':
                        self.$el.addClass( 'cursor-effect-size-big' );
                        break;
                }
            }

            // Style
            if( self.options.style ) {
                self.$el.addClass( self.options.style );
            }

            // Prepend cursor wrapper node to the body
            document.body.prepend( cursorOuter );

            // Prepend cursor inner node to the body
            document.body.prepend( cursorInner );

            // Loop for render
            var render = function() {
                cursorOuter.style.transform = 'translate('+ self.clientX +'px, '+ self.clientY +'px)';
                cursorInner.style.transform = 'translate('+ self.clientX +'px, '+ self.clientY +'px)';

                self.loopInside = requestAnimationFrame(render);
            }
            self.loop = requestAnimationFrame(render);

            return this;
        },

        events: function() {
            var self = this,
                $cursorOuter = $('.cursor-outer'),
                $cursorInner = $('.cursor-inner');

            var initialCursorOuterBox    = $cursorOuter[0].getBoundingClientRect(),
                initialCursorOuterRadius = $cursorOuter.css('border-radius');

            // Update Cursor Position
            document.addEventListener('mousemove', function(e){
                if( !self.isStuck ) {
                    self.clientX = e.clientX - 20;
                    self.clientY = e.clientY - 20;
                }

                $cursorOuter.removeClass('opacity-0');
            });

            self.isStuck = false;
            $('[data-cursor-effect-hover]').on('mouseenter', function(e){

                // Identify Event With Hover Class
                $cursorOuter.addClass('cursor-outer-hover');
                $cursorInner.addClass('cursor-inner-hover');

                // Hover Color
                var hoverColor = $(this).data('cursor-effect-hover-color');
                $cursorOuter.addClass( 'cursor-color-' + hoverColor );
                $cursorInner.addClass( 'cursor-color-' + hoverColor );

                // Effect Types
                switch ( $(this).data('cursor-effect-hover') ) {
                    case 'fit':
                        var thisBox = $(this)[0].getBoundingClientRect();

                        self.clientX = thisBox.x;
                        self.clientY = thisBox.y;

                        $cursorOuter.css({
                            width: thisBox.width,
                            height: thisBox.height,
                            'border-radius': $(this).css('border-radius')
                        }).addClass('cursor-outer-fit');

                        $cursorInner.addClass('opacity-0');

                        self.isStuck = true;
                        break;

                    case 'plus':
                        $cursorInner.addClass('cursor-inner-plus');
                        break;
                }
            });

            $('[data-cursor-effect-hover]').on('mouseleave', function(){

                // Identify Event With Hover Class
                $cursorOuter.removeClass('cursor-outer-hover');
                $cursorInner.removeClass('cursor-inner-hover');

                // Remove Color Class
                var hoverColor = $(this).data('cursor-effect-hover-color');
                $cursorOuter.removeClass( 'cursor-color-' + hoverColor );
                $cursorInner.removeClass( 'cursor-color-' + hoverColor );

                // Effect Types
                switch ( $(this).data('cursor-effect-hover') ) {
                    case 'fit':
                        $cursorOuter.css({
                            width: initialCursorOuterBox.width,
                            height: initialCursorOuterBox.height,
                            'border-radius': initialCursorOuterRadius
                        }).removeClass('cursor-outer-fit');

                        $cursorInner.removeClass('opacity-0');

                        self.isStuck = false;
                        break;

                    case 'plus':
                        $cursorInner.removeClass('cursor-inner-plus');
                        break;
                }
            });

            $(window).on('scroll', function(){
                if( $cursorOuter.hasClass('cursor-outer-fit') ) {
                    $cursorOuter.addClass('opacity-0').removeClass('cursor-outer-fit');
                }
            });

            return this;
        },

        destroy: function() {
            var self = this;

            self.$el.removeClass('hide-mouse-cursor cursor-effect-size-small cursor-effect-size-big cursor-effect-style-square');

            cancelAnimationFrame( self.loop );
            cancelAnimationFrame( self.loopInside );

            document.querySelector('.cursor-outer').remove();
            document.querySelector('.cursor-inner').remove();

            self.$el.removeData( instanceName, self );
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginCursorEffect: PluginCursorEffect
    });

    // jquery plugin
    $.fn.themePluginCursorEffect = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginCursorEffect($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Float Element
(function(theme, $) {

    'use strict';

    theme = theme || {};

    var instanceName = '__floatElement';

    var PluginFloatElement = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginFloatElement.defaults = {
        startPos: 'top',
        speed: 3,
        horizontal: false,
        isInsideSVG: false,
        transition: false,
        transitionDelay: 0,
        transitionDuration: 500
    };

    PluginFloatElement.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginFloatElement.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                $window = $(window),
                minus;

            // If has floating elements inside a SVG.
            // Intersection Observer API do not check elements inside SVG's, so we need initialize trough top parent SVG
            if( $el.data('plugin-float-element-svg') ) {
                $el.find('[data-plugin-float-element]').each(function(){
                    var $this = $(this),
                        opts;

                    var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themePluginFloatElement(opts);
                });

                return this;
            }

            if( self.options.style ) {
                $el.attr('style', self.options.style);
            }

            if( $window.width() > 767 ) {

                // Set Start Position
                if( self.options.startPos == 'none' ) {
                    minus = '';
                } else if( self.options.startPos == 'top' ) {
                    $el.css({
                        top: 0
                    });
                    minus = '';
                } else {
                    $el.css({
                        bottom: 0
                    });
                    minus = '-';
                }

                // Set Transition
                if( self.options.transition ) {
                    $el.css({
                        transition: 'ease-out transform '+ self.options.transitionDuration +'ms ' + self.options.transitionDelay + 'ms'
                    });
                }

                // First Load
                self.movement(minus);

                // Scroll
                $window.on('scroll', function(){
                    self.movement(minus);
                });

            }

            return this;
        },

        movement: function(minus) {
            var self = this,
                $el = this.options.wrapper,
                $window = $(window),
                scrollTop = $window.scrollTop(),
                elementOffset = $el.offset().top,
                currentElementOffset = (elementOffset - scrollTop),
                factor = ( self.options.isInsideSVG ) ? 2 : 100;

            var scrollPercent = factor * currentElementOffset / ($window.height());

            if( $el.visible( true ) ) {

                if( !self.options.horizontal ) {

                    $el.css({
                        transform: 'translate3d(0, '+ minus + scrollPercent / self.options.speed +'%, 0)'
                    });

                } else {

                    $el.css({
                        transform: 'translate3d('+ minus + scrollPercent / self.options.speed +'%, 0, 0)'
                    });

                }

            }

        }
    };

    // expose to scope
    $.extend(theme, {
        PluginFloatElement: PluginFloatElement
    });

    // jquery plugin
    $.fn.themePluginFloatElement = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginFloatElement($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// GDPR
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__gdpr';

    var PluginGDPR = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginGDPR.defaults = {
        cookieBarShowDelay: 3000
    };

    PluginGDPR.prototype = {
        initialize: function($el, opts) {
            var self = this;

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginGDPR.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            // Show
            if( !$.cookie( 'porto-privacy-bar' ) ) {
                setTimeout(function(){
                    self.options.wrapper.addClass('show');
                }, self.options.cookieBarShowDelay);
            }

            // If already has preferences cookie, check inputs according preferences cookie data
            if( $.cookie( 'porto-gdpr-preferences' ) ) {
                var preferencesArr = $.cookie( 'porto-gdpr-preferences' ).split(',');

                for( var i = 0; i < preferencesArr.length; i++ ) {
                    if( $('input[value="'+ preferencesArr[i] +'"]').get(0) ) {
                        if( $('input[value="'+ preferencesArr[i] +'"]').is(':checkbox') ) {
                            $('input[value="'+ preferencesArr[i] +'"]').prop('checked', true);
                        }
                    }
                }
            }

            return this;

        },

        events: function() {
            var self = this;

            // Agree Trigger
            self.options.wrapper.find('.gdpr-agree-trigger').on('click', function(e){
                e.preventDefault();

                $('.gdpr-preferences-form').find('.gdpr-input').each(function(){
                    if( $(this).is(':checkbox') || $(this).is(':hidden') ) {
                        $(this).prop('checked', true);
                    }
                });

                $('.gdpr-preferences-form').trigger('submit').removeClass('show');

                self.removeCookieBar();
            });

            // Preferences Trigger
            self.options.wrapper.find('.gdpr-preferences-trigger').on('click', function(e){
                e.preventDefault();

                $('.gdpr-preferences-popup').addClass('show');
            });

            // Close Popup Button
            $('.gdpr-close-popup').on('click', function(e){
                e.preventDefault();

                $('.gdpr-preferences-popup').removeClass('show');
            });

            // Close Popup When Click Outside of popup area
            $('.gdpr-preferences-popup').on('click', function(e){
                if( !$(e.target).closest('.gdpr-preferences-popup-content').get(0) ) {
                    $('.gdpr-preferences-popup').removeClass('show');
                }
            });

            // Preference Form
            $('.gdpr-preferences-form').on('submit', function(e){
                e.preventDefault();

                var $this = $(this);

                // Save Preferences Button
                $this.find('button[type="submit"]').text( 'SAVING...' );

                // Form Data
                var formData = [];
                $this.find('.gdpr-input').each(function(){
                    if( $(this).is(':checkbox') && $(this).is(':checked') || $(this).is(':hidden') ) {
                        formData.push( $(this).val() );
                    }
                });

                $.cookie( 'porto-privacy-bar', true );

                setTimeout(function(){
                    $this.find('button[type="submit"]').text( 'SAVED!' ).removeClass('btn-primary').addClass('btn-success');

                    setTimeout(function(){
                        $('.gdpr-preferences-popup').removeClass('show');
                        self.removeCookieBar();

                        $this.find('button[type="submit"]').text( 'SAVE PREFERENCES' ).removeClass('btn-success').addClass('btn-primary');

                        if( $.cookie( 'porto-gdpr-preferences' ) ) {

                            $.cookie( 'porto-gdpr-preferences', formData );
                            location.reload();

                        } else {

                            $.cookie( 'porto-gdpr-preferences', formData );

                            if ($.isFunction($.fn['themePluginGDPRWrapper']) && $('[data-plugin-gdpr-wrapper]').length) {

                                $(function() {
                                    $('[data-plugin-gdpr-wrapper]:not(.manual)').each(function() {
                                        var $this = $(this),
                                            opts;

                                        $this.removeData('__gdprwrapper');

                                        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                                        if (pluginOptions)
                                            opts = pluginOptions;

                                        $this.themePluginGDPRWrapper(opts);
                                    });
                                });

                            }

                        }

                    }, 500);
                }, 1000);
            });

            // Remove/Reset Cookies
            $('.gdpr-reset-cookies').on('click', function(e){
                e.preventDefault();

                self.clearCookies();

                location.reload();
            });

            // Open Preferences
            $('.gdpr-open-preferences').on('click', function(e){
                e.preventDefault();

                $('.gdpr-preferences-popup').toggleClass('show');
            });

            return this;
        },

        removeCookieBar: function() {
            var self = this;

            self.options.wrapper.addClass('removing').on('transitionend', function(){
                setTimeout(function(){
                    self.options.wrapper.removeClass('show removing');
                }, 500);
            });

            return this;
        },

        clearCookies: function() {
            var self = this;

            $.removeCookie( 'porto-privacy-bar' );
            $.removeCookie( 'porto-gdpr-preferences' );

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginGDPR: PluginGDPR
    });

    // jquery plugin
    $.fn.themePluginGDPR = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginGDPR($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// GDPR Wrapper
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__gdprwrapper';

    var PluginGDPRWrapper = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginGDPRWrapper.defaults = {

    };

    PluginGDPRWrapper.prototype = {
        initialize: function($el, opts) {
            var self = this;

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginGDPRWrapper.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            if( $.cookie( 'porto-gdpr-preferences' ) && $.cookie( 'porto-gdpr-preferences' ).indexOf( self.options.checkCookie ) != -1 ) {

                $.ajax({
                    url: self.options.ajaxURL,
                    cache: false,
                    complete: function(data) {

                        setTimeout(function() {

                            self.options.wrapper.html(data.responseText).addClass('show');

                        }, 1000);

                    }
                });

            } else {
                self.options.wrapper.addClass('show');
            }

            return this;

        }
    };

    // expose to scope
    $.extend(theme, {
        PluginGDPRWrapper: PluginGDPRWrapper
    });

    // jquery plugin
    $.fn.themePluginGDPRWrapper = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginGDPRWrapper($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Hover Effect
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__hoverEffect';

    var PluginHoverEffect = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginHoverEffect.defaults = {
        effect: 'magnetic',
        magneticMx: 0.15,
        magneticMy: 0.3,
        magneticDeg: 12,
        selector: '.thumb-info, .hover-effect-3d-wrapper',
        sensitivity: 20
    };

    PluginHoverEffect.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginHoverEffect.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            if(self.$el.hasClass('hover-effect-3d')) {
                self.options.effect = '3d';
            }

            // Magnetic
            if(self.options.effect == 'magnetic') {
                self.magnetic();
            }

            // 3d
            if(self.options.effect == '3d') {
                self.hover3d();
            }

            return this;
        },

        magnetic: function() {
            var self = this;

            self.$el.mousemove(function(e) {

                const pos = this.getBoundingClientRect();
                const mx = e.clientX - pos.left - pos.width/2;
                const my = e.clientY - pos.top - pos.height/2;

                this.style.transform = 'translate('+ mx * self.options.magneticMx +'px, '+ my * self.options.magneticMx +'px)';

            });

            self.$el.mouseleave(function(e) {

                this.style.transform = 'translate3d(0px, 0px, 0px)';

            });

            return this;

        },

        hover3d: function() {
            var self = this;

            if ($.isFunction($.fn['hover3d'])) {

                self.$el.hover3d({
                    selector: self.options.selector,
                    sensitivity: self.options.sensitivity
                });

            }

            return this;

        }
    };

    // expose to scope
    $.extend(theme, {
        PluginHoverEffect: PluginHoverEffect
    });

    // jquery plugin
    $.fn.themePluginHoverEffect = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginHoverEffect($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);

// Icon
(function(theme, $) {

    'use strict';

    theme = theme || {};

    var instanceName = '__icon';

    var PluginIcon = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginIcon.defaults = {
        color: '#2388ED',
        animated: false,
        delay: 300,
        onlySVG: false,
        removeClassAfterInit: false,
        fadeIn: true,
        accY: 0
    };

    PluginIcon.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginIcon.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self  	 = this,
                $el   	 = this.options.wrapper,
                color 	 = self.options.color,
                elTopDistance = $el.offset().top,
                windowTopDistance = $(window).scrollTop(),
                duration = ( self.options.animated && !self.options.strokeBased ) ? 200 : 100;

            // Check origin
            if( window.location.protocol === 'file:' ) {
                $el.css({
                    opacity: 1,
                    width: $el.attr('width')
                });

                if( self.options.extraClass ) {
                    $el.addClass( self.options.extraClass );
                }

                if( self.options.extraClass.indexOf('-color-light') > 0 ) {
                    $el.css({
                        filter: 'invert(1)'
                    });
                }

                $(window).trigger('icon.rendered');
                return;
            }

            // Duration
            if( self.options.duration ) {
                duration = self.options.duration;
            }

            // SVG Content
            var SVGContent = $.get({
                url: $el.attr('src'),
                success: function(data, status, xhr){
                    var iconWrapper = self.options.fadeIn ? $('<div class="animated-icon animated fadeIn">'+ xhr.responseText +'</div>') : $('<div class="animated-icon animated">'+ xhr.responseText +'</div>'),
                        uniqid = 'icon_' + Math.floor(Math.random() * 26) + Date.now();

                    // Add ID
                    iconWrapper.find('svg').attr('id', uniqid);

                    // Identify with filename
                    iconWrapper.find('svg').attr('data-filename', $el.attr('src').split(/(\\|\/)/g).pop());

                    if( $el.attr('width') ) {
                        iconWrapper.find('svg')
                            .attr('width', $el.attr('width'))
                            .attr('height', $el.attr('width'));
                    }

                    if( $el.attr('height') ) {
                        iconWrapper.find('svg')
                            .attr('height', $el.attr('height'));
                    }

                    if( self.options.svgViewBox ) {
                        iconWrapper.find('svg')
                            .attr('viewBox', self.options.svgViewBox);
                    }

                    $el.replaceWith(iconWrapper);

                    if( self.options.extraClass ) {
                        iconWrapper.addClass( self.options.extraClass );
                    }

                    if( self.options.removeClassAfterInit ) {
                        iconWrapper.removeClass(self.options.removeClassAfterInit);
                    }

                    if( self.options.onlySVG ) {
                        $(window).trigger('icon.rendered');
                        return this;
                    }

                    $el = iconWrapper;

                    var icon = new Vivus(uniqid, {start: 'manual', type: 'sync', selfDestroy: true, duration: duration, onReady: function(obj){
                            var styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style"),
                                animateStyle = '';

                            // SVG Fill Based
                            if( self.options.animated && !self.options.strokeBased || !self.options.animated && color && !self.options.strokeBased ) {
                                animateStyle = 'stroke-width: 0.1px; fill-opacity: 0; transition: ease fill-opacity 300ms;';

                                // Set Style on SVG inside object
                                styleElement.textContent = '#' + uniqid + ' path, #' + uniqid + ' line, #' + uniqid + ' rect, #' + uniqid + ' circle, #' + uniqid + ' polyline { fill: '+ color +'; stroke: '+ color +'; '+ animateStyle + (self.options.svgStyle ? self.options.svgStyle : "") + ' } .finished path { fill-opacity: 1; }';
                                obj.el.appendChild(styleElement);
                            }

                            // SVG Stroke Based
                            if( self.options.animated && self.options.strokeBased || !self.options.animated && color && self.options.strokeBased ) {

                                // Set Style on SVG inside object
                                styleElement.textContent = '#' + uniqid + ' path, #' + uniqid + ' line, #' + uniqid + ' rect, #' + uniqid + ' circle, #' + uniqid + ' polyline { stroke: '+ color +'; ' + (self.options.svgStyle ? self.options.svgStyle : "") + '}';
                                obj.el.appendChild(styleElement);
                            }

                            $.event.trigger('theme.plugin.icon.svg.ready');
                        }});

                    // Isn't animated
                    if( !self.options.animated ) {
                        setTimeout(function(){
                            icon.finish();
                        }, 10);
                        $el.css({ opacity: 1 });
                    }

                    // Animated
                    if( self.options.animated && $(window).width() > 767 ) {

                        // First Load
                        if( $el.visible( true ) ) {
                            self.startIconAnimation( icon, $el );
                        } else if( elTopDistance < windowTopDistance ) {
                            self.startIconAnimation( icon, $el );
                        }

                        // On Scroll
                        $(window).on('scroll', function(){
                            if( $el.visible( true ) ) {
                                self.startIconAnimation( icon, $el );
                            }
                        });

                    } else {

                        $el.css({ opacity: 1 });
                        icon.finish();

                        $(window).on('theme.plugin.icon.svg.ready', function(){
                            setTimeout(function(){
                                icon.el.setAttribute('class', 'finished');
                                icon.finish();
                            }, 300);
                        });

                    }

                    $(window).trigger('icon.rendered');
                }
            });

            return this;
        },

        startIconAnimation: function(icon, $el) {
            var self = this;

            // Animate for better performance
            $({to:0}).animate({to:1}, ((self.options.strokeBased) ? self.options.delay : self.options.delay + 300 ), function() {
                $el.css({ opacity: 1 });
            });

            $({to:0}).animate({to:1}, self.options.delay, function() {
                icon.play(1);

                setTimeout(function(){
                    icon.el.setAttribute('class', 'finished');
                }, icon.duration * 5 );
            });
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginIcon: PluginIcon
    });

    // jquery plugin
    $.fn.themePluginIcon = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginIcon($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);

// In Viewport Style
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__inviewportstyle';

    var PluginInViewportStyle = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginInViewportStyle.defaults = {
        viewport: window,
        threshold: [0],
        modTop: '-200px',
        modBottom: '-200px',
        style: {'transition': 'all 1s ease-in-out'},
        styleIn: '',
        styleOut: '',
        classIn: '',
        classOut: ''
    };

    PluginInViewportStyle.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginInViewportStyle.defaults, opts, {});

            return this;
        },

        build: function() {
            var self = this,
                el = self.$el.get(0);

            self.$el.css(self.options.style);

            if (typeof window.IntersectionObserver === 'function') {
                const un = observeElementInViewport.observeElementInViewport(
                    el, function() {
                        self.$el.css(self.options.styleIn);
                        self.$el
                            .addClass(self.options.classIn)
                            .removeClass(self.options.classOut);
                    }, function() {
                        self.$el.css(self.options.styleOut);
                        self.$el
                            .addClass(self.options.classOut)
                            .removeClass(self.options.classIn);
                    }, {
                        viewport: self.options.viewport,
                        threshold: self.options.threshold,
                        modTop: self.options.modTop,
                        modBottom: self.options.modBottom
                    }
                )
            };

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginInViewportStyle: PluginInViewportStyle
    });

    // jquery plugin
    $.fn.themePluginInViewportStyle = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginInViewportStyle($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Lightbox
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__lightbox';

    var PluginLightbox = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginLightbox.defaults = {
        tClose: 'Close (Esc)', // Alt text on close button
        tLoading: 'Loading...', // Text that is displayed during loading. Can contain %curr% and %total% keys
        gallery: {
            tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
            tNext: 'Next (Right arrow key)', // Alt text on right arrow
            tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
        },
        image: {
            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
        },
        ajax: {
            tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
        },
        callbacks: {
            open: function() {
                $('html').addClass('lightbox-opened');
            },
            close: function() {
                $('html').removeClass('lightbox-opened');
            }
        }
    };

    PluginLightbox.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.magnificPopup))) {
                return this;
            }

            this.options.wrapper.magnificPopup(this.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginLightbox: PluginLightbox
    });

    // jquery plugin
    $.fn.themePluginLightbox = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginLightbox($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Loading Overlay
(function(theme, $) {

    'use strict';

    theme = theme || {};

    // Default
    var loadingOverlayDefaultTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
        '</div>'
    ].join('');

    // Percentage
    var loadingOverlayPercentageTemplate = [
        '<div class="loading-overlay loading-overlay-percentage">',
        '<div class="page-loader-progress-wrapper"><span class="page-loader-progress">0</span><span class="page-loader-progress-symbol">%</span></div>',
        '</div>'
    ].join('');

    // Cubes
    var loadingOverlayCubesTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><div class="cssload-thecube"><div class="cssload-cube cssload-c1"></div><div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div><div class="cssload-cube cssload-c3"></div></div></div>',
        '</div>'
    ].join('');

    // Cube Progress
    var loadingOverlayCubeProgressTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><span class="cssload-cube-progress"><span class="cssload-cube-progress-inner"></span></span></div>',
        '</div>'
    ].join('');

    // Float Rings
    var loadingOverlayFloatRingsTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><div class="cssload-float-rings-loader"><div class="cssload-float-rings-inner cssload-one"></div><div class="cssload-float-rings-inner cssload-two"></div><div class="cssload-float-rings-inner cssload-three"></div></div></div>',
        '</div>'
    ].join('');

    // Floating Bars
    var loadingOverlayFloatBarsTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><div class="cssload-float-bars-container"><ul class="cssload-float-bars-flex-container"><li><span class="cssload-float-bars-loading"></span></li></div></div></div>',
        '</div>'
    ].join('');

    // Speeding Wheel
    var loadingOverlaySpeedingWheelTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><div class="cssload-speeding-wheel-container"><div class="cssload-speeding-wheel"></div></div></div>',
        '</div>'
    ].join('');

    // Zenith
    var loadingOverlayZenithTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><div class="cssload-zenith-container"><div class="cssload-zenith"></div></div></div>',
        '</div>'
    ].join('');

    // Spinning Square
    var loadingOverlaySpinningSquareTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><div class="cssload-spinning-square-loading"></div></div>',
        '</div>'
    ].join('');

    // Pulse
    var loadingOverlayPulseTemplate = [
        '<div class="loading-overlay">',
        '<div class="bounce-loader"><div class="wrapper-pulse"><div class="cssload-pulse-loader"></div></div></div>',
        '</div>'
    ].join('');

    var LoadingOverlay = function( $wrapper, options, noInheritOptions ) {
        return this.initialize( $wrapper, options, noInheritOptions );
    };

    LoadingOverlay.prototype = {

        options: {
            css: {},
            hideDelay: 500,
            progressMinTimeout: 0,
            effect: 'default'
        },

        initialize: function( $wrapper, options, noInheritOptions ) {
            this.$wrapper = $wrapper;

            this
                .setVars()
                .setOptions( options, noInheritOptions )
                .build()
                .events()
                .dynamicShowHideEvents();

            this.$wrapper.data( 'loadingOverlay', this );
        },

        setVars: function() {
            this.$overlay = this.$wrapper.find('.loading-overlay');
            this.pageStatus = null;
            this.progress = null;
            this.animationInterval = 33;

            return this;
        },

        setOptions: function( options, noInheritOptions ) {
            if ( !this.$overlay.get(0) ) {
                this.matchProperties();
            }

            if( noInheritOptions ) {
                this.options     = $.extend( true, {}, this.options, options );
            } else {
                this.options     = $.extend( true, {}, this.options, options, theme.fn.getOptions(this.$wrapper.data('plugin-options')) );
            }

            this.loaderClass = this.getLoaderClass( this.options.css.backgroundColor );

            return this;
        },

        build: function() {
            var _self = this;

            if ( !this.$overlay.closest(document.documentElement).get(0) ) {
                if ( !this.$cachedOverlay ) {

                    switch ( _self.options.effect ) {
                        case 'percentageProgress1':
                            this.$overlay = $( loadingOverlayPercentageTemplate ).clone();
                            break;

                        case 'percentageProgress2':
                            this.$overlay = $( loadingOverlayPercentageTemplate ).clone();
                            this.$overlay
                                .addClass('loading-overlay-percentage-effect-2')
                                .prepend('<div class="loading-overlay-background-layer"></div>');
                            break;

                        case 'cubes':
                            this.$overlay = $( loadingOverlayCubesTemplate ).clone();
                            break;

                        case 'cubeProgress':
                            this.$overlay = $( loadingOverlayCubeProgressTemplate ).clone();
                            break;

                        case 'floatRings':
                            this.$overlay = $( loadingOverlayFloatRingsTemplate ).clone();
                            break;

                        case 'floatBars':
                            this.$overlay = $( loadingOverlayFloatBarsTemplate ).clone();
                            break;

                        case 'speedingWheel':
                            this.$overlay = $( loadingOverlaySpeedingWheelTemplate ).clone();
                            break;

                        case 'zenith':
                            this.$overlay = $( loadingOverlayZenithTemplate ).clone();
                            break;

                        case 'spinningSquare':
                            this.$overlay = $( loadingOverlaySpinningSquareTemplate ).clone();
                            break;

                        case 'pulse':
                            this.$overlay = $( loadingOverlayPulseTemplate ).clone();
                            break;

                        case 'default':
                        default:
                            this.$overlay = $( loadingOverlayDefaultTemplate ).clone();
                            break;
                    }

                    if ( this.options.css ) {
                        this.$overlay.css( this.options.css );
                        this.$overlay.find( '.loader' ).addClass( this.loaderClass );
                    }
                } else {
                    this.$overlay = this.$cachedOverlay.clone();
                }

                this.$wrapper.prepend( this.$overlay );
            }

            if ( !this.$cachedOverlay ) {
                this.$cachedOverlay = this.$overlay.clone();
            }

            if( ['percentageProgress1', 'percentageProgress2'].includes(_self.options.effect) ) {
                _self.updateProgress();

                if( _self.options.isDynamicHideShow ) {
                    setTimeout(function(){
                        _self.progress = 'complete';

                        $('.page-loader-progress').text(100);

                        if( ['percentageProgress2'].includes(_self.options.effect) ) {
                            $('.loading-overlay-background-layer').css({
                                width: '100%'
                            });
                        }
                    }, 2800);
                }
            }

            return this;
        },

        events: function() {
            var _self = this;

            if ( this.options.startShowing ) {
                _self.show();
            }

            if ( this.$wrapper.is('body') || this.options.hideOnWindowLoad ) {
                $( window ).on( 'load error', function() {
                    setTimeout(function(){
                        _self.hide();
                    }, _self.options.progressMinTimeout);
                });
            }

            if ( this.options.listenOn ) {
                $( this.options.listenOn )
                    .on( 'loading-overlay:show beforeSend.ic', function( e ) {
                        e.stopPropagation();
                        _self.show();
                    })
                    .on( 'loading-overlay:hide complete.ic', function( e ) {
                        e.stopPropagation();
                        _self.hide();
                    });
            }

            this.$wrapper
                .on( 'loading-overlay:show beforeSend.ic', function( e ) {
                    if ( e.target === _self.$wrapper.get(0) ) {
                        e.stopPropagation();
                        _self.show();
                        return true;
                    }
                    return false;
                })
                .on( 'loading-overlay:hide complete.ic', function( e ) {
                    if ( e.target === _self.$wrapper.get(0) ) {
                        e.stopPropagation();
                        _self.hide();
                        return true;
                    }
                    return false;
                });

            if( ['percentageProgress1', 'percentageProgress2'].includes(_self.options.effect) ) {
                $(window).on('load', function(){
                    setTimeout(function(){
                        _self.pageStatus = "complete";

                        $('.page-loader-progress').text(100);

                        if( ['percentageProgress2'].includes(_self.options.effect) ) {
                            $('.loading-overlay-background-layer').css({
                                width: '100%'
                            });
                        }
                    }, _self.options.progressMinTimeout);
                });
            }

            return this;
        },

        show: function() {
            this.build();

            this.position = this.$wrapper.css( 'position' ).toLowerCase();
            if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
                this.$wrapper.css({
                    position: 'relative'
                });
            }
            this.$wrapper.addClass( 'loading-overlay-showing' );
        },

        hide: function() {
            var _self = this;

            setTimeout(function() {
                _self.$wrapper.removeClass( 'loading-overlay-showing' );

                if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
                    _self.$wrapper.css({ position: '' });
                }

                $(window).trigger('loading.overlay.ready');
            }, _self.options.hideDelay);
        },

        updateProgress: function() {
            var _self = this;

            var render = function() {
                if(_self.pageStatus == "complete"){
                    $('.page-loader-progress').text(100);
                    setTimeout(function(){
                        $('.page-loader-progress').addClass('d-none');
                    }, 700);
                }
                else{
                    if(_self.progress == null){
                        _self.progress = 1;
                    }

                    _self.progress = _self.progress + 1;
                    if(_self.progress >= 0 && _self.progress <= 30){
                        _self.animationInterval += 1;
                        $('.page-loader-progress').text(_self.progress);
                    }
                    else if(_self.progress > 30 && _self.progress <= 60){
                        _self.animationInterval += 2;
                        $('.page-loader-progress').text(_self.progress);
                    }
                    else if(_self.progress > 60 && _self.progress <= 80){
                        _self.animationInterval += 40;
                        $('.page-loader-progress').text(_self.progress);
                    }
                    else if(_self.progress > 80 && _self.progress <= 90){
                        _self.animationInterval += 80;
                        $('.page-loader-progress').text(_self.progress);
                    }
                    else if(_self.progress > 90 && _self.progress <= 95){
                        _self.animationInterval += 150;
                        $('.page-loader-progress').text(_self.progress);
                    }
                    else if(_self.progress > 95 && _self.progress <= 99){
                        _self.animationInterval += 400;
                        $('.page-loader-progress').text(_self.progress);
                    }
                    else if(_self.progress >= 100){
                        $('.page-loader-progress').text(99);
                    }

                    if( ['percentageProgress2'].includes(_self.options.effect) ) {
                        $('.loading-overlay-background-layer').css({
                            width: _self.progress + '%'
                        });
                    }

                    self.loopInside = setTimeout(render, _self.animationInterval);
                }

            }
            render();

            return this;
        },

        matchProperties: function() {
            var i,
                l,
                properties;

            properties = [
                'backgroundColor',
                'borderRadius'
            ];

            l = properties.length;

            for( i = 0; i < l; i++ ) {
                var obj = {};
                obj[ properties[ i ] ] = this.$wrapper.css( properties[ i ] );

                $.extend( this.options.css, obj );
            }
        },

        getLoaderClass: function( backgroundColor ) {
            if ( !backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit' ) {
                return 'black';
            }

            var hexColor,
                r,
                g,
                b,
                yiq;

            var colorToHex = function( color ){
                var hex,
                    rgb;

                if( color.indexOf('#') >- 1 ){
                    hex = color.replace('#', '');
                } else {
                    rgb = color.match(/\d+/g);
                    hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
                }

                if ( hex.length === 3 ) {
                    hex = hex + hex;
                }

                return hex;
            };

            hexColor = colorToHex( backgroundColor );

            r = parseInt( hexColor.substr( 0, 2), 16 );
            g = parseInt( hexColor.substr( 2, 2), 16 );
            b = parseInt( hexColor.substr( 4, 2), 16 );
            yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

            return ( yiq >= 128 ) ? 'black' : 'white';
        },

        dynamicShowHide: function( effect ) {
            var _self = this;

            // Remove Loading Overlay Data
            $('body').removeData('loadingOverlay');

            // Remove Html Of Loading Overlay
            $('.loading-overlay').remove();

            if( effect == '' ) {
                return this;
            }

            // Initialize New Loading Overlay (second parameter is to NO inherit data-plugin-options)
            $('body').loadingOverlay({
                effect: effect ? effect : 'pulse',
                isDynamicHideShow: true
            }, true);

            // Show Loading Overlay Loader
            $('body').data('loadingOverlay').show();

            // Hide Loading Overlay Loader
            setTimeout(function(){
                $('body').data('loadingOverlay').hide();
            }, 3000);

            return this;
        },

        dynamicShowHideEvents: function() {
            var _self = this;

            // Button
            $(document).off('click.loading-overlay-button').on('click.loading-overlay-button', '.loading-overlay-button', function(e){
                e.preventDefault();

                _self.dynamicShowHide( $(this).data('effect') );
            });

            // Select
            $(document).off('change.loading-overlay-select').on('change.loading-overlay-select', '.loading-overlay-select', function(){
                _self.dynamicShowHide( $(this).val() );
            });

            return this;
        }

    };

    // expose to scope
    $.extend(theme, {
        LoadingOverlay: LoadingOverlay
    });

    // expose as a jquery plugin
    $.fn.loadingOverlay = function( opts, noInheritOptions ) {
        return this.each(function() {
            var $this = $( this );

            var loadingOverlay = $this.data( 'loadingOverlay' );
            if ( loadingOverlay ) {
                return loadingOverlay;
            } else {
                var options = opts || $this.data( 'loading-overlay-options' ) || {};
                return new LoadingOverlay( $this, options, noInheritOptions );
            }
        });
    }

    // auto init
    $('[data-loading-overlay]').loadingOverlay();

}).apply(this, [window.theme, jQuery]);

// Masonry
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__masonry';

    var PluginMasonry = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginMasonry.defaults = {

    };

    PluginMasonry.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginMasonry.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.isotope))) {
                return this;
            }

            var self = this,
                $window = $(window);

            self.$loader = false;

            if (self.options.wrapper.parents('.masonry-loader').get(0)) {
                self.$loader = self.options.wrapper.parents('.masonry-loader');
                self.createLoader();
            }

            self.options.wrapper.one('layoutComplete', function(event, laidOutItems) {
                self.removeLoader();
            });

            self.options.wrapper.waitForImages(function() {
                self.options.wrapper.isotope(self.options);
            });

            $(window).on('resize', function() {
                setTimeout(function() {
                    self.options.wrapper.isotope('layout');
                }, 300);
            });

            setTimeout(function() {
                self.removeLoader();
            }, 3000);

            return this;
        },

        createLoader: function() {
            var self = this;

            var loaderTemplate = [
                '<div class="bounce-loader">',
                '<div class="bounce1"></div>',
                '<div class="bounce2"></div>',
                '<div class="bounce3"></div>',
                '</div>'
            ].join('');

            self.$loader.append(loaderTemplate);

            return this;
        },

        removeLoader: function() {

            var self = this;

            if (self.$loader) {

                self.$loader.removeClass('masonry-loader-showing');

                setTimeout(function() {
                    self.$loader.addClass('masonry-loader-loaded');
                }, 300);

            }

        }
    };

    // expose to scope
    $.extend(theme, {
        PluginMasonry: PluginMasonry
    });

    // jquery plugin
    $.fn.themePluginMasonry = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginMasonry($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Match Height
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__matchHeight';

    var PluginMatchHeight = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginMatchHeight.defaults = {
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    };

    PluginMatchHeight.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginMatchHeight.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.matchHeight))) {
                return this;
            }

            var self = this;

            self.options.wrapper.matchHeight(self.options);

            return this;
        }

    };

    // expose to scope
    $.extend(theme, {
        PluginMatchHeight: PluginMatchHeight
    });

    // jquery plugin
    $.fn.themePluginMatchHeight = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginMatchHeight($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Parallax
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__parallax';

    var PluginParallax = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginParallax.defaults = {
        speed: 1.5,
        horizontalPosition: '50%',
        offset: 0,
        parallaxDirection: 'top',
        parallaxHeight: '180%',
        parallaxScale: false,
        parallaxScaleInvert: false,
        scrollableParallax: false,
        scrollableParallaxMinWidth: 991,
        startOffset: 7,
        transitionDuration: '200ms',
        cssProperty: 'width',
        cssValueStart: 40,
        cssValueEnd: 100,
        cssValueUnit: 'vw',
        mouseParallax: false
    };

    PluginParallax.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginParallax.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $window = $(window),
                offset,
                yPos,
                bgpos,
                background,
                rotateY;

            // Mouse Parallax
            if( self.options.mouseParallax ) {

                $window.mousemove(function(e) {

                    $('.parallax-mouse-object', self.options.wrapper).each(function() {

                        var moving_value = $( this ).attr('data-value');
                        var x = (e.clientX * moving_value) / 250;
                        var y = (e.clientY * moving_value) / 250;

                        $( this ).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
                    });

                });

                return this;

            }

            // Scrollable
            if( self.options.scrollableParallax && $(window).width() > self.options.scrollableParallaxMinWidth ) {
                var $scrollableWrapper = self.options.wrapper.find('.scrollable-parallax-wrapper');

                if( $scrollableWrapper.get(0) ) {

                    var progress 	 = ( $(window).scrollTop() > ( self.options.wrapper.offset().top + $(window).outerHeight() ) ) ? self.options.cssValueEnd : self.options.cssValueStart,
                        cssValueUnit = self.options.cssValueUnit ? self.options.cssValueUnit : '';

                    $scrollableWrapper.css({
                        'background-image' : 'url(' + self.options.wrapper.data('image-src') + ')',
                        'background-size' : 'cover',
                        'background-position' : 'center',
                        'background-attachment' : 'fixed',
                        'transition' : 'ease '+ self.options.cssProperty +' '+ self.options.transitionDuration,
                        'width' : progress + '%'
                    });

                    $(window).on('scroll', function(e){
                        if( self.options.wrapper.visible( true ) ) {
                            var $window = $(window),
                                scrollTop = $window.scrollTop(),
                                elementOffset = self.options.wrapper.offset().top,
                                currentElementOffset = (elementOffset - scrollTop);

                            var scrollPercent = Math.abs( +( currentElementOffset - $window.height() ) / (self.options.startOffset ? self.options.startOffset : 7) );

                            // Increment progress value according scroll position
                            if( scrollPercent <= self.options.cssValueEnd && progress <= self.options.cssValueEnd ) {
                                progress = self.options.cssValueStart + scrollPercent;
                            }

                            // Adjust CSS end value
                            if( progress > self.options.cssValueEnd ) {
                                progress = self.options.cssValueEnd;
                            }

                            // Adjust CSS start value
                            if( progress < self.options.cssValueStart ) {
                                progress = self.options.cssValueStart;
                            }

                            var styles = {}
                            styles[self.options.cssProperty] = progress + cssValueUnit;

                            $scrollableWrapper.css(styles);
                        }
                    });

                }

                return;
            }

            // Create Parallax Element
            if( self.options.fadeIn ) {
                background = $('<div class="parallax-background fadeIn animated"></div>');
            } else {
                background = $('<div class="parallax-background"></div>');
            }

            // Set Style for Parallax Element
            background.css({
                'background-image' : 'url(' + self.options.wrapper.data('image-src') + ')',
                'background-size' : 'cover',
                'position' : 'absolute',
                'top' : 0,
                'left' : 0,
                'width' : '100%',
                'height' : self.options.parallaxHeight
            });

            if( self.options.parallaxScale ) {
                background.css({
                    'transition' : 'transform 500ms ease-out'
                });
            }

            // Add Parallax Element on DOM
            self.options.wrapper.prepend(background);

            // Set Overlfow Hidden and Position Relative to Parallax Wrapper
            self.options.wrapper.css({
                'position' : 'relative',
                'overflow' : 'hidden'
            });

            // Parallax Effect on Scroll & Resize
            var parallaxEffectOnScrolResize = function() {
                $window.on('scroll resize', function() {
                    offset  = self.options.wrapper.offset();
                    yPos    = -($window.scrollTop() - (offset.top - 100)) / ((self.options.speed + 2 ));
                    plxPos  = (yPos < 0) ? Math.abs(yPos) : -Math.abs(yPos);
                    rotateY = ( $('html[dir="rtl"]').get(0) ) ? ' rotateY(180deg)' : ''; // RTL

                    if( !self.options.parallaxScale ) {

                        if( self.options.parallaxDirection == 'bottom' ) {
                            self.options.offset = 250;
                        }

                        var y = ( (plxPos - 50) + (self.options.offset) );
                        if( self.options.parallaxDirection == 'bottom' ) {
                            y = ( y < 0 ) ? Math.abs( y ) : -Math.abs( y );
                        }

                        background.css({
                            'transform' : 'translate3d(0, '+ y +'px, 0)' + rotateY,
                            'background-position-x' : self.options.horizontalPosition
                        });

                    } else {

                        var	scrollTop = $window.scrollTop(),
                            elementOffset = self.options.wrapper.offset().top,
                            currentElementOffset = (elementOffset - scrollTop),
                            scrollPercent = Math.abs( +( currentElementOffset - $window.height() ) / (self.options.startOffset ? self.options.startOffset : 7) );

                        scrollPercent = parseInt((scrollPercent >= 100) ? 100 : scrollPercent);

                        var currentScale = (scrollPercent / 100) * 50;

                        if ( !self.options.parallaxScaleInvert ) {
                            background.css({
                                'transform' : 'scale(1.' + String(currentScale).padStart(2, '0') + ', 1.' + String(currentScale).padStart(2, '0') + ')'
                            });
                        } else {
                            background.css({
                                'transform' : 'scale(1.' + String(50 - currentScale).padStart(2, '0') + ', 1.' + String(50 - currentScale).padStart(2, '0') + ')'
                            });
                        }

                    }
                });

                $window.trigger('scroll');
            }

            if (!$.browser.mobile) {
                parallaxEffectOnScrolResize();
            } else {
                if( self.options.enableOnMobile == true ) {
                    parallaxEffectOnScrolResize();
                } else {
                    self.options.wrapper.addClass('parallax-disabled');
                }
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginParallax: PluginParallax
    });

    // jquery plugin
    $.fn.themePluginParallax = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginParallax($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Progress Bar
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__progressBar';

    var PluginProgressBar = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginProgressBar.defaults = {
        accX: 0,
        accY: -50,
        delay: 1
    };

    PluginProgressBar.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginProgressBar.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                delay = 1;

            delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);

            $el.addClass($el.attr('data-appear-animation'));

            setTimeout(function() {

                $el.animate({
                    width: $el.attr('data-appear-progress-animation')
                }, 1500, 'easeOutQuad', function() {
                    $el.find('.progress-bar-tooltip').animate({
                        opacity: 1
                    }, 500, 'easeOutQuad');
                });

            }, delay);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginProgressBar: PluginProgressBar
    });

    // jquery plugin
    $.fn.themePluginProgressBar = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginProgressBar($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Random Images
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__randomimages';

    var PluginRandomImages = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginRandomImages.defaults = {
        minWindowWidth: 0,
        random: true,
        imagesListURL: null,
        lightboxImagesListURL: null,
        delay: null,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        stopAtImageIndex: false, // The value shoudl be the index value of array with images as string. Eg: '2'
        stopAfterFewSeconds: false, // The value should be in mili-seconds. Eg: 10000 = 10 seconds
        stopAfterXTimes: false,
        accY: 0
    };

    PluginRandomImages.prototype = {
        initialize: function($el, opts) {
            this.$el = $el;
            this.st = '';
            this.times = 0;
            this.perImageIndex = 0;

            if( $el.is('img') && typeof opts.imagesListURL == 'undefined' ) {
                return false;
            }

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginRandomImages.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            // Control the screens size we want to have the plugin working
            if( $(window).width() < self.options.minWindowWidth  ) {
                return false;
            }

            // Check if is single image or wrapper with images inside
            if( self.$el.is('img') ) {

                // Check it's inside a lightbox
                self.isInsideLightbox = self.$el.closest('.lightbox').length ? true : false;

                // Push the initial image to lightbox list/array
                if( self.isInsideLightbox && self.options.lightboxImagesListURL ) {
                    self.options.lightboxImagesListURL.push( self.$el.closest('.lightbox').attr('href') );
                }

                // Push the current image src to the array
                self.options.imagesListURL.push( self.$el.attr('src') );

                // Start with lastIndex as the first image loaded on the page
                self.lastIndex = self.options.imagesListURL.length - 1;

                // Identify the last random image element (if has more than one on the page)
                if( self.options.random == false ) {
                    $('.plugin-random-images').each(function(i){
                        if( i == $('.plugin-random-images').length - 1 ) {
                            $(this).addClass('the-last');
                        }
                    });
                }

                // Start the recursive timeout
                setTimeout(function(){
                    self.recursiveTimeout(
                        self.perImageTag,
                        self.options.delay == null ? 3000 : self.options.delay
                    );
                }, self.options.delay == null ? 300 : self.options.delay / 3);

            } else {

                // Start the recursive timeout
                setTimeout( self.recursiveTimeout(
                    self.perWrapper,
                    self.options.delay ? self.options.delay : getPerWrapperHighDelay(),
                    false
                ), 300);

            }

            // Stop After Few Seconds
            if( self.options.stopAfterFewSeconds ) {
                setTimeout(function(){
                    clearTimeout(self.st);
                }, self.options.stopAfterFewSeconds);
            }

            return this;

        },

        perImageTag: function() {
            var self = this;

            // Generate a random index to make the images rotate randomly
            var index = self.options.random ? Math.floor(Math.random() * self.options.imagesListURL.length) : self.lastIndex;

            // Avoid repeat the same image
            if( self.lastIndex !== '' && self.lastIndex == index ) {
                if( self.options.random ) {
                    while( index == self.lastIndex ) {
                        index = Math.floor(Math.random() * self.options.imagesListURL.length);
                    }
                } else {
                    index = index - 1;
                    if( index == -1 ) {
                        index = self.options.imagesListURL.length - 1;
                    }
                }
            }

            // Turn the image ready for animations
            self.$el.addClass('animated');

            // Remove the entrance animation class and add the out animation class
            self.$el.removeClass( self.options.animateIn ).addClass( self.options.animateOut );

            // Change the image src and add the class for entrance animation
            setTimeout( function(){
                self.$el.attr('src', self.options.imagesListURL[index]).removeClass( self.options.animateOut ).addClass(self.options.animateIn);

                if( self.isInsideLightbox && self.options.lightboxImagesListURL ) {
                    self.$el.closest('.lightbox').attr('href', self.options.lightboxImagesListURL[index]);
                }
            }, 1000);

            // Save the last index for future checks
            self.lastIndex = index;

            // Increment the times var
            self.times++;

            // Save the index for stopAtImageIndex option
            self.perImageIndex = index;

            return this;
        },

        // Iterate the imaes loop and get the higher value
        getPerWrapperHighDelay: function() {
            var self = this,
                $wrapper = self.$el,
                delay = 0;

            $wrapper.find('img').each(function(){
                var $image = $(this);

                if( $image.data('rimage-delay') && parseInt( $image.data('rimage-delay') ) > delay ) {
                    delay = parseInt( $image.data('rimage-delay') );
                }
            });

            return delay;
        },

        perWrapper: function() {
            var self = this,
                $wrapper = self.$el;

            // Turns the imageLlistURL into an array
            self.options.imagesListURL = [];

            // Find all images inside the element wrapper and push their sources to image list array
            $wrapper.find('img').each(function(){
                var $image = $(this);
                self.options.imagesListURL.push( $image.attr('src') );
            });

            // Shuffle the images list array (random effect)
            self.options.imagesListURL = self.shuffle( self.options.imagesListURL );

            // Iterate over each image and make some checks like delay for each image, animations, etc...
            $wrapper.find('img').each(function(index){
                var $image = $(this),
                    animateIn  = $image.data('rimage-animate-in') ? $image.data('rimage-animate-in') : self.options.animateIn,
                    animateOut = $image.data('rimage-animate-out') ? $image.data('rimage-animate-out') : self.options.animateOut,
                    delay      = $image.data('rimage-delay') ? $image.data('rimage-delay') : 2000;

                $image.addClass('animated');

                setTimeout( function(){
                    $image.removeClass( animateIn ).addClass( animateOut );
                }, delay / 2);

                setTimeout( function(){
                    $image.attr('src', self.options.imagesListURL[index]).removeClass( animateOut ).addClass(animateIn);
                }, delay);

            });

            // Increment the times variable
            self.times++;

            return this;
        },

        recursiveTimeout: function(callback, delay) {
            var self = this;

            var timeout = function() {

                if( callback !== null ) {
                    callback.call(self);
                }

                // Recursive
                self.st = setTimeout(timeout, delay == null ? 1000 : delay);

                if( self.options.random == false ) {
                    if( self.$el.hasClass('the-last') ) {
                        $('.plugin-random-images').trigger('rimages.start');
                    } else {
                        clearTimeout(self.st);
                    }
                }

                // Stop At Image Index
                if( self.options.stopAtImageIndex && parseInt(self.options.stopAtImageIndex) == self.perImageIndex ) {
                    clearTimeout(self.st);
                }

                // Stop After X Timers
                if( self.options.stopAfterXTimes == self.times ) {
                    clearTimeout(self.st);
                }
            }
            timeout();

            self.$el.on('rimages.start', function(){
                clearTimeout(self.st);
                self.st = setTimeout(timeout, delay == null ? 1000 : delay);
            });

        },

        shuffle: function( array ) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

            return array;
        }

    };

    // expose to scope
    $.extend(theme, {
        PluginRandomImages: PluginRandomImages
    });

    // jquery plugin
    $.fn.themePluginRandomImages = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginRandomImages($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Read More
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__readmore';

    var PluginReadMore = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginReadMore.defaults = {
        buttonOpenLabel: 'Read More <i class="fas fa-chevron-down text-2 ms-1"></i>',
        buttonCloseLabel: 'Read Less <i class="fas fa-chevron-up text-2 ms-1"></i>',
        enableToggle: true,
        maxHeight: 110,
        overlayColor: '#FFF',
        overlayHeight: 100,
        startOpened: false,
        align: 'left'
    };

    PluginReadMore.prototype = {
        initialize: function($el, opts) {
            var self = this;

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            if( self.options.startOpened ) {
                self.options.wrapper.find('.readmore-button-wrapper > a').trigger('click');
            }

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginReadMore.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            self.options.wrapper.addClass('position-relative');

            // Overlay
            self.options.wrapper.append( '<div class="readmore-overlay"></div>' );

            // Check if is Safari
            var backgroundCssValue = 'linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, '+ self.options.overlayColor +' 100%)';
            if( $('html').hasClass('safari') ) {
                backgroundCssValue = '-webkit-linear-gradient(top, rgba(2, 0, 36, 0) 0%, '+ self.options.overlayColor +' 100%)'
            }

            self.options.wrapper.find('.readmore-overlay').css({
                background: backgroundCssValue,
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: self.options.overlayHeight,
                'z-index': 1
            });

            // Read More Button
            self.options.wrapper.find('.readmore-button-wrapper').removeClass('d-none').css({
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                'z-index': 2
            });

            // Button Label
            self.options.wrapper.find('.readmore-button-wrapper > a').html( self.options.buttonOpenLabel );

            self.options.wrapper.css({
                'height': self.options.maxHeight,
                'overflow-y': 'hidden'
            });

            // Alignment
            switch ( self.options.align ) {
                case 'center':
                    self.options.wrapper.find('.readmore-button-wrapper').addClass('text-center');
                    break;

                case 'right':
                    self.options.wrapper.find('.readmore-button-wrapper').addClass('text-right');
                    break;

                case 'left':
                default:
                    self.options.wrapper.find('.readmore-button-wrapper').addClass('text-left');
                    break;
            }

            return this;

        },

        events: function() {
            var self = this;

            // Read More
            self.readMore = function() {
                self.options.wrapper.find('.readmore-button-wrapper > a:not(.readless)').on('click', function(e){
                    e.preventDefault();

                    var $this = $(this);

                    setTimeout(function(){
                        self.options.wrapper.animate({
                            'height': self.options.wrapper[0].scrollHeight
                        }, function(){
                            if( !self.options.enableToggle ) {
                                $this.fadeOut();
                            }

                            $this.html( self.options.buttonCloseLabel ).addClass('readless').off('click');

                            self.readLess();

                            self.options.wrapper.find('.readmore-overlay').fadeOut();
                            self.options.wrapper.css({
                                'max-height': 'none',
                                'overflow': 'visible'
                            });

                            self.options.wrapper.find('.readmore-button-wrapper').animate({
                                bottom: -20
                            });
                        });
                    }, 200);
                });
            }

            // Read Less
            self.readLess = function() {
                self.options.wrapper.find('.readmore-button-wrapper > a.readless').on('click', function(e){
                    e.preventDefault();

                    var $this = $(this);

                    // Button
                    self.options.wrapper.find('.readmore-button-wrapper').animate({
                        bottom: 0
                    });

                    // Overlay
                    self.options.wrapper.find('.readmore-overlay').fadeIn();

                    setTimeout(function(){
                        self.options.wrapper.height(self.options.wrapper[0].scrollHeight).animate({
                            'height': self.options.maxHeight
                        }, function(){
                            $this.html( self.options.buttonOpenLabel ).removeClass('readless').off('click');

                            self.readMore();

                            self.options.wrapper.css({
                                'overflow': 'hidden'
                            });
                        });
                    }, 200);
                });
            }

            // First Load
            self.readMore();

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginReadMore: PluginReadMore
    });

    // jquery plugin
    $.fn.themePluginReadMore = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginReadMore($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Revolution Slider
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__revolution';

    var PluginRevolutionSlider = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginRevolutionSlider.defaults = {
        sliderType: 'standard',
        sliderLayout: 'fullwidth',
        delay: 9000,
        gridwidth: 1170,
        gridheight: 500,
        spinner: 'spinner3',
        disableProgressBar: 'on',
        parallax: {
            type: 'off',
            bgparallax: 'off'
        },
        navigation: {
            keyboardNavigation: 'off',
            keyboard_direction: 'horizontal',
            mouseScrollNavigation: 'off',
            onHoverStop: 'off',
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: false
            },
            arrows: {
                enable: true,
                hide_onmobile: false,
                hide_under: 0,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                left: {
                    h_align: 'left',
                    v_align: 'center',
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: 'right',
                    v_align: 'center',
                    h_offset: 30,
                    v_offset: 0
                }
            }
        },

        /* ADDONS */
        addOnTypewriter: {
            enable: false
        },
        addOnWhiteboard: {
            enable: false,

        },
        whiteboard: {
            movehand: {
                src: '../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/hand_point_right.png',
                width: 400,
                height: 1000,
                handtype: 'right',
                transform: {
                    transformX: 50,
                    transformY: 50
                },
                jittering: {
                    distance: '80',
                    distance_horizontal: '100',
                    repeat: '5',
                    offset: '10',
                    offset_horizontal: '0'
                },
                rotation: {
                    angle: '10',
                    repeat: '3'
                }
            },
            writehand: {
                src: '../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/write_right_angle.png',
                width: 572,
                height: 691,
                handtype: 'right',
                transform: {
                    transformX: 50,
                    transformY: 50
                },
                jittering: {
                    distance: '80',
                    distance_horizontal: '100',
                    repeat: '5',
                    offset: '10',
                    offset_horizontal: '0'
                },
                rotation:{
                    angle: '10',
                    repeat: '3'
                }
            }
        },
        addOnParticles: {
            enable: false
        },
        particles: {
            startSlide: "first",
            endSlide: "last",
            zIndex: "1",
            particles: {
                number: {value: 80}, color: {value: "#ffffff"},
                shape: {
                    type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
                    image: {src: ""}
                },
                opacity: {value: 0.5, random: true, min: 0.25, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
                size: {value: 2, random: false, min: 30, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
                line_linked: {enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
                move: {enable: true, speed: 6, direction: "none", random: true, min_speed: 6, straight: false, out_mode: "out"}
            },
            interactivity: {
                events: {onhover: {enable: false, mode: "repulse"}, onclick: {enable: false, mode: "repulse"}},
                modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 40, opacity: 0.4}, repulse: {distance: 200}}
            }
        },
        addOnCountdown: {
            enable: false,
            targetdate: new Date().getTime() + 864000000, // http://www.freeformatter.com/epoch-timestamp-to-date-converter.html
            slidechanges: [{days: 0, hours: 0, minutes: 0, seconds: 0, slide: 2}]
        },
        addOnSlicey: {
            enable: false
        },
        addOnFilmstrip: {
            enable: false
        },
        addOnBeforeAfter : {
            enable: false,
            options: {
                cursor: "move",
                carousel: false,
                arrowStyles: {
                    leftIcon: "fa-icon-caret-left",
                    rightIcon: "fa-icon-caret-right",
                    topIcon: "fa-icon-caret-up",
                    bottomIcon: "fa-icon-caret-down",
                    size: "35",
                    color: "#ffffff",
                    spacing: "10",
                    bgColor: "transparent",
                    padding: "0",
                    borderRadius: "0"
                },
                dividerStyles: {
                    width: "1",
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        addOnPanorama: {
            enable: false
        },
        addOnRevealer: {
            enable: false,
        },
        revealer: {
            direction: "open_horizontal",
            color: "#ffffff",
            duration: "1500",
            delay: "0",
            easing: "Power2.easeInOut",
            overlay_enabled: true,
            overlay_color: "#000000",
            overlay_duration: "1500",
            overlay_delay: "0",
            overlay_easing: "Power2.easeInOut",
            spinner: "1",
            spinnerColor: "#006dd2",
            spinnerHtml: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-1'><div class='rsaddon-revealer-1'><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><\/div><\/div \/>"
        },
        addOnDuotone: {
            enable: false
        },
        addOnBubblemorph: {
            enable: false
        },
        addOnDistortion: {
            enable: false
        }

    };

    PluginRevolutionSlider.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginRevolutionSlider.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.revolution))) {
                return this;
            }

            // Single Slider Class
            if(this.options.wrapper.find('> ul > li').length == 1) {
                this.options.wrapper.addClass('slider-single-slide');

                // Remove Bullets
                // this.options.navigation.bullets.enable = false;
                $.extend(this.options.navigation, {
                    bullets: {
                        enable: false
                    }
                });

            }

            // Full Screen Class
            if(this.options.sliderLayout == 'fullscreen') {
                this.options.wrapper.closest('.slider-container').addClass('fullscreen-slider');
            }

            // Initialize Revolution Slider
            this.options.wrapper.revolution(this.options);

            // Addon Init - Typewriter
            if(this.options.addOnTypewriter.enable) {
                RsTypewriterAddOn($, this.options.wrapper);
            }

            // Addon Init - Whiteboard
            if(this.options.addOnWhiteboard.enable) {
                this.options.wrapper.rsWhiteBoard();
            }

            // Addon Init - Particles
            if(this.options.addOnParticles.enable) {
                RsParticlesAddOn(this.options.wrapper);
            }

            // Addon Init - Countdown
            if(this.options.addOnCountdown.enable) {
                tp_countdown(this.options.wrapper, this.options.addOnCountdown.targetdate, this.options.addOnCountdown.slidechanges);
            }

            // Addon Init - Slicey
            if(this.options.addOnSlicey.enable) {
                this.options.wrapper.revSliderSlicey();
            }

            // Addon Init - Filmstrip
            if(this.options.addOnFilmstrip.enable) {
                RsFilmstripAddOn($, this.options.wrapper, '../vendor/rs-plugin/revolution-addons/filmstrip/', false);
            }

            // Addon Init - Before After
            if(this.options.addOnBeforeAfter.enable) {
                RevSliderBeforeAfter($, this.options.wrapper, this.options.addOnBeforeAfter.options);
            }

            // Addon Init - Panorama
            if(this.options.addOnPanorama.enable) {
                RsAddonPanorama($, this.options.wrapper);
            }

            // Addon Init - Revealer
            if(this.options.addOnRevealer.enable) {
                RsRevealerAddOn($, this.options.wrapper, this.options.revealer.spinnerHtml);
            }

            // Addon Init - Duotone
            if(this.options.addOnDuotone.enable) {
                RsAddonDuotone($, this.options.wrapper, true, "cubic-bezier(0.645, 0.045, 0.355, 1.000)", "1000");
            }

            // Addon Init - Bubblemorph
            if(this.options.addOnBubblemorph.enable) {
                BubbleMorphAddOn($, this.options.wrapper, false);
            }

            // Addon Init - Distortion
            if(this.options.addOnDistortion.enable) {
                RsLiquideffectAddOn($, this.options.wrapper);
            }

            return this;
        },

        events: function() {

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginRevolutionSlider: PluginRevolutionSlider
    });

    // jquery plugin
    $.fn.themePluginRevolutionSlider = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginRevolutionSlider($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Scroll Spy
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__scrollSpy';

    var PluginScrollSpy = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginScrollSpy.defaults = {
        target: '#header'
    };

    PluginScrollSpy.prototype = {
        initialize: function($el, opts) {

            if( document.querySelector( opts.target ) == null ) {
                return false;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts);

            this.build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginScrollSpy.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                target = document.querySelector( self.options.target ) != null ? document.querySelector( self.options.target ) : false,
                navItems = target == '#header' || target == '.wrapper-spy' ? target.querySelectorAll('.header-nav .nav > li a') : target.querySelectorAll('.nav > li a');

            // Get all section ID's
            var sectionIDs = Object.keys(navItems).map(function(key, index) {
                return navItems[key].hash;
            });

            // Remove empty values from sectionIDs array
            sectionIDs = sectionIDs.filter(function(value){
                return value != '';
            });

            // Store in a global variable
            self.sectionIDs = sectionIDs;

            for( var i = 0; i < sectionIDs.length; i++ ) {

                // Default Root Margin
                var rootMargin = '-20% 0px -79.9% 0px';

                // Spy Offset
                if( $( sectionIDs[i] ).data('spy-offset') ) {
                    var rootMarginOffset = $( sectionIDs[i] ).data('spy-offset'),
                        isNegativeOffset = parseInt( rootMarginOffset ) < 0 ? true : false;

                    // Mount a new rootMargin based on offset value
                    rootMargin = rootMargin.split(' ').map(function(element, index){
                        if( element.indexOf('%') > 0 ) {
                            var valueToInt = parseInt( element.replace('%','') ),
                                newValue = 0;

                            switch ( index ) {
                                case 0:
                                    if( isNegativeOffset ) {
                                        newValue = valueToInt - rootMarginOffset;
                                    } else {
                                        newValue = Math.abs(valueToInt) + rootMarginOffset;
                                    }
                                    break;

                                case 2:
                                    if( isNegativeOffset ) {
                                        newValue = valueToInt + rootMarginOffset;
                                    } else {
                                        newValue = Math.abs(valueToInt) - rootMarginOffset;
                                    }
                                    break;

                            }

                            if( isNegativeOffset ) {
                                newValue = newValue + '%';
                            } else {
                                newValue = '-' + newValue + '%';
                            }

                            return newValue;
                        } else {
                            return element;
                        }
                    }).join(' ');
                }

                var selector = sectionIDs[i],
                    callback = function() {
                        var $section = $(this);

                        if( target == '#header' || target == '.wrapper-spy' ) {
                            $('#header .header-nav .nav > li a').removeClass('active');
                            $('#header .header-nav .nav > li a[href="#'+ $section[0].id +'"]').addClass('active');
                        } else {
                            $( target ).find('.nav > li a').removeClass('active');
                            $( target ).find('.nav > li a[href="#'+ $section[0].id +'"]').addClass('active');
                        }

                    }

                this.scrollSpyIntObs( selector, callback, {
                    rootMargin: rootMargin,
                    threshold: 0
                }, true, i, true);

            }

            return this;

        },

        scrollSpyIntObs: function(selector, functionName, intObsOptions, alwaysObserve, index, firstLoad) {
            var self = this;

            var $el = document.querySelectorAll( selector );
            var intersectionObserverOptions = {
                rootMargin: '0px 0px 200px 0px'
            }

            if( Object.keys(intObsOptions).length ) {
                intersectionObserverOptions = $.extend(intersectionObserverOptions, intObsOptions);
            }

            var observer = new IntersectionObserver(function(entries) {

                for(var i=0; i < entries.length; i++) {
                    var entry = entries[i];

                    if (entry.intersectionRatio > 0 ) {
                        if( typeof functionName === 'string' ) {
                            var func = Function( 'return ' + functionName )();
                        } else {
                            var callback = functionName;

                            callback.call( $(entry.target) );
                        }

                        // Unobserve
                        if( !alwaysObserve ) {
                            observer.unobserve(entry.target);
                        }

                    } else {
                        if( firstLoad == false ) {
                            if( index == self.sectionIDs.length - 1 ) {
                                $('#header .header-nav .nav > li a').removeClass('active');
                                $('#header .header-nav .nav > li a[href="#'+ entry.target.id +'"]').parent().prev().find('a').addClass('active');
                            }
                        }
                        firstLoad = false;

                    }
                }
            }, intersectionObserverOptions);

            $( $el ).each(function(){
                observer.observe( $(this)[0] );
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginScrollSpy: PluginScrollSpy
    });

    // jquery plugin
    $.fn.themePluginScrollSpy = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginScrollSpy($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Scroll to Top
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        PluginScrollToTop: {

            defaults: {
                wrapper: $('body'),
                offset: 150,
                buttonClass: 'scroll-to-top',
                buttonAriaLabel: 'Scroll To Top',
                iconClass: 'fas fa-chevron-up',
                delay: 1000,
                visibleMobile: false,
                label: false,
                easing: 'easeOutBack'
            },

            initialize: function(opts) {
                initialized = true;

                // Don't initialize if the page has Section Scroll
                if( $('body[data-plugin-section-scroll]').get(0) ) {
                    return;
                }

                this
                    .setOptions(opts)
                    .build()
                    .events();

                return this;
            },

            setOptions: function(opts) {
                this.options = $.extend(true, {}, this.defaults, opts);

                return this;
            },

            build: function() {
                var self = this,
                    $el;

                // Base HTML Markup
                $el = $('<a />')
                    .addClass(self.options.buttonClass)
                    .attr({
                        'href': '#',
                        'aria-label': self.options.buttonAriaLabel
                    })
                    .append(
                        $('<i />')
                            .addClass(self.options.iconClass)
                    );

                // Visible Mobile
                if (!self.options.visibleMobile) {
                    $el.addClass('hidden-mobile');
                }

                // Label
                if (self.options.label) {
                    $el.append(
                        $('<span />').html(self.options.label)
                    );
                }

                this.options.wrapper.append($el);

                this.$el = $el;

                return this;
            },

            events: function() {
                var self = this,
                    _isScrolling = false;

                // Click Element Action
                self.$el.on('click', function(e) {
                    e.preventDefault();
                    $('html').animate({
                        scrollTop: 0
                    }, self.options.delay, self.options.easing);
                    return false;
                });

                // Show/Hide Button on Window Scroll event.
                $(window).scroll(function() {

                    if (!_isScrolling) {

                        _isScrolling = true;

                        if ($(window).scrollTop() > self.options.offset) {

                            self.$el.stop(true, true).addClass('visible');
                            _isScrolling = false;

                        } else {

                            self.$el.stop(true, true).removeClass('visible');
                            _isScrolling = false;

                        }

                    }

                });

                return this;
            }

        }

    });

}).apply(this, [window.theme, jQuery]);

// Scrollable
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__scrollable';

    var PluginScrollable = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginScrollable.updateModals = function() {
        PluginScrollable.updateBootstrapModal();
    };

    PluginScrollable.updateBootstrapModal = function() {
        var updateBoostrapModal;

        updateBoostrapModal = typeof $.fn.modal !== 'undefined';
        updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor !== 'undefined';
        updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype !== 'undefined';
        updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype.enforceFocus !== 'undefined';

        if ( !updateBoostrapModal ) {
            return false;
        }

        var originalFocus = $.fn.modal.Constructor.prototype.enforceFocus;
        $.fn.modal.Constructor.prototype.enforceFocus = function() {
            originalFocus.apply( this );

            var $scrollable = this.$element.find('.scrollable');
            if ( $scrollable ) {
                if ( $.isFunction($.fn['themePluginScrollable'])  ) {
                    $scrollable.themePluginScrollable();
                }

                if ( $.isFunction($.fn['nanoScroller']) ) {
                    $scrollable.nanoScroller();
                }
            }
        };
    };

    PluginScrollable.defaults = {
        contentClass: 'scrollable-content',
        paneClass: 'scrollable-pane',
        sliderClass: 'scrollable-slider',
        alwaysVisible: true,
        preventPageScrolling: true
    };

    PluginScrollable.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginScrollable.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            this.options.wrapper.nanoScroller(this.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginScrollable: PluginScrollable
    });

    // jquery plugin
    $.fn.themePluginScrollable = function(opts) {
        return this.each(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginScrollable($this, opts);
            }

        });
    };

    $(function() {
        PluginScrollable.updateModals();
    });

}).apply(this, [window.theme, jQuery]);

// Section Scroll
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__sectionScroll';

    var PluginSectionScroll = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginSectionScroll.defaults = {
        targetClass: '.section',
        dotsNav: true,
        changeHeaderLogo: true,
        headerLogoDark: 'img/logo-default-slim.png',
        headerLogoLight: 'img/logo-default-slim-dark.png'
    };

    PluginSectionScroll.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginSectionScroll.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper;

            // Check type of header and change the target for header (by change header color purpose)
            if( $('html').hasClass('side-header-overlay-full-screen') ) {
                self.$header = $('.sticky-wrapper');
            } else {
                self.$header = $('#header');
            }

            // Turn the section full height or not depeding on the content size
            self.updateSectionsHeight();

            // Wrap all sections in a section wrapper
            $( this.options.targetClass ).wrap('<div class="section-wrapper"></div>');

            // Set the section wrapper height
            $('.section-wrapper').each(function(){
                $(this).height( $(this).find('.section-scroll').outerHeight() );
            });

            // Add active class to the first section on page load
            $('.section-wrapper').first().addClass('active');

            var	flag = false,
                scrollableFlag = false,
                touchDirection = '',
                touchstartY = 0,
                touchendY = 0;

            $(window).on('touchstart', function(event) {
                touchstartY = event.changedTouches[0].screenY;
            });

            var wheelEvent = 'onwheel' in document ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
            if( $(window).width() < 992 && $('html').hasClass('touch') ) {
                wheelEvent = 'onwheel' in document ? 'wheel touchend' : document.onmousewheel !== undefined ? 'mousewheel touchend' : 'DOMMouseScroll touchend';
            }

            if( $(window).width() < 992 ) {
                $('html').removeClass('overflow-hidden');
                $(window).on('scroll', function(){

                    var index = 0;
                    $('.section-scroll').each(function(){
                        if( $(this).offset().top <= $(window).scrollTop() + 50 ) {
                            var $currentSection2 = $('.section-wrapper').eq( index ).find('.section-scroll');

                            $('.section-scroll-dots-navigation > ul > li').removeClass('active');
                            $('.section-scroll-dots-navigation > ul > li').eq( index ).addClass('active');

                            $(window).trigger({
                                type: 'section.scroll.mobile.change.header.color',
                                currentSection: $currentSection2
                            });
                        }

                        index++;
                    });

                });

                $(window).on('section.scroll.mobile.change.header.color', function(e){
                    if( typeof e.currentSection == 'undefined' ) {
                        return;
                    }

                    var $currentSection = e.currentSection,
                        headerColor     = $currentSection.data('section-scroll-header-color');

                    $('#header .header-nav').removeClass('header-nav-light-text header-nav-dark-text').addClass('header-nav-' + headerColor + '-text');
                    $('#header .header-nav-features').removeClass('header-nav-features-dark header-nav-features-light').addClass('header-nav-features-' + headerColor);
                    $('#header .header-social-icons').removeClass('social-icons-icon-dark social-icons-icon-light').addClass('social-icons-icon-' + headerColor);

                    // Change Logo
                    if( self.options.changeHeaderLogo && headerColor != undefined ) {
                        if( headerColor == 'light' ) {
                            $('#header .header-logo img').attr('src', self.options.headerLogoLight);
                        } else if( headerColor == 'dark' ) {
                            $('#header .header-logo img').attr('src', self.options.headerLogoDark);
                        }
                    }

                    self.$header.css({
                        opacity: 1
                    });

                });
            }

            $(window).on(wheelEvent, function(e){
                if( $(window).width() < 992 ) {
                    return;
                }

                if( $(window).width() < 992 && $('html').hasClass('touch') ) {
                    if( $(e.target).closest('.section-scroll-dots-navigation').get(0) || $(e.target).closest('.header-body').get(0) || $(e.target).closest('.owl-carousel').get(0) ) {
                        return;
                    }
                }

                // Side Header Overlay Full Screen
                if( $('html.side-header-overlay-full-screen.side-header-hide').get(0) ) {
                    return;
                }

                var wheelDirection = e.originalEvent.wheelDelta == undefined ? e.originalEvent.deltaY > 0 : e.originalEvent.wheelDelta < 0;
                if( $(window).width() < 992 && $('html').hasClass('touch') ) {
                    touchendY = event.changedTouches[0].screenY;

                    if( touchendY <= touchstartY ) {
                        touchDirection = 'up';
                    }

                    if( touchendY >= touchstartY ) {
                        touchDirection = 'down';
                    }

                    if( touchendY == touchstartY ) {
                        return;
                    }
                }

                var $currentSection = $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll'),
                    $nextSection = self.getNextSection(wheelDirection, touchDirection),
                    nextSectionOffsetTop;

                // If is the last section, then change the offsetTop value
                if( self.getCurrentIndex() == $('.section-wrapper').length - 1 ) {
                    nextSectionOffsetTop = $(document).height();
                } else {
                    nextSectionOffsetTop = $nextSection.offset().top;
                }

                if( $(window).width() < 992 && $('html').hasClass('touch') ) {
                    setTimeout(function(){
                        if( $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll').hasClass('section-scroll-scrollable') ) {
                            $('html').removeClass('overflow-hidden');
                        } else {
                            $('html').addClass('overflow-hidden');
                        }
                    }, 1200);
                }

                // For non full height sections
                if( $currentSection.hasClass('section-scroll-scrollable') ) {
                    if( !flag && !scrollableFlag ) {

                        // Scroll Direction
                        if(wheelDirection || touchDirection == 'up') {
                            if( ( $(window).scrollTop() + $(window).height() ) >= nextSectionOffsetTop ) {
                                flag = true;
                                setTimeout(function(){
                                    $(window).trigger('section.scroll.change.header.color');

                                    setTimeout(function(){
                                        flag = false;
                                    }, 500);
                                }, 1000);

                                if( self.getCurrentIndex() == ( $('.section-wrapper').length - 1 )  ) {
                                    return false;
                                }

                                // Move to the next section
                                self.moveTo( $currentSection.offset().top + $currentSection.outerHeight() );

                                // Change Section Active Class
                                self.changeSectionActiveState( $nextSection );

                                self.$header.css({
                                    opacity: 0,
                                    transition: 'ease opacity 500ms'
                                });
                            }

                            if( !$('html').hasClass('touch') ) {
                                for( var i = 1; i < 100; i++ ) {
                                    $('body, html').scrollTop( $(window).scrollTop() + 1 );

                                    if( ( $(window).scrollTop() + $(window).height() ) >= nextSectionOffsetTop ) {
                                        scrollableFlag = true;
                                        setTimeout(function(){
                                            $(window).trigger('section.scroll.change.header.color');
                                            scrollableFlag = false;
                                        }, 500);
                                        break;
                                    }
                                }
                            }
                        } else {
                            if( $(window).scrollTop() <= $currentSection.offset().top ) {
                                flag = true;
                                setTimeout(function(){
                                    $(window).trigger('section.scroll.change.header.color');

                                    setTimeout(function(){
                                        flag = false;
                                    }, 500);
                                }, 1000);

                                if( self.getCurrentIndex() == 0  ) {
                                    return false;
                                }

                                // Move to the next section
                                self.moveTo( $currentSection.offset().top - $(window).height() );

                                // Change Section Active Class
                                self.changeSectionActiveState( $nextSection );

                                self.$header.css({
                                    opacity: 0,
                                    transition: 'ease opacity 500ms'
                                });
                            }

                            if( !$('html').hasClass('touch') ) {
                                for( var i = 1; i < 100; i++ ) {
                                    $('body, html').scrollTop( $(window).scrollTop() - 1 );

                                    if( $(window).scrollTop() <= $currentSection.offset().top ) {
                                        scrollableFlag = true;
                                        setTimeout(function(){
                                            $(window).trigger('section.scroll.change.header.color');
                                            scrollableFlag = false;
                                        }, 500);
                                        break;
                                    }
                                }
                            }
                        }

                        // Change Dots Active Class
                        self.changeDotsActiveState();

                        return;

                    }
                }

                // For full height sections
                if( !flag && !scrollableFlag ) {
                    if(wheelDirection || touchDirection == 'up') {
                        if( self.getCurrentIndex() == ( $('.section-wrapper').length - 1 )  ) {
                            return false;
                        }

                        // Change Section Active Class
                        self.changeSectionActiveState( $nextSection );

                        setTimeout(function(){
                            // Move to the next section
                            self.moveTo( $nextSection.offset().top );

                        }, 150);
                    } else {
                        if( self.getCurrentIndex() == 0  ) {
                            return false;
                        }

                        // Change Section Active Class
                        self.changeSectionActiveState( $nextSection );

                        if( $nextSection.height() > $(window).height() ) {
                            // Move to the next section
                            self.moveTo( $currentSection.offset().top - $(window).height() );
                        } else {
                            setTimeout(function(){
                                // Move to the next section
                                self.moveTo( $nextSection.offset().top );

                            }, 150);
                        }
                    }

                    // Change Dots Active Class
                    self.changeDotsActiveState();

                    self.$header.css({
                        opacity: 0,
                        transition: 'ease opacity 500ms'
                    });

                    // Style next section
                    $nextSection.css({
                        position: 'relative',
                        opacity: 1,
                        'z-index': 1,
                        transform: 'translate3d(0,0,0) scale(1)'
                    });

                    // Style previous section
                    $currentSection.css({
                        position: 'fixed',
                        width: '100%',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        'z-index': 0,
                        transform: 'translate3d(0,0,-10px) scale(0.7)',
                        transition: 'ease transform 600ms, ease opacity 600ms',
                    });

                    setTimeout(function(){
                        $currentSection.css({
                            position: 'relative',
                            opacity: 1,
                            transform: 'translate3d(0,0,-10px) scale(1)'
                        });

                        $(window).trigger('section.scroll.change.header.color');

                        setTimeout(function(){
                            flag = false;
                        }, 500);
                    }, 1000);

                    flag = true;

                }

                return;
            });

            // Dots Navigation
            if( this.options.dotsNav ) {
                self.dotsNavigation();
            }

            // First Load
            setTimeout(function(){
                if( $(window.location.hash).get(0) ) {
                    self.moveTo( $(window.location.hash).parent().offset().top );

                    self.changeSectionActiveState( $(window.location.hash) );

                    // Change Dots Active Class
                    self.changeDotsActiveState();

                    self.updateHash( true );
                } else {
                    var hash  = window.location.hash,
                        index = hash.replace('#','');

                    if( !hash ) {
                        index = 1;
                    }

                    self.moveTo( $('.section-wrapper').eq( index - 1 ).offset().top );

                    self.changeSectionActiveState( $('.section-wrapper').eq( index - 1 ).find('.section-scroll') );

                    // Change Dots Active Class
                    self.changeDotsActiveState();

                    self.updateHash( true );
                }

                $(window).trigger('section.scroll.ready');
                $(window).trigger('section.scroll.change.header.color');
            }, 500);

            return this;
        },

        updateSectionsHeight: function() {
            var self = this;

            $('.section-scroll').css({ height: '' });

            $('.section-scroll').each(function(){
                if( $(this).outerHeight() < ( $(window).height() + 3 ) ) {
                    $(this).css({ height: '100vh' });
                } else {
                    $(this).addClass('section-scroll-scrollable');
                }
            });

            // Set the section wrapper height
            $('.section-wrapper').each(function(){
                $(this).height( $(this).find('.section-scroll').outerHeight() );
            });

            return this;
        },

        updateHash: function( first_load ){
            var self = this;

            if( !window.location.hash ) {
                window.location.hash = 1;
            } else {
                if(!first_load) {
                    var $section = $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll'),
                        section_id = $section.attr('id') ? $section.attr('id') : $section.parent().index() + 1;

                    window.location.hash = section_id;
                }
            }

            return this;
        },

        getCurrentIndex: function() {
            var self = this,
                currentIndex = 0;

            currentIndex = $('.section-wrapper.active').index();

            return currentIndex;
        },

        moveTo: function( $scrollTopValue, first_load ) {
            var self = this;

            $('body, html').animate({
                scrollTop: $scrollTopValue
            }, 1000, 'easeOutQuint');

            setTimeout(function(){
                self.updateHash();
            }, 500);

            return this;
        },

        getNextSection: function(wheelDirection, touchDirection) {
            var self = this,
                $nextSection = '';

            // Scroll Direction
            if(wheelDirection || touchDirection == 'up') {
                $nextSection = $('.section-wrapper').eq( self.getCurrentIndex() + 1 ).find('.section-scroll');
            } else {
                $nextSection = $('.section-wrapper').eq( self.getCurrentIndex() - 1 ).find('.section-scroll');
            }

            return $nextSection;
        },

        changeSectionActiveState: function( $nextSection ) {
            var self = this;

            $('.section-wrapper').removeClass('active');
            $nextSection.parent().addClass('active');

            return this;
        },

        changeDotsActiveState: function() {
            var self = this;

            $('.section-scroll-dots-navigation > ul > li').removeClass('active');
            $('.section-scroll-dots-navigation > ul > li').eq( self.getCurrentIndex() ).addClass('active');

            return this;
        },

        dotsNavigation: function() {
            var self = this;

            var dotsNav = $('<div class="section-scroll-dots-navigation"><ul class="list list-unstyled"></ul></div>'),
                currentSectionIndex = self.getCurrentIndex();

            if( self.options.dotsClass ) {
                dotsNav.addClass( self.options.dotsClass );
            }

            for( var i = 0; i < $('.section-scroll').length; i++ ) {
                var title = $('.section-wrapper').eq( i ).find('.section-scroll').data('section-scroll-title');

                dotsNav.find('> ul').append( '<li'+ ( ( currentSectionIndex == i ) ? ' class="active"' : '' ) +'><a href="#'+ i +'" data-nav-id="'+ i +'"><span>'+ title +'</span></a></li>' );
            }

            $('.body').append( dotsNav );

            dotsNav.find('a[data-nav-id]').on('click touchstart', function(e){
                e.preventDefault();
                var $this = $(this);

                $('.section-scroll').css({
                    opacity: 0,
                    transition: 'ease opacity 300ms'
                });

                self.$header.css({
                    opacity: 0,
                    transition: 'ease opacity 500ms'
                });

                setTimeout(function(){
                    self.moveTo( $('.section-wrapper').eq( $this.data('nav-id') ).offset().top )

                    $('.section-wrapper').removeClass('active');
                    $('.section-wrapper').eq( $this.data('nav-id') ).addClass('active');

                    $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll').css({
                        opacity: 1
                    });

                    setTimeout(function(){
                        $('.section-scroll').css({ opacity: 1 });

                        $(window).trigger('section.scroll.change.header.color');
                    }, 500);

                    if( $(window).width() > 991 ) {
                        self.changeDotsActiveState();
                    }
                }, 500);
            });

            return this;
        },

        events: function() {
            var self = this;

            $(window).on('section.scroll.ready', function(){
                $(window).scrollTop(0);
            });

            $(window).on('section.scroll.change.header.color', function(){
                var headerColor = $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll').data('section-scroll-header-color');

                $('#header .header-nav').removeClass('header-nav-light-text header-nav-dark-text').addClass('header-nav-' + headerColor + '-text');
                $('#header .header-nav-features').removeClass('header-nav-features-dark header-nav-features-light').addClass('header-nav-features-' + headerColor);
                $('#header .header-social-icons').removeClass('social-icons-icon-dark social-icons-icon-light').addClass('social-icons-icon-' + headerColor);

                // Change Logo
                if( self.options.changeHeaderLogo && headerColor != undefined ) {
                    if( headerColor == 'light' ) {
                        $('#header .header-logo img').attr('src', self.options.headerLogoLight);
                    } else if( headerColor == 'dark' ) {
                        $('#header .header-logo img').attr('src', self.options.headerLogoDark);
                    }
                }

                self.$header.css({
                    opacity: 1
                });
            });

            $(document).ready(function(){
                $(window).afterResize(function(){
                    self.updateSectionsHeight();

                    if( $(window).width() < 992 ) {
                        $('html').removeClass('overflow-hidden');
                    }
                });
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginSectionScroll: PluginSectionScroll
    });

    // jquery plugin
    $.fn.themePluginSectionScroll = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginSectionScroll($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);

// Sort
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__sort';

    var PluginSort = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginSort.defaults = {
        useHash: true,
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        filter: '*',
        filterFieldId: false,
        filterFieldText: '',
        hiddenStyle: {
            opacity: 0
        },
        visibleStyle: {
            opacity: 1
        },
        stagger: 30,
        isOriginLeft: ($('html').attr('dir') == 'rtl' ? false : true)
    };

    PluginSort.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginSort.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.isotope))) {
                return this;
            }

            var self = this,
                $source = this.options.wrapper,
                $destination = $('.sort-destination[data-sort-id="' + $source.attr('data-sort-id') + '"]'),
                $window = $(window);

            if ($destination.get(0)) {

                self.$source = $source;
                self.$destination = $destination;
                self.$loader = false;

                self.setParagraphHeight($destination);

                if (self.$destination.parents('.sort-destination-loader').get(0)) {
                    self.$loader = self.$destination.parents('.sort-destination-loader');
                    self.createLoader();
                }

                $destination.attr('data-filter', '*');

                $destination.one('layoutComplete', function(event, laidOutItems) {
                    self.removeLoader();

                    // If has data-plugin-sticky on the page we need recalculate sticky position
                    if( $('[data-plugin-sticky]').length ) {
                        setTimeout(function(){
                            $('[data-plugin-sticky]').each(function(){
                                $(this).data('__sticky').build();
                                $(window).trigger('resize');
                            });
                        }, 500);
                    }
                });

                if ( $('#' + self.options.filterFieldId).length ) {

                    var $filterField = $('#' + self.options.filterFieldId);

                    $filterField.keyup(function() {
                        self.options.filterFieldText = $(this).val();
                        self.setFilter(self.options.filter);
                    });

                }

                $destination.waitForImages(function() {
                    $destination.isotope(self.options);
                    self.events();
                });

                setTimeout(function() {
                    self.removeLoader();
                }, 3000);

            }

            return this;
        },

        events: function() {
            var self = this,
                filter = null,
                $window = $(window);

            self.$source.find('a').click(function(e) {
                e.preventDefault();

                filter = $(this).parent().data('option-value');

                self.setFilter(filter);

                if (e.originalEvent) {
                    self.$source.trigger('filtered');
                }

                return this;
            });

            self.$destination.trigger('filtered');
            self.$source.trigger('filtered');

            if (self.options.useHash) {
                self.hashEvents();
            }

            $window.on('resize sort.resize', function() {
                setTimeout(function() {
                    self.$destination.isotope('layout');
                }, 300);
            });

            setTimeout(function() {
                $window.trigger('sort.resize');
            }, 300);

            return this;
        },

        setFilter: function(filter) {
            var self = this,
                page = false,
                currentFilter = filter;

            self.$source.find('.active').removeClass('active');
            self.$source.find('li[data-option-value="' + filter + '"], li[data-option-value="' + filter + '"] > a').addClass('active');

            self.options.filter = currentFilter;

            if (self.$destination.attr('data-current-page')) {
                currentFilter = currentFilter + '[data-page-rel=' + self.$destination.attr('data-current-page') + ']';
            }

            if (self.options.filterFieldText != '') {
                currentFilter = currentFilter + '[data-sort-search*=' + self.options.filterFieldText.toLowerCase() + ']';
            }

            self.$destination.attr('data-filter', filter).isotope({
                filter: currentFilter
            }).one('arrangeComplete', function( event, filteredItems ) {

                if (self.options.useHash) {
                    if (window.location.hash != '' || self.options.filter.replace('.', '') != '*') {
                        window.location.hash = self.options.filter.replace('.', '');
                    }
                }

                $(window).trigger('scroll');

            }).trigger('filtered');

            return this;
        },

        hashEvents: function() {
            var self = this,
                hash = null,
                hashFilter = null,
                initHashFilter = '.' + location.hash.replace('#', '');

            // Check if has scroll to section trough URL hash and prevent the sort plugin from show nothing
            if( $(location.hash).length ) {
                initHashFilter = '.';
            }

            if (initHashFilter != '.' && initHashFilter != '.*') {
                self.setFilter(initHashFilter);
            }

            $(window).on('hashchange', function(e) {

                hashFilter = '.' + location.hash.replace('#', '');
                hash = (hashFilter == '.' || hashFilter == '.*' ? '*' : hashFilter);

                self.setFilter(hash);

            });

            return this;
        },

        setParagraphHeight: function() {
            var self = this,
                minParagraphHeight = 0,
                paragraphs = $('span.thumb-info-caption p', self.$destination);

            paragraphs.each(function() {
                if ($(this).height() > minParagraphHeight) {
                    minParagraphHeight = ($(this).height() + 10);
                }
            });

            paragraphs.height(minParagraphHeight);

            return this;
        },

        createLoader: function() {
            var self = this;

            var loaderTemplate = [
                '<div class="bounce-loader">',
                '<div class="bounce1"></div>',
                '<div class="bounce2"></div>',
                '<div class="bounce3"></div>',
                '</div>'
            ].join('');

            self.$loader.append(loaderTemplate);

            return this;
        },

        removeLoader: function() {

            var self = this;

            if (self.$loader) {

                self.$loader.removeClass('sort-destination-loader-showing');

                setTimeout(function() {
                    self.$loader.addClass('sort-destination-loader-loaded');
                }, 300);

            }

        }

    };

    // expose to scope
    $.extend(theme, {
        PluginSort: PluginSort
    });

    // jquery plugin
    $.fn.themePluginSort = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginSort($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Star Rating
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__starrating';

    var PluginStarRating = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginStarRating.defaults = {
        theme: 'krajee-fas',
        color: 'primary',
        showClear: false,
        showCaption: false
    };

    PluginStarRating.prototype = {
        initialize: function($el, opts) {
            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginStarRating.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {

            if (!($.isFunction($.fn.rating))) {
                return this;
            }

            var self = this;

            self.options.wrapper
                .rating(self.options);

            self.options.wrapper.parents('.rating-container')
                .addClass('rating-' + self.options.color);

            if( self.options.extraClass ) {
                self.options.wrapper.parents('.rating-container')
                    .addClass(self.options.extraClass);
            }

            return this;

        }
    };

    // expose to scope
    $.extend(theme, {
        PluginStarRating: PluginStarRating
    });

    // jquery plugin
    $.fn.themePluginStarRating = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginStarRating($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Sticky
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__sticky';

    var PluginSticky = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginSticky.defaults = {
        minWidth: 991,
        activeClass: 'sticky-active'
    };

    PluginSticky.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginSticky.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.pin))) {
                return this;
            }

            var self = this,
                $window = $(window);

            self.options.wrapper.pin(self.options);

            if( self.options.wrapper.hasClass('sticky-wrapper-transparent') ) {
                self.options.wrapper.parent().addClass('position-absolute w-100');
            }

            $window.afterResize(function() {
                self.options.wrapper.removeAttr('style').removeData('pin');
                self.options.wrapper.pin(self.options);
                $window.trigger('scroll');
            });

            // Change Logo Src
            if( self.options.wrapper.find('img').attr('data-change-src') ) {
                var $logo      = self.options.wrapper.find('img'),
                    logoSrc    = $logo.attr('src'),
                    logoNewSrc = $logo.attr('data-change-src');

                self.changeLogoSrc = function(activate) {
                    if(activate) {
                        $logo.attr('src', logoNewSrc);
                    } else {
                        $logo.attr('src', logoSrc);
                    }
                }
            }

            return this;
        },

        events: function() {
            var self = this,
                $window = $(window),
                $logo = self.options.wrapper.find('img'),
                sticky_activate_flag = true,
                sticky_deactivate_flag = false,
                class_to_check = ( self.options.wrapper.hasClass('sticky-wrapper-effect-1') ) ? 'sticky-effect-active' : 'sticky-active';

            $window.on('scroll sticky.effect.active', function(){
                if( self.options.wrapper.hasClass( class_to_check ) ) {
                    if( sticky_activate_flag ) {
                        if( $logo.attr('data-change-src') ) {
                            self.changeLogoSrc(true);
                        }

                        sticky_activate_flag = false;
                        sticky_deactivate_flag = true;
                    }
                } else {
                    if( sticky_deactivate_flag ) {
                        if( $logo.attr('data-change-src') ) {
                            self.changeLogoSrc(false);
                        }

                        sticky_deactivate_flag = false;
                        sticky_activate_flag = true;
                    }
                }
            });

            var is_backing = false;
            if( self.options.stickyStartEffectAt ) {

                // First Load
                if( self.options.stickyStartEffectAt < $window.scrollTop() ) {
                    self.options.wrapper.addClass('sticky-effect-active');

                    $window.trigger('sticky.effect.active');
                }

                $window.on('scroll', function(){
                    if( self.options.stickyStartEffectAt < $window.scrollTop() ) {
                        self.options.wrapper.addClass('sticky-effect-active');
                        is_backing = true;

                        $window.trigger('sticky.effect.active');
                    } else {
                        if( is_backing ) {
                            self.options.wrapper.find('.sticky-body').addClass('position-fixed');
                            is_backing = false;
                        }

                        if( $window.scrollTop() == 0 ) {
                            self.options.wrapper.find('.sticky-body').removeClass('position-fixed');
                        }

                        self.options.wrapper.removeClass('sticky-effect-active');
                    }
                });
            }

            // Refresh Sticky Plugin if click in a data-toggle="collapse"
            if( $('[data-bs-toggle="collapse"]').get(0) ) {

                $('[data-bs-toggle="collapse"]').on('click', function(){
                    setTimeout(function(){
                        self.build();
                        $(window).trigger('scroll');
                    }, 1000);
                });

            }
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginSticky: PluginSticky
    });

    // jquery plugin
    $.fn.themePluginSticky = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginSticky($this, opts);
            }

        });
    }

}).apply(this, [ window.theme, jQuery ]);

// Toggle
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__toggle';

    var PluginToggle = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginToggle.defaults = {
        duration: 350,
        isAccordion: false
    };

    PluginToggle.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $wrapper = this.options.wrapper,
                $items = $wrapper.find('> .toggle'),
                $el = null;

            $items.each(function() {
                $el = $(this);

                if ($el.hasClass('active')) {
                    $el.find('> p').addClass('preview-active');
                    $el.find('> .toggle-content').slideDown(self.options.duration);
                }

                self.events($el);
            });

            if (self.options.isAccordion) {
                self.options.duration = self.options.duration / 2;
            }

            return this;
        },

        events: function($el) {
            var self = this,
                previewParCurrentHeight = 0,
                previewParAnimateHeight = 0,
                toggleContent = null;

            $el.find('> label, > .toggle-title').click(function(e) {

                var $this = $(this),
                    parentSection = $this.parent(),
                    parentWrapper = $this.parents('.toggle'),
                    previewPar = null,
                    closeElement = null;

                if (self.options.isAccordion && typeof(e.originalEvent) != 'undefined') {
                    closeElement = parentWrapper.find('.toggle.active > label, .toggle.active > .toggle-title');

                    if (closeElement[0] == $this[0]) {
                        return;
                    }
                }

                parentSection.toggleClass('active');

                // Preview Paragraph
                if (parentSection.find('> p').get(0)) {

                    previewPar = parentSection.find('> p');
                    previewParCurrentHeight = previewPar.css('height');
                    previewPar.css('height', 'auto');
                    previewParAnimateHeight = previewPar.css('height');
                    previewPar.css('height', previewParCurrentHeight);

                }

                // Content
                toggleContent = parentSection.find('> .toggle-content');

                if (parentSection.hasClass('active')) {

                    $(previewPar).animate({
                        height: previewParAnimateHeight
                    }, self.options.duration, function() {
                        $(this).addClass('preview-active');
                    });

                    toggleContent.slideDown(self.options.duration, function() {
                        if (closeElement) {
                            closeElement.trigger('click');
                        }
                    });

                } else {

                    $(previewPar).animate({
                        height: 0
                    }, self.options.duration, function() {
                        $(this).removeClass('preview-active');
                    });

                    toggleContent.slideUp(self.options.duration);

                }

            });
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginToggle: PluginToggle
    });

    // jquery plugin
    $.fn.themePluginToggle = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginToggle($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Tweets
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__tweets';

    var PluginTweets = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginTweets.defaults = {
        username: null,
        count: 2,
        URL: 'php/twitter-feed.php',
        iconColor: false
    };

    PluginTweets.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginTweets.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (this.options.username == null || this.options.username == '') {
                return this;
            }

            var self = this,
                $wrapper = this.options.wrapper;

            $.ajax({
                type: 'GET',
                data: {
                    twitter_screen_name: self.options.username,
                    tweets_to_display: self.options.count,
                    icon_color: self.options.iconColor
                },
                url: self.options.URL,
            }).done(function(html) {
                $wrapper.html(html).find('a').attr('target','_blank');
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginTweets: PluginTweets
    });

    // jquery plugin
    $.fn.themePluginTweets = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginTweets($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Validation
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        PluginValidation: {

            defaults: {
                formClass: 'needs-validation',
                validator: {
                    highlight: function(element) {
                        $(element)
                            .addClass('is-invalid')
                            .removeClass('is-valid')
                            .parent()
                            .removeClass('has-success')
                            .addClass('has-danger');
                    },
                    success: function(label, element) {
                        $(element)
                            .removeClass('is-invalid')
                            .addClass('is-valid')
                            .parent()
                            .removeClass('has-danger')
                            .addClass('has-success')
                            .find('label.error')
                            .remove();
                    },
                    errorPlacement: function(error, element) {
                        if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
                            error.appendTo(element.parent().parent());
                        } else {
                            error.insertAfter(element);
                        }
                    }
                }
            },

            initialize: function(opts) {
                initialized = true;

                this
                    .setOptions(opts)
                    .build();

                return this;
            },

            setOptions: function(opts) {
                this.options = $.extend(true, {}, this.defaults, opts);

                return this;
            },

            build: function() {
                var self = this;

                if (!($.isFunction($.validator))) {
                    return this;
                }

                self.setMessageGroups();

                $.validator.setDefaults(self.options.validator);

                $('.' + self.options.formClass).validate();

                return this;
            },

            setMessageGroups: function() {

                $('.checkbox-group[data-msg-required], .radio-group[data-msg-required]').each(function() {
                    var message = $(this).data('msg-required');
                    $(this).find('input').attr('data-msg-required', message);
                });

            }

        }

    });

}).apply(this, [window.theme, jQuery]);

// Video Background
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__videobackground';

    var PluginVideoBackground = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginVideoBackground.defaults = {
        overlay: false,
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%',
        posterType: 'detect',
        className: 'vide-video-wrapper'
    };

    PluginVideoBackground.prototype = {
        initialize: function($el, opts) {
            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build()
                .events();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
                path: this.$el.data('video-path'),
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this;

            if (!($.isFunction($.fn.vide)) || (!this.options.path)) {
                return this;
            }

            if (this.options.overlay) {

                var overlayClass = this.options.overlayClass;

                this.options.wrapper.prepend(
                    $('<div />').addClass(overlayClass)
                );
            }

            this.options.wrapper
                .vide(this.options.path, this.options)
                .first()
                .css('z-index', 0);

            // Change Poster
            self.changePoster();

            // Initialize Vide inside a carousel
            if( self.options.wrapper.closest('.owl-carousel').get(0) ) {
                self.options.wrapper.closest('.owl-carousel').on('initialized.owl.carousel', function(){
                    $('.owl-item.cloned')
                        .find('[data-plugin-video-background] .vide-video-wrapper')
                        .remove();

                    $('.owl-item.cloned')
                        .find('[data-plugin-video-background]')
                        .vide(self.options.path, self.options)
                        .first()
                        .css('z-index', 0);

                    self.changePoster( self.options.wrapper.closest('.owl-carousel') );
                });
            }

            // Play Video Button
            var $playButton = self.options.wrapper.find('.video-background-play');

            if( $playButton.get(0) ) {
                var $playWrapper = self.options.wrapper.find('.video-background-play-wrapper');

                self.options.wrapper.find('.video-background-play').on('click', function(e){
                    e.preventDefault();

                    if( $playWrapper.get(0) ) {
                        $playWrapper.animate({
                            opacity: 0
                        }, 300, function(){
                            $playWrapper.parent().height( $playWrapper.outerHeight() );
                            $playWrapper.remove();
                        });
                    } else {
                        $playButton.animate({
                            opacity: 0
                        }, 300, function(){
                            $playButton.remove();
                        });
                    }

                    setTimeout(function(){
                        self.options.wrapper.find('video')[0].play();
                    }, 500)
                });
            }

            $(window).trigger('vide.video.inserted.on.dom');

            return this;
        },

        changePoster: function( $carousel ) {
            var self = this;

            // If it's inside carousel
            if( $carousel && self.options.changePoster ) {
                $carousel.find('.owl-item [data-plugin-video-background] .vide-video-wrapper').css({
                    'background-image': 'url(' + self.options.changePoster + ')'
                });

                return this;
            }

            if( self.options.changePoster ) {
                self.options.wrapper.find('.vide-video-wrapper').css({
                    'background-image': 'url(' + self.options.changePoster + ')'
                });
            }

            return this;
        },

        events: function() {
            var self = this;

            // Initialize
            self.options.wrapper.on('video.background.initialize', function(){
                self.build();
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginVideoBackground: PluginVideoBackground
    });

    // jquery plugin
    $.fn.themePluginVideoBackground = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginVideoBackground($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Account
(function(theme, $) {

    theme = theme || {};

    var initialized = false;

    $.extend(theme, {

        Account: {

            defaults: {
                wrapper: $('#headerAccount')
            },

            initialize: function($wrapper, opts) {
                if (initialized) {
                    return this;
                }

                initialized = true;
                this.$wrapper = ($wrapper || this.defaults.wrapper);

                this
                    .setOptions(opts)
                    .events();

                return this;
            },

            setOptions: function(opts) {
                this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

                return this;
            },

            events: function() {
                var self = this;

                $(window).on('load', function(){
                    $(document).ready(function(){
                        setTimeout(function(){

                            self.$wrapper.find('input').on('focus', function() {
                                self.$wrapper.addClass('open');

                                $(document).mouseup(function(e) {
                                    if (!self.$wrapper.is(e.target) && self.$wrapper.has(e.target).length === 0) {
                                        self.$wrapper.removeClass('open');
                                    }
                                });
                            });

                        }, 1500);
                    });
                });

                $('#headerSignUp').on('click', function(e) {
                    e.preventDefault();
                    self.$wrapper.addClass('signup').removeClass('signin').removeClass('recover');
                    self.$wrapper.find('.signup-form input:first').focus();
                });

                $('#headerSignIn').on('click', function(e) {
                    e.preventDefault();
                    self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
                    self.$wrapper.find('.signin-form input:first').focus();
                });

                $('#headerRecover').on('click', function(e) {
                    e.preventDefault();
                    self.$wrapper.addClass('recover').removeClass('signup').removeClass('signin');
                    self.$wrapper.find('.recover-form input:first').focus();
                });

                $('#headerRecoverCancel').on('click', function(e) {
                    e.preventDefault();
                    self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
                    self.$wrapper.find('.signin-form input:first').focus();
                });
            }

        }

    });

}).apply(this, [window.theme, jQuery]);

// Nav
// (function(theme, $) {
//
//     theme = theme || {};
//
//     var initialized = false;
//
//     $.extend(theme, {
//
//         Nav: {
//
//             defaults: {
//                 wrapper: $('#mainNav'),
//                 scrollDelay: 600,
//                 scrollAnimation: 'easeOutQuad'
//             },
//
//             initialize: function($wrapper, opts) {
//                 if (initialized) {
//                     return this;
//                 }
//
//                 initialized = true;
//                 this.$wrapper = ($wrapper || this.defaults.wrapper);
//
//                 this
//                     .setOptions(opts)
//                     .build()
//                     .events();
//
//                 return this;
//             },
//
//             setOptions: function(opts) {
//                 this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
//
//                 return this;
//             },
//
//             build: function() {
//                 var self = this,
//                     $html = $('html'),
//                     $header = $('#header'),
//                     $headerNavMain = $('#header .header-nav-main'),
//                     thumbInfoPreview;
//
//                 // Preview Thumbs
//                 if( self.$wrapper.find('a[data-thumb-preview]').length ) {
//                     self.$wrapper.find('a[data-thumb-preview]').each(function() {
//                         thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview')
//                             .append($('<span />').addClass('thumb-info-wrapper')
//                                 .append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')
//                                 )
//                             );
//
//                         $(this).append(thumbInfoPreview);
//                     });
//                 }
//
//                 // Side Header / Side Header Hamburguer Sidebar (Reverse Dropdown)
//                 if($html.hasClass('side-header') || $html.hasClass('side-header-hamburguer-sidebar')) {
//
//                     // Side Header Right / Side Header Hamburguer Sidebar Right
//                     if($html.hasClass('side-header-right') || $html.hasClass('side-header-hamburguer-sidebar-right')) {
//                         if(!$html.hasClass('side-header-right-no-reverse')) {
//                             $header.find('.dropdown-submenu').addClass('dropdown-reverse');
//                         }
//                     }
//
//                 } else {
//
//                     // Reverse
//                     var checkReverseFlag = false;
//                     self.checkReverse = function() {
//                         if( !checkReverseFlag ) {
//                             self.$wrapper.find('.dropdown, .dropdown-submenu').removeClass('dropdown-reverse');
//
//                             self.$wrapper.find('.dropdown:not(.manual):not(.dropdown-mega), .dropdown-submenu:not(.manual)').each(function() {
//                                 if(!$(this).find('.dropdown-menu').visible( false, true, 'horizontal' )  ) {
//                                     $(this).addClass('dropdown-reverse');
//                                 }
//                             });
//
//                             checkReverseFlag = true;
//                         }
//                     }
//
//                     $(window).on('resize', function(){
//                         checkReverseFlag = false;
//                     });
//
//                     $header.on('mouseover', function(){
//                         self.checkReverse();
//                     });
//
//                 }
//
//                 // Clone Items
//                 if($headerNavMain.hasClass('header-nav-main-clone-items')) {
//
//                     $headerNavMain.find('nav > ul > li > a').each(function(){
//                         var parent = $(this).parent(),
//                             clone  = $(this).clone(),
//                             clone2 = $(this).clone(),
//                             wrapper = $('<span class="wrapper-items-cloned"></span>');
//
//                         // Config Classes
//                         $(this).addClass('item-original');
//                         clone2.addClass('item-two');
//
//                         // Insert on DOM
//                         parent.prepend(wrapper);
//                         wrapper.append(clone).append(clone2);
//                     });
//
//                 }
//
//                 // Floating
//                 if($('#header.header-floating-icons').length && $(window).width() > 991) {
//
//                     var menuFloatingAnim = {
//                         $menuFloating: $('#header.header-floating-icons .header-container > .header-row'),
//
//                         build: function() {
//                             var self = this;
//
//                             self.init();
//                         },
//                         init: function(){
//                             var self  = this,
//                                 divisor = 0;
//
//                             $(window).scroll(function() {
//                                 var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()),
//                                     st = $(this).scrollTop();
//
//                                 divisor = $(document).height() / $(window).height();
//
//                                 self.$menuFloating.find('.header-column > .header-row').css({
//                                     transform : 'translateY( calc('+ scrollPercent +'vh - '+ st / divisor +'px) )'
//                                 });
//                             });
//                         }
//                     }
//
//                     menuFloatingAnim.build();
//
//                 }
//
//                 // Slide
//                 if($('.header-nav-links-vertical-slide').length) {
//                     var slideNavigation = {
//                         $mainNav: $('#mainNav'),
//                         $mainNavItem: $('#mainNav li'),
//
//                         build: function(){
//                             var self = this;
//
//                             self.menuNav();
//                         },
//                         menuNav: function(){
//                             var self = this;
//
//                             self.$mainNavItem.on('click', function(e){
//                                 var currentMenuItem 	= $(this),
//                                     currentMenu 		= $(this).parent(),
//                                     nextMenu        	= $(this).find('ul').first(),
//                                     prevMenu        	= $(this).closest('.next-menu'),
//                                     isSubMenu       	= currentMenuItem.hasClass('dropdown') || currentMenuItem.hasClass('dropdown-submenu'),
//                                     isBack          	= currentMenuItem.hasClass('back-button'),
//                                     nextMenuHeightDiff  = ( ( nextMenu.find('> li').length * nextMenu.find('> li').outerHeight() ) - nextMenu.outerHeight() ),
//                                     prevMenuHeightDiff  = ( ( prevMenu.find('> li').length * prevMenu.find('> li').outerHeight() ) - prevMenu.outerHeight() );
//
//                                 if( isSubMenu ) {
//                                     currentMenu.addClass('next-menu');
//                                     nextMenu.addClass('visible');
//                                     currentMenu.css({
//                                         overflow: 'visible',
//                                         'overflow-y': 'visible'
//                                     });
//
//                                     if( nextMenuHeightDiff > 0 ) {
//                                         nextMenu.css({
//                                             overflow: 'hidden',
//                                             'overflow-y': 'scroll'
//                                         });
//                                     }
//
//                                     for( i = 0; i < nextMenu.find('> li').length; i++ ) {
//                                         if( nextMenu.outerHeight() < ($('.header-row-side-header').outerHeight() - 100) ) {
//                                             nextMenu.css({
//                                                 height: nextMenu.outerHeight() + nextMenu.find('> li').outerHeight()
//                                             });
//                                         }
//                                     }
//
//                                     nextMenu.css({
//                                         'padding-top': nextMenuHeightDiff + 'px'
//                                     });
//                                 }
//
//                                 if( isBack ) {
//                                     currentMenu.parent().parent().removeClass('next-menu');
//                                     currentMenu.removeClass('visible');
//
//                                     if( prevMenuHeightDiff > 0 ) {
//                                         prevMenu.css({
//                                             overflow: 'hidden',
//                                             'overflow-y': 'scroll'
//                                         });
//                                     }
//                                 }
//
//                                 e.stopPropagation();
//                             });
//                         }
//                     }
//
//                     $(window).trigger('resize');
//
//                     if( $(window).width() > 991 ) {
//                         slideNavigation.build();
//                     }
//
//                     $(document).ready(function(){
//                         $(window).afterResize(function(){
//                             if( $(window).width() > 991 ) {
//                                 slideNavigation.build();
//                             }
//                         });
//                     });
//                 }
//
//                 // Header Nav Main Mobile Dark
//                 if($('.header-nav-main-mobile-dark').length) {
//                     $('#header:not(.header-transparent-dark-bottom-border):not(.header-transparent-light-bottom-border)').addClass('header-no-border-bottom');
//                 }
//
//                 // Keyboard Navigation / Accessibility
//                 if( $(window).width() > 991 ) {
//                     var focusFlag = false;
//                     $header.find('.header-nav-main nav > ul > li > a').on('focus', function(){
//
//                         if( $(window).width() > 991 ) {
//                             if( !focusFlag ) {
//                                 focusFlag = true;
//                                 $(this).trigger('blur');
//
//                                 self.focusMenuWithChildren();
//                             }
//                         }
//
//                     });
//                 }
//
//                 return this;
//             },
//
//             focusMenuWithChildren: function() {
//                 // Get all the link elements within the primary menu.
//                 var links, i, len,
//                     menu = document.querySelector( 'html:not(.side-header):not(.side-header-hamburguer-sidebar):not(.side-header-overlay-full-screen) .header-nav-main > nav' );
//
//                 if ( ! menu ) {
//                     return false;
//                 }
//
//                 links = menu.getElementsByTagName( 'a' );
//
//                 // Each time a menu link is focused or blurred, toggle focus.
//                 for ( i = 0, len = links.length; i < len; i++ ) {
//                     links[i].addEventListener( 'focus', toggleFocus, true );
//                     links[i].addEventListener( 'blur', toggleFocus, true );
//                 }
//
//                 //Sets or removes the .focus class on an element.
//                 function toggleFocus() {
//                     var self = this;
//
//                     // Move up through the ancestors of the current link until we hit .primary-menu.
//                     while ( -1 === self.className.indexOf( 'header-nav-main' ) ) {
//                         // On li elements toggle the class .focus.
//                         if ( 'li' === self.tagName.toLowerCase() ) {
//                             if ( -1 !== self.className.indexOf( 'accessibility-open' ) ) {
//                                 self.className = self.className.replace( ' accessibility-open', '' );
//                             } else {
//                                 self.className += ' accessibility-open';
//                             }
//                         }
//                         self = self.parentElement;
//                     }
//                 }
//             },
//
//             events: function() {
//                 var self    = this,
//                     $html   = $('html'),
//                     $header = $('#header'),
//                     $window = $(window),
//                     headerBodyHeight = $('.header-body').outerHeight();
//
//                 if( $header.hasClass('header') ) {
//                     $header = $('.header');
//                 }
//
//                 $header.find('a[href="#"]').on('click', function(e) {
//                     e.preventDefault();
//                 });
//
//                 // Mobile Arrows
//                 if( $html.hasClass('side-header-hamburguer-sidebar') ) {
//                     $header.find('.dropdown-toggle, .dropdown-submenu > a')
//                         .append('<i class="fas fa-chevron-down fa-chevron-right"></i>');
//                 } else {
//                     $header.find('.dropdown-toggle, .dropdown-submenu > a')
//                         .append('<i class="fas fa-chevron-down"></i>');
//                 }
//
//                 $header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-chevron-down, .dropdown-submenu a[href!="#"] .fa-chevron-down').on('click', function(e) {
//                     e.preventDefault();
//                     if ($window.width() < 992) {
//                         $(this).closest('li').toggleClass('open');
//
//                         // Adjust Header Body Height
//                         var height = ( $header.hasClass('header-effect-shrink') && $html.hasClass('sticky-header-active') ) ? theme.StickyHeader.options.stickyHeaderContainerHeight : headerBodyHeight;
//                         $('.header-body').animate({
//                             height: ($('.header-nav-main nav').outerHeight(true) + height) + 10
//                         }, 0);
//                     }
//                 });
//
//                 $header.find('li a.active').addClass('current-page-active');
//
//                 // Add Open Class
//                 $header.find('.header-nav-click-to-open .dropdown-toggle[href="#"], .header-nav-click-to-open .dropdown-submenu a[href="#"], .header-nav-click-to-open .dropdown-toggle > i').on('click', function(e) {
//                     if( !$('html').hasClass('side-header-hamburguer-sidebar') && $window.width() > 991 ) {
//                         e.preventDefault();
//                         e.stopPropagation();
//                     }
//
//                     if ($window.width() > 991) {
//                         e.preventDefault();
//                         e.stopPropagation();
//
//                         $header.find('li a.active').removeClass('active');
//
//                         if( $(this).prop('tagName') == 'I' ) {
//                             $(this).parent().addClass('active');
//                         } else {
//                             $(this).addClass('active');
//                         }
//
//                         if (!$(this).closest('li').hasClass('open')) {
//
//                             var $li = $(this).closest('li'),
//                                 isSub = false;
//
//                             if( $(this).prop('tagName') == 'I' ) {
//                                 $('#header .dropdown.open').removeClass('open');
//                                 $('#header .dropdown-menu .dropdown-submenu.open').removeClass('open');
//                             }
//
//                             if ( $(this).parent().hasClass('dropdown-submenu') ) {
//                                 isSub = true;
//                             }
//
//                             $(this).closest('.dropdown-menu').find('.dropdown-submenu.open').removeClass('open');
//                             $(this).parent('.dropdown').parent().find('.dropdown.open').removeClass('open');
//
//                             if (!isSub) {
//                                 $(this).parent().find('.dropdown-submenu.open').removeClass('open');
//                             }
//
//                             $li.addClass('open');
//
//                             $(document).off('click.nav-click-to-open').on('click.nav-click-to-open', function (e) {
//                                 if (!$li.is(e.target) && $li.has(e.target).length === 0) {
//                                     $li.removeClass('open');
//                                     $li.parents('.open').removeClass('open');
//                                     $header.find('li a.active').removeClass('active');
//                                     $header.find('li a.current-page-active').addClass('active');
//                                 }
//                             });
//
//                         } else {
//                             $(this).closest('li').removeClass('open');
//                             $header.find('li a.active').removeClass('active');
//                             $header.find('li a.current-page-active').addClass('active');
//                         }
//
//                         $window.trigger({
//                             type: 'resize',
//                             from: 'header-nav-click-to-open'
//                         });
//                     }
//                 });
//
//                 // Collapse Nav
//                 $header.find('[data-collapse-nav]').on('click', function(e) {
//                     $(this).parents('.collapse').removeClass('show');
//                 });
//
//                 // Top Features
//                 $header.find('.header-nav-features-toggle').on('click', function(e) {
//                     e.preventDefault();
//
//                     var $toggleParent = $(this).parent();
//
//                     if (!$(this).siblings('.header-nav-features-dropdown').hasClass('show')) {
//
//                         var $dropdown = $(this).siblings('.header-nav-features-dropdown');
//
//                         $('.header-nav-features-dropdown.show').removeClass('show');
//
//                         $dropdown.addClass('show');
//
//                         $(document).off('click.header-nav-features-toggle').on('click.header-nav-features-toggle', function (e) {
//                             if (!$toggleParent.is(e.target) && $toggleParent.has(e.target).length === 0) {
//                                 $('.header-nav-features-dropdown.show').removeClass('show');
//                             }
//                         });
//
//                         if ($(this).attr('data-focus')) {
//                             $('#' + $(this).attr('data-focus')).focus();
//                         }
//
//                     } else {
//                         $(this).siblings('.header-nav-features-dropdown').removeClass('show');
//                     }
//                 });
//
//                 // Hamburguer Menu
//                 var $hamburguerMenuBtn = $('.hamburguer-btn:not(.side-panel-toggle)'),
//                     $hamburguerSideHeader = $('#header.side-header, #header.side-header-overlay-full-screen');
//
//                 $hamburguerMenuBtn.on('click', function(){
//                     if($(this).attr('data-set-active') != 'false') {
//                         $(this).toggleClass('active');
//                     }
//                     $hamburguerSideHeader.toggleClass('side-header-hide');
//                     $html.toggleClass('side-header-hide');
//
//                     $window.trigger('resize');
//                 });
//
//                 // Toggle Side Header
//                 $('.toggle-side-header').on('click', function(){
//                     $('.hamburguer-btn-side-header.active').trigger('click');
//                 });
//
//                 $('.hamburguer-close:not(.side-panel-toggle)').on('click', function(){
//                     $('.hamburguer-btn:not(.hamburguer-btn-side-header-mobile-show)').trigger('click');
//                 });
//
//                 // Set Header Body Height when open mobile menu
//                 $('.header-nav-main nav').on('show.bs.collapse', function () {
//                     $(this).removeClass('closed');
//
//                     // Add Mobile Menu Opened Class
//                     $('html').addClass('mobile-menu-opened');
//
//                     $('.header-body').animate({
//                         height: ($('.header-body').outerHeight() + $('.header-nav-main nav').outerHeight(true)) + 10
//                     });
//
//                     // Header Below Slider / Header Bottom Slider - Scroll to menu position
//                     if( $('#header').is('.header-bottom-slider, .header-below-slider') && !$('html').hasClass('sticky-header-active') ) {
//                         self.scrollToTarget( $('#header'), 0 );
//                     }
//                 });
//
//                 // Set Header Body Height when collapse mobile menu
//                 $('.header-nav-main nav').on('hide.bs.collapse', function () {
//                     $(this).addClass('closed');
//
//                     // Remove Mobile Menu Opened Class
//                     $('html').removeClass('mobile-menu-opened');
//
//                     $('.header-body').animate({
//                         height: ($('.header-body').outerHeight() - $('.header-nav-main nav').outerHeight(true))
//                     }, function(){
//                         $(this).height('auto');
//                     });
//                 });
//
//                 // Header Effect Shrink - Adjust header body height on mobile
//                 $window.on('stickyHeader.activate', function(){
//                     if( $window.width() < 992 && $header.hasClass('header-effect-shrink') ) {
//                         if( $('.header-btn-collapse-nav').attr('aria-expanded') == 'true' ) {
//                             $('.header-body').animate({
//                                 height: ( $('.header-nav-main nav').outerHeight(true) + theme.StickyHeader.options.stickyHeaderContainerHeight ) + ( ($('.header-nav-bar').length) ? $('.header-nav-bar').outerHeight() : 0 )
//                             });
//                         }
//                     }
//                 });
//
//                 $window.on('stickyHeader.deactivate', function(){
//                     if( $window.width() < 992 && $header.hasClass('header-effect-shrink') ) {
//                         if( $('.header-btn-collapse-nav').attr('aria-expanded') == 'true' ) {
//                             $('.header-body').animate({
//                                 height: headerBodyHeight + $('.header-nav-main nav').outerHeight(true) + 10
//                             });
//                         }
//                     }
//                 });
//
//                 // Remove Open Class on Resize
//                 $window.on('resize.removeOpen', function(e) {
//                     if( e.from == 'header-nav-click-to-open' ) {
//                         return;
//                     }
//
//                     setTimeout(function() {
//                         if( $window.width() > 991 ) {
//                             $header.find('.dropdown.open').removeClass('open');
//                         }
//                     }, 100);
//                 });
//
//                 // Side Header - Change value of initial header body height
//                 $(document).ready(function(){
//                     if( $window.width() > 991 ) {
//                         var flag = false;
//
//                         $window.on('resize', function(e) {
//                             if( e.from == 'header-nav-click-to-open' ) {
//                                 return;
//                             }
//
//                             $header.find('.dropdown.open').removeClass('open');
//
//                             if( $window.width() < 992 && flag == false ) {
//                                 headerBodyHeight = $('.header-body').outerHeight();
//                                 flag = true;
//
//                                 setTimeout(function(){
//                                     flag = false;
//                                 }, 500);
//                             }
//                         });
//                     }
//                 });
//
//                 // Side Header - Set header height on mobile
//                 if( $html.hasClass('side-header') ) {
//                     if( $window.width() < 992 ) {
//                         $header.css({
//                             height: $('.header-body .header-container').outerHeight() + (parseInt( $('.header-body').css('border-top-width') ) + parseInt( $('.header-body').css('border-bottom-width') ))
//                         });
//                     }
//
//                     $(document).ready(function(){
//                         $window.afterResize(function(){
//                             if( $window.width() < 992 ) {
//                                 $header.css({
//                                     height: $('.header-body .header-container').outerHeight() + (parseInt( $('.header-body').css('border-top-width') ) + parseInt( $('.header-body').css('border-bottom-width') ))
//                                 });
//                             } else {
//                                 $header.css({
//                                     height: ''
//                                 });
//                             }
//                         });
//                     });
//                 }
//
//                 // Anchors Position
//                 if( $('[data-hash]').length ) {
//                     $('[data-hash]').on('mouseover', function(){
//                         var $this = $(this);
//
//                         if( !$this.data('__dataHashBinded') ) {
//                             var target = $this.attr('href'),
//                                 offset = ($this.is("[data-hash-offset]") ? $this.data('hash-offset') : 0),
//                                 delay  = ($this.is("[data-hash-delay]") ? $this.data('hash-delay') : 0),
//                                 force  = ($this.is("[data-hash-force]") ? true : false),
//                                 windowWidth = $(window).width();
//
//                             // Hash Offset SM
//                             if ($this.is("[data-hash-offset-sm]") && windowWidth > 576) {
//                                 offset = $this.data('hash-offset-sm');
//                             }
//
//                             // Hash Offset MD
//                             if ($this.is("[data-hash-offset-md]") && windowWidth > 768) {
//                                 offset = $this.data('hash-offset-md');
//                             }
//
//                             // Hash Offset LG
//                             if ($this.is("[data-hash-offset-lg]") && windowWidth > 992) {
//                                 offset = $this.data('hash-offset-lg');
//                             }
//
//                             // Hash Offset XL
//                             if ($this.is("[data-hash-offset-xl]") && windowWidth > 1200) {
//                                 offset = $this.data('hash-offset-xl');
//                             }
//
//                             // Hash Offset XXL
//                             if ($this.is("[data-hash-offset-xxl]") && windowWidth > 1400) {
//                                 offset = $this.data('hash-offset-xxl');
//                             }
//
//                             if( !$(target).length ) {
//                                 target = target.split('#');
//                                 target = '#'+target[1];
//                             }
//
//                             if( target.indexOf('#') != -1 && $(target).length) {
//                                 $this.on('click', function(e) {
//                                     e.preventDefault();
//
//                                     if( !$(e.target).is('i') || force ) {
//
//                                         setTimeout(function(){
//
//                                             // Close Collapse if open
//                                             $this.parents('.collapse.show').collapse('hide');
//
//                                             // Close Side Header
//                                             $hamburguerSideHeader.addClass('side-header-hide');
//                                             $html.addClass('side-header-hide');
//
//                                             $window.trigger('resize');
//
//                                             self.scrollToTarget(target, offset);
//
//                                             // Data Hash Trigger Click
//                                             if( $this.data('hash-trigger-click') ) {
//
//                                                 var $clickTarget = $( $this.data('hash-trigger-click') ),
//                                                     clickDelay = $this.data('hash-trigger-click-delay') ? $this.data('hash-trigger-click-delay') : 0;
//
//                                                 if( $clickTarget.length ) {
//
//                                                     setTimeout(function(){
//                                                         // If is a "Tabs" plugin link
//                                                         if( $clickTarget.closest('.nav-tabs').length ) {
//                                                             new bootstrap.Tab( $clickTarget[0] ).show();
//                                                         } else {
//                                                             $clickTarget.trigger('click');
//                                                         }
//
//                                                     }, clickDelay);
//                                                 }
//
//                                             }
//
//                                         }, delay);
//
//                                     }
//
//                                     return;
//                                 });
//                             }
//
//                             $(this).data('__dataHashBinded', true);
//                         }
//                     });
//                 }
//
//                 // Floating
//                 if($('#header.header-floating-icons').length) {
//
//                     $('#header.header-floating-icons [data-hash]').off().each(function() {
//
//                         var target = $(this).attr('href'),
//                             offset = ($(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0);
//
//                         if($(target).length) {
//                             $(this).on('click', function(e) {
//                                 e.preventDefault();
//
//                                 $('html, body').animate({
//                                     scrollTop: $(target).offset().top - offset
//                                 }, 600, 'easeOutQuad', function() {
//
//                                 });
//
//                                 return;
//                             });
//                         }
//
//                     });
//
//                 }
//
//                 // Side Panel Toggle
//                 if( $('.side-panel-toggle').length ) {
//                     var init_html_class = $('html').attr('class');
//
//                     $('.side-panel-toggle').on('click', function(e){
//                         var extra_class = $(this).data('extra-class'),
//                             delay       = ( extra_class ) ? 100 : 0,
//                             isActive    = $(this).data('is-active') ? $(this).data('is-active') : false;
//
//                         e.preventDefault();
//
//                         if( isActive ) {
//                             $('html').removeClass('side-panel-open');
//                             $(this).data('is-active', false);
//                             return false;
//                         }
//
//                         if( extra_class ) {
//                             $('.side-panel-wrapper').css('transition','none');
//                             $('html')
//                                 .removeClass()
//                                 .addClass( init_html_class )
//                                 .addClass( extra_class );
//                         }
//                         setTimeout(function(){
//                             $('.side-panel-wrapper').css('transition','');
//                             $('html').toggleClass('side-panel-open');
//                         }, delay);
//
//                         $(this).data('is-active', true);
//                     });
//
//                     $(document).on('click', function(e){
//                         if( !$(e.target).closest('.side-panel-wrapper').length && !$(e.target).hasClass('side-panel-toggle') ) {
//                             $('.hamburguer-btn.side-panel-toggle:not(.side-panel-close)').removeClass('active');
//                             $('html').removeClass('side-panel-open');
//                             $('.side-panel-toggle').data('is-active', false);
//                         }
//                     });
//                 }
//
//                 return this;
//             },
//
//             scrollToTarget: function(target, offset) {
//                 var self = this,
//                     targetPosition = $(target).offset().top;
//
//                 $('body').addClass('scrolling');
//
//                 $('html, body').animate({
//                     scrollTop: $(target).offset().top - offset
//                 }, self.options.scrollDelay, self.options.scrollAnimation, function() {
//                     $('body').removeClass('scrolling');
//
//                     // If by some reason the scroll finishes in a wrong position, this code will run the scrollToTarget() again until get the correct position
//                     // We need do it just one time to prevent infinite recursive loop at scrollToTarget() function
//                     if( $(target).offset().top !=  targetPosition) {
//                         $('html, body').animate({
//                             scrollTop: $(target).offset().top - offset
//                         }, 1, self.options.scrollAnimation, function() {});
//                     }
//                 });
//
//                 return this;
//
//             }
//
//         }
//
//     });
//
// }).apply(this, [window.theme, jQuery]);


// Newsletter
(function(theme, $) {

    theme = theme || {};

    var initialized = false;

    $.extend(theme, {

        Newsletter: {

            defaults: {
                wrapper: $('#newsletterForm')
            },

            initialize: function($wrapper, opts) {
                if (initialized) {
                    return this;
                }

                initialized = true;
                this.$wrapper = ($wrapper || this.defaults.wrapper);

                this
                    .setOptions(opts)
                    .build();

                return this;
            },

            setOptions: function(opts) {
                this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

                return this;
            },

            build: function() {
                if (!($.isFunction($.fn.validate))) {
                    return this;
                }

                var self = this,
                    $email = self.$wrapper.find('#newsletterEmail'),
                    $success = $('#newsletterSuccess'),
                    $error = $('#newsletterError');

                self.$wrapper.validate({
                    submitHandler: function(form) {

                        $.ajax({
                            type: 'POST',
                            url: self.$wrapper.attr('action'),
                            data: {
                                'email': $email.val()
                            },
                            dataType: 'json',
                            success: function(data) {
                                if (data.response == 'success') {

                                    $success.removeClass('d-none');
                                    $error.addClass('d-none');

                                    $email
                                        .val('')
                                        .blur()
                                        .closest('.control-group')
                                        .removeClass('success')
                                        .removeClass('error');

                                } else {

                                    $error.html(data.message);
                                    $error.removeClass('d-none');
                                    $success.addClass('d-none');

                                    $email
                                        .blur()
                                        .closest('.control-group')
                                        .removeClass('success')
                                        .addClass('error');

                                }
                            }
                        });

                    },
                    rules: {
                        newsletterEmail: {
                            required: true,
                            email: true
                        }
                    },
                    errorPlacement: function(error, element) {

                    }
                });

                return this;
            }

        }

    });

}).apply(this, [window.theme, jQuery]);

// Search
(function(theme, $) {

    theme = theme || {};

    var initialized = false;

    $.extend(theme, {

        Search: {

            defaults: {
                wrapper: $('#searchForm')
            },

            initialize: function($wrapper, opts) {
                if (initialized) {
                    return this;
                }

                initialized = true;
                this.$wrapper = ($wrapper || this.defaults.wrapper);

                this
                    .setOptions(opts)
                    .build();

                return this;
            },

            setOptions: function(opts) {
                this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

                return this;
            },

            build: function() {
                if (!($.isFunction($.fn.validate))) {
                    return this;
                }

                this.$wrapper.validate({
                    errorPlacement: function(error, element) {}
                });

                // Search Reveal
                theme.fn.execOnceTroughEvent( '#header', 'mouseover.search.reveal', function(){
                    $('.header-nav-features-search-reveal').each(function() {
                        var $el = $(this),
                            $header = $('#header'),
                            $html = $('html');

                        $el.find('.header-nav-features-search-show-icon').on('click', function() {
                            $el.addClass('show');
                            $header.addClass('search-show');
                            $html.addClass('search-show');
                            $('#headerSearch').focus();
                        });

                        $el.find('.header-nav-features-search-hide-icon').on('click', function() {
                            $el.removeClass('show');
                            $header.removeClass('search-show');
                            $html.removeClass('search-show');
                        });
                    });
                } );

                return this;
            }

        }

    });

}).apply(this, [window.theme, jQuery]);

// Sticky Header
// (function(theme, $) {x
//
//     theme = theme || {};
//
//     var initialized = false;
//
//     $.extend(theme, {
//
//         StickyHeader: {
//
//             defaults: {
//                 wrapper: $('#header'),
//                 headerBody: $('#header .header-body'),
//                 stickyEnabled: true,
//                 stickyEnableOnBoxed: true,
//                 stickyEnableOnMobile: false,
//                 stickyStartAt: 0,
//                 stickyStartAtElement: false,
//                 stickySetTop: 0,
//                 stickyEffect: '',
//                 stickyHeaderContainerHeight: false,
//                 stickyChangeLogo: false,
//                 stickyChangeLogoWrapper: true,
//                 stickyForce: false,
//                 stickyScrollUp: false,
//                 stickyScrollValue: 0
//             },
//
//             initialize: function($wrapper, opts) {
//                 if (initialized) {
//                     return this;
//                 }
//
//                 initialized = true;
//                 this.$wrapper = ($wrapper || this.defaults.wrapper);
//
//                 if( this.$wrapper.hasClass('header') ) {
//                     this.$wrapper = $('.header[data-plugin-options]');
//                 }
//
//                 this
//                     .setOptions(opts)
//                     .build()
//                     .events();
//
//                 return this;
//             },
//
//             setOptions: function(opts) {
//                 this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
//                 return this;
//             },
//
//             build: function() {
//                 if( $(window).width() < 992 && this.options.stickyEnableOnMobile == false ) {
//                     $('html').addClass('sticky-header-mobile-disabled');
//                     return this;
//                 }
//
//                 if (!this.options.stickyEnableOnBoxed && $('html').hasClass('boxed') || $('html').hasClass('side-header-hamburguer-sidebar') && !this.options.stickyForce || !this.options.stickyEnabled) {
//                     return this;
//                 }
//
//                 var self = this;
//
//                 if( self.options.wrapper.hasClass('header') ) {
//                     self.options.wrapper = $('.header');
//                     self.options.headerBody = $('.header .header-body');
//                 }
//
//                 var	$html = $('html'),
//                     $window = $(window),
//                     sideHeader = $html.hasClass('side-header'),
//                     initialHeaderTopHeight = self.options.wrapper.find('.header-top').outerHeight(),
//                     initialHeaderContainerHeight = self.options.wrapper.find('.header-container').outerHeight(),
//                     minHeight;
//
//                 // HTML Classes
//                 $html.addClass('sticky-header-enabled');
//
//                 if (parseInt(self.options.stickySetTop) < 0) {
//                     $html.addClass('sticky-header-negative');
//                 }
//
//                 if (self.options.stickyScrollUp) {
//                     $html.addClass('sticky-header-scroll-direction');
//                 }
//
//                 // Notice Top Bar First Load
//                 if( $('.notice-top-bar').get(0) ) {
//                     if (parseInt(self.options.stickySetTop) == 1 || self.options.stickyEffect == 'shrink') {
//                         $('.body').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
//                             setTimeout(function(){
//                                 if( !$html.hasClass('sticky-header-active') ) {
//                                     self.options.headerBody.animate({
//                                         top: $('.notice-top-bar').outerHeight()
//                                     }, 300, function(){
//                                         if( $html.hasClass('sticky-header-active') ) {
//                                             self.options.headerBody.css('top', 0);
//                                         }
//                                     });
//                                 }
//                             }, 0);
//                         });
//                     }
//                 }
//
//                 // Set Start At
//                 if(self.options.stickyStartAtElement) {
//
//                     var $stickyStartAtElement = $(self.options.stickyStartAtElement);
//
//                     $(window).on('scroll resize sticky.header.resize', function() {
//                         self.options.stickyStartAt = $stickyStartAtElement.offset().top;
//                     });
//
//                     $(window).trigger('sticky.header.resize');
//                 }
//
//                 // Define Min Height value
//                 if( self.options.wrapper.find('.header-top').get(0) ) {
//                     minHeight = ( initialHeaderTopHeight + initialHeaderContainerHeight );
//                 } else {
//                     minHeight = initialHeaderContainerHeight;
//                 }
//
//                 // Set Wrapper Min-Height
//                 if( !sideHeader ) {
//                     if( !$('.header-logo-sticky-change').get(0) ) {
//                         self.options.wrapper.css('height', self.options.headerBody.outerHeight());
//                     } else {
//                         $window.on('stickyChangeLogo.loaded', function(){
//                             self.options.wrapper.css('height', self.options.headerBody.outerHeight());
//                         });
//                     }
//
//                     if( self.options.stickyEffect == 'shrink' ) {
//
//                         // Prevent wrong visualization of header when reload on middle of page
//                         $(document).ready(function(){
//                             if( $window.scrollTop() >= self.options.stickyStartAt ) {
//                                 self.options.wrapper.find('.header-container').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
//                                     self.options.headerBody.css('position', 'fixed');
//                                 });
//                             } else {
//                                 if( !$html.hasClass('boxed') ) {
//                                     self.options.headerBody.css('position', 'fixed');
//                                 }
//                             }
//                         });
//
//                         self.options.wrapper.find('.header-container').css('height', initialHeaderContainerHeight);
//                         self.options.wrapper.find('.header-top').css('height', initialHeaderTopHeight);
//                     }
//                 }
//
//                 // Sticky Header Container Height
//                 if( self.options.stickyHeaderContainerHeight ) {
//                     self.options.wrapper.find('.header-container').css('height', self.options.wrapper.find('.header-container').outerHeight());
//                 }
//
//                 // Boxed
//                 if($html.hasClass('boxed') && self.options.stickyEffect == 'shrink') {
//                     self.boxedLayout();
//                 }
//
//                 // Check Sticky Header / Flags prevent multiple runs at same time
//                 var activate_flag   	 = true,
//                     deactivate_flag 	 = false,
//                     initialStickyStartAt = self.options.stickyStartAt;
//
//                 self.checkStickyHeader = function() {
//
//                     // Notice Top Bar
//                     var $noticeTopBar = $('.notice-top-bar');
//                     if ( $noticeTopBar.get(0) ) {
//                         self.options.stickyStartAt = ( $noticeTopBar.data('sticky-start-at') ) ? $noticeTopBar.data('sticky-start-at') : $('.notice-top-bar').outerHeight();
//                     } else {
//                         if( $html.hasClass('boxed') ) {
//                             self.options.stickyStartAt = initialStickyStartAt + 25;
//                         } else {
//                             self.options.stickyStartAt = initialStickyStartAt;
//                         }
//                     }
//
//                     if( $window.width() > 991 && $html.hasClass('side-header') ) {
//                         $html.removeClass('sticky-header-active');
//                         activate_flag = true;
//                         return;
//                     }
//
//                     if ($window.scrollTop() >= parseInt(self.options.stickyStartAt)) {
//                         if( activate_flag ) {
//                             self.activateStickyHeader();
//                             activate_flag = false;
//                             deactivate_flag = true;
//                         }
//                     } else {
//                         if( deactivate_flag ) {
//                             self.deactivateStickyHeader();
//                             deactivate_flag = false;
//                             activate_flag = true;
//                         }
//                     }
//
//                     // Scroll Up
//                     if (self.options.stickyScrollUp) {
//
//                         // Get the new Value
//                         self.options.stickyScrollNewValue = window.pageYOffset;
//
//                         //Subtract the two and conclude
//                         if(self.options.stickyScrollValue - self.options.stickyScrollNewValue < 0){
//                             $html.removeClass('sticky-header-scroll-up').addClass('sticky-header-scroll-down');
//                         } else if(self.options.stickyScrollValue - self.options.stickyScrollNewValue > 0){
//                             $html.removeClass('sticky-header-scroll-down').addClass('sticky-header-scroll-up');
//                         }
//
//                         // Update the old value
//                         self.options.stickyScrollValue = self.options.stickyScrollNewValue;
//
//                     }
//                 };
//
//                 // Activate Sticky Header
//                 self.activateStickyHeader = function() {
//                     if ($window.width() < 992) {
//                         if (self.options.stickyEnableOnMobile == false) {
//                             self.deactivateStickyHeader();
//                             self.options.headerBody.css({
//                                 position: 'relative'
//                             });
//                             return false;
//                         }
//                     } else {
//                         if (sideHeader) {
//                             self.deactivateStickyHeader();
//                             return;
//                         }
//                     }
//
//                     $html.addClass('sticky-header-active');
//
//                     // Sticky Effect - Reveal
//                     if( self.options.stickyEffect == 'reveal' ) {
//
//                         self.options.headerBody.css('top','-' + self.options.stickyStartAt + 'px');
//
//                         self.options.headerBody.animate({
//                             top: self.options.stickySetTop
//                         }, 400, function() {});
//
//                     }
//
//                     // Sticky Effect - Shrink
//                     if( self.options.stickyEffect == 'shrink' ) {
//
//                         // If Header Top
//                         if( self.options.wrapper.find('.header-top').get(0) ) {
//                             self.options.wrapper.find('.header-top').css({
//                                 height: 0,
//                                 'min-height': 0,
//                                 overflow: 'hidden'
//                             });
//                         }
//
//                         // Header Container
//                         if( self.options.stickyHeaderContainerHeight ) {
//                             self.options.wrapper.find('.header-container').css({
//                                 height: self.options.stickyHeaderContainerHeight,
//                                 'min-height': 0
//                             });
//                         } else {
//                             self.options.wrapper.find('.header-container').css({
//                                 height: (initialHeaderContainerHeight / 3) * 2, // two third of container height
//                                 'min-height': 0
//                             });
//
//                             var y = initialHeaderContainerHeight - ((initialHeaderContainerHeight / 3) * 2);
//                             $('.main').css({
//                                 transform: 'translate3d(0, -'+ y +'px, 0)',
//                                 transition: 'ease transform 300ms'
//                             }).addClass('has-sticky-header-transform');
//
//                             if($html.hasClass('boxed')) {
//                                 self.options.headerBody.css('position','fixed');
//                             }
//                         }
//
//                     }
//
//                     self.options.headerBody.css('top', self.options.stickySetTop);
//
//                     if (self.options.stickyChangeLogo) {
//                         self.changeLogo(true);
//                     }
//
//                     // Set Elements Style
//                     if( $('[data-sticky-header-style]').length ) {
//                         $('[data-sticky-header-style]').each(function() {
//                             var $el = $(this),
//                                 css = theme.fn.getOptions($el.data('sticky-header-style-active')),
//                                 opts = theme.fn.getOptions($el.data('sticky-header-style'));
//
//                             if( $window.width() > opts.minResolution ) {
//                                 $el.css(css);
//                             }
//                         });
//                     }
//
//                     $.event.trigger({
//                         type: 'stickyHeader.activate'
//                     });
//                 };
//
//                 // Deactivate Sticky Header
//                 self.deactivateStickyHeader = function() {
//                     $html.removeClass('sticky-header-active');
//
//                     if ( $(window).width() < 992 && self.options.stickyEnableOnMobile == false) {
//                         return false;
//                     }
//
//                     // Sticky Effect - Shrink
//                     if( self.options.stickyEffect == 'shrink' ) {
//
//                         // Boxed Layout
//                         if( $html.hasClass('boxed') ) {
//
//                             // Set Header Body Position Absolute
//                             self.options.headerBody.css('position','absolute');
//
//                             if( $window.scrollTop() > $('.body').offset().top ) {
//                                 // Set Header Body Position Fixed
//                                 self.options.headerBody.css('position','fixed');
//                             }
//
//                         } else {
//                             // Set Header Body Position Fixed
//                             self.options.headerBody.css('position','fixed');
//                         }
//
//                         // If Header Top
//                         if( self.options.wrapper.find('.header-top').get(0) ) {
//                             self.options.wrapper.find('.header-top').css({
//                                 height: initialHeaderTopHeight,
//                                 overflow: 'visible'
//                             });
//
//                             // Fix [data-icon] issue when first load is on middle of the page
//                             if( self.options.wrapper.find('.header-top [data-icon]').length ) {
//                                 theme.fn.intObsInit( '.header-top [data-icon]:not(.svg-inline--fa)', 'themePluginIcon' );
//                             }
//                         }
//
//                         // Header Container
//                         self.options.wrapper.find('.header-container').css({
//                             height: initialHeaderContainerHeight
//                         });
//
//                     }
//
//                     self.options.headerBody.css('top', 0);
//
//                     if (self.options.stickyChangeLogo) {
//                         self.changeLogo(false);
//                     }
//
//                     // Set Elements Style
//                     if( $('[data-sticky-header-style]').length ) {
//                         $('[data-sticky-header-style]').each(function() {
//                             var $el = $(this),
//                                 css = theme.fn.getOptions($el.data('sticky-header-style-deactive')),
//                                 opts = theme.fn.getOptions($el.data('sticky-header-style'));
//
//                             if( $window.width() > opts.minResolution ) {
//                                 $el.css(css);
//                             }
//                         });
//                     }
//
//                     $.event.trigger({
//                         type: 'stickyHeader.deactivate'
//                     });
//                 };
//
//                 // Always Sticky
//                 if (parseInt(self.options.stickyStartAt) <= 0) {
//                     self.activateStickyHeader();
//                 }
//
//                 // Set Logo
//                 if (self.options.stickyChangeLogo) {
//
//                     var $logoWrapper = self.options.wrapper.find('.header-logo'),
//                         $logo = $logoWrapper.find('img'),
//                         logoWidth = $logo.attr('width'),
//                         logoHeight = $logo.attr('height'),
//                         logoSmallTop = parseInt($logo.attr('data-sticky-top') ? $logo.attr('data-sticky-top') : 0),
//                         logoSmallWidth = parseInt($logo.attr('data-sticky-width') ? $logo.attr('data-sticky-width') : 'auto'),
//                         logoSmallHeight = parseInt($logo.attr('data-sticky-height') ? $logo.attr('data-sticky-height') : 'auto');
//
//                     if (self.options.stickyChangeLogoWrapper) {
//                         $logoWrapper.css({
//                             'width': $logo.outerWidth(true),
//                             'height': $logo.outerHeight(true)
//                         });
//                     }
//
//                     self.changeLogo = function(activate) {
//                         if(activate) {
//
//                             $logo.css({
//                                 'top': logoSmallTop,
//                                 'width': logoSmallWidth,
//                                 'height': logoSmallHeight
//                             });
//
//                         } else {
//
//                             $logo.css({
//                                 'top': 0,
//                                 'width': logoWidth,
//                                 'height': logoHeight
//                             });
//
//                         }
//                     }
//
//                     $.event.trigger({
//                         type: 'stickyChangeLogo.loaded'
//                     });
//
//                 }
//
//                 // Side Header
//                 var headerBodyHeight,
//                     flag = false;
//
//                 self.checkSideHeader = function() {
//                     if($window.width() < 992 && flag == false) {
//                         headerBodyHeight = self.options.headerBody.height();
//                         flag = true;
//                     }
//
//                     if(self.options.stickyStartAt == 0 && sideHeader) {
//                         self.options.wrapper.css('min-height', 0);
//                     }
//
//                     if(self.options.stickyStartAt > 0 && sideHeader && $window.width() < 992) {
//                         self.options.wrapper.css('min-height', headerBodyHeight);
//                     }
//                 }
//
//                 return this;
//             },
//
//             events: function() {
//                 var self = this;
//
//                 if( $(window).width() < 992 && this.options.stickyEnableOnMobile == false ) {
//                     return this;
//                 }
//
//                 if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || $('html').hasClass('side-header-hamburguer-sidebar') && !this.options.stickyForce || !this.options.stickyEnabled) {
//                     return this;
//                 }
//
//                 if (!self.options.alwaysStickyEnabled) {
//                     $(window).on('scroll resize', function() {
//                         if ( $(window).width() < 992 && self.options.stickyEnableOnMobile == false) {
//                             self.options.headerBody.css({
//                                 position: ''
//                             });
//
//                             if( self.options.stickyEffect == 'shrink' ) {
//                                 self.options.wrapper.find('.header-top').css({
//                                     height: ''
//                                 });
//                             }
//
//                             self.deactivateStickyHeader();
//                         } else {
//                             self.checkStickyHeader();
//                         }
//                     });
//                 } else {
//                     self.activateStickyHeader();
//                 }
//
//                 $(window).on('load resize', function(){
//                     self.checkSideHeader();
//                 });
//
//                 $(window).on('layout.boxed', function(){
//                     self.boxedLayout();
//                 });
//
//                 return this;
//             },
//
//             boxedLayout: function(){
//                 var self = this,
//                     $window = $(window);
//
//                 if($('html').hasClass('boxed') && self.options.stickyEffect == 'shrink') {
//                     if( (parseInt(self.options.stickyStartAt) == 0) && $window.width() > 991) {
//                         self.options.stickyStartAt = 30;
//                     }
//
//                     // Set Header Body Position Absolute
//                     self.options.headerBody.css({
//                         position: 'absolute',
//                         top: 0
//                     });
//
//                     // Set position absolute because top margin from boxed layout
//                     $window.on('scroll', function(){
//                         if( $window.scrollTop() > $('.body').offset().top ) {
//                             self.options.headerBody.css({
//                                 'position' : 'fixed',
//                                 'top' : 0
//                             });
//                         } else {
//                             self.options.headerBody.css({
//                                 'position' : 'absolute',
//                                 'top' : 0
//                             });
//                         }
//                     });
//                 }
//
//                 return this;
//             }
//
//         }
//
//     });
//
// }).apply(this, [window.theme, jQuery]);



// INIT
(function($) {

	'use strict';

	// Scroll to Top Button.
	if (typeof theme.PluginScrollToTop !== 'undefined') {
		theme.PluginScrollToTop.initialize();
	}

	// Tooltips
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  	return new bootstrap.Tooltip(tooltipTriggerEl)
	});

	// Popovers
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	  	return new bootstrap.Popover(popoverTriggerEl)
	});

	// Validations
	if ( $.isFunction($.validator) && typeof theme.PluginValidation !== 'undefined') {
		theme.PluginValidation.initialize();
	}

	// Animate
	if ($.isFunction($.fn['themePluginAnimate']) && $('[data-appear-animation]').length) {
		theme.fn.dynIntObsInit( '[data-appear-animation], [data-appear-animation-svg]', 'themePluginAnimate', theme.PluginAnimate.defaults );
	}

	// Animated Content
	if ($.isFunction($.fn['themePluginAnimatedContent'])) {
		theme.fn.intObsInit( '[data-plugin-animated-letters]:not(.manual), .animated-letters', 'themePluginAnimatedContent' );
		theme.fn.intObsInit( '[data-plugin-animated-words]:not(.manual), .animated-words', 'themePluginAnimatedContent' );
	}

	// Before / After
	if ($.isFunction($.fn['themePluginBeforeAfter']) && $('[data-plugin-before-after]').length) {
		theme.fn.intObsInit( '[data-plugin-before-after]:not(.manual)', 'themePluginBeforeAfter' );
	}

	// Carousel Light
	if ($.isFunction($.fn['themePluginCarouselLight']) && $('.owl-carousel-light').length) {
		theme.fn.intObsInit( '.owl-carousel-light', 'themePluginCarouselLight' );
	}

	// Carousel
	if ($.isFunction($.fn['themePluginCarousel']) && $('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').length) {
		theme.fn.intObsInit( '[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)', 'themePluginCarousel' );
	}

	// Chart.Circular
	if ($.isFunction($.fn['themePluginChartCircular']) && ( $('[data-plugin-chart-circular]').length || $('.circular-bar-chart').length )) {
		theme.fn.dynIntObsInit( '[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)', 'themePluginChartCircular', theme.PluginChartCircular.defaults );
	}

	// Countdown
	if ($.isFunction($.fn['themePluginCountdown']) && ( $('[data-plugin-countdown]').length || $('.countdown').length )) {
		theme.fn.intObsInit( '[data-plugin-countdown]:not(.manual), .countdown', 'themePluginCountdown' );
	}

	// Counter
	if ($.isFunction($.fn['themePluginCounter']) && ( $('[data-plugin-counter]').length || $('.counters [data-to]').length )) {
		theme.fn.dynIntObsInit( '[data-plugin-counter]:not(.manual), .counters [data-to]', 'themePluginCounter', theme.PluginCounter.defaults );
	}

	// Cursor Effect
	if ($.isFunction($.fn['themePluginCursorEffect']) && $('[data-plugin-cursor-effect]').length ) {
		theme.fn.intObsInit( '[data-plugin-cursor-effect]:not(.manual)', 'themePluginCursorEffect' );
	}

	// Float Element
	if ($.isFunction($.fn['themePluginFloatElement']) && $('[data-plugin-float-element]').length) {
		theme.fn.intObsInit( '[data-plugin-float-element], [data-plugin-float-element-svg]', 'themePluginFloatElement' );
	}

	// GDPR
	if ($.isFunction($.fn['themePluginGDPR']) && $('[data-plugin-gdpr]').length) {

		$(function() {
			$('[data-plugin-gdpr]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginGDPR(opts);
			});
		});

	}

	// GDPR Wrapper
	if ($.isFunction($.fn['themePluginGDPRWrapper']) && $('[data-plugin-gdpr-wrapper]').length) {

		$(function() {
			$('[data-plugin-gdpr-wrapper]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginGDPRWrapper(opts);
			});
		});

	}

	// Hover Effect
	if ($.isFunction($.fn['themePluginHoverEffect']) && $('[data-plugin-hover-effect], .hover-effect-3d').length) {
		theme.fn.intObsInit( '[data-plugin-hover-effect]:not(.manual), .hover-effect-3d:not(.manual)', 'themePluginHoverEffect' );
	}

	// Animated Icon
	// if ($.isFunction($.fn['themePluginIcon']) && $('[data-icon]').length) {
	// 	theme.fn.dynIntObsInit( '[data-icon]:not(.svg-inline--fa)', 'themePluginIcon', theme.PluginIcon.defaults );
	// }

	// In Viewport Style
	if ($.isFunction($.fn['themePluginInViewportStyle']) && $('[data-inviewport-style]').length) {

		$(function() {
			$('[data-inviewport-style]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginInViewportStyle(opts);
			});
		});

	}

	// Lightbox
	if ($.isFunction($.fn['themePluginLightbox']) && ( $('[data-plugin-lightbox]').length || $('.lightbox').length )) {
		theme.fn.execOnceTroughEvent( '[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)', 'mouseover.trigger.lightbox', function(){
			var $this = $(this),
				opts;

			var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
			if (pluginOptions)
				opts = pluginOptions;

			$this.themePluginLightbox(opts);
		});
	}

	// Masonry
	if ($.isFunction($.fn['themePluginMasonry']) && $('[data-plugin-masonry]').length) {

		$(function() {
			$('[data-plugin-masonry]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMasonry(opts);
			});
		});

	}

	// Match Height
	if ($.isFunction($.fn['themePluginMatchHeight']) && $('[data-plugin-match-height]').length) {

		$(function() {
			$('[data-plugin-match-height]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMatchHeight(opts);
			});
		});

	}

	// Parallax
	if ($.isFunction($.fn['themePluginParallax']) && $('[data-plugin-parallax]').length) {
		theme.fn.intObsInit( '[data-plugin-parallax]:not(.manual)', 'themePluginParallax' );
	}

	// Progress Bar
	if ($.isFunction($.fn['themePluginProgressBar']) && ( $('[data-plugin-progress-bar]') || $('[data-appear-progress-animation]').length )) {
		theme.fn.dynIntObsInit( '[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]', 'themePluginProgressBar', theme.PluginProgressBar.defaults );
	}

	// Random Images
	if ($.isFunction($.fn['themePluginRandomImages']) && $('[data-plugin-random-images]').length) {
		theme.fn.dynIntObsInit( '.plugin-random-images', 'themePluginRandomImages', theme.PluginRandomImages.defaults );
	}

	// Read More
	if ($.isFunction($.fn['themePluginReadMore']) && $('[data-plugin-readmore]').length) {
		theme.fn.intObsInit( '[data-plugin-readmore]:not(.manual)', 'themePluginReadMore' );
	}

	// Revolution Slider
	if ($.isFunction($.fn['themePluginRevolutionSlider']) && ( $('[data-plugin-revolution-slider]').length || $('.slider-container .slider').length )) {

		$(function() {
			$('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginRevolutionSlider(opts);
			});
		});

	}

	// Scroll Spy
	if ($.isFunction($.fn['themePluginScrollSpy']) && $('[data-plugin-scroll-spy]').length) {

		$(function() {
			$('[data-plugin-scroll-spy]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginScrollSpy(opts);
			});
		});

	}

	// Scrollable
	if ( $.isFunction($.fn[ 'nanoScroller' ]) && $('[data-plugin-scrollable]').length ) {
		theme.fn.intObsInit( '[data-plugin-scrollable]', 'themePluginScrollable' );
	}

	// Section Scroll
	if ($.isFunction($.fn['themePluginSectionScroll']) && $('[data-plugin-section-scroll]').length) {

		$(function() {
			$('[data-plugin-section-scroll]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSectionScroll(opts);
			});
		});

	}

	// Sort
	if ($.isFunction($.fn['themePluginSort']) && ( $('[data-plugin-sort]').length || $('.sort-source').length )) {
		theme.fn.intObsInit( '[data-plugin-sort]:not(.manual), .sort-source:not(.manual)', 'themePluginSort' );
	}

	// Star Rating
	if ($.isFunction($.fn['themePluginStarRating']) && $('[data-plugin-star-rating]').length) {
		theme.fn.intObsInit( '[data-plugin-star-rating]:not(.manual)', 'themePluginStarRating' );
	}

	// Sticky
	if ($.isFunction($.fn['themePluginSticky']) && $('[data-plugin-sticky]').length) {
		theme.fn.execOnceTroughWindowEvent( window, 'scroll.trigger.sticky', function(){
			$('[data-plugin-sticky]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSticky(opts);
			});
		});
	}

	// Toggle
	if ($.isFunction($.fn['themePluginToggle']) && $('[data-plugin-toggle]').length) {
		theme.fn.intObsInit( '[data-plugin-toggle]:not(.manual)', 'themePluginToggle' );
	}

	// Tweets
	if ($.isFunction($.fn['themePluginTweets']) && $('[data-plugin-tweets]').length) {

		$(function() {
			$('[data-plugin-tweets]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginTweets(opts);
			});
		});

	}

	// Video Background
	if ($.isFunction($.fn['themePluginVideoBackground']) && $('[data-plugin-video-background]').length) {
		theme.fn.intObsInit( '[data-plugin-video-background]:not(.manual)', 'themePluginVideoBackground' );
	}

	// Sticky Header
	if (typeof theme.StickyHeader !== 'undefined') {
		theme.StickyHeader.initialize();
	}

	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}

	// Search
	if (typeof theme.Search !== 'undefined' && ( $('#searchForm').length || $('.header-nav-features-search-reveal').length )) {
		theme.Search.initialize();
	}

	// Newsletter
	if (typeof theme.Newsletter !== 'undefined' && $('#newsletterForm').length) {
		theme.fn.intObs( '#newsletterForm', 'theme.Newsletter.initialize();', {} );
	}

	// Account
	if (typeof theme.Account !== 'undefined' && ( $('#headerAccount').length || $('#headerSignUp').length || $('#headerSignIn').length || $('#headerRecover').length || $('#headerRecoverCancel').length )) {
		theme.Account.initialize();
	}

}).apply(this, [jQuery]);
