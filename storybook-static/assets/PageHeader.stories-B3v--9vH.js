import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as b}from"./Button-BJU-aszJ.js";import{P as j}from"./plus-BXlzZz7V.js";import"./createLucideIcon-aPqy-t6r.js";import"./iframe-DVu7fzyj.js";import"./preload-helper-Dp1pzeXC.js";const f=({title:x,icon:h,subtitle:R,description:v,actions:y,children:N})=>{const a=R??v,i=y??N;return e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-800 font-montserrat flex items-center gap-2 leading-tight",children:[h,x]}),a&&e.jsx("p",{className:"text-sm text-gray-400 mt-1",children:a})]}),i&&e.jsx("div",{className:"flex items-center gap-2 flex-wrap shrink-0",children:i})]})};f.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Small icon rendered before the title"},subtitle:{required:!1,tsType:{name:"string"},description:"Short descriptive text below the title"},description:{required:!1,tsType:{name:"string"},description:"@deprecated Use subtitle"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action buttons / filters on the right"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Alias for actions — accept children as action slot"}}};const A={title:"Components/PageHeader",component:f},t={args:{title:"Servicios",description:"Gestiona el catálogo de servicios de tu negocio."}},s={args:{title:"Ventas",description:"Registro de ventas realizadas.",actions:e.jsxs(b,{variant:"primary",size:"sm",children:[e.jsx(j,{size:16})," Nueva Venta"]})}},r={args:{title:"Dashboard"}};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Servicios',
    description: 'Gestiona el catálogo de servicios de tu negocio.'
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Ventas',
    description: 'Registro de ventas realizadas.',
    actions: <Button variant="primary" size="sm">
        <Plus size={16} /> Nueva Venta
      </Button>
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const B=["Default","WithActions","TitleOnly"];export{t as Default,r as TitleOnly,s as WithActions,B as __namedExportsOrder,A as default};
