import{_ as $}from"./plugin-vue_export-helper-DlAUqK2U.js";import{f as B,U as _,g as s,B as a,e as z,h as f,M as T,u as D,j as C,aW as P,k as S,r as m,O as b,o as w,w as o,n as r,a as y,b as u,ab as N,t as g}from"./app-CXKPdMHI.js";import{u as R}from"./use-style-BovTl7ck.js";import{B as V}from"./Button-C9fby5gy.js";import{a as j,N as M}from"./Tabs-B7GO0S0Q.js";import{N as W}from"./Image-Hjg23maZ.js";import{N as L,a as O,b as A,c as E}from"./headers-CaKAvcB8.js";import{N as H}from"./Space-BSLXP-Tt.js";import"./use-is-mounted-CEaPQNAS.js";import"./color-to-class-B0iQgAn2.js";import"./Icon-DqtS5SBZ.js";import"./Close-BD4alOGP.js";import"./replaceable-le26HWVq.js";import"./use-locale-D75wvq4V.js";const I=B("divider",`
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
 `)]),s("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),a("title-position-left",[s("line",[a("left",{width:"28px"})])]),a("title-position-right",[s("line",[a("right",{width:"28px"})])]),a("dashed",[s("line",`
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
 `),s("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),_("dashed",[s("line",{backgroundColor:"var(--n-color)"})]),a("dashed",[s("line",{borderColor:"var(--n-color)"})]),a("vertical",{backgroundColor:"var(--n-color)"})]),F=Object.assign(Object.assign({},C.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),U=z({name:"Divider",props:F,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:i}=D(n),d=C("Divider","-divider",I,P,n,e),c=S(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:h,textColor:p,fontWeight:v}}=d.value;return{"--n-bezier":t,"--n-color":h,"--n-text-color":p,"--n-font-weight":v}}),l=i?R("divider",void 0,c,n):void 0;return{mergedClsPrefix:e,cssVars:i?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var n;const{$slots:e,titlePlacement:i,vertical:d,dashed:c,cssVars:l,mergedClsPrefix:t}=this;return(n=this.onRender)===null||n===void 0||n.call(this),f("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:d,[`${t}-divider--no-title`]:!e.default,[`${t}-divider--dashed`]:c,[`${t}-divider--title-position-${i}`]:e.default&&i}],style:l},d?null:f("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!d&&e.default?f(T,null,f("div",{class:`${t}-divider__title`},this.$slots),f("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),q={props:["title","abstract","picture"],components:{NButton:V,NSpace:H,NLayout:E,NLayoutContent:A,NLayoutSider:O,NH2:L,NDivider:U,NImage:W,NTabs:M,NTabPane:j},data(){return{isMobile:window.innerWidth<600}},mounted(){window.onresize=()=>{this.windowWidth=window.innerWidth}}};function G(n,e,i,d,c,l){const t=m("n-image"),h=m("n-layout-sider"),p=m("n-divider"),v=m("n-layout-content"),x=m("n-layout"),k=m("n-space");return w(),b(k,{vertical:"",size:"large"},{default:o(()=>[c.isMobile?(w(),b(x,{key:1},{default:o(()=>[r(h,{"default-expanded":"","collapse-mode":"width","collapsed-width":240,width:300,"content-style":"padding: 24px;"},{default:o(()=>[r(t,{"object-fit":"scale-down",width:"240",src:i.picture},null,8,["src"])]),_:1}),r(v,{"content-style":"padding: 24px;"},{default:o(()=>[y("h5",null,g(i.title),1),r(p,{"title-placement":"left"},{default:o(()=>e[2]||(e[2]=[u(" Abstract ")])),_:1}),u(" "+g(i.abstract)+" ",1),r(p,{"title-placement":"right"},{default:o(()=>e[3]||(e[3]=[u(" Skills To Develop ")])),_:1}),N(n.$slots,"default")]),_:3})]),_:3})):(w(),b(x,{key:0,"has-sider":""},{default:o(()=>[r(h,{"default-collapsed":"","collapse-mode":"width","collapsed-width":120,width:240,"show-trigger":"round","content-style":"padding: 24px;"},{default:o(()=>[r(t,{"object-fit":"scale-down",width:"240",src:i.picture},null,8,["src"])]),_:1}),r(v,{"content-style":"padding: 24px;"},{default:o(()=>[y("h5",null,g(i.title),1),r(p,{"title-placement":"left"},{default:o(()=>e[0]||(e[0]=[u(" Abstract ")])),_:1}),u(" "+g(i.abstract)+" ",1),r(p,{"title-placement":"right"},{default:o(()=>e[1]||(e[1]=[u(" Skills To Develop ")])),_:1}),N(n.$slots,"default")]),_:3})]),_:3}))]),_:3})}const se=$(q,[["render",G]]);export{se as default};
