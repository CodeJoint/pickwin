!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["each-my-quiniela"]=a({1:function(a,n,l,e,i){return"quiniela_open"},3:function(a,n,l,e,i){return"quiniela_live"},5:function(a,n,l,e,i){return"quiniela_closed"},7:function(a,n,l,e,i){var r;return'					<img src="'+a.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:l.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):r))+'images/linea.png">\n'},9:function(a,n,l,e,i){var r;return'					<img src="'+a.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:l.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):r))+'images/natural.png">\n'},11:function(a,n,l,e,i){var r;return'					<span class="limite">Limitado a '+a.escapeExpression((r=null!=(r=l.max_entries||(null!=n?n.max_entries:n))?r:l.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"max_entries",hash:{},data:i}):r))+" entradas</span>\n"},13:function(a,n,l,e,i){var r;return'					<img src="'+a.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:l.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):r))+'images/billecoin.png">\n'},15:function(a,n,l,e,i){var r;return'					<img src="'+a.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:l.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):r))+'images/pickcoin.png">\n'},17:function(a,n,l,e,i){var r;return'					<img src="'+a.escapeExpression((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:l.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):r))+'images/garantizado.png">\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,i){var r,o,t,c=null!=n?n:{},s=l.helperMissing,u="function",p=l.blockHelperMissing,f=a.escapeExpression,_='	<div class="quiniela\n				';return o=null!=(o=l.upcoming||(null!=n?n.upcoming:n))?o:s,t={name:"upcoming",hash:{},fn:a.program(1,i,0),inverse:a.noop,data:i},r=typeof o===u?o.call(c,t):o,l.upcoming||(r=p.call(n,r,t)),null!=r&&(_+=r),_+=" \n				",o=null!=(o=l.live||(null!=n?n.live:n))?o:s,t={name:"live",hash:{},fn:a.program(3,i,0),inverse:a.noop,data:i},r=typeof o===u?o.call(c,t):o,l.live||(r=p.call(n,r,t)),null!=r&&(_+=r),_+=" \n				",o=null!=(o=l.closed||(null!=n?n.closed:n))?o:s,t={name:"closed",hash:{},fn:a.program(5,i,0),inverse:a.noop,data:i},r=typeof o===u?o.call(c,t):o,l.closed||(r=p.call(n,r,t)),null!=r&&(_+=r),_+=" soccer\n				"+f((o=null!=(o=l.point_format||(null!=n?n.point_format:n))?o:s,typeof o===u?o.call(c,{name:"point_format",hash:{},data:i}):o))+' garantizado clearfix">\n		<a class="link_wrapper" href="">\n		<div class="quiniela_header clearfix">\n			<div class="quiniela_iconos clearfix">\n'+(null!=(r=(l.if_eq||n&&n.if_eq||s).call(c,null!=n?n.point_format:n,"line",{name:"if_eq",hash:{},fn:a.program(7,i,0),inverse:a.noop,data:i}))?r:"")+(null!=(r=(l.if_eq||n&&n.if_eq||s).call(c,null!=n?n.point_format:n,"natural",{name:"if_eq",hash:{},fn:a.program(9,i,0),inverse:a.noop,data:i}))?r:"")+'				<img src="'+f((o=null!=(o=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?o:s,typeof o===u?o.call(c,{name:"cordova_full_path",hash:{},data:i}):o))+"images/"+f(a.lambda(null!=(r=null!=n?n.sport:n)?r.icon:r,n))+'.png">\n			</div><!-- iconos -->\n			<h2>'+f((o=null!=(o=l.name_replaced||(null!=n?n.name_replaced:n))?o:s,typeof o===u?o.call(c,{name:"name_replaced",hash:{},data:i}):o))+'</h2>\n		</div><!-- quiniela_header -->\n		<div class="quiniela_content clearfix">\n			<div class="quiniela_info clearfix">\n				<span class="registros">REG: '+f((o=null!=(o=l.entry_count||(null!=n?n.entry_count:n))?o:s,typeof o===u?o.call(c,{name:"entry_count",hash:{},data:i}):o))+'</span>\n				<span class="cierre">CIERRE: '+f((l.formatDate||n&&n.formatDate||s).call(c,null!=n?n.deadline_tz:n,{name:"formatDate",hash:{},data:i}))+"</span>\n",o=null!=(o=l.limited_capacity||(null!=n?n.limited_capacity:n))?o:s,t={name:"limited_capacity",hash:{},fn:a.program(11,i,0),inverse:a.noop,data:i},r=typeof o===u?o.call(c,t):o,l.limited_capacity||(r=p.call(n,r,t)),null!=r&&(_+=r),_+'			</div><!-- quiniela_info -->\n			<div class="quiniela_entrada clearfix">\n				<span class="titulo">ENTRADA</span>\n'+(null!=(r=(l.if_eq||n&&n.if_eq||s).call(c,null!=n?n.entry_currency:n,"real",{name:"if_eq",hash:{},fn:a.program(13,i,0),inverse:a.noop,data:i}))?r:"")+(null!=(r=(l.if_eq||n&&n.if_eq||s).call(c,null!=n?n.entry_currency:n,"pickcoin",{name:"if_eq",hash:{},fn:a.program(15,i,0),inverse:a.noop,data:i}))?r:"")+'				<span class="number">$'+f((l.formatCurrency||n&&n.formatCurrency||s).call(c,null!=n?n.entry_fee:n,{name:"formatCurrency",hash:{},data:i}))+'</span>\n			</div>\n			<div class="quiniela_aganar clearfix">\n				<span class="titulo">BOLSA</span>\n'+(null!=(r=l["if"].call(c,null!=n?n.guaranteed_prize:n,{name:"if",hash:{},fn:a.program(17,i,0),inverse:a.noop,data:i}))?r:"")+'				<span class="number">$'+f((l.formatCurrency||n&&n.formatCurrency||s).call(c,null!=n?n.available:n,{name:"formatCurrency",hash:{},data:i}))+"</span>\n			</div>\n		</div><!-- quiniela_content -->\n		</a><!-- link_wrapper -->				\n	</div><!-- quiniela -->"},useData:!0})}();