!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["other-entries"]=n({1:function(n,e,l,t,a,r,i){var o,s,u,c=n.lambda,h=n.escapeExpression,p=null!=e?e:{},m=l.helperMissing,d="function",f=l.blockHelperMissing,v='\t<form id="pickActionsForm" action="" method="POST">\n\t\t<select onchange="return app.render_detail(\'detail-quiniela.html?id=\'+$(this).val()+\'&entry='+h(c(null!=(o=null!=e?e.entry:e)?o.pool_id:o,e))+"', "+h(c(null!=(o=null!=e?e.entry:e)?o.pool_id:o,e))+', \'live\', $(this).val() );" id="select_other_entries" class="unique" name="select_other_entries">\n\t\t\t<option value="">Mis registros</option>\n';return s=null!=(s=l.entry||(null!=e?e.entry:e))?s:m,u={name:"entry",hash:{},fn:n.program(2,a,0,r,i),inverse:n.noop,data:a},o=typeof s===d?s.call(p,u):s,l.entry||(o=f.call(e,o,u)),null!=o&&(v+=o),s=null!=(s=l.other_entries||(null!=e?e.other_entries:e))?s:m,u={name:"other_entries",hash:{},fn:n.program(4,a,0,r,i),inverse:n.noop,data:a},o=typeof s===d?s.call(p,u):s,l.other_entries||(o=f.call(e,o,u)),null!=o&&(v+=o),v+"\t\t</select>\n\t</form>\n"},2:function(n,e,l,t,a,r,i){var o,s,u=null!=e?e:{},c=l.helperMissing,h="function",p=n.escapeExpression;return'\t\t\t\t<option value="'+p((s=null!=(s=l.id||(null!=e?e.id:e))?s:c,typeof s===h?s.call(u,{name:"id",hash:{},data:a}):s))+'" selected>Postura '+p((s=null!=(s=l.number||(null!=e?e.number:e))?s:c,typeof s===h?s.call(u,{name:"number",hash:{},data:a}):s))+"/"+p((l.inc||e&&e.inc||c).call(u,null!=(o=null!=i[1]?i[1].other_entries:i[1])?o.length:o,{name:"inc",hash:{},data:a}))+"</option>\n"},4:function(n,e,l,t,a,r,i){var o,s,u=null!=e?e:{},c=l.helperMissing,h="function",p=n.escapeExpression;return'\t\t\t\t<option value="'+p((s=null!=(s=l.id||(null!=e?e.id:e))?s:c,typeof s===h?s.call(u,{name:"id",hash:{},data:a}):s))+'">Postura '+p((s=null!=(s=l.number||(null!=e?e.number:e))?s:c,typeof s===h?s.call(u,{name:"number",hash:{},data:a}):s))+"/"+p((l.inc||e&&e.inc||c).call(u,null!=(o=null!=i[1]?i[1].other_entries:i[1])?o.length:o,{name:"inc",hash:{},data:a}))+"</option>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,l,t,a,r,i){var o;return null!=(o=l.if.call(null!=e?e:{},null!=e?e.other_entries:e,{name:"if",hash:{},fn:n.program(1,a,0,r,i),inverse:n.noop,data:a}))?o:""},useData:!0,useDepths:!0})}();