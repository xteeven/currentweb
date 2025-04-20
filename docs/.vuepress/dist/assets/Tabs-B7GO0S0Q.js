import{e as X,h as c,x as A,$ as vt,b as ye,av as ee,ae as ht,s as gt,p as We,q as mt,aC as xt,M as yt,k as Z,f as r,B as i,i as S,g as T,U as wt,u as St,j as Ee,aL as Ct,I as ne,J as oe,z as Rt,v as Tt,F as j,G as zt,m as O,D as $t,E as Pt,R as Wt,C as Et}from"./app-CXKPdMHI.js";import{N as _t}from"./Icon-DqtS5SBZ.js";import{N as Lt}from"./Close-BD4alOGP.js";import{i as At,f as ie,g as J,d as Bt}from"./replaceable-le26HWVq.js";import{b as we,u as kt,e as Q}from"./use-style-BovTl7ck.js";import{e as Se,f as jt,V as se,h as Ce,u as Ot,j as It}from"./Image-Hjg23maZ.js";const Ht=Se(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Se("&::-webkit-scrollbar",{width:0,height:0})]),Ft=X({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=A(null);function n(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const s=vt();return Ht.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:jt,ssr:s}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...l){var v;(v=e.value)===null||v===void 0||v.scrollTo(...l)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function Mt(e,n=[],s){const f={};return Object.getOwnPropertyNames(e).forEach(v=>{n.includes(v)||(f[v]=e[v])}),Object.assign(f,s)}function Nt(e,...n){return typeof e=="function"?e(...n):typeof e=="string"?ye(e):typeof e=="number"?ye(String(e)):null}var Dt=/\s/;function Vt(e){for(var n=e.length;n--&&Dt.test(e.charAt(n)););return n}var Ut=/^\s+/;function Xt(e){return e&&e.slice(0,Vt(e)+1).replace(Ut,"")}var Re=NaN,Gt=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,qt=/^0o[0-7]+$/i,Kt=parseInt;function Te(e){if(typeof e=="number")return e;if(At(e))return Re;if(ee(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ee(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Xt(e);var s=Yt.test(e);return s||qt.test(e)?Kt(e.slice(2),s?2:8):Gt.test(e)?Re:+e}var le=function(){return ht.Date.now()},Jt="Expected a function",Qt=Math.max,Zt=Math.min;function ea(e,n,s){var f,l,v,h,p,x,g=0,m=!1,E=!1,_=!0;if(typeof e!="function")throw new TypeError(Jt);n=Te(n)||0,ee(s)&&(m=!!s.leading,E="maxWait"in s,v=E?Qt(Te(s.maxWait)||0,n):v,_="trailing"in s?!!s.trailing:_);function y(b){var R=f,F=l;return f=l=void 0,g=b,h=e.apply(F,R),h}function z(b){return g=b,p=setTimeout(W,n),m?y(b):h}function C(b){var R=b-x,F=b-g,G=n-R;return E?Zt(G,v-F):G}function P(b){var R=b-x,F=b-g;return x===void 0||R>=n||R<0||E&&F>=v}function W(){var b=le();if(P(b))return $(b);p=setTimeout(W,C(b))}function $(b){return p=void 0,_&&f?y(b):(f=l=void 0,h)}function H(){p!==void 0&&clearTimeout(p),g=0,f=x=l=p=void 0}function L(){return p===void 0?h:$(le())}function u(){var b=le(),R=P(b);if(f=arguments,l=this,x=b,R){if(p===void 0)return z(x);if(E)return clearTimeout(p),p=setTimeout(W,n),y(x)}return p===void 0&&(p=setTimeout(W,n)),h}return u.cancel=H,u.flush=L,u}var ta="Expected a function";function de(e,n,s){var f=!0,l=!0;if(typeof e!="function")throw new TypeError(ta);return ee(s)&&(f="leading"in s?!!s.leading:f,l="trailing"in s?!!s.trailing:l),ea(e,n,{leading:f,maxWait:n,trailing:l})}const aa=X({name:"Add",render(){return c("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),fe=gt("n-tabs"),_e={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},fa=X({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:_e,slots:Object,setup(e){const n=We(fe,null);return n||mt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ra=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Mt(_e,["displayDirective"])),be=X({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ra,setup(e){const{mergedClsPrefixRef:n,valueRef:s,typeRef:f,closableRef:l,tabStyleRef:v,addTabStyleRef:h,tabClassRef:p,addTabClassRef:x,tabChangeIdRef:g,onBeforeLeaveRef:m,triggerRef:E,handleAdd:_,activateTab:y,handleClose:z}=We(fe);return{trigger:E,mergedClosable:Z(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?l.value:C}),style:v,addStyle:h,tabClass:p,addTabClass:x,clsPrefix:n,value:s,type:f,handleClose(C){C.stopPropagation(),!e.disabled&&z(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){_();return}const{name:C}=e,P=++g.id;if(C!==s.value){const{value:W}=m;W?Promise.resolve(W(e.name,s.value)).then($=>{$&&g.id===P&&y(C)}):y(C)}}}},render(){const{internalAddable:e,clsPrefix:n,name:s,disabled:f,label:l,tab:v,value:h,mergedClosable:p,trigger:x,$slots:{default:g}}=this,m=l??v;return c("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${n}-tabs-tab-pad`}):null,c("div",Object.assign({key:s,"data-name":s,"data-disabled":f?!0:void 0},xt({class:[`${n}-tabs-tab`,h===s&&`${n}-tabs-tab--active`,f&&`${n}-tabs-tab--disabled`,p&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${n}-tabs-tab__label`},e?c(yt,null,c("div",{class:`${n}-tabs-tab__height-placeholder`}," "),c(_t,{clsPrefix:n},{default:()=>c(aa,null)})):g?g():typeof m=="object"?m:Nt(m??s)),p&&this.type==="card"?c(Lt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:f}):null))}}),na=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[r("tabs-rail",[S("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),i("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[T("prefix, suffix",`
 display: flex;
 align-items: center;
 `),T("prefix","padding-right: 16px;"),T("suffix","padding-left: 16px;")]),i("top, bottom",[r("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),S("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[S("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[S("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),S("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[S("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[S("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[S("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),S("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[i("disabled",{cursor:"not-allowed"}),T("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),T("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[S("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[S("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),S("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),S("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),S("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),S("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[S("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[i("line-type",[i("top",[T("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[T("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),i("right",[T("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[T("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),T("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[T("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[T("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),wt("disabled",[S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")])]),i("left, right",`
 flex-direction: column; 
 `,[T("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),i("top",[i("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),oa=Object.assign(Object.assign({},Ee.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),pa=X({name:"Tabs",props:oa,slots:Object,setup(e,{slots:n}){var s,f,l,v;const{mergedClsPrefixRef:h,inlineThemeDisabled:p}=St(e),x=Ee("Tabs","-tabs",na,Ct,e,h),g=A(null),m=A(null),E=A(null),_=A(null),y=A(null),z=A(null),C=A(!0),P=A(!0),W=Ce(e,["labelSize","size"]),$=Ce(e,["activeName","value"]),H=A((f=(s=$.value)!==null&&s!==void 0?s:e.defaultValue)!==null&&f!==void 0?f:n.default?(v=(l=ie(n.default())[0])===null||l===void 0?void 0:l.props)===null||v===void 0?void 0:v.name:null),L=Ot($,H),u={id:0},b=Z(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ne(L,()=>{u.id=0,Y(),ue()});function R(){var t;const{value:a}=L;return a===null?null:(t=g.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function F(t){if(e.type==="card")return;const{value:a}=m;if(!a)return;const o=a.style.opacity==="0";if(t){const d=`${h.value}-tabs-bar--disabled`,{barWidth:w,placement:B}=e;if(t.dataset.disabled==="true"?a.classList.add(d):a.classList.remove(d),["top","bottom"].includes(B)){if(pe(["top","maxHeight","height"]),typeof w=="number"&&t.offsetWidth>=w){const k=Math.floor((t.offsetWidth-w)/2)+t.offsetLeft;a.style.left=`${k}px`,a.style.maxWidth=`${w}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(pe(["left","maxWidth","width"]),typeof w=="number"&&t.offsetHeight>=w){const k=Math.floor((t.offsetHeight-w)/2)+t.offsetTop;a.style.top=`${k}px`,a.style.maxHeight=`${w}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function G(){if(e.type==="card")return;const{value:t}=m;t&&(t.style.opacity="0")}function pe(t){const{value:a}=m;if(a)for(const o of t)a.style[o]=""}function Y(){if(e.type==="card")return;const t=R();t?F(t):G()}function ue(){var t;const a=(t=y.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=R();if(!o)return;const{scrollLeft:d,offsetWidth:w}=a,{offsetLeft:B,offsetWidth:k}=o;d>B?a.scrollTo({top:0,left:B,behavior:"smooth"}):B+k>d+w&&a.scrollTo({top:0,left:B+k-w,behavior:"smooth"})}const q=A(null);let te=0,I=null;function Le(t){const a=q.value;if(a){te=t.getBoundingClientRect().height;const o=`${te}px`,d=()=>{a.style.height=o,a.style.maxHeight=o};I?(d(),I(),I=null):I=d}}function Ae(t){const a=q.value;if(a){const o=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(te,o)}px`};I?(I(),I=null,d()):I=d}}function Be(){const t=q.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:d}=a;o!==void 0&&(t.style.maxHeight=o),d!==void 0&&(t.style.height=d)}}}const ve={value:[]},he=A("next");function ke(t){const a=L.value;let o="next";for(const d of ve.value){if(d===a)break;if(d===t){o="prev";break}}he.value=o,je(t)}function je(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":d}=e;a&&Q(a,t),o&&Q(o,t),d&&Q(d,t),H.value=t}function Oe(t){const{onClose:a}=e;a&&Q(a,t)}function ge(){const{value:t}=m;if(!t)return;const a="transition-disabled";t.classList.add(a),Y(),t.classList.remove(a)}const M=A(null);function ae({transitionDisabled:t}){const a=g.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=R();o&&M.value&&(M.value.style.width=`${o.offsetWidth}px`,M.value.style.height=`${o.offsetHeight}px`,M.value.style.transform=`translateX(${o.offsetLeft-Bt(getComputedStyle(a).paddingLeft)}px)`,t&&M.value.offsetWidth),t&&a.classList.remove("transition-disabled")}ne([L],()=>{e.type==="segment"&&oe(()=>{ae({transitionDisabled:!1})})}),Rt(()=>{e.type==="segment"&&ae({transitionDisabled:!0})});let me=0;function Ie(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||me===t.contentRect.width)return;me=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&ge(),o!=="segment"){const{placement:d}=e;re((d==="top"||d==="bottom"?(a=y.value)===null||a===void 0?void 0:a.$el:z.value)||null)}}const He=de(Ie,64);ne([()=>e.justifyContent,()=>e.size],()=>{oe(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ge()})});const N=A(!1);function Fe(t){var a;const{target:o,contentRect:{width:d,height:w}}=t,B=o.parentElement.parentElement.offsetWidth,k=o.parentElement.parentElement.offsetHeight,{placement:V}=e;if(!N.value)V==="top"||V==="bottom"?B<d&&(N.value=!0):k<w&&(N.value=!0);else{const{value:U}=_;if(!U)return;V==="top"||V==="bottom"?B-d>U.$el.offsetWidth&&(N.value=!1):k-w>U.$el.offsetHeight&&(N.value=!1)}re(((a=y.value)===null||a===void 0?void 0:a.$el)||null)}const Me=de(Fe,64);function Ne(){const{onAdd:t}=e;t&&t(),oe(()=>{const a=R(),{value:o}=y;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function re(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:d,offsetWidth:w}=t;C.value=o<=0,P.value=o+w>=d}else{const{scrollTop:o,scrollHeight:d,offsetHeight:w}=t;C.value=o<=0,P.value=o+w>=d}}const De=de(t=>{re(t.target)},64);Tt(fe,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),tabClassRef:j(e,"tabClass"),addTabStyleRef:j(e,"addTabStyle"),addTabClassRef:j(e,"addTabClass"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:h,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:L,tabChangeIdRef:u,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:ke,handleClose:Oe,handleAdd:Ne}),It(()=>{Y(),ue()}),zt(()=>{const{value:t}=E;if(!t)return;const{value:a}=h,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,d=`${a}-tabs-nav-scroll-wrapper--shadow-end`;C.value?t.classList.remove(o):t.classList.add(o),P.value?t.classList.remove(d):t.classList.add(d)});const Ve={syncBarPosition:()=>{Y()}},Ue=()=>{ae({transitionDisabled:!0})},xe=Z(()=>{const{value:t}=W,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],d=`${t}${o}`,{self:{barColor:w,closeIconColor:B,closeIconColorHover:k,closeIconColorPressed:V,tabColor:U,tabBorderColor:Xe,paneTextColor:Ge,tabFontWeight:Ye,tabBorderRadius:qe,tabFontWeightActive:Ke,colorSegment:Je,fontWeightStrong:Qe,tabColorSegment:Ze,closeSize:et,closeIconSize:tt,closeColorHover:at,closeColorPressed:rt,closeBorderRadius:nt,[O("panePadding",t)]:K,[O("tabPadding",d)]:ot,[O("tabPaddingVertical",d)]:it,[O("tabGap",d)]:st,[O("tabGap",`${d}Vertical`)]:lt,[O("tabTextColor",a)]:dt,[O("tabTextColorActive",a)]:ct,[O("tabTextColorHover",a)]:bt,[O("tabTextColorDisabled",a)]:ft,[O("tabFontSize",t)]:pt},common:{cubicBezierEaseInOut:ut}}=x.value;return{"--n-bezier":ut,"--n-color-segment":Je,"--n-bar-color":w,"--n-tab-font-size":pt,"--n-tab-text-color":dt,"--n-tab-text-color-active":ct,"--n-tab-text-color-disabled":ft,"--n-tab-text-color-hover":bt,"--n-pane-text-color":Ge,"--n-tab-border-color":Xe,"--n-tab-border-radius":qe,"--n-close-size":et,"--n-close-icon-size":tt,"--n-close-color-hover":at,"--n-close-color-pressed":rt,"--n-close-border-radius":nt,"--n-close-icon-color":B,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":V,"--n-tab-color":U,"--n-tab-font-weight":Ye,"--n-tab-font-weight-active":Ke,"--n-tab-padding":ot,"--n-tab-padding-vertical":it,"--n-tab-gap":st,"--n-tab-gap-vertical":lt,"--n-pane-padding-left":J(K,"left"),"--n-pane-padding-right":J(K,"right"),"--n-pane-padding-top":J(K,"top"),"--n-pane-padding-bottom":J(K,"bottom"),"--n-font-weight-strong":Qe,"--n-tab-color-segment":Ze}}),D=p?kt("tabs",Z(()=>`${W.value[0]}${e.type[0]}`),xe,e):void 0;return Object.assign({mergedClsPrefix:h,mergedValue:L,renderedNames:new Set,segmentCapsuleElRef:M,tabsPaneWrapperRef:q,tabsElRef:g,barElRef:m,addTabInstRef:_,xScrollInstRef:y,scrollWrapperElRef:E,addTabFixed:N,tabWrapperStyle:b,handleNavResize:He,mergedSize:W,handleScroll:De,handleTabsResize:Me,cssVars:p?void 0:xe,themeClass:D==null?void 0:D.themeClass,animationDirection:he,renderNameListRef:ve,yScrollElRef:z,handleSegmentResize:Ue,onAnimationBeforeLeave:Le,onAnimationEnter:Ae,onAnimationAfterEnter:Be,onRender:D==null?void 0:D.onRender},Ve)},render(){const{mergedClsPrefix:e,type:n,placement:s,addTabFixed:f,addable:l,mergedSize:v,renderNameListRef:h,onRender:p,paneWrapperClass:x,paneWrapperStyle:g,$slots:{default:m,prefix:E,suffix:_}}=this;p==null||p();const y=m?ie(m()).filter(u=>u.type.__TAB_PANE__===!0):[],z=m?ie(m()).filter(u=>u.type.__TAB__===!0):[],C=!z.length,P=n==="card",W=n==="segment",$=!P&&!W&&this.justifyContent;h.value=[];const H=()=>{const u=c("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:s==="top"||s==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),C?y.map((b,R)=>(h.value.push(b.props.name),ce(c(be,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:R!==0&&(!$||$==="center"||$==="start"||$==="end")}),b.children?{default:b.children.tab}:void 0)))):z.map((b,R)=>(h.value.push(b.props.name),ce(R!==0&&!$?Pe(b):b))),!f&&l&&P?$e(l,(C?y.length:z.length)!==0):null,$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&l?c(se,{onResize:this.handleTabsResize},{default:()=>u}):u,P?c("div",{class:`${e}-tabs-pad`}):null,P?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},L=W?"top":s;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${v}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${L}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${L}`,`${e}-tabs-nav`]},we(E,u=>u&&c("div",{class:`${e}-tabs-nav__prefix`},u)),W?c(se,{onResize:this.handleSegmentResize},{default:()=>c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),C?y.map((u,b)=>(h.value.push(u.props.name),c(be,Object.assign({},u.props,{internalCreatedByPane:!0,internalLeftPadded:b!==0}),u.children?{default:u.children.tab}:void 0))):z.map((u,b)=>(h.value.push(u.props.name),b===0?u:Pe(u))))}):c(se,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(L)?c(Ft,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),f&&l&&P?$e(l,!0):null,we(_,u=>u&&c("div",{class:`${e}-tabs-nav__suffix`},u))),C&&(this.animated&&(L==="top"||L==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:g,class:[`${e}-tabs-pane-wrapper`,x]},ze(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ze(y,this.mergedValue,this.renderedNames)))}});function ze(e,n,s,f,l,v,h){const p=[];return e.forEach(x=>{const{name:g,displayDirective:m,"display-directive":E}=x.props,_=z=>m===z||E===z,y=n===g;if(x.key!==void 0&&(x.key=g),y||_("show")||_("show:lazy")&&s.has(g)){s.has(g)||s.add(g);const z=!_("if");p.push(z?$t(x,[[Pt,y]]):x)}}),h?c(Wt,{name:`${h}-transition`,onBeforeLeave:f,onEnter:l,onAfterEnter:v},{default:()=>p}):p}function $e(e,n){return c(be,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Pe(e){const n=Et(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function ce(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{pa as N,fa as a};
