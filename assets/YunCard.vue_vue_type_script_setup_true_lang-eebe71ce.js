import{f as n,o as s,i as o,l as t,a,r}from"./index-42db3f6d.js";const c={class:"yun-card flex-center",flex:"col","min-h":"100px",bg:"$va-c-bg-light"},l=["src"],d={key:1,class:"yun-card-header"},i={key:2,class:"yun-card-content",w:"full"},m=n({__name:"YunCard",props:{cover:{}},setup(h){return(e,u)=>(s(),o("div",c,[e.cover?(s(),o("img",{key:0,width:"640",height:"360",class:"object-cover select-none",h:"64 md:sm",w:"full",src:e.cover},null,8,l)):t("v-if",!0),e.$slots.header?(s(),o("div",d,[a("header",null,[r(e.$slots,"header")])])):t("v-if",!0),r(e.$slots,"default"),e.$slots.content?(s(),o("div",i,[r(e.$slots,"content")])):t("v-if",!0)]))}});export{m as _};
