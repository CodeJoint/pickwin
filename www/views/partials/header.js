!function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["header"]=t({1:function(t,a,l,n,e){var r;return'\t\t\t\t\t\t\t<div class="avatar_container">\n\t\t\t\t\t\t\t\t<img src="'+t.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?r:l.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"cordova_full_path",hash:{},data:e}):r))+'images/profile_placeholder.png">\n\t\t\t\t\t\t\t</div>\n'},3:function(t,a,l,n,e,r,s){var o,c=t.lambda,i=t.escapeExpression;return'\t\t\t\t\t\t\t<div class="avatar_container">\n\t\t\t\t\t\t\t\t<img src="'+i(c(null!=(o=null!=s[1]?s[1].me:s[1])?o.avatar_dir:o,a))+i(c(null!=(o=null!=s[1]?s[1].me:s[1])?o.avatar:o,a))+'">\n\t\t\t\t\t\t\t</div>\n'},5:function(t,a,l,n,e){var r;return'\t\t\t\t\t<div class="header_filtros">\n\t\t\t\t\t\t<h4>FILTROS</h4>\n\t\t\t\t\t\t<img src="'+t.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?r:l.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"cordova_full_path",hash:{},data:e}):r))+'images/filtros.png">\n\t\t\t\t\t</div>\n'},compiler:[7,">= 4.0.0"],main:function(t,a,l,n,e,r,s){var o,c,i,u=null!=a?a:{},d=l.helperMissing,p="function",h=t.escapeExpression,m=t.lambda,v=l.blockHelperMissing,f='\t<div class="header clearfix">\n\t\t<div class="content clearfix">\n\t\t\t<div class="header_left">\n\t\t\t\t<a class="hook" data-resource="lobby" href="lobby.html">\n\t\t\t\t\t<img src="'+h((c=null!=(c=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?c:d,typeof c===p?c.call(u,{name:"cordova_full_path",hash:{},data:e}):c))+'images/logo.png">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class="header_right clearfix">\n\t\t\t\t<div class="header_user_info clearfix">\n\t\t\t\t\t<div class="user_info clearfix">\n'+(null!=(o=v.call(a,m(null!=(o=null!=a?a.me:a)?o.avatar:o,a),{name:"me.avatar",hash:{},fn:t.noop,inverse:t.program(1,e,0,r,s),data:e}))?o:"")+(null!=(o=v.call(a,m(null!=(o=null!=a?a.me:a)?o.avatar:o,a),{name:"me.avatar",hash:{},fn:t.program(3,e,0,r,s),inverse:t.noop,data:e}))?o:"")+"\t\t\t\t\t\t<h2>"+h(m(null!=(o=null!=a?a.me:a)?o.nick:o,a))+'</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="user_money clearfix">\n\t\t\t\t\t\t<div class="money_pesos clearfix">\n\t\t\t\t\t\t\t<img src="'+h((c=null!=(c=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?c:d,typeof c===p?c.call(u,{name:"cordova_full_path",hash:{},data:e}):c))+'images/billete.png">\n\t\t\t\t\t\t\t<span class="money_ammount">$'+h((l.formatCurrency||a&&a.formatCurrency||d).call(u,null!=(o=null!=a?a.me:a)?o.balancePc:o,{name:"formatCurrency",hash:{},data:e}))+'</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="money_pickcoins clearfix">\n\t\t\t\t\t\t\t<img src="'+h((c=null!=(c=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?c:d,typeof c===p?c.call(u,{name:"cordova_full_path",hash:{},data:e}):c))+'images/pickcoin.png">\n\t\t\t\t\t\t\t<span class="money_ammount">'+h((l.formatCurrency||a&&a.formatCurrency||d).call(u,null!=(o=null!=a?a.me:a)?o.balanceReal:o,{name:"formatCurrency",hash:{},data:e}))+"</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!-- header_user_info -->\n";return c=null!=(c=l.selected_lobby||(null!=a?a.selected_lobby:a))?c:d,i={name:"selected_lobby",hash:{},fn:t.program(5,e,0,r,s),inverse:t.noop,data:e},o=typeof c===p?c.call(u,i):c,l.selected_lobby||(o=v.call(a,o,i)),null!=o&&(f+=o),f+"\t\t\t</div>\n\t\t</div><!-- content -->\n\t</div><!-- header -->"},useData:!0,useDepths:!0})}();