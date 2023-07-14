import{d as G,e as g,x as H,y as U,z as F,A as I,n as k,B as Z,r as S,a as C,f as B,h as T,g as V,s as _,u as E,c as q,t as J,C as R,D as W}from"./index-d196dfc1.js";const Q=["sx"],X=e=>{var t,o;const s={systemProps:{},otherProps:{}},a=(t=e==null||(o=e.theme)==null?void 0:o.unstable_sxConfig)!=null?t:H;return Object.keys(e).forEach(r=>{a[r]?s.systemProps[r]=e[r]:s.otherProps[r]=e[r]}),s};function Y(e){const{sx:t}=e,o=G(e,Q),{systemProps:s,otherProps:a}=X(o);let r;return Array.isArray(t)?r=[s,...t]:typeof t=="function"?r=(...n)=>{const i=t(...n);return U(i)?g({},s,i):s}:r=g({},s,t),g({},a,{sx:r})}const ee=F(),te=ee,oe=["className","component","disableGutters","fixed","maxWidth","classes"],se=I(),re=te("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${k(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),ae=e=>Z({props:e,name:"MuiContainer",defaultTheme:se}),ne=(e,t)=>{const o=u=>V(t,u),{classes:s,fixed:a,disableGutters:r,maxWidth:n}=e,i={root:["root",n&&`maxWidth${k(String(n))}`,a&&"fixed",r&&"disableGutters"]};return T(i,o,s)};function ie(e={}){const{createStyledComponent:t=re,useThemeProps:o=ae,componentName:s="MuiContainer"}=e,a=t(({theme:n,ownerState:i})=>g({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}),({theme:n,ownerState:i})=>i.fixed&&Object.keys(n.breakpoints.values).reduce((u,l)=>{const c=l,p=n.breakpoints.values[c];return p!==0&&(u[n.breakpoints.up(c)]={maxWidth:`${p}${n.breakpoints.unit}`}),u},{}),({theme:n,ownerState:i})=>g({},i.maxWidth==="xs"&&{[n.breakpoints.up("xs")]:{maxWidth:Math.max(n.breakpoints.values.xs,444)}},i.maxWidth&&i.maxWidth!=="xs"&&{[n.breakpoints.up(i.maxWidth)]:{maxWidth:`${n.breakpoints.values[i.maxWidth]}${n.breakpoints.unit}`}}));return S.forwardRef(function(i,u){const l=o(i),{className:c,component:p="div",disableGutters:d=!1,fixed:f=!1,maxWidth:h="lg"}=l,v=G(l,oe),$=g({},l,{component:p,disableGutters:d,fixed:f,maxWidth:h}),x=ne($,s);return C(a,g({as:p,ownerState:$,className:B(x.root,c),ref:u},v))})}const ce=ie({createStyledComponent:_("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${k(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>E({props:e,name:"MuiContainer"})}),Ce=ce,le=S.createContext(),z=le;function ue(e){return V("MuiGrid",e)}const pe=[0,1,2,3,4,5,6,7,8,9,10],ge=["column-reverse","column","row-reverse","row"],de=["nowrap","wrap-reverse","wrap"],P=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],j=q("MuiGrid",["root","container","item","zeroMinWidth",...pe.map(e=>`spacing-xs-${e}`),...ge.map(e=>`direction-xs-${e}`),...de.map(e=>`wrap-xs-${e}`),...P.map(e=>`grid-xs-${e}`),...P.map(e=>`grid-sm-${e}`),...P.map(e=>`grid-md-${e}`),...P.map(e=>`grid-lg-${e}`),...P.map(e=>`grid-xl-${e}`)]),fe=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function me({theme:e,ownerState:t}){let o;return e.breakpoints.keys.reduce((s,a)=>{let r={};if(t[a]&&(o=t[a]),!o)return s;if(o===!0)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const n=R({values:t.columns,breakpoints:e.breakpoints.values}),i=typeof n=="object"?n[a]:n;if(i==null)return s;const u=`${Math.round(o/i*1e8)/1e6}%`;let l={};if(t.container&&t.item&&t.columnSpacing!==0){const c=e.spacing(t.columnSpacing);if(c!=="0px"){const p=`calc(${u} + ${m(c)})`;l={flexBasis:p,maxWidth:p}}}r=g({flexBasis:u,flexGrow:0,maxWidth:u},l)}return e.breakpoints.values[a]===0?Object.assign(s,r):s[e.breakpoints.up(a)]=r,s},{})}function he({theme:e,ownerState:t}){const o=R({values:t.direction,breakpoints:e.breakpoints.values});return W({theme:e},o,s=>{const a={flexDirection:s};return s.indexOf("column")===0&&(a[`& > .${j.item}`]={maxWidth:"none"}),a})}function O({breakpoints:e,values:t}){let o="";Object.keys(t).forEach(a=>{o===""&&t[a]!==0&&(o=a)});const s=Object.keys(e).sort((a,r)=>e[a]-e[r]);return s.slice(0,s.indexOf(o))}function xe({theme:e,ownerState:t}){const{container:o,rowSpacing:s}=t;let a={};if(o&&s!==0){const r=R({values:s,breakpoints:e.breakpoints.values});let n;typeof r=="object"&&(n=O({breakpoints:e.breakpoints.values,values:r})),a=W({theme:e},r,(i,u)=>{var l;const c=e.spacing(i);return c!=="0px"?{marginTop:`-${m(c)}`,[`& > .${j.item}`]:{paddingTop:m(c)}}:(l=n)!=null&&l.includes(u)?{}:{marginTop:0,[`& > .${j.item}`]:{paddingTop:0}}})}return a}function Pe({theme:e,ownerState:t}){const{container:o,columnSpacing:s}=t;let a={};if(o&&s!==0){const r=R({values:s,breakpoints:e.breakpoints.values});let n;typeof r=="object"&&(n=O({breakpoints:e.breakpoints.values,values:r})),a=W({theme:e},r,(i,u)=>{var l;const c=e.spacing(i);return c!=="0px"?{width:`calc(100% + ${m(c)})`,marginLeft:`-${m(c)}`,[`& > .${j.item}`]:{paddingLeft:m(c)}}:(l=n)!=null&&l.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${j.item}`]:{paddingLeft:0}}})}return a}function je(e,t,o={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o[`spacing-xs-${String(e)}`]];const s=[];return t.forEach(a=>{const r=e[a];Number(r)>0&&s.push(o[`spacing-${a}-${String(r)}`])}),s}const $e=_("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:s,direction:a,item:r,spacing:n,wrap:i,zeroMinWidth:u,breakpoints:l}=o;let c=[];s&&(c=je(n,l,t));const p=[];return l.forEach(d=>{const f=o[d];f&&p.push(t[`grid-${d}-${String(f)}`])}),[t.root,s&&t.container,r&&t.item,u&&t.zeroMinWidth,...c,a!=="row"&&t[`direction-xs-${String(a)}`],i!=="wrap"&&t[`wrap-xs-${String(i)}`],...p]}})(({ownerState:e})=>g({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),he,xe,Pe,me);function be(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const o=[];return t.forEach(s=>{const a=e[s];if(Number(a)>0){const r=`spacing-${s}-${String(a)}`;o.push(r)}}),o}const Se=e=>{const{classes:t,container:o,direction:s,item:a,spacing:r,wrap:n,zeroMinWidth:i,breakpoints:u}=e;let l=[];o&&(l=be(r,u));const c=[];u.forEach(d=>{const f=e[d];f&&c.push(`grid-${d}-${String(f)}`)});const p={root:["root",o&&"container",a&&"item",i&&"zeroMinWidth",...l,s!=="row"&&`direction-xs-${String(s)}`,n!=="wrap"&&`wrap-xs-${String(n)}`,...c]};return T(p,ue,t)},Re=S.forwardRef(function(t,o){const s=E({props:t,name:"MuiGrid"}),{breakpoints:a}=J(),r=Y(s),{className:n,columns:i,columnSpacing:u,component:l="div",container:c=!1,direction:p="row",item:d=!1,rowSpacing:f,spacing:h=0,wrap:v="wrap",zeroMinWidth:$=!1}=r,x=G(r,fe),D=f||h,A=u||h,L=S.useContext(z),w=c?i||12:L,y={},N=g({},x);a.keys.forEach(b=>{x[b]!=null&&(y[b]=x[b],delete N[b])});const M=g({},r,{columns:w,container:c,direction:p,item:d,rowSpacing:D,columnSpacing:A,wrap:v,zeroMinWidth:$,spacing:h},y,{breakpoints:a.keys}),K=Se(M);return C(z.Provider,{value:w,children:C($e,g({ownerState:M,className:B(K.root,n),as:l,ref:o},N))})}),Ge=Re,ke={house:[{src:"/images/house.jpg",alt:"Photo of the House"},{src:"/images/house1.jpg",alt:"Photo of the House"},{src:"/images/house2.jpg",alt:"Photo of the House"},{src:"/images/house3.jpg",alt:"Photo of the House"},{src:"/images/house4.jpg",alt:"Photo of the House"},{src:"/images/houseRestaurant.jpg",alt:"Photo of the House's Restaurant"}],restaurant:[{src:"/images/restaurant1.jpg",alt:"Photo of the Restaurant"},{src:"/images/restaurant2.jpg",alt:"Photo of the Restaurant"},{src:"/images/restaurant3.jpg",alt:"Photo of the Restaurant"},{src:"/images/restaurant4.jpg",alt:"Photo of the Restaurant"},{src:"/images/restaurant5.jpg",alt:"Photo of the Restaurant"},{src:"/images/restaurant6.jpg",alt:"Photo of the Restaurant"}],garden:[{src:"/images/garden1.jpg",alt:"Photo of the Garden"},{src:"/images/garden2.jpg",alt:"Photo of the Garden"},{src:"/images/garden3.jpg",alt:"Photo of the Garden"},{src:"/images/garden4.jpg",alt:"Photo of the Garden"},{src:"/images/garden5.jpg",alt:"Photo of the Garden"},{src:"/images/garden6.jpg",alt:"Photo of the Garden"},{src:"/images/garden7.jpg",alt:"Photo of the Garden"},{src:"/images/garden8.jpg",alt:"Photo of the Garden"},{src:"/images/garden9.jpg",alt:"Photo of the Garden"},{src:"/images/garden10.jpg",alt:"Photo of the Garden"}],rooms:{standardRoom:{src:"/images/restaurant1.jpg",alt:"Photo of the Standard Room"},deluxe:{src:"/images/restaurant2.jpg",alt:"Photo of the Deluxe Room"},deluxeSuperior:{src:"/images/restaurant3.jpg",alt:"Photo of the Deluxe Superior"},duplex:{src:"/images/restaurant4.jpg",alt:"Photo of the Duplex Room"}},reseption:[{src:"/images/reseption1.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption2.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption3.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption4.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption5.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption6.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption7.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption8.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption9.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption10.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption11.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption12.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption13.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption14.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption15.jpg",alt:"Photo of the Reseption"},{src:"/images/reseption16.jpg",alt:"Photo of the Reseption"}],otherPictures:{spruceBranch:{src:"/images/9S5A9235-1-scaled.jpg",alt:"Spruce Branch"},languages:{am:{src:"/images/flag-of-armenia-logo.png",alt:"Armenian Flag"},ru:{src:"/images/flag-of-russia-logo.png",alt:"Russian Flag"},en:{src:"/images/flag-of-america-logo.png",alt:"American Flag"}}}};export{Ce as C,Ge as G,ke as d,Y as e};
