import{_ as R}from"./plugin-vue_export-helper-DlAUqK2U.js";import{d as $,c as m,i as w,b as u,y as B,u as S,e as b,f as N,a as f,q as P}from"./light-BrY5Xv2M.js";import{f as z,h as i,Q as j,g as y,F as I,r as g,C as O,o as D,w as p,e as v,a as C,b as x}from"./app-B01iSlf7.js";import{b as V}from"./replaceable-CrufXe-m.js";import{S as L}from"./Scrollbar-C9TbiyDU.js";import{B as W}from"./Button-5vdxX8tm.js";import{N as F}from"./Tag-adTG7B_E.js";import{N as k}from"./Card-CO03Mz3f.js";import{a as H,N as M}from"./Tabs-BjvwatJM.js";import{N as A}from"./Image-rFdGuL9O.js";import{N as Y,a as q,b as J,c as Q}from"./headers-CKe7HqJo.js";import{N as Z}from"./Space-D2-OFuaw.js";import"./use-is-mounted-B-Jg0vHw.js";import"./color-to-class-B0iQgAn2.js";import"./Close-BN4QjjqZ.js";import"./Icon-C3NvCphL.js";import"./use-locale-DRaGX0zd.js";function G(t){const{textColorBase:e,opacity1:a,opacity2:r,opacity3:c,opacity4:o,opacity5:l}=t;return{color:e,opacity1Depth:a,opacity2Depth:r,opacity3Depth:c,opacity4Depth:o,opacity5Depth:l}}const K={common:$,self:G},U=m("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[w("color-transition",{transition:"color .3s var(--n-bezier)"}),w("depth",{color:"var(--n-color)"},[u("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),u("svg",{height:"1em",width:"1em"})]),X=Object.assign(Object.assign({},b.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),ee=z({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:X,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:a}=S(t),r=b("Icon","-icon",U,K,t,e),c=y(()=>{const{depth:l}=t,{common:{cubicBezierEaseInOut:s},self:d}=r.value;if(l!==void 0){const{color:h,[`opacity${l}Depth`]:n}=d;return{"--n-bezier":s,"--n-color":h,"--n-opacity":n}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),o=a?N("icon",y(()=>`${t.depth||"d"}`),c,t):void 0;return{mergedClsPrefix:e,mergedStyle:y(()=>{const{size:l,color:s}=t;return{fontSize:V(l),color:s}}),cssVars:a?void 0:c,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var t;const{$parent:e,depth:a,mergedClsPrefix:r,component:c,onRender:o,themeClass:l}=this;return!((t=e==null?void 0:e.$options)===null||t===void 0)&&t._n_icon__&&B("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),i("i",j(this.$attrs,{role:"img",class:[`${r}-icon`,l,{[`${r}-icon--depth`]:a,[`${r}-icon--color-transition`]:a!==void 0}],style:[this.cssVars,this.mergedStyle]}),c?i(c):this.$slots)}});function te(t){const{textColor1:e,textColor2:a,fontWeightStrong:r,fontSize:c}=t;return{fontSize:c,titleTextColor:e,textColor:a,titleFontWeight:r}}const ne={common:$,self:te},ie=m("thing",`
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
 `,[f("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),f("description",[u("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),f("content",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)]),f("footer",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)]),f("action",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),oe=Object.assign(Object.assign({},b.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),ae=z({name:"Thing",props:oe,slots:Object,setup(t,{slots:e}){const{mergedClsPrefixRef:a,inlineThemeDisabled:r,mergedRtlRef:c}=S(t),o=b("Thing","-thing",ie,ne,t,a),l=P("Thing",c,a),s=y(()=>{const{self:{titleTextColor:h,textColor:n,titleFontWeight:_,fontSize:T},common:{cubicBezierEaseInOut:E}}=o.value;return{"--n-bezier":E,"--n-font-size":T,"--n-text-color":n,"--n-title-font-weight":_,"--n-title-text-color":h}}),d=r?N("thing",void 0,s,t):void 0;return()=>{var h;const{value:n}=a,_=l?l.value:!1;return(h=d==null?void 0:d.onRender)===null||h===void 0||h.call(d),i("div",{class:[`${n}-thing`,d==null?void 0:d.themeClass,_&&`${n}-thing--rtl`],style:r?void 0:s.value},e.avatar&&t.contentIndented?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,i("div",{class:`${n}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?i("div",{class:`${n}-thing-avatar-header-wrapper`},e.avatar?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header-wrapper`},i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):i(I,null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?i("div",{class:[`${n}-thing-main__content`,t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?i("div",{class:`${n}-thing-main__footer`},e.footer()):null,e.action?i("div",{class:`${n}-thing-main__action`},e.action()):null))}}}),re={props:["title"],components:{NTag:F,NButton:W,NSpace:Z,NLayout:Q,NLayoutContent:J,NLayoutSider:q,NH2:Y,NImage:A,NTabs:M,NTabPane:H,NScrollbar:L,NCard:k,NIcon:ee,NThing:ae},data(){return{isMobile:window.innerWidth<600}},mounted(){window.onresize=()=>{this.windowWidth=window.innerWidth}}};function le(t,e,a,r,c,o){const l=g("n-h2"),s=g("n-button"),d=g("n-space"),h=g("n-card"),n=g("n-layout");return D(),O(n,{embedded:"","content-style":"padding: 12px;"},{default:p(()=>[v(h,null,{default:p(()=>[v(d,{justify:"space-between"},{default:p(()=>[v(l,null,{default:p(()=>e[0]||(e[0]=[x(" Title ")])),_:1}),v(s,{strong:"",secondary:"",round:""},{default:p(()=>e[1]||(e[1]=[x(" Paper ")])),_:1})]),_:1}),e[2]||(e[2]=C("iframe",{width:"100%",height:"450px",src:"https://www.youtube.com/embed/Nc_YeJMSCDE?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)),e[3]||(e[3]=x(" All you need to do to look to those clouds,")),e[4]||(e[4]=C("br",null,null,-1)),e[5]||(e[5]=x(" and every day be in a good mood. "))]),_:1})]),_:1})}const Se=R(re,[["render",le]]);export{Se as default};
