import{e as P,h as s,s as Y,f as n,B as m,x as O,u as N,j as B,aQ as V,k as y,v as A,g as c,i as x,p as Z,F as W,aR as G,m as j}from"./app-CXKPdMHI.js";import{S as H,l as D,u as J}from"./Image-Hjg23maZ.js";import{u as F,e as _}from"./use-style-BovTl7ck.js";import{N as ee}from"./Icon-DqtS5SBZ.js";import{b as E}from"./replaceable-le26HWVq.js";const te=P({name:"ChevronRight",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),oe=Y("n-layout-sider"),U={type:String,default:"static"},re=n("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[n("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),m("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),le={embedded:Boolean,position:U,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},K=Y("n-layout");function X(e){return P({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},B.props),le),setup(t){const r=O(null),d=O(null),{mergedClsPrefixRef:u,inlineThemeDisabled:g}=N(t),b=B("Layout","-layout",re,V,t,u);function k(a,h){if(t.nativeScrollbar){const{value:v}=r;v&&(h===void 0?v.scrollTo(a):v.scrollTo(a,h))}else{const{value:v}=d;v&&v.scrollTo(a,h)}}A(K,t);let C=0,S=0;const L=a=>{var h;const v=a.target;C=v.scrollLeft,S=v.scrollTop,(h=t.onScroll)===null||h===void 0||h.call(t,a)};D(()=>{if(t.nativeScrollbar){const a=r.value;a&&(a.scrollTop=S,a.scrollLeft=C)}});const T={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},w={scrollTo:k},z=y(()=>{const{common:{cubicBezierEaseInOut:a},self:h}=b.value;return{"--n-bezier":a,"--n-color":t.embedded?h.colorEmbedded:h.color,"--n-text-color":h.textColor}}),f=g?F("layout",y(()=>t.embedded?"e":""),z,t):void 0;return Object.assign({mergedClsPrefix:u,scrollableElRef:r,scrollbarInstRef:d,hasSiderStyle:T,mergedTheme:b,handleNativeElScroll:L,cssVars:g?void 0:z,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},w)},render(){var t;const{mergedClsPrefix:r,hasSider:d}=this;(t=this.onRender)===null||t===void 0||t.call(this);const u=d?this.hasSiderStyle:void 0,g=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return s("div",{class:g,style:this.cssVars},this.nativeScrollbar?s("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,u],onScroll:this.handleNativeElScroll},this.$slots):s(H,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,u]}),this.$slots))}})}const me=X(!1),pe=X(!0),ne=n("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[m("bordered",[c("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),c("left-placement",[m("bordered",[c("border",`
 right: 0;
 `)])]),m("right-placement",`
 justify-content: flex-start;
 `,[m("bordered",[c("border",`
 left: 0;
 `)]),m("collapsed",[n("layout-toggle-button",[n("base-icon",`
 transform: rotate(180deg);
 `)]),n("layout-toggle-bar",[x("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),n("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[n("base-icon",`
 transform: rotate(0);
 `)]),n("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[x("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),m("collapsed",[n("layout-toggle-bar",[x("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),n("layout-toggle-button",[n("base-icon",`
 transform: rotate(0);
 `)])]),n("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[n("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),n("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[c("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),c("bottom",`
 position: absolute;
 top: 34px;
 `),x("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),x("&:hover",[c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),c("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),n("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),m("show-content",[n("layout-sider-scroll-container",{opacity:1})]),m("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),se=P({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ae=P({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(ee,{clsPrefix:e},{default:()=>s(te,null)}))}}),ie={position:U,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ye=P({name:"LayoutSider",props:Object.assign(Object.assign({},B.props),ie),setup(e){const t=Z(K),r=O(null),d=O(null),u=O(e.defaultCollapsed),g=J(W(e,"collapsed"),u),b=y(()=>E(g.value?e.collapsedWidth:e.width)),k=y(()=>e.collapseMode!=="transform"?{}:{minWidth:E(e.width)}),C=y(()=>t?t.siderPlacement:"left");function S(i,o){if(e.nativeScrollbar){const{value:l}=r;l&&(o===void 0?l.scrollTo(i):l.scrollTo(i,o))}else{const{value:l}=d;l&&l.scrollTo(i,o)}}function L(){const{"onUpdate:collapsed":i,onUpdateCollapsed:o,onExpand:l,onCollapse:I}=e,{value:$}=g;o&&_(o,!$),i&&_(i,!$),u.value=!$,$?l&&_(l):I&&_(I)}let T=0,w=0;const z=i=>{var o;const l=i.target;T=l.scrollLeft,w=l.scrollTop,(o=e.onScroll)===null||o===void 0||o.call(e,i)};D(()=>{if(e.nativeScrollbar){const i=r.value;i&&(i.scrollTop=w,i.scrollLeft=T)}}),A(oe,{collapsedRef:g,collapseModeRef:W(e,"collapseMode")});const{mergedClsPrefixRef:f,inlineThemeDisabled:a}=N(e),h=B("Layout","-layout-sider",ne,V,e,f);function v(i){var o,l;i.propertyName==="max-width"&&(g.value?(o=e.onAfterLeave)===null||o===void 0||o.call(e):(l=e.onAfterEnter)===null||l===void 0||l.call(e))}const q={scrollTo:S},M=y(()=>{const{common:{cubicBezierEaseInOut:i},self:o}=h.value,{siderToggleButtonColor:l,siderToggleButtonBorder:I,siderToggleBarColor:$,siderToggleBarColorHover:Q}=o,p={"--n-bezier":i,"--n-toggle-button-color":l,"--n-toggle-button-border":I,"--n-toggle-bar-color":$,"--n-toggle-bar-color-hover":Q};return e.inverted?(p["--n-color"]=o.siderColorInverted,p["--n-text-color"]=o.textColorInverted,p["--n-border-color"]=o.siderBorderColorInverted,p["--n-toggle-button-icon-color"]=o.siderToggleButtonIconColorInverted,p.__invertScrollbar=o.__invertScrollbar):(p["--n-color"]=o.siderColor,p["--n-text-color"]=o.textColor,p["--n-border-color"]=o.siderBorderColor,p["--n-toggle-button-icon-color"]=o.siderToggleButtonIconColor),p}),R=a?F("layout-sider",y(()=>e.inverted?"a":"b"),M,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:d,mergedClsPrefix:f,mergedTheme:h,styleMaxWidth:b,mergedCollapsed:g,scrollContainerStyle:k,siderPlacement:C,handleNativeElScroll:z,handleTransitionend:v,handleTriggerClick:L,inlineThemeDisabled:a,cssVars:M,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender},q)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:d}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:E(this.width)}]},this.nativeScrollbar?s("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):s(H,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),d?d==="bar"?s(se,{clsPrefix:t,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s(ae,{clsPrefix:t,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${t}-layout-sider__border`}):null)}}),ce=n("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[x("&:first-child",{marginTop:0}),m("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[m("align-text",{paddingLeft:0},[x("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),x("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),x("&::before",{backgroundColor:"var(--n-bar-color)"})])]),de=Object.assign(Object.assign({},B.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),ue=e=>P({name:`H${e}`,props:de,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:d}=N(t),u=B("Typography","-h",ce,G,t,r),g=y(()=>{const{type:k}=t,{common:{cubicBezierEaseInOut:C},self:{headerFontWeight:S,headerTextColor:L,[j("headerPrefixWidth",e)]:T,[j("headerFontSize",e)]:w,[j("headerMargin",e)]:z,[j("headerBarWidth",e)]:f,[j("headerBarColor",k)]:a}}=u.value;return{"--n-bezier":C,"--n-font-size":w,"--n-margin":z,"--n-bar-color":a,"--n-bar-width":f,"--n-font-weight":S,"--n-text-color":L,"--n-prefix-width":T}}),b=d?F(`h${e}`,y(()=>t.type[0]),g,t):void 0;return{mergedClsPrefix:r,cssVars:d?void 0:g,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var t;const{prefix:r,alignText:d,mergedClsPrefix:u,cssVars:g,$slots:b}=this;return(t=this.onRender)===null||t===void 0||t.call(this),s(`h${e}`,{class:[`${u}-h`,`${u}-h${e}`,this.themeClass,{[`${u}-h--prefix-bar`]:r,[`${u}-h--align-text`]:d}],style:g},b)}}),xe=ue("2");export{xe as N,ye as a,pe as b,me as c};
