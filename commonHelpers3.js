(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const i=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&(r.target.style.animation="bannerAppear 0.8s ease forwards",i.unobserve(r.target))})},{threshold:.1});document.querySelectorAll(".faq-banner").forEach(s=>{s.style.opacity="0",s.style.transform="translateY(30px)",s.style.filter="blur(10px)",i.observe(s)}),new Swiper(".mySwiper3",{slidesPerView:1,spaceBetween:30,pagination:{el:".swiper-pagination",type:"progressbar"},navigation:{nextEl:".howtoplay-next",prevEl:".howtoplay-prev"},breakpoints:{1200:{slidesPerView:3,spaceBetween:30,width:null}}}),new Swiper(".mySwiper1",{slidesPerView:1,spaceBetween:30,loop:!1,pagination:{el:".mySwiper1 .swiper-pagination",type:"progressbar"},navigation:{nextEl:".howtoplay-next",prevEl:".howtoplay-prev"},breakpoints:{1200:{slidesPerView:3,spaceBetween:30,centeredSlides:!0}}}),new Swiper(".mySwiper2",{slidesPerView:1,spaceBetween:30,loop:!1,pagination:{el:".mySwiper2 .swiper-pagination",type:"progressbar"},navigation:{nextEl:".nav-next",prevEl:".nav-prev"},breakpoints:{1200:{slidesPerView:2,spaceBetween:40}}});const a=document.querySelectorAll(".accordion-item");a.forEach(s=>{const r=s.querySelector(".accordion-header"),e=s.querySelector(".accordion-content");r.addEventListener("click",()=>{a.forEach(t=>{t!==s&&(t.classList.remove("active"),t.querySelector(".accordion-content").style.display="none")}),s.classList.toggle("active"),e.style.display==="none"?e.style.display="block":e.style.display="none"})})});new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1200:{slidesPerView:3,spaceBetween:20}}});const l=document.querySelector(".js-open-menu"),o=document.querySelector(".js-menu-container"),n=document.createElement("div");n.classList.add("backdrop");document.body.appendChild(n);l.addEventListener("click",()=>{o.classList.toggle("is-open"),n.classList.toggle("is-active")});window.addEventListener("click",i=>{o.classList.contains("is-open")&&!o.contains(i.target)&&!l.contains(i.target)&&!n.contains(i.target)&&(o.classList.remove("is-open"),n.classList.remove("is-active"))});o.addEventListener("click",i=>{i.target.tagName==="A"&&(o.classList.remove("is-open"),n.classList.remove("is-active"))});n.addEventListener("click",()=>{o.classList.remove("is-open"),n.classList.remove("is-active")});
//# sourceMappingURL=commonHelpers3.js.map
