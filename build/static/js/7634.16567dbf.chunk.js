"use strict";(self.webpackChunktest_nft_project_thirdweb=self.webpackChunktest_nft_project_thirdweb||[]).push([[7634],{47634:function(e,t,n){n.r(t),n.d(t,{walletConnect:function(){return y}});var i=n(1413),a=n(74165),r=n(15861),o=n(15671),c=n(43144),s=n(97326),l=n(60136),u=n(29388),h=n(83599),d=n(40744),v=n(69193),b=n(65394),p=n(95271),f=(n(52134),n(89304),new WeakMap),w=new WeakMap,Z=new WeakMap,_=new WeakMap,k=new WeakMap,m=new WeakMap,W=new WeakMap,g=new WeakMap,C=new WeakSet,M=new WeakSet,j=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(e){var n;return(0,o.Z)(this,i),n=t.call(this,(null===e||void 0===e?void 0:e.walletId)||i.id,e),(0,h._)((0,s.Z)(n),M),(0,h._)((0,s.Z)(n),C),(0,v._)((0,s.Z)(n),f,{writable:!0,value:void 0}),(0,v._)((0,s.Z)(n),w,{writable:!0,value:void 0}),(0,d._)((0,s.Z)(n),"connector",void 0),(0,d._)((0,s.Z)(n),"projectId",void 0),(0,d._)((0,s.Z)(n),"qrcode",void 0),(0,v._)((0,s.Z)(n),Z,{writable:!0,value:function(e){if(e)throw e}}),(0,v._)((0,s.Z)(n),_,{writable:!0,value:function(e){if((0,v.a)((0,s.Z)(n),w,e.provider),!(0,v.b)((0,s.Z)(n),w))throw new Error("WalletConnect provider not found after connecting.")}}),(0,v._)((0,s.Z)(n),k,{writable:!0,value:function(){(0,h.a)((0,s.Z)(n),M,I).call((0,s.Z)(n))}}),(0,v._)((0,s.Z)(n),m,{writable:!0,value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.chain||t.account;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,v._)((0,s.Z)(n),W,{writable:!0,value:function(e){if("display_uri"===e.type)n.emit("open_wallet",e.data)}}),(0,v._)((0,s.Z)(n),g,{writable:!0,value:function(){n.emit("open_wallet")}}),n.projectId=(null===e||void 0===e?void 0:e.projectId)||"145769e410f16970a79ff77b2d89a1e0",n.qrcode=!1!==(null===e||void 0===e?void 0:e.qrcode),n}return(0,c.Z)(i,[{key:"walletName",get:function(){return"WalletConnect"}},{key:"getConnector",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.connector){e.next=15;break}return e.next=3,n.e(5334).then(n.bind(n,65334));case 3:return t=e.sent,i=t.WalletConnectConnector,(0,v.a)(this,f,new i({chains:this.chains,options:{qrcode:this.qrcode,projectId:this.projectId,dappMetadata:this.dappMetadata,storage:this.walletStorage}})),this.connector=new b.W((0,v.b)(this,f)),e.t0=v.a,e.t1=this,e.t2=w,e.next=12,(0,v.b)(this,f).getProvider();case 12:e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),(0,h.a)(this,C,q).call(this);case 15:return e.abrupt("return",this.connector);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),i}(p.a);function q(){var e;(0,v.b)(this,f)&&((0,h.a)(this,M,I).call(this),(0,v.b)(this,f).on("connect",(0,v.b)(this,_)),(0,v.b)(this,f).on("disconnect",(0,v.b)(this,k)),(0,v.b)(this,f).on("change",(0,v.b)(this,m)),(0,v.b)(this,f).on("message",(0,v.b)(this,W)),null===(e=(0,v.b)(this,w))||void 0===e||e.signer.client.on("session_request_sent",(0,v.b)(this,g)))}function I(){var e;(0,v.b)(this,f)&&((0,v.b)(this,f).removeListener("connect",(0,v.b)(this,_)),(0,v.b)(this,f).removeListener("disconnect",(0,v.b)(this,k)),(0,v.b)(this,f).removeListener("change",(0,v.b)(this,m)),(0,v.b)(this,f).removeListener("message",(0,v.b)(this,W)),null===(e=(0,v.b)(this,w))||void 0===e||e.signer.client.removeListener("session_request_sent",(0,v.b)(this,g)))}(0,d._)(j,"id","walletConnect"),(0,d._)(j,"meta",{name:"WalletConnect",iconURL:"ipfs://QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg"});var y=function(e){var t=(null===e||void 0===e?void 0:e.projectId)||"145769e410f16970a79ff77b2d89a1e0";return{id:j.id,meta:j.meta,create:function(e){return new j((0,i.Z)((0,i.Z)({},e),{},{qrcode:!0,projectId:t}))}}}}}]);