!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["my-lobby"]=a({1:function(a,n,l,e,r){var t;return null!=(t=a.invokePartial(e["each-my-quiniela"],n,{name:"each-my-quiniela",data:r,indent:"\t\t",helpers:l,partials:e,decorators:a.decorators}))?t:""},3:function(a,n,l,e,r){return"\t\t<h3>Creadas por mi</h3>\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,r){var t,o=a.lambda,s=l.blockHelperMissing;return(null!=(t=s.call(n,o(null!=(t=null!=n?n.data:n)?t.entries:t,n),{name:"data.entries",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?t:"")+"\n"+(null!=(t=l.if.call(null!=n?n:{},null!=(t=null!=n?n.data:n)?t.mypools:t,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.noop,data:r}))?t:"")+(null!=(t=s.call(n,o(null!=(t=null!=n?n.data:n)?t.mypools:t,n),{name:"data.mypools",hash:{},fn:a.program(1,r,0),inverse:a.noop,data:r}))?t:"")+"\n"},usePartial:!0,useData:!0})}();