!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["detail-quiniela"]=a({1:function(a,n,l,e,i){var s,r=null!=n?n:{},t=l.helperMissing,o="function",c=a.escapeExpression;return'				<div class="registro_quiniela clearfix">\n					<a class="hook" data-resource="lobby" href="lobby.html"><img src="'+c((s=null!=(s=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?s:t,typeof s===o?s.call(r,{name:"cordova_full_path",hash:{},data:i}):s))+'images/cierre.png"></a>\n					<a id="reg_into_game"><img src="'+c((s=null!=(s=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?s:t,typeof s===o?s.call(r,{name:"cordova_full_path",hash:{},data:i}):s))+'images/registrarse.png"></a>\n				</div><!-- opciones registro -->\n'},3:function(a,n,l,e,i){return"quiniela_open"},5:function(a,n,l,e,i){return"quiniela_live"},7:function(a,n,l,e,i){return"quiniela_closed"},9:function(a,n,l,e,i){return" natural "},11:function(a,n,l,e,i){var s;return'								<img src="'+a.escapeExpression((s=null!=(s=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?s:l.helperMissing,"function"==typeof s?s.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):s))+'images/linea.png">\n'},13:function(a,n,l,e,i){var s;return'								<img src="'+a.escapeExpression((s=null!=(s=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?s:l.helperMissing,"function"==typeof s?s.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):s))+'images/natural.png">\n'},15:function(a,n,l,e,i){return"CIERRE"},17:function(a,n,l,e,i){return"CERRÓ"},19:function(a,n,l,e,i){var s;return'								<span class="limite">Limitado a '+a.escapeExpression(a.lambda(null!=(s=null!=n?n.data:n)?s.max_entries:s,n))+" entradas</span>\n"},21:function(a,n,l,e,i){return'								<span class="limite">FINALIZÓ</span>\n'},23:function(a,n,l,e,i){var s;return'								<img src="'+a.escapeExpression((s=null!=(s=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?s:l.helperMissing,"function"==typeof s?s.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):s))+'images/billecoin.png">\n'},25:function(a,n,l,e,i){var s;return'								<img src="'+a.escapeExpression((s=null!=(s=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?s:l.helperMissing,"function"==typeof s?s.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):s))+'images/pickcoin.png">\n'},27:function(a,n,l,e,i){var s;return'								<img src="'+a.escapeExpression((s=null!=(s=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?s:l.helperMissing,"function"==typeof s?s.call(null!=n?n:{},{name:"cordova_full_path",hash:{},data:i}):s))+'images/garantizado.png">\n'},29:function(a,n,l,e,i){return'				<div class="quinielas_dropdowns clearfix">\n						<a href="">Copiar picks</a>\n						<a href="">Registros</a>			\n				</div><!-- dropdowns -->\n'},31:function(a,n,l,e,i){var s;return'				<div class="desempates clearfix">\n					<h3>DESEMPATE</h3>\n'+(null!=(s=l.blockHelperMissing.call(n,a.lambda(null!=(s=null!=n?n.data:n)?s.tiebreakers:s,n),{name:"data.tiebreakers",hash:{},fn:a.program(32,i,0),inverse:a.noop,data:i}))?s:"")+"\n				</div><!-- dempates -->\n"},32:function(a,n,l,e,i){var s,r=null!=n?n:{},t=l.helperMissing;return(null!=(s=(l.if_eq||n&&n.if_eq||t).call(r,null!=n?n.type:n,"score",{name:"if_eq",hash:{},fn:a.program(33,i,0),inverse:a.noop,data:i}))?s:"")+"\n"+(null!=(s=(l.if_eq||n&&n.if_eq||t).call(r,null!=n?n.type:n,"number",{name:"if_eq",hash:{},fn:a.program(35,i,0),inverse:a.noop,data:i}))?s:"")+"\n"+(null!=(s=(l.if_eq||n&&n.if_eq||t).call(r,null!=n?n.type:n,"other",{name:"if_eq",hash:{},fn:a.program(37,i,0),inverse:a.noop,data:i}))?s:"")},33:function(a,n,l,e,i){var s;return'								<div class="desempate desempate_uno clearfix">\n									<div class="desempate_left">\n										<span>'+a.escapeExpression((s=null!=(s=l.label||(null!=n?n.label:n))?s:l.helperMissing,"function"==typeof s?s.call(null!=n?n:{},{name:"label",hash:{},data:i}):s))+'</span>\n									</div>\n									<div class="desempate_input">\n										<span>LOC</span>\n										<input type="text" name="desempate_uno_local">\n										<span>-</span>\n										<input type="text" name="desempate_uno_visitante">\n										<span>VIS</span>\n									</div><!-- desempate_input -->\n								</div><!-- desempate_uno -->\n'},35:function(a,n,l,e,i){var s;return'								<div class="desempate desempate_dos clearfix">\n									<div class="desempate_left">\n										<span>'+a.escapeExpression((s=null!=(s=l.label||(null!=n?n.label:n))?s:l.helperMissing,"function"==typeof s?s.call(null!=n?n:{},{name:"label",hash:{},data:i}):s))+'</span>\n									</div>\n									<div class="desempate_input">\n										<input type="text" name="desempate_dos_minuto">\n									</div><!-- desempate_input -->\n								</div><!-- desempate_dos -->\n'},37:function(a,n,l,e,i){var s;return'								<div class="desempate desempate_tres clearfix">\n									<div class="desempate_left">\n										<span>'+a.escapeExpression((s=null!=(s=l.label||(null!=n?n.label:n))?s:l.helperMissing,"function"==typeof s?s.call(null!=n?n:{},{name:"label",hash:{},data:i}):s))+'</span>\n									</div>\n									<div class="desempate_input">\n										<span>SI</span>\n										<input type="radio" name="desempate_tres" value="si">\n										<span>NO</span>\n										<input type="radio" name="desempate_tres" value="no">\n									</div><!-- desempate_input -->\n								</div><!-- desempate_tres -->\n'},39:function(a,n,l,e,i){var s,r,t=null!=n?n:{},o=l.helperMissing,c="function",p=a.escapeExpression;return'				<div id="registerNow" class="quiniela_registro_overlay content clearfix" style="display: none;">\n					<div class="quiniela_registro clearfix">\n						<div class="quiniela_header clearfix">\n							<div class="quiniela_iconos clearfix">\n								<img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/natural.png">\n								<img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/soccer.png">\n							</div><!-- iconos -->\n							<h2>'+p((r=null!=(r=l.name_replaced||(null!=n?n.name_replaced:n))?r:o,typeof r===c?r.call(t,{name:"name_replaced",hash:{},data:i}):r))+'</h2>\n						</div><!-- quiniela_header -->\n						<div class="no_registros clearfix">\n							<span class="pregunta">¿Cuántos registros quieres para esta quiniela?</span>\n							<select name="no_registros">\n								<option>1</option>\n								<option>2</option>\n								<option>3</option>\n								<option>4</option>\n							</select>\n						</div><!-- no_registros -->\n						<div class="copiar_picks clearfix">\n							<span class="pregunta">Utilizar los picks elegidos para todos los registros</span>\n							<input type="checkbox">\n						</div><!-- no_registros -->\n						<div class="balance clearfix">\n							<div class="disponible clearfix">\n								<p>Balance disponible:</p>\n								<div class="disponible_dinero clearfix">\n									<img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/billete.png">\n									<p>$'+p((l.formatCurrency||n&&n.formatCurrency||o).call(t,null!=(s=null!=n?n.me:n)?s.balanceReal:s,{name:"formatCurrency",hash:{},data:i}))+' MXN</p>\n								</div><!-- disponible dinero -->\n								<div class="disponible_coins">\n									<img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/pickcoin.png">\n									<p>'+p((l.formatCurrency||n&&n.formatCurrency||o).call(t,null!=(s=null!=n?n.me:n)?s.balancePc:s,{name:"formatCurrency",hash:{},data:i}))+'</p>\n								</div><!-- disponible coins -->\n							</div><!-- disponible -->\n							<div class="descontaran clearfix">\n								<p>Se descontarán:</p>\n								<div class="descontaran_dinero">\n									<img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/billete.png">\n									<p>$11 MXN</p>\n								</div><!-- descontaran dinero -->\n								<div class="descontaran_coins">\n									<img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/pickcoin.png">\n									<p>0</p>\n								</div><!-- descontaran coins -->\n							</div><!-- descontaran -->\n							<div class="total clearfix">\n								<p>Entrada:</p>\n								<div class="total_dinero">\n									<img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/billete.png">\n									<p>$11 MXN + $0 comisión</p>\n								</div><!-- total dinero -->\n								<div class="total_coins">\n									<img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/pickcoin.png">\n									<p>0 + 0 comisión</p>\n								</div><!-- total coins -->\n							</div><!-- total -->\n						</div><!-- balance -->\n\n						<div class="botones clarfix">\n							<a id="closeRegister"><img src="'+p((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:o,typeof r===c?r.call(t,{name:"cordova_full_path",hash:{},data:i}):r))+'images/regresar.png"></a>\n							<input type="submit" id="sendRegister">\n						</div>\n					</div><!-- quiniela-registro -->\n\n				</div><!-- quiniela_registro_overlay -->\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,i){var s,r,t=a.lambda,o=a.escapeExpression,c=l.blockHelperMissing,p=null!=n?n:{},d=l.helperMissing,u="function";return'\n	<div class="container clearfix">\n'+(null!=(s=a.invokePartial(e.header,n,{name:"header",data:i,indent:"		",helpers:l,partials:e,decorators:a.decorators}))?s:"")+'		<div id="detailQuiniela" data-id="'+o(t(null!=(s=null!=n?n.data:n)?s.id:s,n))+'" class="content quiniela_single clearfix">\n'+(null!=(s=c.call(n,t(null!=(s=null!=n?n.data:n)?s.closed:s,n),{name:"data.closed",hash:{},fn:a.noop,inverse:a.program(1,i,0),data:i}))?s:"")+'			<a class="link_wrapper" href="">\n				<div class="quiniela\n				'+(null!=(s=l["if"].call(p,null!=(s=null!=n?n.data:n)?s.upcoming:s,{name:"if",hash:{},fn:a.program(3,i,0),inverse:a.noop,data:i}))?s:"")+" \n				"+(null!=(s=l["if"].call(p,null!=(s=null!=n?n.data:n)?s.live:s,{name:"if",hash:{},fn:a.program(5,i,0),inverse:a.noop,data:i}))?s:"")+" \n				"+(null!=(s=(l.if_eq||n&&n.if_eq||d).call(p,null!=(s=null!=n?n.data:n)?s.status:s,"live",{name:"if_eq",hash:{},fn:a.program(5,i,0),inverse:a.noop,data:i}))?s:"")+" \n				"+(null!=(s=l["if"].call(p,null!=(s=null!=n?n.data:n)?s.closed:s,{name:"if",hash:{},fn:a.program(7,i,0),inverse:a.noop,data:i}))?s:"")+" "+o(t(null!=(s=null!=(s=null!=n?n.data:n)?s.sport:s)?s.name:s,n))+"\n				"+(null!=(s=(l.if_eq||n&&n.if_eq||d).call(p,null!=(s=null!=n?n.data:n)?s.point_format:s,"natural",{name:"if_eq",hash:{},fn:a.program(9,i,0),inverse:a.noop,data:i}))?s:"")+' garantizado clearfix">\n					<div class="quiniela_header clearfix">\n						<div class="quiniela_iconos clearfix">\n'+(null!=(s=(l.if_eq||n&&n.if_eq||d).call(p,null!=(s=null!=n?n.data:n)?s.point_format:s,"line",{name:"if_eq",hash:{},fn:a.program(11,i,0),inverse:a.noop,data:i}))?s:"")+(null!=(s=(l.if_eq||n&&n.if_eq||d).call(p,null!=(s=null!=n?n.data:n)?s.point_format:s,"natural",{name:"if_eq",hash:{},fn:a.program(13,i,0),inverse:a.noop,data:i}))?s:"")+'							<img src="'+o((r=null!=(r=l.cordova_full_path||(null!=n?n.cordova_full_path:n))?r:d,typeof r===u?r.call(p,{name:"cordova_full_path",hash:{},data:i}):r))+"images/"+o(t(null!=(s=null!=(s=null!=n?n.data:n)?s.sport:s)?s.icon:s,n))+'.png">\n						</div><!-- iconos -->\n						<h2>'+o((r=null!=(r=l.name_replaced||(null!=n?n.name_replaced:n))?r:d,typeof r===u?r.call(p,{name:"name_replaced",hash:{},data:i}):r))+'</h2>\n					</div><!-- quiniela_header -->\n					<div class="quiniela_content clearfix">\n\n						<div class="quiniela_info clearfix">\n							<span class="registros">REG: '+o(t(null!=(s=null!=n?n.data:n)?s.entry_count:s,n))+'</span>\n							<span class="cierre">'+(null!=(s=l["if"].call(p,null!=(s=null!=n?n.data:n)?s.closed:s,{name:"if",hash:{},fn:a.noop,inverse:a.program(15,i,0),data:i}))?s:"")+(null!=(s=l["if"].call(p,null!=(s=null!=n?n.data:n)?s.closed:s,{name:"if",hash:{},fn:a.program(17,i,0),inverse:a.noop,data:i}))?s:"")+": "+o((l.formatDate||n&&n.formatDate||d).call(p,null!=(s=null!=n?n.data:n)?s.deadline_tz:s,{name:"formatDate",hash:{},data:i}))+"</span>\n"+(null!=(s=c.call(n,t(null!=(s=null!=n?n.data:n)?s.limited_capacity:s,n),{name:"data.limited_capacity",hash:{},fn:a.program(19,i,0),inverse:a.noop,data:i}))?s:"")+(null!=(s=c.call(n,t(null!=(s=null!=n?n.data:n)?s.closed:s,n),{name:"data.closed",hash:{},fn:a.program(21,i,0),inverse:a.noop,data:i}))?s:"")+'						</div><!-- quiniela_info -->\n						<div class="quiniela_entrada clearfix">\n							<span class="titulo">ENTRADA</span>\n'+(null!=(s=(l.if_eq||n&&n.if_eq||d).call(p,null!=(s=null!=n?n.data:n)?s.entry_currency:s,"real",{name:"if_eq",hash:{},fn:a.program(23,i,0),inverse:a.noop,data:i}))?s:"")+(null!=(s=(l.if_eq||n&&n.if_eq||d).call(p,null!=(s=null!=n?n.data:n)?s.entry_currency:s,"pickcoin",{name:"if_eq",hash:{},fn:a.program(25,i,0),inverse:a.noop,data:i}))?s:"")+'							<span class="number">$'+o((l.formatCurrency||n&&n.formatCurrency||d).call(p,null!=(s=null!=n?n.data:n)?s.entry_fee:s,{name:"formatCurrency",hash:{},data:i}))+'</span>\n						</div>\n						<div class="quiniela_bolsa clearfix">\n							<span class="titulo">BOLSA</span>\n'+(null!=(s=l["if"].call(p,null!=(s=null!=n?n.data:n)?s.guaranteed_prize:s,{name:"if",hash:{},fn:a.program(27,i,0),inverse:a.noop,data:i}))?s:"")+'							<span class="number">$'+o((l.formatCurrency||n&&n.formatCurrency||d).call(p,null!=(s=null!=n?n.data:n)?s.available:s,{name:"formatCurrency",hash:{},data:i}))+"</span>\n						</div>\n					</div><!-- quiniela_content -->\n				</div><!-- quiniela -->\n			</a><!-- link_wrapper -->\n"+(null!=(s=c.call(n,t(null!=(s=null!=n?n.data:n)?s.closed:s,n),{name:"data.closed",hash:{},fn:a.noop,inverse:a.program(29,i,0),data:i}))?s:"")+'\n			<div id="insertPartidos" class="partidos clearfix">\n\n				\n			</div><!-- partidos -->\n			\n'+(null!=(s=l["if"].call(p,null!=(s=null!=n?n.data:n)?s.tiebreakers:s,{name:"if",hash:{},fn:a.program(31,i,0),inverse:a.noop,data:i}))?s:"")+"		\n"+(null!=(s=c.call(n,t(null!=(s=null!=n?n.data:n)?s.closed:s,n),{name:"data.closed",hash:{},fn:a.noop,inverse:a.program(39,i,0),data:i}))?s:"")+"		</div><!-- content -->\n"+(null!=(s=a.invokePartial(e.footer,n,{name:"footer",data:i,indent:"		",helpers:l,partials:e,decorators:a.decorators}))?s:"")+"	</div><!-- container -->\n"+(null!=(s=a.invokePartial(e.filters,n,{name:"filters",data:i,indent:"	",helpers:l,partials:e,decorators:a.decorators}))?s:"")},usePartial:!0,useData:!0})}();