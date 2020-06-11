(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{xBi7:function(e,t,n){"use strict";n.r(t),n.d(t,"ProfileRoutingModule",(function(){return Z}));var c=n("tyNb"),r=n("KS8Z"),i=n("fXoL"),a=n("XNiG"),s=n("7tRE"),o=n("grjN");let d=(()=>{class e{constructor(e){this.httpClient=e}getPendingTransactions(e){return this.httpClient.get(`${s.a.PendingTransactions}/${e}`)}cancelOrder(e){return this.httpClient.put(`${s.a.CancelPendingTransactions}?token=${e}`,null)}confirmPayment(e,t){return this.httpClient.put(`${s.a.ConfirmPendingTransactions}?`+`paymentId=${t.paymentId}&token=${t.token}&`+`PayerID=${t.PayerID}`,JSON.stringify(t))}}return e.\u0275fac=function(t){return new(t||e)(i.jc(o.a))},e.\u0275prov=i.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),g=(()=>{class e{constructor(e){this.pendingTransactionsRepo=e}getPendingTransactions(e){return this.pendingTransactionsRepo.getPendingTransactions(e)}cancelOrder(e){return this.pendingTransactionsRepo.cancelOrder(e)}confirmPayment(e,t){return this.pendingTransactionsRepo.confirmPayment(e,t)}}return e.\u0275fac=function(t){return new(t||e)(i.jc(d))},e.\u0275prov=i.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=n("HaQS");let l=(()=>{class e{constructor(e,t){this.pendingTransactionsManager=e,this.userService=t}getPendingTransactions(){const e=new a.a;return this.userService.isLoggedIn()?this.pendingTransactionsManager.getPendingTransactions(this.userService.getSavedClientId()).subscribe(t=>{e.next(t.Data)},t=>{console.error(t),e.error(t)}):e.error("User Not Logged in!"),e.asObservable()}cancelPendingTransaction(e){const t=new a.a;return this.pendingTransactionsManager.cancelOrder(e).subscribe(()=>{t.next(!0)},e=>{console.error(e),t.error(e)}),t.asObservable()}confirmPayment(e,t){const n=new a.a;return this.pendingTransactionsManager.confirmPayment(e,t).subscribe(e=>{e&&n.next(!0)}),n.asObservable()}}return e.\u0275fac=function(t){return new(t||e)(i.jc(g),i.jc(f.a))},e.\u0275prov=i.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=n("0IaG"),u=n("ofXK"),h=n("oOf3"),m=n("9V/O");function b(e,t){if(1&e&&(i.fc(0,"div",1),i.ac(1,"img",2),i.fc(2,"p"),i.Rc(3),i.ec(),i.ec()),2&e){const e=i.pc();i.Kb(1),i.wc("src",e.paintingData.image,i.Lc),i.Kb(2),i.Sc(e.paintingData.name)}}let v=(()=>{class e{constructor(e){this.paintingService=e}ngOnInit(){console.log("Requesting Painting Id: "+this.orderItem.rowId),this.paintingService.getPainting(this.orderItem.rowId).subscribe(e=>{this.paintingData=e})}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(m.a))},e.\u0275cmp=i.Tb({type:e,selectors:[["app-order-image-card"]],inputs:{orderItem:"orderItem"},decls:1,vars:1,consts:[["class","order-card",4,"ngIf"],[1,"order-card"],["alt","painting image",3,"src"]],template:function(e,t){1&e&&i.Pc(0,b,4,2,"div",0),2&e&&i.wc("ngIf",t.paintingData)},directives:[u.n],styles:[".order-card[_ngcontent-%COMP%]{margin:1rem;flex-basis:100%;display:flex;align-items:center}.order-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:4rem;margin-right:1rem}"]}),e})();function P(e,t){if(1&e&&(i.fc(0,"div"),i.ac(1,"app-order-image-card",10),i.ec()),2&e){const e=t.$implicit;i.Kb(1),i.wc("orderItem",e)}}const y=function(e){return[e,"EUR",!0,void 0,"fr-FR"]};function I(e,t){if(1&e&&(i.fc(0,"tr"),i.fc(1,"td",8),i.Pc(2,P,2,1,"div",6),i.ec(),i.fc(3,"td"),i.Rc(4),i.ec(),i.fc(5,"td"),i.Rc(6),i.qc(7,"currency"),i.ec(),i.fc(8,"td"),i.Rc(9),i.qc(10,"currency"),i.ec(),i.fc(11,"td"),i.Rc(12),i.ec(),i.fc(13,"td"),i.Rc(14),i.ec(),i.fc(15,"td"),i.Rc(16),i.ec(),i.fc(17,"td"),i.Rc(18),i.ec(),i.fc(19,"td"),i.fc(20,"a",9),i.Rc(21," Continue Request "),i.ec(),i.ec(),i.ec()),2&e){const e=t.$implicit;i.Kb(2),i.wc("ngForOf",e.items),i.Kb(2),i.Sc(e.deliveryAddress),i.Kb(2),i.Sc(i.tc(7,8,i.Ac(20,y,e.subtotal))),i.Kb(3),i.Sc(i.tc(10,14,i.Ac(22,y,e.total))),i.Kb(3),i.Sc(e.orderState),i.Kb(2),i.Sc(e.paymentMethod),i.Kb(2),i.Sc(e.shippingState?"On Progress | Shipping":"Pending"),i.Kb(2),i.Sc(e.addingDate.slice(0,10))}}function S(e,t){if(1&e){const e=i.gc();i.fc(0,"div"),i.fc(1,"div",1),i.fc(2,"h1",2),i.Rc(3,"Your Orders"),i.ec(),i.fc(4,"div",3),i.fc(5,"table",4),i.fc(6,"tr",5),i.fc(7,"td"),i.Rc(8,"Items"),i.ec(),i.fc(9,"td"),i.Rc(10,"Delivery Address"),i.ec(),i.fc(11,"td"),i.Rc(12,"Subtotal"),i.ec(),i.fc(13,"td"),i.Rc(14,"Total"),i.ec(),i.fc(15,"td"),i.Rc(16,"Order State"),i.ec(),i.fc(17,"td"),i.Rc(18,"Payment Method"),i.ec(),i.fc(19,"td"),i.Rc(20,"Shipping Statues"),i.ec(),i.fc(21,"td"),i.Rc(22,"Date"),i.ec(),i.fc(23,"td"),i.Rc(24,"Actions"),i.ec(),i.ec(),i.Pc(25,I,22,24,"tr",6),i.qc(26,"paginate"),i.ec(),i.fc(27,"pagination-controls",7),i.nc("pageChange",(function(t){return i.Jc(e),i.pc(2).pageChanged(t)})),i.ec(),i.ec(),i.ec(),i.ec()}if(2&e){const e=i.pc(2);i.Kb(25),i.wc("ngForOf",i.sc(26,1,e.orders,e.config))}}function R(e,t){1&e&&(i.fc(0,"div"),i.fc(1,"div",11),i.fc(2,"div",12),i.Rc(3,"There Isn't Payments To Show"),i.ec(),i.ec(),i.ec())}function T(e,t){if(1&e&&(i.fc(0,"div"),i.Pc(1,S,28,4,"div",0),i.Pc(2,R,4,0,"div",0),i.ec()),2&e){const e=i.pc();i.Kb(1),i.wc("ngIf",0!==e.orders.length),i.Kb(1),i.wc("ngIf",0===e.orders.length)}}function w(e,t){1&e&&(i.fc(0,"div"),i.fc(1,"div",13),i.ac(2,"div"),i.ac(3,"div"),i.ac(4,"div"),i.ac(5,"div"),i.ec(),i.ec())}let O=(()=>{class e{constructor(e,t,n){this.pendingTransactionsService=e,this.userService=t,this.dialog=n}ngOnInit(){this.userService.isLoggedIn()?this.fetchOrders():this.dialog.open(r.a,{height:"100vh"})}fetchOrders(){this.pendingTransactionsService.getPendingTransactions().subscribe(e=>{this.orders=e,console.log(this.orders.length+" Orders Fetched"),this.config={itemsPerPage:5,currentPage:1,totalItems:this.orders.length}})}pageChanged(e){this.config.currentPage=e}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(l),i.Zb(f.a),i.Zb(p.a))},e.\u0275cmp=i.Tb({type:e,selectors:[["app-pending-transactions"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"container-fluid"],[1,"text-center","my-4"],[1,"table-responsive","text-center"],[1,"table","table-bordered","main-table"],[1,"bg-dark","text-white"],[4,"ngFor","ngForOf"],["autoHide","true","maxSize","5","responsive","true","previousLabel","Prev","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",1,"my-pagination",3,"pageChange"],[2,"display","flex","flex-direction","column"],[1,"btn","btn-success","btn-sm","mr-1","mb-1","text-light"],[3,"orderItem"],[1,"container"],[1,"alert","alert-primary","text-center","mt-5"],[1,"lds-ring"]],template:function(e,t){1&e&&(i.Pc(0,T,3,2,"div",0),i.Pc(1,w,6,0,"div",0)),2&e&&(i.wc("ngIf",null!=t.orders),i.Kb(1),i.wc("ngIf",null==t.orders))},directives:[u.n,u.m,h.c,v],pipes:[h.b,u.d],styles:[""]}),e})();var C=n("iPbm"),x=n("P21N");let K=(()=>{class e{constructor(e,t,n,c,r){this.userService=e,this.activatedRoute=t,this.pendingTransactionService=n,this.router=c,this.dialog=r}ngOnInit(){this.userService.isLoggedIn()?this.activatedRoute.queryParams.subscribe(e=>{this.paymentId=e.paymentId,console.log("PAYMENT: "+this.paymentId),this.token=e.token,console.log("PAYMENT: "+this.token),this.PayerID=e.PayerID,console.log("PAYMENT: "+this.PayerID),console.log("the Queries are: "+JSON.stringify(e)),this.submitOrderConfirmation()}):this.dialog.open(r.a,{height:"80vh"})}submitOrderConfirmation(){this.pendingTransactionService.confirmPayment(this.orderId,{paymentId:this.paymentId,token:this.token,PayerID:this.PayerID}).subscribe(()=>{console.log("Successfully Confirmed Order"),this.router.navigate(["/pending-transactions"])})}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(f.a),i.Zb(c.a),i.Zb(l),i.Zb(c.d),i.Zb(p.a))},e.\u0275cmp=i.Tb({type:e,selectors:[["app-confirm-payment"]],decls:4,vars:0,consts:[[1,"mt-3","w-100","h-100","d-flex","align-items-center","justify-content-center"],["src","/assets/loading.gif","alt","loading"]],template:function(e,t){1&e&&(i.ac(0,"app-header"),i.fc(1,"div",0),i.ac(2,"img",1),i.ec(),i.ac(3,"app-footer"))},directives:[C.a,x.a],styles:["#order-confirmation[_ngcontent-%COMP%]{width:100%;height:80%;display:flex;justify-content:center;align-content:center}"]}),e})(),k=(()=>{class e{constructor(e,t,n){this.activatedRoute=e,this.router=t,this.pendingTransactionService=n}ngOnInit(){this.activatedRoute.queryParamMap.subscribe(e=>{this.pendingTransactionService.cancelPendingTransaction(`${e.get("token")}`).subscribe(e=>{console.log("Success Canceling the Order, Payment didn't get Processed!"),this.router.navigate(["/"])})})}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(c.a),i.Zb(c.d),i.Zb(l))},e.\u0275cmp=i.Tb({type:e,selectors:[["app-cancel-order"]],decls:4,vars:0,consts:[[1,"mt-3","w-100","h-100","d-flex","align-items-center","justify-content-center"],["src","/assets/loading.gif","alt","loading"]],template:function(e,t){1&e&&(i.ac(0,"app-header"),i.fc(1,"div",0),i.ac(2,"img",1),i.ec(),i.ac(3,"app-footer"))},directives:[C.a,x.a],styles:[""]}),e})();var D=n("HKqj");const M=[{path:"login",component:r.a},{path:"pending-transactions",component:O},{path:"successorder",component:K},{path:"canceledorder",component:k}];let Z=(()=>{class e{}return e.\u0275mod=i.Xb({type:e}),e.\u0275inj=i.Wb({factory:function(t){return new(t||e)},imports:[[c.h.forChild(M),D.a],c.h]}),e})()}}]);__GUESS__.p([.33,"7-es2015.6346eb0af4845e6fb2e2.js"],[.33,"8-es2015.803e4c74739bf0d3ec2c.js"]);