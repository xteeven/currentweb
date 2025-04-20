import{_ as E}from"./plugin-vue_export-helper-DlAUqK2U.js";import{f as m,B as w,i as u,e as C,ac as R,h as i,aC as j,u as S,j as _,aS as B,k as b,g,aT as O,M as P,r as f,O as I,o as V,w as v,n as p,a as $,b as x}from"./app-CXKPdMHI.js";import{u as N,d as L}from"./use-style-BovTl7ck.js";import{b as k}from"./replaceable-le26HWVq.js";import{S as D}from"./Scrollbar-CfrbkaGx.js";import{B as M}from"./Button-C9fby5gy.js";import{N as W}from"./Tag-BO6OR8Vn.js";import{N as F}from"./Card-C7FXgjC9.js";import{a as H,N as A}from"./Tabs-B7GO0S0Q.js";import{N as Y}from"./Image-Hjg23maZ.js";import{N as J,a as Z,b as q,c as G}from"./headers-CaKAvcB8.js";import{N as K}from"./Space-BSLXP-Tt.js";import"./use-is-mounted-CEaPQNAS.js";import"./color-to-class-B0iQgAn2.js";import"./Close-BD4alOGP.js";import"./Icon-DqtS5SBZ.js";import"./use-locale-D75wvq4V.js";const Q=m("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[w("color-transition",{transition:"color .3s var(--n-bezier)"}),w("depth",{color:"var(--n-color)"},[u("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),u("svg",{height:"1em",width:"1em"})]),U=Object.assign(Object.assign({},_.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),X=C({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:U,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:l}=S(t),d=_("Icon","-icon",Q,B,t,e),h=b(()=>{const{depth:r}=t,{common:{cubicBezierEaseInOut:c},self:o}=d.value;if(r!==void 0){const{color:s,[`opacity${r}Depth`]:n}=o;return{"--n-bezier":c,"--n-color":s,"--n-opacity":n}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),a=l?N("icon",b(()=>`${t.depth||"d"}`),h,t):void 0;return{mergedClsPrefix:e,mergedStyle:b(()=>{const{size:r,color:c}=t;return{fontSize:k(r),color:c}}),cssVars:l?void 0:h,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var t;const{$parent:e,depth:l,mergedClsPrefix:d,component:h,onRender:a,themeClass:r}=this;return!((t=e==null?void 0:e.$options)===null||t===void 0)&&t._n_icon__&&R("icon","don't wrap `n-icon` inside `n-icon`"),a==null||a(),i("i",j(this.$attrs,{role:"img",class:[`${d}-icon`,r,{[`${d}-icon--depth`]:l,[`${d}-icon--color-transition`]:l!==void 0}],style:[this.cssVars,this.mergedStyle]}),h?i(h):this.$slots)}}),ee=m("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[m("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),m("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[m("thing-header-wrapper",`
 flex: 1;
 `)]),m("thing-main",`
 flex-grow: 1;
 `,[m("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[g("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),g("description",[u("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),g("content",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)]),g("footer",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)]),g("action",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),te=Object.assign(Object.assign({},_.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),ne=C({name:"Thing",props:te,slots:Object,setup(t,{slots:e}){const{mergedClsPrefixRef:l,inlineThemeDisabled:d,mergedRtlRef:h}=S(t),a=_("Thing","-thing",ee,O,t,l),r=L("Thing",h,l),c=b(()=>{const{self:{titleTextColor:s,textColor:n,titleFontWeight:y,fontSize:z},common:{cubicBezierEaseInOut:T}}=a.value;return{"--n-bezier":T,"--n-font-size":z,"--n-text-color":n,"--n-title-font-weight":y,"--n-title-text-color":s}}),o=d?N("thing",void 0,c,t):void 0;return()=>{var s;const{value:n}=l,y=r?r.value:!1;return(s=o==null?void 0:o.onRender)===null||s===void 0||s.call(o),i("div",{class:[`${n}-thing`,o==null?void 0:o.themeClass,y&&`${n}-thing--rtl`],style:d?void 0:c.value},e.avatar&&t.contentIndented?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,i("div",{class:`${n}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?i("div",{class:`${n}-thing-avatar-header-wrapper`},e.avatar?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header-wrapper`},i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):i(P,null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?i("div",{class:[`${n}-thing-main__content`,t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?i("div",{class:`${n}-thing-main__footer`},e.footer()):null,e.action?i("div",{class:`${n}-thing-main__action`},e.action()):null))}}}),ie={props:["title"],components:{NTag:W,NButton:M,NSpace:K,NLayout:G,NLayoutContent:q,NLayoutSider:Z,NH2:J,NImage:Y,NTabs:A,NTabPane:H,NScrollbar:D,NCard:F,NIcon:X,NThing:ne},data(){return{isMobile:window.innerWidth<600}},mounted(){window.onresize=()=>{this.windowWidth=window.innerWidth}}};function ae(t,e,l,d,h,a){const r=f("n-h2"),c=f("n-button"),o=f("n-space"),s=f("n-card"),n=f("n-layout");return V(),I(n,{embedded:"","content-style":"padding: 12px;"},{default:v(()=>[p(s,null,{default:v(()=>[p(o,{justify:"space-between"},{default:v(()=>[p(r,null,{default:v(()=>e[0]||(e[0]=[x(" Title ")])),_:1}),p(c,{strong:"",secondary:"",round:""},{default:v(()=>e[1]||(e[1]=[x(" Paper ")])),_:1})]),_:1}),e[2]||(e[2]=$("iframe",{width:"100%",height:"450px",src:"https://www.youtube.com/embed/Nc_YeJMSCDE?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)),e[3]||(e[3]=x(" All you need to do to look to those clouds,")),e[4]||(e[4]=$("br",null,null,-1)),e[5]||(e[5]=x(" and every day be in a good mood. "))]),_:1})]),_:1})}const we=E(ie,[["render",ae]]);export{we as default};
