(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3373:function(e,t,n){Promise.resolve().then(n.bind(n,632))},632:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var a=n(9268),s=n(4214),l=n(5422),r=n.n(l),c=n(2040);let i=c.env.URL||"http://ec2-3-82-141-249.compute-1.amazonaws.com";console.log(i);let o=s.Z.create({httpsAgent:new(r()).Agent({rejectUnauthorized:!1})});async function d(e){if(!e)return null;let t=e.replace(".pdf",".json"),n=await o.get("".concat(i,"/extraction"),{params:{filename:t}});return console.log(n.data),n.data}async function x(e){console.log(e);let t=new FormData;t.append("file",e,e.name);let n=await o.post("".concat(i,"/parse"),t);return console.log(n.data),n.data.fullText}var h=n(2561);let m=(0,h.Ue)(e=>({reactions:null,extracting:!1,setReactions:t=>e({reactions:t}),setExtracting:t=>e({extracting:t})})),u=(0,h.Ue)(e=>({file:null,filename:null,parsing:!1,text:null,setFile:t=>e({file:t}),setFilename:t=>e({filename:t}),setText:t=>e({text:t}),setParsing:t=>e({parsing:t})}));function j(){let e=u(e=>e.text),t=u(e=>e.filename),n=m(e=>e.extracting),s=m(e=>e.reactions),l=m(e=>e.setReactions),r=m(e=>e.setExtracting);if(!e||s)return null;let c=async()=>{r(!0);let e=await d(t);r(!1),l(e)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"h3",children:"Step 2: Review Text Content Above and Start Extraction"}),!n&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"justify-content-center d-flex",children:(0,a.jsx)("button",{onClick:c,className:"btn btn-outline-primary",children:"Extract Chemical Reactions!"})})}),n&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"my-3",children:["Extracting chemical reactions from text... (This takes about a minute)",(0,a.jsx)("br",{}),"After extraction is completed, tables containing chemical reaction information will be displayed below."]})})]})}var p=n(6006);function f(){let e=u(e=>e.filename),t=u(e=>e.parsing),n=u(e=>e.setText),s=u(e=>e.setFile),l=u(e=>e.setFilename),r=u(e=>e.setParsing),c=m(e=>e.setReactions),[i,o]=(0,p.useState)(null);(0,p.useEffect)(()=>{o(document.getElementById("input-elem"))},[]);let d=async e=>{let t=e.target.files[0];c(null),n(null),s(t),l(t.name),r(!0);let a=await x(t);r(!1),n(a)},h=()=>{null==i||i.click()};return(0,a.jsxs)("div",{className:"my-3",children:[(0,a.jsx)("h1",{className:"h3",children:"Step 1: Upload Chemistry Paper"}),(0,a.jsx)("label",{className:"me-3",children:"Choose Chemistry Paper PDF here:"}),(0,a.jsx)("input",{id:"input-elem",className:"d-none",type:"file",onChange:d}),(0,a.jsx)("button",{onClick:h,className:"btn btn-outline-primary me-3",children:e||"Upload"}),t&&(0,a.jsx)("div",{className:"my-3 d-flex justify-content-center",children:(0,a.jsx)("span",{children:"Uploading file to server and extracting text contents..."})})]})}var g=n(9524),y=n(6394),b=n.n(y);function N(e){let{text:t,index:n}=e,[s,l]=(0,p.useState)(!1);return t?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("tr",{children:[(0,a.jsxs)("th",{children:[(0,a.jsx)(b(),{width:20,height:20,src:"/text.png",alt:"",className:"me-2"}),(0,a.jsx)("span",{children:"Source text"})]}),(0,a.jsx)("td",{children:s?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{onClick:()=>l(!s),children:t}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"btn btn-outline-primary",onClick:()=>{l(!s)},children:"hide text"})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{onClick:()=>l(!s),children:t.split(" ").slice(0,15).join(" ")+"...  "}),(0,a.jsx)("button",{className:"btn btn-outline-primary",onClick:()=>{l(!s)},children:"show more"})]})})]},"reaction-entry-".concat(n,"-text}"))}):null}function v(e){let{reaction:t,index:n}=e;return t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:"d-flex justify-content-center",children:[(0,a.jsx)(b(),{src:n%2?"/reaction.png":"/reaction2.png",alt:"",height:30,width:30,className:"me-2"}),(0,a.jsxs)("h2",{className:"h4",children:["Reaction #",n]})]}),(0,a.jsx)(g.Z,{bordered:!0,striped:!0,hover:!0,className:"mb-5",children:(0,a.jsx)("tbody",{children:["product","reactants","reaction type","catalyst","solvent","temperature","time","yield","text"].map(e=>{if(t.hasOwnProperty(e))return"text"==e?(0,a.jsx)(N,{text:t[e],index:n},"reaction-entry-".concat(n,"-text")):(0,a.jsxs)("tr",{children:[(0,a.jsxs)("th",{children:[(0,a.jsx)(b(),{src:"/".concat(e.replace(" ","_"),".png"),alt:"",width:20,height:20,className:"me-2"}),(0,a.jsx)("span",{children:e.charAt(0).toUpperCase()+e.slice(1)})]}),(0,a.jsx)("td",{children:t[e]})]},"reaction-entry-".concat(n,"-").concat(e))})})})]}):null}var w=n(7755),C=n(1630);function F(){let e=m(e=>e.reactions);return e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"h3 mb-3",children:"Results from Extraction:"}),(0,a.jsx)(w.Z,{children:e.map((e,t)=>(t+=1,(0,a.jsx)(C.Z,{sm:12,md:6,lg:4,children:(0,a.jsx)(v,{reaction:e,index:t})},"reaction-table-".concat(t,"-table"))))})]}):null}var k=n(5427);function E(){let e=u(e=>e.text);return e?(0,a.jsx)(k.Z,{as:"textarea",rows:10,placeholder:"Enter text here",value:e,style:{height:"35vh"},className:"my-3",readOnly:!0}):null}var R=n(5630);function U(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(R.Z,{children:[(0,a.jsx)(f,{}),(0,a.jsx)(E,{}),(0,a.jsx)(j,{}),(0,a.jsx)(F,{})]})})}}},function(e){e.O(0,[317,667,139,744],function(){return e(e.s=3373)}),_N_E=e.O()}]);