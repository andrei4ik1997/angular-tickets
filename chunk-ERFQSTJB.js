import{a as b}from"./chunk-QHWGEJAE.js";import{a as B,b as E,c as T,d as q,e as w,f as A}from"./chunk-TQ2B365T.js";import{o as _}from"./chunk-UWIVEJDG.js";import{o as F}from"./chunk-QRCF3VGL.js";import{Dc as M,Eb as I,Ec as x,Mb as s,Nb as l,Ob as C,Ra as c,dc as d,ec as m,fc as S,ic as u,kb as o,mc as y,nc as v,pa as g,va as r,wa as p}from"./chunk-YU5TMQCC.js";import"./chunk-SIAVTO45.js";var P=(()=>{let t=class t{constructor(){this.ticketID=c.required(),this.tickets=c.required(),this.ticket=x(()=>this.tickets().find(a=>a.id===this.ticketID()))}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p({type:t,selectors:[["ticket"]],inputs:{ticketID:[r.SignalBased,"ticketID"],tickets:[r.SignalBased,"tickets"]},standalone:!0,features:[u],decls:11,vars:4,template:function(e,n){if(e&1&&(s(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),d(3),l(),s(4,"mat-card-title"),d(5),l(),s(6,"mat-card-subtitle"),d(7),l()(),s(8,"mat-card-content")(9,"p"),d(10),l()()()),e&2){let f,k,h,D;o(3),m((f=n.ticket())==null?null:f.id),o(2),m((k=n.ticket())==null?null:k.name),o(2),m((h=n.ticket())==null?null:h.createdDate),o(3),S(" ",(D=n.ticket())==null?null:D.description," ")}},dependencies:[A,B,T,w,q,E],styles:["[_nghost-%COMP%]{display:flex;flex:1;flex-direction:column}"],changeDetection:0});let i=t;return i})();var W=(()=>{let t=class t{constructor(){this.store=g(_),this.ticketID=c(0,{transform:M}),this.tickets$=this.store.select(b.tickets.data)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p({type:t,selectors:[["ticket-container"]],inputs:{ticketID:[r.SignalBased,"ticketID"]},standalone:!0,features:[u],decls:2,vars:4,consts:[[3,"ticketID","tickets"]],template:function(e,n){e&1&&(C(0,"ticket",0),y(1,"async")),e&2&&I("ticketID",n.ticketID())("tickets",v(1,2,n.tickets$))},dependencies:[P,F],encapsulation:2,changeDetection:0});let i=t;return i})();export{W as default};