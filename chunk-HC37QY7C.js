import{a as D}from"./chunk-VSLIUKNT.js";import{a as v}from"./chunk-7GWNW4KD.js";import{e as h,o as C}from"./chunk-HMMVWGZI.js";import{o as y}from"./chunk-UWIVEJDG.js";import{o as S}from"./chunk-QRCF3VGL.js";import{Cb as c,Eb as d,Ib as m,Ob as i,Ra as f,ic as r,mc as u,nc as g,pa as s,va as l,wa as n}from"./chunk-YU5TMQCC.js";import"./chunk-SIAVTO45.js";function P(t,e){t&1&&i(0,"spinner")}function w(t,e){t&1&&i(0,"router-outlet")}var L=(()=>{let e=class e{constructor(){this.profileLoadingStatus=f.required()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n({type:e,selectors:[["profile-wrapper"]],inputs:{profileLoadingStatus:[l.SignalBased,"profileLoadingStatus"]},standalone:!0,features:[r],decls:2,vars:1,template:function(o,p){o&1&&c(0,P,1,0,"spinner")(1,w,1,0),o&2&&m(0,p.profileLoadingStatus().loading?0:1)},dependencies:[h,C],styles:["[_nghost-%COMP%]{display:flex;flex:1;flex-direction:column}"],changeDetection:0});let t=e;return t})();var k=(()=>{let e=class e{constructor(){this.store=s(y),this.profileLoadingStatus$=this.store.select(D.profile.loadingStatus)}ngOnInit(){this.store.dispatch(v.getProfile.requested())}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n({type:e,selectors:[["profile-wrapper-container"]],standalone:!0,features:[r],decls:2,vars:3,consts:[[3,"profileLoadingStatus"]],template:function(o,p){o&1&&(i(0,"profile-wrapper",0),u(1,"async")),o&2&&d("profileLoadingStatus",g(1,1,p.profileLoadingStatus$))},dependencies:[S,L],encapsulation:2,changeDetection:0});let t=e;return t})();export{k as default};