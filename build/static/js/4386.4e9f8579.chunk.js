"use strict";(self.webpackChunktest_nft_project_thirdweb=self.webpackChunktest_nft_project_thirdweb||[]).push([[4386],{24386:function(t,e,r){r.r(e),r.d(e,{MarketplaceV3:function(){return h}});var i=r(74165),n=r(15861),a=r(15671),s=r(43144),c=r(56986),o=r(63210),h=(r(64166),r(79955),r(87962),r(86168),r(7605),r(60862),r(89806),function(){function t(e,r,i){(0,a.Z)(this,t);var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.c$(e,r,s,n);(0,c._)(this,"abi",void 0),(0,c._)(this,"contractWrapper",void 0),(0,c._)(this,"storage",void 0),(0,c._)(this,"encoder",void 0),(0,c._)(this,"events",void 0),(0,c._)(this,"estimator",void 0),(0,c._)(this,"platformFees",void 0),(0,c._)(this,"metadata",void 0),(0,c._)(this,"app",void 0),(0,c._)(this,"roles",void 0),(0,c._)(this,"interceptor",void 0),(0,c._)(this,"_chainId",void 0),this._chainId=h,this.abi=o.e.parse(s||[]),this.contractWrapper=p,this.storage=i,this.metadata=new o.ai(this.contractWrapper,o.d2,this.storage),this.app=new o.aW(this.contractWrapper,this.metadata,this.storage),this.roles=new o.aj(this.contractWrapper,t.contractRoles),this.encoder=new o.ah(this.contractWrapper),this.estimator=new o.aO(this.contractWrapper),this.events=new o.aP(this.contractWrapper),this.platformFees=new o.aR(this.contractWrapper),this.interceptor=new o.aQ(this.contractWrapper)}return(0,s.Z)(t,[{key:"directListings",get:function(){return(0,o.bN)(this.detectDirectListings(),o.d3)}},{key:"englishAuctions",get:function(){return(0,o.bN)(this.detectEnglishAuctions(),o.d4)}},{key:"offers",get:function(){return(0,o.bN)(this.detectOffers(),o.d5)}},{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"prepare",value:function(){var t=(0,n.Z)((0,i.Z)().mark((function t(e,r,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,i){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,n.Z)((0,i.Z)().mark((function t(e,r,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(e,r,n));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,i){return t.apply(this,arguments)}}()},{key:"detectDirectListings",value:function(){if((0,o.bO)(this.contractWrapper,"DirectListings"))return new o.aK(this.contractWrapper,this.storage)}},{key:"detectEnglishAuctions",value:function(){if((0,o.bO)(this.contractWrapper,"EnglishAuctions"))return new o.aL(this.contractWrapper,this.storage)}},{key:"detectOffers",value:function(){if((0,o.bO)(this.contractWrapper,"Offers"))return new o.aM(this.contractWrapper,this.storage)}}]),t}());(0,c._)(h,"contractRoles",["admin","lister","asset"])}}]);