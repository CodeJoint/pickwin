!function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["quiniela-games"]=t({1:function(t,a,l,n,i){return"EMP"},3:function(t,a,l,n,i){return"LÍNEA"},5:function(t,a,l,n,i,e,s){var o,p,d,u=null!=a?a:{},r=l.helperMissing,c="function",h=t.escapeExpression,f=l.blockHelperMissing,m=t.lambda,v='\t\t<ul data-id="'+h((p=null!=(p=l.id||(null!=a?a.id:a))?p:r,typeof p===c?p.call(u,{name:"id",hash:{},data:i}):p))+'" class="partido radio_group clearfix">\n\t\t\t<li class="opcion_partido local clearfix">\n';return p=null!=(p=l.finished||(null!=a?a.finished:a))?p:r,d={name:"finished",hash:{},fn:t.noop,inverse:t.program(6,i,0,e,s),data:i},o=typeof p===c?p.call(u,d):p,l.finished||(o=f.call(a,o,d)),null!=o&&(v+=o),v+='\t\t\t\t<div class="check"></div>\t\n\t\t\t\t<label class="local_sel" for="local_'+h((p=null!=(p=l.id||(null!=a?a.id:a))?p:r,typeof p===c?p.call(u,{name:"id",hash:{},data:i}):p))+'" >\n\t\t\t\t\t<img src="'+h((p=null!=(p=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?p:r,typeof p===c?p.call(u,{name:"cordova_full_path",hash:{},data:i}):p))+'images/camisaverde.png">\n\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t<span class="iniciales">'+h(m(null!=(o=null!=a?a.home_team:a)?o.abbreviation:o,a))+'</span>\n\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t</label>\n\t\t\t</li><!-- opcion_partido -->\n\t\t\t<li class="opcion_partido '+(null!=(o=l.if.call(u,null!=(o=null!=s[1]?s[1].data:s[1])?o.sport_allow_ties:o,{name:"if",hash:{},fn:t.program(8,i,0,e,s),inverse:t.noop,data:i}))?o:"")+' cierre clearfix">\n'+(null!=(o=l.if.call(u,null!=(o=null!=s[1]?s[1].data:s[1])?o.sport_allow_ties:o,{name:"if",hash:{},fn:t.program(10,i,0,e,s),inverse:t.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=a?a.advantage:a,{name:"if",hash:{},fn:t.program(12,i,0,e,s),inverse:t.noop,data:i}))?o:"")+"\t\t\t\t<span>Cierre: "+h((l.formatDate||a&&a.formatDate||r).call(u,null!=a?a.deadline:a,"lll",{name:"formatDate",hash:{},data:i}))+'</span>\n\t\t\t</li><!-- opcion_partido -->\n\t\t\t<li class="opcion_partido visitante clearfix">\n',p=null!=(p=l.finished||(null!=a?a.finished:a))?p:r,d={name:"finished",hash:{},fn:t.noop,inverse:t.program(17,i,0,e,s),data:i},o=typeof p===c?p.call(u,d):p,l.finished||(o=f.call(a,o,d)),null!=o&&(v+=o),v+='\t\t\t\t<div class="check"></div>\t\n\t\t\t\t<label class="away_sel" for="away_'+h((p=null!=(p=l.id||(null!=a?a.id:a))?p:r,typeof p===c?p.call(u,{name:"id",hash:{},data:i}):p))+'" >\n\t\t\t\t\t<img src="'+h((p=null!=(p=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?p:r,typeof p===c?p.call(u,{name:"cordova_full_path",hash:{},data:i}):p))+'images/camisaazul.png">\n\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t<span class="iniciales">'+h(m(null!=(o=null!=a?a.away_team:a)?o.abbreviation:o,a))+'</span>\n\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t</label>\t\t\t\t\t\t\n\t\t\t\t<div class="linea">\n',p=null!=(p=l.finished||(null!=a?a.finished:a))?p:r,d={name:"finished",hash:{},fn:t.program(19,i,0,e,s),inverse:t.noop,data:i},o=typeof p===c?p.call(u,d):p,l.finished||(o=f.call(a,o,d)),null!=o&&(v+=o),v+"\t\t\t\t</div><!-- linea -->\n\t\t\t</li><!-- opcion_partido -->\n\t\t</ul>\n\n"},6:function(t,a,l,n,i){var e,s=null!=a?a:{},o=l.helperMissing,p="function",d=t.escapeExpression;return'\t\t\t\t\t<input type="radio" id="local_'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'" name="'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'" value="pick-local-'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'">\n'},8:function(t,a,l,n,i){return" empate "},10:function(t,a,l,n,i){var e,s=null!=a?a:{},o=l.helperMissing,p="function",d=t.escapeExpression;return'\t\t\t\t\t<input type="radio" id="tie_'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'" name="'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'" value="pick-tie-'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'">\n\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t<label class="empate_sel" for="tie_'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'" >\n\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t<span class="iniciales"></span>\n\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t</label>\t\t\n'},12:function(t,a,l,n,i){var e,s=null!=a?a:{},o=l.helperMissing;return'\t\t\t\t\t<span class="linea home">\n'+(null!=(e=(l.if_eq||a&&a.if_eq||o).call(s,null!=a?a.favorite:a,"home",{name:"if_eq",hash:{},fn:t.program(13,i,0),inverse:t.noop,data:i}))?e:"")+'\t\t\t\t\t</span>\n\t\t\t\t\t<span class="linea pd">\n'+(null!=(e=(l.if_eq||a&&a.if_eq||o).call(s,null!=a?a.favorite:a,"pd",{name:"if_eq",hash:{},fn:t.program(15,i,0),inverse:t.noop,data:i}))?e:"")+'\t\t\t\t\t</span>\n\t\t\t\t\t<span class="linea away">\n'+(null!=(e=(l.if_eq||a&&a.if_eq||o).call(s,null!=a?a.favorite:a,"away",{name:"if_eq",hash:{},fn:t.program(13,i,0),inverse:t.noop,data:i}))?e:"")+"\t\t\t\t\t</span>\n\t\t\t\t\t\n"},13:function(t,a,l,n,i){var e;return"\t\t\t\t\t\t\t<p>"+t.escapeExpression((e=null!=(e=l.advantage||(null!=a?a.advantage:a))?e:l.helperMissing,"function"==typeof e?e.call(null!=a?a:{},{name:"advantage",hash:{},data:i}):e))+"</p>\t\t\n"},15:function(t,a,l,n,i){return"\t\t\t\t\t\t\t<p>PD</p>\t\t\n"},17:function(t,a,l,n,i){var e,s=null!=a?a:{},o=l.helperMissing,p="function",d=t.escapeExpression;return'\t\t\t\t\t<input type="radio" id="away_'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'" name="'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'" value="pick-away-'+d((e=null!=(e=l.id||(null!=a?a.id:a))?e:o,typeof e===p?e.call(s,{name:"id",hash:{},data:i}):e))+'">\n'},19:function(t,a,l,n,i){var e;return"\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t"+t.escapeExpression((e=null!=(e=l.score_home||(null!=a?a.score_home:a))?e:l.helperMissing,"function"==typeof e?e.call(null!=a?a:{},{name:"score_home",hash:{},data:i}):e))+"\n\t\t\t\t\t\t</span>\n"},21:function(t,a,l,n,i,e,s){var o;return(null!=(o=l.each.call(null!=a?a:{},null!=a?a.props:a,{name:"each",hash:{},fn:t.program(22,i,0,e,s),inverse:t.noop,data:i}))?o:"")+"\t\t\t\t\n"},22:function(t,a,l,n,i,e,s){var o,p=null!=a?a:{};return"\t\t\t\t\n"+(null!=(o=l.unless.call(p,null!=a?a.boolean:a,{name:"unless",hash:{},fn:t.program(23,i,0,e,s),inverse:t.noop,data:i}))?o:"")+"\n"+(null!=(o=l.if.call(p,null!=a?a.boolean:a,{name:"if",hash:{},fn:t.program(25,i,0,e,s),inverse:t.noop,data:i}))?o:"")+"\n"},23:function(t,a,l,n,i,e,s){var o,p,d=null!=a?a:{},u=l.helperMissing,r="function",c=t.escapeExpression,h=t.lambda;return'\t\t\t\t\t\t<li class="prop clearfix" data-fixture="'+c((p=null!=(p=l.fixture_id||(null!=a?a.fixture_id:a))?p:u,typeof p===r?p.call(d,{name:"fixture_id",hash:{},data:i}):p))+'" data-prop="'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'">\n\t\t\t\t\t\t\t<h3>'+c((p=null!=(p=l.name||(null!=a?a.name:a))?p:u,typeof p===r?p.call(d,{name:"name",hash:{},data:i}):p))+" "+c(h(null!=(o=null!=s[1]?s[1].home_team:s[1])?o.abbreviation:o,a))+" VS "+c(h(null!=(o=null!=s[1]?s[1].away_team:s[1])?o.abbreviation:o,a))+'</h3>\n\t\t\t\t\t\t\t<div class="opciones_prop tres_opciones clearfix">\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido local clearfix">\n\t\t\t\t\t\t\t\t\t<input type="radio" id="prop_under_'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" name="'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" value="pick-prop-'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'">\n\t\t\t\t\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t\t\t\t\t<label class="under_sel" for="prop_under_'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" >\n\t\t\t\t\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t\t\t\t\t<span class="iniciales">Menor</span>\n\t\t\t\t\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t\t\t\t</label>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="opcion_prop empate clearfix">\n\t\t\t\t\t\t\t\t\t<span>'+c((p=null!=(p=l.value||(null!=a?a.value:a))?p:u,typeof p===r?p.call(d,{name:"value",hash:{},data:i}):p))+'</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido visitante clearfix">\n\t\t\t\t\t\t\t\t\t<input type="radio" id="prop_over_'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" name="'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" value="pick-prop-'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'">\n\t\t\t\t\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t\t\t\t\t<label class="over_sel" for="prop_over_'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" >\n\t\t\t\t\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t\t\t\t\t<span class="iniciales">Mayor</span>\n\t\t\t\t\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div><!-- opciones_prop tres_opciones -->\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li><!-- opcion_prop -->\n\t\t\t\t\t\t\n'},25:function(t,a,l,n,i,e,s){var o,p,d=null!=a?a:{},u=l.helperMissing,r="function",c=t.escapeExpression,h=t.lambda;return'\t\t\t\t\t\t<li class="prop clearfix" data-fixture="'+c((p=null!=(p=l.fixture_id||(null!=a?a.fixture_id:a))?p:u,typeof p===r?p.call(d,{name:"fixture_id",hash:{},data:i}):p))+'" data-prop="'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'">\n\t\t\t\t\t\t\t<h3>'+c((p=null!=(p=l.name||(null!=a?a.name:a))?p:u,typeof p===r?p.call(d,{name:"name",hash:{},data:i}):p))+" "+c(h(null!=(o=null!=s[1]?s[1].home_team:s[1])?o.abbreviation:o,a))+" VS "+c(h(null!=(o=null!=s[1]?s[1].away_team:s[1])?o.abbreviation:o,a))+'</h3>\n\t\t\t\t\t\t\t<div class="opciones_prop dos_opciones clearfix">\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido local clearfix">\n\t\t\t\t\t\t\t\t\t<input type="radio" id="prop_under_'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" name="'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" value="pick-prop-'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'">\n\t\t\t\t\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t\t\t\t\t<label class="yes_sel" for="prop_under_'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" >\n\t\t\t\t\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t\t\t\t\t<span class="iniciales">Si</span>\n\t\t\t\t\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t\t\t\t</label>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido clearfix">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido visitante clearfix">\n\t\t\t\t\t\t\t\t\t<input type="radio" id="prop_over_'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" name="'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" value="pick-prop-'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'">\n\t\t\t\t\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t\t\t\t\t<label class="no_sel" for="prop_over_'+c((p=null!=(p=l.id||(null!=a?a.id:a))?p:u,typeof p===r?p.call(d,{name:"id",hash:{},data:i}):p))+'" >\n\t\t\t\t\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t\t\t\t\t<span class="iniciales">No</span>\n\t\t\t\t\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div><!-- opciones_prop dos_opciones -->\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li><!-- opcion_prop -->\n\t\t\t\t\t\t\n'},compiler:[7,">= 4.0.0"],main:function(t,a,l,n,i,e,s){var o,p,d=null!=a?a:{};return'\t<p class="instructions">Elige tus picks y guarda tu selección.</p>\n\t<h3>PARTIDOS</h3>\n\t<div class="opciones_partido clearfix">\n\t\t<span>LOCAL</span> <span>'+(null!=(o=l.if.call(d,null!=(o=null!=a?a.data:a)?o.sport_allow_ties:o,{name:"if",hash:{},fn:t.program(1,i,0,e,s),inverse:t.noop,data:i}))?o:"")+(null!=(o=l.blockHelperMissing.call(a,t.lambda(null!=(o=null!=(o=null!=(o=null!=a?a.data:a)?o.fixtures:o)?o[0]:o)?o.advantage:o,a),{name:"data.fixtures.0.advantage",hash:{},fn:t.program(3,i,0,e,s),inverse:t.noop,data:i}))?o:"")+"</span> <span>VISITANTE</span>\n\t</div><!-- opciones_partido -->\n"+(null!=(o=l.each.call(d,null!=(o=null!=a?a.data:a)?o.fixtures:o,{name:"each",hash:{},fn:t.program(5,i,0,e,s),inverse:t.noop,data:i}))?o:"")+'\t<div id="propsContainer" class="props clearfix clear_if_empty">\n\t\t<h3>PROPS</h3>\n\t\t<ul data-id="'+t.escapeExpression((p=null!=(p=l.id||(null!=a?a.id:a))?p:l.helperMissing,"function"==typeof p?p.call(d,{name:"id",hash:{},data:i}):p))+'" class="radio_group clearfix">\n\t\t\t\n'+(null!=(o=l.each.call(d,null!=(o=null!=a?a.data:a)?o.fixtures:o,{name:"each",hash:{},fn:t.program(21,i,0,e,s),inverse:t.noop,data:i}))?o:"")+"\t\n\t\t</ul>\n\t</div> <!-- props -->"},useData:!0,useDepths:!0})}();