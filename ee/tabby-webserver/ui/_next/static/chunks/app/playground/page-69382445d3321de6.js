(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2383],{24283:function(e,t,n){Promise.resolve().then(n.bind(n,40006))},40006:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eZ}});var s=n(57437),l=n(2265);let r=!0,a=(e,t)=>{let n=function(){let[e,t]=l.useState(()=>!r);return l.useEffect(function(){r=!1,t(!0)},[]),e}(),s=e(e=>null==e?void 0:e._hasHydrated),a=e(t),[i,o]=l.useState(n&&s?a:void 0);return l.useEffect(()=>{o(a)},[a]),i};var i=n(94660),o=n(74810),d=n(39311);let c=["_hasHydrated","setHasHydrated","activeChatId"],u={_hasHydrated:!1,chats:void 0,activeChatId:(0,d.x0)()},f=(0,i.Ue)()((0,o.tJ)(e=>({...u,setHasHydrated:t=>{e({_hasHydrated:t})}}),{name:"tabby-chat-storage",partialize:e=>Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!c.includes(t)})),onRehydrateStorage:()=>e=>{e&&e.setHasHydrated(!0)}})),m=(e,t)=>{if(Array.isArray(e)&&t)return e.find(e=>e.id===t)};var h=n(82504),x=n(83390),p=n(16630),v=n(71424),g=n(95865),j=n(58001),b=n(68571);let y=b.env.NEXT_PUBLIC_TABBY_SERVER_URL||"";f.getState;let N=f.setState,w=e=>{N(()=>({activeChatId:e}))},k=(e,t)=>{let n=null!=e?e:(0,d.x0)();N(e=>({activeChatId:n,chats:[{id:n,title:null!=t?t:"",messages:[],createdAt:new Date,userId:"",path:""},...e.chats||[]]}))},C=e=>{N(t=>{var n;return{activeChatId:(0,d.x0)(),chats:null===(n=t.chats)||void 0===n?void 0:n.filter(t=>t.id!==e)}})},z=()=>{N(()=>({activeChatId:(0,d.x0)(),chats:[]}))},A=(e,t)=>{N(n=>{var s;return{chats:null===(s=n.chats)||void 0===s?void 0:s.map(n=>n.id===e?{...n,messages:t}:n)}})},R=(e,t)=>{N(n=>{var s;return{chats:null===(s=n.chats)||void 0===s?void 0:s.map(n=>n.id===e?{...n,...t}:n)}})};var E=n(16775),S=n(16691),D=n.n(S),O={src:"/_next/static/media/tabby.2c9e4d33.png",height:460,width:460,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAwUlEQVR42mN4+ejS8wcXXjy48O7lzTfPrr18ePHFo0svHl5kAGKg3K51c7evnrV5Yd+EtopnYDmgxKVXD89vmtM6Jd1+ZqySGgPDhVO73z67xgBU/uzBhW3zO9dMa1relObHwLB03sT3L24AJS4/vXP66PYlh9dOLwswTNNnmNtX9/b5NYbnQDseXrh8ckdfQ74OA0OmNsOhbUvfPr8Otvzx5Sf3zu3buWb10pmH96x7DrEciCEOe/f8GhABrYWIAAD934qARQKRZgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},T=n(48975),H=n(82180),I=n(30513),_=n(4523),L=n(77723),Z=n(93023),B=n(84168);let P={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},V=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="ABCDEFGHJKLMNPQRSTUVWXY3456789",s="";for(let t=0;t<e;t++)s+=n.charAt(Math.floor(Math.random()*n.length));return t?s.toLowerCase():s},M=(0,l.memo)(e=>{let{language:t,value:n}=e,{isCopied:l,copyToClipboard:r}=(0,L.m)({timeout:2e3});return(0,s.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,s.jsx)("span",{className:"text-xs lowercase",children:t}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsxs)(Z.z,{variant:"ghost",className:"hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{let e=P[t]||".file",s="file-".concat(V(3,!0)).concat(e),l=window.prompt("Enter file name",s);if(!l)return;let r=new Blob([n],{type:"text/plain"}),a=URL.createObjectURL(r),i=document.createElement("a");i.download=l,i.href=a,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(a)},size:"icon",children:[(0,s.jsx)(B.Dj,{}),(0,s.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,s.jsxs)(Z.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{l||r(n)},children:[l?(0,s.jsx)(B.NO,{}):(0,s.jsx)(B.vU,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy code"})]})]})]}),(0,s.jsx)(I.Z,{language:t,style:_.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:n})]})});M.displayName="CodeBlock";var U=n(33555);function F(e){let{message:t,className:n,handleMessageAction:l,...r}=e;return(0,s.jsxs)("div",{className:(0,d.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-[5rem] md:-top-2 md:opacity-0",n),...r,children:["user"===t.role?(0,s.jsxs)(Z.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"edit"),children:[(0,s.jsx)(B.yl,{}),(0,s.jsx)("span",{className:"sr-only",children:"Edit message"})]}):(0,s.jsxs)(Z.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"regenerate"),children:[(0,s.jsx)(B.tr,{}),(0,s.jsx)("span",{className:"sr-only",children:"Regenerate message"})]}),(0,s.jsxs)(Z.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"delete"),children:[(0,s.jsx)(B.IT,{}),(0,s.jsx)("span",{className:"sr-only",children:"Delete message"})]}),(0,s.jsx)(U.q,{value:t.content})]})}var q=n(19349);let Y=(0,l.memo)(q.D,(e,t)=>e.children===t.children&&e.className===t.className);function K(e){let{message:t,handleMessageAction:n,...l}=e;return(0,s.jsxs)("div",{className:(0,d.cn)("group relative mb-4 flex items-start md:-ml-12"),...l,children:[(0,s.jsx)("div",{className:(0,d.cn)("flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow","user"===t.role?"bg-background":"bg-accent text-accent-foreground"),children:"user"===t.role?(0,s.jsx)(B.qO,{}):(0,s.jsx)(J,{})}),(0,s.jsxs)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:[(0,s.jsx)(Y,{className:"prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",remarkPlugins:[T.Z,H.Z],components:{p(e){let{children:t}=e;return(0,s.jsx)("p",{className:"mb-2 last:mb-0",children:t})},code(e){let{node:t,inline:n,className:l,children:r,...a}=e;if(r.length){if("▍"==r[0])return(0,s.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});r[0]=r[0].replace("`▍`","▍")}let i=/language-(\w+)/.exec(l||"");return n?(0,s.jsx)("code",{className:l,...a,children:r}):(0,s.jsx)(M,{language:i&&i[1]||"",value:String(r).replace(/\n$/,""),...a},Math.random())}},children:t.content}),(0,s.jsx)(F,{message:t,handleMessageAction:n})]})]})}function J(){return(0,s.jsx)(D(),{style:{borderRadius:4},src:O,alt:"tabby",width:"128",height:"128"})}function W(e){let{messages:t,handleMessageAction:n}=e;return t.length?(0,s.jsx)("div",{className:"relative mx-auto max-w-2xl px-4",children:t.map((e,l)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(K,{message:e,handleMessageAction:n}),l<t.length-1&&(0,s.jsx)(E.Z,{className:"my-4 md:my-8"})]},l))}):null}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=l.useState(!1);return l.useEffect(()=>{let t=()=>{n(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t)}},[e]),t}function G(e){let{className:t,...n}=e,l=X();return(0,s.jsxs)(Z.z,{variant:"outline",size:"icon",className:(0,d.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",l?"opacity-0":"opacity-100",t),onClick:()=>window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"}),...n,children:[(0,s.jsx)(B.BD,{}),(0,s.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}function Q(e){let{href:t,children:n}=e;return(0,s.jsxs)("a",{href:t,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,s.jsx)("span",{children:n}),(0,s.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,s.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function $(e){let{className:t,...n}=e;return(0,s.jsxs)("p",{className:(0,d.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",t),...n,children:[(0,s.jsx)(Q,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}var ee=n(50976),et=n(91067),en=n(30713),es=n(1592),el=n(92402),er=n(24144),ea=n(29166),ei=n(45470),eo=n(19190);let ed=eo.fC;eo.xz;let ec=eo.x8,eu=eo.h_,ef=eo.ee,em=l.forwardRef((e,t)=>{let{className:n,sideOffset:l=4,...r}=e;return(0,s.jsx)(eo.VY,{ref:t,sideOffset:l,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...r})});em.displayName=eo.VY.displayName;let eh=l.createContext({}),ex=l.forwardRef((e,t)=>(0,s.jsx)(ef,{...e,ref:t}));ex.displayName="ComboboxAnchor";let ep=l.forwardRef((e,t)=>{let{getInputProps:n,open:r}=l.useContext(eh),{onKeyDown:a,onChange:i,onInput:o,onBlur:d,onClick:c,...u}=e;return(0,s.jsx)(ei.Z,{...n((0,ea.Z)({onKeyDown:a,onChange:i,onInput:o,onBlur:d,onClick:c,ref:t},er.Z)),...u})});ep.displayName="ComboboxTextarea";let ev=l.forwardRef((e,t)=>{let{children:n,style:r,popupMatchAnchorWidth:a,...i}=e,{getMenuProps:o,anchorRef:d}=l.useContext(eh),c=l.useRef(void 0);return l.useLayoutEffect(()=>{if(a){let e=d.current;if(e){let t=e.getBoundingClientRect();c.current=t.width}}},[]),(0,s.jsx)(eu,{children:(0,s.jsx)(em,{align:"start",onOpenAutoFocus:e=>e.preventDefault(),style:{width:c.current,...r},...o({ref:t},{suppressRefError:!0}),...i,children:n})})});ev.displayName="ComboboxContent";let eg=l.forwardRef((e,t)=>{let{item:n,index:r,className:a,children:i,disabled:o,...c}=e,{highlightedIndex:u,selectedItem:f,getItemProps:m}=l.useContext(eh),h=u===r,x=f===n;return(0,s.jsx)(ec,{asChild:!0,children:(0,s.jsx)("div",{className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",h&&"bg-accent text-accent-foreground",x&&"font-bold",o&&"pointer-events-none opacity-50",a),...m({item:n,index:r,onMouseLeave:e=>e.preventDefault(),onMouseOut:e=>e.preventDefault()}),...c,children:"function"==typeof i?i({highlighted:h,selected:x}):i})},n.id)});function ej(e){let{options:t,onSelect:n,inputRef:r,children:a}=e,[i,o]=l.useState(!1),d=l.useRef(null),c=null!=r?r:d,u=l.useRef(null),f=l.useCallback((e,t)=>{let{type:n,changes:s}=t;return n===el.Kb.stateChangeTypes.MenuMouseLeave?{...s,highlightedIndex:e.highlightedIndex}:s},[]),m=(0,el.Kb)({items:null!=t?t:[],isOpen:i,onSelectedItemChange(e){let{selectedItem:t}=e;t&&(null==n||n(t),o(!1))},onIsOpenChange:e=>{let{isOpen:t}=e;t||o(!1)},stateReducer:f}),{setHighlightedIndex:h,highlightedIndex:x}=m,p=i&&!!(null==t?void 0:t.length);l.useEffect(()=>{p&&t.length&&-1===x&&h(0),p&&!t.length&&o(!1)},[p,t]),l.useEffect(()=>{(null==t?void 0:t.length)?o(!0):o(!1)},[t]);let v=l.useMemo(()=>({...m,open:p,inputRef:c,anchorRef:u}),[m,p,c,u]);return(0,s.jsx)(eh.Provider,{value:v,children:(0,s.jsx)(ed,{open:p,children:"function"==typeof a?a(v):a})})}eg.displayName="ComboboxOption";var eb=n(95482);let ey=l.forwardRef(function(e,t){let{onSubmit:n,input:r,setInput:a,isLoading:i}=e,{formRef:o,onKeyDown:c}=function(){let e=(0,l.useRef)(null);return{formRef:e,onKeyDown:t=>{if("Enter"===t.key&&!t.shiftKey&&!t.nativeEvent.isComposing){var n;null===(n=e.current)||void 0===n||n.requestSubmit(),t.preventDefault()}}}}(),[u,f]=l.useState(null),m=l.useRef(null),h=l.useRef(),x=l.useRef(),[p,v]=l.useState([]),[g,j]=l.useState({}),{data:b}=(0,en.ZP)(u,es.Z,{revalidateOnFocus:!1,dedupingInterval:0,errorRetryCount:0});l.useEffect(()=>{var e;v(null!==(e=null==b?void 0:b.hits)&&void 0!==e?e:[])},[null==b?void 0:b.hits]),l.useImperativeHandle(t,()=>({focus:()=>{var e;null===(e=m.current)||void 0===e||e.focus()}})),l.useEffect(()=>{r&&m.current&&m.current!==document.activeElement&&m.current.focus()},[r]),l.useLayoutEffect(()=>{var e,t,n;(null===(e=x.current)||void 0===e?void 0:e.length)&&(null===(n=m.current)||void 0===n||null===(t=n.setSelectionRange)||void 0===t||t.call(n,x.current[0],x.current[1]),x.current=void 0)});let y=l.useMemo(()=>(0,ee.Z)(e=>{var t,n,s,l;let r=null!==(s=null===(t=e.target)||void 0===t?void 0:t.value)&&void 0!==s?s:"",a=null!==(l=null===(n=e.target)||void 0===n?void 0:n.selectionEnd)&&void 0!==l?l:0,i=eN(r,a),o=null==i?void 0:i[1];if(o){let e=encodeURIComponent("name:".concat(o," AND kind:function")),t="/v1beta/search?q=".concat(e);f(t)}else v([])},200),[]),N=async e=>{if(e.preventDefault(),!(null==r?void 0:r.trim()))return;let t=r;Object.keys(g).forEach(e=>{var n,s,l;let r=g[e];(null==r?void 0:r.doc)&&(t=t.replaceAll(e,"\n```".concat(null!==(s=null===(n=r.doc)||void 0===n?void 0:n.language)&&void 0!==s?s:"","\n").concat(null!==(l=r.doc.body)&&void 0!==l?l:"","\n","```","\n")))}),a(""),await n(t)},w=(e,t)=>{"Enter"===e.key&&t?e.preventDefault():t&&["ArrowRight","ArrowLeft","Home","End"].includes(e.key)?v([]):(t||"ArrowUp"!==e.key&&"ArrowDown"!==e.key||(e.preventDownshiftDefault=!0),c(e))};return(0,s.jsx)("form",{onSubmit:N,ref:o,children:(0,s.jsx)(ej,{inputRef:m,options:p,onSelect:e=>{var t,n,s;let l=null!==(t=h.current)&&void 0!==t?t:0,i=eN(r,l);if(i){j({...g,["@".concat(null===(n=e.doc)||void 0===n?void 0:n.name)]:e});let t="@".concat(null==e?void 0:null===(s=e.doc)||void 0===s?void 0:s.name," "),o=r.substring(0,l).replace(new RegExp(i[0]),""),d=o.length+t.length;x.current=[d,d],a(o+t+r.slice(l))}v([])},children:e=>{var t,n,l,o;let{open:c,highlightedIndex:u}=e,f=null==p?void 0:p[u];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ex,{children:(0,s.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,s.jsx)("span",{className:(0,d.cn)((0,Z.d)({size:"sm",variant:"ghost"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 hover:bg-background sm:left-4"),children:(0,s.jsx)(B.yl,{})}),(0,s.jsx)(ep,{tabIndex:0,rows:1,placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm",value:r,ref:m,onChange:e=>{(0,et.Z)(e,"target.value")?(h.current=e.target.selectionEnd,a(e.target.value),y(e)):h.current=void 0},onKeyDown:e=>w(e,c)}),(0,s.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,s.jsxs)(eb.u,{children:[(0,s.jsx)(eb.aJ,{asChild:!0,children:(0,s.jsxs)(Z.z,{type:"submit",size:"icon",disabled:i||""===r,children:[(0,s.jsx)(B.vq,{}),(0,s.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,s.jsx)(eb._v,{children:"Send message"})]})})]})}),(0,s.jsx)(ev,{align:"start",side:"top",onOpenAutoFocus:e=>e.preventDefault(),className:"w-[60vw] md:w-[430px]",children:(0,s.jsxs)(ed,{open:c&&!!f,children:[(0,s.jsx)(ef,{asChild:!0,children:(0,s.jsx)("div",{className:"max-h-[300px] overflow-y-scroll",children:c&&!!(null==p?void 0:p.length)&&p.map((e,t)=>{var n,l,r;return(0,s.jsx)(eg,{item:e,index:t,children:(0,s.jsxs)("div",{className:"flex w-full items-center justify-between gap-8 overflow-x-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(ew,{kind:null==e?void 0:null===(n=e.doc)||void 0===n?void 0:n.kind}),(0,s.jsxs)("div",{className:"max-w-[200px] truncate",children:[null==e?void 0:null===(l=e.doc)||void 0===l?void 0:l.name,"(...)"]})]}),(0,s.jsx)("div",{className:"flex-1 truncate text-right text-sm text-muted-foreground",children:null==e?void 0:null===(r=e.doc)||void 0===r?void 0:r.body})]})},null==e?void 0:e.id)})})}),(0,s.jsx)(em,{asChild:!0,align:"start",side:"right",alignOffset:-4,onOpenAutoFocus:e=>e.preventDefault(),onKeyDownCapture:e=>e.preventDefault(),className:"rounded-none",collisionPadding:{bottom:120},children:(0,s.jsxs)("div",{className:"flex max-h-[70vh] w-[20vw] flex-col overflow-y-auto px-2 md:w-[240px] lg:w-[340px]",children:[(0,s.jsxs)("div",{className:"mb-2",children:[(null==f?void 0:null===(t=f.doc)||void 0===t?void 0:t.kind)?"(".concat(null==f?void 0:null===(n=f.doc)||void 0===n?void 0:n.kind,") "):"",null==f?void 0:null===(l=f.doc)||void 0===l?void 0:l.name]}),(0,s.jsx)("div",{className:"flex-1 whitespace-pre-wrap break-all text-muted-foreground",children:null==f?void 0:null===(o=f.doc)||void 0===o?void 0:o.body})]})})]})})]})}})})});function eN(e,t){let n=e.substring(0,t),s=/@(\w+)$/.exec(n);return s}function ew(e){let{kind:t,...n}=e;return(0,s.jsx)(B.sW,{...n})}function ek(e){let{id:t,isLoading:n,stop:r,append:a,reload:i,input:o,setInput:c,messages:u,className:f,onSubmit:m}=e,h=l.useRef(null);return l.useEffect(()=>{var e;null==h||null===(e=h.current)||void 0===e||e.focus()},[t]),(0,s.jsxs)("div",{className:(0,d.cn)("bg-gradient-to-b from-transparent from-0% to-muted/25 to-100%",f),children:[(0,s.jsx)(G,{}),(0,s.jsxs)("div",{className:"mx-auto sm:max-w-2xl sm:px-4",children:[(0,s.jsx)("div",{className:"flex h-10 items-center justify-center",children:n?(0,s.jsxs)(Z.z,{variant:"outline",onClick:()=>r(),className:"bg-background",children:[(0,s.jsx)(B.zu,{className:"mr-2"}),"Stop generating"]}):(null==u?void 0:u.length)>0&&(0,s.jsxs)(Z.z,{variant:"outline",onClick:()=>i(),className:"bg-background",children:[(0,s.jsx)(B.tr,{className:"mr-2"}),"Regenerate response"]})}),(0,s.jsxs)("div",{className:"space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,s.jsx)(ey,{ref:h,onSubmit:m,input:o,setInput:c,isLoading:n}),(0,s.jsx)($,{className:"hidden sm:block"})]})]})]})}var eC=n(4327);function ez(e){let{trackVisibility:t}=e,n=X(),{ref:r,entry:a,inView:i}=(0,eC.YD)({trackVisibility:t,delay:100,rootMargin:"0px 0px -150px 0px"});return l.useEffect(()=>{n&&t&&!i&&(null==a||a.target.scrollIntoView({block:"start"}))},[i,a,n,t]),(0,s.jsx)("div",{ref:r,className:"h-px w-full"})}let eA=[{heading:"Convert list of string to numbers",message:"How to convert a list of string to numbers in python"},{heading:"How to parse email address",message:"How to parse email address with regex"}];function eR(e){let{setInput:t}=e;return(0,s.jsx)("div",{className:"mx-auto max-w-2xl px-4",children:(0,s.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,s.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:"Welcome to Playground!"}),(0,s.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,s.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:eA.map((e,n)=>(0,s.jsxs)(Z.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>t(e.message),children:[(0,s.jsx)(B.Ec,{className:"mr-2 text-muted-foreground"}),e.heading]},n))})]})})}let eE=()=>(0,s.jsxs)("ul",{className:"space-y-3",children:[(0,s.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,s.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,s.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,s.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"})]});function eS(e){let{id:t,initialMessages:n,loading:r,className:i}=e;!function(){let{data:e}=(0,j.kP)();(0,l.useEffect)(()=>{window._originFetch||(window._originFetch=window.fetch);let t=window._originFetch;window.fetch=async function(n,s){if("/api/chat"!==n)return t(n,s);let l={"Content-Type":"application/json"};(null==e?void 0:e.accessToken)&&(l.Authorization="Bearer ".concat(null==e?void 0:e.accessToken));let r=await t("".concat(y,"/v1beta/chat/completions"),{...s,method:"POST",headers:l}),a=(0,g.HP)(r,void 0);return new g.wn(a)}},[null==e?void 0:e.accessToken])}();let o=a(f,e=>e.chats),{messages:c,append:u,reload:m,stop:b,isLoading:N,input:w,setInput:C,setMessages:z}=(0,h.R)({initialMessages:n,id:t,body:{id:t},onResponse(e){401===e.status&&v.A.error(e.statusText)}}),[R,E]=l.useState(),S=e=>{let t=(0,p.Z)(c,{id:e}),n=null==c?void 0:c[t-1];(null==n?void 0:n.role)==="user"&&(z(c.slice(0,t-1)),u(n))},D=e=>{let t=(0,x.Z)(c,{id:e});t&&z(c.filter(t=>t.id!==e))},O=e=>{let t=(0,x.Z)(c,{id:e});t&&(C(t.content),E(e))},T=async e=>{if(-1===(0,p.Z)(o,{id:t}))k(t,(0,d.aF)(e));else if(R){let e=(0,p.Z)(c,{id:R});z(c.slice(0,e)),E(void 0)}await u({id:(0,d.x0)(),content:e,role:"user"})};return l.useEffect(()=>{t&&A(t,c)},[c]),l.useEffect(()=>{let e=document.documentElement.scrollHeight;return window.scrollTo(0,e),()=>b()},[]),(0,s.jsx)("div",{className:"flex justify-center overflow-x-hidden",children:(0,s.jsxs)("div",{className:"w-full max-w-2xl px-4",children:[(0,s.jsx)("div",{className:(0,d.cn)("pb-[200px] pt-4 md:pt-10",i),children:r?(0,s.jsxs)("div",{className:"group relative mb-4 flex animate-pulse items-start md:-ml-12",children:[(0,s.jsx)("div",{className:"shrink-0",children:(0,s.jsx)("span",{className:"block h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700"})}),(0,s.jsx)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:(0,s.jsx)(eE,{})})]}):c.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(W,{messages:c,handleMessageAction:(e,t)=>{switch(t){case"edit":O(e);break;case"delete":D(e);break;case"regenerate":S(e)}}}),(0,s.jsx)(ez,{trackVisibility:N})]}):(0,s.jsx)(eR,{setInput:C})}),(0,s.jsx)(ek,{onSubmit:T,className:"fixed inset-x-0 bottom-0 lg:ml-[280px]",id:t,isLoading:N,stop:b,append:u,reload:m,messages:c,input:w,setInput:C})]})})}var eD=n(18851);let eO=e=>{let{onClear:t,onClick:n,onBlur:r,...a}=e,[i,o]=l.useState(!1),d=()=>{o(!1)};return(0,s.jsx)(Z.z,{className:"h-12 w-full justify-start",variant:"ghost",...a,onClick:e=>{i?(t(),o(!1)):o(!0),null==n||n(e)},onBlur:e=>{i&&d(),null==r||r(e)},children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(B.NO,{}),(0,s.jsx)("span",{className:"ml-2",children:"Confirm Clear Chats"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(B.IT,{}),(0,s.jsx)("span",{className:"ml-2",children:"Clear Chats"})]})})};var eT=n(12609),eH=n(51908);let eI=e=>{let{children:t,initialValue:n,chatId:r}=e,[a,i]=l.useState(!1),o=l.useRef(null),[d,c]=l.useState(n),u=async e=>{e.preventDefault(),(null==d?void 0:d.trim())&&(R(r,{title:d}),i(!1))};return(0,s.jsxs)(eT.Vq,{open:a,onOpenChange:i,children:[(0,s.jsxs)(eb.u,{children:[(0,s.jsx)(eb.aJ,{asChild:!0,children:(0,s.jsxs)(Z.z,{variant:"ghost",size:"icon",onClick:()=>i(!0),children:[(0,s.jsx)(B.yl,{}),(0,s.jsx)("span",{className:"sr-only",children:"Edit"})]})}),(0,s.jsx)(eb._v,{side:"bottom",children:"Edit"})]}),(0,s.jsx)(eT.cZ,{className:"bg-background",children:(0,s.jsxs)(eT.fK,{className:"gap-3",children:[(0,s.jsx)(eT.$N,{children:"Set Chat Title"}),(0,s.jsx)(eT.Be,{asChild:!0,children:(0,s.jsxs)("form",{className:"relative",onSubmit:u,ref:o,children:[(0,s.jsx)(eH.I,{className:"h-10 pr-12",value:d,onChange:e=>c(e.target.value),onKeyDown:e=>{if("Enter"===e.key){var t;null===(t=o.current)||void 0===t||t.requestSubmit(),e.preventDefault()}}}),(0,s.jsx)("div",{className:"absolute right-2 top-1",children:(0,s.jsxs)(eb.u,{children:[(0,s.jsx)(eb.aJ,{asChild:!0,children:(0,s.jsxs)(Z.z,{type:"submit",size:"icon",disabled:""===d,children:[(0,s.jsx)(B.vq,{}),(0,s.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,s.jsx)(eb._v,{children:"Edit Title"})]})})]})})]})})]})},e_=e=>{let{className:t}=e,n=a(f,e=>e._hasHydrated),l=a(f,e=>e.chats),r=a(f,e=>e.activeChatId),i=(e,t)=>{C(t)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:(0,d.cn)(t),children:(0,s.jsxs)("div",{className:"fixed inset-y-0 left-0 flex w-[279px] flex-col gap-2",children:[(0,s.jsx)("div",{className:"shrink-0 pb-0 pl-3 pt-2",children:(0,s.jsxs)(Z.z,{className:"h-12 w-full justify-start",variant:"ghost",onClick:e=>{w((0,d.x0)())},children:[(0,s.jsx)(B.SC,{}),(0,s.jsx)("span",{className:"ml-2",children:"New Chat"})]})}),(0,s.jsx)(E.Z,{}),(0,s.jsx)(eD.ScrollArea,{className:"flex flex-col gap-2 px-3",children:n?(0,s.jsx)(s.Fragment,{children:null==l?void 0:l.map(e=>{let t=r===e.id;return(0,s.jsxs)("div",{onClick:t=>w(e.id),className:(0,d.cn)("my-2 flex w-[254px] cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-1 text-sm transition-all hover:bg-primary/10",t&&"bg-primary/10"),children:[(0,s.jsx)("span",{className:"truncate leading-8",children:e.title||"(Untitled)"}),t&&(0,s.jsxs)("div",{className:"flex items-center",onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(eI,{initialValue:e.title,chatId:e.id}),(0,s.jsxs)(eb.u,{children:[(0,s.jsx)(eb.aJ,{asChild:!0,children:(0,s.jsxs)(Z.z,{variant:"ghost",size:"icon",onClick:t=>i(t,e.id),children:[(0,s.jsx)(B.IT,{}),(0,s.jsx)("span",{className:"sr-only",children:"Delete"})]})}),(0,s.jsx)(eb._v,{side:"bottom",children:"Delete"})]})]})]},e.id)})}):(0,s.jsx)(eE,{})}),(0,s.jsx)(E.Z,{}),(0,s.jsx)("div",{className:"shrink-0 pb-2",children:(0,s.jsx)(eO,{disabled:(null==l?void 0:l.length)===0,onClear:()=>{z()}})})]})})})},eL=[];function eZ(){var e;let t=a(f,e=>e._hasHydrated),n=a(f,e=>e.chats),l=a(f,e=>e.activeChatId),r=m(n,l);return(0,s.jsxs)("div",{className:"grid flex-1 overflow-hidden lg:grid-cols-[280px_1fr]",children:[(0,s.jsx)(e_,{className:"hidden w-[280px] border-r lg:block"}),(0,s.jsx)(eS,{loading:!t,id:l,initialMessages:null!==(e=null==r?void 0:r.messages)&&void 0!==e?e:eL},l)]})}},33555:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var s=n(57437);n(2265);var l=n(77723),r=n(93023),a=n(84168);function i(e){let{className:t,value:n,...i}=e,{isCopied:o,copyToClipboard:d}=(0,l.m)({timeout:2e3});return n?(0,s.jsxs)(r.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{o||d(n)},...i,children:[o?(0,s.jsx)(a.NO,{className:"text-green-600"}):(0,s.jsx)(a.vU,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},12609:function(e,t,n){"use strict";n.d(t,{$N:function(){return h},Be:function(){return x},Vq:function(){return o},cN:function(){return m},cZ:function(){return u},fK:function(){return f}});var s=n(57437),l=n(2265),r=n(25555),a=n(39311),i=n(84168);let o=r.fC;r.xz;let d=e=>{let{className:t,children:n,...l}=e;return(0,s.jsx)(r.h_,{className:(0,a.cn)(t),...l,children:(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:n})})};d.displayName=r.h_.displayName;let c=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,s.jsx)(r.aV,{ref:t,className:(0,a.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",n),...l})});c.displayName=r.aV.displayName;let u=l.forwardRef((e,t)=>{let{className:n,children:l,...o}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{}),(0,s.jsxs)(r.VY,{ref:t,className:(0,a.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",n),...o,children:[l,(0,s.jsxs)(r.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(i.bM,{}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=r.VY.displayName;let f=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};f.displayName="DialogHeader";let m=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};m.displayName="DialogFooter";let h=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,s.jsx)(r.Dx,{ref:t,className:(0,a.cn)("text-lg font-semibold leading-none tracking-tight",n),...l})});h.displayName=r.Dx.displayName;let x=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,s.jsx)(r.dk,{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",n),...l})});x.displayName=r.dk.displayName},51908:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var s=n(57437),l=n(2265),r=n(39311);let a=l.forwardRef((e,t)=>{let{className:n,type:l,...a}=e;return(0,s.jsx)("input",{type:l,className:(0,r.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...a})});a.displayName="Input"},18851:function(e,t,n){"use strict";n.r(t),n.d(t,{ScrollArea:function(){return i},ScrollBar:function(){return o}});var s=n(57437),l=n(2265),r=n(17283),a=n(39311);let i=l.forwardRef((e,t)=>{let{className:n,children:l,...i}=e;return(0,s.jsxs)(r.fC,{ref:t,className:(0,a.cn)("relative overflow-hidden",n),...i,children:[(0,s.jsx)(r.l_,{className:"h-full w-full rounded-[inherit]",children:l}),(0,s.jsx)(o,{}),(0,s.jsx)(r.Ns,{})]})});i.displayName=r.fC.displayName;let o=l.forwardRef((e,t)=>{let{className:n,orientation:l="vertical",...i}=e;return(0,s.jsx)(r.gb,{ref:t,orientation:l,className:(0,a.cn)("flex touch-none select-none transition-colors","vertical"===l&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===l&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...i,children:(0,s.jsx)(r.q4,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=r.gb.displayName},16775:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(57437),l=n(2265),r=n(26823),a=n(39311);let i=l.forwardRef((e,t)=>{let{className:n,orientation:l="horizontal",decorative:i=!0,...o}=e;return(0,s.jsx)(r.f,{ref:t,decorative:i,orientation:l,className:(0,a.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",n),...o})});i.displayName=r.f.displayName},95482:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return i},u:function(){return o}});var s=n(57437),l=n(2265),r=n(75224),a=n(39311);let i=r.zt,o=r.fC,d=r.xz,c=l.forwardRef((e,t)=>{let{className:n,sideOffset:l=4,...i}=e;return(0,s.jsx)(r.VY,{ref:t,sideOffset:l,className:(0,a.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...i})});c.displayName=r.VY.displayName},77723:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var s=n(2265),l=n(2390),r=n.n(l),a=n(71424);function i(e){let{timeout:t=2e3,onError:n}=e,[l,i]=s.useState(!1),o=()=>{i(!0),setTimeout(()=>{i(!1)},t)},d=e=>{if("function"==typeof n){null==n||n(e);return}a.A.error("Failed to copy.")};return{isCopied:l,copyToClipboard:e=>{var t;if(e){if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(o).catch(d);else{let t=r()(e);t?o():d()}}}}}},1592:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(34084),l=n(58001),r=n(7820);let a=!1,i=[];async function o(e,t){let n=await fetch(e,d(t));if(401!==n.status)return(null==t?void 0:t.format)==="text"?n.text():n.json();{var s,r;if(a)return new Promise(n=>{i.push({url:e,init:t,resolve:n})});let n=null===(s=(0,l.bW)())||void 0===s?void 0:s.refreshToken;if(!n){(0,l.Rn)();return}a=!0;let o=await c(n),d=null==o?void 0:null===(r=o.data)||void 0===r?void 0:r.refreshToken;if(d){for((0,l.pC)({accessToken:d.accessToken,refreshToken:d.refreshToken}),a=!1;i.length;){let e=i.shift();null==e||e.resolve(u(e.url,e.init))}return u(e,t)}a=!1,i.length=0,(0,l.Rn)()}}function d(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,l.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function c(e){let t=r.L.createRequestOperation("mutation",(0,s.h)(l.Dp,{refreshToken:e}));return r.L.executeMutation(t)}function u(e,t){return fetch(e,d(t)).then(e=>(null==t?void 0:t.format)==="text"?e.text():e.json())}}},function(e){e.O(0,[5328,1424,2047,4012,1629,9503,5479,1621,2949,5224,2248,7820,1894,2971,7864,1744],function(){return e(e.s=24283)}),_N_E=e.O()}]);