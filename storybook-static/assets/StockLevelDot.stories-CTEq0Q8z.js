import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as D}from"./package-9LfDbH-c.js";import"./createLucideIcon-aPqy-t6r.js";import"./iframe-DVu7fzyj.js";import"./preload-helper-Dp1pzeXC.js";function $(s,r,a){const t=(a==null?void 0:a.nearMultiplier)??1.25,n=r??0;if(n<=0)return s<=0?"critical":"ok";if(s<n)return"critical";const i=Math.ceil(n*t);return s<=i?"warn":"ok"}const A={critical:"bg-red-500 shadow-[0_0_0_1px_rgba(220,38,38,0.35)]",warn:"bg-amber-400 shadow-[0_0_0_1px_rgba(217,119,6,0.35)]",ok:"bg-emerald-500 shadow-[0_0_0_1px_rgba(5,150,105,0.35)]"};function V(s,r,a){if(a==null||a<=0)return s==="critical"?`Sin stock (${r} unidades)`:`En stock (${r} unidades)`;switch(s){case"critical":return`Stock bajo el mínimo: ${r} unidades, mínimo ${a}`;case"warn":return`Stock cercano al mínimo: ${r} unidades, mínimo ${a}`;default:return`Stock en nivel cómodo: ${r} unidades, mínimo ${a}`}}const l=({quantity:s,minimumStock:r,nearMultiplier:a,className:t="","aria-label":n})=>{const i=$(s,r,{nearMultiplier:a}),o=n??V(i,s,r);return e.jsx("span",{role:"img","aria-label":o,title:o,className:`inline-block h-2 w-2 shrink-0 rounded-full ${A[i]} ${t}`})};l.__docgenInfo={description:`Punto de estado de inventario (listados de productos, tarjetas de catálogo).
Colores: rojo bajo el mínimo, amarillo zona cercana al mínimo, verde por encima.`,methods:[],displayName:"StockLevelDot",props:{quantity:{required:!0,tsType:{name:"number"},description:""},minimumStock:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},nearMultiplier:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Override accessible name (Spanish defaults below)."}}};const E=({title:s,subtitle:r,trailing:a,media:t,children:n,footer:i,className:o="",density:P="default"})=>P==="compact"?e.jsxs("article",{className:`flex flex-row items-stretch gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md ${o}`,children:[t!=null&&e.jsx("div",{className:"relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-20 sm:w-20",children:t}),e.jsxs("div",{className:"flex min-h-0 min-w-0 flex-1 flex-col gap-2",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate text-sm font-semibold leading-tight text-gray-900",children:s}),r!=null&&r!==""&&e.jsx("p",{className:"mt-0.5 truncate text-xs text-gray-500",children:r})]}),a!=null&&a!==!1&&e.jsx("div",{className:"flex shrink-0 flex-wrap items-start justify-end gap-1",children:a})]}),n!=null&&e.jsx("div",{className:"flex flex-1 flex-col gap-2",children:n}),i!=null&&i!==!1&&e.jsx("div",{className:"mt-auto border-t border-gray-50 pt-2",children:i})]})]}):e.jsxs("article",{className:`flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md ${o}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3 border-b border-gray-50 px-4 pb-3 pt-4",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate font-semibold text-base leading-snug text-gray-900",children:s}),r!=null&&r!==""&&e.jsx("p",{className:"mt-0.5 truncate text-sm text-gray-500",children:r})]}),a!=null&&a!==!1&&e.jsx("div",{className:"flex shrink-0 flex-wrap items-center justify-end gap-1",children:a})]}),t!=null&&e.jsx("div",{className:"relative mx-4 mb-1 mt-3 aspect-[4/3] overflow-hidden rounded-xl bg-gray-100",children:t}),n!=null&&e.jsx("div",{className:"flex flex-1 flex-col gap-3 px-4 pb-4 pt-3",children:n}),i!=null&&i!==!1&&e.jsx("div",{className:"border-t border-gray-50 px-4 py-3",children:i})]});E.__docgenInfo={description:`Catalog-style card for grids (products, SKUs, variants): header band, media, body, footer.
Neutral chrome so hosts control accents via chips inside slots.`,methods:[],displayName:"ListingCard",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Small trailing badge cluster (e.g. status)"},media:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Media slot (image, placeholder icon, etc.)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body metrics / meta below media"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer actions row"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},density:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:"`default`: stacked layout with wide 4:3 media (catalog hero).\n`compact`: horizontal thumbnail + denser text — better for long lists; GIFs/videos still work via `<img>` in `media`.",defaultValue:{value:"'default'",computed:!1}}}};const U={title:"Components/StockLevelDot",component:l,parameters:{docs:{description:{component:"Indicador puntual para cantidad vs stock mínimo: rojo si la cantidad es menor que el mínimo; amarillo si está en el mínimo o en la banda cercana (por defecto hasta ceil(mínimo × 1,25)); verde por encima de esa banda. Sin mínimo definido (≤ 0): rojo solo si la cantidad es 0 o menor, verde si hay stock."}}},argTypes:{quantity:{control:{type:"number"}},minimumStock:{control:{type:"number"}},nearMultiplier:{control:{type:"number",step:.05,min:1}}}},d={name:"Rojo (bajo el mínimo)",args:{quantity:4,minimumStock:10}},c={name:"Amarillo (cerca del mínimo)",args:{quantity:11,minimumStock:10}},m={name:"Verde (en stock)",args:{quantity:40,minimumStock:10}},p={name:"Sin mínimo (solo hay / no hay)",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[e.jsx(l,{quantity:0}),e.jsx("span",{children:"Cantidad 0"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[e.jsx(l,{quantity:12}),e.jsx("span",{children:"Cantidad 12"})]})]})},u={name:"Tabla (mínimo = 10, multiplicador 1,25)",render:()=>{const a=[0,5,9,10,12,13,14,50].map(t=>({qty:t,tone:$(t,10,{nearMultiplier:1.25})}));return e.jsxs("div",{className:"max-w-md space-y-3 font-mono text-sm",children:[e.jsxs("p",{className:"text-xs text-gray-500",children:["Límite superior banda amarilla: ceil(",10," × ",1.25,") = ",Math.ceil(10*1.25)]}),e.jsxs("table",{className:"w-full border-collapse border border-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500",children:[e.jsx("th",{className:"border border-gray-200 px-2 py-1",children:"Cantidad"}),e.jsx("th",{className:"border border-gray-200 px-2 py-1",children:"Nivel"}),e.jsx("th",{className:"border border-gray-200 px-2 py-1",children:"Punto"})]})}),e.jsx("tbody",{children:a.map(({qty:t,tone:n})=>e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-200 px-2 py-1",children:t}),e.jsx("td",{className:"border border-gray-200 px-2 py-1",children:n}),e.jsx("td",{className:"border border-gray-200 px-2 py-1",children:e.jsx(l,{quantity:t,minimumStock:10,nearMultiplier:1.25})})]},t))})]})]})}},x={name:"Ejemplo en ListingCard",render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(E,{title:"Producto demo",subtitle:"Categoría",media:e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-gray-100",children:e.jsx(D,{className:"h-14 w-14 text-gray-400","aria-hidden":!0})}),children:e.jsx("div",{className:"rounded-xl border border-gray-100 bg-gray-50 px-3 py-2",children:e.jsxs("div",{className:"flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("span",{className:"inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500",children:[e.jsx(l,{quantity:11,minimumStock:10}),"Stock disponible"]}),e.jsx("span",{className:"text-base font-bold text-gray-900",children:"11 u."})]})})})})};var g,y,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Rojo (bajo el mínimo)',
  args: {
    quantity: 4,
    minimumStock: 10
  }
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,h,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Amarillo (cerca del mínimo)',
  args: {
    quantity: 11,
    minimumStock: 10
  }
}`,...(j=(h=c.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var N,v,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Verde (en stock)',
  args: {
    quantity: 40,
    minimumStock: 10
  }
}`,...(w=(v=m.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,S,q;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Sin mínimo (solo hay / no hay)',
  render: () => <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <StockLevelDot quantity={0} />
        <span>Cantidad 0</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <StockLevelDot quantity={12} />
        <span>Cantidad 12</span>
      </div>
    </div>
}`,...(q=(S=p.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var C,R,L;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Tabla (mínimo = 10, multiplicador 1,25)',
  render: () => {
    const min = 10;
    const mult = 1.25;
    const rows = [0, 5, 9, 10, 12, 13, 14, 50].map(qty => ({
      qty,
      tone: resolveStockLevel(qty, min, {
        nearMultiplier: mult
      })
    }));
    return <div className="max-w-md space-y-3 font-mono text-sm">
        <p className="text-xs text-gray-500">
          Límite superior banda amarilla: ceil({min} × {mult}) = {Math.ceil(min * mult)}
        </p>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="border border-gray-200 px-2 py-1">Cantidad</th>
              <th className="border border-gray-200 px-2 py-1">Nivel</th>
              <th className="border border-gray-200 px-2 py-1">Punto</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({
            qty,
            tone
          }) => <tr key={qty}>
                <td className="border border-gray-200 px-2 py-1">{qty}</td>
                <td className="border border-gray-200 px-2 py-1">{tone}</td>
                <td className="border border-gray-200 px-2 py-1">
                  <StockLevelDot quantity={qty} minimumStock={min} nearMultiplier={mult} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var M,T,_;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Ejemplo en ListingCard',
  render: () => <div className="max-w-sm">
      <ListingCard title="Producto demo" subtitle="Categoría" media={<div className="flex h-full w-full items-center justify-center bg-gray-100">
            <Package className="h-14 w-14 text-gray-400" aria-hidden />
          </div>}>
        <div className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-2">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <StockLevelDot quantity={11} minimumStock={10} />
              Stock disponible
            </span>
            <span className="text-base font-bold text-gray-900">11 u.</span>
          </div>
        </div>
      </ListingCard>
    </div>
}`,...(_=(T=x.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const G=["BajoElMinimo","CercanoAlMinimo","EnStock","SinMinimoConfigurado","TablaReferencia","EnListingCard"];export{d as BajoElMinimo,c as CercanoAlMinimo,x as EnListingCard,m as EnStock,p as SinMinimoConfigurado,u as TablaReferencia,G as __namedExportsOrder,U as default};
