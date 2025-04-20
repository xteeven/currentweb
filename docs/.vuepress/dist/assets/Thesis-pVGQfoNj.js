import{b as B,u as S,N as P,d as R,l as L,a as V}from"./dark-rrWSLf6J.js";import{f as N,h as u,F as M,k as O,g as j,l as E,m as I,C as g,o as b,w as r,e as a,D as e,a as f,O as x,t as m,b as h}from"./app-Dbap0sVN.js";import{a as W,O as w,b as p,d as c,u as A,f as $,g as F}from"./light-XzTtbOfL.js";import{N as G}from"./Space-DvuGP7Nk.js";import{N as _,a as y,b as C}from"./LayoutSider-C1plC1_0.js";import{N as k}from"./Image-Dx5KhJ9F.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./light-CllX6m0q.js";import"./light-Bmy0d06o.js";import"./light-D0LKCwkf.js";import"./light-BQ-PNIMs.js";import"./use-is-mounted-B8UGHkJE.js";const U=W("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[w("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[w("no-title",`
 display: flex;
 align-items: center;
 `)]),p("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),c("title-position-left",[p("line",[c("left",{width:"28px"})])]),c("title-position-right",[p("line",[c("right",{width:"28px"})])]),c("dashed",[p("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),c("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),p("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),w("dashed",[p("line",{backgroundColor:"var(--n-color)"})]),c("dashed",[p("line",{borderColor:"var(--n-color)"})]),c("vertical",{backgroundColor:"var(--n-color)"})]),q=Object.assign(Object.assign({},$.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),v=N({name:"Divider",props:q,setup(o){const{mergedClsPrefixRef:l,inlineThemeDisabled:d}=A(o),n=$("Divider","-divider",U,B,o,l),i=O(()=>{const{common:{cubicBezierEaseInOut:s},self:{color:z,textColor:D,fontWeight:T}}=n.value;return{"--n-bezier":s,"--n-color":z,"--n-text-color":D,"--n-font-weight":T}}),t=d?F("divider",void 0,i,o):void 0;return{mergedClsPrefix:l,cssVars:d?void 0:i,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var o;const{$slots:l,titlePlacement:d,vertical:n,dashed:i,cssVars:t,mergedClsPrefix:s}=this;return(o=this.onRender)===null||o===void 0||o.call(this),u("div",{role:"separator",class:[`${s}-divider`,this.themeClass,{[`${s}-divider--vertical`]:n,[`${s}-divider--no-title`]:!l.default,[`${s}-divider--dashed`]:i,[`${s}-divider--title-position-${d}`]:l.default&&d}],style:t},n?null:u("div",{class:`${s}-divider__line ${s}-divider__line--left`}),!n&&l.default?u(M,null,u("div",{class:`${s}-divider__title`},this.$slots),u("div",{class:`${s}-divider__line ${s}-divider__line--right`})):null)}}),J={class:"abstract"},K={class:"abstract"},Q=N({__name:"Thesis",props:{title:{},abstract:{},picture:{}},setup(o){const l=S(),d=j(window.innerWidth<600);function n(){d.value=window.innerWidth<600}return E(()=>window.addEventListener("resize",n)),I(()=>window.removeEventListener("resize",n)),(i,t)=>(b(),g(e(V),{theme:e(l)?e(R):e(L)},{default:r(()=>[a(e(P)),a(e(G),{vertical:"",size:"large"},{default:r(()=>[d.value?(b(),g(e(_),{key:1},{default:r(()=>[a(e(y),{"default-expanded":"","collapse-mode":"width","collapsed-width":240,width:300,"content-style":"padding: 24px;"},{default:r(()=>[a(e(k),{class:"detail-image","object-fit":"scale-down",src:i.picture},null,8,["src"])]),_:1}),a(e(C),{"content-style":"padding: 24px;"},{default:r(()=>[f("h5",null,m(i.title),1),a(e(v),{"title-placement":"left"},{default:r(()=>t[2]||(t[2]=[h(" Abstract ")])),_:1}),f("div",K,m(i.abstract),1),a(e(v),{"title-placement":"right"},{default:r(()=>t[3]||(t[3]=[h(" Skills To Develop ")])),_:1}),x(i.$slots,"default",{},void 0,!0)]),_:3})]),_:3})):(b(),g(e(_),{key:0,"has-sider":""},{default:r(()=>[a(e(y),{"default-collapsed":"false","collapse-mode":"width","collapsed-width":240,width:340,"show-trigger":"round","content-style":"padding: 24px;"},{default:r(()=>[a(e(k),{class:"detail-image","object-fit":"scale-down",src:i.picture},null,8,["src"])]),_:1}),a(e(C),{"content-style":"padding: 24px;"},{default:r(()=>[f("h5",null,m(i.title),1),a(e(v),{"title-placement":"left"},{default:r(()=>t[0]||(t[0]=[h(" Abstract ")])),_:1}),f("div",J,m(i.abstract),1),a(e(v),{"title-placement":"right"},{default:r(()=>t[1]||(t[1]=[h(" Skills To Develop ")])),_:1}),x(i.$slots,"default",{},void 0,!0)]),_:3})]),_:3}))]),_:3})]),_:3},8,["theme"]))}}),ne=H(Q,[["__scopeId","data-v-d4779f5a"]]);export{ne as default};
