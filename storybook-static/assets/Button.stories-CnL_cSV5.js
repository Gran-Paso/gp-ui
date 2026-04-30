import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./Button-JYYZPekP.js";import{P as A}from"./plus-8v4dlSd7.js";import{c as _}from"./createLucideIcon-CjmIsPIC.js";import"./iframe-ZdZ-P0sQ.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],q=_("Download",T);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],I=_("Trash2",C),J={title:"Components/Button",component:e,argTypes:{variant:{control:"select",options:["primary","secondary","danger","ghost"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{children:"Guardar",variant:"primary"}},n={args:{children:"Cancelar",variant:"secondary"}},t={args:{children:"Eliminar",variant:"danger"}},o={args:{children:"Ver más",variant:"ghost"}},i={args:{children:"Guardando...",loading:!0}},c={render:()=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(e,{size:"sm",children:"Pequeño"}),r.jsx(e,{size:"md",children:"Mediano"}),r.jsx(e,{size:"lg",children:"Grande"})]})},d={render:()=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs(e,{variant:"primary",children:[r.jsx(A,{size:16})," Agregar"]}),r.jsxs(e,{variant:"danger",children:[r.jsx(I,{size:16})," Eliminar"]}),r.jsxs(e,{variant:"secondary",children:[r.jsx(q,{size:16})," Exportar"]})]})},l={render:()=>r.jsx("div",{className:"flex flex-col gap-4",children:["primary","secondary","danger","ghost"].map(a=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-xs text-gray-500 w-20",children:a}),r.jsx(e,{variant:a,size:"sm",children:"Small"}),r.jsx(e,{variant:a,size:"md",children:"Medium"}),r.jsx(e,{variant:a,size:"lg",children:"Large"}),r.jsx(e,{variant:a,disabled:!0,children:"Disabled"}),r.jsx(e,{variant:a,loading:!0,children:"Loading"})]},a))})};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Guardar',
    variant: 'primary'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Cancelar',
    variant: 'secondary'
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,y,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Eliminar',
    variant: 'danger'
  }
}`,...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var j,z,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Ver más',
    variant: 'ghost'
  }
}`,...(f=(z=o.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var S,N,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Guardando...',
    loading: true
  }
}`,...(k=(N=i.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var E,G,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button size="sm">Pequeño</Button>
      <Button size="md">Mediano</Button>
      <Button size="lg">Grande</Button>
    </div>
}`,...(M=(G=c.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var b,D,L;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button variant="primary"><Plus size={16} /> Agregar</Button>
      <Button variant="danger"><Trash2 size={16} /> Eliminar</Button>
      <Button variant="secondary"><Download size={16} /> Exportar</Button>
    </div>
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,w,V;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {(['primary', 'secondary', 'danger', 'ghost'] as const).map(v => <div key={v} className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-20">{v}</span>
          <Button variant={v} size="sm">Small</Button>
          <Button variant={v} size="md">Medium</Button>
          <Button variant={v} size="lg">Large</Button>
          <Button variant={v} disabled>Disabled</Button>
          <Button variant={v} loading>Loading</Button>
        </div>)}
    </div>
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const K=["Primary","Secondary","Danger","Ghost","Loading","Sizes","WithIcons","AllVariants"];export{l as AllVariants,t as Danger,o as Ghost,i as Loading,s as Primary,n as Secondary,c as Sizes,d as WithIcons,K as __namedExportsOrder,J as default};
