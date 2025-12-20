var xi=Object.defineProperty,ki=Object.defineProperties;var Ci=Object.getOwnPropertyDescriptors;var He=Object.getOwnPropertySymbols;var _i=Object.prototype.hasOwnProperty,wi=Object.prototype.propertyIsEnumerable;var We=(e,t,o)=>t in e?xi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))_i.call(t,o)&&We(e,o,t[o]);if(He)for(var o of He(t))wi.call(t,o)&&We(e,o,t[o]);return e},T=(e,t)=>ki(e,Ci(t));var Ge=e=>t=>{var o=e[t];if(o)return o();throw new Error("Module not found in bundle: "+t)};var I=(e,t)=>()=>(e&&(t=e(e=0)),t);var L=(e,t,o)=>new Promise((i,s)=>{var r=d=>{try{a(o.next(d))}catch(m){s(m)}},u=d=>{try{a(o.throw(d))}catch(m){s(m)}},a=d=>d.done?i(d.value):Promise.resolve(d.value).then(r,u);a((o=o.apply(e,t)).next())});import Ei from"jquery";var Ye=I(()=>{(function(e){e.timeago=function(a){return a instanceof Date?r(a):r(typeof a=="string"?e.timeago.parse(a):typeof a=="number"?new Date(a):e.timeago.datetime(a))};var t=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,
strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"\
%d years",wordSeparator:" ",numbers:[]}},inWords:function(a){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var d=this.settings.strings,m=d.prefixAgo,h=d.suffixAgo;if(this.settings.allowFuture&&a<0&&(m=d.prefixFromNow,h=d.suffixFromNow),
!this.settings.allowPast&&a>=0)return this.settings.strings.inPast;var g=Math.abs(a)/1e3,f=g/60,b=f/60,C=b/24,_=C/365;function w(H,U){var ne=e.isFunction(H)?H(U,a):H,Y=d.numbers&&d.numbers[U]||U;return ne.replace(/%d/i,Y)}var V=g<45&&w(d.seconds,Math.round(g))||g<90&&w(d.minute,1)||f<45&&w(d.minutes,Math.round(f))||f<90&&
w(d.hour,1)||b<24&&w(d.hours,Math.round(b))||b<42&&w(d.day,1)||C<30&&w(d.days,Math.round(C))||C<45&&w(d.month,1)||C<365&&w(d.months,Math.round(C/30))||_<1.5&&w(d.year,1)||w(d.years,Math.round(_)),E=d.wordSeparator||"";return d.wordSeparator===void 0&&(E=" "),e.trim([m,V,h].join(E))},parse:function(a){var d=e.trim(a);return d=
(d=(d=(d=(d=d.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(d)},datetime:function(a){var d=t.isTime(a)?e(a).attr("datetime"):e(a).attr("title");return t.parse(d)},isTime:function(a){return e(
a).get(0).tagName.toLowerCase()==="time"}});var o={init:function(){o.dispose.call(this);var a=e.proxy(i,this);a();var d=t.settings;d.refreshMillis>0&&(this._timeagoInterval=setInterval(a,d.refreshMillis))},update:function(a){var d=a instanceof Date?a:t.parse(a);e(this).data("timeago",{datetime:d}),t.settings.localeTitle&&
e(this).attr("title",d.toLocaleString()),i.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:t.parse(t.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))}),i.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function i(){
var a=t.settings;if(a.autoDispose&&!e.contains(document.documentElement,this))return e(this).timeago("dispose"),this;var d=s(this);return isNaN(d.datetime)||(a.cutoff===0||Math.abs(u(d.datetime))<a.cutoff?e(this).text(r(d.datetime)):e(this).attr("title").length>0&&e(this).text(e(this).attr("title"))),this}function s(a){
if(!(a=e(a)).data("timeago")){a.data("timeago",{datetime:t.datetime(a)});var d=e.trim(a.text());t.settings.localeTitle?a.attr("title",a.data("timeago").datetime.toLocaleString()):!(d.length>0)||t.isTime(a)&&a.attr("title")||a.attr("title",d)}return a.data("timeago")}function r(a){return t.inWords(u(a))}function u(a){return new Date().
getTime()-a.getTime()}e.fn.timeago=function(a,d){var m=a?o[a]:o.init;if(!m)throw new Error("Unknown function name '"+a+"' for timeago");return this.each((function(){m.call(this,d)})),this},document.createElement("abbr"),document.createElement("time")})(Ei)});var Ri={};import Xe from"jquery";var et=I(()=>{Xe.timeago.settings.strings=T(S({},Xe.timeago.settings.strings),{prefixAgo:"vor",prefixFromNow:"in"})});var Li={};import tt from"jquery";var ot=I(()=>{tt.timeago.settings.strings=T(S({},tt.timeago.settings.strings),{prefixAgo:"\u03C0\u03C1\u03B9\u03BD",prefixFromNow:"\u03C3\u03B5"})});var Bi={};import it from"jquery";var nt=I(()=>{it.timeago.settings.strings=T(S({},it.timeago.settings.strings),{suffixAgo:"ago",suffixFromNow:"from now"})});var Pi={};import st from"jquery";var rt=I(()=>{st.timeago.settings.strings=T(S({},st.timeago.settings.strings),{prefixAgo:"hace",prefixFromNow:"dentro de"})});var Ni={};import at from"jquery";var lt=I(()=>{at.timeago.settings.strings=T(S({},at.timeago.settings.strings),{prefixAgo:"il y a",prefixFromNow:"d'ici"})});var Mi={};import dt from"jquery";var ct=I(()=>{dt.timeago.settings.strings=T(S({},dt.timeago.settings.strings),{prefixFromNow:"fra",suffixAgo:"fa"})});var $i={};import Ui from"jquery";import qi from"dynamic";var P,ut=I(()=>{re();P=qi.i18n.translations.ja.datetime.distance_in_words;Ui.timeago.settings.strings={seconds:y(P.x_seconds),minute:y(P.x_minutes),minutes:y(P.x_minutes),hour:y(P.about_x_hours),hours:y(P.about_x_hours),day:y(P.x_days),days:y(P.x_days),month:y(P.
about_x_months),months:y(P.about_x_months),year:y(P.about_x_years),years:y(P.about_x_years),prefixFromNow:"\u4ECA\u304B\u3089",suffixAgo:"\u524D",suffixFromNow:"\u5F8C",wordSeparator:""}});var ji={};import pt from"jquery";var mt=I(()=>{pt.timeago.settings.strings=T(S({},pt.timeago.settings.strings),{suffixAgo:"atr\xE1s",suffixFromNow:"a partir de agora"})});var Hi={};import zi from"jquery";import Vi from"dynamic";function N(e,{translationKey:t}){var o=e%10;return o==1?e===1||e>20?y(j[t].one):y(j[t].many):o>1&&o<5&&(e<10||e>20)?y(j[t].few):y(j[t].many)}var j,ft=I(()=>{re();j=Vi.i18n.translations.ru.datetime.distance_in_words;j.about_x_years={one:j.about_x_years.few,few:j.about_x_years.
many,many:j.about_x_years.one,other:j.about_x_years.other};zi.timeago.settings.strings={seconds:e=>N(e,{translationKey:"x_seconds"}),minute:e=>N(e,{translationKey:"x_minutes"}),minutes:e=>N(e,{translationKey:"x_minutes"}),hour:e=>N(e,{translationKey:"about_x_hours"}),hours:e=>N(e,{translationKey:"about_x_hours"}),day:e=>N(
e,{translationKey:"x_days"}),days:e=>N(e,{translationKey:"x_days"}),month:e=>N(e,{translationKey:"about_x_months"}),months:e=>N(e,{translationKey:"about_x_months"}),year:e=>N(e,{translationKey:"about_x_years"}),years:e=>N(e,{translationKey:"about_x_years"}),prefixFromNow:"\u0447\u0435\u0440\u0435\u0437",suffixAgo:"\u043D\u0430\u0437\u0430\
\u0434",wordSeparator:" "}});var Wi={};import ht from"jquery";var bt=I(()=>{ht.timeago.settings.strings=T(S({},ht.timeago.settings.strings),{suffixAgo:"\xF6nce"})});var Gi={};import gt from"jquery";var vt=I(()=>{gt.timeago.settings.strings=T(S({},gt.timeago.settings.strings),{suffixAgo:"ago",suffixFromNow:"from now"})});var Ki={};import Zi from"jquery";import Ji from"dynamic";var M,yt=I(()=>{re();M=Ji.i18n.translations.zh.datetime.distance_in_words;Zi.timeago.settings.strings={seconds:y(M.x_seconds),minute:y(M.x_minutes),minutes:y(M.x_minutes),hour:y(M.about_x_hours),hours:y(M.about_x_hours),day:y(M.x_days),days:y(M.x_days),month:y(M.
about_x_months),months:y(M.about_x_months),year:y(M.about_x_years),years:y(M.about_x_years),suffixAgo:"\u4E4B\u524D",suffixFromNow:"\u4E4B\u540E",wordSeparator:""}});var Qi,Ee=I(()=>{Qi=Ge({"../vendor/jquery/timeago/de.js":()=>Promise.resolve().then(()=>(et(),Ri)),"../vendor/jquery/timeago/el.js":()=>Promise.resolve().then(()=>(ot(),Li)),"../vendor/jquery/timeago/en.js":()=>Promise.resolve().then(()=>(nt(),Bi)),"../vendor/jquery/timeago/es.js":()=>Promise.resolve().then(()=>(rt(),Pi)),
"../vendor/jquery/timeago/fr.js":()=>Promise.resolve().then(()=>(lt(),Ni)),"../vendor/jquery/timeago/it.js":()=>Promise.resolve().then(()=>(ct(),Mi)),"../vendor/jquery/timeago/ja.js":()=>Promise.resolve().then(()=>(ut(),$i)),"../vendor/jquery/timeago/pt.js":()=>Promise.resolve().then(()=>(mt(),ji)),"../vendor/jquery/ti\
meago/ru.js":()=>Promise.resolve().then(()=>(ft(),Hi)),"../vendor/jquery/timeago/tr.js":()=>Promise.resolve().then(()=>(bt(),Wi)),"../vendor/jquery/timeago/us.js":()=>Promise.resolve().then(()=>(vt(),Gi)),"../vendor/jquery/timeago/zh.js":()=>Promise.resolve().then(()=>(yt(),Ki))})});import A from"jquery";import Yi from"jquery";import xt from"dynamic";function y(e){return e.replace(/{count}/,"%d")}function en(){let e=ge;ge==="us"&&(e="en");let t=xt.i18n.translations[e].datetime.distance_in_words,o={seconds:i=>i===1?t.x_seconds.one:y(t.x_seconds.other),minute:t.x_minutes.one,minutes:y(t.x_minutes.other),
hour:t.about_x_hours.one,hours:y(t.about_x_hours.other),day:t.x_days.one,days:y(t.x_days.other),month:t.about_x_months.one,months:y(t.about_x_months.other),year:t.about_x_years.one,years:y(t.about_x_years.other),wordSeparator:" "};Yi.timeago.settings.strings=o}function ae(){var e=arguments.length>=2?arguments[1]:"utc",
t=arguments[0],o=t.getAttribute("data-"+e),i=parseInt(o);return isNaN(i)?null:new Date(i)}function tn(){A("span[data-timeago]").each(function(){var e=A(this),t=ae(this,"timeago");t!=null&&e.text(A.timeago(t))}),A("td[data-utc], abbr[data-utc], .te-time").each(function(){var e=A(this),t=ae(this);e.attr("data-bs-original\
-title",A.timeago(t))}),A("a[data-timeago-title],button[data-timeago-title]").each(function(){let e=A(this),t=ae(this,"timeago-title");if(t!=null){let i=(e.attr("title")||e.data("bs-original-title")).replace("%{timeago}",A.timeago(t));e.attr("title",i)}})}var ge,Xi,re=I(()=>{Ye();Ee();ge=xt.i18n.locale,Xi=["ja","ru","z\
h"];Xi.includes(ge)||en();Qi(`../vendor/jquery/timeago/${ge}.js`);A(function(){A.timeago.settings.allowFuture=!0,A.timeago.parse=function(i){var s=A.trim(i),r=parseInt(s);return isNaN(r)&&(r=Date.parse(s)),new Date(r)};var e=0;A.timeago.now=function(){var i=A("#now");if(i.length===1){var s=ae(i,"timeago");i.remove(),e=
new Date().getTime()-s.getTime()}return new Date().getTime()-e},tn();function t(){let i=A(this),s;if(i.data("now")===!0?s=new Date:s=ae(this),s!=null){let r=i.data("format")||"f";i.html(A.format(s,r))}}let o=function(){A("span[data-utc]").each(t)};window.timeUpdateUTCRun=o})});import{SHA1 as fa,copyTextToClipboard as ha}from"utils";(function(){function e(t,o,i,s){this.name=t,this.navigationHTML=s,this.submited=!1,this.ready=!1,this.delay=o,this.requirements=i;var r=this;this.navElReady=function(){r.ready||(r.ready=!0,e.trigger())},e.registry[t]=this}e.prototype.requirementsMeet=function(){for(var t=0;t<this.requirements.length;++t)if(!e.registry[this.
requirements[t]].ready)return!1;return!0},e.prototype.navigationEnabled=function(){return!window.URL||new URL(window.location.href).searchParams.getAll("postpone").indexOf(this.name)===-1},e.prototype.tryStartLoading=function(){if(!this.submited&&this.requirementsMeet()&&this.navigationEnabled()){console.log("submittin\
g ["+new Date+"] "+this.name);var t=document.getElementById("cont-"+this.name);if(t){t.innerHTML=this.navigationHTML;let u=document.forms["form-"+this.name];(!u.onsubmit||u.onsubmit())&&u.submit()}else{var o="frame-"+this.name,i=document.getElementsByName(o)[0],s=window.frames[o],r=s.document;r.body.innerHTML=this.navigationHTML;
let u=r.forms["form-"+this.name];(!u.onsubmit||u.onsubmit())&&u.submit(),setTimeout(this.navElReady,this.delay),i.onload=this.navElReady}this.submited=!0}},e.registry={},e.trigger=function(){var t=e.registry;for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&t[o].tryStartLoading()},window.Navigation=e})();import{Cookies as De}from"utils";import X from"jquery";import{axios as Qe}from"utils";import Si from"jquery";(function(e){let t='<span data-spin-count=1 class="spinner-border spinner-border-sm" id="spinner"></span>';e.fn.spin=function(){return this.append(t)},e.fn.spinIncr=function(){var o=this.next("#spinner");if(o.length===0)return this.after(t);var i=parseInt(o.attr("data-spin-count"));return o.attr(
"data-spin-count",i+1),o},e.fn.spinDecr=function(){var o=this.next("#spinner");if(o.length>0){var i=parseInt(o.attr("data-spin-count"))-1;i>0?o.attr("data-spin-count",i):o.remove()}return this},e.fn.stopSpin=function(){return this.next("#spinner").remove(),this.find("#spinner").remove(),this},e.stopAllSpins=function(){
e("#spinner").remove()}})(Si);import{Popover as Ii,Tooltip as Oi}from"bootstrap";import fe from"dynamic";var ka=fe.symbols;function Ze(e=1){return new Promise(t=>setTimeout(t,e))}function Je({start:e,element:t,onFinish:o}){t.text(e);let i=e,s=setInterval(()=>{i--,t.text(i),i||(clearInterval(s),t.text(e),o())},1e3)}var Ti=fe.i18n.locale,Ai=fe.i18n.translations[Ti],Fi=fe.i18n.translations.en,Ke=(Ai||Fi).js;var Ae=location.protocol==="https:";function k({url:e,method:t,params:o,body:i,timeout:s=5e4}){var m;let u={Accept:"application/javascript","X-Requested-With":"XMLHttpRequest","X-CSRF-Token":(m=document.querySelector('meta[name="csrf-token"]'))==null?void 0:m.content,"Cache-Control":"no-cache"},a={url:e,method:t,params:o,data:i,headers:u,timeout:s};function d(h){
let{request:g}=h;if(!(g!=null&&g.readyState)||!(g!=null&&g.status)||location.href.includes("/surebets?format=json"))return;X.stopAllSpins(),X(document).trigger("close.facebox"),window.trackEvent("AjaxError",h.message),console.error(`Request error: ${h.message}`);let f="ajax-error-"+new Date().getTime();X.flashError(Ke.
internal_error,"ajax_internal_error",f),setTimeout(function(){X("."+f).remove()},6e4)}return Qe.interceptors.response.use(function(h){var f;return(f=h.headers["content-type"])!=null&&f.match(/(text|application)\/javascript/)&&Di(h.data),h},function(h){return d(h),Promise.reject(h)}),Qe(a)}function Di(e){let t=document.
createElement("script"),o=document.querySelector("meta[name=csp-nonce]");t.setAttribute("nonce",o==null?void 0:o.content),t.text=e,document.head.appendChild(t).parentNode.removeChild(t)}function Fe(){X('[data-bs-toggle="tooltip"]').each((e,t)=>{new Oi(t)})}function Ie(){X('[data-bs-toggle="popover"]').each((e,t)=>{new Ii(
t,{html:!0,sanitize:!1})}).click(e=>{e.preventDefault()})}function se({name:e,value:t}){let o=new CustomEvent(e,{detail:t});document.dispatchEvent(o)}var B=document.querySelector('meta[name="session-data"]').dataset,Ia=JSON.parse(B.isStaff),Oe=B.domain,Oa=B.serviceWorkerPath,Da=parseInt(B.selectedAudioIndex),Ea=JSON.parse(B.isUserLoggedIn),he=JSON.parse(B.isCompactView),Ra=JSON.parse(B.isNewSurebetsAutoupdateAvailable),La=JSON.parse(B.productPageMaximumLimit),Ba=JSON.
parse(B.productPageUltimateLimit),Pa=JSON.parse(B.isUserComplexConditionsAvailable),Na=B.requestMethod;function ee(e,t,{expiresIn:o=365}={}){De.set(e,t,{expires:o,path:"/",secure:Ae,domain:Oe})}function q(e){return De.get(e)}function be(e){De.remove(e,{path:"/",secure:Ae,domain:Oe})}re();import{Popover as gi,Tooltip as ba,Modal as vi,Dropdown as yi}from"bootstrap";import x from"jquery";import"jquery-plugins";import on from"jquery";(function(e){var t=function(){s(),e(document).off("mouseover",t)},o=function(r){var u=document.domain.split(/\./),a=u.length,d=document.getElementById(r);d&&(d.value=u[a-2]+"_atabamba")},i=function(r){var u=document.domain.split(/\./),a=u.length,d=document.getElementById(r),m="support&#64;"+u[a-2]+
"."+u[a-1];d&&(d.innerHTML=m,d.href=d.href+m.replace("&#64;","@"))},s=function(){o("feedback_nospam"),o("feedback_nospam_mini")};e(function(){i("mmm"),i("mmmm")}),e(document).on("mouseover",t)})(on);import O from"jquery";var Re={req:{}};function nn(e){let t=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,o=new t({iceServers:[]}),i=function(){},s={},r=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;function u(a){s[a]||e(a),s[a]=!0}o.createDataChannel(""),o.createOffer().then(a=>{a.
sdp.split(`
`).forEach(d=>{d.indexOf("candidate")<0||d.match(r).forEach(u)}),o.setLocalDescription(a,i,i)}).catch(a=>{console.error(a)}),o.onicecandidate=a=>{var d,m;(m=(d=a==null?void 0:a.candidate)==null?void 0:d.candidate)!=null&&m.match(r)&&a.candidate.candidate.match(r).forEach(u)}}function sn(){return L(this,null,function*(){
var H;yield Ze();function e(U){O("#admin-info-local-ip").text(U)}nn(e);let{loadEventEnd:t,navigationStart:o,responseEnd:i,requestStart:s,responseStart:r}=performance.timing,a=`${(t-o)/1e3}s`;O("#admin-info-popover #admin-info-full-time").text(a);let m=`${(i-s)/1e3}s`;O("#admin-info-popover #admin-info-response-time").text(
m);let g=`${(r-s)/1e3}s`;O("#admin-info-popover #admin-info-ttf-time").text(g);let f=Re.req.duration,b;f&&(b=`${f}s`);let C=Re.req.description,_;C!=="status=200"&&(_=C);let w=[b,_].filter(U=>U).join(" ");O("#admin-info-popover #admin-info-proxy-info").text(w);let V=(H=O("#footer-time").data())==null?void 0:H.time,E;V&&
(E=`${parseFloat(V)}s`),O("#admin-info-popover #admin-info-server-time").text(E)})}function rn(){return L(this,null,function*(){if(!PerformanceObserver)return;function e(i){Re[i.name]=i}function t(i){i.serverTiming&&i.serverTiming.forEach(e)}function o(i){i.getEntries().forEach(t)}new PerformanceObserver(o).observe({entryTypes:[
"navigation"]})})}O(function(){rn(),O("#analytics-sql th").click(e=>{let t=O(e.target).data("order-by");if(t){let o=O("<input>").attr({type:"hidden",name:"query[order_by]",value:t});O("#analytics-form").append(o).submit()}}),O(".show-details").on("click",()=>{O(".details-block").removeClass("d-none")}),O(document).on("\
show.bs.popover","#admin-info",sn)});import K from"jquery";K.flashError=function(e,t,o){K("#"+t).remove();var i='<div class="alert alert-danger alert-dismissible '+o+'" id="'+t+'"><div class="btn-close"></div>'+e+"</div>";K("div.paginate-and, h2.table-title, h1.table-title").first().before(i)};K(function(){K(document).on("click",".alert .btn-close",function(){K(this).parent().
remove()}).on("click","#system-message .btn-close, .close-button",function(){var e=K(this);e.spin(),e.parent().remove();function t(){e.stopSpin()}k({url:e.data("post-url"),method:"post"}).finally(t)})});import $ from"jquery";window.movePostTo=function(e){var t=$("input.psel:checked"),o=t.length==0?1:t.length,i=prompt("Enter discussion id to move ("+o+" post(s))");if(i){var s=$.map(t,function(r){return $(r).val()});k({url:e,method:"post",body:{discussion_id:i,ids:s}})}};window.deletePost=function(e){var t=$("input.psel:checked"),o=t.length==
0?1:t.length,i=confirm("Delete "+o+" post(s)?");if(i){var s=$.map(t,function(r){return $(r).val()});k({url:e,method:"delete",body:{ids:s}})}};$(function(){var e=function(){var t="";return window.getSelection?t=window.getSelection():document.getSelection?t=document.getSelection():document.selection?t=document.selection.
createRange().text:t="",t.toString()};$(".quote").click(function(){var t=$(this).parents("tbody.post"),o=e();if(o===""){var i=t.find(".ptext").clone();i.find("blockquote").remove(),o=i.text()}o=o.trim().replace(/^/gm,"> ");var s=t.find(".nickname").text(),r=$("#post_text").focus(),u=r.val();return u&&(u=u+`

`),r.val(u+"> _@"+s+`_:
`+o+`
`),!1})});import le from"jquery";import{createApp as an}from"vue";var ve=null;le(document).on("click",".go-direct-payment",function(){function e(h,g,f,b){var C=document.getElementById("auto_payment");let _=document.getElementById("dont_remember");var w=C&&C.checked,V=_&&_.checked,E='<input type="hidden" name="type" value="'+g+'"\
 /><input type="hidden" name="currency" value="'+f+'" />';b&&(E+='<input type="hidden" name="repeat" value="'+b+'" />'),w&&(E+='<input type="hidden" name="auto_payment" value="1"/>'),V&&(E+='<input type="hidden" name="dont_remember" value="1"/>'),h.append(E),document.body.classList.add("disabled"),window.onunload=function(){
document.body.classList.remove("disabled")},h.submit()}var t=le(this),o=t.closest("form"),i={amount:null};ve==null&&(ve=!1,le(document).on("reveal.facebox",function(){var h=document.querySelector("#facebox .payment-repeat-confirm,.payment-wait-confirm");if(h!=null){var g=o.find("input:checked").closest("tbody").find("t\
d[data-currency-original]");g.length>0?(i.expectedAmount=g.data("currency-original"),i.infoFormatted=g.data("info-formatted")):(i.expectedAmount=o.find("#amount").val(),i.infoFormatted=""),ve=an({data(){return i},methods:{submitForm(){e(o,this.paymentType,this.paymentCurrency,this.paymentRepeat)}}}),ve.mount(h)}}));var s=t.
data("payment-type"),r=t.data("payment-currency"),u=t.data("payment-repeat"),a=t.data("payment-repeat-method"),d=t.data("payment-confirm"),m=t.data("payment-delay");if(i.paymentType=s,i.paymentCurrency=r,i.paymentRepeat=u,i.paymentRepeatMethod=a,m)return le.facebox({div:m}),!1;if(d)return le.facebox({div:"#xrepeat-conf\
irm-block"}),!1;e(o,s,r,u)});import D from"jquery";import{copyTextToClipboard as ln}from"utils";D(document).on("click","button.mass-navigation",e=>{let t=e.target;D(t).closest("tbody").find("a.value_link").each((i,s)=>{window.open(s.href,`w${i}`,"noopener")}),e.preventDefault()});D(document).on("click",".calculator_link, td.event>a, td.value>div>a\
.value_link",e=>{let t=e.target;t.tagName=="FONT"&&(t=t.closest("a"));let o=D(t).closest("tbody").find(".report-other-option");if(o.length){let i=JSON.stringify(o.closest(".options-menu").data("comb-json")),s=D(t).closest("tbody").data("formula"),r=D(t).hasClass("calculator_link")||D(t).parent().hasClass("calculator_li\
nk"),u;r?u=new URL(D(t).closest("form")[0].action):u=new URL(t.href),u.searchParams.set("json_body",i),u.searchParams.set("formula",s),D(t).parent().hasClass("event")&&D(t).data("copy-name")&&ln(D(t).text()),r?D(t).closest("form").attr("action",u):(D(t).addClass("visited"),D(t).attr("href",u))}});document.addEventListener("show.bs.modal",function(){var e,t;(t=(e=document.querySelector("main"))==null?void 0:e.classList)==null||t.add("overflow-hidden")});document.addEventListener("hide.bs.modal",function(){var e,t;(t=(e=document.querySelector("main"))==null?void 0:e.classList)==null||t.remove("overflow-hidden")});import F from"jquery";import{Modal as dn}from"bootstrap";var kt=/^[\p{L}\p{N}\p{S}\p{P}\p{Z}]+$/u;function cn(e){let o=F(e.target).find("#send-user-report"),i=dn.getOrCreateInstance("#user-report-modal"),s=F(e.relatedTarget),r=s.closest("tbody"),u=r.data("id"),a=s.parents(".options-menu").data("comb-json"),d=r.data("product-model");function m(){
let h=F("#message-report-text"),g=F("#invalid-report-short-text"),f=F("#invalid-report-long-text"),b=F("#invalid-report-symbols-in-text");if(h.val().length<3)g.css("display","block");else if(h.val().length>255)f.css("display","block");else if(!h.val().match(kt))b.css("display","block");else{let C=function(){h.val(""),i.
hide()},_=function(){return!1},w=function(){o.attr("disabled",!1)};o.attr("disabled",!0),k({url:"/create_issue",method:"post",body:{model:d,comb:a,comb_id:u,comment:h.val(),star_reason:"error"}}).then(C).catch(_).finally(w),o[0].removeEventListener("click",m)}}o[0].addEventListener("click",m)}function un(e){let t=F("#i\
nvalid-report-short-text"),o=F("#invalid-report-long-text"),i=F("#invalid-report-symbols-in-text");F(e.target).val().length>=3&&t.css("display","none"),F(e.target).val().length<=255&&o.css("display","none"),F(e.target).val().match(kt)&&i.css("display","none")}function pn(e){let t=F(e.target),o=t.find("#send-user-report"),
i=function(){let u=o[0],a=u.cloneNode(!0);u.parentNode.replaceChild(a,u)},s=function(){t.find("#message-report-text").val("")};(function(){o.attr("disabled",!1)})(),s(),i()}F(function(){F(document).on("show.bs.modal","#user-report-modal",cn),F(document).on("hide.bs.modal","#user-report-modal",pn),F(document).on("input",
"#message-report-text",un)});import mr from"jquery";function mn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Le=mn;var fn=typeof global=="object"&&global&&global.Object===Object&&global,Ct=fn;var hn=typeof self=="object"&&self&&self.Object===Object&&self,bn=Ct||hn||Function("return this")(),_t=bn;var gn=/\s/;function vn(e){for(var t=e.length;t--&&gn.test(e.charAt(t)););return t}var wt=vn;var yn=/^\s+/;function xn(e){return e&&e.slice(0,wt(e)+1).replace(yn,"")}var St=xn;var kn=_t.Symbol,z=kn;var Tt=Object.prototype,Cn=Tt.hasOwnProperty,_n=Tt.toString,de=z?z.toStringTag:void 0;function wn(e){var t=Cn.call(e,de),o=e[de];try{e[de]=void 0;var i=!0}catch(r){}var s=_n.call(e);return i&&(t?e[de]=o:delete e[de]),s}var At=wn;var Sn=Object.prototype,Tn=Sn.toString;function An(e){return Tn.call(e)}var Ft=An;var Fn="[object Null]",In="[object Undefined]",It=z?z.toStringTag:void 0;function On(e){return e==null?e===void 0?In:Fn:It&&It in Object(e)?At(e):Ft(e)}var Ot=On;function Dn(e){return e!=null&&typeof e=="object"}var Dt=Dn;var En="[object Symbol]";function Rn(e){return typeof e=="symbol"||Dt(e)&&Ot(e)==En}var ye=Rn;var Et=NaN,Ln=/^[-+]0x[0-9a-f]+$/i,Bn=/^0b[01]+$/i,Pn=/^0o[0-7]+$/i,Nn=parseInt;function Mn(e){if(typeof e=="number")return e;if(ye(e))return Et;if(Le(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Le(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=St(e);var o=Bn.test(e);return o||Pn.test(e)?Nn(e.slice(2),o?
2:8):Ln.test(e)?Et:+e}var Rt=Mn;var Lt=1/0,Un=17976931348623157e292;function qn(e){if(!e)return e===0?e:0;if(e=Rt(e),e===Lt||e===-Lt){var t=e<0?-1:1;return t*Un}return e===e?e:0}var Bt=qn;function $n(e){var t=Bt(e),o=t%1;return t===t?o?t-o:t:0}var Pt=$n;var jn="Expected a function";function zn(e,t){var o;if(typeof t!="function")throw new TypeError(jn);return e=Pt(e),function(){return--e>0&&(o=t.apply(this,arguments)),e<=1&&(t=void 0),o}}var Nt=zn;function Vn(e){return Nt(2,e)}var Be=Vn;function Hn(e,t){for(var o=-1,i=e==null?0:e.length,s=Array(i);++o<i;)s[o]=t(e[o],o,e);return s}var Mt=Hn;var Wn=Array.isArray,Ut=Wn;var Gn=1/0,qt=z?z.prototype:void 0,$t=qt?qt.toString:void 0;function jt(e){if(typeof e=="string")return e;if(Ut(e))return Mt(e,jt)+"";if(ye(e))return $t?$t.call(e):"";var t=e+"";return t=="0"&&1/e==-Gn?"-0":t}var zt=jt;function Zn(e){return e==null?"":zt(e)}var G=Zn;function Jn(e,t,o){var i=-1,s=e.length;t<0&&(t=-t>s?0:s+t),o=o>s?s:o,o<0&&(o+=s),s=t>o?0:o-t>>>0,t>>>=0;for(var r=Array(s);++i<s;)r[i]=e[i+t];return r}var Vt=Jn;function Kn(e,t,o){var i=e.length;return o=o===void 0?i:o,!t&&o>=i?e:Vt(e,t,o)}var Ht=Kn;var Qn="\\ud800-\\udfff",Yn="\\u0300-\\u036f",Xn="\\ufe20-\\ufe2f",es="\\u20d0-\\u20ff",ts=Yn+Xn+es,os="\\ufe0e\\ufe0f",is="\\u200d",ns=RegExp("["+is+Qn+ts+os+"]");function ss(e){return ns.test(e)}var xe=ss;function rs(e){return e.split("")}var Wt=rs;var Gt="\\ud800-\\udfff",as="\\u0300-\\u036f",ls="\\ufe20-\\ufe2f",ds="\\u20d0-\\u20ff",cs=as+ls+ds,us="\\ufe0e\\ufe0f",ps="["+Gt+"]",Pe="["+cs+"]",Ne="\\ud83c[\\udffb-\\udfff]",ms="(?:"+Pe+"|"+Ne+")",Zt="[^"+Gt+"]",Jt="(?:\\ud83c[\\udde6-\\uddff]){2}",Kt="[\\ud800-\\udbff][\\udc00-\\udfff]",fs="\\u200d",Qt=ms+"?",Yt="\
["+us+"]?",hs="(?:"+fs+"(?:"+[Zt,Jt,Kt].join("|")+")"+Yt+Qt+")*",bs=Yt+Qt+hs,gs="(?:"+[Zt+Pe+"?",Pe,Jt,Kt,ps].join("|")+")",vs=RegExp(Ne+"(?="+Ne+")|"+gs+bs,"g");function ys(e){return e.match(vs)||[]}var Xt=ys;function xs(e){return xe(e)?Xt(e):Wt(e)}var eo=xs;function ks(e){return function(t){t=G(t);var o=xe(t)?eo(t):void 0,i=o?o[0]:t.charAt(0),s=o?Ht(o,1).join(""):t.slice(1);return i[e]()+s}}var to=ks;var Cs=to("toUpperCase"),oo=Cs;function _s(e){return oo(G(e).toLowerCase())}var io=_s;function ws(e,t,o,i){var s=-1,r=e==null?0:e.length;for(i&&r&&(o=e[++s]);++s<r;)o=t(o,e[s],s,e);return o}var no=ws;function Ss(e){return function(t){return e==null?void 0:e[t]}}var so=Ss;var Ts={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"\
i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"A\
e",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"\
e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",
\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"\
r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",
\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},As=so(Ts),ro=As;var Fs=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Is="\\u0300-\\u036f",Os="\\ufe20-\\ufe2f",Ds="\\u20d0-\\u20ff",Es=Is+Os+Ds,Rs="["+Es+"]",Ls=RegExp(Rs,"g");function Bs(e){return e=G(e),e&&e.replace(Fs,ro).replace(Ls,"")}var ao=Bs;var Ps=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Ns(e){return e.match(Ps)||[]}var lo=Ns;var Ms=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Us(e){return Ms.test(e)}var co=Us;var ho="\\ud800-\\udfff",qs="\\u0300-\\u036f",$s="\\ufe20-\\ufe2f",js="\\u20d0-\\u20ff",zs=qs+$s+js,bo="\\u2700-\\u27bf",go="a-z\\xdf-\\xf6\\xf8-\\xff",Vs="\\xac\\xb1\\xd7\\xf7",Hs="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ws="\\u2000-\\u206f",Gs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u\
2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",vo="A-Z\\xc0-\\xd6\\xd8-\\xde",Zs="\\ufe0e\\ufe0f",yo=Vs+Hs+Ws+Gs,xo="['\u2019]",uo="["+yo+"]",Js="["+zs+"]",ko="\\d+",Ks="["+bo+"]",Co="["+go+"]",_o="[^"+ho+yo+ko+bo+go+vo+"]",Qs="\\ud83c[\\udffb-\\udfff]",Ys="(?:"+Js+"|"+Qs+")",Xs="[^"+ho+"]",
wo="(?:\\ud83c[\\udde6-\\uddff]){2}",So="[\\ud800-\\udbff][\\udc00-\\udfff]",te="["+vo+"]",er="\\u200d",po="(?:"+Co+"|"+_o+")",tr="(?:"+te+"|"+_o+")",mo="(?:"+xo+"(?:d|ll|m|re|s|t|ve))?",fo="(?:"+xo+"(?:D|LL|M|RE|S|T|VE))?",To=Ys+"?",Ao="["+Zs+"]?",or="(?:"+er+"(?:"+[Xs,wo,So].join("|")+")"+Ao+To+")*",ir="\\d*(?:1st|2nd\
|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",sr=Ao+To+or,rr="(?:"+[Ks,wo,So].join("|")+")"+sr,ar=RegExp([te+"?"+Co+"+"+mo+"(?="+[uo,te,"$"].join("|")+")",tr+"+"+fo+"(?="+[uo,te+po,"$"].join("|")+")",te+"?"+po+"+"+mo,te+"+"+fo,nr,ir,ko,rr].join("|"),"g");function lr(e){return e.
match(ar)||[]}var Fo=lr;function dr(e,t,o){return e=G(e),t=o?void 0:t,t===void 0?co(e)?Fo(e):lo(e):e.match(t)||[]}var Io=dr;var cr="['\u2019]",ur=RegExp(cr,"g");function pr(e){return function(t){return no(Io(ao(t).replace(ur,"")),e,"")}}var ke=pr;var bc=ke(function(e,t,o){return t=t.toLowerCase(),e+(o?io(t):t)});var yc=ke(function(e,t,o){return e+(o?"_":"")+t.toLowerCase()});(function(){var e=Be(function(){k({url:"/user_additional_params/ad_checker",method:"post"})});mr(document).on("click","div#close_ads_flash",e)})();import ie from"jquery";import{Popover as qo,Tooltip as $o,Dropdown as wr}from"bootstrap";import Sr from"dynamic";import{createApp as Tr,nextTick as Ar}from"vue";function Oo(e,t){let o=Object.keys(t),i=new RegExp(o.map(function(s){return"(?:%?\\{"+s+"\\})"}).join("|"),"g");return e.replace(i,function(s){return t[s.match(/%?{(.+)}/)[1]]})}import{copyTextToClipboard as Fr}from"utils";function Do({value:e}){return e.toString().replace(/,/g,".").replace(/[\s_]/g,"")}function Eo({value:e,format:t,allowEmpty:o=!0}){if(!e)return o;let i=Do({value:e});switch(t){case"eu":return i>1&&i<1e5;case"us":return i>=100&&i<1e7||i<=-100&&i>-1e7;case"uk":{let r=function(a){return a>0&&a<1e5},s=!!i.match(/^\d+\/\d+$/),u=!!i.split("/").every(r);return s&&u}case"hk":return i>0&&i<1e5;case"my":return i>
0&&i<1e5||i<0&&i>-2e3;case"pr":return i>0&&i<100}}function Ro(e,t){e.classList.toggle("is-invalid",t)}var Lo=(function(){var e=function(t,o){var i=t,s,r=[[1,0],[0,1]];if(o<=0)throw"Max denominator should be greater then 0";for(;r[1][0]*(s=parseInt(t))+r[1][1]<=o;){var u=r[0][0]*s+r[0][1];if(r[0][1]=r[0][0],r[0][0]=u,u=r[1][0]*s+r[1][1],r[1][1]=r[1][0],r[1][0]=u,t==s||(t=1/(t-s),t>2147483647))break}var a=r[0][0],d=r[1][0],
m=i-a/d;s=(o-r[1][1])/r[1][0],r[0][0]=r[0][0]*s+r[0][1],r[1][0]=r[1][0]*s+r[1][1];var h=r[0][0],g=r[1][0],f=i-h/g;return[m,[a,d],f,[h,g]]};return function(t,o){var i=e(parseFloat(t),parseInt(o));return Math.abs(i[0])<Math.abs(i[2])?i[1]:i[3]}})();var Me={eu:{toDecimal:function(e){return Number(e)},fromDecimal:function(e){return Number(e).toFixed(3)}},us:{toDecimal:function(e){return e=Number(e),e>=0?(e+100)/100:(100+Math.abs(e))/Math.abs(e)},fromDecimal:function(e){return e=Number(e>=2?100*(e-1):-100/(e-1)).toFixed(0),e>0?"+"+e:e}},uk:{toDecimal:function(e){var t=e.
split("/");return parseFloat(t[0])/parseFloat(t[1])+1},fromDecimal:function(e){let[t,o]=Lo(e-1,100);return`${Math.round(t)}/${o}`}},hk:{toDecimal:function(e){return(Number(e)+1).toFixed(3)},fromDecimal:function(e){return(Number(e)-1).toFixed(3)}},my:{toDecimal:function(e){return e=Number(e),(e>=0?e+1:1-1/e).toFixed(3)},
fromDecimal:function(e){return e=Number(e),(e<=2?e-1:1/(1-e)).toFixed(3)}},pr:{toDecimal:function(e){return(1/(Number(e.replace("%",""))/100)).toFixed(3)},fromDecimal:function(e){return(1/Number(e)*100).toFixed(2)}}};function Ue({num:e,oddsFormat:t}){if(e){if(t==="uk")return e}else return null;let o=parseFloat(e);return t==="eu"?o/1e3>=1?`${o%1e3===0?"":"~"}${Math.round(o/1e3)}k`:o/100>=1?`${o%1===0?"":"~"}${Math.round(o)}`:o.toString():o.toString()}var Bo={template:`
    <button
      class="btn btn-secondary dropdown-toggle"
      data-bs-toggle="dropdown"
    />

    <ul
      class="dropdown-menu filter-country-select-dropdown"
      :class="{
        mobile: isCompactView
      }"
    >
      <li
        v-if="isRenderUserCountryOption"
      >
        <div
          class="dropdown-item"
          v-text="userCountryName"
          @click="handleUserCountryOptionClick"
        />
      </li>

      <li
        v-if="selectedCountryCode"
      >
        <div
          class="dropdown-item"
          v-text="allCountriesText"
          @click="handleAllCountriesOptionClick"
        />
      </li>

      <li
        v-if="isRenderFirstGroupDivider"
      >
        <hr class="dropdown-divider">
      </li>

      <li
        v-for="[countryName, countryCode] in countriesWithCodes"
        :key="countryCode"
      >
        <div
          class="dropdown-item"
          v-text="countryName"
          @click="handleCountryOptionClick({
            countryName,
            countryCode
          })"
        />
      </li>
    </ul>
  `,inject:["isCompactView"],props:{isUseCountry:{type:Boolean,required:!0},countriesWithCodes:{type:Array,required:!0},userCountryCode:String,userCountryName:String},emits:["countryOptionClick"],data(){return{selectedCountryCode:null}},computed:{allCountriesText(){return this.$t("filter.popular.list.countries.all")},isRenderUserCountryOption(){
return this.userCountryCode&&!this.isUserCountrySelected},isUserCountrySelected(){return this.userCountryCode===this.selectedCountryCode},isRenderFirstGroupDivider(){return this.isRenderUserCountryOption||this.selectedCountryCode}},beforeMount(){this.isUseCountry&&(this.selectedCountryCode=this.userCountryCode)},methods:{
handleUserCountryOptionClick(){let e={countryName:this.userCountryName,countryCode:this.userCountryCode};this.setCountryNameAndCode(e)},setCountryNameAndCode({countryName:e,countryCode:t}){this.selectedCountryCode=t;let o={countryName:e,countryCode:t};this.$emit("countryOptionClick",o)},handleAllCountriesOptionClick(){
let e={countryName:null,countryCode:null};this.setCountryNameAndCode(e)},handleCountryOptionClick({countryName:e,countryCode:t}){let o={countryName:e,countryCode:t};this.setCountryNameAndCode(o)}}};function Po({app:e}){return e.component("country-select-button",Bo),{template:`
          <button
            v-bind="$attrs"
            class="btn btn-secondary"
            v-text="popularTextComputed"
            @click="handleClick"
          />

          <country-select-button
            :is-use-country="isUseCountry"
            :user-country-name="userCountryName"
            :user-country-code="userCountryCode"
            :countries-with-codes="countriesWithCodes"
            @country-option-click="handleCountryOptionClick"
          />
        `,inject:["isCompactView"],props:{isUseCountry:{type:Boolean,required:!0},userCountryCode:String,userCountryName:String,countriesWithCodes:Array},emits:["click"],data(){return{countryCodeComputed:null,countryNameComputed:null}},computed:{popularTextComputed(){return this.countryCodeComputed?this.popularCountryText:
this.popularText},popularCountryText(){return this.$t("filter.popular.button.country",{country:this.popularCountryTextUserCountryComputed})},popularCountryTextUserCountryComputed(){return this.isCompactView?this.countryCodeFormatted:this.countryNameComputed},popularText(){return this.$t("filter.popular.button.all")},inputTextFormatted(){
return`TOP:${this.inputText}`},inputText(){return this.countryCodeComputed?this.countryCodeFormatted:"ALL"},countryCodeFormatted(){return this.countryCodeComputed.toUpperCase()}},beforeMount(){this.isUseCountry&&(this.countryCodeComputed=this.userCountryCode,this.countryNameComputed=this.userCountryName)},methods:{handleClick(){
this.$emit("click",this.inputTextFormatted)},handleCountryOptionClick({countryName:t,countryCode:o}){this.countryNameComputed=t,this.countryCodeComputed=o,this.handleClick()}}}}import{createI18n as Ir}from"vue-i18n";import{Tooltip as fr,Popover as hr}from"bootstrap";import No from"jquery";var Mo,oe,qe,Q,ce=!1,br=400,gr=2e3;function ue(e){e.addEventListener("touchstart",function(o){vr(o,e)},{passive:!0}),e.addEventListener("touchend",yr),e.addEventListener("click",function(o){(ce||Q)&&(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation())},
{capture:!0});let t=e.parentElement;for(;t;){if(t.hasAttribute&&t.hasAttribute("tabindex")&&t.hasAttribute("data-bs-toggle")&&t.getAttribute("data-bs-toggle")==="popover"){let o=t;o.addEventListener("focus",function(i){if(oe||Q||ce){i.preventDefault(),i.stopPropagation(),o.blur();let s=hr.getInstance(o);s&&s.hide()}},{
capture:!0})}t=t.parentElement}}function vr(e,t){oe||(ce=!1,xr(),_r(),Ce(),oe=setTimeout(function(){Mo(e,t)},br))}function yr(){oe?Uo():(qe=setTimeout(()=>{Ce(),ce=!1},gr),setTimeout(Cr,100))}function Uo(){clearTimeout(oe),oe=null}function xr(){clearTimeout(qe),qe=null}function kr(e){Q=fr.getOrCreateInstance(e),Q.show()}
function Ce(){Q&&Q.hide(),Q=null}function Cr(){No("body").one("click",Ce)}function _r(){No("body").off("click",Ce)}Mo=function(e,t){Uo(),ce=!0,kr(t)};var{locale:Or,translations:Dr}=Sr.i18n,Er=Ir({locale:Or,messages:Dr,fallbackLocale:"en"}),$e=location.pathname,zo=!1;function Vo(){let e=$e.replace("/","");be(`filter.${e}.settings.hash`),zo=!0}var Rr=function(e){var t=document.getElementById("bookies-filter");if(!t)return;function o(n){Vo(),e("#selector_bookies_settin\
gs").val(n),e(document).trigger("close.facebox"),i(),e("#dq").submit().find(":input").prop("readonly",!0).prop("disabled",!0)}function i(){let n=e("#dq"),l=e(".search-narrow"),c=e("#narrow"),p=l.val();c.length===0?e("<input>").attr({type:"hidden",id:"narrow",name:"narrow",value:p}).appendTo(n):c.val(p)}e(document).on("\
click","#bookies-filter .dropdown-menu",function(n){n.stopPropagation()});var s=`
        <div
            class="sbk-menu"
            :class="{
                child: isTwin
            }"
        >
            <div
                ref="bookmakerItemOptionsButton"
                class="btn-group me-1 position-static"
            >
                <button
                    ref="dropdown"
                    class="btn-site dropdown-toggle dropdown-toggle-split bk-menu-trigger"
                    data-bs-auto-close="outside"
                    :class="{
                        'visibly-disabled': isDisabledTwin
                    }"
                    @click.once="handleShowDropdownButtonClick"
                />
            
                <div
                    v-if="activeDropdown && !isDisabledTwin"
                    class="dropdown-menu bk-menu"
                >
                    <form>
                        <span
                            v-if="!hide.required"
                            class="form-check ps-0"
                        >
                            <input
                                type="checkbox"
                                class="me-1"
                                :id="'bs_' + bookie.id + '_required'"
                                v-model="bookie.required"
                            >

                            <label
                                :for="'bs_' + bookie.id + '_required'"
                                v-text="texts.required"
                            />

                            <br>
                        </span>

                        <span
                            v-if="!hide.monocombs"
                            class="form-check ps-0"
                        >
                            <input
                                type="checkbox"
                                class="me-1"
                                :id="'bs_' + bookie.id + '_monocombs'"
                                v-model="bookie.monocombs"
                            >

                            <label
                                :for="'bs_' + bookie.id + '_monocombs'"
                                v-text="texts.monocombs"
                            />

                            <br>
                        </span>
                        
                        <span v-if="!hide.generative" class="form-check ps-0">
                            
                            <label :for="'bs_' + bookie.id + '_generative'" v-text="texts.generative"/>
                            
                            <input class="mx-1" type="radio" :id="'bs_' + bookie.id + '_generative' + '_yes'" value="0" v-model="bookie.generative" />
                            <label class="mx-1" :for="'bs_' + bookie.id + '_generative' + '_yes'">{{ texts.generative_buttons.yes }}</label>
                            
                            <span v-if="isUltimatePlanEnabled" ref="disableGenerativeRadioButton" tabindex="0">
                                <input :disabled="!isExcludeGenerativeEnabled" class="mx-1" type="radio" :id="'bs_' + bookie.id + '_generative' + '_no'" value="1" v-model="bookie.generative" />
                                <label class="mx-1" :for="'bs_' + bookie.id + '_generative' + '_no'">{{ texts.generative_buttons.no }}</label>
                            </span>
                            
                            <input class="mx-1" type="radio" :id="'bs_' + bookie.id + '_generative' + '_any'" value="2" v-model="bookie.generative" />
                            <label class="mx-1" :for="'bs_' + bookie.id + '_generative' + '_any'">{{ texts.generative_buttons.any }}</label>

                            <br>
                        </span>

                        <div class="d-inline-block">
                            <custom-validation-input
                                ref="odd_min_input"
                                name-ref="min"
                                :id="'bs_' + bookie.id + '_odd_min'"
                                v-model="bookie.odd_min"
                            />

                            <label
                                :for="'bs_' + bookie.id + '_odd_min'"
                                v-text="texts.odd_min"
                            />

                            <div
                                class="invalid-tooltip position-relative"
                                v-text="texts.validation_odds_tooltip"
                            />
                        </div>

                        <br>

                        <div class="d-inline-block">
                            <custom-validation-input
                                ref="odd_max_input"
                                name-ref="max"
                                :id="'bs_' + bookie.id + '_odd_max'"
                                v-model="bookie.odd_max"
                            />

                            <label
                                :for="'bs_' + bookie.id + '_odd_max'"
                                v-text="texts.odd_max"
                            />

                            <div
                                class="invalid-tooltip position-relative"
                                v-text="texts.validation_odds_tooltip"
                            />
                        </div>
                        
                        <div class="dropdown-divider" />

                        <div class="btn-group">
                            <a
                                v-if="isBookmakersSettingsAvailable"
                                class="btn-site bookmaker-settings-button"
                                :href="formatBookmakerSettingsPath(bookie)"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="manual"
                                data-bs-delay='{"show":150, "hide": 0}'
                                data-bs-placement="top"
                                :title="texts.bookie_settings"
                                @click="handleBookmakerSettingsLinkClick"
                                @auxclick="handleBookmakerSettingsLinkClick"
                            >
                                <i class="fa fa-cog" />
                            </a>
                            <span
                                v-else
                                data-bs-toggle="popover"
                                :data-bs-content="bookmakersSettingsPopupContent"
                                tabindex="0"
                            >
                                <span
                                    class="btn-site bookmaker-settings-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="manual"
                                    data-bs-delay='{"show":150, "hide": 0}'
                                    data-bs-placement="top"
                                    :title="texts.bookie_settings"
                                >
                                    <i class="fa fa-cog" />
                                </span>
                            </span>

                            <label
                                class="btn-site hide-bookie mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="manual"
                                data-bs-delay='{"show":150, "hide": 0}'
                                data-bs-placement="top"
                                :title="texts.bookie_delete"
                                @click="hideBookie"
                            >
                                <i class="fa fa-trash-alt" />
                            </label>

                            <bookmaker-copy-link-button
                                :bookmaker-link="bookie.link"
                            />
                        </div>
                      
                        <div
                            v-if="bookie.parent"
                            class="dropdown-divider"
                        />

                        <!-- TODO: \u043A\u0430\u043A-\u0442\u043E \u043F\u043E \u0434\u0440\u0443\u0433\u043E\u043C\u0443, \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043B\u0438\u0437\u043A\u043E \u043E\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A -->
                        <span
                            v-if="bookie.parent"
                            class="dropdown-item text-body-secondary px-0"
                        >
                            {{ templateRender(texts.eqiv_of, {item: bookie.parent.name}) }}
                        </span>
                    </form>
                </div>
            </div>
          
            <div
                ref="bookmakerItem"
                class="ps-4 form-check form-check-inline"
                tabindex="0"
                :class="{
                    required: bookie.required
                }"
            >
                <input
                    class="form-check-input bk-selected-check"
                    type="checkbox"
                    v-model="bookie.checked"
                    :id="'bs_' + bookie.id + '_selected'"
                    :disabled="isCheckboxDisabled"
                >

                <label
                    :class="[
                        'ff-label',
                        'form-check-label',
                        {
                            inact: this.frosted
                        }
                    ]" 
                    :for="'bs_' + bookie.id + '_selected'"
                    @click.right.prevent="handleBookmakerNameRightClick"
                >
                    <span
                        v-html='bookie.html_name'
                    />
                </label>

                <i
                    v-if="bookie.temporary_disabled"
                    class="temporary-disabled ms-1"
                    data-bs-toggle="tooltip"
                    :title="texts.temporary_disabled"
                />

                <span
                    class="d text-body-secondary minor"
                    @click.stop="handleShowDropdownTextClick"
                >
                    <span
                        v-if="bookie.commission"
                        class="me-1"
                        data-bs-toggle="tooltip"
                        :title="texts.commission"
                    >
                        {{ bookie.commission }}%
                    </span>

                    <span
                        v-if="bookie.generative === '0'"
                        class="me-1"
                        data-bs-toggle="tooltip"
                        :title="texts.generative"
                    >
                        \u25CF
                    </span>
                    
                    <span
                        v-else-if="bookie.generative === '1'"
                        class="me-1"
                        data-bs-toggle="tooltip"
                        :title="texts.not_generative">
                        \u2298
                    </span>

                    <span
                        v-if="bookie.monocombs"
                        class="me-1"
                        data-bs-toggle="tooltip"
                        :title="texts.monocombs"
                    >
                        \u2460
                    </span>

                    <template v-if="oddsIsValid">
                        <span
                            v-if="bookie.odd_min || bookie.odd_max"
                            class="me-1"
                            data-bs-toggle="tooltip"
                            :title="texts.odds_range"
                        >
                            {{ convertingOdds }}
                        </span>
                    </template>
                </span>

                <a
                    v-if="bookie.change_link"
                    class="me-1 minor text-body-secondary"
                    data-bs-toggle="tooltip"
                    :href="formatBookmakerSettingsPath(bookie)"
                    :title="texts.link_was_changed"
                    @click="handleBookmakerSettingsLinkClick"
                >
                    <i class="fa fa-link" />
                </a>
            </div>
        </div>`;function r(n,l){var c=n.toLowerCase(),p=l.toLowerCase();return c<p?-1:c>p?1:0}function u(n){let l,{initial:c,temporary:p}=n.dataset;return p&&!zo?l=p:l=c,JSON.parse(l).sort(function(v,R){return r(v.name,R.name)})}function a(n){let l={generative:!1,required:!1,monocombs:!1};for(let c of JSON.parse(n.dataset.
hide))l[c]=!0;return l}function d(n){k({url:"/user_additional_params/change_mode_bk_filter",method:"post",body:{hide_bookies:n}})}let m=JSON.parse(t.dataset.texts),h=t.dataset.oddFormat,g=JSON.parse(t.dataset.pop),f=t.dataset.hideBookies==="false";for(var b=u(t),C=a(t),_={},w=function(){return(this.parent?this.parent.active_twin:
this.active_twin)===this.id},V=function(){this.checked=!1,this.disabled=!0;let n=[];this.parent?(this.parent.checked=!1,this.parent.disabled=!0,n=this.parent.dependants):this.dependants&&(n=this.dependants),n.forEach(l=>{l.checked=!1,l.disabled=!0})},E=function(n){let l=!this.isMatches(n);return this.dependants.length>
0&&l?!this.dependants.find(c=>c.isMatches(n)):this.parent&&l?this.parent.isMatches(n)?!this.checked:!(this.parent.dependants.find(c=>c.isMatches(n))&&this.checked):l},H=function(n){if(!n)return!0;if(n.country&&(g[n.country]||[]).indexOf(this.id)===-1)return!1;if(n.searchText){let l=n.searchText,c=!1;for(let p of this.searchable)
if(p.replace(/[_ ]/g,"").indexOf(l.replace(/[_ ]/g,""))!==-1){c=!0;break}return c}else return!0},U=function({format:n}){this.odd_min&&(this.odd_min=Me[n].toDecimal(this.odd_min).toString()),this.odd_max&&(this.odd_max=Me[n].toDecimal(this.odd_max).toString())},ne=0;ne<b.length;++ne){let n=b[ne];n.activeTwinInitial=n.active_twin,
n.isActive=w,n.disableWithTwins=V,n.isMatches=H,n.isInvisible=E,n.oddsToDecimal=U,_[n.id]=n,n.searchable=[n.id.toLowerCase()],n.searchable.push(n.name.toLowerCase()),n.alt&&n.searchable.push(n.alt.toLowerCase())}for(let n of b){n.parent&&(n.parent=_[n.parent]);for(var Y=0;Y<n.dependants.length;++Y)n.dependants[Y]=_[n.dependants[Y]]}
let W=Tr({provide(){return{saveTemporaryBookmakersAndNavigate:this.saveTemporaryBookmakersAndNavigate,isCompactView:he}},data(){return{filter:"",showAll:f,treeMode:!0,hide:C,bookies:b,texts:m,oddsFormat:h}},computed:{treeModeDisplay:function(){return this.treeMode&&this.showAll},activeBookies:function(){for(var n=[],l=0;l<
this.bookies.length;++l){var c=this.bookies[l];(this.showAll||c.isActive()&&(!c.disabled||c.checked))&&!c.isInvisible(this.filterPredicate)&&n.push(c)}return this.treeMode&&this.showAll&&n.sort(function(p,v){return p.parent&&p.parent.id===v.id?1:v.parent&&v.parent.id===p.id?-1:((p.parent==null||v.parent==null||p.parent.
id!==v.parent.id)&&(p=p.parent?p.parent:p,v=v.parent?v.parent:v),r(p.name,v.name))}),n},activeBookiesGroup:function(){let n=[];for(let l=0;l<this.activeBookies.length;l++){let c=this.activeBookies[l];c.parent&&n[n.length-1]&&this.showAll&&this.treeMode?n[n.length-1].push(c):n.push([c])}return n},allChecked:{get:function(){
for(let n of this.activeBookies)if(!n.checked&&(this.showAll&&n.isActive()||!this.showAll))return!1;return!this.activeBookies.every(n=>!n.checked)},set:function(n){this.setCheckedForAllActiveBookies({checked:n})}},showAllText:function(){return this.showAll?m.show_basic:m.show_all},asTreeText:function(){return this.treeMode?
m.as_plain:m.as_tree},filterPredicate:function(){if(!this.filter)return null;let n=/(?:^| )top:(\w\w\w?)(?:$| )/i,l=n.exec(this.filter),c=this.filter;return l&&(c=c.replace(n,"").trim(),c===""&&(c=null)),{searchText:c?c.toLowerCase():null,country:l?l[1].toUpperCase():null}},filterSuggest:function(){if(this.filter===""||
this.showAll)return null;var n=this.bookies,l=this.activeBookies,c=[];for(var p of n)if(l.indexOf(p)===-1&&p.isMatches(this.filterPredicate)&&c.push(p),c.length>=6)break;return c.length>0?c.slice(0,4).map(v=>v.name).join(", ")+(c.length>3?"...":""):null},bookiesSerialized:function(){let n=["required","checked","generat\
ive","monocombs"],l=["ref","odd_max","odd_min","generative"],c=[];for(let p of this.bookies)if(p.isActive()){let v=l.map(function(me){return p[me]||""}),R=n.map(function(me){return me==="generative"?0:p[me]?1:0});v.unshift(parseInt(R.join(""),2)),c.push(v.join(":"))}return c.join(";")},twinsSerialized:function(){let n={};
for(let l of this.bookies)!l.parent&&l.active_twin!==l.activeTwinInitial&&(n[l.id]=l.active_twin);return n},toEnable:function(){let n=[];for(let l of this.bookies)l.checked&&l.disabled&&n.push(l.parent?l.parent.id:l.id);return n}},watch:{showAll:function(){this.repositionWithTick()},filter:function(n,l){n.length>0&&l.length===
0&&(this.showAll=!0,this.treeMode=!0,Lr(),this.repositionWithTick()),n.length===0&&(this.showAll=!1,this.treeMode=!1)}},methods:{selectAll:function(){for(let n of this.bookies)!n.disabled&&n.isActive()&&(n.checked=!0)},selectNone:function(){for(let n of this.bookies)n.checked=!1},selectVisible:function(){this.setCheckedForAllActiveBookies(
{checked:!0})},selectOnlyVisible:function(){let n=this.activeBookies.map(l=>l.id);for(let l of this.bookies)l.isActive()&&(l.checked=n.includes(l.id))},setCheckedForAllActiveBookies:function({checked:n}){for(let l of this.activeBookies)if(n&&this.showAll){if(l.isActive())l.checked=!0;else if(!l.parent&&l.dependants.length>
0){let c=l.dependants.find(v=>v.isActive());this.activeBookies.some(v=>v.id===c.id)||(l.checked=!0)}}else l.checked=n},switchViewMode:function(){d(this.showAll),this.showAll=!this.showAll},switchOddsFormatInBookies:function(){this.bookies.forEach(n=>n.oddsToDecimal({format:this.oddsFormat}))},hideBookie:function(n){this.
bookies.find(c=>c.id===n).disableWithTwins()},repositionWithTick(){Ar(function(){e.facebox.reposition()})},showBookie:function(n){if(this.allChecked)return null;let l=this.bookies.find(p=>p.id===n);if(l.parent){l.parent.disabled=!1;for(let p of l.parent.dependants)p.disabled=!1}l.disabled=!1;function c(){return!1}this.
updateHiddenBookers().catch(c)},updateHiddenBookers:function({bookers:n=this.bookies.filter(function(c){return c.dependants||!c.parent?!c.disabled||c.dependants.find(p=>!p.disabled):!c.disabled}),submit:l=!1}={}){let c={user:{include_bookers:n.map(R=>R.id)},hide_rest:!0},p=()=>{l&&this.saveAndSubmit()};function v(R){throw alert(
m.js.internal_error),R}return k({url:"/user_settings/filter",method:"put",body:c}).then(p).catch(v)},saveAndSubmit:function(){this.switchOddsFormatInBookies();let n=this.bookiesSerialized;this.saveTwins(function(){o(n)})},hideRestBookies:function(){let n=this.bookies.filter(function(p){return p.dependants||!p.parent?p.
checked||p.dependants.find(v=>v.checked===!0):p.checked}),l=()=>{for(let p of this.bookies.filter(function(v){return!v.checked}))p.disabled=!0;d(!0),this.showAll=!1};function c(){return!1}this.updateHiddenBookers({bookers:n}).then(l).catch(c)},handlePopularButtonClick(n){this.filter=n,e("#facebox").find(".ff").focus()},
clearFilter:function(){this.filter=""},clearFilterByEsc:function(n){n.which===27&&this.clearFilter()},saveTwins:function(n){let l=this.twinsSerialized,c=this.toEnable;Object.keys(l).length>0||c.length>0?k({url:"/twins",method:"post",body:{partial:"true",booker_twins:l,enable:c.join(",")}}).finally(n):n()},triggerIntro:function(){
let n=e(t),l=n.data("intro"),c=n.data("intro-title"),p=e(".bk-menu-trigger").first();if(p&&l&&c){let v=qo.getOrCreateInstance(p,{content:l,placement:function(R){return e(R).addClass("top-z-index"),"auto"},trigger:"manual",title:c});setTimeout(function(){v.show(),k({url:"/user_settings/set",method:"post",body:{key:"book\
ies_filter_intro",value:"1"}});var R=function(){v.dispose(),e("body").off("click",R)};e("body").on("click",R)},50)}},updateUserLastViewed:function(){if(e("div.bookmaker-new-badge-small").length>0){let n=function(){e("span.compact-dot-badge").remove(),e("div.bookmaker-new-badge-small").remove()};k({url:"/user_additional\
_params/viewed_bk_filter",method:"post"}).then(n)}},handleBookieIdeasLinkClick(n){this.saveTemporaryBookmakersAndNavigate(n)},saveTemporaryBookmakersAndNavigate(n){return L(this,null,function*(){n.preventDefault(),yield this.saveTemporaryBookmakers();let l=n.target;location=l.href||l.parentElement.href})},saveTemporaryBookmakers(){
return k({url:"/temporary_filters",method:"post",body:{selector:this.bookiesSerialized,path:$e}})}},mounted(){this.triggerIntro(),this.updateUserLastViewed(),this.$refs.search.addEventListener("keyup",this.clearFilterByEsc),e(".custom-input-close-icon").on("click",this.clearFilter);let n=document.getElementById("bookie\
-ideas-link");n.addEventListener("click",this.handleBookieIdeasLinkClick),n.addEventListener("auxclick",this.handleBookieIdeasLinkClick)},updated:function(){let n=e("#facebox .form-group .ff-label");return n.unmark(),this.filter&&n.mark(this.filter,{ignoreJoiners:!0}),!0},unmounted:function(){this.$refs.search.removeEventListener(
"keyup",this.clearFilterByEsc)}});W.component("custom-validation-input",{template:`
          <input
              :value="modelValue"
              class="w-number form-control inline-input me-1"
              @input="onInput"
              type="text"
              step="any"
              :ref="nameRef"
          >
    `,props:{modelValue:String,nameRef:String},methods:{onInput(n){let l=n.target.value.replace(",",".");this.isValid(l)?this.$emit("update:modelValue",l):n.target.value=this.modelValue},isValid(n){return/^(-?|\+?)\d{0,8}([./]\d{0,3})?$/.test(n)}}}),W.component("bookie-filter",{provide(){return{initializePopup:this.initializePopup,
initializeTooltip:this.initializeTooltip}},inject:{saveTemporaryBookmakersAndNavigate:"saveTemporaryBookmakersAndNavigate",twinsPopupContent:"twinsPopupContent",generativePopupContent:"generativePopupContent",bookmakersSettingsPopupContent:"bookmakersSettingsPopupContent",bookmakersCopyLinkPopupContent:"bookmakersCopyL\
inkPopupContent",isUltimatePlanEnabled:"isUltimatePlanEnabled",isExcludeGenerativeEnabled:"isExcludeGenerativeEnabled",isBookmakersSettingsAvailable:"isBookmakersSettingsAvailable",isBookmakersCopyLinkAvailable:"isBookmakersCopyLinkAvailable",isTwinsAvailable:"isTwinsAvailable",texts:"texts",hide:"hide",filter:"filter",
isCompactView:"isCompactView"},data(){return{activeDropdown:!1,dropdown:null,oddsFormat:h,oddsIsValid:!0}},props:{bookie:Object},emits:["delete","show","bookieRightClick"],template:s,computed:{frosted:function(){return this.filter&&this.filter.country?!this.bookie.isMatches(this.filter):(!this.bookie.isMatches(this.filter)||
this.bookie.disabled)&&!this.bookie.checked},isDisabledTwin(){return this.isTwin&&!this.isTwinsAvailable},isTwin(){return!!this.bookie.parent},isCheckboxDisabled(){return this.bookie.temporary_disabled||this.isDisabledTwin},combinedOdds(){return{min:this.bookie.odd_min,max:this.bookie.odd_max}},convertingOdds(){let n={
min:Ue({num:this.bookie.odd_min,oddsFormat:this.oddsFormat}),max:Ue({num:this.bookie.odd_max,oddsFormat:this.oddsFormat})};return n.min&&n.max?`${n.min} - ${n.max}`:n.min?`\u2265 ${n.min}`:n.max?`\u2264 ${n.max}`:""}},watch:{"bookie.checked":function(n){if(n){this.bookie.disabled&&this.$emit("show",this.bookie.id);var l=this.
bookie,c=this.bookie.parent||this.bookie;c.id!==l.id&&(c.checked=!1);for(var p=c.dependants,v=0;v<p.length;++v)p[v].id!==l.id&&(p[v].checked=!1);c.active_twin=l.id}},combinedOdds:function(n){for(let l in n){let c=n[l];if(!c&&c!=="")continue;let p=this.$refs[`odd_${l}_input`];p&&Ro(p.$refs[l],!Eo({value:c,format:this.oddsFormat}))}
this.oddsIsValid=e(this.$el).find("input.is-invalid").length===0}},mounted(){this.isDisabledTwin&&(this.initializePopup({element:this.$refs.bookmakerItemOptionsButton,content:this.twinsPopupContent}),this.initializePopup({element:this.$refs.bookmakerItem,content:this.twinsPopupContent})),this.initializeTooltips(),e(this.
$el).on("shown.bs.dropdown",this.handleOptionsDropdownShown)},updated(){this.initializeTooltips()},methods:{initializePopups(){e(this.$el).find('[data-bs-toggle="popover"]').each((n,l)=>{this.initializePopup({element:l})})},initializePopup({element:n,content:l}){let c={html:!0,trigger:"manual focus"};l&&(c.content=l),new qo(
n,c)},initializeTooltips(){e(this.$el).find('[data-bs-toggle="tooltip"]').not('[data-bs-trigger="manual"]').each((n,l)=>{this.initializeTooltip({element:l})}),e(this.$el).find('[data-bs-toggle="tooltip"][data-bs-trigger="manual"]').each((n,l)=>{this.initializeTooltip({element:l,useHtmlOptions:!0}),ue(l)})},initializeTooltip({
element:n,useHtmlOptions:l=!1}){if(l&&he)return $o.getOrCreateInstance(n);{let c={trigger:"hover",html:!0};return $o.getOrCreateInstance(n,c)}},dropdownToggle(){return L(this,null,function*(){this.activeDropdown=!0,yield this.$nextTick(),this.dropdown||(this.initializeDropdown(),this.initializeTooltips(),this.initializeGenerativePopup()),
this.$refs.dropdown.dataset.bsToggle="dropdown",this.dropdown.toggle()})},hideBookie(){this.dropdownToggle(),this.$emit("delete",this.bookie.id)},templateRender(n,l){return Oo(n,l)},handleShowDropdownButtonClick(){this.isDisabledTwin||this.dropdownToggle()},handleShowDropdownTextClick(){this.$refs.dropdown.click()},initializeDropdown(){
this.dropdown=new wr(this.$refs.dropdown)},handleBookmakerNameRightClick(){this.isDisabledTwin||this.$emit("bookieRightClick",this.bookie.id)},formatBookmakerSettingsPath(n){var c;return`/user_settings/bookies/${((c=n.parent)==null?void 0:c.id)||n.id}/edit?from_page=${$e}`},handleBookmakerSettingsLinkClick(n){this.saveTemporaryBookmakersAndNavigate(
n)},initializeGenerativePopup(){!this.isExcludeGenerativeEnabled&&this.isUltimatePlanEnabled&&this.initializePopup({element:this.$refs.disableGenerativeRadioButton,content:this.generativePopupContent})},handleOptionsDropdownShown(){this.initializePopups()}}}),W.component("bookie-filter-group",{provide(){return{twinsPopupContent:this.
twinsPopupContent,generativePopupContent:this.generativePopupContent,bookmakersSettingsPopupContent:this.bookmakersSettingsPopupContent,bookmakersCopyLinkPopupContent:this.bookmakersCopyLinkPopupContent,isUltimatePlanEnabled:this.isUltimatePlanEnabled,isExcludeGenerativeEnabled:this.isExcludeGenerativeEnabled,isBookmakersSettingsAvailable:this.
isBookmakersSettingsAvailable,isBookmakersCopyLinkAvailable:this.isBookmakersCopyLinkAvailable,isTwinsAvailable:this.isTwinsAvailable,texts:this.texts,hide:this.hide,filter:this.filter}},props:{bookies:Array,filter:Object,hide:Object,texts:Object,isBookmakersSettingsAvailable:Boolean,isBookmakersCopyLinkAvailable:Boolean,
isTwinsAvailable:Boolean,twinsPopupContent:String,generativePopupContent:String,bookmakersSettingsPopupContent:String,bookmakersCopyLinkPopupContent:String,isExcludeGenerativeEnabled:Boolean,isUltimatePlanEnabled:Boolean},emits:["delete","show"],template:`
            <div class="group-sbk">
                <bookie-filter
                    v-for="bookie in bookies"
                    :bookie="bookie"
                    :key="bookie.id"
                    @delete="onDelete"
                    @show="onShow"
                    @bookie-right-click="handleBookieRightClick"
                ></bookie-filter>
           </div>
        `,methods:{onDelete(n){this.$emit("delete",n)},onShow(n){this.$emit("show",n)},handleBookieRightClick(n){function l(p){return p.id===n}let c=this.bookies.find(l);c.required=!c.required}}}),W.component("filter-popular-button",Po({app:W})),W.component("bookmaker-copy-link-button",{template:`
            <template
                v-if="isBookmakersCopyLinkAvailable"
            >
                <label
                    v-if="isCopySuccess"
                    ref="copiedButton"
                    class="btn-site mb-0"
                    data-bs-toggle="tooltip"
                    :title="copiedButtonTitle"
                >
                    <i class="fa-solid fa-check" />
                </label>
                <label
                    v-else
                    ref="copyButton"
                    class="btn-site mb-0 bookmaker-copy-link-button"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="manual"
                    data-bs-delay='{"show":150, "hide": 0}'
                    data-bs-placement="top"
                    :title="copyButtonTitle"
                    @click="copyLink"
                >
                    <i class="fa-regular fa-clone" />
                </label>
            </template>
            <span
                v-else
                data-bs-toggle="popover"
                :data-bs-content="bookmakersCopyLinkPopupContent"
                tabindex="0"
            >
                <label
                    ref="copyButton"
                    class="btn-site mb-0 bookmaker-copy-link-button"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="manual"
                    data-bs-delay='{"show":150, "hide": 0}'
                    data-bs-placement="top"
                    :title="copyButtonTitle"
                >
                    <i class="fa-regular fa-clone" />
                </label>
            </span>
        `,inject:["texts","initializePopup","initializeTooltip","isBookmakersCopyLinkAvailable","bookmakersCopyLinkPopupContent"],data(){return{isCopySuccess:!1,resetInterval:2e3}},props:{bookmakerLink:{type:String,required:!0}},computed:{copyButtonTitle(){return`${this.texts.copy_bk_url}<br>${this.bookmakerLink}`},copiedButtonTitle(){
return this.texts.copied_bk_url},bookmakerLinkFormatted(){return new URL(this.bookmakerLink,window.location.origin).toString()}},watch:{isCopySuccess:"handleIsCopySuccessChange"},methods:{copyLink(){Fr(this.bookmakerLinkFormatted),this.isCopySuccess=!0,setTimeout(()=>{this.isCopySuccess=!1},this.resetInterval)},handleIsCopySuccessChange(n){
return L(this,null,function*(){n?(this.destroyCopyButtonTooltip(),yield this.$nextTick(),this.initializeCopiedButtonTooltip()):(this.destroyCopiedButtonTooltip(),yield this.$nextTick(),this.initializeCopyButtonTooltip())})},initializeCopyButtonTooltip(){return this.initializeTooltip({element:this.$refs.copyButton,useHtmlOptions:!0})},
initializeCopiedButtonTooltip(){return this.initializeTooltip({element:this.$refs.copiedButton})},destroyCopyButtonTooltip(){this.initializeCopyButtonTooltip().dispose()},destroyCopiedButtonTooltip(){this.initializeCopiedButtonTooltip().dispose()}}}),W.use(Er),e("#facebox").addClass("overflow-visible"),W.mount(t)};function Lr(){
let e=ie("#facebox .content")[0];jo(e,{height:"100vh"});let t=ie("#facebox .modal-header")[0].offsetHeight,o=ie("#facebox .modal-footer")[0].offsetHeight,i=ie("#facebox .modal-body"),s=e.offsetWidth,r=s>ie(window).width()*.75?`${s-2}px`:"75vw";i.addClass("overflow-auto"),jo(i[0],{height:`calc(100vh - ${t}px - ${o}px)`,
width:r})}function jo(e,t){for(let o in t)e.style[o]=t[o]}(function(e){e(document).on("reveal.facebox",function(){var t=e("#facebox");Rr(e),e.facebox.reposition(),he||t.find(".ff").focus()}),e(document).on("close.facebox",()=>{history.replaceState(null,null," "),Vo()})})(ie);import{createApp as zr}from"vue";import{defineComponent as $r,ref as Ko}from"vue";import{defineComponent as Pr}from"vue";import{defineComponent as Br}from"vue";var Ho=Br({props:{schedules:{type:Array,require:!0}},emits:["editSchedule","destroySchedule"],methods:{textAdditionalSettings(e){return e.type==="by_identical_requests"?`by ${e.additional_settings.count_row_num} identical requests`:""},flagDurationOrPermitted(e){return e.flag_duration===
0?"Permitted":e.flag_duration_humanize}},template:`
        <tr v-for="schedule in schedules" :key="schedule.id">
          <td>{{ schedule.id}}</td>
          <td>{{ schedule.type }}</td>
          <td>{{ schedule.interval_humanize }}</td>
          <td>{{ schedule.max_req_count }}</td>
          <td>{{ schedule.min_req_count }}</td>
          <td>{{this.textAdditionalSettings(schedule)}}</td>
          <td>{{ schedule.access_type }}</td>
          <td>{{ schedule.sanction_type }}</td>
          <td>{{ this.flagDurationOrPermitted(schedule) }}</td>
          <td>
            <div v-if="schedule.countries_data?.included?.length">
              <strong>Incl:</strong> {{ schedule.countries_data.included.join(', ') }}
            </div>
            <div v-if="schedule.countries_data?.excluded?.length">
              <strong>Excl:</strong> {{ schedule.countries_data.excluded.join(', ') }}
            </div>
          </td>
          <td>
          <button @click="this.$emit('editSchedule', schedule)" class="btn btn-warning btn-sm me-2">Edit</button>
            <button @click="this.$emit('destroySchedule', schedule)" class="btn btn-danger btn-sm">Destroy</button>
          </td>
        </tr>
  `});var Wo=Pr({components:{ScheduleRows:Ho},props:{userActivitySchedules:Array},emits:["editSchedule","destroySchedule"],template:`
      <div class="table-container">
        <table class="table table-bordered table-striped">
          <thead class="table-light">
            <tr>
              <th>Schedule ID</th>
              <th>Type</th>
              <th>Interval</th>
              <th>Max count of request</th>
              <th>Min count of request</th>
              <th>Additional settings</th>
              <th>User access type</th>
              <th>Sanction Type</th>
              <th>Flag duration</th>
              <th>Countries</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <ScheduleRows
                :schedules="userActivitySchedules"
                @editSchedule="$emit('editSchedule', $event)"
                @destroySchedule="$emit('destroySchedule', $event)"
            />
          </tbody>
        </table>
      </div>
    `});import{defineComponent as Mr,reactive as Ur,watch as qr,ref as Zo}from"vue";import{defineComponent as Nr}from"vue";var Go=Nr({props:{suspiciousUsersData:{type:Array,default:()=>[]},isLoading:{type:Boolean,default:()=>!1}},template:`
    <div class="p-3 border rounded bg-light w-50">
    <div v-if="isLoading" class="d-flex justify-content-center">
      <i class="fas fa-circle-notch fa-spin fa-3x"></i>
    </div>
    <div v-else-if="suspiciousUsersData.length === 0">
      No Data
    </div>
    <div v-else>
      <h3 class="p-2">Trial run results</h3>
      <div class="table-container">
        <table class="table">
          <thead>
          <tr>
            <th>Email</th>
            <th>Country</th>
            <th>Requests Sum</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="susp_entry in suspiciousUsersData" :key="susp_entry.user_id">
            <td>
              <a :href="susp_entry.settings_link" target="_blank">{{ susp_entry.user_email }}</a>
            </td>
            <td>{{susp_entry.user_country}}</td>
            <td>{{ susp_entry.requests_sum }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    `});var Jo=Mr({props:{schedule:{type:Object,default:()=>({id:null,type:null,interval:null,interval_humanize:null,max_req_count:null,min_req_count:null,access_type:null,additional_settings:{},countries_data:{included:[],excluded:[]}})}},components:{TrialSchedule:Go},emits:["submit","cancel"],setup(e,{emit:t}){let o=Ur(S({},
e.schedule)),i=()=>{t("submit",o)},s=()=>{t("cancel")},r=Zo([]),u=Zo(!0);return qr(()=>o.type,a=>{a==="by_identical_requests"?o.additional_settings={count_row_num:3}:o.additional_settings={}}),{formData:o,handleSubmit:i,handleCancel:s,buttonForTrialRequestIsActive:u,trialSuspiciousUsers:r}},computed:{typeIsByIdenticalRequests(){
return this.formData.type==="by_identical_requests"},canDoTrialRequest(){return this.formData.type&&this.formData.interval_humanize&&this.formData.max_req_count&&this.formData.access_type&&(this.formData.flag_duration||this.formData.flag_duration===0)},sortedTrialSuspiciousUsers(){return[...this.trialSuspiciousUsers].sort(
(e,t)=>t.requests_sum-e.requests_sum)},includedCountriesStr:{get:function(){return this.formData.countries_data&&Array.isArray(this.formData.countries_data.included)?this.formData.countries_data.included.join(","):""},set:function(e){this.formData.countries_data.included=e.split(",").map(t=>t.trim().toUpperCase()).filter(
t=>t.length>0)}},excludedCountriesStr:{get:function(){return this.formData.countries_data&&Array.isArray(this.formData.countries_data.excluded)?this.formData.countries_data.excluded.join(","):""},set:function(e){this.formData.countries_data.excluded=e.split(",").map(t=>t.trim().toUpperCase()).filter(t=>t.length>0)}}},methods:{
handleTrialRequest(){if(this.canDoTrialRequest){this.buttonForTrialRequestIsActive=!1;let e=new URLSearchParams({schedule:JSON.stringify(this.formData)}).toString();k({url:`/admin/user_activity_schedule/trial_run?${e}`,method:"get"}).then(t=>this.handleSuccessTrialRequest(t)).catch(t=>this.handleErrorTrialRequest(t))}else
console.error("Can`t do trial request without type/interval/max_req_count/access_type/flag_duration")},handleErrorTrialRequest(e){this.buttonForTrialRequestIsActive=!0,console.error(e)},handleSuccessTrialRequest(e){this.buttonForTrialRequestIsActive=!0,this.trialSuspiciousUsers=e.data}},template:`
      <div class="d-flex gap-3">
        <form @submit.prevent="handleSubmit" class="p-3 border rounded bg-light w-50">
          <!-- Type -->
          <div class="mb-3">
            <label for="type" class="form-label">Type</label>
            <select
              id="type"
              v-model="formData.type"
              class="form-select"
              required
            >
              <option value="" disabled>Select type</option>
              <option value="by_uniq_requests">By Unique Requests</option>
              <option value="by_identical_requests">By Identical Requests</option>
              <option value="by_total_identical_requests">By Total Identical Requests</option>
            </select>
          </div>
    
          <!-- User Access Type -->
          <div class="mb-3">
            <label for="access_type" class="form-label">User Access Type</label>
            <select
                id="access_type"
                v-model="formData.access_type"
                class="form-select"
                required
            >
              <option value="" disabled>Select Access Type</option>
              <option value="all_users">All</option>
              <option value="paid_only">Paid Only</option>
              <option value="free_only">Free Only</option>
            </select>
          </div>
    
          <!-- User Sanction Type -->
          <div class="mb-3">
            <label for="sanction_type" class="form-label">User Sanction Type</label>
            <select
                id="sanction_type"
                v-model="formData.sanction_type"
                class="form-select"
                required
            >
              <option value="mark">Mark</option>
              <option value="pause">Pause</option>
              <option value="block">Block</option>
              <option value="troll_1">Troll with shuffle and distort</option>
              <option value="troll_2">Troll with all</option>
            </select>
          </div>
    
          <!-- Flag duration -->
          <div class="mb-3">
            <label for="flag_duration" class="form-label">Flag Duration</label>
            <select
                id="flag_duration"
                v-model.number="formData.flag_duration"
                class="form-select"
                required
            >
              <option value="" disabled>Select Flag Duration</option>
              <option value="600">10 min</option>
              <option value="3600">1 hour</option>
              <option value="86400">1 day</option>
              <option value="0">Forever</option>
            </select>
          </div>
    
          <!-- Interval -->
          <div class="mb-3">
            <label for="interval_humanize" class="form-label">Interval</label>
            <input
              id="interval_humanize"
              v-model="formData.interval_humanize"
              type="text"
              class="form-control"
              placeholder="Enter interval. For example '10 minutes'"
              required
            />
          </div>
    
          <!-- Max Request Count -->
          <div class="mb-3">
            <label for="max_req_count" class="form-label">Max Request Count</label>
            <input
              id="max_req_count"
              v-model="formData.max_req_count"
              type="number"
              class="form-control"
              placeholder="Enter max request count"
              required
            />
          </div>

          <!-- Countries data -> included -->
          <div class="mb-3">
            <label for="countries_data_included" class="form-label">
              Included countries
            </label>
            <input
                id="countries_data_included"
                v-model="includedCountriesStr"
                type="text"
                class="form-control"
                placeholder="Enter included countries (e.g. - RU,EN,BY)"
            />
          </div>

          <!-- Countries data -> excludes -->
          <div class="mb-3">
            <label for="countries_data_excluded" class="form-label">
              Excluded countries
            </label>
            <input
                id="countries_data_excluded"
                v-model="excludedCountriesStr"
                type="text"
                class="form-control"
                placeholder="Enter excluded countries (e.g. - RU,EN,BY)"
            />
          </div>
    
          <template v-if="typeIsByIdenticalRequests">
            <!-- Min Request Count -->
            <div class="mb-3">
              <label for="min_req_count" class="form-label">Min Request Count</label>
              <input
                  id="min_req_count"
                  v-model="formData.min_req_count"
                  type="number"
                  class="form-control"
                  placeholder="Enter min request count"
                  required
              />
            </div>
    
            <!-- Additional Settings -->
            <div class="mb-3">
              <label for="additional_settings" class="form-label">
                Additional Settings(Max count of identical requests)
              </label>
              <input
                  id="additional_settings"
                  v-model="formData.additional_settings.count_row_num"
                  type="number"
                  class="form-control"
                  placeholder="Enter count row num"
                  required
              />
            </div>
          </template>
    
          <!-- Buttons -->
          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" @click="handleCancel" class="btn btn-secondary">Cancel</button>
            <button 
                type="button"
                @click="handleTrialRequest"
                :class="['btn btn-warning',
                 {'disabled': !this.buttonForTrialRequestIsActive}]">
              Trial
            </button>
          </div>
        </form>
        <TrialSchedule 
            :suspicious-users-data="this.sortedTrialSuspiciousUsers" 
            :is-loading="!this.buttonForTrialRequestIsActive"
        />
    </div>
  `});import{Modal as jr}from"bootstrap";var Qo=$r({components:{ScheduleForm:Jo,ScheduleTable:Wo},setup(){let e=Ko("schedules"),t=i=>{e.value=i},o=Ko(null);return{activeTab:e,changeTab:t,selectedSchedule:o}},data(){return{userActivitySchedules:[]}},methods:{initializeUserActivitySchedules(){let t=this.$el.closest("#user-acti\
vity-schedule-table").dataset.jsonData;t?this.userActivitySchedules=JSON.parse(t):console.error("No data-json-data attribute found!")},handleEditSchedule(e){this.handleOpenForm(e)},handleFormSubmit(e){let t=e.id?"patch":"post";this.selectedSchedule=e,this.requestForCRUD({method:t,schedule:e})},handleFormCancel(){this.moveToSchedulesTab()},
handleDestroySchedule(e){window.confirm("Are you sure you want to delete this schedule?")&&(this.selectedSchedule=e,this.requestForCRUD({method:"delete",schedule:e}))},handleOpenForm(e){this.selectedSchedule=e||{id:null,type:null,interval:null,interval_humanize:null,max_req_count:null,min_req_count:null,access_type:null,
sanction_type:null,flag_duration:null,additional_settings:{},countries_data:{included:[],excluded:[]}},this.activeTab="form"},moveToSchedulesTab(){this.changeTab("schedules")},requestForCRUD({method:e,schedule:t}){let i=["delete","patch"].includes(e)?`/admin/user_activity_schedule/${t.id}`:"/admin/user_activity_schedul\
e";k({url:i,method:e,body:{schedule:t}}).then(s=>this.handleSuccess(s,e)).catch(s=>{if(s.response&&s.response.status===422&&s.response.data.errors){let r=s.response.data.errors;this.showErrorModal(r.join("<br>"))}else this.showErrorModal("Unexpected error"),console.error(s)})},handleSuccess(e,t){let o=()=>this.userActivitySchedules.
findIndex(s=>s.id===this.selectedSchedule.id),i=function(){return e.data.schedule};switch(t){case"post":{let s=i();this.userActivitySchedules.push(s),this.changeTab("schedules");break}case"patch":{let s=o(),r=i();s!==-1&&(this.userActivitySchedules[s]=r),this.changeTab("schedules");break}case"delete":{let s=o();s!==-1&&
this.userActivitySchedules.splice(s,1);break}}},showErrorModal(e){this.$refs.errorModalBody.innerHTML=e,jr.getOrCreateInstance("#errorModal").show()}},mounted(){this.initializeUserActivitySchedules()},template:`
    <div>
      <ul class="nav nav-tabs mb-4">
        <li class="nav-item">
          <button
              class="nav-link btn"
              :class="{'active': activeTab === 'schedules'}"
              @click="changeTab('schedules')"
              type="button"
          >
            Schedules
          </button>
        </li>
        <li class="nav-item">
          <button
              class="nav-link btn"
              :class="{'active': activeTab === 'form'}"
              @click="handleOpenForm(null)"
              type="button"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane fade show active">
          <ScheduleTable
              v-if="activeTab != 'form'"
              :user-activity-schedules="userActivitySchedules"
              @editSchedule="handleEditSchedule"
              @destroySchedule="handleDestroySchedule"
          />
          <ScheduleForm
              v-if="activeTab === 'form'"
              :schedule="selectedSchedule"
              @submit="handleFormSubmit"
              @cancel="handleFormCancel"
          />
        </div>
      </div>
      <div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-danger text-white">
              <h5 class="modal-title" id="errorModalLabel">Error</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div ref="errorModalBody" class="modal-body" id="errorModalBody"></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `});import Yo from"jquery";Yo(function(){Yo("#user-activity-schedule-table").length>0&&zr(Qo).mount("#user-activity-schedule-table")});import ii from"jquery";import{createApp as Zr}from"vue";import{defineComponent as Gr,ref as _e}from"vue";import{defineComponent as Vr}from"vue";var Xo=Vr({props:{dataAboutSuspiciousUsers:Array,sanctionsTypesOptions:Array},emits:["deleteElement","updateAdditionalInfo"],methods:{toggleAdditionalInfo(e){this.$emit("updateAdditionalInfo",e)},deleteElement(e){this.$emit("deleteElement",e)},lastSanctionTypeIdToName(e){let t=this.
sanctionsTypesOptions.find(o=>o.value===e);return t?t.label==="mark"?"":t.label:""},openEditLastSanction(e,t){window.open(`/admin/users/sanctions/${e}/edit?id=${t}`,"_blank")}},template:`
      <div class="table-container">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>User</th>
            <th>Country</th>
            <th>Sanctions</th>
            <th>Host</th>
            <th>Reason</th>
            <th>Flagged At</th>
            <th>Flag duration</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            <template v-for="(suspUser, index) in this.dataAboutSuspiciousUsers" :key="suspUser.user.id">
              <tr>
                <td>
                  <a :href="suspUser.user.settings_link">{{suspUser.user.email}} </a>
                </td>
                <td>{{suspUser.user.country}}</td>
                <td>
                  {{lastSanctionTypeIdToName(suspUser.data.last_sanction_type)}}
                  {{suspUser.user.restrictions ? '(' + suspUser.user.restrictions + ')' : ''}}
                </td>
                <td>{{suspUser.user.current_host}}</td>
                <td><small class="text-break">{{suspUser.data.reason}}</small></td>
                <td>{{suspUser.data.flagged_at}}</td>
                <td>{{suspUser.data.is_permanent ? 'Permanent' : suspUser.data.duration_humanize}}</td>
                <td>
                  <div class="btn-group">
                    <button class="btn btn-info mx-1"
                            @click="toggleAdditionalInfo(index)"
                            title="Additional info">
                      <i class="fa-regular fa-circle-info"></i>
                    </button>
                    <button class="btn btn-warning mx-1" 
                            @click="openEditLastSanction(suspUser.data.last_sanction_id, suspUser.user.id)"
                            title="Edit a sanction">
                      <i class="fa-regular fa-pen"></i>
                    </button>
                    <button class="btn btn-danger mx-1" @click="deleteElement(suspUser.data.id)">
                      <i class="fa-regular fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
              
              <!-- Additional info -->
              <tr v-if="suspUser.showAdditionalInfo">
                <td colspan="9">
                  <div class="container">
                    <p>Additional info about <b>{{ suspUser.user.email }}</b>:</p>
                    <div class="row justify-content-start">
                      <div class="col">
                        <p><b>Id:</b> {{suspUser.user.id}}</p>
                      </div>
                      <div class="col">
                        <p><b>Locale:</b> {{suspUser.user.locale}}</p>
                      </div>
                      <div class="col">
                        <p><b>Is paid:</b> {{suspUser.user.is_paid ? 'Yes' : 'No'}}</p>
                      </div>
                      <div class="col">
                        <p><a :href="suspUser.user.url_to_grafana">Link to grafana</a></p>
                      </div>
                      <div class="col">
                        <p><a :href="suspUser.user.settings_link">Link to settings</a></p>
                      </div>
                      <div class="col">
                        <p><a :href="suspUser.user.link_to_sanctions">Link to sanctions</a></p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    `});import{defineComponent as Hr}from"vue";var ei=Hr({template:`
         <div class="loading-container">
            <div class="spinner"></div>
            <p class="mt-2 h5">Loading...</p>
        </div>
    `});import{defineComponent as Wr}from"vue";var ti=Wr({props:{label:String,modelValue:String,objectsOptions:{type:Array,default:()=>[]},stringsOptions:{type:Array,default:()=>[]},id:String},emits:["update:modelValue"],methods:{handleChangeModelValue(){this.$emit("update:modelValue",event.target.value)}},template:`
    <div class="col-md-2">
      <label :for="id" class="form-label fw-semibold">{{ label }}:</label>
      <select class="form-select" :id="id" :value="modelValue" @change="handleChangeModelValue">
        <option v-if="stringsOptions.length > 0" v-for="option in stringsOptions" :key="option" :value="option">
          {{ option }}
        </option>
        <option v-else v-for="option in objectsOptions" :key="option.value" :value="option.value">
          {{ option.label }}                                                                                                                                                                                                                                                                                                    \
                                                                                                                                                                                                                                
        </option>
      </select>
    </div>
  `});var oi=Gr({components:{LoadingScreen:ei,TableSuspiciousUsers:Xo,FilterSelect:ti},setup(){let e=_e(!0),t=_e([]),o=15,i=_e(["flagged_at","reason","user_country","user_locale","user_host"]),s={sort_by:"flagged_at",order:"desc",reason:"all",flagged_ago:"all",country:"all",locale:"all",current_host:"all",access_type:"all_us\
ers",active_only:!1,last_sanction_type:"all",search_text:"",limit:o,offset:0,total:0},r=function(){let m=q("suspiciousFilter");return m?JSON.parse(m):s},u=_e(structuredClone(r()));return{isLoading:e,dataAboutSuspiciousUsers:t,filters:u,sortFields:i,updateFilter:(m,h)=>{u.value[m]=h},filterOptions:{flagged_ago:[{value:"\
all",label:"all"},{value:3600,label:"Last 1h"},{value:10800,label:"Last 3h"},{value:21600,label:"Last 6h"},{value:43200,label:"Last 12h"},{value:86400,label:"Last 1d"},{value:259200,label:"last 3d"}],last_sanction_type:["all"],country:["all"],locale:["all"],reason:["all"],current_host:["all"],access_type:["all_users","\
paid_only","free_only"]},defaultFilterSettings:s,PER_PAGE:o}},computed:{offsetForNextPage(){let e=this.filters.offset+this.PER_PAGE;return e>=this.filters.total?null:e},offsetForPrevPage(){let e=this.filters.offset-this.PER_PAGE;return e<0?null:e},pageNumber(){return this.filters.offset/this.PER_PAGE},countPages(){return Math.
ceil(this.filters.total/this.filters.limit)}},methods:{filterRequest(){this.isLoading=!0,k({url:"/admin/suspicious_users",method:"post",body:{filters:this.filters}}).then(e=>this.handleSuccessFilterRequest(e)).catch(e=>console.error(e))},handleSuccessFilterRequest(e){this.dataAboutSuspiciousUsers=e.data.entries,this.updateFilterOptions(
e.data.filter_options),this.updateFilterTotal(e.data.total),this.isLoading=!1},updateFilterOptions(e){if(e)for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&e[t]!==void 0&&(this.filterOptions[t]=e[t])},updateFilterTotal(e){this.filters.total=e},resetOffset(){this.filters.offset=0},handlePageClickPrev(){let e=this.
offsetForPrevPage;!e&&e!==0||(this.filters.offset=e,this.filterRequest())},handlePageClickNext(){let e=this.offsetForNextPage;e&&(this.filters.offset=e,this.filterRequest())},handleDeleteElement(e){k({url:`/admin/suspicious_users/${e}`,method:"delete"}).then(this.handleModifyRequestSuccess({suspUserId:e,action:"destroy"})).
catch(t=>console.error(t))},handleTogglePermanentElement(e){k({url:`/admin/suspicious_users/${e}/toggle_permanent`,method:"post"}).then(this.handleModifyRequestSuccess({suspUserId:e,action:"toggle_permanent"})).catch(t=>console.error(t))},handleModifyRequestSuccess({suspUserId:e,action:t}){let o=()=>this.dataAboutSuspiciousUsers.
findIndex(i=>i.data.id===e);switch(t){case"toggle_permanent":{let i=this.dataAboutSuspiciousUsers[o()];i.data.is_permanent=!i.data.is_permanent;break}case"destroy":{let i=o();i!==-1&&this.dataAboutSuspiciousUsers.splice(i,1);break}}},handleUpdateShowAdditionalInfo(e){this.dataAboutSuspiciousUsers[e].showAdditionalInfo=
!this.dataAboutSuspiciousUsers[e].showAdditionalInfo},applyFilters(){ee("suspiciousFilter",JSON.stringify(this.filters),{expiresIn:1}),this.resetOffset(),this.filterRequest()},resetFilters(){be("suspiciousFilter"),this.filters=this.defaultFilterSettings,this.filterRequest()}},mounted(){this.filterRequest()},template:`
    <div class="d-flex flex-column h-100 w-100">
      <!-- Title -->
      <h2 class="text-center py-2">Suspicious Users</h2>

      <!-- Header -->
      <div class="header py-2 px-3">
        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <div class="row g-3 align-items-center">

              <!-- Search -->
              <div class="col-md-4">
                <label for="search" class="form-label fw-semibold">Search:</label>
                <input
                    type="text"
                    class="form-control"
                    id="search"
                    v-model="filters.search_text"
                    placeholder="Enter the id or email of user"
                />
              </div>

              <!-- Filter: Flags -->
              <FilterSelect
                  id="reason"
                  label="Reasons"
                  v-model="filters.reason"
                  :strings-options="filterOptions.reason"
              />

              <!-- Filter: Flagged Ago -->
              <FilterSelect
                  id="flagged_ago"
                  label="Flagged Ago"
                  v-model="filters.flagged_ago"
                  :objects-options="filterOptions.flagged_ago"
              />
              <!-- Filter: Country -->
              <FilterSelect
                  id="country"
                  label="Country"
                  v-model="filters.country"
                  :strings-options="filterOptions.country"
              />
              <!-- Filter: Locale -->
              <FilterSelect
                  id="locale"
                  label="Locale"
                  v-model="filters.locale"
                  :strings-options="filterOptions.locale"
              />
              <!-- Filter: Current Host -->
              <FilterSelect
                id="current_host"
                label="Current host"
                v-model="filters.current_host"
                :strings-options="filterOptions.current_host" 
              />

              <!-- Filter: Access Type -->
              <FilterSelect
                  id="access_type"
                  label="Access Type"
                  v-model="filters.access_type"
                  :strings-options="filterOptions.access_type"
              />

              <!-- Filter: Sanction Type -->
              <FilterSelect
                  id="last_sanction_type"
                  label="Sanction Type"
                  v-model="filters.last_sanction_type"
                  :objects-options="filterOptions.last_sanction_type"
              />

              <!-- Filter: Active Only -->
              <div class="col-md-2">
                <label class="form-label fw-semibold d-block">Active Records:</label>
                <div class="form-check form-switch">
                  <input
                      class="form-check-input"
                      type="checkbox"
                      id="active_only"
                      v-model="filters.active_only"
                  />
                  <label class="form-check-label" for="active_only">Active Only</label>
                </div>
              </div>

              <!-- Sort -->
              <div class="col-md-2">
                <label class="form-label fw-semibold">Sort By:</label>
                <div class="d-flex align-items-center">
                  <!-- Sort arrow -->
                  <button
                      class="btn btn-outline-secondary me-2"
                      @click="filters.order = filters.order === 'asc' ? 'desc' : 'asc'"
                  >
                    <i :class="filters.order === 'asc' ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down'"></i>
                  </button>

                  <!-- Select sort's field -->
                  <select class="form-select" v-model="filters.sort_by">
                    <option v-for="field in sortFields" :key="field" :value="field">
                      {{ field.replace('_', ' ').toLowerCase() }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Reset Filters -->
              <div class="col-md-1 text-end pt-4">
                <button class="btn btn-warning" @click="resetFilters">
                  Reset
                </button>
              </div>
              
              <!-- Submit Filters -->
              <div class="col-md-1 text-end pt-4">
                <button class="btn btn-primary" @click="applyFilters">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content (Table/Loading) -->
      <div class="content flex-grow-1 d-flex justify-content-center">
        <div class="position-relative w-100">
          <LoadingScreen
              v-if="this.isLoading"
          />

          <TableSuspiciousUsers
              v-else
              :data-about-suspicious-users="dataAboutSuspiciousUsers"
              :sanctions-types-options="filterOptions.last_sanction_type"
              @deleteElement="handleDeleteElement"
              @updateAdditionalInfo="handleUpdateShowAdditionalInfo"
          />
          <div class="d-flex justify-content-between">
            <button @click="this.handlePageClickPrev"
                    class='btn btn-primary' 
                    :disabled="(!this.offsetForPrevPage && this.offsetForPrevPage !==0)">
              Prev
            </button>
            <span>
              Page: {{this.pageNumber + 1}} of {{this.countPages}}
            </span>
            <button @click="this.handlePageClickNext"
                    class='btn btn-primary'
                    :disabled="!this.offsetForNextPage">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
`});ii(function(){ii("#suspicious-users-element").length>0&&Zr(oi).mount("#suspicious-users-element")});import je from"jquery";function Jr(e){let t=je(e.target).closest("button.complaint"),o=t.closest("tbody"),i=o.data("id"),s=o.data("product-model"),r=t.parents(".options-menu").data("comb-json"),u=t.data("comment-key"),a=t.data("star-reason"),d=t.data("token"),m=t.data("disable-with");t.attr("disabled",!0),t.html(m);function h(){return!0}function g(){
throw new Error(`comb-json - ${JSON.stringify(r)}`)}function f(){t.find(".fa-spinner").remove(),t.attr("disabled",!1)}function b(){throw new Error(`combJson is empty; 
 button element - ${t[0].outerHTML} 
 parent menu element - ${t.parents(".options-menu")[0].outerHTML}.`)}r||b(),k({url:d?"/starred_share":"/create_issue",method:"post",body:{model:s,comb:r,comb_id:i,comment:u,star_reason:a,token:d}}).then(h).catch(g).finally(f)}je(function(){je(document).on("click","button.complaint",Jr)});import pe from"jquery";pe(function(){let e=pe(".plan-expiry-status");if(e.length>0){let r=function(){let u=0;function a(){i.each(function(){s--,s>=1?(pe(this).text(new Date(s*1e3).toISOString().substring(11,19)),pe(this).toggleClass("text-danger",s<3600)):(e.text(t),e.addClass("text-danger fw-bold"),clearInterval(u))})}
a(),u=setInterval(a,1e3)},t=e.data("expired"),o=pe(e.data("will-expire-html")),i=o.find(".will-expire"),s=i.data("utc");e.html(o),r()}});import Kr from"jquery";Kr(function(){function e(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}e()&&document.querySelectorAll('input[type="number"]').forEach(t=>{t.addEventListener("keypress",o=>{let i="0123456789eE.,-+";["Backspace","Delete","ArrowLeft","ArrowRight","Tab"].includes(o.key)||i.includes(
o.key)||o.preventDefault()}),t.addEventListener("paste",o=>{let i=(o.clipboardData||window.clipboardData).getData("text");/^[0-9eE.,+-]+$/.test(i)||o.preventDefault()})})});import{createApp as ia}from"vue";import{defineComponent as ta}from"vue";import Z from"jquery";import{Dropdown as oa}from"bootstrap";import{defineComponent as Qr}from"vue";var ni=Qr({name:"SearchSelectOption",props:{optionData:{type:Object,required:!0},index:{type:Number,required:!0},activeOptionsIndex:{type:Number,required:!0},countryFlag:{type:[String,null],default:null}},emits:["chooseSelected"],computed:{optionId(){return this.optionData.value},
optionLabel(){return this.optionData.label},isActive(){return this.index===this.activeOptionsIndex},isDivider(){return this.optionData.is_divider},isPlaceholder(){return this.optionData.is_placeholder},countryCode(){return this.optionData.country_code}},methods:{handleClick(){this.$emit("chooseSelected",this.optionId)}},
template:`
        <li v-if="isDivider">
            <hr class="dropdown-divider">
        </li>
        <li v-else
            :class="[{'d-flex': countryFlag}, {'active': isActive}]"
            @click="handleClick"
        >
            <span v-if="countryFlag" class="ms-2 d-inline-flex align-items-center">{{countryFlag}}</span>
            <span :class="['dropdown-item', 'cursor-pointer', {'ps-1': countryFlag, 'text-secondary': isPlaceholder}]" v-html="optionLabel"/>
        </li>
    `});var si=[127482,127475],ri=10,ai="\u{1F310}",Yr=50,Xr=.02;function li({firstRegionalIndicator:e,secondRegionalIndicator:t}){let o=String.fromCodePoint(e,t),i=document.createElement("canvas");i.width=64,i.height=64;let s=i.getContext("2d");s.textBaseline="top",s.font='48px "helvetica", "arial", "sans-serif"',s.clearRect(
0,0,i.width,i.height),s.fillText(o,0,0);let{data:r}=s.getImageData(0,0,i.width,i.height),u=0,a=0;for(let d=0;d<r.length;d+=4){let m=r[d],h=r[d+1],g=r[d+2];if(r[d+3]===0||!(m<250||h<250||g<250))continue;u++,(Math.abs(m-h)>10||Math.abs(h-g)>10||Math.abs(g-m)>10)&&a++}return u>Yr&&a/u>Xr}var di=ta({name:"SearchSelect",components:{SearchSelectOption:ni},data(){return{options:null,selectedOption:null,activeOptionIndex:null,searchDropdown:null,searchText:"",isAutoComputed:!1,countryCodeComputed:null,timeZoneComputed:null,IsCanRenderFlagEmoji:!0,countryFlagMap:{}}},props:{optionsString:{type:String,required:!0,
validator(e){return JSON.parse(e).every(t=>t.is_divider?!0:typeof t=="object"&&"label"in t&&"value"in t)}},closeAfterChoose:{type:Boolean,default:!0},isWithSearchField:{type:Boolean,default:!0},isUseCountryFlag:{type:Boolean,default:!1},scope:String,selectedOptionKey:String,modelName:String,isAuto:Boolean,isWithAutoCheckbox:Boolean,
autoCheckboxId:String,helpIconId:String,autoOptionValue:String,placeholderTextKey:String,isCountryDependent:Boolean,isTimeZoneDependent:Boolean,countriesOddsFormatsData:Object,timeZoneCountryCodesData:Object,timeZone:String,defaultOddsFormat:String,countryCode:String,formInputId:String,countriesMainCurrenciesData:Object,
defaultMainCurrency:String,isCurrenciesForm:Boolean,isFocusOnPrimaryOption:Boolean,isWithAddButton:Boolean},computed:{filteredOptions(){return this.searchText?this.options.filter(this.isShowFilteredOption):this.options},placeholderText(){return this.placeholderTextKey?this.$t(`search_select.placeholder.${this.placeholderTextKey}`)+
":":""},noDataText(){return this.$t("search_select.no_data")},selectedOptionLink(){return this.selectedOption.link},isDisabledComputed(){return this.isAutoComputed},isPlaceholderSelected(){return this.selectedValue==="placeholder"},selectedValue(){return this.selectedOption.value}},beforeMount(){this.isAutoComputed=this.
isAuto,this.options=JSON.parse(this.optionsString),this.selectedOption=this.options.find(e=>!e.is_primary&&e.value===this.selectedOptionKey)||{},this.activeOptionIndex=this.options.findIndex(e=>!e.is_primary&&e.value===this.selectedValue),this.countryCodeComputed=this.countryCode,this.timeZoneComputed=this.timeZone},mounted(){
this.initializeDropdown(),this.addListenerForDropdown(),Z(".search-select-placeholder").remove(),this.isWithAutoCheckbox&&Z(`#${this.autoCheckboxId}`).on("change",this.handleAutoCheckboxChange),this.isCountryDependent&&this.subscribeToCountryFieldValueChange(),this.isTimeZoneDependent&&this.subscribeToTimeZoneFieldValueChange(),
this.isUseCountryFlag&&this.handleInitializeCountryFlagMap(),this.isCurrenciesForm&&document.addEventListener("currency-delete",this.handleCurrencyDelete)},watch:{countryCodeComputed:"handleCountryCodeComputedChange",timeZoneComputed:"handleTimeZoneComputedChange",isAutoComputed:"handleIsAutoComputedChange"},methods:{handleInitializeCountryFlagMap(){
let e=0,t={};for(let o of this.options){if(o.country_code.toUpperCase()==="ALL"){t[o.id]=ai;continue}let i=this.convertCountryCodeToRegionalIndicators({countryCode:o.country_code});if(this.checkIfFlagCanBeRendered({regionalIndicators:i}))t[o.id]=String.fromCodePoint(...i);else if(e++,t[o.id]=String.fromCodePoint(...si),
e>=ri){this.IsCanRenderFlagEmoji=!1;return}}this.IsCanRenderFlagEmoji&&(this.countryFlagMap=t)},convertCountryCodeToRegionalIndicators({countryCode:e}){return[...e.toUpperCase()].map(t=>127462+(t.charCodeAt(0)-65))},checkIfFlagCanBeRendered({regionalIndicators:e}){return li({firstRegionalIndicator:e[0],secondRegionalIndicator:e[1]})},
getCountryFlagForOption({id:e}){return this.shouldRenderFlags()?this.countryFlagMap[e]:null},shouldRenderFlags(){return this.IsCanRenderFlagEmoji&&this.isUseCountryFlag},handleCountryCodeComputedChange(){this.isCountryDependent&&this.changeAutoFieldValue()},handleTimeZoneComputedChange(){this.isTimeZoneDependent&&this.
changeAutoFieldValue()},handleIsAutoComputedChange(e){Z(`#${this.helpIconId}`).toggleClass("d-none",!e),this.changeAutoFieldValue()},changeAutoFieldValue(){if(this.isAutoComputed)if(this.modelName==="siteCountry"){let t=this.timeZoneCountryCodesData[this.timeZoneComputed]||this.autoOptionValue;this.changeSelected(t)}else if(this.
modelName==="oddsFormat"){let t=this.countriesOddsFormatsData[this.countryCodeComputed]||this.defaultOddsFormat;this.changeSelected(t)}else if(this.modelName==="mainCurrency"){let t=this.countriesMainCurrenciesData[this.countryCodeComputed]||this.defaultMainCurrency;this.changeSelected(t)}else this.modelName==="timeZon\
e"&&this.changeSelected(this.autoOptionValue)},initializeDropdown(){this.searchDropdown=oa.getOrCreateInstance(this.$refs.buttonDropdown)},addListenerForDropdown(){this.$refs.buttonDropdown.addEventListener("show.bs.dropdown",this.handleDropdownShow),this.$refs.buttonDropdown.addEventListener("hide.bs.dropdown",this.handleHideDropdown)},
handleHideDropdown(){this.searchText="",document.removeEventListener("keydown",this.handleKeyDown,!0)},handleDropdownShow(){this.refreshActiveOptionIndex(),this.scrollToActiveOption(),this.focusToSearchInput(),document.addEventListener("keydown",this.handleKeyDown,!0)},scrollToActiveOption(){return L(this,null,function*(){
yield this.$nextTick();let e=this.$refs.optionsList.querySelector(".active");e==null||e.scrollIntoView({behavior:"instant",block:"nearest"})})},focusToSearchInput(){return L(this,null,function*(){this.isWithSearchField&&(yield this.$nextTick(),this.$refs.searchInput.focus())})},handleChangeSelected(e){this.changeSelected(
e)},changeSelected(o){return L(this,arguments,function*(e,{isEmitGlobalEvent:t=!0}={}){yield this.$nextTick();let i=this.modelName==="timeZone"?this.options[0]:{};this.selectedOption=this.options.find(s=>!s.is_primary&&s.value===e)||i,this.closeAfterChoose&&this.searchDropdown.hide(),this.selectedOptionLink?location=this.
selectedOptionLink:this.scope=="userSettings"&&this.formInputId&&!this.selectedOptionLink&&(Z(`#regional-settings-form input#${this.formInputId}`).val(this.selectedValue),Z(`#user-settings-form input#${this.formInputId}`).val(this.selectedValue)),t&&this.emitGlobalChangeEvent()})},emitGlobalChangeEvent(){this.modelName==
"siteCountry"?se({name:"settings-country-change",value:this.selectedOption}):this.modelName=="mainCurrency"?se({name:"main-currency-change",value:this.selectedOption}):this.modelName=="timeZone"&&se({name:"settings-time-zone-change",value:this.selectedOption})},handleKeyDown(e){if(e.key==="ArrowDown")e.preventDefault(),
this.activeOptionIndex<this.filteredOptions.length-1&&(this.activeOptionIndex++,this.filteredOptions[this.activeOptionIndex].is_divider&&this.activeOptionIndex++,this.scrollToActiveOption());else if(e.key==="ArrowUp")e.preventDefault(),this.activeOptionIndex>0&&(this.activeOptionIndex--,this.filteredOptions[this.activeOptionIndex].
is_divider&&this.activeOptionIndex--,this.scrollToActiveOption());else if(e.key==="Enter"&&(e.preventDefault(),this.activeOptionIndex>=0)){let t=this.filteredOptions[this.activeOptionIndex];t&&this.changeSelected(t.value)}},refreshActiveOptionIndex(){this.activeOptionIndex=this.filteredOptions.findIndex(e=>{let t=e.value===
this.selectedValue;return(this.isFocusOnPrimaryOption||!e.is_primary)&&t})},handleKeydownInSearchTextInput(e){["ArrowUp","ArrowDown"].includes(e.key)||this.refreshActiveOptionIndex()},isShowFilteredOption(e,t){if(e.is_divider||e.is_primary||e.is_placeholder)return!1;let i=this.options.findIndex(d=>!d.is_primary&&d.value===
e.value)===t,s=e.label.replaceAll(" ","").toLowerCase(),r=this.searchText.replaceAll(" ","").toLowerCase(),u=s.includes(r);return i&&(u||(()=>{let d=e.country_code;return d?d.toLowerCase().includes(r):!1})())},handleAutoCheckboxChange(e){let t=Z(e.target).is(":checked");this.isAutoComputed=t},subscribeToCountryFieldValueChange(){
document.addEventListener("settings-country-change",this.handleCountryFieldValueChange)},subscribeToTimeZoneFieldValueChange(){document.addEventListener("settings-time-zone-change",this.handleTimeZoneFieldValueChange)},handleCountryFieldValueChange(e){this.countryCodeComputed=e.detail.value},handleTimeZoneFieldValueChange(e){
this.timeZoneComputed=e.detail.value},handleAddButtonClick(){this.isPlaceholderSelected||this.modelName=="currency"&&(se({name:"currency-add",value:this.selectedOption}),this.changeSelected("placeholder"))},handleCurrencyDelete(e){let t=e.detail.deleted;if(this.selectedValue===t){this.uncheckAutoCheckbox();let o=e.detail.
fallback||this.defaultMainCurrency;this.changeSelected(o,{isEmitGlobalEvent:!1})}},uncheckAutoCheckbox(){Z(`#${this.autoCheckboxId}`).prop("checked",!1),Z(`#${this.autoCheckboxId}`).trigger("change")}},template:`
        <div
            class="d-flex align-items-center"
            :class="{
                'search-select-container-with-add-button': isWithAddButton
            }"
        >
            <button
                v-bind="$attrs"
                ref="buttonDropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                class="search-select-button form-select text-start text-truncated"
                :class="{
                    disabled: isDisabledComputed
                }"
                :disabled="isDisabledComputed"
            >
                <span
                    :class="{
                        'text-secondary': isPlaceholderSelected
                    }"
                    v-html="selectedOption.label"
                />
            </button>

            <button
                v-if="isWithAddButton"
                type="button"
                class="btn btn-primary search-select-add-button"
                v-text="'+'"
                @click="handleAddButtonClick"
            />

            <div
                class="dropdown-menu search-select-dropdown text w-100"
                data-popper-placement="bottom-start"
            >
                <div
                    v-if="isWithSearchField"
                    class="d-block w-100 px-2 mb-3"
                >
                    <input
                        id="search-select-input"
                        v-model="searchText"
                        ref="searchInput"
                        type="text"
                        class="form-control ps-2"
                        :placeholder="placeholderText"
                        @input="handleKeydownInSearchTextInput"
                    />
                </div>

                <ul
                    class="options-scroll-block ps-0 mb-0" 
                    ref="optionsList"
                >
                    <SearchSelectOption
                        v-for="(optionData, index) in filteredOptions"
                        :key="optionData.id"
                        :option-data="optionData"
                        :index="index"
                        :active-options-index="activeOptionIndex"
                        :country-flag="getCountryFlagForOption({ id: optionData.id })"
                        @choose-selected="handleChangeSelected"
                    />

                    <small
                        v-if="!filteredOptions.length"
                        class="text-muted d-block text-center"
                        v-text="noDataText"
                    />
                </ul>
            </div>
        </div>
    `});import ci from"jquery";import na from"dynamic";import{createI18n as sa}from"vue-i18n";var{locale:ra,translations:aa}=na.i18n,la=sa({locale:ra,messages:aa,fallbackLocale:"en"});function ui(){let e=ia({components:{SearchSelect:di}});return e.use(la),e}window.createSearchSelectApp=ui;ci(function(){ci('[data-is-with-search\
-select="true"]').each((e,t)=>{ui().mount(t)})});import J from"jquery";import pi from"dynamic";J(function(){let e=J(".rating-table"),t=!1;function o(){let f=new IntersectionObserver(function(b){t||(requestAnimationFrame(()=>{b.forEach(function(C){let _=J(C.target);if(C.isIntersecting){let w=_.data("src");_.length&&!_.attr("src")&&_.attr("src",w),i({img:_,isInteresting:!0})}else i({img:_,isInteresting:!1})}),t=!1}),
t=!0)},{root:document.querySelector(".scroll-container"),threshold:.1});J("img.bk-favicon").each(function(){f.observe(this)})}function i({img:f,isInteresting:b}){let C=f[0];b?C.complete&&C.naturalHeight!==0?s({img:f,isInteresting:b}):f.data("load-bound")||(f.on("load",function(){s({img:f,isInteresting:b})}),f.data("loa\
d-bound",!0)):s({img:f,isInteresting:b})}function s({img:f,isInteresting:b}){let _=f.closest(".placeholder-wrapper").find(".placeholder");_.length&&(f.toggleClass("opacity-0",!b),_.toggleClass("d-none",b))}e.length>0&&o();let r=pi.cookies.ratingColumnVisibility.name,u=pi.cookies.ratingColumnVisibility.defaultValue;function a(){
let f=q(r);return f?JSON.parse(f):u}function d(f){ee(r,JSON.stringify(f))}function m(f,b){J(`[data-column="${f}"]`).toggleClass("d-none",!b)}function h(f,b){f.on("change",function(){let C=J(this).is(":checked"),_=a(),w=T(S({},_),{[b]:C});m(b,C),d(w)})}function g(){let f=J("#toggleTypeColumn"),b=J("#toggleCryptoColumn");
f.length>0&&h(f,"type"),b.length>0&&h(b,"crypto")}g()});import we from"jquery";we(function(){let e=function({button:o,icon:i}){i.html('<span class="text-success fw-bold">\u2714</span>'),setTimeout(()=>location.reload(),1500),o.prop("disabled",!1)},t=function({button:o,icon:i}){i.html('<span class="text-danger fw-bold">\u2716</span>'),o.prop("disabled",!1)};we("#rebuildOverviewTableButton").on("cl\
ick",function(){let o=we("#rebuildStatusIcon"),i=we(this);i.prop("disabled",!0),o.html('<div class="spinner-border spinner-border-sm" role="status"></div>'),k({url:"/admin/bk_rating/rebuild_overview",method:"post"}).then(()=>e({button:i,icon:o})).catch(()=>t({button:i,icon:o}))})});var da={width:800,height:430};function mi({link:e}){let t=e.split("?")[1],i=new URLSearchParams(t).get("model");function s(d){let m=q(`calculator.${i}.${d}`),h=da[d];return m||h}let r=s("width"),u=s("height"),a=`menubar=0,resizable=1,width=${r},height=${u}`;window.open(e,"_blank",a)}var ca={width:750,height:400};function fi({link:e}){function t(r){let u=q(`converter.${r}`),a=ca[r];return u||a}let o=t("width"),i=t("height"),s=`menubar=0,resizable=1,width=${o},height=${i}`;window.open(e,"_blank",s)}import{Application as ua}from"@hotwired/stimulus";var Se=ua.start();Se.debug=!1;window.Stimulus=Se;import{lazyLoadControllersFrom as pa}from"@hotwired/stimulus-loading";pa("controllers",Se);import Te from"jquery";import ze from"jquery";function hi(e){ze(e).on("mousedown",function(t){t.button===1&&t.preventDefault()}),ze(e).on("mouseup",function(t){t.button===1&&(t.preventDefault(),ma(e))})}function ma(e){let t=ze(e).closest("form").attr("action"),o=new URL(t,window.location.origin);window.open(o,"_blank")}Te(function(){Te('[data-bs-trigger="manual"][data-bs-toggle="tooltip"]').each(function(){ue(this)})});Te(function(){Te('button[data-bs-toggle="tooltip"][type="submit"]').each(function(){hi(this)})});window.copyTextToClipboard=ha;window.trackEvent=function(e,t){window.gtag&&window.gtag("event",t,{event_category:e})};window.bootstrap={Popover:gi,Tooltip:ba,Modal:vi,Dropdown:yi};window.testError=function(){setTimeout(()=>{throw new Error("Sentry Error: test from function")})};window.debugTooltips=function(){x("[title\
]:visible").tooltip().tooltip("show")};x(document).on("click","a[data-popup],button[data-popup]",function(e){let t=x(this),o=t.data("popup"),i=!!o.calculator,s=!!o.converter,r=t.closest("form")[0].action;i?mi({link:r}):s?fi({link:r}):window.open(r,o[0],o[1]),e.preventDefault()});function bi(e){let t=!0;x(e.data("select")).
each(function(){this.checked||(t=!1)}),e.prop("checked",t)}x(function(){x("a[data-frel~=facebox]").facebox(),Fe(),Ie(),window.setupTooltips=Fe,window.setupPopovers=Ie,window.syncState=bi,x(document).on("click","input.all_selector:checkbox",function(){let e=x(this),t=e.data("select"),o=e.prop("checked");x(t).prop("check\
ed",o);let i=e.data("parentSync");i&&bi(x(i))}),x("body").removeClass("loading"),Ve()});(function(){function e(){let t=Math.round(Date.now()/6e4),o=q("stoken"),i=document.documentElement.dataset.sign,s=fa.hash(`${t}-${o}-${i}`),r=`${o}-${t}-${s}`;ee("sstoken",r,{expiresIn:1})}x(e),setInterval(e,3e4)})();x(document).on(
"click","a[data-post=true], a[data-del=true]",function(){var e=x(this);if(!e.data("href-disabled")){let o=function(){e.stopSpin(),e.data("href-disabled",!1)};e.data("href-disabled",!0),e.spin();var t={};e.data("del")&&(t._method="DELETE");let i;e.data("del")?i="delete":e.data("post")&&(i="post"),k({url:e.attr("href"),method:i,
body:t}).finally(o)}return!1}).on("click","#aside-expander, #overlay",function(){x(document).trigger("toggle.aside")}).on("toggle.aside",function(){var e=x(window).height(),t=x("header").height(),o=x("aside"),i=x("body");let s=e-t;o.css({top:t,left:0,maxHeight:s,overflow:"unset",width:"18rem"});function r(){let u=o.find(
"div.filter-submit").outerHeight(!0),a=o.find("div.block h3");if(!a[0])return null;a.addClass("pe-2");let d=x("aside div.alert").outerHeight(!0)||0,m=s-a[0].offsetHeight-u-d,h=o.find("div.compact-filter");h.css({maxHeight:m,overflow:"auto"}),h.addClass("pe-2 ps-1");let g=o.find("input.w-number"),f=h.find("select.form-s\
elect, .order-field");f.removeClass("w-auto"),g.css({width:(f[0].offsetWidth-h.find("span.separator")[0].offsetWidth)/2-1})}o.is(":visible")?(i.removeClass("aside-open"),x("#overlay").css({animation:"200ms half-opacity"}).addClass("hidden"),o.css({animation:"200ms full-opacity"})):(i.addClass("aside-open"),x("#overlay").
length===0&&i.append('<div id="overlay"></div>'),o.find("div.compact-filter")[0]?r():o.css({overflow:"auto"}),x("#overlay").css({animation:"200ms half-opacity reverse",top:t+"px"}).removeClass("hidden"),o.css({animation:"200ms full-opacity reverse"}))});x(window).resize(function(){x("#aside-expander").is(":visible")||(x(
"aside").removeAttr("style"),x("body").removeClass("aside-open"),x("#overlay").remove())});function Ve(){let{hash:e}=location;if(e==="#bookmakers-modal"){let t=x("#link_bookies_settings");t.length&&t.click()}else e==="#plans-payments-restricted-modal"&&x("#plans-payments-restricted-modal").length&&vi.getOrCreateInstance(
"#plans-payments-restricted-modal").show()}x(document).on("ready.facebox",Ve);x(document).on("shown.bs.modal",()=>{x('[data-bs-toggle="dropdown"]:visible').each((e,t)=>{yi.getOrCreateInstance(t).hide()})});window.onhashchange=Ve;window.setCountdownTimer=Je;x("#navigation-autoupdate-button-feature-popup, #navigation-hid\
den-records-link-feature-popup").on("show.bs.popover",()=>{var e;(e=gi.getInstance("#navigation-autoupdate-button"))==null||e.hide()});

