!function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["detail-quiniela"]=t({compiler:[7,">= 4.0.0"],main:function(t,a,l,n,i){var o,e,s=null!=a?a:{},p=l.helperMissing,c="function",d=t.escapeExpression;return'\n\t<div class="container clearfix">\n'+(null!=(o=t.invokePartial(n.header,a,{name:"header",data:i,indent:"\t\t",helpers:l,partials:n,decorators:t.decorators}))?o:"")+'\t\t\n\t\t<div class="content quiniela_single">\n\t\t\t<div class="registro_quiniela clearfix">\n\t\t\t\t<a href=""><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/cierre.png"></a>\n\t\t\t\t<a href=""><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/registrarse.png"></a>\n\t\t\t</div><!-- opciones registro -->\n\t\t\t<a class="link_wrapper" href="">\n\t\t\t\t<div class="quiniela quiniela_live soccer natural garantizado clearfix">\n\t\t\t\t\t<div class="quiniela_header clearfix">\n\t\t\t\t\t\t<div class="quiniela_iconos clearfix">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/natural.png">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/soccer.png">\n\t\t\t\t\t\t</div><!-- iconos -->\n\t\t\t\t\t\t<h2>5678 LOREM IPSUM DOLOR SIT AMET S12</h2>\n\t\t\t\t\t</div><!-- quiniela_header -->\n\t\t\t\t\t<div class="quiniela_content clearfix">\n\t\t\t\t\t\t<div class="quiniela_info clearfix">\n\t\t\t\t\t\t\t<span class="registros">REG: 1,234</span>\n\t\t\t\t\t\t\t<span class="cierre">CIERRE: 28.feb.2017</span>\n\t\t\t\t\t\t\t<span class="limite">Limitado a 1000 entradas</span>\n\t\t\t\t\t\t</div><!-- quiniela_info -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class="quiniela_entrada clearfix">\n\t\t\t\t\t\t\t<span class="titulo">ENTRADA</span>\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/billecoin.png">\n\t\t\t\t\t\t\t<span class="number">$1,234</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="quiniela_bolsa clearfix">\n\t\t\t\t\t\t\t<span class="titulo">BOLSA</span>\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/garantizado.png">\n\t\t\t\t\t\t\t<span class="number guarantee">$5,678</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!-- quiniela_content -->\n\t\t\t\t</div><!-- quiniela -->\n\t\t\t</a><!-- link_wrapper -->\n\n\t\t\t<div class="quinielas_dropdowns clearfix">\n\t\t\t\t\n\t\t\t\t\t<a href="">Copiar picks</a>\n\n\t\t\t\t\n\t\t\t\t\t<a href="">Registros</a>\n\t\t\t\n\t\t\t</div><!-- dropdowns -->\n\t\t\t<div class="partidos clearfix">\n\t\t\t\t<h3>PARTIDOS</h3>\n\t\t\t\t<div class="opciones_partido clearfix">\n\t\t\t\t\t<span>LOCAL</span>\n\t\t\t\t\t<span>EMPATE</span>\n\t\t\t\t\t<span>VISITA</span>\n\t\t\t\t</div><!-- opciones_partido -->\n\t\t\t\t<div class="partido clearfix">\n\t\t\t\t\t<div class="opcion_partido local clearfix">\n\t\t\t\t\t\t<input type="radio" name="ganador_uno" id="local">\n\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaverde.png">\n\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t<span class="iniciales">ABC</span>\n\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t<div class="linea">\n\t\t\t\t\t\t\t<span>(+4) 123</span>\n\t\t\t\t\t\t</div><!-- linea -->\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t\t<div class="opcion_partido cierre clearfix">\n\t\t\t\t\t\t<span>CIERRE: 28.feb.17</span>\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t\t<div class="opcion_partido visitante clearfix">\n\t\t\t\t\t\t<input type="radio" name="ganador_uno" id="visitante">\n\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaazul.png">\n\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t<span class="iniciales">ABC</span>\n\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t<div class="linea">\n\t\t\t\t\t\t\t<span>(+4) 123</span>\n\t\t\t\t\t\t</div><!-- linea -->\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t</div><!-- partido -->\n\t\t\t\t<div class="partido clearfix">\n\t\t\t\t\t<div class="opcion_partido local clearfix">\n\t\t\t\t\t\t<input type="radio" name="ganador_dos" id="local">\n\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisablanca.png">\n\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t<span class="iniciales">ABC</span>\n\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t<div class="linea">\n\t\t\t\t\t\t\t<span>(+4) 123</span>\n\t\t\t\t\t\t</div><!-- linea -->\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t\t<div class="opcion_partido empate cierre clearfix">\n\t\t\t\t\t\t<input type="radio" name="ganador_dos" id="empate">\n\t\t\t\t\t\t<span>CIERRE: 28.feb.17</span>\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t\t<div class="opcion_partido visitante clearfix">\n\t\t\t\t\t\t<input type="radio" name="ganador_dos" id="visitante">\n\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaazul.png">\n\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t<span class="iniciales">ABC</span>\n\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t<div class="linea">\n\t\t\t\t\t\t\t<span>(+4) 123</span>\n\t\t\t\t\t\t</div><!-- linea -->\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t</div><!-- partido -->\n\t\t\t\t<div class="partido clearfix">\n\t\t\t\t\t<div class="opcion_partido local clearfix">\n\t\t\t\t\t\t<input type="radio" name="ganador_tres" id="local">\n\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaamarilla.png">\n\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t<span class="iniciales">ABC</span>\n\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t<div class="linea">\n\t\t\t\t\t\t\t<span>(+4) 123</span>\n\t\t\t\t\t\t</div><!-- linea -->\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t\t<div class="opcion_partido empate cierre clearfix">\n\t\t\t\t\t\t<input type="radio" name="ganador_tres" id="empate">\n\t\t\t\t\t\t<span>CIERRE: 28.feb.17</span>\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t\t<div class="opcion_partido visitante clearfix">\n\t\t\t\t\t\t<input type="radio" name="ganador_tres" id="visitante">\n\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaroja.png">\n\t\t\t\t\t\t<div class="equipo">\n\t\t\t\t\t\t\t<span class="iniciales">ABC</span>\n\t\t\t\t\t\t</div><!-- equipo -->\n\t\t\t\t\t\t<div class="linea">\n\t\t\t\t\t\t\t<span>(+4) 123</span>\n\t\t\t\t\t\t</div><!-- linea -->\n\t\t\t\t\t</div><!-- opcion_partido -->\n\t\t\t\t</div><!-- partido -->\n\t\t\t</div><!-- partidos -->\n\t\t\t<div class="props clearfix">\n\t\t\t\t<h3>PROPS</h3>\n\t\t\t\t<div class="prop">\n\t\t\t\t\t<h3>¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliqua?</h3>\n\t\t\t\t\t<div class="opciones_prop dos_opciones clearfix">\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_uno" vlaue="si">\n\t\t\t\t\t\t\t<span>SI</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_uno" value="no">\n\t\t\t\t\t\t\t<span>NO</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t</div><!-- opciones_prop dos_opciones -->\n\t\t\t\t</div><!-- prop -->\n\t\t\t\t<div class="prop clearfix">\n\t\t\t\t\t<h3>¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliqua?</h3>\n\t\t\t\t\t<div class="opciones_prop tres_opciones clearfix">\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_dos" vlaue="ame">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaamarilla.png">\n\t\t\t\t\t\t\t<span>AME</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_dos" vlaue="caz">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaroja.png">\n\t\t\t\t\t\t\t<span>CAZ</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_dos" vlaue="gua">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaverde.png">\n\t\t\t\t\t\t\t<span>GUA</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t</div><!-- opciones_prop tres_opciones -->\n\t\t\t\t</div><!-- prop -->\n\t\t\t\t<div class="prop clearfix">\n\t\t\t\t\t<h3>¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliqua?</h3>\n\t\t\t\t\t<div class="opciones_prop cuatro_opciones clearfix">\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_tres" vlaue="ame">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaamarilla.png">\n\t\t\t\t\t\t\t<span>AME</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_tres" vlaue="caz">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaroja.png">\n\t\t\t\t\t\t\t<span>CAZ</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_tres" vlaue="gua">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaverde.png">\n\t\t\t\t\t\t\t<span>GUA</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t\t<div class="opcion_prop clearfix">\n\t\t\t\t\t\t\t<input type="radio" name="prop_tres" vlaue="nec">\n\t\t\t\t\t\t\t<img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/camisaazul.png">\n\t\t\t\t\t\t\t<span>NEC</span>\n\t\t\t\t\t\t</div><!-- opcion_prop clearfix -->\n\t\t\t\t\t</div><!-- opciones_prop cuatro_opciones -->\n\t\t\t\t</div><!-- prop -->\n\t\t\t</div><!-- props -->\n\t\t\t<div class="desempates clearfix">\n\t\t\t\t<h3>DESEMPATE</h3>\n\t\t\t\t\t<div class="desempate desempate_uno clearfix">\n\t\t\t\t\t\t<div class="desempate_left">\n\t\t\t\t\t\t\t<span>Marcador del último partido</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="desempate_input">\n\t\t\t\t\t\t\t<span>LOC</span>\n\t\t\t\t\t\t\t<input type="text" name="desempate_uno_local">\n\t\t\t\t\t\t\t<span>-</span>\n\t\t\t\t\t\t\t<input type="text" name="desempate_uno_visitante">\n\t\t\t\t\t\t\t<span>VIS</span>\n\t\t\t\t\t\t</div><!-- desempate_input -->\n\t\t\t\t\t</div><!-- desempate_uno -->\n\t\t\t\t\t<div class="desempate desempate_dos clearfix">\n\t\t\t\t\t\t<div class="desempate_left">\n\t\t\t\t\t\t\t<span>Minuto del primer gol</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="desempate_input">\n\t\t\t\t\t\t\t<input type="text" name="desempate_dos_minuto">\n\t\t\t\t\t\t</div><!-- desempate_input -->\n\t\t\t\t\t</div><!-- desempate_dos -->\n\t\t\t\t\t<div class="desempate desempate_tres clearfix">\n\t\t\t\t\t\t<div class="desempate_left">\n\t\t\t\t\t\t\t<span>¿Lorem ipsum dolor sit amet, conse ctetur adipiscing elit?</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="desempate_input">\n\t\t\t\t\t\t\t<span>SI</span>\n\t\t\t\t\t\t\t<input type="radio" name="desempate_tres" value="si">\n\t\t\t\t\t\t\t<span>NO</span>\n\t\t\t\t\t\t\t<input type="radio" name="desempate_tres" value="no">\n\t\t\t\t\t\t</div><!-- desempate_input -->\n\t\t\t\t\t</div><!-- desempate_tres -->\n\t\t\t</div><!-- dempates -->\n\n\t\t</div><!-- content -->\n\t\t<div class="menu clearfix">\n\t\t\t<ul>\n\t\t\t\t<li class="menu_lobby selected"><a href=""></a></li>\n\t\t\t\t<li class="menu_quinielas"><a href=""></a></li>\n\t\t\t\t<li class="menu_privadas"><a href=""></a></li>\n\t\t\t\t<li class="menu_perfil"><a href=""></a></li>\n\t\t\t\t<li class="menu_abonar"><a href=""></a></li>\n\t\t\t</ul>\n\t\t</div><!-- menu -->\n\t</div><!-- container -->\n\t\t<div class="filtros_wrapper">\n\t\t\t<div class="filtros overlay clearfix">\n\t\t\t\t<div class="filtros_moneda clearfix">\n\t\t\t\t\t<h3>MONEDA</h3>\n\t\t\t\t\t<ul class="clearfix">\n\t\t\t\t\t\t<li data="todos_moneda"><h3>TODOS</h3></li>\n\t\t\t\t\t\t<li data="money_moneda"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/billete.png"></li>\n\t\t\t\t\t\t<li data="pickcoin_moneda"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/pickcoin.png"></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class="clearfix" id="money_moneda">\n\t\t\t\t\t\t<li data="money_moneda"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/billete.png"></li>\n\t\t\t\t\t\t<li data="money_moneda"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/bill2.png"></li>\n\t\t\t\t\t\t<li data="money_moneda"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/bill3.png"></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class="clearfix" id="pickcoin_moneda">\n\t\t\t\t\t\t<li data="money_moneda"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/pickcoin.png"></li>\n\t\t\t\t\t\t<li data="money_moneda"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/pic2.png"></li>\n\t\t\t\t\t\t<li data="money_moneda"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/pic3.png"></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- filtros_moneda -->\n\t\t\t\t<div class="filtros_deporte clearfix">\n\t\t\t\t\t<h3>DEPORTE</h3>\n\t\t\t\t\t<ul class="clearfix">\n\t\t\t\t\t\t<li data="todos_deporte"><h3>TODOS</h3></li>\n\t\t\t\t\t\t<li data="deporte_soccer"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/soccer.png"></li>\n\t\t\t\t\t\t<li data="deporte_basket"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/basket.png"></li>\n\t\t\t\t\t\t<li data="deporte_baseball"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/baseball.png"></li>\n\t\t\t\t\t\t<li data="deporte_nfl"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/nfl.png"></li>\n\t\t\t\t\t\t<li data="deporte_golf"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/golf.png"></li>\n\t\t\t\t\t\t<li data="deporte_tennis"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/tennis.png"></li>\n\t\t\t\t\t\t<li data="deporte_f1"><img src="'+d((e=null!=(e=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?e:p,typeof e===c?e.call(s,{name:"cordova_full_path",hash:{},data:i}):e))+'images/f1.png"></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class="clearfix" id="deporte_soccer">\n\t\t\t\t\t\t<li data="soccer_todas"><span>Todas</span></li>\n\t\t\t\t\t\t<li data="soccer_ligamx"><span>Liga MX</span></li>\n\t\t\t\t\t\t<li data="soccer_copamx"><span>Copa MX</span></li>\n\t\t\t\t\t\t<li data="soccer_laliga"><span>La Liga</span></li>\n\t\t\t\t\t\t<li data="soccer_premier"><span>Premier</span></li>\n\t\t\t\t\t\t<li class="selected" data="soccer_champions"><span>Champions</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- filtros_deporte -->\n\t\t\t\t<div class="filtros_tipo clearfix">\n\t\t\t\t\t<h3>TIPO</h3>\n\t\t\t\t\t<ul class="clearfix">\n\t\t\t\t\t\t<li data="tipo_abiertas"><h3>Abiertas</h3></li>\n\t\t\t\t\t\t<li data="tipo_limitadas"><h3>Cupo limitado</h3></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- filtros_deporte -->\n\t\t\t\t<div class="filtros_estado clearfix">\n\t\t\t\t\t<h3>ESTADO</h3>\n\t\t\t\t\t<ul class="clearfix">\n\t\t\t\t\t\t<li data="estado_procimas"><h3>Próximas</h3></li>\n\t\t\t\t\t\t<li data="estado_live"><h3>En curso</h3></li>\n\t\t\t\t\t\t<li data="estado_finalizadas"><h3>Finalizadas</h3></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- filtros_deporte -->\n\t\t\t</div><!-- filtros overlay -->\n\t\t</div>'},usePartial:!0,useData:!0})}();