import{_ as B}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as f,d as $,e as m,w as j,u as z,f as u,g as N,b as v,N as O,_ as b}from"./light-XzTtbOfL.js";import{j as I,h as V,g as L}from"./light-CllX6m0q.js";import{f as T,h as i,G as W,k as g,F as k,r as x,C as F,o as H,w as y,e as _,a as R,b as w}from"./app-Dbap0sVN.js";import{b as D}from"./light-Bmy0d06o.js";import{S as M,a as A,N as Y}from"./Tabs-BOwOmOvW.js";import{B as G}from"./Button-CRNLdLGw.js";import{N as J}from"./Tag-DeipNOCV.js";import{N as K}from"./Card-Bh0xJGwF.js";import{N as Z}from"./Image-Dx5KhJ9F.js";import{a as q,b as Q,N as U}from"./LayoutSider-C1plC1_0.js";import{N as X}from"./Space-DvuGP7Nk.js";import"./Close-Dthulp1l.js";import"./use-is-mounted-B8UGHkJE.js";import"./light-D0LKCwkf.js";import"./color-to-class-B0iQgAn2.js";const ee=f("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[$("color-transition",{transition:"color .3s var(--n-bezier)"}),$("depth",{color:"var(--n-color)"},[m("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),m("svg",{height:"1em",width:"1em"})]),te=Object.assign(Object.assign({},u.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),ne=T({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:te,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:o}=z(t),l=u("Icon","-icon",ee,I,t,e),d=g(()=>{const{depth:r}=t,{common:{cubicBezierEaseInOut:c},self:s}=l.value;if(r!==void 0){const{color:h,[`opacity${r}Depth`]:n}=s;return{"--n-bezier":c,"--n-color":h,"--n-opacity":n}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),a=o?N("icon",g(()=>`${t.depth||"d"}`),d,t):void 0;return{mergedClsPrefix:e,mergedStyle:g(()=>{const{size:r,color:c}=t;return{fontSize:D(r),color:c}}),cssVars:o?void 0:d,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var t;const{$parent:e,depth:o,mergedClsPrefix:l,component:d,onRender:a,themeClass:r}=this;return!((t=e==null?void 0:e.$options)===null||t===void 0)&&t._n_icon__&&j("icon","don't wrap `n-icon` inside `n-icon`"),a==null||a(),i("i",W(this.$attrs,{role:"img",class:[`${l}-icon`,r,{[`${l}-icon--depth`]:o,[`${l}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),d?i(d):this.$slots)}}),ie=f("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[f("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),f("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[f("thing-header-wrapper",`
 flex: 1;
 `)]),f("thing-main",`
 flex-grow: 1;
 `,[f("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[v("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),v("description",[m("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),v("content",[m("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("footer",[m("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("action",[m("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),re=Object.assign(Object.assign({},u.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),ae=T({name:"Thing",props:re,slots:Object,setup(t,{slots:e}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:d}=z(t),a=u("Thing","-thing",ie,V,t,o),r=O("Thing",d,o),c=g(()=>{const{self:{titleTextColor:h,textColor:n,titleFontWeight:p,fontSize:C},common:{cubicBezierEaseInOut:S}}=a.value;return{"--n-bezier":S,"--n-font-size":C,"--n-text-color":n,"--n-title-font-weight":p,"--n-title-text-color":h}}),s=l?N("thing",void 0,c,t):void 0;return()=>{var h;const{value:n}=o,p=r?r.value:!1;return(h=s==null?void 0:s.onRender)===null||h===void 0||h.call(s),i("div",{class:[`${n}-thing`,s==null?void 0:s.themeClass,p&&`${n}-thing--rtl`],style:l?void 0:c.value},e.avatar&&t.contentIndented?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,i("div",{class:`${n}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?i("div",{class:`${n}-thing-avatar-header-wrapper`},e.avatar?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header-wrapper`},i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):i(k,null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?i("div",{class:[`${n}-thing-main__content`,t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?i("div",{class:`${n}-thing-main__footer`},e.footer()):null,e.action?i("div",{class:`${n}-thing-main__action`},e.action()):null))}}}),oe=f("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[m("&:first-child",{marginTop:0}),$("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[$("align-text",{paddingLeft:0},[m("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),m("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),m("&::before",{backgroundColor:"var(--n-bar-color)"})])]),de=Object.assign(Object.assign({},u.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),le=t=>T({name:`H${t}`,props:de,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:l}=z(e),d=u("Typography","-h",oe,L,e,o),a=g(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:s},self:{headerFontWeight:h,headerTextColor:n,[b("headerPrefixWidth",t)]:p,[b("headerFontSize",t)]:C,[b("headerMargin",t)]:S,[b("headerBarWidth",t)]:P,[b("headerBarColor",c)]:E}}=d.value;return{"--n-bezier":s,"--n-font-size":C,"--n-margin":S,"--n-bar-color":E,"--n-bar-width":P,"--n-font-weight":h,"--n-text-color":n,"--n-prefix-width":p}}),r=l?N(`h${t}`,g(()=>e.type[0]),a,e):void 0;return{mergedClsPrefix:o,cssVars:l?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{prefix:o,alignText:l,mergedClsPrefix:d,cssVars:a,$slots:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),i(`h${t}`,{class:[`${d}-h`,`${d}-h${t}`,this.themeClass,{[`${d}-h--prefix-bar`]:o,[`${d}-h--align-text`]:l}],style:a},r)}}),se=le("2"),ce={props:["title"],components:{NTag:J,NButton:G,NSpace:X,NLayout:U,NLayoutContent:Q,NLayoutSider:q,NH2:se,NImage:Z,NTabs:Y,NTabPane:A,NScrollbar:M,NCard:K,NIcon:ne,NThing:ae},data(){return{isMobile:window.innerWidth<600}},mounted(){window.onresize=()=>{this.windowWidth=window.innerWidth}}};function he(t,e,o,l,d,a){const r=x("n-h2"),c=x("n-button"),s=x("n-space"),h=x("n-card"),n=x("n-layout");return H(),F(n,{embedded:"","content-style":"padding: 12px;"},{default:y(()=>[_(h,null,{default:y(()=>[_(s,{justify:"space-between"},{default:y(()=>[_(r,null,{default:y(()=>e[0]||(e[0]=[w(" Title ")])),_:1}),_(c,{strong:"",secondary:"",round:""},{default:y(()=>e[1]||(e[1]=[w(" Paper ")])),_:1})]),_:1}),e[2]||(e[2]=R("iframe",{width:"100%",height:"450px",src:"https://www.youtube.com/embed/Nc_YeJMSCDE?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)),e[3]||(e[3]=w(" All you need to do to look to those clouds,")),e[4]||(e[4]=R("br",null,null,-1)),e[5]||(e[5]=w(" and every day be in a good mood. "))]),_:1})]),_:1})}const Te=B(ce,[["render",he]]);export{Te as default};
