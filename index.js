import{a as d,S as m,i as c}from"./assets/vendor-8-pyTk71.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const g="https://pixabay.com/api/",h="52282020-0fa7caca98833a1caa1732196";function b(o,r=1){const t={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:20};return d.get(g,{params:t}).then(a=>a.data)}const y=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".loader-text"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function w(o){if(!Array.isArray(o)||o.length===0)return;const r=o.map(t=>`
<li class="gallery__item">
  <a class="gallery__link" href="${t.largeImageURL}">
    <img class="gallery__image" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b><span>${t.likes}</span></p>
    <p class="info-item"><b>Views</b><span>${t.views}</span></p>
    <p class="info-item"><b>Comments</b><span>${t.comments}</span></p>
    <p class="info-item"><b>Downloads</b><span>${t.downloads}</span></p>
  </div>
</li>`).join("");y.insertAdjacentHTML("beforeend",r),L.refresh()}function _(){y.innerHTML=""}function A(){n&&(n.style.display="flex"),i&&(i.style.display="block")}function f(){n&&(n.style.display="none"),i&&(i.style.display="none")}const S=document.querySelector(".form");let u="",p=1;S.addEventListener("submit",o=>{if(o.preventDefault(),u=o.target["search-text"].value.trim(),!u){c.warning({title:"Warning",message:"Please enter a search query."});return}p=1,_(),A(),b(u,p).then(r=>{if(f(),!r||!Array.isArray(r.hits)||r.hits.length===0){c.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}w(r.hits)}).catch(r=>{f(),c.error({title:"Error",message:"An error occurred while fetching images."}),console.error(r)})});
//# sourceMappingURL=index.js.map
