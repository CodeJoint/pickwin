!function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["scoreboard"]=t({compiler:[7,">= 4.0.0"],main:function(t,a,l,n,e){var o,r=null!=a?a:{},s=l.helperMissing,d="function",c=t.escapeExpression;return'\t<div class="tab tab_posiciones clearfix">\n\t\t<table>\n\t\t\t<tr class="table_title">\n\t\t\t\t<th>POS</th>\n\t\t\t\t<th>JUGADOR</th>\n\t\t\t\t<th>ACIERTOS</th>\n\t\t\t\t<th>A GANAR</th>\n\t\t\t</tr>\n\t\t\t<tr class="player_info">\n\t\t\t\t<td>1</td>\n\t\t\t\t<td class="player"><img src="'+c((o=null!=(o=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?o:s,typeof o===d?o.call(r,{name:"cordova_full_path",hash:{},data:e}):o))+'images/profile_placeholder.png"> Lorem Ipsum 123</td>\n\t\t\t\t<td>12</td>\n\t\t\t\t<td class="ganar"><img src="'+c((o=null!=(o=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?o:s,typeof o===d?o.call(r,{name:"cordova_full_path",hash:{},data:e}):o))+'images/billete.png">$1,234</td>\n\t\t\t</tr>\n\t\t\t<tr class="player_info">\n\t\t\t\t<td>1</td>\n\t\t\t\t<td class="player"><img src="'+c((o=null!=(o=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?o:s,typeof o===d?o.call(r,{name:"cordova_full_path",hash:{},data:e}):o))+'images/profile_placeholder.png"> Lorem Ipsum 123</td>\n\t\t\t\t<td>12</td>\n\t\t\t\t<td class="ganar"><img src="'+c((o=null!=(o=l.cordova_full_path||(null!=a?a.cordova_full_path:a))?o:s,typeof o===d?o.call(r,{name:"cordova_full_path",hash:{},data:e}):o))+'images/billete.png">$1,234</td>\n\t\t\t</tr>\n\t\t</table>\n\t</div><!-- posiciones -->'},useData:!0})}();