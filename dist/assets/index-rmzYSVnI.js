import{m as B,n as H,o as T,i as E,s as M,p as J,q as R,t as Y,v as q,w as W,x as z,r as m,j as e,y as C,A as K,a as G,z as X,H as $,D as Z,R as Q,E as g,F as V}from"./vendor-CyEv29V0.js";import{H as j,a as ee,F as te,T as se,C as re,b as ae,P as U,A as O,E as D,c as x,S as L,N as b,d as oe,e as F,f as ne,g as ie,h as P}from"./components-CFubUuY-.js";import"./index-rmzYSVnI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();function Ne(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const ce={apiKey:"YOUR_FIREBASE_API_KEY",authDomain:"YOUR_FIREBASE_AUTH_DOMAIN",projectId:"YOUR_FIREBASE_PROJECT_ID",storageBucket:"YOUR_FIREBASE_STORAGE_BUCKET",messagingSenderId:"YOUR_FIREBASE_MESSAGING_SENDER_ID",appId:"YOUR_FIREBASE_APP_ID",measurementId:"YOUR_FIREBASE_MEASUREMENT_ID"},_=B(ce),f=H(_),le=T(_),de=E.create({baseURL:"/",headers:{"Content-Type":"application/json"}});de.interceptors.request.use(t=>{const r=localStorage.getItem("token");return r&&(t.headers.Authorization=`Bearer ${r}`),t});const A=t=>{throw console.error("API Error:",t),t},v={login:async(t,r)=>{try{console.log("API: Attempting login with:",{email:t,password:r});const n=(await M(f,t,r)).user,s=await n.getIdToken();localStorage.setItem("token",s);const a={id:n.uid,name:n.displayName||"User",email:n.email||"",profilePicture:n.photoURL||void 0};return localStorage.setItem("user",JSON.stringify(a)),console.log("API: Login successful, user:",a),{user:a,token:s}}catch(o){console.error("API: Login failed:",o),A(o)}},register:async(t,r,o)=>{try{console.log("API: Attempting registration with:",{name:t,email:r,password:o});const s=(await J(f,r,o)).user;await R(s,{displayName:t});const a=await s.getIdToken();localStorage.setItem("token",a);const l={id:s.uid,name:s.displayName||"User",email:s.email||"",profilePicture:s.photoURL||void 0};return localStorage.setItem("user",JSON.stringify(l)),console.log("API: Registration successful, user:",l),{user:l,token:a}}catch(n){console.error("API: Registration failed:",n),A(n)}},logout:()=>{Y(f),localStorage.removeItem("token"),localStorage.removeItem("user"),console.log("API: Logout successful")}},ue={get:async()=>{try{const t=f.currentUser;if(!t)throw new Error("User not authenticated");return{id:t.uid,name:t.displayName||"User",email:t.email||"",profilePicture:t.photoURL||void 0}}catch(t){A(t)}},update:async t=>{try{const r=f.currentUser;if(!r)throw new Error("User not authenticated");t.name&&await R(r,{displayName:t.name});const o={id:r.uid,name:r.displayName||"User",email:r.email||"",profilePicture:r.photoURL||void 0};return localStorage.setItem("user",JSON.stringify(o)),o}catch(r){A(r)}}},Pe={checkSymptoms:async t=>{try{const r=f.currentUser;if(!r)throw new Error("User not authenticated");const o=q(le,"symptoms"),s=(await E.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",{contents:[{parts:[{text:`Analyze the following symptoms and provide a brief, informative response. If the symptoms suggest a serious condition, advise the user to seek professional medical care. Symptoms: ${t.map(h=>h.description).join(", ")}`}]}]},{headers:{"Content-Type":"application/json","x-goog-api-key":"AIzaSyBCxlLPkZ9drEWaHhSAXXafPMPR95XciJw"}})).data.candidates[0].content.parts[0].text,a=await W(o,{userId:r.uid,symptoms:t,aiAdvice:s,timestamp:new Date});if((await z(a)).exists())return{aiAdvice:s};throw new Error("Failed to save symptoms")}catch(r){A(r)}}},k=m.createContext(null);function me({children:t}){const[r,o]=m.useState(!1),[n,s]=m.useState(null),[a,l]=m.useState(!0);m.useEffect(()=>{const u=localStorage.getItem("token"),i=localStorage.getItem("user");if(u&&i)try{s(JSON.parse(i)),o(!0),console.log("AuthContext: Initial user loaded from localStorage:",JSON.parse(i))}catch(c){console.error("AuthContext: Error parsing user from localStorage:",c),localStorage.removeItem("user"),localStorage.removeItem("token")}l(!1)},[]);const h=async(u,i)=>{try{const{user:c}=await v.login(u,i),d={id:c.id,name:c.name,email:c.email,profilePicture:c.profilePicture};s(d),o(!0),localStorage.setItem("user",JSON.stringify(d)),console.log("AuthContext: Login successful, user:",d)}catch(c){throw console.error("AuthContext: Login failed:",c),c}},p=()=>{v.logout(),s(null),o(!1),localStorage.removeItem("user"),console.log("AuthContext: Logout successful")},y=async(u,i,c)=>{try{const{user:d}=await v.register(u,i,c),S={id:d.id,name:d.name,email:d.email,profilePicture:d.profilePicture};s(S),o(!0),localStorage.setItem("user",JSON.stringify(S)),console.log("AuthContext: Registration successful, user:",S)}catch(d){throw console.error("AuthContext: Registration failed:",d),d}},w=async u=>{try{const i=await ue.update(u),c={id:i.id,name:i.name,email:i.email,profilePicture:i.profilePicture};s(c),localStorage.setItem("user",JSON.stringify(c)),console.log("AuthContext: Profile update successful, user:",c)}catch(i){throw console.error("AuthContext: Profile update failed:",i),i}};return a?e.jsx("div",{children:"Loading..."}):e.jsx(k.Provider,{value:{isAuthenticated:r,user:n,login:h,logout:p,register:y,updateProfile:w},children:t})}function N(){const t=m.useContext(k);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function he(){return e.jsxs("div",{className:"min-h-screen",children:[e.jsx(j,{}),e.jsx(ee,{}),e.jsx(te,{}),e.jsx(se,{}),e.jsx(re,{}),e.jsx(ae,{})]})}function pe(){const t=C(),{login:r}=N(),[o,n]=m.useState(!1),[s,a]=m.useState(""),l=async h=>{var u,i;h.preventDefault(),a("");const p=new FormData(h.currentTarget),y=p.get("email"),w=p.get("password");n(!0);try{await r(y,w),t("/dashboard")}catch(c){a(((i=(u=c.response)==null?void 0:u.data)==null?void 0:i.error)||"Invalid credentials")}finally{n(!1)}};return e.jsxs("div",{children:[e.jsx(U,{}),e.jsx(O,{title:"Welcome Back",children:s?e.jsx(D,{title:"Sign In Failed",message:s,showHomeLink:!1}):e.jsxs("form",{onSubmit:l,className:"space-y-6",children:[e.jsx(x,{id:"email",name:"email",type:"email",label:"Email address",autoComplete:"email",required:!0}),e.jsx(x,{id:"password",name:"password",type:"password",label:"Password",autoComplete:"current-password",required:!0}),e.jsx(L,{isLoading:o,children:"Sign in"}),e.jsxs("p",{className:"text-center text-sm text-gray-600",children:["Don't have an account?"," ",e.jsx(b,{to:"/register",children:"Register now"})]}),e.jsx("p",{className:"text-center text-sm text-gray-600",children:e.jsx(b,{to:"/",children:"Back to main page"})})]})})]})}function ge(){const t=C(),{register:r}=N(),[o,n]=m.useState(!1),[s,a]=m.useState(""),l=async h=>{var c,d;h.preventDefault(),a("");const p=new FormData(h.currentTarget),y=p.get("name"),w=p.get("email"),u=p.get("password"),i=p.get("confirmPassword");if(u!==i){a("Passwords do not match");return}n(!0);try{await r(y,w,u),t("/dashboard")}catch(S){a(((d=(c=S.response)==null?void 0:c.data)==null?void 0:d.error)||"Registration failed")}finally{n(!1)}};return e.jsxs("div",{children:[e.jsx(U,{}),e.jsx(O,{title:"Create Account",children:s?e.jsx(D,{title:"Registration Failed",message:s,showHomeLink:!1}):e.jsxs("form",{onSubmit:l,className:"space-y-6",children:[e.jsx(x,{id:"name",name:"name",type:"text",label:"Full name",autoComplete:"name",required:!0}),e.jsx(x,{id:"email",name:"email",type:"email",label:"Email address",autoComplete:"email",required:!0}),e.jsx(x,{id:"password",name:"password",type:"password",label:"Password",autoComplete:"new-password",required:!0}),e.jsx(x,{id:"confirmPassword",name:"confirmPassword",type:"password",label:"Confirm password",autoComplete:"new-password",required:!0}),e.jsx(L,{isLoading:o,children:"Create account"}),e.jsxs("p",{className:"text-center text-sm text-gray-600",children:["Already have an account?"," ",e.jsx(b,{to:"/signin",children:"Sign in"})]}),e.jsx("p",{className:"text-center text-sm text-gray-600",children:e.jsx(b,{to:"/",children:"Back to main page"})})]})})]})}function xe(){const{user:t}=N();return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(j,{}),e.jsxs("main",{className:"container mx-auto px-4 py-8",children:[t&&e.jsxs("h1",{className:"text-2xl font-bold mb-6",children:["Welcome, ",t.name,"!"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsx(oe,{}),e.jsx(F,{})]})]})]})}function fe(){return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(j,{}),e.jsxs("main",{className:"container mx-auto px-4 py-8",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Your Health History"}),e.jsx(F,{})]})]})}function je(){const{user:t}=N();return t?e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(j,{}),e.jsx("main",{className:"container mx-auto px-4 py-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Profile Settings"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[e.jsx("div",{className:"md:col-span-1",children:e.jsx(ne,{user:t})}),e.jsx("div",{className:"md:col-span-2",children:e.jsx(ie,{user:t})})]})]})})]}):null}function ye(){return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(j,{}),e.jsx("main",{className:"container mx-auto px-4 py-16",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-4xl font-bold text-center mb-8",children:"About MediSense AI"}),e.jsxs("div",{className:"prose prose-lg mx-auto",children:[e.jsx("p",{className:"text-xl text-gray-600 mb-8 text-center",children:"MediSense AI combines advanced artificial intelligence with medical expertise to provide reliable health insights and guidance."}),e.jsx("div",{className:"grid md:grid-cols-2 gap-8 mb-12",children:[{icon:K,title:"Advanced AI Technology",description:"Powered by state-of-the-art machine learning models trained on medical data"},{icon:G,title:"Privacy First",description:"Your health data is encrypted and protected with enterprise-grade security"},{icon:X,title:"Expert Backed",description:"Developed in collaboration with healthcare professionals"},{icon:$,title:"User Focused",description:"Designed to provide clear, actionable health insights"}].map((t,r)=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[e.jsx(t.icon,{className:"h-8 w-8 text-blue-600 mb-4"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:t.title}),e.jsx("p",{className:"text-gray-600",children:t.description})]},r))}),e.jsxs("div",{className:"bg-blue-50 p-8 rounded-xl mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Our Mission"}),e.jsx("p",{className:"text-gray-700",children:"We believe that everyone should have access to reliable health information and guidance. Our mission is to make preliminary health assessment more accessible while ensuring users get professional medical care when needed."})]})]})]})})]})}function I(){return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(j,{}),e.jsxs("main",{className:"container mx-auto px-4 py-16 text-center",children:[e.jsx("h1",{className:"text-6xl font-bold text-gray-900 mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Page not found"}),e.jsx(b,{href:"/",variant:"button",children:"Return Home"})]})]})}function we(){return e.jsx(me,{children:e.jsx(Z,{children:e.jsxs(Q,{children:[e.jsx(g,{path:"/",element:e.jsx(he,{})}),e.jsx(g,{path:"/signin",element:e.jsx(pe,{})}),e.jsx(g,{path:"/register",element:e.jsx(ge,{})}),e.jsx(g,{path:"/about",element:e.jsx(ye,{})}),e.jsx(g,{path:"/dashboard",element:e.jsx(P,{children:e.jsx(xe,{})})}),e.jsx(g,{path:"/history",element:e.jsx(P,{children:e.jsx(fe,{})})}),e.jsx(g,{path:"/profile",element:e.jsx(P,{children:e.jsx(je,{})})}),e.jsx(g,{path:"/404",element:e.jsx(I,{})}),e.jsx(g,{path:"*",element:e.jsx(I,{})})]})})})}V(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(we,{})}));export{Ne as a,Pe as g,N as u};