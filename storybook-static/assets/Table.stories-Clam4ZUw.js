import{j as r}from"./jsx-runtime-D_zvdyIk.js";function k({columns:e,data:d,keyExtractor:T,onRowClick:s,emptyMessage:w="Sin datos"}){return r.jsx("div",{className:"bg-white rounded-xl border border-gray-200 overflow-hidden",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"w-full",children:[r.jsx("thead",{children:r.jsx("tr",{className:"bg-gray-50 border-b border-gray-200",children:e.map(a=>r.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider ${a.className??""}`,children:a.header},a.key))})}),r.jsx("tbody",{children:d.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:e.length,className:"px-4 py-12 text-center text-sm text-gray-400",children:w})}):d.map((a,m)=>r.jsx("tr",{onClick:()=>s==null?void 0:s(a),className:`border-b border-gray-100 transition-colors ${s?"cursor-pointer hover:bg-gray-50":"hover:bg-gray-50/50"}`,children:e.map(t=>r.jsx("td",{className:`px-4 py-3 text-sm text-gray-700 ${t.className??""}`,children:t.render?t.render(a,m):a[t.key]},t.key))},T(a,m)))})]})})})}k.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},keyExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => string | number",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => void",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"void"}}},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Sin datos'",computed:!1}}}};const v=[{id:1,name:"Corte de pelo",category:"Peluquería",price:12e3,status:"Activo"},{id:2,name:"Tintura completa",category:"Peluquería",price:35e3,status:"Activo"},{id:3,name:"Manicure gel",category:"Uñas",price:18e3,status:"Activo"},{id:4,name:"Pedicure spa",category:"Uñas",price:22e3,status:"Inactivo"},{id:5,name:"Limpieza facial",category:"Estética",price:28e3,status:"Activo"}],c=[{key:"name",header:"Servicio"},{key:"category",header:"Categoría"},{key:"price",header:"Precio",render:e=>`$${e.price.toLocaleString("es-CL")}`},{key:"status",header:"Estado",render:e=>r.jsx("span",{className:`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${e.status==="Activo"?"bg-green-100 text-green-700":"bg-gray-100 text-gray-500"}`,children:e.status})}],N={title:"Components/Table",component:k},n={args:{columns:c,data:v,keyExtractor:e=>e.id}},o={args:{columns:c,data:v,keyExtractor:e=>e.id,onRowClick:e=>alert(`Clicked: ${e.name}`)}},i={args:{columns:c,data:[],keyExtractor:e=>e.id,emptyMessage:"No hay servicios registrados"}};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    keyExtractor: row => row.id
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,y,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    keyExtractor: row => row.id,
    onRowClick: row => alert(\`Clicked: \${row.name}\`)
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,h,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    keyExtractor: row => row.id,
    emptyMessage: 'No hay servicios registrados'
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const E=["Default","Clickable","Empty"];export{o as Clickable,n as Default,i as Empty,E as __namedExportsOrder,N as default};
