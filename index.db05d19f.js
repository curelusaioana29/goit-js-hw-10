var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequireabb0;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequireabb0=r);var o=r("9dxg1");const a=document.querySelector(".breed-select"),i=document.querySelector(".loader"),l=document.querySelector(".error"),c=document.querySelector(".cat-info");function d(e){i.style.display=e?"block":"none"}function s(e){l.style.display=e?"block":"none"}a.addEventListener("change",(e=>{!async function(e){try{d(!0);const n=(await(0,o.fetchCatByBreed)(e))[0];c.innerHTML=`\n      <img src="${n.url}" alt="${n.breeds[0].name}">\n      <p><strong>Breed:</strong> ${n.breeds[0].name}</p>\n      <p><strong>Description:</strong> ${n.breeds[0].description}</p>\n      <p><strong>Temperament:</strong> ${n.breeds[0].temperament}</p>\n    `,s(!1)}catch(e){s(!0)}finally{d(!1)}}(e.target.value)})),async function(){try{d(!0);const e=await(0,o.fetchBreeds)();a.innerHTML=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("")}catch(e){s(!0)}finally{d(!1)}}();
//# sourceMappingURL=index.db05d19f.js.map
