import{a as ae,d as t,b as h,O as z,e as y,R as P,u as ne,f as T,N as te,_ as a,g as le,T as se,c as ie}from"./light-XzTtbOfL.js";import{N as de}from"./Close-Dthulp1l.js";import{t as he}from"./light-CllX6m0q.js";import{g as ge}from"./light-Bmy0d06o.js";import{c as _}from"./color-to-class-B0iQgAn2.js";import{f as be,h as g,g as ve,p as ue,s as fe,k as I}from"./app-Dbap0sVN.js";const ke={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ce=ae("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[t("strong",`
 font-weight: var(--n-font-weight-strong);
 `),h("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),h("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),h("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),h("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),t("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[h("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),h("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),t("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),t("icon, avatar",[t("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),t("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),t("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),t("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pe=Object.assign(Object.assign(Object.assign({},T.props),ke),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),me=ie("n-tag"),Pe=be({name:"Tag",props:pe,slots:Object,setup(r){const s=ve(null),{mergedBorderedRef:o,mergedClsPrefixRef:b,inlineThemeDisabled:v,mergedRtlRef:B}=ne(r),f=T("Tag","-tag",Ce,he,r,b);ue(me,{roundRef:fe(r,"round")});function u(){if(!r.disabled&&r.checkable){const{checked:e,onCheckedChange:c,onUpdateChecked:d,"onUpdate:checked":l}=r;d&&d(!e),l&&l(!e),c&&c(!e)}}function k(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){const{onClose:c}=r;c&&se(c,e)}}const C={setTextContent(e){const{value:c}=s;c&&(c.textContent=e)}},p=te("Tag",B,b),n=I(()=>{const{type:e,size:c,color:{color:d,textColor:l}={}}=r,{common:{cubicBezierEaseInOut:m},self:{padding:M,closeMargin:O,borderRadius:w,opacityDisabled:S,textColorCheckable:j,textColorHoverCheckable:F,textColorPressedCheckable:H,textColorChecked:N,colorCheckable:E,colorHoverCheckable:U,colorPressedCheckable:D,colorChecked:K,colorCheckedHover:V,colorCheckedPressed:W,closeBorderRadius:A,fontWeightStrong:L,[a("colorBordered",e)]:q,[a("closeSize",c)]:G,[a("closeIconSize",c)]:J,[a("fontSize",c)]:Q,[a("height",c)]:$,[a("color",e)]:X,[a("textColor",e)]:Y,[a("border",e)]:Z,[a("closeIconColor",e)]:R,[a("closeIconColorHover",e)]:ee,[a("closeIconColorPressed",e)]:oe,[a("closeColorHover",e)]:re,[a("closeColorPressed",e)]:ce}}=f.value,x=ge(O);return{"--n-font-weight-strong":L,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":m,"--n-border-radius":w,"--n-border":Z,"--n-close-icon-size":J,"--n-close-color-pressed":ce,"--n-close-color-hover":re,"--n-close-border-radius":A,"--n-close-icon-color":R,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":R,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":G,"--n-color":d||(o.value?q:X),"--n-color-checkable":E,"--n-color-checked":K,"--n-color-checked-hover":V,"--n-color-checked-pressed":W,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":D,"--n-font-size":Q,"--n-height":$,"--n-opacity-disabled":S,"--n-padding":M,"--n-text-color":l||Y,"--n-text-color-checkable":j,"--n-text-color-checked":N,"--n-text-color-hover-checkable":F,"--n-text-color-pressed-checkable":H}}),i=v?le("tag",I(()=>{let e="";const{type:c,size:d,color:{color:l,textColor:m}={}}=r;return e+=c[0],e+=d[0],l&&(e+=`a${_(l)}`),m&&(e+=`b${_(m)}`),o.value&&(e+="c"),e}),n,r):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:p,mergedClsPrefix:b,contentRef:s,mergedBordered:o,handleClick:u,handleCloseClick:k,cssVars:v?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){var r,s;const{mergedClsPrefix:o,rtlEnabled:b,closable:v,color:{borderColor:B}={},round:f,onRender:u,$slots:k}=this;u==null||u();const C=P(k.avatar,n=>n&&g("div",{class:`${o}-tag__avatar`},n)),p=P(k.icon,n=>n&&g("div",{class:`${o}-tag__icon`},n));return g("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:b,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:C,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:v}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||C,g("span",{class:`${o}-tag__content`,ref:"contentRef"},(s=(r=this.$slots).default)===null||s===void 0?void 0:s.call(r)),!this.checkable&&v?g(de,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{Pe as N};
