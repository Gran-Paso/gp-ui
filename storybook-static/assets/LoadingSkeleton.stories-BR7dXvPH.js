import{j as e}from"./jsx-runtime-D_zvdyIk.js";const a=({className:s=""})=>e.jsx("div",{className:`bg-gray-200 animate-pulse rounded-lg ${s}`}),y=()=>e.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-6 space-y-4",children:[e.jsx(a,{className:"h-5 w-1/3"}),e.jsx(a,{className:"h-4 w-full"}),e.jsx(a,{className:"h-4 w-2/3"})]}),S=({rows:s})=>e.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-50 border-b border-gray-200 px-4 py-3 flex gap-4",children:[e.jsx(a,{className:"h-3 w-24"}),e.jsx(a,{className:"h-3 w-32"}),e.jsx(a,{className:"h-3 w-20"}),e.jsx(a,{className:"h-3 w-28"})]}),Array.from({length:s}).map((t,r)=>e.jsxs("div",{className:"border-b border-gray-100 px-4 py-3 flex gap-4",children:[e.jsx(a,{className:"h-4 w-24"}),e.jsx(a,{className:"h-4 w-32"}),e.jsx(a,{className:"h-4 w-20"}),e.jsx(a,{className:"h-4 w-28"})]},r))]}),T=({rows:s})=>e.jsx("div",{className:"space-y-3",children:Array.from({length:s}).map((t,r)=>e.jsx(a,{className:`h-4 ${r===s-1?"w-2/3":"w-full"}`},r))}),n=({variant:s="card",rows:t=5,className:r=""})=>e.jsxs("div",{className:r,children:[s==="card"&&e.jsx("div",{className:"grid gap-4",children:Array.from({length:Math.min(t,6)}).map((k,w)=>e.jsx(y,{},w))}),s==="table"&&e.jsx(S,{rows:t}),s==="text"&&e.jsx(T,{rows:t})]});n.__docgenInfo={description:"",methods:[],displayName:"LoadingSkeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'card' | 'table' | 'text'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'table'"},{name:"literal",value:"'text'"}]},description:"",defaultValue:{value:"'card'",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const V={title:"Components/LoadingSkeleton",component:n,argTypes:{variant:{control:"select",options:["card","table","text"]},rows:{control:{type:"range",min:1,max:10}}}},l={args:{variant:"card",rows:3}},o={args:{variant:"table",rows:5}},d={args:{variant:"text",rows:4}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-500 mb-2",children:"Card"}),e.jsx(n,{variant:"card",rows:2})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-500 mb-2",children:"Table"}),e.jsx(n,{variant:"table",rows:4})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-500 mb-2",children:"Text"}),e.jsx(n,{variant:"text",rows:3})]})]})};var i,m,x;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    rows: 3
  }
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,g,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'table',
    rows: 5
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,u,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    rows: 4
  }
}`,...(v=(u=d.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var j,f,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Card</h3>
        <LoadingSkeleton variant="card" rows={2} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Table</h3>
        <LoadingSkeleton variant="table" rows={4} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Text</h3>
        <LoadingSkeleton variant="text" rows={3} />
      </div>
    </div>
}`,...(N=(f=c.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const _=["Card","TableVariant","Text","AllVariants"];export{c as AllVariants,l as Card,o as TableVariant,d as Text,_ as __namedExportsOrder,V as default};
