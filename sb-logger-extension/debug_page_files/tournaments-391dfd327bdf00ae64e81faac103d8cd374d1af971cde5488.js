var ct=Object.defineProperty;var G=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var H=(e,t,r)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t)=>{for(var r in t||(t={}))lt.call(t,r)&&H(e,r,t[r]);if(G)for(var r of G(t))dt.call(t,r)&&H(e,r,t[r]);return e};var M=(e,t,r)=>new Promise((n,o)=>{var c=u=>{try{s(r.next(u))}catch(m){o(m)}},p=u=>{try{s(r.throw(u))}catch(m){o(m)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(c,p);s((r=r.apply(e,t)).next())});import{createApp as Cn,computed as F}from"vue";import{createI18n as xn}from"vue-i18n";function mt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var k=mt;var ht=typeof global=="object"&&global&&global.Object===Object&&global,z=ht;var pt=typeof self=="object"&&self&&self.Object===Object&&self,ft=z||pt||Function("return this")(),P=ft;var gt=function(){return P.Date.now()},A=gt;var Ct=/\s/;function xt(e){for(var t=e.length;t--&&Ct.test(e.charAt(t)););return t}var Z=xt;var yt=/^\s+/;function bt(e){return e&&e.slice(0,Z(e)+1).replace(yt,"")}var X=bt;var vt=P.Symbol,g=vt;var Y=Object.prototype,kt=Y.hasOwnProperty,Tt=Y.toString,T=g?g.toStringTag:void 0;function St(e){var t=kt.call(e,T),r=e[T];try{e[T]=void 0;var n=!0}catch(c){}var o=Tt.call(e);return n&&(t?e[T]=r:delete e[T]),o}var K=St;var Pt=Object.prototype,At=Pt.toString;function It(e){return At.call(e)}var Q=It;var Et="[object Null]",Ot="[object Undefined]",ee=g?g.toStringTag:void 0;function Lt(e){return e==null?e===void 0?Ot:Et:ee&&ee in Object(e)?K(e):Q(e)}var te=Lt;function wt(e){return e!=null&&typeof e=="object"}var re=wt;var Ft="[object Symbol]";function Rt(e){return typeof e=="symbol"||re(e)&&te(e)==Ft}var I=Rt;var ne=NaN,Nt=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,Dt=/^0o[0-7]+$/i,jt=parseInt;function $t(e){if(typeof e=="number")return e;if(I(e))return ne;if(k(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=k(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=X(e);var r=Mt.test(e);return r||Dt.test(e)?jt(e.slice(2),r?2:8):
Nt.test(e)?ne:+e}var D=$t;var Ut="Expected a function",Bt=Math.max,qt=Math.min;function Vt(e,t,r){var n,o,c,p,s,u,m=0,l=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(Ut);t=D(t)||0,k(r)&&(l=!!r.leading,d="maxWait"in r,c=d?Bt(D(r.maxWait)||0,t):c,f="trailing"in r?!!r.trailing:f);function R(a){var C=n,v=o;return n=o=void 0,m=a,p=e.apply(
v,C),p}function it(a){return m=a,s=setTimeout(S,t),l?R(a):p}function at(a){var C=a-u,v=a-m,W=t-C;return d?qt(W,c-v):W}function V(a){var C=a-u,v=a-m;return u===void 0||C>=t||C<0||d&&v>=c}function S(){var a=A();if(V(a))return _(a);s=setTimeout(S,at(a))}function _(a){return s=void 0,f&&n?R(a):(n=o=void 0,p)}function st(){
s!==void 0&&clearTimeout(s),m=0,n=u=o=s=void 0}function ut(){return s===void 0?p:_(A())}function N(){var a=A(),C=V(a);if(n=arguments,o=this,u=a,C){if(s===void 0)return it(u);if(d)return clearTimeout(s),s=setTimeout(S,t),R(u)}return s===void 0&&(s=setTimeout(S,t)),p}return N.cancel=st,N.flush=ut,N}var j=Vt;function _t(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var oe=_t;var Wt=Array.isArray,ie=Wt;var Gt=1/0,ae=g?g.prototype:void 0,se=ae?ae.toString:void 0;function ue(e){if(typeof e=="string")return e;if(ie(e))return oe(e,ue)+"";if(I(e))return se?se.call(e):"";var t=e+"";return t=="0"&&1/e==-Gt?"-0":t}var ce=ue;function Ht(e){return e==null?"":ce(e)}var x=Ht;function Jt(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var c=Array(o);++n<o;)c[n]=e[n+t];return c}var le=Jt;function zt(e,t,r){var n=e.length;return r=r===void 0?n:r,!t&&r>=n?e:le(e,t,r)}var de=zt;var Zt="\\ud800-\\udfff",Xt="\\u0300-\\u036f",Yt="\\ufe20-\\ufe2f",Kt="\\u20d0-\\u20ff",Qt=Xt+Yt+Kt,er="\\ufe0e\\ufe0f",tr="\\u200d",rr=RegExp("["+tr+Zt+Qt+er+"]");function nr(e){return rr.test(e)}var E=nr;function or(e){return e.split("")}var me=or;var he="\\ud800-\\udfff",ir="\\u0300-\\u036f",ar="\\ufe20-\\ufe2f",sr="\\u20d0-\\u20ff",ur=ir+ar+sr,cr="\\ufe0e\\ufe0f",lr="["+he+"]",$="["+ur+"]",U="\\ud83c[\\udffb-\\udfff]",dr="(?:"+$+"|"+U+")",pe="[^"+he+"]",fe="(?:\\ud83c[\\udde6-\\uddff]){2}",ge="[\\ud800-\\udbff][\\udc00-\\udfff]",mr="\\u200d",Ce=dr+"?",xe="["+cr+
"]?",hr="(?:"+mr+"(?:"+[pe,fe,ge].join("|")+")"+xe+Ce+")*",pr=xe+Ce+hr,fr="(?:"+[pe+$+"?",$,fe,ge,lr].join("|")+")",gr=RegExp(U+"(?="+U+")|"+fr+pr,"g");function Cr(e){return e.match(gr)||[]}var ye=Cr;function xr(e){return E(e)?ye(e):me(e)}var be=xr;function yr(e){return function(t){t=x(t);var r=E(t)?be(t):void 0,n=r?r[0]:t.charAt(0),o=r?de(r,1).join(""):t.slice(1);return n[e]()+o}}var ve=yr;var br=ve("toUpperCase"),ke=br;function vr(e){return ke(x(e).toLowerCase())}var Te=vr;function kr(e,t,r,n){var o=-1,c=e==null?0:e.length;for(n&&c&&(r=e[++o]);++o<c;)r=t(r,e[o],o,e);return r}var Se=kr;function Tr(e){return function(t){return e==null?void 0:e[t]}}var Pe=Tr;var Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"\
i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"A\
e",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"\
e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",
\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"\
r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",
\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pr=Pe(Sr),Ae=Pr;var Ar=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ir="\\u0300-\\u036f",Er="\\ufe20-\\ufe2f",Or="\\u20d0-\\u20ff",Lr=Ir+Er+Or,wr="["+Lr+"]",Fr=RegExp(wr,"g");function Rr(e){return e=x(e),e&&e.replace(Ar,Ae).replace(Fr,"")}var Ie=Rr;var Nr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Mr(e){return e.match(Nr)||[]}var Ee=Mr;var Dr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function jr(e){return Dr.test(e)}var Oe=jr;var Ne="\\ud800-\\udfff",$r="\\u0300-\\u036f",Ur="\\ufe20-\\ufe2f",Br="\\u20d0-\\u20ff",qr=$r+Ur+Br,Me="\\u2700-\\u27bf",De="a-z\\xdf-\\xf6\\xf8-\\xff",Vr="\\xac\\xb1\\xd7\\xf7",_r="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Wr="\\u2000-\\u206f",Gr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u\
2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",je="A-Z\\xc0-\\xd6\\xd8-\\xde",Hr="\\ufe0e\\ufe0f",$e=Vr+_r+Wr+Gr,Ue="['\u2019]",Le="["+$e+"]",Jr="["+qr+"]",Be="\\d+",zr="["+Me+"]",qe="["+De+"]",Ve="[^"+Ne+$e+Be+Me+De+je+"]",Zr="\\ud83c[\\udffb-\\udfff]",Xr="(?:"+Jr+"|"+Zr+")",Yr="[^"+Ne+"]",
_e="(?:\\ud83c[\\udde6-\\uddff]){2}",We="[\\ud800-\\udbff][\\udc00-\\udfff]",b="["+je+"]",Kr="\\u200d",we="(?:"+qe+"|"+Ve+")",Qr="(?:"+b+"|"+Ve+")",Fe="(?:"+Ue+"(?:d|ll|m|re|s|t|ve))?",Re="(?:"+Ue+"(?:D|LL|M|RE|S|T|VE))?",Ge=Xr+"?",He="["+Hr+"]?",en="(?:"+Kr+"(?:"+[Yr,_e,We].join("|")+")"+He+Ge+")*",tn="\\d*(?:1st|2nd|3\
rd|(?![123])\\dth)(?=\\b|[A-Z_])",rn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nn=He+Ge+en,on="(?:"+[zr,_e,We].join("|")+")"+nn,an=RegExp([b+"?"+qe+"+"+Fe+"(?="+[Le,b,"$"].join("|")+")",Qr+"+"+Re+"(?="+[Le,b+we,"$"].join("|")+")",b+"?"+we+"+"+Fe,b+"+"+Re,rn,tn,Be,on].join("|"),"g");function sn(e){return e.match(
an)||[]}var Je=sn;function un(e,t,r){return e=x(e),t=r?void 0:t,t===void 0?Oe(e)?Je(e):Ee(e):e.match(t)||[]}var ze=un;var cn="['\u2019]",ln=RegExp(cn,"g");function dn(e){return function(t){return Se(ze(Ie(t).replace(ln,"")),e,"")}}var O=dn;var ti=O(function(e,t,r){return t=t.toLowerCase(),e+(r?Te(t):t)});var oi=O(function(e,t,r){return e+(r?"_":"")+t.toLowerCase()});import y from"jquery";import{Tooltip as nt,Popover as yn,Modal as bn}from"bootstrap";import vn from"dynamic";import w from"jquery";import{axios as Ke}from"utils";import mn from"jquery";(function(e){let t='<span data-spin-count=1 class="spinner-border spinner-border-sm" id="spinner"></span>';e.fn.spin=function(){return this.append(t)},e.fn.spinIncr=function(){var r=this.next("#spinner");if(r.length===0)return this.after(t);var n=parseInt(r.attr("data-spin-count"));return r.attr(
"data-spin-count",n+1),r},e.fn.spinDecr=function(){var r=this.next("#spinner");if(r.length>0){var n=parseInt(r.attr("data-spin-count"))-1;n>0?r.attr("data-spin-count",n):r.remove()}return this},e.fn.stopSpin=function(){return this.next("#spinner").remove(),this.find("#spinner").remove(),this},e.stopAllSpins=function(){
e("#spinner").remove()}})(mn);import{Popover as ki,Tooltip as Ti}from"bootstrap";import L from"dynamic";var Ze=L.symbols;function Xe(e=1){return new Promise(t=>setTimeout(t,e))}var hn=L.i18n.locale,pn=L.i18n.translations[hn],fn=L.i18n.translations.en,Ye=(pn||fn).js;var Pi=location.protocol==="https:";function B({url:e,method:t,params:r,body:n,timeout:o=5e4}){var m;let p={Accept:"application/javascript","X-Requested-With":"XMLHttpRequest","X-CSRF-Token":(m=document.querySelector('meta[name="csrf-token"]'))==null?void 0:m.content,"Cache-Control":"no-cache"},s={url:e,method:t,params:r,data:n,headers:p,timeout:o};function u(l){
let{request:d}=l;if(!(d!=null&&d.readyState)||!(d!=null&&d.status)||location.href.includes("/surebets?format=json"))return;w.stopAllSpins(),w(document).trigger("close.facebox"),window.trackEvent("AjaxError",l.message),console.error(`Request error: ${l.message}`);let f="ajax-error-"+new Date().getTime();w.flashError(Ye.
internal_error,"ajax_internal_error",f),setTimeout(function(){w("."+f).remove()},6e4)}return Ke.interceptors.response.use(function(l){var f;return(f=l.headers["content-type"])!=null&&f.match(/(text|application)\/javascript/)&&gn(l.data),l},function(l){return u(l),Promise.reject(l)}),Ke(s)}function gn(e){let t=document.
createElement("script"),r=document.querySelector("meta[name=csp-nonce]");t.setAttribute("nonce",r==null?void 0:r.content),t.text=e,document.head.appendChild(t).parentNode.removeChild(t)}var Qe={template:`
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
handleUserCountryOptionClick(){let e={countryName:this.userCountryName,countryCode:this.userCountryCode};this.setCountryNameAndCode(e)},setCountryNameAndCode({countryName:e,countryCode:t}){this.selectedCountryCode=t;let r={countryName:e,countryCode:t};this.$emit("countryOptionClick",r)},handleAllCountriesOptionClick(){
let e={countryName:null,countryCode:null};this.setCountryNameAndCode(e)},handleCountryOptionClick({countryName:e,countryCode:t}){let r={countryName:e,countryCode:t};this.setCountryNameAndCode(r)}}};function et({app:e}){return e.component("country-select-button",Qe),{template:`
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
this.$emit("click",this.inputTextFormatted)},handleCountryOptionClick({countryName:t,countryCode:r}){this.countryNameComputed=t,this.countryCodeComputed=r,this.handleClick()}}}}var h=document.querySelector('meta[name="session-data"]').dataset,Li=JSON.parse(h.isStaff),wi=h.domain,Fi=h.serviceWorkerPath,Ri=parseInt(h.selectedAudioIndex),tt=JSON.parse(h.isUserLoggedIn),q=JSON.parse(h.isCompactView),Ni=JSON.parse(h.isNewSurebetsAutoupdateAvailable),Mi=JSON.parse(h.productPageMaximumLimit),Di=JSON.
parse(h.productPageUltimateLimit),ji=JSON.parse(h.isUserComplexConditionsAvailable),$i=h.requestMethod;var rt=!1,{locale:kn,translations:Tn}=vn.i18n,Sn=xn({locale:kn,messages:Tn,fallbackLocale:"en"}),ot=document.getElementById("filter-tournaments-modal"),i=Cn({provide(){return{tooltipShowDelay:this.tooltipShowDelay,isUserLoggedIn:tt,isCompactView:q}},data(){return{tooltipShowDelay:150}}});i.use(Sn);i.component("tourname\
nts-action",{template:`
      <div
        class="form-check form-check-inline my-2 me-4"
        :class="{
            'visibly-disabled': isVisiblyDisabled
        }"
    >
        <input
          class="form-check-input me-2"
          type="radio"
          name="tournaments-actions"
          :id="elementId"
          :data-action="action"
          :checked="isChecked"
          @change="handleChange"
        >

        <label
          class="form-check-label m-0"
          :for="elementId"
          v-text="actionText"
        />

        <abbr
            ref="tooltip"
            class="cursor-help ms-2"
        >
            <i class="fa-solid fa-question-circle" />
        </abbr>
      </div>
    `,inject:["savedTournamentsAction","changeSelectedTournamentsAction","isEnableCategoriesChecked","isAllCategoriesChecked","isEnableTournamentsChecked","tooltipShowDelay"],props:{action:String},computed:{isChecked(){return this.action===this.savedTournamentsAction},actionText(){return this.$t(`filter.tournaments.sel\
ected.tournaments.actions.${this.action}`)},elementId(){return`tournaments-${this.action}`},isVisiblyDisabled(){return this.action==="add"&&this.isEnableTournamentsChecked&&(!this.isEnableCategoriesChecked||this.isAllCategoriesChecked)},tooltipOptions(){return{title:this.tooltipText,delay:{show:this.tooltipShowDelay}}},
tooltipText(){return this.$t(`filter.tournaments.selected.tournaments.actions_tooltips.${this.action}`)}},mounted(){new nt(this.$refs.tooltip,this.tooltipOptions)},methods:{handleChange(){this.changeSelectedTournamentsAction(this.action)}}});i.component("tournaments-actions",{template:`
      <div
        class="mb-2"
        id="tournaments-actions"
    >
        <tournaments-action
          v-for="action in tournamentsActions"
          :key="action"
          :action="action"
        />
      </div>
    `,inject:["tournamentsActions"]});i.component("selected-tournament-item",{template:`
      <div
        class="d-flex align-items-center py-2 selected-tournament-item"
        :class="{
            'visibly-disabled': isDisabled
        }"
        :data-id="tournamentId"
      >
        <button
          class="btn btn-light px-2 me-2"
          v-html="symbols.en_dash"
          @click="handleRemoveButtonClick"
        />

        <tournament-entity-icon
            :tournament-data="tournamentData"
        />

        <div
          v-text="fullName"
        />
      </div>
    `,data(){return{symbols:Ze}},props:{tournamentData:Object},emits:["removeButtonClick"],computed:{tournamentId(){return this.tournamentData.entity_id},fullName(){return this.tournamentData.full_name},isDisabled(){return this.tournamentData.is_disabled}},methods:{handleRemoveButtonClick(){this.$emit("removeButtonClic\
k",this.tournamentId)}}});i.component("selected-tournaments-checkbox-header",{template:`
        <div class="form-check mb-2">
            <input
                class="form-check-input me-2"
                type="checkbox"
                id="selected-tournaments-option"
                :checked="isEnableTournaments"
                @change="handleIsEnableCheckedChange"
            >

            <label
                class="fw-bold"
                id="selected-tournaments-header"
                for="selected-tournaments-option"
                v-text="headerTextWithCounter"
            />
        </div>
    `,inject:["isEnableTournaments","changeIsEnableTournamentsChecked","tournamentsLimit"],props:{tournamentsCount:{type:Number,required:!0}},computed:{headerTextWithCounter(){return`${this.headerText} (${this.tournamentsCount} / ${this.tournamentsLimit}):`},headerText(){return this.$t("filter.tournaments.selected.tour\
naments.header")}},methods:{handleIsEnableCheckedChange(e){this.changeIsEnableTournamentsChecked(e.target.checked)}}});i.component("selected-tournaments",{template:`
        <selected-tournaments-checkbox-header
            :tournaments-count="tournamentsCount"
        />

        <div
            class="tournaments-options-section-content"
            :class="{
                'fully-disabled': !isEnableTournamentsChecked
            }"
        >
            <tournaments-actions />

            <div
                v-if="tournamentsCount"
                id="selected-tournaments-list"
            >
                <selected-tournament-item
                    v-for="tournamentData in tournaments"
                    :key="tournamentData.entity_id"
                    :tournament-data="tournamentData"
                    @remove-button-click="handleRemoveButtonClick"
                />
            </div>
            <div
                v-else
                class="text-secondary"
                id="selected-tournaments-description-section"
                v-text="descriptionText"
            />
        </div>
    `,inject:["isEnableTournamentsChecked","tournamentsLimit"],props:{tournaments:{type:Array,required:!0}},emits:["removeButtonClick"],computed:{descriptionText(){return this.$t("filter.tournaments.selected.tournaments.description.main",{count:this.tournamentsLimit})},tournamentsCount(){return this.tournaments.length}},
methods:{handleRemoveButtonClick(e){this.$emit("removeButtonClick",e)}}});i.component("popular-button",et({app:i}));i.component("tournaments-search-field",{template:`
        <div class="input-group d-flex align-items-center mb-3">
            <div
                class="position-relative"
                id="tournaments-search-field-input-container"
            >
                <input
                    type="search"
                    class="ff form-control d-inline"
                    ref="searchFieldInput"
                    id="tournaments-search-field"
                    :placeholder="searchFieldPlaceholder"
                    :class="{
                        'rounded-0 rounded-start': isUserLoggedIn
                    }"
                    @input="handleInput"
                    required
                />

                <div
                    class="custom-input-icon-container"
                    v-html="searchFieldButton"
                />
            </div>

            <popular-button
                v-if="isUserLoggedIn"
                :is-use-country="isUseCountry"
                :user-country-code="userCountryCode"
                :user-country-name="userCountryName"
                :countries-with-codes="countriesWithCodes"
                @click="handlePopularButtonClick"
            />
            <div
                v-else
                class="ms-3"
                id="tournaments-sign-in-message"
                v-html="signInPartial"
            />
        </div>
    `,inject:["searchFieldPlaceholder","searchFieldButton","isUseCountry","userCountryCode","userCountryName","countriesWithCodes","isUserLoggedIn","signInPartial"],emits:["input"],methods:{handleInput:j(function(e){let{value:t}=e.target;this.$emit("input",t)},500),clearInput(){this.$refs.searchFieldInput.value="",this.
$emit("input","")},handlePopularButtonClick(e){this.$refs.searchFieldInput.value=e,this.$refs.searchFieldInput.focus(),this.$refs.searchFieldInput.dispatchEvent(new Event("input"))}},mounted(){y(".custom-input-close-icon").on("click",this.clearInput)}});i.component("tournaments-pagination-first-page",{template:`
      <li class="page-item">
        <a
          class="page-link"
          :class="{
            disabled: isFirstPage
          }"
          @click="handleClick"
        >
          <span
            v-html="'&laquo;'"
          />
        </a>
      </li>
    `,props:{isFirstPage:Boolean},emits:["click"],methods:{handleClick(){this.$emit("click")}}});i.component("tournaments-pagination-previous-page",{template:`
      <li class="page-item">
        <a
          class="page-link"
          :class="{
            disabled: isFirstPage
          }"
          @click="handleClick"
        >
          <span
            v-html="labelText"
          />
        </a>
      </li>
    `,props:{isFirstPage:Boolean},emits:["click"],computed:{labelText(){return this.$t("will_paginate.previous_label")}},methods:{handleClick(){this.$emit("click")}}});i.component("tournaments-pagination-next-page",{template:`
      <li class="page-item">
        <a
          class="page-link"
          :class="{
            disabled: isLastPage
          }"
          @click="handleClick"
        >
          <span
            v-html="labelText"
          />
        </a>
      </li>
    `,props:{isLastPage:Boolean},emits:["click"],computed:{labelText(){return this.$t("will_paginate.next_label")}},methods:{handleClick(){this.$emit("click")}}});i.component("tournaments-pagination-last-page",{template:`
      <li class="page-item">
        <a
          class="page-link"
          :class="{
            disabled: isLastPage
          }"
          @click="handleClick"
        >
          <span
            v-html="'&raquo;'"
          />
        </a>
      </li>
    `,props:{isLastPage:Boolean},emits:["click"],methods:{handleClick(){this.$emit("click")}}});i.component("tournaments-pagination",{template:`
      <div
        class="mb-3 d-flex justify-content-center"
        id="tournaments-pagination-container"
      >
        <ul class="pagination m-0">
          <tournaments-pagination-first-page
            :is-first-page="isFirstPage"
            @click="handleFirstPageClick"
          />

          <tournaments-pagination-previous-page
            :is-first-page="isFirstPage"
            @click="handlePreviousPageClick"
          />

          <li class="page-item">
            <a class="page-link disabled">
              <span
                v-text="pageTotalPagesLabel"
              />
            </a>
          </li>

          <tournaments-pagination-next-page
            :is-last-page="isLastPage"
            @click="handleNextPageClick"
          />

          <tournaments-pagination-last-page
            :is-last-page="isLastPage"
            @click="handleLastPageClick"
          />
        </ul>
      </div>
    `,props:{isFirstPage:Boolean,isLastPage:Boolean,page:Number,totalPagesCount:Number},emits:["firstPageClick","previousPageClick","nextPageClick","lastPageClick"],computed:{pageTotalPagesLabel(){return`${this.page} / ${this.totalPagesCount}`}},methods:{handleFirstPageClick(){this.$emit("firstPageClick")},handlePreviousPageClick(){
this.$emit("previousPageClick")},handleNextPageClick(){this.$emit("nextPageClick")},handleLastPageClick(){this.$emit("lastPageClick")}}});i.component("tournament-item-maximum-button",{template:`
      <button
        ref="button"
        class="btn btn-light px-2 me-2 tournament-item-add-button"
        v-text="'+'"
        tabindex="0"
      />
    `,inject:["tournamentsLimit","tournamentsLimitPopoverExtraMessage"],computed:{popoverOptions(){return{content:this.popoverTextFormatted,trigger:"focus",html:!0}},popoverTextFormatted(){return`${this.popoverTextMain}. ${this.tournamentsLimitPopoverExtraMessage}.`},popoverTextMain(){return this.$t("filter.tournaments\
.selected.tournaments.description.main",{count:this.tournamentsLimit})}},mounted(){new yn(this.$refs.button,this.popoverOptions)}});i.component("tournament-entity-icon",{template:`
        <i
            ref="icon"
            class="mx-2 cursor-help"
            :class="iconClass"
        />
    `,inject:["tooltipShowDelay"],props:{tournamentData:{type:Object,required:!0}},computed:{iconClass(){return`fa fa-${this.entityIcon}`},entityIcon(){return this.tournamentData.entity_icon},tooltipOptions(){return{title:this.tooltipText,delay:{show:this.tooltipShowDelay}}},tooltipText(){return this.$t(`filter.tournam\
ents.icons.${this.entityTranslationKey}`)},entityTranslationKey(){return this.tournamentData.entity_translation_key}},mounted(){new nt(this.$refs.icon,this.tooltipOptions)}});i.component("tournament-item",{template:`
      <div class="d-flex align-items-center py-2 tournament-item">
        <tournament-item-maximum-button
          v-if="isSelectedTournamentsMaximum"
        />
        <button
          v-else
          class="btn btn-light px-2 me-2 tournament-item-add-button"
          :data-id="tournamentId"
          v-text="'+'"
          @click="handleAddButtonClick"
        />

        <tournament-entity-icon
            :tournament-data="tournamentData"
        />

        <div
          v-text="fullName"
          class="tournament-name"
        />
      </div>
    `,props:{tournamentData:Object,isSelectedTournamentsMaximum:Boolean},emits:["addButtonClick"],computed:{tournamentId(){return this.tournamentData.entity_id},fullName(){return this.tournamentData.full_name}},methods:{handleAddButtonClick(){this.$emit("addButtonClick",this.tournamentId)}}});i.component("selected-tour\
naments-category",{template:`
        <div class="col form-check form-check-inline mb-2">
            <input
                class="form-check-input me-2"
                type="checkbox"
                :class="{
                    'visibly-disabled': isVisiblyDisabled
                }"
                :id="categoryId"
                :value="categoryId"
                :checked="isChecked"
                @change="handleChange"
            >

            <label
                class="mb-0"
                :class="{
                    'visibly-disabled': isVisiblyDisabled
                }"
                :for="categoryId"
                v-text="optionText"
            />
        </div>
    `,inject:["savedCategories","isTurnOffCategories","changeCheckedCategories"],props:{categoryId:{type:String,required:!0}},computed:{optionText(){return this.$t(`filter.tournaments.categories.${this.categoryId}`)},isChecked(){return this.savedCategories.includes(this.categoryId)},isVisiblyDisabled(){return this.isTurnOffCategories}},
methods:{handleChange(e){let{value:t,checked:r}=e.target;this.changeCheckedCategories({id:t,isChecked:r})}}});i.component("selected-tournaments-categories",{template:`
        <div class="row align-items-center mb-1">
            <span
                class="col"
                v-text="categoryGroupNameHeaderTextFormatted"
            />

            <selected-tournaments-category
                v-for="categoryId in categories"
                :key="categoryId"
                :category-id="categoryId"
            />
        </div>
    `,props:{categoryGroupName:{type:String,required:!0},categories:{type:Array,required:!0}},computed:{categoryGroupNameHeaderTextFormatted(){return`${this.categoryGroupNameHeaderText}:`},categoryGroupNameHeaderText(){return this.$t(`filter.tournaments.categories_groups.${this.categoryGroupName}`)}}});i.component("sel\
ected-tournaments-categories-groups-header",{template:`
        <div class="form-check mb-2">
            <input
                class="form-check-input me-2"
                type="checkbox"
                id="selected-tournaments-categories-option"
                :checked="isEnableCategories"
                @change="handleIsEnableCheckedChange"
            >

            <label
                class="fw-bold"
                for="selected-tournaments-categories-option"
                v-text="headerText"
            />
        </div>
    `,inject:["isEnableCategories","changeIsEnableCategoriesChecked"],computed:{headerText(){return this.$t("filter.tournaments.selected.categories.header")}},methods:{handleIsEnableCheckedChange(e){this.changeIsEnableCategoriesChecked(e.target.checked)}}});i.component("selected-tournaments-categories-groups",{template:`\

        <selected-tournaments-categories-groups-header />

        <div
            class="container tournaments-options-section-content"
            id="tournaments-categories"
            :class="{
                'fully-disabled': !isEnableCategoriesChecked
            }"
        >
            <selected-tournaments-categories
                v-for="categoriesGroupData in Object.entries(tournamentsCategoriesGroups)"
                :key="categoriesGroupData[0]"
                :category-group-name="categoriesGroupData[0]"
                :categories="categoriesGroupData[1]"
            />
        </div>

        <hr>
    `,inject:["tournamentsCategoriesGroups","isEnableCategoriesChecked"]});i.component("tournaments-search-section",{template:`
        <div class="d-flex align-items-center flex-wrap">
            <div
                class="me-3 fw-bold mb-3"
                v-text="headerTextFormatted"
            />

            <div class="d-flex align-items-center">
                <tournaments-search-field
                    @input="handleSearchFieldInput"
                />

                <i
                    class="fa-solid fa-spinner fa-pulse ms-3 mb-3"
                    :class="{
                        invisible: !isFilteredLoading
                    }"
                />
            </div>
        </div>
    `,props:{isFilteredLoading:Boolean},emits:["searchFieldInput"],computed:{headerTextFormatted(){return`${this.headerText}:`},headerText(){return this.$t("filter.tournaments.search.header")}},methods:{handleSearchFieldInput(e){this.$emit("searchFieldInput",e)}}});i.component("tournaments-filter-content",{template:`
        <div v-if="showModal">
            <selected-tournaments-categories-groups />

            <selected-tournaments
                :tournaments="selectedTournaments"
                @remove-button-click="handleTournamentRemoveButtonClick"
            />

            <hr>

            <tournaments-search-section
                :is-filtered-loading="isFilteredLoading"
                @search-field-input="handleSearchFieldInput"
            />

            <tournaments-pagination
                v-if="isShowPagination"
                :is-first-page="isFirstPage"
                :is-last-page="isLastPage"
                :page="page"
                :total-pages-count="totalPagesCount"
                @first-page-click="handleFirstPageClick"
                @previous-page-click="handlePreviousPageClick"
                @next-page-click="handleNextPageClick"
                @last-page-click="handleLastPageClick"
            />

            <template
                v-if="isApplyFilter"
            >
                <div
                    v-if="isAnyItems"
                    id="tournaments-list"
                >
                  <tournament-item
                      v-for="tournamentData in tournamentsSearchedVisiblePaginated"
                      :key="tournamentData.entity_id"
                      :tournament-data="tournamentData"
                      :is-selected-tournaments-maximum="isSelectedTournamentsMaximum"
                      @add-button-click="handleTournamentAddButtonClick"
                  />
                </div>

                <div
                    v-else-if="!isFilteredLoading"
                    class="text-center text-secondary"
                    id="no-tournaments-found-header"
                    v-text="notFoundText"
                />
            </template>
            <div
                v-else
                class="text-secondary"
                v-text="searchPromptText"
            />
        </div>
    `,provide(){return{tournamentsCategoriesGroups:this.tournamentsCategoriesGroups,tournamentsActions:this.tournamentsActions,savedTournamentsAction:this.savedTournamentsAction,savedCategories:this.savedCategories,isEnableTournaments:this.isEnableTournaments,isEnableCategories:this.isEnableCategories,searchFieldPlaceholder:this.
searchFieldPlaceholder,searchFieldButton:this.searchFieldButton,changeIsEnableTournamentsChecked:this.changeIsEnableTournamentsChecked,changeIsEnableCategoriesChecked:this.changeIsEnableCategoriesChecked,changeSelectedTournamentsAction:this.changeSelectedTournamentsAction,isTurnOffCategories:F(()=>this.isTurnOffCategories),
changeCheckedCategories:this.changeCheckedCategories,isAllCategoriesChecked:F(()=>this.isAllCategoriesChecked),isEnableTournamentsChecked:F(()=>this.isEnableTournamentsChecked),isEnableCategoriesChecked:F(()=>this.isEnableCategoriesChecked),userCountryCode:this.userCountryCode,userCountryName:this.userCountryName,isUseCountry:this.
isUseCountry,isStaff:this.isStaff,countriesWithCodes:this.countriesWithCodes,signInPartial:this.signInPartial,tournamentsLimit:this.tournamentsLimit,tournamentsLimitPopoverExtraMessage:this.tournamentsLimitPopoverExtraMessage}},props:{tournamentsCategoriesGroups:{type:Object,required:!0},tournamentsActions:{type:Array,
required:!0},savedTournaments:{type:Array,required:!0},savedTournamentsAction:{type:String,required:!0},savedCategories:{type:Array,required:!0},isEnableTournaments:{type:Boolean,required:!0},isEnableCategories:{type:Boolean,required:!0},searchFieldPlaceholder:{type:String,required:!0},searchFieldButton:{type:String,required:!0},
isUseCountry:{type:Boolean,required:!0},selectedSportsIds:{type:Array,required:!0},isStaff:{type:Boolean,required:!0},countriesWithCodes:{type:Array,required:!0},signInPartial:{type:String,required:!0},tournamentsLimit:{type:Number,required:!0},tournamentsLimitPopoverExtraMessage:{type:String,required:!0},userCountryCode:String,
userCountryName:String},data(){return{searchValue:"",page:1,itemsPerPage:20,searchMinimumSymbolsCount:3,tournamentsSearched:[],selectedTournaments:[],isFilteredLoading:!1,showModal:!0,isEnableTournamentsChecked:!1,isEnableCategoriesChecked:!1,selectedTournamentsAction:null,checkedCategories:[]}},computed:{tournamentsSearchedVisiblePaginated(){
return[...this.tournamentsSearchedVisible].splice((this.page-1)*this.itemsPerPage,this.itemsPerPage)},tournamentsSearchedVisible(){return this.tournamentsSearched.filter(e=>e.isVisible)},totalPagesCount(){return Math.ceil(this.tournamentsSearchedVisible.length/this.itemsPerPage)},isFirstPage(){return this.page===1},isLastPage(){
return this.page>=this.totalPagesCount},isSelectedTournamentsMaximum(){return this.selectedTournaments.length>=this.tournamentsLimit},isApplyFilter(){return this.isSearchOnlyCountry||this.isSearchMinimumSymbolsEntered},isSearchOnlyCountry(){return this.searchValueCountry&&!this.searchValueFormatted},isSearchMinimumSymbolsEntered(){
return this.searchValueFormatted.length>=this.searchMinimumSymbolsCount},searchValueFormatted(){return this.searchValue.replace(/\s+/g," ").replace(/(TOP:\w+)/i,"").trim()},searchValueCountry(){var e;return(e=this.searchValue.match(/TOP:(\w+)/i))==null?void 0:e[1]},isAnyItems(){return!!this.tournamentsSearchedVisiblePaginated.
length},isShowPagination(){return this.tournamentsSearchedVisible.length>this.itemsPerPage},notFoundText(){return this.$t("filter.tournaments.not_found")},searchPromptText(){return this.$t("filter.tournaments.search.prompt")},selectedTournamentsIds(){return this.selectedTournaments.map(e=>e.entity_id)},isTurnOffCategories(){
return this.isEnableTournamentsChecked&&this.selectedTournamentsAction=="only"},isAllCategoriesChecked(){return this.checkedCategories.length===this.categoriesTotalCount},categoriesTotalCount(){return Object.values(this.tournamentsCategoriesGroups).flat().length}},watch:{searchValue:"handleSearchValueChange",page:"hand\
lePageChange"},beforeMount(){this.selectedTournaments=this.savedTournaments,this.isEnableTournamentsChecked=this.isEnableTournaments,this.isEnableCategoriesChecked=this.isEnableCategories,this.selectedTournamentsAction=this.savedTournamentsAction,this.checkedCategories=this.savedCategories},mounted(){y("body, #filter-t\
ournaments-modal").on("keydown",this.handlePressEscButton),this.$nextTick(function(){let e=y("#filter-tournaments-modal")[0];this.modalBootstrap||(this.modalBootstrap=bn.getInstance(e)),e.addEventListener("hide.bs.modal",()=>{this.showModal=!1}),e.addEventListener("show.bs.modal",()=>{this.handleModalShow()})})},methods:{
handlePressEscButton(e){if(e.which===27&&y("#filter-tournaments-modal").hasClass("show")){let t=y("#tournaments-search-field")[0];t.value.length>0?(t.value="",this.handleSearchFieldInput("")):this.modalBootstrap.hide(),e.stopPropagation()}},handleModalShow(){this.showModal=!0},handleTournamentAddButtonClick(e){this.addTournamentToSelected(
e),this.highlightMatched()},handleSearchValueChange(){this.isApplyFilter?this.filterTournaments():this.tournamentsSearched=[]},handlePageChange(){this.highlightMatched()},handleSearchFieldInput(e){this.searchValue=e},highlightMatched(){return M(this,null,function*(){yield this.$nextTick(),y(".tournament-name").unmark(),
y(".tournament-name").mark(this.searchValueFormatted)})},addTournamentToSelected(e){let t=!!this.selectedTournaments.find(n=>n.entity_id===e);if(this.isSelectedTournamentsMaximum||t)return;let r=this.tournamentsSearched.find(n=>n.entity_id===e);this.selectedTournaments.push(J({},r)),r.isVisible=!1},handleTournamentRemoveButtonClick(e){
this.selectedTournaments=[...this.selectedTournaments].filter(r=>r.entity_id!==e);let t=this.tournamentsSearched.find(r=>r.entity_id===e);t&&(t.isVisible=!0,this.highlightMatched())},handleFirstPageClick(){this.page=1},handlePreviousPageClick(){this.isFirstPage||this.page--},handleNextPageClick(){this.isLastPage||this.
page++},handleLastPageClick(){this.page=this.totalPagesCount},isSelected(e){return this.selectedTournamentsIds.includes(e)},getRequest({loader:e,url:t,params:r,handler:n}){this[e]=!0,B({url:t,method:"get",params:r}).then(n).catch(this.handleGetRequestError)},handleGetRequestError(e){console.error(e.message)},handleFilterResponseSuccess(e){
let{tournaments:t}=e.data;this.tournamentsSearched=t,this.tournamentsSearched.map(r=>{r.isVisible=!this.selectedTournamentsIds.includes(r.entity_id)}),this.isFilteredLoading=!1,this.page=1,this.highlightMatched()},filterTournaments(){if(!this.isApplyFilter)return;let e={query:this.searchValueFormatted,country:this.searchValueCountry,
sports_ids:this.selectedSportsIds};this.getRequest({loader:"isFilteredLoading",url:"/tournaments/search",params:e,handler:this.handleFilterResponseSuccess})},changeIsEnableTournamentsChecked(e){this.isEnableTournamentsChecked=e},changeIsEnableCategoriesChecked(e){this.isEnableCategoriesChecked=e},changeSelectedTournamentsAction(e){
this.selectedTournamentsAction=e},changeCheckedCategories({id:e,isChecked:t}){t?this.addCategoryToCheckedCategories({id:e}):this.removeCategoryFromCheckedCategories({id:e})},addCategoryToCheckedCategories({id:e}){this.checkedCategories=[...this.checkedCategories,e]},removeCategoryFromCheckedCategories({id:e}){this.checkedCategories=
[...this.checkedCategories].filter(t=>t!==e)}}});i.component("tournaments-filter",{template:`
        <tournaments-filter-content
            :key="key"
        />
    `,data(){return{key:null}},mounted(){ot.addEventListener("hide.bs.modal",this.handleModalHide)},methods:{handleModalHide(){this.key=Math.random().toString()}}});function Pn(){return M(this,null,function*(){rt||(i.mount("#tournaments-filter"),rt=!0),q||(yield Xe(),document.getElementById("tournaments-search-field").
focus())})}ot.addEventListener("shown.bs.modal",Pn);

