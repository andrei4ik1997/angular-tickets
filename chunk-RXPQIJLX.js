import{a as x}from"./chunk-VSLIUKNT.js";import{a as S}from"./chunk-7GWNW4KD.js";import{k as A}from"./chunk-HMMVWGZI.js";import{a as G,b as O,c as j,d as H,e as N,f as z}from"./chunk-TQ2B365T.js";import{o as $}from"./chunk-UWIVEJDG.js";import{o as q}from"./chunk-QRCF3VGL.js";import{Cb as V,Eb as d,Ha as M,Ia as w,Ib as D,Jb as L,Kb as E,Lb as P,Mb as o,Nb as l,Ob as b,Qa as T,Ra as y,Sb as F,Ub as m,Vb as f,dc as c,ec as B,fc as g,gc as k,ic as C,kb as p,mc as v,nc as _,pa as I,va as h,wa as u}from"./chunk-YU5TMQCC.js";import"./chunk-SIAVTO45.js";var J=[{value:"mogilev",viewValue:"Mogilev"},{value:"minsk",viewValue:"Minsk"},{value:"gomel",viewValue:"Gomel"},{value:"grodno",viewValue:"Grodno"},{value:"vitebsk",viewValue:"Vitebsk"},{value:"brest",viewValue:"Brest"}];function U(n,t){n&1&&b(0,"no-data")}function W(n,t){if(n&1&&(o(0,"option",1),c(1),l()),n&2){let r,i=t.$implicit,e=f(2);d("value",i.value)("selected",((r=e.profile())==null?null:r.city)===i.value),p(),g(" ",i.viewValue," ")}}function X(n,t){if(n&1){let r=F();o(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),c(3),l(),o(4,"mat-card-subtitle"),c(5),l()(),o(6,"mat-card-content")(7,"p"),c(8),l(),o(9,"p"),c(10),l(),o(11,"p"),c(12," City: "),o(13,"select",0),m("change",function(e){M(r);let a=f();return w(a.changeCity(e))}),E(14,W,2,3,"option",1,L),l()()()()}if(n&2){let r,i,e,a,s=f();p(3),k("",(r=s.profile())==null?null:r.name," ",(r=s.profile())==null?null:r.surname,""),p(2),B((i=s.profile())==null?null:i.birthday),p(3),g("Id: ",(e=s.profile())==null?null:e.id,""),p(2),g("Login: ",(a=s.profile())==null?null:a.login,""),p(3),d("disabled",s.changeCityLoadingStatus().loading),p(),P(s.cities)}}var K=(()=>{let t=class t{constructor(){this.profile=y.required(),this.changeCityLoadingStatus=y.required(),this.cityChanged=T(),this.cities=J}changeCity(i){i.preventDefault();let e=i.target;this.cityChanged.emit(e.value)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u({type:t,selectors:[["profile"]],inputs:{profile:[h.SignalBased,"profile"],changeCityLoadingStatus:[h.SignalBased,"changeCityLoadingStatus"]},outputs:{cityChanged:"cityChanged"},standalone:!0,features:[C],decls:2,vars:1,consts:[["required","",3,"change","disabled"],[3,"value","selected"]],template:function(e,a){e&1&&V(0,U,1,0,"no-data")(1,X,16,6),e&2&&D(0,a.profile()?1:0)},dependencies:[z,G,j,N,H,O,A],styles:["[_nghost-%COMP%]{display:flex;flex:1;flex-direction:column}"],changeDetection:0});let n=t;return n})();var ge=(()=>{let t=class t{constructor(){this.store=I($),this.profile$=this.store.select(x.profile.data),this.changeCityLoadingStatus$=this.store.select(x.profile.changeCityLoadingStatus)}ngOnInit(){this.store.dispatch(S.getProfile.requested())}cityChanged(i){this.store.dispatch(S.changeCity.requested({payload:i}))}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u({type:t,selectors:[["profile-container"]],standalone:!0,features:[C],decls:3,vars:6,consts:[[3,"cityChanged","profile","changeCityLoadingStatus"]],template:function(e,a){e&1&&(o(0,"profile",0),v(1,"async"),v(2,"async"),m("cityChanged",function(Q){return a.cityChanged(Q)}),l()),e&2&&d("profile",_(1,2,a.profile$))("changeCityLoadingStatus",_(2,4,a.changeCityLoadingStatus$))},dependencies:[q,K],encapsulation:2,changeDetection:0});let n=t;return n})();export{ge as default};