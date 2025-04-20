import{_ as J}from"./plugin-vue_export-helper-DlAUqK2U.js";import{f as n,B as d,i as p,g as s,s as Q,e as R,u as V,j,aV as U,h as a,v as X,p as Y,q as Z,k as y,m as u,O as v,o as f,w as c,c as S,M as C,N as w,P as m,n as z,a as x,b as $,t as b}from"./app-CXKPdMHI.js";import{i as ee,b as T,f as k,u as te}from"./use-style-BovTl7ck.js";import{b as ie}from"./replaceable-le26HWVq.js";import{N as ne}from"./Space-BSLXP-Tt.js";import{N as re}from"./Card-C7FXgjC9.js";import{N}from"./Tag-BO6OR8Vn.js";import"./Close-BD4alOGP.js";import"./Icon-DqtS5SBZ.js";import"./color-to-class-B0iQgAn2.js";let P=!1;function oe(){if(ee&&window.CSS&&!P&&(P=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const B=1.25,le=n("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${B};
`,[d("horizontal",`
 flex-direction: row;
 `,[p(">",[n("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[d("dashed-line-type",[p(">",[n("timeline-item-timeline",[s("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),p(">",[n("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[p(">",[s("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),n("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[s("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),d("right-placement",[n("timeline-item",[n("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),n("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),d("left-placement",[n("timeline-item",[n("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),n("timeline-item-timeline",`
 left: 0;
 `)])]),n("timeline-item",`
 position: relative;
 `,[p("&:last-child",[n("timeline-item-timeline",[s("line",`
 display: none;
 `)]),n("timeline-item-content",[s("meta",`
 margin-bottom: 0;
 `)])]),n("timeline-item-content",[s("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),s("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),s("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),d("dashed-line-type",[n("timeline-item-timeline",[s("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),n("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${B} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[s("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),s("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),s("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),se=Object.assign(Object.assign({},j.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),I=Q("n-timeline"),ae=R({name:"Timeline",props:se,setup(e,{slots:o}){const{mergedClsPrefixRef:r}=V(e),i=j("Timeline","-timeline",le,U,e,r);return X(I,{props:e,mergedThemeRef:i,mergedClsPrefixRef:r}),()=>{const{value:t}=r;return a("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},o)}}}),ce={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},me=R({name:"TimelineItem",props:ce,slots:Object,setup(e){const o=Y(I);o||Z("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),oe();const{inlineThemeDisabled:r}=V(),i=y(()=>{const{props:{size:l,iconSize:g},mergedThemeRef:h}=o,{type:_}=e,{self:{titleTextColor:E,contentTextColor:F,metaTextColor:L,lineColor:M,titleFontWeight:O,contentFontSize:H,[u("iconSize",l)]:K,[u("titleMargin",l)]:q,[u("titleFontSize",l)]:D,[u("circleBorder",_)]:W,[u("iconColor",_)]:A},common:{cubicBezierEaseInOut:G}}=h.value;return{"--n-bezier":G,"--n-circle-border":W,"--n-icon-color":A,"--n-content-font-size":H,"--n-content-text-color":F,"--n-line-color":M,"--n-meta-text-color":L,"--n-title-font-size":D,"--n-title-font-weight":O,"--n-title-margin":q,"--n-title-text-color":E,"--n-icon-size":ie(g)||K}}),t=r?te("timeline-item",y(()=>{const{props:{size:l,iconSize:g}}=o,{type:h}=e;return`${l[0]}${g||"a"}${h[0]}`}),i,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:r?void 0:i,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:o,onRender:r,$slots:i}=this;return r==null||r(),a("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},a("div",{class:`${e}-timeline-item-timeline`},a("div",{class:`${e}-timeline-item-timeline__line`}),T(i.icon,t=>t?a("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:o}},t):a("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:o}}))),a("div",{class:`${e}-timeline-item-content`},T(i.header,t=>t||this.title?a("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),a("div",{class:`${e}-timeline-item-content__content`},k(i.default,()=>[this.content])),a("div",{class:`${e}-timeline-item-content__meta`},k(i.footer,()=>[this.time]))))}}),de={class:"row"},pe={class:"badges"},ue={class:"title"},fe={__name:"TeachingList",props:{entries:{type:Array,required:!0}},setup(e){const o=y(()=>{const r=new Map;return[...e.entries].sort((i,t)=>t.year.localeCompare(i.year)).forEach(i=>{r.has(i.year)||r.set(i.year,[]),r.get(i.year).push(i)}),[...r].map(([i,t])=>({year:i,items:t}))});return(r,i)=>(f(),v(m(ae),{size:"large"},{default:c(()=>[(f(!0),S(C,null,w(o.value,t=>(f(),v(m(me),{key:t.year,title:t.year},{default:c(()=>[z(m(ne),{vertical:"",size:4},{default:c(()=>[(f(!0),S(C,null,w(t.items,l=>(f(),v(m(re),{key:l.code+l.title,class:"course-card",size:"small",bordered:!1,hoverable:""},{default:c(()=>[x("div",de,[x("div",pe,[z(m(N),{type:"success",size:"small",round:""},{default:c(()=>[$(b(l.code),1)]),_:2},1024),z(m(N),{type:"warning",size:"small",round:"",style:{"margin-left":"6px"}},{default:c(()=>[$(b(l.term),1)]),_:2},1024)]),x("div",ue,b(l.title),1)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1}))}},we=J(fe,[["__scopeId","data-v-7bcf09f2"]]);export{we as default};
