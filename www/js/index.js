var serviceURL = "http://localhost/ajax/";
var datos;

function mostrar(destino) {
	window.frames[0].location = destino;
}

$('#pagina').bind('pageinit', function(event) {
	getDatos();
});

function getDatos() {
	$.getJSON(serviceURL + 'carga_datoscampana.php', function(data) {
		datos = data.items;
		$.each(datos, function(index, datos) {
			$('#id_footer').append('<p><table align="center">'+
				'<tr>'+
					'<td>Fecha Inicio:</td>'+
					'<td>'+datos.fechainicio+'</td>'+
					'<td>|</td>'+
					'<td>Fecha Fin:</td>'+
					'<td>'+datos.fechafin+'</td>'+
				'<tr>'+
			'</table></p>'
			);
		});
		
		$.each(datos, function(index, datos) {
			$('#bottomsheet').append(
				'<div class="row around-xs">'+
				'<div class="col-xs-auto" id="id_nuevo">'+
					"<a href='#' onclick=mostrar('Pedidos/Pedido_Nuevo.html') "+
					'class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" '+
					'data-ajax="false"><i class="zmdi zmdi-assignment zmd-2x"></i><strong>Nuevo</strong></a>'+
				'</div>'+
				'<div class="col-xs-auto" id="id_renovacion">'+
					"<a href='#' onclick=mostrar('Pedidos/Pedido_Renovacion.html') "+
					'class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" '+
					'data-ajax="false"><i class="zmdi zmdi-fire zmd-2x"></i><strong>Renovación</strong></a>'+
				'</div>'+
				'<div class="col-xs-auto" id="id_baja">'+
					"<a href='Pedidos/Pedido_DarBajan.html' "+
					'class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" '+
					'data-ajax="false"><i class="zmdi zmdi-cloud-outline-alt zmd-2x"></i><strong>Dar de Baja</strong></a>'+
					'</div>'+
				'<div class="col-xs-auto" id="id_portabilidad">'+
					"<a href='#'' "+
					'class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" '+
					'data-ajax="false"><i class="zmdi zmdi-format-color-fill zmd-2x"></i><strong>Portabilidad</strong></a>'+
				'</div>'
			);
			if(datos.nuevo == 0){
				$('#id_nuevo').hide();
			}
			if(datos.renovar == 0){
				$('#id_renovacion').hide();
			}
			if(datos.baja == 0){
				$('#id_baja').hide();
			}
			if(datos.portabilidad == 0){
				$('#id_portabilidad').hide();
			}
		});

	});
}

	

