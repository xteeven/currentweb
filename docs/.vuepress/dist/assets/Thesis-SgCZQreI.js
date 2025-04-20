import{_ as $}from"./plugin-vue_export-helper-DlAUqK2U.js";import{d as z,c as B,n as _,a as d,i as a,u as T,e as N,f as P}from"./light-BrY5Xv2M.js";import{f as S,h as f,F as D,g as R,r as m,C as b,o as w,w as n,e as r,a as y,b as u,P as C,t as g}from"./app-B01iSlf7.js";import{B as V}from"./Button-5vdxX8tm.js";import{a as W,N as j}from"./Tabs-BjvwatJM.js";import{N as L}from"./Image-rFdGuL9O.js";import{N as M,a as O,b as A,c as E}from"./headers-CKe7HqJo.js";import{N as F}from"./Space-D2-OFuaw.js";import"./use-is-mounted-B-Jg0vHw.js";import"./color-to-class-B0iQgAn2.js";import"./Icon-C3NvCphL.js";import"./Close-BN4QjjqZ.js";import"./replaceable-CrufXe-m.js";import"./use-locale-DRaGX0zd.js";function H(o){const{textColor1:e,dividerColor:i,fontWeightStrong:s}=o;return{textColor:e,color:i,fontWeight:s}}const I={common:z,self:H},q=B("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[_("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[_("no-title",`
 display: flex;
 align-items: center;
 `)]),d("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),a("title-position-left",[d("line",[a("left",{width:"28px"})])]),a("title-position-right",[d("line",[a("right",{width:"28px"})])]),a("dashed",[d("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),a("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),d("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),_("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),a("dashed",[d("line",{borderColor:"var(--n-color)"})]),a("vertical",{backgroundColor:"var(--n-color)"})]),G=Object.assign(Object.assign({},N.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),J=S({name:"Divider",props:G,setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:i}=T(o),s=N("Divider","-divider",q,I,o,e),c=R(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:h,textColor:p,fontWeight:v}}=s.value;return{"--n-bezier":t,"--n-color":h,"--n-text-color":p,"--n-font-weight":v}}),l=i?P("divider",void 0,c,o):void 0;return{mergedClsPrefix:e,cssVars:i?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var o;const{$slots:e,titlePlacement:i,vertical:s,dashed:c,cssVars:l,mergedClsPrefix:t}=this;return(o=this.onRender)===null||o===void 0||o.call(this),f("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:s,[`${t}-divider--no-title`]:!e.default,[`${t}-divider--dashed`]:c,[`${t}-divider--title-position-${i}`]:e.default&&i}],style:l},s?null:f("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!s&&e.default?f(D,null,f("div",{class:`${t}-divider__title`},this.$slots),f("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),K={props:["title","abstract","picture"],components:{NButton:V,NSpace:F,NLayout:E,NLayoutContent:A,NLayoutSider:O,NH2:M,NDivider:J,NImage:L,NTabs:j,NTabPane:W},data(){return{isMobile:window.innerWidth<600}},mounted(){window.onresize=()=>{this.windowWidth=window.innerWidth}}};function Q(o,e,i,s,c,l){const t=m("n-image"),h=m("n-layout-sider"),p=m("n-divider"),v=m("n-layout-content"),x=m("n-layout"),k=m("n-space");return w(),b(k,{vertical:"",size:"large"},{default:n(()=>[c.isMobile?(w(),b(x,{key:1},{default:n(()=>[r(h,{"default-expanded":"","collapse-mode":"width","collapsed-width":240,width:300,"content-style":"padding: 24px;"},{default:n(()=>[r(t,{"object-fit":"scale-down",width:"240",src:i.picture},null,8,["src"])]),_:1}),r(v,{"content-style":"padding: 24px;"},{default:n(()=>[y("h5",null,g(i.title),1),r(p,{"title-placement":"left"},{default:n(()=>e[2]||(e[2]=[u(" Abstract ")])),_:1}),u(" "+g(i.abstract)+" ",1),r(p,{"title-placement":"right"},{default:n(()=>e[3]||(e[3]=[u(" Skills To Develop ")])),_:1}),C(o.$slots,"default")]),_:3})]),_:3})):(w(),b(x,{key:0,"has-sider":""},{default:n(()=>[r(h,{"default-collapsed":"","collapse-mode":"width","collapsed-width":120,width:240,"show-trigger":"round","content-style":"padding: 24px;"},{default:n(()=>[r(t,{"object-fit":"scale-down",width:"240",src:i.picture},null,8,["src"])]),_:1}),r(v,{"content-style":"padding: 24px;"},{default:n(()=>[y("h5",null,g(i.title),1),r(p,{"title-placement":"left"},{default:n(()=>e[0]||(e[0]=[u(" Abstract ")])),_:1}),u(" "+g(i.abstract)+" ",1),r(p,{"title-placement":"right"},{default:n(()=>e[1]||(e[1]=[u(" Skills To Develop ")])),_:1}),C(o.$slots,"default")]),_:3})]),_:3}))]),_:3})}const ce=$(K,[["render",Q]]);export{ce as default};
