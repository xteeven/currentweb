import{_ as J}from"./plugin-vue_export-helper-DlAUqK2U.js";import{l as Q,d as U,c as o,i as g,b as u,a as s,h as X,u as j,e as I,o as $,_ as w,t as Y,g as f,f as Z}from"./light-BrY5Xv2M.js";import{f as M,h as a,p as ee,i as te,g as _,C as b,o as h,w as c,c as T,F as B,B as k,D as m,e as y,a as C,b as N,t as S}from"./app-B01iSlf7.js";import{b as ie}from"./replaceable-CrufXe-m.js";import{N as ne}from"./Space-D2-OFuaw.js";import{N as oe}from"./Card-CO03Mz3f.js";import{N as P}from"./Tag-adTG7B_E.js";import"./Close-BN4QjjqZ.js";import"./Icon-C3NvCphL.js";import"./color-to-class-B0iQgAn2.js";let F=!1;function re(){if(Q&&window.CSS&&!F&&(F=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const le={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};function se(t){const{textColor3:r,infoColor:n,errorColor:i,successColor:e,warningColor:l,textColor1:d,textColor2:p,railColor:v,fontWeightStrong:z,fontSize:x}=t;return Object.assign(Object.assign({},le),{contentFontSize:x,titleFontWeight:z,circleBorder:`2px solid ${r}`,circleBorderInfo:`2px solid ${n}`,circleBorderError:`2px solid ${i}`,circleBorderSuccess:`2px solid ${e}`,circleBorderWarning:`2px solid ${l}`,iconColor:r,iconColorInfo:n,iconColorError:i,iconColorSuccess:e,iconColorWarning:l,titleTextColor:d,contentTextColor:p,metaTextColor:r,lineColor:v})}const ae={common:U,self:se},R=1.25,ce=o("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${R};
`,[g("horizontal",`
 flex-direction: row;
 `,[u(">",[o("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[g("dashed-line-type",[u(">",[o("timeline-item-timeline",[s("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),u(">",[o("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[u(">",[s("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),o("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[s("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),g("right-placement",[o("timeline-item",[o("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),o("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),g("left-placement",[o("timeline-item",[o("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),o("timeline-item-timeline",`
 left: 0;
 `)])]),o("timeline-item",`
 position: relative;
 `,[u("&:last-child",[o("timeline-item-timeline",[s("line",`
 display: none;
 `)]),o("timeline-item-content",[s("meta",`
 margin-bottom: 0;
 `)])]),o("timeline-item-content",[s("title",`
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
 `)]),g("dashed-line-type",[o("timeline-item-timeline",[s("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),o("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${R} / 2 - var(--n-icon-size) / 2);
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
 `)])])]),me=Object.assign(Object.assign({},I.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),V=X("n-timeline"),de=M({name:"Timeline",props:me,setup(t,{slots:r}){const{mergedClsPrefixRef:n}=j(t),i=I("Timeline","-timeline",ce,ae,t,n);return ee(V,{props:t,mergedThemeRef:i,mergedClsPrefixRef:n}),()=>{const{value:e}=n;return a("div",{class:[`${e}-timeline`,t.horizontal&&`${e}-timeline--horizontal`,`${e}-timeline--${t.size}-size`,!t.horizontal&&`${e}-timeline--${t.itemPlacement}-placement`]},r)}}}),pe={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ge=M({name:"TimelineItem",props:pe,slots:Object,setup(t){const r=te(V);r||Y("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),re();const{inlineThemeDisabled:n}=j(),i=_(()=>{const{props:{size:l,iconSize:d},mergedThemeRef:p}=r,{type:v}=t,{self:{titleTextColor:z,contentTextColor:x,metaTextColor:L,lineColor:E,titleFontWeight:O,contentFontSize:W,[f("iconSize",l)]:D,[f("titleMargin",l)]:H,[f("titleFontSize",l)]:K,[f("circleBorder",v)]:q,[f("iconColor",v)]:A},common:{cubicBezierEaseInOut:G}}=p.value;return{"--n-bezier":G,"--n-circle-border":q,"--n-icon-color":A,"--n-content-font-size":W,"--n-content-text-color":x,"--n-line-color":E,"--n-meta-text-color":L,"--n-title-font-size":K,"--n-title-font-weight":O,"--n-title-margin":H,"--n-title-text-color":z,"--n-icon-size":ie(d)||D}}),e=n?Z("timeline-item",_(()=>{const{props:{size:l,iconSize:d}}=r,{type:p}=t;return`${l[0]}${d||"a"}${p[0]}`}),i,r.props):void 0;return{mergedClsPrefix:r.mergedClsPrefixRef,cssVars:n?void 0:i,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){const{mergedClsPrefix:t,color:r,onRender:n,$slots:i}=this;return n==null||n(),a("div",{class:[`${t}-timeline-item`,this.themeClass,`${t}-timeline-item--${this.type}-type`,`${t}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},a("div",{class:`${t}-timeline-item-timeline`},a("div",{class:`${t}-timeline-item-timeline__line`}),$(i.icon,e=>e?a("div",{class:`${t}-timeline-item-timeline__icon`,style:{color:r}},e):a("div",{class:`${t}-timeline-item-timeline__circle`,style:{borderColor:r}}))),a("div",{class:`${t}-timeline-item-content`},$(i.header,e=>e||this.title?a("div",{class:`${t}-timeline-item-content__title`},e||this.title):null),a("div",{class:`${t}-timeline-item-content__content`},w(i.default,()=>[this.content])),a("div",{class:`${t}-timeline-item-content__meta`},w(i.footer,()=>[this.time]))))}}),ue={class:"row"},fe={class:"badges"},he={class:"title"},ve={__name:"TeachingList",props:{entries:{type:Array,required:!0}},setup(t){const r=_(()=>{const n=new Map;return[...t.entries].sort((i,e)=>e.year.localeCompare(i.year)).forEach(i=>{n.has(i.year)||n.set(i.year,[]),n.get(i.year).push(i)}),[...n].map(([i,e])=>({year:i,items:e}))});return(n,i)=>(h(),b(m(de),{size:"large"},{default:c(()=>[(h(!0),T(B,null,k(r.value,e=>(h(),b(m(ge),{key:e.year,title:e.year},{default:c(()=>[y(m(ne),{vertical:"",size:4},{default:c(()=>[(h(!0),T(B,null,k(e.items,l=>(h(),b(m(oe),{key:l.code+l.title,class:"course-card",size:"small",bordered:!1,hoverable:""},{default:c(()=>[C("div",ue,[C("div",fe,[y(m(P),{type:"success",size:"small",round:""},{default:c(()=>[N(S(l.code),1)]),_:2},1024),y(m(P),{type:"warning",size:"small",round:"",style:{"margin-left":"6px"}},{default:c(()=>[N(S(l.term),1)]),_:2},1024)]),C("div",he,S(l.title),1)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1}))}},Be=J(ve,[["__scopeId","data-v-7bcf09f2"]]);export{Be as default};
