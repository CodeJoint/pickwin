!function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["header"]=t({1:function(t,a,l,n,e){var r;return'\t\t\t\t\t\t<div class="avatar_container">\n\t\t\t\t\t\t\t<img src="'+t.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?r:l.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"cordova_full_path",hash:{},data:e}):r))+'images/profile_placeholder.png">\n\t\t\t\t\t\t</div>\n'},3:function(t,a,l,n,e,r,o){var s,c=t.lambda,i=t.escapeExpression;return'\t\t\t\t\t\t<div class="avatar_container">\n\t\t\t\t\t\t\t<img src="'+i(c(null!=(s=null!=o[1]?o[1].me:o[1])?s.avatar_dir:s,a))+i(c(null!=(s=null!=o[1]?o[1].me:o[1])?s.avatar:s,a))+'">\n\t\t\t\t\t\t</div>\n'},5:function(t,a,l,n,e){var r;return'\t\t\t\t<div class="header_logout" id="logoutComponent">\n\t\t\t\t\t<h4>Salir</h4>\n\t\t\t\t\t<img src="'+t.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?r:l.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"cordova_full_path",hash:{},data:e}):r))+'images/error.png">\n\t\t\t\t</div>\n'},compiler:[7,">= 4.0.0"],main:function(t,a,l,n,e,r,o){var s,c,i,u=null!=a?a:{},d=l.helperMissing,h="function",p=t.escapeExpression,f=t.lambda,m=l.blockHelperMissing,v='\n\t<div id="theHeader" class="header clearfix">\n\t\t<div class="header_left">\n\t\t\t<a class="hook" data-resource="lobby" href="lobby.html">\n\t\t\t\t<img src="'+p((c=null!=(c=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?c:d,typeof c===h?c.call(u,{name:"cordova_full_path",hash:{},data:e}):c))+'images/logo.png">\n\t\t\t</a>\n\t\t</div>\n\t\t<div class="header_right clearfix">\n\t\t\t<div class="header_user_info clearfix">\n\t\t\t\t<div class="user_info clearfix hook">\n'+(null!=(s=m.call(a,f(null!=(s=null!=a?a.me:a)?s.avatar:s,a),{name:"me.avatar",hash:{},fn:t.noop,inverse:t.program(1,e,0,r,o),data:e}))?s:"")+(null!=(s=m.call(a,f(null!=(s=null!=a?a.me:a)?s.avatar:s,a),{name:"me.avatar",hash:{},fn:t.program(3,e,0,r,o),inverse:t.noop,data:e}))?s:"")+'\t\t\t\t\t<h2><a class="hook" data-resource="profile-methods" href="profile.html">'+p(f(null!=(s=null!=a?a.me:a)?s.nick:s,a))+'</a></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="user_money clearfix">\n\t\t\t\t\t<div class="money_pesos clearfix">\n\t\t\t\t\t\t<img src="'+p((c=null!=(c=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?c:d,typeof c===h?c.call(u,{name:"cordova_full_path",hash:{},data:e}):c))+'images/billete.png">\n\t\t\t\t\t\t<span class="money_ammount">$'+p((l.formatCurrency||a&&a.formatCurrency||d).call(u,null!=(s=null!=a?a.me:a)?s.balanceReal:s,{name:"formatCurrency",hash:{},data:e}))+'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div class="money_pickcoins clearfix">\n\t\t\t\t\t\t<img src="'+p((c=null!=(c=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?c:d,typeof c===h?c.call(u,{name:"cordova_full_path",hash:{},data:e}):c))+'images/pickcoin.png">\n\t\t\t\t\t\t<span class="money_ammount">'+p((l.formatCurrency||a&&a.formatCurrency||d).call(u,null!=(s=null!=a?a.me:a)?s.balancePc:s,{name:"formatCurrency",hash:{},data:e}))+" ($"+p((l.coinToPeso||a&&a.coinToPeso||d).call(u,null!=(s=null!=a?a.me:a)?s.balancePc:s,{name:"coinToPeso",hash:{},data:e}))+' MXP)</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div><!-- header_user_info -->\n\t\t\t<div class="header_filtros" id="filterComponent">\n\t\t\t\t<h4>FILTROS</h4>\n\t\t\t\t<img src="'+p((c=null!=(c=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?c:d,typeof c===h?c.call(u,{name:"cordova_full_path",hash:{},data:e}):c))+'images/filtros.png">\n\t\t\t</div>\n';return c=null!=(c=l.selected_profile||(null!=a?a.selected_profile:a))?c:d,i={name:"selected_profile",hash:{},fn:t.program(5,e,0,r,o),inverse:t.noop,data:e},s=typeof c===h?c.call(u,i):c,l.selected_profile||(s=m.call(a,s,i)),null!=s&&(v+=s),v+"\t\t</div>\n\t</div><!-- header -->\n"},useData:!0,useDepths:!0})}();