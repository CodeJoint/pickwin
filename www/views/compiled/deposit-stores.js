!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["deposit-stores"]=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,i,s){return'\n	<div id="depositStores" class="content abonar abonar_tiendas">\n		<h3>FORMA DE PAGO</h3>\n		<div class="botones clearfix">\n			<a class="hook" data-resource="deposit" href="deposit.html">Tarjeta de crédito</a>\n			<a class="selected" >Tienda de conveniencia</a>\n		</div>\n		<ul class="botones_abono clearfix">\n			<li data-amount="1"><img src="images/billete.png">$25</li>\n			<li data-amount="2"><img src="images/billete.png">$50</li>\n			<li class="selected" data-amount="3"><img src="images/billete.png">$100</li>\n			<li data-amount="4"><img src="images/billete.png">$200</li>\n		</ul>\n		\n		<div class="abonar_form clearfix">	\n			<form id="depositStoresForm" method="POST" action="" >\n				\n				<input id="populate_value" type="hidden" name="amount" value="3">\n				<ul class="formas_pago clearfix">\n					<li><img src="images/openpay.png"></li>\n					<li><img src="images/securetrans.png"></li>\n					<li><img src="images/tienditas.png"></li>\n				</ul>\n				<p>¡IMPORTANTE!<br/>\n					Te enviaremos de forma gratuita por email y SMS tu código,<br/>\n					con el cual podrás pagar en tu tienda más cercana. <br/><br/>\n\n					1. Preséntale el CÓDIGO al cajero.<br/>\n					2. Realiza el PAGO en la tienda de tu elección.<br/>\n					3. ¡A JUGAR!<br/><br/>\n\n					NOTA: Las tiendas cobran una comisión de $8.00 al cliente que acude a pagar.\n				</p>\n				<div class="submit_holder">\n					<input type="submit" value="send">\n				</div>\n			</form>\n		</div>\n		<p class="legales">Consulta aquí tu tienda mas cercana: <br/>\n			Farmacias Benavides, Farmacias del Ahorro, Super One, El Asturiano,\n			El Vigilante, Farmacias La Original, Grupo Águila, A La Mano, Maxilana, Prendamex, Extra, Tiendas Mambo, El Gallo de la Laguna, Caja Solidaria Tamaulipas, Súper Prestamos Premier, Grupo Blyska, Peso Fácil,\n			GWV Inversiones, DNU, Financiera Forjadores, Venayuda, Grupo Pawn, Caja Cerro de la Silla, Paso Seguro, Servicio Prendarios del Sureste,\n			Indigo, Mexamed, Torcam, Akala, Especias Moy, Servimoney y Petrofe.\n		</p>\n	</div><!-- content -->\n'},useData:!0})}();