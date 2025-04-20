import{t as J,u as Q,N as U,d as X,l as Y,a as Z}from"./dark-rrWSLf6J.js";import{f as _,h as c,p as ee,i as te,k as y,C as z,o as p,w as d,e as u,D as s,c as C,F as w,B as $,a as x,b as T,t as b}from"./app-Dbap0sVN.js";import{i as ie,a as i,d as g,e as f,b as a,u as V,f as j,c as ne,R as k,V as N,t as re,_ as h,g as oe}from"./light-XzTtbOfL.js";import{b as le}from"./light-Bmy0d06o.js";import{N as ae}from"./Space-DvuGP7Nk.js";import{N as se}from"./Card-Bh0xJGwF.js";import{N as P}from"./Tag-DeipNOCV.js";import{_ as ce}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./light-CllX6m0q.js";import"./light-D0LKCwkf.js";import"./light-BQ-PNIMs.js";import"./Close-Dthulp1l.js";import"./color-to-class-B0iQgAn2.js";let B=!1;function me(){if(ie&&window.CSS&&!B&&(B=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const R=1.25,de=i("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${R};
`,[g("horizontal",`
 flex-direction: row;
 `,[f(">",[i("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[g("dashed-line-type",[f(">",[i("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),f(">",[i("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[f(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),i("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),g("right-placement",[i("timeline-item",[i("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),i("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),g("left-placement",[i("timeline-item",[i("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),i("timeline-item-timeline",`
 left: 0;
 `)])]),i("timeline-item",`
 position: relative;
 `,[f("&:last-child",[i("timeline-item-timeline",[a("line",`
 display: none;
 `)]),i("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),i("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),g("dashed-line-type",[i("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),i("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${R} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),pe=Object.assign(Object.assign({},j.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),I=ne("n-timeline"),ue=_({name:"Timeline",props:pe,setup(t,{slots:o}){const{mergedClsPrefixRef:l}=V(t),n=j("Timeline","-timeline",de,J,t,l);return ee(I,{props:t,mergedThemeRef:n,mergedClsPrefixRef:l}),()=>{const{value:e}=l;return c("div",{class:[`${e}-timeline`,t.horizontal&&`${e}-timeline--horizontal`,`${e}-timeline--${t.size}-size`,!t.horizontal&&`${e}-timeline--${t.itemPlacement}-placement`]},o)}}}),ge={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},fe=_({name:"TimelineItem",props:ge,slots:Object,setup(t){const o=te(I);o||re("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),me();const{inlineThemeDisabled:l}=V(),n=y(()=>{const{props:{size:r,iconSize:m},mergedThemeRef:v}=o,{type:S}=t,{self:{titleTextColor:F,contentTextColor:D,metaTextColor:E,lineColor:L,titleFontWeight:M,contentFontSize:O,[h("iconSize",r)]:H,[h("titleMargin",r)]:K,[h("titleFontSize",r)]:W,[h("circleBorder",S)]:G,[h("iconColor",S)]:q},common:{cubicBezierEaseInOut:A}}=v.value;return{"--n-bezier":A,"--n-circle-border":G,"--n-icon-color":q,"--n-content-font-size":O,"--n-content-text-color":D,"--n-line-color":L,"--n-meta-text-color":E,"--n-title-font-size":W,"--n-title-font-weight":M,"--n-title-margin":K,"--n-title-text-color":F,"--n-icon-size":le(m)||H}}),e=l?oe("timeline-item",y(()=>{const{props:{size:r,iconSize:m}}=o,{type:v}=t;return`${r[0]}${m||"a"}${v[0]}`}),n,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:l?void 0:n,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){const{mergedClsPrefix:t,color:o,onRender:l,$slots:n}=this;return l==null||l(),c("div",{class:[`${t}-timeline-item`,this.themeClass,`${t}-timeline-item--${this.type}-type`,`${t}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},c("div",{class:`${t}-timeline-item-timeline`},c("div",{class:`${t}-timeline-item-timeline__line`}),k(n.icon,e=>e?c("div",{class:`${t}-timeline-item-timeline__icon`,style:{color:o}},e):c("div",{class:`${t}-timeline-item-timeline__circle`,style:{borderColor:o}}))),c("div",{class:`${t}-timeline-item-content`},k(n.header,e=>e||this.title?c("div",{class:`${t}-timeline-item-content__title`},e||this.title):null),c("div",{class:`${t}-timeline-item-content__content`},N(n.default,()=>[this.content])),c("div",{class:`${t}-timeline-item-content__meta`},N(n.footer,()=>[this.time]))))}}),he={class:"row"},ve={class:"badges"},ze={class:"title"},xe=_({__name:"TeachingList",props:{entries:{}},setup(t){const o=y(()=>{const n=new Map;return[...t.entries].sort((e,r)=>r.year.localeCompare(e.year)).forEach(e=>{n.has(e.year)||n.set(e.year,[]),n.get(e.year).push(e)}),[...n].map(([e,r])=>({year:e,items:r}))}),l=Q();return(n,e)=>(p(),z(s(Z),{theme:s(l)?s(X):s(Y)},{default:d(()=>[u(s(U)),u(s(ue),{size:"large"},{default:d(()=>[(p(!0),C(w,null,$(o.value,r=>(p(),z(s(fe),{key:r.year,title:r.year},{default:d(()=>[u(s(ae),{vertical:"",size:4},{default:d(()=>[(p(!0),C(w,null,$(r.items,m=>(p(),z(s(se),{key:m.code+m.title,class:"course-card",size:"small",bordered:!1,hoverable:""},{default:d(()=>[x("div",he,[x("div",ve,[u(s(P),{type:"success",size:"small",round:""},{default:d(()=>[T(b(m.code),1)]),_:2},1024),u(s(P),{type:"warning",size:"small",round:"",style:{"margin-left":"6px"}},{default:d(()=>[T(b(m.term),1)]),_:2},1024)]),x("div",ze,b(m.title),1)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["theme"]))}}),Ve=ce(xe,[["__scopeId","data-v-7be01278"]]);export{Ve as default};
