(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5271],{37704:function(e,r,t){Promise.resolve().then(t.bind(t,89890))},89890:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(57437),s=t(24033);t(2265);var i=t(38110),o=t(61865),a=t(74578),l=t(58835),d=t(58001),c=t(7820),u=t(39311),m=t(93023),f=t(41315),x=t(84168),p=t(51908);let j=(0,l.BX)("\n  mutation register(\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n"),h=a.Ry({email:a.Z_().email("Invalid email address"),password1:a.Z_(),password2:a.Z_(),invitationCode:a.Z_().optional()});function v(e){let{className:r,invitationCode:t,...a}=e,l=(0,o.cI)({resolver:(0,i.F)(h),defaultValues:{invitationCode:t}}),v=(0,s.useRouter)(),g=(0,d.zq)(),{isSubmitting:w}=l.formState,N=(0,c.D)(j,{async onCompleted(e){await g(null==e?void 0:e.register)&&v.replace("/")},form:l});return(0,n.jsx)("div",{className:(0,u.cn)("grid gap-6",r),...a,children:(0,n.jsxs)(f.l0,{...l,children:[(0,n.jsxs)("form",{className:"grid gap-2",onSubmit:l.handleSubmit(N),children:[(0,n.jsx)(f.Wi,{control:l.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(f.xJ,{children:[(0,n.jsx)(f.lX,{children:"Email"}),(0,n.jsx)(f.NI,{children:(0,n.jsx)(p.I,{placeholder:"",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...r})}),(0,n.jsx)(f.zG,{})]})}}),(0,n.jsx)(f.Wi,{control:l.control,name:"password1",render:e=>{let{field:r}=e;return(0,n.jsxs)(f.xJ,{children:[(0,n.jsx)(f.lX,{children:"Password"}),(0,n.jsx)(f.NI,{children:(0,n.jsx)(p.I,{type:"password",...r})}),(0,n.jsx)(f.zG,{})]})}}),(0,n.jsx)(f.Wi,{control:l.control,name:"password2",render:e=>{let{field:r}=e;return(0,n.jsxs)(f.xJ,{children:[(0,n.jsx)(f.lX,{children:"Confirm Password"}),(0,n.jsx)(f.NI,{children:(0,n.jsx)(p.I,{type:"password",...r})}),(0,n.jsx)(f.zG,{})]})}}),(0,n.jsx)(f.Wi,{control:l.control,name:"invitationCode",render:e=>{let{field:r}=e;return(0,n.jsx)(f.xJ,{className:"hidden",children:(0,n.jsx)(f.NI,{children:(0,n.jsx)(p.I,{type:"hidden",...r})})})}}),(0,n.jsxs)(m.z,{type:"submit",className:"mt-1",disabled:w,children:[w&&(0,n.jsx)(x.vM,{className:"mr-2 h-4 w-4 animate-spin"}),"Register"]})]}),(0,n.jsx)(f.zG,{className:"text-center"})]})})}function g(){let e=(0,s.useSearchParams)(),r=e.get("invitationCode")||void 0,t=e.get("isAdmin")||!1;return t||r?(0,n.jsx)(w,{title:t?"Create an admin account":"Create an account",description:t?"Your instance will be secured, only registered users can access it.":"Fill form below to create your account",show:!0}):(0,n.jsx)(w,{title:"No invitation code",description:"Please contact your Tabby admin for an invitation code to register"})}function w(e){let{title:r,description:t,show:i}=e,o=(0,s.useSearchParams)(),a=o.get("invitationCode")||void 0;return(0,n.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:r}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:t})]}),i&&(0,n.jsx)(v,{invitationCode:a})]})}},41315:function(e,r,t){"use strict";t.d(r,{NI:function(){return j},Wi:function(){return u},l0:function(){return d},lX:function(){return p},xJ:function(){return x},zG:function(){return v}});var n=t(57437),s=t(2265),i=t(67256),o=t(61865),a=t(39311),l=t(66672);let d=o.RV,c=s.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(c.Provider,{value:{name:r.name},children:(0,n.jsx)(o.Qr,{...r})})},m=()=>{let e=s.useContext(c),r=s.useContext(f),{getFieldState:t,formState:n}=(0,o.Gc)(),i=e.name||"root",a=t(i,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:l}=r;return{id:l,name:i,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...a}},f=s.createContext({}),x=s.forwardRef((e,r)=>{let{className:t,...i}=e,o=s.useId();return(0,n.jsx)(f.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:r,className:(0,a.cn)("space-y-2",t),...i})})});x.displayName="FormItem";let p=s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:i,formItemId:o}=m();return(0,n.jsx)(l._,{ref:r,className:(0,a.cn)(i&&"text-destructive",t),htmlFor:o,...s})});p.displayName="FormLabel";let j=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:o,formDescriptionId:a,formMessageId:l}=m();return(0,n.jsx)(i.g7,{ref:r,id:o,"aria-describedby":s?"".concat(a," ").concat(l):"".concat(a),"aria-invalid":!!s,...t})});j.displayName="FormControl";let h=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:i}=m();return(0,n.jsx)("p",{ref:r,id:i,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});h.displayName="FormDescription";let v=s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e,{error:o,formMessageId:l}=m(),d=o?String(null==o?void 0:o.message):s;return d?(0,n.jsx)("p",{ref:r,id:l,className:(0,a.cn)("text-sm font-medium text-destructive",t),...i,children:d}):null});v.displayName="FormMessage"},51908:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var n=t(57437),s=t(2265),i=t(39311);let o=s.forwardRef((e,r)=>{let{className:t,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...o})});o.displayName="Input"},66672:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(57437),s=t(2265),i=t(36743),o=t(7404),a=t(39311);let l=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.f,{ref:r,className:(0,a.cn)(l(),t),...s})});d.displayName=i.f.displayName}},function(e){e.O(0,[5328,5414,7820,1894,2971,7864,1744],function(){return e(e.s=37704)}),_N_E=e.O()}]);