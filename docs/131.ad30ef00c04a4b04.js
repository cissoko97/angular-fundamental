"use strict";(self.webpackChunkpokemonApp=self.webpackChunkpokemonApp||[]).push([[131],{6131:(q,d,a)=>{a.r(d),a.d(d,{ProfileModule:()=>F});var p=a(6248),r=a(7537),e=a(3556),c=a(4525),u=a(6019);function v(l,s){1&l&&(e.TgZ(0,"span",13),e._uU(1," Please choose a username. "),e.qZA())}function Z(l,s){1&l&&(e.TgZ(0,"span",13),e._uU(1," Please choose a username. "),e.qZA())}const f=function(l){return{"form-control":!0,"is-invalid":l}};function h(l,s){1&l&&(e.TgZ(0,"em",16),e._uU(1," Please choose a username. "),e.qZA())}function C(l,s){1&l&&(e.TgZ(0,"em",16),e._uU(1," Please choose a username. "),e.qZA())}const g=function(l){return{"form-control":!0,"is-invalid":l}},T=[{path:"new",component:(()=>{class l{constructor(n,o,t){this.fb=n,this.authService=o,this.router=t,this.loginMouseOver=!1}ngOnInit(){const n=this.authService.currentUser;this.profileForm=this.fb.group({firstname:[{value:(null==n?void 0:n.username)||null,disabled:!1},[r.kI.required,r.kI.maxLength(10)]],lastname:[{value:(null==n?void 0:n.lastname)||null,disabled:!1},[r.kI.required,r.kI.maxLength(10)]]})}updateProfil(n){console.log(n)}mouseEvent(n,o){this.loginMouseOver=o}cancel(){this.router.navigate(["/user"])}validateFirstName(){var n,o;return(null===(n=this.profileForm.get("firstname"))||void 0===n?void 0:n.valid)||(null===(o=this.profileForm.get("firstname"))||void 0===o?void 0:o.untouched)}validateLastName(){var n,o;return(null===(n=this.profileForm.get("lastname"))||void 0===n?void 0:n.valid)||(null===(o=this.profileForm.get("lastname"))||void 0===o?void 0:o.untouched)}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(r.qu),e.Y36(c.e),e.Y36(p.F0))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-profile-create"]],decls:26,vars:19,consts:[[1,"mt-3"],[1,"col-md-6"],["autocomplete","off","novalidate","",3,"formGroup","ngSubmit"],[1,"form-floating","mb-3"],["id","firstname","formControlName","firstname","type","text","placeholder","User Name...",3,"ngClass"],["for","userName",1,"form-label"],["class","invalid-feedback",4,"ngIf"],["id","lastname","formControlName","lastname","type","text","placeholder","lastname...",3,"ngClass"],["for","password",1,"form-label"],[1,"footer-btn"],[3,"mouseenter","mouseleave"],["type","submit",1,"btn","btn-outline-success",3,"disabled"],["type","reset",1,"btn","btn-outline-danger",3,"click"],[1,"invalid-feedback"]],template:function(n,o){1&n&&(e.TgZ(0,"h3",0),e._uU(1),e.ALo(2,"titlecase"),e.ALo(3,"titlecase"),e.qZA(),e._UZ(4,"hr"),e.TgZ(5,"div",1),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return o.updateProfil(o.profileForm.value)}),e.TgZ(7,"div",3),e._UZ(8,"input",4),e.TgZ(9,"label",5),e._uU(10,"User name"),e.qZA(),e.YNc(11,v,2,0,"span",6),e.qZA(),e.TgZ(12,"div",3),e._UZ(13,"input",7),e.TgZ(14,"label",8),e._uU(15,"Password"),e.qZA(),e.YNc(16,Z,2,0,"span",6),e.qZA(),e.TgZ(17,"div",9),e.TgZ(18,"span",10),e.NdJ("mouseenter",function(i){return o.mouseEvent(i,!0)})("mouseleave",function(i){return o.mouseEvent(i,!1)}),e.TgZ(19,"button",11),e._uU(20,"Login"),e.qZA(),e.qZA(),e.TgZ(21,"button",12),e.NdJ("click",function(){return o.cancel()}),e._uU(22,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"pre"),e._uU(24),e.ALo(25,"json"),e.qZA()),2&n&&(e.xp6(1),e.AsE(" ",e.lcZ(2,9,"profile.new")," ",e.lcZ(3,11,"[create profile]"),"\n"),e.xp6(5),e.Q6J("formGroup",o.profileForm),e.xp6(2),e.Q6J("ngClass",e.VKq(15,f,!o.validateFirstName()||o.loginMouseOver)),e.xp6(3),e.Q6J("ngIf",(null==o.profileForm.controls.username?null:o.profileForm.controls.username.invalid)&&(null==o.profileForm.controls||null==o.profileForm.controls.username?null:o.profileForm.controls.username.touched)),e.xp6(2),e.Q6J("ngClass",e.VKq(17,f,!o.validateLastName()||o.loginMouseOver)),e.xp6(3),e.Q6J("ngIf",(null==o.profileForm.controls||null==o.profileForm.controls.password?null:o.profileForm.controls.password.invalid)&&(null==o.profileForm.controls||null==o.profileForm.controls.password?null:o.profileForm.controls.password.touched)),e.xp6(3),e.Q6J("disabled",o.profileForm.invalid),e.xp6(5),e.Oqu(e.lcZ(25,13,o.profileForm.value)))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,u.mk,u.O5],pipes:[u.rS,u.Ts],encapsulation:2}),l})()},{path:"login",component:(()=>{class l{constructor(n,o){this.authService=n,this.router=o,this.mouseOverLogin=!1,this.username="",this.password=""}ngOnInit(){}submitForm(n){new r.F([],[]),this.authService.loginUser(n),this.router.navigate(["user"])}cancel(){this.router.navigate(["user"])}mouseEvent(n,o){n.preventDefault(),this.mouseOverLogin=o}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(c.e),e.Y36(p.F0))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-login"]],decls:27,vars:12,consts:[[1,"mt-3"],[1,"row"],[1,"col-md-6"],["autocomplete","off","novalidate","",3,"ngSubmit"],["loginForm","ngForm"],[1,"form-floating","mb-3"],["id","userName","required","","name","username","type","text","placeholder","User Name...",3,"ngClass","ngModel"],["for","userName",1,"form-label"],[1,"mb-3"],["class","invalid-feedback",4,"ngIf"],["id","password","required","","name","password","type","password","placeholder","Password...",3,"ngClass","ngModel"],["for","password",1,"form-label"],[1,"footer-btn"],[3,"mouseenter","mouseleave"],["type","submit",1,"btn","btn-outline-success",3,"disabled"],["type","reset",1,"btn","btn-outline-danger",3,"click"],[1,"invalid-feedback"]],template:function(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"h3",0),e._uU(1,"Login"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",1),e.TgZ(4,"div",2),e.TgZ(5,"form",3,4),e.NdJ("ngSubmit",function(){e.CHM(t);const m=e.MAs(6);return o.submitForm(m.value)}),e.TgZ(7,"div",5),e.TgZ(8,"input",6),e.NdJ("ngModel",function(){return o.username}),e.qZA(),e.TgZ(9,"label",7),e._uU(10,"User name "),e.qZA(),e.qZA(),e.TgZ(11,"div",8),e.YNc(12,h,2,0,"em",9),e.qZA(),e.TgZ(13,"div",5),e.TgZ(14,"input",10),e.NdJ("ngModel",function(){return o.password}),e.qZA(),e.TgZ(15,"label",11),e._uU(16,"Password"),e.qZA(),e.qZA(),e.YNc(17,C,2,0,"em",9),e.TgZ(18,"div",12),e.TgZ(19,"span",13),e.NdJ("mouseenter",function(m){return o.mouseEvent(m,!0)})("mouseleave",function(m){return o.mouseEvent(m,!1)}),e.TgZ(20,"button",14),e._uU(21,"Login"),e.qZA(),e.qZA(),e.TgZ(22,"button",15),e.NdJ("click",function(){return o.cancel()}),e._uU(23,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"pre"),e._uU(25),e.ALo(26,"json"),e.qZA(),e.qZA()}if(2&n){const t=e.MAs(6);e.xp6(8),e.Q6J("ngClass",e.VKq(8,g,(null==t.controls.username?null:t.controls.username.invalid)&&((null==t.controls.username?null:t.controls.username.touched)||o.mouseOverLogin))),e.xp6(4),e.Q6J("ngIf",(null==t.controls.username?null:t.controls.username.invalid)&&((null==t.controls.username?null:t.controls.username.touched)||o.mouseOverLogin)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,g,(null==t.controls.password?null:t.controls.password.invalid)&&((null==t.controls.password?null:t.controls.password.touched)||o.mouseOverLogin))),e.xp6(3),e.Q6J("ngIf",(null==t.controls.password?null:t.controls.password.invalid)&&((null==t.controls.password?null:t.controls.password.touched)||o.mouseOverLogin)),e.xp6(3),e.Q6J("disabled",t.invalid),e.xp6(5),e.Oqu(e.lcZ(26,6,t.value))}},directives:[r._Y,r.JL,r.F,r.Fj,r.Q7,u.mk,r.JJ,r.On,u.O5],pipes:[u.Ts],styles:[".footer-btn[_ngcontent-%COMP%]{margin-top:20px}.btn[_ngcontent-%COMP%]{cursor:pointer!important}"]}),l})()}];let b=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[p.Bz.forChild(T)],p.Bz]}),l})();var A=a(1382);let F=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[],imports:[[b,A.m]]}),l})()}}]);