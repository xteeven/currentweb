import{c as M,a,d as v,u as Y,f as j,g as F,b as n,e as C,T as L}from"./light-XzTtbOfL.js";import{S as A,l as W,u as Z}from"./Image-Dx5KhJ9F.js";import{l as V}from"./light-CllX6m0q.js";import{f as T,h as i,g as S,k as p,p as U,i as G,s as N}from"./app-Dbap0sVN.js";import{N as J,b as _}from"./light-Bmy0d06o.js";const Q=T({name:"ChevronRight",render(){return i("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ee=M("n-layout-sider"),D={type:String,default:"static"},oe=a("layout",`
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
`,[a("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),v("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),te={embedded:Boolean,position:D,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},H=M("n-layout");function X(e){return T({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},j.props),te),setup(o){const r=S(null),g=S(null),{mergedClsPrefixRef:m,inlineThemeDisabled:b}=Y(o),w=j("Layout","-layout",oe,V,o,m);function O(c,d){if(o.nativeScrollbar){const{value:u}=r;u&&(d===void 0?u.scrollTo(c):u.scrollTo(c,d))}else{const{value:u}=g;u&&u.scrollTo(c,d)}}U(H,o);let z=0,R=0;const I=c=>{var d;const u=c.target;z=u.scrollLeft,R=u.scrollTop,(d=o.onScroll)===null||d===void 0||d.call(o,c)};W(()=>{if(o.nativeScrollbar){const c=r.value;c&&(c.scrollTop=R,c.scrollLeft=z)}});const B={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},k={scrollTo:O},P=p(()=>{const{common:{cubicBezierEaseInOut:c},self:d}=w.value;return{"--n-bezier":c,"--n-color":o.embedded?d.colorEmbedded:d.color,"--n-text-color":d.textColor}}),f=b?F("layout",p(()=>o.embedded?"e":""),P,o):void 0;return Object.assign({mergedClsPrefix:m,scrollableElRef:r,scrollbarInstRef:g,hasSiderStyle:B,mergedTheme:w,handleNativeElScroll:I,cssVars:b?void 0:P,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},k)},render(){var o;const{mergedClsPrefix:r,hasSider:g}=this;(o=this.onRender)===null||o===void 0||o.call(this);const m=g?this.hasSiderStyle:void 0,b=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return i("div",{class:b,style:this.cssVars},this.nativeScrollbar?i("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,m],onScroll:this.handleNativeElScroll},this.$slots):i(A,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,m]}),this.$slots))}})}const ge=X(!1),be=X(!0),re=a("layout-sider",`
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
`,[v("bordered",[n("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),n("left-placement",[v("bordered",[n("border",`
 right: 0;
 `)])]),v("right-placement",`
 justify-content: flex-start;
 `,[v("bordered",[n("border",`
 left: 0;
 `)]),v("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[C("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[C("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),v("collapsed",[a("layout-toggle-bar",[C("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
 transform: rotate(0);
 `)])]),a("layout-toggle-button",`
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
 `,[a("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[n("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),n("bottom",`
 position: absolute;
 top: 34px;
 `),C("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),C("&:hover",[n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),n("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),a("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),v("show-content",[a("layout-sider-scroll-container",{opacity:1})]),v("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),le=T({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return i("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},i("div",{class:`${e}-layout-toggle-bar__top`}),i("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),se=T({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},i(J,{clsPrefix:e},{default:()=>i(Q,null)}))}}),ne={position:D,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},he=T({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),ne),setup(e){const o=G(H),r=S(null),g=S(null),m=S(e.defaultCollapsed),b=Z(N(e,"collapsed"),m),w=p(()=>_(b.value?e.collapsedWidth:e.width)),O=p(()=>e.collapseMode!=="transform"?{}:{minWidth:_(e.width)}),z=p(()=>o?o.siderPlacement:"left");function R(s,t){if(e.nativeScrollbar){const{value:l}=r;l&&(t===void 0?l.scrollTo(s):l.scrollTo(s,t))}else{const{value:l}=g;l&&l.scrollTo(s,t)}}function I(){const{"onUpdate:collapsed":s,onUpdateCollapsed:t,onExpand:l,onCollapse:$}=e,{value:x}=b;t&&L(t,!x),s&&L(s,!x),m.value=!x,x?l&&L(l):$&&L($)}let B=0,k=0;const P=s=>{var t;const l=s.target;B=l.scrollLeft,k=l.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,s)};W(()=>{if(e.nativeScrollbar){const s=r.value;s&&(s.scrollTop=k,s.scrollLeft=B)}}),U(ee,{collapsedRef:b,collapseModeRef:N(e,"collapseMode")});const{mergedClsPrefixRef:f,inlineThemeDisabled:c}=Y(e),d=j("Layout","-layout-sider",re,V,e,f);function u(s){var t,l;s.propertyName==="max-width"&&(b.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(l=e.onAfterEnter)===null||l===void 0||l.call(e))}const K={scrollTo:R},E=p(()=>{const{common:{cubicBezierEaseInOut:s},self:t}=d.value,{siderToggleButtonColor:l,siderToggleButtonBorder:$,siderToggleBarColor:x,siderToggleBarColorHover:q}=t,h={"--n-bezier":s,"--n-toggle-button-color":l,"--n-toggle-button-border":$,"--n-toggle-bar-color":x,"--n-toggle-bar-color-hover":q};return e.inverted?(h["--n-color"]=t.siderColorInverted,h["--n-text-color"]=t.textColorInverted,h["--n-border-color"]=t.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,h.__invertScrollbar=t.__invertScrollbar):(h["--n-color"]=t.siderColor,h["--n-text-color"]=t.textColor,h["--n-border-color"]=t.siderBorderColor,h["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),h}),y=c?F("layout-sider",p(()=>e.inverted?"a":"b"),E,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:g,mergedClsPrefix:f,mergedTheme:d,styleMaxWidth:w,mergedCollapsed:b,scrollContainerStyle:O,siderPlacement:z,handleNativeElScroll:P,handleTransitionend:u,handleTriggerClick:I,inlineThemeDisabled:c,cssVars:E,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender},K)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:g}=this;return(e=this.onRender)===null||e===void 0||e.call(this),i("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:_(this.width)}]},this.nativeScrollbar?i("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):i(A,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),g?g==="bar"?i(le,{clsPrefix:o,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):i(se,{clsPrefix:o,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?i("div",{class:`${o}-layout-sider__border`}):null)}});export{ge as N,he as a,be as b};
