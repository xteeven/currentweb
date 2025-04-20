import{e as we,f as vt,S as ht,V as ne,h as Se,u as gt,j as mt}from"./Image-Dx5KhJ9F.js";import{j as xt,E as ee,l as yt,f as fe,c as wt,t as St,a as r,d as s,e as S,b as T,O as Ct,R as Ce,u as Rt,_ as k,g as Tt,T as J}from"./light-XzTtbOfL.js";import{f as U,h as l,g as _,b as Re,i as _e,G as $t,F as zt,k as Z,y as oe,A as ie,l as Pt,p as Wt,s as O,u as _t,q as Et,v as Bt,U as jt,n as At}from"./app-Dbap0sVN.js";import{i as Lt,N as kt,f as se,g as Q,d as Ot}from"./light-Bmy0d06o.js";import{N as It}from"./Close-Dthulp1l.js";import{i as Ht}from"./light-CllX6m0q.js";const Ft=we(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[we("&::-webkit-scrollbar",{width:0,height:0})]),Mt=U({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=_(null);function n(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const i=xt();return Ft.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:vt,ssr:i}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...d){var v;(v=e.value)===null||v===void 0||v.scrollTo(...d)}})},render(){return l("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function Nt(e,n=[],i){const b={};return Object.getOwnPropertyNames(e).forEach(v=>{n.includes(v)||(b[v]=e[v])}),Object.assign(b,i)}function Dt(e,...n){return typeof e=="function"?e(...n):typeof e=="string"?Re(e):typeof e=="number"?Re(String(e)):null}var Vt=/\s/;function Ut(e){for(var n=e.length;n--&&Vt.test(e.charAt(n)););return n}var Xt=/^\s+/;function Gt(e){return e&&e.slice(0,Ut(e)+1).replace(Xt,"")}var Te=NaN,Yt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Kt=/^0o[0-7]+$/i,Jt=parseInt;function $e(e){if(typeof e=="number")return e;if(Lt(e))return Te;if(ee(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ee(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Gt(e);var i=qt.test(e);return i||Kt.test(e)?Jt(e.slice(2),i?2:8):Yt.test(e)?Te:+e}var le=function(){return yt.Date.now()},Qt="Expected a function",Zt=Math.max,ea=Math.min;function ta(e,n,i){var b,d,v,h,p,x,g=0,m=!1,E=!1,B=!0;if(typeof e!="function")throw new TypeError(Qt);n=$e(n)||0,ee(i)&&(m=!!i.leading,E="maxWait"in i,v=E?Zt($e(i.maxWait)||0,n):v,B="trailing"in i?!!i.trailing:B);function y(f){var R=b,F=d;return b=d=void 0,g=f,h=e.apply(F,R),h}function $(f){return g=f,p=setTimeout(W,n),m?y(f):h}function C(f){var R=f-x,F=f-g,G=n-R;return E?ea(G,v-F):G}function P(f){var R=f-x,F=f-g;return x===void 0||R>=n||R<0||E&&F>=v}function W(){var f=le();if(P(f))return z(f);p=setTimeout(W,C(f))}function z(f){return p=void 0,B&&b?y(f):(b=d=void 0,h)}function H(){p!==void 0&&clearTimeout(p),g=0,b=x=d=p=void 0}function j(){return p===void 0?h:z(le())}function u(){var f=le(),R=P(f);if(b=arguments,d=this,x=f,R){if(p===void 0)return $(x);if(E)return clearTimeout(p),p=setTimeout(W,n),y(x)}return p===void 0&&(p=setTimeout(W,n)),h}return u.cancel=H,u.flush=j,u}var aa="Expected a function";function de(e,n,i){var b=!0,d=!0;if(typeof e!="function")throw new TypeError(aa);return ee(i)&&(b="leading"in i?!!i.leading:b,d="trailing"in i?!!i.trailing:d),ta(e,n,{leading:b,maxWait:n,trailing:d})}const ra=U({name:"Add",render(){return l("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),na=Object.assign(Object.assign({},fe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),ua=U({name:"Scrollbar",props:na,setup(){const e=_(null);return Object.assign(Object.assign({},{scrollTo:(...i)=>{var b;(b=e.value)===null||b===void 0||b.scrollTo(i[0],i[1])},scrollBy:(...i)=>{var b;(b=e.value)===null||b===void 0||b.scrollBy(i[0],i[1])}}),{scrollbarInstRef:e})},render(){return l(ht,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),pe=wt("n-tabs"),Ee={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},va=U({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ee,slots:Object,setup(e){const n=_e(pe,null);return n||St("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return l("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),oa=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Nt(Ee,["displayDirective"])),be=U({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:oa,setup(e){const{mergedClsPrefixRef:n,valueRef:i,typeRef:b,closableRef:d,tabStyleRef:v,addTabStyleRef:h,tabClassRef:p,addTabClassRef:x,tabChangeIdRef:g,onBeforeLeaveRef:m,triggerRef:E,handleAdd:B,activateTab:y,handleClose:$}=_e(pe);return{trigger:E,mergedClosable:Z(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?d.value:C}),style:v,addStyle:h,tabClass:p,addTabClass:x,clsPrefix:n,value:i,type:b,handleClose(C){C.stopPropagation(),!e.disabled&&$(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){B();return}const{name:C}=e,P=++g.id;if(C!==i.value){const{value:W}=m;W?Promise.resolve(W(e.name,i.value)).then(z=>{z&&g.id===P&&y(C)}):y(C)}}}},render(){const{internalAddable:e,clsPrefix:n,name:i,disabled:b,label:d,tab:v,value:h,mergedClosable:p,trigger:x,$slots:{default:g}}=this,m=d??v;return l("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?l("div",{class:`${n}-tabs-tab-pad`}):null,l("div",Object.assign({key:i,"data-name":i,"data-disabled":b?!0:void 0},$t({class:[`${n}-tabs-tab`,h===i&&`${n}-tabs-tab--active`,b&&`${n}-tabs-tab--disabled`,p&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),l("span",{class:`${n}-tabs-tab__label`},e?l(zt,null,l("div",{class:`${n}-tabs-tab__height-placeholder`}," "),l(kt,{clsPrefix:n},{default:()=>l(ra,null)})):g?g():typeof m=="object"?m:Dt(m??i)),p&&this.type==="card"?l(It,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:b}):null))}}),ia=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[s("segment-type",[r("tabs-rail",[S("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),s("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),s("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),s("left, right",`
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
 `)]),s("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),s("bottom",`
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
 `,[s("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),s("flex",[r("tabs-nav",`
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
 `),T("prefix","padding-right: 16px;"),T("suffix","padding-left: 16px;")]),s("top, bottom",[r("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),S("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),s("shadow-start",[S("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[S("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),s("left, right",[r("tabs-nav-scroll-content",`
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
 `),s("shadow-start",[S("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[S("&::after",`
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
 `,[s("disabled",{cursor:"not-allowed"}),T("close",`
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
 `),s("disabled",`
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
 `),s("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[S("&:hover",{color:"var(--n-tab-text-color-hover)"}),s("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),s("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[s("line-type",[s("top",[T("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),s("left",[T("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),s("right",[T("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),s("bottom",[T("prefix, suffix",`
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
 `)]),s("card-type",[T("prefix, suffix",`
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
 `,[s("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[T("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Ct("disabled",[S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),s("closable","padding-right: 8px;"),s("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),s("disabled","color: var(--n-tab-text-color-disabled);")])]),s("left, right",`
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
 `)])]),s("top",[s("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),s("left",[s("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),s("right",[s("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),s("bottom",[s("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),sa=Object.assign(Object.assign({},fe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ha=U({name:"Tabs",props:sa,slots:Object,setup(e,{slots:n}){var i,b,d,v;const{mergedClsPrefixRef:h,inlineThemeDisabled:p}=Rt(e),x=fe("Tabs","-tabs",ia,Ht,e,h),g=_(null),m=_(null),E=_(null),B=_(null),y=_(null),$=_(null),C=_(!0),P=_(!0),W=Se(e,["labelSize","size"]),z=Se(e,["activeName","value"]),H=_((b=(i=z.value)!==null&&i!==void 0?i:e.defaultValue)!==null&&b!==void 0?b:n.default?(v=(d=se(n.default())[0])===null||d===void 0?void 0:d.props)===null||v===void 0?void 0:v.name:null),j=gt(z,H),u={id:0},f=Z(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});oe(j,()=>{u.id=0,Y(),ve()});function R(){var t;const{value:a}=j;return a===null?null:(t=g.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function F(t){if(e.type==="card")return;const{value:a}=m;if(!a)return;const o=a.style.opacity==="0";if(t){const c=`${h.value}-tabs-bar--disabled`,{barWidth:w,placement:A}=e;if(t.dataset.disabled==="true"?a.classList.add(c):a.classList.remove(c),["top","bottom"].includes(A)){if(ue(["top","maxHeight","height"]),typeof w=="number"&&t.offsetWidth>=w){const L=Math.floor((t.offsetWidth-w)/2)+t.offsetLeft;a.style.left=`${L}px`,a.style.maxWidth=`${w}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(ue(["left","maxWidth","width"]),typeof w=="number"&&t.offsetHeight>=w){const L=Math.floor((t.offsetHeight-w)/2)+t.offsetTop;a.style.top=`${L}px`,a.style.maxHeight=`${w}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function G(){if(e.type==="card")return;const{value:t}=m;t&&(t.style.opacity="0")}function ue(t){const{value:a}=m;if(a)for(const o of t)a.style[o]=""}function Y(){if(e.type==="card")return;const t=R();t?F(t):G()}function ve(){var t;const a=(t=y.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=R();if(!o)return;const{scrollLeft:c,offsetWidth:w}=a,{offsetLeft:A,offsetWidth:L}=o;c>A?a.scrollTo({top:0,left:A,behavior:"smooth"}):A+L>c+w&&a.scrollTo({top:0,left:A+L-w,behavior:"smooth"})}const q=_(null);let te=0,I=null;function Be(t){const a=q.value;if(a){te=t.getBoundingClientRect().height;const o=`${te}px`,c=()=>{a.style.height=o,a.style.maxHeight=o};I?(c(),I(),I=null):I=c}}function je(t){const a=q.value;if(a){const o=t.getBoundingClientRect().height,c=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(te,o)}px`};I?(I(),I=null,c()):I=c}}function Ae(){const t=q.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:c}=a;o!==void 0&&(t.style.maxHeight=o),c!==void 0&&(t.style.height=c)}}}const he={value:[]},ge=_("next");function Le(t){const a=j.value;let o="next";for(const c of he.value){if(c===a)break;if(c===t){o="prev";break}}ge.value=o,ke(t)}function ke(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":c}=e;a&&J(a,t),o&&J(o,t),c&&J(c,t),H.value=t}function Oe(t){const{onClose:a}=e;a&&J(a,t)}function me(){const{value:t}=m;if(!t)return;const a="transition-disabled";t.classList.add(a),Y(),t.classList.remove(a)}const M=_(null);function ae({transitionDisabled:t}){const a=g.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=R();o&&M.value&&(M.value.style.width=`${o.offsetWidth}px`,M.value.style.height=`${o.offsetHeight}px`,M.value.style.transform=`translateX(${o.offsetLeft-Ot(getComputedStyle(a).paddingLeft)}px)`,t&&M.value.offsetWidth),t&&a.classList.remove("transition-disabled")}oe([j],()=>{e.type==="segment"&&ie(()=>{ae({transitionDisabled:!1})})}),Pt(()=>{e.type==="segment"&&ae({transitionDisabled:!0})});let xe=0;function Ie(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||xe===t.contentRect.width)return;xe=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&me(),o!=="segment"){const{placement:c}=e;re((c==="top"||c==="bottom"?(a=y.value)===null||a===void 0?void 0:a.$el:$.value)||null)}}const He=de(Ie,64);oe([()=>e.justifyContent,()=>e.size],()=>{ie(()=>{const{type:t}=e;(t==="line"||t==="bar")&&me()})});const N=_(!1);function Fe(t){var a;const{target:o,contentRect:{width:c,height:w}}=t,A=o.parentElement.parentElement.offsetWidth,L=o.parentElement.parentElement.offsetHeight,{placement:V}=e;if(!N.value)V==="top"||V==="bottom"?A<c&&(N.value=!0):L<w&&(N.value=!0);else{const{value:X}=B;if(!X)return;V==="top"||V==="bottom"?A-c>X.$el.offsetWidth&&(N.value=!1):L-w>X.$el.offsetHeight&&(N.value=!1)}re(((a=y.value)===null||a===void 0?void 0:a.$el)||null)}const Me=de(Fe,64);function Ne(){const{onAdd:t}=e;t&&t(),ie(()=>{const a=R(),{value:o}=y;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function re(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:c,offsetWidth:w}=t;C.value=o<=0,P.value=o+w>=c}else{const{scrollTop:o,scrollHeight:c,offsetHeight:w}=t;C.value=o<=0,P.value=o+w>=c}}const De=de(t=>{re(t.target)},64);Wt(pe,{triggerRef:O(e,"trigger"),tabStyleRef:O(e,"tabStyle"),tabClassRef:O(e,"tabClass"),addTabStyleRef:O(e,"addTabStyle"),addTabClassRef:O(e,"addTabClass"),paneClassRef:O(e,"paneClass"),paneStyleRef:O(e,"paneStyle"),mergedClsPrefixRef:h,typeRef:O(e,"type"),closableRef:O(e,"closable"),valueRef:j,tabChangeIdRef:u,onBeforeLeaveRef:O(e,"onBeforeLeave"),activateTab:Le,handleClose:Oe,handleAdd:Ne}),mt(()=>{Y(),ve()}),_t(()=>{const{value:t}=E;if(!t)return;const{value:a}=h,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,c=`${a}-tabs-nav-scroll-wrapper--shadow-end`;C.value?t.classList.remove(o):t.classList.add(o),P.value?t.classList.remove(c):t.classList.add(c)});const Ve={syncBarPosition:()=>{Y()}},Ue=()=>{ae({transitionDisabled:!0})},ye=Z(()=>{const{value:t}=W,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],c=`${t}${o}`,{self:{barColor:w,closeIconColor:A,closeIconColorHover:L,closeIconColorPressed:V,tabColor:X,tabBorderColor:Xe,paneTextColor:Ge,tabFontWeight:Ye,tabBorderRadius:qe,tabFontWeightActive:Ke,colorSegment:Je,fontWeightStrong:Qe,tabColorSegment:Ze,closeSize:et,closeIconSize:tt,closeColorHover:at,closeColorPressed:rt,closeBorderRadius:nt,[k("panePadding",t)]:K,[k("tabPadding",c)]:ot,[k("tabPaddingVertical",c)]:it,[k("tabGap",c)]:st,[k("tabGap",`${c}Vertical`)]:lt,[k("tabTextColor",a)]:dt,[k("tabTextColorActive",a)]:ct,[k("tabTextColorHover",a)]:bt,[k("tabTextColorDisabled",a)]:ft,[k("tabFontSize",t)]:pt},common:{cubicBezierEaseInOut:ut}}=x.value;return{"--n-bezier":ut,"--n-color-segment":Je,"--n-bar-color":w,"--n-tab-font-size":pt,"--n-tab-text-color":dt,"--n-tab-text-color-active":ct,"--n-tab-text-color-disabled":ft,"--n-tab-text-color-hover":bt,"--n-pane-text-color":Ge,"--n-tab-border-color":Xe,"--n-tab-border-radius":qe,"--n-close-size":et,"--n-close-icon-size":tt,"--n-close-color-hover":at,"--n-close-color-pressed":rt,"--n-close-border-radius":nt,"--n-close-icon-color":A,"--n-close-icon-color-hover":L,"--n-close-icon-color-pressed":V,"--n-tab-color":X,"--n-tab-font-weight":Ye,"--n-tab-font-weight-active":Ke,"--n-tab-padding":ot,"--n-tab-padding-vertical":it,"--n-tab-gap":st,"--n-tab-gap-vertical":lt,"--n-pane-padding-left":Q(K,"left"),"--n-pane-padding-right":Q(K,"right"),"--n-pane-padding-top":Q(K,"top"),"--n-pane-padding-bottom":Q(K,"bottom"),"--n-font-weight-strong":Qe,"--n-tab-color-segment":Ze}}),D=p?Tt("tabs",Z(()=>`${W.value[0]}${e.type[0]}`),ye,e):void 0;return Object.assign({mergedClsPrefix:h,mergedValue:j,renderedNames:new Set,segmentCapsuleElRef:M,tabsPaneWrapperRef:q,tabsElRef:g,barElRef:m,addTabInstRef:B,xScrollInstRef:y,scrollWrapperElRef:E,addTabFixed:N,tabWrapperStyle:f,handleNavResize:He,mergedSize:W,handleScroll:De,handleTabsResize:Me,cssVars:p?void 0:ye,themeClass:D==null?void 0:D.themeClass,animationDirection:ge,renderNameListRef:he,yScrollElRef:$,handleSegmentResize:Ue,onAnimationBeforeLeave:Be,onAnimationEnter:je,onAnimationAfterEnter:Ae,onRender:D==null?void 0:D.onRender},Ve)},render(){const{mergedClsPrefix:e,type:n,placement:i,addTabFixed:b,addable:d,mergedSize:v,renderNameListRef:h,onRender:p,paneWrapperClass:x,paneWrapperStyle:g,$slots:{default:m,prefix:E,suffix:B}}=this;p==null||p();const y=m?se(m()).filter(u=>u.type.__TAB_PANE__===!0):[],$=m?se(m()).filter(u=>u.type.__TAB__===!0):[],C=!$.length,P=n==="card",W=n==="segment",z=!P&&!W&&this.justifyContent;h.value=[];const H=()=>{const u=l("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:l("div",{class:`${e}-tabs-scroll-padding`,style:i==="top"||i==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),C?y.map((f,R)=>(h.value.push(f.props.name),ce(l(be,Object.assign({},f.props,{internalCreatedByPane:!0,internalLeftPadded:R!==0&&(!z||z==="center"||z==="start"||z==="end")}),f.children?{default:f.children.tab}:void 0)))):$.map((f,R)=>(h.value.push(f.props.name),ce(R!==0&&!z?We(f):f))),!b&&d&&P?Pe(d,(C?y.length:$.length)!==0):null,z?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return l("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&d?l(ne,{onResize:this.handleTabsResize},{default:()=>u}):u,P?l("div",{class:`${e}-tabs-pad`}):null,P?null:l("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},j=W?"top":i;return l("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${v}-size`,z&&`${e}-tabs--flex`,`${e}-tabs--${j}`],style:this.cssVars},l("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${j}`,`${e}-tabs-nav`]},Ce(E,u=>u&&l("div",{class:`${e}-tabs-nav__prefix`},u)),W?l(ne,{onResize:this.handleSegmentResize},{default:()=>l("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},l("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},l("div",{class:`${e}-tabs-wrapper`},l("div",{class:`${e}-tabs-tab`}))),C?y.map((u,f)=>(h.value.push(u.props.name),l(be,Object.assign({},u.props,{internalCreatedByPane:!0,internalLeftPadded:f!==0}),u.children?{default:u.children.tab}:void 0))):$.map((u,f)=>(h.value.push(u.props.name),f===0?u:We(u))))}):l(ne,{onResize:this.handleNavResize},{default:()=>l("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(j)?l(Mt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):l("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),b&&d&&P?Pe(d,!0):null,Ce(B,u=>u&&l("div",{class:`${e}-tabs-nav__suffix`},u))),C&&(this.animated&&(j==="top"||j==="bottom")?l("div",{ref:"tabsPaneWrapperRef",style:g,class:[`${e}-tabs-pane-wrapper`,x]},ze(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ze(y,this.mergedValue,this.renderedNames)))}});function ze(e,n,i,b,d,v,h){const p=[];return e.forEach(x=>{const{name:g,displayDirective:m,"display-directive":E}=x.props,B=$=>m===$||E===$,y=n===g;if(x.key!==void 0&&(x.key=g),y||B("show")||B("show:lazy")&&i.has(g)){i.has(g)||i.add(g);const $=!B("if");p.push($?Et(x,[[Bt,y]]):x)}}),h?l(jt,{name:`${h}-transition`,onBeforeLeave:b,onEnter:d,onAfterEnter:v},{default:()=>p}):p}function Pe(e,n){return l(be,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function We(e){const n=At(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function ce(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ha as N,ua as S,va as a};
