const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Light.stories-BsbxWIDN.js","./jsx-runtime-CkxqCPlQ.js","./index-DJO9vBfz.js","./Popup.stories-DCs0mKwD.js","./Popup-8diwDnSJ.css","./entry-preview-D223RZZn.js","./chunk-H6MOWX77-DTQOW814.js","./index-Cp9I2zMD.js","./entry-preview-docs-CZOQtJ7v.js","./index-CvTBScqg.js","./index-DrFu-skq.js","./preview-D77C14du.js","./preview-BWzBA1C2.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const R="modulepreload",L=function(e,n){return new URL(e,n).href},f={},i=function(n,l,a){let t=Promise.resolve();if(l&&l.length>0){const _=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.allSettled(l.map(s=>{if(s=L(s,a),s in f)return;f[s]=!0;const u=s.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!a)for(let m=_.length-1;m>=0;m--){const O=_[m];if(O.href===s&&(!u||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),u)return new Promise((m,O)=>{c.addEventListener("load",m),c.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(_){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=_,window.dispatchEvent(o),!o.defaultPrevented)throw _}return t.then(_=>{for(const o of _||[])o.status==="rejected"&&r(o.reason);return n().catch(r)})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,E=T({page:"preview"});P.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const S={"./src/stories/Light.stories.tsx":async()=>i(()=>import("./Light.stories-BsbxWIDN.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./src/stories/Popup.stories.tsx":async()=>i(()=>import("./Popup.stories-DCs0mKwD.js"),__vite__mapDeps([3,1,2,4]),import.meta.url)};async function y(e){return S[e]()}const{composeConfigs:I,PreviewWeb:w,ClientApi:D}=__STORYBOOK_MODULE_PREVIEW_API__,g=async(e=[])=>{const n=await Promise.all([e.at(0)??i(()=>import("./entry-preview-D223RZZn.js"),__vite__mapDeps([5,6,2,7]),import.meta.url),e.at(1)??i(()=>import("./entry-preview-docs-CZOQtJ7v.js"),__vite__mapDeps([8,6,9,2,10]),import.meta.url),e.at(2)??i(()=>import("./preview-DjeyThyd.js"),[],import.meta.url),e.at(3)??i(()=>import("./preview-aVwhiz9X.js"),[],import.meta.url),e.at(4)??i(()=>import("./preview-D77C14du.js"),__vite__mapDeps([11,10]),import.meta.url),e.at(5)??i(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),e.at(6)??i(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),e.at(7)??i(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([12,10]),import.meta.url),e.at(8)??i(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),e.at(9)??i(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return I(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w(y,g);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{i as _};
