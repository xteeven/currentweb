import{Z as Q,d as Y,m as H,h as D,c,i as C,u as E,e as I,f as _,a as b,b as z,v as O,g as L}from"./light-BrY5Xv2M.js";import{s as ee,S as V,l as A,u as oe}from"./Image-rFdGuL9O.js";import{f as k,h,j as W,g as w,p as q,i as te,s as N}from"./app-B01iSlf7.js";import{N as re}from"./Icon-C3NvCphL.js";import{b as F}from"./replaceable-CrufXe-m.js";const le=k({name:"ChevronRight",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function ne(e){const{baseColor:o,textColor2:t,bodyColor:a,cardColor:n,dividerColor:l,actionColor:i,scrollbarColor:y,scrollbarColorHover:v,invertedColor:g}=e;return{textColor:t,textColorInverted:"#FFF",color:a,colorEmbedded:i,headerColor:n,headerColorInverted:g,footerColor:i,footerColorInverted:g,headerBorderColor:l,headerBorderColorInverted:g,footerBorderColor:l,footerBorderColorInverted:g,siderBorderColor:l,siderBorderColorInverted:g,siderColor:n,siderColorInverted:g,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:H(a,y),siderToggleBarColorHover:H(a,v),__invertScrollbar:"true"}}const U=Q({name:"Layout",common:Y,peers:{Scrollbar:ee},self:ne}),ae={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};function se(e){const{primaryColor:o,textColor2:t,borderColor:a,lineHeight:n,fontSize:l,borderRadiusSmall:i,dividerColor:y,fontWeightStrong:v,textColor1:g,textColor3:P,infoColor:S,warningColor:T,errorColor:B,successColor:f,codeColor:s}=e;return Object.assign(Object.assign({},ae),{aTextColor:o,blockquoteTextColor:t,blockquotePrefixColor:a,blockquoteLineHeight:n,blockquoteFontSize:l,codeBorderRadius:i,liTextColor:t,liLineHeight:n,liFontSize:l,hrColor:y,headerFontWeight:v,headerTextColor:g,pTextColor:t,pTextColor1Depth:g,pTextColor2Depth:t,pTextColor3Depth:P,pLineHeight:n,pFontSize:l,headerBarColor:o,headerBarColorPrimary:o,headerBarColorInfo:S,headerBarColorError:B,headerBarColorWarning:T,headerBarColorSuccess:f,textColor:t,textColor1Depth:g,textColor2Depth:t,textColor3Depth:P,textColorPrimary:o,textColorInfo:S,textColorSuccess:f,textColorWarning:T,textColorError:B,codeTextColor:t,codeColor:s,codeBorder:"1px solid #0000"})}const ie={common:Y,self:se},de=D("n-layout-sider"),K={type:String,default:"static"},ce=c("layout",`
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
`,[c("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),he={embedded:Boolean,position:K,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},X=D("n-layout");function Z(e){return k({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},I.props),he),setup(o){const t=W(null),a=W(null),{mergedClsPrefixRef:n,inlineThemeDisabled:l}=E(o),i=I("Layout","-layout",ce,U,o,n);function y(s,p){if(o.nativeScrollbar){const{value:x}=t;x&&(p===void 0?x.scrollTo(s):x.scrollTo(s,p))}else{const{value:x}=a;x&&x.scrollTo(s,p)}}q(X,o);let v=0,g=0;const P=s=>{var p;const x=s.target;v=x.scrollLeft,g=x.scrollTop,(p=o.onScroll)===null||p===void 0||p.call(o,s)};A(()=>{if(o.nativeScrollbar){const s=t.value;s&&(s.scrollTop=g,s.scrollLeft=v)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},T={scrollTo:y},B=w(()=>{const{common:{cubicBezierEaseInOut:s},self:p}=i.value;return{"--n-bezier":s,"--n-color":o.embedded?p.colorEmbedded:p.color,"--n-text-color":p.textColor}}),f=l?_("layout",w(()=>o.embedded?"e":""),B,o):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:t,scrollbarInstRef:a,hasSiderStyle:S,mergedTheme:i,handleNativeElScroll:P,cssVars:l?void 0:B,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},T)},render(){var o;const{mergedClsPrefix:t,hasSider:a}=this;(o=this.onRender)===null||o===void 0||o.call(this);const n=a?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return h("div",{class:l,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):h(V,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const Be=Z(!1),ze=Z(!0),ge=c("layout-sider",`
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
`,[C("bordered",[b("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),b("left-placement",[C("bordered",[b("border",`
 right: 0;
 `)])]),C("right-placement",`
 justify-content: flex-start;
 `,[C("bordered",[b("border",`
 left: 0;
 `)]),C("collapsed",[c("layout-toggle-button",[c("base-icon",`
 transform: rotate(180deg);
 `)]),c("layout-toggle-bar",[z("&:hover",[b("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),c("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[c("base-icon",`
 transform: rotate(0);
 `)]),c("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[z("&:hover",[b("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),C("collapsed",[c("layout-toggle-bar",[z("&:hover",[b("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),c("layout-toggle-button",[c("base-icon",`
 transform: rotate(0);
 `)])]),c("layout-toggle-button",`
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
 `,[c("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),c("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[b("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),b("bottom",`
 position: absolute;
 top: 34px;
 `),z("&:hover",[b("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),b("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),z("&:hover",[b("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),b("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),c("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),C("show-content",[c("layout-sider-scroll-container",{opacity:1})]),C("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ue=k({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},h("div",{class:`${e}-layout-toggle-bar__top`}),h("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),be=k({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},h(re,{clsPrefix:e},{default:()=>h(le,null)}))}}),fe={position:K,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},we=k({name:"LayoutSider",props:Object.assign(Object.assign({},I.props),fe),setup(e){const o=te(X),t=W(null),a=W(null),n=W(e.defaultCollapsed),l=oe(N(e,"collapsed"),n),i=w(()=>F(l.value?e.collapsedWidth:e.width)),y=w(()=>e.collapseMode!=="transform"?{}:{minWidth:F(e.width)}),v=w(()=>o?o.siderPlacement:"left");function g(u,r){if(e.nativeScrollbar){const{value:d}=t;d&&(r===void 0?d.scrollTo(u):d.scrollTo(u,r))}else{const{value:d}=a;d&&d.scrollTo(u,r)}}function P(){const{"onUpdate:collapsed":u,onUpdateCollapsed:r,onExpand:d,onCollapse:j}=e,{value:$}=l;r&&O(r,!$),u&&O(u,!$),n.value=!$,$?d&&O(d):j&&O(j)}let S=0,T=0;const B=u=>{var r;const d=u.target;S=d.scrollLeft,T=d.scrollTop,(r=e.onScroll)===null||r===void 0||r.call(e,u)};A(()=>{if(e.nativeScrollbar){const u=t.value;u&&(u.scrollTop=T,u.scrollLeft=S)}}),q(de,{collapsedRef:l,collapseModeRef:N(e,"collapseMode")});const{mergedClsPrefixRef:f,inlineThemeDisabled:s}=E(e),p=I("Layout","-layout-sider",ge,U,e,f);function x(u){var r,d;u.propertyName==="max-width"&&(l.value?(r=e.onAfterLeave)===null||r===void 0||r.call(e):(d=e.onAfterEnter)===null||d===void 0||d.call(e))}const G={scrollTo:g},M=w(()=>{const{common:{cubicBezierEaseInOut:u},self:r}=p.value,{siderToggleButtonColor:d,siderToggleButtonBorder:j,siderToggleBarColor:$,siderToggleBarColorHover:J}=r,m={"--n-bezier":u,"--n-toggle-button-color":d,"--n-toggle-button-border":j,"--n-toggle-bar-color":$,"--n-toggle-bar-color-hover":J};return e.inverted?(m["--n-color"]=r.siderColorInverted,m["--n-text-color"]=r.textColorInverted,m["--n-border-color"]=r.siderBorderColorInverted,m["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColorInverted,m.__invertScrollbar=r.__invertScrollbar):(m["--n-color"]=r.siderColor,m["--n-text-color"]=r.textColor,m["--n-border-color"]=r.siderBorderColor,m["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColor),m}),R=s?_("layout-sider",w(()=>e.inverted?"a":"b"),M,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:a,mergedClsPrefix:f,mergedTheme:p,styleMaxWidth:i,mergedCollapsed:l,scrollContainerStyle:y,siderPlacement:v,handleNativeElScroll:B,handleTransitionend:x,handleTriggerClick:P,inlineThemeDisabled:s,cssVars:M,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender},G)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:F(this.width)}]},this.nativeScrollbar?h("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):h(V,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),a?a==="bar"?h(ue,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):h(be,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?h("div",{class:`${o}-layout-sider__border`}):null)}}),pe=c("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[z("&:first-child",{marginTop:0}),C("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[C("align-text",{paddingLeft:0},[z("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),z("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),z("&::before",{backgroundColor:"var(--n-bar-color)"})])]),xe=Object.assign(Object.assign({},I.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),Ce=e=>k({name:`H${e}`,props:xe,setup(o){const{mergedClsPrefixRef:t,inlineThemeDisabled:a}=E(o),n=I("Typography","-h",pe,ie,o,t),l=w(()=>{const{type:y}=o,{common:{cubicBezierEaseInOut:v},self:{headerFontWeight:g,headerTextColor:P,[L("headerPrefixWidth",e)]:S,[L("headerFontSize",e)]:T,[L("headerMargin",e)]:B,[L("headerBarWidth",e)]:f,[L("headerBarColor",y)]:s}}=n.value;return{"--n-bezier":v,"--n-font-size":T,"--n-margin":B,"--n-bar-color":s,"--n-bar-width":f,"--n-font-weight":g,"--n-text-color":P,"--n-prefix-width":S}}),i=a?_(`h${e}`,w(()=>o.type[0]),l,o):void 0;return{mergedClsPrefix:t,cssVars:a?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var o;const{prefix:t,alignText:a,mergedClsPrefix:n,cssVars:l,$slots:i}=this;return(o=this.onRender)===null||o===void 0||o.call(this),h(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:t,[`${n}-h--align-text`]:a}],style:l},i)}}),Pe=Ce("2");export{Pe as N,we as a,ze as b,Be as c};
