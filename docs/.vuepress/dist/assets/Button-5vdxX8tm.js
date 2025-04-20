import{h as xo,b as g,j as ho,c as V,a as v,k as vo,l as eo,m as po,d as Ro,i as W,n as co,e as mo,o as uo,p as Go,u as Oo,q as _o,g as i,s as Z,f as Mo,v as Lo}from"./light-BrY5Xv2M.js";import{i as go,g as j,m as yo,p as jo,f as q,h,T as Co,E as No,s as $o,j as Q,z as Ao}from"./app-B01iSlf7.js";import{i as Ko,u as Vo}from"./use-is-mounted-B-Jg0vHw.js";import{c as fo}from"./color-to-class-B0iQgAn2.js";const bo=xo("n-form-item");function Qo(o,{defaultSize:s="medium",mergedSize:d,mergedDisabled:u}={}){const n=go(bo,null);jo(bo,null);const b=j(d?()=>d(n):()=>{const{size:l}=o;if(l)return l;if(n){const{mergedSize:R}=n;if(R.value!==void 0)return R.value}return s}),k=j(u?()=>u(n):()=>{const{disabled:l}=o;return l!==void 0?l:n?n.disabled.value:!1}),r=j(()=>{const{status:l}=o;return l||(n==null?void 0:n.mergedValidationStatus.value)});return yo(()=>{n&&n.restoreValidation()}),{mergedSizeRef:b,mergedDisabledRef:k,mergedStatusRef:r,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const Po=q({name:"BaseIconSwitchTransition",setup(o,{slots:s}){const d=Ko();return()=>h(Co,{name:"icon-switch-transition",appear:d.value},s)}}),{cubicBezierEaseInOut:qo}=ho;function so({originalTransform:o="",left:s=0,top:d=0,transition:u=`all .3s ${qo} !important`}={}){return[g("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${o} scale(0.75)`,left:s,top:d,opacity:0}),g("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:s,top:d,opacity:1}),g("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:s,top:d,transition:u})]}const Yo=q({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(o,{slots:s}){function d(r){o.width?r.style.maxWidth=`${r.offsetWidth}px`:r.style.maxHeight=`${r.offsetHeight}px`,r.offsetWidth}function u(r){o.width?r.style.maxWidth="0":r.style.maxHeight="0",r.offsetWidth;const{onLeave:l}=o;l&&l()}function n(r){o.width?r.style.maxWidth="":r.style.maxHeight="";const{onAfterLeave:l}=o;l&&l()}function b(r){if(r.style.transition="none",o.width){const l=r.offsetWidth;r.style.maxWidth="0",r.offsetWidth,r.style.transition="",r.style.maxWidth=`${l}px`}else if(o.reverse)r.style.maxHeight=`${r.offsetHeight}px`,r.offsetHeight,r.style.transition="",r.style.maxHeight="0";else{const l=r.offsetHeight;r.style.maxHeight="0",r.offsetWidth,r.style.transition="",r.style.maxHeight=`${l}px`}r.offsetWidth}function k(r){var l;o.width?r.style.maxWidth="":o.reverse||(r.style.maxHeight=""),(l=o.onAfterEnter)===null||l===void 0||l.call(o)}return()=>{const{group:r,width:l,appear:R,mode:K}=o,w=r?No:Co,N={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:R,onEnter:b,onAfterEnter:k,onBeforeLeave:d,onLeave:u,onAfterLeave:n};return r||(N.mode=K),h(w,N,s)}}}),Xo=g([g("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),V("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[v("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[so()]),v("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[so({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),v("container",`
 animation: rotator 3s linear infinite both;
 `,[v("icon",`
 height: 1em;
 width: 1em;
 `)])])]),io="1.6s",Uo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Jo=q({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Uo),setup(o){vo("-base-loading",Xo,$o(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:s,strokeWidth:d,stroke:u,scale:n}=this,b=s/n;return h("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},h(Po,null,{default:()=>this.show?h("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},h("div",{class:`${o}-base-loading__container`},h("svg",{class:`${o}-base-loading__icon`,viewBox:`0 0 ${2*b} ${2*b}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},h("g",null,h("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${b} ${b};270 ${b} ${b}`,begin:"0s",dur:io,fill:"freeze",repeatCount:"indefinite"}),h("circle",{class:`${o}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":d,"stroke-linecap":"round",cx:b,cy:b,r:s-d/2,"stroke-dasharray":5.67*s,"stroke-dashoffset":18.48*s},h("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${b} ${b};135 ${b} ${b};450 ${b} ${b}`,begin:"0s",dur:io,fill:"freeze",repeatCount:"indefinite"}),h("animate",{attributeName:"stroke-dashoffset",values:`${5.67*s};${1.42*s};${5.67*s}`,begin:"0s",dur:io,fill:"freeze",repeatCount:"indefinite"})))))):h("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:_}=ho;function Zo({duration:o=".2s",delay:s=".1s"}={}){return[g("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),g("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),g("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${_},
 max-width ${o} ${_} ${s},
 margin-left ${o} ${_} ${s},
 margin-right ${o} ${_} ${s};
 `),g("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${_} ${s},
 max-width ${o} ${_},
 margin-left ${o} ${_},
 margin-right ${o} ${_};
 `)]}const oe=V("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),ee=q({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){vo("-base-wave",oe,$o(o,"clsPrefix"));const s=Q(null),d=Q(!1);let u=null;return yo(()=>{u!==null&&window.clearTimeout(u)}),{active:d,selfRef:s,play(){u!==null&&(window.clearTimeout(u),d.value=!1,u=null),Ao(()=>{var n;(n=s.value)===null||n===void 0||n.offsetHeight,d.value=!0,u=window.setTimeout(()=>{d.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:o}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),re=eo&&"chrome"in window;eo&&navigator.userAgent.includes("Firefox");const te=eo&&navigator.userAgent.includes("Safari")&&!re;function L(o){return po(o,[255,255,255,.16])}function oo(o){return po(o,[0,0,0,.12])}const ne=xo("n-button-group"),ie={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function se(o){const{heightTiny:s,heightSmall:d,heightMedium:u,heightLarge:n,borderRadius:b,fontSizeTiny:k,fontSizeSmall:r,fontSizeMedium:l,fontSizeLarge:R,opacityDisabled:K,textColor2:w,textColor3:N,primaryColorHover:y,primaryColorPressed:H,borderColor:Y,primaryColor:E,baseColor:c,infoColor:I,infoColorHover:S,infoColorPressed:t,successColor:f,successColorHover:$,successColorPressed:e,warningColor:z,warningColorHover:T,warningColorPressed:G,errorColor:B,errorColorHover:C,errorColorPressed:O,fontWeight:D,buttonColor2:A,buttonColor2Hover:F,buttonColor2Pressed:x,fontWeightStrong:X}=o;return Object.assign(Object.assign({},ie),{heightTiny:s,heightSmall:d,heightMedium:u,heightLarge:n,borderRadiusTiny:b,borderRadiusSmall:b,borderRadiusMedium:b,borderRadiusLarge:b,fontSizeTiny:k,fontSizeSmall:r,fontSizeMedium:l,fontSizeLarge:R,opacityDisabled:K,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:A,colorSecondaryHover:F,colorSecondaryPressed:x,colorTertiary:A,colorTertiaryHover:F,colorTertiaryPressed:x,colorQuaternary:"#0000",colorQuaternaryHover:F,colorQuaternaryPressed:x,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:w,textColorTertiary:N,textColorHover:y,textColorPressed:H,textColorFocus:y,textColorDisabled:w,textColorText:w,textColorTextHover:y,textColorTextPressed:H,textColorTextFocus:y,textColorTextDisabled:w,textColorGhost:w,textColorGhostHover:y,textColorGhostPressed:H,textColorGhostFocus:y,textColorGhostDisabled:w,border:`1px solid ${Y}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${H}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${Y}`,rippleColor:E,colorPrimary:E,colorHoverPrimary:y,colorPressedPrimary:H,colorFocusPrimary:y,colorDisabledPrimary:E,textColorPrimary:c,textColorHoverPrimary:c,textColorPressedPrimary:c,textColorFocusPrimary:c,textColorDisabledPrimary:c,textColorTextPrimary:E,textColorTextHoverPrimary:y,textColorTextPressedPrimary:H,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:w,textColorGhostPrimary:E,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:H,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:E,borderPrimary:`1px solid ${E}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${H}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${E}`,rippleColorPrimary:E,colorInfo:I,colorHoverInfo:S,colorPressedInfo:t,colorFocusInfo:S,colorDisabledInfo:I,textColorInfo:c,textColorHoverInfo:c,textColorPressedInfo:c,textColorFocusInfo:c,textColorDisabledInfo:c,textColorTextInfo:I,textColorTextHoverInfo:S,textColorTextPressedInfo:t,textColorTextFocusInfo:S,textColorTextDisabledInfo:w,textColorGhostInfo:I,textColorGhostHoverInfo:S,textColorGhostPressedInfo:t,textColorGhostFocusInfo:S,textColorGhostDisabledInfo:I,borderInfo:`1px solid ${I}`,borderHoverInfo:`1px solid ${S}`,borderPressedInfo:`1px solid ${t}`,borderFocusInfo:`1px solid ${S}`,borderDisabledInfo:`1px solid ${I}`,rippleColorInfo:I,colorSuccess:f,colorHoverSuccess:$,colorPressedSuccess:e,colorFocusSuccess:$,colorDisabledSuccess:f,textColorSuccess:c,textColorHoverSuccess:c,textColorPressedSuccess:c,textColorFocusSuccess:c,textColorDisabledSuccess:c,textColorTextSuccess:f,textColorTextHoverSuccess:$,textColorTextPressedSuccess:e,textColorTextFocusSuccess:$,textColorTextDisabledSuccess:w,textColorGhostSuccess:f,textColorGhostHoverSuccess:$,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:$,textColorGhostDisabledSuccess:f,borderSuccess:`1px solid ${f}`,borderHoverSuccess:`1px solid ${$}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${$}`,borderDisabledSuccess:`1px solid ${f}`,rippleColorSuccess:f,colorWarning:z,colorHoverWarning:T,colorPressedWarning:G,colorFocusWarning:T,colorDisabledWarning:z,textColorWarning:c,textColorHoverWarning:c,textColorPressedWarning:c,textColorFocusWarning:c,textColorDisabledWarning:c,textColorTextWarning:z,textColorTextHoverWarning:T,textColorTextPressedWarning:G,textColorTextFocusWarning:T,textColorTextDisabledWarning:w,textColorGhostWarning:z,textColorGhostHoverWarning:T,textColorGhostPressedWarning:G,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:z,borderWarning:`1px solid ${z}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${G}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${z}`,rippleColorWarning:z,colorError:B,colorHoverError:C,colorPressedError:O,colorFocusError:C,colorDisabledError:B,textColorError:c,textColorHoverError:c,textColorPressedError:c,textColorFocusError:c,textColorDisabledError:c,textColorTextError:B,textColorTextHoverError:C,textColorTextPressedError:O,textColorTextFocusError:C,textColorTextDisabledError:w,textColorGhostError:B,textColorGhostHoverError:C,textColorGhostPressedError:O,textColorGhostFocusError:C,textColorGhostDisabledError:B,borderError:`1px solid ${B}`,borderHoverError:`1px solid ${C}`,borderPressedError:`1px solid ${O}`,borderFocusError:`1px solid ${C}`,borderDisabledError:`1px solid ${B}`,rippleColorError:B,waveOpacity:"0.6",fontWeight:D,fontWeightStrong:X})}const ae={common:Ro,self:se},le=g([V("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[W("color",[v("border",{borderColor:"var(--n-border-color)"}),W("disabled",[v("border",{borderColor:"var(--n-border-color-disabled)"})]),co("disabled",[g("&:focus",[v("state-border",{borderColor:"var(--n-border-color-focus)"})]),g("&:hover",[v("state-border",{borderColor:"var(--n-border-color-hover)"})]),g("&:active",[v("state-border",{borderColor:"var(--n-border-color-pressed)"})]),W("pressed",[v("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),W("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[v("border",{border:"var(--n-border-disabled)"})]),co("disabled",[g("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[v("state-border",{border:"var(--n-border-focus)"})]),g("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[v("state-border",{border:"var(--n-border-hover)"})]),g("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[v("state-border",{border:"var(--n-border-pressed)"})]),W("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[v("state-border",{border:"var(--n-border-pressed)"})])]),W("loading","cursor: wait;"),V("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[W("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),eo&&"MozBoxSizing"in document.createElement("div").style?g("&::moz-focus-inner",{border:0}):null,v("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),v("border",{border:"var(--n-border)"}),v("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),v("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[V("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[so({top:"50%",originalTransform:"translateY(-50%)"})]),Zo()]),v("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[g("~",[v("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),W("block",`
 display: flex;
 width: 100%;
 `),W("dashed",[v("border, state-border",{borderStyle:"dashed !important"})]),W("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),g("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),g("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),de=Object.assign(Object.assign({},mo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!te}}),xe=q({name:"Button",props:de,slots:Object,setup(o){const s=Q(null),d=Q(null),u=Q(!1),n=Vo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),b=go(ne,{}),{mergedSizeRef:k}=Qo({},{defaultSize:"medium",mergedSize:t=>{const{size:f}=o;if(f)return f;const{size:$}=b;if($)return $;const{mergedSize:e}=t||{};return e?e.value:"medium"}}),r=j(()=>o.focusable&&!o.disabled),l=t=>{var f;r.value||t.preventDefault(),!o.nativeFocusBehavior&&(t.preventDefault(),!o.disabled&&r.value&&((f=s.value)===null||f===void 0||f.focus({preventScroll:!0})))},R=t=>{var f;if(!o.disabled&&!o.loading){const{onClick:$}=o;$&&Lo($,t),o.text||(f=d.value)===null||f===void 0||f.play()}},K=t=>{switch(t.key){case"Enter":if(!o.keyboard)return;u.value=!1}},w=t=>{switch(t.key){case"Enter":if(!o.keyboard||o.loading){t.preventDefault();return}u.value=!0}},N=()=>{u.value=!1},{inlineThemeDisabled:y,mergedClsPrefixRef:H,mergedRtlRef:Y}=Oo(o),E=mo("Button","-button",le,ae,o,H),c=_o("Button",Y,H),I=j(()=>{const t=E.value,{common:{cubicBezierEaseInOut:f,cubicBezierEaseOut:$},self:e}=t,{rippleDuration:z,opacityDisabled:T,fontWeight:G,fontWeightStrong:B}=e,C=k.value,{dashed:O,type:D,ghost:A,text:F,color:x,round:X,circle:ro,textColor:M,secondary:wo,tertiary:ao,quaternary:So,strong:To}=o,Ho={"--n-font-weight":To?B:G};let p={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const U=D==="tertiary",lo=D==="default",a=U?"default":D;if(F){const m=M||x;p={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":m||e[i("textColorText",a)],"--n-text-color-hover":m?L(m):e[i("textColorTextHover",a)],"--n-text-color-pressed":m?oo(m):e[i("textColorTextPressed",a)],"--n-text-color-focus":m?L(m):e[i("textColorTextHover",a)],"--n-text-color-disabled":m||e[i("textColorTextDisabled",a)]}}else if(A||O){const m=M||x;p={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":x||e[i("rippleColor",a)],"--n-text-color":m||e[i("textColorGhost",a)],"--n-text-color-hover":m?L(m):e[i("textColorGhostHover",a)],"--n-text-color-pressed":m?oo(m):e[i("textColorGhostPressed",a)],"--n-text-color-focus":m?L(m):e[i("textColorGhostHover",a)],"--n-text-color-disabled":m||e[i("textColorGhostDisabled",a)]}}else if(wo){const m=lo?e.textColor:U?e.textColorTertiary:e[i("color",a)],P=x||m,J=D!=="default"&&D!=="tertiary";p={"--n-color":J?Z(P,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":J?Z(P,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":J?Z(P,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":J?Z(P,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":P,"--n-text-color-hover":P,"--n-text-color-pressed":P,"--n-text-color-focus":P,"--n-text-color-disabled":P}}else if(ao||So){const m=lo?e.textColor:U?e.textColorTertiary:e[i("color",a)],P=x||m;ao?(p["--n-color"]=e.colorTertiary,p["--n-color-hover"]=e.colorTertiaryHover,p["--n-color-pressed"]=e.colorTertiaryPressed,p["--n-color-focus"]=e.colorSecondaryHover,p["--n-color-disabled"]=e.colorTertiary):(p["--n-color"]=e.colorQuaternary,p["--n-color-hover"]=e.colorQuaternaryHover,p["--n-color-pressed"]=e.colorQuaternaryPressed,p["--n-color-focus"]=e.colorQuaternaryHover,p["--n-color-disabled"]=e.colorQuaternary),p["--n-ripple-color"]="#0000",p["--n-text-color"]=P,p["--n-text-color-hover"]=P,p["--n-text-color-pressed"]=P,p["--n-text-color-focus"]=P,p["--n-text-color-disabled"]=P}else p={"--n-color":x||e[i("color",a)],"--n-color-hover":x?L(x):e[i("colorHover",a)],"--n-color-pressed":x?oo(x):e[i("colorPressed",a)],"--n-color-focus":x?L(x):e[i("colorFocus",a)],"--n-color-disabled":x||e[i("colorDisabled",a)],"--n-ripple-color":x||e[i("rippleColor",a)],"--n-text-color":M||(x?e.textColorPrimary:U?e.textColorTertiary:e[i("textColor",a)]),"--n-text-color-hover":M||(x?e.textColorHoverPrimary:e[i("textColorHover",a)]),"--n-text-color-pressed":M||(x?e.textColorPressedPrimary:e[i("textColorPressed",a)]),"--n-text-color-focus":M||(x?e.textColorFocusPrimary:e[i("textColorFocus",a)]),"--n-text-color-disabled":M||(x?e.textColorDisabledPrimary:e[i("textColorDisabled",a)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};F?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[i("border",a)],"--n-border-hover":e[i("borderHover",a)],"--n-border-pressed":e[i("borderPressed",a)],"--n-border-focus":e[i("borderFocus",a)],"--n-border-disabled":e[i("borderDisabled",a)]};const{[i("height",C)]:no,[i("fontSize",C)]:zo,[i("padding",C)]:Bo,[i("paddingRound",C)]:Fo,[i("iconSize",C)]:Eo,[i("borderRadius",C)]:Io,[i("iconMargin",C)]:Wo,waveOpacity:ko}=e,Do={"--n-width":ro&&!F?no:"initial","--n-height":F?"initial":no,"--n-font-size":zo,"--n-padding":ro||F?"initial":X?Fo:Bo,"--n-icon-size":Eo,"--n-icon-margin":Wo,"--n-border-radius":F?"initial":ro||X?no:Io};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":f,"--n-bezier-ease-out":$,"--n-ripple-duration":z,"--n-opacity-disabled":T,"--n-wave-opacity":ko},Ho),p),to),Do)}),S=y?Mo("button",j(()=>{let t="";const{dashed:f,type:$,ghost:e,text:z,color:T,round:G,circle:B,textColor:C,secondary:O,tertiary:D,quaternary:A,strong:F}=o;f&&(t+="a"),e&&(t+="b"),z&&(t+="c"),G&&(t+="d"),B&&(t+="e"),O&&(t+="f"),D&&(t+="g"),A&&(t+="h"),F&&(t+="i"),T&&(t+=`j${fo(T)}`),C&&(t+=`k${fo(C)}`);const{value:x}=k;return t+=`l${x[0]}`,t+=`m${$[0]}`,t}),I,o):void 0;return{selfElRef:s,waveElRef:d,mergedClsPrefix:H,mergedFocusable:r,mergedSize:k,showBorder:n,enterPressed:u,rtlEnabled:c,handleMousedown:l,handleKeydown:w,handleBlur:N,handleKeyup:K,handleClick:R,customColorCssVars:j(()=>{const{color:t}=o;if(!t)return null;const f=L(t);return{"--n-border-color":t,"--n-border-color-hover":f,"--n-border-color-pressed":oo(t),"--n-border-color-focus":f,"--n-border-color-disabled":t}}),cssVars:y?void 0:I,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:o,tag:s,onRender:d}=this;d==null||d();const u=uo(this.$slots.default,n=>n&&h("span",{class:`${o}-button__content`},n));return h(s,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,h(Yo,{width:!0},{default:()=>uo(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&h("span",{class:`${o}-button__icon`,style:{margin:Go(this.$slots.default)?"0":""}},h(Po,null,{default:()=>this.loading?h(Jo,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&u,this.text?null:h(ee,{ref:"waveElRef",clsPrefix:o}),this.showBorder?h("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}});export{xe as B};
