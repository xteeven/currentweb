import{f as X,h as b,j as E,b as ye,i as $e,Q as vt,F as gt,g as Z,y as ne,z as oe,l as ht,p as xt,s as k,u as mt,q as yt,v as Ct,E as St,n as wt}from"./app-CyE3xLar.js";import{x as Tt,Q as ee,A as Pt,d as Rt,h as zt,t as Lt,c as n,i as s,b as w,a as L,n as $t,o as Ce,u as Bt,e as Be,g as V,f as Wt,v as Q}from"./light-BpPH0lfg.js";import{N as At}from"./Icon-B8bgCZ_1.js";import{N as Et}from"./Close-CF8CASon.js";import{i as _t,f as ie,g as J,d as jt}from"./replaceable-B6JXjP7_.js";import{e as Se,f as kt,V as se,h as we,u as Vt,j as Mt}from"./Image-D7H8cGFY.js";const Ht=Se(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Se("&::-webkit-scrollbar",{width:0,height:0})]),It=X({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function r(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const i=Tt();return Ht.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:kt,ssr:i}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...l){var v;(v=e.value)===null||v===void 0||v.scrollTo(...l)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function Ot(e,r=[],i){const c={};return Object.getOwnPropertyNames(e).forEach(v=>{r.includes(v)||(c[v]=e[v])}),Object.assign(c,i)}function Ft(e,...r){return typeof e=="function"?e(...r):typeof e=="string"?ye(e):typeof e=="number"?ye(String(e)):null}var Gt=/\s/;function Dt(e){for(var r=e.length;r--&&Gt.test(e.charAt(r)););return r}var Nt=/^\s+/;function Xt(e){return e&&e.slice(0,Dt(e)+1).replace(Nt,"")}var Te=NaN,Ut=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,qt=/^0o[0-7]+$/i,Kt=parseInt;function Pe(e){if(typeof e=="number")return e;if(_t(e))return Te;if(ee(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=ee(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Xt(e);var i=Yt.test(e);return i||qt.test(e)?Kt(e.slice(2),i?2:8):Ut.test(e)?Te:+e}var le=function(){return Pt.Date.now()},Qt="Expected a function",Jt=Math.max,Zt=Math.min;function ea(e,r,i){var c,l,v,g,p,y,x=0,m=!1,$=!1,P=!0;if(typeof e!="function")throw new TypeError(Qt);r=Pe(r)||0,ee(i)&&(m=!!i.leading,$="maxWait"in i,v=$?Jt(Pe(i.maxWait)||0,r):v,P="trailing"in i?!!i.trailing:P);function h(f){var z=c,I=l;return c=l=void 0,x=f,g=e.apply(I,z),g}function T(f){return x=f,p=setTimeout(W,r),m?h(f):g}function C(f){var z=f-y,I=f-x,U=r-z;return $?Zt(U,v-I):U}function R(f){var z=f-y,I=f-x;return y===void 0||z>=r||z<0||$&&I>=v}function W(){var f=le();if(R(f))return B(f);p=setTimeout(W,C(f))}function B(f){return p=void 0,P&&c?h(f):(c=l=void 0,g)}function H(){p!==void 0&&clearTimeout(p),x=0,c=y=l=p=void 0}function A(){return p===void 0?g:B(le())}function u(){var f=le(),z=R(f);if(c=arguments,l=this,y=f,z){if(p===void 0)return T(y);if($)return clearTimeout(p),p=setTimeout(W,r),h(y)}return p===void 0&&(p=setTimeout(W,r)),g}return u.cancel=H,u.flush=A,u}var ta="Expected a function";function de(e,r,i){var c=!0,l=!0;if(typeof e!="function")throw new TypeError(ta);return ee(i)&&(c="leading"in i?!!i.leading:c,l="trailing"in i?!!i.trailing:l),ea(e,r,{leading:c,maxWait:r,trailing:l})}const aa=X({name:"Add",render(){return b("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ra={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function na(e){const{textColor2:r,primaryColor:i,textColorDisabled:c,closeIconColor:l,closeIconColorHover:v,closeIconColorPressed:g,closeColorHover:p,closeColorPressed:y,tabColor:x,baseColor:m,dividerColor:$,fontWeight:P,textColor1:h,borderRadius:T,fontSize:C,fontWeightStrong:R}=e;return Object.assign(Object.assign({},ra),{colorSegment:x,tabFontSizeCard:C,tabTextColorLine:h,tabTextColorActiveLine:i,tabTextColorHoverLine:i,tabTextColorDisabledLine:c,tabTextColorSegment:h,tabTextColorActiveSegment:r,tabTextColorHoverSegment:r,tabTextColorDisabledSegment:c,tabTextColorBar:h,tabTextColorActiveBar:i,tabTextColorHoverBar:i,tabTextColorDisabledBar:c,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:i,tabTextColorDisabledCard:c,barColor:i,closeIconColor:l,closeIconColorHover:v,closeIconColorPressed:g,closeColorHover:p,closeColorPressed:y,closeBorderRadius:T,tabColor:x,tabColorSegment:m,tabBorderColor:$,tabFontWeightActive:P,tabFontWeight:P,tabBorderRadius:T,paneTextColor:r,fontWeightStrong:R})}const oa={common:Rt,self:na},fe=zt("n-tabs"),We={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},va=X({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:We,slots:Object,setup(e){const r=$e(fe,null);return r||Lt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ia=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ot(We,["displayDirective"])),ce=X({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ia,setup(e){const{mergedClsPrefixRef:r,valueRef:i,typeRef:c,closableRef:l,tabStyleRef:v,addTabStyleRef:g,tabClassRef:p,addTabClassRef:y,tabChangeIdRef:x,onBeforeLeaveRef:m,triggerRef:$,handleAdd:P,activateTab:h,handleClose:T}=$e(fe);return{trigger:$,mergedClosable:Z(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?l.value:C}),style:v,addStyle:g,tabClass:p,addTabClass:y,clsPrefix:r,value:i,type:c,handleClose(C){C.stopPropagation(),!e.disabled&&T(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){P();return}const{name:C}=e,R=++x.id;if(C!==i.value){const{value:W}=m;W?Promise.resolve(W(e.name,i.value)).then(B=>{B&&x.id===R&&h(C)}):h(C)}}}},render(){const{internalAddable:e,clsPrefix:r,name:i,disabled:c,label:l,tab:v,value:g,mergedClosable:p,trigger:y,$slots:{default:x}}=this,m=l??v;return b("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${r}-tabs-tab-pad`}):null,b("div",Object.assign({key:i,"data-name":i,"data-disabled":c?!0:void 0},vt({class:[`${r}-tabs-tab`,g===i&&`${r}-tabs-tab--active`,c&&`${r}-tabs-tab--disabled`,p&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:y==="click"?this.activateTab:void 0,onMouseenter:y==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${r}-tabs-tab__label`},e?b(gt,null,b("div",{class:`${r}-tabs-tab__height-placeholder`}," "),b(At,{clsPrefix:r},{default:()=>b(aa,null)})):x?x():typeof m=="object"?m:Ft(m??i)),p&&this.type==="card"?b(Et,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:c}):null))}}),sa=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[s("segment-type",[n("tabs-rail",[w("&.transition-disabled",[n("tabs-capsule",`
 transition: none;
 `)])])]),s("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),s("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),s("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),s("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),s("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[s("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),s("flex",[n("tabs-nav",`
 width: 100%;
 position: relative;
 `,[n("tabs-wrapper",`
 width: 100%;
 `,[n("tabs-tab",`
 margin-right: 0;
 `)])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L("prefix, suffix",`
 display: flex;
 align-items: center;
 `),L("prefix","padding-right: 16px;"),L("suffix","padding-left: 16px;")]),s("top, bottom",[n("tabs-nav-scroll-wrapper",[w("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),w("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),s("shadow-start",[w("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[w("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),s("left, right",[n("tabs-nav-scroll-content",`
 flex-direction: column;
 `),n("tabs-nav-scroll-wrapper",[w("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),w("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),s("shadow-start",[w("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[w("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[w("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),w("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
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
 `,[s("disabled",{cursor:"not-allowed"}),L("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),n("tabs-bar",`
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
 `,[w("&.transition-disabled",`
 transition: none;
 `),s("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),w("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),w("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),w("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),s("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),s("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),s("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[s("line-type",[s("top",[L("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),s("left",[L("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),s("right",[L("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),s("bottom",[L("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),s("card-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
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
 `,[L("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),$t("disabled",[w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),s("closable","padding-right: 8px;"),s("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),s("disabled","color: var(--n-tab-text-color-disabled);")])]),s("left, right",`
 flex-direction: column; 
 `,[L("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),n("tabs-wrapper",`
 flex-direction: column;
 `),n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),s("top",[s("card-type",[n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),L("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),s("left",[s("card-type",[n("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),L("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),s("right",[s("card-type",[n("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),L("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),s("bottom",[s("card-type",[n("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),L("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),la=Object.assign(Object.assign({},Be.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ga=X({name:"Tabs",props:la,slots:Object,setup(e,{slots:r}){var i,c,l,v;const{mergedClsPrefixRef:g,inlineThemeDisabled:p}=Bt(e),y=Be("Tabs","-tabs",sa,oa,e,g),x=E(null),m=E(null),$=E(null),P=E(null),h=E(null),T=E(null),C=E(!0),R=E(!0),W=we(e,["labelSize","size"]),B=we(e,["activeName","value"]),H=E((c=(i=B.value)!==null&&i!==void 0?i:e.defaultValue)!==null&&c!==void 0?c:r.default?(v=(l=ie(r.default())[0])===null||l===void 0?void 0:l.props)===null||v===void 0?void 0:v.name:null),A=Vt(B,H),u={id:0},f=Z(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ne(A,()=>{u.id=0,Y(),ue()});function z(){var t;const{value:a}=A;return a===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function I(t){if(e.type==="card")return;const{value:a}=m;if(!a)return;const o=a.style.opacity==="0";if(t){const d=`${g.value}-tabs-bar--disabled`,{barWidth:S,placement:_}=e;if(t.dataset.disabled==="true"?a.classList.add(d):a.classList.remove(d),["top","bottom"].includes(_)){if(pe(["top","maxHeight","height"]),typeof S=="number"&&t.offsetWidth>=S){const j=Math.floor((t.offsetWidth-S)/2)+t.offsetLeft;a.style.left=`${j}px`,a.style.maxWidth=`${S}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(pe(["left","maxWidth","width"]),typeof S=="number"&&t.offsetHeight>=S){const j=Math.floor((t.offsetHeight-S)/2)+t.offsetTop;a.style.top=`${j}px`,a.style.maxHeight=`${S}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function U(){if(e.type==="card")return;const{value:t}=m;t&&(t.style.opacity="0")}function pe(t){const{value:a}=m;if(a)for(const o of t)a.style[o]=""}function Y(){if(e.type==="card")return;const t=z();t?I(t):U()}function ue(){var t;const a=(t=h.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=z();if(!o)return;const{scrollLeft:d,offsetWidth:S}=a,{offsetLeft:_,offsetWidth:j}=o;d>_?a.scrollTo({top:0,left:_,behavior:"smooth"}):_+j>d+S&&a.scrollTo({top:0,left:_+j-S,behavior:"smooth"})}const q=E(null);let te=0,M=null;function Ae(t){const a=q.value;if(a){te=t.getBoundingClientRect().height;const o=`${te}px`,d=()=>{a.style.height=o,a.style.maxHeight=o};M?(d(),M(),M=null):M=d}}function Ee(t){const a=q.value;if(a){const o=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(te,o)}px`};M?(M(),M=null,d()):M=d}}function _e(){const t=q.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:d}=a;o!==void 0&&(t.style.maxHeight=o),d!==void 0&&(t.style.height=d)}}}const ve={value:[]},ge=E("next");function je(t){const a=A.value;let o="next";for(const d of ve.value){if(d===a)break;if(d===t){o="prev";break}}ge.value=o,ke(t)}function ke(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":d}=e;a&&Q(a,t),o&&Q(o,t),d&&Q(d,t),H.value=t}function Ve(t){const{onClose:a}=e;a&&Q(a,t)}function he(){const{value:t}=m;if(!t)return;const a="transition-disabled";t.classList.add(a),Y(),t.classList.remove(a)}const O=E(null);function ae({transitionDisabled:t}){const a=x.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=z();o&&O.value&&(O.value.style.width=`${o.offsetWidth}px`,O.value.style.height=`${o.offsetHeight}px`,O.value.style.transform=`translateX(${o.offsetLeft-jt(getComputedStyle(a).paddingLeft)}px)`,t&&O.value.offsetWidth),t&&a.classList.remove("transition-disabled")}ne([A],()=>{e.type==="segment"&&oe(()=>{ae({transitionDisabled:!1})})}),ht(()=>{e.type==="segment"&&ae({transitionDisabled:!0})});let xe=0;function Me(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||xe===t.contentRect.width)return;xe=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&he(),o!=="segment"){const{placement:d}=e;re((d==="top"||d==="bottom"?(a=h.value)===null||a===void 0?void 0:a.$el:T.value)||null)}}const He=de(Me,64);ne([()=>e.justifyContent,()=>e.size],()=>{oe(()=>{const{type:t}=e;(t==="line"||t==="bar")&&he()})});const F=E(!1);function Ie(t){var a;const{target:o,contentRect:{width:d,height:S}}=t,_=o.parentElement.parentElement.offsetWidth,j=o.parentElement.parentElement.offsetHeight,{placement:D}=e;if(!F.value)D==="top"||D==="bottom"?_<d&&(F.value=!0):j<S&&(F.value=!0);else{const{value:N}=P;if(!N)return;D==="top"||D==="bottom"?_-d>N.$el.offsetWidth&&(F.value=!1):j-S>N.$el.offsetHeight&&(F.value=!1)}re(((a=h.value)===null||a===void 0?void 0:a.$el)||null)}const Oe=de(Ie,64);function Fe(){const{onAdd:t}=e;t&&t(),oe(()=>{const a=z(),{value:o}=h;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function re(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:d,offsetWidth:S}=t;C.value=o<=0,R.value=o+S>=d}else{const{scrollTop:o,scrollHeight:d,offsetHeight:S}=t;C.value=o<=0,R.value=o+S>=d}}const Ge=de(t=>{re(t.target)},64);xt(fe,{triggerRef:k(e,"trigger"),tabStyleRef:k(e,"tabStyle"),tabClassRef:k(e,"tabClass"),addTabStyleRef:k(e,"addTabStyle"),addTabClassRef:k(e,"addTabClass"),paneClassRef:k(e,"paneClass"),paneStyleRef:k(e,"paneStyle"),mergedClsPrefixRef:g,typeRef:k(e,"type"),closableRef:k(e,"closable"),valueRef:A,tabChangeIdRef:u,onBeforeLeaveRef:k(e,"onBeforeLeave"),activateTab:je,handleClose:Ve,handleAdd:Fe}),Mt(()=>{Y(),ue()}),mt(()=>{const{value:t}=$;if(!t)return;const{value:a}=g,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,d=`${a}-tabs-nav-scroll-wrapper--shadow-end`;C.value?t.classList.remove(o):t.classList.add(o),R.value?t.classList.remove(d):t.classList.add(d)});const De={syncBarPosition:()=>{Y()}},Ne=()=>{ae({transitionDisabled:!0})},me=Z(()=>{const{value:t}=W,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],d=`${t}${o}`,{self:{barColor:S,closeIconColor:_,closeIconColorHover:j,closeIconColorPressed:D,tabColor:N,tabBorderColor:Xe,paneTextColor:Ue,tabFontWeight:Ye,tabBorderRadius:qe,tabFontWeightActive:Ke,colorSegment:Qe,fontWeightStrong:Je,tabColorSegment:Ze,closeSize:et,closeIconSize:tt,closeColorHover:at,closeColorPressed:rt,closeBorderRadius:nt,[V("panePadding",t)]:K,[V("tabPadding",d)]:ot,[V("tabPaddingVertical",d)]:it,[V("tabGap",d)]:st,[V("tabGap",`${d}Vertical`)]:lt,[V("tabTextColor",a)]:dt,[V("tabTextColorActive",a)]:bt,[V("tabTextColorHover",a)]:ct,[V("tabTextColorDisabled",a)]:ft,[V("tabFontSize",t)]:pt},common:{cubicBezierEaseInOut:ut}}=y.value;return{"--n-bezier":ut,"--n-color-segment":Qe,"--n-bar-color":S,"--n-tab-font-size":pt,"--n-tab-text-color":dt,"--n-tab-text-color-active":bt,"--n-tab-text-color-disabled":ft,"--n-tab-text-color-hover":ct,"--n-pane-text-color":Ue,"--n-tab-border-color":Xe,"--n-tab-border-radius":qe,"--n-close-size":et,"--n-close-icon-size":tt,"--n-close-color-hover":at,"--n-close-color-pressed":rt,"--n-close-border-radius":nt,"--n-close-icon-color":_,"--n-close-icon-color-hover":j,"--n-close-icon-color-pressed":D,"--n-tab-color":N,"--n-tab-font-weight":Ye,"--n-tab-font-weight-active":Ke,"--n-tab-padding":ot,"--n-tab-padding-vertical":it,"--n-tab-gap":st,"--n-tab-gap-vertical":lt,"--n-pane-padding-left":J(K,"left"),"--n-pane-padding-right":J(K,"right"),"--n-pane-padding-top":J(K,"top"),"--n-pane-padding-bottom":J(K,"bottom"),"--n-font-weight-strong":Je,"--n-tab-color-segment":Ze}}),G=p?Wt("tabs",Z(()=>`${W.value[0]}${e.type[0]}`),me,e):void 0;return Object.assign({mergedClsPrefix:g,mergedValue:A,renderedNames:new Set,segmentCapsuleElRef:O,tabsPaneWrapperRef:q,tabsElRef:x,barElRef:m,addTabInstRef:P,xScrollInstRef:h,scrollWrapperElRef:$,addTabFixed:F,tabWrapperStyle:f,handleNavResize:He,mergedSize:W,handleScroll:Ge,handleTabsResize:Oe,cssVars:p?void 0:me,themeClass:G==null?void 0:G.themeClass,animationDirection:ge,renderNameListRef:ve,yScrollElRef:T,handleSegmentResize:Ne,onAnimationBeforeLeave:Ae,onAnimationEnter:Ee,onAnimationAfterEnter:_e,onRender:G==null?void 0:G.onRender},De)},render(){const{mergedClsPrefix:e,type:r,placement:i,addTabFixed:c,addable:l,mergedSize:v,renderNameListRef:g,onRender:p,paneWrapperClass:y,paneWrapperStyle:x,$slots:{default:m,prefix:$,suffix:P}}=this;p==null||p();const h=m?ie(m()).filter(u=>u.type.__TAB_PANE__===!0):[],T=m?ie(m()).filter(u=>u.type.__TAB__===!0):[],C=!T.length,R=r==="card",W=r==="segment",B=!R&&!W&&this.justifyContent;g.value=[];const H=()=>{const u=b("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},B?null:b("div",{class:`${e}-tabs-scroll-padding`,style:i==="top"||i==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),C?h.map((f,z)=>(g.value.push(f.props.name),be(b(ce,Object.assign({},f.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0&&(!B||B==="center"||B==="start"||B==="end")}),f.children?{default:f.children.tab}:void 0)))):T.map((f,z)=>(g.value.push(f.props.name),be(z!==0&&!B?Le(f):f))),!c&&l&&R?ze(l,(C?h.length:T.length)!==0):null,B?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},R&&l?b(se,{onResize:this.handleTabsResize},{default:()=>u}):u,R?b("div",{class:`${e}-tabs-pad`}):null,R?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},A=W?"top":i;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${v}-size`,B&&`${e}-tabs--flex`,`${e}-tabs--${A}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${A}`,`${e}-tabs-nav`]},Ce($,u=>u&&b("div",{class:`${e}-tabs-nav__prefix`},u)),W?b(se,{onResize:this.handleSegmentResize},{default:()=>b("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},b("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},b("div",{class:`${e}-tabs-wrapper`},b("div",{class:`${e}-tabs-tab`}))),C?h.map((u,f)=>(g.value.push(u.props.name),b(ce,Object.assign({},u.props,{internalCreatedByPane:!0,internalLeftPadded:f!==0}),u.children?{default:u.children.tab}:void 0))):T.map((u,f)=>(g.value.push(u.props.name),f===0?u:Le(u))))}):b(se,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(A)?b(It,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),c&&l&&R?ze(l,!0):null,Ce(P,u=>u&&b("div",{class:`${e}-tabs-nav__suffix`},u))),C&&(this.animated&&(A==="top"||A==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,y]},Re(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Re(h,this.mergedValue,this.renderedNames)))}});function Re(e,r,i,c,l,v,g){const p=[];return e.forEach(y=>{const{name:x,displayDirective:m,"display-directive":$}=y.props,P=T=>m===T||$===T,h=r===x;if(y.key!==void 0&&(y.key=x),h||P("show")||P("show:lazy")&&i.has(x)){i.has(x)||i.add(x);const T=!P("if");p.push(T?yt(y,[[Ct,h]]):y)}}),g?b(St,{name:`${g}-transition`,onBeforeLeave:c,onEnter:l,onAfterEnter:v},{default:()=>p}):p}function ze(e,r){return b(ce,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function Le(e){const r=wt(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function be(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ga as N,va as a};
