!function(){var t=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["quiniela-games"]=t({1:function(t,l,a,n,i){return"EMP"},3:function(t,l,a,n,i){return"LÍNEA"},5:function(t,l,a,n,i,e,d){var p,s,o,u=null!=l?l:{},c=a.helperMissing,r="function",h=t.escapeExpression,f=a.blockHelperMissing,m=t.lambda,_='\t\t<ul data-id="'+h((s=null!=(s=a.id||(null!=l?l.id:l))?s:c,typeof s===r?s.call(u,{name:"id",hash:{},data:i}):s))+'" class="partido radio_group clearfix">\n\t\t\t<li class="opcion_partido local clearfix">\n';return s=null!=(s=a.finished||(null!=l?l.finished:l))?s:c,o={name:"finished",hash:{},fn:t.noop,inverse:t.program(6,i,0,e,d),data:i},p=typeof s===r?s.call(u,o):s,a.finished||(p=f.call(l,p,o)),null!=p&&(_+=p),_+='\t\t\t\t<div class="check"></div>\t\n\t\t\t\t<label class="local_sel" for="local_'+h((s=null!=(s=a.id||(null!=l?l.id:l))?s:c,typeof s===r?s.call(u,{name:"id",hash:{},data:i}):s))+'" >\n\t\t\t\t\t<img src="'+h((s=null!=(s=a.cordova_full_path||(null!=l?l.cordova_full_path:l))?s:c,typeof s===r?s.call(u,{name:"cordova_full_path",hash:{},data:i}):s))+'images/camisaverde.png">\n\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t<span class="iniciales">'+h(m(null!=(p=null!=l?l.home_team:l)?p.abbreviation:p,l))+" ",s=null!=(s=a.period||(null!=l?l.period:l))?s:c,o={name:"period",hash:{},fn:t.program(8,i,0,e,d),inverse:t.noop,data:i},p=typeof s===r?s.call(u,o):s,a.period||(p=f.call(l,p,o)),null!=p&&(_+=p),_+='</span>\n\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t</label>\n\t\t\t</li><!-- opcion_partido -->\n\t\t\t<li class="opcion_partido '+(null!=(p=a.if.call(u,null!=(p=null!=d[1]?d[1].data:d[1])?p.sport_allow_ties:p,{name:"if",hash:{},fn:t.program(10,i,0,e,d),inverse:t.noop,data:i}))?p:"")+' cierre clearfix">\n'+(null!=(p=a.if.call(u,null!=(p=null!=d[1]?d[1].data:d[1])?p.sport_allow_ties:p,{name:"if",hash:{},fn:t.program(12,i,0,e,d),inverse:t.noop,data:i}))?p:"")+(null!=(p=a.if.call(u,null!=l?l.advantage:l,{name:"if",hash:{},fn:t.program(14,i,0,e,d),inverse:t.noop,data:i}))?p:"")+"\t\t\t\t<span>Cierre: "+h((a.formatDate||l&&l.formatDate||c).call(u,null!=l?l.deadline:l,"lll",{name:"formatDate",hash:{},data:i}))+'</span>\n\t\t\t</li><!-- opcion_partido -->\n\t\t\t<li class="opcion_partido visitante clearfix">\n',s=null!=(s=a.finished||(null!=l?l.finished:l))?s:c,o={name:"finished",hash:{},fn:t.noop,inverse:t.program(19,i,0,e,d),data:i},p=typeof s===r?s.call(u,o):s,a.finished||(p=f.call(l,p,o)),null!=p&&(_+=p),_+='\t\t\t\t<div class="check"></div>\t\n\t\t\t\t<label class="away_sel" for="away_'+h((s=null!=(s=a.id||(null!=l?l.id:l))?s:c,typeof s===r?s.call(u,{name:"id",hash:{},data:i}):s))+'" >\n\t\t\t\t\t<img src="'+h((s=null!=(s=a.cordova_full_path||(null!=l?l.cordova_full_path:l))?s:c,typeof s===r?s.call(u,{name:"cordova_full_path",hash:{},data:i}):s))+'images/camisaazul.png">\n\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t<span class="iniciales">'+h(m(null!=(p=null!=l?l.away_team:l)?p.abbreviation:p,l))+" ",s=null!=(s=a.period||(null!=l?l.period:l))?s:c,o={name:"period",hash:{},fn:t.program(8,i,0,e,d),inverse:t.noop,data:i},p=typeof s===r?s.call(u,o):s,a.period||(p=f.call(l,p,o)),null!=p&&(_+=p),_+='</span>\n\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t</label>\t\t\t\t\t\t\n\t\t\t\t<div class="linea">\n',s=null!=(s=a.finished||(null!=l?l.finished:l))?s:c,o={name:"finished",hash:{},fn:t.program(21,i,0,e,d),inverse:t.noop,data:i},p=typeof s===r?s.call(u,o):s,a.finished||(p=f.call(l,p,o)),null!=p&&(_+=p),_+"\t\t\t\t</div><!-- linea -->\n\t\t\t</li><!-- opcion_partido -->\n\t\t</ul>\n\n"},6:function(t,l,a,n,i){var e,d=null!=l?l:{},p=a.helperMissing,s="function",o=t.escapeExpression;return'\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][id]" value="null">\n\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][fixture_id]" value="'+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'">\n\t\t\t\t\t<input type="hidden" class="missing_entry" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][entry_id]" value="null">\n\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][week_id]" value="'+o((e=null!=(e=a.week_id||(null!=l?l.week_id:l))?e:p,typeof e===s?e.call(d,{name:"week_id",hash:{},data:i}):e))+'">\n\t\t\t\t\t<input type="hidden" class="missing_pool" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][pool_id]" value="">\n\t\t\t\t\t<input type="radio" id="local_'+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][pick]" value="home">\n'},8:function(t,l,a,n,i){return'<i class="period">'+t.escapeExpression(t.lambda(l,l))+"</i>"},10:function(t,l,a,n,i){return" empate "},12:function(t,l,a,n,i){var e,d=null!=l?l:{},p=a.helperMissing,s="function",o=t.escapeExpression;return'\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][id]" value="null">\n\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][fixture_id]" value="'+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'">\n\t\t\t\t\t<input type="hidden" class="missing_entry" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][entry_id]" value="null">\n\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][week_id]" value="'+o((e=null!=(e=a.week_id||(null!=l?l.week_id:l))?e:p,typeof e===s?e.call(d,{name:"week_id",hash:{},data:i}):e))+'">\n\t\t\t\t\t<input type="hidden" class="missing_pool" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][pool_id]" value="">\n\t\t\t\t\t<input type="radio" id="tie_'+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][pick]" value="tie">\n\t\t\t\t\t<div class="check"></div>\n\t\t\t\t\t<label class="empate_sel" for="tie_'+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'" >\n\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t<span class="iniciales"></span>\n\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t</label>\t\t\n'},14:function(t,l,a,n,i){var e,d=null!=l?l:{},p=a.helperMissing;return'\t\t\t\t\t<span class="linea home">\n'+(null!=(e=(a.if_eq||l&&l.if_eq||p).call(d,null!=l?l.favorite:l,"home",{name:"if_eq",hash:{},fn:t.program(15,i,0),inverse:t.noop,data:i}))?e:"")+'\t\t\t\t\t</span>\n\t\t\t\t\t<span class="linea pd">\n'+(null!=(e=(a.if_eq||l&&l.if_eq||p).call(d,null!=l?l.favorite:l,"pd",{name:"if_eq",hash:{},fn:t.program(17,i,0),inverse:t.noop,data:i}))?e:"")+'\t\t\t\t\t</span>\n\t\t\t\t\t<span class="linea away">\n'+(null!=(e=(a.if_eq||l&&l.if_eq||p).call(d,null!=l?l.favorite:l,"away",{name:"if_eq",hash:{},fn:t.program(15,i,0),inverse:t.noop,data:i}))?e:"")+"\t\t\t\t\t</span>\n\t\t\t\t\t\n"},15:function(t,l,a,n,i){var e;return"\t\t\t\t\t\t\t<p>"+t.escapeExpression((e=null!=(e=a.advantage||(null!=l?l.advantage:l))?e:a.helperMissing,"function"==typeof e?e.call(null!=l?l:{},{name:"advantage",hash:{},data:i}):e))+"</p>\t\t\n"},17:function(t,l,a,n,i){return"\t\t\t\t\t\t\t<p>PD</p>\t\t\n"},19:function(t,l,a,n,i){var e,d=null!=l?l:{},p=a.helperMissing,s="function",o=t.escapeExpression;return'\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][id]" value="null">\n\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][fixture_id]" value="'+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'">\n\t\t\t\t\t<input type="hidden" class="missing_entry" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][entry_id]" value="null">\n\t\t\t\t\t<input type="hidden" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][week_id]" value="'+o((e=null!=(e=a.week_id||(null!=l?l.week_id:l))?e:p,typeof e===s?e.call(d,{name:"week_id",hash:{},data:i}):e))+'">\n\t\t\t\t\t<input type="hidden" class="missing_pool" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][pool_id]" value="">\n\t\t\t\t\t<input type="radio" id="away_'+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'" name="picks['+o((e=null!=(e=a.id||(null!=l?l.id:l))?e:p,typeof e===s?e.call(d,{name:"id",hash:{},data:i}):e))+'][pick]" value="away">\n'},21:function(t,l,a,n,i){var e;return"\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t"+t.escapeExpression((e=null!=(e=a.score_home||(null!=l?l.score_home:l))?e:a.helperMissing,"function"==typeof e?e.call(null!=l?l:{},{name:"score_home",hash:{},data:i}):e))+"\n\t\t\t\t\t\t</span>\n"},23:function(t,l,a,n,i,e,d){var p;return(null!=(p=a.each.call(null!=l?l:{},null!=l?l.props:l,{name:"each",hash:{},fn:t.program(24,i,0,e,d),inverse:t.noop,data:i}))?p:"")+"\t\t\t\t\n"},24:function(t,l,a,n,i,e,d){var p,s=null!=l?l:{};return"\t\t\t\t\n"+(null!=(p=a.unless.call(s,null!=l?l.boolean:l,{name:"unless",hash:{},fn:t.program(25,i,0,e,d),inverse:t.noop,data:i}))?p:"")+"\n"+(null!=(p=a.if.call(s,null!=l?l.boolean:l,{name:"if",hash:{},fn:t.program(27,i,0,e,d),inverse:t.noop,data:i}))?p:"")+"\n"},25:function(t,l,a,n,i,e,d){var p,s,o=null!=l?l:{},u=a.helperMissing,c="function",r=t.escapeExpression,h=t.lambda;return'\t\t\t\t\t\t<li class="prop clearfix" data-fixture="'+r((s=null!=(s=a.fixture_id||(null!=l?l.fixture_id:l))?s:u,typeof s===c?s.call(o,{name:"fixture_id",hash:{},data:i}):s))+'" data-prop="'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'">\n\t\t\t\t\t\t\t<h3>'+r((s=null!=(s=a.name||(null!=l?l.name:l))?s:u,typeof s===c?s.call(o,{name:"name",hash:{},data:i}):s))+" "+r(h(null!=(p=null!=d[1]?d[1].home_team:d[1])?p.abbreviation:p,l))+" VS "+r(h(null!=(p=null!=d[1]?d[1].away_team:d[1])?p.abbreviation:p,l))+'</h3>\n\t\t\t\t\t\t\t<div class="opciones_prop tres_opciones clearfix">\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido local clearfix">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][id]" value="null">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][fixture_id]" value="'+r((s=null!=(s=a.fixture_id||(null!=l?l.fixture_id:l))?s:u,typeof s===c?s.call(o,{name:"fixture_id",hash:{},data:i}):s))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" class="missing_entry" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][entry_id]" value="null">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][prop_id]" value="'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" class="missing_pool" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][pool_id]" value="">\n\t\t\t\t\t\t\t\t\t<input type="radio" id="prop_under_'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][pick]" value="under">\n\t\t\t\t\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t\t\t\t\t<label class="under_sel" for="prop_under_'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'" >\n\t\t\t\t\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t\t\t\t\t<span class="iniciales">Menor</span>\n\t\t\t\t\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t\t\t\t</label>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="opcion_prop empate clearfix">\n\t\t\t\t\t\t\t\t\t<span>'+r((s=null!=(s=a.value||(null!=l?l.value:l))?s:u,typeof s===c?s.call(o,{name:"value",hash:{},data:i}):s))+'</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido visitante clearfix">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][id]" value="null">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][fixture_id]" value="'+r((s=null!=(s=a.fixture_id||(null!=l?l.fixture_id:l))?s:u,typeof s===c?s.call(o,{name:"fixture_id",hash:{},data:i}):s))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" class="missing_entry" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][entry_id]" value="null">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][prop_id]" value="'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" class="missing_pool" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][pool_id]" value="">\n\t\t\t\t\t\t\t\t\t<input type="radio" id="prop_over_'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][pick]" value="over">\n\t\t\t\t\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t\t\t\t\t<label class="over_sel" for="prop_over_'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'" >\n\t\t\t\t\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t\t\t\t\t<span class="iniciales">Mayor</span>\n\t\t\t\t\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div><!-- opciones_prop tres_opciones -->\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li><!-- opcion_prop -->\n\t\t\t\t\t\t\n'},27:function(t,l,a,n,i,e,d){var p,s,o=null!=l?l:{},u=a.helperMissing,c="function",r=t.escapeExpression,h=t.lambda;return'\t\t\t\t\t\t<li class="prop clearfix" data-fixture="'+r((s=null!=(s=a.fixture_id||(null!=l?l.fixture_id:l))?s:u,typeof s===c?s.call(o,{name:"fixture_id",hash:{},data:i}):s))+'" data-prop="'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'">\n\t\t\t\t\t\t\t<h3>'+r((s=null!=(s=a.name||(null!=l?l.name:l))?s:u,typeof s===c?s.call(o,{name:"name",hash:{},data:i}):s))+" "+r(h(null!=(p=null!=d[1]?d[1].home_team:d[1])?p.abbreviation:p,l))+" VS "+r(h(null!=(p=null!=d[1]?d[1].away_team:d[1])?p.abbreviation:p,l))+'</h3>\n\t\t\t\t\t\t\t<div class="opciones_prop dos_opciones clearfix">\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido local clearfix">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][id]" value="null">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][fixture_id]" value="'+r((s=null!=(s=a.fixture_id||(null!=l?l.fixture_id:l))?s:u,typeof s===c?s.call(o,{name:"fixture_id",hash:{},data:i}):s))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" class="missing_entry" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][entry_id]" value="null">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][prop_id]" value="'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" class="missing_pool" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][pool_id]" value="">\n\t\t\t\t\t\t\t\t\t<input type="radio" id="prop_under_'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][pick]" value="1">\n\t\t\t\t\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t\t\t\t\t<label class="yes_sel" for="prop_under_'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'" >\n\t\t\t\t\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t\t\t\t\t<span class="iniciales">Si</span>\n\t\t\t\t\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t\t\t\t</label>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido clearfix">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="opcion_prop opcion_partido visitante clearfix">\n\t\t\t\t\t\t\t\t\t<input type="radio" id="prop_over_'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'" name="picks_props['+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'][pick]" value="0">\n\t\t\t\t\t\t\t\t\t<div class="check"></div>\t\n\t\t\t\t\t\t\t\t\t<label class="no_sel" for="prop_over_'+r((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===c?s.call(o,{name:"id",hash:{},data:i}):s))+'" >\n\t\t\t\t\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t\t\t\t\t<span class="iniciales">No</span>\n\t\t\t\t\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div><!-- opciones_prop dos_opciones -->\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li><!-- opcion_prop -->\n\t\t\t\t\t\t\n'},compiler:[7,">= 4.0.0"],main:function(t,l,a,n,i,e,d){var p,s,o=null!=l?l:{};return'\t<p class="instructions">Completa tus picks y guarda tu selección.</p>\n\t<h3>PARTIDOS</h3>\n\t<div class="opciones_partido clearfix">\n\t\t<span>LOCAL</span> <span>'+(null!=(p=a.if.call(o,null!=(p=null!=l?l.data:l)?p.sport_allow_ties:p,{name:"if",hash:{},fn:t.program(1,i,0,e,d),inverse:t.noop,data:i}))?p:"")+(null!=(p=a.blockHelperMissing.call(l,t.lambda(null!=(p=null!=(p=null!=(p=null!=l?l.data:l)?p.fixtures:p)?p[0]:p)?p.advantage:p,l),{name:"data.fixtures.0.advantage",hash:{},fn:t.program(3,i,0,e,d),inverse:t.noop,data:i}))?p:"")+"</span> <span>VISITANTE</span>\n\t</div><!-- opciones_partido -->\n"+(null!=(p=a.each.call(o,null!=(p=null!=l?l.data:l)?p.fixtures:p,{name:"each",hash:{},fn:t.program(5,i,0,e,d),inverse:t.noop,data:i}))?p:"")+'\t<div id="propsContainer" class="props clearfix clear_if_empty">\n\t\t<h3>PROPS</h3>\n\t\t<ul data-id="'+t.escapeExpression((s=null!=(s=a.id||(null!=l?l.id:l))?s:a.helperMissing,"function"==typeof s?s.call(o,{name:"id",hash:{},data:i}):s))+'" class="radio_group clearfix">\n\t\t\t\n'+(null!=(p=a.each.call(o,null!=(p=null!=l?l.data:l)?p.fixtures:p,{name:"each",hash:{},fn:t.program(23,i,0,e,d),inverse:t.noop,data:i}))?p:"")+"\t\n\t\t</ul>\n\t</div> <!-- props -->"},useData:!0,useDepths:!0})}();