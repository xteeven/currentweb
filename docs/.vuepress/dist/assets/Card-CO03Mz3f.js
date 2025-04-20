import{d as U,b as n,c as z,$ as X,a0 as Y,a1 as Z,i,a,o as v,a2 as h,u as oo,e as F,q as eo,g as w,f as ro,v as to}from"./light-BrY5Xv2M.js";import{N as no}from"./Close-BN4QjjqZ.js";import{g as ao}from"./replaceable-CrufXe-m.js";import{f as io,h as s,g as E}from"./app-B01iSlf7.js";const lo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function so(e){const{primaryColor:u,borderRadius:g,lineHeight:o,fontSize:c,cardColor:b,textColor2:x,textColor1:f,dividerColor:d,fontWeightStrong:t,closeIconColor:r,closeIconColorHover:l,closeIconColorPressed:C,closeColorHover:m,closeColorPressed:S,modalColor:y,boxShadow1:$,popoverColor:k,actionColor:p}=e;return Object.assign(Object.assign({},lo),{lineHeight:o,color:b,colorModal:y,colorPopover:k,colorTarget:u,colorEmbedded:p,colorEmbeddedModal:p,colorEmbeddedPopover:p,textColor:x,titleTextColor:f,borderColor:d,actionColor:p,titleFontWeight:t,closeColorHover:m,closeColorPressed:S,closeBorderRadius:g,closeIconColor:r,closeIconColorHover:l,closeIconColorPressed:C,fontSizeSmall:c,fontSizeMedium:c,fontSizeLarge:c,fontSizeHuge:c,boxShadow:$,borderRadius:g})}const co={common:U,self:so},bo=n([z("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Z({background:"var(--n-color-modal)"}),i("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[n(">",[a("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[n(">",[a("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),i("footer-segmented",[n(">",[a("footer",{paddingTop:"var(--n-padding-bottom)"})])]),i("footer-soft-segmented",[n(">",[a("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[z("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[a("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),a("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),a("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),a("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),a("content","flex: 1; min-width: 0;"),a("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),a("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),z("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),i("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),i("action-segmented",[n(">",[a("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("content-segmented, content-soft-segmented",[n(">",[a("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("footer-segmented, footer-soft-segmented",[n(">",[a("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("embedded",`
 background-color: var(--n-color-embedded);
 `)]),X(z("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Y(z("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),go={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},fo=Object.assign(Object.assign({},F.props),go),uo=io({name:"Card",props:fo,slots:Object,setup(e){const u=()=>{const{onClose:t}=e;t&&to(t)},{inlineThemeDisabled:g,mergedClsPrefixRef:o,mergedRtlRef:c}=oo(e),b=F("Card","-card",bo,co,e,o),x=eo("Card",c,o),f=E(()=>{const{size:t}=e,{self:{color:r,colorModal:l,colorTarget:C,textColor:m,titleTextColor:S,titleFontWeight:y,borderColor:$,actionColor:k,borderRadius:p,lineHeight:P,closeIconColor:T,closeIconColorHover:R,closeIconColorPressed:B,closeColorHover:_,closeColorPressed:M,closeBorderRadius:O,closeIconSize:j,closeSize:H,boxShadow:I,colorPopover:V,colorEmbedded:L,colorEmbeddedModal:N,colorEmbeddedPopover:W,[w("padding",t)]:q,[w("fontSize",t)]:A,[w("titleFontSize",t)]:D},common:{cubicBezierEaseInOut:K}}=b.value,{top:G,left:J,bottom:Q}=ao(q);return{"--n-bezier":K,"--n-border-radius":p,"--n-color":r,"--n-color-modal":l,"--n-color-popover":V,"--n-color-embedded":L,"--n-color-embedded-modal":N,"--n-color-embedded-popover":W,"--n-color-target":C,"--n-text-color":m,"--n-line-height":P,"--n-action-color":k,"--n-title-text-color":S,"--n-title-font-weight":y,"--n-close-icon-color":T,"--n-close-icon-color-hover":R,"--n-close-icon-color-pressed":B,"--n-close-color-hover":_,"--n-close-color-pressed":M,"--n-border-color":$,"--n-box-shadow":I,"--n-padding-top":G,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":A,"--n-title-font-size":D,"--n-close-size":H,"--n-close-icon-size":j,"--n-close-border-radius":O}}),d=g?ro("card",E(()=>e.size[0]),f,e):void 0;return{rtlEnabled:x,mergedClsPrefix:o,mergedTheme:b,handleCloseClick:u,cssVars:g?void 0:f,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:e,bordered:u,hoverable:g,mergedClsPrefix:o,rtlEnabled:c,onRender:b,embedded:x,tag:f,$slots:d}=this;return b==null||b(),s(f,{class:[`${o}-card`,this.themeClass,x&&`${o}-card--embedded`,{[`${o}-card--rtl`]:c,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:u,[`${o}-card--hoverable`]:g}],style:this.cssVars,role:this.role},v(d.cover,t=>{const r=this.cover?h([this.cover()]):t;return r&&s("div",{class:`${o}-card-cover`,role:"none"},r)}),v(d.header,t=>{const{title:r}=this,l=r?h(typeof r=="function"?[r()]:[r]):t;return l||this.closable?s("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},s("div",{class:`${o}-card-header__main`,role:"heading"},l),v(d["header-extra"],C=>{const m=this.headerExtra?h([this.headerExtra()]):C;return m&&s("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&s(no,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),v(d.default,t=>{const{content:r}=this,l=r?h(typeof r=="function"?[r()]:[r]):t;return l&&s("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),v(d.footer,t=>{const r=this.footer?h([this.footer()]):t;return r&&s("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),v(d.action,t=>{const r=this.action?h([this.action()]):t;return r&&s("div",{class:`${o}-card__action`,role:"none"},r)}))}});export{uo as N};
