import{j as e}from"./jsx-runtime-D_zvdyIk.js";const b={none:"",sm:"p-4",md:"p-5",lg:"p-6"},t=({padding:a="md",className:u="",children:v,...h})=>e.jsx("div",{className:`bg-white rounded-2xl border border-gray-100 shadow-sm ${b[a]} ${u}`,...h,children:v});t.__docgenInfo={description:"",methods:[],displayName:"Card",props:{padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const y={title:"Components/Card",component:t,argTypes:{padding:{control:"select",options:["none","sm","md","lg"]}}},s={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Título de tarjeta"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Contenido descriptivo de la tarjeta."})]})}},l={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:["none","sm","md","lg"].map(a=>e.jsx(t,{padding:a,children:e.jsxs("span",{className:"text-sm text-gray-600",children:['padding="',a,'"']})},a))})},r={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[{label:"Servicios hoy",value:"12"},{label:"Ventas del mes",value:"$2.450.000"},{label:"Clientes nuevos",value:"8"}].map(a=>e.jsxs(t,{children:[e.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-wide",children:a.label}),e.jsx("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:a.value})]},a.label))})};var d,n,o;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-semibold text-gray-900">Título de tarjeta</h3>
        <p className="text-sm text-gray-500 mt-1">Contenido descriptivo de la tarjeta.</p>
      </div>
  }
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,i,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {(['none', 'sm', 'md', 'lg'] as const).map(p => <Card key={p} padding={p}>
          <span className="text-sm text-gray-600">padding=&quot;{p}&quot;</span>
        </Card>)}
    </div>
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,g,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {[{
      label: 'Servicios hoy',
      value: '12'
    }, {
      label: 'Ventas del mes',
      value: '$2.450.000'
    }, {
      label: 'Clientes nuevos',
      value: '8'
    }].map(s => <Card key={s.label}>
          <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
        </Card>)}
    </div>
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const j=["Default","Paddings","DashboardExample"];export{r as DashboardExample,s as Default,l as Paddings,j as __namedExportsOrder,y as default};
