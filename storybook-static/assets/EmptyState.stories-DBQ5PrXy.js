import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe-DVu7fzyj.js";import{B as S}from"./Button-BJU-aszJ.js";import{P as E}from"./package-9LfDbH-c.js";import{c as j}from"./createLucideIcon-aPqy-t6r.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]],_=j("FileX",z);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],w=j("Search",T),k=({icon:t,title:b,description:i,action:c})=>{let r=null;if(t)if(q.isValidElement(t))r=t;else{const v=t;r=e.jsx(v,{size:44,className:"text-gray-300"})}return e.jsxs("div",{className:"flex flex-col items-center justify-center py-16 px-4 text-center",children:[r&&e.jsx("div",{className:"mb-4 text-gray-300",children:r}),e.jsx("p",{className:"text-gray-600 font-semibold text-[15px] font-montserrat",children:b}),i&&e.jsx("p",{className:"text-gray-400 text-sm mt-1.5 max-w-xs leading-relaxed",children:i}),c&&e.jsx("div",{className:"mt-5",children:c})]})};k.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ElementType",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"ReactElementType",raw:"React.ElementType"}]},description:"Lucide icon element at ~40px, or component type"},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Rendered below the description"}}};const O={title:"Components/EmptyState",component:k},a={args:{icon:E,title:"Sin insumos",description:"Aún no has registrado insumos para este negocio."}},s={args:{icon:E,title:"Sin insumos",description:"Comienza agregando tu primer insumo.",action:e.jsx(S,{size:"sm",children:"Agregar insumo"})}},o={args:{icon:w,title:"Sin resultados",description:"No se encontraron registros con los filtros aplicados."}},n={args:{icon:_,title:"Error al cargar",description:"Ocurrió un problema al obtener los datos. Intenta de nuevo.",action:e.jsx(S,{variant:"secondary",size:"sm",children:"Reintentar"})}};var m,d,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: Package,
    title: 'Sin insumos',
    description: 'Aún no has registrado insumos para este negocio.'
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: Package,
    title: 'Sin insumos',
    description: 'Comienza agregando tu primer insumo.',
    action: <Button size="sm">Agregar insumo</Button>
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,y,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: Search,
    title: 'Sin resultados',
    description: 'No se encontraron registros con los filtros aplicados.'
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,N,R;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: FileX,
    title: 'Error al cargar',
    description: 'Ocurrió un problema al obtener los datos. Intenta de nuevo.',
    action: <Button variant="secondary" size="sm">Reintentar</Button>
  }
}`,...(R=(N=n.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const X=["Default","WithAction","SearchNoResults","Error"];export{a as Default,n as Error,o as SearchNoResults,s as WithAction,X as __namedExportsOrder,O as default};
